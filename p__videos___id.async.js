(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"/Cf1":function(e,a,t){e.exports={vheader:"vheader___2-dtX",vbody:"vbody___PTHKU"}},"6pQC":function(e,a,t){e.exports={wrapper:"wrapper___3pASO",c1:"c1___Ye15p",c2:"c2___2lF3N",blk1:"blk1___1JG97",cnt:"cnt___1W3kS",recomend:"recomend___KafJu",recomend_wrapper:"recomend_wrapper___3tdN_",epblock:"epblock___jsw7J",eprow:"eprow___1wmLF",epname:"epname___3Qvba",epdownload_type:"epdownload_type___LXwe0",epcopy_type:"epcopy_type___2Aw8h",ib:"ib___156mm"}},HwrW:function(e,a,t){e.exports={img:"img___8uCjP",viname:"viname___2Zgo2",video_item:"video_item___2UTng"}},Kvkj:function(e,a,t){"use strict";t("14J3");var n=t("BMrR"),r=t("q1tI"),s=t.n(r),c=t("/Cf1"),l=t.n(c),m=t("HwrW"),p=t.n(m);class i extends r["Component"]{render(){var e=this.props,a=e.poster,t=e.name,r=e.id;return s.a.createElement("div",{className:p.a.video_item},s.a.createElement(n["a"],{type:"flex",justify:"center"},s.a.createElement("a",{href:"/videos/"+r},s.a.createElement("img",{src:a,className:p.a.img,alt:t}))),s.a.createElement(n["a"],{type:"flex",justify:"center"},s.a.createElement("p",{className:p.a.viname},t)))}}var o=i;t.d(a,"b",function(){return d}),t.d(a,"a",function(){return _});class d extends r["Component"]{render(){var e=this.props.name;return s.a.createElement("div",{className:l.a.vheader},s.a.createElement(n["a"],{type:"flex",justify:"start"},s.a.createElement("span",null,e)))}}class _ extends r["Component"]{render(){var e=this.props,a=e.videoList,t=e.customeJustify;return s.a.createElement("div",{className:l.a.vbody},s.a.createElement(n["a"],{type:"flex",justify:t||"space-between"},a&&a.map(e=>{return s.a.createElement(o,{name:e.cnname,poster:e.poster,key:e.id,id:e.id})})))}}},"t+Pf":function(e,a,t){"use strict";t.r(a);t("/zsF");var n=t("PArb"),r=(t("Znn+"),t("ZTPi")),s=(t("14J3"),t("BMrR")),c=t("q1tI"),l=t.n(c),m=t("/MKj"),p=t("6pQC"),i=t.n(p),o=t("TSYQ"),d=t.n(o),_=t("Kvkj"),v=t("+QRC"),u=t.n(v),E={1:"\u7535\u9a74\u4e0b\u8f7d",2:"\u78c1\u529b\u4e0b\u8f7d"};class y extends c["Component"]{render(){var e=this.props.data;return l.a.createElement("div",{className:i.a.epblock},e&&e.map(e=>{return l.a.createElement("div",{className:i.a.eprow,key:e.episode},l.a.createElement(s["a"],{type:"flex",justify:"space-between"},l.a.createElement("div",{className:i.a.ib},l.a.createElement("div",{className:i.a.epname},l.a.createElement(s["a"],{type:"flex",justify:"start"},l.a.createElement("span",null,e.episode_name))),e.files.MP4&&e.files.MP4.map((e,a)=>{return E[e.way]?l.a.createElement("div",{key:a,className:i.a.epdownload_type},l.a.createElement("a",{href:e.address},l.a.createElement("span",null,E[e.way]))):null})),l.a.createElement("div",{className:i.a.ib},e.files.MP4&&e.files.MP4.map((e,a)=>{return E[e.way]?l.a.createElement("span",{key:a,className:i.a.epcopy_type,onClick:()=>u()(e.address)&&alert("\u5df2\u590d\u5236\u5230\u526a\u5207\u677f")},"\u590d\u5236",E[e.way]):null}))))}))}}class f extends c["Component"]{componentDidMount(){var e=this.props,a=e.dispatch,t=e.computedMatch,n=t.params.id;a({type:"video/get_video_resources",payload:n})}render(){console.log(this.props);var e=r["a"].TabPane,a=this.props.video.detail.detail,t=this.props.video.detail.similar,c=this.props.video.detail.list;return a?l.a.createElement("div",{className:i.a.wrapper},l.a.createElement("div",null,l.a.createElement(s["a"],{type:"flex",justify:"space-between"},l.a.createElement("div",null,l.a.createElement(s["a"],{type:"flex",align:"top"},l.a.createElement("img",{src:a.poster,alt:""}),l.a.createElement("div",{className:i.a.blk1},l.a.createElement("p",{className:d()(i.a.c1)},a.cnname,"  ",a.enname),l.a.createElement("p",{className:i.a.c1},"\u5730\u533a: ",a.area),l.a.createElement("p",{className:i.a.c1},"\u8bed\u8a00: ",a.lang),l.a.createElement("p",{className:i.a.c1},"\u7c7b\u578b: ",a.category),l.a.createElement("p",{className:i.a.c1},"\u522b\u540d: ",a.aliasname),l.a.createElement("p",{className:i.a.c1},"\u5bfc\u6f14: ",a.writer),l.a.createElement("p",{className:i.a.c1},"\u5206\u7ea7: ",a.level.toUpperCase()),l.a.createElement("p",{className:i.a.c1},"\u66f4\u65b0: ",a.play_status),l.a.createElement("p",{className:i.a.c1},"\u51fa\u54c1: ",a.tvstation),l.a.createElement("p",{className:i.a.c1},"\u7ffb\u8bd1: ",a.zimuzu)))),l.a.createElement("div",{className:d()(i.a.blk1,i.a.cnt)},l.a.createElement("p",{className:i.a.c1},"\u5f71\u7247\u7b80\u4ecb:"),l.a.createElement("p",{className:d()(i.a.c2)},"  ",a.content)))),l.a.createElement("div",{className:i.a.recomend_wrapper},l.a.createElement(r["a"],{defaultActiveKey:"0",onChange:()=>console.log(1)},c&&c.map((a,t)=>{return l.a.createElement(e,{tab:a.season_name,key:t},l.a.createElement(y,{data:a.episodes}))}))),l.a.createElement("div",null,l.a.createElement(n["a"],null,l.a.createElement("p",{className:d()(i.a.c1,i.a.recomend)},"\u76f8\u5173\u63a8\u8350")),l.a.createElement(_["a"],{videoList:t.slice(0,7)}))):l.a.createElement("div",null)}}function w(e){return{video:e.video}}a["default"]=Object(m["c"])(w)(f)}}]);