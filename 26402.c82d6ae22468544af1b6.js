"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26402],{

/***/ 26402:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTime} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-skeleton-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSkeletonExample2 {\n    testForm = new FormGroup({\n        nameValue: new FormControl(``, Validators.required),\n        passwordValue: new FormControl(``, Validators.required),\n        moneyValue: new FormControl(`100`, Validators.required),\n        timeValue: new FormControl(new TuiTime(12, 30), Validators.required),\n        osnoValue: new FormControl(false),\n        usnValue: new FormControl(false),\n        eshnValue: new FormControl(false),\n        envdValue: new FormControl(false),\n    });\n\n    skeletonVisible = false;\n    lightMode = false;\n\n    showSkelet(): void {\n        this.skeletonVisible = !this.skeletonVisible;\n    }\n\n    toggleLight(): void {\n        this.lightMode = !this.lightMode;\n    }\n}\n";

/***/ })

}]);