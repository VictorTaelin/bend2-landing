(()=>{var{defineProperty:Dn,getOwnPropertyNames:Mi,getOwnPropertyDescriptor:wi}=Object,si=Object.prototype.hasOwnProperty;function Si(a){return this[a]}var Fi=(a)=>{var e=(Se??=new WeakMap).get(a),n;if(e)return e;if(e=Dn({},"__esModule",{value:!0}),a&&typeof a==="object"||typeof a==="function"){for(var i of Mi(a))if(!si.call(e,i))Dn(e,i,{get:Si.bind(a,i),enumerable:!(n=wi(a,i))||n.enumerable})}return Se.set(a,e),e},Se;var li=(a)=>a;function gi(a,e){this[a]=li.bind(null,e)}var Wi=(a,e)=>{for(var n in e)Dn(a,n,{get:e[n],enumerable:!0,configurable:!0,set:gi.bind(e,n)})};var I2={};Wi(I2,{verify:()=>fi,tool:()=>Ui,respond:()=>hi,level:()=>Me,check:()=>In,api_check:()=>di,Game:()=>Ln});var _=new Map;function Rn(a){return _.has(a)}function Zn(a){return a}function Fe(a){let e=_.get(a);if(e===void 0)throw Error("ENOENT: no such file: "+a);return e}function le(){}function ge(a,e){_.set(a,e)}function We(){return"/"}function Jn(a){let e=a.startsWith("/"),n=[];for(let i of a.split("/")){if(i===""||i===".")continue;if(i===".."&&n.length>0&&n[n.length-1]!=="..")n.pop();else if(i!==".."||!e)n.push(i)}return(e?"/":"")+(n.join("/")||(e?"":"."))}function $n(...a){return Jn(a.join("/"))}function Be(...a){return Jn("/"+a.join("/"))}function Xn(a){let e=a.lastIndexOf("/");return e<0?".":e===0?"/":a.slice(0,e)}var Nn={normalize:Jn,join:$n,dirname:Xn};function Ge(a){return decodeURIComponent(String(a).replace(/^file:\/\//,""))}function Z(a,e,n,i){return{$:"Var",k:a,i:e,s:n,v:i}}function I(a,e,n){return{$:"Ref",k:a,s:e,b:n}}function ja(a,e,n,i){return{$:"Sub",i:a,v:e,f:n,s:i}}function an(a,e,n,i,y,o){return{$:"Let",k:a,i:e,q:o??a.map(()=>K()),v:n,f:i,s:y}}function D(a,e){return{$:"Typ",g:a,s:e}}function wa(a){return{$:"Qnt",s:a}}function Y(a,e){return{$:"Qua",q:a,s:e}}function Wa(a,e,n){return{$:"Min",a,b:e,s:n}}function b(a,e,n,i,y,o){return{$:"All",q:a,k:e,i:n,A:i,B:y,s:o}}function m(a,e,n,i){return{$:"Lam",k:a,i:e,f:n,s:i}}function O(a,e,n){return{$:"App",f:a,x:e,s:n}}function fa(a,e,n,i=[]){return{$:"ADT",k:a,x:e,r:i,s:n}}function J(a,e,n){return{$:"Ctr",k:a,x:e,s:n}}function Ba(a,e,n,i){return{$:"Mat",k:a,h:e,m:n,s:i}}function va(a){return{$:"Efq",s:a}}function sa(a,e,n,i){return{$:"Eql",a,b:e,T:n,s:i}}function za(a){return{$:"Rfl",s:a}}function nn(a,e,n,i){return{$:"Rwt",e:a,p:e,f:n,s:i}}function en(a,e){return{$:"Hol",k:a,s:e}}function Ga(a,e,n){return{$:"Ann",x:a,T:e,s:n}}function ve(){return{$:"Emp"}}function Qa(a,e,n){return{$:"Bin",v:a,l:e,r:n}}function Q(){return{$:"None"}}function K(){return{$:"Lone"}}function Sa(){return{$:"Many"}}function ya(a,e,n){return{tm:Ga(a,Z("_",-1,void 0,e)),ty:e,us:n}}function Ma(a,e,n){return{tm:Ga(a,Z("_",-1,void 0,e)),us:n}}function S(a,e,n,i,y,o){return{$:"Err",bok:a,ctx:e,exp:n,obs:i,spn:y,def:o}}function La(a){let e=a.charCodeAt(0);return e>=65&&e<=90||e>=97&&e<=122||e===95}function xa(a){let e=a.charCodeAt(0);return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===95||e===46}function De(a,e){let n=a,i=e;while(!0)switch(n.$){case"Emp":return null;case"Bin":{if(i===0)return n.v;let y=i%2===1;n=y?n.l:n.r,i=y?(i-1)/2:(i-2)/2;break}}}function Ia(a,e,n){switch(a.$){case"Emp":return Ia(Qa(null,a,a),e,n);case"Bin":{if(e===0)return Qa(n,a.l,a.r);if(e%2===1){let y=Ia(a.l,(e-1)/2,n);return Qa(a.v,y,a.r)}let i=Ia(a.r,(e-2)/2,n);return Qa(a.v,a.l,i)}}}function Sn(a,e,n){switch(a.$){case"Emp":return e;case"Bin":switch(e.$){case"Emp":return a;case"Bin":{let i=a.v===null?e.v:e.v===null?a.v:n(a.v,e.v),y=Sn(a.l,e.l,n),o=Sn(a.r,e.r,n);return Qa(i,y,o)}}}}function Ea(a,e=0,n=1){switch(a.$){case"Emp":return[];case"Bin":{let i=a.v===null?[]:[[e,a.v]],y=Ea(a.l,e+n*1,n*2),o=Ea(a.r,e+n*2,n*2);return i.concat(y,o)}}}function Bi(a,e){for(let n=a;n!==null;n=n.n)if(n.k===e)return n.v;return null}function Ha(a,e,n){return{k:e,v:n,n:a}}function Re(a,e){switch(a.$){case"None":return e;default:switch(e.$){case"None":return a;default:return Sa()}}}function Ze(a,e){switch(a.$){case"None":return e;case"Lone":switch(e.$){case"Many":return Sa();default:return K()}case"Many":return Sa()}}function Gi(a,e){switch(a.$){case"None":return Q();case"Lone":return e;case"Many":return Re(e,e)}}function Fn(a,e){if(a.$==="None")return Q();else return e}function Ae(a,e,n,i,y,o,c){if(Ze(y,i).$!==i.$){let d=Wn(y)+n;if(y.$==="Many")d=n+" (consumed more than once)";throw S(a,e,Wn(i)+n,d,o,c)}}function t(){return ve()}function re(a,e){return De(a,e)??Q()}function Fa(a,e){return Sn(a,e,Re)}function Ai(a,e){return Sn(a,e,Ze)}function Ve(a,e){return Ia(a,e,Q())}function En(a,e,n,i=[]){if(n===0)return p(a,J(e,i));else return m("_",0,(y)=>{return En(a,e,n-1,[...i,y])})}function Je(a,e){return a.u===!0&&e.$==="Many"?K():e}function ri(a,e){let n=Gn(a.t)[1],i="EQ";for(let y=0;y<n.length&&y<e.length&&i==="EQ";y++)i=Qn(a.qs[y],e[y],n[y]);return i}function p(a,e,n){let i=k(a);if(i.$==="Lam")return i.f(e);return O(i,e,n)}function Gn(a){let e=[],n=a;while(!0)switch(n.$){case"App":{e.push(n.x),n=n.f;break}default:return e.reverse(),[n,e]}}function E(a,e="_"){if(a.$==="Var"&&a.i<0)return a;return Z(e,-1,a.s,a)}function Vi(a){switch(a.$){case"Ctr":return J(a.k,a.x.map((e)=>E(e)),a.s);case"ADT":return fa(a.k,a.x.map((e)=>E(e)),a.s,a.r);case"All":return b(a.q,a.k,a.i,E(a.A),a.B,a.s);case"Mat":return Ba(a.k,E(a.h),E(a.m),a.s);case"Eql":return sa(E(a.a),E(a.b),E(a.T),a.s);case"Min":return Wa(E(a.a),E(a.b),a.s);case"Typ":return D(E(a.g),a.s);default:return a}}function ta(a){while(a.$==="Var"&&a.v!==void 0)a=a.v;return a}function k(a){let e=ta(a);while(e.$==="Ann")e=ta(e.x);return e}function B(a,e=null){switch(a.$){case"Var":{if(a.i<0)return a;let n=Bi(e,a.i);if(n===null)return I(a.k,a.s);else return n}case"Ref":return I(a.k[0]==="."?"Nat"+a.k:a.k,a.s,a.b);case"Sub":{let n=B(a.v,e);return B(a.f,Ha(e,a.i,n))}case"Let":{let n=a,i=n.v.map((y)=>B(y,e));return an(n.k,n.i,i,(y)=>{let o=e;for(let c=0;c<y.length;c++)o=Ha(o,n.i[c],y[c]);return B(n.f,o)},n.s,n.q)}case"Typ":return D(B(a.g,e),a.s);case"Qnt":case"Qua":return a;case"Min":return Wa(B(a.a,e),B(a.b,e),a.s);case"All":{let n=a,i=B(n.A,e);return b(n.q,n.k,n.i,i,(y)=>{return B(n.B,Ha(e,n.i,y))},n.s)}case"Lam":{let n=a;return m(n.k,n.i,(i)=>{return B(n.f,Ha(e,n.i,i))},n.s)}case"App":return O(B(a.f,e),B(a.x,e),a.s);case"ADT":return fa(a.k,a.x.map((n)=>B(n,e)),a.s,a.r);case"Ctr":return J(a.k,a.x.map((n)=>B(n,e)),a.s);case"Mat":return Ba(a.k,B(a.h,e),B(a.m,e),a.s);case"Efq":return va(a.s);case"Eql":return sa(B(a.a,e),B(a.b,e),B(a.T,e),a.s);case"Rfl":return za(a.s);case"Rwt":return nn(B(a.e,e),B(a.p,e),B(a.f,e),a.s);case"Hol":return en(a.k,a.s);case"Ann":return Ga(B(a.x,e),B(a.T,e),a.s)}}function A(a,e=0){let n=ta(a);switch(n.$){case"Var":return Z(n.k,n.i,n.s);case"Ref":return I(n.k,n.s,n.b);case"Sub":return ja(n.i,A(n.v,e),A(n.f,e),n.s);case"Let":{let i=n.k.map((o,c)=>Z(o,e+c)),y=n.v.map((o)=>A(o,e));return an(n.k,i.map((o,c)=>e+c),y,A(n.f(i),e+n.k.length),n.s,n.q)}case"Typ":return D(A(n.g,e),n.s);case"Qnt":case"Qua":return n;case"Min":return Wa(A(n.a,e),A(n.b,e),n.s);case"All":{let i=Z(n.k,e);return b(n.q,n.k,e,A(n.A,e),A(n.B(i),e+1),n.s)}case"Lam":{let i=Z(n.k,e);return m(n.k,e,A(n.f(i),e+1),n.s)}case"App":return O(A(n.f,e),A(n.x,e),n.s);case"ADT":return fa(n.k,n.x.map((i)=>A(i,e)),n.s,n.r);case"Ctr":return J(n.k,n.x.map((i)=>A(i,e)),n.s);case"Mat":return Ba(n.k,A(n.h,e),A(n.m,e),n.s);case"Efq":return va(n.s);case"Eql":return sa(A(n.a,e),A(n.b,e),A(n.T,e),n.s);case"Rfl":return za(n.s);case"Rwt":return nn(A(n.e,e),A(n.p,e),A(n.f,e),n.s);case"Hol":return en(n.k,n.s);case"Ann":return Ga(A(n.x,e),A(n.T,e),n.s)}}function Qn(a,e,n){switch(a.$){case"None":return"EQ";default:break}let i=k(e),y=k(n);switch(y.$){case"Var":if(i.$==="Var"&&i.i===y.i)return"EQ";else return"GT";case"Ctr":{if(i.$==="Ctr"&&i.k===y.k&&i.x.length===y.x.length){let o="EQ";for(let c=0;c<i.x.length&&o!=="GT";c++){let d=Qn(K(),i.x[c],y.x[c]);o=d==="EQ"?o:d}if(o!=="GT")return o}for(let o of y.x)if(Qn(K(),i,o)!=="GT")return"LT";return"GT"}default:return"GT"}}function z(){return ve()}function ln(a,e,n,i,y){return Ia(a,e,{q:n,k:i,T:y})}function Ci(a,e){for(let[,n]of Ea(e)){if(n.q.$==="None")continue;let i=q(a,n.T);if(i.$==="ADT"&&gn(a,i,e).c.length===0)return!0}return!1}function tn(a){let e=Ea(a);e.sort((i,y)=>i[0]-y[0]);let n=[];for(let[i,y]of e){while(n.length<i)n.push("_");n.push(y.k)}return n}function Ce(a,e){for(let n of a)if(n.k===e)return n;return null}function aa(){return{tlds:Object.create(null),ctrs:Object.create(null),order:[],hols:0,tmps:Object.create(null)}}function ga(a,e){return a.ctrs[e]??null}function ue(a,e){let n=k(ga(a,e).T);for(let i=0;n.$==="All";i++)n=k(n.B(Z(n.k,i)));return n.$==="ADT"?n.k:e}function gn(a,e,n,i){let y=a.tlds[e.k];if(y===void 0||y.$!=="ADT")throw S(a,n,"a declared datatype (unknown: "+e.k+")",void 0,e.s,i);if(e.r.length===0)return y;let o=new Set(e.r);return{$:"ADT",n:y.n,g:y.g,T:y.T,c:y.c.filter((c)=>!o.has(c.k))}}var Oe=Zn(Ge(new URL("./base.bend","file:///bend2/bend.ts"))),Yn=Be($n(We(),".bend","store")),Ie="https://proofmarket.com";async function ba(a,e,n,i,y){if(e.startsWith(Yn+"/")&&!Rn(e)){let N=e.slice(Yn.length+1),M=await fetch(Ie+"/api/v1/files/"+N);if(!M.ok)throw S(a,z(),"a published package ("+Ie+" has no "+N+")",void 0,y);le(Xn(e),{recursive:!0}),ge(e,await M.text())}if(!Rn(e))throw S(a,z(),"no such file: "+e,void 0,y);let o=Zn(e),c=i.get(o);if(c===null)throw S(a,z(),"an import cycle through "+e,void 0,y);if(c!==void 0){if(c!==n)throw S(a,z(),"one namespace per file ("+e+" is both '"+c+"' and '"+n+"')",void 0,y);return a.order.length}i.set(o,null);let d=e.slice(0,e.lastIndexOf("/")+1),f=Object.create(null),U=Fe(e,"utf8"),T=U.split(`
`);for(let N=0;N<T.length;N++){let M=T[N].trim(),w=M.match(/^import(\s.*|)$/);if(w!==null){let s=w[1].match(/^\s+(\S+)(?:\s+as\s+([A-Za-z_][A-Za-z0-9_]*))?\s*(?:#.*)?$/),u=U.split(`
`,N).join(`
`).length+(N&&1)+T[N].indexOf(s===null?M:s[1]),L={src:U,beg:u,end:u};if(s===null||s[2]===void 0&&s[1]!=="Base")throw S(a,z(),"an import ('import Base', or 'import <path> as <Name>')","'"+M+"'",L);if(s[2]===void 0)await ba(a,Oe,"",i,L);else{let X=Nn.normalize(s[1]);if(!X.endsWith(".bend"))throw S(a,z(),"an import of a .bend file","'"+s[1]+"'",L);let oa=d+X,ha=Nn.join(Nn.dirname(n),X);if(X.startsWith("/"))oa=X,ha=X;if(/^0x[0-9a-f]+\//.test(X))oa=Yn+"/"+X,ha=X;f[s[2]]=ha.replace(/\.bend$/,""),await ba(a,oa,f[s[2]],i,L)}T[N]="";continue}if(M!==""&&!M.startsWith("#"))break}let h=a.order.length;if(ae(a,d,T.join(`
`),n,f),o===Oe)for(let N of a.order.slice(h)){let M=a.tlds[N];if(M.$==="Def")M.b=!0}return i.set(o,n),h}function Hn(a,e){let n=e;for(let i=a.length-1;i>=0;i--){let[y,o,c,d,f]=a[i];n=b(y,o,c,d,n,f)}return n}function qn(a,e){let n=q(a,e);return n.$==="All"?n:null}function ma(a,e,n,i,y){let o=qn(a,e);if(o===null)throw S(a,n,"unreachable (a telescope binds its parameters and fields)",void 0,y,i);return o}function Ke(a,e,n,i,y,o){let c=e;for(let d of n)c=ma(a,c,i,y,o).B(d);return c}function $e(a,e){let n=[],i=e;for(let y=qn(a,i);y!==null;y=qn(a,i))n.push([y.q,y.k,y.A]),i=y.B(Z(y.k,n.length-1,y.s));return{doms:n,ret:q(a,i)}}function ui(a,e,n){let i=e;for(let y=0;y<a;y++)i=J("Succ",[i],n);return i}function Xe(a,e){let n=J("WNil",[],e);for(let i=31;i>=0;i--){let y=a>>>i&1;n=J("WCon",[J(y===1?"True":"False",[],e),n],e)}return n}function bn(a,e){return J("U32",[Xe(a,e)],e)}function Oi(a,e="U32"){let n=k(a);if(n.$!=="Ctr"||n.k!==e||n.x.length!==1)return null;let i=0,y=0,o=k(n.x[0]);while(o.$==="Ctr"&&o.k==="WCon"&&o.x.length===2){let c=k(o.x[0]);if(c.$!=="Ctr"||c.x.length!==0||c.k!=="True"&&c.k!=="False")return null;if(c.k==="True")i+=2**y;y+=1,o=k(o.x[1])}if(y!==32||o.$!=="Ctr"||o.k!=="WNil"||o.x.length!==0)return null;return i}var Pe=new DataView(new ArrayBuffer(4));function Ii(a){return Pe.setFloat32(0,a),Pe.getUint32(0)}function Ki(a,e){return J("F32",[Xe(Ii(a),e)],e)}function Wn(a){switch(a.$){case"None":return"-";case"Lone":return"";case"Many":return"+"}}var Ye={n:10,t:9,r:13,"0":0,"\\":92,"'":39,'"':34};function Pi(a,e){for(let[n,i]of Object.entries(Ye))if(i===a&&(n!=="'"&&n!=='"'||n===e))return"\\"+n;if(a<32||a===127||a>=55296&&a<=57343||a>1114111)return null;return String.fromCodePoint(a)}function Da(a,e=-1,n=[]){function i(f,U){if(f.$!=="App")return null;let{f:T,x:h}=f;if(T.$!=="App"||h.$!=="Lam")return null;let N=T.f;if(N.$!=="Ref"||N.k!=="Exists")return null;let M=d(T.x,2);n.push(h.k);let w=d(h.f,1);n.pop();let s="&"+h.k+":"+M+" -> "+w;return U>1?"("+s+")":s}function y(f,U){let T=0,h=f;while(h.$==="Ctr"&&h.k==="Succ"&&h.x.length===1)T+=1,h=h.x[0];if(h.$==="Ctr"&&h.k==="Zero"&&h.x.length===0)return String(T)+"n";if(T===0)return null;let N=String(T)+"n+"+d(h,1);return U>1?"("+N+")":N}function o(f,U){if(f.$!=="Ctr"||f.k!=="Chr"||f.x.length!==1)return null;let T=Oi(f.x[0]);if(T===null||T>1114111)return null;return Pi(T,U)}function c(f){let U="",T=f;while(T.$==="Ctr"&&T.k==="SCon"&&T.x.length===2){let h=o(T.x[0],'"');if(h===null)return null;U+=h,T=T.x[1]}if(U===""||T.$!=="Ctr"||T.k!=="SNil"||T.x.length!==0)return null;return'"'+U+'"'}function d(f,U){switch(f.$){case"Var":return n.lastIndexOf(f.k)===f.i?f.k:f.k+"^"+String(f.i);case"Ref":return(n.includes(f.k)?f.k+"^":f.k)+(f.b===!0?"!":"");case"Sub":return d(f.f,U);case"Let":{let T=f.v.map((w)=>d(w,1));for(let w of f.k)n.push(w);let h=d(f.f,-1);n.length-=f.k.length;let M=f.k.map((w,s)=>Wn(f.q[s])+w).join(" ")+" = "+T.join(" ")+"; "+h;return U>=0?"("+M+")":M}case"Typ":{let T=f.g;if(T.$==="Qua"&&T.q.$==="Lone")return"Type";if(T.$==="Qua"&&T.q.$==="Many")return"Data";return"Kind("+d(f.g,0)+")"}case"Qnt":return"Quant";case"Qua":return{None:"&0",Lone:"&1",Many:"&2"}[f.q.$];case"Min":{let T=d(f.a,2)+" <&> "+d(f.b,2);return U>1?"("+T+")":T}case"All":{let T=d(f.A,2);n.push(f.k);let h=d(f.B,1);n.pop();let N="@"+Wn(f.q)+f.k+":"+T+" -> "+h;return U>1?"("+N+")":N}case"Lam":{n.push(f.k);let T=d(f.f,-1);n.pop();let h=f.k+" => "+T;return U>0?"("+h+")":h}case"App":{let T=i(f,U);if(T!==null)return T;let[h,N]=Gn(f),M=d(h,2),w=N.map((s)=>d(s,0));return M+"("+w.join(", ")+")"}case"ADT":{let T=f.x.map((M)=>d(M,0)),h=f.r.map((M)=>" - "+M+"{}").join(""),N=f.k+(T.length===0&&h===""?"":"<"+T.join(", ")+">")+h;return h!==""&&U>1?"("+N+")":N}case"Ctr":{let T=o(f,"'"),h=y(f,U)??(T!==null?"'"+T+"'":null)??c(f);if(h!==null)return h;let N=f.x.map((M)=>d(M,0));return f.k+"{"+N.join(", ")+"}"}case"Mat":{let T=[],h=f;while(h.$==="Mat")T.push(h.k+": "+d(h.h,1)),h=h.m;if(h.$!=="Efq")T.push(d(h,1));return"\\{"+T.join("; ")+"}"}case"Efq":return"\\{}";case"Eql":return"{"+d(f.a,1)+" == "+d(f.b,1)+" : "+d(f.T,1)+"}";case"Rfl":return"{==}";case"Hol":return"?"+f.k;case"Rwt":{let T=d(f.e,1),h=k(f.p),N=h.$==="Lam"?k(h.f):h,M="",w;if(h.$==="Lam"&&N.$==="Lam")n.push(h.k,N.k),w=d(N.f,1),n.length-=2,M=N.k===""?"":N.k+"@";else w=d(f.p,1);let s=d(f.f,-1),u="%"+M+T+" : "+w+"; "+s;return U>0?"("+u+")":u}case"Ann":return"{"+d(f.x,1)+" : "+d(f.T,1)+"}"}}return d(a,e)}function sn(a,e,n=[]){if(typeof e==="string")return e;else{let i=A(R(a,e),n.length);return Da(i,-1,n)}}function zi(a,e){let n=Ea(e);n.sort((c,d)=>c[0]-d[0]);let i=tn(e),y=0;for(let[,c]of n)y=Math.max(y,c.k.length);let o=n.length===0?"":`
Context:`;for(let[c,d]of n){let f=Da(A(R(a,d.T),c),-1,i.slice(0,c));o+=`
- `+d.k.padEnd(y)+" : "+f}return o}function Li(a){let e=a.src.split(`
`),n=a.src.slice(0,a.beg).split(`
`).length,i=Math.max(1,n-1),y=Math.min(e.length,n+1),o=[];for(let c=i;c<=y;c++){let d=c===n?">| ":" | ";o.push(String(c).padStart(String(y).length)+d+(e[c-1]??""))}return o.join(`
`)}function wn(a,e,n){return"non-inferrable term '"+sn(a,n,tn(e))+"'"}function Qe(a){let e=tn(a.ctx),n=a.obs===void 0?`
- message  : `+sn(a.bok,a.exp,e):`
- expected : `+sn(a.bok,a.exp,e)+`
- observed : `+sn(a.bok,a.obs,e),i=a.def===void 0?"":" "+a.def,y=a.spn===void 0?"":`
`+Li(a.spn),o=i===""&&y===""?"":`
Location:`+i+y;return"Error:"+n+zi(a.bok,a.ctx)+o}var mn=new Set(["def","type","law","match","case","do","return","for","exs","where","is","import","Type","Data","Kind","Quant"]),vi={"0":Q(),"1":K(),"2":Sa()};function Di(a,e,n,i="",y=Object.create(null)){return{book:a,dir:e,str:n,pos:0,sc:{stk:[],frs:0},ns:i,al:y,os:[],inst:null}}function qa(a,e){return e-a.lastIndexOf(`
`,e-1)}function r(a,e){return{src:a.str,beg:e,end:a.pos}}function V(a,e){let n=a.pos<a.str.length?"'"+a.str[a.pos]+"'":"end of input";throw S(a.book,z(),e,n,{src:a.str,beg:a.pos,end:a.pos})}function j(a){return a.pos<a.str.length?a.str[a.pos]:""}function C(a){let e=j(a);return a.pos+=1,e}function $(a,e){if(a.str.charCodeAt(a.pos)!==e.charCodeAt(0))return!1;return e.length===1||a.str.startsWith(e,a.pos)}function l(a,e){if(!$(a,e))return!1;return a.pos+=e.length,!0}function F(a){let e=a.str;while(a.pos<e.length){let n=e.charCodeAt(a.pos);if(n===32||n===10||n===13||n===9){a.pos+=1;continue}if(n===35){while(a.pos<e.length&&e.charCodeAt(a.pos)!==10)a.pos+=1;continue}return}}function G(a,e){if(F(a),!l(a,e))V(a,"'"+e+"'")}function ca(a,e){if(F(a),!$(a,e))return!1;return!xa(a.str[a.pos+e.length]??"")}function na(a,e){if(!ca(a,e))return!1;return l(a,e),!0}function He(a){if(F(a),!La(j(a)))V(a,"a name");let e=a.pos;while(a.pos<a.str.length&&xa(a.str[a.pos]))a.pos+=1;let n=a.str.slice(e,a.pos);if(n.endsWith("."))V(a,"a name (a name cannot end in '.')");return n}function da(a){let e=He(a);if(mn.has(e))V(a,"a name (got the keyword '"+e+"')");return e}function qe(a){if(l(a,"\\")){let n=Ye[C(a)];if(n===void 0)V(a,"an escape (\\n \\t \\r \\0 \\\\ \\' \\\")");return n}let e=a.str.codePointAt(a.pos);if(e===void 0)V(a,"a character");if(C(a),e>65535)C(a);return e}function ea(a,e,n){let i=a.sc.frs++;if(e!=="_")a.sc.stk.push([e,i,n]);return i}function ia(a,e){a.sc.stk.length=e}function je(a,e){let n=a.sc.stk;for(let i=n.length-1;i>=0;i--)if(n[i][0]===e)return n[i];return null}function Ri(a,e,n){let i=je(a,e);if(i!==null)return i[2]===void 0?Z(e,i[1],n):i[2].$==="Var"?I(i[2].k,n):i[2];let y=Ta(a,e);if(y!==e||e.includes(".")||y in a.book.tmps)return I(y,n);return Z(e,a.sc.frs++,n)}function ka(a,e){return a.ns===""?e:a.ns+"."+e}function Ta(a,e){let n=e.indexOf("."),i=ka(a,e);if(n!==-1&&e.slice(0,n)in a.al)i=a.al[e.slice(0,n)]+e.slice(n);if(i in a.book.tlds||i in a.book.ctrs||i in a.book.tmps)return i;return e}function An(a){if(F(a),l(a,"-"))return Q();if(l(a,"+"))return Sa();return K()}function kn(a,e){let n=a.book;switch(e.$){case"Var":{if(ga(n,Ta(a,e.k))!==null)throw S(n,z(),"a braced constructor pattern ("+e.k+" is a constructor: write "+e.k+"{}, or rename the binder)",void 0,e.s);let i=ea(a,e.k);return{$:"PVar",k:e.k,i,s:e.s}}case"Ctr":{let i=ga(n,e.k);if(i===null)throw S(n,z(),"a declared constructor (unknown: "+e.k+")",void 0,e.s);if(i.n!==e.x.length)throw S(n,z(),"a "+e.k+" pattern with "+String(i.n)+(i.n===1?" field":" fields"),void 0,e.s);let y=[];for(let o of e.x)y.push(kn(a,o));return{$:"PCtr",k:e.k,x:y,s:e.s}}default:throw S(n,z(),"a pattern (a binder or a constructor)",Da(A(B(e),0)),e.s)}}function W(a,e=0){F(a);let n=a.pos,i=Zi(a,n);return i.s??=r(a,n),Yi(a,i,e)}function Zi(a,e){let n=j(a);if(La(n))return Ji(a,He(a),e);if(/[0-9]/.test(n))return ji(a);switch(n){case"@":return ze(a,!1);case"&":{let i=vi[a.str[a.pos+1]??""];if(i!==void 0)return C(a),C(a),Y(i,r(a,e));return ze(a,!0)}case"+":{C(a);let i=W(a,5),y=r(a,e),o="";if(i.$==="ADT")o=i.k;else if(i.$==="Var"||i.$==="Ref")o=Ta(a,i.k);let c=a.book.tlds[o];if(c===void 0||c.$!=="ADT"||c.g===0||c.g<c.n&&i.$!=="ADT")V(a,"a quantified datatype after + (+D<..> sets D's leading quantities to &2)");let d=i.$==="ADT"?i.x:Array.from({length:c.n},()=>Y(K(),y));return fa(o,d.map((f,U)=>U<c.g?Y(Sa(),y):f),y)}case"\\":return C(a),G(a,"{"),Qi(a,e);case"%":return Hi(a,e);case"{":return qi(a);case"(":return C(a),Ee(a,e,a.os.length);case"[":{C(a);let i=_a(a,"]"),y=r(a,e),o=J("Nil",[],y);for(let c=i.length-1;c>=0;c--)o=J("Con",[i[c],o],y);return o}case"'":return xi(a);case'"':return Ei(a);case"?":{C(a);let i=da(a);if(i==="TODO")a.book.hols+=1;return en(i,r(a,e))}default:V(a,"a term")}}function Ji(a,e,n){if(e==="Type")return D(Y(K()),r(a,n));if(e==="Data")return D(Y(Sa()),r(a,n));if(e==="Quant")return wa(r(a,n));if(e==="Kind"){G(a,"(");let i=W(a);return G(a,")"),D(i,r(a,n))}if(e==="do")return ti(a);if(e==="match")V(a,"a term (a match heads a def body, not a term)");if(e==="case")V(a,"a match heading this case (this case is orphaned)");if(e==="return")V(a,"a do-block heading this return");if(mn.has(e))V(a,"a term (the keyword '"+e+"' cannot head one)");if($(a,"{")){C(a);let i=_a(a,"}");return J(Ta(a,e),i,r(a,n))}return Ri(a,e,r(a,n))}var $i=[[".|.",6,!1,".or"],[".^.",7,!1,".xor"],[".&.",8,!1,".and"],["||",2,!1,"Bool.or"],["&&",3,!1,"Bool.and"],["<=",4,!1,".is_le"],[">=",4,!1,".is_ge"],["<>",5,!0,""],["++",5,!0,"String.append"],["<<",9,!1,".shln"],[">>",9,!1,".shrn"],["&",1,!0,""],["|",1,!0,""],[">",4,!1,".is_gt"],["+",10,!1,".add"],["-",10,!1,".sub"],["*",11,!1,".mul"],["/",11,!1,".div"],["%",11,!1,".mod"]];function Xi(a){for(let e of $i){if(!$(a,e[0]))continue;let n=a.str[a.pos+e[0].length]??"";if((e[0]==="-"||e[0]==="+")&&(n===">"||La(n)))continue;if(e[0][0]===">"&&!/\s/.test(a.str[a.pos-1]??" "))continue;if(e[0]==="%"&&!/\s/.test(n))continue;return e}return null}function ua(a,e){if(e.s===void 0)return;return r(a,e.s.beg)}function jn(a){for(let e=a.pos-1;e>=0;e--){let n=a.str[e];if(n===`
`)return!0;if(n!==" "&&n!=="\r"&&n!=="\t")return!1}return!0}function Yi(a,e,n){let i=e;while(!0){if(F(a),jn(a)&&($(a,"(")||$(a,"[")))return i;if($(a,"!(")){if(i.$==="Var"&&je(a,i.k)===null)i=I(i.k,i.s);if(i.$!=="Ref")V(a,"a named def before ! (only f!(..) offloads)");C(a),i.b=!0;continue}if($(a,"(")){C(a);let d=i.$==="Ref"?a.book.tmps[i.k]:void 0,f=[];for(F(a);d!==void 0&&l(a,"~");F(a))f.push(W(a)),F(a),l(a,",");let U=f.concat(_a(a,")")),T=ua(a,i);if(i.$==="Ref"&&d!==void 0){let h=a.sc.stk.reduce((M,w)=>Ha(M,w[1],I("\x00")),null),N=f.map((M)=>Da(A(B(M,h)))).join(`
`);if(!N.includes("\x00")&&N.length<=2048){if(d.is[N]===void 0)d.is[N]=i.k+"~"+Object.keys(d.is).length,Bn({...d.p,sc:{stk:[],frs:a.sc.frs},os:[],inst:{k:d.is[N],xs:f}},a.book,d.u);i={...i,k:d.is[N]}}}for(let h of U)i=i.$==="Lam"&&a.sc.stk.some((N)=>N[2]===i)?ja(i.i,h,i.f,T):O(i,h,T);continue}if($(a,"[")){C(a);let d=a.os.length,f=W(a);G(a,"]");let U=ua(a,i);if(xe(a,a.os.splice(d),I("U32",U)),F(a),!jn(a)&&l(a,"<-")){let T=W(a,2);i=O(O(O(O(I("Array.set",U),I("U32",U),U),i,U),f,U),T,U)}else i=O(O(O(I("Array.get",U),I("U32",U),U),i,U),f,U);continue}if($(a,"<")&&!"-=<>".includes(a.str[a.pos+1]??"")&&!$(a,"<&>")&&(n<=4||/\S/.test(a.str[a.pos-1]??""))){C(a);let d=W(a,5);F(a);let f=ua(a,i);if($(a,">")||$(a,",")){if(i.$!=="Var"&&i.$!=="Ref")V(a,"a family name before <..> (a comparison here needs parens)");let U=[d];if(!l(a,">"))l(a,","),U.push(..._a(a,">"));let T=Ta(a,i.k),h=a.book.tlds[T];if(h!==void 0&&h.$==="ADT"&&U.length+h.g===h.n)U.unshift(...Array.from({length:h.g},()=>Y(K(),f)));i=fa(T,U,f)}else{let U={$:"Ref",k:".is_lt",s:f};a.os.push(U),i=O(O(U,i,f),d,f)}continue}if(n===0&&l(a,"=>")){if(i.$!=="Var")V(a,"a lambda binder (one name: k => body)");let d=a.sc.stk.length,f=ea(a,i.k),U=_n(a);ia(a,d),i=m(i.k,f,U,i.s);continue}if(n===0&&l(a,"->")){let d=W(a),f=ua(a,i);i=b(K(),"_",ea(a,"_"),i,d,f);continue}if(n<=5&&l(a,"<&>")){let d=W(a,5);i=Wa(i,d,ua(a,i));continue}let y=Xi(a);if(y===null||y[1]<n||$(a,"<-"))return i;l(a,y[0]);let o=W(a,y[2]?y[1]:y[1]+1),c=ua(a,i);if(y[0]==="<>")i=J("Con",[i,o],c);else if(y[0]==="&")i=O(O(I("Pair",c),i,c),o,c);else if(y[0]==="|")i=O(O(I("Or",c),i,c),o,c);else{let d={$:"Ref",k:y[3],s:c};if(y[3][0]===".")a.os.push(d);i=O(O(d,i,c),o,c)}}}function xe(a,e,n){let i=Gn(n)[0];for(let y of e){if(i.$!=="Var"&&i.$!=="Ref"&&i.$!=="ADT")throw S(a.book,z(),"a type name after : (the operators' namespace)",void 0,i.s);y.k=Ta(a,i.k+y.k)}}function _a(a,e){let n=[];while(!0){if(F(a),l(a,e))return n;let i=W(a);n.push(i),F(a),l(a,",")}}function ze(a,e){let n=a.pos;C(a);let i=e?K():An(a),y=da(a);G(a,":");let o=W(a,1);G(a,"->");let c=a.sc.stk.length,d=ea(a,y),f=W(a);if(ia(a,c),e){let U=r(a,n);return O(O(I("Exists",U),o,U),m(y,d,f,U),U)}return b(i,y,d,o,f)}function Ee(a,e,n){F(a);let i=on(a,qa(a.str,a.pos)-1);if(F(a),i.$==="Reply"&&l(a,",")){let o=Ee(a,e,n);return J("Tuple",[i.x,o],r(a,e))}let y=la(i,[],()=>a.sc.frs++);if(l(a,":"))xe(a,a.os.splice(n),W(a));return G(a,")"),y}function Qi(a,e){let n=[],i=va();while(!0){if(F(a),l(a,"}"))break;let c=W(a);if(F(a),(c.$==="Var"||c.$==="Ref")&&l(a,":")){let d=W(a);n.push([Ta(a,c.k),d]),F(a),l(a,";");continue}i=c,F(a),l(a,";"),G(a,"}");break}let y=r(a,e);i.s??=y;let o=i;for(let c=n.length-1;c>=0;c--)o=Ba(n[c][0],n[c][1],o,y);return o}function Hi(a,e){C(a);let n=W(a);F(a);let i="",y=n;if(l(a,"@")){if(n.$!=="Var")V(a,"a name before @ (a rewrite binder is one name: %e@E : P)");i=n.k,y=W(a)}G(a,":");let o=a.sc.stk.length,c=a.sc.frs++;a.sc.stk.push(["_",c]);let d=i===""?a.sc.frs++:ea(a,i),f=W(a);ia(a,o),F(a),l(a,";");let U=_n(a),T=r(a,e);return nn(y,m("_",c,m(i,d,f,n.s),T),U,T)}function qi(a){let e=a.pos;if(C(a),F(a),l(a,"=="))return G(a,"}"),za();let n=W(a);if(F(a),l(a,"==")){let y=W(a);G(a,":");let o=W(a);return G(a,"}"),sa(n,y,o)}if(l(a,"!=")){let y=W(a);G(a,":");let o=W(a);G(a,"}");let c=r(a,e);return b(K(),"_",ea(a,"_"),sa(n,y,o,c),I("Empty",c),c)}G(a,":");let i=W(a);return G(a,"}"),Ga(n,i)}function ji(a){let e=a.pos,n="";while(/[0-9]/.test(j(a)))n+=C(a);if(!l(a,"n")){if($(a,".")&&/[0-9]/.test(a.str[a.pos+1]??"")){let d=n+C(a);while(/[0-9]/.test(j(a)))d+=C(a);if(/[eE]/.test(j(a))&&/[0-9+-]/.test(a.str[a.pos+1]??"")){d+=C(a)+(/[+-]/.test(j(a))?C(a):"");while(/[0-9]/.test(j(a)))d+=C(a)}let f=Math.fround(Number(d));if(!isFinite(f))V(a,"a float literal with a finite f32 value (got "+d+")");return Ki(f,r(a,e))}if(xa(j(a)))V(a,"a numeric literal (NUMBER is U32, NUMBER n is Nat)");let c=Number(n);if(c>4294967295)V(a,"a u32 literal up to 4294967295 (got "+n+")");return bn(c,r(a,e))}let i=Number(n);if(i>Number.MAX_SAFE_INTEGER)V(a,"a nat literal up to "+Number.MAX_SAFE_INTEGER+"n (got "+n+"n)");let y;if(l(a,"+"))y=W(a);else{if(xa(j(a)))V(a,"a nat literal (NUMBER n)");y=J("Zero",[],r(a,e))}let o=r(a,e);return ui(i,y,o)}function xi(a){let e=a.pos;C(a);let n=qe(a);if(j(a)!=="'")V(a,"a closing '");C(a);let i=r(a,e);return J("Chr",[bn(n,i)],i)}function Ei(a){let e=a.pos;C(a);let n=[];while(j(a)!=='"'){if(a.pos>=a.str.length)V(a,'a closing "');n.push(qe(a))}C(a);let i=r(a,e),y=J("SNil",[],i);for(let o=n.length-1;o>=0;o--)y=J("SCon",[J("Chr",[bn(n[o],i)],i),y],i);return y}function ti(a){let e=da(a);G(a,"<");let n=_a(a,">");return G(a,":"),te(a,e,n.slice(0,-1),n.length===0?null:n[n.length-1])}function te(a,e,n,i){function y(u,L,X,oa){let ha=I(Ta(a,e+"."+u),oa);for(let Tn of n.concat(L,i===null?[]:[i],X))ha=O(ha,Tn,oa);return ha}F(a);let o=a.pos;if(na(a,"return")){let u=W(a);return y("pure",[],[u],r(a,o))}let c=W(a);F(a);let d=c.$==="Var"&&l(a,":"),f=d?W(a,1):c;F(a);let U=d&&$(a,"=")&&!$(a,"==");if(U)C(a);else if(d)G(a,"<-");else if(!l(a,"<-"))return c;let T=W(a);F(a),l(a,";");let h=r(a,o),N=d&&c.$==="Var"?c.k:"_",M=a.sc.stk.length,w=ea(a,N),s=te(a,e,n,i);if(ia(a,M),U)return an([N],[w],[Ga(T,f,h)],s,h);return y("bind",[f],[T,m(N,w,s,h)],h)}function on(a,e=0){F(a);let n=a.pos;if(ca(a,"match"))return mi(a,e);let i=An(a),y=[];if(i.$!=="Lone"){let U=i.$==="None"||La(j(a))?da(a):"";if(F(a),U!==""&&$(a,"=")&&!$(a,"=="))y=[Z(U,0,r(a,n))],G(a,"=");else a.pos=n,i=K()}if(i.$==="Lone"){y=[W(a)],F(a);while(!jn(a)&&La(j(a))&&!bi(a))y.push(W(a)),F(a);if(y.length===1&&!($(a,"=")&&!$(a,"==")))return{$:"Reply",x:y[0],s:r(a,n)};G(a,"=")}let o=[];for(let U of y)o.push(W(a));F(a),l(a,";");let c=a.sc.stk.length,d=y.map((U)=>{if(y.length>1&&U.$!=="Var")throw S(a.book,z(),"a name (a parallel let binds names; destructure in its body)",void 0,U.s);return kn(a,U)}),f=on(a,e);return ia(a,c),{$:"Local",k:d,q:i,v:o,f}}function bi(a){let e="";for(let n=a.pos;n<a.str.length&&xa(a.str[n]);n++)e+=a.str[n];return mn.has(e)}function _n(a){F(a);let e=on(a,qa(a.str,a.pos)-1);return la(e,[],()=>a.sc.frs++)}function Le(a){let e=[];while(!0){if(e.push(W(a)),F(a),l(a,":"))return e;l(a,",")}}function mi(a,e){F(a);let n=a.pos;na(a,"match");let i=Le(a);F(a);let y=qa(a.str,a.pos),o=[];while(y>e&&ca(a,"case")&&qa(a.str,a.pos)>=y){let c=qa(a.str,a.pos);na(a,"case");let d=Le(a);if(d.length!==i.length)V(a,String(i.length)+" patterns (one per scrutinee)");let f=a.sc.stk.length,U=[];for(let h of d)U.push(kn(a,h));let T=on(a,c);ia(a,f),o.push({p:U,f:T})}return{$:"Match",e:i,r:o,s:r(a,n)}}function xn(a,e){let n=[];while(!0){if(F(a),l(a,e))return n;let i=e===")"&&l(a,"~"),y=i?Q():An(a),o=a.pos,c=da(a),d=r(a,o);if(F(a),y.$==="Lone"&&!$(a,":"))n.push([Q(),c,ea(a,c),wa(),d]);else{G(a,":");let f=W(a);n.push([y,c,ea(a,c,i?a.inst?.xs.shift():void 0),f,d])}F(a),l(a,",")}}function pn(a,e){if(a.book.tlds[e]!==void 0||a.inst===null&&e in a.book.tmps)V(a,"a fresh name (duplicate declaration: "+e+")")}function Bn(a,e,n=!1){let i=a.pos;na(a,"def");let y=da(a),o=Ta(a,y),c=e.tlds[o];if(c!==void 0&&c.$==="Def"&&c.v===null&&c.b!==!0&&!c.i){if(n)c.u=!0;ki(a,e,o,c);return}let d=a.inst?.k??ka(a,y);pn(a,d);let f=a.sc.stk.length;if(G(a,"("),F(a),a.inst===null&&$(a,"~")){e.tmps[d]={p:{...a,pos:i},u:n,is:Object.create(null)},a.pos=i,a.inst={k:d,xs:[]},Bn(a,aa(),n),a.inst=null;return}let U=xn(a,")");G(a,"->");let T=W(a),h={$:"Def",n:U.length,T:B(Hn(U,T)),v:null};if(n)h.u=!0;e.tlds[d]=h;let N=U.map((M)=>({$:"PVar",k:M[1],i:M[2],s:M[4]}));be(a,e,d,h,N,f)}function ki(a,e,n,i){let y=a.sc.stk.length;G(a,"(");let o=[];while(!0){if(F(a),l(a,")"))break;let c=a.pos,d=da(a);o.push({$:"PVar",k:d,i:ea(a,d),s:r(a,c)}),F(a),l(a,",")}i.n=o.length,be(a,e,n,i,o,y)}function be(a,e,n,i,y,o){if(G(a,":"),ca(a,"import")){i.i=[];while(na(a,"import")){G(a,'"');let d="";while(j(a)!=='"'&&j(a)!=="")d+=C(a);if(G(a,'"'),!/\.(c|js)$/.test(d))V(a,"a .c or .js path");i.i.push(a.dir+d)}ia(a,o),e.order.push(n);return}let c=on(a);ia(a,o),i.v=B(A(B(la(c,y,()=>a.sc.frs++)))),e.order.push(n)}function _i(a,e){na(a,"law");let n=ka(a,da(a));pn(a,n),G(a,":");let i=a.sc.stk.length,y=[];while(ca(a,"for")||ca(a,"exs")){let d=na(a,"for");if(!d)na(a,"exs");let f=d?An(a):K(),U=a.pos,T=da(a),h=r(a,U);G(a,":");let N=W(a);if(na(a,"where")){let M=a.sc.stk.length,w=ea(a,T),s=W(a);ia(a,M),N=O(O(I("Exists",h),N,h),m(T,w,s,h),h)}y.push([d,f,T,ea(a,T),N,h])}let o=_n(a);for(let d=y.length-1;d>=0;d--){let[f,U,T,h,N,M]=y[d];o=f?b(U,T,h,N,o,M):O(O(I("Exists",M),N,M),m(T,h,o,M),M)}ia(a,i);let c=0;while(c<y.length&&y[c][0])c+=1;e.tlds[n]={$:"Def",n:c,T:B(o),v:null},e.order.push(n)}function pi(a,e){na(a,"type");let n=ka(a,da(a));pn(a,n);let i=a.sc.stk.length;F(a);let y=l(a,"<")?xn(a,">"):[];if(!na(a,"is"))V(a,"'is'");let o=W(a);G(a,":");let c=[],d=y.findIndex((f)=>f[3].$!=="Qnt");e.tlds[n]={$:"ADT",n:y.length,g:d<0?y.length:d,T:B(Hn(y,o)),c};while(!0){if(F(a),a.pos>=a.str.length||!La(j(a)))break;if(["def","type","law"].some((M)=>ca(a,M)))break;let f=ka(a,da(a));if(ga(e,f)!==null)V(a,"a fresh constructor name (duplicate declaration: "+f+")");G(a,"{");let U=a.sc.stk.length,T=xn(a,"}"),h=fa(n,y.map((M)=>Z(M[1],M[2]))),N={k:f,n:T.length,T:B(Hn(y.concat(T),h))};ia(a,U),c.push(N),e.ctrs[f]=N}ia(a,i),e.order.push(n)}function ae(a,e,n,i="",y=Object.create(null)){let o=Di(a,e,n,i,y);while(!0){if(F(o),o.pos>=o.str.length)return a;if(o.sc={stk:[],frs:0},l(o,"@")){if(!na(o,"unsafe"))V(o,"'unsafe' (the one decorator)");if(F(o),!ca(o,"def"))V(o,"'def' (@unsafe marks the def below it)");Bn(o,a,!0);continue}if(ca(o,"def")){Bn(o,a);continue}if(ca(o,"type")){pi(o,a);continue}if(ca(o,"law")){_i(o,a);continue}V(o,"'def', 'type' or 'law'")}}function Ka(a,e,n){function i(y){if(y.$==="Var")return y.i!==e?y:n.$==="Var"?Z(n.k,n.i,y.s):n;else return ja(e,n,y)}switch(a.$){case"Match":{let y=a.e.map(i),o=a.r.map((c)=>({p:c.p,f:Ka(c.f,e,n)}));return{$:"Match",e:y,r:o,s:a.s}}case"Local":{let y=a.v.map(i),o=Ka(a.f,e,n);return{$:"Local",k:a.k,q:a.q,v:y,f:o}}case"Reply":return{$:"Reply",x:ja(e,n,a.x),s:a.s}}}function Oa(a,e,n){if(a.e.length===0&&a.r.length>0)return la(a.r[0].f,e,n);else if(a.e.length===0)throw S(aa(),z(),"a case (this match has no row to return)",void 0,a.s);else if(e.length===0){let i=a.e[0];while(i.$==="Sub")i=i.f;switch(i.$){case"Var":throw S(aa(),z(),"match scrutinees in binder order (this variable is unbound, consumed, or out of order: reorder the match)",void 0,i.s);case"Ctr":throw S(aa(),z(),"an undestructed scrutinee (this value is already a constructor: bind its fields directly; if an outer match destructed it, fold the pattern into the outer case)",void 0,a.s);default:throw S(aa(),z(),"a parameter or field scrutinee (a match cannot scrutinize a computed value: give it its own def)",void 0,i.s??a.s)}}else{let i=e[0],y=a.e[0],o=i2(a.r),c=e.find((d)=>y.$==="Var"&&d.i===y.i);if(c!==void 0&&o===null&&a.r.length>0){let d=e2(a.r,c);return Oa({$:"Match",e:a.e.slice(1),r:d,s:a.s},e,n)}else if(c===i)if(o===null)return va(a.s);else{let d=o2(o.x,n),f=a2(a.r,i,o.k,d),U=d.map((w)=>pa(w)).concat(a.e.slice(1)),T=d.concat(e.slice(1)),h=Oa({$:"Match",e:U,r:f,s:a.s},T,n),N=n2(a.r,o.k),M=Oa({$:"Match",e:a.e,r:N,s:a.s},e,n);return Ba(o.k,h,M,o.s)}else{let d=Oa(a,e.slice(1),n);return m(i.k,i.i,d,i.s)}}}function a2(a,e,n,i){let y=pa({$:"PCtr",k:n,x:i,s:e.s});return a.flatMap((o)=>{let c=o.p[0];switch(c.$){case"PCtr":if(c.k!==n)return[];else if(c.x.length!==i.length)throw S(aa(),z(),"a "+n+" pattern with "+String(i.length)+" fields",void 0,c.s);else{let d=Ka(o.f,e.i,y);return[{p:c.x.concat(o.p.slice(1)),f:d}]}case"PVar":{let d=Ka(o.f,c.i,pa(e)),f=Ka(d,e.i,y);return[{p:i.concat(o.p.slice(1)),f}]}}})}function n2(a,e){return a.filter((n)=>{let i=n.p[0];return i.$!=="PCtr"||i.k!==e})}function e2(a,e){return a.map((n)=>{let i=n.p[0];if(i.$==="PVar"){let y=Ka(n.f,i.i,pa(e));return{p:n.p.slice(1),f:y}}else throw S(aa(),z(),"a variable pattern (this column has no constructor row)",void 0,i.s)})}function i2(a){for(let e of a){let n=e.p[0];if(n.$==="PCtr")return n}return null}function o2(a,e){return a.map((n)=>{if(n.$==="PVar")return n;let i=e();return{$:"PVar",k:"_"+String(i),i,s:n.s}})}function pa(a){switch(a.$){case"PVar":return Z(a.k,a.i,a.s);case"PCtr":{let e=a.x.map(pa);return J(a.k,e,a.s)}}}function la(a,e,n){switch(a.$){case"Reply":if(e.length===0)return a.x;else{let i=e[0],y=la(a,e.slice(1),n);return m(i.k,i.i,y,i.s)}case"Local":{if(a.k.length===1&&a.k[0].$==="PCtr"){let c={p:[a.k[0]],f:a.f};return Oa({$:"Match",e:[a.v[0]],r:[c],s:a.v[0].s},e,n)}let i=a.k,y=la(a.f,i,n);for(let c of i){if(y.$!=="Lam")throw S(aa(),z(),"a parameter or field scrutinee (a match cannot scrutinize a local binder: give it its own def)",void 0,c.s);y=y.f}let o=an(i.map((c)=>c.k),i.map((c)=>c.i),a.v,y,i[0].s,i.map(()=>a.q));return la({$:"Reply",x:o},e,n)}case"Match":return Oa(a,e,n)}}function q(a,e){let n=[],i=e,y=null;a:while(!0){n:switch(i.$){case"Var":if(i.v===void 0)break n;else{if(i.i===-1)n.push({$:"VAR",l:i,a:i.v.$==="Ann"?i.v:void 0});y=null,i=i.v;continue a}case"Ann":{i=i.x;continue a}case"Min":{n.push({$:"MNA",b:i.b,s:i.s}),i=i.a;continue a}case"Let":{let o=i;i=o.f(o.v.map((c,d)=>E(c,o.k[d])));continue a}case"App":{n.push({$:"APP",x:E(i.x),s:i.s}),y=null,i=i.f;continue a}case"Lam":if(n.length===0||n[n.length-1].$!=="APP")break n;else{let o=n.pop();if(y!==null&&y.n===0)y=null;else if(y!==null){let{t:c,n:d}=y;y={t:()=>p(c(),o.x,o.s),n:d-1}}i=i.f(o.x);continue a}case"Mat":if(n.length===0||n[n.length-1].$!=="APP")break n;else{let o=n.pop();n.push({$:"MAT",t:i,e:o.x,lhs:y,s:o.s}),i=o.x,y=null;continue a}case"Efq":{if(y!==null&&y.n>0&&n.length>0&&n[n.length-1].$==="APP")i=y.t();break n}case"Rwt":{if(q(a,i.e).$==="Rfl"){i=i.f;continue a}break n}case"Ref":{let o=a.tlds[i.k];if(o===void 0)break n;if(o.$==="ADT"){if(o.n===0)i=fa(i.k,[],i.s);break n}let c=0;while(c<o.n&&c<n.length&&n[n.length-1-c].$==="APP")c+=1;if(c<o.n||o.v===null)break n;let d=i;y={t:()=>d,n:o.n},i=o.v;continue a}default:break n}y=null;n:while(!0){let o=n.pop();if(o===void 0)return i;else switch(o.$){case"VAR":{i=Vi(i),o.l.v=o.a===void 0?i:Ga(i,E(o.a.T),o.a.s),o.l.i=-2;continue a}case"APP":{i=p(i,o.x,o.s);continue n}case"MNA":{if(i.$==="Qua"&&i.q.$==="Many"){i=o.b;continue a}if(i.$==="Qua"&&i.q.$==="None")continue n;n.push({$:"MNB",a:i,s:o.s}),i=o.b;continue a}case"MNB":{if(i.$==="Qua"&&i.q.$==="Many")i=o.a;else if(i.$!=="Qua"||i.q.$==="Lone"&&o.a.$!=="Qua")i=Wa(o.a,i,o.s);continue n}case"MAT":if(i.$==="Ctr"){let c=i,d=o.t;e:while(!0)switch(d.$){case"Ann":{d=d.x;continue e}case"Mat":if(d.k===c.k){let f=o.lhs;if(f===null)y=null;else y={t:()=>En(f.t(),c.k,c.x.length),n:f.n-1+c.x.length};for(let U=c.x.length-1;U>=0;U--)n.push({$:"APP",x:E(c.x[U])});i=d.h;continue a}else{d=d.m;continue e}case"Efq":{i=p(o.lhs===null?o.t:o.lhs.t(),o.e,o.s);continue n}default:{y=o.lhs,n.push({$:"APP",x:c}),i=d;continue a}}}else{i=p(o.lhs===null?o.t:o.lhs.t(),o.e,o.s);continue n}}}}}function R(a,e){let n=q(a,e);switch(n.$){case"Var":return Z(n.k,n.i,n.s);case"Ref":return I(n.k,n.s,n.b);case"Sub":return ja(n.i,R(a,n.v),R(a,n.f),n.s);case"Typ":return D(R(a,n.g),n.s);case"Qnt":case"Qua":return n;case"Min":return Wa(R(a,n.a),R(a,n.b),n.s);case"All":return b(n.q,n.k,n.i,R(a,n.A),(i)=>{return R(a,n.B(i))},n.s);case"Lam":return m(n.k,n.i,(i)=>{return R(a,n.f(i))},n.s);case"App":return O(n.f.$==="Ref"?n.f:R(a,n.f),R(a,n.x),n.s);case"ADT":return fa(n.k,n.x.map((i)=>R(a,i)),n.s,n.r);case"Ctr":return J(n.k,n.x.map((i)=>R(a,i)),n.s);case"Mat":return Ba(n.k,R(a,n.h),R(a,n.m),n.s);case"Efq":return va(n.s);case"Eql":return sa(R(a,n.a),R(a,n.b),R(a,n.T),n.s);case"Rfl":return za(n.s);case"Rwt":return nn(R(a,n.e),R(a,n.p),R(a,n.f),n.s);case"Hol":return en(n.k,n.s)}}function P(a,e,n,i,y=0){if(n===i)return!0;let o=q(e,n),c=q(e,i);if(o===c)return!0;if(o.$==="Lam"||c.$==="Lam"){let d=o.$==="Lam"?o.k:c.k,f=Z(d,y);return P(a,e,p(o,f),p(c,f),y+1)}switch(o.$){case"Var":return c.$==="Var"&&o.i===c.i;case"Ref":return c.$==="Ref"&&o.k===c.k;case"Typ":{if(c.$!=="Typ")return!1;if(a==="EQ")return P("EQ",e,o.g,c.g,y);let d=q(e,o.g),f=q(e,c.g);if(d.$==="Qua"&&d.q.$==="Many"||f.$==="Qua"&&f.q.$!=="Many")return!0;if(d.$==="Min"){let U=P("LE",e,D(d.a),c,y),T=P("LE",e,D(d.b),c,y);return U&&T}if(f.$==="Min"){let U=P("LE",e,o,D(f.a),y),T=P("LE",e,o,D(f.b),y);return U||T}return P("LE",e,d,f,y)}case"Qnt":return c.$==="Qnt";case"Qua":return c.$==="Qua"&&o.q.$===c.q.$;case"Min":return c.$==="Min"&&P("EQ",e,o.a,c.a,y)&&P("EQ",e,o.b,c.b,y);case"All":{let d=Z(o.k,y);return c.$==="All"&&o.q.$===c.q.$&&P(a,e,c.A,o.A,y)&&P(a,e,o.B(d),c.B(d),y+1)}case"App":return c.$==="App"&&P("EQ",e,o.f,c.f,y)&&P("EQ",e,o.x,c.x,y);case"ADT":{if(c.$!=="ADT"||o.k!==c.k||o.x.length!==c.x.length)return!1;if(a==="EQ"&&o.r.length!==c.r.length)return!1;return c.r.every((d)=>o.r.includes(d))&&o.x.every((d,f)=>P("EQ",e,d,c.x[f],y))}case"Ctr":return c.$==="Ctr"&&o.k===c.k&&o.x.length===c.x.length&&o.x.every((d,f)=>P("EQ",e,d,c.x[f],y));case"Mat":return c.$==="Mat"&&o.k===c.k&&P("EQ",e,o.h,c.h,y)&&P("EQ",e,o.m,c.m,y);case"Efq":return c.$==="Efq";case"Eql":return c.$==="Eql"&&P("EQ",e,o.a,c.a,y)&&P("EQ",e,o.b,c.b,y)&&P("EQ",e,o.T,c.T,y);case"Rfl":return c.$==="Rfl";case"Hol":return c.$==="Hol"&&o.k===c.k;case"Rwt":return c.$==="Rwt"&&P("EQ",e,o.e,c.e,y)&&P("EQ",e,o.p,c.p,y)&&P("EQ",e,o.f,c.f,y);default:return!1}}function Pa(a,e,n,i,y,o,c=[]){switch(n.$){case"Var":{if(n.i<0&&n.v!==void 0)return Pa(a,e,ta(n),i,y,o,c);let d=De(y,n.i);if(d===null)throw S(a,y,"a bound variable",n,n.s,e.def);else return ya(Z(n.k,n.i,n.s),d.T,Ia(t(),n.i,i))}case"Ref":{let d=a.tlds[n.k];if(d===void 0)throw S(a,y,"a defined name",n,n.s,e.def);switch(i.$){case"None":break;default:{if(n.k===e.def&&e.u!==!0&&ri(e,c)!=="LT")throw S(a,y,"a decreasing self-call (some live argument must shrink)",n,n.s,e.def);if(n.k===e.def)return ya(I(n.k,n.s,n.b),d.T,t());if(d.$==="Def"&&d.v===null&&d.b!==!0&&!d.i)throw S(a,y,"a filled definition (an unfilled law is a dead claim: live code cannot use it)",n,n.s,e.def);break}}if(d.$==="ADT"&&d.n>0)throw S(a,y,"a family instance (write "+n.k+"<..>)",n,n.s,e.def);return ya(I(n.k,n.s,n.b),d.T,t())}case"Typ":{let d=v(a,e,n.g,Q(),wa(n.s),y,o);return ya(D(d.tm,n.s),D(Y(K()),n.s),t())}case"Qnt":return ya(wa(n.s),D(Y(K()),n.s),t());case"Qua":return ya(Y(n.q,n.s),wa(n.s),t());case"Min":{let d=v(a,e,n.a,i,wa(n.s),y,o),f=v(a,e,n.b,i,wa(n.s),y,o);return ya(Wa(d.tm,f.tm,n.s),wa(n.s),Fa(d.us,f.us))}case"All":{let d=ln(y,o,n.q,n.k,n.A),f=v(a,e,n.A,Q(),D(Y(Je(e,n.q)),n.s),y,o),U=v(a,e,n.B(Z(n.k,o,n.s)),Q(),D(Y(K()),n.s),d,o+1);return ya(b(n.q,n.k,o,f.tm,U.tm,n.s),D(Y(K()),n.s),t())}case"App":{if(n.f.$==="Lam")return Pa(a,e,n.f.f(n.x),i,y,o,c);let d=Pa(a,e,n.f,i,y,o,[n.x,...c]),f=q(a,d.ty);if(f.$!=="All")throw S(a,y,"a function type",d.ty,n.s,e.def);let U=v(a,e,n.x,Fn(f.q,i),f.A,y,o);return ya(O(d.tm,U.tm,n.s),f.B(n.x),Fa(d.us,U.us))}case"ADT":{let d=gn(a,n,y,e.def);if(n.x.length!==d.n)throw S(a,y,n.k+" with "+String(d.n)+(d.n===1?" parameter":" parameters"),n,n.s,e.def);let f=[],U=d.T,T=t();for(let h of n.x){let N=ma(a,U,y,e.def,n.s),M=Fn(N.q,i),w=v(a,e,h,M,N.A,y,o);f.push(w.tm),T=Fa(T,w.us),U=N.B(h)}return ya(fa(n.k,f,n.s,n.r),U,T)}case"Eql":{let d=v(a,e,n.T,Q(),D(Y(K()),n.s),y,o),f=v(a,e,n.a,Q(),n.T,y,o),U=v(a,e,n.b,Q(),n.T,y,o);return ya(sa(f.tm,U.tm,d.tm,n.s),D(Y(Sa()),n.s),t())}case"Ann":{v(a,e,n.T,Q(),D(Y(K()),n.s),y,o);let d=v(a,e,n.x,i,n.T,y,o);return{tm:d.tm,ty:n.T,us:d.us}}default:{if(n.$==="Ctr"&&ga(a,n.k)===null)throw S(a,y,"a declared constructor",n,n.s,e.def);throw S(a,y,"an annotated term (cannot infer)",n,n.s,e.def)}}}function v(a,e,n,i,y,o,c){switch(n.$){case"Var":{if(n.i<0&&n.v!==void 0)return v(a,e,ta(n),i,y,o,c);break}case"Lam":{let f=q(a,y);if(f.$!=="All")throw S(a,o,y,wn(a,o,n),n.s,e.def);let U=Z(n.k,c,n.s),T=e;if(e.n>0)T={...e,t:p(e.t,U),n:e.n-1};let h=ln(o,c,f.q,n.k,f.A),N=v(a,T,n.f(U),i,f.B(U),h,c+1);return Ae(a,o,n.k,f.q,re(N.us,c),n.s,e.def),Ma(m(n.k,c,N.tm,n.s),y,Ve(N.us,c))}case"Let":{let f=n.k.length,U=[],T=t(),h=o;for(let s=0;s<f;s++){let u=Fn(n.q[s],i),L=Pa(a,e,n.v[s],u,o,c);v(a,e,L.ty,Q(),D(Y(Je(e,n.q[s])),n.s),o,c),U.push(L.tm),T=Fa(T,L.us),h=ln(h,c+s,n.q[s],n.k[s],L.ty)}let N=n.k.map((s,u)=>Z(s,c+u,n.s,n.v[u])),M=v(a,e,n.f(N),i,y,h,c+f),w=M.us;for(let s=0;s<f;s++)Ae(a,o,n.k[s],n.q[s],re(w,c+s),n.s,e.def),w=Ve(w,c+s);return Ma(an(n.k,N.map((s,u)=>c+u),U,M.tm,n.s,n.q),y,Fa(T,w))}case"Ctr":{let f=q(a,y);if(f.$!=="ADT"){let w=ga(a,n.k)===null?null:ue(a,n.k);throw S(a,o,y,w===null?wn(a,o,n):I(w,n.s),n.s,e.def)}let U=gn(a,f,o,e.def),T=Ce(U.c,n.k);if(T===null){if(ga(a,n.k)===null)throw S(a,o,"a declared constructor ("+f.k+" declares "+U.c.map((w)=>w.k).join(", ")+")",n,n.s,e.def);throw S(a,o,y,I(ue(a,n.k),n.s),n.s,e.def)}if(n.x.length!==T.n)throw S(a,o,n.k+" with "+String(T.n)+(T.n===1?" field":" fields"),n,n.s,e.def);let h=Ke(a,T.T,f.x,o,e.def,n.s),N=[],M=t();for(let w of n.x){let s=ma(a,h,o,e.def,n.s),u=Fn(s.q,i),L=v(a,e,w,u,s.A,o,c);N.push(L.tm),M=Fa(M,L.us),h=s.B(w)}return Ma(J(n.k,N,n.s),y,M)}case"Mat":case"Efq":{let f=q(a,y);if(f.$!=="All")throw S(a,o,y,wn(a,o,n),n.s,e.def);if(i.$!=="None"&&f.q.$==="None")throw S(a,o,"a live scrutinee (a - scrutinee matches only in a dead region)",void 0,n.s,e.def);let U=q(a,f.A);if(U.$!=="ADT")throw S(a,o,"a datatype",f.A,n.s,e.def);let T=gn(a,U,o,e.def).c;switch(n.$){case"Efq":{if(T.length!==0&&!Ci(a,o))throw S(a,o,"cases for "+T.map((h)=>h.k).join(", "),n,n.s,e.def);return Ma(va(n.s),y,t())}case"Mat":{let s=function(ha,Tn,we){if(Tn===0)return N.B(J(h.k,we,h.s));else{let Ya=ma(a,ha,o,e.def,h.s),Ni=Gi(Ya.q,N.q);return b(Ni,Ya.k,Ya.i,Ya.A,(se)=>{return s(Ya.B(se),Tn-1,we.concat([se]))},h.s)}},h=n,N=f,M=Ce(T,n.k);if(M===null)throw S(a,o,"a constructor of "+U.k+" (missing, or already matched)",n,n.s,e.def);let w=Ke(a,M.T,U.x,o,e.def,n.s),u=e;if(e.n>0)u={...e,t:En(e.t,n.k,M.n),n:e.n-1+M.n};let L=v(a,u,n.h,i,s(w,M.n,[]),o,c),X=b(f.q,f.k,f.i,fa(U.k,U.x,n.s,U.r.concat([M.k])),f.B,n.s),oa=v(a,e,n.m,i,X,o,c);return Ma(Ba(n.k,L.tm,oa.tm,n.s),y,Ai(L.us,oa.us))}}}case"Rfl":{let f=q(a,y);if(f.$!=="Eql")throw S(a,o,y,wn(a,o,n),n.s,e.def);if(!P("EQ",a,f.a,f.b,c))throw S(a,o,f.a,f.b,n.s,e.def);return Ma(za(n.s),y,t())}case"Hol":{if(n.k==="TODO")return Ma(en(n.k,n.s),y,t());throw S(a,o,y,n,n.s,e.def)}case"Rwt":{let f=Pa(a,e,n.e,i,o,c),U=q(a,f.ty);if(U.$!=="Eql")throw S(a,o,"an equation {a == b : T}",f.ty,n.s,e.def);let T=b(K(),"_",0,U.T,(s)=>b(K(),"e",0,sa(U.a,s,U.T),()=>D(Y(K())),n.s),n.s),h=v(a,e,n.p,Q(),T,o,c),N=p(p(n.p,U.b),n.e);if(!P("LE",a,N,y,c))throw S(a,o,y,N,n.s,e.def);let M=p(p(n.p,U.a),za(n.s)),w=v(a,e,n.f,i,M,o,c);return Ma(nn(f.tm,h.tm,w.tm,n.s),y,Fa(f.us,w.us))}default:break}let d=Pa(a,e,n,i,o,c);if(P("LE",a,d.ty,y,c))return{tm:d.tm,us:d.us};throw S(a,o,y,d.ty,n.s,e.def)}function y2(a,e,n){v(a,{t:I(e),n:0,def:e,qs:[]},n.T,Q(),D(Y(K())),z(),0);let{doms:i,ret:y}=$e(a,n.T);if(y.$!=="Typ"||i.length!==n.n)throw S(a,z(),"a kind (type "+e+"<..> is Kind(g))",y,y.s,e);for(let o of n.c){let c=o.T,d=z();for(let T=0;T<n.n+o.n;T++){let h=ma(a,c,d,o.k),N=D(Y(h.q));if(T>=n.n&&h.q.$==="Lone")N=y;v(a,{t:I(o.k),n:0,def:o.k,qs:[]},h.A,Q(),N,d,T),d=ln(d,T,h.q,h.k,h.A),c=h.B(Z(h.k,T,h.s))}let f="a telescope tipped at "+e+" applied to its own parameters",U=q(a,c);if(U.$!=="ADT"||U.k!==e||U.x.length!==n.n||U.r.length!==0)throw S(a,d,f,U,void 0,o.k);for(let T=0;T<n.n;T++){let h=q(a,U.x[T]);if(h.$!=="Var"||h.i!==T)throw S(a,d,f,U,void 0,o.k)}}}function c2(a,e,n){if(v(a,{t:I(e),n:0,def:e,qs:[],u:n.u},n.T,Q(),D(Y(K())),z(),0),n.i){let i=k(n.T);for(let c=0;i.$==="All";c++)i=k(i.B(Z(i.k,c,i.s)));let[y]=Gn(i),o=a.tlds.IO;if(y.$!=="Ref"||y.k!=="IO"||o===void 0||o.$!=="Def"||o.b!==!0)throw S(a,z(),"a foreign definition answering base's IO",e,i.s,e)}if(n.v!==null){let i=$e(a,n.T).doms.map((y)=>y[0]).slice(0,n.n);while(i.length<n.n)i.push(K());n.e=v(a,{t:I(e),n:n.n,def:e,qs:i,u:n.u},n.v,K(),n.T,z(),0).tm}}function ne(a,e=0){let n=aa(),i=new Map;for(let y=0;y<a.order.length;y++)i.set(a.order[y],y);for(let y=0;y<a.order.length;y++){let o=a.order[y],c=a.tlds[o],d=i.get(o)===y;if(c.$==="ADT"){n.tlds[o]=c;for(let U of c.c)n.ctrs[U.k]=U;if(y>=e)y2(n,o,c);continue}let f={$:"Def",n:c.n,T:c.T,v:null,b:c.b,u:c.u};if(y<e){n.tlds[o]=d?c:f;continue}if(d&&c.v===null&&c.b!==!0&&!c.i)a.hols+=1;n.tlds[o]=f,c2(n,o,d?c:f),n.tlds[o]=d?c:f}}var me=`

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
`;var ke=`# Winning Is A Bug -- the game.
#
# The whole game, and nothing else: a torus map, a walled room, a flag,
# five moves, and the level as text (the front end asks \`grid\` for
# it). The claims about this game live in LAWS.bend; their proofs live
# in PROOF.bend. This file is AI-written and may be rewritten at will --
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
`;var _e=`# The laws. The human states them; PROOF.bend must prove them.

import Base
import ./main.bend as Game

# LAW: for any sequence of moves, replaying them
# from the start can never lead to victory.
law you_cant_win:
  for moves: List<Game.Move>
  board = Game.replay(Game.start(), moves)
  {Game.is_won(board) == False{} : Bool}
`;var pe=`# Winning Is A Bug -- the certificate.
#
# The proofs. This file imports the game (as Game) and the claims (as
# Laws) and fills every assert the laws make -- an unfilled assert is an
# error, so \`bend PROOF.bend\` is the whole verification. Everything here
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
`;var ai="# Bend, for this lab\n\nBend is a pure, strict, total language: Python's look, affine values, and\na proof checker in the style of Lean, without tactics. A file is `import`\nlines, then `type`, `def` and `law` blocks. Indent with two spaces. One\nstatement per line. `#` starts a comment.\n\n## Files, namespaces, laws\n\n```\nimport Base\nimport ./main.bend as Game\n```\n\n`Base` is the prelude. A file's definitions live under its namespace, so\ninside PROOF.bend the game's `step` is `Game.step` and its constructor\n`Up{}` is `Game.Up{}`. A `law` states a type; a `def` of the same name,\nwith bare parameter names, proves it. `def Laws.you_cant_win(moves):` in\nPROOF.bend fills the law that LAWS.bend states. An unfilled law, or a\n`?TODO` left in a body, is a TODO: the file still \"checks\" but is\nincomplete, and submit rejects it. `@unsafe` is rejected too. Imports may\nnot form a cycle: LAWS.bend imports main.bend, so main.bend cannot import\nLAWS.bend or PROOF.bend.\n\n```\nlaw name:\n  for x: A          # a parameter; `for +x: A` reusable, `for -x: A` erased\n  R                 # the claim, a type; lets may come before it\n\ndef name(x):\n  body              # the proof: a term of type R\n```\n\n## Definitions and quantities\n\n```\ndef name(x: A, +y: B, -Z: Type) -> R:\n  statements\n  expression\n```\n\nEvery binder has a quantity. `x` is used exactly once (affine). `+y` may\nbe used many times; `+` is allowed only on `Data` (Nat, Bool, U32, String,\nequations, and types declared `is Data`). `-Z` is erased: types and\nproofs that only types mention. Using an affine value twice is the error\n`x (consumed more than once)`. To reuse a value bound without `+`, rebind\nit: `+x = x0`. Dropping a value is free.\n\nStatements: `x = e` (a literal needs its type: `x = {10 : U32}`),\n`+x = e`, `Ctr{a, b} = p` opens a constructor, `(a, b) = p` opens a pair,\n`%e : P` rewrites (below). Expressions: calls `f(a, b)`, constructors\n`Ctr{a, b}`, lambdas `x => body`, pairs `(a, b)`, literals, operators.\nEvery type argument is written out: there are no implicit arguments and\nno unification. A lambda passed to a call takes its type from the callee.\n\nThere is no `if`. `match` opens a parameter or a field, never a computed\nexpression: compute in a helper and match its parameter. Nat patterns are\n`0n` and `1n+p` (`p` the predecessor; `2n+p` also works); Bool `True{}`,\n`False{}`; List `Nil{}`, `Con{h, t}`; `_` catches the rest. Several\nscrutinees: `match a, b:` with `case 0n, 1n+q:`. Matching a `+` parameter\nhands out `+` fields. A match with no cases closes a goal whose scrutinee\nhas type `Empty`.\n\n```\ndef pick(-A: Type, c: Bool, a: A, b: A) -> A:\n  match c:\n    case True{}:\n      a\n    case False{}:\n      b\n```\n\nTermination: a recursive call must pass a structurally smaller argument,\na pattern variable bound by a `match` on that parameter (`Nat.sub(n, 1n)`\nproves nothing; only the pattern does). A def may call itself and the\ndefs above it in the file, never one below: no mutual recursion.\n\n## Types and values\n\n- `Nat`: unary, `0n`, `3n`, `1n+p`. `Nat.add`, `Nat.sub` (floors at 0n),\n  `Nat.mul`, `Nat.double`, `Nat.is_lt`. main.bend defines its own\n  `nat_eq` and `nat_le` answering `Bool`.\n- `Bool`: `True{}`, `False{}`; `a && b` is `Bool.and`, `a || b` is\n  `Bool.or`, `Bool.not(b)`.\n- `U32`: a 32-bit word, `42`; operators need the type: `(a + b : U32)`,\n  `(a < b : U32)` answers `Bool`. Bare `(a + b)` is on `Nat`.\n- `String` `\"abc\"`, `a ++ b` appends; `Char` `'a'`.\n- `List<A>`: `[a, b]`, `Nil{}`, `Con{h, t}`.\n- `Unit` (one value, `Unit{}`), `Empty` (no value), `A & B` pairs `(a, b)`,\n  `Or(A, B)` with `Inl{l}` and `Inr{r}`, `Maybe<A>` with `None{}` and\n  `Some{v}`. `Type` and `Data` are kinds.\n\n```\ntype Move is Data:\n  Up{}\n  Down{}\n\ntype Game is Data:\n  Game{x: Nat, y: Nat, won: Bool}\n```\n\nA type `is Data` may be reused with `+`; `is Type` may not. Fields are\nreached only by matching or by `Game{x, y, w} = g`.\n\n## Propositions and proofs\n\nA proposition is a type and a proof is a term of it. `Unit` is true,\n`Empty` is false, `A -> B` is implication, `@x: A -> B` is \"for all x\",\n`&x: A -> B` is \"exists x\" (built as `(x, proof)`, opened by\n`(x, w) = p`). `{a == b : T}` is equality. Its one proof is `{==}`,\naccepted when both sides compute to the same term: the checker evaluates\ndefinitions, so `{nat_eq(1n, 1n) == True{} : Bool}` is proved by `{==}`.\n`{a != b : T}` is `{a == b : T} -> Empty`. `Empty.absurd(P, e)` proves any\n`P` from `e : Empty`. Base has `Equal.sym(A, a, b, e)`,\n`Equal.trans(A, a, b, c, ab, bc)` and `Equal.cong(A, B, f, a, b, e)`.\n\nCase analysis: matching a parameter refines the goal in each arm. Where\nthe goal mentions `x : Nat`, `match x:` gives a `0n` goal and a `1n+p`\ngoal, both computed as far as they go. Induction: a recursive call is the\ninduction hypothesis, on a structurally smaller argument.\n\nRewriting: `%e : P`, with `e : {a == b : T}` and `P` the goal with `_`\nmarking where `b` sits. The goal must be `P` with `b` at the marks; the\nlines after the rewrite prove `P` with `a` there.\n\n```\ndef IsEven(n: Nat) -> Type:\n  match n:\n    case 0n:\n      Unit\n    case 1n+0n:\n      Empty\n    case 2n+p:\n      IsEven(p)\n\ndef half(n: Nat) -> Nat:\n  match n:\n    case 0n:\n      0n\n    case 1n+0n:\n      0n\n    case 2n+p:\n      1n+half(p)\n\nlaw half_ok:\n  for x: Nat\n  for e: IsEven(x)\n  {Nat.double(half(x)) == x : Nat}\n\ndef half_ok(x, e):\n  match x:\n    case 0n:\n      {==}\n    case 1n+0n:\n      match e:\n    case 2n+p:\n      %half_ok(p, e) : {2n+Nat.double(half(p)) == 2n+_ : Nat}\n      {==}\n```\n\nTruth by computation, the idiom PROOF.bend is built on:\n\n```\ndef T(b: Bool) -> Data:\n  match b:\n    case True{}:\n      Unit\n    case False{}:\n      Empty\n```\n\n`T(b)` is `Unit` when `b` computes to `True{}`, so `Unit{}` proves\n`T(check())` whenever `check()` is a closed term that evaluates to True:\nthe checker runs the program and the run is the proof. A hypothesis\n`w : T(a && b)` is split by `and_split(a, b, w, P, wa => wb => ...)`;\n`T(False{})` is `Empty`, so `Empty.absurd(P, w)` closes that arm. A match\non a Bool `c` when the goal mentions a function of `c` needs the goal\nrefined; PROOF.bend does it with `bool_case(c, z => Goal[z], et => ...,\nef => ...)`, which gives each arm an equation `{True{} == c : Bool}` or\n`{False{} == c : Bool}` to rewrite with, and `pick_split` does the same\nfor `Game.pick`. Read these kits in PROOF.bend before writing new ones.\n\nThe checker is one bidirectional pass with conversion where inference\nmeets checking. An error prints `expected`, `observed`, the context and\nthe line. The pair shows the two terms after evaluation at the exact spot\nthey part: read it, then change the term or the motive so they meet.\n\n## The game and its proof\n\nmain.bend: `Move` (Up, Down, Left, Right, Grab), `Game{x, y, won}`, the\nmap constants (`map_w` 12, `map_h` 8, a room of `room_w` x `room_h` in the\ncorner, the flag at `flag_x`, `flag_y`, the start cell), `wall(x, y)`\n(the room's two walls, and their mirrors on the far edges of the torus),\n`warp_*` (wrapping moves), `move` (a step that a wall refuses), `step`,\n`run`, `replay`, `is_won`, `grid` (the map as text) and `key` (a key's\ncharacter code to the `Maybe<Move>` it plays: a new key is one more line\nthere and one more `Move`).\n\nLAWS.bend states `you_cant_win`: for every `moves: List<Game.Move>`,\n`Game.is_won(Game.replay(Game.start(), moves)) == False{}`.\n\nPROOF.bend proves it with a safety invariant, `okpos(x, y)`: the player is\non the map (`x <= 11n`, `y <= 7n`), not inside the room (`x <= 2n` and\n`y <= 2n`), and not on a wall. `chk(a, x, y)` says a move `a` from a safe\ncell lands on a wall (so `move` refuses it) or on a safe cell.\n`chk_all(a, 11n)` conjoins `chk` over every cell and evaluates to True by\ncomputation; `chk_row_at`, `chk_all_at` and `cert` index that certificate\nat open coordinates; `go_ok` and `go_pos` turn it into \"the next cell is\nsafe\"; `no_flag` says a grab from a safe cell never sets `won`, because\nthe flag's cell is in the room; `run_false` carries the invariant through\nany list of moves; the fill starts it at the start cell, safe by\ncomputation (`Unit{}`). The literal numbers in PROOF.bend (11n, 7n, 2n,\n1n) mirror main.bend's map: when the map changes, they change with it,\nand `chk_all` must still evaluate to True, which is the geometric fact\nthe checker computes for you.\n\nPractical advice. Keep main.bend's helper shape (`nat_eq`, `nat_le`,\n`wall`, `pick`, `warp_*`, `move`, `step`, `run`, `replay`), so most of\nPROOF.bend survives an edit. Change one thing, submit, read the first\nerror, fix, submit again. A feature that opens\na path into the room (a hole, a wrap, a teleport, a bigger map) keeps the\nlaw only if something still seals the room: a wall where the path would\nenter is the usual answer. When the literal request breaks the proof,\nbuild the closest version that keeps the law, and say what changed. Only\n\"let me win\" itself has no lawful version.\n";var M2="gpt-5.6-luna",w2="https://api.openai.com/v1/responses",ni=60,Xa="/game/",Ue=["main.bend","LAWS.bend","PROOF.bend"],s2=[119,115,97,100,32],S2={ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d"},F2="The front end needs, in main.bend: `type Game is Data` with fields x: Nat, y: Nat, won: Bool, in that order; start() -> Game; replay(g: Game, moves: List<Move>) -> Game; is_won(g: Game) -> Bool; map_w() -> Nat; map_h() -> Nat; grid(y: Nat) -> String, rows 0..y joined by newlines, one character per cell: '#' wall, 'F' flag, 'P' the start, '.' floor; and key(k: U32) -> Maybe<Move>. Every key press reaches key() as its character code (letters lowercased: 'w' is 119, 'j' is 106; space is 32; the arrow keys arrive as w, a, s, d) and the front end plays the move it answers: Some{m} plays m, None{} does nothing. So a new key is: a constructor in Move, a case in step, a line in key, and the matching cases in PROOF.bend. The player is drawn at (x, y) and the level from grid(map_h() - 1n). Anything else may change.",l2=`You are the AI inside a lab on Bend's website. A player is playing Winning Is A Bug, a small game written in Bend, and asks you to change it. You edit the game and its proof; Bend checks your work; the player watches.

Files (use the tools):
- main.bend: the game. Edit freely.
- LAWS.bend: the human's law, you_cant_win. Read-only.
- PROOF.bend: the proof of the law about the current main.bend. Edit freely. After any change to main.bend, the proof must pass again: repair it.

Rules:
1. Do what the player asks, as literally as you can. When the literal change breaks the proof (submit rejects it), do not give up and do not water the request down to nothing: find a creative workaround that honors the request as closely as possible and still passes the checker. A wrap-around gets a wall on the far edge; a teleport lands outside the room; a bigger map keeps the room sealed; 'remove the walls' removes every wall but the room's. Ship the closest lawful version, and tell the player what you kept and what the law made you change. Only a request that is nothing but 'let me win' has no lawful version: then say so in one sentence.
2. `+F2+`
3. Work in this order: read the files, edit main.bend, and submit at once, before touching PROOF.bend, every time you change the game. The player is watching, and that first submit is where they see Bend catch the change against the law: never skip it, even when you expect the proof to break. Only submit runs the checker: it checks main.bend, then main.bend, LAWS.bend and PROOF.bend together, and answers the first error with its file and location. Then repair PROOF.bend, submit again, and repeat until it is accepted. Do not stop before submit is accepted or the request is shown to be unlawful.
4. Say what you did at the end, in two or three plain sentences for the player.

The Bend guide follows.

`+ai,ci={"main.bend":ke,"LAWS.bend":_e,"PROOF.bend":pe};_.set("/bend2/base.bend",me);for(let a of Ue)_.set(Xa+a,ci[a]);_.set(Xa+"ALL.bend",`import Base
import ./main.bend as Game
import ./LAWS.bend as Laws
import ./PROOF.bend as Proof
`);var ee=null;async function g2(){if(ee===null){let a=aa();await ba(a,"/bend2/base.bend","",new Map),ee=new Set(a.order)}return ee}function hn(a){let e=a;return e?.$==="Err"?Qe(e):String(a?.message??a)}async function In(a){let e=aa();try{await ba(e,Xa+a,"",new Map),ne(e)}catch(o){return{ok:!1,text:hn(o),hols:0,uns:0}}let n=await g2(),i=[...new Set(e.order)].filter((o)=>!n.has(o)&&e.tlds[o].u===!0).length,y=e.hols>0?String(e.hols)+(e.hols===1?" TODO":" TODOs")+` found.
The code is incomplete, and not a valid proof yet.`:i>0?String(i)+(i===1?" term":" terms")+` annotated as unsafe.
The code is well-typed, but may contain logical paradoxes.`:"All terms check.";return{ok:e.hols===0&&i===0,text:y,book:e,hols:e.hols,uns:i}}class Ln{book;constructor(a){this.book=a}ev(a,e){let n=this.book,i=n.order.length;try{return ae(n,Xa,"def RUN() -> "+a+`:
  `+e+`
`,"",Object.create(null)),ne(n,i),Da(A(R(n,n.tlds.RUN.v)))}finally{for(let y of n.order.splice(i))delete n.tlds[y]}}state(a){let e=/^Game\{(\d+)n, (\d+)n, (True|False)\{\}/.exec(a);if(e===null)throw Error("Game must keep the fields x: Nat, y: Nat, won: Bool, in that order (start() answered "+a+")");return{x:Number(e[1]),y:Number(e[2]),won:e[3]==="True",term:a}}start(){return this.state(this.ev("Game","start()"))}replay(a,e){return this.state(this.ev("Game","replay("+a.term+", ["+e+"])"))}key(a){let e=/^Some\{(.*)\}$/.exec(this.ev("Maybe<Move>","key("+a+")"));return e===null?null:e[1]}nat(a){return Number(this.ev("Nat",a+"()").replace(/n$/,""))}grid(){return JSON.parse(this.ev("String","grid(Nat.sub(map_h(), 1n))"))}}function di(a){for(let e of["start","replay","is_won","map_w","map_h","grid","key"])if(a.book.tlds[e]?.$!=="Def")return"main.bend must keep a def named "+e;try{let e=a.start(),n=a.nat("map_h"),i=a.nat("map_w"),y=a.grid().split(`
`);if(y.length!==n||y.some((o)=>o.length!==i))return"grid(map_h() - 1n) must answer map_h() rows of map_w() cells";for(let o of s2){let c=a.key(o);if(c!==null)a.replay(e,c)}if(!/^(True|False)\{\}$/.test(a.ev("Bool","is_won("+e.term+")")))return"is_won must answer a Bool"}catch(e){return hn(e)}return null}var yn,x,rn=[],oe=12,ye=8,ce=new Set,cn=null,he=0,Te=0,Aa=null,ra=null,Ne=0;function Me(a){if(yn=a,x=yn.start(),rn=yn.grid().split(`
`),ye=rn.length,oe=Math.max(...rn.map((e)=>e.length)),ce=new Set,cn=null,rn.forEach((e,n)=>[...e].forEach((i,y)=>{if(i==="#")ce.add(y+","+n);if(i==="F")cn=[y,n]})),he=Te=0,Aa=ra=null,Ca!==void 0)Ne=performance.now(),setTimeout(vn,3000)}function W2(a){let e;try{if(e=yn.key(a),e===null)return!1;let{x:n,y:i}=x;x=yn.replay(x,e);let y=e.replace(/\{.*$/,""),o={Up:[0,-1],Down:[0,1],Left:[-1,0],Right:[1,0]}[y];if(y==="Grab")Te+=1;else if(he+=1,x.x===n&&x.y===i&&o!==void 0)ra={dx:o[0],dy:o[1],t0:performance.now()};else if(Math.abs(x.x-n)<=1&&Math.abs(x.y-i)<=1)Aa={fx:n,fy:i,t0:performance.now()}}catch(n){return fn("bad","the game crashed: "+hn(n)),!0}return vn(),!0}var Ua={floor:["#f3efe8","#e5e1d9"],wall:"#a6a3a0",cap:"#bebbb8",pole:"#87847d",cloth:"#7e9a5e",skin:"#78c0e3",eye:"#2f3b4c",win:"#f6e4e1",winRim:"#dfa9a2",winInk:"#c46a60"},B2='ui-monospace,Menlo,"SF Mono",Consolas,monospace',ei=(a,e,n)=>a+(e-a)*n;function G2(a,e){let n=a.getContext("2d"),i=a.clientWidth,y=window.devicePixelRatio||1,o=i/oe,c=o*ye;if(a.width!==Math.round(i*y)||a.height!==Math.round(c*y))a.width=Math.round(i*y),a.height=Math.round(c*y);n.setTransform(y,0,0,y,0,0),n.clearRect(0,0,i,c);let d=(w,s,u,L,X,oa)=>{n.fillStyle=oa,n.beginPath(),n.roundRect(w,s,u,L,X),n.fill()};for(let w=0;w<ye;w++)for(let s=0;s<oe;s++){let u=s*o+1.5,L=w*o+1.5,X=o-3;if(!ce.has(s+","+w)){d(u,L,X,X,o/8,Ua.floor[(s+w)%2]);continue}d(u,L,X,X,o/8,Ua.wall),d(s*o+o/8,w*o+o/8,o*0.75,o*0.21,o/19,Ua.cap)}let f=o/40;if(cn!==null&&!x.won){let w=cn[0]*o,s=cn[1]*o;n.strokeStyle=Ua.pole,n.lineWidth=2.5,n.lineCap="round",n.beginPath(),n.moveTo(w+14*f,s+31*f),n.lineTo(w+14*f,s+9*f),n.stroke(),n.fillStyle=Ua.cloth,n.beginPath(),n.moveTo(w+15*f,s+9*f),n.lineTo(w+31*f,s+14.5*f),n.lineTo(w+15*f,s+20*f),n.closePath(),n.fill()}let{x:U,y:T}=x;if(Aa!==null){let w=Math.min((e-Aa.t0)/90,1);if(U=ei(Aa.fx,U,w),T=ei(Aa.fy,T,w),w===1)Aa=null}if(ra!==null){let w=(e-ra.t0)/120;if(w<1)U+=ra.dx*0.3*(1-w),T+=ra.dy*0.3*(1-w);else ra=null}let h=U*o+o/2,N=T*o+o/2;n.fillStyle=Ua.skin,n.beginPath(),n.arc(h,N,12.5*f,0,Math.PI*2),n.fill(),n.fillStyle=Ua.eye,n.beginPath(),n.arc(h-4.5*f,N-2*f,2.2*f,0,Math.PI*2),n.arc(h+4.5*f,N-2*f,2.2*f,0,Math.PI*2),n.fill();let M=(e-Ne)/900;if(M<1)n.fillStyle="rgba(126,154,94,"+(0.45*(1-M)*(1-M)).toFixed(3)+")",n.beginPath(),n.roundRect(0,0,i,c,o/8),n.fill();if(x.won){let w=o*5.6,s=o*1.5,u=(i-w)/2,L=(c-s)/2;n.fillStyle=Ua.win,n.strokeStyle=Ua.winRim,n.lineWidth=1.5,n.beginPath(),n.roundRect(u,L,w,s,10),n.fill(),n.stroke(),n.fillStyle=Ua.winInk,n.font="600 "+o*0.6+"px "+B2,n.textAlign="center",n.fillText("YOU WON !?",i/2,L+s*0.66)}}var Ra={type:"string"},Vn=(a,e,n)=>({type:"function",name:a,description:e,strict:!0,parameters:{type:"object",properties:n,required:Object.keys(n),additionalProperties:!1}}),A2=[Vn("read_file","Read one of the files. Paths: main.bend, LAWS.bend, PROOF.bend.",{path:Ra}),Vn("write_file","Replace the whole content of main.bend or PROOF.bend. LAWS.bend is read-only.",{path:Ra,content:Ra}),Vn("edit_file","Replace one exact occurrence of `old` with `new` in main.bend or PROOF.bend. `old` must occur exactly once, indentation included.",{path:Ra,old:Ra,new:Ra}),Vn("submit","Submit the files. Bend checks main.bend, then main.bend, LAWS.bend and PROOF.bend together: no error, the law you_cant_win proved, no TODO, no @unsafe, LAWS.bend untouched, and the front end's API intact. Accepted work goes live at once. A rejection answers the first error with its file and location: fix it and submit again.",{})];async function fi(){if(_.get(Xa+"LAWS.bend")!==ci["LAWS.bend"])return{game:!1,text:"LAWS.bend was changed"};let a=await In("main.bend");if(!a.ok)return{game:!1,text:"main.bend: "+a.text};let e=await In("ALL.bend");if(!e.ok){let y=e.book?.tlds["LAWS.you_cant_win"];return{game:!1,text:y!==void 0&&y.v===null?"the law you_cant_win has no proof: PROOF.bend must fill def Laws.you_cant_win":"PROOF.bend: "+e.text}}let n=new Ln(a.book),i=di(n);if(i!==null)return{game:!0,text:i};return Me(n),vn(),null}var $a=null;async function Ui(a,e){let n=String(e.path??"").replace(/^\.?\//,"");if(a!=="submit"&&!Ue.includes(n))return"no such file: "+n+" (the files are main.bend, LAWS.bend, PROOF.bend)";let i=Xa+n;switch(a){case"read_file":return _.get(i);case"write_file":if(n==="LAWS.bend")return"LAWS.bend is the human's file: read-only.";return _.set(i,e.content),"wrote "+n+" ("+e.content.split(`
`).length+" lines)";case"edit_file":{if(n==="LAWS.bend")return"LAWS.bend is the human's file: read-only.";let y=_.get(i),o=y.split(e.old).length-1;if(o!==1)return o===0?"old text not found in "+n+" (it must match exactly, indentation included)":"old text occurs "+o+" times in "+n+"; include more context so it is unique";return _.set(i,y.replace(e.old,()=>e.new)),"edited "+n}case"submit":return $a=await fi(),$a===null?"Accepted. The new game is live.":"Rejected: "+$a.text;default:return"unknown tool "+a}}async function hi(a,e,n){let i=await fetch(w2,{method:"POST",signal:e,headers:{"Content-Type":"application/json",Authorization:"Bearer "+Pn()},body:JSON.stringify(a)});if(!i.ok){let f=i.status+" "+i.statusText;try{f=(await i.json()).error?.message??f}catch{}throw Error(f)}let y=i.body.getReader(),o=new TextDecoder,c="",d=null;for(;;){let{value:f,done:U}=await y.read();if(U)break;c+=o.decode(f,{stream:!0});let T;while((T=c.indexOf(`

`))>=0){let h=c.slice(0,T);c=c.slice(T+2);let N=h.split(`
`).filter((w)=>w.startsWith("data:")).map((w)=>w.slice(5).trim()).join(`
`);if(N===""||N==="[DONE]")continue;let M=JSON.parse(N);if(M.type==="response.completed"||M.type==="response.incomplete")d=M.response;else if(M.type==="response.failed"||M.type==="error")throw Error(M.error?.message??M.response?.error?.message??"the model failed");else n(M)}}if(d===null)throw Error("the stream ended before the response completed");return d}var Kn=!1,On=null,ie=!0,Cn=null;async function r2(a){Kn=!0,On=new AbortController;let e=On.signal;Va("u",a),Un();let n=!1,i=!1,y=0,o=[{role:"user",content:a}];try{for(;;){let c=oi("th"),d=oi("a"),f=[],U=()=>hi({model:fe(),instructions:l2,input:o,tools:A2,previous_response_id:Cn,stream:!0,store:!0,service_tier:"fast",reasoning:ie?{effort:"high",summary:"auto"}:{effort:"high"}},e,(h)=>{if(h.type==="response.reasoning_summary_text.delta")c.add(h.delta);else if(h.type==="response.reasoning_summary_part.added")c.add(c.text()?`

`:"");else if(h.type==="response.output_text.delta")d.add(h.delta);else if(h.type==="response.output_item.done"&&h.item.type==="function_call")f.push(h.item)});if(Cn=(await U().catch((h)=>{let N=String(h?.message);if(ie&&/summar/i.test(N))return ie=!1,U();if(Cn!==null&&/previous_response|not found/i.test(N))return Cn=null,U();throw h})).id,f.length===0){if(i||n)break;n=!0,o=[{role:"user",content:"You stopped without calling submit. If the change is done, call submit now. If it cannot be done under the law, say so in one or two sentences."}];continue}o=[];for(let h of f){let N={};try{N=JSON.parse(h.arguments||"{}")}catch{}let M=await Ui(h.name,N);if(C2(h.name,N,M),h.name==="submit"&&M.startsWith("Accepted"))i=!0;o.push({type:"function_call_output",call_id:h.call_id,output:M}),y+=1}if(y>=ni){fn("bad","Stopped after "+ni+" tool calls. Send another prompt to go on.");break}}}catch(c){fn(e.aborted?"dim":"bad",e.aborted?"Stopped.":"Error: "+hn(c))}Kn=!1,On=null,Un()}var V2=`
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
#lab .st.fresh{color:var(--grn);font-weight:600}
#lab .how{max-width:30em;margin:1.2em auto 0;text-align:center;white-space:pre-line;color:var(--b01)}
#lab .how b{color:var(--b02)}
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
`;function g(a,e={},...n){let i=document.createElement(a);for(let[y,o]of Object.entries(e))i.setAttribute(y,o);return i.append(...n),i}var ii,Ca,un,Za,H,Na,dn,Ja,de=!1,Pn=()=>localStorage.getItem("bend.lab.key")??"",fe=()=>localStorage.getItem("bend.lab.model")??M2;function vn(){if(Za===void 0)return;let a=performance.now()-Ne<3000&&!x.won;Za.textContent=x.won?"YOU WON?! Impossible: please file a bug.":a?"new rules are live: play on":"moves "+he+" · grabs "+Te+" · still not won",Za.classList.toggle("won",x.won),Za.classList.toggle("fresh",a)}function zn(){Ca.scrollTop=Ca.scrollHeight}function Va(a,e){let n=g("div",{class:a},e);return Ca.append(n),zn(),n}var fn=(a,e)=>{if(Ca!==void 0)Va(a,e)};function oi(a){let e=null;return{add:(n)=>{if(e===null)e=Va(a,"");e.append(n),zn()},text:()=>e?.textContent??""}}function C2(a,e,n){let i=e.path??"",y=(c,d)=>g("pre",{class:c},d),o=(c,...d)=>g("details",{},g("summary",{},c),...d);if(a==="read_file")Va("tc","read "+i);else if(a==="write_file")Va("tc","write "+i).append(Ue.includes(i)&&i!=="LAWS.bend"?o(n,y("",e.content)):y("err",n));else if(a==="edit_file")Va("tc","edit "+i).append(n.startsWith("edited")?o(n,y("","- "+e.old.split(`
`).join(`
- `)+`
+ `+e.new.split(`
`).join(`
+ `))):y("err",n));else if(a==="submit"){let c=Va("tc","submit");if($a===null)c.append(g("div",{class:"ok"},"✓ Accepted. The new game is live: play it above."));else{let d=g("a",{class:"bad"},"Your program broke the "+($a.game?"game":"law")+". Try again."),f=y("err",$a.text);f.hidden=!0,d.onclick=()=>{f.hidden=!f.hidden,zn()},c.append(`
`,d,f)}}zn()}function Un(){if(dn.replaceChildren(),Kn){let n=g("a",{},"stop");n.onclick=()=>On?.abort(),dn.append(g("span",{},"working…"),n),H.disabled=!0;return}H.disabled=!1;let a=g("a",{title:"change the model"},fe());a.onclick=()=>{let n=prompt("OpenAI model id",fe());if(n)localStorage.setItem("bend.lab.model",n.trim()),Un()};let e=g("a",{title:"change the key"},Pn()?"key ····"+Pn().slice(-4):"no key");e.onclick=()=>{Ja.replaceChildren(g("span",{},"key"),Na),Na.focus()},dn.append(g("span",{},a," · thinking high · fast · ",e),g("span",{},"byok · your key stays in this browser"))}function u2(){let a=H.value.trim();if(a===""||Kn)return;if(Pn()===""){Ja.replaceChildren(g("span",{},"key"),Na),Na.focus(),fn("dim","Paste your OpenAI API key first. It is kept in this browser only and sent to api.openai.com alone.");return}H.value="",H.style.height="",r2(a)}function O2(){document.head.append(g("style",{},V2)),un=g("canvas"),Za=g("p",{class:"st"});let a=g("a",{title:"close"},"×");a.onclick=()=>Ti(!1),H=g("textarea",{placeholder:"make the walls disappear",rows:"1"}),H.oninput=()=>{H.style.height="",H.style.height=Math.min(H.scrollHeight,150)+"px"},H.onkeydown=(y)=>{if(y.key==="Enter"&&!y.shiftKey)y.preventDefault(),u2();if(y.key==="Escape")H.blur()},un.onclick=()=>H.blur(),Na=g("input",{type:"password",placeholder:"OpenAI API key, then Enter",autocomplete:"off"}),Na.onkeydown=(y)=>{if(y.key==="Enter")localStorage.setItem("bend.lab.key",Na.value.trim()),Na.value="",Ja.replaceChildren(g("span",{},">"),H),Un(),H.focus();else if(y.key==="Escape")Ja.replaceChildren(g("span",{},">"),H),H.focus()},Ja=g("div",{class:"box"},g("span",{},">"),H),dn=g("div",{class:"meta"}),Ca=g("div",{class:"chat"}),ii=g("div",{id:"lab"},g("div",{class:"top"},g("div",{class:"hd"},g("span",{},g("b",{},"Winning Is A Bug")," · the lab"),a),un,Za,g("p",{class:"how"},g("b",{},"Grab the flag to win."),`
`,g("span",{class:"dim"},"WASD to move · space to grab"),`

`,"Can't win? Prompt the AI below to ",g("b",{},"edit the game"),`.
You can ask `,g("i",{},"anything"),". ",g("b",{},"Bend")," guards it. Good luck!")),Ca,g("div",{class:"in"},Ja,dn));let e=g("div",{id:"page"}),n=g("div",{id:"pagein"});while(document.body.firstChild)n.append(document.body.firstChild);e.append(n),document.body.append(e,ii),document.addEventListener("keydown",(y)=>{if(!de)return;let o=y.target;if(o===H||o===Na||y.metaKey||y.ctrlKey||y.altKey)return;let c=S2[y.key]??y.key;if(c.length!==1)return;if(W2(c.toLowerCase().charCodeAt(0)))y.preventDefault()});let i=(y)=>{if(de)G2(un,y);requestAnimationFrame(i)};requestAnimationFrame(i)}function Ti(a){let e=document.getElementById("page"),n=a?window.scrollY:e.scrollTop;if(de=a,document.documentElement.classList.toggle("lab",a),a)e.scrollTop=n;else window.scrollTo(0,n);if(a)vn(),Un()}async function yi(){let a=document.getElementById("try");if(a===null)return;O2();let e=null,n=()=>{return e??=In("main.bend").then((i)=>{Me(new Ln(i.book)),Ti(!0)}),e.catch((i)=>fn("bad","the game did not compile: "+hn(i))),e};if(a.addEventListener("click",(i)=>{i.preventDefault(),n()}),location.hash==="#lab")n()}if(typeof document<"u")if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",yi);else yi();})();
