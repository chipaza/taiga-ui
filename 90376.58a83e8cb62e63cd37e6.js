"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[90376],{

/***/ 90376:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_DATE_RANGE_VALUE_TRANSFORMER,\n    TUI_DATE_VALUE_TRANSFORMER,\n} from '@taiga-ui/kit';\n\nimport {\n    ExampleDateTransformer,\n    getExampleDateRangeTransformer,\n} from './value-transformers';\n\n@Component({\n    selector: `tui-input-date-range-example-4`,\n    templateUrl: `./index.html`,\n    providers: [\n        {\n            provide: TUI_DATE_VALUE_TRANSFORMER,\n            useClass: ExampleDateTransformer,\n        },\n        {\n            provide: TUI_DATE_RANGE_VALUE_TRANSFORMER,\n            deps: [TUI_DATE_VALUE_TRANSFORMER],\n            useFactory: getExampleDateRangeTransformer,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateRangeExample4 {\n    readonly control = new FormControl([new Date(2018, 2, 10), new Date(2018, 3, 20)]);\n}\n";

/***/ })

}]);