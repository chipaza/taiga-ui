(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[52274],{52274:t=>{t.exports='<p\n    tuiDropdownContext\n    [tuiDropdown]="reportForm"\n>\n    Some text with a mistake. Right-click it.\n</p>\n\n<p\n    tuiDropdownContext\n    [tuiDropdown]="reportForm"\n>\n    Another text\n</p>\n\n<ng-template\n    #reportForm\n    let-close="close"\n>\n    <form\n        class="container"\n        [formGroup]="testForm"\n    >\n        <tui-textarea formControlName="reportText">Have you found a mistake ? Write about it!</tui-textarea>\n\n        <button\n            tuiButton\n            type="button"\n            class="button"\n            (click)="report(); close()"\n        >\n            SEND IT\n        </button>\n    </form>\n</ng-template>\n'}}]);