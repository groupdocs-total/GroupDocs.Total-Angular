import {AfterViewInit, Directive, ElementRef} from '@angular/core';
import {ZoomService} from "./zoom.service";
import {FileUtil} from "./file.service";
import { WindowService } from './window.service';

@Directive({
  selector: '[gdPageMarker]'
})
export class PageMarkerDirective implements AfterViewInit {

naming = {
    sectionSelector: "section.section",
    markerSelector: "span.page8marker",
    headerSelector: "header.header",
    contentSelector: "article.content",
    footerSelector: "footer.footer"
}

// observing configurations.
config = {
    attributes: true,
    attributeOldValue: true,
    childList: true,
    subtree: true,
    characterData: true,
    characterDataOldValue: true,
    attributeFilter: ["style", "class"]
};

  el: ElementRef<any>;

  constructor(private _zoomService: ZoomService, private _windowService: WindowService, el: ElementRef) {
    this.el = el;
  }

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll(this.naming.sectionSelector);

    for (let index = 0; index < sections.length; index++) {
        // get section
        const section = sections[index];
        // process section. add markers to this one.
        this.processSection(section);
        // Create an observer instance linked to the callback function.
        const observer = new MutationObserver(this.callback.bind(this));
        // Start observing the target sections for configured mutations.
        observer.observe(section, this.config);
    }
  }

  // Callback function to execute when mutations are observed.
callback(mutationsList, observer) {
    // get first MutationRecord from list.
    const mutationFirst = mutationsList[0];
    // get parent section.
    const target = mutationFirst.target.parentNode.closest(this.naming.sectionSelector);
    if (target === null || target === "undefined") {
        return;
    }
    // remove all markers in the current section.
    target.querySelectorAll(this.naming.markerSelector).forEach(element => {
        element.remove();
    })
    // add marker to target sections.
    this.processSection(target);
    // a list of all matching DOM changes that have been detected but not yet processed by the observer's callback function, leaving the mutation queue empty.
    // MAIN REASON - leaving the mutation queue empty. 
    const lest = observer.takeRecords();
};

  processSection(section) {
    const headerHeight = this.processHeader(section);
    const footerHeight = this.processFooter(section);
    // get max page height - from css 'paginal.css'
    const styling = getComputedStyle(section, null);
    const minHeight = styling.getPropertyValue('min-height');
    const minHeightNumber = parseFloat(minHeight);
    const contentHeight = minHeightNumber - headerHeight - footerHeight;
    const realHeight = this.processContent(section);
    let endPageCoordinate = contentHeight;
    while (endPageCoordinate < realHeight) {
        const marker = this.htmlToElements("<span class='page8marker' style='top:" + Math.ceil(endPageCoordinate) +
            "px;'></span>");
        marker.forEach(item => {
            section.appendChild(item);
        });
        endPageCoordinate += contentHeight;
    }
  }

  // calculate header's height.
    processHeader(section) {
        const header = section.querySelector(this.naming.headerSelector);
        return header.getBoundingClientRect().height;
    };

    // calculate real height of the content. without padding.
    processContent(section) {
        const content = section.querySelector(this.naming.contentSelector);
        const height = content.getBoundingClientRect().height;
        const styling = getComputedStyle(content, null);
        const paddingBottom = styling.getPropertyValue('padding-bottom');
        const paddingTop = styling.getPropertyValue('padding-top');
        return height - parseFloat(paddingBottom) - parseFloat(paddingTop)
    };

    // calculate footer's height.
    processFooter(section) {
        const footer = section.querySelector(this.naming.footerSelector);
        return footer.getBoundingClientRect().height;
    };

    // create dom element from string.
    htmlToElements(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }
}