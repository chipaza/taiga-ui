(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13552],{13552:t=>{t.exports='<tui-select\n    *tuiLet="items$ | async as items"\n    class="b-form"\n    [(ngModel)]="value"\n>\n    Select user\n    <tui-data-list-wrapper\n        *tuiDataList\n        size="l"\n        [disabledItemHandler]="disabledItemHandler"\n        [itemContent]="content"\n        [items]="items"\n    ></tui-data-list-wrapper>\n</tui-select>\n\n<ng-template\n    #content\n    let-data\n>\n    <div class="template">\n        <tui-avatar\n            size="xs"\n            class="avatar"\n            [avatarUrl]="data.avatarUrl || null"\n            [text]="data.toString()"\n        ></tui-avatar>\n        <div class="name">{{ data }}</div>\n    </div>\n</ng-template>\n'}}]);