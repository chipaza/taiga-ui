(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{iw9y:function(e,t,n){"use strict";n.r(t),n.d(t,"PortalsModule",(function(){return P}));var a=n("An66"),o=n("1VvW"),l=n("SVIu"),r=n("Qq0t"),c=n("dvRg"),i=n("sI+y"),s=n("kZht"),d=n("OZlg"),m=n("e0eB"),u=n("iyc4"),p=n("JF5R"),f=n("zV1d"),h=n("ONKv");function b(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",3),s["\u0275\u0275elementStart"](1,"div",4),s["\u0275\u0275text"](2," Hello Taiga UI "),s["\u0275\u0275element"](3,"tui-svg",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())}let v=(()=>{class e{constructor(e){this.customPortalService=e,this.templates=[]}addTemplate(e){this.templates.push(this.customPortalService.addTemplate(e))}removeTemplate(){const e=this.templates.pop();e&&this.customPortalService.removeTemplate(e)}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](p.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-portals-example-1"]],decls:6,vars:0,consts:[["tuiButton","","size","s","icon","tuiIconPlus",3,"click"],["tuiButton","","size","s","appearance","secondary","icon","tuiIconTrash",1,"tui-space_left-3",3,"click"],["someTemplate",""],[1,"template"],[1,"greeting"],["src","tuiIconHeartFilledLarge",1,"icon"]],template:function(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"button",0),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=s["\u0275\u0275reference"](5);return t.addTemplate(n)})),s["\u0275\u0275text"](1," Add\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"button",1),s["\u0275\u0275listener"]("click",(function(){return t.removeTemplate()})),s["\u0275\u0275text"](3," Remove\n"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,b,4,0,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"])}},directives:[f.a,h.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.template[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12);padding:.5rem;margin:.5rem;border-radius:.25rem;animation:tuiFadeIn var(--tui-duration) var(--tui-duration);animation-fill-mode:backwards;background:var(--tui-support-01);font:var(--tui-font-text-m)}.icon[_ngcontent-%COMP%]{color:var(--tui-support-10)}"],changeDetection:0}),e})();var y=n("u8jZ");const S=["header",$localize`:␟6990ad8d6182662e864495ac31c3758cda1c7a28␟4093869278527257288:Portals`];var g;g=$localize`:␟23f7de716c50a1eebccc6387a6e2f7d867b65480␟3650013461314841380: You can easily create your custom portals by extending our abstract classes and put your own portal-host on any layer `;const E=["heading",$localize`:␟c51166dc63b5688fe60ffe24ba365a8911ece80a␟2457071683719965623:Custom portals`];function T(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,g),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](3,E),s["\u0275\u0275element"](4,"tui-portals-example-1"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",e.example1)}}var x,C,w;function A(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,x),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18nStart"](8,C),s["\u0275\u0275element"](9,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](10,"tui-doc-code",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"li"),s["\u0275\u0275elementStart"](12,"p"),s["\u0275\u0275i18n"](13,w),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](14,"tui-doc-code",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.service),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.host),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.insert)}}x=$localize`:␟82f2c5c1fe0161297fee7aab419529bff368851e␟6349617148825393682: Create your own portal service by extending ${"\ufffd#4\ufffd"}:START_TAG_CODE:AbstractTuiPortalService${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE:`,C=$localize`:␟f2023abf0fd8d24e02029d1438769aab4a736381␟7294662001982175681: Create your own portal host by extending ${"\ufffd#9\ufffd"}:START_TAG_CODE:AbstractTuiPortalHost${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE:`,w=$localize`:␟43f073c96be41fe59aed7ce4ea22d162ae2cd599␟8697865943911271747:Put the created portal host on a desired layer`;let O=(()=>{class e{constructor(){this.host=n.e(1530).then(n.bind(null,"t9eW")),this.service=n.e(1531).then(n.bind(null,"Sym5")),this.insert=n.e(1532).then(n.bind(null,"bwhc")),this.example1={TypeScript:n.e(1524).then(n.bind(null,"yAZ1")),HTML:n.e(1522).then(n.bind(null,"68e5")),LESS:n.e(1523).then(n.bind(null,"KQtr")),"portal/custom-portal.service.ts":n.e(1528).then(n.bind(null,"zacC")),"portal/custom-host.component.ts":n.e(1525).then(n.bind(null,"uQne")),"portal/custom-host.template.html":n.e(1527).then(n.bind(null,"Df+S")),"portal/custom-host.module.ts":n.e(1529).then(n.bind(null,"yCxH")),"portal/custom-host.style.less":n.e(1526).then(n.bind(null,"K5ru"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["portals"]],decls:4,vars:0,consts:[[6,"header"],["pageTab",""],["pageTab","Setup"],["id","custom-portals",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","my-service.ts",3,"code"],["filename","my-host.component.ts",3,"code"],["filename","app.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275i18nAttributes"](1,S),s["\u0275\u0275template"](2,T,5,1,"ng-template",1),s["\u0275\u0275template"](3,A,15,3,"ng-template",2),s["\u0275\u0275elementEnd"]())},directives:[d.a,m.a,u.a,v,y.a],encapsulation:2,changeDetection:0}),e})(),P=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.a,r.cb,c.z,l.m,r.bc,o.f.forChild(Object(l.u)(O))]]}),e})()}}]);