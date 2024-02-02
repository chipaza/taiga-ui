(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9288],{9288:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiBreakpointService, TuiSizeL} from '@taiga-ui/core';\nimport {map, Observable} from 'rxjs';\n\n@Component({\n    selector: 'tui-block-status-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiBlockStatusExample2 {\n    size$: Observable<TuiSizeL> = this.breakpointService.pipe(\n        map(key => (key === 'mobile' ? 'm' : 'l')),\n    );\n\n    constructor(\n        @Inject(TuiBreakpointService) readonly breakpointService: TuiBreakpointService,\n    ) {}\n}\n"}}]);