(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[83380],{83380:n=>{n.exports="```js\nimport 'jest-preset-angular/setup-jest';\nimport '@ng-web-apis/universal/mocks';\n\n// allows you to do runtime reflection on types\nimport 'reflect-metadata';\n\n// make custom mocks\nwindow.AnimationEvent = {};\nwindow.TransitionEvent = {};\nwindow.DragEvent = class {};\nwindow.IntersectionObserver = function () {\n  this.observe = () => {};\n  this.unobserve = () => {};\n  this.disconnect = () => {};\n};\n// ...\n```\n"}}]);