"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26706],{

/***/ 26706:
/***/ ((module) => {

module.exports = "<tui-multi-select\n    #component\n    class=\"b-form\"\n    [editable]=\"false\"\n    [expandable]=\"false\"\n    [tuiTextfieldLabelOutside]=\"true\"\n    [(ngModel)]=\"value\"\n>\n    <tui-data-list *tuiDataList>\n        <tui-opt-group\n            tuiMultiSelectGroup\n            label=\"Jedi\"\n        >\n            <button\n                *ngFor=\"let item of jedi\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group label=\"Sith\">\n            <button\n                *ngFor=\"let item of sith | tuiHideSelected\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</tui-multi-select>\n";

/***/ })

}]);