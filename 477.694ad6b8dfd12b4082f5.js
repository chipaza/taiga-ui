(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{dUiH:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-breadcrumbs-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiBreadcrumbsExample1 {\n    items = [\n        {\n            caption: 'Selects',\n            routerLink: '/components/select',\n        },\n        {\n            caption: 'Multi',\n            routerLink: '/components/multi-select',\n        },\n        {\n            caption: 'With tags',\n            routerLink: '/components/multi-select',\n        },\n        {\n            caption: 'Current',\n            routerLink: '/navigation/breadcrumbs',\n            routerLinkActiveOptions: {exact: true},\n        },\n    ];\n}\n"}}]);