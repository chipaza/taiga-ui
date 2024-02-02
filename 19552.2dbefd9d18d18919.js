(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19552],{19552:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-data-list-wrapper-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDataListWrapperExample2 {\n    readonly control = new FormControl<{name: string; surname: string} | null>(null);\n\n    readonly items = [\n        {name: 'John', surname: 'Cleese'},\n        {name: 'Eric', surname: 'Idle'},\n        {name: 'Graham', surname: 'Chapman'},\n        {name: 'Michael', surname: 'Palin'},\n        {name: 'Terry', surname: 'Gilliam'},\n        {name: 'Terry', surname: 'Jones'},\n    ];\n\n    readonly stringify = (item: {name: string; surname: string}): string =>\n        `${item.name} ${item.surname}`;\n}\n"}}]);