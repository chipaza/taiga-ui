(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33720],{33720:n=>{n.exports='```html\n<button\n  tuiButton\n  type="button"\n  [tuiDropdown]="dropdown"\n  [(tuiDropdownOpen)]="open"\n>\n  Open menu\n  <ng-template #dropdown>\n    <tui-data-list>\n      <button\n        *ngFor="let item of items"\n        tuiOption\n        (click)="onClick()"\n      >\n        {{item}}\n      </button>\n    </tui-data-list>\n  </ng-template>\n</button>\n```\n'}}]);