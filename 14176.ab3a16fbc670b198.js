(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14176],{58940:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay, TuiTime} from '@taiga-ui/cdk';\nimport {tuiInputDateOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-date-time-example-5',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [tuiInputDateOptionsProvider({nativePicker: true})],\n})\nexport class TuiInputDateTimeExample5 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl([new TuiDay(2017, 2, 15), new TuiTime(12, 30)]),\n    });\n}\n"}}]);