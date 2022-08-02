(window.webpackJsonp=window.webpackJsonp||[]).push([[1758],{NYqF:function(e,n,t){"use strict";t.r(n),n.default="import {Component, ElementRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {fromEvent} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-destroy-example`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n    providers: [TuiDestroyService],\n})\nexport class TuiDestroyExample {\n    constructor(destroy$: TuiDestroyService, {nativeElement}: ElementRef<HTMLElement>) {\n        fromEvent(nativeElement, `click`)\n            .pipe(takeUntil(destroy$))\n            .subscribe(() => console.info(`click`));\n    }\n}\n"}}]);