"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[9182],{

/***/ 9182:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiComparator} from '@taiga-ui/addon-table';\nimport {TuiDay, tuiToInt} from '@taiga-ui/cdk';\n\ninterface User {\n    readonly name: string;\n    readonly dob: TuiDay;\n}\n\nconst TODAY = TuiDay.currentLocal();\nconst FIRST = [\n    `John`,\n    `Jane`,\n    `Jack`,\n    `Jill`,\n    `James`,\n    `Joan`,\n    `Jim`,\n    `Julia`,\n    `Joe`,\n    `Julia`,\n];\n\nconst LAST = [\n    `Smith`,\n    `West`,\n    `Brown`,\n    `Jones`,\n    `Davis`,\n    `Miller`,\n    `Johnson`,\n    `Jackson`,\n    `Williams`,\n    `Wilson`,\n];\n\nconst DATA: readonly User[] = Array.from({length: 300}, () => ({\n    name: `${LAST[Math.floor(Math.random() * 10)]}, ${\n        FIRST[Math.floor(Math.random() * 10)]\n    }`,\n    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),\n}));\n\n@Component({\n    selector: `tui-table-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableExample5 {\n    readonly data = DATA;\n\n    readonly columns = [`name`, `dob`, `age`];\n\n    readonly ageSorter: TuiComparator<User> = (a: User, b: User) => getAge(a) - getAge(b);\n\n    getAge(user: User): number {\n        return getAge(user);\n    }\n}\n\nfunction getAge({dob}: User): number {\n    const years = TODAY.year - dob.year;\n    const months = TODAY.month - dob.month;\n    const days = TODAY.day - dob.day;\n    const offset = tuiToInt(months > 0 || (!months && days > 9));\n\n    return years + offset;\n}\n";

/***/ })

}]);