"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[270],{

/***/ 270:
/***/ ((module) => {

module.exports = "import {Component, ElementRef, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiScrollService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-scroll-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiScrollExample1 {\n    scrollTop = 0;\n    scrollLeft = 0;\n    duration = 300;\n\n    constructor(\n        @Inject(TuiScrollService) private readonly scrollService: TuiScrollService,\n    ) {}\n\n    onClick({nativeElement}: ElementRef<HTMLElement>): void {\n        this.scrollService\n            .scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration)\n            .subscribe();\n    }\n}\n";

/***/ })

}]);