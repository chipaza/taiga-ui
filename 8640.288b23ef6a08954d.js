(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8640],{7548:(e,t,n)=>{n.d(t,{m:()=>r});var i=n(43840),o=n(86112),l=n(74240);const a="Bell";class r extends l.Y{constructor(){super(...arguments),this.sizeVariants=["s","m","l"],this.hintContentVariants=["","Some content"],this.hintDirectionVariants=i.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.typeVariants=["text","email","password","tel","url"],this.maxLengthVariants=[10],this.inputModeVariants=["text","numeric"],this.customContentVariants=["",a,"tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=this.customContentVariants[0],this.inputMode=this.inputModeVariants[0],this.maxLength=null,this.type=this.typeVariants[0],this.cleaner=!1,this.pseudoInvalid=null,this.success=!1,this.readOnly=!1,this.labelOutside=!1,this.size=this.sizeVariants[2],this.exampleText="",this.filler="",this.minHeight=null,this.maxHeight=null,this.iconLeftVariants=["","tuiIconMailLarge","tuiIconPieChartLarge"],this.iconLeft=this.iconLeftVariants[0],this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0],this.dropdownOpen=new o.g(!1),this.dropdownAlignVariants=["left","right","center"],this.dropdownAlign=i.TUI_DROPDOWN_DEFAULT_OPTIONS.align,this.dropdownLimitWidthVariants=["fixed","min","auto"],this.dropdownLimitWidth=this.dropdownLimitWidthVariants[0],this.dropdownDirectionVariants=["bottom","top"],this.dropdownDirection=i.TUI_DROPDOWN_DEFAULT_OPTIONS.direction,this.dropdownMinHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight,this.dropdownMaxHeight=i.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight,this.prefixVariants=["","$","GBP","Very long text"],this.prefix=this.prefixVariants[0],this.postfix=this.prefixVariants[0],this.dropdownOffset=i.TUI_DROPDOWN_DEFAULT_OPTIONS.offset}get customContent(){return this.customContentSelected===a?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}},11307:(e,t,n)=>{n.d(t,{m:()=>i});const i=new(n(6528).UbH)("[ABSTRACT_PROPS_ACCESSOR]: Component extends AbstractExample class")},74240:(e,t,n)=>{n.d(t,{Y:()=>i});class i{constructor(){this.pseudoVariants=[!1,!0],this.textAlignVariants=["left","right"],this.textAlign=this.textAlignVariants[0],this.focusable=!0,this.pseudoFocused=null,this.pseudoHovered=null,this.pseudoPressed=null}}},8640:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiFilesModule:()=>Le});var i=n(86568),o=n(35856),l=n(82312),a=n(59130),r=n(43840),u=n(91009),s=n(6528),c=n(7548),m=n(11307),d=n(70348),p=n(16412),f=n(62012),h=n(13541),y=n(79092),g=n(62224),C=n(13692),w=n(96808),I=n(95356),E=n(56616),O=n(34496),G=n(37288),x=n(83480),P=n(96458),F=n(37763),v=n(20816),V=n(76468),Y=n(14184),T=n(51824);function R(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-input-files",5),s.qCj("reject",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.onReject(t))})),s.C$Y()}if(2&e){const e=s.GaO();s.E7m("formControl",e.control)}}function D(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",6),s.qCj("removed",(function(){s.usT(e);const t=s.GaO();return s.CGJ(t.removeFile())})),s.C$Y()}if(2&e){const e=t.ngIf,n=s.GaO();s.E7m("file",e)("showDelete",n.control.enabled)}}function k(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",7),s.qCj("removed",(function(){s.usT(e);const t=s.GaO();return s.CGJ(t.clearRejected())})),s.C$Y()}if(2&e){const e=t.ngIf,n=s.GaO();s.E7m("file",e)("showDelete",n.control.enabled)}}function b(e,t){if(1&e&&s.wR5(0,"tui-file",8),2&e){const e=t.ngIf,n=s.GaO();s.E7m("file",e)("showDelete",n.control.enabled)}}let $=(()=>{var e;class t{constructor(){this.control=new o.Ku(null),this.rejectedFiles$=new P.E,this.loadingFiles$=new P.E,this.loadedFiles$=this.control.valueChanges.pipe((0,F.G)((e=>e?this.makeRequest(e):(0,v.of)(null))))}onReject(e){this.rejectedFiles$.next(e)}removeFile(){this.control.setValue(null)}clearRejected(){this.removeFile(),this.rejectedFiles$.next(null)}makeRequest(e){return this.loadingFiles$.next(e),(0,V.k)(1e3).pipe((0,Y.k)((()=>Math.random()>.5?e:(this.rejectedFiles$.next(e),null))),(0,T.U)((()=>this.loadingFiles$.next(null))))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-input-files-example-1"]],decls:8,vars:10,consts:[["accept","image/*",3,"formControl","reject",4,"ngIf"],[1,"tui-space_top-1"],[3,"file","showDelete","removed",4,"ngIf"],["state","error",3,"file","showDelete","removed",4,"ngIf"],["state","loading",3,"file","showDelete",4,"ngIf"],["accept","image/*",3,"formControl","reject"],[3,"file","showDelete","removed"],["state","error",3,"file","showDelete","removed"],["state","loading",3,"file","showDelete"]],template:function(e,t){1&e&&(s.yuY(0,R,1,1,"tui-input-files",0),s.I0R(1,"tui-files",1),s.yuY(2,D,1,2,"tui-file",2),s.wVc(3,"async"),s.yuY(4,k,1,2,"tui-file",3),s.wVc(5,"async"),s.yuY(6,b,1,2,"tui-file",4),s.wVc(7,"async"),s.C$Y()),2&e&&(s.E7m("ngIf",!t.control.value),s.yG2(2),s.E7m("ngIf",s.kDX(3,4,t.loadedFiles$)),s.yG2(2),s.E7m("ngIf",s.kDX(5,6,t.rejectedFiles$)),s.yG2(2),s.E7m("ngIf",s.kDX(7,8,t.loadingFiles$)))},dependencies:[i.u_,o.ue,o.ug,d.Y,p.I,h.W,i.a],encapsulation:2,changeDetection:0}),t})();var j=n(18917),S=n(11664),z=n(19868);function M(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",5),s.qCj("removed",(function(){const t=s.usT(e).$implicit,n=s.GaO();return s.CGJ(n.removeFile(t))})),s.C$Y()}if(2&e){const e=t.$implicit,n=s.GaO();s.E7m("file",e)("showDelete",n.control.enabled)}}function A(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",6),s.qCj("removed",(function(){const t=s.usT(e).$implicit,n=s.GaO();return s.CGJ(n.clearRejected(t))})),s.C$Y()}if(2&e){const e=t.$implicit,n=s.GaO();s.E7m("file",e)("showDelete",n.control.enabled)}}const L=function(){return["maxLength"]};let _=(()=>{var e;class t{constructor(){this.control=new o.Ku([],[({value:e})=>e.length>5?{maxLength:new j.TuiValidationError("Error: maximum limit - 5 files for upload")}:null]),this.rejectedFiles=[]}ngOnInit(){this.control.statusChanges.subscribe((e=>{console.info("STATUS",e),console.info("ERRORS",this.control.errors,"\n")}))}onReject(e){this.rejectedFiles=[...this.rejectedFiles,...e]}removeFile({name:e}){var t,n;this.control.setValue(null!==(t=null===(n=this.control.value)||void 0===n?void 0:n.filter((t=>t.name!==e)))&&void 0!==t?t:[])}clearRejected({name:e}){this.rejectedFiles=this.rejectedFiles.filter((t=>t.name!==e))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-input-files-example-2"]],decls:8,vars:13,consts:[["accept","image/*",3,"formControl","multiple","ngModelChange","reject"],[1,"tui-space_top-1"],[3,"file","showDelete","removed",4,"ngFor","ngForOf"],["state","error",3,"file","showDelete","removed",4,"ngFor","ngForOf"],[3,"error","formControl"],[3,"file","showDelete","removed"],["state","error",3,"file","showDelete","removed"]],template:function(e,t){1&e&&(s.I0R(0,"tui-input-files",0),s.qCj("ngModelChange",(function(){return t.control.markAsTouched()}))("reject",(function(e){return t.onReject(e)})),s.C$Y(),s.I0R(1,"tui-files",1),s.yuY(2,M,1,2,"tui-file",2),s.wVc(3,"async"),s.yuY(4,A,1,2,"tui-file",3),s.C$Y(),s.wR5(5,"tui-error",4),s.wVc(6,"async"),s.wVc(7,"tuiFieldError")),2&e&&(s.E7m("formControl",t.control)("multiple",!0),s.yG2(2),s.E7m("ngForOf",s.kDX(3,6,t.control.valueChanges)),s.yG2(2),s.E7m("ngForOf",t.rejectedFiles),s.yG2(1),s.E7m("error",s.kDX(6,8,s.kDX(7,10,s.q4q(12,L))))("formControl",t.control))},dependencies:[i.ay,o.ue,o.ug,d.Y,p.I,h.W,S.a,i.a,z.M],encapsulation:2,changeDetection:0}),t})();var q=n(55412),J=n(79848);function N(e,t){if(1&e&&s.wR5(0,"tui-file",7),2&e){const e=t.$implicit,n=s.GaO();s.E7m("file",e)("showDelete",n.control.enabled)}}function H(e,t){if(1&e&&s.wR5(0,"tui-file",8),2&e){const e=t.$implicit,n=s.GaO();s.E7m("file",e)("showDelete",n.control.enabled)}}function W(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",9),s.qCj("removed",(function(){s.usT(e);const t=s.GaO();return s.CGJ(t.removeLoading())})),s.C$Y()}if(2&e){const e=s.GaO();s.E7m("file",e.loadingFile)("showDelete",e.control.enabled)}}function K(e,t){if(1&e&&s.wR5(0,"tui-file",7),2&e){const e=s.GaO();s.E7m("file",e.fileWithLink)("showDelete",e.control.enabled)}}function U(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",10)(1,"button",11),s.qCj("click",(function(){const t=s.usT(e).$implicit,n=s.GaO();return s.CGJ(n.restore(t))})),s.OEk(2," Restore "),s.C$Y()()}if(2&e){const e=t.$implicit,n=s.GaO();s.E7m("file",e)("showDelete",n.control.enabled)}}function Q(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",12),s.qCj("removed",(function(){const t=s.usT(e).$implicit,n=s.GaO();return s.CGJ(n.remove(t))})),s.C$Y()}if(2&e){const e=t.$implicit,n=s.GaO(),i=s.Gew(14);s.E7m("file",e)("leftContent",i)("showDelete",n.control.enabled)}}function X(e,t){1&e&&s.wR5(0,"tui-svg",13)}let B=(()=>{var e;class t{constructor(e){this.isE2E=e,this.control=new o.Ku(null),this.files=[{name:"Loaded.txt"},{name:"A file with a very very long title to check that it can be cut correctly.txt"}],this.loadingFile={name:"Loading file.txt"},this.rejectedFiles=[{name:"File with an error.txt",content:"Something went wrong this time"}],this.fileWithLink={name:"with link.txt",src:"https://tools.ietf.org/html/rfc675"},this.removedFiles=[this.loadingFile],this.restoredFiles=[]}removeLoading(){this.loadingFile=null}restore(e){e&&(this.restoredFiles=[...this.restoredFiles,e],this.removedFiles=this.removedFiles.filter((t=>e.name!==(null==t?void 0:t.name))))}remove(e){this.removedFiles=[...this.removedFiles,e],this.restoredFiles=this.restoredFiles.filter((t=>e.name!==(null==t?void 0:t.name)))}}return(e=t).ɵfac=function(t){return new(t||e)(s.GI1(j.TUI_IS_E2E))},e.ɵcmp=s.In1({type:e,selectors:[["tui-input-files-example-3"]],decls:15,vars:5,consts:[["state","normal",3,"file","showDelete",4,"ngFor","ngForOf"],["state","error",3,"file","showDelete",4,"ngFor","ngForOf"],["state","loading",3,"file","showDelete","removed",4,"ngIf"],["state","normal",3,"file","showDelete",4,"tuiItem"],["size","l","state","deleted",3,"file","showDelete",4,"ngFor","ngForOf"],["size","l","state","normal",3,"file","leftContent","showDelete","removed",4,"ngFor","ngForOf"],["icon",""],["state","normal",3,"file","showDelete"],["state","error",3,"file","showDelete"],["state","loading",3,"file","showDelete","removed"],["size","l","state","deleted",3,"file","showDelete"],["tuiLink","","type","button",3,"click"],["size","l","state","normal",3,"file","leftContent","showDelete","removed"],["src","tuiIconFileLarge"]],template:function(e,t){1&e&&(s.I0R(0,"tui-files"),s.yuY(1,N,1,2,"tui-file",0),s.yuY(2,H,1,2,"tui-file",1),s.yuY(3,W,1,2,"tui-file",2),s.C$Y(),s.I0R(4,"h4"),s.OEk(5,"With link"),s.C$Y(),s.I0R(6,"tui-files"),s.yuY(7,K,1,2,"tui-file",3),s.C$Y(),s.I0R(8,"h4"),s.OEk(9,"With deleted state"),s.C$Y(),s.I0R(10,"tui-files"),s.yuY(11,U,3,2,"tui-file",4),s.yuY(12,Q,1,3,"tui-file",5),s.C$Y(),s.yuY(13,X,1,0,"ng-template",null,6,s.gJz)),2&e&&(s.yG2(1),s.E7m("ngForOf",t.files),s.yG2(1),s.E7m("ngForOf",t.rejectedFiles),s.yG2(1),s.E7m("ngIf",t.loadingFile&&!t.isE2E),s.yG2(8),s.E7m("ngForOf",t.removedFiles),s.yG2(1),s.E7m("ngForOf",t.restoredFiles))},dependencies:[i.ay,i.u_,d.Y,p.I,f.S,q.C,J.W],encapsulation:2,changeDetection:0}),t})();function Z(e,t){if(1&e&&s.wR5(0,"tui-file",3),2&e){const e=s.GaO().$implicit;s.E7m("file",e)}}function ee(e,t){1&e&&(s.SAx(0),s.yuY(1,Z,1,1,"tui-file",2),s.k70())}function te(e,t){if(1&e&&s.wR5(0,"tui-file",5),2&e){const e=s.GaO().$implicit;s.E7m("file",e)}}function ne(e,t){1&e&&(s.SAx(0),s.yuY(1,te,1,1,"tui-file",4),s.k70())}let ie=(()=>{var e;class t{constructor(){this.height=3,this.files=[{name:"Loaded.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"one_more_file.txt"},{name:"last_file.txt"}],this.rejectedFiles=[{name:"File with an error.txt"}]}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-input-files-example-4"]],decls:3,vars:3,consts:[[3,"max"],[4,"ngFor","ngForOf"],["state","normal",3,"file",4,"tuiItem"],["state","normal",3,"file"],["state","error",3,"file",4,"tuiItem"],["state","error",3,"file"]],template:function(e,t){1&e&&(s.I0R(0,"tui-files",0),s.yuY(1,ee,2,0,"ng-container",1),s.yuY(2,ne,2,0,"ng-container",1),s.C$Y()),2&e&&(s.E7m("max",3),s.yG2(1),s.E7m("ngForOf",t.files),s.yG2(1),s.E7m("ngForOf",t.rejectedFiles))},dependencies:[i.ay,d.Y,p.I,f.S],encapsulation:2,changeDetection:0}),t})();var oe=n(54052);function le(e,t){1&e&&(s.I0R(0,"div",6),s.wR5(1,"tui-marker-icon",7),s.I0R(2,"div"),s.OEk(3,"Drop it like it's hot!"),s.C$Y()())}function ae(e,t){1&e&&(s.I0R(0,"div",6),s.wR5(1,"tui-marker-icon",8),s.I0R(2,"div"),s.OEk(3," Drag and drop file here or "),s.I0R(4,"a",9),s.OEk(5,"click to upload"),s.C$Y()()())}function re(e,t){if(1&e&&(s.yuY(0,le,4,0,"div",4),s.yuY(1,ae,6,0,"ng-template",null,5,s.gJz)),2&e){const e=t.$implicit,n=s.Gew(2);s.E7m("ngIf",e)("ngIfElse",n)}}function ue(e,t){1&e&&s.wR5(0,"tui-svg",10)}let se=(()=>{var e;class t{constructor(){this.control=new o.Ku(null),this.file={name:"custom.txt"}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-input-files-example-5"]],decls:8,vars:3,consts:[[1,"control",3,"formControl"],[3,"file","leftContent"],[1,"tui-text_body-s-2"],["content",""],["class","content",4,"ngIf","ngIfElse"],["base",""],[1,"content"],["mode","link","src","tuiIconDropletLarge"],["mode","link","src","tuiIconUploadCloudLarge"],["tuiLink",""],["src","tuiIconClockLarge"]],template:function(e,t){if(1&e&&(s.I0R(0,"tui-input-files",0),s.yuY(1,re,3,2,"ng-template"),s.C$Y(),s.I0R(2,"tui-files")(3,"tui-file",1)(4,"span",2),s.OEk(5,"file is on checking"),s.C$Y()()(),s.yuY(6,ue,1,0,"ng-template",null,3,s.gJz)),2&e){const e=s.Gew(7);s.E7m("formControl",t.control),s.yG2(3),s.E7m("file",t.file)("leftContent",e)}},dependencies:[i.u_,o.ue,o.ug,d.Y,p.I,h.W,q.C,J.W,oe.U],styles:[".control[_ngcontent-%COMP%]{height:10rem;margin-bottom:1rem}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem}"],changeDetection:0}),t})();function ce(e,t){if(1&e&&(s.I0R(0,"tui-input-files",3),s.wR5(1,"input",4),s.C$Y()),2&e){const e=s.GaO();s.E7m("formControl",e.control)}}function me(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",5),s.qCj("removed",(function(){s.usT(e);const t=s.GaO();return s.CGJ(t.removeFile())})),s.C$Y()}if(2&e){const e=t.ngIf;s.E7m("file",e)}}let de=(()=>{var e;class t{constructor(){this.control=new o.Ku(null)}removeFile(){this.control.setValue(null)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.In1({type:e,selectors:[["tui-input-files-example-6"]],decls:4,vars:4,consts:[[3,"formControl",4,"ngIf"],[1,"tui-space_top-1"],[3,"file","removed",4,"ngIf"],[3,"formControl"],["accept","image/*","capture","user","title","Choose files (no limits)","tuiInputFiles",""],[3,"file","removed"]],template:function(e,t){1&e&&(s.yuY(0,ce,2,1,"tui-input-files",0),s.I0R(1,"tui-files",1),s.yuY(2,me,1,1,"tui-file",2),s.wVc(3,"async"),s.C$Y()),2&e&&(s.E7m("ngIf",!t.control.value),s.yG2(2),s.E7m("ngIf",s.kDX(3,2,t.control.valueChanges)))},dependencies:[i.u_,o.ue,o.ug,d.Y,p.I,h.W,y.A,i.a],encapsulation:2,changeDetection:0}),t})();function pe(e,t){if(1&e&&(s.I0R(0,"p"),s.OEk(1,"An input for upload one or several files. It uses native input file abilities."),s.C$Y(),s.I0R(2,"tui-doc-example",2),s.wR5(3,"tui-input-files-example-1"),s.C$Y(),s.I0R(4,"tui-doc-example",3),s.wR5(5,"tui-input-files-example-2"),s.C$Y(),s.I0R(6,"tui-doc-example",4),s.wR5(7,"tui-input-files-example-3"),s.C$Y(),s.I0R(8,"tui-doc-example",5),s.wR5(9,"tui-input-files-example-4"),s.C$Y(),s.I0R(10,"tui-doc-example",6),s.wR5(11,"tui-input-files-example-5"),s.C$Y(),s.I0R(12,"tui-doc-example",7)(13,"tui-notification",8),s.OEk(14," The capture attribute works only on mobile browsers "),s.C$Y(),s.wR5(15,"tui-input-files-example-6"),s.C$Y()),2&e){const e=s.GaO();s.yG2(2),s.E7m("content",e.example1),s.yG2(2),s.E7m("content",e.example2),s.yG2(2),s.E7m("content",e.example3),s.yG2(2),s.E7m("content",e.example4),s.yG2(2),s.E7m("content",e.example5),s.yG2(2),s.E7m("content",e.example6)}}function fe(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",39),s.qCj("removed",(function(t){s.usT(e);const n=s.GaO().$implicit;s.GaO(2);const i=s.Gew(30);return s.GaO().removeFile(n),s.CGJ(i.emitEvent(t))})),s.C$Y()}if(2&e){const e=s.GaO().$implicit,t=s.GaO(3);s.E7m("file",e)("showDelete",t.showDelete)("showSize",t.showSize)("size",t.size)}}function he(e,t){1&e&&(s.SAx(0),s.yuY(1,fe,1,4,"tui-file",38),s.k70())}function ye(e,t){if(1&e&&(s.SAx(0),s.yuY(1,he,2,0,"ng-container",14),s.wVc(2,"async"),s.k70()),2&e){const e=s.GaO(2);s.yG2(1),s.E7m("ngForOf",s.kDX(2,1,e.multipleControl.valueChanges))}}function ge(e,t){if(1&e&&s.wR5(0,"tui-file",42),2&e){const e=s.GaO().ngIf,t=s.GaO(3);s.E7m("file",e)("showDelete",t.showDelete)("showSize",t.showSize)("size",t.size)}}function Ce(e,t){1&e&&(s.SAx(0),s.yuY(1,ge,1,4,"tui-file",41),s.k70())}function we(e,t){if(1&e&&s.yuY(0,Ce,2,0,"ng-container",40),2&e){const e=s.GaO(2);s.E7m("ngIf",e.control.value)}}function Ie(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-file",44),s.qCj("removed",(function(){s.usT(e);const t=s.GaO().$implicit,n=s.GaO(2);return s.CGJ(n.removeRejected(t))})),s.C$Y()}if(2&e){const e=s.GaO().$implicit,t=s.GaO(2);s.E7m("file",e)("showDelete",t.showDelete)("showSize",t.showSize)("size",t.size)}}function Ee(e,t){1&e&&(s.SAx(0),s.yuY(1,Ie,1,4,"tui-file",43),s.k70())}function Oe(e,t){1&e&&(s.OEk(0," Disabled state (use "),s.I0R(1,"code"),s.OEk(2,"formControl.disable()"),s.C$Y(),s.OEk(3," ) "))}function Ge(e,t){1&e&&s.OEk(0," Label text ")}function xe(e,t){1&e&&s.OEk(0," Link text ")}function Pe(e,t){1&e&&s.OEk(0," Max file size in bytes (30 MB by default — 30 * 1000 * 1000) ")}function Fe(e,t){1&e&&s.OEk(0," Emits file that was rejected. ")}function ve(e,t){1&e&&s.OEk(0," Allowed formats ")}function Ve(e,t){1&e&&s.OEk(0," Allowed capture ")}function Ye(e,t){1&e&&s.OEk(0," Allows to upload several files ")}function Te(e,t){1&e&&s.OEk(0," Maximum number of displayed files ")}function Re(e,t){1&e&&s.OEk(0," Expanded/collapsed state for multiple files that are limited by the max property ")}function De(e,t){1&e&&s.OEk(0," Allow to delete file after attach it ")}function ke(e,t){1&e&&s.OEk(0," File ")}function be(e,t){1&e&&s.OEk(0," State of the file ")}function $e(e,t){1&e&&s.OEk(0," Show file size ")}function je(e,t){1&e&&s.OEk(0," Component size ")}function Se(e,t){1&e&&s.OEk(0," Emits file on click on close button. When subscribed to, close button appears. ")}function ze(e,t){if(1&e){const e=s.KQA();s.I0R(0,"tui-doc-demo")(1,"tui-input-files",9),s.qCj("reject",(function(t){s.usT(e);const n=s.Gew(14);return s.GaO().updateRejected(t),s.CGJ(n.emitEvent(t))})),s.wR5(2,"input",10),s.C$Y(),s.I0R(3,"tui-files",11),s.qCj("expandedChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.expanded=t)})),s.yuY(4,ye,3,3,"ng-container",12),s.yuY(5,we,1,1,"ng-template",null,13,s.gJz),s.yuY(7,Ee,2,0,"ng-container",14),s.C$Y()(),s.I0R(8,"tui-doc-documentation",15),s.yuY(9,Oe,4,0,"ng-template",16),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.disabled=t)})),s.yuY(10,Ge,1,0,"ng-template",17),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.label=t)})),s.yuY(11,xe,1,0,"ng-template",18),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.link=t)})),s.yuY(12,Pe,1,0,"ng-template",19),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.maxFileSize=t)})),s.yuY(13,Fe,1,0,"ng-template",20,21,s.gJz),s.C$Y(),s.I0R(15,"tui-doc-documentation",22),s.wR5(16,"tui-doc-code",23),s.yuY(17,ve,1,0,"ng-template",24),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.accept=t)})),s.yuY(18,Ve,1,0,"ng-template",25),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.capture=t)})),s.yuY(19,Ye,1,0,"ng-template",26),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.multipleChange(t))})),s.C$Y(),s.I0R(20,"tui-doc-documentation",27),s.yuY(21,Te,1,0,"ng-template",28),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.maxFilesCount=t)})),s.yuY(22,Re,1,0,"ng-template",29),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.expanded=t)})),s.C$Y(),s.I0R(23,"tui-doc-documentation",30),s.yuY(24,De,1,0,"ng-template",31),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.showDelete=t)})),s.yuY(25,ke,1,0,"ng-template",32),s.yuY(26,be,1,0,"ng-template",33),s.yuY(27,$e,1,0,"ng-template",34),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.showSize=t)})),s.yuY(28,je,1,0,"ng-template",35),s.qCj("documentationPropertyValueChange",(function(t){s.usT(e);const n=s.GaO();return s.CGJ(n.size=t)})),s.yuY(29,Se,1,0,"ng-template",36,37,s.gJz),s.C$Y()}if(2&e){const e=s.Gew(6),t=s.GaO();s.yG2(1),s.E7m("focusable",t.focusable)("formControl",t.multiple?t.multipleControl:t.control)("label",t.label)("link",t.link)("maxFileSize",t.maxFileSize)("pseudoActive",t.pseudoPressed)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered),s.yG2(1),s.E7m("accept",t.accept)("multiple",t.multiple),s.e48("capture",t.capture),s.yG2(1),s.E7m("max",t.maxFilesCount)("expanded",t.expanded),s.yG2(1),s.E7m("ngIf",t.multiple)("ngIfElse",e),s.yG2(3),s.E7m("ngForOf",t.rejectedFiles),s.yG2(2),s.E7m("documentationPropertyValue",t.disabled),s.yG2(1),s.E7m("documentationPropertyValue",t.label),s.yG2(1),s.E7m("documentationPropertyValue",t.link),s.yG2(1),s.E7m("documentationPropertyValues",t.maxFileSizeVariants)("documentationPropertyValue",t.maxFileSize),s.yG2(4),s.E7m("code",t.nativeInputInsideInputFiles),s.yG2(1),s.E7m("documentationPropertyValues",t.acceptVariants)("documentationPropertyValue",t.accept),s.yG2(1),s.E7m("documentationPropertyValues",t.captureVariants)("documentationPropertyValue",t.capture),s.yG2(1),s.E7m("documentationPropertyValue",t.multiple),s.yG2(2),s.E7m("documentationPropertyValue",t.maxFilesCount),s.yG2(1),s.E7m("documentationPropertyValue",t.expanded),s.yG2(2),s.E7m("documentationPropertyValues",t.showDeleteVariants)("documentationPropertyValue",t.showDelete),s.yG2(3),s.E7m("documentationPropertyValue",t.showSize),s.yG2(1),s.E7m("documentationPropertyValues",t.sizeVariants)("documentationPropertyValue",t.size)}}function Me(e,t){if(1&e&&(s.I0R(0,"ol",45)(1,"li")(2,"p"),s.OEk(3," Import "),s.I0R(4,"code"),s.OEk(5,"TuiInputFilesModule"),s.C$Y(),s.OEk(6," into a module where you want to use our component "),s.C$Y(),s.wR5(7,"tui-doc-code",46),s.C$Y(),s.I0R(8,"li")(9,"p"),s.OEk(10,"Add to the template:"),s.C$Y(),s.wR5(11,"tui-doc-code",47),s.C$Y()()),2&e){const e=s.GaO();s.yG2(7),s.E7m("code",e.exampleModule),s.yG2(4),s.E7m("code",e.exampleHtml)}}let Ae=(()=>{var e;class t extends c.m{constructor(){super(...arguments),this.exampleModule=n.e(92136).then(n.t.bind(n,92136,17)),this.exampleHtml=n.e(49088).then(n.t.bind(n,49088,17)),this.nativeInputInsideInputFiles=n.e(47732).then(n.t.bind(n,47732,17)),this.example1={TypeScript:n.e(1848).then(n.t.bind(n,1848,17)),HTML:n.e(42992).then(n.t.bind(n,20612,17))},this.example2={TypeScript:n.e(94148).then(n.t.bind(n,94148,17)),HTML:n.e(96340).then(n.t.bind(n,96340,17))},this.example3={TypeScript:n.e(10408).then(n.t.bind(n,10408,17)),HTML:n.e(14536).then(n.t.bind(n,14536,17))},this.example4={TypeScript:n.e(78896).then(n.t.bind(n,78896,17)),HTML:n.e(84308).then(n.t.bind(n,84308,17))},this.example5={TypeScript:n.e(64516).then(n.t.bind(n,64516,17)),HTML:n.e(85676).then(n.t.bind(n,85676,17)),LESS:n.e(5972).then(n.t.bind(n,28352,17))},this.example6={TypeScript:n.e(56628).then(n.t.bind(n,56628,17)),HTML:n.e(13892).then(n.t.bind(n,13892,17))},this.control=new o.Ku(null),this.multipleControl=new o.Ku(null),this.link="Choose a file",this.label="or drop it here",this.multiple=!0,this.showSize=!0,this.showDelete=!0,this.expanded=!1,this.maxFilesCount=3,this.accept="",this.acceptVariants=["image/*","application/pdf","image/*,application/pdf"],this.capture=null,this.captureVariants=[null,"user","environment"],this.showDeleteVariants=[!0,!1,"always"],this.maxFileSizeVariants=[100,512e3,3e7,22e5],this.sizeVariants=["m","l"],this.size=this.sizeVariants[0],this.rejectedFiles=[],this.maxFileSize=this.maxFileSizeVariants[2]}removeFile(e){var t;this.multipleControl.setValue((null===(t=this.multipleControl.value)||void 0===t?void 0:t.filter((t=>t.name!==e.name)))||null)}removeRejected(e){this.rejectedFiles=this.rejectedFiles.filter((t=>t.name!==e.name))}updateRejected(e){this.rejectedFiles=[...this.rejectedFiles,...Array.isArray(e)?e:[e]]}multipleChange(e){this.rejectedFiles=[],this.control.setValue(null),this.multiple=e}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.otF(e)))(n||e)}}(),e.ɵcmp=s.In1({type:e,selectors:[["example-tui-input-files"]],features:[s.M5G([{provide:m.m,useExisting:(0,s.wd)((()=>e))}]),s.eg9],decls:4,vars:0,consts:[["header","InputFiles","package","KIT","type","components"],["pageTab",""],["id","single","heading","Basic single",3,"content"],["id","multiple","heading","multiple",3,"content"],["id","standalone-files","heading","Standalone files",3,"content"],["id","with-button","heading","With button",3,"content"],["id","custom","heading","Custom content",3,"content"],["id","front-camera","heading","Camera capture",3,"content"],["status","warning",1,"tui-space_bottom-4"],[3,"focusable","formControl","label","link","maxFileSize","pseudoActive","pseudoFocus","pseudoHover","reject"],["tuiInputFiles","",3,"accept","multiple"],[1,"tui-space_top-2",3,"max","expanded","expandedChange"],[4,"ngIf","ngIfElse"],["single",""],[4,"ngFor","ngForOf"],["heading","TuiInputFiles"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","link","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxFileSize","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","reject","documentationPropertyType","TuiFileLike"],["documentationPropertyReject","documentationProperty"],["heading","Native <input> inside TuiInputFiles"],[3,"code"],["documentationPropertyMode","input","documentationPropertyName","accept","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","attr.capture","documentationPropertyType","'user' | 'environment' | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","multiple","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","TuiFiles"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","expanded","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","TuiFile"],["documentationPropertyMode","input","documentationPropertyName","showDelete","documentationPropertyType","boolean | 'always'",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","file","documentationPropertyType","TuiFileLike"],["documentationPropertyMode","input","documentationPropertyName","state","documentationPropertyType","TuiFileState"],["documentationPropertyMode","input","documentationPropertyName","showSize","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","size","documentationPropertyType","TuiSizeL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","removed","documentationPropertyType","TuiFileLike"],["documentationPropertyRemoved","documentationProperty"],[3,"file","showDelete","showSize","size","removed",4,"tuiItem"],[3,"file","showDelete","showSize","size","removed"],[4,"ngIf"],[3,"file","showDelete","showSize","size",4,"tuiItem"],[3,"file","showDelete","showSize","size"],["state","error",3,"file","showDelete","showSize","size","removed",4,"tuiItem"],["state","error",3,"file","showDelete","showSize","size","removed"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(s.I0R(0,"tui-doc-page",0),s.yuY(1,pe,16,6,"ng-template",1),s.yuY(2,ze,31,34,"ng-template",1),s.yuY(3,Me,12,2,"ng-template",1),s.C$Y())},dependencies:[i.ay,i.u_,o.ue,o.ug,d.Y,p.I,f.S,h.W,y.A,g.e,C.u,w.m,I.I,E.S,O.E,G.u,x.I,$,_,B,ie,se,de,i.a],encapsulation:2,changeDetection:0}),t})(),Le=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=s.a4G({type:e}),e.ɵinj=s.s3X({imports:[i.MD,o.sl,u.TuiFilesModule,u.TuiInputFilesModule,r.TuiLinkModule,r.TuiButtonModule,r.TuiSvgModule,r.TuiErrorModule,u.TuiFieldErrorPipeModule,r.TuiNotificationModule,u.TuiMarkerIconModule,a.kx,l.qQ.forChild((0,a._A)(Ae))]}),t})()}}]);