(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[87840],{87840:n=>{n.exports='<tui-tabs\n    tuiMobileTabs\n    [(activeItemIndex)]="activeItemIndex"\n>\n    <button\n        *ngFor="let item of items"\n        tuiTab\n        (click)="onClick(item.text)"\n    >\n        <tui-svg\n            class="tui-space_right-2"\n            [src]="item.icon"\n        ></tui-svg>\n        {{ item.text }}\n    </button>\n</tui-tabs>\n<tui-input-number\n    decimal="never"\n    class="tui-space_top-4"\n    [max]="2"\n    [min]="0"\n    [step]="1"\n    [(ngModel)]="activeItemIndex"\n>\n    activeItemIndex\n</tui-input-number>\n'}}]);