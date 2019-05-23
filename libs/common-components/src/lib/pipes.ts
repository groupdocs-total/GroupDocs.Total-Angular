import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})
export class SanitizeHtmlPipe {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

@Pipe({name: 'safeResourceHtml'})
export class SanitizeResourceHtmlPipe {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}

@Pipe({name: 'safeStyle'})
export class SanitizeStylePipe {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustStyle(html);
  }
}

@Pipe({name: 'highlight'})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: string, args: string): any {
    if (!args) {
      return value;
    }
    let re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    return value.replace(re, "<span class='gd-highlight'>$&</span>");
  }
}
