(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90852],{90852:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiCalendarModule:()=>$});var a=n(88692),o=n(91795),i=n(64500),r=n(75526),u=n(59667),d=n(64537),c=n(66596),l=n(49746),m=n(83074),h=n(10977),s=n(62840),p=n(60404),y=n(43560),v=n(93525),g=n(38868);function M(e,t){if(1&e&&(d.TgZ(0,"div"),d._uU(1),d.qZA()),2&e){const e=d.oxw();d.xp6(1),d.hij("Chosen date: ",e.value,"")}}let f=(()=>{var e;class t{constructor(){this.value=null}onDayClick(e){this.value=e}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-1"]],decls:2,vars:2,consts:[[3,"value","dayClick"],[4,"ngIf"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-calendar",0),d.NdJ("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.YNc(1,M,2,1,"div",1)),2&e&&(d.Q6J("value",t.value),d.xp6(1),d.Q6J("ngIf",t.value))},dependencies:[a.O5,l.a],encapsulation:2,changeDetection:0}),t})();function x(e,t){if(1&e&&(d.TgZ(0,"div"),d._uU(1),d.qZA()),2&e){const e=d.oxw();d.xp6(1),d.hij("Chosen dates: ",e.value,"")}}let C=(()=>{var e;class t{constructor(){this.value=null,this.firstMonth=u.TuiMonth.currentLocal(),this.middleMonth=u.TuiMonth.currentLocal().append({month:1}),this.lastMonth=u.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null}onDayClick(e){null!==this.value&&this.value.isSingleDay||(this.value=new u.TuiDayRange(e,e)),this.value=u.TuiDayRange.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-2"]],decls:5,vars:17,consts:[[1,"wrapper"],[3,"maxViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"maxViewedMonth","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[4,"ngIf"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0)(1,"tui-calendar",1),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("dayClick",(function(e){return t.onDayClick(e)}))("monthChange",(function(e){return t.onMonthChangeFirst(e)})),d.qZA(),d.TgZ(2,"tui-calendar",2),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("dayClick",(function(e){return t.onDayClick(e)}))("monthChange",(function(e){return t.onMonthChangeMiddle(e)})),d.qZA(),d.TgZ(3,"tui-calendar",3),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("dayClick",(function(e){return t.onDayClick(e)}))("monthChange",(function(e){return t.onMonthChangeLast(e)})),d.qZA()(),d.YNc(4,x,2,1,"div",4)),2&e&&(d.xp6(1),d.Q6J("maxViewedMonth",t.firstMonth)("month",t.firstMonth)("showAdjacent",!1)("value",t.value)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("maxViewedMonth",t.middleMonth)("minViewedMonth",t.middleMonth)("month",t.middleMonth)("showAdjacent",!1)("value",t.value)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("minViewedMonth",t.lastMonth)("month",t.lastMonth)("showAdjacent",!1)("value",t.value)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("ngIf",t.value))},dependencies:[a.O5,l.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})();function T(e,t){if(1&e&&(d.TgZ(0,"div"),d._uU(1),d.qZA()),2&e){const e=d.oxw();d.xp6(1),d.hij("Chosen dates: ",e.value,"")}}const V=["var(--tui-primary)","var(--tui-info-fill)"],w=["var(--tui-success-fill)"];let P=(()=>{var e;class t{constructor(){this.value=null,this.firstMonth=u.TuiMonth.currentLocal(),this.middleMonth=u.TuiMonth.currentLocal().append({month:1}),this.lastMonth=u.TuiMonth.currentLocal().append({month:2}),this.hoveredItem=null,this.markerHandler=e=>e.day%2==0?V:w}onDayClick(e){null!==this.value&&this.value.isSingleDay||(this.value=new u.TuiDayRange(e,e)),this.value=u.TuiDayRange.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-3"]],decls:5,vars:20,consts:[[1,"wrapper"],[3,"markerHandler","maxViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"markerHandler","maxViewedMonth","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"markerHandler","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[4,"ngIf"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0)(1,"tui-calendar",1),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("dayClick",(function(e){return t.onDayClick(e)}))("monthChange",(function(e){return t.onMonthChangeFirst(e)})),d.qZA(),d.TgZ(2,"tui-calendar",2),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("dayClick",(function(e){return t.onDayClick(e)}))("monthChange",(function(e){return t.onMonthChangeMiddle(e)})),d.qZA(),d.TgZ(3,"tui-calendar",3),d.NdJ("hoveredItemChange",(function(e){return t.hoveredItem=e}))("dayClick",(function(e){return t.onDayClick(e)}))("monthChange",(function(e){return t.onMonthChangeLast(e)})),d.qZA()(),d.YNc(4,T,2,1,"div",4)),2&e&&(d.xp6(1),d.Q6J("markerHandler",t.markerHandler)("maxViewedMonth",t.firstMonth)("month",t.firstMonth)("showAdjacent",!1)("value",t.value)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("markerHandler",t.markerHandler)("maxViewedMonth",t.middleMonth)("minViewedMonth",t.middleMonth)("month",t.middleMonth)("showAdjacent",!1)("value",t.value)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("markerHandler",t.markerHandler)("minViewedMonth",t.lastMonth)("month",t.lastMonth)("showAdjacent",!1)("value",t.value)("hoveredItem",t.hoveredItem),d.xp6(1),d.Q6J("ngIf",t.value))},dependencies:[a.O5,l.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),t})(),k=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-4"]],features:[d._Bn([{provide:r.TUI_FIRST_DAY_OF_WEEK,useValue:u.TuiDayOfWeek.Sunday}])],decls:1,vars:0,template:function(e,t){1&e&&d._UZ(0,"tui-calendar")},dependencies:[l.a],encapsulation:2,changeDetection:0}),t})();const I=e=>10===e.day?"holiday":e.isWeekend?"weekend":"weekday";let A=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-5"]],features:[d._Bn([{provide:r.TUI_DAY_TYPE_HANDLER,useValue:I}])],decls:1,vars:0,template:function(e,t){1&e&&d._UZ(0,"tui-calendar")},dependencies:[l.a],styles:["tui-primitive-calendar [data-type=holiday]{background-color:var(--tui-support-09)}\n"],encapsulation:2,changeDetection:0}),t})(),Z=(()=>{var e;class t{constructor(){this.value=[]}onDayClick(e){this.value=this.value.find((t=>t.daySame(e)))?this.value.filter((t=>!t.daySame(e))):this.value.concat(e)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-6"]],decls:3,vars:2,consts:[[3,"value","dayClick"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-calendar",0),d.NdJ("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.TgZ(1,"div"),d._uU(2),d.qZA()),2&e&&(d.Q6J("value",t.value),d.xp6(2),d.hij("Chosen dates: ",t.value,""))},dependencies:[l.a],encapsulation:2,changeDetection:0}),t})();function _(e,t){if(1&e&&(d.TgZ(0,"div"),d._uU(1),d.qZA()),2&e){const e=d.oxw();d.xp6(1),d.hij("Chosen date: ",e.value,"")}}let D=(()=>{var e;class t{constructor(){this.value=null}onDayClick(e){this.value=e}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-calendar-example-7"]],decls:2,vars:2,consts:[["initialView","year",3,"value","dayClick"],[4,"ngIf"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-calendar",0),d.NdJ("dayClick",(function(e){return t.onDayClick(e)})),d.qZA(),d.YNc(1,_,2,1,"div",1)),2&e&&(d.Q6J("value",t.value),d.xp6(1),d.Q6J("ngIf",t.value))},dependencies:[a.O5,l.a],encapsulation:2,changeDetection:0}),t})();function H(e,t){1&e&&(d._uU(0," Use "),d.TgZ(1,"a",12),d._uU(2," TUI_FIRST_DAY_OF_WEEK "),d.qZA(),d._uU(3," token to change start day of the week (Monday by default). "))}function J(e,t){1&e&&(d._uU(0," Use "),d.TgZ(1,"code"),d._uU(2,"TUI_DAY_TYPE_HANDLER"),d.qZA(),d._uU(3," token to change cell's data-type attribute and customize its color. (The default color for Saturday and Sunday is var(--tui-negative)) "))}const N=function(){return["/components/input-date"]},U=function(){return["/components/input-date-range"]};function L(e,t){if(1&e&&(d.TgZ(0,"p"),d._uU(1," A simple calendar. If you want a textfield with date, see "),d.TgZ(2,"a",2),d._uU(3," InputDate "),d.qZA(),d._uU(4," and "),d.TgZ(5,"a",2),d._uU(6," InputDateRange "),d.qZA()(),d.TgZ(7,"tui-doc-example",3),d._UZ(8,"tui-calendar-example-1"),d.qZA(),d.TgZ(9,"tui-doc-example",4),d._UZ(10,"tui-calendar-example-2"),d.qZA(),d.TgZ(11,"tui-doc-example",5),d._UZ(12,"tui-calendar-example-3"),d.qZA(),d.TgZ(13,"tui-doc-example",6),d.YNc(14,H,4,0,"ng-template",null,7,d.W1O),d._UZ(16,"tui-calendar-example-4"),d.qZA(),d.TgZ(17,"tui-doc-example",8),d.YNc(18,J,4,0,"ng-template",null,9,d.W1O),d._UZ(20,"tui-calendar-example-5"),d.qZA(),d.TgZ(21,"tui-doc-example",10),d._UZ(22,"tui-calendar-example-6"),d.qZA(),d.TgZ(23,"tui-doc-example",11),d._UZ(24,"tui-calendar-example-7"),d.qZA()),2&e){const e=d.MAs(15),t=d.MAs(19),n=d.oxw();d.xp6(2),d.Q6J("routerLink",d.DdM(11,N)),d.xp6(3),d.Q6J("routerLink",d.DdM(12,U)),d.xp6(2),d.Q6J("content",n.example1),d.xp6(2),d.Q6J("content",n.example2),d.xp6(2),d.Q6J("content",n.example3),d.xp6(2),d.Q6J("content",n.example4)("description",e),d.xp6(4),d.Q6J("content",n.example5)("description",t),d.xp6(4),d.Q6J("content",n.example6),d.xp6(2),d.Q6J("content",n.example7)}}function b(e,t){1&e&&(d.TgZ(0,"div"),d._uU(1,"A handler that gets a date and returns true if it is disabled."),d.qZA(),d.TgZ(2,"strong"),d._uU(3,"Must be a pure function"),d.qZA())}function q(e,t){1&e&&d._uU(0," Show adjacent months days ")}function Q(e,t){1&e&&d._uU(0," Hovered date ")}function Y(e,t){1&e&&d._uU(0," A handler that gets date and returns null or a tuple with circled marker colors ")}function S(e,t){1&e&&d._uU(0," Maximal date to choose ")}function j(e,t){1&e&&d._uU(0," Maximal month to access ")}function E(e,t){1&e&&d._uU(0," Minimum date to choose ")}function R(e,t){1&e&&d._uU(0," Minimum month to access ")}function K(e,t){1&e&&d._uU(0," Current month ")}function O(e,t){1&e&&d._uU(0," Selected day or range ")}function F(e,t){1&e&&d._uU(0," Date click ")}function G(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-doc-demo")(1,"tui-calendar",13),d.NdJ("hoveredItemChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.hoveredItem=t)}))("monthChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.month=t)}))("dayClick",(function(t){d.CHM(e);const n=d.MAs(14);return d.KtG(n.emitEvent(t))})),d.qZA()(),d.TgZ(2,"tui-doc-documentation"),d.YNc(3,b,4,0,"ng-template",14),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.disabledItemHandler=t)})),d.YNc(4,q,1,0,"ng-template",15),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.showAdjacent=t)})),d.YNc(5,Q,1,0,"ng-template",16),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.hoveredItem=t)})),d.YNc(6,Y,1,0,"ng-template",17),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.markerHandler=t)})),d.YNc(7,S,1,0,"ng-template",18),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.max=t)})),d.YNc(8,j,1,0,"ng-template",19),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.max=t)})),d.YNc(9,E,1,0,"ng-template",20),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.min=t)})),d.YNc(10,R,1,0,"ng-template",21),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.min=t)})),d.YNc(11,K,1,0,"ng-template",22),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.month=t)})),d.YNc(12,O,1,0,"ng-template",23),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.value=t)})),d.YNc(13,F,1,0,"ng-template",24,25,d.W1O),d.qZA()}if(2&e){const e=d.oxw();d.xp6(1),d.Q6J("disabledItemHandler",e.disabledItemHandler)("markerHandler",e.markerHandler)("max",e.max)("maxViewedMonth",e.maxViewedMonth)("min",e.min)("minViewedMonth",e.minViewedMonth)("showAdjacent",e.showAdjacent)("value",e.value)("hoveredItem",e.hoveredItem)("month",e.month),d.xp6(2),d.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),d.xp6(1),d.Q6J("documentationPropertyValue",e.showAdjacent),d.xp6(1),d.Q6J("documentationPropertyValue",e.hoveredItem),d.xp6(1),d.Q6J("documentationPropertyValues",e.markerHandlerVariants)("documentationPropertyValue",e.markerHandler),d.xp6(1),d.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),d.xp6(1),d.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),d.xp6(1),d.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),d.xp6(1),d.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),d.xp6(1),d.Q6J("documentationPropertyValue",e.month),d.xp6(1),d.Q6J("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function z(e,t){if(1&e&&(d.TgZ(0,"ol",26)(1,"li")(2,"p"),d._uU(3," Import "),d.TgZ(4,"code"),d._uU(5,"TuiCalendarModule"),d.qZA(),d._uU(6," into a module where you want to use our component "),d.qZA(),d._UZ(7,"tui-doc-code",27),d.qZA(),d.TgZ(8,"li")(9,"p"),d._uU(10,"Add to the template:"),d.qZA(),d._UZ(11,"tui-doc-code",28),d.qZA()()),2&e){const e=d.oxw();d.xp6(7),d.Q6J("code",e.exampleModule),d.xp6(4),d.Q6J("code",e.exampleHtml)}}const W=["var(--tui-primary)","var(--tui-info-fill)"],B=["var(--tui-success-fill)"];let X=(()=>{var e;class t{constructor(){this.exampleModule=n.e(21580).then(n.t.bind(n,21580,17)),this.exampleHtml=n.e(84034).then(n.t.bind(n,84034,17)),this.example1={TypeScript:n.e(73773).then(n.t.bind(n,73773,17)),HTML:n.e(22029).then(n.t.bind(n,22029,17))},this.example2={TypeScript:n.e(80785).then(n.t.bind(n,80785,17)),HTML:n.e(97571).then(n.t.bind(n,97571,17))},this.example3={TypeScript:n.e(38596).then(n.t.bind(n,38596,17)),HTML:n.e(38918).then(n.t.bind(n,38918,17))},this.example4={TypeScript:n.e(92432).then(n.t.bind(n,92432,17)),HTML:n.e(48887).then(n.t.bind(n,48887,17))},this.example5={TypeScript:n.e(5657).then(n.t.bind(n,5657,17)),HTML:n.e(90903).then(n.t.bind(n,90903,17)),LESS:n.e(45575).then(n.t.bind(n,45575,17))},this.example6={TypeScript:n.e(42353).then(n.t.bind(n,42353,17)),HTML:n.e(81074).then(n.t.bind(n,81074,17))},this.example7={TypeScript:n.e(8088).then(n.t.bind(n,89602,17)),HTML:n.e(24892).then(n.t.bind(n,24892,17))},this.showAdjacent=!0,this.minVariants=[u.TUI_FIRST_DAY,new u.TuiDay(2017,2,5),new u.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[u.TUI_LAST_DAY,new u.TuiDay(2020,3,30),new u.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.minViewedMonthVariants=[new u.TuiMonth(0,0),new u.TuiMonth(2017,2),new u.TuiMonth(1900,0)],this.minViewedMonth=this.minViewedMonthVariants[0],this.maxViewedMonthVariants=[u.TUI_LAST_DAY,new u.TuiMonth(2020,3),new u.TuiMonth(2300,0)],this.maxViewedMonth=this.maxViewedMonthVariants[0],this.disabledItemHandlerVariants=[u.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.markerHandlerVariants=[r.TUI_DEFAULT_MARKER_HANDLER,e=>e.day%2==0?W:B],this.markerHandler=this.markerHandlerVariants[0],this.valueVariants=[u.TuiDay.currentLocal(),new u.TuiDayRange(u.TuiDay.currentLocal(),u.TuiDay.currentLocal().append({day:3})),new u.TuiDay(2020,3,21)],this.value=null,this.month=u.TuiMonth.currentLocal(),this.hoveredItem=null}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["example-tui-calendar"]],decls:4,vars:0,consts:[["header","Calendar","package","CORE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","base","heading","Basic",3,"content"],["id","range","heading","range",3,"content"],["id","markers","heading","With markers",3,"content"],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["id","color","heading","Color customization",3,"content","description"],["colorDescription",""],["id","select-multi-dates","heading","Select multiple dates",3,"content"],["id","year-view","heading","Open in year view",3,"content"],["fragment","first-day-of-week","routerLink","/utils/tokens","tuiLink",""],[3,"disabledItemHandler","markerHandler","max","maxViewedMonth","min","minViewedMonth","showAdjacent","value","hoveredItem","month","hoveredItemChange","monthChange","dayClick"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","showAdjacent","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","hoveredItem","documentationPropertyType","TuiDay | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","markerHandler","documentationPropertyType","TuiMarkerHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxViewedMonth","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minViewedMonth","documentationPropertyType","TuiMonth | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","month","documentationPropertyType","TuiMonth",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","value","documentationPropertyType","TuiDay | TuiDayRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","dayClick","documentationPropertyType","TuiDay"],["documentationPropertyDayClick","documentationProperty"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,L,25,13,"ng-template",1),d.YNc(2,G,15,27,"ng-template",1),d.YNc(3,z,12,2,"ng-template",1),d.qZA())},dependencies:[o.rH,c.V,l.a,m.c,h.F,s.z,p.B,y.q,v.n,g.f,f,C,P,k,A,Z,D],encapsulation:2,changeDetection:0}),t})(),$=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[a.ez,o.Bz,r.TuiLinkModule,r.TuiCalendarModule,i.fV,o.Bz.forChild((0,i.Ve)(X))]}),t})()}}]);