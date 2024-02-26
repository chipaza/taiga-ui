(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[55759],{55759:n=>{n.exports='<header tuiNavigationHeader>\n    <button\n        appearance="secondary"\n        iconLeft="tuiIconGrid"\n        tuiIconButton\n    >\n        Menu\n    </button>\n    <span tuiNavigationLogo>\n        <tui-icon icon="tuiIconHome"></tui-icon>\n        <span tuiFade>A very very long product name</span>\n        <tui-badge>Test</tui-badge>\n    </span>\n    <tui-hosted-dropdown [content]="products">\n        <button\n            appearance="secondary"\n            iconRight="tuiIconChevronDown"\n            tuiButton\n        >\n            <span tuiFade>A very very long project</span>\n        </button>\n        <ng-template #products>\n            <tui-data-list size="s">\n                <button tuiOption>\n                    A very very long project\n                    <tui-icon\n                        icon="tuiIconCheck"\n                        [style.font-size.em]="1"\n                        [style.margin-left.rem]="0.5"\n                    ></tui-icon>\n                </button>\n                <button tuiOption>Something else</button>\n            </tui-data-list>\n        </ng-template>\n    </tui-hosted-dropdown>\n    <hr />\n    <button\n        appearance="secondary"\n        iconLeft="tuiIconPlus"\n        tuiButton\n    >\n        Create\n    </button>\n    <button\n        iconLeft="tuiIconBell"\n        tuiIconButton\n    >\n        Notifications\n        <tui-badge-notification></tui-badge-notification>\n    </button>\n    <button\n        iconLeft="tuiIconMoreHorizontal"\n        tuiIconButton\n    >\n        More\n    </button>\n    <tui-avatar src="AI"></tui-avatar>\n</header>\n<div [style.display]="\'flex\'">\n    <aside\n        [style.height.rem]="27"\n        [tuiNavigationAside]="expanded"\n    >\n        <header>\n            <button\n                iconLeft="tuiIconHome"\n                tuiButton\n            >\n                <span tuiFade>A very very long product name</span>\n            </button>\n        </header>\n        <button\n            iconLeft="tuiIconSearch"\n            tuiButton\n        >\n            Search\n        </button>\n        <a\n            iconLeft="tuiIconUsers"\n            routerLink="/experimental/navigation"\n            routerLinkActive="active"\n            tuiAppearance="flat"\n            tuiButton\n        >\n            Groups\n        </a>\n        <tui-hosted-dropdown\n            [canOpen]="!expanded"\n            [content]="dropdown"\n            [sided]="true"\n            [(open)]="open"\n        >\n            <button\n                iconLeft="tuiIconSettings"\n                iconRight="tuiIconChevronDown"\n                tuiAppearance="flat"\n                tuiButton\n                [tuiAppearanceState]="open ? \'hover\' : null"\n                (click)="submenu = expanded && !submenu"\n            >\n                Settings\n            </button>\n            <ng-template #dropdown>\n                <tui-data-list size="s">\n                    <button tuiOption>Account</button>\n                    <button tuiOption>Notifications</button>\n                    <button tuiOption>Privacy</button>\n                </tui-data-list>\n            </ng-template>\n        </tui-hosted-dropdown>\n        <tui-expand [expanded]="expanded && submenu">\n            <button tuiButton>Account</button>\n            <button tuiButton>Notifications</button>\n            <button tuiButton>Privacy</button>\n        </tui-expand>\n        <button\n            iconLeft="tuiIconHeart"\n            tuiButton\n        >\n            <span tuiFade>By default ellipsis is used but you can use fade too</span>\n        </button>\n        <hr />\n        <button\n            iconLeft="tuiIconPlus"\n            tuiButton\n        >\n            Add\n        </button>\n        <footer>\n            <button\n                iconLeft="tuiIconStar"\n                tuiButton\n            >\n                Favorites\n            </button>\n            <button\n                tuiButton\n                [iconLeft]="expanded ? \'tuiIconChevronLeft\' : \'tuiIconChevronRight\'"\n                (click)="expanded = !expanded"\n            >\n                Collapse\n            </button>\n        </footer>\n    </aside>\n    <main tuiNavigationMain>\n        <nav\n            tuiNavigationNav\n            [style.position]="\'sticky\'"\n        >\n            <a routerLink=".">\n                <tui-icon icon="tuiIconChevronLeft"></tui-icon>\n                Back\n            </a>\n            /\n            <span tuiNavigationLogo>\n                <span tuiFade>Groups</span>\n                <tui-badge iconLeft="tuiIconLock">Status</tui-badge>\n            </span>\n            <hr />\n            <tui-tabs tuiFade>\n                <button tuiTab>Default view</button>\n                <button tuiTab>Details</button>\n                <button tuiTab>Followers</button>\n            </tui-tabs>\n            <button\n                appearance="secondary"\n                tuiButton\n            >\n                Secondary\n            </button>\n            <button tuiButton>Primary</button>\n        </nav>\n        <div\n            *tuiRepeatTimes="let index of 10"\n            tuiCardLarge\n            tuiHeader\n            tuiSurface="elevated"\n        >\n            <h2 tuiTitle>\n                Some random content\n                <span tuiSubtitle>A subtitle</span>\n            </h2>\n        </div>\n    </main>\n</div>\n'}}]);