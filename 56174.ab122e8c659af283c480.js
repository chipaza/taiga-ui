"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[56174],{

/***/ 56174:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPx} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-format-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(11),\n    });\n\n    get px(): string {\n        const {value} = this.parametersForm.value;\n\n        return tuiPx(value ?? 0);\n    }\n}\n";

/***/ })

}]);