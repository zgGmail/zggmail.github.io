(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15c5366e"],{"0a64":function(s,t,n){"use strict";var a=n("f332"),e=n.n(a);e.a},"2a09":function(s,t,n){"use strict";n.r(t);var a=function(){var s=this,t=s.$createElement,n=s._self._c||t;return s.show?n("div",{attrs:{id:"songlist"}},[n("header",[n("span",{staticClass:"iconfont back",on:{click:s.back}},[s._v("")]),n("img",{attrs:{src:"https://y.gtimg.cn/music/common/upload/t_playsong_ad/1207759.png?max_age=2592000",alt:""}})]),n("ul",{staticClass:"songList"},s._l(s.data.songList,function(t,a){return n("li",{key:a,staticClass:"song-info",on:{click:function(n){return s.play(t)}}},[n("span",{staticClass:"num"},[s._v(s._s(a))]),n("div",{staticClass:"center"},[n("p",{staticClass:"song-name"},[s._v(s._s(t.songName))]),n("p",{staticClass:"singer"},s._l(t.singer,function(t,a){return n("span",{key:a},[s._v("\n                         "+s._s(t.singerName)+" \n                     ")])}),0)]),s._m(0,!0)])}),0)]):s._e()},e=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"download"},[n("span",{staticClass:"iconfont"},[s._v("")])])}],i={name:"",data(){return{val:"",data:{},show:!0}},created(){this.val=this.$route.params.val;let s="https://music.niubishanshan.top/api/v2/music/search/"+this.val+"/1/30";this.$axios.get(s).then(s=>{this.data=s.data.data,this.show=!0}).catch(function(s){console.log(s)})},methods:{back(){this.$router.go(-1)},play(s){this.$store.state.isplay=!0;var t=document.getElementById("audio");t.currentTime=0;document.getElementById("slider");var n=document.getElementById("progress");this.$store.dispatch("GetSongInfo",{albumMid:s.albumMid,singer:s.singer,songId:s.songId,songMid:s.songMid,songName:s.songName}),this.$store.dispatch("GetSongUrl",{albumMid:s.albumMid,singer:s.singer,songId:s.songId,songMid:s.songMid,songName:s.songName});var a,e,i=this;function o(){var s=t.duration,c=t.currentTime;a=c/s*100,a<100?(n.style.width=a+"%",e=requestAnimationFrame(o),i.$store.commit("change",{progressNum:a,id:e})):cancelAnimationFrame(e)}setTimeout(()=>{o()},500)}}},o=i,c=(n("0a64"),n("6691")),r=Object(c["a"])(o,a,e,!1,null,"06425070",null);t["default"]=r.exports},f332:function(s,t,n){}}]);
//# sourceMappingURL=chunk-15c5366e.35537ab2.js.map