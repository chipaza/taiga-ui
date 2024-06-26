import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';
import {TuiIconsDirective} from '@taiga-ui/core/directives/icons';

import {TUI_LINK_OPTIONS} from './link.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./link.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-link',
    },
})
class TuiLinkStyles {}

@Directive({
    standalone: true,
    selector: 'a[tuiLink], button[tuiLink]',
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        {
            directive: TuiIconsDirective,
            inputs: ['iconLeft', 'iconRight'],
        },
    ],
    providers: [tuiAppearanceOptionsProvider(TUI_LINK_OPTIONS)],
    host: {
        tuiLink: '',
        '[class._pseudo]': 'pseudo',
    },
})
export class TuiLinkDirective {
    protected readonly nothing = tuiWithStyles(TuiLinkStyles);

    @Input()
    public pseudo = inject(TUI_LINK_OPTIONS).pseudo;
}
