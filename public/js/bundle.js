(()=>{var e={399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={USER:1,CHAR:2,MASK:3}},643:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e)return[];for(var n=[],a=!1,s=0;s<e.length;s++){var r=t[e[s]];if(a&&r&&(r=null,a=!1),r)r.regexp&&n.push(r);else{if(!a&&"\\"===e[s]){a=!0;continue}a=!1,n.push({char:e[s],next:null})}}return n}},842:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=e.data,n=e.input,a=void 0===n?"":n,r=e.selection,o=e.mask,i=e.maskChar,c=e.maskString,l=[],u="",d=0,h=0,m=0,f=0;o[d];){var p=t.length>h?t[h]:null,v=o[d],g=null;if(r.start<=d&&m<a.length&&(g=a.slice(m)),v.char&&(g&&g[0]===v.char?m++:(p&&(p.char===v.char||p.type!==s.default.USER)||a)&&h++,l.push({char:v.char,type:s.default.CHAR}),g&&f++,u+=v.char),v.regexp){var k=null;if(g){for(var y=0;!v.regexp.test(g[y])&&g.length>y;)y++,m++;g.length>y&&(m++,f++,h++,k=g[y],l.push({char:k,type:s.default.USER}),u+=k)}if(!k){if(p&&p.type===s.default.CHAR&&t.length>h+1){h++;continue}p&&p.type===s.default.USER&&v.regexp.test(p.char)?(l.push({char:p.char,type:s.default.USER}),u+=p.char,h++):(k=c?c[d]:i,l.push({char:k,type:s.default.MASK}),t.length>d&&h++,u+=k)}}d++}for(var w=r.start+f,S=l.length-1,_=0;S>=0&&l[S].type!==s.default.USER;)l[S].type===s.default.MASK&&(_=0),l[S].type===s.default.CHAR&&_++,S--;S+=_;for(var b="",C=0;C<=S;C++)b+=l[C].char;return{value:l,visibleValue:b,maskedValue:u,selection:{start:w,end:w}}};var a,s=(a=n(399))&&a.__esModule?a:{default:a}},478:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.value,n=e.selection,a=e.reformat,r=(e.mask,e.maskChar),o=e.maskString;if(n.end<n.start){var i=n.end;n.end=n.start,n.start=i}return n.start===n.end?t:t.length>n.start?t.slice(0,n.start).concat(function(){if(a)return"";if(o){for(var e=[],t=n.start;t<n.end;t++)e.push({char:o[t],type:s.default.MASK});return e}return function(e){for(var t=[],n=0;n<e;n++)t.push({char:r,type:s.default.MASK});return t}(n.end-n.start)}(),t.slice(n.end,t.length)):t};var a,s=(a=n(399))&&a.__esModule?a:{default:a}},217:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createInput=t.defaults=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=c(n(643)),r=c(n(842)),o=c(n(478)),i=c(n(399));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){var n=t.value,a=t.mask,r=t.reformat,o=t.maskFormat,i=t.maskChar,c=t.maskString;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c&&c.length!==a.length)throw new Error("maskString must have same length as mask");if(i.length>1)throw new Error("maskChar must have only 1 char");this._maskString=c,this._maskChar=i,this._reformat=r,this.selection={start:0,end:0},this.setMaskFormat(o),this._mask=(0,s.default)(a,this._maskFormat),this.setValue(n)}return a(e,[{key:"setMaskFormat",value:function(e){this._maskFormat=e.reduce((function(e,t){return e[t.str]=t,e}),{})}},{key:"input",value:function(e){var t=this._value,n=void 0;this._reformat?n=this._reformat({data:t,input:e,selection:this.selection}):(t=(0,o.default)({value:t,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString}),this.selection.end=this.selection.start,n=(0,r.default)({data:t,input:e,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})),this._value=n.value,this._maskedValue=n.maskedValue,this._visibleValue=n.visibleValue,this.setSelection(n.selection)}},{key:"setSelection",value:function(e){var t=e.start,n=e.end;this.selection={start:t,end:n}}},{key:"getSelection",value:function(){return{start:this.selection.start,end:this.selection.end}}},{key:"backspace",value:function(){this.removePreviosOrSelected()}},{key:"paste",value:function(e){this.input(e)}},{key:"setMask",value:function(e){this._mask=(0,s.default)(e,this._maskFormat),this.setValue(this._value)}},{key:"getState",value:function(){return{value:this.getValue(),maskedValue:this.getMaskedValue(),visibleValue:this.getVisibleValue(),selection:this.getSelection()}}},{key:"getValue",value:function(){return this._value}},{key:"setReformat",value:function(e){this._reformat=e,this.setValue(this._value)}},{key:"getMaskedValue",value:function(){return this._maskedValue}},{key:"getVisibleValue",value:function(){return this._visibleValue}},{key:"setMaskChar",value:function(e){if(e.length>1)throw new Error("maskChar must have only 1 char");this._maskChar=e,this.setValue(this._value)}},{key:"setMaskString",value:function(e){if(e&&e.length!==this._mask.length)throw new Error("maskString must have same length as mask");this._maskString=e,this.setValue(this._value)}},{key:"removePreviosOrSelected",value:function(){this.selection.start===this.selection.end&&(this.selection.start=this.selection.end-1,this.selection.start<0&&(this.selection.start=0)),this.input("")}},{key:"removeNextOrSelected",value:function(){this.selection.start===this.selection.end&&this.selection.end++,this.input("")}},{key:"setValue",value:function(e){var t=void 0;if(this._reformat)t=this._reformat({data:e,selection:this.selection});else{var n=e;if(!Array.isArray(n)){n=[];for(var a=0;a<e.length;a++)n.push({char:e[a],type:i.default.USER})}t=(0,r.default)({data:n,selection:this.selection,mask:this._mask,maskChar:this._maskChar,maskString:this._maskString})}this._value=t.value,this._maskedValue=t.maskedValue,this._visibleValue=t.visibleValue,this.setSelection(t.selection)}}]),e}(),u=t.defaults={maskFormat:[{str:"0",regexp:/[0-9]/},{str:"*",regexp:/./},{str:"a",regexp:/[a-zA-Z]/}],maskChar:"",showMask:!1,removeSelectedRange:o.default};t.createInput=function(e){var t=e.value,n=e.maskString,a=e.mask,s=e.reformat,r=e.maskFormat,o=void 0===r?u.maskFormat:r,i=e.maskChar,c=s,d=a;return c||d?c&&(d=null):c=function(e){return e},new l({value:t,mask:d,reformat:c,maskFormat:o,maskChar:void 0===i?u.maskChar:i,maskString:n})}},780:(e,t,n)=>{"use strict";var a,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(217),o=(a=n(626))&&a.__esModule?a:{default:a},i=function(){function e(t,n){var a=this,s=n.mask,o=void 0===s?r.defaults.mask:s,i=n.value,c=void 0===i?"":i,l=n.reformat,u=n.maskString,d=n.maskChar,h=void 0===d?r.defaults.maskChar:d,m=n.maskFormat,f=void 0===m?r.defaults.maskFormat:m,p=n.showMask,v=n.alwaysShowMask,g=n.onChange;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.showValue=function(){a.showMask&&(a.canSetSelection||a.props.alwaysShowMask)?a.element.value=a.input.getMaskedValue():a.element.value=a.input.getVisibleValue()},this.setSelection=function(){if(a.canSetSelection){var e=a.input.getSelection();a.element.setSelectionRange(e.start,e.end),(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,0)})((function(){return a.element.setSelectionRange(e.start,e.end)}))}},this.onPaste=function(e){e.preventDefault(),a.getSelection(),a.input.paste(e.clipboardData.getData("Text")),a.showValue(),setTimeout(a.setSelection,0),a.props.onChange&&a.props.onChange(e)},this.onChange=function(e){var t;t=a.showMask&&(a.canSetSelection||a.props.alwaysShowMask)?a.input.getMaskedValue():a.input.getVisibleValue(),e.target.value!==t&&(a.getSelection(),a.input.setValue(e.target.value),a.showValue(),setTimeout(a.setSelection,0)),a.props.onChange&&a.props.onChange(e)},this.onKeyPress=function(e){e.metaKey||e.altKey||e.ctrlKey||"Enter"===e.key||(e.preventDefault(),a.getSelection(),a.input.input(e.key||e.data||String.fromCharCode(e.which)),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e))},this.onKeyDown=function(e){8===e.which&&(e.preventDefault(),a.getSelection(),a.input.removePreviosOrSelected(),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e)),46===e.which&&(e.preventDefault(),a.getSelection(),a.input.removeNextOrSelected(),a.showValue(),a.setSelection(),a.props.onChange&&a.props.onChange(e))},this.onFocus=function(){a.canSetSelection=!0},this.onBlur=function(){a.canSetSelection=!1},this.input=this.input=(0,r.createInput)({value:c,reformat:l,maskString:u,maskChar:h,mask:o,maskFormat:f}),this.props={mask:o,value:c,reformat:l,maskChar:h,maskFormat:f,maskString:u,showMask:p,alwaysShowMask:v,onChange:g},this.showMask=v||p,this.element=t,this.showValue(),this.subscribe()}return s(e,[{key:"getSelection",value:function(){this.input.setSelection({start:this.element.selectionStart,end:this.element.selectionEnd})}},{key:"subscribe",value:function(){this.unsubscribe={onPaste:(0,o.default)(this.element,"paste",this.onPaste),onKeyDown:(0,o.default)(this.element,"keydown",this.onKeyDown),onKeyPress:(0,o.default)(this.element,this.keyPressPropName(),this.onKeyPress),onChange:(0,o.default)(this.element,"change",this.onChange),onFocus:(0,o.default)(this.element,"focus",this.onFocus),onBlur:(0,o.default)(this.element,"blur",this.onBlur)}}},{key:"keyPressPropName",value:function(){return"undefined"!=typeof navigator&&navigator.userAgent.match(/Android/i)?"beforeinput":"keypress"}},{key:"setProps",value:function(e){var t=e.mask,n=e.value,a=e.reformat,s=e.maskString,r=e.maskChar,o=e.maskFormat,i=e.showMask,c=e.alwaysShowMask,l=e.onChange,u=!1;this.props.onChange!==l&&(this.props.onChange=l),this.props.alwaysShowMask===c&&this.props.showMask===i||(this.showMask=c||i,this.props.alwaysShowMask=c,this.props.showMask=i,u=!0),o&&o!==this.props.maskFormat&&(this.input.setMaskFormat(o),this.props.maskFormat=o,u=!0),t!==this.props.mask&&(this.input.setMask(t),this.props.mask=t,u=!0),s!==this.props.maskString&&(this.input.setMaskString(s),this.props.maskString=s,u=!0),r!==this.props.maskChar&&(this.input.setMaskChar(r),this.props.maskChar=r,u=!0),a!==this.props.reformat&&(this.input.setReformat(a),this.props.reformat=a,u=!0),n!==this.props.value&&(this.input.setValue(n),this.props.value=n,u=!0),u&&(this.showValue(),this.setSelection())}},{key:"destroy",value:function(){this.unsubscribe.onPaste(),this.unsubscribe.onKeyDown(),this.unsubscribe.onKeyPress(),this.unsubscribe.onChange(),this.unsubscribe.onFocus(),this.unsubscribe.onBlur()}}]),e}();t.Z=i},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},o=[],i=0;i<e.length;i++){var c=e[i],l=a.base?c[0]+a.base:c[0],u=r[l]||0,d="".concat(l," ").concat(u);r[l]=u+1;var h=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(m);else{var f=s(m,a);a.byIndex=i,t.splice(i,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=a(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var i=n(r[o]);t[i].references--}for(var c=a(e,s),l=0;l<r.length;l++){var u=n(r[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,s&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},626:e=>{!function(){"use strict";function t(e,t,n,a){var s="removeEventListener",r=function(){e[s](t,n)};return e.addEventListener?(e.addEventListener(t,n,a),r):e.attachEvent?(t="on"+t,e.attachEvent(t,n),s="detachEvent",r):e.on?(e.on(t,n),s="off",r):void 0}t.define=function(e,t){return function(n,a,s,r){return n[e](a,s,r),function(){n[t](a,s)}}},e.exports=t}()},619:()=>{const e=document.querySelectorAll(".dropdown:not(.is-hoverable)");if(e.length>0){for(const t of e)t.addEventListener("click",(function(e){e.stopPropagation(),t.classList.toggle("is-active")}));document.addEventListener("click",(function(e){t()}))}function t(){for(const t of e)t.classList.remove("is-active")}document.addEventListener("keydown",(function(e){const n=e||window.event;"Esc"!==n.key&&"Escape"!==n.key||t()}))},72:()=>{const e=function(e){e.preventDefault(),e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)},t=document.querySelectorAll(".buy");for(const n of t)n.addEventListener("click",e,!1)},514:()=>{const e=document.querySelector("#file-js-example input[type=file]");e.addEventListener("change",(()=>{e.files.length>0&&(document.querySelector("#file-js-example .file-name").textContent=e.files[0].name)}))}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};n.r(e);var t=n(379),a=n.n(t),s=n(795),r=n.n(s),o=n(569),i=n.n(o),c=n(565),l=n.n(c),u=n(216),d=n.n(u),h=n(589),m=n.n(h),f={};function p(e,t,n=""){const a=new Headers;return n&&a.append("Content-Type",n),async e=>{const n=await fetch(t,{method:"POST",body:e,headers:a});if(!n.ok)throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);return n.text()}}function v(){const e=document.querySelectorAll('input[type="text"]'),t=document.querySelectorAll("textarea"),n=g(e,e.length),a=g(t,t.length);return!(!n||!a)}function g(e,t){if(0===e.length)return!0;for(let n=0;n<t;n)if(!e[n].value)return!1;return!0}function k(e,t="success"){Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,didOpen:e=>{e.addEventListener("mouseenter",Swal.stopTimer),e.addEventListener("mouseleave",Swal.resumeTimer)}}).fire({icon:t,text:e})}function y(e,t){e.reset(),document.querySelector("#file").value="",document.querySelector(t).textContent="Ничего не добавлено"}function w(e){const t=window.location.origin+window.location.pathname;return e.filter((e=>e.page===t.split("/").pop()))}function S(e,t){const n=JSON.parse(e);for(;t.firstChild;)t.firstChild.remove();for(const e of n){const n=document.createElement("div");n.classList.add("column"),n.classList.add("is-one-quarter"),n.classList.add("game"),n.innerHTML+=`\n                    <div class="game-cover">\n                        <div class="buy" id="${e.id}">\n                            <span class="icon">\n                                <ion-icon name="cart-outline"></ion-icon>\n                            </span>\n                            Добавить в корзину\n                        </div>\n                        <figure class='image is-full'>\n                            <img src="images/administrator/${e.cover_game}" alt="<?=$game->name_game;?>">\n                        </figure>\n                    </div>\n                    <div class="game-description">\n                        <div class="game-title">\n                            ${e.name_game}\n                        </div>\n                        <div class="game-company">\n                            ${e.company.name_company}\n                        </div>\n                        <div class="game-price">\n                            ${e.base_price} &#x20bd\n                            <span class="discount">-${e.tax}%</span>\n                        </div>\n                    </div>`,t.append(n)}}f.styleTagTransform=m(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),a()(e.default,f),e.default&&e.default.locals&&e.default.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=w([{page:"add",action:"store",redirect:"",message:"Данные добавлены",message_error:"Произошла ошибка"},{page:"edit",action:"update",redirect:"",message:"Данные обновлены",message_error:"Произошла ошибка"},{page:"list",action:"delete",redirect:"list",message:"Данные удалены",message_error:"Произошла ошибка"},{page:"basket",action:"getProducts",header:"application/x-www-form-urlencoded"}]).shift(),t=p(FormData,e.action),n=document.querySelectorAll("form");for(const a of n)a.addEventListener("submit",(function(n){const s=v();n.preventDefault();const r=new FormData(this);var o;!1===s?k("Не все данные введены","error"):t(r).then((t=>{""===t.trim()?k(e.message):k(e.message_error,"error"),y(a,"#file-js-example .file-name")})).catch((e=>console.error(e))),setTimeout(void((o=e.redirect)&&window.setTimeout((function(){window.location=o}),2e3)),2e3)}))})),n(619);const _=document.querySelector("#dashboard");document.querySelector("#selector-games").addEventListener("change",(function(){k("Загружаем игры...","info"),p(this.value,"selector","application/x-www-form-urlencoded")(this.value).then((e=>{S(e,_)})).catch((e=>{console.log(e)}))}));const b=document.querySelector("#dashboard");document.querySelector("#selector-genres").addEventListener("change",(function(){k("Загружаем игры...","info"),p(this.value,"selector-genres","application/x-www-form-urlencoded")(this.value).then((e=>{S(e,b)})).catch((e=>{console.log(e)}))}));var C=n(780);function M(){const e=document.querySelector("#phone").value,t=document.querySelector("#password").value,n=function(e){return 11===e.replace(/\D/g,"").length}(e),a=function(e){return!(e.trim().length<5)}(t);return!(!n||!a)}const E=document.querySelector("#enterToAccount");function x(e){const t=JSON.parse(localStorage.getItem("steamCart")).filter((t=>t.id!==e));localStorage.setItem("steamCart",JSON.stringify(t))}E&&E.addEventListener("click",(function(){Swal.fire({title:"Войти в аккаунт",html:'<input id="phone" type="tel" class="auth-field input-selector" placeholder="Номер телефона"><div id="phoneErrDiv"></div><input id="password" type="password" class="auth-field" placeholder="Пароль"><div id="passwordErrDiv"></div>',preConfirm:()=>{if(M()){const e={header:"application/x-www-form-urlencoded"},t="auth",n={phone:document.querySelector("#phone").value,password:document.querySelector("#password").value},a=JSON.stringify(n);p(0,t,e.header)(a,t,e.header).then((e=>{1===e?window.setTimeout((function(){window.location="/"}),500):Swal.showValidationMessage("Проверьте правильность введных данных")})).catch((e=>{console.log(e)}))}else Swal.showValidationMessage("Проверьте правильность введных данных")},backdrop:'\n              rgba(18,97,199,0.4)\n              url("/images/nyan-cat.gif")\n              left tops\n              no-repeat\n            ',showConfirmButton:!0,showDenyButton:!0,background:"linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%)",confirmButtonColor:"#0C57C7",confirmButtonText:"Войти",denyButtonText:"или зарегестрироваться"}).then((e=>{e.isConfirmed?Swal.fire("Вы успешно вошли","","success"):e.isDenied&&(Swal.fire({title:"Зарегестрироваться",html:'<input id="phone" type="tel" class="auth-field input-selector" placeholder="Номер телефона"><div id="phoneErrDiv"></div><input id="password" type="password" class="auth-field" placeholder="Пароль"><div id="passwordErrDiv"></div>',preConfirm:()=>{if(M()){const e={header:"application/x-www-form-urlencoded"},t="register",n={phone:document.querySelector("#phone").value,password:document.querySelector("#password").value},a=JSON.stringify(n);p(0,t,e.header)(a,t,e.header).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}else Swal.showValidationMessage("Проверьте правильность введных данных")},showConfirmButton:!0,background:"linear-gradient(135deg, #dfe9f3 10%, #ffffff 100%)",confirmButtonColor:"#0C57C7",confirmButtonText:"Зарегестрироваться"}).then((e=>{e.isConfirmed&&M()&&(Swal.fire("Вы успешно зарегестрировались","","success"),window.setTimeout((function(){window.location="/basket"}),500))})),(0,C.Z)(document.querySelector(".input-selector"),{mask:"+7-(000)-000-00-00",alwaysShowMask:!0,maskChar:"_"}))})),(0,C.Z)(document.querySelector(".input-selector"),{mask:"+7-(000)-000-00-00",alwaysShowMask:!0,maskChar:"_"})}));const V=document.querySelector("#briefCart");function L(){if(V){const e=JSON.parse(localStorage.getItem("steamCart")),t={header:"application/x-www-form-urlencoded"},n=document.querySelector("#cartContent"),a=document.createElement("div");a.classList.add("cart-products");const s=document.createElement("div");s.classList.add("product-in-cart");const r=document.createElement("div");if(r.classList.add("product-in-cart__final-price"),0===e.length){const e=document.createElement("div");e.classList.add("empty-cart"),e.innerHTML="<div style='text-align: center;'>Корзина пустая :(</div>",n.append(e)}let o=0;const i="cart/brief",c=[];for(const t of e)c.push(Number.parseInt(t.id));p(0,i,t.header)(c).then((t=>{const i=JSON.parse(t);for(const[t,c]of i.entries())o+=e[t].count*c.price,s.innerHTML+=`<div class='product-in-cart__title'>${c.name_game}<span class='product-in-cart__count'>(x${e[t].count})</span><div class='product-in-cart__price'>${c.price}<label class='product-in-cart__delete' data-el='${e[t].id}' id='${e[t].id}'>удалить</label></div></div>`,r.innerHTML=`<div class='product-in-cart__price'>Финальная цена: ${o}</div><div class='arange'><a href='/basket'>Оформить</a></div>`,a.append(s),a.append(r),n.append(a)})).catch((e=>{console.log(e)})),setTimeout(T,1e3)}}function T(){for(const e of document.querySelectorAll(".product-in-cart__delete"))e.addEventListener("click",(e=>{x(e.target.dataset.el);const t=document.querySelectorAll(".cart-products")[0];t&&t.remove(),L()}))}let q;document.querySelector("#briefCart").addEventListener("click",(function(e){const t=document.querySelectorAll(".cart-products")[0];t&&t.remove(),L()}));for(const e of document.querySelectorAll(".buy"))e.addEventListener("click",(()=>P(e.id)));function P(e){if((async()=>{const e=await fetch("get_auth",{method:"POST"});if(!e.ok)throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);return await e.text()})().then((e=>{0===e.length&&(k("Вы не авторизованы","error"),q=0)})).catch((e=>console.error(e))),void 0!==q)return!1;const t=JSON.parse(localStorage.getItem("steamCart"))||[];let n=t.find((t=>t.id===e));n?n.count+=1:(n={id:e,count:1},t.push(n)),localStorage.setItem("steamCart",JSON.stringify(t)),L(),k(`Товар под номером ${e} в корзине`)}const A=w([{page:"add",action:"store",redirect:"",message:"Данные добавлены",message_error:"Произошла ошибка"},{page:"edit",action:"update",redirect:"",message:"Данные обновлены",message_error:"Произошла ошибка"},{page:"list",action:"delete",redirect:"list",message:"Данные удалены",message_error:"Произошла ошибка"},{page:"basket",action:"getProducts",header:"application/x-www-form-urlencoded"}]);if(A.length>0){const e=document.createElement("div");e.classList.add("basket-products");const t=document.createElement("div"),n=document.querySelector("#basket"),a=document.querySelector("#cart-data");let s=0,r=0;const o=[],i=A.shift(),c=JSON.parse(localStorage.getItem("steamCart"));0===c.length&&window.setTimeout((function(){window.location="/"}),500);for(const e of c)o.push(Number.parseInt(e.id));p(0,i.action,i.header)(o).then((o=>{const i=JSON.parse(o);for(const[t,a]of i.entries())s+=c[t].count*a.base_price,r+=c[t].count,e.innerHTML+=`<div class='product-in-cart__image'><img src='images/administrator/${a.cover_game}' alt='${a.name_game}'></div><div class='product-in-cart__description'><h2 class='<h2'>${a.name_game}</h2><div class='product-in-cart__company-information'>${a.company.name_company}</div><div class='product-in-cart__price-information'>${a.base_price} &#x20bd<span>(x${c[t].count})</span><span class='discount'>${a.tax.tax} %</span></div><div class='product-in-cart__product-categories'><ul class='column is-12'><li>${a.genre.name_genre}</li></ul></div><div class='product-in-cart__delete-from-cart'><a class='delete-link' data-el='${c[t].id}' id='${c[t].id}'>удалить из корзины</a></div></div>`,n.append(e);t.innerHTML+=`${r}<br>${s}&#x20bd <br>`,a.append(t)})).catch((e=>console.error(e))),setTimeout((function(){for(const e of document.querySelectorAll(".delete-link"))e.addEventListener("click",(e=>{x(e.target.dataset.el);const t=document.querySelectorAll(".cart-products")[0];t&&t.remove(),L(),window.setTimeout((function(){window.location="/basket"}),500)}))}),1e3)}n(72),n(514)})()})();