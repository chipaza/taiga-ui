"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[43949],{

/***/ 43949:
/***/ ((module) => {

module.exports = "```ts\nimport {FormControl, FormGroup} from '@angular/forms';\n\n// ...\n\n@Component({\n  // ...\n})\nexport class MyComponent {\n  items = [\n    {\n      name: 'Simple',\n      description: 'Something usual',\n    },\n    {\n      name: 'Advanced',\n      description: 'Something better',\n    },\n    {\n      name: 'PRO',\n      description: 'Something cool',\n    },\n  ];\n\n  testForm = new FormGroup({\n    tariff: new FormControl(this.items[0]),\n  });\n}\n```\n";

/***/ })

}]);