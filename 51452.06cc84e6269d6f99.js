(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[51452],{51452:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-calendar-example-6',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiCalendarExample6 {\n    value: readonly TuiDay[] = [];\n\n    onDayClick(day: TuiDay): void {\n        this.value = this.value.find(item => item.daySame(day))\n            ? this.value.filter(item => !item.daySame(day))\n            : this.value.concat(day);\n    }\n}\n"}}]);