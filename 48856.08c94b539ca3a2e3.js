(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[48856],{48856:n=>{n.exports="```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n// ...\n\nexport class MyComponent {\n  constructor(\n    @Inject(TuiDialogService)\n    private readonly dialogs: TuiDialogService,\n  ) {}\n\n  // ...\n\n  open() {\n    this.dialogs.open('Hello!').subscribe();\n  }\n}\n```\n"}}]);