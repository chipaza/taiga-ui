(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[54906],{54906:e=>{e.exports="import {Component, Inject, Self} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSheetDialogService} from '@taiga-ui/addon-mobile';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {Observable, Subject, switchMap, takeUntil} from 'rxjs';\n\n@Component({\n    selector: 'tui-sheet-dialog-example-1',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [TuiDestroyService],\n})\nexport class TuiSheetDialogExample1 {\n    readonly stream$ = new Subject<void>();\n\n    constructor(\n        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,\n        @Inject(TuiSheetDialogService) service: TuiSheetDialogService,\n    ) {\n        this.stream$\n            .pipe(\n                switchMap(() => service.open('', {label: 'Simple sheet'})),\n                takeUntil(destroy$),\n            )\n            .subscribe();\n    }\n}\n"}}]);