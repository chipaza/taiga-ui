"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[67610],{

/***/ 67610:
/***/ ((module) => {

module.exports = "import {Component, HostBinding} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSwipe} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-swipe-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSwipeExample1 {\n    @HostBinding(`class`)\n    swiped = `default`;\n\n    onSwipe(swipe: TuiSwipe): void {\n        this.swiped = swipe.direction;\n    }\n}\n";

/***/ })

}]);