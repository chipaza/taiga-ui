"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[62147],{

/***/ 62147:
/***/ ((module) => {

module.exports = "```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {Injector} from '@angular/core';\nimport {MyDialogComponent} from './my-dialog.component.ts';\n\n// ...\n\nexport class MyComponent {\n  constructor(\n    @Inject(Injector) private readonly injector: Injector,\n    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,\n  ) {}\n\n  // ...\n  open() {\n    this.dialogService.open(new PolymorpheusComponent(MyDialogComponent, this.injector)).subscribe();\n  }\n}\n```\n";

/***/ })

}]);