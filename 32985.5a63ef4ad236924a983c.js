"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[32985],{

/***/ 32985:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-data-list-example-3`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListExample3 {\n    value = [];\n\n    readonly burgers = [`Hamburger`, `Cheeseburger`];\n\n    readonly drinks = [`Cola`, `Tea`, `Coffee`, `Slurm`];\n\n    readonly arrow = TUI_ARROW;\n}\n";

/***/ })

}]);