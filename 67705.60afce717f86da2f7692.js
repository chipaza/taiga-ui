"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[67705],{

/***/ 67705:
/***/ ((module) => {

module.exports = "<form\n    class=\"b-form\"\n    [formGroup]=\"form\"\n>\n    <tui-combo-box\n        formControlName=\"user\"\n        [stringify]=\"stringify\"\n    >\n        User\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor=\"let item of items | tuiFilterByInputWith: stringify\"\n                tuiOption\n                [value]=\"item\"\n            >\n                {{ item.name }}\n            </button>\n        </tui-data-list>\n    </tui-combo-box>\n</form>\n";

/***/ })

}]);