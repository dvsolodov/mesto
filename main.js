(()=>{"use strict";var e=document.querySelector("#edit-avatar-popup-btn"),t=document.querySelector("#edit-popup-btn"),n=document.querySelector("#add-popup-btn"),r={formSelector:"form",inputSelector:"form__input",buttonSubmitSelector:"form__button",buttonInactiveClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=i((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"enableValidation",(function(){r._setEventListeners()})),a(this,"clearErrors",(function(){r._inputElements.forEach((function(e){var t=r._form.querySelector("[data-id=error-"+e.dataset.id+"]");r._hideError(e,t)}))})),a(this,"setSubmitBtnState",(function(){r._hasInvalidInput()?r._hideSubmitButton():(r.clearErrors(),r._showSubmitButton())})),a(this,"_setEventListeners",(function(){r._inputElements.forEach((function(e){var t=r._form.querySelector("[data-id=error-"+e.dataset.id+"]");e.addEventListener("input",(function(){r._isValid(e,t),r.setSubmitBtnState()}))}))})),a(this,"_isValid",(function(e,t){e.validity.valid?r._hideError(e,t):r._showError(e,t)})),a(this,"_showError",(function(e,t){e.classList.add(r._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(r._errorClass)})),a(this,"_hideError",(function(e,t){e.classList.remove(r._inputErrorClass),t.textContent="",t.classList.remove(r._errorClass)})),a(this,"_showSubmitButton",(function(){r._btnSubmit.classList.remove(r._btnInactiveClass),r._btnSubmit.disabled=!1})),a(this,"_hideSubmitButton",(function(){r._btnSubmit.classList.add(r._btnInactiveClass),r._btnSubmit.disabled=!0})),a(this,"_hasInvalidInput",(function(){return r._inputElements.some((function(e){return!e.validity.valid}))})),this._form=n,this._inputElements=Array.from(this._form.querySelectorAll("."+t.inputSelector)),this._btnSubmit=this._form.querySelector("."+t.buttonSubmitSelector),this._btnInactiveClass=t.buttonInactiveClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}));function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=u((function e(t,n){var r=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"renderItems",(function(e){null==e?r._items.forEach((function(e){r._renderer(e)})):e.forEach((function(e){r._renderer(e)}))})),l(this,"addItem",(function(e){r._container.prepend(e)})),this._items=o,this._renderer=i,this._container=document.querySelector(n)}));function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.cardData,o=t.handleCardClick,i=t.handleCardDeletion,a=t.handleLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=r,this._card=document.querySelector(n).content.cloneNode(!0).querySelector(".photo"),this._img=this._card.querySelector(".photo__img"),this._title=this._card.querySelector(".photo__title"),this._btnDelete=this._card.querySelector(".photo__delete-btn"),this._btnLike=this._card.querySelector(".photo__like-btn"),this._likesCounter=this._card.querySelector(".photo__likes-counter"),this._handleCardClick=o,this._handleCardDeletion=i,this._handleLike=a}var t,n;return t=e,(n=[{key:"isLiked",value:function(){return!!this._btnLike.classList.contains("photo__like-btn_active")}},{key:"createCard",value:function(){return this._data.ownerId!==this._data.myId&&this._btnDelete.classList.add("photo__delete-btn_invisible"),this._img.src=this._data.link,this._img.alt=this._title.textContent=this._data.name,this.setLikesCounter(this._data.likes),this._setEventListeners(),this._card}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"getId",value:function(){return this._data.id}},{key:"setLikesCounter",value:function(e){for(var t=!1,n=0;n<e.length;n++)if(e[n]._id===this._data.myId){this._btnLike.classList.add("photo__like-btn_active"),t=!0;break}t||this._btnLike.classList.remove("photo__like-btn_active"),this._likesCounter.textContent=e.length}},{key:"_setEventListeners",value:function(){var e=this;this._img.addEventListener("click",(function(){e._handleCardClick(e._data)})),this._btnDelete.addEventListener("click",this._confirmDeletion.bind(this)),this._btnLike.addEventListener("click",this._toggleLike.bind(this))}},{key:"_toggleLike",value:function(){this._handleLike(this)}},{key:"_confirmDeletion",value:function(){this._handleCardDeletion(this)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupCloseIcon=this._popup.querySelector(".popup__close-btn"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closeByOverlay",value:function(e){e.currentTarget===e.target&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-btn"))&&e.close()}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector("#photo-img"),t._caption=t._popup.querySelector("#photo-caption"),t}return t=a,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=this._caption.textContent=e.name,m(C(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function I(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e,t){var n,r=e.submitCallback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._form=n._popup.querySelector("form"),n._submitBtn=n._form.querySelector(".form__button"),n._submitCallback=r.bind(j(n)),n._inputs=Array.from(n._form.querySelectorAll("input")),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setDataInForm",value:function(e){for(var t in e){var n=this._form.querySelector("[data-id=input-"+t+"]");null!==n&&(n.value=e[t])}}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback(e._getInputValues())})),L(R(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){L(R(a.prototype),"close",this).call(this),this._form.reset()}},{key:"getForm",value:function(){return this._form}},{key:"renderLoading",value:function(e){this._submitBtn.textContent=e}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.nameSelector,r=t.aboutUserSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._aboutUser=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._aboutUser.textContent,userId:this._userId}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._aboutUser.textContent=e.about,this._userId=e._id,this._avatar.src=e.avatar,this._avatar.alt=e.name}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.url,this._token=t.token,this._paramProfile="/users/me/",this._paramAvatar="/users/me/avatar/",this._paramCards="/cards/",this._paramLikes="/likes/",this._headers={authorization:this._token,"Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"getProfile",value:function(){var e=this;return fetch("".concat(this._baseUrl).concat(this._paramProfile),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"editProfile",value:function(e){var t=this,n=e.name,r=e.about;return fetch("".concat(this._baseUrl).concat(this._paramProfile),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl).concat(this._paramCards),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"addCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this._baseUrl).concat(this._paramCards),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl).concat(this._paramCards).concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl).concat(this._paramAvatar),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then((function(e){return t._checkResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl).concat(this._paramCards).concat(e).concat(this._paramLikes),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl).concat(this._paramCards).concat(e).concat(this._paramLikes),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка запроса: ".concat(e.status))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(e){var t={name:e.name,link:e.link,id:e._id,ownerId:e.owner._id,myId:J.getUserInfo().userId,likes:e.likes};return new d({cardData:t,handleCardClick:function(e){N.open(e)},handleCardDeletion:function(e){H.card=e,H.setDataInForm({confirm:e.getId()}),H.open()},handleLike:function(e){e.isLiked()?F.removeLike(e.getId()).then((function(t){e.setLikesCounter(t.likes)})).catch((function(e){return console.log(e)})):F.addLike(e.getId()).then((function(t){e.setLikesCounter(t.likes)})).catch((function(e){return console.log(e)}))}},"#card-template").createCard()},V=new f({items:[],renderer:function(e){V.addItem(x(e))}},".photos"),F=new A({url:"https://mesto.nomoreparties.co/v1/cohort-37",token:"7f6cc6de-c4ad-423a-8b4b-dcbd983f998a"}),N=new w("#view-popup"),J=new D({nameSelector:"#profile-info-name",aboutUserSelector:"#profile-info-about",avatarSelector:"#profile-info-avatar"}),H=new q({submitCallback:function(){var e=H.card;F.deleteCard(e.getId()).then((function(t){e.deleteCard(),H.card=null,H.close()})).catch((function(e){return console.log(e)}))}},"#confirm-popup"),M=new q({submitCallback:function(e){M.renderLoading("Сохранение..."),F.editAvatar(e).then((function(e){J.setUserInfo(e),M.close()})).catch((function(e){return console.log(e)})).finally((function(){M.renderLoading("Сохранить")}))}},"#edit-avatar-popup"),z=new q({submitCallback:function(e){z.renderLoading("Сохранение..."),F.editProfile(e).then((function(e){J.setUserInfo(e),z.close()})).catch((function(e){return console.log(e)})).finally((function(){z.renderLoading("Сохранить")}))}},"#edit-popup"),$=new q({submitCallback:function(e){$.renderLoading("Сохранение..."),F.addCard(e).then((function(e){var t=x(e);V.addItem(t),$.close()})).catch((function(e){return console.log(e)})).finally((function(){$.renderLoading("Сохранить")}))}},"#add-popup");M.setEventListeners(),$.setEventListeners(),N.setEventListeners(),z.setEventListeners(),H.setEventListeners();var G=new c(r,M.getForm()),K=new c(r,$.getForm()),Q=new c(r,z.getForm());G.enableValidation(),K.enableValidation(),Q.enableValidation(),Promise.all([F.getProfile(),F.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];J.setUserInfo(o),V.renderItems(i)})).catch((function(e){return console.log(e)})),e.addEventListener("click",(function(e){G.setSubmitBtnState(),M.open()})),n.addEventListener("click",(function(e){K.setSubmitBtnState(),$.open()})),t.addEventListener("click",(function(e){z.setDataInForm(J.getUserInfo()),Q.setSubmitBtnState(),z.open()}))})();