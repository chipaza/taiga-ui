(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8923],{8923:n=>{n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {tuiAsPortal, tuiInjectElement, TuiPortalsComponent} from '@taiga-ui/cdk';\nimport type {TuiRectAccessor} from '@taiga-ui/core';\nimport {tuiAsViewport, TuiDropdownService} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    selector: 'portal-host',\n    template: `\n        <ng-content></ng-content>\n        <ng-container #viewContainer></ng-container>\n    `,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        TuiDropdownService,\n        tuiAsPortal(TuiDropdownService),\n        tuiAsViewport(PortalHost),\n    ],\n})\nexport class PortalHost extends TuiPortalsComponent implements TuiRectAccessor {\n    private readonly el = tuiInjectElement();\n\n    public readonly type = 'viewport';\n\n    public getClientRect(): DOMRect {\n        return this.el.getBoundingClientRect();\n    }\n}\n"}}]);