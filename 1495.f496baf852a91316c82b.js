(window.webpackJsonp=window.webpackJsonp||[]).push([[1495],{"zUU/":function(n,t,e){"use strict";e.r(t),t.default="import {Component} from '@angular/core';\nimport {TuiTreeItemContentComponent} from '@taiga-ui/kit';\n\n@Component({\n    selector: `folders`,\n    template: `\n        <tui-svg\n            class=\"tui-space_right-2\"\n            [src]=\"icon\"\n        ></tui-svg>\n        <ng-container [ngTemplateOutlet]=\"context.template\"></ng-container>\n    `,\n    styleUrls: [`content.less`],\n    host: {\n        '(click)': `onClick()`,\n    },\n})\nexport class FoldersComponent extends TuiTreeItemContentComponent {\n    get icon(): string {\n        return this.isExpandable ? `tuiIconFolderLarge` : `tuiIconFileLarge`;\n    }\n}\n"}}]);