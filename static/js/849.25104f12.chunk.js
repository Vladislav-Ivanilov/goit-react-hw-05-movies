"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[849],{849:function(n,t,e){e.r(t);var r=e(439),c=e(791),o=e(146),i=e(245),a=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,c.useEffect)((function(){(0,i.Hg)().then((function(n){return s(n.data.results)}))}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.O,{movies:e})})}},146:function(n,t,e){e.d(t,{O:function(){return x}});var r,c,o,i,a,s=e(689),u=e(168),f=e(444),l=e(87),d=f.ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 20px;\n  list-style: none;\n"]))),p=f.ZP.li(c||(c=(0,u.Z)(["\n  width: calc((100% - 20px) / 5);\n"]))),g=f.ZP.img(o||(o=(0,u.Z)(["\n  display: block;\n  width: 100%;\n"]))),h=(0,f.ZP)(l.OL)(i||(i=(0,u.Z)(["\n  display: block;\n  text-align: center;\n  font-weight: 700;\n  font-size: 22px;\n  color: #2b7bc8;\n  border-bottom: solid 5px #2b7bc8;\n  text-decoration: none;\n"]))),v=f.ZP.p(a||(a=(0,u.Z)(["\n  margin: 0;\n  padding: 20px 10px;\n"]))),m=e(184),x=function(n){var t=n.movies,e=(0,s.TH)();return t&&(0,m.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,c=n.original_name,o=n.poster_path;return(0,m.jsx)(p,{children:(0,m.jsxs)(h,{to:"/movies/".concat(t),state:{from:e},children:[(0,m.jsx)(g,{src:o?"https://image.tmdb.org/t/p/w500/"+o:"https://svgsilh.com/svg_v2/1363011.svg",alt:"Foto"}),(0,m.jsx)(v,{children:null!==r&&void 0!==r?r:c})]})},t)}))})}},245:function(n,t,e){e.d(t,{Hg:function(){return o},IQ:function(){return s},Jh:function(){return u},Op:function(){return i},s_:function(){return a}});var r=e(912),c=new URLSearchParams({api_key:"ffe5635381226a05cd5d4da4ec565c9d"});r.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){return r.Z.get("/trending/all/week?".concat(c))},i=function(n){return r.Z.get("/search/movie?".concat(c,"&query=").concat(n))},a=function(n){return r.Z.get("/movie/".concat(n,"?").concat(c))},s=function(n){return r.Z.get("/movie/".concat(n,"/credits?").concat(c))},u=function(n){return r.Z.get("/movie/".concat(n,"/reviews?").concat(c))}}}]);
//# sourceMappingURL=849.25104f12.chunk.js.map