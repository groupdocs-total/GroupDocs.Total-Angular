import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {AnnotationConfigService} from "./annotation-config.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ClickOutsideModule} from "ng-click-outside";
import {AnnotationAppComponent} from './annotation-app.component';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {AnnotationComponent} from './annotation/annotation.component';
import {ActiveAnnotationService} from "./active-annotation.service";
import {RemoveAnnotationService} from "./remove-annotation.service";
import {CommentAnnotationService} from "./comment-annotation.service";
import {CommentPanelComponent} from './comment-panel/comment-panel.component';
import {CommentComponent} from './comment/comment.component';
import {CreateCommentComponent} from './create-comment/create-comment.component';

export function initializeApp(annotationConfigService: AnnotationConfigService) {
  const result = () => annotationConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [AnnotationAppComponent, AnnotationComponent, CommentPanelComponent, CommentComponent, CreateCommentComponent,
  ],
  exports: [CommonComponentsModule, AnnotationAppComponent, AnnotationComponent, CommentPanelComponent, CommentComponent, CreateCommentComponent],
  imports:
    [CommonModule,
      CommonComponentsModule,
      HttpClientModule,
      FontAwesomeModule,
      ClickOutsideModule],
  providers:
    [
      ConfigService,
      AnnotationConfigService,
      ActiveAnnotationService,
      RemoveAnnotationService,
      CommentAnnotationService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptorService,
        multi: true
      },
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [AnnotationConfigService], multi: true
      },
      LoadingMaskService,
      {
        provide: HTTP_INTERCEPTORS,
        useFactory: setupLoadingInterceptor,
        multi: true,
        deps: [LoadingMaskService]
      }
    ],
  entryComponents: [AnnotationComponent],
})

export class AnnotationModule {
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: AnnotationModule
    };
  }
}
