(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"/Cf1":function(e,a,t){e.exports={vheader:"vheader___2-dtX",vbody:"vbody___PTHKU"}},EDuE:function(e,a,t){e.exports={normal:"normal___HWRKS",header1:"header1___3ACya",hide:"hide___1lOUk"}},HwrW:function(e,a,t){e.exports={img:"img___8uCjP",viname:"viname___2Zgo2",video_item:"video_item___2UTng"}},Kvkj:function(e,a,t){"use strict";t("14J3");var n=t("BMrR"),i=t("q1tI"),r=t.n(i),s=t("/Cf1"),l=t.n(s),c=t("HwrW"),m=t.n(c);class o extends i["Component"]{render(){var e=this.props,a=e.poster,t=e.name,i=e.id;return r.a.createElement("div",{className:m.a.video_item},r.a.createElement(n["a"],{type:"flex",justify:"center"},r.a.createElement("a",{href:"/videos/"+i},r.a.createElement("img",{src:a,className:m.a.img,alt:t}))),r.a.createElement(n["a"],{type:"flex",justify:"center"},r.a.createElement("p",{className:m.a.viname},t)))}}var d=o;t.d(a,"b",function(){return v}),t.d(a,"a",function(){return p});class v extends i["Component"]{render(){var e=this.props.name;return r.a.createElement("div",{className:l.a.vheader},r.a.createElement(n["a"],{type:"flex",justify:"start"},r.a.createElement("span",null,e)))}}class p extends i["Component"]{render(){var e=this.props,a=e.videoList,t=e.customeJustify;return r.a.createElement("div",{className:l.a.vbody},r.a.createElement(n["a"],{type:"flex",justify:t||"space-between"},a&&a.map(e=>{return r.a.createElement(d,{name:e.cnname,poster:e.poster,key:e.id,id:e.id})})))}}},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),i=t.n(n),r=t("EDuE"),s=t.n(r),l=t("/MKj"),c=t("Kvkj");class m extends n["Component"]{componentDidMount(){var e=this.props.dispatch;e({type:"video/get_hot_videos"})}render(){var e=this.props.video.hot,a=e.total_list,t=e.today_list,n=e.new_list,r=e.japan_list,l=e.movie_total,m=8;return console.log(e),i.a.createElement("div",{className:s.a.normal},i.a.createElement(c["b"],{name:"\u4eca\u65e5\u70ed\u95e8"}),t&&i.a.createElement(c["a"],{videoList:t.slice(0,m)}),i.a.createElement("div",{className:s.a.hide},t&&t.length>m&&i.a.createElement(c["a"],{videoList:t.colNum+1})),i.a.createElement(c["b"],{name:"\u70ed\u95e8\u7535\u5f71"}),l&&i.a.createElement(c["a"],{videoList:l.slice(0,m)}),i.a.createElement("div",{className:s.a.hide},l&&l.length>m&&i.a.createElement(c["a"],{videoList:l.slice(m+1)})),i.a.createElement(c["b"],{name:"\u70ed\u95e8\u65b0\u5267"}),n&&i.a.createElement(c["a"],{videoList:n.slice(0,m)}),i.a.createElement("div",{className:s.a.hide},n&&n.length>m&&i.a.createElement(c["a"],{videoList:n.slice(m+1)})),i.a.createElement(c["b"],{name:"\u70ed\u95e8\u65e5\u5267"}),r&&i.a.createElement(c["a"],{videoList:r.slice(0,m)}),i.a.createElement("div",{className:s.a.hide},r&&r.length>m&&i.a.createElement(c["a"],{videoList:r.slice(m+1)})),i.a.createElement(c["b"],{name:"\u70ed\u95e8\u603b\u699c"}),a&&i.a.createElement(c["a"],{videoList:a.slice(0,m)}),i.a.createElement("div",{className:s.a.hide},a&&a.length>m&&i.a.createElement(c["a"],{videoList:a.slice(m+1)})))}}function o(e){return{video:e.video}}a["default"]=Object(l["c"])(o)(m)}}]);