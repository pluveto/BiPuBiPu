webpackJsonp([3],{"/5W/":function(t,e){},"D//+":function(t,e){},k0jQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{renderedMarkdown:""}},props:["comment"],methods:{renderMarkdown:function(){this.renderedMarkdown="",this.comment.body&&(this.renderedMarkdown=this.$marked(this.comment.body))},openGitHub:function(){window.open(this.comment.user.html_url)}},mounted:function(){this.$nextTick(function(){this.renderMarkdown()})}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("div",{staticClass:"comment-title"},[n("div",{on:{click:function(e){t.openGitHub()}}},[n("img",{attrs:{src:t.comment.user.avatar_url}}),t._v(" "),n("span",[t._v(t._s(t.comment.user.login))])])]),t._v(" "),n("article",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.renderedMarkdown)}})])},staticRenderFns:[]};var r={data:function(){return{issue:null,number:null,comments:[],modal:!1}},components:{Comment:n("Z0/y")(s,i,!1,function(t){n("/5W/")},"data-v-2a9b5f6b",null).exports},methods:{ok:function(){this.$Message.info("Clicked ok")},cancel:function(){this.modal=!1,this.$Message.info("emmm...我再想想呗~")},getComments:function(){var t=this;this.issue&&this.issue.comments>0&&this.$gitHubApi.getComments(this,this.issue.comments_url).then(function(e){t.comments=e.data})},getIssue:function(){var t=this;this.$gitHubApi.getIssue(this,this.number).then(function(e){t.issue=e.data,t.getComments()})},back:function(){this.$router.go(-1)},remark:function(){window.open(this.issue.html_url)}},created:function(){this.$route.params.issue?this.issue=this.$route.params.issue:this.$route.params.scoreId?this.number=this.$route.params.scoreId:this.$router.replace("/")},mounted:function(){this.$nextTick(function(){this.issue?this.getComments():this.getIssue()})}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.issue?n("div",{staticClass:"container1"},[n("Affix",{staticClass:"favorite",attrs:{"offset-top":100}},[n("Button",{attrs:{type:"ghost",shape:"circle"},on:{click:function(e){t.modal=!0}}},[t._v("收藏")]),t._v(" "),n("Modal",{attrs:{title:"添加到"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"error",size:"large",long:""},on:{click:t.cancel}},[t._v("取消")])],1),t._v(" "),n("Scroll",[n("Card",{staticStyle:{margin:"12px 3px"},attrs:{"dis-hover":""}},[t._v("\n              谱曲收藏夹\n            ")]),t._v(" "),n("Card",{staticStyle:{margin:"12px 3px"},attrs:{"dis-hover":""}},[t._v("\n              谱曲收藏夹\n            ")]),t._v(" "),n("Card",{staticStyle:{margin:"12px 3px"},attrs:{"dis-hover":""}},[t._v("\n              谱曲收藏夹\n            ")]),t._v(" "),n("Card",{staticStyle:{margin:"12px 3px"},attrs:{"dis-hover":""}},[t._v("\n              谱曲收藏夹\n            ")]),t._v(" "),n("Card",{staticStyle:{margin:"12px 3px"},attrs:{"dis-hover":""}},[t._v("\n              谱曲收藏夹\n            ")]),t._v(" "),n("Card",{staticStyle:{margin:"12px 3px"},attrs:{"dis-hover":""}},[t._v("\n              谱曲收藏夹\n            ")]),t._v(" "),n("Card",{staticStyle:{margin:"12px 3px"},attrs:{"dis-hover":""}},[t._v("\n              谱曲收藏夹\n            ")]),t._v(" "),n("Card",{staticStyle:{margin:"12px 3px"},attrs:{"dis-hover":""}},[t._v("\n              谱曲收藏夹\n            ")])],1)],1)],1),t._v(" "),n("div",{staticClass:"title-container"},[t._v("\n      "+t._s(t.issue.title.trim())+"\n    ")]),t._v(" "),n("div",{staticClass:"comment-container"},[n("Card",[n("comment",{attrs:{comment:t.issue}})],1),t._v(" "),n("Card",{staticClass:"comment-list"},t._l(t.comments,function(t){return n("comment",{key:t.id,attrs:{comment:t}})}))],1)],1):t._e()},staticRenderFns:[]};var a=n("Z0/y")(r,o,!1,function(t){n("D//+")},"data-v-1b2c1b03",null);e.default=a.exports}});
//# sourceMappingURL=3.93978a5dc6ad3389241d.js.map