(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[34020],{34020:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {MaskitoOptions} from '@maskito/core';\n\n@Component({\n    selector: 'tui-input-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiInputExample3 {\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(''),\n        testValue2: new FormControl(''),\n    });\n\n    readonly maskOptions1: MaskitoOptions = {\n        mask: [/\\d/, /\\d/, /\\d/, /\\d/, ' ', /\\d/, /\\d/, /\\d/, /\\d/, /\\d/, /\\d/],\n    };\n\n    readonly maskOptions2: MaskitoOptions = {\n        mask: [\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n        ],\n    };\n\n    readonly unmask = (value: string): string => value.replace(/-/g, '');\n}\n"}}]);