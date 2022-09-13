"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91197],{

/***/ 91197:
/***/ ((module) => {

module.exports = "import {Component, HostListener, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiStringHandler} from '@taiga-ui/cdk';\nimport {\n    TUI_NUMBER_FORMAT,\n    TuiAlertService,\n    TuiNumberFormatSettings,\n} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-copy-processor-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiCopyProcessorExample1 {\n    value = 12345.67;\n\n    constructor(\n        @Inject(TUI_NUMBER_FORMAT) private readonly format: TuiNumberFormatSettings,\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    @HostListener(`copy`, [`$event`])\n    onCopy(event: ClipboardEvent): void {\n        this.alertService\n            .open(event.clipboardData?.getData(`text/plain`) ?? ``)\n            .subscribe();\n    }\n\n    readonly numberProcessor: TuiStringHandler<string> = text =>\n        text\n            .replace(this.format.decimalSeparator, `.`)\n            .replace(new RegExp(this.format.thousandSeparator, `g`), ``);\n\n    readonly textProcessor: TuiStringHandler<string> = text => text.toUpperCase();\n}\n";

/***/ })

}]);