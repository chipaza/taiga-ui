import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiLoaderComponent} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiCarouselButtonsDirective,
    TuiCarouselComponent,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiCarouselComponent,
        TuiLoaderComponent,
        TuiAvatarComponent,
        TuiAmountPipe,
        AsyncPipe,
        TuiCarouselButtonsDirective,
        TuiItemDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
