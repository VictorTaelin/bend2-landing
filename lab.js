(()=>{var{defineProperty:xn,getOwnPropertyNames:si,getOwnPropertyDescriptor:Ui}=Object,Ti=Object.prototype.hasOwnProperty;function Ni(a){return this[a]}var li=(a)=>{var e=(Te??=new WeakMap).get(a),n;if(e)return e;if(e=xn({},"__esModule",{value:!0}),a&&typeof a==="object"||typeof a==="function"){for(var i of si(a))if(!Ti.call(e,i))xn(e,i,{get:Ni.bind(a,i),enumerable:!(n=Ui(a,i))||n.enumerable})}return Te.set(a,e),e},Te;var wi=(a)=>a;function Mi(a,e){this[a]=wi.bind(null,e)}var gi=(a,e)=>{for(var n in e)xn(a,n,{get:e[n],enumerable:!0,configurable:!0,set:Mi.bind(e,n)})};var Io={};gi(Io,{verify:()=>yi,tool:()=>ci,respond:()=>fi,level:()=>he,check:()=>Kn,api_check:()=>ii,Game:()=>zn});var p=new Map;function Dn(a){return p.has(a)}function Zn(a){return a}function Ne(a){let e=p.get(a);if(e===void 0)throw Error("ENOENT: no such file: "+a);return e}function le(){}function we(a,e){p.set(a,e)}function Me(){return"/"}function Rn(a){let e=a.startsWith("/"),n=[];for(let i of a.split("/")){if(i===""||i===".")continue;if(i===".."&&n.length>0&&n[n.length-1]!=="..")n.pop();else if(i!==".."||!e)n.push(i)}return(e?"/":"")+(n.join("/")||(e?"":"."))}function qn(...a){return Rn(a.join("/"))}function ge(...a){return Rn("/"+a.join("/"))}function Jn(a){let e=a.lastIndexOf("/");return e<0?".":e===0?"/":a.slice(0,e)}var Tn={normalize:Rn,join:qn,dirname:Jn};function Fe(a){return decodeURIComponent(String(a).replace(/^file:\/\//,""))}function Z(a,e,n,i){return{$:"Var",k:a,i:e,s:n,v:i}}function K(a,e,n){return{$:"Ref",k:a,s:e,b:n}}function Ha(a,e,n,i){return{$:"Sub",i:a,v:e,f:n,s:i}}function pa(a,e,n,i,o,y){return{$:"Let",k:a,i:e,q:y??a.map(()=>v()),v:n,f:i,s:o}}function x(a,e){return{$:"Typ",g:a,s:e}}function la(a){return{$:"Qnt",s:a}}function $(a,e){return{$:"Qua",q:a,s:e}}function Ga(a,e,n){return{$:"Min",a,b:e,s:n}}function m(a,e,n,i,o,y){return{$:"All",q:a,k:e,i:n,A:i,B:o,s:y}}function k(a,e,n,i){return{$:"Lam",k:a,i:e,f:n,s:i}}function I(a,e,n){return{$:"App",f:a,x:e,s:n}}function ha(a,e,n,i=[]){return{$:"ADT",k:a,x:e,r:i,s:n}}function R(a,e,n){return{$:"Ctr",k:a,x:e,s:n}}function Wa(a,e,n,i,o){return{$:"Mat",k:a,h:e,m:n,s:i,ks:o}}function xa(a){return{$:"Efq",s:a}}function wa(a,e,n,i){return{$:"Eql",a,b:e,T:n,s:i}}function Pa(a){return{$:"Rfl",s:a}}function an(a,e,n,i){return{$:"Rwt",e:a,p:e,f:n,s:i}}function nn(a,e){return{$:"Hol",k:a,s:e}}function ra(a,e,n){return{$:"Ann",x:a,T:e,s:n}}function ve(){return{$:"Emp"}}function Xa(a,e,n){return{$:"Bin",v:a,l:e,r:n}}function X(){return{$:"None"}}function v(){return{$:"Lone"}}function Ma(){return{$:"Many"}}function fa(a,e,n){return{tm:ra(a,Z("_",-1,void 0,e)),ty:e,us:n}}function Na(a,e,n){return{tm:ra(a,Z("_",-1,void 0,e)),us:n}}function M(a,e,n,i,o,y){return{$:"Err",bok:a,ctx:e,exp:n,obs:i,spn:o,def:y}}function La(a){let e=a.charCodeAt(0);return e>=65&&e<=90||e>=97&&e<=122||e===95}function ja(a){let e=a.charCodeAt(0);return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===95||e===46}function Pe(a,e){let n=a,i=e;while(!0)switch(n.$){case"Emp":return null;case"Bin":{if(i===0)return n.v;let o=i%2===1;n=o?n.l:n.r,i=o?(i-1)/2:(i-2)/2;break}}}function Ia(a,e,n){switch(a.$){case"Emp":return Ia(Xa(null,a,a),e,n);case"Bin":{if(e===0)return Xa(n,a.l,a.r);if(e%2===1){let o=Ia(a.l,(e-1)/2,n);return Xa(a.v,o,a.r)}let i=Ia(a.r,(e-2)/2,n);return Xa(a.v,a.l,i)}}}function gn(a,e,n){switch(a.$){case"Emp":return e;case"Bin":switch(e.$){case"Emp":return a;case"Bin":{let i=a.v===null?e.v:e.v===null?a.v:n(a.v,e.v),o=gn(a.l,e.l,n),y=gn(a.r,e.r,n);return Xa(i,o,y)}}}}function Ea(a,e=0,n=1){switch(a.$){case"Emp":return[];case"Bin":{let i=a.v===null?[]:[[e,a.v]],o=Ea(a.l,e+n*1,n*2),y=Ea(a.r,e+n*2,n*2);return i.concat(o,y)}}}function Fi(a,e){for(let n=a;n!==null;n=n.n)if(n.k===e)return n.v;return null}function Ya(a,e,n){return{k:e,v:n,n:a}}function Le(a,e){switch(a.$){case"None":return e;default:switch(e.$){case"None":return a;default:return Ma()}}}function ze(a,e){switch(a.$){case"None":return e;case"Lone":switch(e.$){case"Many":return Ma();default:return v()}case"Many":return Ma()}}function Si(a,e){switch(a.$){case"None":return X();case"Lone":return e;case"Many":return Le(e,e)}}function Fn(a,e){if(a.$==="None")return X();else return e}function Se(a,e,n,i,o,y,c){if(ze(o,i).$!==i.$){let f=Gn(o)+n;if(o.$==="Many")f=n+" (consumed more than once)";throw M(a,e,Gn(i)+n,f,y,c)}}function b(){return ve()}function Ge(a,e){return Pe(a,e)??X()}function ga(a,e){return gn(a,e,Le)}function Gi(a,e){return gn(a,e,ze)}function We(a,e){return Ia(a,e,X())}function jn(a,e,n,i=[]){if(n===0)return aa(a,R(e,i));else return k("_",0,(o)=>{return jn(a,e,n-1,[...i,o])})}function xe(a,e){return a.u===!0&&e.$==="Many"?v():e}function Wi(a,e){let n=rn(a.t)[1],i="EQ";for(let o=0;o<n.length&&o<e.length&&i==="EQ";o++)i=$n(a.qs[o],e[o],n[o]);return i}function aa(a,e,n){let i=_(a);if(i.$==="Lam")return i.f(e);return I(i,e,n)}function rn(a){let e=[],n=a;while(!0)switch(n.$){case"App":{e.push(n.x),n=n.f;break}default:return e.reverse(),[n,e]}}function j(a,e="_"){if(a.$==="Var"&&a.i<0)return a;return Z(e,-1,a.s,a)}function ri(a){switch(a.$){case"Ctr":return R(a.k,a.x.map((e)=>j(e)),a.s);case"ADT":return ha(a.k,a.x.map((e)=>j(e)),a.s,a.r);case"All":return m(a.q,a.k,a.i,j(a.A),a.B,a.s);case"Mat":return Wa(a.k,j(a.h),j(a.m),a.s,a.ks);case"Eql":return wa(j(a.a),j(a.b),j(a.T),a.s);case"Min":return Ga(j(a.a),j(a.b),a.s);case"Typ":return x(j(a.g),a.s);default:return a}}function ta(a){while(a.$==="Var"&&a.v!==void 0)a=a.v;return a}function _(a){let e=ta(a);while(e.$==="Ann")e=ta(e.x);return e}function r(a,e=null){switch(a.$){case"Var":{if(a.i<0)return a;let n=Fi(e,a.i);if(n===null)return K(a.k,a.s);else if(typeof n==="function")return n(a.s);else return n.s!==void 0||a.s===void 0||n.$==="Var"&&n.i<0?n:{...n,s:a.s}}case"Ref":return K(a.k[0]==="."&&a.k[1]!=="."?"Nat"+a.k:a.k,a.s,a.b);case"Sub":{let n=a.v,i=n.$==="PVar"||n.$==="PCtr"?(o)=>r(An(n,o),e):r(n,e);return r(a.f,Ya(e,a.i,i))}case"Let":{let n=a,i=n.v.map((o)=>r(o,e));return pa(n.k,n.i,i,(o)=>{let y=e;for(let c=0;c<o.length;c++)y=Ya(y,n.i[c],o[c]);return r(n.f,y)},n.s,n.q)}case"Typ":return x(r(a.g,e),a.s);case"Qnt":case"Qua":return a;case"Min":return Ga(r(a.a,e),r(a.b,e),a.s);case"All":{let n=a,i=r(n.A,e);return m(n.q,n.k,n.i,i,(o)=>{return r(n.B,Ya(e,n.i,o))},n.s)}case"Lam":{let n=a;return k(n.k,n.i,(i)=>{return r(n.f,Ya(e,n.i,i))},n.s)}case"App":return I(r(a.f,e),r(a.x,e),a.s);case"ADT":return ha(a.k,a.x.map((n)=>r(n,e)),a.s,a.r);case"Ctr":return R(a.k,a.x.map((n)=>r(n,e)),a.s);case"Mat":return Wa(a.k,r(a.h,e),r(a.m,e),a.s,a.ks);case"Efq":return xa(a.s);case"Eql":return wa(r(a.a,e),r(a.b,e),r(a.T,e),a.s);case"Rfl":return Pa(a.s);case"Rwt":return an(r(a.e,e),r(a.p,e),r(a.f,e),a.s);case"Hol":return nn(a.k,a.s);case"Ann":return ra(r(a.x,e),r(a.T,e),a.s)}}function C(a,e=0){let n=ta(a);switch(n.$){case"Var":return Z(n.k,n.i,n.s);case"Ref":return K(n.k,n.s,n.b);case"Sub":return Ha(n.i,n.v.$==="PVar"||n.v.$==="PCtr"?n.v:C(n.v,e),C(n.f,e),n.s);case"Let":{let i=n.k.map((y,c)=>Z(y,e+c)),o=n.v.map((y)=>C(y,e));return pa(n.k,i.map((y,c)=>e+c),o,C(n.f(i),e+n.k.length),n.s,n.q)}case"Typ":return x(C(n.g,e),n.s);case"Qnt":case"Qua":return n;case"Min":return Ga(C(n.a,e),C(n.b,e),n.s);case"All":{let i=Z(n.k,e);return m(n.q,n.k,e,C(n.A,e),C(n.B(i),e+1),n.s)}case"Lam":{let i=Z(n.k,e);return k(n.k,e,C(n.f(i),e+1),n.s)}case"App":return I(C(n.f,e),C(n.x,e),n.s);case"ADT":return ha(n.k,n.x.map((i)=>C(i,e)),n.s,n.r);case"Ctr":return R(n.k,n.x.map((i)=>C(i,e)),n.s);case"Mat":return Wa(n.k,C(n.h,e),C(n.m,e),n.s,n.ks);case"Efq":return xa(n.s);case"Eql":return wa(C(n.a,e),C(n.b,e),C(n.T,e),n.s);case"Rfl":return Pa(n.s);case"Rwt":return an(C(n.e,e),C(n.p,e),C(n.f,e),n.s);case"Hol":return nn(n.k,n.s);case"Ann":return ra(C(n.x,e),C(n.T,e),n.s)}}function $n(a,e,n){switch(a.$){case"None":return"EQ";default:break}let i=_(e),o=_(n);switch(o.$){case"Var":if(i.$==="Var"&&i.i===o.i)return"EQ";else return"GT";case"Ctr":{if(i.$==="Ctr"&&i.k===o.k&&i.x.length===o.x.length){let y="EQ";for(let c=0;c<i.x.length&&y!=="GT";c++){let f=$n(v(),i.x[c],o.x[c]);y=f==="EQ"?y:f}if(y!=="GT")return y}for(let y of o.x)if($n(v(),i,y)!=="GT")return"LT";return"GT"}default:return"GT"}}function L(){return ve()}function ba(a,e,n,i,o){return Ia(a,e,{q:n,k:i,T:o})}function Bi(a,e){for(let[,n]of Ea(e)){if(n.q.$==="None")continue;let i=Y(a,n.T);if(i.$==="ADT"&&Sn(a,i,e).c.length===0)return!0}return!1}function En(a){let e=Ea(a);e.sort((i,o)=>i[0]-o[0]);let n=[];for(let[i,o]of e){while(n.length<i)n.push("_");n.push(o.k)}return n}function re(a,e){for(let n of a)if(n.k===e)return n;return null}function na(){return{tlds:Object.create(null),ctrs:Object.create(null),order:[],hols:0,open:0,tmps:Object.create(null)}}function Sa(a,e){return a.ctrs[e]??null}function Be(a,e){let n=_(Sa(a,e).T);for(let i=0;n.$==="All";i++)n=_(n.B(Z(n.k,i)));return n.$==="ADT"?n.k:e}function Sn(a,e,n,i){let o=a.tlds[e.k];if(o===void 0||o.$!=="ADT")throw M(a,n,"a declared datatype (unknown: "+e.k+")",void 0,e.s,i);if(e.r.length===0)return o;let y=new Set(e.r);return{$:"ADT",n:o.n,g:o.g,T:o.T,c:o.c.filter((c)=>!y.has(c.k))}}var Ae=Zn(Fe(new URL("./base.bend","file:///bend2/bend.ts"))),ln=ge(qn(Me(),".bend","store")),Ce="https://hub.bend-lang.org";async function Ve(a,e,n,i){let o=await fetch(Ce+"/"+e),y=o.ok?await o.text():"";if(!o.ok||!(await Ai(y)).startsWith(n))throw M(a,L(),"a file at "+Ce+"/"+e+" hashing to "+n,void 0,i);return y}async function Ai(a){return Buffer.from(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(a))).toString("hex")}async function ma(a,e,n,i,o){if(e.startsWith(ln+"/")&&!Dn(e)){let T=e.slice(ln.length+1).split("/")[0],N=ln+"/"+T+"/",l=await Ve(a,T+"/manifest",T.slice(2),o);for(let[w,W]of l.trim().split(`
`).map((O)=>O.split(" ")))le(Jn(N+W),{recursive:!0}),we(N+W,await Ve(a,T+"/"+W,w,o))}if(!Dn(e))throw M(a,L(),"no such file: "+e,void 0,o);let y=Zn(e),c=i.get(y);if(c===null)throw M(a,L(),"an import cycle through "+e,void 0,o);if(c!==void 0){if(c!==n)throw M(a,L(),"one namespace per file ("+e+" is both '"+c+"' and '"+n+"')",void 0,o);return a.order.length}i.set(y,null);let f=e.slice(0,e.lastIndexOf("/")+1),d=Object.create(null),h=Ne(e,"utf8"),U=h.split(`
`);for(let T=0;T<U.length;T++){let N=U[T].trim(),l=N.match(/^import(\s.*|)$/);if(l!==null){let w=l[1].match(/^\s+(\S+)(?:\s+as\s+([A-Za-z_][A-Za-z0-9_]*))?\s*(?:#.*)?$/),W=h.split(`
`,T).join(`
`).length+(T&&1)+U[T].indexOf(w===null?N:w[1]),O={src:h,beg:W,end:W};if(w===null||w[2]===void 0&&w[1]!=="Base")throw M(a,L(),"an import ('import Base', or 'import <path> as <Name>')","'"+N+"'",O);if(w[2]===void 0)await ma(a,Ae,"",i,O);else{let q=Tn.normalize(w[1]);if(!q.endsWith(".bend"))throw M(a,L(),"an import of a .bend file","'"+w[1]+"'",O);let E=f+q,t=Tn.join(Tn.dirname(n),q);if(q.startsWith("/"))E=q,t=q;if(/^0x[0-9a-f]+\//.test(q))E=ln+"/"+q,t=q;d[w[2]]=t.replace(/\.bend$/,""),await ma(a,E,d[w[2]],i,O)}U[T]="";continue}if(N!==""&&!N.startsWith("#"))break}let s=a.order.length;if(pn(a,f,U.join(`
`),n,d),y===Ae)for(let T of a.order.slice(s)){let N=a.tlds[T];if(N.$==="Def")N.b=!0}return i.set(y,n),s}function Xn(a,e){let n=e;for(let i=a.length-1;i>=0;i--){let[o,y,c,f,d]=a[i];n=m(o,y,c,f,n,d)}return n}function Yn(a,e){let n=Y(a,e);return n.$==="All"?n:null}function za(a,e,n,i,o){let y=Yn(a,e);if(y===null)throw M(a,n,"unreachable (a telescope binds its parameters and fields)",void 0,o,i);return y}function ue(a,e,n,i,o,y){let c=e;for(let f of n)c=za(a,c,i,o,y).B(f);return c}function Ci(a,e){let n=[],i=e;for(let o=Yn(a,i);o!==null;o=Yn(a,i))n.push([o.q,o.k,o.A]),i=o.B(Z(o.k,n.length-1));return{doms:n,ret:Y(a,i)}}function Vi(a,e,n){let i=e;for(let o=0;o<a;o++)i=R("Succ",[i],n);return i}function De(a,e){let n=R("WNil",[],e);for(let i=31;i>=0;i--){let o=a>>>i&1;n=R("WCon",[R(o===1?"True":"False",[],e),n],e)}return n}function tn(a,e){return R("U32",[De(a,e)],e)}function ui(a,e="U32"){let n=_(a);if(n.$!=="Ctr"||n.k!==e||n.x.length!==1)return null;let i=0,o=0,y=_(n.x[0]);while(y.$==="Ctr"&&y.k==="WCon"&&y.x.length===2){let c=_(y.x[0]);if(c.$!=="Ctr"||c.x.length!==0||c.k!=="True"&&c.k!=="False")return null;if(c.k==="True")i+=2**o;o+=1,y=_(y.x[1])}if(o!==32||y.$!=="Ctr"||y.k!=="WNil"||y.x.length!==0)return null;return i}var Oe=new DataView(new ArrayBuffer(4));function Oi(a){return Oe.setFloat32(0,a),Oe.getUint32(0)}function Ii(a,e){return R("F32",[De(Oi(a),e)],e)}function Gn(a){switch(a.$){case"None":return"-";case"Lone":return"";case"Many":return"+"}}var Ze={n:10,t:9,r:13,"0":0,"\\":92,"'":39,'"':34};function Ki(a,e){for(let[n,i]of Object.entries(Ze))if(i===a&&(n!=="'"&&n!=='"'||n===e))return"\\"+n;if(a<32||a===127||a>=55296&&a<=57343||a>1114111)return null;return String.fromCodePoint(a)}function Da(a,e=-1,n=[]){function i(d,h){if(d.$!=="App")return null;let{f:U,x:s}=d;if(U.$!=="App"||s.$!=="Lam")return null;let T=U.f;if(T.$!=="Ref"||T.k!=="Exists")return null;let N=f(U.x,2);n.push(s.k);let l=f(s.f,1);n.pop();let w="&"+s.k+":"+N+" -> "+l;return h>1?"("+w+")":w}function o(d,h){let U=0,s=d;while(s.$==="Ctr"&&s.k==="Succ"&&s.x.length===1)U+=1,s=s.x[0];if(s.$==="Ctr"&&s.k==="Zero"&&s.x.length===0)return String(U)+"n";if(U===0)return null;let T=String(U)+"n+"+f(s,1);return h>1?"("+T+")":T}function y(d,h){if(d.$!=="Ctr"||d.k!=="Chr"||d.x.length!==1)return null;let U=ui(d.x[0]);if(U===null||U>1114111)return null;return Ki(U,h)}function c(d){let h="",U=d;while(U.$==="Ctr"&&U.k==="SCon"&&U.x.length===2){let s=y(U.x[0],'"');if(s===null)return null;h+=s,U=U.x[1]}if(h===""||U.$!=="Ctr"||U.k!=="SNil"||U.x.length!==0)return null;return'"'+h+'"'}function f(d,h){switch(d.$){case"Var":return n.lastIndexOf(d.k)===d.i?d.k:d.k+"^"+String(d.i);case"Ref":return(n.includes(d.k)?d.k+"^":d.k)+(d.b===!0?"!":"");case"Sub":return f(d.f,h);case"Let":{let U=d.v.map((l)=>f(l,1));for(let l of d.k)n.push(l);let s=f(d.f,-1);n.length-=d.k.length;let N=d.k.map((l,w)=>Gn(d.q[w])+l).join(" ")+" = "+U.join(" ")+"; "+s;return h>=0?"("+N+")":N}case"Typ":{let U=d.g;if(U.$==="Qua"&&U.q.$==="Lone")return"Type";if(U.$==="Qua"&&U.q.$==="Many")return"Data";return"Kind("+f(d.g,0)+")"}case"Qnt":return"Quant";case"Qua":return{None:"&0",Lone:"&1",Many:"&2"}[d.q.$];case"Min":{let U=f(d.a,2)+" <&> "+f(d.b,2);return h>1?"("+U+")":U}case"All":{let U=f(d.A,2);n.push(d.k);let s=f(d.B,1);n.pop();let T="@"+Gn(d.q)+d.k+":"+U+" -> "+s;return h>1?"("+T+")":T}case"Lam":{n.push(d.k);let U=f(d.f,-1);n.pop();let s=d.k+" => "+U;return h>0?"("+s+")":s}case"App":{let U=i(d,h);if(U!==null)return U;let[s,T]=rn(d),N=f(s,2),l=T.map((w)=>f(w,0));return N+"("+l.join(", ")+")"}case"ADT":{let U=d.x.map((N)=>f(N,0)),s=d.r.map((N)=>" - "+N+"{}").join(""),T=d.k+(U.length===0&&s===""?"":"<"+U.join(", ")+">")+s;return s!==""&&h>1?"("+T+")":T}case"Ctr":{let U=y(d,"'"),s=o(d,h)??(U!==null?"'"+U+"'":null)??c(d);if(s!==null)return s;let T=d.x.map((N)=>f(N,0));return d.k+"{"+T.join(", ")+"}"}case"Mat":{let U=[],s=d;while(s.$==="Mat")U.push(s.k+": "+f(s.h,1)),s=s.m;if(s.$!=="Efq")U.push(f(s,1));return"\\{"+U.join("; ")+"}"}case"Efq":return"\\{}";case"Eql":return"{"+f(d.a,1)+" == "+f(d.b,1)+" : "+f(d.T,1)+"}";case"Rfl":return"{==}";case"Hol":return"?"+d.k;case"Rwt":{let U=f(d.e,1),s=_(d.p),T=s.$==="Lam"?_(s.f):s,N="",l;if(s.$==="Lam"&&T.$==="Lam")n.push(s.k,T.k),l=f(T.f,1),n.length-=2,N=T.k===""?"":T.k+"@";else l=f(d.p,1);let w=f(d.f,-1),W="%"+N+U+" : "+l+"; "+w;return h>0?"("+W+")":W}case"Ann":return"{"+f(d.x,1)+" : "+f(d.T,1)+"}"}}return f(a,e)}function Mn(a,e,n=[]){if(typeof e==="string")return e;else{let i=C(D(a,e),n.length);return Da(i,-1,n)}}function vi(a,e){let n=Ea(e);n.sort((c,f)=>c[0]-f[0]);let i=En(e),o=0;for(let[,c]of n)o=Math.max(o,c.k.length);let y=n.length===0?"":`
Context:`;for(let[c,f]of n){let d=Da(C(D(a,f.T),c),-1,i.slice(0,c));y+=`
- `+f.k.padEnd(o)+" : "+d}return y}function Pi(a){let e=a.src.split(`
`),n=a.src.slice(0,a.beg).split(`
`).length,i=Math.max(1,n-1),o=Math.min(e.length,n+1),y=[];for(let c=i;c<=o;c++){let f=c===n?">| ":" | ";y.push(String(c).padStart(String(o).length)+f+(e[c-1]??""))}return y.join(`
`)}function wn(a,e,n){return"non-inferrable term '"+Mn(a,n,En(e))+"'"}function Re(a){let e=En(a.ctx),n=a.obs===void 0?`
- message  : `+Mn(a.bok,a.exp,e):`
- expected : `+Mn(a.bok,a.exp,e)+`
- observed : `+Mn(a.bok,a.obs,e),i=a.def===void 0?"":" "+a.def,o=a.spn===void 0?"":`
`+Pi(a.spn),y=i===""&&o===""?"":`
Location:`+i+o;return"Error:"+n+vi(a.bok,a.ctx)+y}var bn=new Set(["def","type","law","match","case","do","return","for","exs","where","is","import","Type","Data","Kind","Quant"]),Li={"0":X(),"1":v(),"2":Ma()};function zi(a,e,n,i="",o=Object.create(null)){return{book:a,dir:e,str:n,pos:0,sc:{stk:[],frs:0},ns:i,al:o,os:[],inst:null}}function Qa(a,e){return e-a.lastIndexOf(`
`,e-1)}function B(a,e){return{src:a.str,beg:e,end:a.pos}}function V(a,e){let n=a.pos<a.str.length?"'"+a.str[a.pos]+"'":"end of input";throw M(a.book,L(),e,n,{src:a.str,beg:a.pos,end:a.pos})}function H(a){return a.pos<a.str.length?a.str[a.pos]:""}function u(a){let e=H(a);return a.pos+=1,e}function J(a,e){if(a.str.charCodeAt(a.pos)!==e.charCodeAt(0))return!1;return e.length===1||a.str.startsWith(e,a.pos)}function F(a,e){if(!J(a,e))return!1;return a.pos+=e.length,!0}function g(a){let e=a.str;while(a.pos<e.length){let n=e.charCodeAt(a.pos);if(n===32||n===10||n===13||n===9){a.pos+=1;continue}if(n===35){while(a.pos<e.length&&e.charCodeAt(a.pos)!==10)a.pos+=1;continue}return}}function A(a,e){if(g(a),!F(a,e))V(a,"'"+e+"'")}function ea(a,e){if(g(a),!J(a,e))return!1;return!ja(a.str[a.pos+e.length]??"")}function ia(a,e){if(!ea(a,e))return!1;return F(a,e),!0}function qe(a){if(g(a),!La(H(a)))V(a,"a name");let e=a.pos;while(a.pos<a.str.length&&ja(a.str[a.pos]))a.pos+=1;let n=a.str.slice(e,a.pos);if(n.endsWith("."))V(a,"a name (a name cannot end in '.')");return n}function da(a){let e=qe(a);if(bn.has(e))V(a,"a name (got the keyword '"+e+"')");return e}function Je(a){if(F(a,"\\")){let n=Ze[u(a)];if(n===void 0)V(a,"an escape (\\n \\t \\r \\0 \\\\ \\' \\\")");return n}let e=a.str.codePointAt(a.pos);if(e===void 0)V(a,"a character");if(u(a),e>65535)u(a);return e}function oa(a,e,n){let i=a.sc.frs++;if(e!=="_")a.sc.stk.push([e,i,n]);return i}function ya(a,e){a.sc.stk.length=e}function $e(a,e){let n=a.sc.stk;for(let i=n.length-1;i>=0;i--)if(n[i][0]===e)return n[i];return null}function xi(a,e,n){let i=$e(a,e);if(i!==null)return i[2]===void 0?Z(e,i[1],n):i[2].$==="Var"?K(i[2].k,n):i[2];let o=Ua(a,e);if(o!==e||e.includes(".")||o in a.book.tmps)return K(o,n);return Z(e,a.sc.frs++,n)}function ka(a,e){return a.ns===""?e:a.ns+"."+e}function Ua(a,e){let n=e.indexOf("."),i=ka(a,e);if(n!==-1&&e.slice(0,n)in a.al)i=a.al[e.slice(0,n)]+e.slice(n);if(i in a.book.tlds||i in a.book.ctrs||i in a.book.tmps)return i;return e}function Bn(a){if(g(a),F(a,"-"))return X();if(F(a,"+"))return Ma();return v()}function mn(a,e){let n=a.book;switch(e.$){case"Var":{if(Sa(n,Ua(a,e.k))!==null)throw M(n,L(),"a braced constructor pattern ("+e.k+" is a constructor: write "+e.k+"{}, or rename the binder)",void 0,e.s);let i=oa(a,e.k);return{$:"PVar",k:e.k,i,s:e.s}}case"Ctr":{let i=Sa(n,e.k);if(i===null)throw M(n,L(),"a declared constructor (unknown: "+e.k+")",void 0,e.s);if(i.n!==e.x.length)throw M(n,L(),"a "+e.k+" pattern with "+String(i.n)+(i.n===1?" field":" fields"),void 0,e.s);let o=[];for(let y of e.x)o.push(mn(a,y));return{$:"PCtr",k:e.k,x:o,s:e.s}}default:throw M(n,L(),"a pattern (a binder or a constructor)",Da(C(r(e),0)),e.s)}}function G(a,e=0){g(a);let n=a.pos,i=Di(a,n);return i.s??=B(a,n),Ji(a,i,e)}function Di(a,e){let n=H(a);if(La(n))return Zi(a,qe(a),e);if(/[0-9]/.test(n))return Qi(a);switch(n){case"@":return Ie(a,!1);case"&":{let i=Li[a.str[a.pos+1]??""];if(i!==void 0)return u(a),u(a),$(i,B(a,e));return Ie(a,!0)}case"+":{u(a);let i=G(a,5),o=B(a,e),y="";if(i.$==="ADT")y=i.k;else if(i.$==="Var"||i.$==="Ref")y=Ua(a,i.k);let c=a.book.tlds[y];if(c===void 0||c.$!=="ADT"||c.g===0||c.g<c.n&&i.$!=="ADT")V(a,"a quantified datatype after + (+D<..> sets D's leading quantities to &2)");let f=i.$==="ADT"?i.x:Array.from({length:c.n},()=>$(v(),o));return ha(y,f.map((d,h)=>h<c.g?$(Ma(),o):d),o)}case"\\":return u(a),A(a,"{"),$i(a,e);case"%":return Xi(a,e);case"{":return Yi(a);case"(":return u(a),Ye(a,e,a.os.length);case"[":{u(a);let i=_a(a,"]"),o=B(a,e),y=R("Nil",[],o);for(let c=i.length-1;c>=0;c--)y=R("Con",[i[c],y],o);return y}case"'":return Hi(a);case'"':return ji(a);case"?":{u(a);let i=da(a);if(i==="TODO")a.book.hols+=1;return nn(i,B(a,e))}default:V(a,"a term")}}function Zi(a,e,n){if(e==="Type")return x($(v()),B(a,n));if(e==="Data")return x($(Ma()),B(a,n));if(e==="Quant")return la(B(a,n));if(e==="Kind"){A(a,"(");let i=G(a);return A(a,")"),x(i,B(a,n))}if(e==="do")return Ei(a);if(e==="match")V(a,"a term (a match heads a def body, not a term)");if(e==="case")V(a,"a match heading this case (this case is orphaned)");if(e==="return")V(a,"a do-block heading this return");if(bn.has(e))V(a,"a term (the keyword '"+e+"' cannot head one)");if(J(a,"{")){u(a);let i=_a(a,"}");return R(Ua(a,e),i,B(a,n))}return xi(a,e,B(a,n))}var Ri=[[".|.",6,!1,".or"],[".^.",7,!1,".xor"],[".&.",8,!1,".and"],["||",2,!1,"Bool.or"],["&&",3,!1,"Bool.and"],["<=",4,!1,".is_le"],[">=",4,!1,".is_ge"],["<>",5,!0,""],["++",5,!0,"String.append"],["<<",9,!1,".shln"],[">>",9,!1,".shrn"],["&",1,!0,""],["|",1,!0,""],[">",4,!1,".is_gt"],["+",10,!1,".add"],["-",10,!1,".sub"],["*",11,!1,".mul"],["/",11,!1,".div"],["%",11,!1,".mod"]];function qi(a){for(let e of Ri){if(!J(a,e[0]))continue;let n=a.str[a.pos+e[0].length]??"";if((e[0]==="-"||e[0]==="+")&&(n===">"||La(n)))continue;if(e[0][0]===">"&&!/\s/.test(a.str[a.pos-1]??" "))continue;if(e[0]==="%"&&!/\s/.test(n))continue;return e}return null}function ua(a,e){if(e.s===void 0)return;return B(a,e.s.beg)}function Qn(a){for(let e=a.pos-1;e>=0;e--){let n=a.str[e];if(n===`
`)return!0;if(n!==" "&&n!=="\r"&&n!=="\t")return!1}return!0}function Ji(a,e,n){let i=e;while(!0){if(g(a),Qn(a)&&(J(a,"(")||J(a,"[")))return i;if(J(a,"!(")){if(i.$==="Var"&&$e(a,i.k)===null)i=K(i.k,i.s);if(i.$!=="Ref")V(a,"a named def before ! (only f!(..) offloads)");u(a),i.b=!0;continue}if(J(a,"(")){u(a);let f=i.$==="Ref"?a.book.tmps[i.k]:void 0,d=[];for(g(a);f!==void 0&&F(a,"~");g(a))d.push(G(a)),g(a),F(a,",");let h=d.concat(_a(a,")")),U=ua(a,i);if(i.$==="Ref"&&f!==void 0){let s=a.sc.stk.reduce((N,l)=>Ya(N,l[1],K("\x00")),null),T=d.map((N)=>Da(C(r(N,s)))).join(`
`);if(!T.includes("\x00")&&T.length<=2048){if(f.is[T]===void 0)f.is[T]=i.k+"~"+Object.keys(f.is).length,Wn({...f.p,sc:{stk:[],frs:a.sc.frs},os:[],inst:{k:f.is[T],xs:d}},a.book,f.u);i={...i,k:f.is[T]}}}for(let s of h)i=i.$==="Lam"&&a.sc.stk.some((T)=>T[2]===i)?Ha(i.i,s,i.f,U):I(i,s,U);continue}if(J(a,"[")){u(a);let f=a.os.length,d=G(a);A(a,"]");let h=ua(a,i);if(Xe(a,a.os.splice(f),K("U32",h)),g(a),!Qn(a)&&F(a,"<-")){let U=G(a,2);i=I(I(I(I(K("Array.set",h),K("U32",h),h),i,h),d,h),U,h)}else i=I(I(I(K("Array.get",h),K("U32",h),h),i,h),d,h);continue}if(J(a,"<")&&!"-=<>".includes(a.str[a.pos+1]??"")&&!J(a,"<&>")&&(n<=4||/\S/.test(a.str[a.pos-1]??""))){u(a);let f=G(a,5);g(a);let d=ua(a,i);if(J(a,">")||J(a,",")){if(i.$!=="Var"&&i.$!=="Ref")V(a,"a family name before <..> (a comparison here needs parens)");let h=[f];if(!F(a,">"))F(a,","),h.push(..._a(a,">"));let U=Ua(a,i.k),s=a.book.tlds[U];if(s!==void 0&&s.$==="ADT"&&h.length+s.g===s.n)h.unshift(...Array.from({length:s.g},()=>$(v(),d)));i=ha(U,h,d)}else{let h={$:"Ref",k:".is_lt",s:d};a.os.push(h),i=I(I(h,i,d),f,d)}continue}if(n===0&&F(a,"=>")){if(i.$!=="Var")V(a,"a lambda binder (one name: k => body)");let f=a.sc.stk.length,d=oa(a,i.k),h=kn(a);ya(a,f),i=k(i.k,d,h,i.s);continue}if(n===0&&F(a,"->")){let f=G(a),d=ua(a,i);i=m(v(),"_",oa(a,"_"),i,f,d);continue}if(n<=5&&F(a,"<&>")){let f=G(a,5);i=Ga(i,f,ua(a,i));continue}let o=qi(a);if(o===null||o[1]<n||J(a,"<-"))return i;F(a,o[0]);let y=G(a,o[2]?o[1]:o[1]+1),c=ua(a,i);if(o[0]==="<>")i=R("Con",[i,y],c);else if(o[0]==="&")i=I(I(K("Pair",c),i,c),y,c);else if(o[0]==="|")i=I(I(K("Or",c),i,c),y,c);else{let f={$:"Ref",k:o[3],s:c};if(o[3][0]===".")a.os.push(f);i=I(I(f,i,c),y,c)}}}function Xe(a,e,n){let i=rn(n)[0];for(let o of e){if(i.$!=="Var"&&i.$!=="Ref"&&i.$!=="ADT")throw M(a.book,L(),"a type name after : (the operators' namespace)",void 0,i.s);o.k=Ua(a,i.k+o.k)}}function _a(a,e){let n=[];while(!0){if(g(a),F(a,e))return n;let i=G(a);n.push(i),g(a),F(a,",")}}function Ie(a,e){let n=a.pos;u(a);let i=e?v():Bn(a),o=da(a);A(a,":");let y=G(a,1);A(a,"->");let c=a.sc.stk.length,f=oa(a,o),d=G(a);if(ya(a,c),e){let h=B(a,n);return I(I(K("Exists",h),y,h),k(o,f,d,h),h)}return m(i,o,f,y,d)}function Ye(a,e,n){g(a);let i=en(a,Qa(a.str,a.pos)-1);if(g(a),i.$==="Reply"&&F(a,",")){let y=Ye(a,e,n);return R("Tuple",[i.x,y],B(a,e))}let o=Fa(i,[],()=>a.sc.frs++);if(F(a,":"))Xe(a,a.os.splice(n),G(a));return A(a,")"),o}function $i(a,e){let n=[],i=xa();while(!0){if(g(a),F(a,"}"))break;let c=G(a);if(g(a),(c.$==="Var"||c.$==="Ref")&&F(a,":")){let f=G(a);n.push([Ua(a,c.k),f,c.s]),g(a),F(a,";");continue}i=c,g(a),F(a,";"),A(a,"}");break}let o=B(a,e);i.s??=o;let y=i;for(let c=n.length-1;c>=0;c--)y=Wa(n[c][0],n[c][1],y,o,n[c][2]);return y}function Xi(a,e){u(a);let n=G(a);g(a);let i="",o=n;if(F(a,"@")){if(n.$!=="Var")V(a,"a name before @ (a rewrite binder is one name: %e@E : P)");i=n.k,o=G(a)}A(a,":");let y=a.sc.stk.length,c=a.sc.frs++;a.sc.stk.push(["_",c]);let f=i===""?a.sc.frs++:oa(a,i),d=G(a);ya(a,y),g(a),F(a,";");let h=kn(a),U=B(a,e);return an(o,k("_",c,k(i,f,d,n.s),U),h,U)}function Yi(a){let e=a.pos;if(u(a),g(a),F(a,"=="))return A(a,"}"),Pa();let n=G(a);if(g(a),F(a,"==")){let o=G(a);A(a,":");let y=G(a);return A(a,"}"),wa(n,o,y)}if(F(a,"!=")){let o=B(a,a.pos-2),y=G(a);A(a,":");let c=G(a);A(a,"}");let f=B(a,e);return m(v(),"_",oa(a,"_"),wa(n,y,c,f),K("Empty",o),f)}A(a,":");let i=G(a);return A(a,"}"),ra(n,i)}function Qi(a){let e=a.pos,n="";while(/[0-9]/.test(H(a)))n+=u(a);if(!F(a,"n")){if(J(a,".")&&/[0-9]/.test(a.str[a.pos+1]??"")){let f=n+u(a);while(/[0-9]/.test(H(a)))f+=u(a);if(/[eE]/.test(H(a))&&/[0-9+-]/.test(a.str[a.pos+1]??"")){f+=u(a)+(/[+-]/.test(H(a))?u(a):"");while(/[0-9]/.test(H(a)))f+=u(a)}let d=Math.fround(Number(f));if(!isFinite(d))V(a,"a float literal with a finite f32 value (got "+f+")");return Ii(d,B(a,e))}if(ja(H(a)))V(a,"a numeric literal (NUMBER is U32, NUMBER n is Nat)");let c=Number(n);if(c>4294967295)V(a,"a u32 literal up to 4294967295 (got "+n+")");return tn(c,B(a,e))}let i=Number(n);if(i>Number.MAX_SAFE_INTEGER)V(a,"a nat literal up to "+Number.MAX_SAFE_INTEGER+"n (got "+n+"n)");let o;if(F(a,"+"))o=G(a);else{if(ja(H(a)))V(a,"a nat literal (NUMBER n)");o=R("Zero",[],B(a,e))}let y=B(a,e);return Vi(i,o,y)}function Hi(a){let e=a.pos;u(a);let n=Je(a);if(H(a)!=="'")V(a,"a closing '");u(a);let i=B(a,e);return R("Chr",[tn(n,i)],i)}function ji(a){let e=a.pos;u(a);let n=[];while(H(a)!=='"'){if(a.pos>=a.str.length)V(a,'a closing "');n.push(Je(a))}u(a);let i=B(a,e),o=R("SNil",[],i);for(let y=n.length-1;y>=0;y--)o=R("SCon",[R("Chr",[tn(n[y],i)],i),o],i);return o}function Ei(a){let e=da(a);A(a,"<");let n=_a(a,">");return A(a,":"),Qe(a,e,n.slice(0,-1),n.length===0?null:n[n.length-1])}function Qe(a,e,n,i){function o(W,O,q,E){let t=K(Ua(a,e+"."+W),E);for(let Un of n.concat(O,i===null?[]:[i],q))t=I(t,Un,E);return t}g(a);let y=a.pos;if(ia(a,"return")){let W=G(a);return o("pure",[],[W],B(a,y))}let c=G(a);g(a);let f=c.$==="Var"&&F(a,":"),d=f?G(a,1):c;g(a);let h=f&&J(a,"=")&&!J(a,"==");if(h)u(a);else if(f)A(a,"<-");else if(!F(a,"<-"))return c;let U=G(a);g(a),F(a,";");let s=B(a,y),T=f&&c.$==="Var"?c.k:"_",N=a.sc.stk.length,l=oa(a,T),w=Qe(a,e,n,i);if(ya(a,N),h)return pa([T],[l],[ra(U,d,s)],w,s);return o("bind",[d],[U,k(T,l,w,s)],s)}function en(a,e=0){g(a);let n=a.pos;if(ea(a,"match"))return bi(a,e);let i=Bn(a),o=[];if(i.$!=="Lone"){let h=i.$==="None"||La(H(a))?da(a):"";if(g(a),h!==""&&J(a,"=")&&!J(a,"=="))o=[Z(h,0,B(a,n))],A(a,"=");else a.pos=n,i=v()}if(i.$==="Lone"){o=[G(a)],g(a);while(!Qn(a)&&La(H(a))&&!ti(a))o.push(G(a)),g(a);if(o.length===1&&!(J(a,"=")&&!J(a,"==")))return{$:"Reply",x:o[0],s:B(a,n)};A(a,"=")}let y=[];for(let h of o)y.push(G(a));g(a),F(a,";");let c=a.sc.stk.length,f=o.map((h)=>{if(o.length>1&&h.$!=="Var")throw M(a.book,L(),"a name (a parallel let binds names; destructure in its body)",void 0,h.s);return mn(a,h)}),d=en(a,e);return ya(a,c),{$:"Local",k:f,q:i,v:y,f:d}}function ti(a){let e="";for(let n=a.pos;n<a.str.length&&ja(a.str[n]);n++)e+=a.str[n];return bn.has(e)}function kn(a){g(a);let e=en(a,Qa(a.str,a.pos)-1);return Fa(e,[],()=>a.sc.frs++)}function Ke(a){let e=[];while(!0){if(e.push(G(a)),g(a),F(a,":"))return e;F(a,",")}}function bi(a,e){g(a);let n=a.pos;ia(a,"match");let i=Ke(a);g(a);let o=Qa(a.str,a.pos),y=[];while(o>e&&ea(a,"case")&&Qa(a.str,a.pos)>=o){let c=Qa(a.str,a.pos);ia(a,"case");let f=Ke(a);if(f.length!==i.length)V(a,String(i.length)+" patterns (one per scrutinee)");let d=a.sc.stk.length,h=[];for(let s of f)h.push(mn(a,s));let U=en(a,c);ya(a,d),y.push({p:h,f:U})}return{$:"Match",e:i,r:y,s:B(a,n)}}function Hn(a,e){let n=[];while(!0){if(g(a),F(a,e))return n;let i=e===")"&&F(a,"~"),o=i?X():Bn(a),y=a.pos,c=da(a),f=B(a,y);if(g(a),o.$==="Lone"&&!J(a,":"))n.push([X(),c,oa(a,c),la(f),f]);else{A(a,":");let d=G(a);n.push([o,c,oa(a,c,i?a.inst?.xs.shift():void 0),d,f])}g(a),F(a,",")}}function _n(a,e){if(a.book.tlds[e]!==void 0||a.inst===null&&e in a.book.tmps)V(a,"a fresh name (duplicate declaration: "+e+")")}function Wn(a,e,n=!1){let i=a.pos;ia(a,"def");let o=da(a),y=Ua(a,o),c=e.tlds[y];if(c!==void 0&&c.$==="Def"&&c.v===null&&c.b!==!0&&!c.i){if(n)c.u=!0;mi(a,e,y,c);return}let f=a.inst?.k??ka(a,o);_n(a,f);let d=a.sc.stk.length;if(A(a,"("),g(a),a.inst===null&&J(a,"~")){e.tmps[f]={p:{...a,pos:i},u:n,is:Object.create(null)},a.pos=i,a.inst={k:f,xs:[]},Wn(a,na(),n),a.inst=null;return}let h=Hn(a,")");A(a,"->");let U=G(a),s={$:"Def",n:h.length,T:r(Xn(h,U)),v:null};if(n)s.u=!0;e.tlds[f]=s;let T=h.map((N)=>({$:"PVar",k:N[1],i:N[2],s:N[4]}));He(a,e,f,s,T,d)}function mi(a,e,n,i){let o=a.sc.stk.length;A(a,"(");let y=[];while(!0){if(g(a),F(a,")"))break;let c=a.pos,f=da(a);y.push({$:"PVar",k:f,i:oa(a,f),s:B(a,c)}),g(a),F(a,",")}i.n=y.length,He(a,e,n,i,y,o)}function He(a,e,n,i,o,y){if(A(a,":"),ea(a,"import")){i.i=[];while(ia(a,"import")){A(a,'"');let f="";while(H(a)!=='"'&&H(a)!=="")f+=u(a);if(A(a,'"'),!/\.(c|js)$/.test(f))V(a,"a .c or .js path");i.i.push(a.dir+f)}ya(a,y),e.order.push(n);return}let c=en(a);ya(a,y),i.v=r(C(r(Fa(c,o,()=>a.sc.frs++)))),e.order.push(n)}function ki(a,e){ia(a,"law");let n=ka(a,da(a));_n(a,n),A(a,":");let i=a.sc.stk.length,o=[];while(ea(a,"for")||ea(a,"exs")){let f=ia(a,"for");if(!f)ia(a,"exs");let d=f?Bn(a):v(),h=a.pos,U=da(a),s=B(a,h);A(a,":");let T=G(a);if(ea(a,"where")){let N=a.pos;ia(a,"where");let l=B(a,N),w=a.sc.stk.length,W=oa(a,U),O=G(a);ya(a,w),T=I(I(K("Exists",l),T,s),k(U,W,O,s),s)}o.push([f,d,U,oa(a,U),T,s])}let y=kn(a);for(let f=o.length-1;f>=0;f--){let[d,h,U,s,T,N]=o[f];y=d?m(h,U,s,T,y,N):I(I(K("Exists",N),T,N),k(U,s,y,N),N)}ya(a,i);let c=0;while(c<o.length&&o[c][0])c+=1;e.tlds[n]={$:"Def",n:c,T:r(y),v:null},e.order.push(n)}function _i(a,e){ia(a,"type");let n=ka(a,da(a));_n(a,n);let i=a.sc.stk.length;g(a);let o=F(a,"<")?Hn(a,">"):[];if(!ia(a,"is"))V(a,"'is'");let y=G(a);A(a,":");let c=[],f=o.findIndex((d)=>d[3].$!=="Qnt");e.tlds[n]={$:"ADT",n:o.length,g:f<0?o.length:f,T:r(Xn(o,y)),c};while(!0){if(g(a),a.pos>=a.str.length||!La(H(a)))break;if(["def","type","law"].some((N)=>ea(a,N)))break;let d=ka(a,da(a));if(Sa(e,d)!==null)V(a,"a fresh constructor name (duplicate declaration: "+d+")");A(a,"{");let h=a.sc.stk.length,U=Hn(a,"}"),s=ha(n,o.map((N)=>Z(N[1],N[2]))),T={k:d,n:U.length,T:r(Xn(o.concat(U),s))};ya(a,h),c.push(T),e.ctrs[d]=T}ya(a,i),e.order.push(n)}function pn(a,e,n,i="",o=Object.create(null)){let y=zi(a,e,n,i,o);while(!0){if(g(y),y.pos>=y.str.length)return a;if(y.sc={stk:[],frs:0},F(y,"@")){if(!ia(y,"unsafe"))V(y,"'unsafe' (the one decorator)");if(g(y),!ea(y,"def"))V(y,"'def' (@unsafe marks the def below it)");Wn(y,a,!0);continue}if(ea(y,"def")){Wn(y,a);continue}if(ea(y,"type")){_i(y,a);continue}if(ea(y,"law")){ki(y,a);continue}V(y,"'def', 'type' or 'law'")}}function Ka(a,e,n){function i(o){if(o.$==="Var")return o.i!==e?o:An(n,o.s);else return Ha(e,n,o)}switch(a.$){case"Match":{let o=a.e.map(i),y=a.r.map((c)=>({p:c.p,f:Ka(c.f,e,n)}));return{$:"Match",e:o,r:y,s:a.s}}case"Local":{let o=a.v.map(i),y=Ka(a.f,e,n);return{$:"Local",k:a.k,q:a.q,v:o,f:y}}case"Reply":return{$:"Reply",x:Ha(e,n,a.x),s:a.s}}}function Oa(a,e,n){if(a.e.length===0&&a.r.length>0)return Fa(a.r[0].f,e,n);else if(a.e.length===0)throw M(na(),L(),"a case (this match has no row to return)",void 0,a.s);else if(e.length===0){let i=a.e[0];while(i.$==="Sub")i=i.f;switch(i.$){case"Var":throw M(na(),L(),"match scrutinees in binder order (this variable is unbound, consumed, or out of order: reorder the match)",void 0,i.s);case"Ctr":throw M(na(),L(),"an undestructed scrutinee (this value is already a constructor: bind its fields directly; if an outer match destructed it, fold the pattern into the outer case)",void 0,a.s);default:throw M(na(),L(),"a parameter or field scrutinee (a match cannot scrutinize a computed value: give it its own def)",void 0,i.s??a.s)}}else{let i=e[0],o=a.e[0],y=eo(a.r),c=e.find((f)=>o.$==="Var"&&f.i===o.i);if(c!==void 0&&y===null&&a.r.length>0){let f=no(a.r,c);return Oa({$:"Match",e:a.e.slice(1),r:f,s:a.s},e,n)}else if(c===i)if(y===null)return xa(a.s);else{let f=io(y.x,n),d=pi(a.r,i,y.k,f),h=f.map((l)=>An(l)).concat(a.e.slice(1)),U=f.concat(e.slice(1)),s=Oa({$:"Match",e:h,r:d,s:a.s},U,n),T=ao(a.r,y.k),N=Oa({$:"Match",e:a.e,r:T,s:a.s},e,n);return Wa(y.k,s,N,a.s,y.s)}else{let f=Oa(a,e.slice(1),n);return k(i.k,i.i,f,i.s)}}}function pi(a,e,n,i){let o={$:"PCtr",k:n,x:i,s:e.s};return a.flatMap((y)=>{let c=y.p[0];switch(c.$){case"PCtr":if(c.k!==n)return[];else if(c.x.length!==i.length)throw M(na(),L(),"a "+n+" pattern with "+String(i.length)+" fields",void 0,c.s);else{let f=Ka(y.f,e.i,o);return[{p:c.x.concat(y.p.slice(1)),f}]}case"PVar":{let f=Ka(y.f,c.i,e),d=Ka(f,e.i,o);return[{p:i.concat(y.p.slice(1)),f:d}]}}})}function ao(a,e){return a.filter((n)=>{let i=n.p[0];return i.$!=="PCtr"||i.k!==e})}function no(a,e){return a.map((n)=>{let i=n.p[0];if(i.$==="PVar"){let o=Ka(n.f,i.i,e);return{p:n.p.slice(1),f:o}}else throw M(na(),L(),"a variable pattern (this column has no constructor row)",void 0,i.s)})}function eo(a){for(let e of a){let n=e.p[0];if(n.$==="PCtr")return n}return null}function io(a,e){return a.map((n)=>{if(n.$==="PVar")return n;let i=e();return{$:"PVar",k:"_"+String(i),i,s:n.s}})}function An(a,e){switch(a.$){case"PVar":return Z(a.k,a.i,e??a.s);case"PCtr":{let n=a.x.map((i)=>An(i,e));return R(a.k,n,e??a.s)}}}function Fa(a,e,n){switch(a.$){case"Reply":if(e.length===0)return a.x;else{let i=e[0],o=Fa(a,e.slice(1),n);return k(i.k,i.i,o,i.s)}case"Local":{if(a.k.length===1&&a.k[0].$==="PCtr"){let c={p:[a.k[0]],f:a.f};return Oa({$:"Match",e:[a.v[0]],r:[c],s:a.v[0].s},e,n)}let i=a.k,o=Fa(a.f,i,n);for(let c of i){if(o.$!=="Lam")throw M(na(),L(),"a parameter or field scrutinee (a match cannot scrutinize a local binder: give it its own def)",void 0,c.s);o=o.f}let y=pa(i.map((c)=>c.k),i.map((c)=>c.i),a.v,o,i[0].s,i.map(()=>a.q));return Fa({$:"Reply",x:y},e,n)}case"Match":return Oa(a,e,n)}}function Y(a,e){let n=[],i=e,o=null;a:while(!0){n:switch(i.$){case"Var":if(i.v===void 0)break n;else{if(i.i===-1)n.push({$:"VAR",l:i,a:i.v.$==="Ann"?i.v:void 0});o=null,i=i.v;continue a}case"Ann":{i=i.x;continue a}case"Min":{n.push({$:"MNA",b:i.b,s:i.s}),i=i.a;continue a}case"Let":{let y=i;i=y.f(y.v.map((c,f)=>j(c,y.k[f])));continue a}case"App":{n.push({$:"APP",x:j(i.x),s:i.s}),o=null,i=i.f;continue a}case"Lam":if(n.length===0||n[n.length-1].$!=="APP")break n;else{let y=n.pop();if(o!==null&&o.n===0)o=null;else if(o!==null){let{t:c,n:f}=o;o={t:()=>aa(c(),y.x,y.s),n:f-1}}i=i.f(y.x);continue a}case"Mat":if(n.length===0||n[n.length-1].$!=="APP")break n;else{let y=n.pop();n.push({$:"MAT",t:i,e:y.x,lhs:o,s:y.s}),i=y.x,o=null;continue a}case"Efq":{if(o!==null&&o.n>0&&n.length>0&&n[n.length-1].$==="APP")i=o.t();break n}case"Rwt":{if(Y(a,i.e).$==="Rfl"){i=i.f;continue a}break n}case"Ref":{let y=a.tlds[i.k];if(y===void 0)break n;if(y.$==="ADT"){if(y.n===0)i=ha(i.k,[],i.s);break n}let c=0;while(c<y.n&&c<n.length&&n[n.length-1-c].$==="APP")c+=1;if(c<y.n||y.v===null)break n;let f=i;o={t:()=>f,n:y.n},i=y.v;continue a}default:break n}o=null;n:while(!0){let y=n.pop();if(y===void 0)return i;else switch(y.$){case"VAR":{i=ri(i),y.l.v=y.a===void 0?i:ra(i,j(y.a.T),y.a.s),y.l.i=-2;continue a}case"APP":{i=aa(i,y.x,y.s);continue n}case"MNA":{if(i.$==="Qua"&&i.q.$==="Many"){i=y.b;continue a}if(i.$==="Qua"&&i.q.$==="None")continue n;n.push({$:"MNB",a:i,s:y.s}),i=y.b;continue a}case"MNB":{if(i.$==="Qua"&&i.q.$==="Many")i=y.a;else if(i.$!=="Qua"||i.q.$==="Lone"&&y.a.$!=="Qua")i=Ga(y.a,i,y.s);continue n}case"MAT":if(i.$==="Ctr"){let c=i,f=y.t;e:while(!0)switch(f.$){case"Ann":{f=f.x;continue e}case"Mat":if(f.k===c.k){let d=y.lhs;if(d===null)o=null;else o={t:()=>jn(d.t(),c.k,c.x.length),n:d.n-1+c.x.length};for(let h=c.x.length-1;h>=0;h--)n.push({$:"APP",x:j(c.x[h])});i=f.h;continue a}else{f=f.m;continue e}case"Efq":{i=aa(y.lhs===null?y.t:y.lhs.t(),y.e,y.s);continue n}default:{o=y.lhs,n.push({$:"APP",x:c}),i=f;continue a}}}else{i=aa(y.lhs===null?y.t:y.lhs.t(),y.e,y.s);continue n}}}}}function D(a,e){let n=Y(a,e);switch(n.$){case"Var":return Z(n.k,n.i,n.s);case"Ref":return K(n.k,n.s,n.b);case"Sub":return Ha(n.i,n.v.$==="PVar"||n.v.$==="PCtr"?n.v:D(a,n.v),D(a,n.f),n.s);case"Typ":return x(D(a,n.g),n.s);case"Qnt":case"Qua":return n;case"Min":return Ga(D(a,n.a),D(a,n.b),n.s);case"All":return m(n.q,n.k,n.i,D(a,n.A),(i)=>{return D(a,n.B(i))},n.s);case"Lam":return k(n.k,n.i,(i)=>{return D(a,n.f(i))},n.s);case"App":return I(n.f.$==="Ref"?n.f:D(a,n.f),D(a,n.x),n.s);case"ADT":return ha(n.k,n.x.map((i)=>D(a,i)),n.s,n.r);case"Ctr":return R(n.k,n.x.map((i)=>D(a,i)),n.s);case"Mat":return Wa(n.k,D(a,n.h),D(a,n.m),n.s,n.ks);case"Efq":return xa(n.s);case"Eql":return wa(D(a,n.a),D(a,n.b),D(a,n.T),n.s);case"Rfl":return Pa(n.s);case"Rwt":return an(D(a,n.e),D(a,n.p),D(a,n.f),n.s);case"Hol":return nn(n.k,n.s)}}function P(a,e,n,i,o=0){if(n===i)return!0;let y=Y(e,n),c=Y(e,i);if(y===c)return!0;if(y.$==="Lam"||c.$==="Lam"){let f=y.$==="Lam"?y.k:c.k,d=Z(f,o);return P(a,e,aa(y,d),aa(c,d),o+1)}switch(y.$){case"Var":return c.$==="Var"&&y.i===c.i;case"Ref":return c.$==="Ref"&&y.k===c.k;case"Typ":{if(c.$!=="Typ")return!1;if(a==="EQ")return P("EQ",e,y.g,c.g,o);let f=Y(e,y.g),d=Y(e,c.g);if(f.$==="Qua"&&f.q.$==="Many"||d.$==="Qua"&&d.q.$!=="Many")return!0;if(f.$==="Min"){let h=P("LE",e,x(f.a),c,o),U=P("LE",e,x(f.b),c,o);return h&&U}if(d.$==="Min"){let h=P("LE",e,y,x(d.a),o),U=P("LE",e,y,x(d.b),o);return h||U}return P("LE",e,f,d,o)}case"Qnt":return c.$==="Qnt";case"Qua":return c.$==="Qua"&&y.q.$===c.q.$;case"Min":return c.$==="Min"&&P("EQ",e,y.a,c.a,o)&&P("EQ",e,y.b,c.b,o);case"All":{let f=Z(y.k,o);return c.$==="All"&&y.q.$===c.q.$&&P(a,e,c.A,y.A,o)&&P(a,e,y.B(f),c.B(f),o+1)}case"App":return c.$==="App"&&P("EQ",e,y.f,c.f,o)&&P("EQ",e,y.x,c.x,o);case"ADT":{if(c.$!=="ADT"||y.k!==c.k||y.x.length!==c.x.length)return!1;if(a==="EQ"&&y.r.length!==c.r.length)return!1;return c.r.every((f)=>y.r.includes(f))&&y.x.every((f,d)=>P("EQ",e,f,c.x[d],o))}case"Ctr":return c.$==="Ctr"&&y.k===c.k&&y.x.length===c.x.length&&y.x.every((f,d)=>P("EQ",e,f,c.x[d],o));case"Mat":return c.$==="Mat"&&y.k===c.k&&P("EQ",e,y.h,c.h,o)&&P("EQ",e,y.m,c.m,o);case"Efq":return c.$==="Efq";case"Eql":return c.$==="Eql"&&P("EQ",e,y.a,c.a,o)&&P("EQ",e,y.b,c.b,o)&&P("EQ",e,y.T,c.T,o);case"Rfl":return c.$==="Rfl";case"Hol":return c.$==="Hol"&&y.k===c.k;case"Rwt":return c.$==="Rwt"&&P("EQ",e,y.e,c.e,o)&&P("EQ",e,y.p,c.p,o)&&P("EQ",e,y.f,c.f,o);default:return!1}}function va(a,e,n,i,o,y,c=[]){switch(n.$){case"Var":{if(n.i<0&&n.v!==void 0)return va(a,e,ta(n),i,o,y,c);let f=Pe(o,n.i);if(f===null)throw M(a,o,"a bound variable",n,n.s,e.def);else return fa(Z(n.k,n.i,n.s),f.T,Ia(b(),n.i,i))}case"Ref":{let f=a.tlds[n.k];if(f===void 0)throw M(a,o,"a defined name",n,n.s,e.def);switch(i.$){case"None":break;default:{if(n.k===e.def&&e.u!==!0&&Wi(e,c)!=="LT")throw M(a,o,"a decreasing self-call (some live argument must shrink)",n,n.s,e.def);if(n.k===e.def)return fa(K(n.k,n.s,n.b),f.T,b());if(f.$==="Def"&&f.v===null&&f.b!==!0&&!f.i)throw M(a,o,"a filled definition (an unfilled law is a dead claim: live code cannot use it)",n,n.s,e.def);break}}if(f.$==="ADT"&&f.n>0)throw M(a,o,"a family instance (write "+n.k+"<..>)",n,n.s,e.def);return fa(K(n.k,n.s,n.b),f.T,b())}case"Typ":{let f=z(a,e,n.g,X(),la(n.s),o,y);return fa(x(f.tm,n.s),x($(v()),n.s),b())}case"Qnt":return fa(la(n.s),x($(v()),n.s),b());case"Qua":return fa($(n.q,n.s),la(n.s),b());case"Min":{let f=z(a,e,n.a,i,la(n.s),o,y),d=z(a,e,n.b,i,la(n.s),o,y);return fa(Ga(f.tm,d.tm,n.s),la(n.s),ga(f.us,d.us))}case"All":{let f=ba(o,y,n.q,n.k,n.A),d=z(a,e,n.A,X(),x($(xe(e,n.q)),n.s),o,y),h=z(a,e,n.B(Z(n.k,y)),X(),x($(v()),n.s),f,y+1);return fa(m(n.q,n.k,y,d.tm,h.tm,n.s),x($(v()),n.s),b())}case"App":{if(n.f.$==="Lam")return va(a,e,n.f.f(n.x),i,o,y,c);let f=va(a,e,n.f,i,o,y,[n.x,...c]),d=Y(a,f.ty);if(d.$!=="All")throw M(a,o,"a function type",f.ty,n.s,e.def);let h=z(a,e,n.x,Fn(d.q,i),d.A,o,y);return fa(I(f.tm,h.tm,n.s),d.B(n.x),ga(f.us,h.us))}case"ADT":{let f=Sn(a,n,o,e.def);if(n.x.length!==f.n)throw M(a,o,n.k+" with "+String(f.n)+(f.n===1?" parameter":" parameters"),n,n.s,e.def);let d=[],h=f.T,U=b();for(let s of n.x){let T=za(a,h,o,e.def,n.s),N=Fn(T.q,i),l=z(a,e,s,N,T.A,o,y);d.push(l.tm),U=ga(U,l.us),h=T.B(s)}return fa(ha(n.k,d,n.s,n.r),h,U)}case"Eql":{let f=z(a,e,n.T,X(),x($(v()),n.s),o,y),d=z(a,e,n.a,X(),n.T,o,y),h=z(a,e,n.b,X(),n.T,o,y);return fa(wa(d.tm,h.tm,f.tm,n.s),x($(Ma()),n.s),b())}case"Ann":{z(a,e,n.T,X(),x($(v()),n.s),o,y);let f=z(a,e,n.x,i,n.T,o,y);return{tm:f.tm,ty:n.T,us:f.us}}default:{if(n.$==="Ctr"&&Sa(a,n.k)===null)throw M(a,o,"a declared constructor",n,n.s,e.def);throw M(a,o,"an annotated term (cannot infer)",n,n.s,e.def)}}}function z(a,e,n,i,o,y,c){switch(n.$){case"Var":{if(n.i<0&&n.v!==void 0)return z(a,e,ta(n),i,o,y,c);break}case"Lam":{let d=Y(a,o);if(d.$!=="All")throw M(a,y,o,wn(a,y,n),n.s,e.def);let h=Z(n.k,c),U=e;if(e.n>0)U={...e,t:aa(e.t,h),n:e.n-1};let s=ba(y,c,d.q,n.k,d.A),T=z(a,U,n.f(h),i,d.B(h),s,c+1);return Se(a,y,n.k,d.q,Ge(T.us,c),n.s,e.def),Na(k(n.k,c,T.tm,n.s),o,We(T.us,c))}case"Let":{let d=n.k.length,h=[],U=b(),s=y;for(let w=0;w<d;w++){let W=Fn(n.q[w],i),O=va(a,e,n.v[w],W,y,c),q=x($(xe(e,n.q[w])),n.s);try{z(a,e,O.ty,X(),q,y,c)}catch(E){let t=E;throw t?.$==="Err"&&t.exp===q?{...t,spn:n.s??t.spn}:E}h.push(O.tm),U=ga(U,O.us),s=ba(s,c+w,n.q[w],n.k[w],O.ty)}let T=n.k.map((w,W)=>Z(w,c+W,void 0,n.v[W])),N=z(a,e,n.f(T),i,o,s,c+d),l=N.us;for(let w=0;w<d;w++)Se(a,y,n.k[w],n.q[w],Ge(l,c+w),n.s,e.def),l=We(l,c+w);return Na(pa(n.k,T.map((w,W)=>c+W),h,N.tm,n.s,n.q),o,ga(U,l))}case"Ctr":{let d=Y(a,o);if(d.$!=="ADT"){let l=Sa(a,n.k)===null?null:Be(a,n.k);throw M(a,y,o,l===null?wn(a,y,n):K(l,n.s),n.s,e.def)}let h=Sn(a,d,y,e.def),U=re(h.c,n.k);if(U===null){if(Sa(a,n.k)===null)throw M(a,y,"a declared constructor ("+d.k+" declares "+h.c.map((l)=>l.k).join(", ")+")",n,n.s,e.def);throw M(a,y,o,K(Be(a,n.k),n.s),n.s,e.def)}if(n.x.length!==U.n)throw M(a,y,n.k+" with "+String(U.n)+(U.n===1?" field":" fields"),n,n.s,e.def);let s=ue(a,U.T,d.x,y,e.def,n.s),T=[],N=b();for(let l of n.x){let w=za(a,s,y,e.def,n.s),W=Fn(w.q,i),O=z(a,e,l,W,w.A,y,c);T.push(O.tm),N=ga(N,O.us),s=w.B(l)}return Na(R(n.k,T,n.s),o,N)}case"Mat":case"Efq":{let d=Y(a,o);if(d.$!=="All")throw M(a,y,o,wn(a,y,n),n.s,e.def);if(i.$!=="None"&&d.q.$==="None")throw M(a,y,"a live scrutinee (a - scrutinee matches only in a dead region)",void 0,n.s,e.def);let h=Y(a,d.A);if(h.$!=="ADT")throw M(a,y,"a datatype",d.A,n.s,e.def);let U=Sn(a,h,y,e.def).c;switch(n.$){case"Efq":{if(U.length!==0&&!Bi(a,y))throw M(a,y,"cases for "+U.map((s)=>s.k).join(", "),n,n.s,e.def);return Na(xa(n.s),o,b())}case"Mat":{let w=function(t,Un,se){if(Un===0)return T.B(R(s.k,se,s.s));else{let $a=za(a,t,y,e.def,s.s),hi=Si($a.q,T.q);return m(hi,$a.k,$a.i,$a.A,(Ue)=>{return w($a.B(Ue),Un-1,se.concat([Ue]))},s.s)}},s=n,T=d,N=re(U,n.k);if(N===null)throw M(a,y,"a constructor of "+h.k+" (missing, or already matched)",n,n.ks??n.s,e.def);let l=ue(a,N.T,h.x,y,e.def,n.s),W=e;if(e.n>0)W={...e,t:jn(e.t,n.k,N.n),n:e.n-1+N.n};let O=z(a,W,n.h,i,w(l,N.n,[]),y,c),q=m(d.q,d.k,d.i,ha(h.k,h.x,n.s,h.r.concat([N.k])),d.B,n.s),E=z(a,e,n.m,i,q,y,c);return Na(Wa(n.k,O.tm,E.tm,n.s,n.ks),o,Gi(O.us,E.us))}}}case"Rfl":{let d=Y(a,o);if(d.$!=="Eql")throw M(a,y,o,wn(a,y,n),n.s,e.def);if(!P("EQ",a,d.a,d.b,c))throw M(a,y,d.a,d.b,n.s,e.def);return Na(Pa(n.s),o,b())}case"Hol":{if(n.k==="TODO")return Na(nn(n.k,n.s),o,b());throw M(a,y,o,n,n.s,e.def)}case"Rwt":{let d=va(a,e,n.e,i,y,c),h=Y(a,d.ty);if(h.$!=="Eql")throw M(a,y,"an equation {a == b : T}",d.ty,n.e.s??n.s,e.def);let U=m(v(),"_",0,h.T,(w)=>m(v(),"e",0,wa(h.a,w,h.T),()=>x($(v())),n.s),n.s),s=z(a,e,n.p,X(),U,y,c),T=aa(aa(n.p,h.b),n.e);if(!P("LE",a,T,o,c))throw M(a,y,o,T,n.s,e.def);let N=aa(aa(n.p,h.a),Pa(n.s)),l=z(a,e,n.f,i,N,y,c);return Na(an(d.tm,s.tm,l.tm,n.s),o,ga(d.us,l.us))}default:break}let f=va(a,e,n,i,y,c);if(P("LE",a,f.ty,o,c))return{tm:f.tm,us:f.us};throw M(a,y,o,f.ty,n.s,e.def)}function oo(a,e,n){z(a,{t:K(e),n:0,def:e,qs:[]},n.T,X(),x($(v())),L(),0);let i=n.T,o=L();for(let c=0;c<n.n;c++){let f=za(a,i,o,e,n.T.s);o=ba(o,c,f.q,f.k,f.A),i=f.B(Z(f.k,c))}let y=Y(a,i);if(y.$!=="Typ")throw M(a,o,"a kind (type "+e+"<..> is Kind(g))",y,i.s??n.T.s,e);for(let c of n.c){let f=c.T,d=L();for(let s=0;s<n.n+c.n;s++){let T=za(a,f,d,c.k),N=x($(T.q));if(s>=n.n&&T.q.$==="Lone")N=y;z(a,{t:K(c.k),n:0,def:c.k,qs:[]},T.A,X(),N,d,s),d=ba(d,s,T.q,T.k,T.A),f=T.B(Z(T.k,s))}let h="a telescope tipped at "+e+" applied to its own parameters",U=Y(a,f);if(U.$!=="ADT"||U.k!==e||U.x.length!==n.n||U.r.length!==0)throw M(a,d,h,U,void 0,c.k);for(let s=0;s<n.n;s++){let T=Y(a,U.x[s]);if(T.$!=="Var"||T.i!==s)throw M(a,d,h,U,void 0,c.k)}}}function yo(a,e,n){if(z(a,{t:K(e),n:0,def:e,qs:[],u:n.u},n.T,X(),x($(v())),L(),0),n.i){let i=_(n.T);for(let c=0;i.$==="All";c++)i=_(i.B(Z(i.k,c)));let[o]=rn(i),y=a.tlds.IO;if(o.$!=="Ref"||o.k!=="IO"||y===void 0||y.$!=="Def"||y.b!==!0)throw M(a,L(),"a foreign definition returning base IO(...) directly (return type aliases are not unfolded)",e,i.s,e)}if(n.v!==null){let i=Ci(a,n.T).doms.map((o)=>o[0]).slice(0,n.n);while(i.length<n.n)i.push(v());n.e=z(a,{t:K(e),n:n.n,def:e,qs:i,u:n.u},n.v,v(),n.T,L(),0).tm}}function ae(a,e=0){let n=na(),i=new Map;for(let o=0;o<a.order.length;o++)i.set(a.order[o],o);for(let o=0;o<a.order.length;o++){let y=a.order[o],c=a.tlds[y],f=i.get(y)===o;if(c.$==="ADT"){n.tlds[y]=c;for(let h of c.c)n.ctrs[h.k]=h;if(o>=e)oo(n,y,c);continue}let d={$:"Def",n:c.n,T:c.T,v:null,b:c.b,u:c.u};if(o<e){n.tlds[y]=f?c:d;continue}if(f&&c.v===null&&c.b!==!0&&!c.i)a.open+=1;n.tlds[y]=d,yo(n,y,f?c:d),n.tlds[y]=f?c:d}}var je=`

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
  -T: Data, cx: Array<T> & Array<T>, cy: Array<T> & Array<T>
) -> Array<T> & Array<T>:
  (xa, xb) = cx
  (ya, yb) = cy
  (ANode{xa, ya}, ANode{xb, yb})

def Array.clone(-T: Data, a: Array<T>) -> Array<T> & Array<T>:
  match a:
    case ALeaf{x}:
      +x2 = x
      (ALeaf{x2}, ALeaf{x2})
    case ANode{xs, ys}:
      Array.clone.node(T, Array.clone(T, xs), Array.clone(T, ys))

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
`;var Ee=`# Winning Is Impossible -- the game.
#
# The whole game, and nothing else: a torus map, a walled room, a flag,
# four moves, and the level as text (the front end asks \`grid\` for
# it). Stepping onto the flag's cell is the win. The claims about this game live in LAWS.bend; their proofs live
# in PROOF.bend. This file is AI-written and may be rewritten at will --
# the laws hold or the book stops checking.

import Base

type Move is Data:
  Up{}
  Down{}
  Left{}
  Right{}

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

def on_flag(+x: Nat, +y: Nat) -> Bool:
  nat_eq(x, flag_x()) && nat_eq(y, flag_y())

def move(+tx: Nat, +ty: Nat, g: Game) -> Game:
  Game{x, y, w0} = g
  +w = w0
  pick(Game, wall(tx, ty), Game{x, y, w}, Game{tx, ty, w || on_flag(tx, ty)})

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

def start() -> Game:
  Game{start_x(), start_y(), False{}}

# Keys
# ----
# The front end sends every key press as its character code (\`w\` is 119;
# the arrows arrive as w, a, s, d) and plays the move this answers, so a
# new key is one more line here and one more Move.

def key(+k: U32) -> Maybe<Move>:
  pick(Maybe<Move>, U32.is_eq(k, 119), Some{Up{}},
    pick(Maybe<Move>, U32.is_eq(k, 115), Some{Down{}},
      pick(Maybe<Move>, U32.is_eq(k, 97), Some{Left{}},
        pick(Maybe<Move>, U32.is_eq(k, 100), Some{Right{}}, None{}))))

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
  is_flag  = on_flag(x, y)
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
    IO.print(pick(String, is_won(replay(start(), [Left{}, Left{}, Up{}])),
      "WON (this line is unreachable)", "still not won"))
`;var te=`# The laws. The human states them; PROOF.bend must prove them.

import Base
import ./main.bend as Game

# LAW: for any sequence of moves, replaying them
# from the start can never lead to victory.
law you_cant_win:
  for moves: List<Game.Move>
  board = Game.replay(Game.start(), moves)
  {Game.is_won(board) == False{} : Bool}

# A board that looks won: the player on the flag's cell, \`won\` still false.
def looks_won(g: Game.Game) -> Bool:
  Game.Game{x, y, won} = g
  Game.on_flag(x, y) && Bool.not(won)

# LAW: standing on the flag is a win: no sequence of moves leaves the
# player on the flag's cell with \`won\` false.
law on_flag_wins:
  for moves: List<Game.Move>
  board = Game.replay(Game.start(), moves)
  {looks_won(board) == False{} : Bool}
`;var be=`# Winning Is Impossible -- the certificate.
#
# The proofs. This file imports the game (as Game) and the claims (as
# Laws) and fills every assert the laws make -- an unfilled assert is an
# error, so \`bend PROOF.bend\` is the whole verification. Everything here
# is AI-written scaffolding for two defs: Laws.you_cant_win and
# Laws.on_flag_wins.
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

# on a safe cell the flag test computes to False
def off_flag(+x: Nat, +y: Nat, +hp: T(okpos(x, y)))
  -> {False{} == Game.on_flag(x, y) : Bool}:
  bool_case(Game.on_flag(x, y), z => {False{} == z : Bool},
    et => Empty.absurd({False{} == True{} : Bool}, no_flag(x, y, hp, et)),
    ef => {==})

# the chosen cell: a step from a safe cell lands somewhere safe (or stays),
# and lands unwon, since a safe cell is off the flag
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
    Game.Game{tx(a, x, y), ty(a, x, y), Game.on_flag(tx(a, x, y), ty(a, x, y))},
    et => (x, (y, (hp2, {==}))),
    ef =>
      +safe = go_ok(a, x, y, hp2, ca, ef)
      (tx(a, x, y), (ty(a, x, y), (safe,
        %off_flag(tx(a, x, y), ty(a, x, y), safe)
          : {Game.Game{tx(a, x, y), ty(a, x, y), False{}}
             == Game.Game{tx(a, x, y), ty(a, x, y), _} : Game.Game}
        {==}))))

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

# The engine of both laws: from a safe unwon cell, any list of moves ends
# on a safe unwon cell. Each arm: the step lands safe (go_pos), then the
# rest of the list runs from there.
def run_safe(t: List<Game.Move>, x: Nat, y: Nat, hp: T(okpos(x, y)))
  -> &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
   & {Game.run(t, Game.Game{x, y, False{}}) == Game.Game{nx, ny, False{}} : Game.Game}:
  match t:
    case Nil{}:
      (x, (y, (hp, {==})))
    case Con{Game.Up{}, as0}:
      +x2 = x
      +y2 = y
      use4(Game.Up{}, x2, y2, go_pos(Game.Up{}, x2, y2, hp, Unit{}),
        &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
         & {Game.run(as0, Game.move(tx(Game.Up{}, x2, y2), ty(Game.Up{}, x2, y2),
            Game.Game{x2, y2, False{}})) == Game.Game{nx, ny, False{}} : Game.Game},
        mx => my => hq => eq =>
          %eq : &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
              & {Game.run(as0, _) == Game.Game{nx, ny, False{}} : Game.Game}
          run_safe(as0, mx, my, hq))
    case Con{Game.Down{}, as0}:
      +x2 = x
      +y2 = y
      use4(Game.Down{}, x2, y2, go_pos(Game.Down{}, x2, y2, hp, Unit{}),
        &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
         & {Game.run(as0, Game.move(tx(Game.Down{}, x2, y2), ty(Game.Down{}, x2, y2),
            Game.Game{x2, y2, False{}})) == Game.Game{nx, ny, False{}} : Game.Game},
        mx => my => hq => eq =>
          %eq : &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
              & {Game.run(as0, _) == Game.Game{nx, ny, False{}} : Game.Game}
          run_safe(as0, mx, my, hq))
    case Con{Game.Left{}, as0}:
      +x2 = x
      +y2 = y
      use4(Game.Left{}, x2, y2, go_pos(Game.Left{}, x2, y2, hp, Unit{}),
        &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
         & {Game.run(as0, Game.move(tx(Game.Left{}, x2, y2), ty(Game.Left{}, x2, y2),
            Game.Game{x2, y2, False{}})) == Game.Game{nx, ny, False{}} : Game.Game},
        mx => my => hq => eq =>
          %eq : &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
              & {Game.run(as0, _) == Game.Game{nx, ny, False{}} : Game.Game}
          run_safe(as0, mx, my, hq))
    case Con{Game.Right{}, as0}:
      +x2 = x
      +y2 = y
      use4(Game.Right{}, x2, y2, go_pos(Game.Right{}, x2, y2, hp, Unit{}),
        &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
         & {Game.run(as0, Game.move(tx(Game.Right{}, x2, y2), ty(Game.Right{}, x2, y2),
            Game.Game{x2, y2, False{}})) == Game.Game{nx, ny, False{}} : Game.Game},
        mx => my => hq => eq =>
          %eq : &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
              & {Game.run(as0, _) == Game.Game{nx, ny, False{}} : Game.Game}
          run_safe(as0, mx, my, hq))

# opens run_safe's answer for a goal
def use_safe(-t: List<Game.Move>, -x: Nat, -y: Nat,
  w: &nx: Nat -> &ny: Nat -> T(okpos(nx, ny))
   & {Game.run(t, Game.Game{x, y, False{}}) == Game.Game{nx, ny, False{}} : Game.Game},
  -P: Type,
  k: @nx: Nat -> @ny: Nat -> @hq: T(okpos(nx, ny))
   -> @eq: {Game.run(t, Game.Game{x, y, False{}}) == Game.Game{nx, ny, False{}} : Game.Game}
   -> P) -> P:
  (nx, w1) = w
  (ny, w2) = w1
  (hq, eq) = w2
  k(nx, ny, hq, eq)

# The laws, filled. The start cell is safe (checked by computation), and
# run_safe carries that through any list of moves: the final board is
# some Game{nx, ny, False{}} with (nx, ny) safe. Unwon, so the first law;
# off the flag (a safe cell is), so the second.
def Laws.you_cant_win(moves):
  use_safe(moves, Game.start_x(), Game.start_y(),
    run_safe(moves, Game.start_x(), Game.start_y(), Unit{}),
    {Game.is_won(Game.replay(Game.start(), moves)) == False{} : Bool},
    nx => ny => hq => eq =>
      %sym(Game.Game, Game.run(moves, Game.Game{Game.start_x(), Game.start_y(), False{}}),
        Game.Game{nx, ny, False{}}, eq) : {Game.is_won(_) == False{} : Bool}
      {==})

def Laws.on_flag_wins(moves):
  use_safe(moves, Game.start_x(), Game.start_y(),
    run_safe(moves, Game.start_x(), Game.start_y(), Unit{}),
    {Laws.looks_won(Game.replay(Game.start(), moves)) == False{} : Bool},
    nx => ny => hq => eq =>
      %sym(Game.Game, Game.run(moves, Game.Game{Game.start_x(), Game.start_y(), False{}}),
        Game.Game{nx, ny, False{}}, eq) : {Laws.looks_won(_) == False{} : Bool}
      %off_flag(nx, ny, hq) : {Bool.and(_, Bool.not(False{})) == False{} : Bool}
      {==})
`;var me="# Bend, for this lab\n\nBend is a pure, strict, total language: Python's look, affine values, and\na proof checker in the style of Lean, without tactics. A file is `import`\nlines, then `type`, `def` and `law` blocks. Indent with two spaces. One\nstatement per line. `#` starts a comment.\n\n## Files, namespaces, laws\n\n```\nimport Base\nimport ./main.bend as Game\n```\n\n`Base` is the prelude. A file's definitions live under its namespace, so\ninside PROOF.bend the game's `step` is `Game.step` and its constructor\n`Up{}` is `Game.Up{}`. A `law` states a type; a `def` of the same name,\nwith bare parameter names, proves it. `def Laws.you_cant_win(moves):` in\nPROOF.bend fills the law that LAWS.bend states. An unfilled law, or a\n`?TODO` left in a body, is a TODO: the file still \"checks\" but is\nincomplete, and submit rejects it. `@unsafe` is rejected too. Imports may\nnot form a cycle: LAWS.bend imports main.bend, so main.bend cannot import\nLAWS.bend or PROOF.bend.\n\n```\nlaw name:\n  for x: A          # a parameter; `for +x: A` reusable, `for -x: A` erased\n  R                 # the claim, a type; lets may come before it\n\ndef name(x):\n  body              # the proof: a term of type R\n```\n\n## Definitions and quantities\n\n```\ndef name(x: A, +y: B, -Z: Type) -> R:\n  statements\n  expression\n```\n\nEvery binder has a quantity. `x` is used exactly once (affine). `+y` may\nbe used many times; `+` is allowed only on `Data` (Nat, Bool, U32, String,\nequations, and types declared `is Data`). `-Z` is erased: types and\nproofs that only types mention. Using an affine value twice is the error\n`x (consumed more than once)`. To reuse a value bound without `+`, rebind\nit: `+x = x0`. Dropping a value is free.\n\nStatements: `x = e` (a literal needs its type: `x = {10 : U32}`),\n`+x = e`, `Ctr{a, b} = p` opens a constructor, `(a, b) = p` opens a pair,\n`%e : P` rewrites (below). Expressions: calls `f(a, b)`, constructors\n`Ctr{a, b}`, lambdas `x => body`, pairs `(a, b)`, literals, operators.\nEvery type argument is written out: there are no implicit arguments and\nno unification. A lambda passed to a call takes its type from the callee.\n\nThere is no `if`. `match` opens a parameter or a field, never a computed\nexpression: compute in a helper and match its parameter. Nat patterns are\n`0n` and `1n+p` (`p` the predecessor; `2n+p` also works); Bool `True{}`,\n`False{}`; List `Nil{}`, `Con{h, t}`; `_` catches the rest. Several\nscrutinees: `match a, b:` with `case 0n, 1n+q:`. Matching a `+` parameter\nhands out `+` fields. A match with no cases closes a goal whose scrutinee\nhas type `Empty`.\n\n```\ndef pick(-A: Type, c: Bool, a: A, b: A) -> A:\n  match c:\n    case True{}:\n      a\n    case False{}:\n      b\n```\n\nTermination: a recursive call must pass a structurally smaller argument,\na pattern variable bound by a `match` on that parameter (`Nat.sub(n, 1n)`\nproves nothing; only the pattern does). A def may call itself and the\ndefs above it in the file, never one below: no mutual recursion.\n\n## Types and values\n\n- `Nat`: unary, `0n`, `3n`, `1n+p`. `Nat.add`, `Nat.sub` (floors at 0n),\n  `Nat.mul`, `Nat.double`, `Nat.is_lt`. main.bend defines its own\n  `nat_eq` and `nat_le` answering `Bool`.\n- `Bool`: `True{}`, `False{}`; `a && b` is `Bool.and`, `a || b` is\n  `Bool.or`, `Bool.not(b)`.\n- `U32`: a 32-bit word, `42`; operators need the type: `(a + b : U32)`,\n  `(a < b : U32)` answers `Bool`. Bare `(a + b)` is on `Nat`.\n- `String` `\"abc\"`, `a ++ b` appends; `Char` `'a'`.\n- `List<A>`: `[a, b]`, `Nil{}`, `Con{h, t}`.\n- `Unit` (one value, `Unit{}`), `Empty` (no value), `A & B` pairs `(a, b)`,\n  `Or(A, B)` with `Inl{l}` and `Inr{r}`, `Maybe<A>` with `None{}` and\n  `Some{v}`. `Type` and `Data` are kinds.\n\n```\ntype Move is Data:\n  Up{}\n  Down{}\n\ntype Game is Data:\n  Game{x: Nat, y: Nat, won: Bool}\n```\n\nA type `is Data` may be reused with `+`; `is Type` may not. Fields are\nreached only by matching or by `Game{x, y, w} = g`.\n\n## Propositions and proofs\n\nA proposition is a type and a proof is a term of it. `Unit` is true,\n`Empty` is false, `A -> B` is implication, `@x: A -> B` is \"for all x\",\n`&x: A -> B` is \"exists x\" (built as `(x, proof)`, opened by\n`(x, w) = p`). `{a == b : T}` is equality. Its one proof is `{==}`,\naccepted when both sides compute to the same term: the checker evaluates\ndefinitions, so `{nat_eq(1n, 1n) == True{} : Bool}` is proved by `{==}`.\n`{a != b : T}` is `{a == b : T} -> Empty`. `Empty.absurd(P, e)` proves any\n`P` from `e : Empty`. Base has `Equal.sym(A, a, b, e)`,\n`Equal.trans(A, a, b, c, ab, bc)` and `Equal.cong(A, B, f, a, b, e)`.\n\nCase analysis: matching a parameter refines the goal in each arm. Where\nthe goal mentions `x : Nat`, `match x:` gives a `0n` goal and a `1n+p`\ngoal, both computed as far as they go. Induction: a recursive call is the\ninduction hypothesis, on a structurally smaller argument.\n\nRewriting: `%e : P`, with `e : {a == b : T}` and `P` the goal with `_`\nmarking where `b` sits. The goal must be `P` with `b` at the marks; the\nlines after the rewrite prove `P` with `a` there.\n\n```\ndef IsEven(n: Nat) -> Type:\n  match n:\n    case 0n:\n      Unit\n    case 1n+0n:\n      Empty\n    case 2n+p:\n      IsEven(p)\n\ndef half(n: Nat) -> Nat:\n  match n:\n    case 0n:\n      0n\n    case 1n+0n:\n      0n\n    case 2n+p:\n      1n+half(p)\n\nlaw half_ok:\n  for x: Nat\n  for e: IsEven(x)\n  {Nat.double(half(x)) == x : Nat}\n\ndef half_ok(x, e):\n  match x:\n    case 0n:\n      {==}\n    case 1n+0n:\n      match e:\n    case 2n+p:\n      %half_ok(p, e) : {2n+Nat.double(half(p)) == 2n+_ : Nat}\n      {==}\n```\n\nTruth by computation, the idiom PROOF.bend is built on:\n\n```\ndef T(b: Bool) -> Data:\n  match b:\n    case True{}:\n      Unit\n    case False{}:\n      Empty\n```\n\n`T(b)` is `Unit` when `b` computes to `True{}`, so `Unit{}` proves\n`T(check())` whenever `check()` is a closed term that evaluates to True:\nthe checker runs the program and the run is the proof. A hypothesis\n`w : T(a && b)` is split by `and_split(a, b, w, P, wa => wb => ...)`;\n`T(False{})` is `Empty`, so `Empty.absurd(P, w)` closes that arm. A match\non a Bool `c` when the goal mentions a function of `c` needs the goal\nrefined; PROOF.bend does it with `bool_case(c, z => Goal[z], et => ...,\nef => ...)`, which gives each arm an equation `{True{} == c : Bool}` or\n`{False{} == c : Bool}` to rewrite with, and `pick_split` does the same\nfor `Game.pick`. Read these kits in PROOF.bend before writing new ones.\n\nThe checker is one bidirectional pass with conversion where inference\nmeets checking. An error prints `expected`, `observed`, the context and\nthe line. The pair shows the two terms after evaluation at the exact spot\nthey part: read it, then change the term or the motive so they meet.\n\n## The game and its proof\n\nmain.bend: `Move` (Up, Down, Left, Right), `Game{x, y, won}`, the map\nconstants (`map_w` 12, `map_h` 8, a room of `room_w` x `room_h` in the\ncorner, the flag at `flag_x`, `flag_y`, the start cell), `wall(x, y)`\n(the room's two walls, and their mirrors on the far edges of the torus),\n`warp_*` (wrapping moves), `on_flag(x, y)`, `move` (a step that a wall\nrefuses; landing on the flag sets `won`), `step`, `run`, `replay`,\n`is_won`, `grid` (the map as text) and `key` (a key's character code to\nthe `Maybe<Move>` it plays: a new key is one more line there and one\nmore `Move`).\n\nLAWS.bend states two laws over every `moves: List<Game.Move>` and\n`board = Game.replay(Game.start(), moves)`: `you_cant_win`,\n`Game.is_won(board) == False{}`; and `on_flag_wins`,\n`looks_won(board) == False{}`, where `looks_won` (defined there) is \"the\nplayer on the flag's cell with `won` false\". Together: the player never\nwins, and never even stands on the flag.\n\nPROOF.bend proves both with a safety invariant, `okpos(x, y)`: the\nplayer is on the map (`x <= 11n`, `y <= 7n`), not inside the room\n(`x <= 2n` and `y <= 2n`), and not on a wall. `chk(a, x, y)` says a move\n`a` from a safe cell lands on a wall (so `move` refuses it) or on a safe\ncell. `chk_all(a, 11n)` conjoins `chk` over every cell and evaluates to\nTrue by computation; `chk_row_at`, `chk_all_at` and `cert` index that\ncertificate at open coordinates; `no_flag` and `off_flag` say a safe\ncell is off the flag, because the flag's cell is in the room; `go_ok`\nand `go_pos` turn it all into \"the next cell is safe, and unwon\";\n`run_safe` carries that through any list of moves, answering the final\ncell, its safety and the equation `run(moves, start) == Game{nx, ny,\nFalse{}}`; `use_safe` opens that answer, and each fill rewrites its goal\nwith it: unwon gives the first law, off the flag gives the second. The\nliteral numbers in PROOF.bend (11n, 7n, 2n, 1n) mirror main.bend's map:\nwhen the map changes, they change with it, and `chk_all` must still\nevaluate to True, which is the geometric fact the checker computes for\nyou.\n\nPractical advice. Keep main.bend's helper shape (`nat_eq`, `nat_le`,\n`wall`, `pick`, `warp_*`, `move`, `step`, `run`, `replay`), so most of\nPROOF.bend survives an edit. Change one thing, submit, read the first\nerror, fix, submit again. A feature that opens\na path into the room (a hole, a wrap, a teleport, a bigger map) keeps the\nlaw only if something still keeps the flag out of reach. A wall where\nthe path would enter is the cheap answer; the rules above ask for a\nbetter one. When the literal request breaks the proof, build the most\ncreative version that keeps the law, and say what changed. Only \"let me\nwin\" itself has no lawful version.\n";var No="gpt-5.6-luna",lo="https://api.openai.com/v1/responses",ke=60,Ja="/game/",de=["main.bend","LAWS.bend","PROOF.bend"],wo=[119,115,97,100],Mo={ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d"},go="The front end needs, in main.bend: `type Game is Data` with fields x: Nat, y: Nat, won: Bool, in that order; start() -> Game; replay(g: Game, moves: List<Move>) -> Game; is_won(g: Game) -> Bool; map_w() -> Nat; map_h() -> Nat; grid(y: Nat) -> String, rows 0..y joined by newlines, one character per cell: '#' wall, 'F' flag, 'P' the start, '.' floor; and key(k: U32) -> Maybe<Move>. The front end keeps every move played and, on each key press, shows replay(start(), moves) for the whole list from the start, and calls the game won when is_won of that board answers True{}: exactly the terms the laws bind. Every key press reaches key() as its character code (letters lowercased: 'w' is 119, 'j' is 106; space is 32; the arrow keys arrive as w, a, s, d) and the front end plays the move it answers: Some{m} plays m, None{} does nothing; space and every unmapped key answer None{}. So a new key is: a constructor in Move, a case in step, a line in key, and the matching cases in PROOF.bend. The player is drawn at (x, y) and the level from grid(map_h() - 1n). Anything else may change.",Fo=`You are the AI inside a lab on Bend's website. A player is playing Winning Is Impossible, a small game written in Bend, and asks you to change it. You edit the game and its proof; Bend checks your work; the player watches.

Files (use the tools):
- main.bend: the game. Edit freely.
- LAWS.bend: the human's laws, you_cant_win and on_flag_wins. Read-only.
- PROOF.bend: the proof of the law about the current main.bend. Edit freely. After any change to main.bend, both proofs must pass again: repair them.

Rules:
1. Do what the player asks, as literally as you can. When the literal change breaks the proof (submit rejects it), do not give up and do not water the request down to nothing. Reach for the most creative, ingenious and funny solution that honors the spirit of the request as faithfully as possible, even if it takes more proof work. For example:

Prompt: "remove the walls"
Bad solution: remove the walls but keep their hitboxes. It feels artificial and unsatisfying.
Creative solution: make the player move diagonally, like a bishop. The flag is always on a white square and the player on a dark square, so the flag is unreachable.

Prompt: "let WASD teleport me 2 squares"
Bad solution: make the walls block the teleport. Bad, because a teleport should pass through walls.
Creative solution: make the walls two tiles thick. The prompt is fully honored, and the law is still provable.

Prompt: "remove the walls and let me walk normally"
Bad solution: remove the flag. That is trivially unwinnable.
Creative solution: make the flag move with WASD too. Now the player can never close the gap.

Each of these honors the prompt while keeping the game unwinnable by a non-trivial argument. That is what you should always seek. Avoid solutions that look like bullshit: turning the flag into a wall is technically valid but unsatisfying, because the player feels artificially blocked from stepping on the flag, which makes everything else moot. Whatever the prompt, ask yourself: "how can I honor it as much as possible while still keeping the flag unreachable, for a reason that is neither expected nor trivial, and that needs no tricks that look cheap?" Only once you have an answer that honestly satisfies you, implement and prove it. Then tell the player what you kept and what the law made you change. Only a request that is nothing but 'let me win' has no lawful version: then say so in one sentence.
2. `+go+`
3. Work in this order: read the files, edit main.bend, and submit at once, before touching PROOF.bend, every time you change the game. The player is watching, and that first submit is where they see Bend catch the change against the law: never skip it, even when you expect the proof to break. Only submit runs the checker: it checks main.bend, then main.bend, LAWS.bend and PROOF.bend together, and answers the first error with its file and location. Then repair PROOF.bend, submit again, and repeat until it is accepted. Do not stop before submit is accepted or the request is shown to be unlawful.
4. Say what you did at the end, in two or three plain sentences for the player.

The Bend guide follows.

`+me,ei={"main.bend":Ee,"LAWS.bend":te,"PROOF.bend":be};p.set("/bend2/base.bend",je);for(let a of de)p.set(Ja+a,ei[a]);p.set(Ja+"ALL.bend",`import Base
import ./main.bend as Game
import ./LAWS.bend as Laws
import ./PROOF.bend as Proof
`);var ne=null;async function So(){if(ne===null){let a=na();await ma(a,"/bend2/base.bend","",new Map),ne=new Set(a.order)}return ne}function sn(a){let e=a;return e?.$==="Err"?Re(e):String(a?.message??a)}async function Kn(a){let e=na();try{await ma(e,Ja+a,"",new Map),ae(e)}catch(c){return{ok:!1,text:sn(c),hols:0,uns:0}}let n=await So(),i=[...new Set(e.order)].filter((c)=>!n.has(c)&&e.tlds[c].u===!0).length,o=e.hols+e.open,y=o>0?String(o)+(o===1?" TODO":" TODOs")+` found.
The code is incomplete, and not a valid proof yet.`:i>0?String(i)+(i===1?" term":" terms")+` annotated as unsafe.
The code is well-typed, but may contain logical paradoxes.`:"All terms check.";return{ok:o===0&&i===0,text:y,book:e,hols:o,uns:i}}class zn{book;constructor(a){this.book=a}ev(a,e){let n=this.book,i=n.order.length;try{return pn(n,Ja,"def RUN() -> "+a+`:
  `+e+`
`,"",Object.create(null)),ae(n,i),Da(C(D(n,n.tlds.RUN.v)))}finally{for(let o of n.order.splice(i))delete n.tlds[o]}}replay(a){let e=this.ev("Game & Bool","+g = replay(start(), ["+a.join(", ")+`])
  (g, is_won(g))`),n=/^Tuple\{Game\{(\d+)n, (\d+)n, (?:True|False)\{\}.*\}, (True|False)\{\}\}$/.exec(e);if(n===null)throw Error("Game must keep the fields x: Nat, y: Nat, won: Bool, in that order, and is_won must answer a Bool (replay(start(), moves) and is_won of it answered "+e+")");return{x:Number(n[1]),y:Number(n[2]),won:n[3]==="True"}}key(a){let e=/^Some\{(.*)\}$/.exec(this.ev("Maybe<Move>","key("+a+")"));return e===null?null:e[1]}nat(a){return Number(this.ev("Nat",a+"()").replace(/n$/,""))}grid(){return JSON.parse(this.ev("String","grid(Nat.sub(map_h(), 1n))"))}}function ii(a){for(let e of["start","replay","is_won","map_w","map_h","grid","key"])if(a.book.tlds[e]?.$!=="Def")return"main.bend must keep a def named "+e;try{a.replay([]);let e=a.nat("map_h"),n=a.nat("map_w"),i=a.grid().split(`
`);if(i.length!==e||i.some((o)=>o.length!==n))return"grid(map_h() - 1n) must answer map_h() rows of map_w() cells";for(let o of wo){let y=a.key(o);if(y!==null)a.replay([y])}}catch(e){return sn(e)}return null}var on,yn=[],ca,Cn=[],ie=12,oe=8,ye=new Set,cn=null,Ba=null,Aa=null,oi=0;function he(a){if(on=a,yn=[],ca=on.replay(yn),Cn=on.grid().split(`
`),oe=Cn.length,ie=Math.max(...Cn.map((e)=>e.length)),ye=new Set,cn=null,Cn.forEach((e,n)=>[...e].forEach((i,o)=>{if(i==="#")ye.add(o+","+n);if(i==="F")cn=[o,n]})),Ba=Aa=null,Va!==void 0)oi=performance.now()}function Go(a){let e;try{if(e=on.key(a),e===null)return!1;let{x:n,y:i}=ca;yn.push(e);try{ca=on.replay(yn)}catch(y){throw yn.pop(),y}let o={Up:[0,-1],Down:[0,1],Left:[-1,0],Right:[1,0]}[e.replace(/\{.*$/,"")];if(ca.x===n&&ca.y===i&&o!==void 0)Aa={dx:o[0],dy:o[1],t0:performance.now()};else if(Math.abs(ca.x-n)<=1&&Math.abs(ca.y-i)<=1)Ba={fx:n,fy:i,t0:performance.now()}}catch(n){dn("bad","the game crashed: "+sn(n))}return!0}var sa={floor:["#f3efe8","#e5e1d9"],wall:"#a6a3a0",cap:"#bebbb8",pole:"#87847d",cloth:"#7e9a5e",skin:"#78c0e3",eye:"#2f3b4c",win:"#f6e4e1",winRim:"#dfa9a2",winInk:"#c46a60"},Wo='ui-monospace,Menlo,"SF Mono",Consolas,monospace',_e=(a,e,n)=>a+(e-a)*n;function ro(a,e){let n=a.getContext("2d"),i=a.clientWidth,o=window.devicePixelRatio||1,y=i/ie,c=y*oe;if(a.width!==Math.round(i*o)||a.height!==Math.round(c*o))a.width=Math.round(i*o),a.height=Math.round(c*o);n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,i,c);let f=(l,w,W,O,q,E)=>{n.fillStyle=E,n.beginPath(),n.roundRect(l,w,W,O,q),n.fill()};for(let l=0;l<oe;l++)for(let w=0;w<ie;w++){let W=w*y+1.5,O=l*y+1.5,q=y-3;if(!ye.has(w+","+l)){f(W,O,q,q,y/8,sa.floor[(w+l)%2]);continue}f(W,O,q,q,y/8,sa.wall),f(w*y+y/8,l*y+y/8,y*0.75,y*0.21,y/19,sa.cap)}let d=y/40;if(cn!==null&&!ca.won){let l=cn[0]*y,w=cn[1]*y;n.strokeStyle=sa.pole,n.lineWidth=2.5,n.lineCap="round",n.beginPath(),n.moveTo(l+14*d,w+31*d),n.lineTo(l+14*d,w+9*d),n.stroke(),n.fillStyle=sa.cloth,n.beginPath(),n.moveTo(l+15*d,w+9*d),n.lineTo(l+31*d,w+14.5*d),n.lineTo(l+15*d,w+20*d),n.closePath(),n.fill()}let{x:h,y:U}=ca;if(Ba!==null){let l=Math.min((e-Ba.t0)/90,1);if(h=_e(Ba.fx,h,l),U=_e(Ba.fy,U,l),l===1)Ba=null}if(Aa!==null){let l=(e-Aa.t0)/120;if(l<1)h+=Aa.dx*0.3*(1-l),U+=Aa.dy*0.3*(1-l);else Aa=null}let s=h*y+y/2,T=U*y+y/2;n.fillStyle=sa.skin,n.beginPath(),n.arc(s,T,12.5*d,0,Math.PI*2),n.fill(),n.fillStyle=sa.eye,n.beginPath(),n.arc(s-4.5*d,T-2*d,2.2*d,0,Math.PI*2),n.arc(s+4.5*d,T-2*d,2.2*d,0,Math.PI*2),n.fill();let N=(e-oi)/900;if(N<1)n.fillStyle="rgba(126,154,94,"+(0.45*(1-N)*(1-N)).toFixed(3)+")",n.beginPath(),n.roundRect(0,0,i,c,y/8),n.fill();if(ca.won){let l=y*5.6,w=y*1.5,W=(i-l)/2,O=(c-w)/2;n.fillStyle=sa.win,n.strokeStyle=sa.winRim,n.lineWidth=1.5,n.beginPath(),n.roundRect(W,O,l,w,10),n.fill(),n.stroke(),n.fillStyle=sa.winInk,n.font="600 "+y*0.6+"px "+Wo,n.textAlign="center",n.fillText("YOU WON !?",i/2,O+w*0.66)}}var Za={type:"string"},Vn=(a,e,n)=>({type:"function",name:a,description:e,strict:!0,parameters:{type:"object",properties:n,required:Object.keys(n),additionalProperties:!1}}),Bo=[Vn("read_file","Read one of the files. Paths: main.bend, LAWS.bend, PROOF.bend.",{path:Za}),Vn("write_file","Replace the whole content of main.bend or PROOF.bend. LAWS.bend is read-only.",{path:Za,content:Za}),Vn("edit_file","Replace one exact occurrence of `old` with `new` in main.bend or PROOF.bend. `old` must occur exactly once, indentation included.",{path:Za,old:Za,new:Za}),Vn("submit","Submit the files. Bend checks main.bend, then main.bend, LAWS.bend and PROOF.bend together: no error, the law you_cant_win proved, no TODO, no @unsafe, LAWS.bend untouched, and the front end's API intact. Accepted work goes live at once. A rejection answers the first error with its file and location: fix it and submit again.",{})];async function yi(){if(p.get(Ja+"LAWS.bend")!==ei["LAWS.bend"])return{game:!1,text:"LAWS.bend was changed"};let a=await Kn("main.bend");if(!a.ok)return{game:!1,text:"main.bend: "+a.text};let e=await Kn("ALL.bend");if(!e.ok){let o=e.book===void 0?[]:[...new Set(e.book.order)].filter((y)=>y.startsWith("LAWS.")&&e.book.tlds[y].v===null);return{game:!1,text:o.length>0?"the law "+o[0].slice(5)+" has no proof: PROOF.bend must fill def Laws."+o[0].slice(5):"PROOF.bend: "+e.text}}let n=new zn(a.book),i=ii(n);if(i!==null)return{game:!0,text:i};return he(n),null}var qa=null;async function ci(a,e){let n=String(e.path??"").replace(/^\.?\//,"");if(a!=="submit"&&!de.includes(n))return"no such file: "+n+" (the files are main.bend, LAWS.bend, PROOF.bend)";let i=Ja+n;switch(a){case"read_file":return p.get(i);case"write_file":if(n==="LAWS.bend")return"LAWS.bend is the human's file: read-only.";return p.set(i,e.content),"wrote "+n+" ("+e.content.split(`
`).length+" lines)";case"edit_file":{if(n==="LAWS.bend")return"LAWS.bend is the human's file: read-only.";let o=p.get(i),y=o.split(e.old).length-1;if(y!==1)return y===0?"old text not found in "+n+" (it must match exactly, indentation included)":"old text occurs "+y+" times in "+n+"; include more context so it is unique";return p.set(i,o.replace(e.old,()=>e.new)),"edited "+n}case"submit":return qa=await yi(),qa===null?"Accepted. The new game is live.":"Rejected: "+qa.text;default:return"unknown tool "+a}}async function fi(a,e,n){let i=await fetch(lo,{method:"POST",signal:e,headers:{"Content-Type":"application/json",Authorization:"Bearer "+Pn()},body:JSON.stringify(a)});if(!i.ok){let d=i.status+" "+i.statusText;try{d=(await i.json()).error?.message??d}catch{}throw Error(d)}let o=i.body.getReader(),y=new TextDecoder,c="",f=null;for(;;){let{value:d,done:h}=await o.read();if(h)break;c+=y.decode(d,{stream:!0});let U;while((U=c.indexOf(`

`))>=0){let s=c.slice(0,U);c=c.slice(U+2);let T=s.split(`
`).filter((l)=>l.startsWith("data:")).map((l)=>l.slice(5).trim()).join(`
`);if(T===""||T==="[DONE]")continue;let N=JSON.parse(T);if(N.type==="response.completed"||N.type==="response.incomplete")f=N.response;else if(N.type==="response.failed"||N.type==="error")throw Error(N.error?.message??N.response?.error?.message??"the model failed");else n(N)}}if(f===null)throw Error("the stream ended before the response completed");return f}var vn=!1,In=null,ee=!0,un=null;async function Ao(a){vn=!0,In=new AbortController;let e=In.signal;Ca("u",a),hn();let n=!1,i=!1,o=0,y=[{role:"user",content:a}];try{for(;;){let c=ai("th"),f=ai("a"),d=[],h=()=>fi({model:fe(),instructions:Fo,input:y,tools:Bo,previous_response_id:un,stream:!0,store:!0,service_tier:"fast",reasoning:ee?{effort:"high",summary:"auto"}:{effort:"high"}},e,(s)=>{if(s.type==="response.reasoning_summary_text.delta")c.add(s.delta);else if(s.type==="response.reasoning_summary_part.added")c.add(c.text()?`

`:"");else if(s.type==="response.output_text.delta")f.add(s.delta);else if(s.type==="response.output_item.done"&&s.item.type==="function_call")d.push(s.item)});if(un=(await h().catch((s)=>{let T=String(s?.message);if(ee&&/summar/i.test(T))return ee=!1,h();if(un!==null&&/previous_response|not found/i.test(T))return un=null,h();throw s})).id,d.length===0){if(i||n)break;n=!0,y=[{role:"user",content:"You stopped without calling submit. If the change is done, call submit now. If it cannot be done under the law, say so in one or two sentences."}];continue}y=[];for(let s of d){let T={};try{T=JSON.parse(s.arguments||"{}")}catch{}let N=await ci(s.name,T);if(Vo(s.name,T,N),s.name==="submit"&&N.startsWith("Accepted"))i=!0;y.push({type:"function_call_output",call_id:s.call_id,output:N}),o+=1}if(o>=ke){dn("bad","Stopped after "+ke+" tool calls. Send another prompt to go on.");break}}}catch(c){dn(e.aborted?"dim":"bad",e.aborted?"Stopped.":"Error: "+sn(c))}vn=!1,In=null,hn()}var Co=`
html.lab body{max-width:none;padding:0;margin:0;display:flex;height:100vh;overflow:hidden}
html.lab #page{flex:1 1 50%;min-width:0;height:100vh;overflow-y:auto}
html.lab #pagein{max-width:65ch;margin:0 auto;padding:0 2ch 4em}
#lab{display:none;flex:1 1 50%;min-width:0;height:100vh;flex-direction:column;border-left:1px solid var(--line);background:var(--bg)}
html.lab #lab{display:flex}
@media (max-width:1000px){html.lab #page{display:none}#lab{flex-basis:100%;border:0}}
#lab .top{flex:none;padding:.7em 2ch 1em;background:#eeeae2}
#lab .hd{display:flex;justify-content:space-between;color:var(--b1);font-size:.87em}
#lab .hd b{color:var(--b02)}
#lab .hd a{color:var(--b0);border:0;cursor:pointer}
#lab canvas{display:block;width:100%;max-width:30em;margin:.6em auto 0}
#lab .how{max-width:30em;margin:.9em auto 0;text-align:center;white-space:pre-line;color:var(--b01)}
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
`;function S(a,e={},...n){let i=document.createElement(a);for(let[o,y]of Object.entries(e))i.setAttribute(o,y);return i.append(...n),i}var pe,Va,On,Q,Ta,fn,Ra,ce=!1,Pn=()=>localStorage.getItem("bend.lab.key")??"",fe=()=>localStorage.getItem("bend.lab.model")??No;function Ln(){Va.scrollTop=Va.scrollHeight}function Ca(a,e){let n=S("div",{class:a},e);return Va.append(n),Ln(),n}var dn=(a,e)=>{if(Va!==void 0)Ca(a,e)};function ai(a){let e=null;return{add:(n)=>{if(e===null)e=Ca(a,"");e.append(n),Ln()},text:()=>e?.textContent??""}}function Vo(a,e,n){let i=e.path??"",o=(c,f)=>S("pre",{class:c},f),y=(c,...f)=>S("details",{},S("summary",{},c),...f);if(a==="read_file")Ca("tc","read "+i);else if(a==="write_file")Ca("tc","write "+i).append(de.includes(i)&&i!=="LAWS.bend"?y(n,o("",e.content)):o("err",n));else if(a==="edit_file")Ca("tc","edit "+i).append(n.startsWith("edited")?y(n,o("","- "+e.old.split(`
`).join(`
- `)+`
+ `+e.new.split(`
`).join(`
+ `))):o("err",n));else if(a==="submit"){let c=Ca("tc","submit");if(qa===null)c.append(S("div",{class:"ok"},"✓ Accepted. The new game is live: play it above."));else{let f=S("a",{class:"bad"},"Your program broke the "+(qa.game?"game":"law")+". Try again."),d=o("err",qa.text);d.hidden=!0,f.onclick=()=>{d.hidden=!d.hidden,Ln()},c.append(`
`,f,d)}}Ln()}function hn(){if(fn.replaceChildren(),vn){let n=S("a",{},"stop");n.onclick=()=>In?.abort(),fn.append(S("span",{},"working…"),n),Q.disabled=!0;return}Q.disabled=!1;let a=S("a",{title:"change the model"},fe());a.onclick=()=>{let n=prompt("OpenAI model id",fe());if(n)localStorage.setItem("bend.lab.model",n.trim()),hn()};let e=S("a",{title:"change the key"},Pn()?"key ····"+Pn().slice(-4):"no key");e.onclick=()=>{Ra.replaceChildren(S("span",{},"key"),Ta),Ta.focus()},fn.append(S("span",{},a," · thinking high · fast · ",e),S("span",{},"byok · your key stays in this browser"))}function uo(){let a=Q.value.trim();if(a===""||vn)return;if(Pn()===""){Ra.replaceChildren(S("span",{},"key"),Ta),Ta.focus(),dn("dim","Paste your OpenAI API key first. It is kept in this browser only and sent to api.openai.com alone.");return}Q.value="",Q.style.height="",Ao(a)}function Oo(){document.head.append(S("style",{},Co)),On=S("canvas");let a=S("a",{title:"close"},"×");a.onclick=()=>di(!1),Q=S("textarea",{placeholder:"make the walls disappear",rows:"1"}),Q.oninput=()=>{Q.style.height="",Q.style.height=Math.min(Q.scrollHeight,150)+"px"},Q.onkeydown=(o)=>{if(o.key==="Enter"&&!o.shiftKey)o.preventDefault(),uo();if(o.key==="Escape")Q.blur()},On.onclick=()=>Q.blur(),Ta=S("input",{type:"password",placeholder:"OpenAI API key, then Enter",autocomplete:"off"}),Ta.onkeydown=(o)=>{if(o.key==="Enter")localStorage.setItem("bend.lab.key",Ta.value.trim()),Ta.value="",Ra.replaceChildren(S("span",{},">"),Q),hn(),Q.focus();else if(o.key==="Escape")Ra.replaceChildren(S("span",{},">"),Q),Q.focus()},Ra=S("div",{class:"box"},S("span",{},">"),Q),fn=S("div",{class:"meta"}),Va=S("div",{class:"chat"}),pe=S("div",{id:"lab"},S("div",{class:"top"},S("div",{class:"hd"},S("span",{},S("b",{},"Winning Is Impossible")," · live demo"),a),On,S("p",{class:"how"},S("b",{},"Grab the flag to win."),`
`,S("span",{class:"dim"},"WASD to move"),`

`,"Can't win? Prompt the AI below to ",S("b",{},"edit the game"),`.
You can ask `,S("i",{},"anything"),". ",S("b",{},"Bend")," guards it. Good luck!")),Va,S("div",{class:"in"},Ra,fn));let e=S("div",{id:"page"}),n=S("div",{id:"pagein"});while(document.body.firstChild)n.append(document.body.firstChild);e.append(n),document.body.append(e,pe),document.addEventListener("keydown",(o)=>{if(!ce)return;let y=o.target;if(y===Q||y===Ta||o.metaKey||o.ctrlKey||o.altKey)return;let c=Mo[o.key]??o.key;if(c.length!==1)return;if(Go(c.toLowerCase().charCodeAt(0)))o.preventDefault()});let i=(o)=>{if(ce)ro(On,o);requestAnimationFrame(i)};requestAnimationFrame(i)}function di(a){let e=document.getElementById("page"),n=a?window.scrollY:e.scrollTop;if(ce=a,document.documentElement.classList.toggle("lab",a),a)e.scrollTop=n;else window.scrollTo(0,n);if(a)hn()}async function ni(){let a=document.getElementById("try");if(a===null)return;Oo();let e=null,n=()=>{return e??=Kn("main.bend").then((i)=>{he(new zn(i.book)),di(!0)}),e.catch((i)=>dn("bad","the game did not compile: "+sn(i))),e};if(a.addEventListener("click",(i)=>{i.preventDefault(),n()}),location.hash==="#lab")n()}if(typeof document<"u")if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ni);else ni();})();
