(window.webpackJsonp=window.webpackJsonp||[]).push([[808],{"j+bK":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-date-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateExample5 {\n    readonly nativeDateControl = new FormControl(new Date(2022, 0, 26));\n    readonly defaultControl = new FormControl(new TuiDay(2022, 0, 26));\n}\n"}}]);