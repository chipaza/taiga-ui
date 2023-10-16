(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[4147],{4147:e=>{e.exports=JSON.parse('{"name":"@taiga-ui/components","version":"3.49.0","description":"Taiga UI by Tinkoff is a set of components, services, directives and other tools to build high quality UI using modern Angular framework","keywords":["angular","kit","ui","component-library","component","service","directive"],"homepage":"https://github.com/taiga-family/taiga-ui","repository":"https://github.com/taiga-family/taiga-ui","license":"Apache-2.0","maintainers":["Alex Inkin <alexander@inkin.ru>","Roman Sedov <79601794011@ya.ru>","Maksim Ivanov <splincodewd@yandex.ru>","Vladimir Potekhin <vladimir.potekh@gmail.com>","Nikita Barsukov <nikita.s.barsukov@gmail.com>"],"workspaces":["projects/*"],"scripts":{"postinstall":"npx husky install && npx ngcc --async","start":"nx serve demo","start:fast":"nx serve demo -c fast","start:default":"nx serve demo -c def","start:coalescing":"nx serve demo -c coalescing","start:shadow":"nx serve demo -c shadow","start:host":"nx serve demo --open --host 0.0.0.0 --disable-host-check","build:ssr":"nx build demo && nx run demo:server:production","prerender":"nx run demo:prerender","test":"nx run-many --target test --all --output-style=stream --parallel=1","test:e2e":"nx e2e-ui demo-cypress","*** Workflow ***":"","stylelint":"stylelint \'**/*.{less,css}\' --config package.json","lint":"eslint .","cspell":"cspell --relative --dot --gitignore .","prettier":"prettier !package-lock.json .  --ignore-path .gitignore","typecheck":"tsc --noEmit --strict --incremental false --tsBuildInfoFile null --project tsconfig.spec.json","*** Build **":"","build:demo":"nx build demo","build:demo:next":"nx build demo -c next","*** Release ***":"","release":"standard-version -a --no-verify","release:patch":"ts-node ./scripts/release.ts --release-as patch","release:minor":"ts-node ./scripts/release.ts --release-as minor","release:major":"ts-node ./scripts/release.ts --release-as major","*** CI ***":"","affected:test:libs":"nx affected --target test --exclude=demo --output-style=stream","affected:build:libs":"nx affected --target build --exclude=demo --output-style=stream","run-many:build:libs":"nx run-many --target build --all --exclude=demo --output-style=stream","run-many:publish:libs":"nx run-many --target publish --all --output-style=stream"},"commitlint":{"extends":["@taiga-ui/commitlint-config"]},"lint-staged":{"*.less":["stylelint --fix"],"*.{js,ts,html}":["eslint --fix","prettier --write"],"*.{svg,yml,md,less,json}":["prettier --write"]},"browserslist":["extends @taiga-ui/browserslist-config"],"prettier":"@taiga-ui/prettier-config","eslintConfig":{"extends":["plugin:@taiga-ui/experience/all","plugin:@taiga-ui/experience/taiga-naming-convention","plugin:@taiga-ui/experience/jest","plugin:@taiga-ui/experience/cypress","plugin:@taiga-ui/experience/playwright"]},"stylelint":{"extends":["@taiga-ui/stylelint-config/taiga"],"ignoreFiles":["**/demo/**","**/dist/**","**/coverage/**","**/node_modules/**"]},"dependencies":{"@angular/animations":"12.2.17","@angular/cdk":"12.2.13","@angular/common":"12.2.17","@angular/compiler":"12.2.17","@angular/core":"12.2.17","@angular/forms":"12.2.17","@angular/localize":"12.2.17","@angular/platform-browser":"12.2.17","@angular/platform-browser-dynamic":"12.2.17","@angular/platform-server":"12.2.17","@angular/router":"12.2.17","core-js":"2.6.12","parse5":"6.0.1","rxjs":"6.6.7","zone.js":"0.11.8"},"devDependencies":{"@angular-builders/custom-webpack":"12.1.3","@angular-devkit/build-angular":"12.2.18","@angular-devkit/core":"12.2.18","@angular/cli":"12.2.18","@angular/compiler-cli":"12.2.17","@angular/language-service":"12.2.17","@commitlint/cli":"17.7.2","@nx/jest":"16.10.0","@nx/node":"16.10.0","@nx/workspace":"16.10.0","@playwright/test":"1.39.0","@taiga-ui/browserslist-config":"0.2.0","@taiga-ui/commitlint-config":"0.2.1","@taiga-ui/cspell-config":"0.15.0","@taiga-ui/eslint-plugin-experience":"0.10.2","@taiga-ui/prettier-config":"0.3.1","@taiga-ui/stylelint-config":"0.5.1","@testing-library/cypress":"9.0.0","@tinkoff/tui-editor":"1.7.1","@types/glob":"8.1.0","@types/node":"18.18.3","@types/parse5":"6.0.3","@types/webpack-env":"1.18.2","angular-http-server":"1.12.0","babel-loader":"9.1.3","cpy-cli":"4.2.0","cspell":"7.3.8","cypress":"13.3.1","cypress-real-events":"1.10.3","eslint":"8.51.0","find-in-files":"0.5.0","http-server":"0.13.0","husky":"8.0.3","kill-port":"2.0.1","lint-staged":"13.3.0","ng-packagr":"12.2.7","nx":"16.10.0","nx-cloud":"16.4.0","prettier":"3.0.3","rollup":"2.79.1","standard-version":"8.0.2","stylelint":"15.10.3","ts-loader":"9.5.0","ts-mockito":"2.6.1","ts-node":"10.9.1","typescript":"4.3.5","wait-on":"6.0.1","webpack":"5.89.0"},"engines":{"node":">= 16.14","npm":">= 8.3","yarn":"Please use npm instead of yarn to install dependencies"},"authors":["Alex Inkin <alexander@inkin.ru>","Roman Sedov <79601794011@ya.ru>"],"overrides":{"webpack":"$webpack","babel-loader":"$babel-loader"},"standard-version":{"scripts":{"postchangelog":"ts-node ./scripts/postchangelog.ts","postbump":"ts-node ./scripts/postbump.ts"},"types":[{"type":"feat","section":"Features"},{"type":"fix","section":"Bug Fixes"},{"type":"deprecate","section":"Deprecations"}]}}')}}]);