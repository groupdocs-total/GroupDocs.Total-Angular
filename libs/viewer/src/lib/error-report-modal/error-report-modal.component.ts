import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { ExceptionMessageService } from '@groupdocs.examples.angular/common-components';
import { ViewerService } from '../viewer.service';
import { ForumCategory } from './forum-category';
import { ForumPostRequest } from './forum-post-request';
import { ForumPostResponse } from './forum-post-response';

// Current window view  - report error view (default),  if post success - successprot
enum CurrentWindowView
{
  ReportErrorView,
  SuccessPostView,
  PostFailedView    
}

@Component({
  selector: 'gd-error-report-window',
  templateUrl: './error-report-modal.component.html',
  styleUrls: ['./error-report-modal.component.less']
})
export class ErrorReportModalComponent 
{
  httpEvent: HttpEvent<any>;
  message: string;
  currentWindowMode: CurrentWindowView = CurrentWindowView.ReportErrorView;
  
  Email: string;
  TopicLink: string;
  PostError: string;
  PostIsPrivate: boolean = true;
  WindowTitle: string = "Error occured";
  
  public windowView: typeof CurrentWindowView = CurrentWindowView;

  constructor(messageService: ExceptionMessageService, private viewerService: ViewerService) {

    messageService.httpEventChange.subscribe(httpEvent => {
          this.httpEvent = httpEvent;

          if (this.httpEvent instanceof HttpErrorResponse)
          {
              this.message = this.httpEvent.message;
          }
        }
      );
  }

  emailIsValid():boolean
  {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(this.Email).toLowerCase());
  }
   
  reportError()
  {
    if (this.emailIsValid())
    {

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      var request = new ForumPostRequest();
      request.CategoryId = ForumCategory.Viewer;
      request.Email = this.Email;
      request.IsPrivatePost = this.PostIsPrivate;
      request.UserName = this.Email.split('@')[0];
      request.IsSendNotification = true;

      var fileParam = urlParams.get('file');

      if (fileParam) 
      {
        request.FolderPath = urlParams.get('file');;
      }

      if (this.httpEvent instanceof HttpErrorResponse)
      {
        var httpErrorResponse = (this.httpEvent as HttpErrorResponse);

        request.Message =  request.ExceptionMessage = httpErrorResponse.error.exceptionMessage;
        request.InnerExceptionMessage = httpErrorResponse.error.innerExceptionMessage;
        request.OriginalUrl = httpErrorResponse.url;

        if (httpErrorResponse.error.exceptionMessage == undefined)
        {
          request.Message =  request.ExceptionMessage = httpErrorResponse.error.message;
        }

      }else
      {
        request.Message = "Unknown error "  + (this.httpEvent == null ? "" : this.httpEvent.type.toString());
      }

      request.Title = "Viewer issue - " + request.Message + " "+ new Date().toISOString();
      this.viewerService.reportError(request).subscribe((data: ForumPostResponse) => {
          if (data == undefined || data == null)
          {
            this.PostError = "Unknown error";  
            this.currentWindowMode = CurrentWindowView.PostFailedView;
          }else if ((data.error!="" && data.error != null))
          {
            this.PostError = data.error;  
            this.currentWindowMode = CurrentWindowView.PostFailedView;
          }else if (data.url!="" && data.url != null)
          {
            this.TopicLink = data.url;
            this.WindowTitle = "Error reported!";
            this.currentWindowMode = CurrentWindowView.SuccessPostView;
          }else
          {
            this.PostError = "Unknown error";  
            this.currentWindowMode = CurrentWindowView.PostFailedView;
          }
      });
    }
  }
}
