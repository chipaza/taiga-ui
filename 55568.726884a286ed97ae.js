(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55568],{55568:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-radio-block-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiRadioBlockExample4 {\n    readonly items = ['Kiwi', 'Orange', 'Apple'];\n    readonly form = new FormGroup({\n        control: new FormControl(this.items[1]),\n    });\n}\n"}}]);