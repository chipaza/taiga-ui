(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7705],{7705:n=>{n.exports='<button\n    size="m"\n    tuiButton\n    type="button"\n    (click)="onClick()"\n>\n    Show dialog with carousel\n</button>\n\n<ng-template #header>\n    <div\n        class="header"\n        [style.backgroundImage]="background"\n    ></div>\n</ng-template>\n<ng-template\n    [tuiDialogOptions]="{size: \'s\', header: header}"\n    [(tuiDialog)]="open"\n>\n    <div\n        tuiCarouselButtons\n        class="wrapper"\n        (touchstart.passive.stop)="(0)"\n    >\n        <button\n            icon="tuiIconChevronLeftLarge"\n            tuiIconButton\n            tuiMode="onDark"\n            type="button"\n            class="tui-space_right-4"\n            (click)="navigate(-1)"\n        ></button>\n        <tui-carousel [(index)]="index">\n            <div *tuiItem>\n                <h2>Carousel is awesome</h2>\n                <p>It can show arbitrary content and it\'s very easy to control</p>\n            </div>\n            <div *tuiItem>\n                <h2>Pagination</h2>\n                <p>\n                    You can use\n                    <a\n                        routerLink="/components/pagination"\n                        tuiLink\n                    >\n                        Pagination\n                    </a>\n                    component with size \'s\' together with it\n                </p>\n            </div>\n            <div *tuiItem>\n                <h2>Buttons</h2>\n                <p>\n                    Use\n                    <code>tuiCarouselButtons</code>\n                    directive to setup navigation buttons\n                </p>\n            </div>\n        </tui-carousel>\n        <button\n            icon="tuiIconChevronRightLarge"\n            tuiIconButton\n            tuiMode="onDark"\n            type="button"\n            class="tui-space_left-4"\n            (click)="navigate(1)"\n        ></button>\n    </div>\n    <tui-pagination\n        size="s"\n        class="tui-space_top-4"\n        [length]="3"\n        [(index)]="index"\n    ></tui-pagination>\n    <div class="tui-space_top-4">\n        <button\n            appearance="primary"\n            tuiButton\n            type="button"\n            (click)="open = false"\n        >\n            Got it!\n        </button>\n    </div>\n</ng-template>\n'}}]);