import{bg as f,a1 as a,bh as v,bi as g,bj as h,y as r,a3 as c,a9 as x}from"../entries/pages_catch-all.js";var[S,d]=f({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),o=a(function(s,e){const n=v("List",s),{children:i,styleType:y="none",stylePosition:m,spacing:l,...u}=g(s),L=h(i),p=l?{["& > *:not(style) ~ *:not(style)"]:{mt:l}}:{};return r.jsx(S,{value:n,children:r.jsx(c.ul,{ref:e,listStyleType:y,listStylePosition:m,role:"list",__css:{...n.container,...p},...u,children:L})})});o.displayName="List";var I=a((t,s)=>{const{as:e,...n}=t;return r.jsx(o,{ref:s,as:"ol",styleType:"decimal",marginStart:"1em",...n})});I.displayName="OrderedList";var w=a(function(s,e){const{as:n,...i}=s;return r.jsx(o,{ref:e,as:"ul",styleType:"initial",marginStart:"1em",...i})});w.displayName="UnorderedList";var C=a(function(s,e){const n=d();return r.jsx(c.li,{ref:e,...s,__css:n.item})});C.displayName="ListItem";var E=a(function(s,e){const n=d();return r.jsx(x,{ref:e,role:"presentation",...s,__css:n.icon})});E.displayName="ListIcon";var P=function(){};function U(t){for(var s=[],e=1;e<arguments.length;e++)s[e-1]=arguments[e];t&&t.addEventListener&&t.addEventListener.apply(t,s)}function j(t){for(var s=[],e=1;e<arguments.length;e++)s[e-1]=arguments[e];t&&t.removeEventListener&&t.removeEventListener.apply(t,s)}var M=typeof window<"u";export{o as L,w as U,j as a,C as b,E as c,M as i,P as n,U as o};
