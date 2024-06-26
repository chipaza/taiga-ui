import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, NgForOf],
    template: `
        <p>Yes?</p>
        <button
            *ngFor="let response of [true, false]"
            appearance="whiteblock"
            size="s"
            tuiButton
            type="button"
            class="tui-space_right-1"
            (click)="context.completeWith(response)"
        >
            {{ response ? 'Yes' : 'No' }}
        </button>
    `,
    changeDetection,
})
export class AlertExampleComponent {
    protected readonly context =
        inject<TuiPopover<TuiAlertOptions<void>, boolean>>(POLYMORPHEUS_CONTEXT);
}

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly alerts = inject(TuiAlertService);
    private readonly notification = this.alerts
        .open<boolean>(new PolymorpheusComponent(AlertExampleComponent), {
            label: 'Question',
            status: 'error',
            autoClose: 0,
        })
        .pipe(
            switchMap(response =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );

    protected showNotification(): void {
        this.notification.subscribe();
    }
}
