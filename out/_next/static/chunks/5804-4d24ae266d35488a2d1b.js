(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5804],{4665:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,{Z:function(){return o}})},5804:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var o=n(4665);var i=n(7294),r=n(1033),s=null;"undefined"!==typeof CSS&&CSS.supports&&(CSS.supports("position","sticky")?s="sticky":CSS.supports("position","-webkit-sticky")&&(s="-webkit-sticky"));var a=!1;try{var c=Object.defineProperty({},"passive",{get:function(){a={passive:!0}}});window.addEventListener("testPassive",null,c),window.removeEventListener("testPassive",null,c)}catch(f){}var h=function(t){var e,n;function c(e){var n=t.call(this,e)||this;return n.addListener=function(t,e,o,i){t.addEventListener(e,o,i),n.unsubscribes.push((function(){return t.removeEventListener(e,o)}))},n.addResizeObserver=function(t,e){var o=new r.Z(e);o.observe(t),n.unsubscribes.push((function(){return o.disconnect()}))},n.registerContainerRef=function(t){s&&(n.node=t,t?(n.scrollPane=function(t){for(var e=t;e=e.parentElement;){var n=getComputedStyle(e,null).getPropertyValue("overflow-y");if(e===document.body)return window;if("auto"===n||"scroll"===n)return e}return window}(n.node),n.latestScrollY=n.scrollPane===window?window.scrollY:n.scrollPane.scrollTop,n.addListener(n.scrollPane,"scroll",n.handleScroll,a),n.addListener(n.scrollPane,"mousewheel",n.handleScroll,a),n.scrollPane===window?(n.addListener(window,"resize",n.handleWindowResize),n.handleWindowResize()):(n.addResizeObserver(n.scrollPane,n.handleScrollPaneResize),n.handleScrollPaneResize()),n.addResizeObserver(n.node.parentNode,n.handleParentNodeResize),n.handleParentNodeResize(),n.addResizeObserver(n.node,n.handleNodeResize),n.handleNodeResize({initial:!0}),n.initial()):(n.unsubscribes.forEach((function(t){return t()})),n.unsubscribes=[],n.scrollPane=null))},n.getCurrentOffset=function(){if("relative"===n.mode)return n.offset;var t=n.props,e=t.offsetTop,o=t.offsetBottom;return"stickyTop"===n.mode?Math.max(0,n.scrollPaneOffset+n.latestScrollY-n.naturalTop+e):"stickyBottom"===n.mode?Math.max(0,n.scrollPaneOffset+n.latestScrollY+n.viewPortHeight-(n.naturalTop+n.nodeHeight+o)):void 0},n.handleWindowResize=function(){n.viewPortHeight=window.innerHeight,n.scrollPaneOffset=0,n.handleScroll()},n.handleScrollPaneResize=function(){n.viewPortHeight=n.scrollPane.offsetHeight,n.scrollPane.firstChild.offsetParent===n.scrollPane?n.scrollPaneOffset=n.scrollPane.getBoundingClientRect().top:n.scrollPaneOffset=0,n.handleScroll()},n.handleParentNodeResize=function(){var t=n.node.parentNode,e=getComputedStyle(t,null),o=parseInt(e.getPropertyValue("padding-top"),10),i=parseInt(e.getPropertyValue("padding-bottom"),10);n.naturalTop=function(t,e){var n=t,o=0;e.firstChild&&e.firstChild.offsetParent!==e&&(o+=t.offsetTop-e.offsetTop,e=t.offsetParent,o+=-t.offsetTop);do{o+=n.offsetTop,n=n.offsetParent}while(n&&n!==e);return o}(t,n.scrollPane)+o+n.scrollPaneOffset;var r=n.parentHeight;n.parentHeight=t.getBoundingClientRect().height-(o+i),"relative"===n.mode&&(n.props.bottom?n.changeMode("relative"):r>n.parentHeight&&n.changeToStickyBottomIfBoxTooLow(n.latestScrollY)),r!==n.parentHeight&&"relative"===n.mode&&(n.latestScrollY=Number.POSITIVE_INFINITY,n.handleScroll())},n.handleNodeResize=function(t){var e=(void 0===t?{}:t).initial,o=n.nodeHeight;if(n.nodeHeight=n.node.getBoundingClientRect().height,!e&&o!==n.nodeHeight){var i=n.props,r=i.offsetTop,s=i.offsetBottom,a=i.bottom;if(n.nodeHeight+r+s<=n.viewPortHeight)n.mode=void 0,n.initial();else{var c=o-n.nodeHeight,h=n.parentHeight-n.nodeHeight,f=Math.min(h,n.getCurrentOffset()+(a?c:0));n.offset=Math.max(0,f),a&&"stickyBottom"===n.mode||n.changeMode("relative")}}},n.handleScroll=function(){var t=n.props,e=t.offsetTop,o=t.offsetBottom,i=n.scrollPane===window?window.scrollY:n.scrollPane.scrollTop;if(i!==n.latestScrollY){if(n.nodeHeight+e+o<=n.viewPortHeight)return n.initial(),void(n.latestScrollY=i);var r=i-n.latestScrollY;n.offset=n.getCurrentOffset(),r>0?"stickyTop"===n.mode?i+n.scrollPaneOffset+e>n.naturalTop&&(i+n.scrollPaneOffset+n.viewPortHeight<=n.naturalTop+n.nodeHeight+n.offset+o?n.changeMode("relative"):n.changeMode("stickyBottom")):"relative"===n.mode&&n.changeToStickyBottomIfBoxTooLow(i):"stickyBottom"===n.mode?n.scrollPaneOffset+i+n.viewPortHeight<n.naturalTop+n.parentHeight+o&&(n.scrollPaneOffset+i+e>=n.naturalTop+n.offset?n.changeMode("relative"):n.changeMode("stickyTop")):"relative"===n.mode&&n.scrollPaneOffset+i+e<n.naturalTop+n.offset&&n.changeMode("stickyTop"),n.latestScrollY=i}},e.offset,n.unsubscribes=[],n}n=t,(e=c).prototype=Object.create(n.prototype),e.prototype.constructor=e,(0,o.Z)(e,n);var h=c.prototype;return h.changeMode=function(t){var e=this.props,n=e.onChangeMode,o=e.offsetTop,i=e.offsetBottom,r=e.bottom;if(this.mode!==t&&n(this.mode,t),this.mode=t,"relative"===t)if(this.node.style.position="relative",r){var a=Math.max(0,this.parentHeight-this.nodeHeight-this.offset);this.node.style.bottom=a+"px"}else this.node.style.top=this.offset+"px";else this.node.style.position=s,"stickyBottom"===t?r?this.node.style.bottom=i+"px":this.node.style.top=this.viewPortHeight-this.nodeHeight-i+"px":r?this.node.style.bottom=this.viewPortHeight-this.nodeHeight-i+"px":this.node.style.top=o+"px";this.offset=this.getCurrentOffset()},h.initial=function(){this.props.bottom?"stickyBottom"!==this.mode&&this.changeMode("stickyBottom"):"stickyTop"!==this.mode&&this.changeMode("stickyTop")},h.changeToStickyBottomIfBoxTooLow=function(t){var e=this.props.offsetBottom;t+this.scrollPaneOffset+this.viewPortHeight>=this.naturalTop+this.nodeHeight+this.offset+e&&this.changeMode("stickyBottom")},h.render=function(){var t=this.props,e=t.children,n=t.className,o=t.style;return i.createElement("div",{className:n,style:o,ref:this.registerContainerRef},e)},c}(i.Component);h.defaultProps={onChangeMode:function(){},offsetTop:0,offsetBottom:0}},1033:function(t,e,n){"use strict";var o=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,o){return t[0]===e&&(n=o,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),o=this.__entries__[n];return o&&o[1]},e.prototype.set=function(e,n){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,o=t(n,e);~o&&n.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,o=this.__entries__;n<o.length;n++){var i=o[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,r="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),s="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!==typeof MutationObserver,h=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,i=0;function r(){n&&(n=!1,t()),o&&c()}function a(){s(r)}function c(){var t=Date.now();if(n){if(t-i<2)return;o=!0}else n=!0,o=!1,setTimeout(a,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,o=Object.keys(e);n<o.length;n++){var i=o[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||r},d=b(0,0,0,0);function u(t){return parseFloat(t)||0}function p(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+u(t["border-"+n+"-width"])}),0)}function v(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return d;var o=l(t).getComputedStyle(t),i=function(t){for(var e={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var i=o[n],r=t["padding-"+i];e[i]=u(r)}return e}(o),r=i.left+i.right,s=i.top+i.bottom,a=u(o.width),c=u(o.height);if("border-box"===o.boxSizing&&(Math.round(a+r)!==e&&(a-=p(o,"left","right")+r),Math.round(c+s)!==n&&(c-=p(o,"top","bottom")+s)),!function(t){return t===l(t).document.documentElement}(t)){var h=Math.round(a+r)-e,f=Math.round(c+s)-n;1!==Math.abs(h)&&(a-=h),1!==Math.abs(f)&&(c-=f)}return b(i.left,i.top,a,c)}var g="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"===typeof t.getBBox};function m(t){return i?g(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):v(t):d}function b(t,e,n,o){return{x:t,y:e,width:n,height:o}}var _=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,e){var n=function(t){var e=t.x,n=t.y,o=t.width,i=t.height,r="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(r.prototype);return f(s,{x:e,y:n,width:o,height:i,top:n,right:e+o,bottom:i+n,left:e}),s}(e);f(this,{target:t,contentRect:n})},w=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new o,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new _(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O="undefined"!==typeof WeakMap?new WeakMap:new o,P=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=h.getInstance(),o=new w(e,n,this);O.set(this,o)};["observe","unobserve","disconnect"].forEach((function(t){P.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}}));var T="undefined"!==typeof r.ResizeObserver?r.ResizeObserver:P;e.Z=T}}]);