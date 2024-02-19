(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[11836],{11836:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileDialogService} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {switchMap} from 'rxjs';\n\n@Component({\n    selector: 'tui-mobile-dialog-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n    ],\n})\nexport class TuiMobileDialogExample1 {\n    constructor(\n        @Inject(TuiMobileDialogService)\n        private readonly dialogs: TuiMobileDialogService,\n        @Inject(TuiAlertService)\n        private readonly alerts: TuiAlertService,\n    ) {}\n\n    show(): void {\n        const actions = ['No thanks', 'Remind me later', 'Rate now'];\n\n        this.dialogs\n            .open(\n                'If you like this app, please take a moment to leave a positive rating.',\n                {\n                    label: 'What do you think?',\n                    actions,\n                },\n            )\n            .pipe(switchMap(index => this.alerts.open(`Selected: ${actions[index]}`)))\n            .subscribe();\n    }\n}\n"}}]);