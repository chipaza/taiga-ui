"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[65385],{

/***/ 65385:
/***/ ((module) => {

module.exports = "import {Injectable, Provider} from '@angular/core';\nimport {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {PromptComponent} from './prompt.component';\nimport {PromptOptions} from './prompt-options';\n\n@Injectable({\n    providedIn: `root`,\n})\nexport class PromptService extends AbstractTuiDialogService<PromptOptions, boolean> {\n    readonly defaultOptions = {\n        heading: `Are you sure?`,\n        buttons: [`Yes`, `No`],\n    } as const;\n\n    readonly component = new PolymorpheusComponent(PromptComponent);\n}\n\n// Add this provider to app module\nexport const PROMPT_PROVIDER: Provider = {\n    provide: TUI_DIALOGS,\n    useExisting: PromptService,\n    multi: true,\n};\n";

/***/ })

}]);