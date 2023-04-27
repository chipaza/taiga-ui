(window.webpackJsonp=window.webpackJsonp||[]).push([[1137],{j603:function(n,t,e){"use strict";e.r(t),t.default='<div class="tui-space_bottom-2">With all features</div>\n\n<button\n    tuiButton\n    size="m"\n    type="button"\n    class="tui-space_bottom-4"\n    (click)="show()"\n>\n    Show preview\n</button>\n\n<ng-template\n    #preview\n    let-preview\n>\n    <tui-preview\n        [rotatable]="true"\n        (tuiSwipe)="onSwipe($event)"\n    >\n        <tui-preview-title>{{ title }}</tui-preview-title>\n        <tui-preview-pagination\n            [length]="length"\n            [(index)]="index"\n        ></tui-preview-pagination>\n\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconTrash"\n            title="Delete"\n            (click)="delete()"\n        ></button>\n        <button\n            tuiIconButton\n            tuiPreviewAction\n            icon="tuiIconDownload"\n            title="Download"\n            (click)="download()"\n        ></button>\n        <button\n            tuiPreviewAction\n            tuiIconButton\n            icon="tuiIconCloseLarge"\n            title="Close"\n            (click)="preview.complete()"\n        ></button>\n\n        <div\n            polymorpheus-outlet\n            [content]="previewContent"\n        >\n            <ng-template let-src>\n                <img\n                    alt=""\n                    [src]="src"\n                />\n            </ng-template>\n        </div>\n    </tui-preview>\n</ng-template>\n\n<ng-template #contentSample>\n    <div class="content">\n        <h1>Important document</h1>\n\n        <p>Hello everyone! This is some important document in A4 format, although it is made using html</p>\n\n        <p>\n            This shows that the component preview can work with absolutely any content: this way you can show any\n            template, image, pdf or even iframe with your favorite site. We will put this content in the center of the\n            portal and provide the user with control over it, and we will provide you with convenient levers to change\n            it and process actions.\n        </p>\n\n        <img\n            src="https://github.com/tinkoff/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg"\n            class="polymorpheus"\n        />\n    </div>\n</ng-template>\n'}}]);