(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"/Cf1":function(e,a,t){e.exports={vheader:"vheader___2-dtX",vbody:"vbody___PTHKU"}},"6pQC":function(e,a,t){e.exports={wrapper:"wrapper___3pASO",c1:"c1___Ye15p",c2:"c2___2lF3N",blk1:"blk1___1JG97",cnt:"cnt___1W3kS",recomend:"recomend___KafJu",recomend_wrapper:"recomend_wrapper___3tdN_",epblock:"epblock___jsw7J",eprow:"eprow___1wmLF",epname:"epname___3Qvba",epdownload_type:"epdownload_type___LXwe0",epcopy_type:"epcopy_type___2Aw8h",ib:"ib___156mm"}},HwrW:function(e,a,t){e.exports={img:"img___8uCjP",viname:"viname___2Zgo2",video_item:"video_item___2UTng"}},Kvkj:function(e,a,t){"use strict";t("14J3");var n=t("BMrR"),r=t("q1tI"),s=t.n(r),l=t("/Cf1"),c=t.n(l),m=t("HwrW"),p=t.n(m);class i extends r["Component"]{render(){var e=this.props,a=e.poster,t=e.name,r=e.id;return s.a.createElement("div",{className:p.a.video_item},s.a.createElement(n["a"],{type:"flex",justify:"center"},s.a.createElement("a",{href:"/videos/"+r},s.a.createElement("img",{src:a,className:p.a.img,alt:t}))),s.a.createElement(n["a"],{type:"flex",justify:"center"},s.a.createElement("p",{className:p.a.viname},t)))}}var o=i;t.d(a,"b",function(){return d}),t.d(a,"a",function(){return _});class d extends r["Component"]{render(){var e=this.props.name;return s.a.createElement("div",{className:c.a.vheader},s.a.createElement(n["a"],{type:"flex",justify:"start"},s.a.createElement("span",null,e)))}}class _ extends r["Component"]{render(){var e=this.props,a=e.videoList,t=e.customeJustify;return s.a.createElement("div",{className:c.a.vbody},s.a.createElement(n["a"],{type:"flex",justify:t||"space-between"},a&&a.map(e=>{return s.a.createElement(o,{name:e.cnname,poster:e.poster,key:e.id,id:e.id})})))}}},"t+Pf":function(e,a,t){"use strict";t.r(a);t("/zsF");var n=t("PArb"),r=(t("Znn+"),t("ZTPi")),s=(t("Q9mQ"),t("diRs")),l=(t("14J3"),t("BMrR")),c=t("q1tI"),m=t.n(c),p=t("/MKj"),i=t("6pQC"),o=t.n(i),d=t("TSYQ"),_=t.n(d),E=t("Kvkj"),u=t("+QRC"),v=t.n(u),y={1:"\u7535\u9a74\u4e0b\u8f7d",2:"\u78c1\u529b\u4e0b\u8f7d",102:"\u767e\u5ea6\u4e91"};class f extends c["Component"]{render(){var e=this.props.data;return m.a.createElement("div",{className:o.a.epblock},e&&e.map(e=>{return m.a.createElement("div",{className:o.a.eprow,key:e.episode},m.a.createElement(l["a"],{type:"flex",justify:"space-between"},m.a.createElement("div",{className:o.a.ib},m.a.createElement("div",{className:o.a.epname},m.a.createElement(l["a"],{type:"flex",justify:"start"},m.a.createElement("span",null,e.episode_name))),e.files.MP4&&e.files.MP4.map((e,a)=>{return y[e.way]?m.a.createElement("div",{key:a,className:o.a.epdownload_type},m.a.createElement("a",{href:e.address},m.a.createElement("span",null,y[e.way]))):null}),e.files.APP&&e.files.APP.map((e,a)=>{return y[e.way]?m.a.createElement(s["a"],{content:"\u70b9\u51fb\u590d\u5236\u4e0b\u8f7d\u5730\u5740\u548c\u63d0\u53d6\u7801"},m.a.createElement("div",{key:a,className:o.a.epdownload_type},m.a.createElement("span",{onClick:()=>v()(e.address+" ,\u63d0\u53d6\u7801"+e.passwd)&&alert("\u5df2\u590d\u5236\u5230\u526a\u5207\u677f")},y[e.way]))):null})),m.a.createElement("div",{className:o.a.ib},e.files.MP4&&e.files.MP4.map((e,a)=>{return y[e.way]?m.a.createElement("span",{key:a,className:o.a.epcopy_type,onClick:()=>v()(e.address)&&alert("\u5df2\u590d\u5236\u5230\u526a\u5207\u677f")},"\u590d\u5236",y[e.way]):null}))))}))}}class w extends c["Component"]{componentDidMount(){var e=this.props,a=e.dispatch,t=e.computedMatch,n=t.params.id;a({type:"video/get_video_resources",payload:n})}render(){var e=r["a"].TabPane,a=this.props.video.detail.detail,t=this.props.video.detail.similar,s=this.props.video.detail.list;return a?m.a.createElement("div",{className:o.a.wrapper},m.a.createElement("div",null,m.a.createElement(l["a"],{type:"flex",justify:"space-between"},m.a.createElement("div",null,m.a.createElement(l["a"],{type:"flex",align:"top"},m.a.createElement("img",{src:a.poster,alt:""}),m.a.createElement("div",{className:o.a.blk1},m.a.createElement("p",{className:_()(o.a.c1)},a.cnname,"  ",a.enname),m.a.createElement("p",{className:o.a.c1},"\u5730\u533a: ",a.area),m.a.createElement("p",{className:o.a.c1},"\u8bed\u8a00: ",a.lang),m.a.createElement("p",{className:o.a.c1},"\u7c7b\u578b: ",a.category),m.a.createElement("p",{className:o.a.c1},"\u522b\u540d: ",a.aliasname),m.a.createElement("p",{className:o.a.c1},"\u5bfc\u6f14: ",a.writer),m.a.createElement("p",{className:o.a.c1},"\u5206\u7ea7: ",a.level.toUpperCase()),m.a.createElement("p",{className:o.a.c1},"\u66f4\u65b0: ",a.play_status),m.a.createElement("p",{className:o.a.c1},"\u51fa\u54c1: ",a.tvstation),m.a.createElement("p",{className:o.a.c1},"\u7ffb\u8bd1: ",a.zimuzu)))),m.a.createElement("div",{className:_()(o.a.blk1,o.a.cnt)},m.a.createElement("p",{className:o.a.c1},"\u5f71\u7247\u7b80\u4ecb:"),m.a.createElement("p",{className:_()(o.a.c2)},"  ",a.content)))),m.a.createElement("div",{className:o.a.recomend_wrapper},s&&m.a.createElement(r["a"],{defaultActiveKey:"0",onChange:()=>console.log(1)},s.map((a,t)=>{return m.a.createElement(e,{tab:a.season_name,key:t},m.a.createElement(f,{data:a.episodes}))}))),m.a.createElement("div",null,m.a.createElement(n["a"],null,m.a.createElement("p",{className:_()(o.a.c1,o.a.recomend)},"\u76f8\u5173\u63a8\u8350")),m.a.createElement(E["a"],{videoList:t.slice(0,7)}))):m.a.createElement("div",null)}}function N(e){return{video:e.video}}a["default"]=Object(p["c"])(N)(w)}}]);