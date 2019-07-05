import { PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class SanitizeHtmlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(html: string): SafeHtml;
}
export declare class SanitizeResourceHtmlPipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(html: string): SafeHtml;
}
export declare class SanitizeStylePipe implements PipeTransform {
    private sanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(html: string): SafeHtml;
}
export declare class HighlightSearchPipe implements PipeTransform {
    transform(value: string, args: string): any;
}
