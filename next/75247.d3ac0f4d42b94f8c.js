(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[75247],{75247:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';\nimport {TuiAutoColorModule, TuiInitialsModule} from '@taiga-ui/experimental';\nimport {TuiAvatarComponent, TuiAvatarStackComponent} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    selector: 'tui-avatar-example-4',\n    imports: [\n        TuiAvatarStackComponent,\n        NgForOf,\n        TuiAvatarComponent,\n        TuiInitialsModule,\n        TuiAutoColorModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiAvatarExample4 {\n    readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];\n    readonly sizes: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [\n        'xxl',\n        'xl',\n        'l',\n        'm',\n        's',\n        'xs',\n    ];\n}\n"}}]);