"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[98695],{

/***/ 98695:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nexport function passwordValidator(field: AbstractControl): Validators | null {\n    return field.value && latinChars.test(field.value)\n        ? null\n        : {\n              other: `Only latin letters are allowed`,\n          };\n}\n\nexport function superComputerValidator(field: AbstractControl): Validators | null {\n    return field.value === `42`\n        ? null\n        : {\n              other: `Wrong`,\n          };\n}\n\n@Component({\n    selector: `tui-field-error-pipe-example-1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorPipeExample1 {\n    readonly testValue1 = new FormControl(``, [Validators.required, passwordValidator]);\n\n    readonly testValue3 = new FormControl(``, [Validators.required, passwordValidator]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: new FormControl(``, [Validators.required, superComputerValidator]),\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n";

/***/ })

}]);