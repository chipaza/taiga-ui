import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiIconComponent} from '@taiga-ui/core/components/icon';
import {TuiSvgComponent} from '@taiga-ui/core/components/svg';
import {TuiTooltipModule} from '@taiga-ui/core/components/tooltip';
import {TuiAppearanceDirective} from '@taiga-ui/core/directives/appearance';
import {TuiWrapperModule} from '@taiga-ui/core/directives/wrapper';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPrimitiveTextfieldComponent} from './primitive-textfield.component';
import {TuiPrimitiveTextfieldDirective} from './primitive-textfield.directive';
import {TuiTextfieldLegacyComponent} from './textfield/textfield.component';
import {TuiValueDecorationComponent} from './value-decoration/value-decoration.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PolymorpheusModule,
        TuiWrapperModule,
        TuiSvgComponent,
        TuiIconComponent,
        TuiAppearanceDirective,
        TuiTooltipModule,
    ],
    declarations: [
        TuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldDirective,
        TuiTextfieldLegacyComponent,
        TuiValueDecorationComponent,
    ],
    exports: [
        TuiPrimitiveTextfieldComponent,
        TuiPrimitiveTextfieldDirective,
        TuiTextfieldLegacyComponent,
    ],
})
export class TuiPrimitiveTextfieldModule {}
