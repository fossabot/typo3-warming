/*! For license information please see CacheWarmupReportModal.js.LICENSE.txt */
define("TYPO3/CMS/Warming/Backend/Modal/CacheWarmupReportModal",["jquery","TYPO3/CMS/Backend/ActionButton/ImmediateAction","TYPO3/CMS/Backend/Icons","TYPO3/CMS/Backend/Modal"],((e,t,r,a)=>(()=>{"use strict";var o={436:(e,t,r)=>{function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:()=>a})},370:(e,t,r)=>{function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}r.d(t,{Z:()=>o})},178:(e,t,r)=>{function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:()=>a})},792:(e,t,r)=>{function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,o,n=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(n.push(a.value),!t||n.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:()=>o})},421:(e,t,r)=>{var a;r.d(t,{Z:()=>o}),function(e){e.check="actions-check",e.info="content-info",e.listAlternative="actions-list-alternative",e.refresh="actions-refresh",e.spinner="spinner-circle-light",e.viewPage="actions-view-page"}(a||(a={}));const o=a},142:(e,t,r)=>{var a;r.d(t,{Z:()=>o}),function(e){e.toolbarSitemapMissing="cacheWarmup.toolbar.sitemap.missing",e.toolbarSitemapPlaceholder="cacheWarmup.toolbar.sitemap.placeholder",e.toolbarCopySuccessful="cacheWarmup.toolbar.copy.successful",e.notificationShowReport="cacheWarmup.notification.action.showReport",e.notificationActionRetry="cacheWarmup.notification.action.retry",e.notificationAbortedTitle="cacheWarmup.notification.aborted.title",e.notificationAbortedMessage="cacheWarmup.notification.aborted.message",e.notificationErrorTitle="cacheWarmup.notification.error.title",e.notificationErrorMessage="cacheWarmup.notification.error.message",e.modalReportTitle="cacheWarmup.modal.report.title",e.modalReportPanelFailed="cacheWarmup.modal.report.panel.failed",e.modalReportPanelSuccessful="cacheWarmup.modal.report.panel.successful",e.modalReportActionView="cacheWarmup.modal.report.action.view",e.modalReportTotal="cacheWarmup.modal.report.message.total",e.modalReportNoUrlsCrawled="cacheWarmup.modal.report.message.noUrlsCrawled",e.modalProgressTitle="cacheWarmup.modal.progress.title",e.modalProgressButtonReport="cacheWarmup.modal.progress.button.report",e.modalProgressButtonRetry="cacheWarmup.modal.progress.button.retry",e.modalProgressButtonClose="cacheWarmup.modal.progress.button.close",e.modalProgressFailedCounter="cacheWarmup.modal.progress.failedCounter",e.modalProgressAllCounter="cacheWarmup.modal.progress.allCounter",e.modalProgressPlaceholder="cacheWarmup.modal.progress.placeholder"}(a||(a={}));const o=a},981:e=>{e.exports=t},234:e=>{e.exports=r},140:e=>{e.exports=a},273:t=>{t.exports=e}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{l.r(i),l.d(i,{default:()=>h});var e=l(792),t=l(436),r=l(370),a=l(178),o=l(421),n=l(142),s=l(273),c=l.n(s),u=l(981),d=l.n(u),p=l(234),m=l.n(p),f=l(140),g=l.n(f);const h=new(function(){function l(){(0,t.Z)(this,l),(0,a.Z)(this,"progress",void 0),(0,a.Z)(this,"panelCount",0)}return(0,r.Z)(l,[{key:"createModalAction",value:function(e){var t=this;return{label:TYPO3.lang[n.Z.notificationShowReport],action:new(d())((function(){return t.createModal(e)}))}}},{key:"createModal",value:function(t){var r=this;this.progress=t,Promise.all([m().getIcon(o.Z.viewPage,m().sizes.small),m().getIcon(o.Z.info,m().sizes.small)]).then((function(t){var a=(0,e.Z)(t,2),o=a[0],l=a[1];g().dismiss();var i=r.buildModalContent(o,l);g().advanced({title:TYPO3.lang[n.Z.modalReportTitle],content:i,size:g().sizes.large})}))}},{key:"createPanel",value:function(e,t,r,a){return this.panelCount++,c()("<ul>").addClass("list-group list-group").addClass(this.panelCount>1?"mt-3":"").append(c()("<li>").addClass("list-group-item list-group-item-".concat(t)).html("<strong>".concat(e,"</strong> (").concat(r.length,")")),r.map((function(e){return c()("<li>").addClass("list-group-item tx-warming-report-item").append(c()("<div>").addClass("tx-warming-report-item-left").text(e),c()("<div>").addClass("tx-warming-report-item-right").append(c()("<a>").attr("href",e).attr("target","_blank").addClass("btn btn-default btn-sm").html("".concat(a," ").concat(TYPO3.lang[n.Z.modalReportActionView]))))})))}},{key:"buildModalContent",value:function(e,t){this.panelCount=0;var r=c()("<div>");this.progress.getNumberOfFailedUrls()>0&&r.append(this.createPanel(TYPO3.lang[n.Z.modalReportPanelFailed],"danger",this.progress.urls.failed,e)),this.progress.getNumberOfSuccessfulUrls()>0&&r.append(this.createPanel(TYPO3.lang[n.Z.modalReportPanelSuccessful],"success",this.progress.urls.successful,e));var a=this.progress.progress.total>0?"".concat(TYPO3.lang[n.Z.modalReportTotal]," ").concat(this.progress.progress.total):TYPO3.lang[n.Z.modalReportNoUrlsCrawled];return r.append(c()("<div>").addClass("badge badge-info mt-3").html("".concat(t," ").concat(a))),r}}]),l}())})(),i})()));