"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[35861],{

/***/ 35861:
/***/ ((module) => {

module.exports = "import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiDurationOptions, tuiScaleIn} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-scale-in-example`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n    animations: [tuiScaleIn],\n})\nexport class TuiScaleInExample {\n    @Input()\n    speed = 0;\n\n    readonly todoTasks = [\n        {title: `Install Angular`, completed: true},\n        {title: `Install Taiga UI`, completed: false},\n        {title: `Look into \"Getting Started\"`, completed: false},\n    ];\n\n    @tuiPure\n    getAnimation(duration: number): TuiDurationOptions {\n        return {value: ``, params: {duration}};\n    }\n}\n";

/***/ })

}]);