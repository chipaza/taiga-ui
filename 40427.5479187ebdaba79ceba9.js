"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[40427],{

/***/ 40427:
/***/ ((module) => {

module.exports = "import {Component, Inject, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {Subscription} from 'rxjs';\n\n@Component({\n    selector: `tui-table-bar-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableBarExampleComponent1 {\n    @ViewChild(`tableBarTemplate`)\n    tableBarTemplate: PolymorpheusContent = ``;\n\n    subscription = new Subscription();\n\n    constructor(\n        @Inject(TuiTableBarsService)\n        private readonly tableBarsService: TuiTableBarsService,\n    ) {}\n\n    showTableBar(): void {\n        this.subscription.unsubscribe();\n\n        this.subscription = this.tableBarsService\n            .open(this.tableBarTemplate || ``, {\n                hasCloseButton: true,\n                adaptive: true,\n            })\n            .subscribe();\n    }\n}\n";

/***/ })

}]);