(()=>{var{defineProperty:vn,getOwnPropertyNames:Ni,getOwnPropertyDescriptor:Mi}=Object,wi=Object.prototype.hasOwnProperty;function si(a){return this[a]}var Si=(a)=>{var e=(se??=new WeakMap).get(a),n;if(e)return e;if(e=vn({},"__esModule",{value:!0}),a&&typeof a==="object"||typeof a==="function"){for(var i of Ni(a))if(!wi.call(e,i))vn(e,i,{get:si.bind(a,i),enumerable:!(n=Mi(a,i))||n.enumerable})}return se.set(a,e),e},se;var li=(a)=>a;function gi(a,e){this[a]=li.bind(null,e)}var Fi=(a,e)=>{for(var n in e)vn(a,n,{get:e[n],enumerable:!0,configurable:!0,set:gi.bind(e,n)})};var O2={};Fi(O2,{verify:()=>di,tool:()=>fi,respond:()=>hi,level:()=>Te,check:()=>In,api_check:()=>ci,Game:()=>Pn});var _=new Map;function Dn(a){return _.has(a)}function Rn(a){return a}function Se(a){let e=_.get(a);if(e===void 0)throw Error("ENOENT: no such file: "+a);return e}function le(){}function ge(a,e){_.set(a,e)}function Fe(){return"/"}function Zn(a){let e=a.startsWith("/"),n=[];for(let i of a.split("/")){if(i===""||i===".")continue;if(i===".."&&n.length>0&&n[n.length-1]!=="..")n.pop();else if(i!==".."||!e)n.push(i)}return(e?"/":"")+(n.join("/")||(e?"":"."))}function Jn(...a){return Zn(a.join("/"))}function We(...a){return Zn("/"+a.join("/"))}function $n(a){let e=a.lastIndexOf("/");return e<0?".":e===0?"/":a.slice(0,e)}var Nn={normalize:Zn,join:Jn,dirname:$n};function Be(a){return decodeURIComponent(String(a).replace(/^file:\/\//,""))}function Z(a,e,n,i){return{$:"Var",k:a,i:e,s:n,v:i}}function I(a,e,n){return{$:"Ref",k:a,s:e,b:n}}function qa(a,e,n,i){return{$:"Sub",i:a,v:e,f:n,s:i}}function pa(a,e,n,i,o,y){return{$:"Let",k:a,i:e,q:y??a.map(()=>K()),v:n,f:i,s:o}}function v(a,e){return{$:"Typ",g:a,s:e}}function wa(a){return{$:"Qnt",s:a}}function X(a,e){return{$:"Qua",q:a,s:e}}function Wa(a,e,n){return{$:"Min",a,b:e,s:n}}function b(a,e,n,i,o,y){return{$:"All",q:a,k:e,i:n,A:i,B:o,s:y}}function m(a,e,n,i){return{$:"Lam",k:a,i:e,f:n,s:i}}function O(a,e,n){return{$:"App",f:a,x:e,s:n}}function da(a,e,n,i=[]){return{$:"ADT",k:a,x:e,r:i,s:n}}function J(a,e,n){return{$:"Ctr",k:a,x:e,s:n}}function Ba(a,e,n,i){return{$:"Mat",k:a,h:e,m:n,s:i}}function Pa(a){return{$:"Efq",s:a}}function sa(a,e,n,i){return{$:"Eql",a,b:e,T:n,s:i}}function za(a){return{$:"Rfl",s:a}}function an(a,e,n,i){return{$:"Rwt",e:a,p:e,f:n,s:i}}function nn(a,e){return{$:"Hol",k:a,s:e}}function Ga(a,e,n){return{$:"Ann",x:a,T:e,s:n}}function Pe(){return{$:"Emp"}}function Ya(a,e,n){return{$:"Bin",v:a,l:e,r:n}}function Y(){return{$:"None"}}function K(){return{$:"Lone"}}function Sa(){return{$:"Many"}}function oa(a,e,n){return{tm:Ga(a,Z("_",-1,void 0,e)),ty:e,us:n}}function Ma(a,e,n){return{tm:Ga(a,Z("_",-1,void 0,e)),us:n}}function S(a,e,n,i,o,y){return{$:"Err",bok:a,ctx:e,exp:n,obs:i,spn:o,def:y}}function La(a){let e=a.charCodeAt(0);return e>=65&&e<=90||e>=97&&e<=122||e===95}function xa(a){let e=a.charCodeAt(0);return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===95||e===46}function ve(a,e){let n=a,i=e;while(!0)switch(n.$){case"Emp":return null;case"Bin":{if(i===0)return n.v;let o=i%2===1;n=o?n.l:n.r,i=o?(i-1)/2:(i-2)/2;break}}}function Oa(a,e,n){switch(a.$){case"Emp":return Oa(Ya(null,a,a),e,n);case"Bin":{if(e===0)return Ya(n,a.l,a.r);if(e%2===1){let o=Oa(a.l,(e-1)/2,n);return Ya(a.v,o,a.r)}let i=Oa(a.r,(e-2)/2,n);return Ya(a.v,a.l,i)}}}function Sn(a,e,n){switch(a.$){case"Emp":return e;case"Bin":switch(e.$){case"Emp":return a;case"Bin":{let i=a.v===null?e.v:e.v===null?a.v:n(a.v,e.v),o=Sn(a.l,e.l,n),y=Sn(a.r,e.r,n);return Ya(i,o,y)}}}}function ja(a,e=0,n=1){switch(a.$){case"Emp":return[];case"Bin":{let i=a.v===null?[]:[[e,a.v]],o=ja(a.l,e+n*1,n*2),y=ja(a.r,e+n*2,n*2);return i.concat(o,y)}}}function Wi(a,e){for(let n=a;n!==null;n=n.n)if(n.k===e)return n.v;return null}function Qa(a,e,n){return{k:e,v:n,n:a}}function De(a,e){switch(a.$){case"None":return e;default:switch(e.$){case"None":return a;default:return Sa()}}}function Re(a,e){switch(a.$){case"None":return e;case"Lone":switch(e.$){case"Many":return Sa();default:return K()}case"Many":return Sa()}}function Bi(a,e){switch(a.$){case"None":return Y();case"Lone":return e;case"Many":return De(e,e)}}function ln(a,e){if(a.$==="None")return Y();else return e}function Ge(a,e,n,i,o,y,c){if(Re(o,i).$!==i.$){let d=Wn(o)+n;if(o.$==="Many")d=n+" (consumed more than once)";throw S(a,e,Wn(i)+n,d,y,c)}}function t(){return Pe()}function Ae(a,e){return ve(a,e)??Y()}function la(a,e){return Sn(a,e,De)}function Gi(a,e){return Sn(a,e,Re)}function re(a,e){return Oa(a,e,Y())}function jn(a,e,n,i=[]){if(n===0)return p(a,J(e,i));else return m("_",0,(o)=>{return jn(a,e,n-1,[...i,o])})}function Ze(a,e){return a.u===!0&&e.$==="Many"?K():e}function Ai(a,e){let n=Gn(a.t)[1],i="EQ";for(let o=0;o<n.length&&o<e.length&&i==="EQ";o++)i=Yn(a.qs[o],e[o],n[o]);return i}function p(a,e,n){let i=k(a);if(i.$==="Lam")return i.f(e);return O(i,e,n)}function Gn(a){let e=[],n=a;while(!0)switch(n.$){case"App":{e.push(n.x),n=n.f;break}default:return e.reverse(),[n,e]}}function j(a,e="_"){if(a.$==="Var"&&a.i<0)return a;return Z(e,-1,a.s,a)}function ri(a){switch(a.$){case"Ctr":return J(a.k,a.x.map((e)=>j(e)),a.s);case"ADT":return da(a.k,a.x.map((e)=>j(e)),a.s,a.r);case"All":return b(a.q,a.k,a.i,j(a.A),a.B,a.s);case"Mat":return Ba(a.k,j(a.h),j(a.m),a.s);case"Eql":return sa(j(a.a),j(a.b),j(a.T),a.s);case"Min":return Wa(j(a.a),j(a.b),a.s);case"Typ":return v(j(a.g),a.s);default:return a}}function Ea(a){while(a.$==="Var"&&a.v!==void 0)a=a.v;return a}function k(a){let e=Ea(a);while(e.$==="Ann")e=Ea(e.x);return e}function B(a,e=null){switch(a.$){case"Var":{if(a.i<0)return a;let n=Wi(e,a.i);if(n===null)return I(a.k,a.s);else return n}case"Ref":return I(a.k[0]==="."?"Nat"+a.k:a.k,a.s,a.b);case"Sub":{let n=B(a.v,e);return B(a.f,Qa(e,a.i,n))}case"Let":{let n=a,i=n.v.map((o)=>B(o,e));return pa(n.k,n.i,i,(o)=>{let y=e;for(let c=0;c<o.length;c++)y=Qa(y,n.i[c],o[c]);return B(n.f,y)},n.s,n.q)}case"Typ":return v(B(a.g,e),a.s);case"Qnt":case"Qua":return a;case"Min":return Wa(B(a.a,e),B(a.b,e),a.s);case"All":{let n=a,i=B(n.A,e);return b(n.q,n.k,n.i,i,(o)=>{return B(n.B,Qa(e,n.i,o))},n.s)}case"Lam":{let n=a;return m(n.k,n.i,(i)=>{return B(n.f,Qa(e,n.i,i))},n.s)}case"App":return O(B(a.f,e),B(a.x,e),a.s);case"ADT":return da(a.k,a.x.map((n)=>B(n,e)),a.s,a.r);case"Ctr":return J(a.k,a.x.map((n)=>B(n,e)),a.s);case"Mat":return Ba(a.k,B(a.h,e),B(a.m,e),a.s);case"Efq":return Pa(a.s);case"Eql":return sa(B(a.a,e),B(a.b,e),B(a.T,e),a.s);case"Rfl":return za(a.s);case"Rwt":return an(B(a.e,e),B(a.p,e),B(a.f,e),a.s);case"Hol":return nn(a.k,a.s);case"Ann":return Ga(B(a.x,e),B(a.T,e),a.s)}}function A(a,e=0){let n=Ea(a);switch(n.$){case"Var":return Z(n.k,n.i,n.s);case"Ref":return I(n.k,n.s,n.b);case"Sub":return qa(n.i,A(n.v,e),A(n.f,e),n.s);case"Let":{let i=n.k.map((y,c)=>Z(y,e+c)),o=n.v.map((y)=>A(y,e));return pa(n.k,i.map((y,c)=>e+c),o,A(n.f(i),e+n.k.length),n.s,n.q)}case"Typ":return v(A(n.g,e),n.s);case"Qnt":case"Qua":return n;case"Min":return Wa(A(n.a,e),A(n.b,e),n.s);case"All":{let i=Z(n.k,e);return b(n.q,n.k,e,A(n.A,e),A(n.B(i),e+1),n.s)}case"Lam":{let i=Z(n.k,e);return m(n.k,e,A(n.f(i),e+1),n.s)}case"App":return O(A(n.f,e),A(n.x,e),n.s);case"ADT":return da(n.k,n.x.map((i)=>A(i,e)),n.s,n.r);case"Ctr":return J(n.k,n.x.map((i)=>A(i,e)),n.s);case"Mat":return Ba(n.k,A(n.h,e),A(n.m,e),n.s);case"Efq":return Pa(n.s);case"Eql":return sa(A(n.a,e),A(n.b,e),A(n.T,e),n.s);case"Rfl":return za(n.s);case"Rwt":return an(A(n.e,e),A(n.p,e),A(n.f,e),n.s);case"Hol":return nn(n.k,n.s);case"Ann":return Ga(A(n.x,e),A(n.T,e),n.s)}}function Yn(a,e,n){switch(a.$){case"None":return"EQ";default:break}let i=k(e),o=k(n);switch(o.$){case"Var":if(i.$==="Var"&&i.i===o.i)return"EQ";else return"GT";case"Ctr":{if(i.$==="Ctr"&&i.k===o.k&&i.x.length===o.x.length){let y="EQ";for(let c=0;c<i.x.length&&y!=="GT";c++){let d=Yn(K(),i.x[c],o.x[c]);y=d==="EQ"?y:d}if(y!=="GT")return y}for(let y of o.x)if(Yn(K(),i,y)!=="GT")return"LT";return"GT"}default:return"GT"}}function L(){return Pe()}function gn(a,e,n,i,o){return Oa(a,e,{q:n,k:i,T:o})}function Ci(a,e){for(let[,n]of ja(e)){if(n.q.$==="None")continue;let i=H(a,n.T);if(i.$==="ADT"&&Fn(a,i,e).c.length===0)return!0}return!1}function En(a){let e=ja(a);e.sort((i,o)=>i[0]-o[0]);let n=[];for(let[i,o]of e){while(n.length<i)n.push("_");n.push(o.k)}return n}function Ce(a,e){for(let n of a)if(n.k===e)return n;return null}function aa(){return{tlds:Object.create(null),ctrs:Object.create(null),order:[],hols:0,tmps:Object.create(null)}}function Fa(a,e){return a.ctrs[e]??null}function Ve(a,e){let n=k(Fa(a,e).T);for(let i=0;n.$==="All";i++)n=k(n.B(Z(n.k,i)));return n.$==="ADT"?n.k:e}function Fn(a,e,n,i){let o=a.tlds[e.k];if(o===void 0||o.$!=="ADT")throw S(a,n,"a declared datatype (unknown: "+e.k+")",void 0,e.s,i);if(e.r.length===0)return o;let y=new Set(e.r);return{$:"ADT",n:o.n,g:o.g,T:o.T,c:o.c.filter((c)=>!y.has(c.k))}}var ue=Rn(Be(new URL("./base.bend","file:///bend2/bend.ts"))),Xn=We(Jn(Fe(),".bend","store")),Oe="https://proofmarket.com";async function ta(a,e,n,i,o){if(e.startsWith(Xn+"/")&&!Dn(e)){let M=e.slice(Xn.length+1),N=await fetch(Oe+"/api/v1/files/"+M);if(!N.ok)throw S(a,L(),"a published package ("+Oe+" has no "+M+")",void 0,o);le($n(e),{recursive:!0}),ge(e,await N.text())}if(!Dn(e))throw S(a,L(),"no such file: "+e,void 0,o);let y=Rn(e),c=i.get(y);if(c===null)throw S(a,L(),"an import cycle through "+e,void 0,o);if(c!==void 0){if(c!==n)throw S(a,L(),"one namespace per file ("+e+" is both '"+c+"' and '"+n+"')",void 0,o);return a.order.length}i.set(y,null);let d=e.slice(0,e.lastIndexOf("/")+1),f=Object.create(null),h=Se(e,"utf8"),T=h.split(`
`);for(let M=0;M<T.length;M++){let N=T[M].trim(),w=N.match(/^import(\s.*|)$/);if(w!==null){let s=w[1].match(/^\s+(\S+)(?:\s+as\s+([A-Za-z_][A-Za-z0-9_]*))?\s*(?:#.*)?$/),u=h.split(`
`,M).join(`
`).length+(M&&1)+T[M].indexOf(s===null?N:s[1]),D={src:h,beg:u,end:u};if(s===null||s[2]===void 0&&s[1]!=="Base")throw S(a,L(),"an import ('import Base', or 'import <path> as <Name>')","'"+N+"'",D);if(s[2]===void 0)await ta(a,ue,"",i,D);else{let x=Nn.normalize(s[1]);if(!x.endsWith(".bend"))throw S(a,L(),"an import of a .bend file","'"+s[1]+"'",D);let ha=d+x,Ua=Nn.join(Nn.dirname(n),x);if(x.startsWith("/"))ha=x,Ua=x;if(/^0x[0-9a-f]+\//.test(x))ha=Xn+"/"+x,Ua=x;f[s[2]]=Ua.replace(/\.bend$/,""),await ta(a,ha,f[s[2]],i,D)}T[M]="";continue}if(N!==""&&!N.startsWith("#"))break}let U=a.order.length;if(pn(a,d,T.join(`
`),n,f),y===ue)for(let M of a.order.slice(U)){let N=a.tlds[M];if(N.$==="Def")N.b=!0}return i.set(y,n),U}function Qn(a,e){let n=e;for(let i=a.length-1;i>=0;i--){let[o,y,c,d,f]=a[i];n=b(o,y,c,d,n,f)}return n}function Hn(a,e){let n=H(a,e);return n.$==="All"?n:null}function ba(a,e,n,i,o){let y=Hn(a,e);if(y===null)throw S(a,n,"unreachable (a telescope binds its parameters and fields)",void 0,o,i);return y}function Ie(a,e,n,i,o,y){let c=e;for(let d of n)c=ba(a,c,i,o,y).B(d);return c}function Je(a,e){let n=[],i=e;for(let o=Hn(a,i);o!==null;o=Hn(a,i))n.push([o.q,o.k,o.A]),i=o.B(Z(o.k,n.length-1,o.s));return{doms:n,ret:H(a,i)}}function Vi(a,e,n){let i=e;for(let o=0;o<a;o++)i=J("Succ",[i],n);return i}function $e(a,e){let n=J("WNil",[],e);for(let i=31;i>=0;i--){let o=a>>>i&1;n=J("WCon",[J(o===1?"True":"False",[],e),n],e)}return n}function tn(a,e){return J("U32",[$e(a,e)],e)}function ui(a,e="U32"){let n=k(a);if(n.$!=="Ctr"||n.k!==e||n.x.length!==1)return null;let i=0,o=0,y=k(n.x[0]);while(y.$==="Ctr"&&y.k==="WCon"&&y.x.length===2){let c=k(y.x[0]);if(c.$!=="Ctr"||c.x.length!==0||c.k!=="True"&&c.k!=="False")return null;if(c.k==="True")i+=2**o;o+=1,y=k(y.x[1])}if(o!==32||y.$!=="Ctr"||y.k!=="WNil"||y.x.length!==0)return null;return i}var Ke=new DataView(new ArrayBuffer(4));function Oi(a){return Ke.setFloat32(0,a),Ke.getUint32(0)}function Ii(a,e){return J("F32",[$e(Oi(a),e)],e)}function Wn(a){switch(a.$){case"None":return"-";case"Lone":return"";case"Many":return"+"}}var Xe={n:10,t:9,r:13,"0":0,"\\":92,"'":39,'"':34};function Ki(a,e){for(let[n,i]of Object.entries(Xe))if(i===a&&(n!=="'"&&n!=='"'||n===e))return"\\"+n;if(a<32||a===127||a>=55296&&a<=57343||a>1114111)return null;return String.fromCodePoint(a)}function va(a,e=-1,n=[]){function i(f,h){if(f.$!=="App")return null;let{f:T,x:U}=f;if(T.$!=="App"||U.$!=="Lam")return null;let M=T.f;if(M.$!=="Ref"||M.k!=="Exists")return null;let N=d(T.x,2);n.push(U.k);let w=d(U.f,1);n.pop();let s="&"+U.k+":"+N+" -> "+w;return h>1?"("+s+")":s}function o(f,h){let T=0,U=f;while(U.$==="Ctr"&&U.k==="Succ"&&U.x.length===1)T+=1,U=U.x[0];if(U.$==="Ctr"&&U.k==="Zero"&&U.x.length===0)return String(T)+"n";if(T===0)return null;let M=String(T)+"n+"+d(U,1);return h>1?"("+M+")":M}function y(f,h){if(f.$!=="Ctr"||f.k!=="Chr"||f.x.length!==1)return null;let T=ui(f.x[0]);if(T===null||T>1114111)return null;return Ki(T,h)}function c(f){let h="",T=f;while(T.$==="Ctr"&&T.k==="SCon"&&T.x.length===2){let U=y(T.x[0],'"');if(U===null)return null;h+=U,T=T.x[1]}if(h===""||T.$!=="Ctr"||T.k!=="SNil"||T.x.length!==0)return null;return'"'+h+'"'}function d(f,h){switch(f.$){case"Var":return n.lastIndexOf(f.k)===f.i?f.k:f.k+"^"+String(f.i);case"Ref":return(n.includes(f.k)?f.k+"^":f.k)+(f.b===!0?"!":"");case"Sub":return d(f.f,h);case"Let":{let T=f.v.map((w)=>d(w,1));for(let w of f.k)n.push(w);let U=d(f.f,-1);n.length-=f.k.length;let N=f.k.map((w,s)=>Wn(f.q[s])+w).join(" ")+" = "+T.join(" ")+"; "+U;return h>=0?"("+N+")":N}case"Typ":{let T=f.g;if(T.$==="Qua"&&T.q.$==="Lone")return"Type";if(T.$==="Qua"&&T.q.$==="Many")return"Data";return"Kind("+d(f.g,0)+")"}case"Qnt":return"Quant";case"Qua":return{None:"&0",Lone:"&1",Many:"&2"}[f.q.$];case"Min":{let T=d(f.a,2)+" <&> "+d(f.b,2);return h>1?"("+T+")":T}case"All":{let T=d(f.A,2);n.push(f.k);let U=d(f.B,1);n.pop();let M="@"+Wn(f.q)+f.k+":"+T+" -> "+U;return h>1?"("+M+")":M}case"Lam":{n.push(f.k);let T=d(f.f,-1);n.pop();let U=f.k+" => "+T;return h>0?"("+U+")":U}case"App":{let T=i(f,h);if(T!==null)return T;let[U,M]=Gn(f),N=d(U,2),w=M.map((s)=>d(s,0));return N+"("+w.join(", ")+")"}case"ADT":{let T=f.x.map((N)=>d(N,0)),U=f.r.map((N)=>" - "+N+"{}").join(""),M=f.k+(T.length===0&&U===""?"":"<"+T.join(", ")+">")+U;return U!==""&&h>1?"("+M+")":M}case"Ctr":{let T=y(f,"'"),U=o(f,h)??(T!==null?"'"+T+"'":null)??c(f);if(U!==null)return U;let M=f.x.map((N)=>d(N,0));return f.k+"{"+M.join(", ")+"}"}case"Mat":{let T=[],U=f;while(U.$==="Mat")T.push(U.k+": "+d(U.h,1)),U=U.m;if(U.$!=="Efq")T.push(d(U,1));return"\\{"+T.join("; ")+"}"}case"Efq":return"\\{}";case"Eql":return"{"+d(f.a,1)+" == "+d(f.b,1)+" : "+d(f.T,1)+"}";case"Rfl":return"{==}";case"Hol":return"?"+f.k;case"Rwt":{let T=d(f.e,1),U=k(f.p),M=U.$==="Lam"?k(U.f):U,N="",w;if(U.$==="Lam"&&M.$==="Lam")n.push(U.k,M.k),w=d(M.f,1),n.length-=2,N=M.k===""?"":M.k+"@";else w=d(f.p,1);let s=d(f.f,-1),u="%"+N+T+" : "+w+"; "+s;return h>0?"("+u+")":u}case"Ann":return"{"+d(f.x,1)+" : "+d(f.T,1)+"}"}}return d(a,e)}function sn(a,e,n=[]){if(typeof e==="string")return e;else{let i=A(R(a,e),n.length);return va(i,-1,n)}}function zi(a,e){let n=ja(e);n.sort((c,d)=>c[0]-d[0]);let i=En(e),o=0;for(let[,c]of n)o=Math.max(o,c.k.length);let y=n.length===0?"":`
Context:`;for(let[c,d]of n){let f=va(A(R(a,d.T),c),-1,i.slice(0,c));y+=`
- `+d.k.padEnd(o)+" : "+f}return y}function Li(a){let e=a.src.split(`
`),n=a.src.slice(0,a.beg).split(`
`).length,i=Math.max(1,n-1),o=Math.min(e.length,n+1),y=[];for(let c=i;c<=o;c++){let d=c===n?">| ":" | ";y.push(String(c).padStart(String(o).length)+d+(e[c-1]??""))}return y.join(`
`)}function wn(a,e,n){return"non-inferrable term '"+sn(a,n,En(e))+"'"}function Ye(a){let e=En(a.ctx),n=a.obs===void 0?`
- message  : `+sn(a.bok,a.exp,e):`
- expected : `+sn(a.bok,a.exp,e)+`
- observed : `+sn(a.bok,a.obs,e),i=a.def===void 0?"":" "+a.def,o=a.spn===void 0?"":`
`+Li(a.spn),y=i===""&&o===""?"":`
Location:`+i+o;return"Error:"+n+zi(a.bok,a.ctx)+y}var bn=new Set(["def","type","law","match","case","do","return","for","exs","where","is","import","Type","Data","Kind","Quant"]),Pi={"0":Y(),"1":K(),"2":Sa()};function vi(a,e,n,i="",o=Object.create(null)){return{book:a,dir:e,str:n,pos:0,sc:{stk:[],frs:0},ns:i,al:o,os:[],inst:null}}function Ha(a,e){return e-a.lastIndexOf(`
`,e-1)}function r(a,e){return{src:a.str,beg:e,end:a.pos}}function C(a,e){let n=a.pos<a.str.length?"'"+a.str[a.pos]+"'":"end of input";throw S(a.book,L(),e,n,{src:a.str,beg:a.pos,end:a.pos})}function q(a){return a.pos<a.str.length?a.str[a.pos]:""}function V(a){let e=q(a);return a.pos+=1,e}function $(a,e){if(a.str.charCodeAt(a.pos)!==e.charCodeAt(0))return!1;return e.length===1||a.str.startsWith(e,a.pos)}function g(a,e){if(!$(a,e))return!1;return a.pos+=e.length,!0}function l(a){let e=a.str;while(a.pos<e.length){let n=e.charCodeAt(a.pos);if(n===32||n===10||n===13||n===9){a.pos+=1;continue}if(n===35){while(a.pos<e.length&&e.charCodeAt(a.pos)!==10)a.pos+=1;continue}return}}function G(a,e){if(l(a),!g(a,e))C(a,"'"+e+"'")}function ya(a,e){if(l(a),!$(a,e))return!1;return!xa(a.str[a.pos+e.length]??"")}function na(a,e){if(!ya(a,e))return!1;return g(a,e),!0}function Qe(a){if(l(a),!La(q(a)))C(a,"a name");let e=a.pos;while(a.pos<a.str.length&&xa(a.str[a.pos]))a.pos+=1;let n=a.str.slice(e,a.pos);if(n.endsWith("."))C(a,"a name (a name cannot end in '.')");return n}function ca(a){let e=Qe(a);if(bn.has(e))C(a,"a name (got the keyword '"+e+"')");return e}function He(a){if(g(a,"\\")){let n=Xe[V(a)];if(n===void 0)C(a,"an escape (\\n \\t \\r \\0 \\\\ \\' \\\")");return n}let e=a.str.codePointAt(a.pos);if(e===void 0)C(a,"a character");if(V(a),e>65535)V(a);return e}function ea(a,e,n){let i=a.sc.frs++;if(e!=="_")a.sc.stk.push([e,i,n]);return i}function ia(a,e){a.sc.stk.length=e}function qe(a,e){let n=a.sc.stk;for(let i=n.length-1;i>=0;i--)if(n[i][0]===e)return n[i];return null}function Di(a,e,n){let i=qe(a,e);if(i!==null)return i[2]===void 0?Z(e,i[1],n):i[2].$==="Var"?I(i[2].k,n):i[2];let o=Ta(a,e);if(o!==e||e.includes(".")||o in a.book.tmps)return I(o,n);return Z(e,a.sc.frs++,n)}function ma(a,e){return a.ns===""?e:a.ns+"."+e}function Ta(a,e){let n=e.indexOf("."),i=ma(a,e);if(n!==-1&&e.slice(0,n)in a.al)i=a.al[e.slice(0,n)]+e.slice(n);if(i in a.book.tlds||i in a.book.ctrs||i in a.book.tmps)return i;return e}function An(a){if(l(a),g(a,"-"))return Y();if(g(a,"+"))return Sa();return K()}function mn(a,e){let n=a.book;switch(e.$){case"Var":{if(Fa(n,Ta(a,e.k))!==null)throw S(n,L(),"a braced constructor pattern ("+e.k+" is a constructor: write "+e.k+"{}, or rename the binder)",void 0,e.s);let i=ea(a,e.k);return{$:"PVar",k:e.k,i,s:e.s}}case"Ctr":{let i=Fa(n,e.k);if(i===null)throw S(n,L(),"a declared constructor (unknown: "+e.k+")",void 0,e.s);if(i.n!==e.x.length)throw S(n,L(),"a "+e.k+" pattern with "+String(i.n)+(i.n===1?" field":" fields"),void 0,e.s);let o=[];for(let y of e.x)o.push(mn(a,y));return{$:"PCtr",k:e.k,x:o,s:e.s}}default:throw S(n,L(),"a pattern (a binder or a constructor)",va(A(B(e),0)),e.s)}}function W(a,e=0){l(a);let n=a.pos,i=Ri(a,n);return i.s??=r(a,n),Xi(a,i,e)}function Ri(a,e){let n=q(a);if(La(n))return Zi(a,Qe(a),e);if(/[0-9]/.test(n))return qi(a);switch(n){case"@":return ze(a,!1);case"&":{let i=Pi[a.str[a.pos+1]??""];if(i!==void 0)return V(a),V(a),X(i,r(a,e));return ze(a,!0)}case"+":{V(a);let i=W(a,5),o=r(a,e),y="";if(i.$==="ADT")y=i.k;else if(i.$==="Var"||i.$==="Ref")y=Ta(a,i.k);let c=a.book.tlds[y];if(c===void 0||c.$!=="ADT"||c.g===0||c.g<c.n&&i.$!=="ADT")C(a,"a quantified datatype after + (+D<..> sets D's leading quantities to &2)");let d=i.$==="ADT"?i.x:Array.from({length:c.n},()=>X(K(),o));return da(y,d.map((f,h)=>h<c.g?X(Sa(),o):f),o)}case"\\":return V(a),G(a,"{"),Yi(a,e);case"%":return Qi(a,e);case"{":return Hi(a);case"(":return V(a),je(a,e,a.os.length);case"[":{V(a);let i=ka(a,"]"),o=r(a,e),y=J("Nil",[],o);for(let c=i.length-1;c>=0;c--)y=J("Con",[i[c],y],o);return y}case"'":return xi(a);case'"':return ji(a);case"?":{V(a);let i=ca(a);if(i==="TODO")a.book.hols+=1;return nn(i,r(a,e))}default:C(a,"a term")}}function Zi(a,e,n){if(e==="Type")return v(X(K()),r(a,n));if(e==="Data")return v(X(Sa()),r(a,n));if(e==="Quant")return wa(r(a,n));if(e==="Kind"){G(a,"(");let i=W(a);return G(a,")"),v(i,r(a,n))}if(e==="do")return Ei(a);if(e==="match")C(a,"a term (a match heads a def body, not a term)");if(e==="case")C(a,"a match heading this case (this case is orphaned)");if(e==="return")C(a,"a do-block heading this return");if(bn.has(e))C(a,"a term (the keyword '"+e+"' cannot head one)");if($(a,"{")){V(a);let i=ka(a,"}");return J(Ta(a,e),i,r(a,n))}return Di(a,e,r(a,n))}var Ji=[[".|.",6,!1,".or"],[".^.",7,!1,".xor"],[".&.",8,!1,".and"],["||",2,!1,"Bool.or"],["&&",3,!1,"Bool.and"],["<=",4,!1,".is_le"],[">=",4,!1,".is_ge"],["<>",5,!0,""],["++",5,!0,"String.append"],["<<",9,!1,".shln"],[">>",9,!1,".shrn"],["&",1,!0,""],["|",1,!0,""],[">",4,!1,".is_gt"],["+",10,!1,".add"],["-",10,!1,".sub"],["*",11,!1,".mul"],["/",11,!1,".div"],["%",11,!1,".mod"]];function $i(a){for(let e of Ji){if(!$(a,e[0]))continue;let n=a.str[a.pos+e[0].length]??"";if((e[0]==="-"||e[0]==="+")&&(n===">"||La(n)))continue;if(e[0][0]===">"&&!/\s/.test(a.str[a.pos-1]??" "))continue;if(e[0]==="%"&&!/\s/.test(n))continue;return e}return null}function Va(a,e){if(e.s===void 0)return;return r(a,e.s.beg)}function qn(a){for(let e=a.pos-1;e>=0;e--){let n=a.str[e];if(n===`
`)return!0;if(n!==" "&&n!=="\r"&&n!=="\t")return!1}return!0}function Xi(a,e,n){let i=e;while(!0){if(l(a),qn(a)&&($(a,"(")||$(a,"[")))return i;if($(a,"!(")){if(i.$==="Var"&&qe(a,i.k)===null)i=I(i.k,i.s);if(i.$!=="Ref")C(a,"a named def before ! (only f!(..) offloads)");V(a),i.b=!0;continue}if($(a,"(")){V(a);let d=i.$==="Ref"?a.book.tmps[i.k]:void 0,f=[];for(l(a);d!==void 0&&g(a,"~");l(a))f.push(W(a)),l(a),g(a,",");let h=f.concat(ka(a,")")),T=Va(a,i);if(i.$==="Ref"&&d!==void 0){let U=a.sc.stk.reduce((N,w)=>Qa(N,w[1],I("\x00")),null),M=f.map((N)=>va(A(B(N,U)))).join(`
`);if(!M.includes("\x00")&&M.length<=2048){if(d.is[M]===void 0)d.is[M]=i.k+"~"+Object.keys(d.is).length,Bn({...d.p,sc:{stk:[],frs:a.sc.frs},os:[],inst:{k:d.is[M],xs:f}},a.book,d.u);i={...i,k:d.is[M]}}}for(let U of h)i=i.$==="Lam"&&a.sc.stk.some((M)=>M[2]===i)?qa(i.i,U,i.f,T):O(i,U,T);continue}if($(a,"[")){V(a);let d=a.os.length,f=W(a);G(a,"]");let h=Va(a,i);if(xe(a,a.os.splice(d),I("U32",h)),l(a),!qn(a)&&g(a,"<-")){let T=W(a,2);i=O(O(O(O(I("Array.set",h),I("U32",h),h),i,h),f,h),T,h)}else i=O(O(O(I("Array.get",h),I("U32",h),h),i,h),f,h);continue}if($(a,"<")&&!"-=<>".includes(a.str[a.pos+1]??"")&&!$(a,"<&>")&&(n<=4||/\S/.test(a.str[a.pos-1]??""))){V(a);let d=W(a,5);l(a);let f=Va(a,i);if($(a,">")||$(a,",")){if(i.$!=="Var"&&i.$!=="Ref")C(a,"a family name before <..> (a comparison here needs parens)");let h=[d];if(!g(a,">"))g(a,","),h.push(...ka(a,">"));let T=Ta(a,i.k),U=a.book.tlds[T];if(U!==void 0&&U.$==="ADT"&&h.length+U.g===U.n)h.unshift(...Array.from({length:U.g},()=>X(K(),f)));i=da(T,h,f)}else{let h={$:"Ref",k:".is_lt",s:f};a.os.push(h),i=O(O(h,i,f),d,f)}continue}if(n===0&&g(a,"=>")){if(i.$!=="Var")C(a,"a lambda binder (one name: k => body)");let d=a.sc.stk.length,f=ea(a,i.k),h=kn(a);ia(a,d),i=m(i.k,f,h,i.s);continue}if(n===0&&g(a,"->")){let d=W(a),f=Va(a,i);i=b(K(),"_",ea(a,"_"),i,d,f);continue}if(n<=5&&g(a,"<&>")){let d=W(a,5);i=Wa(i,d,Va(a,i));continue}let o=$i(a);if(o===null||o[1]<n||$(a,"<-"))return i;g(a,o[0]);let y=W(a,o[2]?o[1]:o[1]+1),c=Va(a,i);if(o[0]==="<>")i=J("Con",[i,y],c);else if(o[0]==="&")i=O(O(I("Pair",c),i,c),y,c);else if(o[0]==="|")i=O(O(I("Or",c),i,c),y,c);else{let d={$:"Ref",k:o[3],s:c};if(o[3][0]===".")a.os.push(d);i=O(O(d,i,c),y,c)}}}function xe(a,e,n){let i=Gn(n)[0];for(let o of e){if(i.$!=="Var"&&i.$!=="Ref"&&i.$!=="ADT")throw S(a.book,L(),"a type name after : (the operators' namespace)",void 0,i.s);o.k=Ta(a,i.k+o.k)}}function ka(a,e){let n=[];while(!0){if(l(a),g(a,e))return n;let i=W(a);n.push(i),l(a),g(a,",")}}function ze(a,e){let n=a.pos;V(a);let i=e?K():An(a),o=ca(a);G(a,":");let y=W(a,1);G(a,"->");let c=a.sc.stk.length,d=ea(a,o),f=W(a);if(ia(a,c),e){let h=r(a,n);return O(O(I("Exists",h),y,h),m(o,d,f,h),h)}return b(i,o,d,y,f)}function je(a,e,n){l(a);let i=en(a,Ha(a.str,a.pos)-1);if(l(a),i.$==="Reply"&&g(a,",")){let y=je(a,e,n);return J("Tuple",[i.x,y],r(a,e))}let o=ga(i,[],()=>a.sc.frs++);if(g(a,":"))xe(a,a.os.splice(n),W(a));return G(a,")"),o}function Yi(a,e){let n=[],i=Pa();while(!0){if(l(a),g(a,"}"))break;let c=W(a);if(l(a),(c.$==="Var"||c.$==="Ref")&&g(a,":")){let d=W(a);n.push([Ta(a,c.k),d]),l(a),g(a,";");continue}i=c,l(a),g(a,";"),G(a,"}");break}let o=r(a,e);i.s??=o;let y=i;for(let c=n.length-1;c>=0;c--)y=Ba(n[c][0],n[c][1],y,o);return y}function Qi(a,e){V(a);let n=W(a);l(a);let i="",o=n;if(g(a,"@")){if(n.$!=="Var")C(a,"a name before @ (a rewrite binder is one name: %e@E : P)");i=n.k,o=W(a)}G(a,":");let y=a.sc.stk.length,c=a.sc.frs++;a.sc.stk.push(["_",c]);let d=i===""?a.sc.frs++:ea(a,i),f=W(a);ia(a,y),l(a),g(a,";");let h=kn(a),T=r(a,e);return an(o,m("_",c,m(i,d,f,n.s),T),h,T)}function Hi(a){let e=a.pos;if(V(a),l(a),g(a,"=="))return G(a,"}"),za();let n=W(a);if(l(a),g(a,"==")){let o=W(a);G(a,":");let y=W(a);return G(a,"}"),sa(n,o,y)}if(g(a,"!=")){let o=W(a);G(a,":");let y=W(a);G(a,"}");let c=r(a,e);return b(K(),"_",ea(a,"_"),sa(n,o,y,c),I("Empty",c),c)}G(a,":");let i=W(a);return G(a,"}"),Ga(n,i)}function qi(a){let e=a.pos,n="";while(/[0-9]/.test(q(a)))n+=V(a);if(!g(a,"n")){if($(a,".")&&/[0-9]/.test(a.str[a.pos+1]??"")){let d=n+V(a);while(/[0-9]/.test(q(a)))d+=V(a);if(/[eE]/.test(q(a))&&/[0-9+-]/.test(a.str[a.pos+1]??"")){d+=V(a)+(/[+-]/.test(q(a))?V(a):"");while(/[0-9]/.test(q(a)))d+=V(a)}let f=Math.fround(Number(d));if(!isFinite(f))C(a,"a float literal with a finite f32 value (got "+d+")");return Ii(f,r(a,e))}if(xa(q(a)))C(a,"a numeric literal (NUMBER is U32, NUMBER n is Nat)");let c=Number(n);if(c>4294967295)C(a,"a u32 literal up to 4294967295 (got "+n+")");return tn(c,r(a,e))}let i=Number(n);if(i>Number.MAX_SAFE_INTEGER)C(a,"a nat literal up to "+Number.MAX_SAFE_INTEGER+"n (got "+n+"n)");let o;if(g(a,"+"))o=W(a);else{if(xa(q(a)))C(a,"a nat literal (NUMBER n)");o=J("Zero",[],r(a,e))}let y=r(a,e);return Vi(i,o,y)}function xi(a){let e=a.pos;V(a);let n=He(a);if(q(a)!=="'")C(a,"a closing '");V(a);let i=r(a,e);return J("Chr",[tn(n,i)],i)}function ji(a){let e=a.pos;V(a);let n=[];while(q(a)!=='"'){if(a.pos>=a.str.length)C(a,'a closing "');n.push(He(a))}V(a);let i=r(a,e),o=J("SNil",[],i);for(let y=n.length-1;y>=0;y--)o=J("SCon",[J("Chr",[tn(n[y],i)],i),o],i);return o}function Ei(a){let e=ca(a);G(a,"<");let n=ka(a,">");return G(a,":"),Ee(a,e,n.slice(0,-1),n.length===0?null:n[n.length-1])}function Ee(a,e,n,i){function o(u,D,x,ha){let Ua=I(Ta(a,e+"."+u),ha);for(let Tn of n.concat(D,i===null?[]:[i],x))Ua=O(Ua,Tn,ha);return Ua}l(a);let y=a.pos;if(na(a,"return")){let u=W(a);return o("pure",[],[u],r(a,y))}let c=W(a);l(a);let d=c.$==="Var"&&g(a,":"),f=d?W(a,1):c;l(a);let h=d&&$(a,"=")&&!$(a,"==");if(h)V(a);else if(d)G(a,"<-");else if(!g(a,"<-"))return c;let T=W(a);l(a),g(a,";");let U=r(a,y),M=d&&c.$==="Var"?c.k:"_",N=a.sc.stk.length,w=ea(a,M),s=Ee(a,e,n,i);if(ia(a,N),h)return pa([M],[w],[Ga(T,f,U)],s,U);return o("bind",[f],[T,m(M,w,s,U)],U)}function en(a,e=0){l(a);let n=a.pos;if(ya(a,"match"))return bi(a,e);let i=An(a),o=[];if(i.$!=="Lone"){let h=i.$==="None"||La(q(a))?ca(a):"";if(l(a),h!==""&&$(a,"=")&&!$(a,"=="))o=[Z(h,0,r(a,n))],G(a,"=");else a.pos=n,i=K()}if(i.$==="Lone"){o=[W(a)],l(a);while(!qn(a)&&La(q(a))&&!ti(a))o.push(W(a)),l(a);if(o.length===1&&!($(a,"=")&&!$(a,"==")))return{$:"Reply",x:o[0],s:r(a,n)};G(a,"=")}let y=[];for(let h of o)y.push(W(a));l(a),g(a,";");let c=a.sc.stk.length,d=o.map((h)=>{if(o.length>1&&h.$!=="Var")throw S(a.book,L(),"a name (a parallel let binds names; destructure in its body)",void 0,h.s);return mn(a,h)}),f=en(a,e);return ia(a,c),{$:"Local",k:d,q:i,v:y,f}}function ti(a){let e="";for(let n=a.pos;n<a.str.length&&xa(a.str[n]);n++)e+=a.str[n];return bn.has(e)}function kn(a){l(a);let e=en(a,Ha(a.str,a.pos)-1);return ga(e,[],()=>a.sc.frs++)}function Le(a){let e=[];while(!0){if(e.push(W(a)),l(a),g(a,":"))return e;g(a,",")}}function bi(a,e){l(a);let n=a.pos;na(a,"match");let i=Le(a);l(a);let o=Ha(a.str,a.pos),y=[];while(o>e&&ya(a,"case")&&Ha(a.str,a.pos)>=o){let c=Ha(a.str,a.pos);na(a,"case");let d=Le(a);if(d.length!==i.length)C(a,String(i.length)+" patterns (one per scrutinee)");let f=a.sc.stk.length,h=[];for(let U of d)h.push(mn(a,U));let T=en(a,c);ia(a,f),y.push({p:h,f:T})}return{$:"Match",e:i,r:y,s:r(a,n)}}function xn(a,e){let n=[];while(!0){if(l(a),g(a,e))return n;let i=e===")"&&g(a,"~"),o=i?Y():An(a),y=a.pos,c=ca(a),d=r(a,y);if(l(a),o.$==="Lone"&&!$(a,":"))n.push([Y(),c,ea(a,c),wa(),d]);else{G(a,":");let f=W(a);n.push([o,c,ea(a,c,i?a.inst?.xs.shift():void 0),f,d])}l(a),g(a,",")}}function _n(a,e){if(a.book.tlds[e]!==void 0||a.inst===null&&e in a.book.tmps)C(a,"a fresh name (duplicate declaration: "+e+")")}function Bn(a,e,n=!1){let i=a.pos;na(a,"def");let o=ca(a),y=Ta(a,o),c=e.tlds[y];if(c!==void 0&&c.$==="Def"&&c.v===null&&c.b!==!0&&!c.i){if(n)c.u=!0;mi(a,e,y,c);return}let d=a.inst?.k??ma(a,o);_n(a,d);let f=a.sc.stk.length;if(G(a,"("),l(a),a.inst===null&&$(a,"~")){e.tmps[d]={p:{...a,pos:i},u:n,is:Object.create(null)},a.pos=i,a.inst={k:d,xs:[]},Bn(a,aa(),n),a.inst=null;return}let h=xn(a,")");G(a,"->");let T=W(a),U={$:"Def",n:h.length,T:B(Qn(h,T)),v:null};if(n)U.u=!0;e.tlds[d]=U;let M=h.map((N)=>({$:"PVar",k:N[1],i:N[2],s:N[4]}));te(a,e,d,U,M,f)}function mi(a,e,n,i){let o=a.sc.stk.length;G(a,"(");let y=[];while(!0){if(l(a),g(a,")"))break;let c=a.pos,d=ca(a);y.push({$:"PVar",k:d,i:ea(a,d),s:r(a,c)}),l(a),g(a,",")}i.n=y.length,te(a,e,n,i,y,o)}function te(a,e,n,i,o,y){if(G(a,":"),ya(a,"import")){i.i=[];while(na(a,"import")){G(a,'"');let d="";while(q(a)!=='"'&&q(a)!=="")d+=V(a);if(G(a,'"'),!/\.(c|js)$/.test(d))C(a,"a .c or .js path");i.i.push(a.dir+d)}ia(a,y),e.order.push(n);return}let c=en(a);ia(a,y),i.v=B(A(B(ga(c,o,()=>a.sc.frs++)))),e.order.push(n)}function ki(a,e){na(a,"law");let n=ma(a,ca(a));_n(a,n),G(a,":");let i=a.sc.stk.length,o=[];while(ya(a,"for")||ya(a,"exs")){let d=na(a,"for");if(!d)na(a,"exs");let f=d?An(a):K(),h=a.pos,T=ca(a),U=r(a,h);G(a,":");let M=W(a);if(na(a,"where")){let N=a.sc.stk.length,w=ea(a,T),s=W(a);ia(a,N),M=O(O(I("Exists",U),M,U),m(T,w,s,U),U)}o.push([d,f,T,ea(a,T),M,U])}let y=kn(a);for(let d=o.length-1;d>=0;d--){let[f,h,T,U,M,N]=o[d];y=f?b(h,T,U,M,y,N):O(O(I("Exists",N),M,N),m(T,U,y,N),N)}ia(a,i);let c=0;while(c<o.length&&o[c][0])c+=1;e.tlds[n]={$:"Def",n:c,T:B(y),v:null},e.order.push(n)}function _i(a,e){na(a,"type");let n=ma(a,ca(a));_n(a,n);let i=a.sc.stk.length;l(a);let o=g(a,"<")?xn(a,">"):[];if(!na(a,"is"))C(a,"'is'");let y=W(a);G(a,":");let c=[],d=o.findIndex((f)=>f[3].$!=="Qnt");e.tlds[n]={$:"ADT",n:o.length,g:d<0?o.length:d,T:B(Qn(o,y)),c};while(!0){if(l(a),a.pos>=a.str.length||!La(q(a)))break;if(["def","type","law"].some((N)=>ya(a,N)))break;let f=ma(a,ca(a));if(Fa(e,f)!==null)C(a,"a fresh constructor name (duplicate declaration: "+f+")");G(a,"{");let h=a.sc.stk.length,T=xn(a,"}"),U=da(n,o.map((N)=>Z(N[1],N[2]))),M={k:f,n:T.length,T:B(Qn(o.concat(T),U))};ia(a,h),c.push(M),e.ctrs[f]=M}ia(a,i),e.order.push(n)}function pn(a,e,n,i="",o=Object.create(null)){let y=vi(a,e,n,i,o);while(!0){if(l(y),y.pos>=y.str.length)return a;if(y.sc={stk:[],frs:0},g(y,"@")){if(!na(y,"unsafe"))C(y,"'unsafe' (the one decorator)");if(l(y),!ya(y,"def"))C(y,"'def' (@unsafe marks the def below it)");Bn(y,a,!0);continue}if(ya(y,"def")){Bn(y,a);continue}if(ya(y,"type")){_i(y,a);continue}if(ya(y,"law")){ki(y,a);continue}C(y,"'def', 'type' or 'law'")}}function Ia(a,e,n){function i(o){if(o.$==="Var")return o.i!==e?o:n.$==="Var"?Z(n.k,n.i,o.s):n;else return qa(e,n,o)}switch(a.$){case"Match":{let o=a.e.map(i),y=a.r.map((c)=>({p:c.p,f:Ia(c.f,e,n)}));return{$:"Match",e:o,r:y,s:a.s}}case"Local":{let o=a.v.map(i),y=Ia(a.f,e,n);return{$:"Local",k:a.k,q:a.q,v:o,f:y}}case"Reply":return{$:"Reply",x:qa(e,n,a.x),s:a.s}}}function ua(a,e,n){if(a.e.length===0&&a.r.length>0)return ga(a.r[0].f,e,n);else if(a.e.length===0)throw S(aa(),L(),"a case (this match has no row to return)",void 0,a.s);else if(e.length===0){let i=a.e[0];while(i.$==="Sub")i=i.f;switch(i.$){case"Var":throw S(aa(),L(),"match scrutinees in binder order (this variable is unbound, consumed, or out of order: reorder the match)",void 0,i.s);case"Ctr":throw S(aa(),L(),"an undestructed scrutinee (this value is already a constructor: bind its fields directly; if an outer match destructed it, fold the pattern into the outer case)",void 0,a.s);default:throw S(aa(),L(),"a parameter or field scrutinee (a match cannot scrutinize a computed value: give it its own def)",void 0,i.s??a.s)}}else{let i=e[0],o=a.e[0],y=e2(a.r),c=e.find((d)=>o.$==="Var"&&d.i===o.i);if(c!==void 0&&y===null&&a.r.length>0){let d=n2(a.r,c);return ua({$:"Match",e:a.e.slice(1),r:d,s:a.s},e,n)}else if(c===i)if(y===null)return Pa(a.s);else{let d=i2(y.x,n),f=pi(a.r,i,y.k,d),h=d.map((w)=>_a(w)).concat(a.e.slice(1)),T=d.concat(e.slice(1)),U=ua({$:"Match",e:h,r:f,s:a.s},T,n),M=a2(a.r,y.k),N=ua({$:"Match",e:a.e,r:M,s:a.s},e,n);return Ba(y.k,U,N,y.s)}else{let d=ua(a,e.slice(1),n);return m(i.k,i.i,d,i.s)}}}function pi(a,e,n,i){let o=_a({$:"PCtr",k:n,x:i,s:e.s});return a.flatMap((y)=>{let c=y.p[0];switch(c.$){case"PCtr":if(c.k!==n)return[];else if(c.x.length!==i.length)throw S(aa(),L(),"a "+n+" pattern with "+String(i.length)+" fields",void 0,c.s);else{let d=Ia(y.f,e.i,o);return[{p:c.x.concat(y.p.slice(1)),f:d}]}case"PVar":{let d=Ia(y.f,c.i,_a(e)),f=Ia(d,e.i,o);return[{p:i.concat(y.p.slice(1)),f}]}}})}function a2(a,e){return a.filter((n)=>{let i=n.p[0];return i.$!=="PCtr"||i.k!==e})}function n2(a,e){return a.map((n)=>{let i=n.p[0];if(i.$==="PVar"){let o=Ia(n.f,i.i,_a(e));return{p:n.p.slice(1),f:o}}else throw S(aa(),L(),"a variable pattern (this column has no constructor row)",void 0,i.s)})}function e2(a){for(let e of a){let n=e.p[0];if(n.$==="PCtr")return n}return null}function i2(a,e){return a.map((n)=>{if(n.$==="PVar")return n;let i=e();return{$:"PVar",k:"_"+String(i),i,s:n.s}})}function _a(a){switch(a.$){case"PVar":return Z(a.k,a.i,a.s);case"PCtr":{let e=a.x.map(_a);return J(a.k,e,a.s)}}}function ga(a,e,n){switch(a.$){case"Reply":if(e.length===0)return a.x;else{let i=e[0],o=ga(a,e.slice(1),n);return m(i.k,i.i,o,i.s)}case"Local":{if(a.k.length===1&&a.k[0].$==="PCtr"){let c={p:[a.k[0]],f:a.f};return ua({$:"Match",e:[a.v[0]],r:[c],s:a.v[0].s},e,n)}let i=a.k,o=ga(a.f,i,n);for(let c of i){if(o.$!=="Lam")throw S(aa(),L(),"a parameter or field scrutinee (a match cannot scrutinize a local binder: give it its own def)",void 0,c.s);o=o.f}let y=pa(i.map((c)=>c.k),i.map((c)=>c.i),a.v,o,i[0].s,i.map(()=>a.q));return ga({$:"Reply",x:y},e,n)}case"Match":return ua(a,e,n)}}function H(a,e){let n=[],i=e,o=null;a:while(!0){n:switch(i.$){case"Var":if(i.v===void 0)break n;else{if(i.i===-1)n.push({$:"VAR",l:i,a:i.v.$==="Ann"?i.v:void 0});o=null,i=i.v;continue a}case"Ann":{i=i.x;continue a}case"Min":{n.push({$:"MNA",b:i.b,s:i.s}),i=i.a;continue a}case"Let":{let y=i;i=y.f(y.v.map((c,d)=>j(c,y.k[d])));continue a}case"App":{n.push({$:"APP",x:j(i.x),s:i.s}),o=null,i=i.f;continue a}case"Lam":if(n.length===0||n[n.length-1].$!=="APP")break n;else{let y=n.pop();if(o!==null&&o.n===0)o=null;else if(o!==null){let{t:c,n:d}=o;o={t:()=>p(c(),y.x,y.s),n:d-1}}i=i.f(y.x);continue a}case"Mat":if(n.length===0||n[n.length-1].$!=="APP")break n;else{let y=n.pop();n.push({$:"MAT",t:i,e:y.x,lhs:o,s:y.s}),i=y.x,o=null;continue a}case"Efq":{if(o!==null&&o.n>0&&n.length>0&&n[n.length-1].$==="APP")i=o.t();break n}case"Rwt":{if(H(a,i.e).$==="Rfl"){i=i.f;continue a}break n}case"Ref":{let y=a.tlds[i.k];if(y===void 0)break n;if(y.$==="ADT"){if(y.n===0)i=da(i.k,[],i.s);break n}let c=0;while(c<y.n&&c<n.length&&n[n.length-1-c].$==="APP")c+=1;if(c<y.n||y.v===null)break n;let d=i;o={t:()=>d,n:y.n},i=y.v;continue a}default:break n}o=null;n:while(!0){let y=n.pop();if(y===void 0)return i;else switch(y.$){case"VAR":{i=ri(i),y.l.v=y.a===void 0?i:Ga(i,j(y.a.T),y.a.s),y.l.i=-2;continue a}case"APP":{i=p(i,y.x,y.s);continue n}case"MNA":{if(i.$==="Qua"&&i.q.$==="Many"){i=y.b;continue a}if(i.$==="Qua"&&i.q.$==="None")continue n;n.push({$:"MNB",a:i,s:y.s}),i=y.b;continue a}case"MNB":{if(i.$==="Qua"&&i.q.$==="Many")i=y.a;else if(i.$!=="Qua"||i.q.$==="Lone"&&y.a.$!=="Qua")i=Wa(y.a,i,y.s);continue n}case"MAT":if(i.$==="Ctr"){let c=i,d=y.t;e:while(!0)switch(d.$){case"Ann":{d=d.x;continue e}case"Mat":if(d.k===c.k){let f=y.lhs;if(f===null)o=null;else o={t:()=>jn(f.t(),c.k,c.x.length),n:f.n-1+c.x.length};for(let h=c.x.length-1;h>=0;h--)n.push({$:"APP",x:j(c.x[h])});i=d.h;continue a}else{d=d.m;continue e}case"Efq":{i=p(y.lhs===null?y.t:y.lhs.t(),y.e,y.s);continue n}default:{o=y.lhs,n.push({$:"APP",x:c}),i=d;continue a}}}else{i=p(y.lhs===null?y.t:y.lhs.t(),y.e,y.s);continue n}}}}}function R(a,e){let n=H(a,e);switch(n.$){case"Var":return Z(n.k,n.i,n.s);case"Ref":return I(n.k,n.s,n.b);case"Sub":return qa(n.i,R(a,n.v),R(a,n.f),n.s);case"Typ":return v(R(a,n.g),n.s);case"Qnt":case"Qua":return n;case"Min":return Wa(R(a,n.a),R(a,n.b),n.s);case"All":return b(n.q,n.k,n.i,R(a,n.A),(i)=>{return R(a,n.B(i))},n.s);case"Lam":return m(n.k,n.i,(i)=>{return R(a,n.f(i))},n.s);case"App":return O(n.f.$==="Ref"?n.f:R(a,n.f),R(a,n.x),n.s);case"ADT":return da(n.k,n.x.map((i)=>R(a,i)),n.s,n.r);case"Ctr":return J(n.k,n.x.map((i)=>R(a,i)),n.s);case"Mat":return Ba(n.k,R(a,n.h),R(a,n.m),n.s);case"Efq":return Pa(n.s);case"Eql":return sa(R(a,n.a),R(a,n.b),R(a,n.T),n.s);case"Rfl":return za(n.s);case"Rwt":return an(R(a,n.e),R(a,n.p),R(a,n.f),n.s);case"Hol":return nn(n.k,n.s)}}function z(a,e,n,i,o=0){if(n===i)return!0;let y=H(e,n),c=H(e,i);if(y===c)return!0;if(y.$==="Lam"||c.$==="Lam"){let d=y.$==="Lam"?y.k:c.k,f=Z(d,o);return z(a,e,p(y,f),p(c,f),o+1)}switch(y.$){case"Var":return c.$==="Var"&&y.i===c.i;case"Ref":return c.$==="Ref"&&y.k===c.k;case"Typ":{if(c.$!=="Typ")return!1;if(a==="EQ")return z("EQ",e,y.g,c.g,o);let d=H(e,y.g),f=H(e,c.g);if(d.$==="Qua"&&d.q.$==="Many"||f.$==="Qua"&&f.q.$!=="Many")return!0;if(d.$==="Min"){let h=z("LE",e,v(d.a),c,o),T=z("LE",e,v(d.b),c,o);return h&&T}if(f.$==="Min"){let h=z("LE",e,y,v(f.a),o),T=z("LE",e,y,v(f.b),o);return h||T}return z("LE",e,d,f,o)}case"Qnt":return c.$==="Qnt";case"Qua":return c.$==="Qua"&&y.q.$===c.q.$;case"Min":return c.$==="Min"&&z("EQ",e,y.a,c.a,o)&&z("EQ",e,y.b,c.b,o);case"All":{let d=Z(y.k,o);return c.$==="All"&&y.q.$===c.q.$&&z(a,e,c.A,y.A,o)&&z(a,e,y.B(d),c.B(d),o+1)}case"App":return c.$==="App"&&z("EQ",e,y.f,c.f,o)&&z("EQ",e,y.x,c.x,o);case"ADT":{if(c.$!=="ADT"||y.k!==c.k||y.x.length!==c.x.length)return!1;if(a==="EQ"&&y.r.length!==c.r.length)return!1;return c.r.every((d)=>y.r.includes(d))&&y.x.every((d,f)=>z("EQ",e,d,c.x[f],o))}case"Ctr":return c.$==="Ctr"&&y.k===c.k&&y.x.length===c.x.length&&y.x.every((d,f)=>z("EQ",e,d,c.x[f],o));case"Mat":return c.$==="Mat"&&y.k===c.k&&z("EQ",e,y.h,c.h,o)&&z("EQ",e,y.m,c.m,o);case"Efq":return c.$==="Efq";case"Eql":return c.$==="Eql"&&z("EQ",e,y.a,c.a,o)&&z("EQ",e,y.b,c.b,o)&&z("EQ",e,y.T,c.T,o);case"Rfl":return c.$==="Rfl";case"Hol":return c.$==="Hol"&&y.k===c.k;case"Rwt":return c.$==="Rwt"&&z("EQ",e,y.e,c.e,o)&&z("EQ",e,y.p,c.p,o)&&z("EQ",e,y.f,c.f,o);default:return!1}}function Ka(a,e,n,i,o,y,c=[]){switch(n.$){case"Var":{if(n.i<0&&n.v!==void 0)return Ka(a,e,Ea(n),i,o,y,c);let d=ve(o,n.i);if(d===null)throw S(a,o,"a bound variable",n,n.s,e.def);else return oa(Z(n.k,n.i,n.s),d.T,Oa(t(),n.i,i))}case"Ref":{let d=a.tlds[n.k];if(d===void 0)throw S(a,o,"a defined name",n,n.s,e.def);switch(i.$){case"None":break;default:{if(n.k===e.def&&e.u!==!0&&Ai(e,c)!=="LT")throw S(a,o,"a decreasing self-call (some live argument must shrink)",n,n.s,e.def);if(n.k===e.def)return oa(I(n.k,n.s,n.b),d.T,t());if(d.$==="Def"&&d.v===null&&d.b!==!0&&!d.i)throw S(a,o,"a filled definition (an unfilled law is a dead claim: live code cannot use it)",n,n.s,e.def);break}}if(d.$==="ADT"&&d.n>0)throw S(a,o,"a family instance (write "+n.k+"<..>)",n,n.s,e.def);return oa(I(n.k,n.s,n.b),d.T,t())}case"Typ":{let d=P(a,e,n.g,Y(),wa(n.s),o,y);return oa(v(d.tm,n.s),v(X(K()),n.s),t())}case"Qnt":return oa(wa(n.s),v(X(K()),n.s),t());case"Qua":return oa(X(n.q,n.s),wa(n.s),t());case"Min":{let d=P(a,e,n.a,i,wa(n.s),o,y),f=P(a,e,n.b,i,wa(n.s),o,y);return oa(Wa(d.tm,f.tm,n.s),wa(n.s),la(d.us,f.us))}case"All":{let d=gn(o,y,n.q,n.k,n.A),f=P(a,e,n.A,Y(),v(X(Ze(e,n.q)),n.s),o,y),h=P(a,e,n.B(Z(n.k,y,n.s)),Y(),v(X(K()),n.s),d,y+1);return oa(b(n.q,n.k,y,f.tm,h.tm,n.s),v(X(K()),n.s),t())}case"App":{if(n.f.$==="Lam")return Ka(a,e,n.f.f(n.x),i,o,y,c);let d=Ka(a,e,n.f,i,o,y,[n.x,...c]),f=H(a,d.ty);if(f.$!=="All")throw S(a,o,"a function type",d.ty,n.s,e.def);let h=P(a,e,n.x,ln(f.q,i),f.A,o,y);return oa(O(d.tm,h.tm,n.s),f.B(n.x),la(d.us,h.us))}case"ADT":{let d=Fn(a,n,o,e.def);if(n.x.length!==d.n)throw S(a,o,n.k+" with "+String(d.n)+(d.n===1?" parameter":" parameters"),n,n.s,e.def);let f=[],h=d.T,T=t();for(let U of n.x){let M=ba(a,h,o,e.def,n.s),N=ln(M.q,i),w=P(a,e,U,N,M.A,o,y);f.push(w.tm),T=la(T,w.us),h=M.B(U)}return oa(da(n.k,f,n.s,n.r),h,T)}case"Eql":{let d=P(a,e,n.T,Y(),v(X(K()),n.s),o,y),f=P(a,e,n.a,Y(),n.T,o,y),h=P(a,e,n.b,Y(),n.T,o,y);return oa(sa(f.tm,h.tm,d.tm,n.s),v(X(Sa()),n.s),t())}case"Ann":{P(a,e,n.T,Y(),v(X(K()),n.s),o,y);let d=P(a,e,n.x,i,n.T,o,y);return{tm:d.tm,ty:n.T,us:d.us}}default:{if(n.$==="Ctr"&&Fa(a,n.k)===null)throw S(a,o,"a declared constructor",n,n.s,e.def);throw S(a,o,"an annotated term (cannot infer)",n,n.s,e.def)}}}function P(a,e,n,i,o,y,c){switch(n.$){case"Var":{if(n.i<0&&n.v!==void 0)return P(a,e,Ea(n),i,o,y,c);break}case"Lam":{let f=H(a,o);if(f.$!=="All")throw S(a,y,o,wn(a,y,n),n.s,e.def);let h=Z(n.k,c,n.s),T=e;if(e.n>0)T={...e,t:p(e.t,h),n:e.n-1};let U=gn(y,c,f.q,n.k,f.A),M=P(a,T,n.f(h),i,f.B(h),U,c+1);return Ge(a,y,n.k,f.q,Ae(M.us,c),n.s,e.def),Ma(m(n.k,c,M.tm,n.s),o,re(M.us,c))}case"Let":{let f=n.k.length,h=[],T=t(),U=y;for(let s=0;s<f;s++){let u=ln(n.q[s],i),D=Ka(a,e,n.v[s],u,y,c);P(a,e,D.ty,Y(),v(X(Ze(e,n.q[s])),n.s),y,c),h.push(D.tm),T=la(T,D.us),U=gn(U,c+s,n.q[s],n.k[s],D.ty)}let M=n.k.map((s,u)=>Z(s,c+u,n.s,n.v[u])),N=P(a,e,n.f(M),i,o,U,c+f),w=N.us;for(let s=0;s<f;s++)Ge(a,y,n.k[s],n.q[s],Ae(w,c+s),n.s,e.def),w=re(w,c+s);return Ma(pa(n.k,M.map((s,u)=>c+u),h,N.tm,n.s,n.q),o,la(T,w))}case"Ctr":{let f=H(a,o);if(f.$!=="ADT"){let w=Fa(a,n.k)===null?null:Ve(a,n.k);throw S(a,y,o,w===null?wn(a,y,n):I(w,n.s),n.s,e.def)}let h=Fn(a,f,y,e.def),T=Ce(h.c,n.k);if(T===null){if(Fa(a,n.k)===null)throw S(a,y,"a declared constructor ("+f.k+" declares "+h.c.map((w)=>w.k).join(", ")+")",n,n.s,e.def);throw S(a,y,o,I(Ve(a,n.k),n.s),n.s,e.def)}if(n.x.length!==T.n)throw S(a,y,n.k+" with "+String(T.n)+(T.n===1?" field":" fields"),n,n.s,e.def);let U=Ie(a,T.T,f.x,y,e.def,n.s),M=[],N=t();for(let w of n.x){let s=ba(a,U,y,e.def,n.s),u=ln(s.q,i),D=P(a,e,w,u,s.A,y,c);M.push(D.tm),N=la(N,D.us),U=s.B(w)}return Ma(J(n.k,M,n.s),o,N)}case"Mat":case"Efq":{let f=H(a,o);if(f.$!=="All")throw S(a,y,o,wn(a,y,n),n.s,e.def);if(i.$!=="None"&&f.q.$==="None")throw S(a,y,"a live scrutinee (a - scrutinee matches only in a dead region)",void 0,n.s,e.def);let h=H(a,f.A);if(h.$!=="ADT")throw S(a,y,"a datatype",f.A,n.s,e.def);let T=Fn(a,h,y,e.def).c;switch(n.$){case"Efq":{if(T.length!==0&&!Ci(a,y))throw S(a,y,"cases for "+T.map((U)=>U.k).join(", "),n,n.s,e.def);return Ma(Pa(n.s),o,t())}case"Mat":{let s=function(Ua,Tn,Me){if(Tn===0)return M.B(J(U.k,Me,U.s));else{let Xa=ba(a,Ua,y,e.def,U.s),Ti=Bi(Xa.q,M.q);return b(Ti,Xa.k,Xa.i,Xa.A,(we)=>{return s(Xa.B(we),Tn-1,Me.concat([we]))},U.s)}},U=n,M=f,N=Ce(T,n.k);if(N===null)throw S(a,y,"a constructor of "+h.k+" (missing, or already matched)",n,n.s,e.def);let w=Ie(a,N.T,h.x,y,e.def,n.s),u=e;if(e.n>0)u={...e,t:jn(e.t,n.k,N.n),n:e.n-1+N.n};let D=P(a,u,n.h,i,s(w,N.n,[]),y,c),x=b(f.q,f.k,f.i,da(h.k,h.x,n.s,h.r.concat([N.k])),f.B,n.s),ha=P(a,e,n.m,i,x,y,c);return Ma(Ba(n.k,D.tm,ha.tm,n.s),o,Gi(D.us,ha.us))}}}case"Rfl":{let f=H(a,o);if(f.$!=="Eql")throw S(a,y,o,wn(a,y,n),n.s,e.def);if(!z("EQ",a,f.a,f.b,c))throw S(a,y,f.a,f.b,n.s,e.def);return Ma(za(n.s),o,t())}case"Hol":{if(n.k==="TODO")return Ma(nn(n.k,n.s),o,t());throw S(a,y,o,n,n.s,e.def)}case"Rwt":{let f=Ka(a,e,n.e,i,y,c),h=H(a,f.ty);if(h.$!=="Eql")throw S(a,y,"an equation {a == b : T}",f.ty,n.s,e.def);let T=b(K(),"_",0,h.T,(s)=>b(K(),"e",0,sa(h.a,s,h.T),()=>v(X(K())),n.s),n.s),U=P(a,e,n.p,Y(),T,y,c),M=p(p(n.p,h.b),n.e);if(!z("LE",a,M,o,c))throw S(a,y,o,M,n.s,e.def);let N=p(p(n.p,h.a),za(n.s)),w=P(a,e,n.f,i,N,y,c);return Ma(an(f.tm,U.tm,w.tm,n.s),o,la(f.us,w.us))}default:break}let d=Ka(a,e,n,i,y,c);if(z("LE",a,d.ty,o,c))return{tm:d.tm,us:d.us};throw S(a,y,o,d.ty,n.s,e.def)}function o2(a,e,n){P(a,{t:I(e),n:0,def:e,qs:[]},n.T,Y(),v(X(K())),L(),0);let{doms:i,ret:o}=Je(a,n.T);if(o.$!=="Typ"||i.length!==n.n)throw S(a,L(),"a kind (type "+e+"<..> is Kind(g))",o,o.s,e);for(let y of n.c){let c=y.T,d=L();for(let T=0;T<n.n+y.n;T++){let U=ba(a,c,d,y.k),M=v(X(U.q));if(T>=n.n&&U.q.$==="Lone")M=o;P(a,{t:I(y.k),n:0,def:y.k,qs:[]},U.A,Y(),M,d,T),d=gn(d,T,U.q,U.k,U.A),c=U.B(Z(U.k,T,U.s))}let f="a telescope tipped at "+e+" applied to its own parameters",h=H(a,c);if(h.$!=="ADT"||h.k!==e||h.x.length!==n.n||h.r.length!==0)throw S(a,d,f,h,void 0,y.k);for(let T=0;T<n.n;T++){let U=H(a,h.x[T]);if(U.$!=="Var"||U.i!==T)throw S(a,d,f,h,void 0,y.k)}}}function y2(a,e,n){if(P(a,{t:I(e),n:0,def:e,qs:[],u:n.u},n.T,Y(),v(X(K())),L(),0),n.i){let i=k(n.T);for(let c=0;i.$==="All";c++)i=k(i.B(Z(i.k,c,i.s)));let[o]=Gn(i),y=a.tlds.IO;if(o.$!=="Ref"||o.k!=="IO"||y===void 0||y.$!=="Def"||y.b!==!0)throw S(a,L(),"a foreign definition answering base's IO",e,i.s,e)}if(n.v!==null){let i=Je(a,n.T).doms.map((o)=>o[0]).slice(0,n.n);while(i.length<n.n)i.push(K());n.e=P(a,{t:I(e),n:n.n,def:e,qs:i,u:n.u},n.v,K(),n.T,L(),0).tm}}function ae(a,e=0){let n=aa(),i=new Map;for(let o=0;o<a.order.length;o++)i.set(a.order[o],o);for(let o=0;o<a.order.length;o++){let y=a.order[o],c=a.tlds[y],d=i.get(y)===o;if(c.$==="ADT"){n.tlds[y]=c;for(let h of c.c)n.ctrs[h.k]=h;if(o>=e)o2(n,y,c);continue}let f={$:"Def",n:c.n,T:c.T,v:null,b:c.b,u:c.u};if(o<e){n.tlds[y]=d?c:f;continue}if(d&&c.v===null&&c.b!==!0&&!c.i)a.hols+=1;n.tlds[y]=f,y2(n,y,d?c:f),n.tlds[y]=d?c:f}}var be=`

type Empty is Data:

type Unit is Data:
  Unit{}

type Bool is Data:
  False{}
  True{}

type Cmp is Data:
  LT{}
  EQ{}
  GT{}

type Either<a, b, -A: Kind(a), -B: Kind(b)> is Kind(a <&> b):
  Inl{value: A}
  Inr{value: B}

type Sigma<a, b, -A: Kind(a), -B: @-x: A -> Kind(b)> is Kind(a <&> b):
  Tuple{fst: A, snd: B(fst)}

type Nat is Data:
  Zero{}
  Succ{pred: Nat}

type Maybe<a, -A: Kind(a)> is Kind(a):
  None{}
  Some{value: A}

type Result<a, b, -E: Kind(a), -A: Kind(b)> is Kind(a <&> b):
  Fail{error: E}
  Done{value: A}

type List<a, -A: Kind(a)> is Kind(a):
  Nil{}
  Con{head: A, tail: List<a, A>}

law Word:
  for n: Nat
  Data

type Word.Nil is Data:
  WNil{}

type Word.Con<-p: Nat> is Data:
  WCon{head: Bool, tail: Word(p)}

type U32 is Data:
  U32{data: Word(32n)}

type F32 is Data:
  F32{data: Word(32n)}

type Char is Data:
  Chr{code: U32}

type String is Data:
  SNil{}
  SCon{head: Char, tail: String}

type Array<-T: Type> is Type:
  ALeaf{value: T}
  ANode{xs: Array<T>, ys: Array<T>}

type Image is Data:
  Pix{color: U32}
  Qua{tl: Image, tr: Image, bl: Image, br: Image}

type Event is Data:
  Key{code: U32, down: Bool}
  Mouse{x: U32, y: U32, button: U32, down: Bool}
  Move{x: U32, y: U32}
  Close{}

type Map<a, -V: Kind(a)> is Kind(a):
  MTip{}
  MLeaf{key: String, val: V}
  MNode{pos: Nat, lo: Map<a, V>, hi: Map<a, V>}


type File is Type:
  File{slot: U32, gen: U32}

type Socket is Type:
  Socket{slot: U32, gen: U32}

type Listener is Type:
  Listener{slot: U32, gen: U32}

type Window is Type:
  Window{slot: U32, gen: U32}

type Chan<-A: Type> is Data:
  Chan{slot: U32, gen: U32}

type IO.OP<-R: Type> is Type:
  Emit{value: R}
  Halt{code: U32, message: String}

law Pair:
  for -A: Type
  for -B: Type
  Type

law IO:
  for -A: Type
  Type

type App<-S: Type> is Type:
  App{view: S -> Pair(S, Image), tick: List<Event> -> S -> IO(Maybe<S>)}



def Word(n):
  match n:
    case 0n:
      Word.Nil
    case 1n+p:
      Word.Con<p>


def Pair(A, B):
  Sigma<&1, &1, A, _ => B>

def Exists(-A: Type, -B: @-x: A -> Type) -> Type:
  Sigma<&1, &1, A, B>

def Or(-A: Type, -B: Type) -> Type:
  Either<&1, &1, A, B>


def IO(A):
  @-R: Type ->
  @k: (A -> IO.OP<R>) ->
  IO.OP<R>

def IO.pure(-A: Type, x: A) -> IO(A):
  R => k => k(x)

def IO.bind(-A: Type, -B: Type, m: IO(A), f: A -> IO(B)) -> IO(B):
  R => k => m(R, x => f(x, R, k))

def IO.print(text: String) -> IO(Unit):
  import "./effs/print.c"
  import "./effs/print.js"

def IO.write(text: String) -> IO(Unit):
  import "./effs/write.c"
  import "./effs/write.js"

def IO.print_err(text: String) -> IO(Unit):
  import "./effs/print_err.c"
  import "./effs/print_err.js"

def IO.get_env(name: String) -> IO(Result<&1, &1, U32 & String, String>):
  import "./effs/get_env.c"
  import "./effs/get_env.js"

def IO.die(-A: Type, code: U32, msg: String) -> IO(A):
  R => k => Halt{code, msg}

def IO.pass(-A: Type, r: Result<&1, &1, U32 & String, A>) -> IO(A):
  match r:
    case Done{value}:
      IO.pure(A, value)
    case Fail{(code, message)}:
      IO.die(A, code, message)

def IO.try(-A: Type, act: IO(Result<&1, &1, U32 & String, A>)) -> IO(A):
  IO.bind(Result<&1, &1, U32 & String, A>, A, act, IO.pass(A))

def IO.spawn(-A: Type, act: IO(A)) -> IO(Unit):
  import "./effs/spawn.c"
  import "./effs/spawn.js"

def IO.sleep(ms: U32) -> IO(Unit):
  import "./effs/sleep.c"
  import "./effs/sleep.js"

def IO.now() -> IO(Nat):
  import "./effs/now.c"
  import "./effs/now.js"

def Chan.new(-A: Type, room: U32) -> IO(Chan<A>):
  import "./effs/chan_new.c"
  import "./effs/chan_new.js"

def Chan.send(-A: Type, chan: Chan<A>, value: A) -> IO(Bool):
  import "./effs/chan_send.c"
  import "./effs/chan_send.js"

def Chan.recv(-A: Type, chan: Chan<A>) -> IO(Maybe<&1, A>):
  import "./effs/chan_recv.c"
  import "./effs/chan_recv.js"

def Chan.close(-A: Type, chan: Chan<A>) -> IO(Unit):
  import "./effs/chan_close.c"
  import "./effs/chan_close.js"

def IO.fork.go(-A: Type, act: IO(A), chan: Chan<A>) -> IO(Chan<A>):
  +c = chan
  sent = IO.bind(A, Bool, act, x => Chan.send(A, c, x))
  IO.bind(Unit, Chan<A>, IO.spawn(Bool, sent), u => IO.pure(Chan<A>, c))

def IO.fork(-A: Type, act: IO(A)) -> IO(Chan<A>):
  IO.bind(Chan<A>, Chan<A>, Chan.new(A, 1), IO.fork.go(A, act))

def IO.join.go(-A: Type, chan: Chan<A>, got: Maybe<&1, A>) -> IO(A):
  match got:
    case None{}:
      IO.die(A, 1, "IO.join: the channel was closed")
    case Some{value}:
      IO.bind(Unit, A, Chan.close(A, chan), u => IO.pure(A, value))

def IO.join(-A: Type, chan: Chan<A>) -> IO(A):
  +c = chan
  IO.bind(Maybe<&1, A>, A, Chan.recv(A, c), IO.join.go(A, c))

def File.open(path: String, mode: String) ->
  IO(Result<&1, &1, U32 & String, File>):
  import "./effs/file_open.c"
  import "./effs/file_open.js"

def File.read(file: File, max: U32) ->
  IO(File & Result<&1, &1, U32 & String, String>):
  import "./effs/file_read.c"
  import "./effs/file_read.js"

def File.write(file: File, data: String) ->
  IO(File & Result<&1, &1, U32 & String, Unit>):
  import "./effs/file_write.c"
  import "./effs/file_write.js"

def File.close(file: File) -> IO(Unit):
  import "./effs/file_close.c"
  import "./effs/file_close.js"

def TCP.listen(port: U32) -> IO(Result<&1, &1, U32 & String, Listener>):
  import "./effs/tcp_listen.c"
  import "./effs/tcp_listen.js"

def TCP.accept(listener: Listener) ->
  IO(Listener & Result<&1, &1, U32 & String, Socket>):
  import "./effs/tcp_accept.c"
  import "./effs/tcp_accept.js"

def TCP.connect(host: String, port: U32) ->
  IO(Result<&1, &1, U32 & String, Socket>):
  import "./effs/tcp_connect.c"
  import "./effs/tcp_connect.js"

def TCP.send(sock: Socket, data: String) ->
  IO(Socket & Result<&1, &1, U32 & String, Unit>):
  import "./effs/tcp_send.c"
  import "./effs/tcp_send.js"

def TCP.recv(sock: Socket, max: U32) ->
  IO(Socket & Result<&1, &1, U32 & String, String>):
  import "./effs/tcp_recv.c"
  import "./effs/tcp_recv.js"

def UDP.bind(port: U32) -> IO(Result<&1, &1, U32 & String, Socket>):
  import "./effs/udp_bind.c"
  import "./effs/udp_bind.js"

def UDP.send_to(sock: Socket, host: String, port: U32, data: String) ->
  IO(Socket & Result<&1, &1, U32 & String, Unit>):
  import "./effs/udp_send_to.c"
  import "./effs/udp_send_to.js"

def UDP.recv_from(sock: Socket, max: U32) ->
  IO(Socket & Result<&1, &1, U32 & String, String & U32 & String>):
  import "./effs/udp_recv_from.c"
  import "./effs/udp_recv_from.js"

def Socket.close(socket: Socket) -> IO(Unit):
  import "./effs/socket_close.c"
  import "./effs/socket_close.js"

def Listener.close(listener: Listener) -> IO(Unit):
  import "./effs/listener_close.c"
  import "./effs/listener_close.js"

def Window.open(title: String, width: U32, height: U32) ->
  IO(Result<&1, &1, U32 & String, Window>):
  import "./effs/window_open.c"
  import "./effs/window_open.js"

def Window.frame(window: Window, image: Image) ->
  IO(Window & Image & List<Event>):
  import "./effs/window_frame.c"
  import "./effs/window_frame.js"

def Window.close(window: Window) -> IO(Unit):
  import "./effs/window_close.c"
  import "./effs/window_close.js"


law Equal.cong:
  for -A: Type
  for -B: Type
  for -f: A -> B
  for -a: A
  for -b: A
  for  e: {a == b : A}
  {f(a) == f(b) : B}

def Equal.cong(A, B, f, a, b, e):
  %e : {f(a) == f(_) : B}
  {==}

law Equal.sym:
  for -A: Type
  for -a: A
  for -b: A
  for  e: {a == b : A}
  {b == a : A}

def Equal.sym(A, a, b, e):
  %e : {_ == a : A}
  {==}

law Equal.trans:
  for -A : Type
  for -a : A
  for -b : A
  for -c : A
  for ab : {a == b : A}
  for bc : {b == c : A}
  {a == c : A}

def Equal.trans(A, a, b, c, ab, bc):
  %bc : {a == _ : A}
  ab


def Empty.absurd(-A: Type, e: Empty) -> A:
  match e:


def Bool.not(b: Bool) -> Bool:
  match b:
    case False{}:
      True{}
    case True{}:
      False{}

def Bool.and(a: Bool, b: Bool) -> Bool:
  match a:
    case False{}:
      False{}
    case True{}:
      b

def Bool.or(a: Bool, b: Bool) -> Bool:
  match a:
    case False{}:
      b
    case True{}:
      True{}

def Bool.xor(a: Bool, b: Bool) -> Bool:
  match a:
    case False{}:
      b
    case True{}:
      Bool.not(b)

def Bool.cmp(a: Bool, b: Bool) -> Cmp:
  match a b:
    case False{} False{}:
      EQ{}
    case False{} True{}:
      LT{}
    case True{} False{}:
      GT{}
    case True{} True{}:
      EQ{}

def Bool.full_add(a: Bool, b: Bool, c: Bool) -> Bool & Bool:
  match a b c:
    case False{} False{} False{}:
      (False{}, False{})
    case False{} False{} True{}:
      (True{}, False{})
    case False{} True{} False{}:
      (True{}, False{})
    case False{} True{} True{}:
      (False{}, True{})
    case True{} False{} False{}:
      (True{}, False{})
    case True{} False{} True{}:
      (False{}, True{})
    case True{} True{} False{}:
      (False{}, True{})
    case True{} True{} True{}:
      (True{}, True{})


def Cmp.is_lt(c: Cmp) -> Bool:
  match c:
    case LT{}:
      True{}
    case EQ{}:
      False{}
    case GT{}:
      False{}

def Cmp.is_eq(c: Cmp) -> Bool:
  match c:
    case LT{}:
      False{}
    case EQ{}:
      True{}
    case GT{}:
      False{}

def Cmp.is_gt(c: Cmp) -> Bool:
  match c:
    case LT{}:
      False{}
    case EQ{}:
      False{}
    case GT{}:
      True{}

def Cmp.is_le(c: Cmp) -> Bool:
  match c:
    case LT{}:
      True{}
    case EQ{}:
      True{}
    case GT{}:
      False{}

def Cmp.is_ge(c: Cmp) -> Bool:
  match c:
    case LT{}:
      False{}
    case EQ{}:
      True{}
    case GT{}:
      True{}


def Nat.double(n: Nat) -> Nat:
  match n:
    case 0n:
      0n
    case 1n+p:
      2n+Nat.double(p)

def Nat.add(a: Nat, b: Nat) -> Nat:
  match a:
    case 0n:
      b
    case 1n+p:
      1n+Nat.add(p, b)

def Nat.sub(a: Nat, b: Nat) -> Nat:
  match a b:
    case 0n 0n:
      0n
    case 0n 1n+bp:
      0n
    case 1n+ap 0n:
      1n+ap
    case 1n+ap 1n+bp:
      Nat.sub(ap, bp)

def Nat.mul(a: Nat, +b: Nat) -> Nat:
  match a:
    case 0n:
      0n
    case 1n+p:
      Nat.add(b, Nat.mul(p, b))

def Nat.divmod.go(n: Nat, m: Nat, d: Nat, r: Nat) -> Nat & Nat:
  match n:
    case 0n:
      (d, r)
    case 1n+np:
      match m:
        case 0n:
          Nat.divmod.go(np, r, 1n+d, 0n)
        case 1n+mp:
          Nat.divmod.go(np, mp, d, 1n+r)

def Nat.divmod(a: Nat, b: Nat) -> Nat & Nat:
  match b:
    case 0n:
      (0n, a)
    case 1n+bp:
      Nat.divmod.go(a, bp, 0n, 0n)

def Nat.cmp(a: Nat, b: Nat) -> Cmp:
  match a b:
    case 0n 0n:
      EQ{}
    case 0n 1n+bp:
      LT{}
    case 1n+ap 0n:
      GT{}
    case 1n+ap 1n+bp:
      Nat.cmp(ap, bp)

def Nat.is_lt(a: Nat, b: Nat) -> Bool:
  Cmp.is_lt(Nat.cmp(a, b))


def Maybe.pure(a, -A: Kind(a), x: A) -> Maybe<a, A>:
  Some{x}

def Maybe.bind(
  a, -A: Kind(a), -B: Kind(a), m: Maybe<a, A>, f: A -> Maybe<a, B>
) -> Maybe<a, B>:
  match m:
    case None{}:
      None{}
    case Some{x}:
      f(x)


def Result.pure(a, b, -E: Kind(a), -A: Kind(b), x: A) -> Result<a, b, E, A>:
  Done{x}

def Result.bind(
  a, b, -E: Kind(a), -A: Kind(b), -B: Kind(b), r: Result<a, b, E, A>,
  f: A -> Result<a, b, E, B>
) -> Result<a, b, E, B>:
  match r:
    case Fail{e}:
      Fail{e}
    case Done{x}:
      f(x)


def List.map(~A: Type, ~B: Type, ~f: A -> B, xs: List<A>) -> List<B>:
  match xs:
    case Nil{}:
      Nil{}
    case Con{h, t}:
      Con{f(h), List.map(~A, ~B, ~f, t)}


def Word.zero(n: Nat) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      WCon{False{}, Word.zero(p)}

def Word.not(n: Nat, w: Word(n)) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match w:
        case WCon{b, t}:
          WCon{Bool.not(b), Word.not(p, t)}

def Word.and(n: Nat, a: Word(n), b: Word(n)) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match a b:
        case WCon{ab, at} WCon{bb, bt}:
          WCon{Bool.and(ab, bb), Word.and(p, at, bt)}

def Word.or(n: Nat, a: Word(n), b: Word(n)) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match a b:
        case WCon{ab, at} WCon{bb, bt}:
          WCon{Bool.or(ab, bb), Word.or(p, at, bt)}

def Word.xor(n: Nat, a: Word(n), b: Word(n)) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match a b:
        case WCon{ab, at} WCon{bb, bt}:
          WCon{Bool.xor(ab, bb), Word.xor(p, at, bt)}

def Word.shl.put(n: Nat, c: Bool, w: Word(n)) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match w:
        case WCon{b, t}:
          WCon{c, Word.shl.put(p, b, t)}

def Word.shl(n: Nat, w: Word(n)) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match w:
        case WCon{b, t}:
          WCon{False{}, Word.shl.put(p, b, t)}

def Word.shl.out.con(-p: Nat, c: Bool, r: Bool & Word(p)) -> Bool & Word(1n+p):
  (hi, t2) = r
  (hi, WCon{c, t2})

def Word.shl.out(n: Nat, c: Bool, w: Word(n)) -> Bool & Word(n):
  match n:
    case 0n:
      (c, WNil{})
    case 1n+p:
      match w:
        case WCon{b, t}:
          Word.shl.out.con(p, c, Word.shl.out(p, b, t))

def Word.shr.pad(n: Nat, w: Word(n)) -> Word(1n+n):
  match n:
    case 0n:
      WCon{False{}, w}
    case 1n+p:
      match w:
        case WCon{b, t}:
          WCon{b, Word.shr.pad(p, t)}

def Word.shr(n: Nat, w: Word(n)) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match w:
        case WCon{b, t}:
          Word.shr.pad(p, t)

def Word.cmp.fin(ab: Bool, bb: Bool, t: Cmp) -> Cmp:
  match t:
    case LT{}:
      LT{}
    case EQ{}:
      Bool.cmp(ab, bb)
    case GT{}:
      GT{}

def Word.cmp(n: Nat, a: Word(n), b: Word(n)) -> Cmp:
  match n:
    case 0n:
      EQ{}
    case 1n+p:
      match a b:
        case WCon{ab, at} WCon{bb, bt}:
          Word.cmp.fin(ab, bb, Word.cmp(p, at, bt))

def Word.inc(n: Nat, w: Word(n)) -> Word(n):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match w:
        case WCon{False{}, t}:
          WCon{True{}, t}
        case WCon{True{}, t}:
          WCon{False{}, Word.inc(p, t)}

law Word.adc:
  for n: Nat
  for a: Word(n)
  for b: Word(n)
  for f: Bool
  for c: Bool
  Word(n)

def Word.adc.con(p: Nat, at: Word(p), bt: Word(p), f: Bool, sk: Bool & Bool) ->
  Word(1n+p):
  (s, k) = sk
  WCon{s, Word.adc(p, at, bt, f, k)}

def Word.adc(n, a, b, f, c):
  match n:
    case 0n:
      WNil{}
    case 1n+p:
      match a b f:
        case WCon{ab, at} WCon{bb, bt} False{}:
          Word.adc.con(p, at, bt, False{}, Bool.full_add(ab, bb, c))
        case WCon{ab, at} WCon{bb, bt} True{}:
          Word.adc.con(p, at, bt, True{}, Bool.full_add(ab, Bool.not(bb), c))

def Word.add(n: Nat, a: Word(n), b: Word(n)) -> Word(n):
  Word.adc(n, a, b, False{}, False{})

def Word.sub(n: Nat, a: Word(n), b: Word(n)) -> Word(n):
  Word.adc(n, a, b, True{}, True{})

law Word.add_comm.arm:
  for p  : Nat
  for -h : Bool
  for at : Word(p)
  for bt : Word(p)
  for k  : Bool
  {WCon{h, Word.adc(p, at, bt, False{}, k)}
    == WCon{h, Word.adc(p, bt, at, False{}, k)} : Word.Con<p>}

law Word.add_comm.go:
  for n: Nat
  for a: Word(n)
  for b: Word(n)
  for c: Bool
  {Word.adc(n, a, b, False{}, c) == Word.adc(n, b, a, False{}, c) : Word(n)}

def Word.add_comm.arm(p, h, at, bt, k):
  Equal.cong(Word(p), Word(1n+p), w => WCon{h, w},
    Word.adc(p, at, bt, False{}, k), Word.adc(p, bt, at, False{}, k),
    Word.add_comm.go(p, at, bt, k))

def Word.add_comm.go(n, a, b, c):
  match n:
    case 0n:
      match a b:
        case WNil{} WNil{}:
          {==}
    case 1n+p:
      match a b c:
        case WCon{False{}, at} WCon{False{}, bt} False{}:
          Word.add_comm.arm(p, False{}, at, bt, False{})
        case WCon{False{}, at} WCon{False{}, bt} True{}:
          Word.add_comm.arm(p, True{}, at, bt, False{})
        case WCon{False{}, at} WCon{True{}, bt} False{}:
          Word.add_comm.arm(p, True{}, at, bt, False{})
        case WCon{False{}, at} WCon{True{}, bt} True{}:
          Word.add_comm.arm(p, False{}, at, bt, True{})
        case WCon{True{}, at} WCon{False{}, bt} False{}:
          Word.add_comm.arm(p, True{}, at, bt, False{})
        case WCon{True{}, at} WCon{False{}, bt} True{}:
          Word.add_comm.arm(p, False{}, at, bt, True{})
        case WCon{True{}, at} WCon{True{}, bt} False{}:
          Word.add_comm.arm(p, False{}, at, bt, True{})
        case WCon{True{}, at} WCon{True{}, bt} True{}:
          Word.add_comm.arm(p, True{}, at, bt, True{})

law Word.add_comm:
  for n: Nat
  for a: Word(n)
  for b: Word(n)
  {Word.add(n, a, b) == Word.add(n, b, a) : Word(n)}

def Word.add_comm(n, a, b):
  Word.add_comm.go(n, a, b, False{})

def Word.to_nat(n: Nat, w: Word(n)) -> Nat:
  match n:
    case 0n:
      0n
    case 1n+p:
      match w:
        case WCon{False{}, t}:
          Nat.double(Word.to_nat(p, t))
        case WCon{True{}, t}:
          1n+Nat.double(Word.to_nat(p, t))

def Word.mul.go(+n: Nat, m: Nat, a: Word(m), b: Word(n), acc: Word(n)) ->
  Word(n):
  match m:
    case 0n:
      acc
    case 1n+mp:
      match a:
        case WCon{False{}, at}:
          Word.mul.go(n, mp, at, Word.shl(n, b), acc)
        case WCon{True{}, at}:
          +b2 = b
          Word.mul.go(n, mp, at, Word.shl(n, b2), Word.add(n, acc, b2))

def Word.mul(+n: Nat, a: Word(n), b: Word(n)) -> Word(n):
  Word.mul.go(n, n, a, b, Word.zero(n))


def U32.inc(a: U32) -> U32:
  match a:
    case U32{x}:
      U32{Word.inc(32n, x)}

def U32.add(a: U32, b: U32) -> U32:
  match a b:
    case U32{x} U32{y}:
      U32{Word.add(32n, x, y)}

law U32.add_comm:
  for a: U32
  for b: U32
  {U32.add(a, b) == U32.add(b, a) : U32}

def U32.add_comm(a, b):
  match a b:
    case U32{x} U32{y}:
      Equal.cong(Word(32n), U32, w => U32{w}, Word.add(32n, x, y),
        Word.add(32n, y, x), Word.add_comm(32n, x, y))

def U32.sub(a: U32, b: U32) -> U32:
  match a b:
    case U32{x} U32{y}:
      U32{Word.sub(32n, x, y)}

def U32.mul(a: U32, b: U32) -> U32:
  match a b:
    case U32{x} U32{y}:
      U32{Word.mul(32n, x, y)}

def U32.not(a: U32) -> U32:
  match a:
    case U32{x}:
      U32{Word.not(32n, x)}

def U32.and(a: U32, b: U32) -> U32:
  match a b:
    case U32{x} U32{y}:
      U32{Word.and(32n, x, y)}

def U32.or(a: U32, b: U32) -> U32:
  match a b:
    case U32{x} U32{y}:
      U32{Word.or(32n, x, y)}

def U32.xor(a: U32, b: U32) -> U32:
  match a b:
    case U32{x} U32{y}:
      U32{Word.xor(32n, x, y)}

def U32.shl(a: U32) -> U32:
  match a:
    case U32{x}:
      U32{Word.shl(32n, x)}

def U32.shr(a: U32) -> U32:
  match a:
    case U32{x}:
      U32{Word.shr(32n, x)}

def U32.shln(a: U32, n: Nat) -> U32:
  match n:
    case 0n:
      a
    case 1n+p:
      U32.shl(U32.shln(a, p))

def U32.shrn(a: U32, n: Nat) -> U32:
  match n:
    case 0n:
      a
    case 1n+p:
      U32.shr(U32.shrn(a, p))

def U32.cmp(a: U32, b: U32) -> Cmp:
  match a b:
    case U32{x} U32{y}:
      Word.cmp(32n, x, y)

def U32.is_eq(a: U32, b: U32) -> Bool:
  Cmp.is_eq(U32.cmp(a, b))

def U32.is_ne(a: U32, b: U32) -> Bool:
  Bool.not(Cmp.is_eq(U32.cmp(a, b)))

def U32.is_lt(a: U32, b: U32) -> Bool:
  Cmp.is_lt(U32.cmp(a, b))

def U32.is_le(a: U32, b: U32) -> Bool:
  Cmp.is_le(U32.cmp(a, b))

def U32.is_gt(a: U32, b: U32) -> Bool:
  Cmp.is_gt(U32.cmp(a, b))

def U32.is_ge(a: U32, b: U32) -> Bool:
  Cmp.is_ge(U32.cmp(a, b))

def U32.is_zero(a: U32) -> Bool:
  U32.is_eq(a, 0)

def U32.to_nat(a: U32) -> Nat:
  match a:
    case U32{w}:
      Word.to_nat(32n, w)

def U32.from_nat(n: Nat) -> U32:
  match n:
    case 0n:
      0
    case 1n+p:
      U32.inc(U32.from_nat(p))

def U32.divmod.go.fin(-p: Nat, q: Word(p), s: U32, b: U32, g: Bool) ->
  Word(1n+p) & U32:
  match g:
    case True{}:
      (WCon{True{}, q}, U32.sub(s, b))
    case False{}:
      (WCon{False{}, q}, s)

def U32.divmod.go.shl(-p: Nat, q: Word(p), +b: U32, ts: Bool & Word(32n)) ->
  Word(1n+p) & U32:
  (t, s) = ts
  +s2 = {U32{s} : U32}
  U32.divmod.go.fin(p, q, s2, b, Bool.or(t, U32.is_ge(s2, b)))

def U32.divmod.go.rec(-p: Nat, a0: Bool, +b: U32, qr: Word(p) & U32) ->
  Word(1n+p) & U32:
  (q, r) = qr
  U32{rw} = r
  U32.divmod.go.shl(p, q, b, Word.shl.out(32n, a0, rw))

def U32.divmod.go(m: Nat, a: Word(m), +b: U32) -> Word(m) & U32:
  match m a:
    case 0n WNil{}:
      (WNil{}, 0)
    case 1n+p WCon{a0, hi}:
      U32.divmod.go.rec(p, a0, b, U32.divmod.go(p, hi, b))

def U32.div.fin(qr: Word(32n) & U32) -> U32:
  (q, r) = qr
  U32{q}

def U32.div.if(aw: Word(32n), b: U32, z: Bool) -> U32:
  match z:
    case True{}:
      0
    case False{}:
      U32.div.fin(U32.divmod.go(32n, aw, b))

def U32.div(a: U32, +b: U32) -> U32:
  U32{aw} = a
  U32.div.if(aw, b, U32.is_zero(b))

def U32.mod.fin(qr: Word(32n) & U32) -> U32:
  (q, r) = qr
  r

def U32.mod.if(aw: Word(32n), b: U32, z: Bool) -> U32:
  match z:
    case True{}:
      U32{aw}
    case False{}:
      U32.mod.fin(U32.divmod.go(32n, aw, b))

def U32.mod(a: U32, +b: U32) -> U32:
  U32{aw} = a
  U32.mod.if(aw, b, U32.is_zero(b))


law U32.to_f32:
  for a: U32
  F32

law F32.to_u32:
  for a: F32
  U32

law F32.add:
  for a: F32
  for b: F32
  F32

law F32.sub:
  for a: F32
  for b: F32
  F32

law F32.mul:
  for a: F32
  for b: F32
  F32

law F32.div:
  for a: F32
  for b: F32
  F32

law F32.mod:
  for a: F32
  for b: F32
  F32

law F32.pow:
  for a: F32
  for b: F32
  F32

law F32.atan2:
  for a: F32
  for b: F32
  F32

law F32.neg:
  for a: F32
  F32

law F32.abs:
  for a: F32
  F32

law F32.sqrt:
  for a: F32
  F32

law F32.exp:
  for a: F32
  F32

law F32.log:
  for a: F32
  F32

law F32.log2:
  for a: F32
  F32

law F32.log10:
  for a: F32
  F32

law F32.sin:
  for a: F32
  F32

law F32.cos:
  for a: F32
  F32

law F32.tan:
  for a: F32
  F32

law F32.asin:
  for a: F32
  F32

law F32.acos:
  for a: F32
  F32

law F32.atan:
  for a: F32
  F32

law F32.sinh:
  for a: F32
  F32

law F32.cosh:
  for a: F32
  F32

law F32.tanh:
  for a: F32
  F32

law F32.floor:
  for a: F32
  F32

law F32.ceil:
  for a: F32
  F32

law F32.trunc:
  for a: F32
  F32

law F32.is_eq:
  for a: F32
  for b: F32
  Bool

law F32.is_ne:
  for a: F32
  for b: F32
  Bool

law F32.is_lt:
  for a: F32
  for b: F32
  Bool

law F32.is_le:
  for a: F32
  for b: F32
  Bool

law F32.is_gt:
  for a: F32
  for b: F32
  Bool

law F32.is_ge:
  for a: F32
  for b: F32
  Bool

law F32.show:
  for +a: F32
  String

law F32.bits:
  for a: F32
  U32

law F32.read:
  for s: String
  Maybe<&2, F32>


def Char.cmp(a: Char, b: Char) -> (Char & Char) & Cmp:
  match a b:
    case Chr{x} Chr{y}:
      +x2 = x
      +y2 = y
      ((Chr{x2}, Chr{y2}), U32.cmp(x2, y2))


def String.append(a: String, b: String) -> String:
  match a:
    case SNil{}:
      b
    case SCon{h, t}:
      SCon{h, String.append(t, b)}

def String.cmp.rec(h1b: Char, h2b: Char, rr: (String & String) & Cmp) ->
  (String & String) & Cmp:
  ((t1b, t2b), r) = rr
  ((SCon{h1b, t1b}, SCon{h2b, t2b}), r)

law String.cmp:
  for a: String
  for b: String
  (String & String) & Cmp

def String.cmp.fin(t1: String, t2: String, hc: (Char & Char) & Cmp) ->
  (String & String) & Cmp:
  ((h1b, h2b), c) = hc
  match c:
    case LT{}:
      ((SCon{h1b, t1}, SCon{h2b, t2}), LT{})
    case EQ{}:
      String.cmp.rec(h1b, h2b, String.cmp(t1, t2))
    case GT{}:
      ((SCon{h1b, t1}, SCon{h2b, t2}), GT{})

def String.cmp(a, b):
  match a b:
    case SNil{} SNil{}:
      ((SNil{}, SNil{}), EQ{})
    case SNil{} SCon{h, t}:
      ((SNil{}, SCon{h, t}), LT{})
    case SCon{h, t} SNil{}:
      ((SCon{h, t}, SNil{}), GT{})
    case SCon{h1, t1} SCon{h2, t2}:
      String.cmp.fin(t1, t2, Char.cmp(h1, h2))

def String.eq.fin(r: (String & String) & Cmp) -> Bool:
  ((a2, b2), c) = r
  Cmp.is_eq(c)

def String.eq(a: String, b: String) -> Bool:
  String.eq.fin(String.cmp(a, b))


def Nat.show.put(qr: Nat & Nat) -> Char & Nat:
  (q, r) = qr
  (Chr{U32.from_nat(Nat.add(48n, r))}, q)

law Nat.show.go:
  for f   : Nat
  for n   : Nat
  for acc : String
  String

def Nat.show.fin(g: Nat, acc: String, dq: Char & Nat) -> String:
  (d, q) = dq
  match q:
    case 0n:
      SCon{d, acc}
    case 1n+p:
      Nat.show.go(g, 1n+p, SCon{d, acc})

def Nat.show.go(f, n, acc):
  match f:
    case 0n:
      acc
    case 1n+g:
      Nat.show.fin(g, acc, Nat.show.put(Nat.divmod(n, 10n)))

def Nat.show(+n: Nat) -> String:
  Nat.show.fin(n, SNil{}, Nat.show.put(Nat.divmod(n, 10n)))

law Nat.read.go:
  for s   : String
  for acc : Nat
  Maybe<&2, Nat>

def Nat.read.max() -> Nat:
  Nat.mul(U32.to_nat(16777215), U32.to_nat(16777217))

def Nat.read.fit(acc: Nat, qr: Nat & Nat) -> Bool:
  (q, r) = qr
  Bool.not(Nat.is_lt(q, acc))

def Nat.read.if(t: String, acc: Nat, d: U32, ok: Bool) -> Maybe<&2, Nat>:
  match ok:
    case True{}:
      Nat.read.go(t, Nat.add(Nat.mul(acc, 10n), U32.to_nat(d)))
    case False{}:
      None{}

def Nat.read.go(s, acc):
  match s:
    case SNil{}:
      Some{acc}
    case SCon{Chr{x}, t}:
      +a = acc
      +d = U32.sub(x, 48)
      Nat.read.if(t, a, d, Bool.and(U32.is_lt(d, 10), Nat.read.fit(a,
        Nat.divmod(Nat.sub(Nat.read.max(), U32.to_nat(d)), 10n))))

def Nat.read(s: String) -> Maybe<&2, Nat>:
  match s:
    case SNil{}:
      None{}
    case SCon{h, t}:
      Nat.read.go(SCon{h, t}, 0n)

law U32.show.go:
  for f   : Nat
  for +n  : U32
  for acc : String
  String

def U32.show.fin(g: Nat, acc: String, +n: U32, z: Bool) -> String:
  match z:
    case True{}:
      acc
    case False{}:
      U32.show.go(g, U32.div(n, 10),
        SCon{Chr{U32.add(48, U32.mod(n, 10))}, acc})

def U32.show.go(f, n, acc):
  match f:
    case 0n:
      acc
    case 1n+g:
      U32.show.fin(g, acc, n, U32.is_zero(n))

def U32.show.if(a: U32, z: Bool) -> String:
  match z:
    case True{}:
      SCon{Chr{48}, SNil{}}
    case False{}:
      U32.show.go(10n, a, SNil{})

def U32.show(+a: U32) -> String:
  U32.show.if(a, U32.is_zero(a))

law U32.read.go:
  for s   : String
  for acc : U32
  Maybe<&2, U32>

def U32.read.if(t: String, n: U32, ok: Bool) -> Maybe<&2, U32>:
  match ok:
    case True{}:
      U32.read.go(t, n)
    case False{}:
      None{}

def U32.read.go(s, acc):
  match s:
    case SNil{}:
      Some{acc}
    case SCon{Chr{x}, t}:
      +a = acc
      +n = U32.add(U32.mul(a, 10), U32.sub(x, 48))
      U32.read.if(t, n, U32.is_eq(U32.div(n, 10), a))

def U32.read(s: String) -> Maybe<&2, U32>:
  match s:
    case SNil{}:
      None{}
    case SCon{h, t}:
      U32.read.go(SCon{h, t}, 0)


def Array.size.node(-T: Type, ys: Array<T>, r: Array<T> & U32) ->
  Array<T> & U32:
  (xs2, n) = r
  (ANode{xs2, ys}, U32.shl(n))

def Array.size(-T: Type, a: Array<T>) -> Array<T> & U32:
  match a:
    case ALeaf{x}:
      (ALeaf{x}, 1)
    case ANode{xs, ys}:
      Array.size.node(T, ys, Array.size(T, xs))

def Array.swap.lo(-T: Type, ys: Array<T>, r: Array<T> & T) -> Array<T> & T:
  (nxs, old) = r
  (ANode{nxs, ys}, old)

def Array.swap.hi(-T: Type, xs: Array<T>, r: Array<T> & T) -> Array<T> & T:
  (nys, old) = r
  (ANode{xs, nys}, old)

law Array.swap.go:
  for -T: Type
  for  a: Array<T>
  for  n: U32
  for +i: U32
  for  v: T
  Array<T> & T

def Array.swap.if(
  -T: Type, xs: Array<T>, ys: Array<T>, +h: U32, i: U32, v: T, z: Bool
) -> Array<T> & T:
  match z:
    case True{}:
      Array.swap.lo(T, ys, Array.swap.go(T, xs, h, i, v))
    case False{}:
      Array.swap.hi(T, xs, Array.swap.go(T, ys, h, U32.sub(i, h), v))

def Array.swap.go(T, a, n, i, v):
  match a:
    case ALeaf{x}:
      (ALeaf{v}, x)
    case ANode{xs, ys}:
      +h = U32.shr(n)
      Array.swap.if(T, xs, ys, h, i, v, U32.is_lt(i, h))

def Array.swap.at(-T: Type, i: U32, v: T, an: Array<T> & U32) -> Array<T> & T:
  (a, n) = an
  +m = n
  Array.swap.go(T, a, m, U32.and(i, U32.sub(m, 1)), v)

def Array.swap(-T: Type, a: Array<T>, +i: U32, v: T) -> Array<T> & T:
  Array.swap.at(T, i, v, Array.size(T, a))

def Array.clone.node(
  cx: Array<U32> & Array<U32>, cy: Array<U32> & Array<U32>
) -> Array<U32> & Array<U32>:
  (xa, xb) = cx
  (ya, yb) = cy
  (ANode{xa, ya}, ANode{xb, yb})

def Array.clone(a: Array<U32>) -> Array<U32> & Array<U32>:
  match a:
    case ALeaf{x}:
      +x2 = x
      (ALeaf{x2}, ALeaf{x2})
    case ANode{xs, ys}:
      Array.clone.node(Array.clone(xs), Array.clone(ys))

def Array.new(-T: Data, +d: Nat, +v: T) -> Array<T>:
  match d:
    case 0n:
      ALeaf{v}
    case 1n+p:
      ANode{Array.new(T, p, v), Array.new(T, p, v)}

def Array.set.fin(-T: Type, r: Array<T> & T) -> Array<T>:
  (na, old) = r
  na

def Array.set(-T: Type, a: Array<T>, i: U32, v: T) -> Array<T>:
  Array.set.fin(T, Array.swap(T, a, i, v))

law Array.get.go:
  for -T: Data
  for  a: Array<T>
  for  n: U32
  for +i: U32
  Array<T> & T

def Array.get.if(
  -T: Data, xs: Array<T>, ys: Array<T>, +h: U32, i: U32, z: Bool
) -> Array<T> & T:
  match z:
    case True{}:
      Array.swap.lo(T, ys, Array.get.go(T, xs, h, i))
    case False{}:
      Array.swap.hi(T, xs, Array.get.go(T, ys, h, U32.sub(i, h)))

def Array.get.go(T, a, n, i):
  match a:
    case ALeaf{x}:
      +x2 = x
      (ALeaf{x2}, x2)
    case ANode{xs, ys}:
      +h = U32.shr(n)
      Array.get.if(T, xs, ys, h, i, U32.is_lt(i, h))

def Array.get.at(-T: Data, i: U32, an: Array<T> & U32) -> Array<T> & T:
  (a, n) = an
  +m = n
  Array.get.go(T, a, m, U32.and(i, U32.sub(m, 1)))

def Array.get(-T: Data, a: Array<T>, +i: U32) -> Array<T> & T:
  Array.get.at(T, i, Array.size(T, a))


def Map.bit.u(x: U32, k: Nat) -> Bool:
  U32.is_ne(U32.and(U32.shrn(x, k), 1), 0)

def Map.bit.chr(c: Char, off: Nat) -> Char & Bool:
  match c:
    case Chr{x}:
      match off:
        case 0n:
          (Chr{x}, True{})
        case 1n+b:
          +x2 = x
          (Chr{x2}, Map.bit.u(x2, Nat.sub(31n, b)))

def Map.bit.go.chr(t: String, r: Char & Bool) -> String & Bool:
  (c2, b) = r
  (SCon{c2, t}, b)

def Map.bit.go.rec(c: Char, r: String & Bool) -> String & Bool:
  (t2, b) = r
  (SCon{c, t2}, b)

def Map.bit.go(key: String, ci: Nat, off: Nat) -> String & Bool:
  match key:
    case SNil{}:
      (SNil{}, False{})
    case SCon{c, t}:
      match ci:
        case 0n:
          Map.bit.go.chr(t, Map.bit.chr(c, off))
        case 1n+j:
          Map.bit.go.rec(c, Map.bit.go(t, j, off))

def Map.bit.at(key: String, co: Nat & Nat) -> String & Bool:
  (ci, off) = co
  Map.bit.go(key, ci, off)

def Map.bit(key: String, pos: Nat) -> String & Bool:
  Map.bit.at(key, Nat.divmod(pos, 33n))

law Map.msb.u:
  for n: Nat
  for x: U32
  Nat

def Map.msb.u.if(p: Nat, x2: U32, z: Bool) -> Nat:
  match z:
    case True{}:
      0n
    case False{}:
      Nat.add(1n, Map.msb.u(p, U32.shr(x2)))

def Map.msb.u(n, x):
  match n:
    case 0n:
      0n
    case 1n+p:
      +x2 = x
      Map.msb.u.if(p, x2, U32.is_zero(x2))

def Map.diff.chr(x: U32) -> Nat:
  Nat.sub(33n, Map.msb.u(32n, x))

def Map.diff.step(x: Char, y: Char) -> Nat & Bool:
  match x y:
    case Chr{cx} Chr{cy}:
      +cx2 = cx
      +cy2 = cy
      (Map.diff.chr(U32.xor(cx2, cy2)), U32.is_eq(cx2, cy2))

law Map.diff:
  for a: String
  for b: String
  Nat

def Map.diff.fin(xt: String, yt: String, rc: Nat & Bool) -> Nat:
  (r, c) = rc
  match c:
    case True{}:
      Nat.add(33n, Map.diff(xt, yt))
    case False{}:
      r

def Map.diff(a, b):
  match a b:
    case SNil{} SNil{}:
      0n
    case SNil{} SCon{h, t}:
      0n
    case SCon{h, t} SNil{}:
      0n
    case SCon{x, xt} SCon{y, yt}:
      Map.diff.fin(xt, yt, Map.diff.step(x, y))

def Map.new(a, -V: Kind(a)) -> Map<a, V>:
  MTip{}

law Map.put:
  for -a  : Quant
  for -V  : Kind(a)
  for m   : Map<a, V>
  for key : String
  for x   : V
  Map<a, V>

def Map.put.bit(
  a, -V: Kind(a), x: V, p2: Nat, lo: Map<a, V>, hi: Map<a, V>, kb: String & Bool
) -> Map<a, V>:
  (key2, b) = kb
  match b:
    case False{}:
      MNode{p2, Map.put(a, V, lo, key2, x), hi}
    case True{}:
      MNode{p2, lo, Map.put(a, V, hi, key2, x)}

def Map.put(a, V, m, key, x):
  match m:
    case MTip{}:
      MLeaf{key, x}
    case MLeaf{k, v}:
      MLeaf{k, x}
    case MNode{pos, lo, hi}:
      +p = pos
      Map.put.bit(a, V, x, p, lo, hi, Map.bit(key, p))

def Map.ins.splice.bit(
  a, -V: Kind(a), x: V, rest: Map<a, V>, pb: Nat, kb: String & Bool
) -> Map<a, V>:
  (key2, b) = kb
  match b:
    case False{}:
      MNode{pb, MLeaf{key2, x}, rest}
    case True{}:
      MNode{pb, rest, MLeaf{key2, x}}

def Map.ins.splice(
  a, -V: Kind(a), +p: Nat, key: String, x: V, rest: Map<a, V>
) -> Map<a, V>:
  Map.ins.splice.bit(a, V, x, rest, p, Map.bit(key, p))

law Map.ins:
  for -a  : Quant
  for -V  : Kind(a)
  for m   : Map<a, V>
  for key : String
  for x   : V
  for +p  : Nat
  Map<a, V>

def Map.ins.deep(
  a, -V: Kind(a), x: V, lo: Map<a, V>, hi: Map<a, V>, pb: Nat, qb: Nat,
  kb: String & Bool
) -> Map<a, V>:
  (key2, b) = kb
  match b:
    case False{}:
      MNode{qb, Map.ins(a, V, lo, key2, x, pb), hi}
    case True{}:
      MNode{qb, lo, Map.ins(a, V, hi, key2, x, pb)}

def Map.ins.if(
  a, -V: Kind(a), key: String, x: V, lo: Map<a, V>, hi: Map<a, V>, +p2: Nat,
  pb: Nat, t: Bool
) -> Map<a, V>:
  match t:
    case False{}:
      Map.ins.splice(a, V, pb, key, x, MNode{p2, lo, hi})
    case True{}:
      Map.ins.deep(a, V, x, lo, hi, pb, p2, Map.bit(key, p2))

def Map.ins(a, V, m, key, x, p):
  match m:
    case MTip{}:
      MLeaf{key, x}
    case MLeaf{k, v}:
      Map.ins.splice(a, V, p, key, x, MLeaf{k, v})
    case MNode{pos, lo, hi}:
      +pos2 = pos
      Map.ins.if(a, V, key, x, lo, hi, pos2, p, Nat.is_lt(pos2, p))

def Map.lo(
  a, -V: Kind(a), -R: Type, p2: Nat, hi: Map<a, V>, r0: Map<a, V> & R
) -> Map<a, V> & R:
  (lo2, r) = r0
  (MNode{p2, lo2, hi}, r)

def Map.hi(
  a, -V: Kind(a), -R: Type, p2: Nat, lo: Map<a, V>, r0: Map<a, V> & R
) -> Map<a, V> & R:
  (hi2, r) = r0
  (MNode{p2, lo, hi2}, r)

law Map.seek:
  for -a  : Quant
  for -V  : Kind(a)
  for m   : Map<a, V>
  for key : String
  Map<a, V> & String & Maybe<&2, String>

def Map.seek.bit(
  a, -V: Kind(a), lo: Map<a, V>, hi: Map<a, V>, p2: Nat, kb: String & Bool
) -> Map<a, V> & String & Maybe<&2, String>:
  (key2, b) = kb
  match b:
    case False{}:
      Map.lo(a, V, String & Maybe<&2, String>, p2, hi, Map.seek(a, V, lo, key2))
    case True{}:
      Map.hi(a, V, String & Maybe<&2, String>, p2, lo, Map.seek(a, V, hi, key2))

def Map.seek(a, V, m, key):
  match m:
    case MTip{}:
      (MTip{}, key, None{})
    case MLeaf{k, v}:
      +k2 = k
      (MLeaf{k2, v}, key, Some{k2})
    case MNode{pos, lo, hi}:
      +p = pos
      Map.seek.bit(a, V, lo, hi, p, Map.bit(key, p))

def Map.set.fin.go(
  a, -V: Kind(a), m: Map<a, V>, key: String, x: V, r: (String & String) & Cmp
) -> Map<a, V>:
  ((keyb2, k2), c) = r
  match c:
    case LT{}:
      Map.ins(a, V, m, key, x, Map.diff(keyb2, k2))
    case EQ{}:
      Map.put(a, V, m, key, x)
    case GT{}:
      Map.ins(a, V, m, key, x, Map.diff(keyb2, k2))

def Map.set.fin(
  a, -V: Kind(a), m: Map<a, V>, key: String, x: V, keyb: String, k: String
) -> Map<a, V>:
  Map.set.fin.go(a, V, m, key, x, String.cmp(keyb, k))

def Map.set.go(
  a, -V: Kind(a), x: V, r: Map<a, V> & String & Maybe<&2, String>
) -> Map<a, V>:
  (m2, key2, found) = r
  match found:
    case None{}:
      MLeaf{key2, x}
    case Some{k}:
      +ka = {key2 : String}
      Map.set.fin(a, V, m2, ka, x, ka, k)

def Map.set(a, -V: Kind(a), m: Map<a, V>, key: String, x: V) -> Map<a, V>:
  Map.set.go(a, V, x, Map.seek(a, V, m, key))

def Map.has.leaf(a, -V: Kind(a), v: V, r: (String & String) & Cmp) ->
  Map<a, V> & Bool:
  ((key2, k2), c) = r
  (MLeaf{k2, v}, Cmp.is_eq(c))

law Map.has:
  for -a  : Quant
  for -V  : Kind(a)
  for m   : Map<a, V>
  for key : String
  Map<a, V> & Bool

def Map.has.bit(
  a, -V: Kind(a), lo: Map<a, V>, hi: Map<a, V>, p2: Nat, kb: String & Bool
) -> Map<a, V> & Bool:
  (key2, b) = kb
  match b:
    case False{}:
      Map.lo(a, V, Bool, p2, hi, Map.has(a, V, lo, key2))
    case True{}:
      Map.hi(a, V, Bool, p2, lo, Map.has(a, V, hi, key2))

def Map.has(a, V, m, key):
  match m:
    case MTip{}:
      (MTip{}, False{})
    case MLeaf{k, v}:
      Map.has.leaf(a, V, v, String.cmp(key, k))
    case MNode{pos, lo, hi}:
      +p = pos
      Map.has.bit(a, V, lo, hi, p, Map.bit(key, p))

def Map.get.leaf(-V: Data, d: V, v: V, r: (String & String) & Cmp) ->
  Map<&2, V> & V:
  ((key2, k2), c) = r
  match c:
    case LT{}:
      (MLeaf{k2, v}, d)
    case EQ{}:
      +v2 = v
      (MLeaf{k2, v2}, v2)
    case GT{}:
      (MLeaf{k2, v}, d)

law Map.get:
  for -V  : Data
  for d   : V
  for m   : Map<&2, V>
  for key : String
  Map<&2, V> & V

def Map.get.bit(
  -V: Data, d: V, lo: Map<&2, V>, hi: Map<&2, V>, p2: Nat, kb: String & Bool
) -> Map<&2, V> & V:
  (key2, b) = kb
  match b:
    case False{}:
      Map.lo(&2, V, V, p2, hi, Map.get(V, d, lo, key2))
    case True{}:
      Map.hi(&2, V, V, p2, lo, Map.get(V, d, hi, key2))

def Map.get(V, d, m, key):
  match m:
    case MTip{}:
      (MTip{}, d)
    case MLeaf{k, v}:
      Map.get.leaf(V, d, v, String.cmp(key, k))
    case MNode{pos, lo, hi}:
      +p = pos
      Map.get.bit(V, d, lo, hi, p, Map.bit(key, p))

def Map.pop.lo(
  a, -V: Kind(a), pos: Nat, hi: Map<a, V>, r0: Map<a, V> & Maybe<a, V>
) -> Map<a, V> & Maybe<a, V>:
  (lo, r) = r0
  match lo:
    case MTip{}:
      (hi, r)
    case lo2:
      (MNode{pos, lo2, hi}, r)

def Map.pop.hi(
  a, -V: Kind(a), pos: Nat, lo: Map<a, V>, r0: Map<a, V> & Maybe<a, V>
) -> Map<a, V> & Maybe<a, V>:
  (hi, r) = r0
  match hi:
    case MTip{}:
      (lo, r)
    case hi2:
      (MNode{pos, lo, hi2}, r)

def Map.pop.leaf(a, -V: Kind(a), v: V, r: (String & String) & Cmp) ->
  Map<a, V> & Maybe<a, V>:
  ((key2, k2), c) = r
  match c:
    case LT{}:
      (MLeaf{k2, v}, None{})
    case EQ{}:
      (MTip{}, Some{v})
    case GT{}:
      (MLeaf{k2, v}, None{})

law Map.pop:
  for -a  : Quant
  for -V  : Kind(a)
  for m   : Map<a, V>
  for key : String
  Map<a, V> & Maybe<a, V>

def Map.pop.bit(
  a, -V: Kind(a), lo: Map<a, V>, hi: Map<a, V>, p2: Nat, kb: String & Bool
) -> Map<a, V> & Maybe<a, V>:
  (key2, b) = kb
  match b:
    case False{}:
      Map.pop.lo(a, V, p2, hi, Map.pop(a, V, lo, key2))
    case True{}:
      Map.pop.hi(a, V, p2, lo, Map.pop(a, V, hi, key2))

def Map.pop(a, V, m, key):
  match m:
    case MTip{}:
      (MTip{}, None{})
    case MLeaf{k, v}:
      Map.pop.leaf(a, V, v, String.cmp(key, k))
    case MNode{pos, lo, hi}:
      +p = pos
      Map.pop.bit(a, V, lo, hi, p, Map.bit(key, p))

def Map.del.fin(a, -V: Kind(a), r: Map<a, V> & Maybe<a, V>) -> Map<a, V>:
  (m2, x) = r
  m2

def Map.del(a, -V: Kind(a), m: Map<a, V>, key: String) -> Map<a, V>:
  Map.del.fin(a, V, Map.pop(a, V, m, key))

def Map.to_list.go(
  a, -V: Kind(a), m: Map<a, V>, acc: List<a, Sigma<&2, a, String, _ => V>>
) -> List<a, Sigma<&2, a, String, _ => V>>:
  match m:
    case MTip{}:
      acc
    case MLeaf{k, v}:
      Con{(k, v), acc}
    case MNode{pos, lo, hi}:
      Map.to_list.go(a, V, lo, Map.to_list.go(a, V, hi, acc))

def Map.to_list(a, -V: Kind(a), m: Map<a, V>) ->
  List<a, Sigma<&2, a, String, _ => V>>:
  Map.to_list.go(a, V, m, Nil{})

def Map.keys.go(a, -V: Kind(a), m: Map<a, V>, acc: List<&2, String>) ->
  List<&2, String>:
  match m:
    case MTip{}:
      acc
    case MLeaf{k, v}:
      Con{k, acc}
    case MNode{pos, lo, hi}:
      Map.keys.go(a, V, lo, Map.keys.go(a, V, hi, acc))

def Map.keys(a, -V: Kind(a), m: Map<a, V>) -> List<&2, String>:
  Map.keys.go(a, V, m, Nil{})

def Map.from_list.go(
  a, -V: Kind(a), kvs: List<a, Sigma<&2, a, String, _ => V>>, m: Map<a, V>
) -> Map<a, V>:
  match kvs:
    case Nil{}:
      m
    case Con{(k, v), t}:
      Map.from_list.go(a, V, t, Map.set(a, V, m, k, v))

def Map.from_list(a, -V: Kind(a), kvs: List<a, Sigma<&2, a, String, _ => V>>) ->
  Map<a, V>:
  Map.from_list.go(a, V, kvs, MTip{})

def Map.union(a, -V: Kind(a), m: Map<a, V>, n: Map<a, V>) -> Map<a, V>:
  Map.from_list.go(a, V, Map.to_list(a, V, n), m)


def Set() -> Data:
  Map<&2, Unit>

def Set.new() -> Set():
  Map.new(&2, Unit)

def Set.add(s: Set(), key: String) -> Set():
  Map.set(&2, Unit, s, key, Unit{})

def Set.has(s: Set(), key: String) -> Set() & Bool:
  Map.has(&2, Unit, s, key)

def Set.del(s: Set(), key: String) -> Set():
  Map.del(&2, Unit, s, key)


def App.next(
  -S: Type, window: Window, rest: Window -> S -> IO(Unit), next: Maybe<S>
) -> IO(Unit):
  match next:
    case None{}:
      Window.close(window)
    case Some{state}:
      rest(window, state)

def App.turn(
  -S: Type, shown: Window & Image & List<Event>,
  tick: List<Event> -> S -> IO(Maybe<S>), state: S,
  rest: Window -> S -> IO(Unit)
) -> IO(Unit):
  (window, image, events) = shown
  IO.bind(Maybe<S>, Unit, tick(events, state), App.next(S, window, rest))

def App.draw(
  -S: Type, window: Window, drawn: S & Image,
  tick: List<Event> -> S -> IO(Maybe<S>), rest: Window -> S -> IO(Unit)
) -> IO(Unit):
  (state, image) = drawn
  do IO<Unit>:
    shown : Window & Image & List<Event> <- Window.frame(window, image)
    App.turn(S, shown, tick, state, rest)

def App.step(
  -S: Type, app: App<S>, window: Window, state: S,
  rest: Window -> S -> IO(Unit)
) -> IO(Unit):
  App{view, tick} = app
  App.draw(S, window, view(state), tick, rest)

def App.loop(~S: Type, ~app: App<S>, fuel: Nat, window: Window, state: S) ->
  IO(Unit):
  match fuel:
    case 0n:
      Window.close(window)
    case 1n+f:
      App.step(S, app, window, state, w => s => App.loop(~S, ~app, f, w, s))

def App.run(
  ~S: Type, ~app: App<S>, title: String, width: U32, height: U32, state: S
) -> IO(Unit):
  do IO<Unit>:
    window : Window <- IO.try(Window, Window.open(title, width, height))
    App.loop(~S, ~app, U32.to_nat(4294967295), window, state)

def App.more(-S: Type, rest: S -> IO(Maybe<S>), next: Maybe<S>) ->
  IO(Maybe<S>):
  match next:
    case None{}:
      IO.pure(Maybe<S>, None{})
    case Some{state}:
      rest(state)

def App.fold(
  -S: Type, app: App<S>, events: List<Event>, state: S,
  rest: S -> IO(Maybe<S>)
) -> IO(Maybe<S>):
  App{view, tick} = app
  IO.bind(Maybe<S>, Maybe<S>, tick(events, state), App.more(S, rest))

def App.play(~S: Type, ~app: App<S>, frames: List<List<Event>>, state: S) ->
  IO(Maybe<S>):
  match frames:
    case Nil{}:
      IO.pure(Maybe<S>, Some{state})
    case Con{events, rest}:
      App.fold(S, app, events, state, s => App.play(~S, ~app, rest, s))
`;var me=`# Winning Is A Bug -- the game.
#
# The whole game, and nothing else: a torus map, a walled room, a flag,
# five moves, and the level as text (the front end asks \`grid\` for
# it). The claims about this game live in LAWS.bend; their proofs live
# in CERT.bend. This file is AI-written and may be rewritten at will --
# the laws hold or the book stops checking.

import Base

type Move is Data:
  Up{}
  Down{}
  Left{}
  Right{}
  Grab{}

type Game is Data:
  Game{x: Nat, y: Nat, won: Bool}

# Map
# ---

def map_w() -> Nat:
  12n

def map_h() -> Nat:
  8n

def room_w() -> Nat:
  3n

def room_h() -> Nat:
  3n

def flag_x() -> Nat:
  1n

def flag_y() -> Nat:
  1n

def start_x() -> Nat:
  8n

def start_y() -> Nat:
  5n

def nat_eq(a: Nat, b: Nat) -> Bool:
  match a:
    case 0n:
      match b:
        case 0n:
          True{}
        case 1n+q:
          False{}
    case 1n+p:
      match b:
        case 0n:
          False{}
        case 1n+q:
          nat_eq(p, q)

def nat_le(a: Nat, b: Nat) -> Bool:
  match a:
    case 0n:
      True{}
    case 1n+p:
      match b:
        case 0n:
          False{}
        case 1n+q:
          nat_le(p, q)

def wall(+x: Nat, +y: Nat) -> Bool:
  east  = nat_eq(x, room_w()) && nat_le(y, room_h())
  south = nat_le(x, room_w()) && nat_eq(y, room_h())
  north = nat_le(x, room_w()) && nat_eq(y, Nat.sub(map_h(), 1n))
  west  = nat_eq(x, Nat.sub(map_w(), 1n)) && nat_le(y, room_h())
  (east || south) || (north || west)

# Step
# ----

def pick(-A: Type, c: Bool, a: A, b: A) -> A:
  match c:
    case True{}:
      a
    case False{}:
      b

def warp_up(y: Nat) -> Nat:
  match y:
    case 0n:
      Nat.sub(map_h(), 1n)
    case 1n+p:
      p

def warp_down(+y: Nat) -> Nat:
  pick(Nat, nat_eq(1n+y, map_h()), 0n, 1n+y)

def warp_left(x: Nat) -> Nat:
  match x:
    case 0n:
      Nat.sub(map_w(), 1n)
    case 1n+p:
      p

def warp_right(+x: Nat) -> Nat:
  pick(Nat, nat_eq(1n+x, map_w()), 0n, 1n+x)

def move(+tx: Nat, +ty: Nat, g: Game) -> Game:
  Game{x, y, w0} = g
  +w = w0
  pick(Game, wall(tx, ty), Game{x, y, w}, Game{tx, ty, w})

def step(a: Move, g: Game) -> Game:
  match a:
    case Up{}:
      Game{x0, y0, w} = g
      +x = x0
      +y = y0
      move(x, warp_up(y), Game{x, y, w})
    case Down{}:
      Game{x0, y0, w} = g
      +x = x0
      +y = y0
      move(x, warp_down(y), Game{x, y, w})
    case Left{}:
      Game{x0, y0, w} = g
      +x = x0
      +y = y0
      move(warp_left(x), y, Game{x, y, w})
    case Right{}:
      Game{x0, y0, w} = g
      +x = x0
      +y = y0
      move(warp_right(x), y, Game{x, y, w})
    case Grab{}:
      Game{x0, y0, w} = g
      +x = x0
      +y = y0
      Game{x, y, w || (nat_eq(x, flag_x()) && nat_eq(y, flag_y()))}

def start() -> Game:
  Game{start_x(), start_y(), False{}}

# Keys
# ----
# The front end sends every key press as its character code (\`w\` is 119,
# space is 32; the arrows arrive as w, a, s, d) and plays the move this
# answers, so a new key is one more line here and one more Move.

def key(+k: U32) -> Maybe<Move>:
  pick(Maybe<Move>, U32.is_eq(k, 119), Some{Up{}},
    pick(Maybe<Move>, U32.is_eq(k, 115), Some{Down{}},
      pick(Maybe<Move>, U32.is_eq(k, 97), Some{Left{}},
        pick(Maybe<Move>, U32.is_eq(k, 100), Some{Right{}},
          pick(Maybe<Move>, U32.is_eq(k, 32), Some{Grab{}}, None{})))))

# The worker takes the list first: the guard wants the shrinking argument
# in the first live column. \`apply\` is the API: a board, then its moves.
def run(moves: List<Move>, g: Game) -> Game:
  match moves:
    case Nil{}:
      g
    case Con{m, ms}:
      run(ms, step(m, g))

def replay(g: Game, moves: List<Move>) -> Game:
  run(moves, g)

def is_won(g: Game) -> Bool:
  Game{x, y, w} = g
  w

# Show
# ----
# The map, printed: '#' wall, 'F' flag, 'P' the starting cell, '.' floor.
# The front end asks \`grid\` for this exact text, so the level is defined
# once, here.

def cell(+x: Nat, +y: Nat) -> String:
  is_flag  = nat_eq(x, flag_x()) && nat_eq(y, flag_y())
  is_start = nat_eq(x, start_x()) && nat_eq(y, start_y())
  pick(String, wall(x, y), "#",
    pick(String, is_flag, "F",
      pick(String, is_start, "P", ".")))

def row(x: Nat, +y: Nat) -> String:
  match x:
    case 0n:
      cell(0n, y)
    case 1n+p0:
      +p = p0
      row(p, y) ++ cell(1n+p, y)

def grid(y: Nat) -> String:
  match y:
    case 0n:
      row(Nat.sub(map_w(), 1n), 0n)
    case 1n+p0:
      +p = p0
      grid(p) ++ "\\n" ++ row(Nat.sub(map_w(), 1n), 1n+p)


def main() -> IO(Unit):
  do IO<Unit>:
    u : Unit <- IO.print(grid(Nat.sub(map_h(), 1n)))
    IO.print(pick(String, is_won(replay(start(), [Left{}, Left{}, Up{}, Grab{}])),
      "WON (this line is unreachable)", "still not won"))
`;var ke=`# The laws. The human states them; CERT.bend must prove them.

import Base
import ./main.bend as Game

# LAW: for any sequence of moves, replaying them
# from the start can never lead to victory.
law you_cant_win:
  for moves: List<Game.Move>
  board = Game.replay(Game.start(), moves)
  {Game.is_won(board) == False{} : Bool}
`;var _e=`# Winning Is A Bug -- the certificate.
#
# The proofs. This file imports the game (as Game) and the claims (as
# Laws) and fills every assert the laws make -- an unfilled assert is an
# error, so \`bend CERT.bend\` is the whole verification. Everything here
# is AI-written scaffolding for one def: Laws.you_cant_win.
#
# The shape of the argument: an invariant ("the player stands on a safe
# cell: on the map, not in the room, not on a wall") holds at the start
# and survives every action. The finite geometry is computed, not
# argued: chk_all enumerates the whole map and evaluates to True, and
# the *_at lemmas index that certificate at open coordinates. A grab off
# the flag never sets \`won\`, and the flag's cell is in the room.

import Base
import ./main.bend as Game
import ./LAWS.bend as Laws

# Proof kit
# ---------
# Boolean reflection: T(b) is the truth of b as a type (Unit when True,
# Empty when False), so a computed check becomes a proof by conversion.
# The rest are the eliminators the affine core asks to be spelled out:
# every split is a def whose match consumes a parameter, and every
# equation is spent by one rewrite.

def T(b: Bool) -> Data:
  match b:
    case True{}:
      Unit
    case False{}:
      Empty

def sym(-A: Type, -a: A, -b: A, e: {a == b : A}) -> {b == a : A}:
  %e : {_ == a : A}
  {==}

def and_split(+a: Bool, -b: Bool, w: T(a && b), -P: Type,
  f: T(a) -> T(b) -> P) -> P:
  match a:
    case True{}:
      f(Unit{}, w)
    case False{}:
      Empty.absurd(P, w)

def and_intro(+a: Bool, -b: Bool, wa: T(a), wb: T(b)) -> T(a && b):
  match a:
    case True{}:
      wb
    case False{}:
      Empty.absurd(T(False{} && b), wa)

def not_elim(+a: Bool, wn: T(Bool.not(a)), wa: T(a)) -> Empty:
  match a:
    case True{}:
      wn
    case False{}:
      wa

def imp(a: Bool, b: Bool) -> Bool:
  Bool.not(a) || b

def imp_elim(+a: Bool, -b: Bool, wi: T(imp(a, b)), wa: T(a)) -> T(b):
  match a:
    case True{}:
      wi
    case False{}:
      Empty.absurd(T(b), wa)

def bool_case(+b: Bool, -P: Bool -> Type,
  t: {True{} == b : Bool} -> P(True{}),
  f: {False{} == b : Bool} -> P(False{})) -> P(b):
  match b:
    case True{}:
      t({==})
    case False{}:
      f({==})

def pick_split(-A: Type, -P: A -> Type, +c: Bool, -a: A, -b: A,
  t: {True{} == c : Bool} -> P(a),
  f: {False{} == c : Bool} -> P(b)) -> P(Game.pick(A, c, a, b)):
  match c:
    case True{}:
      t({==})
    case False{}:
      f({==})

def or_case(-A: Type, -B: Type, o: Or(A, B), -P: Type,
  f: A -> P, g: B -> P) -> P:
  match o:
    case Inl{l}:
      f(l)
    case Inr{r}:
      g(r)

def eq_sound(a: Nat, b: Nat, w: T(Game.nat_eq(a, b))) -> {a == b : Nat}:
  match a:
    case 0n:
      match b:
        case 0n:
          {==}
        case 1n+q:
          Empty.absurd({0n == 1n+q : Nat}, w)
    case 1n+p:
      match b:
        case 0n:
          Empty.absurd({1n+p == 0n : Nat}, w)
        case 1n+q:
          %eq_sound(p, q, w) : {1n+p == 1n+_ : Nat}
          {==}

def le_split(a: Nat, b: Nat, w: T(Game.nat_le(a, b)))
  -> Or(T(Game.nat_le(1n+a, b)), {a == b : Nat}):
  match a:
    case 0n:
      match b:
        case 0n:
          Inr{{==}}
        case 1n+q:
          Inl{w}
    case 1n+p:
      match b:
        case 0n:
          Empty.absurd(Or(T(Game.nat_le(2n+p, 0n)), {1n+p == 0n : Nat}), w)
        case 1n+q:
          or_case(T(Game.nat_le(1n+p, q)), {p == q : Nat}, le_split(p, q, w),
            Or(T(Game.nat_le(2n+p, 1n+q)), {1n+p == 1n+q : Nat}),
            l => Inl{l},
            e => Inr{%e : {1n+p == 1n+_ : Nat}
                     {==}})

# Invariant
# ---------
# The safe cells: on the map, not inside the room, not on a wall. The
# proof shows every action keeps the player on a safe cell, and that a
# grab on a safe cell never raises the flag (the flag is in the room).
#
# The geometric heart is finite, so it is not argued -- it is computed:
# chk_all(a, 11n) enumerates every cell of the map and checks that a
# step in direction \`a\` from a safe cell lands on a wall or on a safe
# cell. The term evaluates to True, so its truth is Unit by conversion,
# and chk_row_at/chk_all_at index that certificate at any coordinates.

def room(+x: Nat, +y: Nat) -> Bool:
  Game.nat_le(x, 2n) && Game.nat_le(y, 2n)

def okpos(+x: Nat, +y: Nat) -> Bool:
  (Game.nat_le(x, 11n) && Game.nat_le(y, 7n))
    && (Bool.not(room(x, y)) && Bool.not(Game.wall(x, y)))

def tx(+a: Game.Move, +x: Nat, +y: Nat) -> Nat:
  match a:
    case Game.Up{}:
      x
    case Game.Down{}:
      x
    case Game.Left{}:
      Game.warp_left(x)
    case Game.Right{}:
      Game.warp_right(x)
    case Game.Grab{}:
      x

def ty(+a: Game.Move, +x: Nat, +y: Nat) -> Nat:
  match a:
    case Game.Up{}:
      Game.warp_up(y)
    case Game.Down{}:
      Game.warp_down(y)
    case Game.Left{}:
      y
    case Game.Right{}:
      y
    case Game.Grab{}:
      y

def chk(+a: Game.Move, +x: Nat, +y: Nat) -> Bool:
  imp(okpos(x, y) && Bool.not(Game.wall(tx(a, x, y), ty(a, x, y))),
    okpos(tx(a, x, y), ty(a, x, y)))

def chk_row(+a: Game.Move, +x: Nat, y: Nat) -> Bool:
  match y:
    case 0n:
      chk(a, x, 0n)
    case 1n+q0:
      +q = q0
      chk(a, x, 1n+q) && chk_row(a, x, q)

def chk_all(+a: Game.Move, x: Nat) -> Bool:
  match x:
    case 0n:
      chk_row(a, 0n, 7n)
    case 1n+p0:
      +p = p0
      chk_row(a, 1n+p, 7n) && chk_all(a, p)

def chk_row_at(+a: Game.Move, +x: Nat, y: Nat, j: Nat, wr: T(chk_row(a, x, y)),
  wj: T(Game.nat_le(j, y))) -> T(chk(a, x, j)):
  match y:
    case 0n:
      match j:
        case 0n:
          wr
        case 1n+jp:
          Empty.absurd(T(chk(a, x, 1n+jp)), wj)
    case 1n+q0:
      match j:
        case 0n:
          +q = q0
          and_split(chk(a, x, 1n+q), chk_row(a, x, q), wr, T(chk(a, x, 0n)),
            wp => wt => chk_row_at(a, x, q, 0n, wt, Unit{}))
        case 1n+jp0:
          +q = q0
          +jp = jp0
          and_split(chk(a, x, 1n+q), chk_row(a, x, q), wr, T(chk(a, x, 1n+jp)),
            wp => wt =>
              or_case(T(Game.nat_le(1n+jp, q)), {jp == q : Nat},
                le_split(jp, q, wj), T(chk(a, x, 1n+jp)),
                l => chk_row_at(a, x, q, 1n+jp, wt, l),
                e => %sym(Nat, jp, q, e) : T(chk(a, x, 1n+_))
                     wp))

def chk_all_at(+a: Game.Move, x: Nat, i: Nat, wa: T(chk_all(a, x)),
  wi: T(Game.nat_le(i, x))) -> T(chk_row(a, i, 7n)):
  match x:
    case 0n:
      match i:
        case 0n:
          wa
        case 1n+ip:
          Empty.absurd(T(chk_row(a, 1n+ip, 7n)), wi)
    case 1n+p0:
      match i:
        case 0n:
          +p = p0
          and_split(chk_row(a, 1n+p, 7n), chk_all(a, p), wa,
            T(chk_row(a, 0n, 7n)),
            wp => wt => chk_all_at(a, p, 0n, wt, Unit{}))
        case 1n+ip0:
          +p = p0
          +ip = ip0
          and_split(chk_row(a, 1n+p, 7n), chk_all(a, p), wa,
            T(chk_row(a, 1n+ip, 7n)),
            wp => wt =>
              or_case(T(Game.nat_le(1n+ip, p)), {ip == p : Nat},
                le_split(ip, p, wi), T(chk_row(a, 1n+ip, 7n)),
                l => chk_all_at(a, p, 1n+ip, wt, l),
                e => %sym(Nat, ip, p, e) : T(chk_row(a, 1n+_, 7n))
                     wp))

def cert(+a: Game.Move, +x: Nat, +y: Nat, ca: T(chk_all(a, 11n)),
  lx: T(Game.nat_le(x, 11n)), ly: T(Game.nat_le(y, 7n))) -> T(chk(a, x, y)):
  chk_row_at(a, x, 7n, y, chk_all_at(a, 11n, x, ca, lx), ly)

# the safe target: from a safe cell, a step lands on a wall or stays safe
def go_ok(+a: Game.Move, +x: Nat, +y: Nat, +hp: T(okpos(x, y)),
  ca: T(chk_all(a, 11n)), e: {False{} == Game.wall(tx(a, x, y), ty(a, x, y)) : Bool})
  -> T(okpos(tx(a, x, y), ty(a, x, y))):
  and_split(Game.nat_le(x, 11n) && Game.nat_le(y, 7n),
    Bool.not(room(x, y)) && Bool.not(Game.wall(x, y)), hp,
    T(okpos(tx(a, x, y), ty(a, x, y))),
    wb => wnr =>
      and_split(Game.nat_le(x, 11n), Game.nat_le(y, 7n), wb,
        T(okpos(tx(a, x, y), ty(a, x, y))),
        lx => ly =>
          imp_elim(okpos(x, y) && Bool.not(Game.wall(tx(a, x, y), ty(a, x, y))),
            okpos(tx(a, x, y), ty(a, x, y)),
            cert(a, x, y, ca, lx, ly),
            and_intro(okpos(x, y),
              Bool.not(Game.wall(tx(a, x, y), ty(a, x, y))),
              hp,
              %e : T(Bool.not(_))
              Unit{}))))

# grabbing off the flag never wins; on the flag is impossible from safety
def no_flag(+x: Nat, +y: Nat, +hp: T(okpos(x, y)),
  e: {True{} == Game.nat_eq(x, Game.flag_x()) && Game.nat_eq(y, Game.flag_y()) : Bool}) -> Empty:
  and_split(Game.nat_eq(x, 1n), Game.nat_eq(y, 1n),
    %e : T(_)
    Unit{},
    Empty,
    wex => wey =>
      and_split(Game.nat_le(x, 11n) && Game.nat_le(y, 7n),
        Bool.not(room(x, y)) && Bool.not(Game.wall(x, y)), hp,
        Empty,
        wb => wrw =>
          and_split(Bool.not(room(x, y)), Bool.not(Game.wall(x, y)), wrw, Empty,
            wnr => wnw =>
              not_elim(room(x, y), wnr,
                %sym(Nat, x, 1n, eq_sound(x, 1n, wex)) : T(Game.nat_le(_, 2n) && Game.nat_le(y, 2n))
                %sym(Nat, y, 1n, eq_sound(y, 1n, wey)) : T(Game.nat_le(1n, 2n) && Game.nat_le(_, 2n))
                Unit{}))))

# the chosen cell: a step from a safe cell lands somewhere safe (or stays)
def go_pos(+a: Game.Move, +x: Nat, +y: Nat, hp: T(okpos(x, y)),
  ca: T(chk_all(a, 11n)))
  -> &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
   & {Game.Game{nx, ny, False{}}
      == Game.move(tx(a, x, y), ty(a, x, y), Game.Game{x, y, False{}}) : Game.Game}:
  +hp2 = hp
  pick_split(Game.Game,
    gz => &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
        & {Game.Game{nx, ny, False{}} == gz : Game.Game},
    Game.wall(tx(a, x, y), ty(a, x, y)),
    Game.Game{x, y, False{}},
    Game.Game{tx(a, x, y), ty(a, x, y), False{}},
    et => (x, (y, (hp2, {==}))),
    ef => (tx(a, x, y), (ty(a, x, y), (go_ok(a, x, y, hp2, ca, ef), {==}))))

def use4(-a: Game.Move, -x: Nat, -y: Nat,
  w: &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
   & {Game.Game{nx, ny, False{}}
      == Game.move(tx(a, x, y), ty(a, x, y), Game.Game{x, y, False{}}) : Game.Game},
  -P: Type,
  k: @nx: Nat -> @ny: Nat -> @hq: T(okpos(nx, ny))
   -> @eq: {Game.Game{nx, ny, False{}}
            == Game.move(tx(a, x, y), ty(a, x, y), Game.Game{x, y, False{}}) : Game.Game}
   -> P) -> P:
  (nx, w1) = w
  (ny, w2) = w1
  (hq, eq) = w2
  k(nx, ny, hq, eq)

# The theorem's engine: from any safe unwon state, no action list wins.
def run_false(t: List<Game.Move>, x: Nat, y: Nat, hp: T(okpos(x, y)))
  -> {Game.is_won(Game.run(t, Game.Game{x, y, False{}})) == False{} : Bool}:
  match t:
    case Nil{}:
      {==}
    case Con{Game.Up{}, as0}:
      +x2 = x
      +y2 = y
      use4(Game.Up{}, x2, y2, go_pos(Game.Up{}, x2, y2, hp, Unit{}),
        {Game.is_won(Game.run(as0, Game.move(tx(Game.Up{}, x2, y2), ty(Game.Up{}, x2, y2),
          Game.Game{x2, y2, False{}}))) == False{} : Bool},
        nx => ny => hq => eq =>
          %eq : {Game.is_won(Game.run(as0, _)) == False{} : Bool}
          run_false(as0, nx, ny, hq))
    case Con{Game.Down{}, as0}:
      +x2 = x
      +y2 = y
      use4(Game.Down{}, x2, y2, go_pos(Game.Down{}, x2, y2, hp, Unit{}),
        {Game.is_won(Game.run(as0, Game.move(tx(Game.Down{}, x2, y2), ty(Game.Down{}, x2, y2),
          Game.Game{x2, y2, False{}}))) == False{} : Bool},
        nx => ny => hq => eq =>
          %eq : {Game.is_won(Game.run(as0, _)) == False{} : Bool}
          run_false(as0, nx, ny, hq))
    case Con{Game.Left{}, as0}:
      +x2 = x
      +y2 = y
      use4(Game.Left{}, x2, y2, go_pos(Game.Left{}, x2, y2, hp, Unit{}),
        {Game.is_won(Game.run(as0, Game.move(tx(Game.Left{}, x2, y2), ty(Game.Left{}, x2, y2),
          Game.Game{x2, y2, False{}}))) == False{} : Bool},
        nx => ny => hq => eq =>
          %eq : {Game.is_won(Game.run(as0, _)) == False{} : Bool}
          run_false(as0, nx, ny, hq))
    case Con{Game.Right{}, as0}:
      +x2 = x
      +y2 = y
      use4(Game.Right{}, x2, y2, go_pos(Game.Right{}, x2, y2, hp, Unit{}),
        {Game.is_won(Game.run(as0, Game.move(tx(Game.Right{}, x2, y2), ty(Game.Right{}, x2, y2),
          Game.Game{x2, y2, False{}}))) == False{} : Bool},
        nx => ny => hq => eq =>
          %eq : {Game.is_won(Game.run(as0, _)) == False{} : Bool}
          run_false(as0, nx, ny, hq))
    case Con{Game.Grab{}, as0}:
      +x2 = x
      +y2 = y
      +hp2 = hp
      bool_case(Game.nat_eq(x2, Game.flag_x()) && Game.nat_eq(y2, Game.flag_y()),
        z => {Game.is_won(Game.run(as0, Game.Game{x2, y2, z})) == False{} : Bool},
        et => Empty.absurd(
          {Game.is_won(Game.run(as0, Game.Game{x2, y2, True{}})) == False{} : Bool},
          no_flag(x2, y2, hp2, et)),
        ef => run_false(as0, x2, y2, hp2))

# The law, filled: the start cell is safe (checked by computation), and
# run_false carries that safety through any list of actions.
def Laws.you_cant_win(moves):
  run_false(moves, Game.start_x(), Game.start_y(), Unit{})
`;var pe="# Bend, for this lab\n\nBend is a pure, strict, total language: Python's look, affine values, and\na proof checker in the style of Lean, without tactics. A file is `import`\nlines, then `type`, `def` and `law` blocks. Indent with two spaces. One\nstatement per line. `#` starts a comment.\n\n## Files, namespaces, laws\n\n```\nimport Base\nimport ./main.bend as Game\n```\n\n`Base` is the prelude. A file's definitions live under its namespace, so\ninside CERT.bend the game's `step` is `Game.step` and its constructor\n`Up{}` is `Game.Up{}`. A `law` states a type; a `def` of the same name,\nwith bare parameter names, proves it. `def Laws.you_cant_win(moves):` in\nCERT.bend fills the law that LAWS.bend states. An unfilled law, or a\n`?TODO` left in a body, is a TODO: the file still \"checks\" but is\nincomplete, and submit rejects it. `@unsafe` is rejected too. Imports may\nnot form a cycle: LAWS.bend imports main.bend, so main.bend cannot import\nLAWS.bend or CERT.bend.\n\n```\nlaw name:\n  for x: A          # a parameter; `for +x: A` reusable, `for -x: A` erased\n  R                 # the claim, a type; lets may come before it\n\ndef name(x):\n  body              # the proof: a term of type R\n```\n\n## Definitions and quantities\n\n```\ndef name(x: A, +y: B, -Z: Type) -> R:\n  statements\n  expression\n```\n\nEvery binder has a quantity. `x` is used exactly once (affine). `+y` may\nbe used many times; `+` is allowed only on `Data` (Nat, Bool, U32, String,\nequations, and types declared `is Data`). `-Z` is erased: types and\nproofs that only types mention. Using an affine value twice is the error\n`x (consumed more than once)`. To reuse a value bound without `+`, rebind\nit: `+x = x0`. Dropping a value is free.\n\nStatements: `x = e` (a literal needs its type: `x = {10 : U32}`),\n`+x = e`, `Ctr{a, b} = p` opens a constructor, `(a, b) = p` opens a pair,\n`%e : P` rewrites (below). Expressions: calls `f(a, b)`, constructors\n`Ctr{a, b}`, lambdas `x => body`, pairs `(a, b)`, literals, operators.\nEvery type argument is written out: there are no implicit arguments and\nno unification. A lambda passed to a call takes its type from the callee.\n\nThere is no `if`. `match` opens a parameter or a field, never a computed\nexpression: compute in a helper and match its parameter. Nat patterns are\n`0n` and `1n+p` (`p` the predecessor; `2n+p` also works); Bool `True{}`,\n`False{}`; List `Nil{}`, `Con{h, t}`; `_` catches the rest. Several\nscrutinees: `match a, b:` with `case 0n, 1n+q:`. Matching a `+` parameter\nhands out `+` fields. A match with no cases closes a goal whose scrutinee\nhas type `Empty`.\n\n```\ndef pick(-A: Type, c: Bool, a: A, b: A) -> A:\n  match c:\n    case True{}:\n      a\n    case False{}:\n      b\n```\n\nTermination: a recursive call must pass a structurally smaller argument,\na pattern variable bound by a `match` on that parameter (`Nat.sub(n, 1n)`\nproves nothing; only the pattern does). A def may call itself and the\ndefs above it in the file, never one below: no mutual recursion.\n\n## Types and values\n\n- `Nat`: unary, `0n`, `3n`, `1n+p`. `Nat.add`, `Nat.sub` (floors at 0n),\n  `Nat.mul`, `Nat.double`, `Nat.is_lt`. main.bend defines its own\n  `nat_eq` and `nat_le` answering `Bool`.\n- `Bool`: `True{}`, `False{}`; `a && b` is `Bool.and`, `a || b` is\n  `Bool.or`, `Bool.not(b)`.\n- `U32`: a 32-bit word, `42`; operators need the type: `(a + b : U32)`,\n  `(a < b : U32)` answers `Bool`. Bare `(a + b)` is on `Nat`.\n- `String` `\"abc\"`, `a ++ b` appends; `Char` `'a'`.\n- `List<A>`: `[a, b]`, `Nil{}`, `Con{h, t}`.\n- `Unit` (one value, `Unit{}`), `Empty` (no value), `A & B` pairs `(a, b)`,\n  `Or(A, B)` with `Inl{l}` and `Inr{r}`, `Maybe<A>` with `None{}` and\n  `Some{v}`. `Type` and `Data` are kinds.\n\n```\ntype Move is Data:\n  Up{}\n  Down{}\n\ntype Game is Data:\n  Game{x: Nat, y: Nat, won: Bool}\n```\n\nA type `is Data` may be reused with `+`; `is Type` may not. Fields are\nreached only by matching or by `Game{x, y, w} = g`.\n\n## Propositions and proofs\n\nA proposition is a type and a proof is a term of it. `Unit` is true,\n`Empty` is false, `A -> B` is implication, `@x: A -> B` is \"for all x\",\n`&x: A -> B` is \"exists x\" (built as `(x, proof)`, opened by\n`(x, w) = p`). `{a == b : T}` is equality. Its one proof is `{==}`,\naccepted when both sides compute to the same term: the checker evaluates\ndefinitions, so `{nat_eq(1n, 1n) == True{} : Bool}` is proved by `{==}`.\n`{a != b : T}` is `{a == b : T} -> Empty`. `Empty.absurd(P, e)` proves any\n`P` from `e : Empty`. Base has `Equal.sym(A, a, b, e)`,\n`Equal.trans(A, a, b, c, ab, bc)` and `Equal.cong(A, B, f, a, b, e)`.\n\nCase analysis: matching a parameter refines the goal in each arm. Where\nthe goal mentions `x : Nat`, `match x:` gives a `0n` goal and a `1n+p`\ngoal, both computed as far as they go. Induction: a recursive call is the\ninduction hypothesis, on a structurally smaller argument.\n\nRewriting: `%e : P`, with `e : {a == b : T}` and `P` the goal with `_`\nmarking where `b` sits. The goal must be `P` with `b` at the marks; the\nlines after the rewrite prove `P` with `a` there.\n\n```\ndef IsEven(n: Nat) -> Type:\n  match n:\n    case 0n:\n      Unit\n    case 1n+0n:\n      Empty\n    case 2n+p:\n      IsEven(p)\n\ndef half(n: Nat) -> Nat:\n  match n:\n    case 0n:\n      0n\n    case 1n+0n:\n      0n\n    case 2n+p:\n      1n+half(p)\n\nlaw half_ok:\n  for x: Nat\n  for e: IsEven(x)\n  {Nat.double(half(x)) == x : Nat}\n\ndef half_ok(x, e):\n  match x:\n    case 0n:\n      {==}\n    case 1n+0n:\n      match e:\n    case 2n+p:\n      %half_ok(p, e) : {2n+Nat.double(half(p)) == 2n+_ : Nat}\n      {==}\n```\n\nTruth by computation, the idiom CERT.bend is built on:\n\n```\ndef T(b: Bool) -> Data:\n  match b:\n    case True{}:\n      Unit\n    case False{}:\n      Empty\n```\n\n`T(b)` is `Unit` when `b` computes to `True{}`, so `Unit{}` proves\n`T(check())` whenever `check()` is a closed term that evaluates to True:\nthe checker runs the program and the run is the proof. A hypothesis\n`w : T(a && b)` is split by `and_split(a, b, w, P, wa => wb => ...)`;\n`T(False{})` is `Empty`, so `Empty.absurd(P, w)` closes that arm. A match\non a Bool `c` when the goal mentions a function of `c` needs the goal\nrefined; CERT.bend does it with `bool_case(c, z => Goal[z], et => ...,\nef => ...)`, which gives each arm an equation `{True{} == c : Bool}` or\n`{False{} == c : Bool}` to rewrite with, and `pick_split` does the same\nfor `Game.pick`. Read these kits in CERT.bend before writing new ones.\n\nThe checker is one bidirectional pass with conversion where inference\nmeets checking. An error prints `expected`, `observed`, the context and\nthe line. The pair shows the two terms after evaluation at the exact spot\nthey part: read it, then change the term or the motive so they meet.\n\n## The game and its proof\n\nmain.bend: `Move` (Up, Down, Left, Right, Grab), `Game{x, y, won}`, the\nmap constants (`map_w` 12, `map_h` 8, a room of `room_w` x `room_h` in the\ncorner, the flag at `flag_x`, `flag_y`, the start cell), `wall(x, y)`\n(the room's two walls, and their mirrors on the far edges of the torus),\n`warp_*` (wrapping moves), `move` (a step that a wall refuses), `step`,\n`run`, `replay`, `is_won`, `grid` (the map as text) and `key` (a key's\ncharacter code to the `Maybe<Move>` it plays: a new key is one more line\nthere and one more `Move`).\n\nLAWS.bend states `you_cant_win`: for every `moves: List<Game.Move>`,\n`Game.is_won(Game.replay(Game.start(), moves)) == False{}`.\n\nCERT.bend proves it with a safety invariant, `okpos(x, y)`: the player is\non the map (`x <= 11n`, `y <= 7n`), not inside the room (`x <= 2n` and\n`y <= 2n`), and not on a wall. `chk(a, x, y)` says a move `a` from a safe\ncell lands on a wall (so `move` refuses it) or on a safe cell.\n`chk_all(a, 11n)` conjoins `chk` over every cell and evaluates to True by\ncomputation; `chk_row_at`, `chk_all_at` and `cert` index that certificate\nat open coordinates; `go_ok` and `go_pos` turn it into \"the next cell is\nsafe\"; `no_flag` says a grab from a safe cell never sets `won`, because\nthe flag's cell is in the room; `run_false` carries the invariant through\nany list of moves; the fill starts it at the start cell, safe by\ncomputation (`Unit{}`). The literal numbers in CERT.bend (11n, 7n, 2n,\n1n) mirror main.bend's map: when the map changes, they change with it,\nand `chk_all` must still evaluate to True, which is the geometric fact\nthe checker computes for you.\n\nPractical advice. Keep main.bend's helper shape (`nat_eq`, `nat_le`,\n`wall`, `pick`, `warp_*`, `move`, `step`, `run`, `replay`), so most of\nCERT.bend survives an edit. Change one thing, submit, read the first\nerror, fix, submit again. A feature that opens\na path into the room (a hole, a wrap, a teleport, a bigger map) keeps the\nlaw only if something still seals the room: a wall where the path would\nenter is the usual answer. When the literal request breaks the proof,\nbuild the closest version that keeps the law, and say what changed. Only\n\"let me win\" itself has no lawful version.\n";var N2="gpt-5.6-luna",M2="https://api.openai.com/v1/responses",ai=60,$a="/game/",fe=["main.bend","LAWS.bend","CERT.bend"],w2=[119,115,97,100,32],s2={ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d"},S2="The front end needs, in main.bend: `type Game is Data` with fields x: Nat, y: Nat, won: Bool, in that order; start() -> Game; replay(g: Game, moves: List<Move>) -> Game; is_won(g: Game) -> Bool; map_w() -> Nat; map_h() -> Nat; grid(y: Nat) -> String, rows 0..y joined by newlines, one character per cell: '#' wall, 'F' flag, 'P' the start, '.' floor; and key(k: U32) -> Maybe<Move>. Every key press reaches key() as its character code (letters lowercased: 'w' is 119, 'j' is 106; space is 32; the arrow keys arrive as w, a, s, d) and the front end plays the move it answers: Some{m} plays m, None{} does nothing. So a new key is: a constructor in Move, a case in step, a line in key, and the matching cases in CERT.bend. The player is drawn at (x, y) and the level from grid(map_h() - 1n). Anything else may change.",l2=`You are the AI inside a lab on Bend's website. A player is playing Winning Is A Bug, a small game written in Bend, and asks you to change it. You edit the game and its proof; Bend checks your work; the player watches.

Files (use the tools):
- main.bend: the game. Edit freely.
- LAWS.bend: the human's law, you_cant_win. Read-only.
- CERT.bend: the proof of the law about the current main.bend. Edit freely. After any change to main.bend, the proof must pass again: repair it.

Rules:
1. Do what the player asks, as literally as you can. When the literal change breaks the proof (submit rejects it), do not give up and do not water the request down to nothing: find a creative workaround that honors the request as closely as possible and still passes the checker. A wrap-around gets a wall on the far edge; a teleport lands outside the room; a bigger map keeps the room sealed; 'remove the walls' removes every wall but the room's. Ship the closest lawful version, and tell the player what you kept and what the law made you change. Only a request that is nothing but 'let me win' has no lawful version: then say so in one sentence.
2. `+S2+`
3. Work in this order: read the files, edit main.bend, and submit at once, before touching CERT.bend, every time you change the game. The player is watching, and that first submit is where they see Bend catch the change against the law: never skip it, even when you expect the proof to break. Only submit runs the checker: it checks main.bend, then main.bend, LAWS.bend and CERT.bend together, and answers the first error with its file and location. Then repair CERT.bend, submit again, and repeat until it is accepted. Do not stop before submit is accepted or the request is shown to be unlawful.
4. Say what you did at the end, in two or three plain sentences for the player.

The Bend guide follows.

`+pe,yi={"main.bend":me,"LAWS.bend":ke,"CERT.bend":_e};_.set("/bend2/base.bend",be);for(let a of fe)_.set($a+a,yi[a]);_.set($a+"ALL.bend",`import Base
import ./main.bend as Game
import ./LAWS.bend as Laws
import ./CERT.bend as Cert
`);var ne=null;async function g2(){if(ne===null){let a=aa();await ta(a,"/bend2/base.bend","",new Map),ne=new Set(a.order)}return ne}function Un(a){let e=a;return e?.$==="Err"?Ye(e):String(a?.message??a)}async function In(a){let e=aa();try{await ta(e,$a+a,"",new Map),ae(e)}catch(y){return{ok:!1,text:Un(y),hols:0,uns:0}}let n=await g2(),i=[...new Set(e.order)].filter((y)=>!n.has(y)&&e.tlds[y].u===!0).length,o=e.hols>0?String(e.hols)+(e.hols===1?" TODO":" TODOs")+` found.
The code is incomplete, and not a valid proof yet.`:i>0?String(i)+(i===1?" term":" terms")+` annotated as unsafe.
The code is well-typed, but may contain logical paradoxes.`:"All terms check.";return{ok:e.hols===0&&i===0,text:o,book:e,hols:e.hols,uns:i}}class Pn{book;constructor(a){this.book=a}ev(a,e){let n=this.book,i=n.order.length;try{return pn(n,$a,"def RUN() -> "+a+`:
  `+e+`
`,"",Object.create(null)),ae(n,i),va(A(R(n,n.tlds.RUN.v)))}finally{for(let o of n.order.splice(i))delete n.tlds[o]}}state(a){let e=/^Game\{(\d+)n, (\d+)n, (True|False)\{\}/.exec(a);if(e===null)throw Error("Game must keep the fields x: Nat, y: Nat, won: Bool, in that order (start() answered "+a+")");return{x:Number(e[1]),y:Number(e[2]),won:e[3]==="True",term:a}}start(){return this.state(this.ev("Game","start()"))}replay(a,e){return this.state(this.ev("Game","replay("+a.term+", ["+e+"])"))}key(a){let e=/^Some\{(.*)\}$/.exec(this.ev("Maybe<Move>","key("+a+")"));return e===null?null:e[1]}nat(a){return Number(this.ev("Nat",a+"()").replace(/n$/,""))}grid(){return JSON.parse(this.ev("String","grid(Nat.sub(map_h(), 1n))"))}}function ci(a){for(let e of["start","replay","is_won","map_w","map_h","grid","key"])if(a.book.tlds[e]?.$!=="Def")return"main.bend must keep a def named "+e;try{let e=a.start(),n=a.nat("map_h"),i=a.nat("map_w"),o=a.grid().split(`
`);if(o.length!==n||o.some((y)=>y.length!==i))return"grid(map_h() - 1n) must answer map_h() rows of map_w() cells";for(let y of w2){let c=a.key(y);if(c!==null)a.replay(e,c)}if(!/^(True|False)\{\}$/.test(a.ev("Bool","is_won("+e.term+")")))return"is_won must answer a Bool"}catch(e){return Un(e)}return null}var on,E,rn=[],ie=12,oe=8,ye=new Set,yn=null,he=0,Ue=0,Aa=null,ra=null;function Te(a){on=a,E=on.start(),rn=on.grid().split(`
`),oe=rn.length,ie=Math.max(...rn.map((e)=>e.length)),ye=new Set,yn=null,rn.forEach((e,n)=>[...e].forEach((i,o)=>{if(i==="#")ye.add(o+","+n);if(i==="F")yn=[o,n]})),he=Ue=0,Aa=ra=null}function F2(a){let e;try{if(e=on.key(a),e===null)return!1;let{x:n,y:i}=E;E=on.replay(E,e);let o=e.replace(/\{.*$/,""),y={Up:[0,-1],Down:[0,1],Left:[-1,0],Right:[1,0]}[o];if(o==="Grab")Ue+=1;else if(he+=1,E.x===n&&E.y===i&&y!==void 0)ra={dx:y[0],dy:y[1],t0:performance.now()};else if(Math.abs(E.x-n)<=1&&Math.abs(E.y-i)<=1)Aa={fx:n,fy:i,t0:performance.now()}}catch(n){return fn("bad","the game crashed: "+Un(n)),!0}return Ne(),!0}var fa={floor:["#f3efe8","#e5e1d9"],wall:"#a6a3a0",cap:"#bebbb8",pole:"#87847d",cloth:"#7e9a5e",skin:"#78c0e3",eye:"#2f3b4c",win:"#f6e4e1",winRim:"#dfa9a2",winInk:"#c46a60"},W2='ui-monospace,Menlo,"SF Mono",Consolas,monospace',ni=(a,e,n)=>a+(e-a)*n;function B2(a,e){let n=a.getContext("2d"),i=a.clientWidth,o=window.devicePixelRatio||1,y=i/ie,c=y*oe;if(a.width!==Math.round(i*o)||a.height!==Math.round(c*o))a.width=Math.round(i*o),a.height=Math.round(c*o);n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,i,c);let d=(N,w,s,u,D,x)=>{n.fillStyle=x,n.beginPath(),n.roundRect(N,w,s,u,D),n.fill()};for(let N=0;N<oe;N++)for(let w=0;w<ie;w++){let s=w*y+1.5,u=N*y+1.5,D=y-3;if(!ye.has(w+","+N)){d(s,u,D,D,y/8,fa.floor[(w+N)%2]);continue}d(s,u,D,D,y/8,fa.wall),d(w*y+y/8,N*y+y/8,y*0.75,y*0.21,y/19,fa.cap)}let f=y/40;if(yn!==null&&!E.won){let N=yn[0]*y,w=yn[1]*y;n.strokeStyle=fa.pole,n.lineWidth=2.5,n.lineCap="round",n.beginPath(),n.moveTo(N+14*f,w+31*f),n.lineTo(N+14*f,w+9*f),n.stroke(),n.fillStyle=fa.cloth,n.beginPath(),n.moveTo(N+15*f,w+9*f),n.lineTo(N+31*f,w+14.5*f),n.lineTo(N+15*f,w+20*f),n.closePath(),n.fill()}let{x:h,y:T}=E;if(Aa!==null){let N=Math.min((e-Aa.t0)/90,1);if(h=ni(Aa.fx,h,N),T=ni(Aa.fy,T,N),N===1)Aa=null}if(ra!==null){let N=(e-ra.t0)/120;if(N<1)h+=ra.dx*0.3*(1-N),T+=ra.dy*0.3*(1-N);else ra=null}let U=h*y+y/2,M=T*y+y/2;if(n.fillStyle=fa.skin,n.beginPath(),n.arc(U,M,12.5*f,0,Math.PI*2),n.fill(),n.fillStyle=fa.eye,n.beginPath(),n.arc(U-4.5*f,M-2*f,2.2*f,0,Math.PI*2),n.arc(U+4.5*f,M-2*f,2.2*f,0,Math.PI*2),n.fill(),E.won){let N=y*5.6,w=y*1.5,s=(i-N)/2,u=(c-w)/2;n.fillStyle=fa.win,n.strokeStyle=fa.winRim,n.lineWidth=1.5,n.beginPath(),n.roundRect(s,u,N,w,10),n.fill(),n.stroke(),n.fillStyle=fa.winInk,n.font="600 "+y*0.6+"px "+W2,n.textAlign="center",n.fillText("YOU WON !?",i/2,u+w*0.66)}}var Da={type:"string"},Cn=(a,e,n)=>({type:"function",name:a,description:e,strict:!0,parameters:{type:"object",properties:n,required:Object.keys(n),additionalProperties:!1}}),G2=[Cn("read_file","Read one of the files. Paths: main.bend, LAWS.bend, CERT.bend.",{path:Da}),Cn("write_file","Replace the whole content of main.bend or CERT.bend. LAWS.bend is read-only.",{path:Da,content:Da}),Cn("edit_file","Replace one exact occurrence of `old` with `new` in main.bend or CERT.bend. `old` must occur exactly once, indentation included.",{path:Da,old:Da,new:Da}),Cn("submit","Submit the files. Bend checks main.bend, then main.bend, LAWS.bend and CERT.bend together: no error, the law you_cant_win proved, no TODO, no @unsafe, LAWS.bend untouched, and the front end's API intact. Accepted work goes live at once. A rejection answers the first error with its file and location: fix it and submit again.",{})];async function di(){if(_.get($a+"LAWS.bend")!==yi["LAWS.bend"])return{game:!1,text:"LAWS.bend was changed"};let a=await In("main.bend");if(!a.ok)return{game:!1,text:"main.bend: "+a.text};let e=await In("ALL.bend");if(!e.ok){let o=e.book?.tlds["LAWS.you_cant_win"];return{game:!1,text:o!==void 0&&o.v===null?"the law you_cant_win has no proof: CERT.bend must fill def Laws.you_cant_win":"CERT.bend: "+e.text}}let n=new Pn(a.book),i=ci(n);if(i!==null)return{game:!0,text:i};return Te(n),Ne(),null}var Za=null;async function fi(a,e){let n=String(e.path??"").replace(/^\.?\//,"");if(a!=="submit"&&!fe.includes(n))return"no such file: "+n+" (the files are main.bend, LAWS.bend, CERT.bend)";let i=$a+n;switch(a){case"read_file":return _.get(i);case"write_file":if(n==="LAWS.bend")return"LAWS.bend is the human's file: read-only.";return _.set(i,e.content),"wrote "+n+" ("+e.content.split(`
`).length+" lines)";case"edit_file":{if(n==="LAWS.bend")return"LAWS.bend is the human's file: read-only.";let o=_.get(i),y=o.split(e.old).length-1;if(y!==1)return y===0?"old text not found in "+n+" (it must match exactly, indentation included)":"old text occurs "+y+" times in "+n+"; include more context so it is unique";return _.set(i,o.replace(e.old,()=>e.new)),"edited "+n}case"submit":return Za=await di(),Za===null?"Accepted. The new game is live.":"Rejected: "+Za.text;default:return"unknown tool "+a}}async function hi(a,e,n){let i=await fetch(M2,{method:"POST",signal:e,headers:{"Content-Type":"application/json",Authorization:"Bearer "+zn()},body:JSON.stringify(a)});if(!i.ok){let f=i.status+" "+i.statusText;try{f=(await i.json()).error?.message??f}catch{}throw Error(f)}let o=i.body.getReader(),y=new TextDecoder,c="",d=null;for(;;){let{value:f,done:h}=await o.read();if(h)break;c+=y.decode(f,{stream:!0});let T;while((T=c.indexOf(`

`))>=0){let U=c.slice(0,T);c=c.slice(T+2);let M=U.split(`
`).filter((w)=>w.startsWith("data:")).map((w)=>w.slice(5).trim()).join(`
`);if(M===""||M==="[DONE]")continue;let N=JSON.parse(M);if(N.type==="response.completed"||N.type==="response.incomplete")d=N.response;else if(N.type==="response.failed"||N.type==="error")throw Error(N.error?.message??N.response?.error?.message??"the model failed");else n(N)}}if(d===null)throw Error("the stream ended before the response completed");return d}var Kn=!1,On=null,ee=!0,Vn=null;async function A2(a){Kn=!0,On=new AbortController;let e=On.signal;Ca("u",a),hn();let n=!1,i=!1,o=0,y=[{role:"user",content:a}];try{for(;;){let c=ii("th"),d=ii("a"),f=[],h=()=>hi({model:de(),instructions:l2,input:y,tools:G2,previous_response_id:Vn,stream:!0,store:!0,reasoning:ee?{effort:"high",summary:"auto"}:{effort:"high"}},e,(U)=>{if(U.type==="response.reasoning_summary_text.delta")c.add(U.delta);else if(U.type==="response.reasoning_summary_part.added")c.add(c.text()?`

`:"");else if(U.type==="response.output_text.delta")d.add(U.delta);else if(U.type==="response.output_item.done"&&U.item.type==="function_call")f.push(U.item)});if(Vn=(await h().catch((U)=>{let M=String(U?.message);if(ee&&/summar/i.test(M))return ee=!1,h();if(Vn!==null&&/previous_response|not found/i.test(M))return Vn=null,h();throw U})).id,f.length===0){if(i||n)break;n=!0,y=[{role:"user",content:"You stopped without calling submit. If the change is done, call submit now. If it cannot be done under the law, say so in one or two sentences."}];continue}y=[];for(let U of f){let M={};try{M=JSON.parse(U.arguments||"{}")}catch{}let N=await fi(U.name,M);if(C2(U.name,M,N),U.name==="submit"&&N.startsWith("Accepted"))i=!0;y.push({type:"function_call_output",call_id:U.call_id,output:N}),o+=1}if(o>=ai){fn("bad","Stopped after "+ai+" tool calls. Send another prompt to go on.");break}}}catch(c){fn(e.aborted?"dim":"bad",e.aborted?"Stopped.":"Error: "+Un(c))}Kn=!1,On=null,hn()}var r2=`
html.lab body{max-width:none;padding:0;margin:0;display:flex;height:100vh;overflow:hidden}
html.lab #page{flex:1 1 50%;min-width:0;height:100vh;overflow-y:auto}
html.lab #pagein{max-width:65ch;margin:0 auto;padding:0 2ch 4em}
#lab{display:none;flex:1 1 50%;min-width:0;height:100vh;flex-direction:column;border-left:1px solid var(--line);background:var(--bg)}
html.lab #lab{display:flex}
@media (max-width:1000px){html.lab #page{display:none}#lab{flex-basis:100%;border:0}}
#lab .top{flex:none;padding:1.2em 2ch 1.2em;background:#eeeae2}
#lab .hd{display:flex;justify-content:space-between;color:var(--b1);font-size:.87em}
#lab .hd b{color:var(--b02)}
#lab .hd a{color:var(--b0);border:0;cursor:pointer}
#lab canvas{display:block;width:100%;max-width:30em;margin:.8em auto 0}
#lab .st{text-align:center;color:var(--b1);font-size:.87em;margin:.5em 0 0}
#lab .st.won{color:var(--red);font-weight:600}
#lab .how{max-width:30em;margin:1.2em auto 0;text-align:center;white-space:pre-line;color:var(--b01)}
#lab .how b{color:var(--b02)}
#lab .how em{font-style:normal;color:var(--grn);font-weight:600}
#lab .chat{flex:1;overflow-y:auto;padding:.4em 2ch 1em;border-top:1px solid var(--line)}
#lab .chat>div{margin:.8em 0;white-space:pre-wrap;overflow-wrap:anywhere}
#lab .u{color:var(--b02)}
#lab .u::before{content:"> ";color:var(--vio);font-weight:600}
#lab .th{color:var(--b1);font-style:italic}
#lab .th::before{content:"thinking\\A";font-style:normal;font-size:.8em}
#lab .tc{color:var(--b00);margin-bottom:.2em}
#lab .tc::before{content:"$ ";color:var(--b1)}
#lab .chat pre{margin:.2em 0 0;padding:.6em 1ch;font-size:.87em;white-space:pre-wrap;background:var(--bg2);border-radius:3px;color:var(--b01)}
#lab pre.err{color:var(--red)}
#lab pre.good{color:var(--grn)}
#lab .ok{color:var(--grn);font-weight:600}
#lab .bad{color:var(--red)}
#lab a.bad{display:inline-block;margin-top:.4em;border-bottom:1px solid #e3b7b2;cursor:pointer;font-weight:600}
#lab .tc .ok{margin-top:.4em}
#lab a.bad:hover{border-bottom-color:var(--red)}
#lab .dim{color:var(--b1)}
#lab details{margin-top:.2em}
#lab summary{cursor:pointer;color:var(--b1);font-size:.87em}
#lab .in{flex:none;padding:.8em 2ch 1em;border-top:1px solid var(--line)}
#lab .box{display:flex;gap:1ch;align-items:flex-start;background:var(--bg2);border-radius:3px;padding:.6em 1ch}
#lab .box span{color:var(--vio);font-weight:600}
#lab textarea,#lab input{flex:1;border:0;background:none;font:inherit;color:var(--b02);resize:none;outline:none;padding:0;margin:0;min-width:0}
#lab textarea{height:1.6em;max-height:10em}
#lab textarea::placeholder,#lab input::placeholder{color:var(--b1)}
#lab .meta{display:flex;justify-content:space-between;gap:2ch;color:var(--b1);font-size:.8em;margin-top:.5em}
#lab .meta a{color:var(--b0);border:0;cursor:pointer}
#lab .meta a:hover{color:var(--vio)}
`;function F(a,e={},...n){let i=document.createElement(a);for(let[o,y]of Object.entries(e))i.setAttribute(o,y);return i.append(...n),i}var ei,Ja,un,cn,Q,Na,dn,Ra,ce=!1,zn=()=>localStorage.getItem("bend.lab.key")??"",de=()=>localStorage.getItem("bend.lab.model")??N2;function Ne(){if(cn===void 0)return;cn.textContent=E.won?"YOU WON?! Impossible: please file a bug.":"moves "+he+" · grabs "+Ue+" · still not won",cn.classList.toggle("won",E.won)}function Ln(){Ja.scrollTop=Ja.scrollHeight}function Ca(a,e){let n=F("div",{class:a},e);return Ja.append(n),Ln(),n}var fn=(a,e)=>{if(Ja!==void 0)Ca(a,e)};function ii(a){let e=null;return{add:(n)=>{if(e===null)e=Ca(a,"");e.append(n),Ln()},text:()=>e?.textContent??""}}function C2(a,e,n){let i=e.path??"",o=(c,d)=>F("pre",{class:c},d),y=(c,...d)=>F("details",{},F("summary",{},c),...d);if(a==="read_file")Ca("tc","read "+i);else if(a==="write_file")Ca("tc","write "+i).append(fe.includes(i)&&i!=="LAWS.bend"?y(n,o("",e.content)):o("err",n));else if(a==="edit_file")Ca("tc","edit "+i).append(n.startsWith("edited")?y(n,o("","- "+e.old.split(`
`).join(`
- `)+`
+ `+e.new.split(`
`).join(`
+ `))):o("err",n));else if(a==="submit"){let c=Ca("tc","submit");if(Za===null)c.append(F("div",{class:"ok"},"✓ Accepted. The new game is live: play it above."));else{let d=F("a",{class:"bad"},"Your program broke the "+(Za.game?"game":"law")+". Try again."),f=o("err",Za.text);f.hidden=!0,d.onclick=()=>{f.hidden=!f.hidden,Ln()},c.append(`
`,d,f)}}Ln()}function hn(){if(dn.replaceChildren(),Kn){let n=F("a",{},"stop");n.onclick=()=>On?.abort(),dn.append(F("span",{},"working…"),n),Q.disabled=!0;return}Q.disabled=!1;let a=F("a",{title:"change the model"},de());a.onclick=()=>{let n=prompt("OpenAI model id",de());if(n)localStorage.setItem("bend.lab.model",n.trim()),hn()};let e=F("a",{title:"change the key"},zn()?"key ····"+zn().slice(-4):"no key");e.onclick=()=>{Ra.replaceChildren(F("span",{},"key"),Na),Na.focus()},dn.append(F("span",{},a," · thinking high · ",e),F("span",{},"byok · your key stays in this browser"))}function V2(){let a=Q.value.trim();if(a===""||Kn)return;if(zn()===""){Ra.replaceChildren(F("span",{},"key"),Na),Na.focus(),fn("dim","Paste your OpenAI API key first. It is kept in this browser only and sent to api.openai.com alone.");return}Q.value="",Q.style.height="",A2(a)}function u2(){document.head.append(F("style",{},r2)),un=F("canvas"),cn=F("p",{class:"st"});let a=F("a",{title:"close"},"×");a.onclick=()=>Ui(!1),Q=F("textarea",{placeholder:"make the walls disappear",rows:"1"}),Q.oninput=()=>{Q.style.height="",Q.style.height=Math.min(Q.scrollHeight,150)+"px"},Q.onkeydown=(o)=>{if(o.key==="Enter"&&!o.shiftKey)o.preventDefault(),V2();if(o.key==="Escape")Q.blur()},un.onclick=()=>Q.blur(),Na=F("input",{type:"password",placeholder:"OpenAI API key, then Enter",autocomplete:"off"}),Na.onkeydown=(o)=>{if(o.key==="Enter")localStorage.setItem("bend.lab.key",Na.value.trim()),Na.value="",Ra.replaceChildren(F("span",{},">"),Q),hn(),Q.focus();else if(o.key==="Escape")Ra.replaceChildren(F("span",{},">"),Q),Q.focus()},Ra=F("div",{class:"box"},F("span",{},">"),Q),dn=F("div",{class:"meta"}),Ja=F("div",{class:"chat"}),ei=F("div",{id:"lab"},F("div",{class:"top"},F("div",{class:"hd"},F("span",{},F("b",{},"Winning Is A Bug")," · the lab"),a),un,cn,F("p",{class:"how"},F("b",{},"Grab the flag to win."),`
`,F("span",{class:"dim"},"WASD to move · space to grab"),`

`,"Can't win? Ask the AI below to ",F("b",{},"change the rules"),`.
You can ask `,F("b",{},"anything"),". Bend guards it. Good luck!")),Ja,F("div",{class:"in"},Ra,dn));let e=F("div",{id:"page"}),n=F("div",{id:"pagein"});while(document.body.firstChild)n.append(document.body.firstChild);e.append(n),document.body.append(e,ei),document.addEventListener("keydown",(o)=>{if(!ce)return;let y=o.target;if(y===Q||y===Na||o.metaKey||o.ctrlKey||o.altKey)return;let c=s2[o.key]??o.key;if(c.length!==1)return;if(F2(c.toLowerCase().charCodeAt(0)))o.preventDefault()});let i=(o)=>{if(ce)B2(un,o);requestAnimationFrame(i)};requestAnimationFrame(i)}function Ui(a){let e=document.getElementById("page"),n=a?window.scrollY:e.scrollTop;if(ce=a,document.documentElement.classList.toggle("lab",a),a)e.scrollTop=n;else window.scrollTo(0,n);if(a)Ne(),hn()}async function oi(){let a=document.getElementById("try");if(a===null)return;u2();let e=null,n=()=>{return e??=In("main.bend").then((i)=>{Te(new Pn(i.book)),Ui(!0)}),e.catch((i)=>fn("bad","the game did not compile: "+Un(i))),e};if(a.addEventListener("click",(i)=>{i.preventDefault(),n()}),location.hash==="#lab")n()}if(typeof document<"u")if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",oi);else oi();})();
