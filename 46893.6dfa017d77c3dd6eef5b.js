"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46893],{

/***/ 46893:
/***/ ((module) => {

module.exports = "<nav\n    tuiTabs\n    [(activeItemIndex)]=\"index\"\n>\n    <button tuiTab>Just a tab</button>\n    <tui-hosted-dropdown\n        tuiDropdownHover\n        [content]=\"content\"\n        [(open)]=\"open\"\n    >\n        <button\n            tuiHostedDropdownHost\n            tuiTab\n            (tui-tab-activate.stop)=\"(0)\"\n        >\n            Hoverable/Clickable\n        </button>\n        <ng-template #content>\n            <tui-data-list (click)=\"onClick()\">\n                <button tuiOption>Option 1</button>\n                <button tuiOption>Option 2</button>\n                <button tuiOption>Option 3</button>\n            </tui-data-list>\n        </ng-template>\n    </tui-hosted-dropdown>\n    <button tuiTab>Another tab</button>\n    <tui-hosted-dropdown\n        tuiDropdownAlign=\"right\"\n        tuiDropdownHover\n        [content]=\"settings\"\n        [(open)]=\"openSettings\"\n    >\n        <button\n            tuiHostedDropdownHost\n            tuiTab\n            (tui-tab-activate.stop)=\"(0)\"\n        >\n            <tui-svg src=\"tuiIconSettingsLarge\"></tui-svg>\n        </button>\n\n        <ng-template #settings>\n            <div\n                class=\"settings\"\n                [formGroup]=\"testForm\"\n            >\n                <tui-toggle\n                    formControlName=\"option\"\n                    size=\"l\"\n                ></tui-toggle>\n                Turn option\n            </div>\n        </ng-template>\n    </tui-hosted-dropdown>\n</nav>\n";

/***/ })

}]);