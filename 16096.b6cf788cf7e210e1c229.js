(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[16096],{16096:n=>{n.exports='<button\n    tuiIconButton\n    type="button"\n    appearance="flat"\n    icon="tuiIconMinus"\n    size="s"\n    (click)="decrease()"\n></button>\n\n<tui-hosted-dropdown\n    #fonts\n    [content]="fontsDropdown"\n>\n    <button\n        tuiButton\n        size="s"\n        appearance="flat"\n    >\n        {{ size$ | async }}\n    </button>\n\n    <ng-template #fontsDropdown>\n        <tui-data-list>\n            <button\n                *ngFor="let size of sizes"\n                tuiOption\n                (click)="setFontSize(size); fonts.close()"\n            >\n                {{ size }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</tui-hosted-dropdown>\n\n<button\n    tuiIconButton\n    type="button"\n    appearance="flat"\n    icon="tuiIconPlus"\n    size="s"\n    (click)="increase()"\n></button>\n'}}]);