webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},"aR8+":function(e,t,n){"use strict";var o=n("/oeL"),r=n("fc+i"),i=n("fL27"),c=n("Z04r"),a=n("b9Zm"),p=n("wQAS");n.d(t,"a",function(){return s});var u=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},s=function(){function e(){}return e}();s=u([n.i(o.b)({declarations:[p.a],imports:[r.a,i.a,c.a,a.a],providers:[],bootstrap:[p.a]})],s)},cDNt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("/oeL"),r=n("Qa4U"),i=n("aR8+");n("p5Ee").a.production&&n.i(o.a)(),n.i(r.a)().bootstrapModule(i.a)},efyd:function(e,t){e.exports='<div fxLayout="row" class="container">\n  <div fxLayout="column" fxFlex="320px" class="search">\n    <md-input-container>\n      <md-chip-list mdPrefix #chipList1>\n          <md-chip *ngFor="let person of people" [selectable]="true" [removable]="true" (remove)="remove(person)">\n            {{person.name}}\n            <md-icon mdChipRemove>cancel</md-icon>\n          </md-chip>\n      </md-chip-list>\n      <input mdInput placeholder="Search..."\n             [mdChipInputFor]="chipList1"\n             [mdChipInputAddOnBlur]="false"\n             (mdChipInputTokenEnd)="add($event)" />\n    </md-input-container>\n    <h1>--- Search bar ---</h1>\n  </div>\n  <div fxLayout="column" fxFlex="calc(100% - 320px)" class="content">\n    <h1>--- Content ---</h1>\n    <h1>--- Content ---</h1>\n    <h1>--- Content ---</h1>\n    <h1>--- Content ---</h1>\n    <h1>--- Content ---</h1>\n  </div>\n</div>\n'},hxJY:function(e,t,n){t=e.exports=n("rP7Y")(!1),t.push([e.i,".container{height:100%}.search{background-color:#eee}.content,.search{padding:16px;height:100%}.content{background-color:#aaa}",""]),e.exports=e.exports.toString()},n7du:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="n7du"},p5Ee:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={production:!1}},wQAS:function(e,t,n){"use strict";var o=n("/oeL");n.d(t,"a",function(){return i});var r=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},i=function(){function e(){this.title="app",this.people=[{name:"Kara"},{name:"Jeremy"},{name:"Topher"},{name:"Elad"},{name:"Kristiyan"},{name:"Paul"}]}return e.prototype.add=function(e){var t=e.input,n=e.value;(n||"").trim()&&this.people.push({name:n.trim()}),t&&(t.value="")},e.prototype.remove=function(e){var t=this.people.indexOf(e);t>=0&&this.people.splice(t,1)},e}();i=r([n.i(o._2)({selector:"app-root",template:n("efyd"),styles:[n("hxJY")]})],i)}},[0]);