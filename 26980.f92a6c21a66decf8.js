(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26980],{26980:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiPreviewModule:()=>U});var n=i(86568),o=i(82312),c=i(59130),a=i(51496),r=i(18917),l=i(43840),s=i(58200),u=i(6528),p=i(62224),m=i(13692),d=i(34496),h=i(37288),w=i(83480),g=i(8673),v=i(67876),f=i(93380),C=i(84040),b=i(99080),y=i(28364);const I=["preview"],$=["contentSample"];function k(e,t){if(1&e&&u.wR5(0,"img",10),2&e){const e=t.polymorpheusOutlet;u.E7m("src",e,u.K6U)}}function x(e,t){if(1&e){const e=u.KQA();u.I0R(0,"tui-preview",4),u.qCj("tuiSwipe",(function(t){u.usT(e);const i=u.GaO();return u.CGJ(i.onSwipe(t))})),u.I0R(1,"tui-preview-title"),u.OEk(2),u.C$Y(),u.I0R(3,"tui-preview-pagination",5),u.qCj("indexChange",(function(t){u.usT(e);const i=u.GaO();return u.CGJ(i.index=t)})),u.C$Y(),u.I0R(4,"button",6),u.qCj("click",(function(){u.usT(e);const t=u.GaO();return u.CGJ(t.delete())})),u.C$Y(),u.I0R(5,"button",7),u.qCj("click",(function(){u.usT(e);const t=u.GaO();return u.CGJ(t.download())})),u.C$Y(),u.I0R(6,"button",8),u.qCj("click",(function(){const t=u.usT(e).$implicit;return u.CGJ(t.complete())})),u.C$Y(),u.yuY(7,k,1,1,"img",9),u.C$Y()}if(2&e){const e=u.GaO();u.E7m("rotatable",!0),u.yG2(2),u.cNF(e.title),u.yG2(1),u.E7m("length",e.length)("index",e.index),u.yG2(4),u.E7m("polymorpheusOutlet",e.previewContent)}}function R(e,t){1&e&&(u.I0R(0,"div",11)(1,"h1"),u.OEk(2,"Important document"),u.C$Y(),u.I0R(3,"p"),u.OEk(4,"Hello everyone! This is some important document in A4 format, although it is made using html"),u.C$Y(),u.I0R(5,"p"),u.OEk(6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),u.C$Y(),u.wR5(7,"img",12),u.C$Y())}let G=(()=>{var e;class t{constructor(e,t){this.previewService=e,this.alerts=t,this.index=0,this.length=2}get title(){return 0===this.index?"Transaction cert.jpg":"My face.jpg"}get previewContent(){return 0===this.index&&this.contentSample?this.contentSample:"https://avatars.githubusercontent.com/u/10106368"}show(){this.previewService.open(this.preview||"").subscribe({complete:()=>console.info("complete")})}download(){this.alerts.open("Downloading...").subscribe()}delete(){this.alerts.open("Deleting...").subscribe()}onSwipe(e){"left"===e.direction&&(this.index=(0,r.tuiClamp)(this.index+1,0,this.length-1)),"right"===e.direction&&(this.index=(0,r.tuiClamp)(this.index-1,0,this.length-1))}}return(e=t).ɵfac=function(t){return new(t||e)(u.GI1(a.TuiPreviewDialogService),u.GI1(l.TuiAlertService))},e.ɵcmp=u.In1({type:e,selectors:[["tui-preview-example-1"]],viewQuery:function(e,t){if(1&e&&(u.CC$(I,5),u.CC$($,5)),2&e){let e;u.wto(e=u.Gqi())&&(t.preview=e.first),u.wto(e=u.Gqi())&&(t.contentSample=e.first)}},decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["icon","tuiIconTrash","title","Delete","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconDownload","title","Download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","preview",3,"src",4,"polymorpheusOutlet"],["alt","preview",3,"src"],[1,"content"],["alt","logo","src","https://github.com/taiga-family/ng-polymorpheus/raw/master/projects/demo/assets/logo.svg",1,"polymorpheus"]],template:function(e,t){1&e&&(u.I0R(0,"div",0),u.OEk(1,"With all features"),u.C$Y(),u.I0R(2,"button",1),u.qCj("click",(function(){return t.show()})),u.OEk(3," Show preview\n"),u.C$Y(),u.yuY(4,x,8,5,"ng-template",null,2,u.gJz),u.yuY(6,R,8,0,"ng-template",null,3,u.gJz))},dependencies:[s.Af,g.K,v.i,f.u,C.W,b.W,y.g],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-base-01);width:50rem;height:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),t})();const Y=["preview"];function E(e,t){if(1&e){const e=u.KQA();u.I0R(0,"tui-preview",2),u.wR5(1,"iframe",3),u.I0R(2,"button",4),u.qCj("click",(function(){const t=u.usT(e).$implicit;return u.CGJ(t.complete())})),u.C$Y()()}2&e&&u.E7m("rotatable",!1)("zoomable",!1)}let S=(()=>{var e;class t{constructor(e){this.previewDialogService=e}show(){this.previewDialogService.open(this.preview||"").subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)(u.GI1(a.TuiPreviewDialogService))},e.ɵcmp=u.In1({type:e,selectors:[["tui-preview-example-2"]],viewQuery:function(e,t){if(1&e&&u.CC$(Y,5),2&e){let e;u.wto(e=u.Gqi())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],["allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","","frameborder","0","src","https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1","title","Youtube",1,"content"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"]],template:function(e,t){1&e&&(u.I0R(0,"button",0),u.qCj("click",(function(){return t.show()})),u.OEk(1," Show simple preview\n"),u.C$Y(),u.yuY(2,E,3,2,"ng-template",null,1,u.gJz))},dependencies:[g.K,v.i,f.u],styles:[".content[_ngcontent-%COMP%]{width:80%;height:80%}"],changeDetection:0}),t})();var O=i(86112),T=i(14184),D=i(82344),P=i(37763),q=i(27400),M=i(20816),j=i(76468),A=i(79848),z=i(18692);const _=["preview"];function J(e,t){1&e&&(u.SAx(0),u.I0R(1,"div",9),u.wR5(2,"tui-svg",10),u.I0R(3,"div"),u.OEk(4,"Preview unavailable"),u.C$Y()(),u.k70())}function B(e,t){if(1&e&&u.wR5(0,"img",11),2&e){const e=t.ngIf;u.E7m("src",e,u.K6U)}}function W(e,t){1&e&&u.wR5(0,"tui-loader",12)}function Q(e,t){if(1&e){const e=u.KQA();u.I0R(0,"tui-preview",2),u.wVc(1,"async"),u.wVc(2,"async"),u.wVc(3,"async"),u.I0R(4,"tui-preview-title"),u.OEk(5),u.wVc(6,"async"),u.C$Y(),u.I0R(7,"tui-preview-pagination",3),u.qCj("indexChange",(function(t){u.usT(e);const i=u.GaO();return u.CGJ(i.index$$.next(t))})),u.C$Y(),u.I0R(8,"button",4),u.qCj("click",(function(){u.usT(e);const t=u.GaO();return u.CGJ(t.download())})),u.C$Y(),u.I0R(9,"button",5),u.qCj("click",(function(){const t=u.usT(e).$implicit;return u.CGJ(t.complete())})),u.C$Y(),u.yuY(10,J,5,0,"ng-container",6),u.wVc(11,"async"),u.yuY(12,B,1,1,"img",7),u.wVc(13,"async"),u.yuY(14,W,1,0,"tui-loader",8),u.wVc(15,"async"),u.C$Y()}if(2&e){const e=u.GaO();u.E7m("rotatable",!u.kDX(1,8,e.contentUnavailable$))("zoomable",!u.kDX(2,10,e.contentUnavailable$)&&!u.kDX(3,12,e.loading$)),u.yG2(5),u.cNF(u.kDX(6,14,e.title$)),u.yG2(2),u.E7m("index",e.index$$.value)("length",e.items.length),u.yG2(3),u.E7m("ngIf",u.kDX(11,16,e.contentUnavailable$)),u.yG2(2),u.E7m("ngIf",u.kDX(13,18,e.imageSrc$)),u.yG2(2),u.E7m("ngIf",u.kDX(15,20,e.loading$))}}let X=(()=>{var e;class t{constructor(e){this.previewDialogService=e,this.items=[{title:"some table.xlsx",hasPreview:!1},{title:"Content #2",hasPreview:!0}],this.index$$=new O.g(0),this.item$=this.index$$.pipe((0,T.k)((e=>this.items[e])),(0,D.I)(r.tuiIsPresent)),this.title$=this.item$.pipe((0,T.k)((e=>e.title))),this.contentUnavailable$=this.item$.pipe((0,T.k)((e=>!e.hasPreview))),this.imageSrc$=this.item$.pipe((0,P.G)((e=>e.hasPreview?this.emulateBackendRequest().pipe((0,q.W)("")):(0,M.of)(null)))),this.loading$=this.imageSrc$.pipe((0,T.k)((e=>""===e)))}show(){this.previewDialogService.open(this.preview||"").subscribe()}download(){console.info("downloading...")}emulateBackendRequest(){return(0,j.k)(1500).pipe((0,T.k)((()=>"https://ng-web-apis.github.io/dist/assets/images/web-api.svg")))}}return(e=t).ɵfac=function(t){return new(t||e)(u.GI1(a.TuiPreviewDialogService))},e.ɵcmp=u.In1({type:e,selectors:[["tui-preview-example-3"]],viewQuery:function(e,t){if(1&e&&u.CC$(_,5),2&e){let e;u.wto(e=u.Gqi())&&(t.preview=e.first)}},decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],[3,"rotatable","zoomable"],[3,"index","length","indexChange"],["icon","tuiIconDownload","title","Download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["icon","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],[4,"ngIf"],["alt","img source","height","512","width","512",3,"src",4,"ngIf"],["size","xl","class","t-loader",4,"ngIf"],[1,"t-container"],["src","tuiIconFileLarge",1,"t-icon"],["alt","img source","height","512","width","512",3,"src"],["size","xl",1,"t-loader"]],template:function(e,t){1&e&&(u.I0R(0,"button",0),u.qCj("click",(function(){return t.show()})),u.OEk(1," Show preview\n"),u.C$Y(),u.yuY(2,Q,16,22,"ng-template",null,1,u.gJz))},dependencies:[n.u_,g.K,v.i,f.u,C.W,b.W,A.W,z.C,n.a],styles:[".content[_ngcontent-%COMP%]{background-color:#f5f1f1;width:25rem;height:37.5rem;padding:2.5rem;border-radius:.75rem}.t-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--tui-text-02-night)}.t-icon[_ngcontent-%COMP%]{margin-bottom:.75rem;transform:scale(4);height:5rem}.t-loader[_ngcontent-%COMP%]{width:4rem}"],changeDetection:0}),t})();function K(e,t){if(1&e&&(u.I0R(0,"p"),u.OEk(1," Preview component allows to open modal for viewing some document and to work with it (download, zoom, rotate etc) "),u.C$Y(),u.I0R(2,"p"),u.OEk(3,"As a document you can provide images, embeds and other arbitrary content."),u.C$Y(),u.I0R(4,"tui-notification",3),u.OEk(5," The component automatically adjusts to the mobile device "),u.C$Y(),u.I0R(6,"tui-doc-example",4),u.wR5(7,"tui-preview-example-1"),u.C$Y(),u.I0R(8,"tui-doc-example",5),u.wR5(9,"tui-preview-example-2"),u.C$Y(),u.I0R(10,"tui-doc-example",6),u.wR5(11,"tui-preview-example-3"),u.C$Y()),2&e){const e=u.GaO();u.yG2(6),u.E7m("content",e.example1),u.yG2(2),u.E7m("content",e.example2),u.yG2(2),u.E7m("content",e.example3)}}function L(e,t){if(1&e&&(u.I0R(0,"ol",7)(1,"li"),u.OEk(2," Create a template with tui-preview "),u.wR5(3,"tui-doc-code",8),u.C$Y(),u.I0R(4,"li"),u.OEk(5," Open the component from the "),u.I0R(6,"code"),u.OEk(7,"TuiPreviewDialogService"),u.C$Y(),u.OEk(8," as in the example "),u.wR5(9,"tui-doc-code",9),u.C$Y()()),2&e){const e=u.GaO();u.yG2(3),u.E7m("code",e.exampleHtml),u.yG2(6),u.E7m("code",e.exampleComponent)}}let V=(()=>{var e;class t{constructor(){this.exampleComponent=i.e(73856).then(i.t.bind(i,73856,17)),this.exampleHtml=i.e(69656).then(i.t.bind(i,69656,17)),this.example1={TypeScript:i.e(95376).then(i.t.bind(i,95376,17)),LESS:i.e(91664).then(i.t.bind(i,69283,17)),HTML:i.e(79404).then(i.t.bind(i,79404,17))},this.example2={TypeScript:i.e(15702).then(i.t.bind(i,15702,17)),LESS:i.e(44116).then(i.t.bind(i,66496,17)),HTML:i.e(99712).then(i.t.bind(i,99712,17))},this.example3={TypeScript:i.e(81e3).then(i.t.bind(i,81e3,17)),LESS:i.e(48852).then(i.t.bind(i,48852,17)),HTML:i.e(31672).then(i.t.bind(i,31672,17))}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.In1({type:e,selectors:[["example-preview"]],decls:3,vars:0,consts:[["header","Preview","package","ADDON-PREVIEW"],["pageTab",""],["pageTab","Setup"],[1,"tui-space_bottom-4"],["id","default","heading","Full preview",3,"content"],["id","simple","heading","Simple mode",3,"content"],["id","loading","heading","With loading and unavailable image",3,"content"],[1,"b-demo-steps"],["filename","some.component.html",3,"code"],["filename","some.component.ts",3,"code"]],template:function(e,t){1&e&&(u.I0R(0,"tui-doc-page",0),u.yuY(1,K,12,3,"ng-template",1),u.yuY(2,L,10,2,"ng-template",2),u.C$Y())},dependencies:[p.e,m.u,d.E,h.u,w.I,G,S,X],encapsulation:2,changeDetection:0}),t})(),U=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=u.a4G({type:e}),e.ɵinj=u.s3X({imports:[n.MD,s.Ux,l.TuiButtonModule,a.TuiPreviewModule,l.TuiNotificationModule,c.kx,l.TuiSvgModule,l.TuiLoaderModule,r.TuiSwipeModule,o.qQ.forChild((0,c._A)(V))]}),t})()}}]);