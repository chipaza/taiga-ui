(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[69787],{69787:(t,e,n)=>{n.r(e),n.d(e,{IconsModule:()=>ut});var o=n(76733),i=n(72133),c=n(42932),r=n(79984),s=n(87253),u=n(64064),a=n(39854),l=n(20755),p=n(34816),g=n(73843),d=n(92425),m=n(25373),h=n(24556);const f=["tuiIconRedo","tuiIconRefresh","tuiIconRefreshLarge","tuiIconSortUp","tuiIconSortDown","tuiIconUndo"],y=["tuiIconElectron","tuiIconElectronMono","tuiIconCirrus","tuiIconMaestro","tuiIconMaestroMono","tuiIconMastercard","tuiIconMastercardMono","tuiIconMir","tuiIconMirMono","tuiIconVisa","tuiIconVisaMono","tuiIconUnionPay","tuiIconJCB","tuiIconPayPal","tuiIconAmex","tuiIconDinersClub","tuiIconDiscover","tuiIconHumo","tuiIconRuPay","tuiIconUzcard","tuiIconVerve"],I=["tuiIconApplePay","tuiIconGooglePay","tuiIconSamsungPay","tuiIconWorldPay","tuiIconAliPay","tuiIconAmazonPay","tuiIconAndroidPay"],T=(0,m.tuiCreateTokenFromFactory)((()=>(t=>{const{LARGE:e,NORMAL:n}=function(){const t=[],e=[],n=new Set([...y,...I]);for(const[o]of Object.entries(h))n.has(o)||"tuiCoreIcons"===o||"tuiKitIcons"===o||(o.includes("Large")?t.push(o):o.includes("Outline")||e.push(o));return{LARGE:t,NORMAL:e}}();return{"Description and examples":{"Normal / 16px":n.filter((e=>!t(e)&&!f.includes(e))),"Large / 24px":e.filter((e=>!t(e)&&!f.includes(e))),"Payment systems":y,"Payment services":I}}})((0,l.f3M)(u.TUI_SVG_OPTIONS).deprecated)));var x=n(2313),M=n(27146),v=n(62998),b=n(47880),P=n(36877),w=n(38404),Z=n(65004),C=n(43894),A=n(17894),O=n(53962),_=n(18004),U=n(20155),k=n(55333),L=n(81749);let q=(()=>{var t;class e{constructor(){this.template=(0,l.f3M)(l.Rgc)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=l.lG2({type:t,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"}}),e})();var J=n(13117),N=n(93815),S=n(51763),V=n(90189),F=n(4732),G=n(91734),Q=n(59915),z=n(59590),H=n(46946),E=n(56655);function $(t,e){1&t&&(l.TgZ(0,"p",9),l._uU(1," Nothing found "),l.qZA())}const R=function(){return{isIntersecting:!1}},B=function(t,e,n,o){return{icon:t,group:e,copyPath:n,entry:o}};function Y(t,e){if(1&t&&l.GkF(0,10),2&t){const t=e.$implicit,n=l.oxw(2).$implicit,o=l.oxw();l.Q6J("ngTemplateOutlet",(null==o.iconGroup?null:o.iconGroup.template)||null)("ngTemplateOutletContext",l.l5B(3,B,t,n,o.copyPath,l.DdM(2,R)))}}function D(t,e){if(1&t&&(l.ynx(0),l.TgZ(1,"div",4)(2,"h2",0),l._uU(3),l.qZA(),l.TgZ(4,"tui-badge",5),l._uU(5),l.qZA()(),l.YNc(6,$,2,0,"p",6),l.TgZ(7,"div",7),l.YNc(8,Y,1,8,"ng-container",8),l.qZA(),l.BQk()),2&t){const t=e.ngIf,n=l.oxw().$implicit,o=l.oxw();l.xp6(3),l.hij(" ",n," "),l.xp6(1),l.Q6J("appearance",t.length?"success":"error"),l.xp6(1),l.hij(" ",t.length.toString()," "),l.xp6(1),l.Q6J("ngIf",!t.length),l.xp6(1),l.Udp("--tui-text-01-night",o.color)("--tui-text-01",o.color),l.xp6(1),l.Q6J("ngForOf",t)}}function j(t,e){if(1&t&&(l.ynx(0),l.YNc(1,D,9,9,"ng-container",3),l.ALo(2,"tuiFilter"),l.ALo(3,"async"),l.BQk()),2&t){const t=e.$implicit,n=l.oxw();let o;l.xp6(1),l.Q6J("ngIf",l.Dn7(2,1,n.icons[t],n.matcher,null!==(o=l.lcZ(3,5,n.search$))&&void 0!==o?o:""))}}const K=["*"];let W=(()=>{var t;class e{constructor(){this.clipboard=(0,l.f3M)(O.TU),this.alerts=(0,l.f3M)(u.TuiAlertService),this.route=(0,l.f3M)(c.gz),this.router=(0,l.f3M)(c.F0),this.destroy$=(0,l.f3M)(m.TuiDestroyService,{self:!0}),this.icons={},this.color=null,this.matcher=m.TUI_DEFAULT_MATCHER,this.control=new i.NI(""),this.search$=this.route.queryParams.pipe((0,d.U)((t=>t.search??"")),(0,_.x)()),this.copyPath=t=>{this.clipboard.copy(t),this.alerts.open(`The name ${t} copied`,{status:"success"}).subscribe()}}ngOnInit(){this.control.patchValue(this.route.snapshot.queryParams.search??""),this.control.valueChanges.pipe((0,U.b)(500),(0,d.U)((t=>t||"")),(0,k.h)((t=>t.length>2||0===t.length)),(0,L.R)(this.destroy$)).subscribe((t=>{this.router.navigate([],{queryParams:{search:t}})}))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["icons-group"]],contentQueries:function(t,e,n){if(1&t&&l.Suo(n,q,5),2&t){let t;l.iGM(t=l.CRH())&&(e.iconGroup=t.first)}},inputs:{icons:"icons",color:"color"},features:[l._Bn([m.TuiDestroyService])],ngContentSelectors:K,decls:7,vars:6,consts:[[1,"title"],["tuiAutoFocus","","tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"formControl","tuiTextfieldCleaner","tuiTextfieldLabelOutside"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"header-group"],["size","m",1,"badge",3,"appearance"],["class","nothing",4,"ngIf"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[1,"nothing"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(l.F$t(),l.TgZ(0,"h2",0),l._uU(1,"Search by name"),l.qZA(),l.TgZ(2,"tui-input",1),l._uU(3," Input icon name to highlight\n"),l.qZA(),l.Hsn(4),l.YNc(5,j,4,7,"ng-container",2),l.ALo(6,"tuiKeys")),2&t&&(l.xp6(2),l.Q6J("formControl",e.control)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),l.xp6(3),l.Q6J("ngForOf",l.lcZ(6,4,e.icons)))},dependencies:[o.sg,o.O5,o.tP,J.K,N.w,S.z,V.bZ,F.b,G.x,Q.s,i.JJ,i.oH,z.k,o.Ov,H.R,E.S],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem;justify-content:center}.nothing[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem;justify-content:center}"],changeDetection:0}),e})();function X(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"button",11),l.NdJ("click",(function(){l.CHM(t);const e=l.oxw(),n=e.icon,o=e.copyPath;return l.KtG(o(n))})),l.qZA()}if(2&t){const t=l.oxw().icon;l.Q6J("icon",t),l.uIk("aria-label",t)}}function tt(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"div",9),l.NdJ("waIntersectionObservee",(function(e){const n=l.CHM(t).entry,o=l.oxw(3);return l.KtG(n.isIntersecting=n.isIntersecting||o.onIntersection(e))})),l.YNc(1,X,1,2,"button",10),l.qZA()}if(2&t){const t=e.entry;l.xp6(1),l.Q6J("ngIf",t.isIntersecting)}}function et(t,e){if(1&t&&(l.TgZ(0,"tui-notification"),l._uU(1," Open source theme for Taiga UI uses processed "),l.TgZ(2,"a",4),l._uU(3," Feather Icons "),l.qZA(),l._uU(4," as its icon pack with some custom made icons. "),l.qZA(),l.TgZ(5,"p"),l._uU(6," These icons can be used by name in "),l.TgZ(7,"a",5),l._uU(8," Svg "),l.qZA(),l._uU(9," component and all Taiga UI component accepting icons as input. If you use unsafe icons or inline SVG with linear gradient you need to provide "),l.TgZ(10,"a",6),l._uU(11," TUI_SANITIZER "),l.qZA(),l._uU(12," token, which is responsible for removing malicious code from the svg. "),l.qZA(),l.TgZ(13,"icons-group",7),l.YNc(14,tt,2,1,"ng-template",8),l.qZA()),2&t){const t=l.oxw().$implicit,e=l.oxw();l.xp6(13),l.Q6J("icons",e.icons[t])}}function nt(t,e){if(1&t&&l.YNc(0,et,15,1,"ng-template",3),2&t){const t=e.$implicit;l.Q6J("pageTab",t)}}function ot(t,e){1&t&&l._uU(0," SVG image code, link to a file, link to a segment or icon name. If you use name or segment, set icon size with CSS ")}function it(t,e){1&t&&l._uU(0," CustomEvent of loading error ")}function ct(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"div")(1,"tui-svg",12),l.NdJ("tui-icon-error",(function(e){l.CHM(t);const n=l.MAs(5);return l.KtG(n.emitEvent(e))})),l.qZA()(),l.TgZ(2,"tui-doc-documentation"),l.YNc(3,ot,1,0,"ng-template",13),l.NdJ("documentationPropertyValueChange",(function(e){l.CHM(t);const n=l.oxw();return l.KtG(n.icon=e)})),l.YNc(4,it,1,0,"ng-template",14,15,l.W1O),l.qZA(),l.TgZ(6,"ol",16)(7,"li")(8,"p"),l._uU(9," Import "),l.TgZ(10,"code"),l._uU(11,"TuiSvgModule"),l.qZA(),l._uU(12," into a module where you want to use our component "),l.qZA(),l._UZ(13,"tui-doc-code",17),l.qZA(),l.TgZ(14,"li")(15,"p"),l._uU(16,"Add to the template:"),l.qZA(),l._UZ(17,"tui-doc-code",18),l.qZA()()}if(2&t){const t=l.oxw();l.xp6(1),l.Q6J("src",t.icon),l.xp6(2),l.Q6J("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon),l.xp6(10),l.Q6J("code",t.exampleModule),l.xp6(4),l.Q6J("code",t.exampleHtml)}}let rt=(()=>{var t;class e{constructor(){this.mode=(0,l.f3M)(u.TuiModeDirective),this.icons=(0,l.f3M)(T),this.keys=Object.keys(this.icons),this.exampleModule=n.e(33309).then(n.t.bind(n,33309,17)),this.exampleHtml=n.e(8019).then(n.t.bind(n,8019,17)),this.iconVariants=["https://ng-web-apis.github.io/dist/assets/images/web-api.svg","tuiIconHelpCircle",'<svg xmlns="http://www.w3.org/2000/svg"\n             width="24px"\n             height="24px"\n             viewBox="0 0 24 24">\n            <path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n                c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n                s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n        </svg>',p.Ll`/images/ts.svg#ts`,p.Ll`/images/undefined.svg`],this.icon=this.iconVariants[0],this.mode$=this.mode.change$.pipe((0,g.O)(null),(0,d.U)((()=>this.mode.mode||"onLight")))}onIntersection(t){return t[t.length-1]?.isIntersecting??!1}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["icons"]],decls:3,vars:1,consts:[["header","Icons"],[4,"ngFor","ngForOf"],["pageTab","Component"],[3,"pageTab"],["href","https://feathericons.com/","rel","noreferrer","target","_blank","tuiLink",""],["routerLink","/icons/overview","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["waIntersectionObserver","","waIntersectionThreshold","0.5",3,"icons"],["iconGroup",""],[1,"icon-place",3,"waIntersectionObservee"],["appearance","icon","size","m","title","Copy","tuiIconButton","","type","button","class","icon",3,"icon","click",4,"ngIf"],["appearance","icon","size","m","title","Copy","tuiIconButton","","type","button",1,"icon",3,"icon","click"],[3,"src","tui-icon-error"],["documentationPropertyMode","input","documentationPropertyName","src","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","tui-icon-error","documentationPropertyType","CustomEvent<TuiIconError>"],["documentationPropertyIconErrorChange","documentationProperty"],[1,"b-demo-steps","tui-space_top-12"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,nt,1,1,null,1),l.YNc(2,ct,18,5,"ng-template",2),l.qZA()),2&t&&(l.xp6(1),l.Q6J("ngForOf",e.keys))},dependencies:[o.sg,o.O5,x.L,M.V,v.P,b.v,P.c,w.z,Z.B,C.q,A.n,W,q,c.rH,r.Z7,r.AY],styles:[".icon-place[_ngcontent-%COMP%]{min-width:4.25rem;min-height:4.25rem;display:flex;align-items:center;justify-content:center;padding:.125rem}.icon[_ngcontent-%COMP%]{transition:all .5s ease-in;border:1px solid var(--tui-base-03);box-shadow:0 .05rem .5rem #3333;will-change:transform,box-shadow;border-radius:.625rem}.icon[_ngcontent-%COMP%]:hover{transform:scale(1.5);background:var(--tui-base-01);z-index:1}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]:hover{transition:.5s}.icon[_ngcontent-%COMP%]:not(.t-appearance)     [tuiWrapper][data-appearance=icon]{opacity:1!important}"],changeDetection:0}),e})(),st=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=l.oAB({type:t}),t.ɵinj=l.cJS({imports:[o.ez,a.TuiInputModule,m.TuiKeysPipeModule,m.TuiFilterPipeModule,u.TuiHintModule,u.TuiTextfieldControllerModule,i.UX,m.TuiLetModule]}),e})(),ut=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=l.oAB({type:t}),t.ɵinj=l.cJS({imports:[o.ez,i.u5,u.TuiNotificationModule,u.TuiLinkModule,u.TuiSvgModule,u.TuiButtonModule,s.fV,st,c.Bz.forChild((0,s.Ve)(rt)),a.TuiCheckboxLabeledModule,r.$v]}),e})()}}]);