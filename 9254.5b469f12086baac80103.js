"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[9254],{

/***/ 9254:
/***/ ((module) => {

module.exports = "```ts\nimport {TuiLanguageName} from '@taiga-ui/i18n/interfaces';\nimport {tuiLanguageSwitcher} from '@taiga-ui/i18n/switch';\n\n@NgModule({\n  imports: [\n    // ...\n  ],\n  providers: [\n    // ...\n    tuiLanguageSwitcher(\n      /**\n       * @note:\n       * then the i18n language files will be loaded from node_modules\n       */\n      async (language: TuiLanguageName): Promise<unknown> =>\n        import(\n          /* webpackMode: \"lazy\" */\n          /* webpackChunkName: \"i18n-lazy-\" */\n          `@taiga-ui/i18n/languages/${language}`\n          // also you can override the paths to your i18n language files\n        ),\n    ),\n  ],\n})\nexport class AppModule {}\n```\n";

/***/ })

}]);