(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35974],{35974:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiCompassModule:()=>N});var n=o(88692),i=o(91795),c=o(64500),a=o(73588),s=o(61917),r=o(64537),p=o(83116),u=o(83074),l=o(10977),d=o(62840),m=o(60404),g=o(43560),h=o(93525),f=o(38868),x=o(79121);let Z=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["tui-compass-example-1"]],decls:1,vars:0,template:function(e,t){1&e&&r._UZ(0,"tui-compass")},dependencies:[p.I],encapsulation:2,changeDetection:0}),t})();var y=o(53222);let T=(()=>{var e;class t{constructor(){this.degrees=0}calculate(e){const t=this.compass?.nativeElement.getBoundingClientRect()??y.EMPTY_CLIENT_RECT,o=Math.ceil(e.clientX-(t.left+t.width/2)),n=Math.ceil(e.clientY-(t.top+t.height/2));this.degrees=180-Math.atan2(o,n)*(180/Math.PI)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["tui-compass-example-2"]],viewQuery:function(e,t){if(1&e&&r.Gf(s.If,5,r.SBq),2&e){let e;r.iGM(e=r.CRH())&&(t.compass=e.first)}},hostBindings:function(e,t){1&e&&r.NdJ("mousemove",(function(e){return t.calculate(e)}),!1,r.evT)},decls:1,vars:1,consts:[[3,"degrees"]],template:function(e,t){1&e&&r._UZ(0,"tui-compass",0),2&e&&r.Q6J("degrees",t.degrees)},dependencies:[p.I],encapsulation:2,changeDetection:0}),t})();function P(e,t){if(1&e&&(r.TgZ(0,"tui-notification",2),r._uU(1," This code is "),r.TgZ(2,"strong"),r._uU(3,"experimental"),r.qZA(),r._uU(4," and is a subject to change. Expect final solution to be shipped in the next major version "),r.qZA(),r.TgZ(5,"tui-doc-example",3),r._UZ(6,"tui-compass-example-1"),r.qZA(),r.TgZ(7,"tui-doc-example",4),r._UZ(8,"tui-compass-example-2"),r.qZA()),2&e){const e=r.oxw();r.xp6(5),r.Q6J("content",e.example1),r.xp6(2),r.Q6J("content",e.example2)}}function C(e,t){1&e&&r._uU(0," Pointer direction in degrees ")}function v(e,t){1&e&&r._uU(0," Custom color ")}function w(e,t){if(1&e){const e=r.EpF();r.TgZ(0,"tui-doc-demo"),r._UZ(1,"tui-compass",5),r.qZA(),r.TgZ(2,"tui-doc-documentation"),r.YNc(3,C,1,0,"ng-template",6),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.degrees=t)})),r.qZA(),r.TgZ(4,"tui-doc-documentation",7),r.YNc(5,v,1,0,"ng-template",8),r.NdJ("documentationPropertyValueChange",(function(t){r.CHM(e);const o=r.oxw();return r.KtG(o.color=t)})),r.qZA()}if(2&e){const e=r.oxw();r.xp6(1),r.Udp("color",e.color),r.Q6J("degrees",e.degrees),r.xp6(2),r.Q6J("documentationPropertyValue",e.degrees),r.xp6(2),r.Q6J("documentationPropertyValues",e.colorVariants)("documentationPropertyValue",e.color)}}function _(e,t){if(1&e&&(r.TgZ(0,"ol",9)(1,"li")(2,"p"),r._uU(3,"Import module:"),r.qZA(),r._UZ(4,"tui-doc-code",10),r.qZA(),r.TgZ(5,"li")(6,"p"),r._uU(7,"Add to the template:"),r.qZA(),r._UZ(8,"tui-doc-code",11),r.qZA()()),2&e){const e=r.oxw();r.xp6(4),r.Q6J("code",e.exampleModule),r.xp6(4),r.Q6J("code",e.exampleHtml)}}let A=(()=>{var e;class t{constructor(){this.exampleModule=o.e(22114).then(o.t.bind(o,22114,17)),this.exampleHtml=o.e(36558).then(o.t.bind(o,36558,17)),this.example1={TypeScript:o.e(87726).then(o.t.bind(o,87726,17))},this.example2={TypeScript:o.e(592).then(o.t.bind(o,592,17))},this.colorVariants=["#428bf9","rgb(234, 56, 24)","var(--tui-positive)",""],this.color=this.colorVariants[0],this.degrees=90}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["example-compass"]],decls:4,vars:0,consts:[["header","Compass","package","EXPERIMENTAL","type","components"],["pageTab",""],["status","warning"],["id","without-direction","description","Direction isn't present (direction is NaN)","heading","Basic",3,"content"],["id","user-position","description","Following pointer on the page","heading","Direction",3,"content"],[3,"degrees"],["documentationPropertyName","degrees","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.color","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(r.TgZ(0,"tui-doc-page",0),r.YNc(1,P,9,2,"ng-template",1),r.YNc(2,w,6,6,"ng-template",1),r.YNc(3,_,9,2,"ng-template",1),r.qZA())},dependencies:[p.I,u.c,l.F,d.z,m.B,g.q,h.n,f.f,x.L,Z,T],encapsulation:2,changeDetection:0}),t})(),N=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({imports:[n.ez,s.Oz,c.fV,a.TuiNotificationModule,i.Bz.forChild((0,c.Ve)(A))]}),t})()}}]);