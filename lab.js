(()=>{var{defineProperty:Pe,getOwnPropertyNames:hi,getOwnPropertyDescriptor:li}=Object,wi=Object.prototype.hasOwnProperty;function Ti(a){return this[a]}var Ui=(a)=>{var n=(wn??=new WeakMap).get(a),e;if(n)return n;if(n=Pe({},"__esModule",{value:!0}),a&&typeof a==="object"||typeof a==="function"){for(var i of hi(a))if(!wi.call(n,i))Pe(n,i,{get:Ti.bind(a,i),enumerable:!(e=li(a,i))||e.enumerable})}return wn.set(a,n),n},wn;var Ni=(a)=>a;function ri(a,n){this[a]=Ni.bind(null,n)}var gi=(a,n)=>{for(var e in n)Pe(a,e,{get:n[e],enumerable:!0,configurable:!0,set:ri.bind(n,e)})};var Oo={};gi(Oo,{verify:()=>yi,tool:()=>ci,respond:()=>fi,level:()=>sn,check:()=>Oe,api_check:()=>ii,Game:()=>Ke});var p=new Map;function ze(a){return p.has(a)}function De(a){return a}function Tn(a){let n=p.get(a);if(n===void 0)throw Error("ENOENT: no such file: "+a);return n}function Un(){}function Nn(a,n){p.set(a,n)}function rn(){return"/"}function qe(a){let n=a.startsWith("/"),e=[];for(let i of a.split("/")){if(i===""||i===".")continue;if(i===".."&&e.length>0&&e[e.length-1]!=="..")e.pop();else if(i!==".."||!n)e.push(i)}return(n?"/":"")+(e.join("/")||(n?"":"."))}function je(...a){return qe(a.join("/"))}function gn(...a){return qe("/"+a.join("/"))}function Ze(a){let n=a.lastIndexOf("/");return n<0?".":n===0?"/":a.slice(0,n)}var le={normalize:qe,join:je,dirname:Ze};function Mn(a){return decodeURIComponent(String(a).replace(/^file:\/\//,""))}function D(a,n,e,i){return{$:"Var",k:a,i:n,s:e,v:i}}function I(a,n,e){return{$:"Ref",k:a,s:n,b:e}}function Ha(a,n,e,i){return{$:"Sub",i:a,v:n,f:e,s:i}}function ee(a,n,e,i,o,y){return{$:"Let",k:a,i:n,q:y??a.map(()=>x()),v:e,f:i,s:o}}function P(a,n){return{$:"Typ",g:a,s:n}}function Ua(a){return{$:"Qnt",s:a}}function R(a,n){return{$:"Qua",q:a,s:n}}function Sa(a,n,e){return{$:"Min",a,b:n,s:e}}function m(a,n,e,i,o,y){return{$:"All",q:a,k:n,i:e,A:i,B:o,s:y}}function k(a,n,e,i){return{$:"Lam",k:a,i:n,f:e,s:i}}function O(a,n,e){return{$:"App",f:a,x:n,s:e}}function sa(a,n,e,i=[]){return{$:"ADT",k:a,x:n,r:i,s:e}}function q(a,n,e){return{$:"Ctr",k:a,x:n,s:e}}function Ga(a,n,e,i,o){return{$:"Mat",k:a,h:n,m:e,s:i,ks:o}}function Pa(a){return{$:"Efq",s:a}}function Na(a,n,e,i){return{$:"Eql",a,b:n,T:e,s:i}}function va(a){return{$:"Rfl",s:a}}function ne(a,n,e,i){return{$:"Rwt",e:a,p:n,f:e,s:i}}function ie(a,n){return{$:"Hol",k:a,s:n}}function Wa(a,n,e){return{$:"Ann",x:a,T:n,s:e}}function xn(){return{$:"Emp"}}function Xa(a,n,e){return{$:"Bin",v:a,l:n,r:e}}function J(){return{$:"None"}}function x(){return{$:"Lone"}}function ra(){return{$:"Many"}}function fa(a,n,e){return{tm:Wa(a,D("_",-1,void 0,n)),ty:n,us:e}}function Ta(a,n,e){return{tm:Wa(a,D("_",-1,void 0,n)),us:e}}function r(a,n,e,i,o,y){return{$:"Err",bok:a,ctx:n,exp:e,obs:i,spn:o,def:y}}function La(a){let n=a.charCodeAt(0);return n>=65&&n<=90||n>=97&&n<=122||n===95}function Ea(a){let n=a.charCodeAt(0);return n>=65&&n<=90||n>=97&&n<=122||n>=48&&n<=57||n===95||n===46}function vn(a,n){let e=a,i=n;while(!0)switch(e.$){case"Emp":return null;case"Bin":{if(i===0)return e.v;let o=i%2===1;e=o?e.l:e.r,i=o?(i-1)/2:(i-2)/2;break}}}function Oa(a,n,e){switch(a.$){case"Emp":return Oa(Xa(null,a,a),n,e);case"Bin":{if(n===0)return Xa(e,a.l,a.r);if(n%2===1){let o=Oa(a.l,(n-1)/2,e);return Xa(a.v,o,a.r)}let i=Oa(a.r,(n-2)/2,e);return Xa(a.v,a.l,i)}}}function re(a,n,e){switch(a.$){case"Emp":return n;case"Bin":switch(n.$){case"Emp":return a;case"Bin":{let i=a.v===null?n.v:n.v===null?a.v:e(a.v,n.v),o=re(a.l,n.l,e),y=re(a.r,n.r,e);return Xa(i,o,y)}}}}function ba(a,n=0,e=1){switch(a.$){case"Emp":return[];case"Bin":{let i=a.v===null?[]:[[n,a.v]],o=ba(a.l,n+e*1,e*2),y=ba(a.r,n+e*2,e*2);return i.concat(o,y)}}}function Mi(a,n){for(let e=a;e!==null;e=e.n)if(e.k===n)return e.v;return null}function Ya(a,n,e){return{k:n,v:e,n:a}}function Ln(a,n){switch(a.$){case"None":return n;default:switch(n.$){case"None":return a;default:return ra()}}}function Kn(a,n){switch(a.$){case"None":return n;case"Lone":switch(n.$){case"Many":return ra();default:return x()}case"Many":return ra()}}function Fi(a,n){switch(a.$){case"None":return J();case"Lone":return n;case"Many":return Ln(n,n)}}function ge(a,n){if(a.$==="None")return J();else return n}function Fn(a,n,e,i,o,y,c){if(Kn(o,i).$!==i.$){let f=Fe(o)+e;if(o.$==="Many")f=e+" (consumed more than once)";throw r(a,n,Fe(i)+e,f,y,c)}}function b(){return xn()}function Sn(a,n){return vn(a,n)??J()}function ga(a,n){return re(a,n,Ln)}function Si(a,n){return re(a,n,Kn)}function Gn(a,n){return Oa(a,n,J())}function Qe(a,n,e,i=[]){if(e===0)return aa(a,q(n,i));else return k("_",0,(o)=>{return Qe(a,n,e-1,[...i,o])})}function Pn(a,n){return a.u===!0&&n.$==="Many"?x():n}function Gi(a,n){let e=Ge(a.t)[1],i="EQ";for(let o=0;o<e.length&&o<n.length&&i==="EQ";o++)i=Re(a.qs[o],n[o],e[o]);return i}function aa(a,n,e){let i=_(a);if(i.$==="Lam")return i.f(n);return O(i,n,e)}function Ge(a){let n=[],e=a;while(!0)switch(e.$){case"App":{n.push(e.x),e=e.f;break}default:return n.reverse(),[e,n]}}function Q(a,n="_"){if(a.$==="Var"&&a.i<0)return a;return D(n,-1,a.s,a)}function Wi(a){switch(a.$){case"Ctr":return q(a.k,a.x.map((n)=>Q(n)),a.s);case"ADT":return sa(a.k,a.x.map((n)=>Q(n)),a.s,a.r);case"All":return m(a.q,a.k,a.i,Q(a.A),a.B,a.s);case"Mat":return Ga(a.k,Q(a.h),Q(a.m),a.s,a.ks);case"Eql":return Na(Q(a.a),Q(a.b),Q(a.T),a.s);case"Min":return Sa(Q(a.a),Q(a.b),a.s);case"Typ":return P(Q(a.g),a.s);default:return a}}function ma(a){while(a.$==="Var"&&a.v!==void 0)a=a.v;return a}function _(a){let n=ma(a);while(n.$==="Ann")n=ma(n.x);return n}function W(a,n=null){switch(a.$){case"Var":{if(a.i<0)return a;let e=Mi(n,a.i);if(e===null)return I(a.k,a.s);else if(typeof e==="function")return e(a.s);else return e.s!==void 0||a.s===void 0||e.$==="Var"&&e.i<0?e:{...e,s:a.s}}case"Ref":return I(a.k[0]==="."&&a.k[1]!=="."?"Nat"+a.k:a.k,a.s,a.b);case"Sub":{let e=a.v,i=e.$==="PVar"||e.$==="PCtr"?(o)=>W(Be(e,o),n):W(e,n);return W(a.f,Ya(n,a.i,i))}case"Let":{let e=a,i=e.v.map((o)=>W(o,n));return ee(e.k,e.i,i,(o)=>{let y=n;for(let c=0;c<o.length;c++)y=Ya(y,e.i[c],o[c]);return W(e.f,y)},e.s,e.q)}case"Typ":return P(W(a.g,n),a.s);case"Qnt":case"Qua":return a;case"Min":return Sa(W(a.a,n),W(a.b,n),a.s);case"All":{let e=a,i=W(e.A,n);return m(e.q,e.k,e.i,i,(o)=>{return W(e.B,Ya(n,e.i,o))},e.s)}case"Lam":{let e=a;return k(e.k,e.i,(i)=>{return W(e.f,Ya(n,e.i,i))},e.s)}case"App":return O(W(a.f,n),W(a.x,n),a.s);case"ADT":return sa(a.k,a.x.map((e)=>W(e,n)),a.s,a.r);case"Ctr":return q(a.k,a.x.map((e)=>W(e,n)),a.s);case"Mat":return Ga(a.k,W(a.h,n),W(a.m,n),a.s,a.ks);case"Efq":return Pa(a.s);case"Eql":return Na(W(a.a,n),W(a.b,n),W(a.T,n),a.s);case"Rfl":return va(a.s);case"Rwt":return ne(W(a.e,n),W(a.p,n),W(a.f,n),a.s);case"Hol":return ie(a.k,a.s);case"Ann":return Wa(W(a.x,n),W(a.T,n),a.s)}}function V(a,n=0){let e=ma(a);switch(e.$){case"Var":return D(e.k,e.i,e.s);case"Ref":return I(e.k,e.s,e.b);case"Sub":return Ha(e.i,e.v.$==="PVar"||e.v.$==="PCtr"?e.v:V(e.v,n),V(e.f,n),e.s);case"Let":{let i=e.k.map((y,c)=>D(y,n+c)),o=e.v.map((y)=>V(y,n));return ee(e.k,i.map((y,c)=>n+c),o,V(e.f(i),n+e.k.length),e.s,e.q)}case"Typ":return P(V(e.g,n),e.s);case"Qnt":case"Qua":return e;case"Min":return Sa(V(e.a,n),V(e.b,n),e.s);case"All":{let i=D(e.k,n);return m(e.q,e.k,n,V(e.A,n),V(e.B(i),n+1),e.s)}case"Lam":{let i=D(e.k,n);return k(e.k,n,V(e.f(i),n+1),e.s)}case"App":return O(V(e.f,n),V(e.x,n),e.s);case"ADT":return sa(e.k,e.x.map((i)=>V(i,n)),e.s,e.r);case"Ctr":return q(e.k,e.x.map((i)=>V(i,n)),e.s);case"Mat":return Ga(e.k,V(e.h,n),V(e.m,n),e.s,e.ks);case"Efq":return Pa(e.s);case"Eql":return Na(V(e.a,n),V(e.b,n),V(e.T,n),e.s);case"Rfl":return va(e.s);case"Rwt":return ne(V(e.e,n),V(e.p,n),V(e.f,n),e.s);case"Hol":return ie(e.k,e.s);case"Ann":return Wa(V(e.x,n),V(e.T,n),e.s)}}function Re(a,n,e){switch(a.$){case"None":return"EQ";default:break}let i=_(n),o=_(e);switch(o.$){case"Var":if(i.$==="Var"&&i.i===o.i)return"EQ";else return"GT";case"Ctr":{if(i.$==="Ctr"&&i.k===o.k&&i.x.length===o.x.length){let y="EQ";for(let c=0;c<i.x.length&&y!=="GT";c++){let f=Re(x(),i.x[c],o.x[c]);y=f==="EQ"?y:f}if(y!=="GT")return y}for(let y of o.x)if(Re(x(),i,y)!=="GT")return"LT";return"GT"}default:return"GT"}}function L(){return xn()}function ka(a,n,e,i,o){return Oa(a,n,{q:e,k:i,T:o})}function Bi(a,n){for(let[,e]of ba(n)){if(e.q.$==="None")continue;let i=$(a,e.T);if(i.$==="ADT"&&Me(a,i,n).c.length===0)return!0}return!1}function He(a){let n=ba(a);n.sort((i,o)=>i[0]-o[0]);let e=[];for(let[i,o]of n){while(e.length<i)e.push("_");e.push(o.k)}return e}function Wn(a,n){for(let e of a)if(e.k===n)return e;return null}function ea(){return{tlds:Object.create(null),ctrs:Object.create(null),order:[],hols:0,open:0,tmps:Object.create(null)}}function Fa(a,n){return a.ctrs[n]??null}function Bn(a,n){let e=_(Fa(a,n).T);for(let i=0;e.$==="All";i++)e=_(e.B(D(e.k,i)));return e.$==="ADT"?e.k:n}function Me(a,n,e,i){let o=a.tlds[n.k];if(o===void 0||o.$!=="ADT")throw r(a,e,"a declared datatype (unknown: "+n.k+")",void 0,n.s,i);if(n.r.length===0)return o;let y=new Set(n.r);return{$:"ADT",n:o.n,g:o.g,T:o.T,c:o.c.filter((c)=>!y.has(c.k))}}var An=De(Mn(new URL("./base.bend","file:///bend2/bend.ts"))),Te=gn(je(rn(),".bend","store")),Cn="https://hub.bend-lang.org";async function Vn(a,n,e,i){let o=await fetch(Cn+"/"+n),y=o.ok?await o.text():"";if(!o.ok||!(await Ai(y)).startsWith(e))throw r(a,L(),"a file at "+Cn+"/"+n+" hashing to "+e,void 0,i);return y}async function Ai(a){return Buffer.from(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(a))).toString("hex")}async function _a(a,n,e,i,o){if(n.startsWith(Te+"/")&&!ze(n)){let w=n.slice(Te.length+1).split("/")[0],T=Te+"/"+w+"/",U=await Vn(a,w+"/manifest",w.slice(2),o);for(let[N,F]of U.trim().split(`
`).map((C)=>C.split(" ")))Un(Ze(T+F),{recursive:!0}),Nn(T+F,await Vn(a,w+"/"+F,N,o))}if(!ze(n))throw r(a,L(),"no such file: "+n,void 0,o);let y=De(n),c=i.get(y);if(c===null)throw r(a,L(),"an import cycle through "+n,void 0,o);if(c!==void 0){if(c!==e)throw r(a,L(),"one namespace per file ("+n+" is both '"+c+"' and '"+e+"')",void 0,o);return a.order.length}i.set(y,null);let f=n.slice(0,n.lastIndexOf("/")+1),d=Object.create(null),s=Tn(n,"utf8"),l=s.split(`
`);for(let w=0;w<l.length;w++){let T=l[w].trim(),U=T.match(/^import(\s.*|)$/);if(U!==null){let N=U[1].match(/^\s+(\S+)(?:\s+as\s+([A-Za-z_][A-Za-z0-9_]*))?\s*(?:#.*)?$/),F=s.split(`
`,w).join(`
`).length+(w&&1)+l[w].indexOf(N===null?T:N[1]),C={src:s,beg:F,end:F};if(N===null||N[2]===void 0&&N[1]!=="Base")throw r(a,L(),"an import ('import Base', or 'import <path> as <Name>')","'"+T+"'",C);if(N[2]===void 0)await _a(a,An,"",i,C);else{let j=le.normalize(N[1]);if(!j.endsWith(".bend"))throw r(a,L(),"an import of a .bend file","'"+N[1]+"'",C);let H=f+j,E=le.join(le.dirname(e),j);if(j.startsWith("/"))H=j,E=j;if(/^0x[0-9a-f]+\//.test(j))H=Te+"/"+j,E=j;d[N[2]]=E.replace(/\.bend$/,""),await _a(a,H,d[N[2]],i,C)}l[w]="";continue}if(T!==""&&!T.startsWith("#"))break}let h=a.order.length;if(pe(a,f,l.join(`
`),e,d),y===An)for(let w of a.order.slice(h)){let T=a.tlds[w];if(T.$==="Def")T.b=!0}return i.set(y,e),h}function Je(a,n){let e=n;for(let i=a.length-1;i>=0;i--){let[o,y,c,f,d]=a[i];e=m(o,y,c,f,e,d)}return e}function $e(a,n){let e=$(a,n);return e.$==="All"?e:null}function Ka(a,n,e,i,o){let y=$e(a,n);if(y===null)throw r(a,e,"unreachable (a telescope binds its parameters and fields)",void 0,o,i);return y}function un(a,n,e,i,o,y){let c=n;for(let f of e)c=Ka(a,c,i,o,y).B(f);return c}function Ci(a,n){let e=[],i=n;for(let o=$e(a,i);o!==null;o=$e(a,i))e.push([o.q,o.k,o.A]),i=o.B(D(o.k,e.length-1));return{doms:e,ret:$(a,i)}}function Vi(a,n,e){let i=n;for(let o=0;o<a;o++)i=q("Succ",[i],e);return i}function zn(a,n){let e=q("WNil",[],n);for(let i=31;i>=0;i--){let o=a>>>i&1;e=q("WCon",[q(o===1?"True":"False",[],n),e],n)}return e}function Ee(a,n){return q("U32",[zn(a,n)],n)}function ui(a,n="U32"){let e=_(a);if(e.$!=="Ctr"||e.k!==n||e.x.length!==1)return null;let i=0,o=0,y=_(e.x[0]);while(y.$==="Ctr"&&y.k==="WCon"&&y.x.length===2){let c=_(y.x[0]);if(c.$!=="Ctr"||c.x.length!==0||c.k!=="True"&&c.k!=="False")return null;if(c.k==="True")i+=2**o;o+=1,y=_(y.x[1])}if(o!==32||y.$!=="Ctr"||y.k!=="WNil"||y.x.length!==0)return null;return i}var tn=new DataView(new ArrayBuffer(4));function ti(a){return tn.setFloat32(0,a),tn.getUint32(0)}function Oi(a,n){return q("F32",[zn(ti(a),n)],n)}function Fe(a){switch(a.$){case"None":return"-";case"Lone":return"";case"Many":return"+"}}var Dn={n:10,t:9,r:13,"0":0,"\\":92,"'":39,'"':34};function Ii(a,n){for(let[e,i]of Object.entries(Dn))if(i===a&&(e!=="'"&&e!=='"'||e===n))return"\\"+e;if(a<32||a===127||a>=55296&&a<=57343||a>1114111)return null;return String.fromCodePoint(a)}function za(a,n=-1,e=[]){function i(d,s){if(d.$!=="App")return null;let{f:l,x:h}=d;if(l.$!=="App"||h.$!=="Lam")return null;let w=l.f;if(w.$!=="Ref"||w.k!=="Exists")return null;let T=f(l.x,2);e.push(h.k);let U=f(h.f,1);e.pop();let N="&"+h.k+":"+T+" -> "+U;return s>1?"("+N+")":N}function o(d,s){let l=0,h=d;while(h.$==="Ctr"&&h.k==="Succ"&&h.x.length===1)l+=1,h=h.x[0];if(h.$==="Ctr"&&h.k==="Zero"&&h.x.length===0)return String(l)+"n";if(l===0)return null;let w=String(l)+"n+"+f(h,1);return s>1?"("+w+")":w}function y(d,s){if(d.$!=="Ctr"||d.k!=="Chr"||d.x.length!==1)return null;let l=ui(d.x[0]);if(l===null||l>1114111)return null;return Ii(l,s)}function c(d){let s="",l=d;while(l.$==="Ctr"&&l.k==="SCon"&&l.x.length===2){let h=y(l.x[0],'"');if(h===null)return null;s+=h,l=l.x[1]}if(s===""||l.$!=="Ctr"||l.k!=="SNil"||l.x.length!==0)return null;return'"'+s+'"'}function f(d,s){switch(d.$){case"Var":return e.lastIndexOf(d.k)===d.i?d.k:d.k+"^"+String(d.i);case"Ref":return(e.includes(d.k)?d.k+"^":d.k)+(d.b===!0?"!":"");case"Sub":return f(d.f,s);case"Let":{let l=d.v.map((U)=>f(U,1));for(let U of d.k)e.push(U);let h=f(d.f,-1);e.length-=d.k.length;let T=d.k.map((U,N)=>Fe(d.q[N])+U).join(" ")+" = "+l.join(" ")+"; "+h;return s>=0?"("+T+")":T}case"Typ":{let l=d.g;if(l.$==="Qua"&&l.q.$==="Lone")return"Type";if(l.$==="Qua"&&l.q.$==="Many")return"Data";return"Kind("+f(d.g,0)+")"}case"Qnt":return"Quant";case"Qua":return{None:"&0",Lone:"&1",Many:"&2"}[d.q.$];case"Min":{let l=f(d.a,2)+" <&> "+f(d.b,2);return s>1?"("+l+")":l}case"All":{let l=f(d.A,2);e.push(d.k);let h=f(d.B,1);e.pop();let w="@"+Fe(d.q)+d.k+":"+l+" -> "+h;return s>1?"("+w+")":w}case"Lam":{e.push(d.k);let l=f(d.f,-1);e.pop();let h=d.k+" => "+l;return s>0?"("+h+")":h}case"App":{let l=i(d,s);if(l!==null)return l;let[h,w]=Ge(d),T=f(h,2),U=w.map((N)=>f(N,0));return T+"("+U.join(", ")+")"}case"ADT":{let l=d.x.map((T)=>f(T,0)),h=d.r.map((T)=>" - "+T+"{}").join(""),w=d.k+(l.length===0&&h===""?"":"<"+l.join(", ")+">")+h;return h!==""&&s>1?"("+w+")":w}case"Ctr":{let l=y(d,"'"),h=o(d,s)??(l!==null?"'"+l+"'":null)??c(d);if(h!==null)return h;let w=d.x.map((T)=>f(T,0));return d.k+"{"+w.join(", ")+"}"}case"Mat":{let l=[],h=d;while(h.$==="Mat")l.push(h.k+": "+f(h.h,1)),h=h.m;if(h.$!=="Efq")l.push(f(h,1));return"\\{"+l.join("; ")+"}"}case"Efq":return"\\{}";case"Eql":return"{"+f(d.a,1)+" == "+f(d.b,1)+" : "+f(d.T,1)+"}";case"Rfl":return"{==}";case"Hol":return"?"+d.k;case"Rwt":{let l=f(d.e,1),h=_(d.p),w=h.$==="Lam"?_(h.f):h,T="",U;if(h.$==="Lam"&&w.$==="Lam")e.push(h.k,w.k),U=f(w.f,1),e.length-=2,T=w.k===""?"":w.k+"@";else U=f(d.p,1);let N=f(d.f,-1),F="%"+T+l+" : "+U+"; "+N;return s>0?"("+F+")":F}case"Ann":return"{"+f(d.x,1)+" : "+f(d.T,1)+"}"}}return f(a,n)}function Ne(a,n,e=[]){if(typeof n==="string")return n;else{let i=V(z(a,n),e.length);return za(i,-1,e)}}function xi(a,n){let e=ba(n);e.sort((c,f)=>c[0]-f[0]);let i=He(n),o=0;for(let[,c]of e)o=Math.max(o,c.k.length);let y=e.length===0?"":`
Context:`;for(let[c,f]of e){let d=za(V(z(a,f.T),c),-1,i.slice(0,c));y+=`
- `+f.k.padEnd(o)+" : "+d}return y}function vi(a){let n=a.src.split(`
`),e=a.src.slice(0,a.beg).split(`
`).length,i=Math.max(1,e-1),o=Math.min(n.length,e+1),y=[];for(let c=i;c<=o;c++){let f=c===e?">| ":" | ";y.push(String(c).padStart(String(o).length)+f+(n[c-1]??""))}return y.join(`
`)}function Ue(a,n,e){return"non-inferrable term '"+Ne(a,e,He(n))+"'"}function qn(a){let n=He(a.ctx),e=a.obs===void 0?`
- message  : `+Ne(a.bok,a.exp,n):`
- expected : `+Ne(a.bok,a.exp,n)+`
- observed : `+Ne(a.bok,a.obs,n),i=a.def===void 0?"":" "+a.def,o=a.spn===void 0?"":`
`+vi(a.spn),y=i===""&&o===""?"":`
Location:`+i+o;return"Error:"+e+xi(a.bok,a.ctx)+y}var be=new Set(["def","type","law","match","case","do","return","for","exs","where","is","import","Type","Data","Kind","Quant"]),Li={"0":J(),"1":x(),"2":ra()};function Ki(a,n,e,i="",o=Object.create(null)){return{book:a,dir:n,str:e,pos:0,sc:{stk:[],frs:0},ns:i,al:o,os:[],inst:null}}function Qa(a,n){return n-a.lastIndexOf(`
`,n-1)}function B(a,n){return{src:a.str,beg:n,end:a.pos}}function u(a,n){let e=a.pos<a.str.length?"'"+a.str[a.pos]+"'":"end of input";throw r(a.book,L(),n,e,{src:a.str,beg:a.pos,end:a.pos})}function Y(a){return a.pos<a.str.length?a.str[a.pos]:""}function t(a){let n=Y(a);return a.pos+=1,n}function Z(a,n){if(a.str.charCodeAt(a.pos)!==n.charCodeAt(0))return!1;return n.length===1||a.str.startsWith(n,a.pos)}function M(a,n){if(!Z(a,n))return!1;return a.pos+=n.length,!0}function g(a){let n=a.str;while(a.pos<n.length){let e=n.charCodeAt(a.pos);if(e===32||e===10||e===13||e===9){a.pos+=1;continue}if(e===35){while(a.pos<n.length&&n.charCodeAt(a.pos)!==10)a.pos+=1;continue}return}}function A(a,n){if(g(a),!M(a,n))u(a,"'"+n+"'")}function na(a,n){if(g(a),!Z(a,n))return!1;return!Ea(a.str[a.pos+n.length]??"")}function ia(a,n){if(!na(a,n))return!1;return M(a,n),!0}function jn(a){if(g(a),!La(Y(a)))u(a,"a name");let n=a.pos;while(a.pos<a.str.length&&Ea(a.str[a.pos]))a.pos+=1;let e=a.str.slice(n,a.pos);if(e.endsWith("."))u(a,"a name (a name cannot end in '.')");return e}function da(a){let n=jn(a);if(be.has(n))u(a,"a name (got the keyword '"+n+"')");return n}function Zn(a){if(M(a,"\\")){let e=Dn[t(a)];if(e===void 0)u(a,"an escape (\\n \\t \\r \\0 \\\\ \\' \\\")");return e}let n=a.str.codePointAt(a.pos);if(n===void 0)u(a,"a character");if(t(a),n>65535)t(a);return n}function oa(a,n,e){let i=a.sc.frs++;if(n!=="_")a.sc.stk.push([n,i,e]);return i}function ya(a,n){a.sc.stk.length=n}function Rn(a,n){let e=a.sc.stk;for(let i=e.length-1;i>=0;i--)if(e[i][0]===n)return e[i];return null}function Pi(a,n,e){let i=Rn(a,n);if(i!==null)return i[2]===void 0?D(n,i[1],e):i[2].$==="Var"?I(i[2].k,e):i[2];let o=la(a,n);if(o!==n||n.includes(".")||o in a.book.tmps)return I(o,e);return D(n,a.sc.frs++,e)}function pa(a,n){return a.ns===""?n:a.ns+"."+n}function la(a,n){let e=n.indexOf("."),i=pa(a,n);if(e!==-1&&n.slice(0,e)in a.al)i=a.al[n.slice(0,e)]+n.slice(e);if(i in a.book.tlds||i in a.book.ctrs||i in a.book.tmps)return i;return n}function We(a){if(g(a),M(a,"-"))return J();if(M(a,"+"))return ra();return x()}function me(a,n){let e=a.book;switch(n.$){case"Var":{if(Fa(e,la(a,n.k))!==null)throw r(e,L(),"a braced constructor pattern ("+n.k+" is a constructor: write "+n.k+"{}, or rename the binder)",void 0,n.s);let i=oa(a,n.k);return{$:"PVar",k:n.k,i,s:n.s}}case"Ctr":{let i=Fa(e,n.k);if(i===null)throw r(e,L(),"a declared constructor (unknown: "+n.k+")",void 0,n.s);if(i.n!==n.x.length)throw r(e,L(),"a "+n.k+" pattern with "+String(i.n)+(i.n===1?" field":" fields"),void 0,n.s);let o=[];for(let y of n.x)o.push(me(a,y));return{$:"PCtr",k:n.k,x:o,s:n.s}}default:throw r(e,L(),"a pattern (a binder or a constructor)",za(V(W(n),0)),n.s)}}function G(a,n=0){g(a);let e=a.pos,i=zi(a,e);return i.s??=B(a,e),Zi(a,i,n)}function zi(a,n){let e=Y(a);if(La(e))return Di(a,jn(a),n);if(/[0-9]/.test(e))return Xi(a);switch(e){case"@":return On(a,!1);case"&":{let i=Li[a.str[a.pos+1]??""];if(i!==void 0)return t(a),t(a),R(i,B(a,n));return On(a,!0)}case"+":{t(a);let i=G(a,5),o=B(a,n),y="";if(i.$==="ADT")y=i.k;else if(i.$==="Var"||i.$==="Ref")y=la(a,i.k);let c=a.book.tlds[y];if(c===void 0||c.$!=="ADT"||c.g===0||c.g<c.n&&i.$!=="ADT")u(a,"a quantified datatype after + (+D<..> sets D's leading quantities to &2)");let f=i.$==="ADT"?i.x:Array.from({length:c.n},()=>R(x(),o));return sa(y,f.map((d,s)=>s<c.g?R(ra(),o):d),o)}case"\\":return t(a),A(a,"{"),Ri(a,n);case"%":return Ji(a,n);case"{":return $i(a);case"(":return t(a),$n(a,n,a.os.length);case"[":{t(a);let i=ae(a,"]"),o=B(a,n),y=q("Nil",[],o);for(let c=i.length-1;c>=0;c--)y=q("Con",[i[c],y],o);return y}case"'":return Yi(a);case'"':return Qi(a);case"?":{t(a);let i=da(a);if(i==="TODO")a.book.hols+=1;return ie(i,B(a,n))}default:u(a,"a term")}}function Di(a,n,e){if(n==="Type")return P(R(x()),B(a,e));if(n==="Data")return P(R(ra()),B(a,e));if(n==="Quant")return Ua(B(a,e));if(n==="Kind"){A(a,"(");let i=G(a);return A(a,")"),P(i,B(a,e))}if(n==="do")return Hi(a);if(n==="match")u(a,"a term (a match heads a def body, not a term)");if(n==="case")u(a,"a match heading this case (this case is orphaned)");if(n==="return")u(a,"a do-block heading this return");if(be.has(n))u(a,"a term (the keyword '"+n+"' cannot head one)");if(Z(a,"{")){t(a);let i=ae(a,"}");return q(la(a,n),i,B(a,e))}return Pi(a,n,B(a,e))}var qi=[[".|.",6,!1,".or"],[".^.",7,!1,".xor"],[".&.",8,!1,".and"],["||",2,!1,"Bool.or"],["&&",3,!1,"Bool.and"],["<=",4,!1,".is_le"],[">=",4,!1,".is_ge"],["<>",5,!0,""],["++",5,!0,"String.append"],["<<",9,!1,".shln"],[">>",9,!1,".shrn"],["&",1,!0,""],["|",1,!0,""],[">",4,!1,".is_gt"],["+",10,!1,".add"],["-",10,!1,".sub"],["*",11,!1,".mul"],["/",11,!1,".div"],["%",11,!1,".mod"]];function ji(a){for(let n of qi){if(!Z(a,n[0]))continue;let e=a.str[a.pos+n[0].length]??"";if((n[0]==="-"||n[0]==="+")&&(e===">"||La(e)))continue;if(n[0][0]===">"&&!/\s/.test(a.str[a.pos-1]??" "))continue;if(n[0]==="%"&&!/\s/.test(e))continue;return n}return null}function ua(a,n){if(n.s===void 0)return;return B(a,n.s.beg)}function Xe(a){for(let n=a.pos-1;n>=0;n--){let e=a.str[n];if(e===`
`)return!0;if(e!==" "&&e!=="\r"&&e!=="\t")return!1}return!0}function Zi(a,n,e){let i=n;while(!0){if(g(a),Xe(a)&&(Z(a,"(")||Z(a,"[")))return i;if(Z(a,"!(")){if(i.$==="Var"&&Rn(a,i.k)===null)i=I(i.k,i.s);if(i.$!=="Ref")u(a,"a named def before ! (only f!(..) offloads)");t(a),i.b=!0;continue}if(Z(a,"(")){t(a);let f=i.$==="Ref"?a.book.tmps[i.k]:void 0,d=[];for(g(a);f!==void 0&&M(a,"~");g(a))d.push(G(a)),g(a),M(a,",");let s=d.concat(ae(a,")")),l=ua(a,i);if(i.$==="Ref"&&f!==void 0){let h=a.sc.stk.reduce((T,U)=>Ya(T,U[1],I("\x00")),null),w=d.map((T)=>za(V(W(T,h)))).join(`
`);if(!w.includes("\x00")&&w.length<=2048){if(f.is[w]===void 0)f.is[w]=i.k+"~"+Object.keys(f.is).length,Se({...f.p,sc:{stk:[],frs:a.sc.frs},os:[],inst:{k:f.is[w],xs:d}},a.book,f.u);i={...i,k:f.is[w]}}}for(let h of s)i=i.$==="Lam"&&a.sc.stk.some((w)=>w[2]===i)?Ha(i.i,h,i.f,l):O(i,h,l);continue}if(Z(a,"[")){t(a);let f=a.os.length,d=G(a);A(a,"]");let s=ua(a,i);if(Jn(a,a.os.splice(f),I("U32",s)),g(a),!Xe(a)&&M(a,"<-")){let l=G(a,2);i=O(O(O(O(I("Array.set",s),I("U32",s),s),i,s),d,s),l,s)}else i=O(O(O(I("Array.get",s),I("U32",s),s),i,s),d,s);continue}if(Z(a,"<")&&!"-=<>".includes(a.str[a.pos+1]??"")&&!Z(a,"<&>")&&(e<=4||/\S/.test(a.str[a.pos-1]??""))){t(a);let f=G(a,5);g(a);let d=ua(a,i);if(Z(a,">")||Z(a,",")){if(i.$!=="Var"&&i.$!=="Ref")u(a,"a family name before <..> (a comparison here needs parens)");let s=[f];if(!M(a,">"))M(a,","),s.push(...ae(a,">"));let l=la(a,i.k),h=a.book.tlds[l];if(h!==void 0&&h.$==="ADT"&&s.length+h.g===h.n)s.unshift(...Array.from({length:h.g},()=>R(x(),d)));i=sa(l,s,d)}else{let s={$:"Ref",k:".is_lt",s:d};a.os.push(s),i=O(O(s,i,d),f,d)}continue}if(e===0&&M(a,"=>")){if(i.$!=="Var")u(a,"a lambda binder (one name: k => body)");let f=a.sc.stk.length,d=oa(a,i.k),s=ke(a);ya(a,f),i=k(i.k,d,s,i.s);continue}if(e===0&&M(a,"->")){let f=G(a),d=ua(a,i);i=m(x(),"_",oa(a,"_"),i,f,d);continue}if(e<=5&&M(a,"<&>")){let f=G(a,5);i=Sa(i,f,ua(a,i));continue}let o=ji(a);if(o===null||o[1]<e||Z(a,"<-"))return i;M(a,o[0]);let y=G(a,o[2]?o[1]:o[1]+1),c=ua(a,i);if(o[0]==="<>")i=q("Con",[i,y],c);else if(o[0]==="&")i=O(O(I("Pair",c),i,c),y,c);else if(o[0]==="|")i=O(O(I("Or",c),i,c),y,c);else{let f={$:"Ref",k:o[3],s:c};if(o[3][0]===".")a.os.push(f);i=O(O(f,i,c),y,c)}}}function Jn(a,n,e){let i=Ge(e)[0];for(let o of n){if(i.$!=="Var"&&i.$!=="Ref"&&i.$!=="ADT")throw r(a.book,L(),"a type name after : (the operators' namespace)",void 0,i.s);o.k=la(a,i.k+o.k)}}function ae(a,n){let e=[];while(!0){if(g(a),M(a,n))return e;let i=G(a);e.push(i),g(a),M(a,",")}}function On(a,n){let e=a.pos;t(a);let i=n?x():We(a),o=da(a);A(a,":");let y=G(a,1);A(a,"->");let c=a.sc.stk.length,f=oa(a,o),d=G(a);if(ya(a,c),n){let s=B(a,e);return O(O(I("Exists",s),y,s),k(o,f,d,s),s)}return m(i,o,f,y,d)}function $n(a,n,e){g(a);let i=oe(a,Qa(a.str,a.pos)-1);if(g(a),i.$==="Reply"&&M(a,",")){let y=$n(a,n,e);return q("Tuple",[i.x,y],B(a,n))}let o=Ma(i,[],()=>a.sc.frs++);if(M(a,":"))Jn(a,a.os.splice(e),G(a));return A(a,")"),o}function Ri(a,n){let e=[],i=Pa();while(!0){if(g(a),M(a,"}"))break;let c=G(a);if(g(a),(c.$==="Var"||c.$==="Ref")&&M(a,":")){let f=G(a);e.push([la(a,c.k),f,c.s]),g(a),M(a,";");continue}i=c,g(a),M(a,";"),A(a,"}");break}let o=B(a,n);i.s??=o;let y=i;for(let c=e.length-1;c>=0;c--)y=Ga(e[c][0],e[c][1],y,o,e[c][2]);return y}function Ji(a,n){t(a);let e=G(a);g(a);let i="",o=e;if(M(a,"@")){if(e.$!=="Var")u(a,"a name before @ (a rewrite binder is one name: %e@E : P)");i=e.k,o=G(a)}A(a,":");let y=a.sc.stk.length,c=a.sc.frs++;a.sc.stk.push(["_",c]);let f=i===""?a.sc.frs++:oa(a,i),d=G(a);ya(a,y),g(a),M(a,";");let s=ke(a),l=B(a,n);return ne(o,k("_",c,k(i,f,d,e.s),l),s,l)}function $i(a){let n=a.pos;if(t(a),g(a),M(a,"=="))return A(a,"}"),va();let e=G(a);if(g(a),M(a,"==")){let o=G(a);A(a,":");let y=G(a);return A(a,"}"),Na(e,o,y)}if(M(a,"!=")){let o=B(a,a.pos-2),y=G(a);A(a,":");let c=G(a);A(a,"}");let f=B(a,n);return m(x(),"_",oa(a,"_"),Na(e,y,c,f),I("Empty",o),f)}A(a,":");let i=G(a);return A(a,"}"),Wa(e,i)}function Xi(a){let n=a.pos,e="";while(/[0-9]/.test(Y(a)))e+=t(a);if(!M(a,"n")){if(Z(a,".")&&/[0-9]/.test(a.str[a.pos+1]??"")){let f=e+t(a);while(/[0-9]/.test(Y(a)))f+=t(a);if(/[eE]/.test(Y(a))&&/[0-9+-]/.test(a.str[a.pos+1]??"")){f+=t(a)+(/[+-]/.test(Y(a))?t(a):"");while(/[0-9]/.test(Y(a)))f+=t(a)}let d=Math.fround(Number(f));if(!isFinite(d))u(a,"a float literal with a finite f32 value (got "+f+")");return Oi(d,B(a,n))}if(Ea(Y(a)))u(a,"a numeric literal (NUMBER is U32, NUMBER n is Nat)");let c=Number(e);if(c>4294967295)u(a,"a u32 literal up to 4294967295 (got "+e+")");return Ee(c,B(a,n))}let i=Number(e);if(i>Number.MAX_SAFE_INTEGER)u(a,"a nat literal up to "+Number.MAX_SAFE_INTEGER+"n (got "+e+"n)");let o;if(M(a,"+"))o=G(a);else{if(Ea(Y(a)))u(a,"a nat literal (NUMBER n)");o=q("Zero",[],B(a,n))}let y=B(a,n);return Vi(i,o,y)}function Yi(a){let n=a.pos;t(a);let e=Zn(a);if(Y(a)!=="'")u(a,"a closing '");t(a);let i=B(a,n);return q("Chr",[Ee(e,i)],i)}function Qi(a){let n=a.pos;t(a);let e=[];while(Y(a)!=='"'){if(a.pos>=a.str.length)u(a,'a closing "');e.push(Zn(a))}t(a);let i=B(a,n),o=q("SNil",[],i);for(let y=e.length-1;y>=0;y--)o=q("SCon",[q("Chr",[Ee(e[y],i)],i),o],i);return o}function Hi(a){let n=da(a);A(a,"<");let e=ae(a,">");return A(a,":"),Xn(a,n,e.slice(0,-1),e.length===0?null:e[e.length-1])}function Xn(a,n,e,i){function o(F,C,j,H){let E=I(la(a,n+"."+F),H);for(let he of e.concat(C,i===null?[]:[i],j))E=O(E,he,H);return E}g(a);let y=a.pos;if(ia(a,"return")){let F=G(a);return o("pure",[],[F],B(a,y))}let c=G(a);g(a);let f=c.$==="Var"&&M(a,":"),d=f?G(a,1):c;g(a);let s=f&&Z(a,"=")&&!Z(a,"==");if(s)t(a);else if(f)A(a,"<-");else if(!M(a,"<-"))return c;let l=G(a);g(a),M(a,";");let h=B(a,y),w=f&&c.$==="Var"?c.k:"_",T=a.sc.stk.length,U=oa(a,w),N=Xn(a,n,e,i);if(ya(a,T),s)return ee([w],[U],[Wa(l,d,h)],N,h);return o("bind",[d],[l,k(w,U,N,h)],h)}function oe(a,n=0){g(a);let e=a.pos;if(na(a,"match"))return bi(a,n);let i=We(a),o=[];if(i.$!=="Lone"){let s=i.$==="None"||La(Y(a))?da(a):"";if(g(a),s!==""&&Z(a,"=")&&!Z(a,"=="))o=[D(s,0,B(a,e))],A(a,"=");else a.pos=e,i=x()}if(i.$==="Lone"){o=[G(a)],g(a);while(!Xe(a)&&La(Y(a))&&!Ei(a))o.push(G(a)),g(a);if(o.length===1&&!(Z(a,"=")&&!Z(a,"==")))return{$:"Reply",x:o[0],s:B(a,e)};A(a,"=")}let y=[];for(let s of o)y.push(G(a));g(a),M(a,";");let c=a.sc.stk.length,f=o.map((s)=>{if(o.length>1&&s.$!=="Var")throw r(a.book,L(),"a name (a parallel let binds names; destructure in its body)",void 0,s.s);return me(a,s)}),d=oe(a,n);return ya(a,c),{$:"Local",k:f,q:i,v:y,f:d}}function Ei(a){let n="";for(let e=a.pos;e<a.str.length&&Ea(a.str[e]);e++)n+=a.str[e];return be.has(n)}function ke(a){g(a);let n=oe(a,Qa(a.str,a.pos)-1);return Ma(n,[],()=>a.sc.frs++)}function In(a){let n=[];while(!0){if(n.push(G(a)),g(a),M(a,":"))return n;M(a,",")}}function bi(a,n){g(a);let e=a.pos;ia(a,"match");let i=In(a);g(a);let o=Qa(a.str,a.pos),y=[];while(o>n&&na(a,"case")&&Qa(a.str,a.pos)>=o){let c=Qa(a.str,a.pos);ia(a,"case");let f=In(a);if(f.length!==i.length)u(a,String(i.length)+" patterns (one per scrutinee)");let d=a.sc.stk.length,s=[];for(let h of f)s.push(me(a,h));let l=oe(a,c);ya(a,d),y.push({p:s,f:l})}return{$:"Match",e:i,r:y,s:B(a,e)}}function Ye(a,n){let e=[];while(!0){if(g(a),M(a,n))return e;let i=n===")"&&M(a,"~"),o=i?J():We(a),y=a.pos,c=da(a),f=B(a,y);if(g(a),o.$==="Lone"&&!Z(a,":"))e.push([J(),c,oa(a,c),Ua(f),f]);else{A(a,":");let d=G(a);e.push([o,c,oa(a,c,i?a.inst?.xs.shift():void 0),d,f])}g(a),M(a,",")}}function _e(a,n){if(a.book.tlds[n]!==void 0||a.inst===null&&n in a.book.tmps)u(a,"a fresh name (duplicate declaration: "+n+")")}function Se(a,n,e=!1){let i=a.pos;ia(a,"def");let o=da(a),y=la(a,o),c=n.tlds[y];if(c!==void 0&&c.$==="Def"&&c.v===null&&c.b!==!0&&!c.i){if(e)c.u=!0;mi(a,n,y,c);return}let f=a.inst?.k??pa(a,o);_e(a,f);let d=a.sc.stk.length;if(A(a,"("),g(a),a.inst===null&&Z(a,"~")){n.tmps[f]={p:{...a,pos:i},u:e,is:Object.create(null)},a.pos=i,a.inst={k:f,xs:[]},Se(a,ea(),e),a.inst=null;return}let s=Ye(a,")");A(a,"->");let l=G(a),h={$:"Def",n:s.length,T:W(Je(s,l)),v:null};if(e)h.u=!0;n.tlds[f]=h;let w=s.map((T)=>({$:"PVar",k:T[1],i:T[2],s:T[4]}));Yn(a,n,f,h,w,d)}function mi(a,n,e,i){let o=a.sc.stk.length;A(a,"(");let y=[];while(!0){if(g(a),M(a,")"))break;let c=a.pos,f=da(a);y.push({$:"PVar",k:f,i:oa(a,f),s:B(a,c)}),g(a),M(a,",")}i.n=y.length,Yn(a,n,e,i,y,o)}function Yn(a,n,e,i,o,y){if(A(a,":"),na(a,"import")){i.i=[];while(ia(a,"import")){A(a,'"');let f="";while(Y(a)!=='"'&&Y(a)!=="")f+=t(a);if(A(a,'"'),!/\.(c|js)$/.test(f))u(a,"a .c or .js path");i.i.push(a.dir+f)}ya(a,y),n.order.push(e);return}let c=oe(a);ya(a,y),i.v=W(V(W(Ma(c,o,()=>a.sc.frs++)))),n.order.push(e)}function ki(a,n){ia(a,"law");let e=pa(a,da(a));_e(a,e),A(a,":");let i=a.sc.stk.length,o=[];while(na(a,"for")||na(a,"exs")){let f=ia(a,"for");if(!f)ia(a,"exs");let d=f?We(a):x(),s=a.pos,l=da(a),h=B(a,s);A(a,":");let w=G(a);if(na(a,"where")){let T=a.pos;ia(a,"where");let U=B(a,T),N=a.sc.stk.length,F=oa(a,l),C=G(a);ya(a,N),w=O(O(I("Exists",U),w,h),k(l,F,C,h),h)}o.push([f,d,l,oa(a,l),w,h])}let y=ke(a);for(let f=o.length-1;f>=0;f--){let[d,s,l,h,w,T]=o[f];y=d?m(s,l,h,w,y,T):O(O(I("Exists",T),w,T),k(l,h,y,T),T)}ya(a,i);let c=0;while(c<o.length&&o[c][0])c+=1;n.tlds[e]={$:"Def",n:c,T:W(y),v:null},n.order.push(e)}function _i(a,n){ia(a,"type");let e=pa(a,da(a));_e(a,e);let i=a.sc.stk.length;g(a);let o=M(a,"<")?Ye(a,">"):[];if(!ia(a,"is"))u(a,"'is'");let y=G(a);A(a,":");let c=[],f=o.findIndex((d)=>d[3].$!=="Qnt");n.tlds[e]={$:"ADT",n:o.length,g:f<0?o.length:f,T:W(Je(o,y)),c};while(!0){if(g(a),a.pos>=a.str.length||!La(Y(a)))break;if(["def","type","law"].some((T)=>na(a,T)))break;let d=pa(a,da(a));if(Fa(n,d)!==null)u(a,"a fresh constructor name (duplicate declaration: "+d+")");A(a,"{");let s=a.sc.stk.length,l=Ye(a,"}"),h=sa(e,o.map((T)=>D(T[1],T[2]))),w={k:d,n:l.length,T:W(Je(o.concat(l),h))};ya(a,s),c.push(w),n.ctrs[d]=w}ya(a,i),n.order.push(e)}function pe(a,n,e,i="",o=Object.create(null)){let y=Ki(a,n,e,i,o);while(!0){if(g(y),y.pos>=y.str.length)return a;if(y.sc={stk:[],frs:0},M(y,"@")){if(!ia(y,"unsafe"))u(y,"'unsafe' (the one decorator)");if(g(y),!na(y,"def"))u(y,"'def' (@unsafe marks the def below it)");Se(y,a,!0);continue}if(na(y,"def")){Se(y,a);continue}if(na(y,"type")){_i(y,a);continue}if(na(y,"law")){ki(y,a);continue}u(y,"'def', 'type' or 'law'")}}function Ia(a,n,e){function i(o){if(o.$==="Var")return o.i!==n?o:Be(e,o.s);else return Ha(n,e,o)}switch(a.$){case"Match":{let o=a.e.map(i),y=a.r.map((c)=>({p:c.p,f:Ia(c.f,n,e)}));return{$:"Match",e:o,r:y,s:a.s}}case"Local":{let o=a.v.map(i),y=Ia(a.f,n,e);return{$:"Local",k:a.k,q:a.q,v:o,f:y}}case"Reply":return{$:"Reply",x:Ha(n,e,a.x),s:a.s}}}function ta(a,n,e){if(a.e.length===0&&a.r.length>0)return Ma(a.r[0].f,n,e);else if(a.e.length===0)throw r(ea(),L(),"a case (this match has no row to return)",void 0,a.s);else if(n.length===0){let i=a.e[0];while(i.$==="Sub")i=i.f;switch(i.$){case"Var":throw r(ea(),L(),"match scrutinees in binder order (this variable is unbound, consumed, or out of order: reorder the match)",void 0,i.s);case"Ctr":throw r(ea(),L(),"an undestructed scrutinee (this value is already a constructor: bind its fields directly; if an outer match destructed it, fold the pattern into the outer case)",void 0,a.s);default:throw r(ea(),L(),"a parameter or field scrutinee (a match cannot scrutinize a computed value: give it its own def)",void 0,i.s??a.s)}}else{let i=n[0],o=a.e[0],y=no(a.r),c=n.find((f)=>o.$==="Var"&&f.i===o.i);if(c!==void 0&&y===null&&a.r.length>0){let f=eo(a.r,c);return ta({$:"Match",e:a.e.slice(1),r:f,s:a.s},n,e)}else if(c===i)if(y===null)return Pa(a.s);else{let f=io(y.x,e),d=pi(a.r,i,y.k,f),s=f.map((U)=>Be(U)).concat(a.e.slice(1)),l=f.concat(n.slice(1)),h=ta({$:"Match",e:s,r:d,s:a.s},l,e),w=ao(a.r,y.k),T=ta({$:"Match",e:a.e,r:w,s:a.s},n,e);return Ga(y.k,h,T,a.s,y.s)}else{let f=ta(a,n.slice(1),e);return k(i.k,i.i,f,i.s)}}}function pi(a,n,e,i){let o={$:"PCtr",k:e,x:i,s:n.s};return a.flatMap((y)=>{let c=y.p[0];switch(c.$){case"PCtr":if(c.k!==e)return[];else if(c.x.length!==i.length)throw r(ea(),L(),"a "+e+" pattern with "+String(i.length)+" fields",void 0,c.s);else{let f=Ia(y.f,n.i,o);return[{p:c.x.concat(y.p.slice(1)),f}]}case"PVar":{let f=Ia(y.f,c.i,n),d=Ia(f,n.i,o);return[{p:i.concat(y.p.slice(1)),f:d}]}}})}function ao(a,n){return a.filter((e)=>{let i=e.p[0];return i.$!=="PCtr"||i.k!==n})}function eo(a,n){return a.map((e)=>{let i=e.p[0];if(i.$==="PVar"){let o=Ia(e.f,i.i,n);return{p:e.p.slice(1),f:o}}else throw r(ea(),L(),"a variable pattern (this column has no constructor row)",void 0,i.s)})}function no(a){for(let n of a){let e=n.p[0];if(e.$==="PCtr")return e}return null}function io(a,n){return a.map((e)=>{if(e.$==="PVar")return e;let i=n();return{$:"PVar",k:"_"+String(i),i,s:e.s}})}function Be(a,n){switch(a.$){case"PVar":return D(a.k,a.i,n??a.s);case"PCtr":{let e=a.x.map((i)=>Be(i,n));return q(a.k,e,n??a.s)}}}function Ma(a,n,e){switch(a.$){case"Reply":if(n.length===0)return a.x;else{let i=n[0],o=Ma(a,n.slice(1),e);return k(i.k,i.i,o,i.s)}case"Local":{if(a.k.length===1&&a.k[0].$==="PCtr"){let c={p:[a.k[0]],f:a.f};return ta({$:"Match",e:[a.v[0]],r:[c],s:a.v[0].s},n,e)}let i=a.k,o=Ma(a.f,i,e);for(let c of i){if(o.$!=="Lam")throw r(ea(),L(),"a parameter or field scrutinee (a match cannot scrutinize a local binder: give it its own def)",void 0,c.s);o=o.f}let y=ee(i.map((c)=>c.k),i.map((c)=>c.i),a.v,o,i[0].s,i.map(()=>a.q));return Ma({$:"Reply",x:y},n,e)}case"Match":return ta(a,n,e)}}function $(a,n){let e=[],i=n,o=null;a:while(!0){e:switch(i.$){case"Var":if(i.v===void 0)break e;else{if(i.i===-1)e.push({$:"VAR",l:i,a:i.v.$==="Ann"?i.v:void 0});o=null,i=i.v;continue a}case"Ann":{i=i.x;continue a}case"Min":{e.push({$:"MNA",b:i.b,s:i.s}),i=i.a;continue a}case"Let":{let y=i;i=y.f(y.v.map((c,f)=>Q(c,y.k[f])));continue a}case"App":{e.push({$:"APP",x:Q(i.x),s:i.s}),o=null,i=i.f;continue a}case"Lam":if(e.length===0||e[e.length-1].$!=="APP")break e;else{let y=e.pop();if(o!==null&&o.n===0)o=null;else if(o!==null){let{t:c,n:f}=o;o={t:()=>aa(c(),y.x,y.s),n:f-1}}i=i.f(y.x);continue a}case"Mat":if(e.length===0||e[e.length-1].$!=="APP")break e;else{let y=e.pop();e.push({$:"MAT",t:i,e:y.x,lhs:o,s:y.s}),i=y.x,o=null;continue a}case"Efq":{if(o!==null&&o.n>0&&e.length>0&&e[e.length-1].$==="APP")i=o.t();break e}case"Rwt":{if($(a,i.e).$==="Rfl"){i=i.f;continue a}break e}case"Ref":{let y=a.tlds[i.k];if(y===void 0)break e;if(y.$==="ADT"){if(y.n===0)i=sa(i.k,[],i.s);break e}let c=0;while(c<y.n&&c<e.length&&e[e.length-1-c].$==="APP")c+=1;if(c<y.n||y.v===null)break e;let f=i;o={t:()=>f,n:y.n},i=y.v;continue a}default:break e}o=null;e:while(!0){let y=e.pop();if(y===void 0)return i;else switch(y.$){case"VAR":{i=Wi(i),y.l.v=y.a===void 0?i:Wa(i,Q(y.a.T),y.a.s),y.l.i=-2;continue a}case"APP":{i=aa(i,y.x,y.s);continue e}case"MNA":{if(i.$==="Qua"&&i.q.$==="Many"){i=y.b;continue a}if(i.$==="Qua"&&i.q.$==="None")continue e;e.push({$:"MNB",a:i,s:y.s}),i=y.b;continue a}case"MNB":{if(i.$==="Qua"&&i.q.$==="Many")i=y.a;else if(i.$!=="Qua"||i.q.$==="Lone"&&y.a.$!=="Qua")i=Sa(y.a,i,y.s);continue e}case"MAT":if(i.$==="Ctr"){let c=i,f=y.t;n:while(!0)switch(f.$){case"Ann":{f=f.x;continue n}case"Mat":if(f.k===c.k){let d=y.lhs;if(d===null)o=null;else o={t:()=>Qe(d.t(),c.k,c.x.length),n:d.n-1+c.x.length};for(let s=c.x.length-1;s>=0;s--)e.push({$:"APP",x:Q(c.x[s])});i=f.h;continue a}else{f=f.m;continue n}case"Efq":{i=aa(y.lhs===null?y.t:y.lhs.t(),y.e,y.s);continue e}default:{o=y.lhs,e.push({$:"APP",x:c}),i=f;continue a}}}else{i=aa(y.lhs===null?y.t:y.lhs.t(),y.e,y.s);continue e}}}}}function z(a,n){let e=$(a,n);switch(e.$){case"Var":return D(e.k,e.i,e.s);case"Ref":return I(e.k,e.s,e.b);case"Sub":return Ha(e.i,e.v.$==="PVar"||e.v.$==="PCtr"?e.v:z(a,e.v),z(a,e.f),e.s);case"Typ":return P(z(a,e.g),e.s);case"Qnt":case"Qua":return e;case"Min":return Sa(z(a,e.a),z(a,e.b),e.s);case"All":return m(e.q,e.k,e.i,z(a,e.A),(i)=>{return z(a,e.B(i))},e.s);case"Lam":return k(e.k,e.i,(i)=>{return z(a,e.f(i))},e.s);case"App":return O(e.f.$==="Ref"?e.f:z(a,e.f),z(a,e.x),e.s);case"ADT":return sa(e.k,e.x.map((i)=>z(a,i)),e.s,e.r);case"Ctr":return q(e.k,e.x.map((i)=>z(a,i)),e.s);case"Mat":return Ga(e.k,z(a,e.h),z(a,e.m),e.s,e.ks);case"Efq":return Pa(e.s);case"Eql":return Na(z(a,e.a),z(a,e.b),z(a,e.T),e.s);case"Rfl":return va(e.s);case"Rwt":return ne(z(a,e.e),z(a,e.p),z(a,e.f),e.s);case"Hol":return ie(e.k,e.s)}}function v(a,n,e,i,o=0){if(e===i)return!0;let y=$(n,e),c=$(n,i);if(y===c)return!0;if(y.$==="Lam"||c.$==="Lam"){let f=y.$==="Lam"?y.k:c.k,d=D(f,o);return v(a,n,aa(y,d),aa(c,d),o+1)}switch(y.$){case"Var":return c.$==="Var"&&y.i===c.i;case"Ref":return c.$==="Ref"&&y.k===c.k;case"Typ":{if(c.$!=="Typ")return!1;if(a==="EQ")return v("EQ",n,y.g,c.g,o);let f=$(n,y.g),d=$(n,c.g);if(f.$==="Qua"&&f.q.$==="Many"||d.$==="Qua"&&d.q.$!=="Many")return!0;if(f.$==="Min"){let s=v("LE",n,P(f.a),c,o),l=v("LE",n,P(f.b),c,o);return s&&l}if(d.$==="Min"){let s=v("LE",n,y,P(d.a),o),l=v("LE",n,y,P(d.b),o);return s||l}return v("LE",n,f,d,o)}case"Qnt":return c.$==="Qnt";case"Qua":return c.$==="Qua"&&y.q.$===c.q.$;case"Min":return c.$==="Min"&&v("EQ",n,y.a,c.a,o)&&v("EQ",n,y.b,c.b,o);case"All":{let f=D(y.k,o);return c.$==="All"&&y.q.$===c.q.$&&v(a,n,c.A,y.A,o)&&v(a,n,y.B(f),c.B(f),o+1)}case"App":return c.$==="App"&&v("EQ",n,y.f,c.f,o)&&v("EQ",n,y.x,c.x,o);case"ADT":{if(c.$!=="ADT"||y.k!==c.k||y.x.length!==c.x.length)return!1;if(a==="EQ"&&y.r.length!==c.r.length)return!1;return c.r.every((f)=>y.r.includes(f))&&y.x.every((f,d)=>v("EQ",n,f,c.x[d],o))}case"Ctr":return c.$==="Ctr"&&y.k===c.k&&y.x.length===c.x.length&&y.x.every((f,d)=>v("EQ",n,f,c.x[d],o));case"Mat":return c.$==="Mat"&&y.k===c.k&&v("EQ",n,y.h,c.h,o)&&v("EQ",n,y.m,c.m,o);case"Efq":return c.$==="Efq";case"Eql":return c.$==="Eql"&&v("EQ",n,y.a,c.a,o)&&v("EQ",n,y.b,c.b,o)&&v("EQ",n,y.T,c.T,o);case"Rfl":return c.$==="Rfl";case"Hol":return c.$==="Hol"&&y.k===c.k;case"Rwt":return c.$==="Rwt"&&v("EQ",n,y.e,c.e,o)&&v("EQ",n,y.p,c.p,o)&&v("EQ",n,y.f,c.f,o);default:return!1}}function xa(a,n,e,i,o,y,c=[]){switch(e.$){case"Var":{if(e.i<0&&e.v!==void 0)return xa(a,n,ma(e),i,o,y,c);let f=vn(o,e.i);if(f===null)throw r(a,o,"a bound variable",e,e.s,n.def);else return fa(D(e.k,e.i,e.s),f.T,Oa(b(),e.i,i))}case"Ref":{let f=a.tlds[e.k];if(f===void 0)throw r(a,o,"a defined name",e,e.s,n.def);switch(i.$){case"None":break;default:{if(e.k===n.def&&n.u!==!0&&Gi(n,c)!=="LT")throw r(a,o,"a decreasing self-call (some live argument must shrink)",e,e.s,n.def);if(e.k===n.def)return fa(I(e.k,e.s,e.b),f.T,b());if(f.$==="Def"&&f.v===null&&f.b!==!0&&!f.i)throw r(a,o,"a filled definition (an unfilled law is a dead claim: live code cannot use it)",e,e.s,n.def);break}}if(f.$==="ADT"&&f.n>0)throw r(a,o,"a family instance (write "+e.k+"<..>)",e,e.s,n.def);return fa(I(e.k,e.s,e.b),f.T,b())}case"Typ":{let f=K(a,n,e.g,J(),Ua(e.s),o,y);return fa(P(f.tm,e.s),P(R(x()),e.s),b())}case"Qnt":return fa(Ua(e.s),P(R(x()),e.s),b());case"Qua":return fa(R(e.q,e.s),Ua(e.s),b());case"Min":{let f=K(a,n,e.a,i,Ua(e.s),o,y),d=K(a,n,e.b,i,Ua(e.s),o,y);return fa(Sa(f.tm,d.tm,e.s),Ua(e.s),ga(f.us,d.us))}case"All":{let f=ka(o,y,e.q,e.k,e.A),d=K(a,n,e.A,J(),P(R(Pn(n,e.q)),e.s),o,y),s=K(a,n,e.B(D(e.k,y)),J(),P(R(x()),e.s),f,y+1);return fa(m(e.q,e.k,y,d.tm,s.tm,e.s),P(R(x()),e.s),b())}case"App":{if(e.f.$==="Lam")return xa(a,n,e.f.f(e.x),i,o,y,c);let f=xa(a,n,e.f,i,o,y,[e.x,...c]),d=$(a,f.ty);if(d.$!=="All")throw r(a,o,"a function type",f.ty,e.s,n.def);let s=K(a,n,e.x,ge(d.q,i),d.A,o,y);return fa(O(f.tm,s.tm,e.s),d.B(e.x),ga(f.us,s.us))}case"ADT":{let f=Me(a,e,o,n.def);if(e.x.length!==f.n)throw r(a,o,e.k+" with "+String(f.n)+(f.n===1?" parameter":" parameters"),e,e.s,n.def);let d=[],s=f.T,l=b();for(let h of e.x){let w=Ka(a,s,o,n.def,e.s),T=ge(w.q,i),U=K(a,n,h,T,w.A,o,y);d.push(U.tm),l=ga(l,U.us),s=w.B(h)}return fa(sa(e.k,d,e.s,e.r),s,l)}case"Eql":{let f=K(a,n,e.T,J(),P(R(x()),e.s),o,y),d=K(a,n,e.a,J(),e.T,o,y),s=K(a,n,e.b,J(),e.T,o,y);return fa(Na(d.tm,s.tm,f.tm,e.s),P(R(ra()),e.s),b())}case"Ann":{K(a,n,e.T,J(),P(R(x()),e.s),o,y);let f=K(a,n,e.x,i,e.T,o,y);return{tm:f.tm,ty:e.T,us:f.us}}default:{if(e.$==="Ctr"&&Fa(a,e.k)===null)throw r(a,o,"a declared constructor",e,e.s,n.def);throw r(a,o,"an annotated term (cannot infer)",e,e.s,n.def)}}}function K(a,n,e,i,o,y,c){switch(e.$){case"Var":{if(e.i<0&&e.v!==void 0)return K(a,n,ma(e),i,o,y,c);break}case"Lam":{let d=$(a,o);if(d.$!=="All")throw r(a,y,o,Ue(a,y,e),e.s,n.def);let s=D(e.k,c),l=n;if(n.n>0)l={...n,t:aa(n.t,s),n:n.n-1};let h=ka(y,c,d.q,e.k,d.A),w=K(a,l,e.f(s),i,d.B(s),h,c+1);return Fn(a,y,e.k,d.q,Sn(w.us,c),e.s,n.def),Ta(k(e.k,c,w.tm,e.s),o,Gn(w.us,c))}case"Let":{let d=e.k.length,s=[],l=b(),h=y;for(let N=0;N<d;N++){let F=ge(e.q[N],i),C=xa(a,n,e.v[N],F,y,c),j=P(R(Pn(n,e.q[N])),e.s);try{K(a,n,C.ty,J(),j,y,c)}catch(H){let E=H;throw E?.$==="Err"&&E.exp===j?{...E,spn:e.s??E.spn}:H}s.push(C.tm),l=ga(l,C.us),h=ka(h,c+N,e.q[N],e.k[N],C.ty)}let w=e.k.map((N,F)=>D(N,c+F,void 0,e.v[F])),T=K(a,n,e.f(w),i,o,h,c+d),U=T.us;for(let N=0;N<d;N++)Fn(a,y,e.k[N],e.q[N],Sn(U,c+N),e.s,n.def),U=Gn(U,c+N);return Ta(ee(e.k,w.map((N,F)=>c+F),s,T.tm,e.s,e.q),o,ga(l,U))}case"Ctr":{let d=$(a,o);if(d.$!=="ADT"){let U=Fa(a,e.k)===null?null:Bn(a,e.k);throw r(a,y,o,U===null?Ue(a,y,e):I(U,e.s),e.s,n.def)}let s=Me(a,d,y,n.def),l=Wn(s.c,e.k);if(l===null){if(Fa(a,e.k)===null)throw r(a,y,"a declared constructor ("+d.k+" declares "+s.c.map((U)=>U.k).join(", ")+")",e,e.s,n.def);throw r(a,y,o,I(Bn(a,e.k),e.s),e.s,n.def)}if(e.x.length!==l.n)throw r(a,y,e.k+" with "+String(l.n)+(l.n===1?" field":" fields"),e,e.s,n.def);let h=un(a,l.T,d.x,y,n.def,e.s),w=[],T=b();for(let U of e.x){let N=Ka(a,h,y,n.def,e.s),F=ge(N.q,i),C=K(a,n,U,F,N.A,y,c);w.push(C.tm),T=ga(T,C.us),h=N.B(U)}return Ta(q(e.k,w,e.s),o,T)}case"Mat":case"Efq":{let d=$(a,o);if(d.$!=="All")throw r(a,y,o,Ue(a,y,e),e.s,n.def);if(i.$!=="None"&&d.q.$==="None")throw r(a,y,"a live scrutinee (a - scrutinee matches only in a dead region)",void 0,e.s,n.def);let s=$(a,d.A);if(s.$!=="ADT")throw r(a,y,"a datatype",d.A,e.s,n.def);let l=Me(a,s,y,n.def).c;switch(e.$){case"Efq":{if(l.length!==0&&!Bi(a,y))throw r(a,y,"cases for "+l.map((h)=>h.k).join(", "),e,e.s,n.def);return Ta(Pa(e.s),o,b())}case"Mat":{let N=function(E,he,hn){if(he===0)return w.B(q(h.k,hn,h.s));else{let $a=Ka(a,E,y,n.def,h.s),si=Fi($a.q,w.q);return m(si,$a.k,$a.i,$a.A,(ln)=>{return N($a.B(ln),he-1,hn.concat([ln]))},h.s)}},h=e,w=d,T=Wn(l,e.k);if(T===null)throw r(a,y,"a constructor of "+s.k+" (missing, or already matched)",e,e.ks??e.s,n.def);let U=un(a,T.T,s.x,y,n.def,e.s),F=n;if(n.n>0)F={...n,t:Qe(n.t,e.k,T.n),n:n.n-1+T.n};let C=K(a,F,e.h,i,N(U,T.n,[]),y,c),j=m(d.q,d.k,d.i,sa(s.k,s.x,e.s,s.r.concat([T.k])),d.B,e.s),H=K(a,n,e.m,i,j,y,c);return Ta(Ga(e.k,C.tm,H.tm,e.s,e.ks),o,Si(C.us,H.us))}}}case"Rfl":{let d=$(a,o);if(d.$!=="Eql")throw r(a,y,o,Ue(a,y,e),e.s,n.def);if(!v("EQ",a,d.a,d.b,c))throw r(a,y,d.a,d.b,e.s,n.def);return Ta(va(e.s),o,b())}case"Hol":{if(e.k==="TODO")return Ta(ie(e.k,e.s),o,b());throw r(a,y,o,e,e.s,n.def)}case"Rwt":{let d=xa(a,n,e.e,i,y,c),s=$(a,d.ty);if(s.$!=="Eql")throw r(a,y,"an equation {a == b : T}",d.ty,e.e.s??e.s,n.def);let l=m(x(),"_",0,s.T,(N)=>m(x(),"e",0,Na(s.a,N,s.T),()=>P(R(x())),e.s),e.s),h=K(a,n,e.p,J(),l,y,c),w=aa(aa(e.p,s.b),e.e);if(!v("LE",a,w,o,c))throw r(a,y,o,w,e.s,n.def);let T=aa(aa(e.p,s.a),va(e.s)),U=K(a,n,e.f,i,T,y,c);return Ta(ne(d.tm,h.tm,U.tm,e.s),o,ga(d.us,U.us))}default:break}let f=xa(a,n,e,i,y,c);if(v("LE",a,f.ty,o,c))return{tm:f.tm,us:f.us};throw r(a,y,o,f.ty,e.s,n.def)}function oo(a,n,e){K(a,{t:I(n),n:0,def:n,qs:[]},e.T,J(),P(R(x())),L(),0);let i=e.T,o=L();for(let c=0;c<e.n;c++){let f=Ka(a,i,o,n,e.T.s);o=ka(o,c,f.q,f.k,f.A),i=f.B(D(f.k,c))}let y=$(a,i);if(y.$!=="Typ")throw r(a,o,"a kind (type "+n+"<..> is Kind(g))",y,i.s??e.T.s,n);for(let c of e.c){let f=c.T,d=L();for(let h=0;h<e.n+c.n;h++){let w=Ka(a,f,d,c.k),T=P(R(w.q));if(h>=e.n&&w.q.$==="Lone")T=y;K(a,{t:I(c.k),n:0,def:c.k,qs:[]},w.A,J(),T,d,h),d=ka(d,h,w.q,w.k,w.A),f=w.B(D(w.k,h))}let s="a telescope tipped at "+n+" applied to its own parameters",l=$(a,f);if(l.$!=="ADT"||l.k!==n||l.x.length!==e.n||l.r.length!==0)throw r(a,d,s,l,void 0,c.k);for(let h=0;h<e.n;h++){let w=$(a,l.x[h]);if(w.$!=="Var"||w.i!==h)throw r(a,d,s,l,void 0,c.k)}}}function yo(a,n,e){if(K(a,{t:I(n),n:0,def:n,qs:[],u:e.u},e.T,J(),P(R(x())),L(),0),e.i){let i=_(e.T);for(let c=0;i.$==="All";c++)i=_(i.B(D(i.k,c)));let[o]=Ge(i),y=a.tlds.IO;if(o.$!=="Ref"||o.k!=="IO"||y===void 0||y.$!=="Def"||y.b!==!0)throw r(a,L(),"a foreign definition returning base IO(...) directly (return type aliases are not unfolded)",n,i.s,n)}if(e.v!==null){let i=Ci(a,e.T).doms.map((o)=>o[0]).slice(0,e.n);while(i.length<e.n)i.push(x());e.e=K(a,{t:I(n),n:e.n,def:n,qs:i,u:e.u},e.v,x(),e.T,L(),0).tm}}function an(a,n=0){let e=ea(),i=new Map;for(let o=0;o<a.order.length;o++)i.set(a.order[o],o);for(let o=0;o<a.order.length;o++){let y=a.order[o],c=a.tlds[y],f=i.get(y)===o;if(c.$==="ADT"){e.tlds[y]=c;for(let s of c.c)e.ctrs[s.k]=s;if(o>=n)oo(e,y,c);continue}let d={$:"Def",n:c.n,T:c.T,v:null,b:c.b,u:c.u};if(o<n){e.tlds[y]=f?c:d;continue}if(f&&c.v===null&&c.b!==!0&&!c.i)a.open+=1;e.tlds[y]=d,yo(e,y,f?c:d),e.tlds[y]=f?c:d}}var Qn=`

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
`;var Hn=`# Winning Is Impossible -- the game.
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
`;var En=`# The laws. The human states them; PROOF.bend must prove them.

import Base
import ./main.bend as Game

# LAW: for any sequence of moves, replaying them
# from the start can never lead to victory.
law you_cant_win:
  for moves: List<Game.Move>
  board = Game.replay(Game.start(), moves)
  {Game.is_won(board) == False{} : Bool}

# The board the page draws: grid(map_h() - 1), one row per line, and
# the page's reading of it: the character at column x of row y, 'F'
# where it draws the flag. Both laws bind exactly what the page shows.
def drawn() -> String:
  Game.grid(Nat.sub(Game.map_h(), 1n))

def ch(c: Char, k: U32) -> Bool:
  Chr{code} = c
  U32.is_eq(code, k)

def pick(-A: Type, c: Bool, a: A, b: A) -> A:
  match c:
    case True{}:
      a
    case False{}:
      b

# the text after the first line
def next_row(s: String) -> String:
  match s:
    case SNil{}:
      SNil{}
    case SCon{c, rest}:
      +r = rest
      pick(String, ch(c, 10), r, next_row(r))

# whether column x of the first line is 'F'
def flag_in_row(s: String, x: Nat) -> Bool:
  match s:
    case SNil{}:
      False{}
    case SCon{c, rest}:
      match x:
        case 0n:
          ch(c, 70)
        case 1n+p:
          pick(Bool, ch(c, 10), False{}, flag_in_row(rest, p))

# whether the page draws a flag at row y, column x of s
def flag_at(y: Nat, x: Nat, s: String) -> Bool:
  match y:
    case 0n:
      flag_in_row(s, x)
    case 1n+q:
      flag_at(q, x, next_row(s))

# a board with the player on a drawn flag
def at_flag(g: Game.Game) -> Bool:
  Game.Game{x, y, won} = g
  flag_at(y, x, drawn())

# LAW: the player never stands on the flag: no sequence of moves puts
# the player on an 'F' cell of the board the page draws.
law never_on_flag:
  for moves: List<Game.Move>
  board = Game.replay(Game.start(), moves)
  {at_flag(board) == False{} : Bool}
`;var bn=`# Winning Is Impossible -- the certificate.
#
# The proofs. This file imports the game (as Game) and the claims (as
# Laws) and fills every assert the laws make -- an unfilled assert is an
# error, so \`bend PROOF.bend\` is the whole verification. Everything here
# is AI-written scaffolding for two defs: Laws.you_cant_win and
# Laws.never_on_flag.
#
# The shape of the argument: an invariant ("the player stands on a safe
# cell: on the map, not in the room, not on a wall") holds at the start
# and survives every action. The finite geometry is computed, not
# argued: chk_all enumerates the whole map and evaluates to True, and
# the *_at lemmas index that certificate at open coordinates. A step off
# the flag never sets \`won\` (the flag's cell is in the room), and a
# second certificate, fchk_all, walks the board the page draws and finds
# no flag on any safe cell.

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

# The board the page draws, certified: fchk_all(s, 11n) checks every
# cell of the map, and finds no flag drawn on a safe one. The board is
# passed in, so it is computed once for the whole walk.

def fchk(+s: String, +x: Nat, +y: Nat) -> Bool:
  imp(okpos(x, y), Bool.not(Laws.flag_at(y, x, s)))

def fchk_row(+s: String, +x: Nat, y: Nat) -> Bool:
  match y:
    case 0n:
      fchk(s, x, 0n)
    case 1n+q0:
      +q = q0
      fchk(s, x, 1n+q) && fchk_row(s, x, q)

def fchk_all(+s: String, x: Nat) -> Bool:
  match x:
    case 0n:
      fchk_row(s, 0n, 7n)
    case 1n+p0:
      +p = p0
      fchk_row(s, 1n+p, 7n) && fchk_all(s, p)

def fchk_row_at(+s: String, +x: Nat, y: Nat, j: Nat, wr: T(fchk_row(s, x, y)),
  wj: T(Game.nat_le(j, y))) -> T(fchk(s, x, j)):
  match y:
    case 0n:
      match j:
        case 0n:
          wr
        case 1n+jp:
          Empty.absurd(T(fchk(s, x, 1n+jp)), wj)
    case 1n+q0:
      match j:
        case 0n:
          +q = q0
          and_split(fchk(s, x, 1n+q), fchk_row(s, x, q), wr, T(fchk(s, x, 0n)),
            wp => wt => fchk_row_at(s, x, q, 0n, wt, Unit{}))
        case 1n+jp0:
          +q = q0
          +jp = jp0
          and_split(fchk(s, x, 1n+q), fchk_row(s, x, q), wr, T(fchk(s, x, 1n+jp)),
            wp => wt =>
              or_case(T(Game.nat_le(1n+jp, q)), {jp == q : Nat},
                le_split(jp, q, wj), T(fchk(s, x, 1n+jp)),
                l => fchk_row_at(s, x, q, 1n+jp, wt, l),
                e => %sym(Nat, jp, q, e) : T(fchk(s, x, 1n+_))
                     wp))

def fchk_all_at(+s: String, x: Nat, i: Nat, wa: T(fchk_all(s, x)),
  wi: T(Game.nat_le(i, x))) -> T(fchk_row(s, i, 7n)):
  match x:
    case 0n:
      match i:
        case 0n:
          wa
        case 1n+ip:
          Empty.absurd(T(fchk_row(s, 1n+ip, 7n)), wi)
    case 1n+p0:
      match i:
        case 0n:
          +p = p0
          and_split(fchk_row(s, 1n+p, 7n), fchk_all(s, p), wa,
            T(fchk_row(s, 0n, 7n)),
            wp => wt => fchk_all_at(s, p, 0n, wt, Unit{}))
        case 1n+ip0:
          +p = p0
          +ip = ip0
          and_split(fchk_row(s, 1n+p, 7n), fchk_all(s, p), wa,
            T(fchk_row(s, 1n+ip, 7n)),
            wp => wt =>
              or_case(T(Game.nat_le(1n+ip, p)), {ip == p : Nat},
                le_split(ip, p, wi), T(fchk_row(s, 1n+ip, 7n)),
                l => fchk_all_at(s, p, 1n+ip, wt, l),
                e => %sym(Nat, ip, p, e) : T(fchk_row(s, 1n+_, 7n))
                     wp))

def fcert(+s: String, +x: Nat, +y: Nat, ca: T(fchk_all(s, 11n)),
  lx: T(Game.nat_le(x, 11n)), ly: T(Game.nat_le(y, 7n))) -> T(fchk(s, x, y)):
  fchk_row_at(s, x, 7n, y, fchk_all_at(s, 11n, x, ca, lx), ly)

# on a safe cell the page draws no flag: the certificate says so
def off_F(+x: Nat, +y: Nat, +hp: T(okpos(x, y)))
  -> {False{} == Laws.flag_at(y, x, Laws.drawn()) : Bool}:
  and_split(Game.nat_le(x, 11n) && Game.nat_le(y, 7n),
    Bool.not(room(x, y)) && Bool.not(Game.wall(x, y)), hp,
    {False{} == Laws.flag_at(y, x, Laws.drawn()) : Bool},
    wb => wnr =>
      and_split(Game.nat_le(x, 11n), Game.nat_le(y, 7n), wb,
        {False{} == Laws.flag_at(y, x, Laws.drawn()) : Bool},
        lx => ly =>
          bool_case(Laws.flag_at(y, x, Laws.drawn()), z => {False{} == z : Bool},
            et => Empty.absurd({False{} == True{} : Bool},
              not_elim(Laws.flag_at(y, x, Laws.drawn()),
                imp_elim(okpos(x, y), Bool.not(Laws.flag_at(y, x, Laws.drawn())),
                  fcert(Laws.drawn(), x, y, Unit{}, lx, ly), hp),
                %et : T(_)
                Unit{})),
            ef => {==})))

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
# no flag drawn there (the certificate), so the second.
def Laws.you_cant_win(moves):
  use_safe(moves, Game.start_x(), Game.start_y(),
    run_safe(moves, Game.start_x(), Game.start_y(), Unit{}),
    {Game.is_won(Game.replay(Game.start(), moves)) == False{} : Bool},
    nx => ny => hq => eq =>
      %sym(Game.Game, Game.run(moves, Game.Game{Game.start_x(), Game.start_y(), False{}}),
        Game.Game{nx, ny, False{}}, eq) : {Game.is_won(_) == False{} : Bool}
      {==})

def Laws.never_on_flag(moves):
  use_safe(moves, Game.start_x(), Game.start_y(),
    run_safe(moves, Game.start_x(), Game.start_y(), Unit{}),
    {Laws.at_flag(Game.replay(Game.start(), moves)) == False{} : Bool},
    nx => ny => hq => eq =>
      %sym(Game.Game, Game.run(moves, Game.Game{Game.start_x(), Game.start_y(), False{}}),
        Game.Game{nx, ny, False{}}, eq) : {Laws.at_flag(_) == False{} : Bool}
      %off_F(nx, ny, hq) : {_ == False{} : Bool}
      {==})
`;var mn="# Bend, for this lab\n\nBend is a pure, strict, total language: Python's look, affine values, and\na proof checker in the style of Lean, without tactics. A file is `import`\nlines, then `type`, `def` and `law` blocks. Indent with two spaces. One\nstatement per line. `#` starts a comment.\n\n## Files, namespaces, laws\n\n```\nimport Base\nimport ./main.bend as Game\n```\n\n`Base` is the prelude. A file's definitions live under its namespace, so\ninside PROOF.bend the game's `step` is `Game.step` and its constructor\n`Up{}` is `Game.Up{}`. A `law` states a type; a `def` of the same name,\nwith bare parameter names, proves it. `def Laws.you_cant_win(moves):` in\nPROOF.bend fills the law that LAWS.bend states. An unfilled law, or a\n`?TODO` left in a body, is a TODO: the file still \"checks\" but is\nincomplete, and submit rejects it. `@unsafe` is rejected too. Imports may\nnot form a cycle: LAWS.bend imports main.bend, so main.bend cannot import\nLAWS.bend or PROOF.bend.\n\n```\nlaw name:\n  for x: A          # a parameter; `for +x: A` reusable, `for -x: A` erased\n  R                 # the claim, a type; lets may come before it\n\ndef name(x):\n  body              # the proof: a term of type R\n```\n\n## Definitions and quantities\n\n```\ndef name(x: A, +y: B, -Z: Type) -> R:\n  statements\n  expression\n```\n\nEvery binder has a quantity. `x` is used exactly once (affine). `+y` may\nbe used many times; `+` is allowed only on `Data` (Nat, Bool, U32, String,\nequations, and types declared `is Data`). `-Z` is erased: types and\nproofs that only types mention. Using an affine value twice is the error\n`x (consumed more than once)`. To reuse a value bound without `+`, rebind\nit: `+x = x0`. Dropping a value is free.\n\nStatements: `x = e` (a literal needs its type: `x = {10 : U32}`),\n`+x = e`, `Ctr{a, b} = p` opens a constructor, `(a, b) = p` opens a pair,\n`%e : P` rewrites (below). Expressions: calls `f(a, b)`, constructors\n`Ctr{a, b}`, lambdas `x => body`, pairs `(a, b)`, literals, operators.\nEvery type argument is written out: there are no implicit arguments and\nno unification. A lambda passed to a call takes its type from the callee.\n\nThere is no `if`. `match` opens a parameter or a field, never a computed\nexpression: compute in a helper and match its parameter. Nat patterns are\n`0n` and `1n+p` (`p` the predecessor; `2n+p` also works); Bool `True{}`,\n`False{}`; List `Nil{}`, `Con{h, t}`; `_` catches the rest. Several\nscrutinees: `match a, b:` with `case 0n, 1n+q:`. Matching a `+` parameter\nhands out `+` fields. A match with no cases closes a goal whose scrutinee\nhas type `Empty`.\n\n```\ndef pick(-A: Type, c: Bool, a: A, b: A) -> A:\n  match c:\n    case True{}:\n      a\n    case False{}:\n      b\n```\n\nTermination: a recursive call must pass a structurally smaller argument,\na pattern variable bound by a `match` on that parameter (`Nat.sub(n, 1n)`\nproves nothing; only the pattern does). A def may call itself and the\ndefs above it in the file, never one below: no mutual recursion.\n\n## Types and values\n\n- `Nat`: unary, `0n`, `3n`, `1n+p`. `Nat.add`, `Nat.sub` (floors at 0n),\n  `Nat.mul`, `Nat.double`, `Nat.is_lt`. main.bend defines its own\n  `nat_eq` and `nat_le` answering `Bool`.\n- `Bool`: `True{}`, `False{}`; `a && b` is `Bool.and`, `a || b` is\n  `Bool.or`, `Bool.not(b)`.\n- `U32`: a 32-bit word, `42`; operators need the type: `(a + b : U32)`,\n  `(a < b : U32)` answers `Bool`. Bare `(a + b)` is on `Nat`.\n- `String` `\"abc\"`, `a ++ b` appends; `Char` `'a'`.\n- `List<A>`: `[a, b]`, `Nil{}`, `Con{h, t}`.\n- `Unit` (one value, `Unit{}`), `Empty` (no value), `A & B` pairs `(a, b)`,\n  `Or(A, B)` with `Inl{l}` and `Inr{r}`, `Maybe<A>` with `None{}` and\n  `Some{v}`. `Type` and `Data` are kinds.\n\n```\ntype Move is Data:\n  Up{}\n  Down{}\n\ntype Game is Data:\n  Game{x: Nat, y: Nat, won: Bool}\n```\n\nA type `is Data` may be reused with `+`; `is Type` may not. Fields are\nreached only by matching or by `Game{x, y, w} = g`.\n\n## Propositions and proofs\n\nA proposition is a type and a proof is a term of it. `Unit` is true,\n`Empty` is false, `A -> B` is implication, `@x: A -> B` is \"for all x\",\n`&x: A -> B` is \"exists x\" (built as `(x, proof)`, opened by\n`(x, w) = p`). `{a == b : T}` is equality. Its one proof is `{==}`,\naccepted when both sides compute to the same term: the checker evaluates\ndefinitions, so `{nat_eq(1n, 1n) == True{} : Bool}` is proved by `{==}`.\n`{a != b : T}` is `{a == b : T} -> Empty`. `Empty.absurd(P, e)` proves any\n`P` from `e : Empty`. Base has `Equal.sym(A, a, b, e)`,\n`Equal.trans(A, a, b, c, ab, bc)` and `Equal.cong(A, B, f, a, b, e)`.\n\nCase analysis: matching a parameter refines the goal in each arm. Where\nthe goal mentions `x : Nat`, `match x:` gives a `0n` goal and a `1n+p`\ngoal, both computed as far as they go. Induction: a recursive call is the\ninduction hypothesis, on a structurally smaller argument.\n\nRewriting: `%e : P`, with `e : {a == b : T}` and `P` the goal with `_`\nmarking where `b` sits. The goal must be `P` with `b` at the marks; the\nlines after the rewrite prove `P` with `a` there.\n\n```\ndef IsEven(n: Nat) -> Type:\n  match n:\n    case 0n:\n      Unit\n    case 1n+0n:\n      Empty\n    case 2n+p:\n      IsEven(p)\n\ndef half(n: Nat) -> Nat:\n  match n:\n    case 0n:\n      0n\n    case 1n+0n:\n      0n\n    case 2n+p:\n      1n+half(p)\n\nlaw half_ok:\n  for x: Nat\n  for e: IsEven(x)\n  {Nat.double(half(x)) == x : Nat}\n\ndef half_ok(x, e):\n  match x:\n    case 0n:\n      {==}\n    case 1n+0n:\n      match e:\n    case 2n+p:\n      %half_ok(p, e) : {2n+Nat.double(half(p)) == 2n+_ : Nat}\n      {==}\n```\n\nTruth by computation, the idiom PROOF.bend is built on:\n\n```\ndef T(b: Bool) -> Data:\n  match b:\n    case True{}:\n      Unit\n    case False{}:\n      Empty\n```\n\n`T(b)` is `Unit` when `b` computes to `True{}`, so `Unit{}` proves\n`T(check())` whenever `check()` is a closed term that evaluates to True:\nthe checker runs the program and the run is the proof. A hypothesis\n`w : T(a && b)` is split by `and_split(a, b, w, P, wa => wb => ...)`;\n`T(False{})` is `Empty`, so `Empty.absurd(P, w)` closes that arm. A match\non a Bool `c` when the goal mentions a function of `c` needs the goal\nrefined; PROOF.bend does it with `bool_case(c, z => Goal[z], et => ...,\nef => ...)`, which gives each arm an equation `{True{} == c : Bool}` or\n`{False{} == c : Bool}` to rewrite with, and `pick_split` does the same\nfor `Game.pick`. Read these kits in PROOF.bend before writing new ones.\n\nThe checker is one bidirectional pass with conversion where inference\nmeets checking. An error prints `expected`, `observed`, the context and\nthe line. The pair shows the two terms after evaluation at the exact spot\nthey part: read it, then change the term or the motive so they meet.\n\n## The game and its proof\n\nmain.bend: `Move` (Up, Down, Left, Right), `Game{x, y, won}`, the map\nconstants (`map_w` 12, `map_h` 8, a room of `room_w` x `room_h` in the\ncorner, the flag at `flag_x`, `flag_y`, the start cell), `wall(x, y)`\n(the room's two walls, and their mirrors on the far edges of the torus),\n`warp_*` (wrapping moves), `on_flag(x, y)`, `move` (a step that a wall\nrefuses; landing on the flag sets `won`), `step`, `run`, `replay`,\n`is_won`, `grid` (the map as text) and `key` (a key's character code to\nthe `Maybe<Move>` it plays: a new key is one more line there and one\nmore `Move`).\n\nLAWS.bend states two laws over every `moves: List<Game.Move>` and\n`board = Game.replay(Game.start(), moves)`: `you_cant_win`,\n`Game.is_won(board) == False{}`; and `never_on_flag`,\n`at_flag(board) == False{}`, where `at_flag` (defined there) is \"the\nplayer's cell is an 'F' of the board the page draws\": `drawn()` is\n`Game.grid(Nat.sub(Game.map_h(), 1n))`, and `flag_at(y, x, s)` walks\nthat text to row y, column x. Together: the player never wins, and never\nstands where the page draws a flag, whatever `on_flag` says.\n\nPROOF.bend proves both with a safety invariant, `okpos(x, y)`: the\nplayer is on the map (`x <= 11n`, `y <= 7n`), not inside the room\n(`x <= 2n` and `y <= 2n`), and not on a wall. `chk(a, x, y)` says a move\n`a` from a safe cell lands on a wall (so `move` refuses it) or on a safe\ncell. `chk_all(a, 11n)` conjoins `chk` over every cell and evaluates to\nTrue by computation; `chk_row_at`, `chk_all_at` and `cert` index that\ncertificate at open coordinates; `no_flag` and `off_flag` say a safe\ncell is off the flag, because the flag's cell is in the room; `fchk`,\n`fchk_row`, `fchk_all`, `fchk_row_at`, `fchk_all_at` and `fcert` are the\nsame certificate over the drawn board (`fchk(s, x, y)`: a safe cell has\nno 'F' at row y, column x of `s`; `fchk_all(Laws.drawn(), 11n)` evaluates\nto True), and `off_F` reads it at open coordinates; `go_ok`\nand `go_pos` turn it all into \"the next cell is safe, and unwon\";\n`run_safe` carries that through any list of moves, answering the final\ncell, its safety and the equation `run(moves, start) == Game{nx, ny,\nFalse{}}`; `use_safe` opens that answer, and each fill rewrites its goal\nwith it: unwon gives the first law, `off_F` gives the second. The\nliteral numbers in PROOF.bend (11n, 7n, 2n, 1n) mirror main.bend's map:\nwhen the map changes, they change with it, and `chk_all` must still\nevaluate to True, which is the geometric fact the checker computes for\nyou.\n\nPractical advice. Keep main.bend's helper shape (`nat_eq`, `nat_le`,\n`wall`, `pick`, `warp_*`, `move`, `step`, `run`, `replay`), so most of\nPROOF.bend survives an edit. Change one thing, submit, read the first\nerror, fix, submit again. A feature that opens\na path into the room (a hole, a wrap, a teleport, a bigger map) keeps the\nlaw only if something still keeps the flag out of reach. A wall where\nthe path would enter is the cheap answer; the rules above ask for a\nbetter one. When the literal request breaks the proof, build the most\ncreative version that keeps the law, and say what changed. Only \"let me\nwin\" itself has no lawful version.\n";var To="gpt-5.6-luna",Uo="https://api.openai.com/v1/responses",kn=60,Ja="/game/",dn=["main.bend","LAWS.bend","PROOF.bend"],No=[119,115,97,100],ro={ArrowUp:"w",ArrowDown:"s",ArrowLeft:"a",ArrowRight:"d"},go="The front end needs, in main.bend: `type Game is Data` with fields x: Nat, y: Nat, won: Bool, in that order; start() -> Game; replay(g: Game, moves: List<Move>) -> Game; is_won(g: Game) -> Bool; map_w() -> Nat; map_h() -> Nat; grid(y: Nat) -> String, rows 0..y joined by newlines, one character per cell: '#' wall, 'F' flag, 'P' the start, '.' floor; and key(k: U32) -> Maybe<Move>. The page draws walls at the '#' cells of grid(map_h() - 1n) and flags at its 'F' cells, read as LAWS.bend's flag_at reads them: the flag it draws and the flag the law forbids are the same predicate. The front end keeps every move played and, on each key press, shows replay(start(), moves) for the whole list from the start, and calls the game won when is_won of that board answers True{}: exactly the terms the laws bind. Every key press reaches key() as its character code (letters lowercased: 'w' is 119, 'j' is 106; space is 32; the arrow keys arrive as w, a, s, d) and the front end plays the move it answers: Some{m} plays m, None{} does nothing; space and every unmapped key answer None{}. So a new key is: a constructor in Move, a case in step, a line in key, and the matching cases in PROOF.bend. The player is drawn at (x, y) and the level from grid(map_h() - 1n). Anything else may change.",Mo=`You are the AI inside a lab on Bend's website. A player is playing Winning Is Impossible, a small game written in Bend, and asks you to change it. You edit the game and its proof; Bend checks your work; the player watches.

Files (use the tools):
- main.bend: the game. Edit freely.
- LAWS.bend: the human's laws, you_cant_win and never_on_flag. Read-only.
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

`+mn,ni={"main.bend":Hn,"LAWS.bend":En,"PROOF.bend":bn};p.set("/bend2/base.bend",Qn);for(let a of dn)p.set(Ja+a,ni[a]);p.set(Ja+"ALL.bend",`import Base
import ./main.bend as Game
import ./LAWS.bend as Laws
import ./PROOF.bend as Proof
`);var en=null;async function Fo(){if(en===null){let a=ea();await _a(a,"/bend2/base.bend","",new Map),en=new Set(a.order)}return en}function se(a){let n=a;return n?.$==="Err"?qn(n):String(a?.message??a)}async function Oe(a){let n=ea();try{await _a(n,Ja+a,"",new Map),an(n)}catch(c){return{ok:!1,text:se(c),hols:0,uns:0}}let e=await Fo(),i=[...new Set(n.order)].filter((c)=>!e.has(c)&&n.tlds[c].u===!0).length,o=n.hols+n.open,y=o>0?String(o)+(o===1?" TODO":" TODOs")+` found.
The code is incomplete, and not a valid proof yet.`:i>0?String(i)+(i===1?" term":" terms")+` annotated as unsafe.
The code is well-typed, but may contain logical paradoxes.`:"All terms check.";return{ok:o===0&&i===0,text:y,book:n,hols:o,uns:i}}class Ke{book;constructor(a){this.book=a}ev(a,n){let e=this.book,i=e.order.length;try{return pe(e,Ja,"def RUN() -> "+a+`:
  `+n+`
`,"",Object.create(null)),an(e,i),za(V(z(e,e.tlds.RUN.v)))}finally{for(let o of e.order.splice(i))delete e.tlds[o]}}replay(a){let n=this.ev("main.Game & Bool","+g = main.replay(main.start(), ["+a.join(", ")+`])
  (g, main.is_won(g))`),e=/^Tuple\{main\.Game\{(\d+)n, (\d+)n, (?:True|False)\{\}.*\}, (True|False)\{\}\}$/.exec(n);if(e===null)throw Error("Game must keep the fields x: Nat, y: Nat, won: Bool, in that order, and is_won must answer a Bool (replay(start(), moves) and is_won of it answered "+n+")");return{x:Number(e[1]),y:Number(e[2]),won:e[3]==="True"}}key(a){let n=/^Some\{(.*)\}$/.exec(this.ev("Maybe<main.Move>","main.key("+a+")"));return n===null?null:n[1]}nat(a){return Number(this.ev("Nat","main."+a+"()").replace(/n$/,""))}grid(){return JSON.parse(this.ev("String","main.grid(Nat.sub(main.map_h(), 1n))"))}flags(a,n){let e=[];for(let y=0;y<n;y++)for(let c=0;c<a;c++)e.push("LAWS.flag_at("+y+"n, "+c+"n, s)");let i=this.ev("List<Bool>",`+s = LAWS.drawn()
  [`+e.join(", ")+"]"),o=[...i.matchAll(/(True|False)\{\}/g)].map((y)=>y[1]==="True");if(o.length!==a*n||!/^(Con\{(True|False)\{\}, )*Nil\{\}\}*$/.test(i))throw Error("LAWS.flag_at must answer a Bool for every cell (it answered "+i+")");return o}}function ii(a){for(let n of["start","replay","is_won","map_w","map_h","grid","key"])if(a.book.tlds["main."+n]?.$!=="Def")return"main.bend must keep a def named "+n;try{a.replay([]);let n=a.nat("map_h"),e=a.nat("map_w"),i=a.grid().split(`
`);if(i.length!==n||i.some((o)=>o.length!==e))return"grid(map_h() - 1n) must answer map_h() rows of map_w() cells";a.flags(e,n);for(let o of No){let y=a.key(o);if(y!==null)a.replay([y])}}catch(n){return se(n)}return null}var qa,ye=[],ca,Ae=[],ja=12,Ie=8,on=new Set,yn=new Set,Ba=null,Aa=null,oi=0;function sn(a){if(qa=a,ye=[],ca=qa.replay(ye),Ae=qa.grid().split(`
`),Ie=Ae.length,ja=Math.max(...Ae.map((n)=>n.length)),on=new Set,Ae.forEach((n,e)=>[...n].forEach((i,o)=>{if(i==="#")on.add(o+","+e)})),yn=new Set,qa.flags(ja,Ie).forEach((n,e)=>{if(n)yn.add(e%ja+","+Math.floor(e/ja))}),Ba=Aa=null,Va!==void 0)oi=performance.now()}function So(a){let n;try{if(n=qa.key(a),n===null)return!1;let{x:e,y:i}=ca;ye.push(n);try{ca=qa.replay(ye)}catch(y){throw ye.pop(),y}let o={Up:[0,-1],Down:[0,1],Left:[-1,0],Right:[1,0]}[n.replace(/\{.*$/,"")];if(ca.x===e&&ca.y===i&&o!==void 0)Aa={dx:o[0],dy:o[1],t0:performance.now()};else if(Math.abs(ca.x-e)<=1&&Math.abs(ca.y-i)<=1)Ba={fx:e,fy:i,t0:performance.now()}}catch(e){fe("bad","the game crashed: "+se(e))}return!0}var ha={floor:["#f3efe8","#e5e1d9"],wall:"#a6a3a0",cap:"#bebbb8",pole:"#87847d",cloth:"#7e9a5e",skin:"#78c0e3",eye:"#2f3b4c",win:"#f6e4e1",winRim:"#dfa9a2",winInk:"#c46a60"},Go='ui-monospace,Menlo,"SF Mono",Consolas,monospace',_n=(a,n,e)=>a+(n-a)*e;function Wo(a,n){let e=a.getContext("2d"),i=a.clientWidth,o=window.devicePixelRatio||1,y=i/ja,c=y*Ie;if(a.width!==Math.round(i*o)||a.height!==Math.round(c*o))a.width=Math.round(i*o),a.height=Math.round(c*o);e.setTransform(o,0,0,o,0,0),e.clearRect(0,0,i,c);let f=(U,N,F,C,j,H)=>{e.fillStyle=H,e.beginPath(),e.roundRect(U,N,F,C,j),e.fill()};for(let U=0;U<Ie;U++)for(let N=0;N<ja;N++){let F=N*y+1.5,C=U*y+1.5,j=y-3;if(!on.has(N+","+U)){f(F,C,j,j,y/8,ha.floor[(N+U)%2]);continue}f(F,C,j,j,y/8,ha.wall),f(N*y+y/8,U*y+y/8,y*0.75,y*0.21,y/19,ha.cap)}let d=y/40;for(let U of ca.won?[]:yn){let[N,F]=U.split(",").map((C)=>Number(C)*y);e.strokeStyle=ha.pole,e.lineWidth=2.5,e.lineCap="round",e.beginPath(),e.moveTo(N+14*d,F+31*d),e.lineTo(N+14*d,F+9*d),e.stroke(),e.fillStyle=ha.cloth,e.beginPath(),e.moveTo(N+15*d,F+9*d),e.lineTo(N+31*d,F+14.5*d),e.lineTo(N+15*d,F+20*d),e.closePath(),e.fill()}let{x:s,y:l}=ca;if(Ba!==null){let U=Math.min((n-Ba.t0)/90,1);if(s=_n(Ba.fx,s,U),l=_n(Ba.fy,l,U),U===1)Ba=null}if(Aa!==null){let U=(n-Aa.t0)/120;if(U<1)s+=Aa.dx*0.3*(1-U),l+=Aa.dy*0.3*(1-U);else Aa=null}let h=s*y+y/2,w=l*y+y/2;e.fillStyle=ha.skin,e.beginPath(),e.arc(h,w,12.5*d,0,Math.PI*2),e.fill(),e.fillStyle=ha.eye,e.beginPath(),e.arc(h-4.5*d,w-2*d,2.2*d,0,Math.PI*2),e.arc(h+4.5*d,w-2*d,2.2*d,0,Math.PI*2),e.fill();let T=(n-oi)/900;if(T<1)e.fillStyle="rgba(126,154,94,"+(0.45*(1-T)*(1-T)).toFixed(3)+")",e.beginPath(),e.roundRect(0,0,i,c,y/8),e.fill();if(ca.won){let U=y*5.6,N=y*1.5,F=(i-U)/2,C=(c-N)/2;e.fillStyle=ha.win,e.strokeStyle=ha.winRim,e.lineWidth=1.5,e.beginPath(),e.roundRect(F,C,U,N,10),e.fill(),e.stroke(),e.fillStyle=ha.winInk,e.font="600 "+y*0.6+"px "+Go,e.textAlign="center",e.fillText("YOU WON !?",i/2,C+N*0.66)}}var Da={type:"string"},Ce=(a,n,e)=>({type:"function",name:a,description:n,strict:!0,parameters:{type:"object",properties:e,required:Object.keys(e),additionalProperties:!1}}),Bo=[Ce("read_file","Read one of the files. Paths: main.bend, LAWS.bend, PROOF.bend.",{path:Da}),Ce("write_file","Replace the whole content of main.bend or PROOF.bend. LAWS.bend is read-only.",{path:Da,content:Da}),Ce("edit_file","Replace one exact occurrence of `old` with `new` in main.bend or PROOF.bend. `old` must occur exactly once, indentation included.",{path:Da,old:Da,new:Da}),Ce("submit","Submit the files. Bend checks main.bend, then main.bend, LAWS.bend and PROOF.bend together: no error, both laws proved, no TODO, no @unsafe, LAWS.bend untouched, and the front end's API intact. Accepted work goes live at once. A rejection answers the first error with its file and location: fix it and submit again.",{})];async function yi(){if(p.get(Ja+"LAWS.bend")!==ni["LAWS.bend"])return{game:!1,text:"LAWS.bend was changed"};let a=await Oe("main.bend");if(!a.ok)return{game:!1,text:"main.bend: "+a.text};let n=await Oe("ALL.bend");if(!n.ok){let o=n.book===void 0?[]:[...new Set(n.book.order)].filter((y)=>y.startsWith("LAWS.")&&n.book.tlds[y].v===null);return{game:!1,text:o.length>0?"the law "+o[0].slice(5)+" has no proof: PROOF.bend must fill def Laws."+o[0].slice(5):"PROOF.bend: "+n.text}}let e=new Ke(n.book),i=ii(e);if(i!==null)return{game:!0,text:i};return sn(e),null}var Ra=null;async function ci(a,n){let e=String(n.path??"").replace(/^\.?\//,"");if(a!=="submit"&&!dn.includes(e))return"no such file: "+e+" (the files are main.bend, LAWS.bend, PROOF.bend)";let i=Ja+e;switch(a){case"read_file":return p.get(i);case"write_file":if(e==="LAWS.bend")return"LAWS.bend is the human's file: read-only.";return p.set(i,n.content),"wrote "+e+" ("+n.content.split(`
`).length+" lines)";case"edit_file":{if(e==="LAWS.bend")return"LAWS.bend is the human's file: read-only.";let o=p.get(i),y=o.split(n.old).length-1;if(y!==1)return y===0?"old text not found in "+e+" (it must match exactly, indentation included)":"old text occurs "+y+" times in "+e+"; include more context so it is unique";return p.set(i,o.replace(n.old,()=>n.new)),"edited "+e}case"submit":return Ra=await yi(),Ra===null?"Accepted. The new game is live.":"Rejected: "+Ra.text;default:return"unknown tool "+a}}async function fi(a,n,e){let i=await fetch(Uo,{method:"POST",signal:n,headers:{"Content-Type":"application/json",Authorization:"Bearer "+ve()},body:JSON.stringify(a)});if(!i.ok){let d=i.status+" "+i.statusText;try{d=(await i.json()).error?.message??d}catch{}throw Error(d)}let o=i.body.getReader(),y=new TextDecoder,c="",f=null;for(;;){let{value:d,done:s}=await o.read();if(s)break;c+=y.decode(d,{stream:!0});let l;while((l=c.indexOf(`

`))>=0){let h=c.slice(0,l);c=c.slice(l+2);let w=h.split(`
`).filter((U)=>U.startsWith("data:")).map((U)=>U.slice(5).trim()).join(`
`);if(w===""||w==="[DONE]")continue;let T=JSON.parse(w);if(T.type==="response.completed"||T.type==="response.incomplete")f=T.response;else if(T.type==="response.failed"||T.type==="error")throw Error(T.error?.message??T.response?.error?.message??"the model failed");else e(T)}}if(f===null)throw Error("the stream ended before the response completed");return f}var xe=!1,te=null,nn=!0,Ve=null;async function Ao(a){xe=!0,te=new AbortController;let n=te.signal;Ca("u",a),de();let e=!1,i=!1,o=0,y=[{role:"user",content:a}];try{for(;;){let c=ai("th"),f=ai("a"),d=[],s=()=>fi({model:fn(),instructions:Mo,input:y,tools:Bo,previous_response_id:Ve,stream:!0,store:!0,service_tier:"fast",reasoning:nn?{effort:"high",summary:"auto"}:{effort:"high"}},n,(h)=>{if(h.type==="response.reasoning_summary_text.delta")c.add(h.delta);else if(h.type==="response.reasoning_summary_part.added")c.add(c.text()?`

`:"");else if(h.type==="response.output_text.delta")f.add(h.delta);else if(h.type==="response.output_item.done"&&h.item.type==="function_call")d.push(h.item)});if(Ve=(await s().catch((h)=>{let w=String(h?.message);if(nn&&/summar/i.test(w))return nn=!1,s();if(Ve!==null&&/previous_response|not found/i.test(w))return Ve=null,s();throw h})).id,d.length===0){if(i||e)break;e=!0,y=[{role:"user",content:"You stopped without calling submit. If the change is done, call submit now. If it cannot be done under the law, say so in one or two sentences."}];continue}y=[];for(let h of d){let w={};try{w=JSON.parse(h.arguments||"{}")}catch{}let T=await ci(h.name,w);if(Vo(h.name,w,T),h.name==="submit"&&T.startsWith("Accepted"))i=!0;y.push({type:"function_call_output",call_id:h.call_id,output:T}),o+=1}if(o>=kn){fe("bad","Stopped after "+kn+" tool calls. Send another prompt to go on.");break}}}catch(c){fe(n.aborted?"dim":"bad",n.aborted?"Stopped.":"Error: "+se(c))}xe=!1,te=null,de()}var Co=`
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
`;function S(a,n={},...e){let i=document.createElement(a);for(let[o,y]of Object.entries(n))i.setAttribute(o,y);return i.append(...e),i}var pn,Va,ue,X,wa,ce,Za,cn=!1,ve=()=>localStorage.getItem("bend.lab.key")??"",fn=()=>localStorage.getItem("bend.lab.model")??To;function Le(){Va.scrollTop=Va.scrollHeight}function Ca(a,n){let e=S("div",{class:a},n);return Va.append(e),Le(),e}var fe=(a,n)=>{if(Va!==void 0)Ca(a,n)};function ai(a){let n=null;return{add:(e)=>{if(n===null)n=Ca(a,"");n.append(e),Le()},text:()=>n?.textContent??""}}function Vo(a,n,e){let i=n.path??"",o=(c,f)=>S("pre",{class:c},f),y=(c,...f)=>S("details",{},S("summary",{},c),...f);if(a==="read_file")Ca("tc","read "+i);else if(a==="write_file")Ca("tc","write "+i).append(dn.includes(i)&&i!=="LAWS.bend"?y(e,o("",n.content)):o("err",e));else if(a==="edit_file")Ca("tc","edit "+i).append(e.startsWith("edited")?y(e,o("","- "+n.old.split(`
`).join(`
- `)+`
+ `+n.new.split(`
`).join(`
+ `))):o("err",e));else if(a==="submit"){let c=Ca("tc","submit");if(Ra===null)c.append(S("div",{class:"ok"},"✓ Accepted. The new game is live: play it above."));else{let f=S("a",{class:"bad"},"Your program broke the "+(Ra.game?"game":"law")+". Try again."),d=o("err",Ra.text);d.hidden=!0,f.onclick=()=>{d.hidden=!d.hidden,Le()},c.append(`
`,f,d)}}Le()}function de(){if(ce.replaceChildren(),xe){let e=S("a",{},"stop");e.onclick=()=>te?.abort(),ce.append(S("span",{},"working…"),e),X.disabled=!0;return}X.disabled=!1;let a=S("a",{title:"change the model"},fn());a.onclick=()=>{let e=prompt("OpenAI model id",fn());if(e)localStorage.setItem("bend.lab.model",e.trim()),de()};let n=S("a",{title:"change the key"},ve()?"key ····"+ve().slice(-4):"no key");n.onclick=()=>{Za.replaceChildren(S("span",{},"key"),wa),wa.focus()},ce.append(S("span",{},a," · thinking high · fast · ",n),S("span",{},"byok · your key stays in this browser"))}function uo(){let a=X.value.trim();if(a===""||xe)return;if(ve()===""){Za.replaceChildren(S("span",{},"key"),wa),wa.focus(),fe("dim","Paste your OpenAI API key first. It is kept in this browser only and sent to api.openai.com alone.");return}X.value="",X.style.height="",Ao(a)}function to(){document.head.append(S("style",{},Co)),ue=S("canvas");let a=S("a",{title:"close"},"×");a.onclick=()=>di(!1),X=S("textarea",{placeholder:"make the walls disappear",rows:"1"}),X.oninput=()=>{X.style.height="",X.style.height=Math.min(X.scrollHeight,150)+"px"},X.onkeydown=(o)=>{if(o.key==="Enter"&&!o.shiftKey)o.preventDefault(),uo();if(o.key==="Escape")X.blur()},ue.onclick=()=>X.blur(),wa=S("input",{type:"password",placeholder:"OpenAI API key, then Enter",autocomplete:"off"}),wa.onkeydown=(o)=>{if(o.key==="Enter")localStorage.setItem("bend.lab.key",wa.value.trim()),wa.value="",Za.replaceChildren(S("span",{},">"),X),de(),X.focus();else if(o.key==="Escape")Za.replaceChildren(S("span",{},">"),X),X.focus()},Za=S("div",{class:"box"},S("span",{},">"),X),ce=S("div",{class:"meta"}),Va=S("div",{class:"chat"}),pn=S("div",{id:"lab"},S("div",{class:"top"},S("div",{class:"hd"},S("span",{},S("b",{},"Winning Is Impossible")," · live demo"),a),ue,S("p",{class:"how"},S("b",{},"Grab the flag to win."),`
`,S("span",{class:"dim"},"WASD to move"),`

`,"Can't win? Prompt the AI below to ",S("b",{},"edit the game"),`.
You can ask `,S("i",{},"anything"),". ",S("b",{},"Bend")," guards it. Good luck!")),Va,S("div",{class:"in"},Za,ce));let n=S("div",{id:"page"}),e=S("div",{id:"pagein"});while(document.body.firstChild)e.append(document.body.firstChild);n.append(e),document.body.append(n,pn),document.addEventListener("keydown",(o)=>{if(!cn)return;let y=o.target;if(y===X||y===wa||o.metaKey||o.ctrlKey||o.altKey)return;let c=ro[o.key]??o.key;if(c.length!==1)return;if(So(c.toLowerCase().charCodeAt(0)))o.preventDefault()});let i=(o)=>{if(cn)Wo(ue,o);requestAnimationFrame(i)};requestAnimationFrame(i)}function di(a){let n=document.getElementById("page"),e=a?window.scrollY:n.scrollTop;if(cn=a,document.documentElement.classList.toggle("lab",a),a)n.scrollTop=e;else window.scrollTo(0,e);if(a)de()}async function ei(){let a=document.getElementById("try");if(a===null)return;to();let n=null,e=()=>{return n??=Oe("main.bend").then((i)=>{sn(new Ke(i.book)),di(!0)}),n.catch((i)=>fe("bad","the game did not compile: "+se(i))),n};if(a.addEventListener("click",(i)=>{i.preventDefault(),e()}),location.hash==="#lab")e()}if(typeof document<"u")if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ei);else ei();})();
