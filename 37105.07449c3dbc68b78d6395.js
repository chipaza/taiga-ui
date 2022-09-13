"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37105],{

/***/ 37105:
/***/ ((module) => {

module.exports = "import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    EMPTY_ARRAY,\n    TUI_DEFAULT_MATCHER,\n    TuiBooleanHandler,\n    tuiPure,\n    TuiValidationError,\n} from '@taiga-ui/cdk';\n\nfunction createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {\n    return ({value}: AbstractControl) => {\n        const invalidTags = value ? value.filter(handler) : EMPTY_ARRAY;\n\n        return invalidTags.length > 0\n            ? {\n                  tags: new TuiValidationError(`Some tags are invalid`),\n              }\n            : null;\n    };\n}\n\nconst ITEMS = [`The Midnight`, `FM-84`, `Timecop1983`, `GUNSHIP`];\n\nfunction tagValidator(tag: string): boolean {\n    return !/\\d/.test(tag);\n}\n\n@Component({\n    selector: `tui-input-tag-example-4`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample4 {\n    search = ``;\n\n    readonly tagValidator = tagValidator;\n\n    readonly control = new FormControl([], createControlValidator(tagValidator));\n\n    get filtered(): readonly string[] {\n        return this.filterBy(this.search, this.control.value ?? []);\n    }\n\n    @tuiPure\n    private filterBy(search: string, value: readonly string[]): readonly string[] {\n        return ITEMS.filter(\n            item => TUI_DEFAULT_MATCHER(item, search) && !value.includes(item),\n        );\n    }\n}\n";

/***/ })

}]);