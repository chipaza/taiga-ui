"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[66840],{

/***/ 66840:
/***/ ((module) => {

module.exports = "import {Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-editor-example-5`,\n    templateUrl: `./index.html`,\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import(`@tiptap/starter-kit`).then(({default: module}) => module),\n                import(`@tiptap/extension-placeholder`).then(({Placeholder}) =>\n                    Placeholder.configure({\n                        emptyNodeClass: `t-editor-placeholder`,\n                        placeholder: `Type '/' for command`, // Notion like\n                        includeChildren: true,\n                    }),\n                ),\n                import(`@taiga-ui/addon-editor/extensions/group`).then(\n                    ({createGroupExtension}) =>\n                        createGroupExtension({nested: false, createOnEnter: true}),\n                ),\n            ],\n        },\n    ],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiEditorExample5 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(\n            `<div data-type=\"group\"><p>This is a boring paragraph.</p></div><div data-type=\"group\"><p>And another draggable paragraph.</p></div><div data-type=\"group\"><p>Let’s finish with a boring paragraph.</p></div>`,\n        );\n    }\n}\n";

/***/ })

}]);