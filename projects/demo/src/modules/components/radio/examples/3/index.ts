import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiTitleDirective} from '@taiga-ui/core';
import {TuiRadioListComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiRadioListComponent, TuiTitleDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly form = new FormGroup({
        vertical: new FormControl(null, Validators.required),
    });

    protected readonly objects = [
        {
            name: 'King Arthur',
            description: 'Graham Chapman',
        },
        {
            name: "It's Man",
            description: 'Michael Palin',
        },
        {
            name: 'Silly Walks',
            description: 'John Cleese',
        },
    ];

    protected readonly strings = ['King Arthur', "It's Man", 'Silly Walks'];

    protected horizontal = this.strings[0];

    protected readonly handler: TuiBooleanHandler<string> = item =>
        item === this.strings[2];
}
