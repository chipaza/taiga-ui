"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[7066],{

/***/ 7066:
/***/ ((module) => {

module.exports = "@import '../../taiga-ui-local';\n\n/* stylelint-disable order/order */\n[tuiWrapper] {\n    .transition(~'color, background, opacity');\n    position: relative;\n    display: block;\n    height: 100%;\n    width: 100%;\n    appearance: none;\n    border-radius: inherit;\n\n    &:after {\n        .transition(box-shadow);\n        .fullsize(absolute, inset);\n        content: '';\n        border-radius: inherit;\n        border: 1px solid currentColor;\n        pointer-events: none;\n        color: transparent;\n    }\n\n    .wrapper-focus({\n        &:after {\n            border-width: 2px;\n            color: var(--tui-focus);\n        }\n    });\n\n    .wrapper-disabled({\n        pointer-events: none;\n        opacity: var(--tui-disabled-opacity);\n    });\n}\n";

/***/ })

}]);