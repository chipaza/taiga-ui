(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13702],{13702:o=>{o.exports="import {NgModule} from '@angular/core';\nimport {RouterModule} from '@angular/router';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {tuiGenerateDialogableRoute, TuiRoutableDialogModule} from '@taiga-ui/kit';\n\nimport {DialogContentComponent} from './dialog-content.component';\nimport {TuiPage1ExampleComponent} from './page-1.component';\n\n@NgModule({\n    imports: [\n        // step 2: add TuiRoutableDialogModule\n        TuiRoutableDialogModule,\n        RouterModule.forChild([\n            {\n                path: '',\n                component: TuiPage1ExampleComponent,\n                children: [\n                    // step 3: use tuiGenerateDialogableRoute inside children property\n                    tuiGenerateDialogableRoute(DialogContentComponent, {\n                        path: 'path/to/dialog',\n                    }),\n                ],\n            },\n        ]),\n        TuiButtonModule,\n    ],\n    declarations: [TuiPage1ExampleComponent, DialogContentComponent],\n    exports: [TuiPage1ExampleComponent],\n})\nexport class TuiPage1ExampleModule {}\n"}}]);