(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7283],{7283:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiBooleanHandler, TuiStringHandler} from '@taiga-ui/cdk';\n\ninterface Item {\n    readonly id: number;\n    readonly name: string;\n}\n@Component({\n    selector: 'tui-multi-select-example-10',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiMultiSelectExample10 {\n    itemStringControl = new FormControl<string[]>([]);\n    itemControl = new FormControl<Item[]>([]);\n    itemStringGroupControl = new FormControl<string[]>([]);\n    itemGroupControl = new FormControl<Item[]>([]);\n\n    items = [\n        'Luke Skywalker',\n        'Leia Organa Solo',\n        'Darth Vader',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    customItems: readonly Item[] = [\n        {name: 'Luke Skywalker', id: 1},\n        {name: 'Leia Organa Solo', id: 2},\n        {name: 'Darth Vader', id: 3},\n        {name: 'Han Solo', id: 4},\n        {name: 'Obi-Wan Kenobi', id: 5},\n        {name: 'Yoda', id: 6},\n    ];\n\n    groupItems = [\n        ['Caesar', 'Greek', 'Apple and Chicken'],\n        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],\n    ];\n\n    customGroupItems: readonly Item[][] = [\n        [\n            {name: 'Caesar', id: 1},\n            {name: 'Apple and Chicken', id: 2},\n        ],\n        [\n            {name: 'Broccoli Cheddar', id: 3},\n            {name: 'Chicken and Rice', id: 4},\n            {name: 'Chicken Noodle', id: 5},\n        ],\n    ];\n\n    labels = ['Salad', 'Soup'];\n\n    stringify: TuiStringHandler<Item> = item => item.name;\n\n    disableHandler: TuiBooleanHandler<string> = item => item.startsWith('Broccoli');\n    disableItemHandler: TuiBooleanHandler<Item> = ({name}) => name.startsWith('Broccoli');\n}\n"}}]);