(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35956],{35956:n=>{n.exports='<tui-select [formControl]="language">\n    <ng-content></ng-content>\n    <tui-data-list *tuiDataList>\n        <button\n            *ngFor="let name of names"\n            tuiOption\n            [value]="name | titlecase"\n            (click)="switcher.setLanguage(name)"\n        >\n            <img\n                alt=""\n                class="t-flag"\n                [src]="flags.get(name) | tuiFlag"\n            />\n            {{ name | titlecase }}\n        </button>\n    </tui-data-list>\n</tui-select>\n'}}]);