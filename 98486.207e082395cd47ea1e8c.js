"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[98486],{

/***/ 98486:
/***/ ((module) => {

module.exports = "import {Component, HostListener} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiClamp} from '@taiga-ui/cdk';\nimport {BehaviorSubject, of, timer} from 'rxjs';\nimport {distinctUntilChanged, mapTo, switchMap} from 'rxjs/operators';\n\n@Component({\n    selector: `tui-slider-example-6`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSliderExample6 {\n    min = 0.5;\n    max = 2;\n    value = 1;\n\n    readonly active$ = new BehaviorSubject(false);\n    readonly showHint$ = this.active$.pipe(\n        distinctUntilChanged(),\n        switchMap(active => (active ? of(true) : timer(1000).pipe(mapTo(false)))),\n    );\n\n    @HostListener(`pointerdown`, [`true`])\n    @HostListener(`document:pointerup`, [`false`])\n    onKeydown(show: boolean): void {\n        this.active$.next(show);\n    }\n\n    change(step: number): void {\n        this.value = tuiClamp(this.value + step, this.min, this.max);\n    }\n}\n";

/***/ })

}]);