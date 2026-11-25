(()=>{var tu=0,Xl=1,eu=2;var ns=1,nu=2,qs=3,ti=0,De=1,ei=2,ni=0,Ys=1,ql=2,Yl=3,Zl=4,iu=5;var is=100,su=101,ru=102,au=103,ou=104,lu=200,cu=201,hu=202,uu=203,Jl=204,$l=205,du=206,fu=207,pu=208,mu=209,gu=210,_u=211,xu=212,vu=213,yu=214,no=0,io=1,so=2,Ps=3,ro=4,ao=5,oo=6,lo=7,Bo=0,Mu=1,Su=2,kn=0,Kl=1,Ql=2,jl=3,tc=4,ec=5,nc=6,sa=7;var ic=300,ki=301,ss=302,zo=303,ko=304,ra=306,Ls=1e3,$n=1001,co=1002,Te=1003,bu=1004;var aa=1005;var Ne=1006,Vo=1007;var Vi=1008;var Ze=1009,sc=1010,rc=1011,Zs=1012,Ho=1013,Vn=1014,In=1015,Hn=1016,Go=1017,Wo=1018,Js=1020,ac=35902,oc=35899,lc=1021,cc=1022,mn=1023,Kn=1026,Hi=1027,$s=1028,Xo=1029,Gi=1030,qo=1031;var Yo=1033,oa=33776,la=33777,ca=33778,ha=33779,Zo=35840,Jo=35841,$o=35842,Ko=35843,Qo=36196,jo=37492,t1=37496,e1=37488,n1=37489,ua=37490,i1=37491,s1=37808,r1=37809,a1=37810,o1=37811,l1=37812,c1=37813,h1=37814,u1=37815,d1=37816,f1=37817,p1=37818,m1=37819,g1=37820,_1=37821,x1=36492,v1=36494,y1=36495,M1=36283,S1=36284,da=36285,b1=36286;var Ar=2300,ho=2301,to=2302,Pl=2303,Ll=2400,Nl=2401,Ul=2402;var Eu=3200;var fa=0,wu=1,_i="",we="srgb",Rr="srgb-linear",Cr="linear",ue="srgb";var eo=7680;var Tu=519,Au=512,Ru=513,Cu=514,E1=515,Iu=516,Pu=517,w1=518,Lu=519,Nu=35044;var hc="300 es",zn=2e3,Ns=2001;function Mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){let i=Ir("canvas");return i.style.display="block",i}var bh={},Us=null;function uc(...i){let t="THREE."+i.shift();Us?Us("log",t,...i):console.log(t,...i)}function Du(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Du(i);let t="THREE."+i.shift();if(Us)Us("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Bt(...i){i=Du(i);let t="THREE."+i.shift();if(Us)Us("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Qi(...i){let t=i.join(" ");t in bh||(bh[t]=!0,zt(...i))}function Fu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ou={[no]:io,[so]:oo,[ro]:lo,[Ps]:ao,[io]:no,[oo]:so,[lo]:ro,[ao]:Ps},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rl=Math.PI/180,Pr=180/Math.PI;function Ks(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function bf(i,t){return(i%t+t)%t}function al(i,t,e){return(1-e)*i+e*t}function _r(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _c=class _c{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_c.prototype.isVector2=!0;var lt=_c,qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*M;m<0&&(h=-h,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);p=Math.sin(p*S)/A,o=Math.sin(o*S)/A,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+M*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+M*o;let S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xc=class xc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xc.prototype.isVector3=!0;var N=xc,ol=new N,Eh=new qe,vc=class vc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],S=s[1],A=s[4],y=s[7],w=s[2],b=s[5],R=s[8];return r[0]=a*M+o*S+l*w,r[3]=a*m+o*A+l*b,r[6]=a*p+o*y+l*R,r[1]=c*M+u*S+d*w,r[4]=c*m+u*A+d*b,r[7]=c*p+u*y+d*R,r[2]=h*M+f*S+g*w,r[5]=h*m+f*A+g*b,r[8]=h*p+f*y+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ll.makeScale(t,e)),this}rotate(t){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};vc.prototype.isMatrix3=!0;var Gt=vc,ll=new Gt,wh=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ef(){let i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:t,whitePoint:n,transfer:Cr,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:wh,fromXYZ:Th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var ee=Ef();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,uo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gs===void 0&&(gs=Ir("canvas")),gs.width=t.width,gs.height=t.height;let s=gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wf=0,Ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Ks(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cl(s[a].image)):r.push(cl(s[a]))}else r=cl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Tf=0,hl=new N,Ye=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=Ne,a=Vi,o=mn,l=Ze,c=i.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Ks(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=ic;Ye.DEFAULT_ANISOTROPY=1;var yc=class yc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,w=(p+1)/2,b=(u+h)/4,R=(d+M)/4,x=(g+m)/4;return A>y&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=R/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=x/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-M)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yc.prototype.isVector4=!0;var ye=yc,fo=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ne,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ye(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ne,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends fo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lr=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var po=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Te,this.minFilter=Te,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Oo=class Oo{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,M,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/_s.setFromMatrixColumn(t,0).length(),r=1/_s.setFromMatrixColumn(t,1).length(),a=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,M=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,M=c*d;e[0]=h+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,M=c*d;e[0]=h-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,M=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+M,e[1]=l*d,e[5]=M*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=M-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-M*d}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+M,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=M*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Rf)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ri.crossVectors(n,xn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ri.crossVectors(n,xn)),Ri.normalize(),La.crossVectors(xn,Ri),s[0]=Ri.x,s[4]=La.x,s[8]=xn.x,s[1]=Ri.y,s[5]=La.y,s[9]=xn.y,s[2]=Ri.z,s[6]=La.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],S=n[3],A=n[7],y=n[11],w=n[15],b=s[0],R=s[4],x=s[8],T=s[12],I=s[1],D=s[5],V=s[9],G=s[13],U=s[2],z=s[6],J=s[10],W=s[14],it=s[3],X=s[7],Q=s[11],et=s[15];return r[0]=a*b+o*I+l*U+c*it,r[4]=a*R+o*D+l*z+c*X,r[8]=a*x+o*V+l*J+c*Q,r[12]=a*T+o*G+l*W+c*et,r[1]=u*b+d*I+h*U+f*it,r[5]=u*R+d*D+h*z+f*X,r[9]=u*x+d*V+h*J+f*Q,r[13]=u*T+d*G+h*W+f*et,r[2]=g*b+M*I+m*U+p*it,r[6]=g*R+M*D+m*z+p*X,r[10]=g*x+M*V+m*J+p*Q,r[14]=g*T+M*G+m*W+p*et,r[3]=S*b+A*I+y*U+w*it,r[7]=S*R+A*D+y*z+w*X,r[11]=S*x+A*V+y*J+w*Q,r[15]=S*T+A*G+y*W+w*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],S=l*f-c*h,A=o*f-c*d,y=o*h-l*d,w=a*f-c*u,b=a*h-l*u,R=a*d-o*u;return e*(M*S-m*A+p*y)-n*(g*S-m*w+p*b)+s*(g*A-M*w+p*R)-r*(g*y-M*b+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],S=e*o-n*a,A=e*l-s*a,y=e*c-r*a,w=n*l-s*o,b=n*c-r*o,R=s*c-r*l,x=u*M-d*g,T=u*m-h*g,I=u*p-f*g,D=d*m-h*M,V=d*p-f*M,G=h*p-f*m,U=S*G-A*V+y*D+w*I-b*T+R*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/U;return t[0]=(o*G-l*V+c*D)*z,t[1]=(s*V-n*G-r*D)*z,t[2]=(M*R-m*b+p*w)*z,t[3]=(h*b-d*R-f*w)*z,t[4]=(l*I-a*G-c*T)*z,t[5]=(e*G-s*I+r*T)*z,t[6]=(m*y-g*R-p*A)*z,t[7]=(u*R-h*y+f*A)*z,t[8]=(a*V-o*I+c*x)*z,t[9]=(n*I-e*V-r*x)*z,t[10]=(g*b-M*y+p*S)*z,t[11]=(d*y-u*b-f*S)*z,t[12]=(o*T-a*D-l*x)*z,t[13]=(e*D-n*T+s*x)*z,t[14]=(M*A-g*w-m*S)*z,t[15]=(u*w-d*A+h*S)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,M=a*u,m=a*d,p=o*d,S=l*c,A=l*u,y=l*d,w=n.x,b=n.y,R=n.z;return s[0]=(1-(M+p))*w,s[1]=(f+y)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(h+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+A)*R,s[9]=(m-S)*R,s[10]=(1-(h+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let c=1/a,u=1/o,d=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,e.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=zn,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===zn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ns)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===zn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ns)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Oo.prototype.isMatrix4=!0;var ae=Oo,_s=new N,Dn=new ae,Af=new N(0,0,0),Rf=new N(1,1,1),Ri=new N,La=new N,xn=new N,Ah=new ae,Rh=new qe,cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cf=0,Ch=new N,xs=new qe,li=new ae,Na=new N,xr=new N,If=new N,Pf=new qe,Ih=new N(1,0,0),Ph=new N(0,1,0),Lh=new N(0,0,1),Nh={type:"added"},Lf={type:"removed"},vs={type:"childadded",child:null},ul={type:"childremoved",child:null},Pe=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new cn,n=new qe,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Gt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Na.copy(t):Na.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(xr,Na,this.up):li.lookAt(Na,xr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(li),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nh),vs.child=t,this.dispatchEvent(vs),vs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lf),ul.child=t,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nh),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,If),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new N(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nf={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=bf(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=dl(a,r,t+1/3),this.g=dl(a,r,t),this.b=dl(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return ee.workingToColorSpace(Qe.copy(this),t),Math.round(Kt(Qe.r*255,0,255))*65536+Math.round(Kt(Qe.g*255,0,255))*256+Math.round(Kt(Qe.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=we){ee.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Ua);let n=al(Ci.h,Ua.h,e),s=al(Ci.s,Ua.s,e),r=al(Ci.l,Ua.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Dt;Dt.NAMES=Bu;var Nr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ji=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new N,ci=new N,fl=new N,hi=new N,ys=new N,Ms=new N,Uh=new N,pl=new N,ml=new N,gl=new N,_l=new ye,xl=new ye,vl=new ye,Ni=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),ci.subVectors(n,e),fl.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(ci),l=Fn.dot(fl),c=ci.dot(ci),u=ci.dot(fl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return _l.setScalar(0),xl.setScalar(0),vl.setScalar(0),_l.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,n),vl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_l,r.x),a.addScaledVector(xl,r.y),a.addScaledVector(vl,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),ci.subVectors(t,e),Fn.cross(ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,n),Ms.subVectors(r,n),pl.subVectors(t,n);let l=ys.dot(pl),c=Ms.dot(pl);if(l<=0&&c<=0)return e.copy(n);ml.subVectors(t,s);let u=ys.dot(ml),d=Ms.dot(ml);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ys,a);gl.subVectors(t,r);let f=ys.dot(gl),g=Ms.dot(gl);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ms,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Uh.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Uh,o);let p=1/(m+M+h);return a=M*p,o=h*p,e.copy(n).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(t.matrixWorld),this.union(Da)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),Fa.subVectors(this.max,vr),Ss.subVectors(t.a,vr),bs.subVectors(t.b,vr),Es.subVectors(t.c,vr),Ii.subVectors(bs,Ss),Pi.subVectors(Es,bs),Yi.subVectors(Ss,Es);let e=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-Yi.z,Yi.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,Yi.z,0,-Yi.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-Yi.y,Yi.x,0];return!yl(e,Ss,bs,Es,Fa)||(e=[1,0,0,0,1,0,0,0,1],!yl(e,Ss,bs,Es,Fa))?!1:(Oa.crossVectors(Ii,Pi),e=[Oa.x,Oa.y,Oa.z],yl(e,Ss,bs,Es,Fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ui=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,Da=new jn,Ss=new N,bs=new N,Es=new N,Ii=new N,Pi=new N,Yi=new N,vr=new N,Fa=new N,Oa=new N,Zi=new N;function yl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zi.fromArray(i,r);let o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ce=new N,Ba=new lt,Uf=0,Ie=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nu,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_r(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_r(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_r(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_r(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ur=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dr=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},Df=new jn,yr=new N,Ml=new N,Ui=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Df.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yr.subVectors(t,this.center);let e=yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yr.copy(t.center).add(Ml)),this.expandByPoint(yr.copy(t.center).sub(Ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ff=0,Rn=new ae,Sl=new Pe,ws=new N,vn=new jn,Mr=new jn,ke=new N,Ue=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?Dr:Ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new me(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Mr.setFromBufferAttribute(o),this.morphTargetsRelative?(ke.addVectors(vn.min,Mr.min),vn.expandByPoint(ke),ke.addVectors(vn.max,Mr.max),vn.expandByPoint(ke)):(vn.expandByPoint(Mr.min),vn.expandByPoint(Mr.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ke.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(t,c),ke.add(ws)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new N,l[x]=new N;let c=new N,u=new N,d=new N,h=new lt,f=new lt,g=new lt,M=new N,m=new N;function p(x,T,I){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,I),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[x].add(M),o[T].add(M),o[I].add(M),l[x].add(m),l[T].add(m),l[I].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,T=S.length;x<T;++x){let I=S[x],D=I.start,V=I.count;for(let G=D,U=D+V;G<U;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let A=new N,y=new N,w=new N,b=new N;function R(x){w.fromBufferAttribute(s,x),b.copy(w);let T=o[x];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),y.crossVectors(b,T);let D=y.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,T=S.length;x<T;++x){let I=S[x],D=I.start,V=I.count;for(let G=D,U=D+V;G<U;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Ie(h,u,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bl=new N,Of=new N,Bf=new Gt,Bn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=bl.subVectors(n,e).cross(Of.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(bl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bf.getNormalMatrix(t),s=this.coplanarPoint(bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zf=0,pi=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Ys,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=$l,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var di=new N,El=new N,za=new N,ka=new N,Fr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){El.copy(t).add(e).multiplyScalar(.5),za.copy(e).sub(t).normalize(),ka.copy(this.origin).sub(El);let r=t.distanceTo(e)*.5,a=-this.direction.dot(za),o=ka.dot(this.direction),l=-ka.dot(za),c=ka.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let M=1/u;d*=M,h*=M,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(El).addScaledVector(za,h),f}intersectSphere(t,e){if(t.radius<0)return null;di.subVectors(t.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,S=n.y-a.y,A=n.z-a.z,y=Math.abs(l),w=Math.abs(c),b=Math.abs(u),R,x,T,I,D,V,G,U,z,J,W,it;if(y>=w&&y>=b?(T=l,V=d,z=g,it=p,l>=0?(R=c,x=u,I=h,D=f,G=M,U=m,J=S,W=A):(R=u,x=c,I=f,D=h,G=m,U=M,J=A,W=S)):w>=b?(T=c,V=h,z=M,it=S,c>=0?(R=u,x=l,I=f,D=d,G=m,U=g,J=A,W=p):(R=l,x=u,I=d,D=f,G=g,U=m,J=p,W=A)):(T=u,V=f,z=m,it=A,u>=0?(R=l,x=c,I=d,D=h,G=g,U=M,J=p,W=S):(R=c,x=l,I=h,D=d,G=M,U=g,J=S,W=p)),T===0)return null;let X=R/T,Q=x/T,et=1/T,It=I-X*V,Et=D-Q*V,oe=G-X*z,Qt=U-Q*z,se=J-X*it,Z=W-Q*it,j=se*Qt-Z*oe,_t=It*Z-Et*se,kt=oe*Et-Qt*It;if(s){if(j<0||_t<0||kt<0)return null}else if((j<0||_t<0||kt<0)&&(j>0||_t>0||kt>0))return null;let Mt=j+_t+kt;if(Mt===0)return null;let Vt=et*(j*V+_t*z+kt*it);return(Mt>0?Vt<0:Vt>0)?null:this.at(Vt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mi=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dh=new ae,Ji=new Fr,Va=new Ui,Fh=new N,Ha=new N,Ga=new N,Wa=new N,wl=new N,Xa=new N,Oh=new N,qa=new N,ne=class extends Pe{constructor(t=new Ue,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(wl.fromBufferAttribute(d,t),a?Xa.addScaledVector(wl,u):Xa.addScaledVector(wl.sub(e),u))}e.add(Xa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(Va.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Va,Fh)===null||Ji.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Dh.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(Dh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,w=A;y<w;y+=3){let b=o.getX(y),R=o.getX(y+1),x=o.getX(y+2);s=Ya(this,p,t,n,c,u,d,b,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let S=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=Ya(this,a,t,n,c,u,d,S,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,w=A;y<w;y+=3){let b=y,R=y+1,x=y+2;s=Ya(this,p,t,n,c,u,d,b,R,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let S=m,A=m+1,y=m+2;s=Ya(this,a,t,n,c,u,d,S,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function kf(i,t,e,n,s,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;qa.copy(o),qa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qa);return c<e.near||c>e.far?null:{distance:c,point:qa.clone(),object:i}}function Ya(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ha),i.getVertexPosition(l,Ga),i.getVertexPosition(c,Wa);let u=kf(i,t,e,n,Ha,Ga,Wa,Oh);if(u){let d=new N;Ni.getBarycoord(Oh,Ha,Ga,Wa,d),s&&(u.uv=Ni.getInterpolatedAttribute(s,o,l,c,d,new lt)),r&&(u.uv1=Ni.getInterpolatedAttribute(r,o,l,c,d,new lt)),a&&(u.normal=Ni.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new N,materialIndex:0};Ni.getNormal(Ha,Ga,Wa,h.normal),u.face=h,u.barycoord=d}return u}var Di=class extends Ye{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Te,u=Te,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Or=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ts=new ae,Bh=new ae,Za=[],zh=new jn,Vf=new ae,Sr=new ne,br=new Ui,Cn=class extends ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Or(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),zh.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(zh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),br.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Bh.multiplyMatrices(n,Ts),Sr.matrixWorld=Bh,Sr.raycast(t,Za);for(let a=0,o=Za.length;a<o;a++){let l=Za[a];l.instanceId=r,l.object=this,e.push(l)}Za.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Or(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(s*this.count),s,this.count,$s,In));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$i=new Ui,Hf=new lt(.5,.5),Ja=new N,Bs=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],S=r[12],A=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,f-u,p-g,w-S).normalize(),s[1].setComponents(c+a,f+u,p+g,w+S).normalize(),s[2].setComponents(c+o,f+d,p+M,w+A).normalize(),s[3].setComponents(c-o,f-d,p-M,w-A).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,p-m,w-y).normalize();else if(s[4].setComponents(c-l,f-h,p-m,w-y).normalize(),e===zn)s[5].setComponents(c+l,f+h,p+m,w+y).normalize();else if(e===Ns)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){$i.center.set(0,0,0);let e=Hf.distanceTo(t.center);return $i.radius=.7071067811865476+e,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ja.x=s.normal.x>0?t.max.x:t.min.x,Ja.y=s.normal.y>0?t.max.y:t.min.y,Ja.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Br=class extends Ye{constructor(t=[],e=ki,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gi=class extends Ye{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Fi=class extends Ye{constructor(t,e,n=Vn,s,r,a,o=Te,l=Te,c,u=Kn,d=1){if(u!==Kn&&u!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},mo=class extends Fi{constructor(t,e=Vn,n=ki,s,r,a=Te,o=Te,l,c=Kn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zr=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pn=class i extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(d,2));function g(M,m,p,S,A,y,w,b,R,x,T){let I=y/R,D=w/x,V=y/2,G=w/2,U=b/2,z=R+1,J=x+1,W=0,it=0,X=new N;for(let Q=0;Q<J;Q++){let et=Q*D-G;for(let It=0;It<z;It++){let Et=It*I-V;X[M]=Et*S,X[m]=et*A,X[p]=U,c.push(X.x,X.y,X.z),X[M]=0,X[m]=0,X[p]=b>0?1:-1,u.push(X.x,X.y,X.z),d.push(It/R),d.push(1-Q/x),W+=1}}for(let Q=0;Q<x;Q++)for(let et=0;et<R;et++){let It=h+et+z*Q,Et=h+et+z*(Q+1),oe=h+(et+1)+z*(Q+1),Qt=h+(et+1)+z*Q;l.push(It,Et,Qt),l.push(Et,oe,Qt),it+=6}o.addGroup(f,it,T),f+=it,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new ae;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zs=class extends yn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},go=class extends zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var kh=new N,Vh=new N,Tl=new dc,Al=new dc,Rl=new dc,_o=class extends yn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Vh.subVectors(s[0],s[1]).add(s[0]),c=Vh);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(kh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=kh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Tl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,M,m),Al.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,M,m),Rl.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Al.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Rl.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Tl.calc(l),Al.calc(l),Rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Gf(i,t){let e=1-i;return e*e*t}function Wf(i,t){return 2*(1-i)*i*t}function Xf(i,t){return i*i*t}function wr(i,t,e,n){return Gf(i,t)+Wf(i,e)+Xf(i,n)}function qf(i,t){let e=1-i;return e*e*e*t}function Yf(i,t){let e=1-i;return 3*e*e*i*t}function Zf(i,t){return 3*(1-i)*i*i*t}function Jf(i,t){return i*i*i*t}function Tr(i,t,e,n,s){return qf(i,t)+Yf(i,e)+Zf(i,n)+Jf(i,s)}var kr=class extends yn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Tr(t,s.x,r.x,a.x,o.x),Tr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xo=class extends yn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Tr(t,s.x,r.x,a.x,o.x),Tr(t,s.y,r.y,a.y,o.y),Tr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vr=class extends yn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends yn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends yn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(t,s.x,r.x,a.x),wr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends yn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wr(t,s.x,r.x,a.x),wr(t,s.y,r.y,a.y),wr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Hh(o,l.x,c.x,u.x,d.x),Hh(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},Dl=Object.freeze({__proto__:null,ArcCurve:go,CatmullRomCurve3:_o,CubicBezierCurve:kr,CubicBezierCurve3:xo,EllipseCurve:zs,LineCurve:Vr,LineCurve3:vo,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:yo,SplineCurve:Gr}),Mo=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}},Wr=class extends Mo{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Vr(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Hr(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new kr(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Gr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new zs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ks=class extends Wr{constructor(t){super(t),this.uuid=Ks(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Wr().fromJSON(s))}return this}};function $f(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=zu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=e0(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Xr(r,a,e,o,l,c,0),a}function zu(i,t,e,n,s){let r;if(s===d0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Gh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Gh(a/n|0,i[a],i[a+1],r);return r&&Vs(r,r.next)&&(Yr(r),r=r.next),r}function ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vs(e,e.next)||be(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&a0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Qf(i,n,s,r):Kf(i)){t.push(l.i,i.i,c.i),Yr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=jf(ts(i),t),Xr(i,t,e,n,s,r,2)):a===2&&t0(i,t,e,n,s,r):Xr(ts(i),t,e,n,s,r,1);break}}}function Kf(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&Er(s,o,r,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),M=Math.max(o,l,c),m=Math.max(u,d,h),p=Fl(f,g,t,e,n),S=Fl(M,m,t,e,n),A=i.prevZ,y=i.nextZ;for(;A&&A.z>=p&&y&&y.z<=S;){if(A.x>=f&&A.x<=M&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Er(o,u,l,d,c,h,A.x,A.y)&&be(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Er(o,u,l,d,c,h,y.x,y.y)&&be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=M&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&Er(o,u,l,d,c,h,A.x,A.y)&&be(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Er(o,u,l,d,c,h,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Vs(n,s)&&Vu(n,e,e.next,s)&&qr(n,s)&&qr(s,n)&&(t.push(n.i,e.i,s.i),Yr(e),Yr(e.next),e=i=s),e=e.next}while(e!==i);return ts(e)}function t0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&c0(a,o)){let l=Hu(a,o);a=ts(a,a.next),l=ts(l,l.next),Xr(a,t,e,n,s,r,0),Xr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function e0(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=zu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(l0(c))}s.sort(n0);for(let r=0;r<s.length;r++)e=i0(s[r],e);return e}function n0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function i0(i,t){let e=s0(i,t);if(!e)return t;let n=Hu(e,i);return ts(n,n.next),ts(e,e.next)}function s0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Vs(i,e))return e;do{if(Vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ku(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);qr(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&r0(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function r0(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function a0(i,t,e,n){let s=i;do s.z===0&&(s.z=Fl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,o0(s)}function o0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Fl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function l0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ku(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Er(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&ku(i,t,e,n,s,r,a,o)}function c0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!h0(i,t)&&(qr(i,t)&&qr(t,i)&&u0(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Vs(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vs(i,t){return i.x===t.x&&i.y===t.y}function Vu(i,t,e,n){let s=Ka(be(i,t,e)),r=Ka(be(i,t,n)),a=Ka(be(e,n,i)),o=Ka(be(e,n,t));return!!(s!==r&&a!==o||s===0&&$a(i,e,t)||r===0&&$a(i,n,t)||a===0&&$a(e,i,n)||o===0&&$a(e,t,n))}function $a(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ka(i){return i>0?1:i<0?-1:0}function h0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function u0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hu(i,t){let e=Ol(i.i,i.x,i.y),n=Ol(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gh(i,t,e,n){let s=Ol(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ol(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Bl=class{static triangulate(t,e,n=2){return $f(t,e,n)}},Ki=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Wh(t),Xh(n,t);let a=t.length;e.forEach(Wh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Xh(n,e[l]);let o=Bl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Wh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Zr=class i extends Ue{constructor(t=new ks([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:f0,A,y=!1,w,b,R,x;if(p){A=p.getSpacedPoints(u),y=!0,h=!1;let tt=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,tt),b=new N,R=new N,x=new N}h||(m=0,f=0,g=0,M=0);let T=o.extractPoints(c),I=T.shape,D=T.holes;if(!Ki.isClockWise(I)){I=I.reverse();for(let tt=0,st=D.length;tt<st;tt++){let rt=D[tt];Ki.isClockWise(rt)&&(D[tt]=rt.reverse())}}function G(tt){let rt=10000000000000001e-36,at=tt[0];for(let ht=1;ht<=tt.length;ht++){let Ft=ht%tt.length,Ut=tt[Ft],Ht=Ut.x-at.x,Wt=Ut.y-at.y,C=Ht*Ht+Wt*Wt,le=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(at.x),Math.abs(at.y)),jt=rt*le*le;if(C<=jt){tt.splice(Ft,1),ht--;continue}at=Ut}}G(I),D.forEach(G);let U=D.length,z=I;for(let tt=0;tt<U;tt++){let st=D[tt];I=I.concat(st)}function J(tt,st,rt){return st||Bt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(st,rt)}let W=I.length;function it(tt,st,rt){let at,ht,Ft,Ut=tt.x-st.x,Ht=tt.y-st.y,Wt=rt.x-tt.x,C=rt.y-tt.y,le=Ut*Ut+Ht*Ht,jt=Ut*C-Ht*Wt;if(Math.abs(jt)>Number.EPSILON){let E=Math.sqrt(le),_=Math.sqrt(Wt*Wt+C*C),F=st.x-Ht/E,k=st.y+Ut/E,q=rt.x-C/_,ot=rt.y+Wt/_,ct=((q-F)*C-(ot-k)*Wt)/(Ut*C-Ht*Wt);at=F+Ut*ct-tt.x,ht=k+Ht*ct-tt.y;let Y=at*at+ht*ht;if(Y<=2)return new lt(at,ht);Ft=Math.sqrt(Y/2)}else{let E=!1;Ut>Number.EPSILON?Wt>Number.EPSILON&&(E=!0):Ut<-Number.EPSILON?Wt<-Number.EPSILON&&(E=!0):Math.sign(Ht)===Math.sign(C)&&(E=!0),E?(at=-Ht,ht=Ut,Ft=Math.sqrt(le)):(at=Ut,ht=Ht,Ft=Math.sqrt(le/2))}return new lt(at/Ft,ht/Ft)}let X=[];for(let tt=0,st=z.length,rt=st-1,at=tt+1;tt<st;tt++,rt++,at++)rt===st&&(rt=0),at===st&&(at=0),X[tt]=it(z[tt],z[rt],z[at]);let Q=[],et,It=X.concat();for(let tt=0,st=U;tt<st;tt++){let rt=D[tt];et=[];for(let at=0,ht=rt.length,Ft=ht-1,Ut=at+1;at<ht;at++,Ft++,Ut++)Ft===ht&&(Ft=0),Ut===ht&&(Ut=0),et[at]=it(rt[at],rt[Ft],rt[Ut]);Q.push(et),It=It.concat(et)}let Et;if(m===0)Et=Ki.triangulateShape(z,D);else{let tt=[],st=[];for(let rt=0;rt<m;rt++){let at=rt/m,ht=f*Math.cos(at*Math.PI/2),Ft=g*Math.sin(at*Math.PI/2)+M;for(let Ut=0,Ht=z.length;Ut<Ht;Ut++){let Wt=J(z[Ut],X[Ut],Ft);_t(Wt.x,Wt.y,-ht),at===0&&tt.push(Wt)}for(let Ut=0,Ht=U;Ut<Ht;Ut++){let Wt=D[Ut];et=Q[Ut];let C=[];for(let le=0,jt=Wt.length;le<jt;le++){let E=J(Wt[le],et[le],Ft);_t(E.x,E.y,-ht),at===0&&C.push(E)}at===0&&st.push(C)}}Et=Ki.triangulateShape(tt,st)}let oe=Et.length,Qt=g+M;for(let tt=0;tt<W;tt++){let st=h?J(I[tt],It[tt],Qt):I[tt];y?(R.copy(w.normals[0]).multiplyScalar(st.x),b.copy(w.binormals[0]).multiplyScalar(st.y),x.copy(A[0]).add(R).add(b),_t(x.x,x.y,x.z)):_t(st.x,st.y,0)}for(let tt=1;tt<=u;tt++)for(let st=0;st<W;st++){let rt=h?J(I[st],It[st],Qt):I[st];y?(R.copy(w.normals[tt]).multiplyScalar(rt.x),b.copy(w.binormals[tt]).multiplyScalar(rt.y),x.copy(A[tt]).add(R).add(b),_t(x.x,x.y,x.z)):_t(rt.x,rt.y,d/u*tt)}for(let tt=m-1;tt>=0;tt--){let st=tt/m,rt=f*Math.cos(st*Math.PI/2),at=g*Math.sin(st*Math.PI/2)+M;for(let ht=0,Ft=z.length;ht<Ft;ht++){let Ut=J(z[ht],X[ht],at);_t(Ut.x,Ut.y,d+rt)}for(let ht=0,Ft=D.length;ht<Ft;ht++){let Ut=D[ht];et=Q[ht];for(let Ht=0,Wt=Ut.length;Ht<Wt;Ht++){let C=J(Ut[Ht],et[Ht],at);y?_t(C.x,C.y+A[u-1].y,A[u-1].x+rt):_t(C.x,C.y,d+rt)}}}se(),Z();function se(){let tt=s.length/3;if(h){let st=0,rt=W*st;for(let at=0;at<oe;at++){let ht=Et[at];kt(ht[2]+rt,ht[1]+rt,ht[0]+rt)}st=u+m*2,rt=W*st;for(let at=0;at<oe;at++){let ht=Et[at];kt(ht[0]+rt,ht[1]+rt,ht[2]+rt)}}else{for(let st=0;st<oe;st++){let rt=Et[st];kt(rt[2],rt[1],rt[0])}for(let st=0;st<oe;st++){let rt=Et[st];kt(rt[0]+W*u,rt[1]+W*u,rt[2]+W*u)}}n.addGroup(tt,s.length/3-tt,0)}function Z(){let tt=s.length/3,st=0;j(z,st),st+=z.length;for(let rt=0,at=D.length;rt<at;rt++){let ht=D[rt];j(ht,st),st+=ht.length}n.addGroup(tt,s.length/3-tt,1)}function j(tt,st){let rt=tt.length;for(;--rt>=0;){let at=rt,ht=rt-1;ht<0&&(ht=tt.length-1);for(let Ft=0,Ut=u+m*2;Ft<Ut;Ft++){let Ht=W*Ft,Wt=W*(Ft+1),C=st+at+Ht,le=st+ht+Ht,jt=st+ht+Wt,E=st+at+Wt;Mt(C,le,jt,E)}}}function _t(tt,st,rt){l.push(tt),l.push(st),l.push(rt)}function kt(tt,st,rt){Vt(tt),Vt(st),Vt(rt);let at=s.length/3,ht=S.generateTopUV(n,s,at-3,at-2,at-1);de(ht[0]),de(ht[1]),de(ht[2])}function Mt(tt,st,rt,at){Vt(tt),Vt(st),Vt(at),Vt(st),Vt(rt),Vt(at);let ht=s.length/3,Ft=S.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);de(Ft[0]),de(Ft[1]),de(Ft[3]),de(Ft[1]),de(Ft[2]),de(Ft[3])}function Vt(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function de(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return p0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dl[s.type]().fromJSON(s)),new i(n,t.options)}},f0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-d),new lt(h,1-g),new lt(M,1-p)]:[new lt(o,1-l),new lt(u,1-d),new lt(f,1-g),new lt(m,1-p)]}};function p0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Jr=class i extends Ue{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new N,h=new lt,f=new N,g=new N,M=new N,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(g)}for(let S=0;S<=e;S++){let A=n+S*u*s,y=Math.sin(A),w=Math.cos(A);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*y,d.y=t[b].y,d.z=t[b].x*w,a.push(d.x,d.y,d.z),h.x=S/e,h.y=b/(t.length-1),o.push(h.x,h.y);let R=l[3*b+0]*y,x=l[3*b+1],T=l[3*b+0]*w;c.push(R,x,T)}}for(let S=0;S<e;S++)for(let A=0;A<t.length-1;A++){let y=A+S*t.length,w=y,b=y+t.length,R=y+t.length+1,x=y+1;r.push(w,b,x),r.push(R,x,b)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Mn=class i extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<u;p++){let S=p*h-a;for(let A=0;A<c;A++){let y=A*d-r;g.push(y,-S,0),M.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let A=S+c*p,y=S+c*(p+1),w=S+1+c*(p+1),b=S+1+c*p;f.push(A,y,b),f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Hs=class i extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new N,h=new N,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let S=[],A=p/n,y=a+A*o,w=t*Math.cos(y),b=Math.sqrt(t*t-w*w),R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){let T=x/e,I=s+T*r;d.x=-b*Math.cos(I),d.y=w,d.z=b*Math.sin(I),g.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),m.push(T+R,1-A),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let A=u[p][S+1],y=u[p][S],w=u[p+1][S],b=u[p+1][S+1];(p!==0||a>0)&&f.push(A,y,b),(p!==n-1||l<Math.PI)&&f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(qh(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=rs(i[e]);for(let s in n)t[s]=n[s]}return t}function qh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function m0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var Gu={clone:rs,merge:je},g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=m0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},So=class extends Sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gs=class extends He{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var $r=class extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Bo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},bo=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Eo=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Oi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wo=class extends Oi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:r=t,o=2*e-n;break;case Ul:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=t,l=2*n-e;break;case Ul:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,p=-h*m+2*h*M-h*g,S=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*g+1,A=(-1-f)*m+(1.5+f)*M+.5*g,y=f*m-f*M;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+S*a[c+w]+A*a[l+w]+y*a[d+w];return r}},To=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Ao=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ro=class extends Oi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*h+g*2,S=d[p],A=d[p+1],y=t*h+g*2,w=u[y],b=u[y+1],R=v0(n,e,S,w,s);r[g]=Wu(R,M,A,b,m)}return r}};function Wu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function x0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function v0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Wu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=x0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Cl(t.settings)&&(n.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ar:e=this.InterpolantFactoryMethodDiscrete;break;case ho:e=this.InterpolantFactoryMethodLinear;break;case to:e=this.InterpolantFactoryMethodSmooth;break;case Pl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return to;case this.InterpolantFactoryMethodBezier:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Cl(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Sf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===to,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[h+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Cl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=ho;var Bi=class extends bn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Ar;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};Co.prototype.ValueTypeName="color";var Io=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};Io.prototype.ValueTypeName="number";var Po=class extends Oi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Kr=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends bn{constructor(t,e,n){super(t,e,n)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Ar;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};Lo.prototype.ValueTypeName="vector";var No=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xu=new No,Uo=class{constructor(t){this.manager=t!==void 0?t:Xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var es=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qr=class extends es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Il=new ae,Zh=new N,Jh=new N,Ws=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Ze,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),Jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Il,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ns||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qa=new N,ja=new qe,Jn=new N,jr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qa,ja,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ja,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qa,ja,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ja,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new N,$h=new lt,Kh=new lt,Ve=class extends jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,$h,Kh),e.subVectors(Kh,$h)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},zl=class extends Ws{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Pr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},ta=class extends es{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},kl=class extends Ws{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0}},ea=class extends es{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Xs=class extends jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vl=class extends Ws{constructor(){super(new Xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Vl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rs=-90,Cs=1,Do=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let a=new Ve(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let o=new Ve(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let l=new Ve(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fo=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var pc="\\[\\]\\.:\\/",y0=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",M0="[^"+pc.replace("\\.","")+"]",S0=/((?:WC+[\/:])*)/.source.replace("WC",mc),b0=/(WCOD+)?/.source.replace("WCOD",M0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),w0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),T0=new RegExp("^"+S0+b0+E0+w0+"$"),A0=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(y0,"")}static parseTrackName(t){let e=T0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);A0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Hl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kg=new Float32Array(1);var Qh=new ae,ia=class{constructor(t,e,n=0,s=1/0){this.ray=new Fr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(t,e=!0,n=[]){return Gl(t,this,n,e),n.sort(jh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Gl(t[s],this,n,e);return n.sort(jh),n}};function jh(i,t){return i.distance-t.distance}function Gl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Gl(r[a],t,e,!0)}}var Mc=class Mc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Mc.prototype.isMatrix2=!0;var Wl=Mc;function gc(i,t,e,n){let s=R0(n);switch(e){case lc:return i*t;case $s:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case Gi:return i*t*2/s.components*s.byteLength;case qo:return i*t*2/s.components*s.byteLength;case cc:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Yo:return i*t*4/s.components*s.byteLength;case oa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case $o:return Math.max(i,8)*Math.max(t,8)/2;case Qo:case jo:case e1:case n1:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case t1:case ua:case i1:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case s1:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case r1:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case a1:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case o1:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case l1:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case c1:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case h1:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case u1:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case d1:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case f1:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case p1:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case m1:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case g1:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _1:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case x1:case v1:case y1:return Math.ceil(i/4)*Math.ceil(t/4)*16;case M1:case S1:return Math.ceil(i/4)*Math.ceil(t/4)*8;case da:case b1:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function R0(i){switch(i){case Ze:case sc:return{byteLength:1,components:1};case Zs:case rc:case Hn:return{byteLength:2,components:1};case Go:case Wo:return{byteLength:2,components:4};case Vn:case Ho:case In:return{byteLength:4,components:1};case ac:case oc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function fd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function I0(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,d[h]=M)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,np=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,t2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,n2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,o2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,l2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,p2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,m2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,g2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,E2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,P2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:N0,alphamap_pars_fragment:U0,alphatest_fragment:D0,alphatest_pars_fragment:F0,aomap_fragment:O0,aomap_pars_fragment:B0,batching_pars_vertex:z0,batching_vertex:k0,begin_vertex:V0,beginnormal_vertex:H0,bsdfs:G0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:Y0,clipping_planes_pars_vertex:Z0,clipping_planes_vertex:J0,color_fragment:$0,color_pars_fragment:K0,color_pars_vertex:Q0,color_vertex:j0,common:tp,cube_uv_reflection_fragment:ep,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:ap,colorspace_fragment:op,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:bp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:_p,gradientmap_pars_fragment:xp,lightmap_pars_fragment:vp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:Mp,lights_pars_begin:Sp,lights_toon_fragment:Ep,lights_toon_pars_fragment:wp,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Rp,lights_physical_pars_fragment:Cp,lights_fragment_begin:Ip,lights_fragment_maps:Pp,lights_fragment_end:Lp,lightprobes_pars_fragment:Np,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Fp,logdepthbuf_vertex:Op,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:kp,map_particle_pars_fragment:Vp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Wp,morphcolor_vertex:Xp,morphnormal_vertex:qp,morphtarget_pars_vertex:Yp,morphtarget_vertex:Zp,normal_fragment_begin:Jp,normal_fragment_maps:$p,normal_pars_fragment:Kp,normal_pars_vertex:Qp,normal_vertex:jp,normalmap_pars_fragment:t2,clearcoat_normal_fragment_begin:e2,clearcoat_normal_fragment_maps:n2,clearcoat_pars_fragment:i2,iridescence_pars_fragment:s2,opaque_fragment:r2,packing:a2,premultiplied_alpha_fragment:o2,project_vertex:l2,dithering_fragment:c2,dithering_pars_fragment:h2,roughnessmap_fragment:u2,roughnessmap_pars_fragment:d2,shadowmap_pars_fragment:f2,shadowmap_pars_vertex:p2,shadowmap_vertex:m2,shadowmask_pars_fragment:g2,skinbase_vertex:_2,skinning_pars_vertex:x2,skinning_vertex:v2,skinnormal_vertex:y2,specularmap_fragment:M2,specularmap_pars_fragment:S2,tonemapping_fragment:b2,tonemapping_pars_fragment:E2,transmission_fragment:w2,transmission_pars_fragment:T2,uv_pars_fragment:A2,uv_pars_vertex:R2,uv_vertex:C2,worldpos_vertex:I2,background_vert:P2,background_frag:L2,backgroundCube_vert:N2,backgroundCube_frag:U2,cube_vert:D2,cube_frag:F2,depth_vert:O2,depth_frag:B2,distance_vert:z2,distance_frag:k2,equirect_vert:V2,equirect_frag:H2,linedashed_vert:G2,linedashed_frag:W2,meshbasic_vert:X2,meshbasic_frag:q2,meshlambert_vert:Y2,meshlambert_frag:Z2,meshmatcap_vert:J2,meshmatcap_frag:$2,meshnormal_vert:K2,meshnormal_frag:Q2,meshphong_vert:j2,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},gt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},si={basic:{uniforms:je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:je([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:je([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:je([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:je([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:je([gt.points,gt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:je([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:je([gt.common,gt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:je([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:je([gt.sprite,gt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:je([gt.common,gt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:je([gt.lights,gt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};si.physical={uniforms:je([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var T1={r:0,b:0,g:0},um=new ae,pd=new Gt;pd.set(-1,0,0,0,1,0,0,0,1);function dm(i,t,e,n,s,r){let a=new Dt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let y=S.backgroundBlurriness>0;A=t.get(A,y)}return A}function g(S){let A=!1,y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===ra)?(c===void 0&&(c=new ne(new pn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:rs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pd),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==ue,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ne(new Mn(2,2),new Sn({name:"BackgroundMaterial",uniforms:rs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(T1,fc(i)),e.buffers.color.setClear(T1.r,T1.g,T1.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:M,dispose:p}}function fm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(D,V,G,U,z){let J=!1,W=d(D,U,G,V);r!==W&&(r=W,c(r.object)),J=f(D,U,G,z),J&&g(D,U,G,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,y(D,V,G,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,V,G,U){let z=U.wireframe===!0,J=n[V.id];J===void 0&&(J={},n[V.id]=J);let W=D.isInstancedMesh===!0?D.id:0,it=J[W];it===void 0&&(it={},J[W]=it);let X=it[G.id];X===void 0&&(X={},it[G.id]=X);let Q=X[z];return Q===void 0&&(Q=h(l()),X[z]=Q),Q}function h(D){let V=[],G=[],U=[];for(let z=0;z<e;z++)V[z]=0,G[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:U,object:D,attributes:{},index:null}}function f(D,V,G,U){let z=r.attributes,J=V.attributes,W=0,it=G.getAttributes();for(let X in it)if(it[X].location>=0){let et=z[X],It=J[X];if(It===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(It=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(It=D.instanceColor)),et===void 0||et.attribute!==It||It&&et.data!==It.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function g(D,V,G,U){let z={},J=V.attributes,W=0,it=G.getAttributes();for(let X in it)if(it[X].location>=0){let et=J[X];et===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));let It={};It.attribute=et,et&&et.data&&(It.data=et.data),z[X]=It,W++}r.attributes=z,r.attributesNum=W,r.index=U}function M(){let D=r.newAttributes;for(let V=0,G=D.length;V<G;V++)D[V]=0}function m(D){p(D,0)}function p(D,V){let G=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;G[D]=1,U[D]===0&&(i.enableVertexAttribArray(D),U[D]=1),z[D]!==V&&(i.vertexAttribDivisor(D,V),z[D]=V)}function S(){let D=r.newAttributes,V=r.enabledAttributes;for(let G=0,U=V.length;G<U;G++)V[G]!==D[G]&&(i.disableVertexAttribArray(G),V[G]=0)}function A(D,V,G,U,z,J,W){W===!0?i.vertexAttribIPointer(D,V,G,z,J):i.vertexAttribPointer(D,V,G,U,z,J)}function y(D,V,G,U){M();let z=U.attributes,J=G.getAttributes(),W=V.defaultAttributeValues;for(let it in J){let X=J[it];if(X.location>=0){let Q=z[it];if(Q===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let et=Q.normalized,It=Q.itemSize,Et=t.get(Q);if(Et===void 0)continue;let oe=Et.buffer,Qt=Et.type,se=Et.bytesPerElement,Z=Qt===i.INT||Qt===i.UNSIGNED_INT||Q.gpuType===Ho;if(Q.isInterleavedBufferAttribute){let j=Q.data,_t=j.stride,kt=Q.offset;if(j.isInstancedInterleavedBuffer){for(let Mt=0;Mt<X.locationSize;Mt++)p(X.location+Mt,j.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Mt=0;Mt<X.locationSize;Mt++)m(X.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Mt=0;Mt<X.locationSize;Mt++)A(X.location+Mt,It/X.locationSize,Qt,et,_t*se,(kt+It/X.locationSize*Mt)*se,Z)}else{if(Q.isInstancedBufferAttribute){for(let j=0;j<X.locationSize;j++)p(X.location+j,Q.meshPerAttribute);D.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let j=0;j<X.locationSize;j++)m(X.location+j);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let j=0;j<X.locationSize;j++)A(X.location+j,It/X.locationSize,Qt,et,It*se,It/X.locationSize*j*se,Z)}}else if(W!==void 0){let et=W[it];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}S()}function w(){T();for(let D in n){let V=n[D];for(let G in V){let U=V[G];for(let z in U){let J=U[z];for(let W in J)u(J[W].object),delete J[W];delete U[z]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let V=n[D.id];for(let G in V){let U=V[G];for(let z in U){let J=U[z];for(let W in J)u(J[W].object),delete J[W];delete U[z]}}delete n[D.id]}function R(D){for(let V in n){let G=n[V];for(let U in G){let z=G[U];if(z[D.id]===void 0)continue;let J=z[D.id];for(let W in J)u(J[W].object),delete J[W];delete z[D.id]}}}function x(D){for(let V in n){let G=n[V],U=D.isInstancedMesh===!0?D.id:0,z=G[U];if(z!==void 0){for(let J in z){let W=z[J];for(let it in W)u(W[it].object),delete W[it];delete z[J]}delete G[U],Object.keys(G).length===0&&delete n[V]}}}function T(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:S}}function pm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===Hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ze&&R!==In&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:y,maxSamples:w,samples:b}}function gm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bn,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let S=r?0:n,A=S*4,y=p.clippingState||null;l.value=y,y=u(g,h,A,f);for(let w=0;w!==A;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=f;A!==M;++A,y+=4)a.copy(d[A]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var js=4,_m=6,xm=20,vm=256,pa=new Xs,qu=new Dt,Sc=null,bc=0,Ec=0,wc=!1,ym=new N,as=new N,er=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ym}=r;Sc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,bc,Ec),this._renderer.xr.enabled=wc,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Hn,format:mn,colorSpace:Rr,depthBuffer:!1},s=Yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mm(r)),this._blurMaterial=bm(r,t,e),this._ggxMaterial=Sm(r,t,e)}return s}_compileMaterial(t){let e=new ne(new Ue,t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,s,r){let l=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(qu),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new pn,new mi({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(qu),p=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));let w=this._cubeSize;Qs(s,y*w,A>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=S}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ki||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-js?n-g+js:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Qs(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,pa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Qs(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,pa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-js?s-this._lodMax+js:0),h=4*(this._cubeSize-u);Qs(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,pa)}};function Mm(i){let t=[],e=[],n=i,s=i-js+1+_m;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),M=new Float32Array(f*h*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,A=p>2?0:-1,y=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];g.set(y,f*h*p);for(let w=0;w<h;w++){let b=u[w*2]*2-1,R=u[w*2+1]*2-1;p===0?as.set(1,R,b):p===1?as.set(-b,1,-R):p===2?as.set(-b,R,1):p===3?as.set(-1,R,-b):p===4?as.set(-b,-1,R):as.set(b,R,-1),as.toArray(M,(p*h+w)*f)}}let m=new Ue;m.setAttribute("position",new Ie(g,f)),m.setAttribute("outputDirection",new Ie(M,f)),e.push(new ne(m,null)),n>js&&n--}return{lodMeshes:e,sizeLods:t}}function Yu(i,t,e){let n=new fn(i,t,e);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sm(i,t,e){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:I1(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function bm(i,t,e){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:xm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:I1(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Zu(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:I1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Ju(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:I1(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function I1(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var R1=class extends fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:ni});r.uniforms.tEquirect.value=e;let a=new ne(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Ne),new Do(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Em(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===zo||f===ko)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let M=new R1(g.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===zo||f===ko,M=f===ki||f===ss;if(g||M){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new er(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||M&&S&&l(S)?(n===null&&(n=new er(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===zo?h.mapping=ki:f===ko&&(h.mapping=ss),h}function l(h){let f=0,g=6;for(let M=0;M<g;M++)h[M]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function wm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Qi("WebGLRenderer: "+n+" extension not supported."),s}}}function Tm(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(f!==null){let S=f.array;M=f.version;for(let A=0,y=S.length;A<y;A+=3){let w=S[A+0],b=S[A+1],R=S[A+2];h.push(w,b,b,R,R,w)}}else{let S=g.array;M=g.version;for(let A=0,y=S.length/3-1;A<y;A+=3){let w=A+0,b=A+1,R=A+2;h.push(w,b,b,R,R,w)}}let m=new(g.count>=65535?Dr:Ur)(h,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Am(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=h[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Rm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,t,e){let n=new WeakMap,s=new ye;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*w*4*d),R=new Lr(b,y,w,d);R.type=In,R.needsUpdate=!0;let x=A*4;for(let I=0;I<d;I++){let D=m[I],V=p[I],G=S[I],U=y*w*4*I;for(let z=0;z<D.count;z++){let J=z*x;f===!0&&(s.fromBufferAttribute(D,z),b[U+J+0]=s.x,b[U+J+1]=s.y,b[U+J+2]=s.z,b[U+J+3]=0),g===!0&&(s.fromBufferAttribute(V,z),b[U+J+4]=s.x,b[U+J+5]=s.y,b[U+J+6]=s.z,b[U+J+7]=0),M===!0&&(s.fromBufferAttribute(G,z),b[U+J+8]=s.x,b[U+J+9]=s.y,b[U+J+10]=s.z,b[U+J+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:R,size:new lt(y,w)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Im(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Pm={[Kl]:"LINEAR_TONE_MAPPING",[Ql]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[tc]:"ACES_FILMIC_TONE_MAPPING",[nc]:"AGX_TONE_MAPPING",[sa]:"NEUTRAL_TONE_MAPPING",[ec]:"CUSTOM_TONE_MAPPING"};function Lm(i,t,e,n,s,r){let a=new fn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ue;c.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new me([0,2,0,0,2,0],2));let u=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ne(c,u),h=new Xs(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,p=null,S=[],A=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let b=0;b<S.length;b++){let R=S[b];R.setSize&&R.setSize(y,w)}},this.setEffects=function(y){S=y,A=S.length>0&&S[0].isRenderPass===!0;let w=a.width,b=a.height;S.length>0&&o===null&&(o=new fn(w,b,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new fn(w,b,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<S.length;R++){let x=S[R];x.setSize&&x.setSize(w,b)}},this.begin=function(y,w){if(M||y.toneMapping===kn&&S.length===0)return!1;if(p=w,w!==null){let b=w.width,R=w.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=kn,!0},this.hasRenderPass=function(){return A},this.end=function(y,w){y.toneMapping=m,M=!0;let b=a,R=o;for(let x=0;x<S.length;x++){let T=S[x];T.enabled!==!1&&(T.render(y,R,b,w),T.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},ee.getTransfer(f)===ue&&(u.defines.SRGB_TRANSFER="");let x=Pm[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var md=new Ye,Rc=new Fi(1,1),gd=new Lr,_d=new po,xd=new Br,$u=[],Ku=[],Qu=new Float32Array(16),ju=new Float32Array(9),td=new Float32Array(4);function nr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$u[s];if(r===void 0&&(r=new Float32Array(s),$u[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function P1(i,t){let e=Ku[t];e===void 0&&(e=new Int32Array(t),Ku[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function Om(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;td.set(n),i.uniformMatrix2fv(this.addr,!1,td),Oe(e,n)}}function Bm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;ju.set(n),i.uniformMatrix3fv(this.addr,!1,ju),Oe(e,n)}}function zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Qu.set(n),i.uniformMatrix4fv(this.addr,!1,Qu),Oe(e,n)}}function km(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function Wm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function Zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rc.compareFunction=e.isReversedDepthBuffer()?w1:E1,r=Rc):r=md,e.setTexture2D(t||r,s)}function Jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_d,s)}function $m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xd,s)}function Km(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gd,s)}function Qm(i){switch(i){case 5126:return Nm;case 35664:return Um;case 35665:return Dm;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return km;case 35667:case 35671:return Vm;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}function jm(i,t){i.uniform1fv(this.addr,t)}function t3(i,t){let e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function e3(i,t){let e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function n3(i,t){let e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function i3(i,t){let e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s3(i,t){let e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r3(i,t){let e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function a3(i,t){i.uniform1iv(this.addr,t)}function o3(i,t){i.uniform2iv(this.addr,t)}function l3(i,t){i.uniform3iv(this.addr,t)}function c3(i,t){i.uniform4iv(this.addr,t)}function h3(i,t){i.uniform1uiv(this.addr,t)}function u3(i,t){i.uniform2uiv(this.addr,t)}function d3(i,t){i.uniform3uiv(this.addr,t)}function f3(i,t){i.uniform4uiv(this.addr,t)}function p3(i,t,e){let n=this.cache,s=t.length,r=P1(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Rc:a=md;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function m3(i,t,e){let n=this.cache,s=t.length,r=P1(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_d,r[a])}function g3(i,t,e){let n=this.cache,s=t.length,r=P1(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||xd,r[a])}function _3(i,t,e){let n=this.cache,s=t.length,r=P1(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||gd,r[a])}function x3(i){switch(i){case 5126:return jm;case 35664:return t3;case 35665:return e3;case 35666:return n3;case 35674:return i3;case 35675:return s3;case 35676:return r3;case 5124:case 35670:return a3;case 35667:case 35671:return o3;case 35668:case 35672:return l3;case 35669:case 35673:return c3;case 5125:return h3;case 36294:return u3;case 36295:return d3;case 36296:return f3;case 35678:case 36198:case 36298:case 36306:case 35682:return p3;case 35679:case 36299:case 36307:return m3;case 35680:case 36300:case 36308:case 36293:return g3;case 36289:case 36303:case 36311:case 36292:return _3}}var Cc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qm(e.type)}},Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x3(e.type)}},Pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Tc=/(\w+)(\])?(\[|\.)?/g;function ed(i,t){i.seq.push(t),i.map[t.id]=t}function v3(i,t,e){let n=i.name,s=n.length;for(Tc.lastIndex=0;;){let r=Tc.exec(n),a=Tc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ed(e,c===void 0?new Cc(o,i,t):new Ic(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Pc(o),ed(e,d)),e=d}}}var tr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);v3(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var y3=37297,M3=0;function S3(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var id=new Gt;function b3(i){ee._getMatrix(id,ee.workingColorSpace,i);let t=`mat3( ${id.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Cr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+S3(i.getShaderSource(t),o)}else return r}function E3(i,t){let e=b3(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var w3={[Kl]:"Linear",[Ql]:"Reinhard",[jl]:"Cineon",[tc]:"ACESFilmic",[nc]:"AgX",[sa]:"Neutral",[ec]:"Custom"};function T3(i,t){let e=w3[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var A1=new N;function A3(){ee.getLuminanceCoefficients(A1);let i=A1.x.toFixed(4),t=A1.y.toFixed(4),e=A1.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R3(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function C3(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I3(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ga(i){return i!==""}function rd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ad(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var P3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(i){return i.replace(P3,N3)}var L3=new Map;function N3(i,t){let e=Jt[t];if(e===void 0){let n=L3.get(t);if(n!==void 0)e=Jt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lc(e)}var U3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(i){return i.replace(U3,D3)}function D3(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ld(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var F3={[ns]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function O3(i){return F3[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B3={[ki]:"ENVMAP_TYPE_CUBE",[ss]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function z3(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":B3[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var k3={[ss]:"ENVMAP_MODE_REFRACTION"};function V3(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":k3[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H3={[Bo]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function G3(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":H3[i.combine]||"ENVMAP_BLENDING_NONE"}function W3(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function X3(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=O3(e),c=z3(e),u=V3(e),d=G3(e),h=W3(e),f=R3(e),g=C3(r),M=s.createProgram(),m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(m=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[ld(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==kn?T3("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,E3("linearToOutputTexel",e.outputColorSpace),A3(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ga).join(`
`)),a=Lc(a),a=rd(a,e),a=ad(a,e),o=Lc(o),o=rd(o,e),o=ad(o,e),a=od(a),o=od(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=S+m+a,y=S+p+o,w=nd(s,s.VERTEX_SHADER,A),b=nd(s,s.FRAGMENT_SHADER,y);s.attachShader(M,w),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(D){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(w)||"",U=s.getShaderInfoLog(b)||"",z=V.trim(),J=G.trim(),W=U.trim(),it=!0,X=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,w,b);else{let Q=sd(s,w,"vertex"),et=sd(s,b,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+Q+`
`+et)}else z!==""?zt("WebGLProgram: Program Info Log:",z):(J===""||W==="")&&(X=!1);X&&(D.diagnostics={runnable:it,programLog:z,vertexShader:{log:J,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(b),x=new tr(s,M),T=I3(s,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,y3)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M3++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=b,this}var q3=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uc(t),e.set(t,n)),n}},Uc=class{constructor(t){this.id=q3++,this.code=t,this.usedTimes=0}};function Y3(i){return i===Gi||i===ua||i===da}function Z3(i,t,e,n,s,r){let a=new Fs,o=new Nc,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,T,I,D,V,G){let U=D.fog,z=V.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,it=t.get(x.envMap||J,W),X=it&&it.mapping===ra?it.image.height:null,Q=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,It=et!==void 0?et.length:0,Et=0;z.morphAttributes.position!==void 0&&(Et=1),z.morphAttributes.normal!==void 0&&(Et=2),z.morphAttributes.color!==void 0&&(Et=3);let oe,Qt,se,Z;if(Q){let ge=si[Q];oe=ge.vertexShader,Qt=ge.fragmentShader}else{oe=x.vertexShader,Qt=x.fragmentShader;let ge=o.getVertexShaderStage(x),ce=o.getFragmentShaderStage(x);o.update(x,ge,ce),se=ge.id,Z=ce.id}let j=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),kt=V.isInstancedMesh===!0,Mt=V.isBatchedMesh===!0,Vt=!!x.map,de=!!x.matcap,tt=!!it,st=!!x.aoMap,rt=!!x.lightMap,at=!!x.bumpMap&&x.wireframe===!1,ht=!!x.normalMap,Ft=!!x.displacementMap,Ut=!!x.emissiveMap,Ht=!!x.metalnessMap,Wt=!!x.roughnessMap,C=x.anisotropy>0,le=x.clearcoat>0,jt=x.dispersion>0,E=x.retroreflectivity>0,_=x.iridescence>0,F=x.sheen>0,k=x.transmission>0,q=C&&!!x.anisotropyMap,ot=le&&!!x.clearcoatMap,ct=le&&!!x.clearcoatNormalMap,Y=le&&!!x.clearcoatRoughnessMap,K=_&&!!x.iridescenceMap,ut=_&&!!x.iridescenceThicknessMap,Pt=F&&!!x.sheenColorMap,mt=F&&!!x.sheenRoughnessMap,dt=!!x.specularMap,Lt=!!x.specularColorMap,Ot=!!x.specularIntensityMap,Xt=k&&!!x.transmissionMap,L=k&&!!x.thicknessMap,ft=!!x.gradientMap,$=!!x.alphaMap,pt=x.alphaTest>0,yt=!!x.alphaHash,nt=!!x.extensions,Nt=kn;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Rt={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:oe,fragmentShader:Qt,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&V._colorsTexture!==null,instancing:kt,instancingColor:kt&&V.instanceColor!==null,instancingMorph:kt&&V.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Vt,matcap:de,envMap:tt,envMapMode:tt&&it.mapping,envMapCubeUVHeight:X,aoMap:st,lightMap:rt,bumpMap:at,normalMap:ht,displacementMap:Ft,emissiveMap:Ut,normalMapObjectSpace:ht&&x.normalMapType===wu,normalMapTangentSpace:ht&&x.normalMapType===fa,packedNormalMap:ht&&x.normalMapType===fa&&Y3(x.normalMap.format),metalnessMap:Ht,roughnessMap:Wt,anisotropy:C,anisotropyMap:q,clearcoat:le,clearcoatMap:ot,clearcoatNormalMap:ct,clearcoatRoughnessMap:Y,dispersion:jt,retroreflection:E,iridescence:_,iridescenceMap:K,iridescenceThicknessMap:ut,sheen:F,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:dt,specularColorMap:Lt,specularIntensityMap:Ot,transmission:k,transmissionMap:Xt,thicknessMap:L,gradientMap:ft,opaque:x.transparent===!1&&x.blending===Ys&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:pt,alphaHash:yt,combine:x.combine,mapUv:Vt&&g(x.map.channel),aoMapUv:st&&g(x.aoMap.channel),lightMapUv:rt&&g(x.lightMap.channel),bumpMapUv:at&&g(x.bumpMap.channel),normalMapUv:ht&&g(x.normalMap.channel),displacementMapUv:Ft&&g(x.displacementMap.channel),emissiveMapUv:Ut&&g(x.emissiveMap.channel),metalnessMapUv:Ht&&g(x.metalnessMap.channel),roughnessMapUv:Wt&&g(x.roughnessMap.channel),anisotropyMapUv:q&&g(x.anisotropyMap.channel),clearcoatMapUv:ot&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(x.sheenRoughnessMap.channel),specularMapUv:dt&&g(x.specularMap.channel),specularColorMapUv:Lt&&g(x.specularColorMap.channel),specularIntensityMapUv:Ot&&g(x.specularIntensityMap.channel),transmissionMapUv:Xt&&g(x.transmissionMap.channel),thicknessMapUv:L&&g(x.thicknessMap.channel),alphaMapUv:$&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ht||C),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!z.attributes.uv&&(Vt||$),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&ht===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Vt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Ut&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ei,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)T.push(I),T.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let T=f[x.type],I;if(T){let D=si[T];I=Gu.clone(D.uniforms)}else I=x.uniforms;return I}function y(x,T){let I=u.get(T);return I!==void 0?++I.usedTimes:(I=new X3(i,T,x,s),c.push(I),u.set(T,I)),I}function w(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:R}}function J3(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $3(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,M,m,p){let S=i[t];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},i[t]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=M,S.renderOrder=h.renderOrder,S.z=m,S.group=p),t++,S}function l(h,f,g,M,m,p,S){S.reversedDepth===!0&&(m=-m);let A=o(h,f,g,M,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(h,f,g,M,m,p){let S=o(h,f,g,M,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function u(h,f){e.length>1&&e.sort(h||$3),n.length>1&&n.sort(f||cd),s.length>1&&s.sort(f||cd)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function K3(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new hd,i.set(n,[a])):s>=r.length?(a=new hd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Dt};break;case"SpotLight":e={position:new N,direction:new N,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function j3(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tg=0;function eg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ng(i){let t=new Q3,e=j3(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ae,a=new ae;function o(c){let u=0,d=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,S=0,A=0,y=0,w=0,b=0,R=0,x=0,T=0,I=0;c.sort(eg);for(let V=0,G=c.length;V<G;V++){let U=c[V],z=U.color,J=U.intensity,W=U.distance,it=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Gi?it=U.shadow.map.texture:it=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=z.r*J,d+=z.g*J,h+=z.b*J;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],J);I++}else if(U.isSunLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,et=e.get(U);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=et,n.sunShadowMap[g]=it;let It=Q.getViewportCount();for(let Et=0;Et<It;Et++)n.sunShadowMatrix[M+Et]=Q.getMatrix(Et),n.sunShadowCascade[M+Et]=Q._cascadeData[Et];M+=It,g++}n.sun[f]=X,f++}else if(U.isDirectionalLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let Q=U.shadow,et=e.get(U);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=it,n.directionalShadowMatrix[m]=U.shadow.matrix,w++}n.directional[m]=X,m++}else if(U.isSpotLight){let X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(z).multiplyScalar(J),X.distance=W,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[S]=X;let Q=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,Q.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[S]=Q.matrix,U.castShadow){let et=e.get(U);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,n.spotShadow[S]=et,n.spotShadowMap[S]=it,R++}S++}else if(U.isRectAreaLight){let X=t.get(U);X.color.copy(z).multiplyScalar(J),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[A]=X,A++}else if(U.isPointLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){let Q=U.shadow,et=e.get(U);et.shadowIntensity=Q.intensity,et.shadowBias=Q.bias,et.shadowNormalBias=Q.normalBias,et.shadowRadius=Q.radius,et.shadowMapSize=Q.mapSize,et.shadowCameraNear=Q.camera.near,et.shadowCameraFar=Q.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=it,n.pointShadowMatrix[p]=U.shadow.matrix,b++}n.point[p]=X,p++}else if(U.isHemisphereLight){let X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(J),X.groundColor.copy(U.groundColor).multiplyScalar(J),n.hemi[y]=X,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==R||D.numSpotMaps!==x||D.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=R,D.numSpotMaps=x,D.numLightProbes=I,n.version=tg++)}function l(c,u){let d=0,h=0,f=0,g=0,M=0,m=0,p=u.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let y=c[S];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(y.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let w=n.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function ud(i){let t=new ng(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ig(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ud(i),t.set(s,[o])):r>=a.length?(o=new ud(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ag=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],og=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],dd=new ae,ma=new N,Ac=new N;function lg(i,t,e){let n=new Bs,s=new lt,r=new lt,a=new ye,o=new bo,l=new Eo,c={},u=e.maxTextureSize,d={[ti]:De,[De]:ti,[ei]:ei},h=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ne(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let p=this.type;this.render=function(b,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===nu&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let T=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ni),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let G=p!==this.type;G&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=b.length;U<z;U++){let J=b[U],W=J.shadow;if(W===void 0){zt("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let it=W.getFrameExtents();s.multiply(it),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,W.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===qs){if(J.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new fn(s.x,s.y,{format:Gi,type:Hn,minFilter:Ne,magFilter:Ne,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new Fi(s.x,s.y,In),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=Kn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Te,W.map.depthTexture.magFilter=Te}else J.isPointLight?(W.map=new R1(s.x),W.map.depthTexture=new mo(s.x,Vn)):(W.map=new fn(s.x,s.y),W.map.depthTexture=new Fi(s.x,s.y,Vn)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=Kn,this.type===ns?(W.map.depthTexture.compareFunction=X?w1:E1,W.map.depthTexture.minFilter=Ne,W.map.depthTexture.magFilter=Ne):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Te,W.map.depthTexture.magFilter=Te);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let Q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,x);for(let et=0;et<Q;et++){let It=W.getCamera(et);if(J.isPointLight){let Et=W.camera,oe=W.matrix,Qt=J.distance||Et.far;Qt!==Et.far&&(Et.far=Qt,Et.updateProjectionMatrix()),ma.setFromMatrixPosition(J.matrixWorld),Et.position.copy(ma),Ac.copy(Et.position),Ac.add(ag[et]),Et.up.copy(og[et]),Et.lookAt(Ac),Et.updateMatrixWorld(),oe.makeTranslation(-ma.x,-ma.y,-ma.z),dd.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),W._frustum.setFromProjectionMatrix(dd,Et.coordinateSystem,Et.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,et),i.clear();else{et===0&&(i.setRenderTarget(W.map),i.clear());let Et=W.getViewport(et);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),V.viewport(a)}n=W.getFrustum(et),y(R,x,It,J,this.type)}W.isPointLightShadow!==!0&&this.type===qs&&S(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,I,D)};function S(b,R){let x=t.update(M);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new fn(s.x,s.y,{format:Gi,type:Hn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,x,h,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,x,f,M,null)}function A(b,R,x,T){let I=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)I=D;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let V=I.uuid,G=R.uuid,U=c[V];U===void 0&&(U={},c[V]=U);let z=U[G];z===void 0&&(z=I.clone(),U[G]=z,R.addEventListener("dispose",w)),I=z}if(I.visible=R.visible,I.wireframe=R.wireframe,T===qs?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let V=i.properties.get(I);V.light=x}return I}function y(b,R,x,T,I){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===qs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let G=t.update(b),U=b.material;if(Array.isArray(U)){let z=G.groups;for(let J=0,W=z.length;J<W;J++){let it=z[J],X=U[it.materialIndex];if(X&&X.visible){let Q=A(b,X,T,I);b.onBeforeShadow(i,b,R,x,G,Q,it),i.renderBufferDirect(x,null,G,Q,b,it),b.onAfterShadow(i,b,R,x,G,Q,it)}}}else if(U.visible){let z=A(b,U,T,I);b.onBeforeShadow(i,b,R,x,G,z,null),i.renderBufferDirect(x,null,G,z,b,null),b.onAfterShadow(i,b,R,x,G,z,null)}}let V=b.children;for(let G=0,U=V.length;G<U;G++)y(V[G],R,x,T,I)}function w(b){b.target.removeEventListener("dispose",w);for(let x in c){let T=c[x],I=b.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function cg(i,t){function e(){let L=!1,ft=new ye,$=null,pt=new ye(0,0,0,0);return{setMask:function(yt){$!==yt&&!L&&(i.colorMask(yt,yt,yt,yt),$=yt)},setLocked:function(yt){L=yt},setClear:function(yt,nt,Nt,Rt,ge){ge===!0&&(yt*=Rt,nt*=Rt,Nt*=Rt),ft.set(yt,nt,Nt,Rt),pt.equals(ft)===!1&&(i.clearColor(yt,nt,Nt,Rt),pt.copy(ft))},reset:function(){L=!1,$=null,pt.set(-1,0,0,0)}}}function n(){let L=!1,ft=!1,$=null,pt=null,yt=null;return{setReversed:function(nt){if(ft!==nt){let Nt=t.get("EXT_clip_control");nt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ft=nt;let Rt=yt;yt=null,this.setClear(Rt)}},getReversed:function(){return ft},setTest:function(nt){nt?j(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(nt){$!==nt&&!L&&(i.depthMask(nt),$=nt)},setFunc:function(nt){if(ft&&(nt=Ou[nt]),pt!==nt){switch(nt){case no:i.depthFunc(i.NEVER);break;case io:i.depthFunc(i.ALWAYS);break;case so:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case ro:i.depthFunc(i.EQUAL);break;case ao:i.depthFunc(i.GEQUAL);break;case oo:i.depthFunc(i.GREATER);break;case lo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=nt}},setLocked:function(nt){L=nt},setClear:function(nt){yt!==nt&&(yt=nt,ft&&(nt=1-nt),i.clearDepth(nt))},reset:function(){L=!1,$=null,pt=null,yt=null,ft=!1}}}function s(){let L=!1,ft=null,$=null,pt=null,yt=null,nt=null,Nt=null,Rt=null,ge=null;return{setTest:function(ce){L||(ce?j(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ce){ft!==ce&&!L&&(i.stencilMask(ce),ft=ce)},setFunc:function(ce,Un,Yn){($!==ce||pt!==Un||yt!==Yn)&&(i.stencilFunc(ce,Un,Yn),$=ce,pt=Un,yt=Yn)},setOp:function(ce,Un,Yn){(nt!==ce||Nt!==Un||Rt!==Yn)&&(i.stencilOp(ce,Un,Yn),nt=ce,Nt=Un,Rt=Yn)},setLocked:function(ce){L=ce},setClear:function(ce){ge!==ce&&(i.clearStencil(ce),ge=ce)},reset:function(){L=!1,ft=null,$=null,pt=null,yt=null,nt=null,Nt=null,Rt=null,ge=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],M=null,m=!1,p=null,S=null,A=null,y=null,w=null,b=null,R=null,x=new Dt(0,0,0),T=0,I=!1,D=null,V=null,G=null,U=null,z=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=it>=1):X.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=it>=2);let Q=null,et={},It=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),oe=new ye().fromArray(It),Qt=new ye().fromArray(Et);function se(L,ft,$,pt){let yt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(L,nt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<$;Nt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(ft+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return nt}let Z={};Z[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Ps),at(!1),ht(Xl),j(i.CULL_FACE),st(ni);function j(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function _t(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function kt(L,ft){return h[L]!==ft?(i.bindFramebuffer(L,ft),h[L]=ft,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Mt(L,ft){let $=g,pt=!1;if(L){$=f.get(ft),$===void 0&&($=[],f.set(ft,$));let yt=L.textures;if($.length!==yt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Nt=yt.length;nt<Nt;nt++)$[nt]=i.COLOR_ATTACHMENT0+nt;$.length=yt.length,pt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,pt=!0);pt&&i.drawBuffers($)}function Vt(L){return M!==L?(i.useProgram(L),M=L,!0):!1}let de={[is]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};de[au]=i.MIN,de[ou]=i.MAX;let tt={[lu]:i.ZERO,[cu]:i.ONE,[hu]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[du]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[xu]:i.ONE_MINUS_CONSTANT_COLOR,[vu]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function st(L,ft,$,pt,yt,nt,Nt,Rt,ge,ce){if(L===ni){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(j(i.BLEND),m=!0),L!==iu){if(L!==p||ce!==I){if((S!==is||w!==is)&&(i.blendEquation(i.FUNC_ADD),S=is,w=is),ce)switch(L){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Bt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",L);break}A=null,y=null,b=null,R=null,x.set(0,0,0),T=0,p=L,I=ce}return}yt=yt||ft,nt=nt||$,Nt=Nt||pt,(ft!==S||yt!==w)&&(i.blendEquationSeparate(de[ft],de[yt]),S=ft,w=yt),($!==A||pt!==y||nt!==b||Nt!==R)&&(i.blendFuncSeparate(tt[$],tt[pt],tt[nt],tt[Nt]),A=$,y=pt,b=nt,R=Nt),(Rt.equals(x)===!1||ge!==T)&&(i.blendColor(Rt.r,Rt.g,Rt.b,ge),x.copy(Rt),T=ge),p=L,I=!1}function rt(L,ft){L.side===ei?_t(i.CULL_FACE):j(i.CULL_FACE);let $=L.side===De;ft&&($=!$),at($),L.blending===Ys&&L.transparent===!1?st(ni):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let pt=L.stencilWrite;o.setTest(pt),pt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(L){D!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),D=L)}function ht(L){L!==tu?(j(i.CULL_FACE),L!==V&&(L===Xl?i.cullFace(i.BACK):L===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),V=L}function Ft(L){L!==G&&(W&&i.lineWidth(L),G=L)}function Ut(L,ft,$){L?(j(i.POLYGON_OFFSET_FILL),(U!==ft||z!==$)&&(U=ft,z=$,a.getReversed()&&(ft=-ft),i.polygonOffset(ft,$))):_t(i.POLYGON_OFFSET_FILL)}function Ht(L){L?j(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function Wt(L){L===void 0&&(L=i.TEXTURE0+J-1),Q!==L&&(i.activeTexture(L),Q=L)}function C(L,ft,$){$===void 0&&(Q===null?$=i.TEXTURE0+J-1:$=Q);let pt=et[$];pt===void 0&&(pt={type:void 0,texture:void 0},et[$]=pt),(pt.type!==L||pt.texture!==ft)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(L,ft||Z[L]),pt.type=L,pt.texture=ft)}function le(){let L=et[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function _(){try{i.texSubImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function ot(){try{i.texStorage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function ct(){try{i.texStorage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Bt("WebGLState:",L)}}function K(){try{i.texImage3D(...arguments)}catch(L){Bt("WebGLState:",L)}}function ut(L){return d[L]!==void 0?d[L]:i.getParameter(L)}function Pt(L,ft){d[L]!==ft&&(i.pixelStorei(L,ft),d[L]=ft)}function mt(L){oe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function dt(L){Qt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Qt.copy(L))}function Lt(L,ft){let $=c.get(ft);$===void 0&&($=new WeakMap,c.set(ft,$));let pt=$.get(L);pt===void 0&&(pt=i.getUniformBlockIndex(ft,L.name),$.set(L,pt))}function Ot(L,ft){let pt=c.get(ft).get(L);l.get(ft)!==pt&&(i.uniformBlockBinding(ft,pt,L.__bindingPointIndex),l.set(ft,pt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Q=null,et={},h={},f=new WeakMap,g=[],M=null,m=!1,p=null,S=null,A=null,y=null,w=null,b=null,R=null,x=new Dt(0,0,0),T=0,I=!1,D=null,V=null,G=null,U=null,z=null,oe.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:_t,bindFramebuffer:kt,drawBuffers:Mt,useProgram:Vt,setBlending:st,setMaterial:rt,setFlipSided:at,setCullFace:ht,setLineWidth:Ft,setPolygonOffset:Ut,setScissorTest:Ht,activeTexture:Wt,bindTexture:C,unbindTexture:le,compressedTexImage2D:jt,compressedTexImage3D:E,texImage2D:Y,texImage3D:K,pixelStorei:Pt,getParameter:ut,updateUBOMapping:Lt,uniformBlockBinding:Ot,texStorage2D:ot,texStorage3D:ct,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:q,scissor:mt,viewport:dt,reset:Xt}}function hg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,_){return g?new OffscreenCanvas(E,_):Ir("canvas")}function m(E,_,F){let k=1,q=jt(E);if((q.width>F||q.height>F)&&(k=F/Math.max(q.width,q.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ot=Math.floor(k*q.width),ct=Math.floor(k*q.height);h===void 0&&(h=M(ot,ct));let Y=_?M(ot,ct):h;return Y.width=ot,Y.height=ct,Y.getContext("2d").drawImage(E,0,0,ot,ct),zt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ot+"x"+ct+")."),Y}else return"data"in E&&zt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),E;return E}function p(E){return E.generateMipmaps}function S(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,_,F,k,q,ot=!1){if(E!==null){if(i[E]!==void 0)return i[E];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ct;k&&(ct=t.get("EXT_texture_norm16"),ct||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&ct&&(Y=ct.R16_EXT),F===i.SHORT&&ct&&(Y=ct.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&ct&&(Y=ct.RG16_EXT),F===i.SHORT&&ct&&(Y=ct.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&ct&&(Y=ct.RGB16_EXT),F===i.SHORT&&ct&&(Y=ct.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let K=ot?Cr:ee.getTransfer(q);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=K===ue?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ct&&(Y=ct.RGBA16_EXT),F===i.SHORT&&ct&&(Y=ct.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(E,_){let F;return E?_===null||_===Vn||_===Js?F=i.DEPTH24_STENCIL8:_===In?F=i.DEPTH32F_STENCIL8:_===Zs&&(F=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===Js?F=i.DEPTH_COMPONENT24:_===In?F=i.DEPTH_COMPONENT32F:_===Zs&&(F=i.DEPTH_COMPONENT16),F}function b(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Te&&E.minFilter!==Ne?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function R(E){let _=E.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(E){let _=E.target;_.removeEventListener("dispose",x),D(_)}function T(E){let _=n.get(E);if(_.__webglInit===void 0)return;let F=E.source,k=f.get(F);if(k){let q=k[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&I(E),Object.keys(k).length===0&&f.delete(F)}n.remove(E)}function I(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let F=E.source,k=f.get(F);delete k[_.__cacheKey],a.memory.textures--}function D(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let q=0;q<_.__webglFramebuffer[k].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[k][q]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=E.textures;for(let k=0,q=F.length;k<q;k++){let ot=n.get(F[k]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(E)}let V=0;function G(){V=0}function U(){return V}function z(E){V=E}function J(){let E=V;return E>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,E}function W(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function it(E,_){let F=n.get(E);if(E.isVideoTexture&&C(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let k=E.image;if(k===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(F,E,_);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(E,_){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){_t(F,E,_);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Q(E,_){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){_t(F,E,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function et(E,_){let F=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){kt(F,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}let It={[Ls]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},Et={[Te]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[Ne]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},oe={[Au]:i.NEVER,[Lu]:i.ALWAYS,[Ru]:i.LESS,[E1]:i.LEQUAL,[Cu]:i.EQUAL,[w1]:i.GEQUAL,[Iu]:i.GREATER,[Pu]:i.NOTEQUAL};function Qt(E,_){if(_.type===In&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ne||_.magFilter===Vo||_.magFilter===aa||_.magFilter===Vi||_.minFilter===Ne||_.minFilter===Vo||_.minFilter===aa||_.minFilter===Vi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,It[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,It[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,It[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Et[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,oe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Te||_.minFilter!==aa&&_.minFilter!==Vi||_.type===In&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function se(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));let k=_.source,q=f.get(k);q===void 0&&(q={},f.set(k,q));let ot=W(_);if(ot!==E.__cacheKey){q[ot]===void 0&&(q[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),q[ot].usedTimes++;let ct=q[E.__cacheKey];ct!==void 0&&(q[E.__cacheKey].usedTimes--,ct.usedTimes===0&&I(_)),E.__cacheKey=ot,E.__webglTexture=q[ot].texture}return F}function Z(E,_,F){return Math.floor(Math.floor(E/F)/_)}function j(E,_,F,k){let ot=E.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,k,_.data);else{ot.sort((Pt,mt)=>Pt.start-mt.start);let ct=0;for(let Pt=1;Pt<ot.length;Pt++){let mt=ot[ct],dt=ot[Pt],Lt=mt.start+mt.count,Ot=Z(dt.start,_.width,4),Xt=Z(mt.start,_.width,4);dt.start<=Lt+1&&Ot===Xt&&Z(dt.start+dt.count-1,_.width,4)===Ot?mt.count=Math.max(mt.count,dt.start+dt.count-mt.start):(++ct,ot[ct]=dt)}ot.length=ct+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,mt=ot.length;Pt<mt;Pt++){let dt=ot[Pt],Lt=Math.floor(dt.start/4),Ot=Math.ceil(dt.count/4),Xt=Lt%_.width,L=Math.floor(Lt/_.width),ft=Ot,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Xt,L,ft,$,F,k,_.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function _t(E,_,F){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);let q=se(E,_),ot=_.source;e.bindTexture(k,E.__webglTexture,i.TEXTURE0+F);let ct=n.get(ot);if(ot.version!==ct.__version||q===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let $=ee.getPrimaries(ee.workingColorSpace),pt=_.colorSpace===_i?null:ee.getPrimaries(_.colorSpace),yt=_.colorSpace===_i||$===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let K=m(_.image,!1,s.maxTextureSize);K=le(_,K);let ut=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type),mt=y(_.internalFormat,ut,Pt,_.normalized,_.colorSpace,_.isVideoTexture);Qt(k,_);let dt,Lt=_.mipmaps,Ot=_.isVideoTexture!==!0,Xt=ct.__version===void 0||q===!0,L=ot.dataReady,ft=b(_,K);if(_.isDepthTexture)mt=w(_.format===Hi,_.type),Xt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,mt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,mt,K.width,K.height,0,ut,Pt,null));else if(_.isDataTexture)if(Lt.length>0){Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,Lt[0].width,Lt[0].height);for(let $=0,pt=Lt.length;$<pt;$++)dt=Lt[$],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,Pt,dt.data):e.texImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,ut,Pt,dt.data);_.generateMipmaps=!1}else Ot?(Xt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,K.width,K.height),L&&j(_,K,ut,Pt)):e.texImage2D(i.TEXTURE_2D,0,mt,K.width,K.height,0,ut,Pt,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,mt,Lt[0].width,Lt[0].height,K.depth);for(let $=0,pt=Lt.length;$<pt;$++)if(dt=Lt[$],_.format!==mn)if(ut!==null)if(Ot){if(L)if(_.layerUpdates.size>0){let yt=gc(dt.width,dt.height,_.format,_.type);for(let nt of _.layerUpdates){let Nt=dt.data.subarray(nt*yt/dt.data.BYTES_PER_ELEMENT,(nt+1)*yt/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,nt,dt.width,dt.height,1,ut,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,K.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,mt,dt.width,dt.height,K.depth,0,dt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,K.depth,ut,Pt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,mt,dt.width,dt.height,K.depth,0,ut,Pt,dt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ot&&Xt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,Lt[0].width,Lt[0].height);for(let $=0,pt=Lt.length;$<pt;$++)dt=Lt[$],_.format!==mn?ut!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,dt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,Pt,dt.data):e.texImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,ut,Pt,dt.data)}else if(_.isDataArrayTexture)if(Ot){if(Xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,mt,K.width,K.height,K.depth),L)if(_.layerUpdates.size>0){let $=gc(K.width,K.height,_.format,_.type);for(let pt of _.layerUpdates){let yt=K.data.subarray(pt*$/K.data.BYTES_PER_ELEMENT,(pt+1)*$/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,K.width,K.height,1,ut,Pt,yt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ut,Pt,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,K.width,K.height,K.depth,0,ut,Pt,K.data);else if(_.isData3DTexture)Ot?(Xt&&e.texStorage3D(i.TEXTURE_3D,ft,mt,K.width,K.height,K.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ut,Pt,K.data)):e.texImage3D(i.TEXTURE_3D,0,mt,K.width,K.height,K.depth,0,ut,Pt,K.data);else if(_.isFramebufferTexture){if(Xt)if(Ot)e.texStorage2D(i.TEXTURE_2D,ft,mt,K.width,K.height);else{let $=K.width,pt=K.height;for(let yt=0;yt<ft;yt++)e.texImage2D(i.TEXTURE_2D,yt,mt,$,pt,0,ut,Pt,null),$>>=1,pt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),K.parentNode!==$){$.appendChild(K),d.add(_),$.onpaint=pt=>{let yt=pt.changedElements;for(let nt of d)yt.includes(nt.image)&&(nt.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let yt=i.RGBA,nt=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,nt,Nt,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Ot&&Xt){let $=jt(Lt[0]);e.texStorage2D(i.TEXTURE_2D,ft,mt,$.width,$.height)}for(let $=0,pt=Lt.length;$<pt;$++)dt=Lt[$],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ut,Pt,dt):e.texImage2D(i.TEXTURE_2D,$,mt,ut,Pt,dt);_.generateMipmaps=!1}else if(Ot){if(Xt){let $=jt(K);e.texStorage2D(i.TEXTURE_2D,ft,mt,$.width,$.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Pt,K)}else e.texImage2D(i.TEXTURE_2D,0,mt,ut,Pt,K);p(_)&&S(k),ct.__version=ot.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function kt(E,_,F){if(_.image.length!==6)return;let k=se(E,_),q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let ot=n.get(q);if(q.version!==ot.__version||k===!0){e.activeTexture(i.TEXTURE0+F);let ct=ee.getPrimaries(ee.workingColorSpace),Y=_.colorSpace===_i?null:ee.getPrimaries(_.colorSpace),K=_.colorSpace===_i||ct===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ut=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let nt=0;nt<6;nt++)!ut&&!Pt?mt[nt]=m(_.image[nt],!0,s.maxCubemapSize):mt[nt]=Pt?_.image[nt].image:_.image[nt],mt[nt]=le(_,mt[nt]);let dt=mt[0],Lt=r.convert(_.format,_.colorSpace),Ot=r.convert(_.type),Xt=y(_.internalFormat,Lt,Ot,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ft=ot.__version===void 0||k===!0,$=q.dataReady,pt=b(_,dt);Qt(i.TEXTURE_CUBE_MAP,_);let yt;if(ut){L&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Xt,dt.width,dt.height);for(let nt=0;nt<6;nt++){yt=mt[nt].mipmaps;for(let Nt=0;Nt<yt.length;Nt++){let Rt=yt[Nt];_.format!==mn?Lt!==null?L?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,0,0,Rt.width,Rt.height,Lt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,Xt,Rt.width,Rt.height,0,Rt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,0,0,Rt.width,Rt.height,Lt,Ot,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt,Xt,Rt.width,Rt.height,0,Lt,Ot,Rt.data)}}}else{if(yt=_.mipmaps,L&&ft){yt.length>0&&pt++;let nt=jt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Xt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Pt){L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,mt[nt].width,mt[nt].height,Lt,Ot,mt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,mt[nt].width,mt[nt].height,0,Lt,Ot,mt[nt].data);for(let Nt=0;Nt<yt.length;Nt++){let ge=yt[Nt].image[nt].image;L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,0,0,ge.width,ge.height,Lt,Ot,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,Xt,ge.width,ge.height,0,Lt,Ot,ge.data)}}else{L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,Ot,mt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Xt,Lt,Ot,mt[nt]);for(let Nt=0;Nt<yt.length;Nt++){let Rt=yt[Nt];L?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,0,0,Lt,Ot,Rt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Nt+1,Xt,Lt,Ot,Rt.image[nt])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),ot.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Mt(E,_,F,k,q,ot){let ct=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),K=y(F.internalFormat,ct,Y,F.normalized,F.colorSpace),ut=n.get(_),Pt=n.get(F);if(Pt.__renderTarget=_,!ut.__hasExternalTextures){let mt=Math.max(1,_.width>>ot),dt=Math.max(1,_.height>>ot);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,ot,K,mt,dt,_.depth,0,ct,Y,null):e.texImage2D(q,ot,K,mt,dt,0,ct,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),Wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,q,Pt.__webglTexture,0,Ht(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,q,Pt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let k=_.depthTexture,q=k&&k.isDepthTexture?k.type:null,ot=w(_.stencilBuffer,q),ct=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Wt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht(_),ot,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,E)}else{let k=_.textures;for(let q=0;q<k.length;q++){let ot=k[q],ct=r.convert(ot.format,ot.colorSpace),Y=r.convert(ot.type),K=y(ot.internalFormat,ct,Y,ot.normalized,ot.colorSpace);Wt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht(_),K,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht(_),K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(E,_,F){let k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_.depthTexture);let ut=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type),mt;_.depthTexture.format===Kn?mt=i.DEPTH_COMPONENT24:_.depthTexture.format===Hi&&(mt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,mt,_.width,_.height,0,ut,Pt,null)}}else it(_.depthTexture,0);let ot=q.__webglTexture,ct=Ht(_),Y=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,K=_.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Kn)Wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,ot,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,ot,0);else if(_.depthTexture.format===Hi)Wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Y,ot,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,K,Y,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(E){let _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let k=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){let q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",q)};k.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=k}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)de(_.__webglFramebuffer[k],E,k);else{let k=E.texture.mipmaps;k&&k.length>0?de(_.__webglFramebuffer[0],E,0):de(_.__webglFramebuffer,E,0)}else if(F){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),Vt(_.__webglDepthbuffer[k],E,!1);else{let q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ot)}}else{let k=E.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Vt(_.__webglDepthbuffer,E,!1);else{let q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,_,F){let k=n.get(E);_!==void 0&&Mt(k.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&tt(E)}function rt(E){let _=E.texture,F=n.get(E),k=n.get(_);E.addEventListener("dispose",x);let q=E.textures,ot=E.isWebGLCubeRenderTarget===!0,ct=q.length>1;if(ct||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),ot){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let K=0;K<_.mipmaps.length;K++)F.__webglFramebuffer[Y][K]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ct)for(let Y=0,K=q.length;Y<K;Y++){let ut=n.get(q[Y]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Wt(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let K=q[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let ut=r.convert(K.format,K.colorSpace),Pt=r.convert(K.type),mt=y(K.internalFormat,ut,Pt,K.normalized,K.colorSpace,E.isXRRenderTarget===!0),dt=Ht(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,mt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Vt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Mt(F.__webglFramebuffer[Y][K],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else Mt(F.__webglFramebuffer[Y],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Y=0,K=q.length;Y<K;Y++){let ut=q[Y],Pt=n.get(ut),mt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(mt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Pt.__webglTexture),Qt(mt,ut),Mt(F.__webglFramebuffer,E,ut,i.COLOR_ATTACHMENT0+Y,mt,0),p(ut)&&S(mt)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,k.__webglTexture),Qt(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)Mt(F.__webglFramebuffer[K],E,_,i.COLOR_ATTACHMENT0,Y,K);else Mt(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,Y,0);p(_)&&S(Y),e.unbindTexture()}E.depthBuffer&&tt(E)}function at(E){let _=E.textures;for(let F=0,k=_.length;F<k;F++){let q=_[F];if(p(q)){let ot=A(E),ct=n.get(q).__webglTexture;e.bindTexture(ot,ct),S(ot),e.unbindTexture()}}}let ht=[],Ft=[];function Ut(E){if(E.samples>0){if(Wt(E)===!1){let _=E.textures,F=E.width,k=E.height,q=i.COLOR_BUFFER_BIT,ot=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(E),Y=_.length>1;if(Y)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let K=E.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Pt=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,q,i.NEAREST),l===!0&&(ht.length=0,Ft.length=0,ht.push(i.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ht.push(ot),Ft.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Pt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ht(E){return Math.min(s.maxSamples,E.samples)}function Wt(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function C(E){let _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function le(E,_){let F=E.colorSpace,k=E.format,q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Rr&&F!==_i&&(ee.getTransfer(F)===ue?(k!==mn||q!==Ze)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",F)),_}function jt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=G,this.getTextureUnits=U,this.setTextureUnits=z,this.setTexture2D=it,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=et,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ug(i,t){function e(n,s=_i){let r,a=ee.getTransfer(s);if(n===Ze)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sc)return i.BYTE;if(n===rc)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===lc)return i.ALPHA;if(n===cc)return i.RGB;if(n===mn)return i.RGBA;if(n===Kn)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===$s)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===oa||n===la||n===ca||n===ha)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===$o||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===jo||n===t1||n===e1||n===n1||n===ua||n===i1)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qo||n===jo)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===t1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===e1)return r.COMPRESSED_R11_EAC;if(n===n1)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ua)return r.COMPRESSED_RG11_EAC;if(n===i1)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===s1||n===r1||n===a1||n===o1||n===l1||n===c1||n===h1||n===u1||n===d1||n===f1||n===p1||n===m1||n===g1||n===_1)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===s1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===r1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===a1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===o1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===l1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===c1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===h1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===u1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===d1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===f1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===p1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===m1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===g1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_1)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===x1||n===v1||n===y1)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===x1)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===v1)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===y1)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===M1||n===S1||n===da||n===b1)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===M1)return r.COMPRESSED_RED_RGTC1_EXT;if(n===S1)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===b1)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Dc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Sn({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new Dc,p={},S=e.getContextAttributes(),A=null,y=null,w=[],b=[],R=new lt,x=null,T=null,I=new Ve;I.viewport=new ye;let D=new Ve;D.viewport=new ye;let V=[I,D],G=new Fo,U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=w[Z];return j===void 0&&(j=new Os,w[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=w[Z];return j===void 0&&(j=new Os,w[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=w[Z];return j===void 0&&(j=new Os,w[Z]=j),j.getHandSpace()};function J(Z){let j=b.indexOf(Z.inputSource);if(j===-1)return;let _t=w[j];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,c||a),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",it);for(let Z=0;Z<w.length;Z++){let j=b[Z];j!==null&&(b[Z]=null,w[Z].disconnect(j))}U=null,z=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(A),f=null,h=null,d=null,s=null,y=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",W),s.addEventListener("inputsourceschange",it),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,kt=null,Mt=null;S.depth&&(Mt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?Hi:Kn,kt=S.stencil?Js:Vn);let Vt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new fn(h.textureWidth,h.textureHeight,{format:mn,type:Ze,depthTexture:new Fi(h.textureWidth,h.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fn(f.framebufferWidth,f.framebufferHeight,{format:mn,type:Ze,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(Z){for(let j=0;j<Z.removed.length;j++){let _t=Z.removed[j],kt=b.indexOf(_t);kt>=0&&(b[kt]=null,w[kt].disconnect(_t))}for(let j=0;j<Z.added.length;j++){let _t=Z.added[j],kt=b.indexOf(_t);if(kt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=b.length){b.push(_t),kt=Vt;break}else if(b[Vt]===null){b[Vt]=_t,kt=Vt;break}if(kt===-1)break}let Mt=w[kt];Mt&&Mt.connect(_t)}}let X=new N,Q=new N;function et(Z,j,_t){X.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);let kt=X.distanceTo(Q),Mt=j.projectionMatrix.elements,Vt=_t.projectionMatrix.elements,de=Mt[14]/(Mt[10]-1),tt=Mt[14]/(Mt[10]+1),st=(Mt[9]+1)/Mt[5],rt=(Mt[9]-1)/Mt[5],at=(Mt[8]-1)/Mt[0],ht=(Vt[8]+1)/Vt[0],Ft=de*at,Ut=de*ht,Ht=kt/(-at+ht),Wt=Ht*-at;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Wt),Z.translateZ(Ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Mt[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let C=de+Ht,le=tt+Ht,jt=Ft-Wt,E=Ut+(kt-Wt),_=st*tt/le*C,F=rt*tt/le*C;Z.projectionMatrix.makePerspective(jt,E,_,F,C,le),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function It(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let j=Z.near,_t=Z.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),G.near=D.near=I.near=j,G.far=D.far=I.far=_t,(U!==G.near||z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),U=G.near,z=G.far),G.layers.mask=Z.layers.mask|6,I.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let kt=Z.parent,Mt=G.cameras;It(G,kt);for(let Vt=0;Vt<Mt.length;Vt++)It(Mt[Vt],kt);Mt.length===2?et(G,I,D):G.projectionMatrix.copy(I.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Et(Z,G,kt)};function Et(Z,j,_t){_t===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Pr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Z){return p[Z]};let oe=null;function Qt(Z,j){if(u=j.getViewerPose(c||a),g=j,u!==null){let _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let kt=!1;_t.length!==G.cameras.length&&(G.cameras.length=0,kt=!0);for(let tt=0;tt<_t.length;tt++){let st=_t[tt],rt=null;if(f!==null)rt=f.getViewport(st);else{let ht=d.getViewSubImage(h,st);rt=ht.viewport,tt===0&&(t.setRenderTargetTextures(y,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(y))}let at=V[tt];at===void 0&&(at=new Ve,at.layers.enable(tt),at.viewport=new ye,V[tt]=at),at.matrix.fromArray(st.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(st.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(rt.x,rt.y,rt.width,rt.height),tt===0&&(G.matrix.copy(at.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),kt===!0&&G.cameras.push(at)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let tt=d.getDepthInformation(_t[0]);tt&&tt.isValid&&tt.texture&&m.init(tt,s.renderState)}if(Mt&&Mt.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let tt=0;tt<_t.length;tt++){let st=_t[tt].camera;if(st){let rt=p[st];rt||(rt=new zr,p[st]=rt);let at=d.getCameraImage(st);rt.sourceTexture=at}}}}for(let _t=0;_t<w.length;_t++){let kt=b[_t],Mt=w[_t];kt!==null&&Mt!==void 0&&Mt.update(kt,j,c||a)}oe&&oe(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let se=new fd;se.setAnimationLoop(Qt),this.setAnimationLoop=function(Z){oe=Z},this.dispose=function(){}}},pg=new ae,vd=new Gt;vd.set(-1,0,0,0,1,0,0,0,1);function mg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p),A=S.envMap,y=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(vd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let b=w.program;n.uniformBlockBinding(y,b)}function c(y,w){let b=s[y.id];b===void 0&&(m(y),b=u(y),s[y.id]=b,y.addEventListener("dispose",S));let R=w.program;n.updateUBOMapping(y,R);let x=t.render.frame;r[y.id]!==x&&(h(y),r[y.id]=x)}function u(y){let w=d();y.__bindingPointIndex=w;let b=i.createBuffer(),R=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let w=s[y.id],b=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,T=b.length;x<T;x++){let I=b[x];if(Array.isArray(I))for(let D=0,V=I.length;D<V;D++)f(I[D],x,D,R);else f(I,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,b,R){if(M(y,w,b,R)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let I=0;for(let D=0;D<T.length;D++){let V=T[D],G=p(V);g(V,y.__data,I),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,w,b){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,b)}function M(y,w,b,R){let x=y.value,T=w+"_"+b;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{let I=R[T];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function m(y){let w=y.uniforms,b=0,R=16;for(let T=0,I=w.length;T<I;T++){let D=Array.isArray(w[T])?w[T]:[w[T]];for(let V=0,G=D.length;V<G;V++){let U=D[V],z=Array.isArray(U.value)?U.value:[U.value];for(let J=0,W=z.length;J<W;J++){let it=z[J],X=p(it),Q=b%R,et=Q%X.boundary,It=Q+et;b+=et,It!==0&&R-It<X.storage&&(b+=R-It),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=X.storage}}}let x=b%R;return x>0&&(b+=R-x),y.__size=b,y.__cache={},this}function p(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",y),w}function S(y){let w=y.target;w.removeEventListener("dispose",S);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var _g=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function xg(){return ii===null&&(ii=new Di(_g,16,16,Gi,Hn),ii.name="DFG_LUT",ii.minFilter=Ne,ii.magFilter=Ne,ii.wrapS=$n,ii.wrapT=$n,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var C1=class{constructor(t={}){let{canvas:e=Uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ze}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,m=new Set([Yo,qo,Xo]),p=new Set([Ze,Vn,Zs,Js,Go,Wo]),S=new Uint32Array(4),A=new Int32Array(4),y=new N,w=null,b=null,R=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,V=null,G=null,U=null,z=null;this._outputColorSpace=we;let J=0,W=0,it=null,X=-1,Q=null,et=new ye,It=new ye,Et=null,oe=new Dt(0),Qt=0,se=e.width,Z=e.height,j=1,_t=null,kt=null,Mt=new ye(0,0,se,Z),Vt=new ye(0,0,se,Z),de=!1,tt=new Bs,st=!1,rt=!1,at=new ae,ht=new N,Ft=new ye,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Wt(){return it===null?j:1}let C=n;function le(v,P){return e.getContext(v,P)}let jt,E,_,F,k,q,ot,ct,Y,K,ut,Pt,mt,dt,Lt,Ot,Xt,L,ft,$,pt,yt,nt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Un,!1),C===null){let P="webgl2";if(C=le(P,v),C===null)throw le(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(v){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Bt("WebGLRenderer: "+v.message),v}function Nt(){jt=new wm(C),jt.init(),pt=new ug(C,jt),E=new mm(C,jt,t,pt),_=new cg(C,jt),E.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),G=C.createFramebuffer(),U=C.createFramebuffer(),z=C.createFramebuffer(),F=new Rm(C),k=new J3,q=new hg(C,jt,_,k,E,pt,F),ot=new Em(I),ct=new I0(C),yt=new fm(C,ct),Y=new Tm(C,ct,F,yt),K=new Im(C,Y,ct,yt,F),L=new Cm(C,E,q),Lt=new gm(k),ut=new Z3(I,ot,jt,E,yt,Lt),Pt=new mg(I,k),mt=new K3,dt=new ig(jt),Xt=new dm(I,ot,_,K,g,l),Ot=new lg(I,K,E),nt=new gg(C,F,E,_),ft=new pm(C,jt,F),$=new Am(C,jt,F),F.programs=ut.programs,I.capabilities=E,I.extensions=jt,I.properties=k,I.renderLists=mt,I.shadowMap=Ot,I.state=_,I.info=F}M!==Ze&&(T=new Lm(M,e.width,e.height,o,s,r));let Rt=new Fc(I,C);this.xr=Rt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let v=jt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=jt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(v){v!==void 0&&(j=v,this.setSize(se,Z,!1))},this.getSize=function(v){return v.set(se,Z)},this.setSize=function(v,P,H=!0){if(Rt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=v,Z=P,e.width=Math.floor(v*j),e.height=Math.floor(P*j),H===!0&&(e.style.width=v+"px",e.style.height=P+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(se*j,Z*j).floor()},this.setDrawingBufferSize=function(v,P,H){se=v,Z=P,j=H,e.width=Math.floor(v*H),e.height=Math.floor(P*H),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(M===Ze){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(et)},this.getViewport=function(v){return v.copy(Mt)},this.setViewport=function(v,P,H,O){v.isVector4?Mt.set(v.x,v.y,v.z,v.w):Mt.set(v,P,H,O),_.viewport(et.copy(Mt).multiplyScalar(j).round())},this.getScissor=function(v){return v.copy(Vt)},this.setScissor=function(v,P,H,O){v.isVector4?Vt.set(v.x,v.y,v.z,v.w):Vt.set(v,P,H,O),_.scissor(It.copy(Vt).multiplyScalar(j).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(v){_.setScissorTest(de=v)},this.setOpaqueSort=function(v){_t=v},this.setTransparentSort=function(v){kt=v},this.getClearColor=function(v){return v.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor(...arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,H=!0){let O=0;if(v){let B=!1;if(it!==null){let vt=it.texture.format;B=m.has(vt)}if(B){let vt=it.texture.type,bt=p.has(vt),xt=Xt.getClearColor(),Tt=Xt.getClearAlpha(),Ct=xt.r,Zt=xt.g,te=xt.b;bt?(S[0]=Ct,S[1]=Zt,S[2]=te,S[3]=Tt,C.clearBufferuiv(C.COLOR,0,S)):(A[0]=Ct,A[1]=Zt,A[2]=te,A[3]=Tt,C.clearBufferiv(C.COLOR,0,A))}else O|=C.COLOR_BUFFER_BIT}P&&(O|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),V=v},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),Xt.dispose(),mt.dispose(),dt.dispose(),k.dispose(),ot.dispose(),K.dispose(),yt.dispose(),nt.dispose(),ut.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",ph),Rt.removeEventListener("sessionend",mh),qi.stop()};function ge(v){v.preventDefault(),uc("WebGLRenderer: Context Lost."),D=!0}function ce(){uc("WebGLRenderer: Context Restored."),D=!1;let v=F.autoReset,P=Ot.enabled,H=Ot.autoUpdate,O=Ot.needsUpdate,B=Ot.type;Nt(),F.autoReset=v,Ot.enabled=P,Ot.autoUpdate=H,Ot.needsUpdate=O,Ot.type=B}function Un(v){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Yn(v){let P=v.target;P.removeEventListener("dispose",Yn),pf(P)}function pf(v){mf(v),k.remove(v)}function mf(v){let P=k.get(v).programs;P!==void 0&&(P.forEach(function(H){ut.releaseProgram(H)}),v.isShaderMaterial&&ut.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,H,O,B,vt){P===null&&(P=Ut);let bt=B.isMesh&&B.matrixWorld.determinantAffine()<0,xt=xf(v,P,H,O,B);_.setMaterial(O,bt);let Tt=H.index,Ct=1;if(O.wireframe===!0){if(Tt=Y.getWireframeAttribute(H),Tt===void 0)return;Ct=2}let Zt=H.drawRange,te=H.attributes.position,At=Zt.start*Ct,he=(Zt.start+Zt.count)*Ct;vt!==null&&(At=Math.max(At,vt.start*Ct),he=Math.min(he,(vt.start+vt.count)*Ct)),Tt!==null?(At=Math.max(At,0),he=Math.min(he,Tt.count)):te!=null&&(At=Math.max(At,0),he=Math.min(he,te.count));let Re=he-At;if(Re<0||Re===1/0)return;yt.setup(B,O,xt,H,Tt);let xe,pe=ft;if(Tt!==null&&(xe=ct.get(Tt),pe=$,pe.setIndex(xe)),B.isMesh)O.wireframe===!0?(_.setLineWidth(O.wireframeLinewidth*Wt()),pe.setMode(C.LINES)):pe.setMode(C.TRIANGLES);else if(B.isLine){let $e=O.linewidth;$e===void 0&&($e=1),_.setLineWidth($e*Wt()),B.isLineSegments?pe.setMode(C.LINES):B.isLineLoop?pe.setMode(C.LINE_LOOP):pe.setMode(C.LINE_STRIP)}else B.isPoints?pe.setMode(C.POINTS):B.isSprite&&pe.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let $e=B._multiDrawStarts,St=B._multiDrawCounts,on=B._multiDrawCount,re=Tt?ct.get(Tt).bytesPerElement:1,An=k.get(O).currentProgram.getUniforms();for(let Zn=0;Zn<on;Zn++)An.setValue(C,"_gl_DrawID",Zn),pe.render($e[Zn]/re,St[Zn])}else if(B.isInstancedMesh)pe.renderInstances(At,Re,B.count);else if(H.isInstancedBufferGeometry){let $e=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,St=Math.min(H.instanceCount,$e);pe.renderInstances(At,Re,St)}else pe.render(At,Re)};function fh(v,P,H,O){V!==null&&v.isNodeMaterial&&V.setObject(O,v),st===!0&&Lt.setState(v,H,!1),v.transparent===!0&&v.side===ei&&v.forceSinglePass===!1?(v.side=De,v.needsUpdate=!0,Pa(v,P,O),v.side=ti,v.needsUpdate=!0,Pa(v,P,O),v.side=ei):Pa(v,P,O)}this.compile=function(v,P,H=null){H===null&&(H=v),V!==null&&V.renderStart(v,P,H),b=dt.get(H),b.init(P),x.push(b),H.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),v!==H&&v.traverseVisible(function(B){B.isLight&&B.layers.test(P.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),V!==null&&V.updateLights(b.state.lightsArray),rt=this.localClippingEnabled,st=Lt.init(this.clippingPlanes,rt),st===!0&&Lt.setGlobalState(this.clippingPlanes,P),V!==null&&Ot.render(b.state.shadowsArray,H,P);let O=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let vt=B.material;if(vt)if(Array.isArray(vt))for(let bt=0;bt<vt.length;bt++){let xt=vt[bt];fh(xt,H,P,B),O.add(xt)}else fh(vt,H,P,B),O.add(vt)}),b=x.pop(),V!==null&&V.renderEnd(),O},this.compileAsync=function(v,P,H=null){let O=this.compile(v,P,H);return new Promise(B=>{function vt(){if(O.forEach(function(bt){let Tt=k.get(bt).currentProgram;(Tt===void 0||Tt.isReady())&&O.delete(bt)}),O.size===0){B(v);return}setTimeout(vt,10)}jt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let il=null;function gf(v){il&&il(v)}function ph(){qi.stop()}function mh(){qi.start()}let qi=new fd;qi.setAnimationLoop(gf),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(v){il=v,Rt.setAnimationLoop(v),v===null?qi.stop():qi.start()},Rt.addEventListener("sessionstart",ph),Rt.addEventListener("sessionend",mh),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;V!==null&&V.renderStart(v,P);let H=Rt.enabled===!0&&Rt.isPresenting===!0,O=T!==null&&(it===null||H)&&T.begin(I,it);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(P),P=Rt.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,P,it),b=dt.get(v,x.length),b.init(P),b.state.textureUnits=q.getTextureUnits(),x.push(b),at.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),tt.setFromProjectionMatrix(at,zn,P.reversedDepth),rt=this.localClippingEnabled,st=Lt.init(this.clippingPlanes,rt),w=mt.get(v,R.length),w.init(),R.push(w),Rt.enabled===!0&&Rt.isPresenting===!0){let bt=I.xr.getDepthSensingMesh();bt!==null&&sl(bt,P,-1/0,I.sortObjects)}sl(v,P,0,I.sortObjects),w.finish(),V!==null&&V.updateLights(b.state.lightsArray),I.sortObjects===!0&&w.sort(_t,kt),Ht=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Ht&&Xt.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Lt.beginShadows();let B=b.state.shadowsArray;if(Ot.render(B,v,P),st===!0&&Lt.endShadows(),(O&&T.hasRenderPass())===!1){let bt=w.opaque,xt=w.transmissive;if(b.setupLights(),P.isArrayCamera){let Tt=P.cameras;if(xt.length>0)for(let Ct=0,Zt=Tt.length;Ct<Zt;Ct++){let te=Tt[Ct];_h(bt,xt,v,te)}Ht&&Xt.render(v);for(let Ct=0,Zt=Tt.length;Ct<Zt;Ct++){let te=Tt[Ct];gh(w,v,te,te.viewport)}}else xt.length>0&&_h(bt,xt,v,P),Ht&&Xt.render(v),gh(w,v,P)}it!==null&&W===0&&(q.updateMultisampleRenderTarget(it),q.updateRenderTargetMipmap(it)),O&&T.end(I),v.isScene===!0&&v.onAfterRender(I,v,P),yt.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(b=x[x.length-1],q.setTextureUnits(b.state.textureUnits),st===!0&&Lt.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,V!==null&&V.renderEnd()};function sl(v,P,H,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(tt)){O&&Ft.setFromMatrixPosition(v.matrixWorld).applyMatrix4(at);let bt=K.update(v),xt=v.material;xt.visible&&w.push(v,bt,xt,H,Ft.z,null,P)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(tt))){let bt=K.update(v),xt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ft.copy(v.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ft.copy(bt.boundingSphere.center)),Ft.applyMatrix4(v.matrixWorld).applyMatrix4(at)),Array.isArray(xt)){let Tt=bt.groups;for(let Ct=0,Zt=Tt.length;Ct<Zt;Ct++){let te=Tt[Ct],At=xt[te.materialIndex];At&&At.visible&&w.push(v,bt,At,H,Ft.z,te,P)}}else xt.visible&&w.push(v,bt,xt,H,Ft.z,null,P)}}let vt=v.children;for(let bt=0,xt=vt.length;bt<xt;bt++)sl(vt[bt],P,H,O)}function gh(v,P,H,O){let{opaque:B,transmissive:vt,transparent:bt}=v;b.setupLightsView(H),st===!0&&Lt.setGlobalState(I.clippingPlanes,H),O&&_.viewport(et.copy(O)),B.length>0&&Ia(B,P,H),vt.length>0&&Ia(vt,P,H),bt.length>0&&Ia(bt,P,H),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function _h(v,P,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[O.id]===void 0){let At=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[O.id]=new fn(1,1,{generateMipmaps:!0,type:At?Hn:Ze,minFilter:Vi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let vt=b.state.transmissionRenderTarget[O.id],bt=O.viewport||et;vt.setSize(bt.z*I.transmissionResolutionScale,bt.w*I.transmissionResolutionScale);let xt=I.getRenderTarget(),Tt=I.getActiveCubeFace(),Ct=I.getActiveMipmapLevel();I.setRenderTarget(vt),I.getClearColor(oe),Qt=I.getClearAlpha(),Qt<1&&I.setClearColor(16777215,.5),I.clear(),Ht&&Xt.render(H);let Zt=I.toneMapping;I.toneMapping=kn;let te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),b.setupLightsView(O),st===!0&&Lt.setGlobalState(I.clippingPlanes,O),Ia(v,H,O),q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let he=0,Re=P.length;he<Re;he++){let xe=P[he],{object:pe,geometry:$e,material:St,group:on}=xe;if(St.side===ei&&pe.layers.test(O.layers)){let re=St.side;St.side=De,St.needsUpdate=!0,xh(pe,H,O,$e,St,on),St.side=re,St.needsUpdate=!0,At=!0}}At===!0&&(q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt))}I.setRenderTarget(xt,Tt,Ct),I.setClearColor(oe,Qt),te!==void 0&&(O.viewport=te),I.toneMapping=Zt}function Ia(v,P,H){let O=P.isScene===!0?P.overrideMaterial:null;for(let B=0,vt=v.length;B<vt;B++){let bt=v[B],{object:xt,geometry:Tt,group:Ct}=bt,Zt=bt.material;Zt.allowOverride===!0&&O!==null&&(Zt=O),xt.layers.test(H.layers)&&xh(xt,P,H,Tt,Zt,Ct)}}function xh(v,P,H,O,B,vt){V!==null&&B.isNodeMaterial&&V.setObject(v,B),v.onBeforeRender(I,P,H,O,B,vt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(I,P,H,O,v,vt),B.transparent===!0&&B.side===ei&&B.forceSinglePass===!1?(B.side=De,B.needsUpdate=!0,I.renderBufferDirect(H,P,O,B,v,vt),B.side=ti,B.needsUpdate=!0,I.renderBufferDirect(H,P,O,B,v,vt),B.side=ei):I.renderBufferDirect(H,P,O,B,v,vt),v.onAfterRender(I,P,H,O,B,vt)}function Pa(v,P,H){P.isScene!==!0&&(P=Ut);let O=k.get(v),B=b.state.lights,vt=b.state.shadowsArray,bt=B.state.version,xt=ut.getParameters(v,B.state,vt,P,H,b.state.lightProbeGridArray),Tt=ut.getProgramCacheKey(xt),Ct=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let Zt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=ot.get(v.envMap||O.environment,Zt),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Ct===void 0&&(v.addEventListener("dispose",Yn),Ct=new Map,O.programs=Ct);let te=Ct.get(Tt);if(te!==void 0){if(O.currentProgram===te&&O.lightsStateVersion===bt)return yh(v,xt),te}else xt.uniforms=ut.getUniforms(v),V!==null&&v.isNodeMaterial&&V.build(v,H,xt),v.onBeforeCompile(xt,I),te=ut.acquireProgram(xt,Tt),Ct.set(Tt,te),O.uniforms=xt.uniforms;let At=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=Lt.uniform),yh(v,xt),O.needsLights=yf(v),O.lightsStateVersion=bt,O.needsLights&&(At.ambientLightColor.value=B.state.ambient,At.lightProbe.value=B.state.probe,At.sunLights.value=B.state.sun,At.sunLightShadows.value=B.state.sunShadow,At.directionalLights.value=B.state.directional,At.directionalLightShadows.value=B.state.directionalShadow,At.spotLights.value=B.state.spot,At.spotLightShadows.value=B.state.spotShadow,At.rectAreaLights.value=B.state.rectArea,At.ltc_1.value=B.state.rectAreaLTC1,At.ltc_2.value=B.state.rectAreaLTC2,At.pointLights.value=B.state.point,At.pointLightShadows.value=B.state.pointShadow,At.hemisphereLights.value=B.state.hemi,At.sunShadowMatrix.value=B.state.sunShadowMatrix,At.sunShadowCascade.value=B.state.sunShadowCascade,At.directionalShadowMatrix.value=B.state.directionalShadowMatrix,At.spotLightMatrix.value=B.state.spotLightMatrix,At.spotLightMap.value=B.state.spotLightMap,At.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=b.state.lightProbeGridArray.length>0,O.currentProgram=te,O.uniformsList=null,te}function vh(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=tr.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function yh(v,P){let H=k.get(v);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function _f(v,P){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(P.matrixWorld);for(let H=0,O=v.length;H<O;H++){let B=v[H];if(B.texture!==null&&B.boundingBox.containsPoint(y))return B}return null}function xf(v,P,H,O,B){P.isScene!==!0&&(P=Ut),q.resetTextureUnits();let vt=P.fog,bt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,xt=it===null?I.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ee.workingColorSpace,Tt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ct=ot.get(O.envMap||bt,Tt),Zt=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,te=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),At=!!H.morphAttributes.position,he=!!H.morphAttributes.normal,Re=!!H.morphAttributes.color,xe=kn;O.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(xe=I.toneMapping);let pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$e=pe!==void 0?pe.length:0,St=k.get(O),on=b.state.lights;if(st===!0&&(rt===!0||v!==Q)){let _e=v===Q&&O.id===X;Lt.setState(O,v,_e)}let re=!1;O.version===St.__version?(St.needsLights&&St.lightsStateVersion!==on.state.version||St.outputColorSpace!==xt||B.isBatchedMesh&&St.batching===!1||!B.isBatchedMesh&&St.batching===!0||B.isBatchedMesh&&St.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&St.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&St.instancing===!1||!B.isInstancedMesh&&St.instancing===!0||B.isSkinnedMesh&&St.skinning===!1||!B.isSkinnedMesh&&St.skinning===!0||B.isInstancedMesh&&St.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&St.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&St.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&St.instancingMorph===!1&&B.morphTexture!==null||St.envMap!==Ct||O.fog===!0&&St.fog!==vt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Lt.numPlanes||St.numIntersection!==Lt.numIntersection)||St.vertexAlphas!==Zt||St.vertexTangents!==te||St.morphTargets!==At||St.morphNormals!==he||St.morphColors!==Re||St.toneMapping!==xe||St.morphTargetsCount!==$e||!!St.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,St.__version=O.version);let An=St.currentProgram;re===!0&&(An=Pa(O,P,B),V&&O.isNodeMaterial&&V.onUpdateProgram(O,An,St));let Zn=!1,wi=!1,ps=!1,fe=An.getUniforms(),Ae=St.uniforms;if(_.useProgram(An.program)&&(Zn=!0,wi=!0,ps=!0),O.id!==X&&(X=O.id,wi=!0),St.needsLights){let _e=_f(b.state.lightProbeGridArray,B);St.lightProbeGrid!==_e&&(St.lightProbeGrid=_e,wi=!0)}if(Zn||Q!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),fe.setValue(C,"projectionMatrix",v.projectionMatrix),fe.setValue(C,"viewMatrix",v.matrixWorldInverse);let Ai=fe.map.cameraPosition;Ai!==void 0&&Ai.setValue(C,ht.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&fe.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&fe.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,wi=!0,ps=!0)}if(St.needsLights&&(on.state.sunShadowMap.length>0&&fe.setValue(C,"sunShadowMap",on.state.sunShadowMap,q),on.state.directionalShadowMap.length>0&&fe.setValue(C,"directionalShadowMap",on.state.directionalShadowMap,q),on.state.spotShadowMap.length>0&&fe.setValue(C,"spotShadowMap",on.state.spotShadowMap,q),on.state.pointShadowMap.length>0&&fe.setValue(C,"pointShadowMap",on.state.pointShadowMap,q)),B.isSkinnedMesh){fe.setOptional(C,B,"bindMatrix"),fe.setOptional(C,B,"bindMatrixInverse");let _e=B.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),fe.setValue(C,"boneTexture",_e.boneTexture,q))}B.isBatchedMesh&&(fe.setOptional(C,B,"batchingTexture"),fe.setValue(C,"batchingTexture",B._matricesTexture,q),fe.setOptional(C,B,"batchingIdTexture"),fe.setValue(C,"batchingIdTexture",B._indirectTexture,q),fe.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&fe.setValue(C,"batchingColorTexture",B._colorsTexture,q));let Ti=H.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&L.update(B,H,An),(wi||St.receiveShadow!==B.receiveShadow)&&(St.receiveShadow=B.receiveShadow,fe.setValue(C,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(Ae.envMapIntensity.value=P.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=xg()),wi){if(fe.setValue(C,"toneMappingExposure",I.toneMappingExposure),St.needsLights&&vf(Ae,ps),vt&&O.fog===!0&&Pt.refreshFogUniforms(Ae,vt),Pt.refreshMaterialUniforms(Ae,O,j,Z,b.state.transmissionRenderTarget[v.id]),St.needsLights&&St.lightProbeGrid){let _e=St.lightProbeGrid;Ae.probesSH.value=_e.texture,Ae.probesMin.value.copy(_e.boundingBox.min),Ae.probesMax.value.copy(_e.boundingBox.max),Ae.probesResolution.value.copy(_e.resolution)}tr.upload(C,vh(St),Ae,q)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(tr.upload(C,vh(St),Ae,q),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&fe.setValue(C,"center",B.center),fe.setValue(C,"modelViewMatrix",B.modelViewMatrix),fe.setValue(C,"normalMatrix",B.normalMatrix),fe.setValue(C,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){let _e=O.uniformsGroups;for(let Ai=0,ms=_e.length;Ai<ms;Ai++){let Sh=_e[Ai];nt.update(Sh,An),nt.bind(Sh,An)}}return An}function vf(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function yf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(v,P,H){let O=k.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),k.get(v.texture).__webglTexture=P,k.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let H=k.get(v);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,H=0){it=v,J=P,W=H;let O=null,B=!1,vt=!1;if(v){let xt=k.get(v);if(xt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(C.FRAMEBUFFER,xt.__webglFramebuffer),et.copy(v.viewport),It.copy(v.scissor),Et=v.scissorTest,_.viewport(et),_.scissor(It),_.setScissorTest(Et),X=-1;return}else if(xt.__webglFramebuffer===void 0)q.setupRenderTarget(v);else if(xt.__hasExternalTextures)q.rebindTextures(v,k.get(v.texture).__webglTexture,k.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Zt=v.depthTexture;if(xt.__boundDepthTexture!==Zt){if(Zt!==null&&k.has(Zt)&&(v.width!==Zt.image.width||v.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(v)}}let Tt=v.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(vt=!0);let Ct=k.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[P])?O=Ct[P][H]:O=Ct[P],B=!0):v.samples>0&&q.useMultisampledRTT(v)===!1?O=k.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?O=Ct[H]:O=Ct,et.copy(v.viewport),It.copy(v.scissor),Et=v.scissorTest}else et.copy(Mt).multiplyScalar(j).floor(),It.copy(Vt).multiplyScalar(j).floor(),Et=de;if(H!==0&&(O=G),_.bindFramebuffer(C.FRAMEBUFFER,O)&&_.drawBuffers(v,O),_.viewport(et),_.scissor(It),_.setScissorTest(Et),B){let xt=k.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+P,xt.__webglTexture,H)}else if(vt){let xt=P;for(let Tt=0;Tt<v.textures.length;Tt++){let Ct=k.get(v.textures[Tt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,H,xt)}}else if(v!==null&&H!==0){let xt=k.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xt.__webglTexture,H)}X=-1};function Mh(v){let P=k.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=E.textureFormatReadable(v.format),P.__typeReadable=E.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,H,O,B,vt,bt,xt=0){if(!(v&&v.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){_.bindFramebuffer(C.FRAMEBUFFER,Tt);try{let Ct=v.textures[xt],Zt=Ct.format,te=Ct.type;v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xt);let At=Mh(Ct);if(At.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&H>=0&&H<=v.height-B&&C.readPixels(P,H,O,B,pt.convert(Zt),pt.convert(te),vt)}finally{let Ct=it!==null?k.get(it).__webglFramebuffer:null;_.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(v,P,H,O,B,vt,bt,xt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt)if(P>=0&&P<=v.width-O&&H>=0&&H<=v.height-B){_.bindFramebuffer(C.FRAMEBUFFER,Tt);let Ct=v.textures[xt],Zt=Ct.format,te=Ct.type;v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+xt);let At=Mh(Ct);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,he),C.bufferData(C.PIXEL_PACK_BUFFER,vt.byteLength,C.STREAM_READ),C.readPixels(P,H,O,B,pt.convert(Zt),pt.convert(te),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let Re=it!==null?k.get(it).__webglFramebuffer:null;_.bindFramebuffer(C.FRAMEBUFFER,Re);let xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Fu(C,xe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,he),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,vt),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(he),C.deleteSync(xe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,H=0){let O=Math.pow(2,-H),B=Math.floor(v.image.width*O),vt=Math.floor(v.image.height*O),bt=P!==null?P.x:0,xt=P!==null?P.y:0;q.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,bt,xt,B,vt),_.unbindTexture()},this.copyTextureToTexture=function(v,P,H=null,O=null,B=0,vt=0){let bt,xt,Tt,Ct,Zt,te,At,he,Re,xe=v.isCompressedTexture?v.mipmaps[vt]:v.image;if(H!==null)bt=H.max.x-H.min.x,xt=H.max.y-H.min.y,Tt=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,Zt=H.min.y,te=H.isBox3?H.min.z:0;else{let Ae=Math.pow(2,-B);bt=Math.floor(xe.width*Ae),xt=Math.floor(xe.height*Ae),v.isDataArrayTexture?Tt=xe.depth:v.isData3DTexture?Tt=Math.floor(xe.depth*Ae):Tt=1,Ct=0,Zt=0,te=0}O!==null?(At=O.x,he=O.y,Re=O.z):(At=0,he=0,Re=0);let pe=pt.convert(P.format),$e=pt.convert(P.type),St;P.isData3DTexture?(q.setTexture3D(P,0),St=C.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(q.setTexture2DArray(P,0),St=C.TEXTURE_2D_ARRAY):(q.setTexture2D(P,0),St=C.TEXTURE_2D),_.activeTexture(C.TEXTURE0),_.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(C.UNPACK_ALIGNMENT,P.unpackAlignment);let on=_.getParameter(C.UNPACK_ROW_LENGTH),re=_.getParameter(C.UNPACK_IMAGE_HEIGHT),An=_.getParameter(C.UNPACK_SKIP_PIXELS),Zn=_.getParameter(C.UNPACK_SKIP_ROWS),wi=_.getParameter(C.UNPACK_SKIP_IMAGES);_.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),_.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),_.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),_.pixelStorei(C.UNPACK_SKIP_ROWS,Zt),_.pixelStorei(C.UNPACK_SKIP_IMAGES,te);let ps=v.isDataArrayTexture||v.isData3DTexture,fe=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let Ae=k.get(v),Ti=k.get(P),_e=k.get(Ae.__renderTarget),Ai=k.get(Ti.__renderTarget);_.bindFramebuffer(C.READ_FRAMEBUFFER,_e.__webglFramebuffer),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let ms=0;ms<Tt;ms++)ps&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,k.get(v).__webglTexture,B,te+ms),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,k.get(P).__webglTexture,vt,Re+ms)),C.blitFramebuffer(Ct,Zt,bt,xt,At,he,bt,xt,C.DEPTH_BUFFER_BIT,C.NEAREST);_.bindFramebuffer(C.READ_FRAMEBUFFER,null),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||k.has(v)){let Ae=k.get(v),Ti=k.get(P);_.bindFramebuffer(C.READ_FRAMEBUFFER,U),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,z);for(let _e=0;_e<Tt;_e++)ps?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ae.__webglTexture,B,te+_e):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ae.__webglTexture,B),fe?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ti.__webglTexture,vt,Re+_e):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ti.__webglTexture,vt),B!==0?C.blitFramebuffer(Ct,Zt,bt,xt,At,he,bt,xt,C.COLOR_BUFFER_BIT,C.NEAREST):fe?C.copyTexSubImage3D(St,vt,At,he,Re+_e,Ct,Zt,bt,xt):C.copyTexSubImage2D(St,vt,At,he,Ct,Zt,bt,xt);_.bindFramebuffer(C.READ_FRAMEBUFFER,null),_.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else fe?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(St,vt,At,he,Re,bt,xt,Tt,pe,$e,xe.data):P.isCompressedArrayTexture?C.compressedTexSubImage3D(St,vt,At,he,Re,bt,xt,Tt,pe,xe.data):C.texSubImage3D(St,vt,At,he,Re,bt,xt,Tt,pe,$e,xe):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,vt,At,he,bt,xt,pe,$e,xe.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,vt,At,he,xe.width,xe.height,pe,xe.data):C.texSubImage2D(C.TEXTURE_2D,vt,At,he,bt,xt,pe,$e,xe);_.pixelStorei(C.UNPACK_ROW_LENGTH,on),_.pixelStorei(C.UNPACK_IMAGE_HEIGHT,re),_.pixelStorei(C.UNPACK_SKIP_PIXELS,An),_.pixelStorei(C.UNPACK_SKIP_ROWS,Zn),_.pixelStorei(C.UNPACK_SKIP_IMAGES,wi),vt===0&&P.generateMipmaps&&C.generateMipmap(St),_.unbindTexture()},this.initRenderTarget=function(v){k.get(v).__webglFramebuffer===void 0&&q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?q.setTextureCube(v,0):v.isData3DTexture?q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?q.setTexture2DArray(v,0):q.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){J=0,W=0,it=null,_.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var N1=class extends ji{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new pn;t.deleteAttribute("uv");let e=new He({side:De}),n=new He,s=new ea(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ne(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Cn(t,n,6),o=new Pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ne(t,ir(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ne(t,ir(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ne(t,ir(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new ne(t,ir(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new ne(t,ir(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new ne(t,ir(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ir(i){return new $r({color:0,emissive:16777215,emissiveIntensity:i})}var yd=[{id:"noqta",ar:"\u0646\u0642\u0637\u0629",tint:"#ffd9a8",drop:"gem"},{id:"farsho",ar:"\u0641\u0631\u0634\u0648",tint:"#c9f2e6",drop:"confetti"},{id:"qalamon",ar:"\u0642\u0644\u0645\u0648\u0646",tint:"#ffe3c4",drop:"gem"},{id:"talwina",ar:"\u062A\u0644\u0648\u064A\u0646\u0629",tint:"#ffe99a",drop:"confetti"},{id:"salsool",ar:"\u0635\u0644\u0635\u0648\u0644",tint:"#ffe0ef",drop:"bubble"},{id:"dalloola",ar:"\u062F\u0644\u0651\u0648\u0644\u0629",tint:"#d9d2f6",drop:"gem"},{id:"saqqora",ar:"\u0635\u0642\u0651\u0648\u0631\u0629",tint:"#cfe9f7",drop:"leaf"},{id:"tamoora",ar:"\u062A\u0645\u0651\u0648\u0631\u0629",tint:"#ffe6b0",drop:"leaf"},{id:"nawwoor",ar:"\u0646\u0648\u0651\u0648\u0631",tint:"#e4d6fb",drop:"gem"},{id:"kabbooba",ar:"\u0643\u0628\u0651\u0648\u0628\u0629",tint:"#fff0b8",drop:"petal"},{id:"warrooq",ar:"\u0648\u0631\u0651\u0648\u0642",tint:"#ffdcc2",drop:"confetti"}],Md="https://www.instagram.com/doo.moments/";var Oc={noqta:{w:1400,h:1924,nn:1333,num:[23,4,3,20,23,12,14,18,23,14,1,20,23,2,2,10,6,16,14,4,11,20,4,9,17,3,6,19,12,2,14,3,20,6,11,8,22,23,2,20,8,4,14,18,6,14,20,2,6,9,19,2,20,23,14,4,2,8,18,7,22,20,4,9,14,20,14,14,12,3,22,6,2,2,19,7,17,16,6,7,3,3,19,5,17,22,8,4,20,22,4,15,11,21,19,9,3,13,24,22,3,22,4,6,4,16,11,19,4,4,7,14,11,7,14,6,4,6,17,22,20,2,3,11,12,20,4,14,6,1,2,1,7,14,22,2,22,12,2,19,21,1,2,12,4,16,17,5,22,2,4,20,12,12,18,20,14,4,8,2,12,2,6,14,12,6,14,2,6,20,9,6,24,22,3,14,20,8,2,10,17,3,22,21,17,18,4,2,3,5,15,3,4,20,2,20,5,18,24,15,2,20,4,6,14,22,21,7,3,7,23,12,10,17,6,4,20,20,6,6,17,1,1,14,17,11,13,11,10,12,20,20,18,22,11,18,8,12,6,12,4,13,14,3,21,4,22,14,6,2,20,12,12,12,21,1,20,11,16,17,6,8,11,4,1,18,17,8,16,2,14,2,17,7,7,20,6,11,5,15,20,2,22,14,14,14,20,20,14,20,23,6,17,6,11,1,6,20,1,22,19,15,9,11,6,20,8,18,24,9,10,6,4,3,11,3,7,14,8,1,3,17,17,2,24,11,20,23,2,5,14,17,17,17,3,11,20,14,8,6,4,20,2,12,3,18,12,12,12,2,12,22,14,20,4,14,6,4,6,14,2,11,10,2,7,2,21,3,12,20,22,6,18,6,2,17,14,4,17,6,9,18,20,16,6,19,20,19,4,20,4,13,17,2,14,7,6,3,11,3,23,12,5,14,10,15,6,20,13,23,2,14,4,7,2,4,3,20,3,2,2,21,6,2,2,9,20,2,12,21,12,20,17,2,23,20,6,9,20,2,14,1,14,15,14,2,11,1,4,9,9,10,3,20,22,2,14,12,20,14,20,16,20,11,4,20,3,6,20,6,7,14,3,14,6,2,4,7,2,4,4,3,2,1,3,6,16,11,12,17,12,12,3,17,6,9,3,20,15,3,20,20,14,20,17,7,14,23,23,15,17,16,8,17,17,3,15,6,14,20,1,20,11,1,13,22,17,7,14,16,7,6,7,4,9,20,13,9,20,8,23,17,2,6,9,22,14,2,21,7,12,16,22,14,12,11,6,19,6,4,21,20,17,3,21,13,17,13,6,11,9,4,6,2,7,2,3,23,1,4,23,1,4,21,11,6,22,15,23,7,6,4,6,17,4,2,22,21,17,7,6,16,17,12,4,11,6,2,17,2,15,2,10,12,12,14,9,2,6,3,15,17,3,6,2,2,14,17,6,17,21,16,3,6,22,2,20,7,22,16,3,4,7,12,22,7,18,10,7,2,7,20,7,2,7,5,17,7,9,2,12,17,24,23,23,2,16,23,19,5,2,20,3,3,5,17,2,20,13,17,2,3,11,20,10,2,5,6,20,3,17,13,23,22,23,6,19,23,17,23,23,10,13,13,16,13,22,16,3,20,16,23,3,17,17,7,5,20,2,5,3,12,9,22,7,3,20,9,20,6,23,20,13,17,3,17,20,17,22,23,5,17,23,21,14,3,20,18,2,23,23,7,3,12,21,3,3,16,5,6,20,7,2,16,3,20,15,10,22,16,12,12,5,21,17,3,6,10,16,20,2,16,23,20,15,8,17,3,9,3,12,2,7,23,7,5,6,3,2,9,3,3,22,3,23,3,17,17,10,6,9,10,9,20,23,23,22,3,15,9,24,10,21,2,6,23,2,23,17,17,5,17,23,12,23,5,20,22,23,23,5,3,19,16,12,16,6,12,21,3,6,21,17,12,23,19,20,12,7,3,16,2,20,19,10,15,15,5,11,21,24,22,16,2,16,7,5,5,22,19,8,23,16,16,3,9,24,20,2,17,12,12,9,20,12,21,16,5,16,6,11,16,23,14,24,21,22,22,22,6,3,5,12,11,12,20,3,17,9,12,16,3,16,12,12,12,12,19,3,19,23,21,21,3,18,5,5,16,21,16,2,24,15,11,14,20,15,12,6,20,20,21,24,3,5,6,21,23,7,10,20,7,21,7,15,8,17,14,20,12,10,12,7,16,16,16,2,5,5,5,12,12,12,12,16,22,3,13,20,19,16,23,11,15,23,23,2,10,5,23,21,5,4,2,2,12,2,2,2,24,2,23,5,2,2,3,3,12,21,10,6,6,5,20,20,18,10,22,15,15,8,18,14,15,19,14,5,15,15,16,12,17,4,16,3,2,9,9,20,10,12,5,5,12,5,5,4,5,5,20,15,16,15,15,12,12,12,12,15,12,15,12,5,12,12,4,12,12,12,12,12,19,12,15,18,12,12,20,20,6,10,12,12,18,12,20,12,18,12,6,15,12,18,12,6,18,18,20,20,12,12,3,12,12,10,3,20,6,6,22,22,16,6,3,24,21,3,21,19,13,21,20,6,20,20,20,19,20,19,20,19,20,21,7,11,22,21,21,23,11,24,11,7,20,16,23,21,23,23,24,24,24,4,2,16,2,16,23,16,21,23,16,16,23,23,23,2,2,2,2,21,13,2,2,2,3,2,3,21,2,2,11,12,11,7,9,2,14,2,3,6,3,3,3,3,3,12,14,7,12,3,3,11,13,20,7,5,5,10,5,5,20,20,22,10,10,7,4,10,7,7,15,12,22,15,16,20,5,20,18,22,18,2,15,14,14,14,14,21,17,14,21,21,21,21,15,14,15,14,14,14,18,17,14,16,18,10,12,10,10,12,16,12,4,5,5,4,12,4,5,5,3,5,12,5,16,20,19,5,20,15,15,12,20,12,20,4,16,16,9,22,2,2,9,3,3,22,2,9,17,17,9,17,2,3,2,2,17,3,2,3,21,10,2,2,2,16,12,16,10,7,10,2],area:[25509,25809,15775,13839,13787,12808,10787,10277,9685,9506,9336,9519,8517,8147,7955,7694,6600,5799,5750,4954,5055,4785,4785,4565,4297,4016,3992,4070,4021,4127,4082,3933,3774,3822,3882,3597,3781,4221,3355,3435,3423,3348,3452,3230,3200,3201,3127,3186,2973,3015,3028,3005,3088,3295,2846,2790,2754,2714,2710,2945,2746,2684,2731,2603,2595,2673,2604,2804,2526,2543,2655,2568,2696,2542,2479,2452,2499,2460,2512,2342,2348,2462,2469,2426,2354,2312,2243,2327,2215,2366,2263,2160,2152,2246,2151,2238,1999,2115,2147,2064,2137,2133,2023,2046,1988,2084,2037,2003,1970,1979,2037,1999,1934,2143,1899,1898,1917,1893,1894,1938,1854,1865,2102,1952,1809,1875,1802,1792,1783,1731,1719,1734,1827,1704,1727,1687,1700,1710,1697,1662,1696,1626,1666,1616,1650,1634,1673,1717,1690,1638,1578,1608,1570,1562,1547,1524,1577,1480,1564,1493,1431,1454,1480,1579,1527,1519,1433,1476,1531,1420,1439,1464,1532,1437,1418,1403,1358,1372,1472,1408,1383,1408,1355,1445,1341,1326,1361,1412,1329,1471,1372,1298,1293,1283,1379,1320,1514,1289,1302,1295,1242,1317,1272,1354,1283,1329,1290,1210,1231,1245,1236,1176,1200,1240,1203,1229,1197,1179,1266,1205,1215,1192,1193,1186,1142,1159,1156,1141,1122,1170,1171,1125,1183,1185,1091,1126,1111,1085,1069,1155,1115,1112,1063,1053,1173,1123,1075,1057,1028,1048,1016,1032,1024,1019,1081,1004,1025,1026,1099,1059,1029,979,1060,1056,972,1065,1015,991,991,1005,1011,1052,968,947,950,941,1023,978,1010,929,939,932,920,919,1004,888,964,943,885,947,907,881,892,916,885,880,887,884,869,875,879,869,863,854,841,827,819,858,913,829,890,871,845,816,849,800,907,810,820,842,797,797,849,797,821,792,812,949,880,839,743,779,807,790,749,798,776,807,766,815,748,779,863,800,798,769,745,790,747,744,752,773,742,744,767,718,708,722,773,759,718,770,737,739,769,730,763,773,739,733,689,710,686,720,706,748,729,718,699,734,688,709,709,733,682,695,673,683,649,661,667,677,647,641,656,681,658,646,651,645,670,614,638,628,617,622,600,612,649,783,587,610,604,611,629,590,602,571,565,563,569,682,559,556,567,574,574,565,572,593,546,564,562,552,596,548,555,546,573,573,551,550,549,559,533,586,556,524,554,520,532,522,528,512,549,522,516,512,522,509,535,525,472,481,491,504,468,483,514,482,500,504,506,494,494,470,509,480,511,472,496,463,475,504,452,494,473,481,459,490,464,457,529,478,481,446,533,477,459,451,455,476,448,429,450,448,462,442,458,443,433,524,442,454,529,446,427,452,495,430,412,420,408,400,421,411,429,408,417,420,446,408,398,408,413,383,422,412,382,403,389,404,392,408,386,403,390,395,394,386,410,377,369,391,418,375,401,387,389,406,380,388,405,355,369,365,361,406,353,368,368,343,353,358,345,354,340,343,357,327,355,340,327,333,336,331,320,311,328,350,321,306,307,324,321,327,312,326,329,311,311,337,308,351,303,291,297,311,288,283,406,280,311,291,305,285,299,292,274,295,267,268,296,263,276,260,275,327,297,262,305,260,275,251,258,281,294,260,251,269,245,238,245,244,237,261,258,244,229,228,227,284,231,226,237,244,236,232,234,262,222,235,244,223,248,211,191,245,190,202,237,209,202,209,209,187,212,220,188,192,181,184,176,213,223,175,218,182,188,192,171,168,158,199,194,177,194,159,159,195,169,168,175,155,166,151,165,149,141,169,154,163,144,150,143,146,146,139,127,142,146,132,131,133,132,141,145,134,133,126,124,138,130,113,128,143,135,117,123,117,114,117,156,115,115,112,107,122,115,109,121,129,117,112,103,116,111,137,108,97,106,129,104,115,111,96,106,97,98,112,122,112,90,94,111,104,98,86,102,87,82,86,84,91,97,130,83,88,84,85,77,88,88,73,82,74,78,82,70,82,81,73,95,74,62,62,60,75,63,64,69,70,77,84,63,55,88,68,96,62,84,80,72,63,73,60,58,55,49,61,56,50,69,65,50,56,48,49,53,48,58,50,49,66,55,63,49,45,42,49,64,46,53,41,56,43,45,66,52,45,36,43,44,38,35,38,48,42,40,38,35,40,47,31,46,36,32,35,29,28,34,34,31,40,42,32,27,28,29,29,33,26,23,24,24,24,24,25,20,20,28,27,17,22,16,24,29,25,20,18,23,14,28,17,18,19,23,13,15,16,14,19,14,10,15,15,18,14,14,10,13,19,16,14,12,8,13,20,18,19,16,11,23,17,13,9,5,14,11,9,7,9,9,7,11,8,9,12,9,13,8,10,10,4,14,13,12,12,9,9,15,6,11,12,7,8,17,3,9,8,8,6,8,6,5,6,9,4,2,4,0,2,4,3,5,9,7,7,6,4,4,9,8,2,4,7,9,4,2,9,10,6,4,6,4,4,4,4,4,1,2,8,0,7,6,6,6,6,7,7,11,10,4,6,5,5,5,5,3,3,5,3,6,5,9,5,3,3,10,4,1,0,0,0,0,0,0,2,4,1,0,0,0,2,0,1,5,5,2,6,2,3,0,5,3,0,2,2,2,2,1,0,1,2,0,4,2,0,1,0,2,2,5,0,7,2,2,2,1,5,2,3,3,1,0,2,3,1,2,5,1,0,2,2,2,0,1,0,0,1,0,0,0,2,0,0,0,0,2,0,2,2,0,2,3,1,0,2,1,2,0,2,0,3,0,0,3,0,0,4,1,1,1,0,0,0,3,2,2,4,3,2,2,0,0,1,0,0,3,0,0,4,4,0,0,1,0,0,0,0,0,0,0,1,0,2,0,0,1,0,0,0,0,4,5,1,6,0,6,4,0,0,0,0,0,0,0,0,0,0,5,1,1,3,2,0,0,1,2,4,2,6,7,0,3,5,6,1,2,4,0,2,1,2,0,3,0,0,1,0,1,4,5,3,4,2,4,3,1,1,3,0,0,0,0,5,0,4,3,4,5,1,2,0,10,0,6,4,2,3,8,3,4,3,5,1,3,1,0,0,1,0,2,1,2,1,0,0,5,1,0,1,0,0,2,2,0,7,3,1,0,6,3,0,0,0,0,1,4,0,0,0,0,3,0,0,1,0,0,2,4,1,0,0,0,4,5,0,9,3,5,4,0],n:2310,pal:[[1,"#f4cafe"],[2,"#dec1c8"],[3,"#efaf5a"],[4,"#d5acdf"],[5,"#d48dd3"],[6,"#f88117"],[7,"#b699a0"],[8,"#df6cff"],[9,"#f36d8b"],[10,"#ad85b6"],[11,"#c756e9"],[12,"#b46fb4"],[13,"#ce5f00"],[14,"#b03fd2"],[15,"#a048ad"],[16,"#955296"],[17,"#ae3e20"],[18,"#9926bb"],[19,"#8200a5"],[20,"#771f85"],[21,"#543135"],[22,"#580067"],[23,"#282828"],[24,"#260d0f"]],box:[.0770866440843975,.06882719655956604,.9229133822767345,.8907875144413061]},farsho:{w:1400,h:1840,nn:1472,num:[12,5,23,5,9,12,23,3,23,12,8,9,17,12,16,16,16,16,16,2,9,11,5,3,12,16,16,16,12,11,21,16,9,16,9,7,12,16,2,3,8,12,20,9,5,12,12,5,11,14,8,20,11,3,9,18,16,8,17,9,5,20,13,4,4,10,9,3,16,15,12,12,11,3,14,12,1,12,1,5,12,12,17,12,12,6,4,17,16,16,23,19,17,3,16,11,14,8,12,17,6,16,10,14,10,16,1,4,3,5,5,8,16,12,20,13,12,9,12,9,16,12,10,7,5,5,4,10,3,1,15,23,5,7,9,6,9,9,9,7,3,12,12,22,15,3,14,5,18,3,9,9,22,12,9,16,15,20,12,5,12,14,23,13,12,10,2,12,14,9,11,7,12,9,12,12,4,12,16,3,16,16,16,21,14,12,8,5,16,6,16,16,5,12,11,9,20,2,12,4,8,12,5,18,13,9,12,7,16,12,22,10,10,6,7,7,8,7,14,5,7,3,12,12,11,15,2,14,23,15,7,8,16,8,12,9,7,15,10,9,11,14,10,5,1,22,5,14,14,8,10,3,12,11,9,3,16,16,9,3,12,3,20,12,23,22,20,1,3,3,10,10,5,14,8,8,20,4,14,7,10,8,5,2,7,16,5,9,3,19,20,22,16,16,9,17,12,5,8,12,3,16,9,3,11,8,11,14,9,12,11,5,14,8,9,4,9,16,12,5,19,16,10,9,12,6,9,10,11,10,16,12,7,10,14,14,9,11,10,15,5,7,16,8,1,14,7,3,15,15,8,5,3,14,16,12,10,2,12,10,4,2,4,18,1,16,23,16,10,9,19,2,7,7,10,14,3,4,4,10,1,18,7,12,14,1,10,12,23,6,3,14,9,11,11,15,18,3,5,3,5,11,9,9,3,9,7,7,4,5,7,18,23,10,12,11,5,16,4,10,12,16,13,3,9,12,8,1,8,8,10,12,10,8,19,12,8,2,7,20,4,16,8,18,3,3,11,4,12,15,10,16,7,12,16,9,4,16,12,3,18,9,1,12,9,18,5,8,7,9,12,12,18,4,2,10,4,5,5,14,12,1,10,7,3,16,10,5,20,11,11,14,8,7,12,19,10,4,12,14,5,11,22,10,3,10,5,20,3,16,10,16,6,9,16,1,10,7,3,12,17,4,3,22,4,18,16,9,12,16,2,7,6,18,4,10,8,5,9,12,6,3,3,8,6,12,3,3,7,8,5,8,16,20,16,2,8,10,8,17,14,5,15,4,1,5,18,16,23,7,18,3,10,11,16,12,8,3,10,5,9,4,15,4,13,4,3,12,18,9,8,10,10,12,3,20,4,16,16,9,16,18,12,18,7,20,20,9,8,5,3,14,23,13,10,2,12,9,5,10,23,16,9,18,12,23,5,5,6,8,5,21,10,15,23,10,10,9,3,10,10,11,7,7,3,3,23,16,16,10,10,10,19,22,4,2,20,6,3,4,10,2,18,12,8,5,10,18,4,16,3,2,11,10,18,9,23,1,10,20,3,10,2,16,23,16,9,9,18,12,19,20,20,16,3,4,4,23,10,3,19,12,3,5,3,2,23,7,18,23,18,16,16,12,3,3,3,3,12,10,11,16,3,3,2,23,3,10,3,9,18,3,2,20,23,10,3,3,12,10,3,2,20,3,10,3,3,20,7,22,8,4,20,16,3,16,9,3,16,8,12,4,3,3,20,3,4,10,12,16,18,7,22,6,12,3,3,6,4,4,13,20,18,3,9,9,10,10,10,6,16,18,5,4,3,10,3,9,8,4,20,16,10,3,4,4,4,12,3,10,10,1,6,18,18,9,19,3,3,6,4,2,18,10,20,16,3,10,5,17,20,9,3,20,16,16,3,10,16,8,20,3,3,3,1,18,10,10,3,2,2,20,18,3,16,3,6,1,19,22,18,9,18,18,16,10,4,10,12,3,10,9,18,18,20,3,9,9,1,3,3,3,4,22,18,20,3,3,3,10,16,10,3,3,16,3,2,5,23,3,20,3,3,3,10,18,4,4,4,23,18,3,18,10,9,9,5,2,18,16,16,18,16,23,10,18,18,3,18,18,3,18,19,12,10,9,20,18,20,18,9,3,9,18,20,20,9,9,3,10,1,3,9,1,7,5,5,5,23,3,3,22,23,18,18,10,12,3,3,9,3,3,3,3,16,16,20,1,3,3,22,9,10,3,3,10,4,4,4,21,16,16,20,20,3,23,18,10,3,10,23,23,20,20,3,3,3,3,9,18,20,20,9,20,20,8,3,3,2,7,4,4,7,1,4,5,5,11,15,13,13,22,18,12,22,20,20,20,10,3,18,18,3,3,23,16,18,18,23,18,18,18,23,23,6,3,18,20,23,18,18,3,3,3,16,12,12,12,23,3,3,16,3,14,3,20,20,16,10,3,3,3,3,3,3,3,19,22,22,18,20,18,9,9,3,3,1,3,10,3,12,3,18,2,1,4,4,7,7,4,5,5,5,5,7,4,4,7,4,2,1,2,4,2,2,2,2,2,5,5,5,2,7,7,7,2,4,7,2,5,7,5,5,5,5,2,5,7,7,7,11,7,7,7,7,13,15,17,13,4,13,13,21,21,4,4,9,4,10,4,4,4,4,22,20,20,19,16,19,20,22,20,22,22,22,20,20,20,20,8,23,20,23,20,19,16,20,10,22,16,20,20,3,20,20,20,20,20,18,18,20,20,18,18,18,18,18,18,12,18,3,10,3,12,3,23,3,16,9,23,18,18,3,23,23,23,23,3,23,23,18,10,18,10,10,18,18,14,23,14,23,18,23,18,18,18,18,23,23,18,10,18,9,18,9,3,18,9,18,18,18,3,23,3,23,18,18,10,10,10,10,6,1,3,10,3,3,10,10,18,3,19,19,3,18,10,19,3,3,3,3,3,3,3,10,10,18,18,3,18,18,18,1,18,10,3,18,10,12,3,18,3,10,12,6,9,3,9,18,3,18,10,9,9,18,3,12,9,20,19,10,20,19,3,20,22,3,18,3,3,23,3,3,3,3,3,20,3,20,23,3,16,16,16,16,16,16,16,20,3,20,12,3,12,12,3,12,16,3,12,20,14,1,14,14,20,20,14,14,19,19,19,19,10,10,3,9,12,3,10,3,10,10,1,10,3,12,3,3,3,3,3,3,10,3,3,3,3,16,9,12,3,3,9,12,10,14,10,19,22,9,22,3,18,18,18,9,9,10,3,10,8,10,10,10,18,20,20,3,3,10,1,3,6,3,6,10,3,10,12,12,10,12,12,3,3,3,3,6,4,9,9],area:[48152,27037,10233,10371,8583,9109,8576,8378,8250,8411,8123,7030,6790,6967,6174,5080,4684,4595,4853,4544,4522,4444,4193,4269,4073,4034,4153,4032,3966,4093,4043,3909,3742,3645,3774,3615,3641,3603,3524,3478,3434,3581,3399,3341,3325,3208,3241,3231,3103,3168,3181,3050,3083,3120,2998,3120,2789,2995,2711,2729,2712,2781,2731,2769,2523,2580,2460,2573,2507,2388,2330,2417,2354,2325,2359,2338,2215,2155,2362,2147,2174,2138,2185,2133,2142,2217,2243,2061,2066,2033,2113,2029,2107,2135,2014,1963,1976,1920,1913,1968,1946,1851,1874,1964,2016,1827,1876,1814,1914,1825,1783,1771,1751,1726,1807,1900,1874,1691,1708,1735,1688,1727,1816,1761,1668,1665,1677,1882,1719,1682,1624,1619,1575,1618,1681,1633,1574,1588,1514,1464,1483,1463,1485,1486,1500,1454,1427,1436,1479,1463,1401,1461,1499,1391,1448,1345,1401,1513,1327,1402,1346,1303,1417,1280,1262,1272,1228,1260,1272,1377,1221,1277,1263,1206,1198,1231,1211,1210,1241,1181,1280,1153,1234,1186,1162,1164,1205,1137,1157,1133,1119,1131,1112,1144,1132,1123,1170,1051,1073,1173,1161,1079,1075,1145,1073,1067,1033,1168,1077,1104,1066,1103,1121,1084,1033,1051,1034,991,996,977,985,1055,1010,1014,1024,983,960,999,1114,994,960,995,1035,978,939,997,946,953,975,916,940,937,954,916,947,928,922,948,885,948,931,943,928,894,912,931,873,877,919,974,871,907,858,865,936,828,909,840,959,877,873,863,828,884,846,841,823,824,800,839,830,802,844,838,859,786,828,790,876,792,822,819,787,789,781,801,744,739,780,763,754,800,726,774,741,743,731,733,760,752,738,796,738,796,715,775,727,702,697,747,790,679,726,679,690,696,666,715,684,683,672,647,661,662,670,644,685,656,647,629,653,643,630,615,664,632,663,673,631,634,626,623,679,628,646,642,637,627,612,606,664,617,573,559,615,610,639,561,597,605,570,549,598,557,544,572,550,579,577,567,588,581,529,530,521,552,541,522,545,517,519,528,548,527,507,523,598,507,514,586,515,503,537,529,525,538,507,485,477,475,504,513,574,502,474,477,476,461,468,498,469,466,480,460,471,433,486,464,511,450,471,455,446,442,462,464,449,471,430,477,448,440,461,437,432,471,447,453,417,424,420,396,422,423,412,427,385,421,390,401,421,395,373,423,399,372,387,371,383,397,375,382,390,467,374,391,426,360,371,367,349,377,382,357,354,359,393,436,398,339,345,349,375,358,334,339,343,377,354,349,326,333,337,356,323,349,327,354,423,352,354,350,343,329,331,363,347,314,387,309,326,323,334,318,336,344,344,318,303,314,308,308,300,339,323,304,287,302,325,306,332,291,299,295,297,348,338,300,293,290,298,292,285,321,285,374,309,335,282,276,271,278,274,271,269,260,269,267,259,268,264,309,286,259,283,252,243,256,320,300,250,274,245,272,276,248,260,221,245,231,226,256,247,226,232,282,275,224,238,221,225,233,248,219,209,261,220,220,242,206,242,221,231,222,231,199,254,200,210,189,222,232,274,253,222,210,197,209,218,193,194,185,182,203,186,181,202,184,194,208,184,182,178,184,190,180,199,188,166,190,171,177,170,190,186,174,257,166,158,159,166,174,198,163,151,154,157,166,162,150,201,155,152,145,149,147,168,152,150,147,146,138,143,140,147,148,134,130,126,157,137,121,144,139,133,137,135,142,134,159,126,138,137,124,135,117,121,108,112,135,116,111,122,110,122,123,113,102,107,117,123,136,111,133,99,111,133,96,99,107,99,111,91,79,95,87,92,116,88,92,88,89,89,90,89,101,91,81,76,131,66,88,95,76,86,86,87,89,84,79,93,73,90,76,67,75,77,72,68,79,117,80,105,101,64,63,66,77,61,85,63,67,64,75,101,61,59,70,58,73,65,60,65,53,72,57,59,91,60,52,55,49,54,49,58,52,61,49,55,53,49,86,61,49,73,87,46,61,53,46,45,49,53,51,54,47,69,69,43,56,66,69,50,52,51,48,66,62,52,46,44,36,53,43,40,93,42,41,41,40,35,51,49,37,46,35,46,58,30,59,45,30,45,40,37,42,42,47,41,41,44,36,33,38,29,32,32,34,61,56,30,37,29,24,30,21,36,34,43,23,30,25,26,31,26,40,21,25,23,44,24,24,28,29,23,35,27,21,28,17,23,29,19,33,33,21,22,22,19,19,20,17,19,14,22,21,21,18,33,16,22,18,21,17,22,41,13,21,14,16,14,14,16,16,19,16,15,13,21,16,15,13,15,16,13,13,15,16,9,14,11,18,8,13,18,12,10,22,20,25,13,19,17,15,13,15,20,25,13,8,11,10,12,12,18,20,9,9,9,9,7,8,10,8,15,8,8,8,12,9,8,9,10,18,21,32,9,9,5,22,15,20,17,14,20,8,12,7,7,5,2,8,6,3,4,3,9,4,3,6,8,2,12,0,2,4,2,11,2,7,7,6,11,5,6,6,7,4,4,6,4,5,4,4,5,5,8,7,2,6,5,3,2,10,4,4,3,3,6,7,6,4,6,2,12,5,4,6,10,5,4,6,6,10,5,9,3,6,4,11,7,9,3,7,10,3,13,19,5,6,7,7,2,1,7,2,4,2,4,0,5,2,0,2,0,0,0,1,3,1,1,0,7,1,0,0,0,0,0,0,0,0,1,0,1,0,14,1,2,1,0,1,0,0,0,0,1,1,0,2,0,2,7,2,2,0,0,2,1,0,2,4,1,4,5,2,0,6,0,7,5,1,4,1,1,3,0,0,0,0,1,3,0,0,0,2,0,1,0,2,0,0,0,0,1,2,0,2,0,0,0,0,3,0,2,1,2,4,2,4,5,4,1,4,1,1,2,7,1,1,2,0,2,0,2,0,5,0,5,0,3,2,9,1,0,1,0,13,0,0,4,4,5,0,2,7,2,2,0,2,0,3,0,0,2,3,2,0,1,4,2,4,0,0,0,1,0,0,0,2,0,0,0,6,0,2,1,2,3,1,3,0,0,3,0,0,1,2,4,2,1,0,0,5,2,4,0,1,0,1,0,0,3,2,6,0,7,5,1,3,2,3,3,3,2,2,4,4,2,3,2,3,0,3,0,1,2,5,9,4,4,5,8,3,4,2,2,4,1,0,2,2,0,4,0,0,5,0,10,3,1,0,2,3,2,7,5,2,3,5,7,10,4,4,4,0,0,1,2,0,4,0,6,2,1,2,5,0,0,5,7,0,4,0,0,1,0,0,2,0,0,0,0,16,7,0,0,4,5,0,7,0,0,6,3,0,2,2,1,1,1,6,2,0,2,10,7,0,0,4,0,0,0,3,0,6,0,1,0,0,0,1,8,1,7,3,1,1,0,5,0,3,0,1,3,0,1,4,7,5,0,0,13,0,2,2,1,2,1,0,0,2,0,6,2,4,0,1,13,0,0,2],n:2584,pal:[[1,"#ffe7d7"],[2,"#64f9de"],[3,"#e2c9b9"],[4,"#d0c4c9"],[5,"#42ddc3"],[6,"#ffa952"],[7,"#28c6ad"],[8,"#fd933e"],[9,"#ad9ea2"],[10,"#ca8f6d"],[11,"#13ae98"],[12,"#e47e28"],[13,"#48a29d"],[14,"#c76609"],[15,"#00917c"],[16,"#b7581a"],[17,"#117974"],[18,"#705956"],[19,"#883100"],[20,"#7d3613"],[21,"#005652"],[22,"#541200"],[23,"#282828"]],box:[.05776786132226177,.06882719655956604,.9422321650388702,.8907875144413061]},qalamon:{w:1400,h:1911,nn:1274,num:[2,14,14,17,11,2,7,23,23,17,23,3,11,13,2,13,7,11,14,8,14,8,18,14,11,4,2,3,11,5,17,19,14,5,11,11,13,1,5,9,11,11,2,3,8,13,5,20,21,11,8,14,14,3,3,18,11,16,14,16,14,8,8,11,8,14,17,14,3,12,2,11,10,8,7,1,17,14,13,17,3,14,8,13,17,13,13,20,2,14,9,13,16,19,11,11,9,13,3,20,17,17,23,17,14,3,8,20,14,14,11,17,15,2,20,2,11,14,11,19,11,6,20,8,17,3,17,17,14,11,2,14,11,17,5,14,9,3,3,13,3,8,20,2,14,11,2,17,11,12,3,6,19,15,8,10,15,20,9,9,8,1,11,8,1,22,13,11,3,8,6,6,23,3,14,14,23,3,14,17,8,17,2,8,3,8,2,4,8,16,11,13,17,11,11,3,10,9,3,16,9,14,2,3,11,14,3,9,13,8,9,2,8,11,13,7,8,23,3,11,7,3,3,4,20,9,20,7,12,3,2,8,2,11,8,14,8,8,8,3,11,11,3,3,11,4,11,7,11,17,11,9,2,8,3,17,19,17,20,3,8,4,19,3,8,2,17,3,8,10,19,13,14,9,6,16,8,21,14,3,17,17,14,9,8,11,14,13,3,9,17,20,17,8,2,8,2,2,17,11,12,20,7,12,7,14,21,8,13,8,3,9,15,2,11,3,16,15,3,6,17,17,3,17,14,17,8,9,17,8,2,6,2,8,17,13,13,9,8,4,9,17,3,17,8,17,14,17,21,14,14,14,18,14,14,3,2,12,4,3,9,5,3,3,7,2,14,9,6,3,22,11,13,14,11,20,3,8,13,7,11,2,7,5,8,14,7,3,14,8,13,2,11,17,4,11,9,14,14,9,20,10,11,7,4,14,6,17,5,22,8,6,7,19,9,3,16,4,3,11,8,20,3,17,21,13,20,15,6,3,16,17,9,4,13,17,17,9,14,17,8,14,18,3,3,13,13,16,14,13,3,1,17,15,13,14,4,11,17,4,13,13,17,3,8,12,7,17,17,15,3,15,13,14,11,14,20,3,2,3,8,2,14,11,17,13,13,1,14,17,2,11,3,11,16,8,3,20,6,8,14,4,3,13,20,13,14,17,9,16,17,17,15,11,14,8,20,13,20,9,20,14,21,3,21,8,17,7,3,3,8,15,9,19,10,2,17,21,11,14,11,17,13,20,9,23,23,11,18,3,20,23,14,8,8,23,3,8,7,7,7,14,13,3,9,9,20,6,3,8,3,8,2,15,11,9,11,4,20,9,7,9,2,21,7,9,17,17,13,14,20,11,15,10,4,15,2,13,3,21,13,13,5,7,20,8,21,19,20,2,23,20,16,8,15,15,11,14,10,15,4,15,20,9,9,9,3,13,19,2,11,20,12,15,2,17,15,6,15,9,15,3,20,19,20,19,11,23,19,11,14,17,20,9,14,11,17,6,13,5,7,15,15,8,15,2,20,20,19,4,15,22,15,13,11,2,4,20,20,11,7,20,17,19,2,3,8,17,20,23,16,11,13,6,5,9,10,2,13,13,12,10,10,17,5,13,20,6,13,17,9,2,15,6,6,19,4,2,20,4,16,23,4,15,2,13,20,4,15,2,16,19,20,13,20,11,4,10,17,8,15,4,20,19,19,2,23,13,2,2,13,19,17,13,2,20,15,4,19,19,4,2,2,14,19,13,2,17,19,15,15,10,6,2,5,17,19,13,20,20,20,8,2,16,21,4,15,17,20,20,19,17,10,22,15,15,19,6,8,8,2,8,13,6,20,9,20,2,16,1,15,23,20,17,4,5,2,4,9,2,20,20,19,10,15,20,2,11,11,17,20,15,15,9,2,9,21,2,10,15,22,13,19,19,19,19,22,22,15,9,2,20,19,15,4,19,8,17,5,17,9,4,21,2,2,2,2,2,6,13,21,21,20,20,20,20,22,22,19,22,19,19,19,19,8,15,15,10,4,4,13,8,16,9,16,5,16,9,2,2,2,10,8,10,10,13,13,11,11,22,11,21,20,20,20,5,21,19,23,19,19,15,19,19,15,19,15,19,15,15,13,4,19,21,20,19,9,19,18,20,20,13,2,2,18,21,5,6,6,6,8,9,5,20,2,2,2,2,2,2,5,4,17,8,10,22,22,22,22,22,10,2,2,2,2,2,2,14,14,14,11,21,22,20,11,11,20,21,21,20,20,20,20,20,22,20,20,20,20,20,17,20,20,20,13,13,20,9,20,5,20,20,20,20,20,20,17,20,20,20,20,4,20,20,20,13,17,17,4,20,19,20,19,22,6,19,19,19,22,19,22,19,19,9,19,22,19,5,19,14,9,22,19,22,23,15,23,22,19,22,19,13,19,22,19,19,22,19,19,19,19,15,23,11,11,15,4,13,15,19,19,19,15,15,19,15,15,2,10,19,15,5,5,9,13,9,9,9,2,9,2,4,9,2,9,2,9,9,9,9,5,9,5,11,21,5,20,5,20,20,20,17,20,5,20,19,11,11,22,13,8,4,4,4,4,4,5,5,21,16,17,20,4,6,17,4,4,13,13,2,17,5,2,2,2,2,4,2,5,14,2,2,2,2,13,13,13,4,13,2,17,18,13,2,17,13,2,2,2,9,5,2,21,18,21,6,11,2,2,11,5,5,5,11,4,4,8,9,9,10,4,6,4,6,6,6,16,9,5,5,5,5,9,3,4,4,4,17,20,4,5,9,13,2,19,19,12,2,2,2,2,19,2,2,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,4,2,2,4,4,12,6,7,8,6,5,5,5,2,2,6,6,4,10,15],area:[30253,28424,21061,19343,14327,13588,13293,12482,10629,10022,10336,9687,9518,9373,8546,8317,8811,8293,7646,7262,6632,6375,6168,5507,5445,5550,5254,4930,4477,4238,4449,4765,4197,4274,4031,3928,3652,3507,3351,3516,3341,3589,3275,3290,3345,3075,2989,3189,3057,2925,2944,2820,2814,2895,2747,2614,2567,2677,2504,2498,2574,2493,2455,2442,2541,2439,2404,2673,2351,2321,2341,2294,2219,2269,2143,2099,2136,2065,2094,2112,2128,2143,2211,2058,2022,2065,2138,2238,1969,2025,1991,1930,1883,2141,1891,1875,2039,1921,1940,1951,1846,1836,1912,1854,1864,1791,1775,1867,1764,1902,1760,1703,1785,1817,1701,1672,1724,1682,1677,1712,1668,1613,1633,1651,1604,1699,1623,1621,1584,1608,1564,1529,1578,1583,1502,1489,1458,1470,1444,1455,1587,1501,1537,1491,1500,1482,1460,1471,1433,1513,1536,1445,1468,1435,1365,1467,1401,1473,1328,1450,1364,1295,1312,1316,1310,1287,1296,1331,1287,1274,1299,1305,1212,1246,1241,1233,1386,1339,1223,1186,1339,1173,1172,1172,1205,1166,1119,1150,1159,1102,1104,1093,1092,1088,1093,1132,1135,1140,1079,1118,1128,1128,1048,1099,1051,1073,1011,1044,1045,1081,1094,1007,993,1078,1017,1013,1017,1018,1104,996,964,1025,1003,1051,954,991,955,983,982,959,952,950,952,1058,942,910,944,915,927,924,894,898,914,993,904,879,917,965,873,892,902,899,918,888,880,863,875,866,871,882,870,914,911,844,845,832,803,914,861,822,943,825,795,844,867,815,795,805,827,800,810,767,773,860,763,799,784,762,850,810,788,749,745,774,740,753,734,722,750,696,719,734,733,715,808,703,755,736,703,684,730,684,751,723,680,722,757,681,781,717,690,726,698,676,664,647,664,660,657,660,662,671,629,707,629,686,654,719,671,628,648,647,644,665,662,699,600,628,624,612,666,615,611,633,615,638,611,592,589,624,591,599,605,615,577,580,572,579,582,592,574,560,601,587,565,581,615,571,562,607,572,560,599,574,587,550,568,581,572,564,579,569,539,617,567,511,549,521,524,554,640,544,539,505,523,511,526,505,510,510,506,533,538,541,505,509,499,511,491,481,481,468,469,486,529,483,525,493,521,505,474,462,488,453,465,447,449,474,474,474,461,483,468,482,455,433,447,427,431,462,418,454,407,457,434,437,426,415,432,497,424,414,428,427,422,404,433,421,439,463,453,468,416,389,420,402,436,393,380,412,408,405,401,381,392,410,392,417,418,400,387,386,391,396,400,370,382,382,379,439,384,371,376,370,371,364,383,375,382,366,457,370,423,357,351,364,414,371,386,404,390,350,353,358,364,364,352,348,353,354,344,410,337,341,331,329,327,345,353,330,333,340,322,363,324,349,355,307,322,315,306,326,303,324,303,327,300,289,316,316,327,290,282,279,402,308,298,281,273,269,281,268,355,296,273,270,291,264,268,275,267,300,260,247,292,271,252,255,245,245,270,256,258,248,267,249,237,241,241,250,248,242,245,239,223,227,218,213,230,241,239,217,228,210,218,220,194,203,229,214,260,209,215,194,195,198,209,211,239,201,196,209,223,181,208,201,214,172,183,229,193,179,181,211,182,171,165,173,189,176,146,168,152,159,160,148,157,172,151,144,134,134,148,145,134,205,144,150,134,134,137,120,124,135,126,125,131,132,136,128,144,124,126,152,120,127,110,116,128,118,127,126,116,109,114,105,113,111,92,93,97,92,90,143,91,109,86,112,82,118,143,97,149,80,70,94,84,87,80,82,72,83,71,75,95,76,68,86,73,86,60,69,72,56,82,55,59,53,53,69,69,65,64,71,56,66,42,51,51,59,55,54,47,42,59,51,65,53,47,51,52,67,41,54,54,46,49,59,39,48,59,37,43,64,50,38,35,37,43,38,37,31,46,35,40,41,51,27,29,35,31,27,28,26,36,34,31,37,30,32,33,33,26,44,25,28,24,34,43,22,25,18,27,28,29,22,32,42,30,23,20,19,36,25,23,16,24,27,19,22,27,17,15,30,23,17,16,24,19,20,16,19,9,10,16,16,18,6,15,10,24,16,17,17,12,13,19,14,18,14,11,17,7,13,11,14,26,17,13,7,7,9,14,4,16,13,16,8,9,12,3,8,11,16,8,16,8,10,12,7,10,14,9,15,7,12,9,9,15,8,26,20,6,9,15,5,3,2,5,2,5,4,6,3,8,7,4,3,2,6,3,7,3,2,6,2,5,4,6,10,2,7,8,4,6,5,17,5,0,4,3,3,6,8,6,10,15,6,6,6,5,4,7,9,13,5,19,5,6,3,7,4,6,6,1,0,3,0,0,0,4,0,0,0,0,0,0,0,0,0,0,1,0,2,4,3,7,0,0,1,0,2,4,2,1,3,1,0,6,0,1,3,1,2,2,5,5,1,2,12,2,3,1,4,4,1,0,3,2,2,5,0,1,3,1,0,0,0,0,1,1,0,0,0,4,0,0,2,0,4,0,1,3,1,2,0,0,1,0,0,0,0,2,0,0,8,0,0,8,0,2,4,0,0,1,0,0,2,2,0,4,3,1,2,3,4,0,0,4,4,2,4,0,4,4,4,2,10,1,2,6,3,3,0,0,0,9,0,12,8,5,0,4,6,3,4,5,4,4,13,3,4,12,0,0,15,2,10,4,3,4,0,4,8,3,2,0,0,0,0,14,8,2,3,2,4,2,3,0,10,4,0,7,12,0,5,4,0,1,4,0,1,2,3,2,4,2,4,0,0,4,2,2,7,2,2,3,1,4,1,1,1,3,5,1,1,2,2,2,2,6,6,3,3,2,8,0,3,3,0,9,7,12,0,5,3,4,4,3,2,4,2,0,0,1,1,0,0,0,0,0,0,2,0,1,2,3,3,1,2,1,0,1,13,1,4,0,12,7,5,5,1,4,5,3,11,3,3,2,20,4,8,5,3,7,0,18,10,7,0,3,1,0,0,0,0,0,0,1,2,0,0,6,5,14,1,0,0,3,0,0,1,0,2],n:2216,pal:[[1,"#fff6c6"],[2,"#f9dcad"],[3,"#eddcd6"],[4,"#dbc7c1"],[5,"#ff9aa5"],[6,"#cbb2ad"],[7,"#fd9133"],[8,"#bd9f9a"],[9,"#e37c88"],[10,"#a78a85"],[11,"#fb5338"],[12,"#d36e06"],[13,"#dd554f"],[14,"#f1311c"],[15,"#8d7673"],[16,"#bf5c69"],[17,"#d02f1d"],[18,"#ad0000"],[19,"#5c4d4d"],[20,"#8e2219"],[21,"#680000"],[22,"#362929"],[23,"#282828"]],box:[.0741468293162464,.06882719655956604,.9258531970448856,.8907875144413061]},talwina:{w:1400,h:2160,nn:1311,num:[2,13,16,13,22,7,22,13,22,13,9,7,13,16,7,9,6,9,11,8,21,2,24,16,9,23,6,9,1,13,4,9,21,13,12,20,8,2,16,20,16,16,9,14,16,14,20,9,16,16,21,14,21,21,12,1,7,15,9,9,21,23,9,13,16,2,16,9,4,16,2,16,7,19,21,7,13,9,16,21,13,4,10,23,14,2,21,21,16,16,4,3,13,21,13,16,16,22,16,4,13,13,9,16,22,14,4,9,2,21,2,3,2,16,16,9,4,22,16,10,16,14,4,9,17,13,9,13,1,8,21,9,24,21,13,16,16,21,14,21,9,2,16,15,16,2,13,11,14,9,9,4,9,16,5,4,1,16,13,13,7,1,15,15,9,4,7,7,2,19,9,16,24,15,9,7,23,9,16,9,9,13,16,19,4,13,11,13,13,9,21,9,16,2,21,5,2,23,3,16,7,13,8,12,21,13,19,7,12,19,9,8,1,1,9,16,16,13,14,9,20,8,21,16,21,13,13,23,16,9,6,9,9,7,24,16,19,5,21,2,7,13,6,13,16,23,16,8,4,16,16,7,21,13,15,21,14,4,13,23,6,4,16,4,13,2,16,13,20,10,7,13,2,9,16,16,13,2,13,16,1,9,9,21,16,13,16,2,9,16,9,16,14,24,13,13,21,16,15,7,16,4,23,16,12,1,18,11,5,13,2,9,20,5,16,9,9,13,9,16,13,12,10,13,16,11,13,4,13,13,10,20,3,4,7,21,16,21,23,23,16,20,16,16,22,16,13,15,13,7,16,9,21,21,9,15,13,19,10,4,9,9,8,20,2,21,21,16,2,9,3,2,16,4,2,9,4,8,6,23,16,7,20,14,21,13,13,13,16,23,13,16,16,13,16,19,8,9,21,23,16,14,9,16,9,18,20,16,2,13,8,23,10,16,8,24,17,18,1,23,5,19,9,7,5,4,3,9,4,21,19,2,16,9,16,6,3,3,14,2,22,20,7,9,16,16,12,9,4,11,18,4,9,11,23,10,16,13,12,16,21,16,4,15,17,6,11,20,4,9,4,18,15,2,16,15,4,10,21,16,17,9,23,9,13,4,7,5,3,2,9,22,21,10,2,9,5,5,11,11,4,9,21,8,4,23,19,16,7,5,4,11,18,13,23,13,7,16,11,11,22,9,9,16,4,16,12,11,4,4,4,13,11,4,9,9,11,4,11,8,5,9,4,22,9,17,9,16,9,21,13,3,7,21,4,19,14,5,16,21,5,5,21,9,9,15,19,17,21,17,5,22,18,3,8,22,17,3,11,9,11,22,16,7,4,11,7,16,23,3,8,4,22,17,18,4,10,8,8,19,3,13,16,7,8,5,11,1,11,13,21,18,1,21,21,9,4,5,17,5,19,3,1,15,4,4,5,19,1,19,5,11,16,22,24,22,5,9,22,11,3,22,16,16,19,16,5,1,19,22,21,21,19,22,13,11,17,3,17,3,1,22,22,22,22,21,21,19,5,3,9,5,8,17,17,11,22,5,16,22,11,5,24,17,12,22,11,22,11,5,16,5,3,11,19,14,4,17,19,4,5,5,24,17,17,16,9,9,22,19,24,17,23,24,21,21,9,21,22,4,5,21,9,22,1,22,22,21,17,12,4,4,7,1,9,21,19,15,21,5,5,11,22,9,5,13,21,24,3,9,19,11,19,17,15,16,18,21,4,10,19,17,5,16,9,22,3,21,7,17,22,23,8,24,19,17,19,17,9,4,21,5,5,19,19,21,19,1,4,4,23,21,21,20,22,24,21,24,17,22,22,17,22,17,22,5,21,17,21,22,21,18,18,18,17,11,17,8,17,17,1,7,8,5,5,5,5,5,9,9,21,21,24,22,17,3,17,22,17,11,11,17,17,17,9,21,9,17,17,17,19,4,24,19,21,21,8,4,4,5,5,9,5,10,10,13,5,5,5,10,5,5,10,20,21,19,21,21,20,20,16,17,11,22,22,22,22,17,17,17,22,17,22,11,22,22,17,15,17,19,11,11,22,11,11,17,17,17,15,15,9,16,17,5,5,9,15,9,9,15,16,9,17,21,21,16,22,17,22,17,22,17,21,21,19,5,19,19,5,19,17,11,3,21,24,17,11,21,21,22,22,18,8,8,4,4,8,8,5,5,5,5,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,10,5,5,5,5,5,10,5,5,5,3,5,5,5,16,16,5,5,23,24,19,21,19,19,21,19,19,19,19,23,24,24,21,24,24,24,21,21,21,21,21,21,15,21,21,21,21,21,21,21,21,21,21,21,19,21,20,21,21,21,20,20,19,16,21,17,21,11,11,11,22,17,22,17,22,22,22,17,22,22,22,17,22,19,17,17,17,17,22,17,22,22,17,22,22,17,22,11,17,22,17,17,22,11,17,4,22,17,17,17,17,22,17,11,17,22,11,17,17,17,17,17,17,22,17,17,17,17,11,17,17,22,17,8,11,22,22,22,10,17,22,22,17,22,4,22,17,17,22,17,17,17,17,17,17,15,11,17,17,11,11,11,11,15,11,17,17,17,9,9,9,17,5,9,5,11,5,15,5,15,5,5,5,15,17,9,5,5,5,17,5,5,17,17,17,15,17,15,15,21,24,21,21,16,16,21,5,22,9,15,17,17,9,22,17,22,16,13,21,16,16,16,16,16,16,23,19,13,5,19,12,21,19,19,21,19,19,19,17,3,12,11,10,17,17,17,5,10,10,16,16,16,16,16,16,16,16,16,16,16,5,11,11,8,3,3,3,3,3,3,3,3,3,9,9,9,2,2,3,2,2,18,4,4,4,1,24,20,9,19,24,24,24,24,24,11,20,21,21,8,7,21,21,11,11,21,21,23,18,22,22,22,22,23,17,1,1,18,12,7,4,18,12,7,4,7,7,4,4,7,4,17],area:[55735,26360,22010,22260,19442,16957,15687,15518,14283,13250,13248,13073,11172,10707,9706,8357,8188,8500,7877,7801,7507,7273,7370,7057,7004,6650,6751,6199,6077,6420,5958,5541,5446,5394,5342,5192,5238,4827,4786,4672,4684,4476,4358,4516,4405,4322,4369,4532,4193,3903,3842,3814,3787,3665,3777,3775,3686,3687,3527,3582,3430,3405,3625,3314,3210,3188,3195,3285,3106,3165,3043,2959,3083,3054,2985,2988,3025,2959,2768,2885,2768,2906,2760,2707,2710,2577,2649,2766,2646,2563,2750,2513,2488,2571,2443,2484,2534,2545,2484,2508,2490,2425,2414,2357,3014,2315,2340,2165,2254,2329,2134,2172,2088,2179,2094,2138,2134,2306,2078,2050,1993,2036,2009,1982,2032,1952,1971,1960,2039,1950,2060,1983,1891,1896,1922,1903,1860,1901,1823,1849,1804,1768,1849,1872,1785,1839,1812,1873,1812,1791,1821,1827,1761,1753,1776,1822,1732,1763,1700,1694,1638,1675,1684,1627,1641,1799,1677,1657,1566,1631,1768,1631,1593,1604,1561,1626,1592,1589,1514,1606,1503,1490,1478,1487,1508,1428,1433,1421,1385,1388,1487,1374,1501,1406,1367,1377,1335,1410,1350,1330,1328,1315,1298,1359,1285,1309,1337,1327,1274,1286,1289,1346,1369,1282,1307,1283,1259,1234,1256,1235,1236,1243,1223,1244,1218,1178,1239,1190,1174,1210,1185,1183,1220,1128,1184,1270,1236,1392,1109,1155,1090,1108,1083,1083,1175,1285,1083,1118,1100,1075,1159,1072,1046,1111,1097,1065,1064,1049,1063,1088,990,1048,1039,1021,1010,1036,998,997,1023,974,931,954,985,990,1003,953,964,937,951,949,979,978,1145,958,979,931,988,959,954,915,915,911,916,934,849,900,852,889,903,880,879,857,847,861,841,831,953,924,975,870,845,834,886,872,840,842,912,787,846,852,836,785,855,833,784,808,818,777,775,873,780,758,770,800,783,857,768,812,739,876,814,753,741,723,806,767,738,712,749,749,713,753,747,706,786,726,730,700,712,858,684,763,735,693,707,731,703,703,708,700,740,661,658,764,722,698,664,655,626,637,630,665,619,649,620,651,647,668,648,636,609,639,613,606,630,622,573,593,589,570,575,579,591,618,607,578,536,576,561,546,539,549,513,527,520,507,561,545,510,541,627,539,495,507,520,512,534,499,505,506,523,483,480,525,474,519,503,528,473,469,675,467,466,519,457,437,452,437,472,472,442,495,455,444,414,429,426,447,452,453,424,470,415,512,483,419,433,422,417,459,409,392,390,389,402,387,385,376,477,374,403,366,380,392,357,417,367,486,402,333,400,400,404,397,340,376,404,368,382,461,348,360,324,385,329,324,346,301,316,420,322,344,361,326,295,318,328,297,315,334,347,298,327,281,343,293,328,285,318,300,263,263,264,251,249,259,250,246,236,232,330,246,224,254,212,253,220,234,246,235,216,208,232,227,206,251,201,237,204,211,241,246,183,195,214,182,186,169,181,189,207,191,167,173,194,250,185,171,182,176,167,204,156,161,183,160,187,153,218,158,146,165,146,146,141,152,132,138,159,149,169,132,137,121,127,139,125,130,119,118,118,134,137,114,120,131,133,108,113,135,100,116,122,107,98,106,136,89,123,83,90,77,89,111,100,92,78,91,96,119,86,84,98,87,84,73,119,96,101,94,100,106,78,94,75,129,95,94,73,88,94,107,91,106,95,85,121,73,69,96,83,91,67,60,77,64,74,91,73,81,81,82,70,66,92,74,74,98,64,88,59,59,86,67,67,52,74,73,56,69,39,60,93,59,55,56,61,46,52,40,53,54,48,47,55,54,48,53,57,54,43,41,51,44,46,43,46,51,55,37,50,47,37,43,39,44,39,38,38,47,42,28,35,39,50,36,37,36,33,34,36,25,37,32,30,33,50,29,36,27,27,35,25,37,33,21,22,25,21,21,32,25,25,13,41,27,30,25,27,30,26,41,14,16,13,19,21,26,22,42,14,16,17,27,19,25,16,20,18,18,14,22,15,25,16,23,17,14,19,25,22,14,16,15,22,24,18,14,20,29,31,10,19,11,19,14,15,9,15,17,11,8,21,15,13,16,14,18,7,20,12,13,13,11,9,11,11,16,18,12,9,12,12,14,18,11,11,13,17,3,18,12,5,11,7,10,4,14,15,11,2,4,0,8,10,9,6,8,4,4,16,9,16,5,3,4,4,8,8,7,10,16,4,13,6,14,11,5,21,6,5,11,15,3,13,7,14,8,6,3,9,12,7,25,18,8,11,7,9,7,8,5,11,8,6,8,4,12,6,11,13,9,13,6,4,18,6,4,14,4,8,0,5,9,7,4,16,11,6,6,9,0,10,11,30,5,11,8,4,4,1,0,5,10,1,0,1,3,1,0,0,0,2,0,1,0,0,0,6,6,0,0,12,10,1,0,0,0,0,0,1,0,0,0,0,4,0,0,1,5,11,5,0,6,4,0,0,0,5,0,3,2,0,3,1,1,3,5,12,4,3,2,4,0,0,5,0,5,0,5,0,4,0,2,8,0,8,0,2,8,10,1,5,2,4,2,1,1,2,2,6,9,3,0,2,0,29,0,1,0,14,0,2,16,3,17,3,3,2,3,12,10,4,0,3,11,7,2,3,17,6,2,15,6,8,1,6,7,7,5,0,4,0,7,0,2,5,2,10,8,5,1,2,6,0,2,0,2,6,0,1,8,0,0,6,8,0,1,2,0,8,0,2,2,2,4,4,3,12,2,3,13,5,1,0,0,0,0,1,12,3,9,0,10,4,6,5,2,1,4,6,9,1,8,2,11,2,9,5,3,11,13,0,1,0,11,12,6,0,10,5,2,3,5,4,0,3,1,0,3,0,5,3,4,4,4,0,3,1,0,0,0,0,4,6,1,0,2,2,4,3,0,3,6,0,0,0,1,0,1,7,0,0,7,0,0,0,1,3,0,0,0,0,2,5,13,5,1,0,0,0,0,0,0,0,0,0,1,1,5,5,2,1,3,2,3,2,3,2,3,3,1,3,2,3,1,0,2,1,0,4,4,4,2,24,0,4,0,0,0,0,0,0,0,4,0,0,0,11,3,0,0,11,6,0,0,1,0,0,1,3,0,2,0,18,16,0,10,0,16,9,4,0,3,0,0,2,2,0,12,29],n:2189,pal:[[1,"#ffe4d2"],[2,"#fde234"],[3,"#cdcacc"],[4,"#e0c5b4"],[5,"#99c3ff"],[6,"#d7c100"],[7,"#f5942e"],[8,"#bfa594"],[9,"#739fed"],[10,"#5c9bff"],[11,"#998a95"],[12,"#cc6c49"],[13,"#3c85ef"],[14,"#c46c00"],[15,"#4979e9"],[16,"#2464d1"],[17,"#6f616b"],[18,"#9d4525"],[19,"#4755ab"],[20,"#004bb4"],[21,"#1b3686"],[22,"#282828"],[23,"#1b203f"],[24,"#001962"]],box:[.12328373970648794,.06882719655956604,.8767162930629316,.8907875144413061]},salsool:{w:1400,h:1576,nn:1039,num:[8,5,5,23,8,23,23,2,12,14,14,12,19,8,14,5,14,5,14,5,4,5,5,3,8,3,8,8,5,8,3,5,5,19,8,3,8,5,8,8,9,8,9,12,12,8,6,15,13,5,9,2,3,5,9,7,5,3,19,14,8,2,6,14,12,8,8,5,12,13,14,5,14,14,6,2,13,8,8,8,6,14,9,5,8,8,5,6,5,3,8,3,19,6,5,3,19,6,9,5,22,8,19,5,15,6,8,22,8,5,19,5,8,19,6,14,14,8,7,19,9,8,5,3,5,8,19,3,8,3,12,1,14,5,6,5,9,5,5,9,9,18,8,5,8,8,17,15,8,8,23,17,13,6,8,5,8,1,5,8,14,8,14,5,5,5,5,13,14,5,6,14,5,9,12,8,8,5,8,8,15,14,8,8,9,6,5,13,9,6,19,15,5,8,5,8,12,16,19,8,5,18,5,8,8,18,23,5,12,16,22,19,19,5,5,5,15,7,5,6,6,5,5,5,3,5,22,17,13,15,5,19,8,5,5,19,14,5,12,8,8,8,8,5,9,19,19,16,8,8,8,7,5,18,19,5,19,8,5,5,6,16,18,13,1,1,6,13,5,5,10,19,8,19,5,5,19,5,23,10,5,6,5,8,13,14,21,8,3,19,7,9,8,3,5,5,14,3,2,5,7,19,18,8,3,6,9,19,12,9,8,19,16,2,19,8,5,2,8,5,5,8,1,6,5,8,3,3,21,3,2,5,8,6,13,14,18,19,17,9,3,8,8,15,8,11,9,10,19,19,3,14,5,5,13,8,8,9,19,9,3,8,14,3,16,5,5,9,8,6,5,5,14,6,9,5,5,5,8,14,11,9,8,3,6,12,8,15,12,5,5,14,12,14,19,8,8,5,5,5,14,9,3,9,8,8,19,5,6,6,5,8,14,14,8,7,6,5,14,9,8,10,16,11,8,8,16,16,8,9,8,20,21,5,8,16,4,12,8,10,5,5,14,5,5,9,21,12,5,11,18,3,1,6,11,17,15,23,15,10,23,5,4,14,3,14,7,5,3,8,5,8,5,8,5,3,21,8,9,11,9,3,9,11,3,8,9,11,19,5,5,5,4,6,9,7,23,10,5,21,13,11,19,3,11,1,5,11,6,10,3,11,4,6,11,14,3,5,8,16,11,6,11,3,19,5,3,10,10,16,20,3,16,6,19,5,15,16,10,16,18,12,4,3,9,1,11,6,9,12,19,3,3,4,11,9,3,23,11,23,8,6,6,9,20,9,16,9,19,11,3,9,9,11,11,3,9,4,1,6,5,3,9,10,11,3,5,23,6,15,23,19,3,3,21,3,4,19,6,9,8,3,10,4,10,6,3,14,3,21,10,14,14,11,15,23,16,4,20,15,2,4,3,21,3,21,9,23,19,3,16,19,6,9,11,16,10,5,3,7,16,5,4,23,9,3,7,3,10,22,21,21,3,21,11,5,3,3,6,3,5,11,21,10,3,23,9,5,14,16,23,3,22,21,20,19,21,3,16,21,21,6,11,9,5,21,11,16,23,6,22,4,14,6,3,18,4,7,3,3,9,4,22,5,21,8,6,21,6,6,19,21,8,14,9,3,16,3,10,19,14,21,21,21,21,21,21,21,21,21,23,16,23,5,3,6,8,3,9,16,3,4,4,4,19,19,19,19,19,19,5,5,21,21,11,21,23,16,16,16,16,23,16,21,23,21,11,10,3,21,21,21,14,21,16,6,6,6,4,4,22,18,6,22,14,14,13,11,8,6,3,11,16,18,9,21,12,7,15,17,21,6,3,4,6,4,4,3,22,19,22,22,5,19,23,10,19,5,19,19,19,19,14,19,22,19,19,19,19,19,14,22,22,22,5,10,19,19,14,2,2,6,5,5,5,5,5,6,14,14,10,23,21,21,16,21,23,21,4,16,5,21,5,21,11,21,16,21,16,21,16,21,16,16,14,21,21,21,10,21,16,16,23,5,23,23,23,16,16,21,21,16,21,5,11,5,8,6,11,6,21,6,11,21,21,10,10,10,14,21,16,5,23,16,16,16,16,6,16,16,16,16,21,9,21,6,11,8,8,6,6,6,6,6,5,5,4,22,22,22,4,22,8,8,8,22,8,4,6,8,8,8,23,8,8,23,8,8,5,8,8,5,6,23,8,10,10,13,8,6,8,19,10,19,13,18,9,9,13,14,14,3,9,13,14,8,3,8,3,3,3,3,6,4,4,13,3,6,3,3,6,3,6,9,9,22,11,9,4,18,15,9,16,8,22,7,3,16,9,9,7,3,12,7,12,3,3,7,9,17,9,9,12,17,17,17,7,3,9],area:[56732,41392,19954,15034,12474,12362,10963,8262,7677,7766,7040,5217,5115,4835,4910,5007,4713,4667,4697,4492,4523,4400,4412,4477,4216,4650,4125,3980,4264,3995,3943,4027,3918,3900,3653,3595,3468,3481,3469,3406,3382,3411,3357,3248,3327,3048,3130,3050,3129,3064,3088,2870,2828,2787,2834,2712,2653,2666,2918,2560,2656,2517,2625,2509,2463,2548,2412,2433,2451,2456,2417,2234,2263,2270,2407,2254,2315,2086,2136,2047,2042,2043,2066,1956,1952,1956,2023,1990,1837,1849,1849,1838,1821,2207,1837,1870,1839,1924,1772,1692,1673,1711,1749,1672,1710,1747,1621,1607,1657,1685,1669,1578,1709,1573,1738,1704,1706,1555,1553,1559,1521,1502,1509,1571,1481,1428,1494,1389,1478,1407,1477,1395,1350,1402,1462,1338,1433,1359,1299,1396,1293,1289,1322,1294,1237,1237,1318,1265,1307,1208,1312,1267,1318,1352,1194,1289,1201,1210,1187,1192,1224,1186,1257,1187,1269,1196,1163,1213,1173,1150,1269,1183,1082,1104,1084,1094,1086,1080,1142,1051,1040,1044,1044,1053,1026,1267,1095,1011,1016,1204,996,998,1006,1050,1009,977,1028,999,964,993,964,969,985,955,945,913,1087,926,958,925,917,910,950,867,886,931,870,879,854,926,841,880,919,847,883,829,836,817,814,862,803,820,778,776,780,758,805,748,769,749,751,741,773,747,771,752,729,833,709,725,720,722,723,707,720,739,692,713,699,679,721,724,664,682,671,701,701,674,641,694,661,657,658,638,650,667,650,638,645,638,609,667,606,604,625,609,614,636,655,615,633,616,671,617,605,581,606,639,590,579,614,584,569,579,569,579,570,559,571,569,541,580,583,534,561,530,547,523,544,550,570,559,533,545,529,547,561,521,513,537,510,572,521,613,541,514,485,552,496,490,520,492,512,481,505,512,471,480,543,460,561,467,466,479,462,460,431,457,462,494,449,456,445,449,440,461,428,425,450,428,424,427,415,421,416,404,408,422,408,411,421,419,427,423,437,400,388,423,395,404,381,400,397,409,405,380,372,366,372,371,354,357,383,360,353,378,379,369,353,389,335,370,361,355,357,357,360,350,341,337,333,322,330,367,337,366,321,340,306,358,311,306,316,298,305,314,318,302,284,309,277,289,293,296,298,300,292,298,288,291,271,265,280,278,275,268,244,267,244,259,254,240,229,243,276,239,216,220,260,223,250,221,238,229,219,238,217,228,225,221,219,253,239,235,257,208,209,213,232,210,206,204,274,209,200,250,196,197,188,203,180,203,204,175,184,177,189,190,207,211,189,184,224,194,198,157,195,148,152,174,158,216,150,162,144,144,166,159,158,159,155,185,152,136,148,163,161,155,147,139,136,135,155,175,156,188,126,129,147,116,148,122,125,136,113,115,128,115,103,136,97,110,158,117,113,112,141,125,101,96,94,106,111,95,101,91,107,108,90,94,94,104,101,80,73,98,72,77,98,92,86,73,117,96,77,84,78,65,75,72,70,61,67,87,55,76,75,73,61,69,61,72,105,75,58,54,58,70,59,52,42,49,67,51,71,46,58,44,43,41,50,57,40,37,34,41,37,33,44,38,34,36,33,40,38,50,33,41,40,43,35,53,50,27,31,32,31,29,24,30,23,25,23,21,37,26,39,24,16,22,14,23,16,20,24,16,24,21,19,22,19,19,26,16,13,17,20,20,13,14,15,22,11,19,22,16,21,16,10,18,13,21,11,9,17,9,13,4,10,13,4,10,11,8,11,10,9,24,4,6,5,8,7,7,7,13,8,7,11,24,7,12,12,12,8,10,7,11,9,10,3,9,10,7,8,4,6,5,5,7,5,10,5,5,4,3,2,10,13,11,11,1,7,2,4,5,4,6,6,5,10,6,6,6,4,11,7,6,7,9,2,3,10,2,0,2,2,5,5,6,14,9,3,2,4,7,0,2,0,5,2,0,7,7,6,6,6,0,0,1,0,4,0,6,0,5,0,1,5,0,6,0,1,5,2,3,3,1,2,5,0,2,2,1,2,0,1,0,2,0,1,5,0,1,0,2,0,2,0,0,5,0,1,0,2,0,0,3,0,2,0,2,0,3,2,2,3,0,2,2,9,0,2,3,1,0,2,4,2,0,2,7,0,0,0,0,0,1,4,0,0,5,3,0,2,1,0,2,1,14,5,8,1,3,5,2,1,1,3,5,5,0,2,4,3,4,2,0,1,4,3,0,1,3,0,2,0,6,1,1,2,4,1,1,1,7,1,0,0,3,2,4,2,1,3,2,0,4,1,2,0,3,0,0,1,0,1,2,0,3,1,1,0,0,0,0,0,2,0,7,0,5,0,0,0,0,6,4,0,0,0,3,9,1,0,0,4,0,3,3,5,3,0,4,2,0,0,0,3,2,5,2,9,5,1,1,0,0,2,0,0,0,0,0,0,3,7,5,0,1,0,2,1,1,2,3,3,0,5,6,2,1,3,7,3,0,0,2,0],n:1899,pal:[[1,"#fff1db"],[2,"#c4f956"],[3,"#e8d6c1"],[4,"#d0d0d0"],[5,"#ade13d"],[6,"#bcd677"],[7,"#ffa540"],[8,"#92c211"],[9,"#c4a99e"],[10,"#91b12e"],[11,"#97ae50"],[12,"#f0851c"],[13,"#7aac00"],[14,"#799a0f"],[15,"#d46d41"],[16,"#947b72"],[17,"#c26000"],[18,"#638500"],[19,"#637612"],[20,"#a7471d"],[21,"#564a40"],[22,"#3b5000"],[23,"#282828"]],box:[.04684855253041583,.11901191194630678,.9531514770348599,.8406027718678913]},dalloola:{w:1400,h:1628,nn:1455,num:[2,7,5,5,5,21,4,21,5,21,11,5,11,7,7,4,3,7,15,2,7,7,10,17,9,7,20,17,5,3,6,5,2,2,11,2,4,2,7,7,20,7,11,2,7,5,6,7,10,5,7,5,9,9,6,4,5,17,6,5,9,17,2,2,7,5,7,4,17,7,12,4,11,4,3,7,17,16,17,4,5,7,5,5,16,11,12,3,17,7,11,11,9,5,2,17,11,17,6,11,19,7,4,2,5,14,5,14,2,5,5,2,9,9,15,5,17,5,14,7,2,10,7,7,3,11,7,6,19,5,7,17,7,2,6,9,17,7,6,17,7,7,11,5,7,6,14,2,7,4,11,11,5,4,7,7,10,2,18,5,11,7,16,7,11,4,5,7,17,17,7,16,5,5,8,4,14,5,5,2,4,5,6,7,5,6,7,7,5,2,7,19,9,11,17,10,4,17,5,19,16,17,10,5,17,5,19,7,7,4,4,5,18,5,20,5,5,7,19,7,5,5,14,7,9,9,5,2,7,3,15,4,12,20,5,4,17,2,17,16,8,11,17,7,2,5,5,6,9,9,7,11,2,5,7,19,10,4,12,15,2,9,7,5,16,17,19,4,11,5,7,11,7,9,4,7,5,5,2,17,5,12,8,2,5,9,17,11,4,7,3,10,2,2,5,5,4,11,14,15,2,17,9,10,9,21,3,11,5,9,16,9,3,2,2,5,5,5,2,9,5,11,3,11,6,7,4,11,16,7,15,2,5,4,10,8,4,7,7,1,2,5,11,9,7,9,11,19,11,4,5,7,5,7,5,12,5,7,20,9,9,10,4,9,7,5,19,10,2,1,5,7,7,5,11,17,2,21,5,16,19,5,5,5,4,8,2,5,21,7,7,6,7,2,5,10,4,2,3,19,4,5,10,5,7,1,5,5,7,3,5,6,11,7,7,5,20,9,7,5,16,2,7,6,11,5,7,2,11,14,18,5,4,4,2,7,4,2,16,3,4,6,9,5,10,16,5,5,3,9,2,4,6,4,7,12,4,9,4,14,7,9,2,10,6,6,4,4,18,4,7,1,1,11,11,4,4,4,10,7,12,4,11,5,7,2,4,5,5,16,7,7,9,14,10,7,11,6,5,5,9,9,10,7,5,10,11,7,10,9,10,20,10,10,17,4,11,2,11,17,7,5,7,14,7,7,4,11,2,10,10,11,2,3,10,2,7,6,2,7,5,12,7,7,4,9,11,10,5,6,10,11,21,8,15,5,7,4,1,16,9,7,7,3,11,5,5,4,21,7,11,18,11,2,4,16,5,7,9,5,17,18,11,10,11,14,7,5,3,9,4,2,7,7,4,7,14,7,2,11,5,5,7,9,4,16,14,7,4,4,10,9,9,19,3,2,3,7,2,9,16,9,2,17,18,7,9,2,1,18,2,8,2,11,5,20,1,2,9,18,7,3,3,5,2,15,2,7,2,1,16,18,9,16,2,14,9,4,3,11,7,16,6,4,20,7,17,2,1,3,5,11,3,3,2,2,4,15,15,7,5,21,17,3,11,6,7,11,1,2,4,1,9,9,2,15,18,2,5,6,3,3,2,8,2,7,2,6,6,4,9,1,5,12,1,9,1,15,1,1,9,1,1,3,9,1,1,9,3,3,1,2,6,6,3,2,1,3,19,7,3,2,7,9,4,3,4,1,1,3,1,3,1,12,9,9,3,5,18,3,15,3,21,6,9,1,14,1,15,7,1,3,9,3,3,4,1,9,20,3,1,3,1,9,1,11,1,1,21,1,12,9,6,17,9,4,1,1,20,1,4,5,2,6,3,1,5,6,15,1,1,3,3,9,3,1,21,1,5,6,3,8,3,5,5,11,1,5,1,1,4,1,3,1,14,4,9,1,17,4,1,1,16,17,18,18,20,18,12,2,21,5,1,1,17,10,3,2,2,21,9,2,3,6,1,17,16,12,9,9,3,3,4,15,11,2,14,18,6,2,1,3,17,4,1,21,17,18,1,17,5,6,1,16,3,2,17,6,2,21,3,6,9,2,2,6,18,15,1,5,20,4,6,9,21,18,20,3,20,16,1,6,2,17,3,1,20,9,9,8,12,1,3,1,20,9,21,8,21,1,5,20,20,12,14,18,18,18,3,21,3,14,2,3,14,17,20,17,9,17,18,2,18,21,20,18,9,20,9,20,14,3,3,5,11,4,9,21,18,18,9,9,15,15,6,20,7,16,14,3,6,3,2,17,3,20,18,15,15,12,1,6,9,16,14,9,17,12,12,1,3,2,1,1,9,1,3,5,1,9,17,2,9,1,20,14,9,18,18,15,20,15,1,3,20,20,20,17,17,7,6,11,14,1,3,6,6,1,2,2,2,2,2,2,1,3,7,17,4,6,9,9,3,4,20,20,20,17,20,17,17,17,9,9,18,18,18,5,15,18,21,18,21,18,18,18,15,18,21,18,21,15,18,15,20,20,5,20,15,18,3,15,15,20,20,20,20,17,9,16,15,9,9,20,17,20,20,16,20,1,4,6,9,6,3,2,2,1,2,5,5,5,5,3,5,5,5,2,2,7,2,3,2,2,2,3,2,5,7,3,3,1,7,3,3,6,1,6,6,1,6,3,1,9,9,9,9,12,14,1,1,7,1,9,3,9,10,1,3,10,7,7,1,6,12,5,9,9,9,3,3,6,3,3,3,17,9,2,1,3,2,12,6,1,1,1,3,1,1,3,9,3,9,5,9,9,9,9,20,2,9,20,20,9,14,20,14,20,20,6,17,14,20,3,14,12,17,17,20,20,17,3,3,3,9,3,3,8,2,12,5,18,18,18,21,18,18,21,18,18,18,1,18,18,2,5,18,21,1,4,21,21,21,21,15,15,18,15,18,20,20,5,21,5,3,18,21,18,15,15,18,17,20,15,3,15,15,18,14,15,14,15,4,15,4,15,18,15,15,18,15,5,3,9,3,15,1,15,20,15,3,18,3,3,1,9,9,2,19,9,1,9,9,2,1,7,3,20,1,20,20,20,1,20,20,1,1,17,1,20,10,20,9,6,17,20,20,16,20,7,20,11,20,6,20,17,20,19,16,20,20,20,17,17,20,4,4,4,7,18,1,1,1,7,18,1,6,6,1,1,1,12,1,6,6,6,6,16,14,6,17,6,3,20,6,20,20,8,4,6,1,1,6,9,1,1,1,9,3,3,9,3,1,6,1,1,6,3,14,3,7,7,6,1,9,6,9,6,6,6,9,6,6,9,6,11,11,9,14,6,6,6,6,6,12],area:[20955,17991,14833,14657,13828,12777,12414,11622,10881,10165,9843,7267,7227,6796,6051,5367,5400,5240,4893,4639,4419,4369,4115,4085,4097,4070,4093,4027,3788,3996,3726,3634,3281,3292,3307,3079,3100,3034,3084,3008,3001,2957,3018,2916,2697,2862,2729,2727,2750,2675,2724,2573,2581,2532,2559,2598,2515,2682,2484,2440,2367,2427,2523,2365,2364,2320,2316,2470,2357,2297,2420,2447,2246,2268,2292,2216,2134,2125,2144,2206,2159,2148,2095,2156,2070,2102,2124,2060,2058,1939,1929,1961,2041,1896,1898,1908,1874,1863,1875,1892,1786,1738,1754,1720,1665,1744,1688,1812,1701,1671,1750,1635,1638,1669,1603,1665,1683,1639,1670,1636,1548,1594,1531,1533,1557,1574,1615,1590,1482,1535,1476,1530,1521,1555,1503,1491,1446,1479,1483,1448,1463,1470,1425,1499,1454,1459,1493,1436,1346,1399,1396,1382,1392,1358,1337,1354,1338,1358,1364,1403,1309,1294,1331,1308,1240,1248,1289,1250,1235,1240,1269,1256,1243,1221,1267,1184,1206,1180,1204,1244,1250,1251,1325,1175,1142,1163,1135,1116,1100,1081,1070,1065,1109,1085,1061,1058,1026,1010,1027,1081,1044,1032,1026,1042,1047,1085,1072,1012,1003,989,1026,992,1010,979,1035,1013,1008,984,991,967,977,1080,950,954,1035,938,931,942,995,1e3,907,940,935,942,904,937,919,901,930,918,908,963,978,952,911,926,887,940,943,917,910,862,909,882,870,889,919,851,868,849,850,856,890,871,814,835,867,902,810,860,813,847,845,798,793,826,774,799,785,775,834,818,809,766,778,775,765,760,767,749,749,751,909,743,770,751,772,734,725,782,723,730,725,748,755,860,711,757,718,714,733,730,727,707,710,685,722,697,676,721,695,692,716,686,712,663,737,677,684,681,731,693,667,672,667,652,651,669,654,751,663,661,616,633,642,637,629,604,684,611,616,612,615,614,611,613,620,610,610,604,597,599,622,613,617,629,598,628,620,718,606,571,600,577,615,577,613,603,596,594,558,580,588,592,575,550,557,564,702,575,549,591,545,611,536,566,589,528,692,580,595,520,531,547,591,619,533,542,516,550,544,577,510,515,539,494,538,530,513,516,502,531,528,546,496,534,488,490,498,558,486,497,496,474,461,534,491,472,477,523,487,510,528,470,489,465,496,495,497,467,474,465,488,463,488,481,474,466,507,448,467,461,451,446,470,490,460,429,443,441,419,479,459,441,421,442,471,428,425,417,443,416,418,408,432,403,425,429,401,401,399,399,420,405,410,392,397,408,389,414,437,402,407,399,397,387,388,377,386,400,405,379,384,371,380,391,394,434,364,365,359,389,359,369,350,357,350,353,370,354,361,401,371,377,359,360,370,353,349,332,359,369,354,333,341,403,344,339,326,343,334,317,351,342,321,329,312,311,372,324,320,305,313,325,319,330,306,303,327,313,307,309,302,318,329,303,298,301,290,288,317,299,289,288,285,300,309,292,313,383,305,280,285,277,271,254,302,271,275,275,266,257,263,310,278,263,269,246,265,246,254,250,247,245,267,251,251,235,234,231,236,250,241,223,234,233,271,223,250,291,221,240,217,228,223,331,269,222,274,224,211,296,281,209,210,202,237,220,200,229,204,194,212,208,212,201,208,227,269,217,201,190,206,206,204,193,207,184,244,220,184,183,186,213,175,178,193,199,180,193,184,182,210,195,175,174,199,179,211,169,166,181,175,216,168,180,173,184,159,188,178,174,173,163,146,173,143,206,153,146,164,152,159,179,147,159,170,165,166,174,178,154,168,147,172,149,145,141,137,151,166,149,141,133,138,157,157,171,159,148,136,135,146,135,137,126,140,126,115,146,143,114,137,137,121,109,178,143,126,115,138,126,137,145,128,107,136,104,106,105,121,112,99,112,102,104,106,98,120,127,97,112,100,96,86,91,92,92,91,91,91,88,99,90,91,98,84,107,100,103,89,82,104,91,104,86,92,83,98,91,87,94,72,96,122,81,85,69,69,69,136,76,74,65,68,84,78,82,68,66,77,58,73,65,56,69,65,92,112,62,94,67,55,60,60,64,59,65,69,50,54,55,73,56,48,51,53,47,56,55,43,52,48,48,48,48,46,47,39,43,54,72,45,51,48,37,48,50,45,40,34,42,41,35,33,39,52,41,55,52,45,39,32,31,45,36,31,49,40,28,45,40,39,36,31,30,25,40,47,27,29,28,26,26,29,26,32,39,28,28,26,36,26,24,30,31,23,28,20,23,24,35,20,30,39,18,19,26,19,25,26,27,26,20,22,27,25,20,31,19,23,26,19,22,25,18,19,21,20,19,14,13,12,14,24,15,17,16,24,23,14,19,18,11,14,14,11,7,11,16,19,16,18,14,13,13,8,11,11,18,20,15,11,16,16,8,14,13,13,13,11,12,6,14,11,14,13,12,12,6,10,7,10,10,8,13,11,8,11,10,9,8,10,11,8,15,7,15,5,10,7,8,16,15,8,7,13,8,7,9,8,6,8,16,8,9,13,8,4,5,4,10,9,6,8,3,5,2,4,6,12,2,4,4,3,5,9,11,2,10,10,7,1,3,12,16,6,4,5,3,2,5,3,5,8,2,5,2,4,4,4,4,2,6,10,8,2,6,3,12,6,7,6,3,3,5,6,7,4,5,8,5,4,5,4,5,5,3,5,4,3,12,2,9,0,3,2,1,1,4,2,3,2,0,4,2,3,3,3,0,4,1,4,1,2,0,0,0,0,0,0,0,1,2,4,2,3,6,3,0,4,2,11,0,0,0,0,1,1,10,5,1,5,0,4,0,1,5,1,1,0,0,0,0,1,0,0,0,0,6,2,0,3,5,2,0,0,0,1,14,0,1,0,1,7,0,0,0,0,1,3,0,0,0,0,3,3,0,0,0,0,0,1,0,0,0,3,1,0,0,5,2,4,0,2,2,3,1,2,2,2,0,0,0,0,0,0,0,0,0,1,3,0,2,0,3,0,0,3,0,1,2,0,2,0,0,4,1,1,1,1,0,0,0,5,1,0,2,0,3,1,0,0,0,4,2,2,0,0,2,0,0,1,1,3,0,0,0,4,5,3,4,5,1,2,0,0,1,2,0,1,1,0,0,0,1,1,1,1,3,0,0,0,0,0,2,0,1,3,1,1,1,1,0,0,0,0,0,0,2,0,3,0,0,0,5,0,2,1,0,0,0,0,1,1,2,3,2,4,0,0,0,3,0,2,0,2,4,0,5,5,4,0,0,3,4,4,3,0,0,4,2,1,0,1,10,0,0,3,3,1,0,4,3,2,1,4,0,0,2,0,3,4,0,4,3,0,4,4,0,1,3,5,1,0,0,0,1,15,0,0,8,2,2,4,1,1,18,0,13,0,0,10,0,0,1,1,15,5,10,4,11,1,0,1,0,0,2,0,2,0,0,0,0,0],n:2320,pal:[[1,"#ffdbbd"],[2,"#fcda4c"],[3,"#f8d58a"],[4,"#dacfc7"],[5,"#fcc31c"],[6,"#dbb294"],[7,"#f7a50e"],[8,"#c0b2ae"],[9,"#eda64f"],[10,"#dd9000"],[11,"#e18211"],[12,"#b38c71"],[14,"#d06e2f"],[15,"#907b80"],[16,"#c16800"],[17,"#b05313"],[18,"#665257"],[19,"#903900"],[20,"#733712"],[21,"#282828"]],box:[.04684855253041583,.1071338728015161,.9531514770348599,.852480811012682]},saqqora:{w:1400,h:1615,nn:1696,num:[1,3,23,23,20,3,1,11,20,3,8,1,15,11,21,16,3,11,11,19,11,20,1,16,1,8,13,20,3,16,8,9,15,1,11,19,20,1,11,3,3,8,3,15,3,1,8,11,3,23,13,15,20,22,20,5,3,8,3,13,9,15,8,1,17,20,3,12,1,3,8,1,15,1,3,16,15,11,15,5,22,15,6,22,5,15,8,1,20,3,9,5,7,20,1,16,3,3,23,1,3,4,3,5,8,8,22,5,7,16,1,21,1,3,3,8,16,1,20,5,3,16,3,1,8,20,8,21,16,16,1,15,3,20,1,9,7,7,13,1,11,5,8,16,5,6,16,15,10,16,3,3,9,15,11,3,20,3,15,3,20,3,11,3,1,4,4,16,11,8,7,22,8,20,3,1,20,9,16,8,1,20,20,20,18,21,5,7,16,15,23,8,9,16,20,23,20,3,8,15,3,11,12,16,3,2,1,16,9,9,8,20,22,10,15,3,5,3,1,1,15,15,23,21,3,1,20,18,15,1,5,8,3,20,8,16,10,11,3,4,11,9,20,1,18,21,11,3,3,1,22,1,8,3,18,22,7,9,6,1,19,9,1,1,8,7,1,13,22,3,10,13,3,13,20,3,5,7,3,1,8,11,22,10,23,6,14,18,23,8,8,3,15,3,13,15,17,1,3,1,7,17,16,10,9,20,7,16,9,22,5,3,3,3,1,11,23,5,8,8,8,8,1,15,8,1,3,15,16,1,23,3,22,3,3,1,9,8,4,22,19,3,11,3,3,20,7,21,22,3,17,8,1,3,3,8,11,9,1,11,1,1,20,3,2,1,6,8,13,5,22,16,4,8,21,21,1,8,9,5,1,3,1,7,4,1,9,7,1,16,3,3,3,8,6,4,8,11,3,23,1,1,22,14,5,7,20,6,15,3,3,15,1,1,3,6,9,19,16,3,16,13,20,17,19,5,15,8,1,5,21,4,17,8,9,8,16,16,8,20,19,15,1,7,1,23,8,20,4,20,11,5,3,20,11,16,3,3,22,3,16,13,1,16,1,3,3,3,7,1,1,5,11,5,11,21,3,8,15,17,20,4,19,19,1,1,2,1,7,3,3,11,1,1,1,9,10,18,20,16,7,1,2,13,15,1,8,3,20,6,1,15,8,12,1,8,10,10,1,10,16,21,10,9,21,1,18,11,6,10,20,16,11,16,16,3,8,17,15,3,16,2,3,23,11,1,7,6,3,8,1,23,20,7,3,1,3,3,22,11,7,20,1,16,8,11,1,21,15,20,8,15,5,20,3,1,20,9,1,22,10,1,7,13,15,8,20,5,1,11,21,1,1,14,1,7,15,15,20,3,8,1,9,1,23,8,12,5,8,1,5,5,3,15,17,3,1,1,4,1,1,3,8,16,8,11,1,8,5,1,16,22,7,20,22,1,2,23,23,1,12,1,3,1,12,20,3,17,14,7,3,18,3,18,2,8,3,12,3,1,1,7,1,23,7,10,9,1,3,3,3,22,1,20,18,11,12,3,1,15,9,4,8,4,1,4,23,21,9,8,1,7,8,1,13,9,8,15,7,13,8,18,1,10,10,19,22,23,4,8,8,17,21,21,10,16,7,6,15,20,22,6,19,10,1,12,10,8,16,1,1,23,23,23,17,10,7,18,21,16,10,10,15,9,4,18,1,23,23,23,21,8,10,19,12,18,21,20,23,12,10,13,7,6,6,23,15,18,7,10,23,8,6,1,1,3,3,3,7,8,15,23,1,3,21,20,18,20,15,17,12,1,10,23,20,6,20,3,15,1,19,23,23,14,20,10,15,21,23,21,22,10,12,14,23,3,23,4,4,13,8,23,11,15,23,21,8,23,4,14,6,18,20,1,12,18,15,9,18,17,18,22,23,15,6,15,15,14,23,18,17,12,12,23,17,20,6,4,18,1,21,6,16,23,23,12,8,15,23,18,6,10,4,4,3,15,3,12,3,19,12,18,15,8,4,15,15,10,12,15,15,6,23,18,12,12,8,12,23,21,21,6,6,3,13,15,20,12,6,12,22,18,23,18,21,20,14,10,18,21,6,8,5,15,15,12,21,4,3,4,6,8,12,12,21,21,21,21,8,14,18,7,6,10,10,20,15,12,12,18,12,23,6,15,13,12,12,12,18,21,22,21,18,19,18,15,12,18,17,1,15,23,12,22,23,22,21,21,10,21,21,9,4,18,15,3,20,20,21,22,15,22,23,20,23,15,7,12,7,12,6,23,15,21,12,21,15,21,15,8,23,15,18,18,8,8,12,15,13,20,16,13,20,22,20,12,12,20,18,18,18,3,23,12,15,21,21,18,16,7,21,10,4,4,13,3,21,12,4,6,21,18,6,7,12,3,18,22,18,15,19,20,21,21,17,12,12,12,15,18,23,18,18,18,22,15,22,12,18,18,12,23,18,15,10,15,18,18,13,12,22,21,21,21,21,21,21,21,7,7,12,3,7,18,3,10,21,22,21,3,9,14,16,20,23,20,15,6,6,4,15,12,15,21,16,8,23,12,15,11,20,13,13,20,13,21,22,21,20,21,20,18,20,21,20,20,22,12,11,15,22,22,15,20,20,21,22,23,23,18,23,23,23,23,23,23,15,23,20,12,18,20,18,18,11,18,18,18,18,18,15,18,23,18,23,23,23,23,18,23,23,13,6,21,20,18,21,12,18,15,4,15,21,15,15,4,20,20,21,21,21,21,21,18,21,21,21,21,6,15,21,7,12,6,12,7,20,7,7,7,7,6,3,20,8,10,6,6,3,21,21,11,12,21,3,2,9,4,6,20,21,20,21,18,18,6,6,3,6,6,7,7,6,10,6,6,6,6,6,12,10,20,7,3,17,8,4,8,4,8,4,8,6,11,22,10,22,18,18,22,22,22,23,22,22,22,22,22,22,12,6,3,18,15,13,13,20,10,11,10,4,11,11,19,17,20,17,13,13,20,13,20,20,21,21,18,21,21,20,11,17,21,21,11,21,22,20,20,15,20,18,20,17,22,4,18,18,18,20,18,20,18,22,20,12,10,15,10,20,10,15,20,15,20,15,15,21,20,18,21,15,20,21,20,15,21,18,22,21,22,12,20,12,20,20,17,15,21,18,15,15,18,22,20,15,15,22,18,15,10,23,22,20,18,18,20,23,18,22,18,18,18,15,23,18,23,23,15,18,18,23,18,18,18,18,18,18,18,18,15,18,18,18,10,18,18,18,18,10,15,18,15,23,23,15,18,8,18,15,18,12,18,15,23,17,20,17,23,15,10,15,18,3,18,23,23,18,23,18,18,18,23,12,18,17,3,3,11,11,16,15,21,8,15,18,11,18,18,18,12,18,12,18,18,22,18,18,12,12,13,13,12,22,12,12,15,15,12,20,3,18,12,10,8,10,6,21,4,4,15,10,20,4,16,21,21,21,14,21,21,3,21,17,16,19,3,21,21,8,10,21,18,12,21,21,21,21,16,21,15,21,3,7,3,3,21,3,21,12,21,21,7,20,20,21,3,4,3,18,3,6,20,12,12,20,18,21,7,3,7,12,3,7,7,7,7,21,21,7,4,7,4,7,3,6,6,20,7,15,8,10,18,18,6,6,18,10,4,6,6,8,18,4,3,6,4,6,15,15,8,8,18,8,20,8,18,8,18,18,3,11,6,10,10,17,10,3,17,21,21,21,21,21,21,21,21,8,21,19,15,7,17,19,11,19,15,14,8,3,9,8,11,8,11,5,14,4,4,4,4,10,3,3,3,3,3,14,5,15,20,22,22,20,20,22,21,20,20,20,17,20,18,18,15,12,7],area:[28238,24355,16339,14653,12311,12517,11113,10028,9581,8615,8316,7164,7878,7004,7407,6611,6433,6047,5739,5608,5516,5230,5454,4927,5057,4718,4910,4421,4285,4216,4224,4327,4201,4027,4360,3957,3826,3858,4102,3885,3779,4250,3699,3665,3632,3579,3489,3457,3492,3732,3361,3369,3260,3246,3232,3326,3043,3024,2998,2961,3303,2914,2932,2879,2914,2853,2790,2815,2925,2777,2730,2881,2994,2674,2662,2681,2767,2628,2668,2731,2651,2726,2567,2584,2554,2551,2541,2509,2528,2498,2552,2484,2455,2356,2355,2449,2375,2350,2475,2360,2316,2292,2345,2367,2293,2321,2267,2322,2202,2165,2203,2244,2193,2147,2150,2234,2088,2096,2038,2023,2081,2048,2076,2025,1991,2005,1989,2117,1961,1987,2085,1930,1948,2017,1888,1953,2220,1915,1929,1924,1870,1945,2099,1849,1875,1961,1904,1835,1873,1808,1876,1791,1783,1809,1769,1796,1996,1727,1869,1767,1820,1729,1704,1705,1711,1835,1709,1723,1841,1672,1755,1623,1636,1635,1608,1567,1630,1622,1552,1595,1543,1522,1842,1558,1512,1532,1475,1712,1494,1490,1690,1493,1471,1487,1444,2083,1463,1437,1447,1460,1398,1417,1399,1405,1458,1357,1389,1365,1411,1512,1464,1370,1442,1426,1388,1415,1346,1382,1414,1317,1334,1349,1446,1420,1318,1320,1351,1369,1304,1277,1301,1287,1303,1304,1272,1281,1345,1294,1267,1247,1271,1305,1302,1222,1227,1260,1273,1410,1211,1216,1299,1213,1261,1232,1257,1251,1315,1209,1264,1210,1191,1155,1141,1137,1158,1192,1121,1115,1175,1097,1176,1116,1082,1073,1227,1120,1081,1217,1067,1085,1132,1128,1204,1092,1172,1051,1107,1123,1493,1103,1072,1054,1070,1069,1072,1046,1035,999,1064,992,1007,1007,1026,995,968,1002,969,932,957,980,922,908,944,928,918,890,1072,896,910,918,894,905,871,951,868,964,868,935,893,888,1084,852,973,837,846,988,865,937,869,938,870,881,868,874,882,819,832,850,835,817,941,811,857,876,805,819,789,788,779,765,795,775,778,748,774,740,761,797,758,741,753,768,740,772,735,740,757,736,720,753,718,716,773,724,723,756,722,775,693,704,680,702,722,717,706,784,686,674,670,813,686,682,711,711,708,714,681,678,701,669,689,684,662,717,684,664,717,696,637,678,691,625,651,643,638,705,671,799,611,607,649,627,630,657,659,609,631,626,644,626,596,622,588,630,608,657,612,619,636,602,594,581,606,587,599,575,588,597,566,593,580,584,610,555,588,551,592,567,555,558,544,591,557,578,542,587,543,533,529,546,525,555,520,535,522,512,527,514,528,523,517,514,531,509,513,489,521,516,482,470,537,490,513,494,498,486,483,495,448,493,456,461,452,479,459,509,457,469,456,434,434,447,490,430,444,428,440,419,433,528,455,417,435,394,420,427,433,423,417,418,402,408,410,495,404,405,428,397,427,422,400,462,399,383,429,399,393,426,389,406,403,410,397,399,389,367,366,409,376,426,365,361,362,379,363,367,369,426,413,357,365,357,341,361,363,355,362,354,349,356,344,336,333,359,321,415,339,340,322,329,335,331,329,319,320,333,376,309,324,327,314,315,311,310,316,310,316,329,315,302,335,309,320,293,297,284,301,301,300,276,292,300,286,285,276,280,265,318,293,271,266,256,295,264,258,258,252,252,280,261,245,260,252,251,242,247,244,245,249,224,245,250,230,256,229,243,235,231,227,221,252,222,221,295,277,218,309,216,202,228,217,223,217,227,231,202,269,211,207,200,199,239,192,215,196,194,189,201,181,180,211,215,178,210,182,181,186,183,172,165,161,194,161,165,157,164,156,153,173,154,149,190,143,148,168,169,155,143,153,165,140,155,136,171,149,141,144,152,132,148,156,147,181,135,155,130,140,133,153,121,132,122,121,125,162,139,122,118,122,179,113,116,120,120,115,127,110,129,115,108,141,110,110,125,106,120,113,114,107,111,105,116,99,99,87,96,92,92,94,96,135,91,88,100,89,86,74,92,93,95,92,111,94,84,93,81,77,84,90,85,80,84,77,87,82,75,76,78,75,87,73,74,105,85,97,65,71,70,111,72,72,71,81,89,89,88,83,69,77,61,87,66,64,72,61,62,63,54,60,77,58,78,58,70,59,60,50,48,67,56,42,46,50,65,48,61,46,45,42,51,46,42,59,43,63,52,48,57,46,50,42,37,39,41,48,42,49,31,41,38,44,42,45,37,36,42,46,39,36,27,40,33,33,40,35,48,41,35,27,37,37,36,30,39,28,40,31,32,39,41,25,33,28,34,35,28,35,27,24,28,25,21,30,31,31,32,24,23,38,43,29,34,24,22,24,24,29,31,26,27,25,25,27,21,21,23,25,20,16,13,18,22,25,34,20,14,16,19,18,19,25,18,18,18,27,13,13,24,17,19,15,16,14,17,19,18,15,16,16,14,17,13,15,20,26,17,21,14,17,24,19,27,20,15,32,15,19,18,26,19,28,18,19,12,18,17,16,10,13,12,15,20,14,20,10,16,12,8,9,18,14,6,16,9,17,17,17,9,8,14,13,6,9,8,10,17,12,19,10,16,10,11,11,5,9,16,8,8,7,9,11,15,6,13,10,14,16,15,9,9,7,11,14,20,7,10,6,13,9,14,10,24,2,12,16,20,8,7,10,10,10,9,8,16,7,10,7,10,11,16,13,5,13,11,17,13,11,7,9,21,9,6,12,9,12,8,3,10,5,5,4,4,7,5,6,7,6,8,7,4,6,9,3,13,6,12,4,6,5,7,12,8,6,6,5,9,4,11,1,6,6,4,6,7,2,6,3,4,5,7,8,10,3,5,2,2,7,4,2,5,6,4,2,6,8,2,7,5,8,7,6,2,1,5,10,2,3,8,0,10,4,2,6,4,7,9,4,8,4,8,1,7,6,7,5,3,0,11,4,4,4,7,5,5,4,5,10,7,5,0,3,9,6,4,12,6,3,8,5,6,4,4,9,6,4,8,6,6,11,5,5,6,3,8,7,3,4,9,8,8,5,6,4,12,6,0,0,1,4,2,1,2,0,0,0,2,0,3,0,0,1,0,5,5,0,3,1,4,3,5,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,6,1,0,5,1,3,0,0,0,0,0,2,1,0,1,0,2,3,2,2,2,2,2,3,0,0,4,2,0,0,1,4,2,0,2,0,5,0,2,1,3,0,2,1,3,1,2,0,3,1,3,2,0,0,4,3,4,0,7,5,7,2,1,9,3,3,0,0,1,1,3,8,0,2,3,0,3,0,0,1,0,0,4,1,4,3,6,4,5,2,3,0,0,0,4,3,0,2,3,0,6,0,0,2,0,6,0,2,1,0,3,2,2,0,3,0,2,3,2,4,0,1,1,2,4,3,2,2,3,3,2,0,3,0,3,6,3,5,1,2,0,5,0,0,2,5,4,3,1,0,2,3,2,0,3,0,0,1,3,3,2,2,2,1,0,0,11,3,1,5,4,3,7,3,0,0,0,6,5,1,8,0,0,2,0,3,0,0,3,0,5,1,0,0,0,1,1,0,2,2,4,2,0,4,4,2,3,7,1,0,1,0,0,0,0,1,0,0,0,0,7,0,0,0,2,2,0,2,3,1,0,5,0,1,0,0,6,1,0,0,1,0,4,0,0,7,2,0,3,6,2,0,3,1,0,1,0,3,2,3,1,4,1,1,0,1,1,2,0,0,1,2,13,11,1,1,0,9,0,4,1,0,5,2,1,3,3,1,2,0,7,0,1,0,1,3,0,4,0,0,0,2,6,0,3,1,0,1,4,5,1,0,0,5,0,0,2,0,1,3,4,8,1,2,0,5,0,2,3,4,0,1,3,3,0,6,3,0,0,0,0,0,0,2,2,3,0,1,0,0,0,0,0,1,0,2,1,1,1,1,2,0,0,1,0,0,1,0,0,0,1,3,2,11,6,2,1,2,3,0,2,1,2,1,1,0,4,1,5,2,2,6,3,3,0,13],n:2580,pal:[[1,"#fdf0db"],[2,"#ffdf43"],[3,"#f9d9b8"],[4,"#f7c49f"],[5,"#f8bf1a"],[6,"#dbbfa1"],[7,"#c8b2bc"],[8,"#dead8a"],[9,"#f08e11"],[10,"#c59172"],[11,"#d1895b"],[12,"#9e8a93"],[13,"#c46e3a"],[14,"#c56a00"],[15,"#a16851"],[16,"#ab5926"],[17,"#9b5530"],[18,"#7f4b37"],[19,"#8c400c"],[20,"#7d3b19"],[21,"#5b1e00"],[22,"#4b2113"],[23,"#282828"]],box:[.04684855253041583,.11010338258771368,.9531514770348599,.8495113012264843]},tamoora:{w:1400,h:1804,nn:1688,num:[15,12,19,15,22,12,22,22,6,13,19,1,15,22,15,12,15,8,6,3,19,19,15,19,17,15,9,6,15,9,15,18,19,12,12,20,3,22,3,23,20,19,15,3,12,15,15,3,13,8,9,15,17,19,12,15,12,12,15,20,19,3,4,21,4,21,17,15,12,12,19,19,21,15,19,19,22,19,12,13,21,7,15,19,15,9,9,15,12,15,9,15,18,7,19,15,15,17,12,12,9,12,19,19,12,19,9,19,13,12,15,15,19,1,21,20,19,19,13,9,18,17,1,21,17,9,9,11,8,11,12,7,15,12,9,12,17,15,15,12,7,18,8,15,14,19,21,13,3,1,9,1,3,9,18,12,1,17,18,11,9,18,2,9,13,15,15,12,8,15,18,10,15,9,9,3,2,15,22,12,13,9,15,4,19,21,12,22,3,15,9,15,14,19,18,8,18,13,15,3,2,1,19,18,15,10,6,18,10,1,12,15,10,13,12,15,4,3,13,23,19,17,3,15,13,19,10,17,17,19,8,14,12,15,12,21,4,19,3,18,6,9,19,20,19,19,18,2,4,3,19,15,19,17,12,12,19,15,17,21,19,5,17,9,18,15,12,15,20,9,20,19,9,19,15,13,9,7,15,9,13,13,12,12,7,19,6,13,17,4,19,3,9,11,2,19,9,19,2,8,7,8,3,15,22,19,4,4,15,13,15,17,17,16,12,12,15,9,17,19,13,15,16,19,12,15,19,15,19,15,14,9,3,9,9,12,15,2,15,15,21,4,19,18,13,8,15,22,6,12,10,4,19,6,3,3,19,19,13,13,9,19,15,19,6,23,12,20,18,15,8,3,12,3,19,19,3,15,19,6,17,13,12,15,3,19,9,15,13,15,8,12,15,3,17,12,17,7,19,12,19,23,15,18,15,4,15,19,12,9,9,19,12,19,9,9,5,19,17,15,15,10,9,19,6,15,15,3,15,12,12,15,19,19,2,15,13,20,19,3,15,9,19,12,15,6,9,4,6,19,21,4,8,14,9,8,3,12,5,15,3,12,16,3,6,9,20,3,6,19,9,17,6,15,4,15,15,1,15,4,16,3,3,19,7,3,19,12,3,12,22,19,21,14,12,2,1,3,15,16,10,1,15,12,21,18,3,9,19,15,11,2,15,18,8,4,15,1,12,12,12,12,12,22,17,9,22,21,22,15,22,5,13,13,12,17,9,16,19,6,9,15,11,15,15,13,9,21,19,15,2,17,13,15,17,19,3,6,17,3,16,18,17,9,8,3,3,2,16,15,9,15,19,15,19,9,22,13,1,12,9,15,19,22,16,6,2,2,6,3,8,19,13,9,9,18,20,15,21,12,19,2,22,22,9,12,9,12,12,16,9,21,12,22,3,6,3,18,17,17,4,3,20,13,3,3,6,3,22,13,3,20,16,22,22,11,16,12,9,10,8,3,12,3,13,4,9,6,17,16,17,8,3,3,16,8,15,3,15,3,9,8,22,13,16,20,12,16,10,17,9,2,13,22,16,16,3,8,3,3,10,3,16,12,3,10,12,22,3,22,19,20,3,1,3,20,16,9,10,22,4,9,9,8,16,6,18,21,16,12,12,17,9,1,4,9,12,16,13,10,20,3,22,3,3,16,22,9,17,3,3,19,9,12,12,17,12,3,22,16,8,4,2,12,3,17,22,12,12,20,12,17,11,22,22,17,9,20,3,3,3,18,10,22,12,19,16,3,3,17,2,9,3,9,3,22,8,16,19,15,3,12,16,5,9,12,4,17,21,3,13,12,16,17,10,19,16,3,16,22,16,9,3,3,16,3,6,3,10,17,21,9,3,3,4,3,8,16,9,20,12,3,3,18,21,16,20,10,9,20,3,3,1,3,21,16,20,16,12,4,5,12,20,21,3,3,16,3,10,3,8,3,1,19,19,3,23,19,22,19,3,21,16,21,9,23,3,9,9,21,3,6,16,16,16,16,16,19,3,3,19,10,22,16,20,3,3,21,12,3,15,17,20,22,16,12,2,22,3,17,19,3,21,20,21,19,17,10,10,23,16,3,19,3,9,21,19,9,3,5,13,9,23,16,16,9,9,16,17,9,10,18,19,19,23,16,16,23,10,22,22,22,20,9,3,21,3,3,4,3,20,13,4,4,19,23,20,3,3,12,20,22,3,9,9,17,19,3,3,3,4,12,21,20,1,12,21,21,13,19,19,23,20,3,10,16,3,19,3,4,16,3,3,8,20,21,19,3,3,20,23,3,20,10,10,3,3,12,10,16,20,16,9,16,20,17,9,17,3,9,3,3,21,9,20,9,3,9,14,20,3,21,21,20,3,21,21,21,21,15,19,16,19,19,20,22,20,22,22,16,20,9,9,20,20,12,10,10,3,16,4,22,17,16,17,9,3,12,21,21,21,3,19,19,3,12,9,7,4,21,20,3,17,3,3,17,5,4,4,19,3,3,17,3,4,19,21,19,21,3,21,21,4,21,21,21,21,12,21,8,3,21,12,20,19,16,19,19,15,15,15,15,19,19,19,19,19,13,20,22,22,12,16,22,16,22,22,16,12,17,10,12,12,15,10,20,4,13,9,16,3,4,9,9,9,19,16,20,20,17,20,4,19,19,19,19,17,17,18,15,4,3,3,18,18,3,4,3,3,3,18,21,3,9,3,3,3,3,9,8,3,8,8,8,9,13,15,4,4,4,7,9,14,1,3,3,1,3,3,3,3,3,3,3,3,13,23,3,3,21,19,15,9,15,21,4,21,4,21,3,18,3,19,5,4,21,18,4,9,17,21,18,9,21,19,3,21,3,19,21,19,17,21,15,21,21,3,19,3,19,21,17,21,3,21,3,21,3,3,21,3,19,19,21,19,19,21,21,21,21,3,3,17,21,4,3,4,12,21,4,21,8,4,3,4,21,4,4,4,3,4,4,3,17,3,12,4,4,15,15,12,13,13,12,12,13,8,12,12,12,12,8,8,13,12,12,12,20,20,4,4,20,19,15,15,16,13,19,19,20,20,20,20,21,15,20,20,20,20,16,16,10,20,3,16,20,20,12,16,17,17,9,16,22,16,16,22,16,22,16,20,16,16,20,16,16,16,16,16,16,20,12,20,12,12,16,20,22,22,20,16,10,20,16,22,16,22,10,12,10,10,9,16,22,3,16,22,22,16,22,10,22,12,22,10,22,3,3,16,22,3,17,16,10,22,16,10,9,16,16,16,20,10,23,20,20,10,12,16,20,10,10,3,16,4,16,13,16,16,9,16,16,12,20,17,16,16,16,4,13,3,3,3,16,15,20,9,9,9,3,9,9,23,3,3,3,3,3,3,4,3,19,4,20,4,20,4,20,18,9,19,12,10,21,16,21,4,4,18,13,9,17,16,19,20,19,16,16,16,20,9,20,16,20,3,3,13,17,19,4,3,3,20,17,17,16,3,20,16,3,17,9,19,19,21,19,19,3,9,21,19,3,9,21,19,3,21,3,9,16,19,17,17,3,4,17,17,13,17,13,3,17,3,9,3,13,9,8,13,15,9,9,9,3,3,3,3,18,3,19,9,3,18,15,9,3,18,9,9,3,18,9,3,4,3,3,9,4,3,19,9,3,9,3,4,3,3,3,4,4,12,3,10,3,4,4,3,3,9,3,3,3,4,3,3,3,3,3,3,3,21,3,3,21,21,21,21,21,21,3,3,3,21,17,21,19,4,3,9,3,3,9,16,3,19,12,8,1,8,12,3,8,3,3,6,3,8,3,8,8,8,17,6,8,6,6,8,11,12,11,13,3,9,3,10,10,10,10],area:[76042,31499,27322,18813,14335,13027,12257,12109,11474,11688,10347,9212,7902,7910,7762,7579,6600,6513,6250,6148,5911,5599,5443,5554,5538,5273,5683,5025,4934,4930,4535,4584,4481,4518,4272,4295,3692,3787,3711,3599,3724,3553,3606,3551,3443,3368,3342,3331,3541,3446,3292,3147,3179,3415,3273,3346,3436,3153,3103,3338,3116,3219,3040,3217,3302,2981,3272,2919,2999,2837,2881,2828,2696,2694,2699,2678,3159,2706,2576,2557,2485,2563,2522,2436,2414,2443,2483,2359,2342,2334,2548,2297,2292,2423,2275,2381,2284,2230,2363,2246,2219,2351,2252,2293,2245,2177,2236,2115,2139,2191,2244,2111,2118,2144,2033,2067,1992,1999,2080,1979,2006,2013,1981,2049,1993,1951,1918,1925,1893,1908,1963,1872,1920,1802,1894,1798,1790,1755,1746,1768,1752,1718,1693,1745,1754,1685,1641,1687,1652,1575,1577,1581,1695,1567,1584,1537,1514,1528,1559,1504,1576,1497,1481,1445,1419,1482,1443,1434,1413,1420,1431,1449,1418,1441,1470,1408,1436,1346,1420,1336,1336,1313,1293,1471,1289,1397,1291,1445,1251,1278,1272,1216,1265,1221,1245,1217,1236,1198,1199,1209,1196,1176,1154,1177,1151,1218,1198,1130,1215,1115,1126,1150,1167,1135,1118,1105,1174,1087,1093,1123,1056,1058,1165,1068,1101,1098,1100,1024,1043,1114,1011,1015,1056,1056,1017,1007,1077,1011,1042,983,982,1088,975,1049,970,948,977,981,973,958,962,966,955,1013,953,969,935,908,960,944,916,903,883,959,947,900,911,896,915,903,907,868,902,870,878,877,866,918,869,881,910,838,847,839,867,836,823,822,828,858,820,844,867,846,832,810,837,769,804,759,797,876,783,781,846,737,772,781,738,784,760,781,743,794,762,789,726,775,747,700,707,705,781,707,703,713,683,677,660,700,659,646,682,696,641,683,650,687,637,636,639,644,676,616,651,629,646,664,653,623,641,661,639,648,620,682,636,608,640,625,649,616,608,605,625,579,605,620,622,605,587,580,608,584,598,588,558,558,594,565,565,572,580,584,601,559,545,555,551,536,576,615,552,579,542,592,588,548,559,544,537,515,538,537,534,548,525,524,502,589,589,520,557,518,533,528,591,508,516,498,500,527,485,537,529,503,517,502,507,500,500,471,542,504,476,509,481,574,488,483,470,469,491,462,467,492,483,503,454,476,475,521,461,490,452,464,472,445,501,443,451,452,479,460,455,471,458,433,447,427,450,453,436,427,438,413,417,418,408,488,404,432,454,433,395,407,454,422,431,397,417,400,405,410,404,404,419,369,385,399,371,390,449,383,372,379,377,385,349,371,370,404,360,367,359,388,359,412,364,381,377,366,357,382,399,371,376,393,378,344,339,380,332,379,345,347,356,346,326,330,337,344,354,315,319,342,347,323,311,334,323,352,325,327,344,305,317,332,307,312,331,314,333,306,317,313,305,305,303,302,343,291,306,316,300,273,299,317,299,310,321,293,284,353,306,284,280,279,279,281,279,284,304,298,309,256,298,270,272,261,270,273,279,288,275,270,295,311,259,298,266,268,256,325,250,247,359,258,269,241,242,243,283,239,233,397,242,251,320,231,264,267,231,346,240,284,274,249,230,228,226,229,223,249,247,226,221,212,206,203,213,219,244,211,192,193,198,248,190,232,200,204,191,221,181,187,188,185,190,171,187,189,195,175,200,188,189,165,172,181,171,205,168,188,179,172,174,152,182,186,150,197,186,139,170,154,160,173,217,186,155,149,148,156,138,130,125,141,128,124,139,140,140,146,122,148,125,133,130,177,121,134,121,110,115,169,142,137,111,129,112,113,135,116,105,103,103,102,105,110,128,96,111,120,125,91,100,100,98,105,117,113,86,93,133,84,96,76,97,85,82,96,101,83,90,95,82,82,109,101,81,91,89,76,77,111,73,70,72,71,76,80,82,87,84,66,75,70,64,62,111,65,91,70,86,78,66,77,78,63,60,61,69,71,79,81,64,90,76,55,61,60,60,53,60,66,61,73,60,66,52,55,54,52,65,71,64,63,62,54,64,50,60,81,60,44,54,53,71,72,56,43,55,50,58,56,48,59,44,50,47,61,51,47,43,50,39,39,41,45,52,36,52,43,43,49,53,42,48,39,40,43,37,47,47,45,38,32,41,55,61,46,43,37,29,36,42,30,34,39,50,27,33,45,34,34,43,33,33,35,27,44,36,35,29,25,24,29,33,17,30,24,43,25,24,29,48,31,31,32,21,28,27,29,47,23,29,27,18,27,36,24,21,19,18,23,23,26,26,16,21,22,22,20,27,21,28,33,27,23,22,24,12,12,20,23,17,30,30,20,17,24,29,19,20,16,20,24,22,27,15,15,18,20,33,16,22,18,14,16,19,21,18,14,17,14,14,17,18,20,14,16,13,16,17,11,14,15,15,12,10,9,11,13,14,10,12,10,9,11,10,16,10,12,9,11,12,8,16,13,15,12,13,12,13,23,18,19,8,11,16,11,11,10,7,5,10,9,15,9,10,7,7,9,17,13,17,9,13,13,9,6,10,7,7,11,13,10,23,9,13,12,7,6,7,10,9,13,7,12,7,5,17,8,16,13,27,5,1,9,8,2,7,9,8,7,6,4,7,6,6,4,8,4,3,12,14,6,5,4,6,6,2,6,4,3,7,5,4,5,7,4,6,3,6,7,4,3,5,6,6,7,5,6,5,6,6,3,7,3,5,6,6,5,7,4,4,8,6,7,6,6,2,3,5,8,5,3,7,4,7,10,4,3,2,4,6,4,3,2,6,15,2,5,4,4,2,2,4,4,6,9,12,5,3,6,8,6,4,5,5,3,4,4,8,6,2,6,3,5,2,5,6,8,7,8,7,0,0,0,0,1,1,2,0,5,0,0,1,0,1,0,3,6,4,0,0,0,0,8,3,4,1,6,1,2,0,2,0,5,3,3,4,0,5,5,4,1,4,1,9,3,0,4,5,1,6,4,2,7,5,2,2,3,0,0,0,2,1,1,1,2,0,2,0,3,1,2,0,0,1,2,2,0,2,3,0,0,0,0,2,2,1,1,3,2,1,3,6,0,0,1,0,4,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,3,0,0,1,2,0,0,1,1,0,4,1,1,0,2,3,3,0,0,0,0,2,0,1,3,4,0,2,4,3,2,2,2,0,0,2,0,4,0,4,0,8,0,4,0,0,2,0,1,2,5,4,1,0,1,2,0,2,3,6,1,1,2,4,2,5,2,1,4,2,0,3,0,1,4,2,0,0,1,0,2,1,2,6,1,1,10,6,2,3,4,2,2,4,0,3,0,2,4,1,6,0,3,0,5,0,0,2,4,2,3,1,2,0,3,2,8,0,2,1,3,2,0,0,3,0,0,2,0,1,3,7,4,3,0,2,0,2,4,5,1,1,0,0,0,5,1,7,0,1,6,1,4,2,0,0,1,2,0,10,0,0,0,7,3,3,3,15,2,6,7,0,5,2,3,2,5,5,0,0,3,0,2,2,0,3,1,3,0,0,8,0,5,4,1,2,2,0,0,2,0,0,3,1,7,0,2,0,0,3,2,1,5,0,0,1,9,3,0,7,1,11,0,1,0,0,0,2,2,0,0,6,7,0,0,4,3,5,6,2,4,0,3,7,11,0,5,1,0,0,15,1,9,8,4,0,3,0,5,2,1,2,3,1,8,3,0,0,0,1,3,0,0,0,7,2,0,9,2,0,0,1,3,4,2,3,5,4,4,1,5,4,0,2,2,1,0,8,1,7,3,2,0,1,3,4,3,1,3,1,1,2,3,1,8,8,7,6,8,3,0,1,1,0,0,0,0,3,2,0,9,0,1,0,0,0,0,2,6,1,2,1,0,3,1,3,4,0,0,1,14,0,3,13,0,11,1,5,2,2,2,0,2,3,0,0,3,1,0,2,3,6,1,15,0,0,0,2],n:2606,pal:[[1,"#fcdf61"],[2,"#e2d8e1"],[3,"#ecd0bc"],[4,"#c5b6c4"],[5,"#d3b93b"],[6,"#fa8f2b"],[7,"#a0af2f"],[8,"#e08a5f"],[9,"#c79379"],[10,"#a193a0"],[11,"#cf6c00"],[12,"#c27046"],[13,"#c46831"],[14,"#6d7f00"],[15,"#a9511b"],[16,"#915d48"],[17,"#a2532a"],[18,"#913d04"],[19,"#863b10"],[20,"#5f311f"],[21,"#6b2400"],[22,"#282828"],[23,"#3b1100"]],box:[.048948420221952324,.06882719655956604,.9510516093433234,.8907875144413061]},nawwoor:{w:1400,h:1953,nn:1945,num:[1,1,16,23,1,22,16,7,22,1,22,16,23,23,1,19,16,7,2,16,16,16,2,12,2,16,12,12,19,1,14,1,16,12,16,1,22,16,6,7,8,23,2,16,15,9,19,1,23,1,2,1,16,5,17,16,2,16,5,2,16,19,14,15,16,23,23,14,19,8,22,2,16,10,1,15,11,1,8,23,1,20,12,16,1,2,22,12,5,2,15,3,23,1,16,23,5,1,16,20,12,5,16,8,23,16,7,23,2,16,5,5,16,5,23,16,16,1,18,23,23,7,14,1,12,1,16,21,16,2,16,23,2,1,18,12,1,16,15,1,1,1,5,1,7,20,12,7,19,1,2,6,1,1,16,1,14,16,23,7,16,16,5,1,16,23,5,1,1,1,16,1,15,10,2,5,14,16,5,1,2,5,7,11,7,2,23,3,1,1,14,12,7,7,7,5,14,14,6,1,14,16,5,2,5,1,7,19,11,12,5,9,11,10,5,6,12,14,2,21,23,5,8,1,2,14,5,1,1,13,22,2,7,2,1,20,7,5,7,1,14,12,19,19,3,1,2,1,14,16,12,14,2,5,7,7,16,2,23,16,8,2,12,5,12,8,10,7,12,2,15,2,22,16,8,1,6,1,1,9,1,16,10,23,12,1,14,21,3,6,1,3,16,16,3,23,1,7,18,2,19,16,5,16,3,14,1,23,21,16,16,12,1,19,2,2,15,1,5,12,1,14,2,2,1,23,7,16,1,7,17,15,1,19,9,1,2,23,6,1,15,14,11,12,14,16,6,11,9,16,16,1,10,1,2,16,1,7,1,16,1,7,1,6,5,16,12,18,1,1,12,6,7,13,10,12,18,14,5,1,16,1,5,1,22,8,18,16,14,12,23,16,1,13,23,10,12,12,9,9,14,7,1,5,12,1,1,7,7,12,22,6,14,16,1,16,1,16,20,2,18,6,18,16,5,7,3,16,1,16,16,3,16,19,6,11,16,1,5,22,16,2,19,12,13,5,20,7,9,16,1,1,2,16,7,1,1,3,3,8,9,16,9,1,2,6,7,16,7,1,7,12,16,1,2,23,1,3,15,15,1,1,19,1,23,8,17,1,6,16,8,9,2,16,7,5,7,22,5,2,23,13,16,12,23,7,2,9,7,1,1,16,12,7,18,12,21,1,2,16,7,9,23,22,7,16,2,18,16,1,14,1,17,18,5,1,11,9,15,18,12,21,5,14,9,16,12,22,16,11,5,12,2,16,8,9,14,23,5,16,1,17,1,14,5,1,1,7,12,23,7,12,23,23,1,1,16,5,22,16,3,8,16,23,19,16,8,9,5,2,23,14,1,6,12,23,2,1,9,8,19,12,1,7,14,5,7,1,12,12,7,22,16,23,20,12,7,7,9,22,14,5,1,18,3,9,16,16,14,9,18,14,16,16,17,1,18,12,1,14,2,5,9,5,3,21,16,23,6,20,10,16,1,14,19,12,16,22,7,16,1,2,3,6,18,7,1,7,1,9,2,23,5,6,10,14,10,22,1,7,22,16,6,1,4,14,9,7,1,10,9,17,16,4,12,1,5,19,23,22,16,12,19,1,1,18,5,10,5,1,2,20,12,3,4,1,16,7,19,17,15,8,12,18,3,19,16,8,16,7,7,16,12,1,2,15,7,5,3,16,7,9,1,1,18,19,5,1,12,7,13,18,22,1,11,13,16,3,17,13,18,16,9,6,9,4,12,13,2,9,6,16,22,7,12,8,5,22,7,18,1,7,16,10,10,6,9,12,5,5,18,18,18,9,5,9,6,16,12,15,14,7,9,22,20,16,22,7,14,18,15,9,23,15,12,5,7,15,6,12,2,5,10,23,16,10,1,14,13,7,14,13,16,13,9,17,9,3,22,6,16,16,18,13,6,11,5,23,18,22,1,3,12,16,9,1,6,7,14,14,10,14,16,18,3,9,7,9,5,22,3,16,8,9,22,9,13,5,13,8,1,13,23,12,13,18,9,23,12,4,20,13,8,9,17,5,16,19,17,20,22,9,14,22,16,10,22,13,8,19,12,16,16,12,12,13,7,22,12,23,16,10,18,13,7,3,9,12,3,18,1,22,9,5,18,8,8,22,13,22,10,8,21,18,3,3,6,15,10,15,5,23,13,5,22,16,18,14,6,22,16,16,3,8,4,8,13,5,16,14,9,5,22,16,12,15,11,9,18,10,9,15,3,1,9,11,3,13,13,5,10,16,8,8,15,2,1,6,12,13,11,12,18,14,3,5,10,12,10,8,22,17,10,23,22,20,12,2,17,3,16,13,6,15,3,19,14,22,6,8,13,11,9,13,2,14,23,13,15,8,8,17,5,15,11,18,13,1,6,10,16,22,6,15,13,13,5,3,2,22,12,13,2,1,2,3,10,22,13,13,9,8,14,23,6,10,10,22,10,12,3,5,5,3,16,16,10,12,12,12,14,13,9,9,22,2,3,12,8,9,19,15,22,23,5,13,7,20,8,19,8,8,6,16,3,3,15,19,22,22,18,20,14,4,5,5,3,13,8,3,17,9,13,6,6,3,3,15,16,16,1,9,8,3,12,13,8,18,5,7,5,15,20,8,6,6,8,6,18,17,17,14,9,2,15,22,4,13,8,8,6,20,15,20,22,16,3,6,8,6,9,10,2,2,8,4,6,13,14,8,8,10,23,3,8,6,8,16,13,7,18,15,15,2,15,3,13,5,4,20,11,6,10,1,23,10,12,8,8,3,14,20,18,22,13,6,13,17,6,6,8,5,9,6,17,22,6,18,14,10,13,5,5,9,13,13,6,12,12,21,12,6,6,6,6,4,22,22,22,15,2,13,3,14,12,3,8,16,14,13,13,1,14,9,1,3,5,8,15,10,12,6,20,17,1,1,15,13,14,22,13,15,10,10,10,5,20,13,10,7,2,4,1,6,8,3,6,19,7,2,15,9,20,20,18,19,15,6,10,5,5,5,2,5,8,3,8,3,16,3,12,12,8,12,12,8,12,10,13,12,13,10,12,3,3,6,8,6,6,6,8,16,3,16,20,20,15,4,9,9,4,13,4,15,20,14,14,14,5,9,20,18,15,15,10,13,15,2,2,5,13,15,15,20,20,7,20,20,10,6,6,6,15,10,6,15,5,13,13,4,2,20,7,3,4,12,15,3,6,3,8,12,18,12,19,6,9,10,6,14,17,9,9,14,20,20,6,6,15,10,13,10,6,6,3,10,5,20,5,6,6,1,14,13,5,11,2,2,12,6,6,12,8,12,8,3,8,16,8,12,12,8,12,8,12,3,12,8,12,12,8,8,18,12,18,8,12,21,8,13,16,13,13,18,16,12,16,16,16,16,6,3,19,10,6,18,6,6,3,3,3,10,18,16,18,6,10,19,10,10,16,6,12,12,8,6,12,6,23,23,21,19,19,3,3,8,3,6,6,6,6,3,6,3,6,8,3,8,12,6,3,6,6,12,8,8,3,3,8,3,3,6,3,8,3,8,8,3,3,3,12,18,18,14,17,17,17,17,14,11,11,17,17,17,9,7,7,1,1,9,13,15,15,15,4,4,4,15,9,4,15,4,4,17,13,4,20,20,14,20,17,4,20,14,17,14,4,14,1,17,15,17,17,17,15,4,9,15,14,13,13,14,14,17,14,1,2,2,5,14,4,1,9,6,7,20,20,18,6,22,20,22,20,3,7,22,22,22,18,22,18,13,15,20,9,22,15,15,22,2,20,15,2,13,22,15,15,22,15,15,20,13,15,13,15,15,13,13,13,20,15,22,20,20,13,18,20,15,6,22,13,6,10,1,1,13,4,10,3,10,9,17,10,17,17,5,13,13,1,13,4,15,4,13,4,15,15,15,4,2,1,2,1,1,8,9,6,3,22,20,3,3,22,2,20,15,7,7,3,8,12,12,8,1,12,12,8,12,1,16,3,8,8,3,20,12,8,1,6,4,3,12,12,17,12,3,3,12,15,12,16,12,18,6,18,6,3,12,19,20,19,3,5,3,3,3,18,3,18,8,8,16,12,1,18,12,16,16,12,12,7,16,7,5,7,1,18,1,1,1,10,7,6,7,15,7,2,2,2,5,10,16,18,19,13,19,20,18,18,16,20,5,17,17,10,17,13,13,19,13,20,14,23,14,11,23,17,16,17,18,18,17,18,17,18,17,18,18,18,20,21,18,16,18,23,10,23,13,20,10,10,20,6,15,10,10,6,18,14,10,15,15,20,17,10,17,15,20,13,15,20,17,20,23,5,6,6,6,3,3,6,5,3,3,3,3,1,6,9,14,5,1,9,5,5,5,9,5,5,5,2,5,5,5,7,3,3,3,7,7,9,9,11,9,11,15,6,5,13,5,16,3,6,15,15],area:[50603,22532,21898,16446,16877,13227,12505,11824,11456,11562,10840,9673,8443,8121,7177,6714,7267,6593,5837,5723,5906,5790,5567,5592,5324,5562,4979,5171,5542,4823,4971,4513,4214,4573,4315,4147,5375,4125,4553,4211,4430,3981,3923,3949,3957,3820,3824,4021,3717,3631,3854,3578,3577,3879,4106,3598,3590,3565,3683,3676,3568,3403,3502,3693,3384,3378,3317,3524,3447,3461,3558,3535,3148,3128,3046,3055,2956,2947,3219,3077,2890,3006,3070,3001,2967,2895,3078,2950,3e3,2774,2832,2853,2687,2721,2723,2677,2734,2679,2690,2757,2793,2639,2647,2899,2599,2642,2589,2536,2610,2567,2596,2515,2459,2544,2555,2425,2565,2377,2358,2351,2361,2590,2322,2305,2407,2372,2266,2288,2283,2349,2308,2330,2189,2182,2110,2169,2069,2169,2064,2069,2075,1989,2080,1982,2066,1975,2247,2147,2014,2073,1981,2164,1938,1913,1889,1905,1931,1865,1849,1809,1994,1881,1834,1852,1776,1819,1935,1795,1768,1788,1809,1783,1823,1828,1753,1757,1760,1795,1757,1757,1726,1768,1775,1936,1766,1733,1673,1838,1669,1638,1682,1782,1703,1634,1639,1617,1604,1616,1599,1555,1675,1556,1558,1546,1531,1494,1623,1588,1527,1575,1492,1524,1481,1486,1434,1488,1476,1543,1474,1492,1455,1484,1411,1409,1408,1459,1433,1400,1388,1333,1478,1344,1366,1468,1410,1418,1335,1357,1367,1334,1362,1307,1341,1402,1343,1306,1342,1280,1268,1340,1287,1307,1284,1298,1273,1345,1263,1306,1258,1243,1224,1222,1303,1214,1184,1282,1295,1180,1206,1242,1188,1185,1333,1268,1205,1171,1225,1255,1115,1168,1164,1135,1181,1136,1251,1092,1237,1182,1228,1139,1087,1167,1117,1094,1169,1082,1111,1077,1065,1090,1069,1001,1039,1008,1130,1258,1023,1086,1038,986,1030,997,981,1045,980,983,1008,1003,1033,997,1037,987,977,946,1102,1033,1012,1067,1009,949,974,984,961,911,971,965,923,1054,939,928,1021,1026,904,948,920,973,1019,936,914,925,914,899,1078,988,889,905,859,896,900,881,900,875,854,872,1008,961,854,891,858,874,925,881,895,993,859,862,891,829,938,863,861,867,995,822,922,871,959,850,819,800,794,834,799,952,860,827,818,828,816,838,824,801,780,805,878,796,779,773,817,780,858,789,804,775,747,780,754,752,801,729,805,837,801,741,738,744,741,793,757,796,723,746,763,729,724,815,749,727,745,809,708,706,720,732,766,715,700,734,671,769,715,667,678,700,699,694,716,676,672,711,657,653,696,652,640,650,655,651,639,671,650,680,664,628,656,673,617,675,822,706,616,603,642,622,591,661,652,595,716,651,659,618,609,596,647,596,586,801,601,587,589,603,592,598,602,611,591,572,566,561,570,628,562,596,559,566,563,574,591,600,594,582,575,599,570,610,570,546,549,589,625,532,564,526,578,554,537,563,625,542,537,540,545,526,552,514,540,625,535,550,557,512,582,567,531,507,560,503,533,512,516,537,538,524,500,522,537,522,543,480,505,495,502,484,488,480,480,510,499,476,509,465,465,460,468,498,500,477,474,460,448,460,465,487,453,448,443,472,463,446,450,459,450,453,452,443,448,429,428,448,435,504,483,447,449,437,445,470,463,547,440,425,422,454,421,442,412,430,435,431,443,434,419,447,424,402,435,383,423,423,402,386,431,449,415,400,402,397,404,404,400,453,376,419,429,500,393,402,383,378,384,384,400,444,454,378,384,395,378,438,378,405,377,366,388,452,411,374,352,373,386,372,358,344,348,371,345,342,340,407,341,364,336,406,350,335,349,356,342,319,344,343,356,364,316,357,310,386,307,321,334,309,339,312,309,304,292,341,312,318,335,288,353,301,305,285,263,332,271,294,281,281,307,268,271,346,289,299,292,265,293,294,256,262,281,267,284,263,266,296,280,322,310,259,269,262,280,307,261,323,284,293,263,242,272,256,258,258,230,240,255,280,269,243,282,233,233,233,267,248,231,241,246,269,255,266,221,212,238,295,205,214,210,213,210,221,263,216,229,234,187,215,227,183,196,196,199,180,210,222,198,180,215,194,175,183,170,199,191,176,178,196,264,176,184,197,180,176,197,193,188,163,175,195,168,178,166,196,173,171,166,163,213,160,188,163,169,166,167,174,158,159,161,155,192,153,168,141,154,157,167,165,137,142,182,157,144,147,127,140,133,140,133,168,147,135,146,151,138,166,155,135,141,126,145,135,140,132,125,157,130,183,155,125,119,147,109,116,180,121,119,122,107,114,120,134,141,118,122,106,109,112,100,93,114,104,117,97,104,92,106,105,117,118,96,120,106,96,112,98,90,102,93,99,112,103,98,103,98,95,108,97,115,107,130,90,118,90,107,112,104,91,89,91,86,97,108,95,104,82,93,85,93,124,78,89,82,91,77,86,77,82,76,76,80,74,75,86,74,85,94,88,87,68,87,78,73,79,76,71,112,70,102,75,98,87,73,70,76,75,73,83,80,77,71,71,90,78,64,82,68,80,79,67,84,55,67,74,63,75,64,82,69,82,92,73,67,75,58,56,59,55,62,67,61,75,53,74,59,75,95,59,54,60,72,56,57,50,64,63,59,40,54,63,49,47,62,63,52,47,62,98,46,42,47,44,54,47,44,44,50,44,59,46,39,70,42,46,53,66,57,53,43,43,41,41,57,35,45,45,38,37,36,37,42,36,54,40,42,46,38,44,42,46,41,45,41,47,54,32,41,39,35,36,41,56,42,31,37,36,38,52,42,35,51,34,39,38,68,31,33,37,37,38,34,44,42,36,31,30,25,35,38,42,20,38,46,36,27,35,37,31,46,32,33,22,34,37,28,30,25,26,28,23,40,20,27,29,32,28,29,33,39,20,26,55,33,23,33,27,22,22,26,29,31,31,28,35,23,29,30,25,17,20,19,21,21,21,22,17,19,24,18,21,26,20,22,15,21,23,23,30,20,28,14,41,16,18,27,14,24,21,23,26,13,19,30,18,29,19,33,16,16,29,18,18,23,20,15,24,18,15,21,16,17,45,22,11,11,6,13,11,16,11,9,30,12,19,18,21,12,19,14,11,12,17,25,10,15,28,16,30,13,16,12,10,12,23,12,13,8,14,7,21,8,8,10,9,11,8,22,12,24,14,22,13,4,7,12,7,10,11,6,12,15,18,11,8,13,10,20,7,9,11,12,9,2,13,14,8,16,12,12,11,8,7,11,9,6,16,7,4,12,4,11,5,4,13,7,2,5,6,4,12,2,12,38,4,3,6,4,3,5,5,7,2,6,10,7,17,12,5,7,3,4,6,4,9,7,5,7,10,2,16,6,10,7,9,6,6,15,6,9,8,7,7,13,9,10,7,8,9,8,5,9,7,6,3,5,2,3,9,0,6,6,8,5,7,7,6,14,6,7,5,3,9,6,9,7,11,6,5,9,9,5,8,8,6,0,17,12,8,4,18,10,23,7,8,4,4,2,7,9,3,5,2,7,6,0,2,0,0,8,4,10,6,3,0,11,1,0,11,0,3,1,13,0,17,0,0,21,17,1,0,1,16,0,2,5,4,0,5,7,9,3,1,5,8,10,1,13,7,0,0,1,0,5,13,5,4,8,13,5,0,9,12,4,5,12,4,4,1,0,0,12,2,0,8,0,2,1,1,3,3,0,0,8,0,2,0,0,2,0,15,0,0,16,1,1,0,15,0,0,5,0,0,16,2,0,3,1,0,10,9,9,15,2,5,1,13,2,0,3,9,6,0,6,0,0,1,0,2,0,0,0,1,0,2,0,0,5,2,2,1,8,2,8,0,4,5,1,5,4,0,2,4,0,0,1,0,2,1,0,4,3,21,5,6,2,0,10,8,0,6,0,5,8,2,1,0,0,0,2,1,6,1,0,1,0,3,0,2,10,3,0,1,2,3,2,0,0,0,2,3,0,0,0,0,2,0,0,3,0,0,0,0,8,7,5,2,2,4,1,2,5,6,3,2,4,3,0,5,0,4,0,1,7,2,2,2,2,2,5,2,8,4,2,2,0,3,9,1,4,0,0,4,3,5,3,5,0,1,1,0,0,0,0,0,0,0,0,8,0,1,0,9,1,6,1,0,0,0,0,3,2,0,1,2,0,0,0,3,1,0,0,5,0,0,1,2,2,0,5,0,0,0,8,0,0,0,2,0,1,6,3,10,11,0,1,0,6,0,0,0,0,4,0,0,0,3,2,2,3,0,0,0,6,3,0,3,0,0,0,0,0,0,0,1,0,0,0,0,3,0,0,2,0,0,0,0,0,0,1,0,0,0,3,5,3,1,6,0,12,1,0,0,0,0,1,1,11,6,0,2,2,2,1,0,0,0,0,0,4,1,0,2,6,1,0,2,1,6,5,3,2,2,3,3,0,7,2,2,4,4,4,6,3,1,4,0,1,3,0,2,0,6,1,6,0,2,3,0,6,0,1,8,12,5,0,5,5,1,0,0,0,0,4,10,2,7,4,0,3,6,7,0,0,2,0,0,0,2,1,0,0,0,1,0,0,2,1,1,1,2,4,0,5,3,0,2,0,2,4,4,0,0,0,1,0,0,0,0,0,0,0,3,5,5,3,1,1,1,1,2,1],n:2952,pal:[[1,"#fdf8a3"],[2,"#fadc72"],[3,"#dfd0d9"],[4,"#cfcb78"],[5,"#e9aa6c"],[6,"#c2acb9"],[7,"#f19335"],[8,"#bb8ae3"],[9,"#bf8247"],[10,"#9d8895"],[11,"#c56e04"],[12,"#9465bc"],[13,"#9b6672"],[14,"#9d5329"],[15,"#794753"],[16,"#683c98"],[17,"#6f2d03"],[18,"#5c3159"],[19,"#4f257f"],[20,"#572935"],[21,"#3a116a"],[22,"#282828"],[23,"#3a1138"]],box:[.08338624715900697,.06882719655956604,.916613779202125,.8907875144413061]},kabbooba:{w:1400,h:1615,nn:1533,num:[11,9,5,23,23,23,9,10,15,15,5,11,17,11,13,16,12,9,5,14,5,17,17,12,14,1,5,11,17,5,10,5,11,1,13,5,5,9,11,11,14,13,3,14,7,15,6,14,9,17,9,15,17,11,5,17,14,17,5,17,3,9,5,5,3,17,17,7,3,5,13,3,13,5,11,3,9,9,15,3,17,3,16,9,17,5,5,16,11,15,21,16,11,17,10,9,14,11,5,9,9,5,15,17,17,14,15,11,12,21,5,12,15,13,17,11,10,11,9,5,5,21,9,5,9,14,12,11,20,14,9,5,5,5,17,21,3,5,9,23,5,9,9,9,16,5,21,5,13,9,15,10,9,13,15,9,9,5,7,22,9,9,17,7,17,10,9,9,13,21,4,1,12,8,13,10,11,10,11,15,7,14,17,21,9,3,14,18,11,12,17,17,7,9,10,7,3,9,1,5,12,7,4,5,6,2,3,6,9,17,23,7,17,16,14,1,11,14,14,3,1,5,9,17,12,18,7,20,23,11,11,21,15,9,15,11,20,11,11,9,9,9,17,8,10,8,3,11,11,17,17,8,17,13,11,12,5,11,5,11,17,9,3,6,15,9,21,11,15,17,15,17,12,9,12,9,12,7,7,9,11,9,14,13,9,11,15,15,17,3,21,11,17,15,9,11,18,11,17,5,11,5,9,17,17,22,11,9,11,11,9,22,3,18,5,3,9,11,9,11,14,16,3,3,21,14,14,10,5,5,7,15,15,9,21,5,15,18,11,13,14,9,9,13,9,11,2,9,7,17,5,5,11,17,10,5,17,7,15,9,12,5,11,9,9,15,9,17,5,9,17,9,9,17,1,12,5,9,9,7,23,5,17,7,10,9,9,23,15,10,21,17,10,9,15,21,8,9,15,18,9,16,10,5,18,18,17,14,14,16,12,2,9,9,9,15,9,9,11,5,11,1,5,9,17,9,7,5,11,5,18,5,17,3,8,13,5,5,11,17,9,5,17,9,5,3,3,8,11,9,11,3,5,12,3,17,17,15,5,15,9,9,10,7,14,11,7,5,20,7,9,3,10,5,9,5,17,15,18,11,18,8,11,9,21,12,18,11,21,1,11,17,20,5,12,9,23,5,12,18,5,3,9,12,7,9,9,7,11,13,9,15,3,9,5,16,5,17,20,5,13,9,9,9,10,11,15,12,9,17,9,8,11,17,17,11,2,8,9,17,14,21,5,5,9,18,8,7,12,18,21,9,11,5,15,11,3,17,9,20,20,11,8,5,17,3,5,9,5,15,12,20,17,3,9,23,13,17,3,11,5,5,15,16,2,18,21,13,15,5,5,21,21,11,21,18,23,18,9,5,1,5,5,21,2,17,17,2,14,21,9,3,9,9,5,9,5,5,8,9,15,11,8,17,17,2,18,9,9,9,17,11,9,9,3,12,13,10,9,12,23,9,13,5,21,7,21,17,23,15,2,5,17,8,23,21,21,12,17,9,15,23,12,17,8,5,21,2,17,12,23,9,18,12,21,9,12,5,3,21,3,3,23,3,5,9,3,17,22,10,2,5,5,12,10,9,3,2,2,3,9,2,11,17,11,12,3,12,15,15,15,5,18,23,12,3,5,21,15,5,15,21,9,15,5,3,17,15,21,15,14,15,18,2,8,13,2,3,13,3,17,17,13,3,7,12,9,9,13,2,11,21,21,3,17,3,5,9,13,12,5,17,3,9,9,21,14,18,15,3,2,5,3,5,23,9,3,5,3,14,15,5,3,17,15,15,2,9,8,18,3,8,3,23,18,21,2,5,3,13,12,9,20,15,9,21,17,9,18,12,21,18,15,13,15,12,21,9,15,9,12,8,10,5,23,18,7,21,15,21,23,8,3,1,2,3,21,15,9,3,8,3,5,23,3,18,3,3,23,13,7,15,21,12,10,5,21,21,12,21,12,17,22,23,9,18,20,18,3,2,5,3,8,15,9,22,12,9,23,18,7,15,2,9,2,15,5,21,2,18,12,3,21,17,3,3,5,6,17,15,5,21,22,3,15,7,17,5,15,5,18,12,5,21,21,21,3,3,3,8,3,2,15,22,12,5,18,2,12,11,17,20,3,21,12,9,12,18,12,18,2,3,8,15,15,3,3,3,21,18,22,2,11,7,21,9,9,13,15,9,17,11,17,3,8,5,8,3,2,15,21,23,22,21,18,18,12,18,5,18,21,12,21,3,13,21,11,3,8,3,3,8,3,3,3,3,23,23,9,18,8,5,21,21,18,18,18,23,12,18,21,11,17,5,2,13,3,2,3,17,5,3,21,12,9,9,21,8,18,18,18,2,5,18,15,9,15,8,18,2,21,7,11,3,17,3,3,3,3,2,2,12,5,3,3,12,17,6,6,12,5,18,3,21,15,18,15,5,12,18,15,21,22,9,23,8,8,18,18,23,18,18,21,18,18,5,18,18,18,12,18,23,2,15,18,12,12,23,5,8,12,9,12,21,21,21,21,18,18,21,17,21,15,9,2,7,5,11,5,3,3,3,17,2,3,13,3,2,21,2,15,2,2,20,3,3,3,5,5,4,2,3,3,17,8,1,1,6,2,6,3,18,18,18,3,2,2,14,9,9,9,7,5,9,9,5,21,5,21,21,15,5,18,8,18,18,9,12,18,18,18,9,18,9,18,15,2,18,18,21,5,9,15,5,9,9,9,21,12,8,17,5,9,9,15,5,3,5,21,21,21,21,12,21,22,21,5,21,12,18,12,12,8,18,12,21,15,8,23,23,18,18,3,23,18,18,3,18,14,18,18,18,18,18,18,12,18,12,18,18,18,18,18,12,12,15,18,12,18,18,23,11,3,18,18,23,5,20,18,5,12,3,2,2,5,22,15,22,13,5,13,17,3,21,23,18,9,18,8,7,18,12,14,12,9,12,9,18,5,18,18,12,12,8,9,8,5,8,8,12,12,12,8,18,18,9,8,8,9,20,9,9,5,5,21,22,21,9,21,21,22,21,22,12,22,12,9,9,21,7,7,18,23,23,11,18,5,7,7,7,8,11,21,21,11,15,11,5,15,3,2,13,21,21,2,18,2,21,21,21,21,21,3,2,17,3,21,9,21,21,9,21,13,21,13,3,9,13,3,9,15,9,15,2,9,5,3,11,2,7,7,3,11,17,3,2,3,11,7,7,17,17,3,17,17,17,8,3,17,11,3,3,3,11,2,11,2,2,2,17,3,13,5,20,20,17,12,20,2,3,13,2,2,2,2,2,3,3,3,3,2,3,20,2,3,3,15,8,8,3,3,9,5,3,3,3,2,3,3,3,13,13,17,2,22,3,2,5,2,3,3,3,3,3,3,5,3,3,3,2,2,3,21,5,3,5,5,3,10,12,5,3,3,5,3,5,2,2,17,21,2,5,8,3,4,3,3,10,3,3,3,2,11,13,13,21,10,12,15,21,8,8,2],area:[19621,18898,19250,11883,11437,11074,10983,10817,10480,9636,8235,8304,6675,6375,5530,5539,5301,5003,4919,4821,4507,4610,4699,4363,4282,4135,4226,4144,4207,3981,4194,4077,4019,3997,4142,3764,4136,3594,3412,3465,3408,3657,3582,3504,3420,3308,3245,3152,3086,3060,3064,3e3,2932,2952,2987,2781,2717,2680,2633,2631,2591,2725,2616,2588,2749,2558,2545,2484,2487,2483,2442,2537,2455,2393,2335,2433,2352,2286,2368,2344,2475,2233,2286,2274,2207,2200,2163,2273,2127,2227,2100,2049,2050,2182,2201,2180,2170,2028,2062,1939,2008,1944,1990,1848,2003,1841,1883,1819,1877,1776,1982,1873,1792,1752,1784,1730,1705,1743,1698,1723,1776,1703,1649,1766,1849,1638,1673,1679,1657,1585,1616,1606,1637,1660,1555,1581,1576,1597,1529,1601,1510,1529,1582,1525,1528,1563,1647,1452,1476,1446,1431,1539,1410,1427,1454,1543,1481,1469,1425,1405,1398,1390,1412,1405,1394,1370,1378,1568,1375,1400,1289,1322,1333,1380,1305,1374,1289,1314,1231,1239,1201,1265,1213,1192,1198,1186,1205,1303,1211,1204,1181,1202,1154,1177,1134,1149,1161,1189,1134,1143,1132,1083,1071,1077,1107,1074,1067,1091,1048,1070,1236,1045,1057,1039,1075,1028,1049,1013,1028,1155,1010,993,1013,1068,1036,1010,964,994,965,986,1026,1053,995,924,941,970,939,958,972,918,962,925,998,962,925,967,937,948,898,902,891,923,900,890,873,930,821,833,826,877,848,837,877,847,852,808,853,805,817,806,823,857,868,833,818,818,796,782,848,786,811,785,861,766,785,786,761,804,752,754,789,782,758,750,752,735,719,742,757,809,696,773,694,743,798,717,670,704,712,695,671,703,722,727,697,726,671,670,672,646,681,678,638,663,632,716,669,646,643,663,685,641,662,644,614,671,615,595,615,656,602,607,574,600,584,594,657,582,576,587,671,599,552,620,575,618,571,582,637,540,584,603,568,567,588,541,543,540,526,549,524,612,584,583,566,554,535,511,531,556,542,507,541,501,515,517,513,501,504,504,500,556,509,495,498,498,497,483,473,512,478,511,500,474,648,483,465,463,483,490,472,518,473,469,438,462,491,461,439,470,455,460,462,452,476,455,436,455,451,443,500,459,456,552,470,430,396,424,418,470,471,421,403,422,404,397,460,425,437,394,404,425,393,397,433,396,390,402,415,406,409,383,392,390,387,441,392,380,368,402,371,380,379,378,366,367,382,392,425,381,357,358,363,355,353,390,374,357,354,344,347,345,339,343,336,343,347,344,349,379,331,331,332,336,343,329,327,343,331,325,321,348,380,337,340,342,394,328,344,312,315,332,309,313,310,306,311,305,304,345,288,294,318,322,315,286,325,333,302,280,280,281,283,274,282,286,265,270,273,294,322,271,275,256,299,257,269,248,277,253,246,273,269,266,265,264,244,253,257,273,245,264,283,256,250,250,243,248,257,240,256,260,228,237,234,244,220,226,225,218,247,220,230,223,211,235,239,260,222,217,220,218,250,214,227,219,223,211,209,221,201,258,194,200,219,248,196,196,209,198,195,199,198,185,194,226,215,190,173,183,200,178,178,198,216,208,181,206,197,173,186,167,162,211,165,171,170,153,229,174,187,156,206,172,172,174,163,188,150,159,155,155,154,158,146,157,143,143,147,138,144,145,178,152,133,140,135,144,134,146,156,135,167,130,176,133,145,130,124,150,129,125,148,123,125,151,132,120,118,119,118,137,116,119,112,114,126,115,129,107,121,120,111,165,110,107,115,109,137,131,139,102,116,116,127,101,127,101,102,117,114,92,124,111,96,95,127,108,93,109,89,81,100,96,79,87,85,80,95,81,78,85,91,101,95,88,84,112,74,79,85,75,81,79,76,80,78,92,84,70,99,84,79,106,68,75,75,74,73,69,67,68,92,73,66,60,73,60,64,61,62,68,62,59,66,67,63,58,63,60,77,62,63,57,68,64,67,61,61,64,66,58,57,56,107,65,60,56,50,55,62,51,54,72,55,65,45,42,47,69,50,42,48,43,54,46,94,52,49,48,41,52,50,55,49,62,50,62,44,40,41,37,45,54,51,44,45,42,43,34,39,39,29,33,34,41,42,36,52,46,37,45,39,55,29,35,38,37,31,35,44,29,38,25,43,35,50,41,35,31,38,34,34,29,35,27,26,30,28,33,30,31,24,30,28,25,42,24,31,25,31,31,22,23,47,27,35,27,31,31,23,31,22,16,21,21,18,25,21,20,19,25,31,33,29,19,27,23,21,20,23,26,22,20,22,19,15,26,17,14,21,26,20,14,18,26,13,15,12,23,17,12,15,21,19,22,27,20,16,16,17,20,23,20,14,16,16,14,21,21,19,18,22,32,17,17,16,25,22,15,16,22,14,11,16,9,12,8,22,18,11,11,8,6,11,13,14,8,14,14,17,11,20,22,13,10,13,13,15,18,10,12,11,9,11,7,8,8,11,7,12,6,13,13,14,8,8,5,12,15,11,7,9,10,6,22,10,15,13,13,10,12,8,15,7,9,10,4,5,3,3,4,2,8,6,10,9,4,5,5,4,4,7,2,12,3,4,4,5,2,5,8,5,7,2,3,7,3,6,5,4,2,17,3,7,5,6,1,3,3,5,8,7,5,3,3,4,3,4,5,3,6,3,6,8,6,1,3,4,13,10,7,1,6,7,3,7,9,6,10,3,15,4,1,5,9,6,6,7,13,7,3,4,7,2,1,0,0,1,0,2,0,1,1,1,8,0,0,0,0,0,2,0,0,0,0,0,1,3,3,1,2,4,0,1,3,0,1,5,3,3,0,4,0,1,0,24,3,3,2,0,0,0,0,0,0,1,3,1,1,1,0,1,1,0,3,0,5,1,1,1,4,0,0,2,0,0,0,2,3,0,8,0,4,1,2,3,0,4,0,4,0,0,0,2,5,0,0,0,3,0,1,1,0,2,3,0,2,0,3,0,2,0,3,2,0,3,2,0,6,5,0,1,1,3,1,2,2,0,0,5,5,9,3,1,1,1,1,0,1,0,1,1,3,0,0,0,2,6,0,2,6,2,2,0,1,0,8,1,4,2,1,3,0,5,0,0,0,1,9,1,5,0,5,3,0,0,0,4,5,0,0,0,0,3,0,2,0,2,4,1,2,0,2,2,0,4,1,0,0,0,1,2,2,0,2,3,2,0,1,7,3,2,2,2,0,3,8,1,8,6,1,6,3,6,4,2,2,1,3,2,3,3,2,5,3,1,2,0,2,1,2,0,2,0,5,1,0,2,2,0,3,0,7,2,2,5,2,4,3,0,4,0,2,5,10,10,2,0,0,2,0,0,0,2,3,2,1,0,0,5,6,2,1,1,5,3,7,3,0,2,0,10,1,1,2,3,0,8,6,0,9,3,4,8,2,5,2,2,1,1,1,0,1,2,2,2,3,4,4,3,6,13,3,2,3,1,0,2,3,5,2,0,0,0,6,4,10,5,3,3,3,1,2,1,3,7,2,3,5,9,10,0,1,2,1,0,4,2,3,0,1,2,4,2,1,7,2,3,0,1,0,1,1,2,0,0,2,0,0,3,7,2,0,0,0,0,3,0,1,1,2,0],n:2463,pal:[[1,"#ffd846"],[2,"#e8d4d8"],[3,"#d6b9bf"],[4,"#ff964e"],[5,"#fb92af"],[6,"#d4ac0b"],[7,"#ff6b81"],[8,"#b4989f"],[9,"#f97490"],[10,"#ee702a"],[11,"#ef546d"],[12,"#92777e"],[13,"#d24754"],[14,"#d63c5a"],[15,"#c74967"],[16,"#bc4600"],[17,"#b93041"],[18,"#71575e"],[20,"#9c0b2c"],[21,"#851e2c"],[22,"#630014"],[23,"#282828"]],box:[.04684855253041583,.11010338258771368,.9531514770348599,.8495113012264843]},warrooq:{w:1400,h:1536,nn:1213,num:[1,22,22,22,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,12,1,19,1,1,1,1,1,1,1,1,1,1,1,6,7,8,1,2,1,1,1,8,1,2,7,14,1,2,1,1,1,6,2,1,6,2,17,2,2,8,1,6,1,1,3,1,1,6,2,1,1,6,2,1,11,1,1,6,1,1,12,1,1,1,20,8,1,12,1,8,6,6,1,1,1,1,1,1,1,1,1,3,19,2,6,2,2,1,1,2,22,6,1,19,1,15,1,4,11,2,19,6,1,1,19,1,1,23,8,5,3,1,2,6,1,1,7,12,1,19,5,1,6,1,1,1,1,1,1,4,1,1,13,6,19,22,4,13,2,1,19,4,1,18,14,18,16,1,16,11,1,6,8,12,1,1,6,1,1,14,1,1,1,22,18,6,1,1,10,2,2,1,1,2,1,1,8,7,1,1,1,6,1,1,3,1,1,5,1,6,2,10,1,20,15,1,1,1,5,10,2,1,3,1,19,7,13,1,2,1,8,1,3,1,6,6,22,1,6,16,16,17,1,1,19,1,1,1,17,1,2,1,1,2,2,1,6,1,3,2,15,7,1,1,19,8,6,1,1,6,11,8,6,1,12,1,2,1,23,2,19,15,1,1,17,1,15,1,1,18,1,7,2,1,1,1,3,6,8,1,12,6,2,11,1,1,6,2,20,1,8,7,19,1,2,1,1,8,1,2,1,2,7,1,2,9,3,1,4,1,22,12,13,1,16,19,2,19,3,7,1,1,1,2,1,1,1,1,1,15,2,2,5,1,20,10,13,7,2,6,2,1,1,8,1,18,1,1,19,6,3,1,6,3,1,1,1,1,2,2,6,1,3,1,18,1,3,6,19,11,1,6,1,1,1,1,1,15,1,6,4,11,10,3,1,2,2,1,16,6,1,17,1,5,22,19,1,1,6,6,15,17,3,15,6,8,15,1,18,19,2,15,1,3,2,1,3,1,15,1,15,2,1,1,2,17,8,15,6,8,18,2,1,19,6,15,1,22,2,1,1,1,1,3,2,1,1,8,18,1,1,1,1,2,3,6,9,8,1,1,1,1,1,4,6,2,18,8,22,22,2,15,1,8,19,19,1,2,2,14,22,6,1,15,1,6,18,2,1,18,2,15,6,1,19,18,19,12,8,17,5,8,6,18,17,3,6,5,3,15,10,23,8,2,15,15,8,8,23,1,1,2,15,8,15,16,5,15,6,2,15,15,18,2,11,8,18,15,20,6,8,15,14,8,3,15,8,15,14,22,8,10,15,17,5,16,7,19,5,10,6,18,19,15,15,11,15,18,15,3,3,10,15,22,15,10,15,3,10,18,18,22,15,22,3,11,18,18,22,8,1,6,3,3,1,18,15,18,6,1,15,7,3,20,18,3,8,23,3,18,6,1,18,11,11,15,8,8,6,15,3,3,2,21,3,15,3,10,21,4,18,5,22,15,5,2,18,1,1,19,3,10,2,2,18,18,15,18,2,4,22,8,18,18,18,6,8,1,18,18,15,6,6,2,19,1,15,18,15,6,10,8,15,10,18,1,8,3,23,14,7,5,14,15,18,18,3,15,3,18,18,12,18,23,10,2,5,2,1,14,8,8,18,18,15,18,18,18,18,3,3,15,23,23,16,2,18,2,22,22,15,18,8,8,15,15,18,18,15,15,15,10,21,2,8,6,2,2,2,5,5,3,15,15,15,15,10,21,8,15,21,18,15,6,21,18,8,15,3,3,3,3,6,3,1,3,3,3,8,8,21,2,5,5,5,1,6,1,21,18,15,18,18,8,21,18,18,18,18,18,1,1,18,15,18,22,16,3,18,18,18,1,3,6,14,6,10,3,5,4,2,2,2,2,23,18,18,21,15,15,15,1,1,18,18,14,8,21,18,8,18,8,15,15,8,15,3,10,18,18,18,18,21,21,18,18,15,18,18,15,21,15,18,8,3,15,18,15,15,1,18,21,21,21,21,8,18,18,1,3,3,6,12,12,1,3,23,1,16,1,16,10,5,2,2,2,5,2,2,2,5,2,2,11,5,4,15,15,1,3,1,3,3,6,8,8,8,18,18,18,18,18,18,18,18,18,18,18,21,18,18,15,21,18,18,15,21,21,15,18,18,18,21,15,18,21,18,18,18,3,15,18,18,8,21,8,1,1,8,15,14,21,18,14,10,15,21,18,18,18,15,8,15,5,18,18,18,15,15,8,15,15,15,18,18,18,21,18,3,15,18,21,18,18,18,18,18,18,21,18,18,21,18,18,18,21,18,18,18,18,6,18,18,18,18,21,15,18,18,15,18,15,21,21,15,18,15,21,21,8,18,21,22,21,21,15,15,15,1,3,3,18,18,18,15,18,3,1,18,18,18,18,18,18,22,15,22,18,1,8,15,15,18,1,15,18,1,3,6,15,18,6,21,16,21,18,6,18,18,6,6,3,6,21,21,21,21,22,18,21,18,6,21,15,5,2,15,18,1,17,18,18,18,18,1,3,3,3,3,1,12,3,1,3,3,1,3,6,3,3,3,3,10,20,6,6,6,19,14,1,3,6,3,6,1,1,10,3,3,19,5,1,1,3,18,10,8,23,6,6,2,2,8,5,19,18,18,15,18,5,5,21,21,22,18,5,2,4,2,4,9,4,4,8,7,2,5,2,2,2,2,13,2,5,2,2,2,2,2,4,2,7,7,7,7,7,7,7,4,9,9],area:[155831,12496,11310,10454,10232,8634,8467,8379,8930,7991,7209,6677,7039,6488,6427,6138,5801,5430,5294,5291,4922,4975,4785,4726,4650,4296,4186,4125,3929,3838,3880,3806,3663,3763,3744,4052,3655,3777,3547,3440,3248,3219,3067,3092,3133,3141,3028,2903,2831,2836,2807,2830,2726,2787,2919,2646,2561,2580,2559,2467,2428,2389,2472,2539,2188,2211,2229,2140,2163,2092,2179,2196,2032,2064,2270,1997,2194,2008,2028,2082,1975,2038,1905,1889,1859,1811,1968,2049,1850,1854,1807,1769,1796,1715,1697,1699,1638,1725,1680,1736,1670,1649,1577,1644,1582,1607,1679,1531,1553,1589,1485,1568,1583,1559,1481,1491,1474,1457,1504,1466,1456,1486,1367,1432,1407,1434,1419,1368,1419,1373,1449,1345,1449,1301,1339,1324,1276,1277,1317,1299,1277,1353,1289,1248,1272,1221,1185,1204,1158,1153,1191,1159,1164,1194,1145,1209,1161,1224,1106,1158,1204,1119,1143,1183,1140,1171,1192,1286,1092,1132,1084,1064,1074,1096,1187,1080,1104,1121,1087,1051,1081,1125,1097,1076,1051,1303,1112,1082,1041,1004,1086,1115,1028,1037,976,990,1040,1050,1065,1094,1016,952,1055,986,951,984,992,1004,919,957,934,922,934,956,920,953,971,892,911,886,975,914,909,898,927,870,914,907,923,855,881,903,932,923,867,801,875,818,969,845,856,808,810,845,810,775,784,820,768,769,772,785,835,774,763,797,820,749,735,743,770,743,805,725,756,768,749,725,784,699,726,725,754,714,706,708,742,683,729,703,789,680,689,691,693,660,715,669,804,673,644,638,641,645,647,652,616,614,643,637,597,593,683,679,631,610,578,604,607,608,586,595,585,609,609,587,591,582,593,589,564,579,550,641,623,551,544,562,574,519,542,532,588,542,533,566,514,528,572,527,520,500,499,484,503,514,498,486,507,490,497,535,498,481,479,490,504,504,485,469,491,513,487,477,459,480,446,527,463,499,460,454,463,427,429,411,440,439,419,434,461,430,405,424,407,405,475,407,401,389,392,436,378,392,371,392,366,362,371,367,402,362,374,396,373,369,362,352,420,354,361,343,348,355,324,361,365,351,340,350,355,361,376,346,325,370,324,346,379,310,336,341,313,368,309,310,309,306,306,295,323,291,312,305,308,296,303,290,301,313,302,320,302,281,280,288,277,288,286,337,273,257,265,261,240,262,268,256,251,271,299,248,233,232,268,239,239,309,245,241,223,244,213,223,216,230,227,238,223,237,231,214,237,220,217,220,228,256,234,215,233,206,367,247,199,211,205,210,225,238,194,230,200,201,193,195,216,214,202,194,185,199,212,206,200,223,181,179,173,191,172,229,182,176,170,173,169,162,153,157,159,144,171,182,158,150,157,149,142,154,157,140,153,145,156,130,135,138,150,163,134,156,173,128,122,127,123,143,128,135,113,143,113,111,108,122,110,96,98,115,104,105,105,108,106,112,86,97,127,117,94,99,90,84,85,79,89,81,73,91,75,74,70,71,96,67,68,63,66,66,69,61,56,62,62,67,56,81,73,65,64,57,47,51,50,70,55,50,52,44,52,49,40,63,39,51,52,48,50,39,45,41,43,49,38,47,46,52,43,61,32,37,63,43,50,47,37,49,60,36,41,41,50,45,39,30,38,31,39,50,35,30,24,31,33,27,31,35,40,25,31,34,40,27,29,34,28,20,30,29,46,29,29,19,26,28,26,32,19,22,25,21,18,29,21,26,17,20,19,24,22,20,19,35,22,22,19,20,16,16,20,14,21,13,26,18,13,21,20,22,41,16,11,18,14,15,16,23,25,14,12,13,19,25,14,10,16,22,12,15,26,22,15,19,11,16,13,16,16,18,14,13,15,13,15,14,11,17,13,13,8,15,10,14,13,9,7,16,11,15,13,7,9,15,9,8,18,15,22,18,9,13,11,9,8,9,7,7,6,9,8,11,8,8,9,10,7,26,8,10,10,14,6,6,10,12,11,1,11,5,9,7,8,7,10,8,14,7,11,10,7,7,8,7,9,7,5,5,5,3,6,5,5,5,4,4,6,8,4,10,9,11,11,4,8,6,5,3,3,2,12,3,4,7,2,4,4,1,5,2,8,11,2,7,3,6,7,7,8,9,7,4,4,4,7,9,5,7,6,4,8,4,1,9,3,3,9,6,0,7,5,2,3,9,6,7,4,4,3,10,7,6,4,12,9,3,2,2,5,10,0,0,0,0,3,0,0,0,0,0,0,3,0,1,3,0,3,0,0,7,0,3,5,1,0,2,0,1,0,0,4,5,0,0,1,3,3,0,0,4,0,0,4,5,4,6,0,0,0,0,4,0,0,0,2,1,1,0,0,2,1,3,2,0,2,9,2,2,2,1,4,0,2,2,1,1,1,9,0,6,1,3,1,1,0,5,1,0,0,0,0,3,0,0,2,2,2,0,0,0,0,0,1,0,12,0,1,0,3,0,0,2,0,1,1,0,1,0,6,1,0,6,0,1,1,3,1,1,7,13,0,2,2,1,4,4,4,1,0,0,3,4,1,2,4,2,0,4,0,3,1,1,8,1,6,0,5,0,0,1,0,0,1,0,0,7,2,3,0,3,4,0,0,0,0,1,1,2,0,2,1,1,2,1,2,3,6,1,9,1,1,0,5,6,1,1,0,0,0,0,1,0,0,0,0,5,2,0,0,0,3,0,0,0,0,0,11,0,5,1,0,5,5,10,0,0,0,2,0,0,0,0,0,0,0,7,1,0,0,0,1,0,6,2,0,1,0,0,0,4,6,0,3,0,0,0,3,2,0,0,1,1,0,0,0,0,0,5,0,4,0,3,6,1,0,0,1,0,4,2,10,0,3,0,1,0,0,0,0,0,1,0,0],n:2179,pal:[[1,"#c5e4fc"],[2,"#d5c4cc"],[3,"#abc9e1"],[4,"#ffa547"],[5,"#b7a6ad"],[6,"#88a6e1"],[7,"#f38a2b"],[8,"#9893ab"],[9,"#da7511"],[10,"#6f8fc8"],[11,"#c86046"],[12,"#437bd6"],[13,"#c16100"],[14,"#5a7bb1"],[15,"#746f85"],[16,"#4160b8"],[17,"#9c3a24"],[18,"#524d5a"],[19,"#1c4699"],[20,"#003383"],[21,"#2f2b37"],[22,"#282828"],[23,"#00236e"]],box:[.04684855253041583,.12821739228351947,.9531514770348599,.8313972915306787]},tiles:{s:.05107,t:[[.26122,.38307,"#2e1144"],[.3133,.38307,"#fff7e9"],[.36538,.38307,"#ff9e37"],[.41745,.38307,"#7951aa"],[.46953,.38307,"#2e1144"],[.52161,.38307,"#fff7e9"],[.57368,.38307,"#ff9e37"],[.26122,.41989,"#7951aa"],[.3133,.41989,"#7951aa"],[.36538,.41989,"#7951aa"],[.41745,.41989,"#7951aa"],[.46953,.41989,"#7951aa"],[.52161,.41989,"#7951aa"],[.26122,.45671,"#2e1144"],[.3133,.45671,"#7951aa"],[.36538,.45671,"#ff9e37"],[.41745,.45671,"#fff7e9"],[.46953,.45671,"#2e1144"],[.52161,.45671,"#7951aa"],[.26122,.49353,"#7951aa"],[.3133,.49353,"#fff7e9"],[.36538,.49353,"#7951aa"],[.41745,.49353,"#fff7e9"],[.46953,.49353,"#7951aa"],[.52161,.49353,"#fff7e9"],[.72991,.49353,"#fff7e9"],[.26122,.53035,"#2e1144"],[.3133,.53035,"#fff7e9"],[.36538,.53035,"#ff9e37"],[.41745,.53035,"#7951aa"],[.46953,.53035,"#2e1144"],[.52161,.53035,"#fff7e9"],[.67784,.53035,"#2e1144"],[.26122,.56718,"#7951aa"],[.3133,.56718,"#7951aa"],[.36538,.56718,"#7951aa"],[.41745,.56718,"#7951aa"],[.46953,.56718,"#7951aa"],[.52161,.56718,"#7951aa"],[.62576,.56718,"#7951aa"],[.26122,.604,"#2e1144"],[.3133,.604,"#7951aa"],[.36538,.604,"#ff9e37"],[.41745,.604,"#fff7e9"],[.46953,.604,"#2e1144"],[.52161,.604,"#7951aa"],[.57368,.604,"#ff9e37"],[.26122,.64082,"#7951aa"],[.3133,.64082,"#fff7e9"],[.36538,.64082,"#7951aa"],[.41745,.64082,"#fff7e9"],[.46953,.64082,"#7951aa"],[.52161,.64082,"#fff7e9"],[.26122,.67764,"#2e1144"],[.3133,.67764,"#fff7e9"],[.36538,.67764,"#ff9e37"],[.41745,.67764,"#7951aa"],[.46953,.67764,"#2e1144"],[.52161,.67764,"#fff7e9"],[.26122,.71446,"#7951aa"],[.3133,.71446,"#7951aa"],[.36538,.71446,"#7951aa"],[.41745,.71446,"#7951aa"],[.46953,.71446,"#7951aa"],[.52161,.71446,"#7951aa"],[.72991,.71446,"#7951aa"]]}};var Sd=null,_a=i=>Sd&&Sd[i]||i,rr=1024,ar=1448,Bc=new Map,U1=i=>(Bc.has(i)||Bc.set(i,new Promise((t,e)=>{let n=new Image;n.onload=()=>t(n),n.onerror=e,n.src=_a("a/"+i)})),Bc.get(i)),tn=[{type:"info",id:"practice",ar:"\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u0644\u0639\u0628",pic:"practice.jpg"},...yd.map((i,t)=>({type:"art",no:t+1,num:!0,...i,...Oc[i.id]})),{type:"end",id:"end",ar:"\u0627\u0644\u0646\u0647\u0627\u064A\u0629",pic:"back.jpg"}],or=Oc.tiles,sr;function bd(i,t="#fffdf8"){if(i.fillStyle=t,i.fillRect(0,0,rr,ar),!sr){sr=document.createElement("canvas"),sr.width=sr.height=256;let e=sr.getContext("2d"),n=e.createImageData(256,256);for(let s=0;s<n.data.length;s+=4){let r=Math.random()*120;n.data[s]=r+80,n.data[s+1]=r+70,n.data[s+2]=r+60,n.data[s+3]=9}e.putImageData(n,0,0)}i.fillStyle=i.createPattern(sr,"repeat"),i.fillRect(0,0,rr,ar)}var zc=i=>{let t=new gi(i);return t.colorSpace=we,t.anisotropy=8,t},kc=i=>{let t=document.createElement("canvas");return t.width=rr,t.height=ar,i(t.getContext("2d")),t};async function Ed(i){let t=tn[i],e=await U1(t.pic||`page_${t.id}.jpg`);return zc(kc(n=>{t.type==="end"||(bd(n),n.globalCompositeOperation="multiply"),n.drawImage(e,0,0,rr,ar)}))}var wd=()=>zc(kc(i=>bd(i)));async function Td(){let i=await U1("cover.jpg");return zc(kc(t=>t.drawImage(i,0,0,rr,ar)))}var Vc=(i={})=>new He({roughness:.6,...i});function Ad(i=.5,t=2,e=.9){let n=new Mn(t,i,14,2),s=n.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r);s.setXYZ(r,a,e*.25*(1-(a/t*2)**2)+.05,s.getY(r)*(1-.6*(a/t*2)**2))}return n.computeVertexNormals(),n}function Rd(){let i=new ks;for(let e=0;e<10;e++){let n=e%2?.48:1,s=e*Math.PI/5;i[e?"lineTo":"moveTo"](Math.sin(s)*n,Math.cos(s)*n)}let t=new Zr(i,{depth:.3,bevelEnabled:!0,bevelSize:.1,bevelThickness:.1,bevelSegments:2});return t.rotateX(-Math.PI/2),t.translate(0,-.15,0),t}var yg={leaf:[()=>Ad(1,2,.8),["#d9772f","#b5502a","#e0a63c","#8f6a2a"],26,.026,{side:2}],rain:[()=>{let i=new Hs(1,20,14);return i.scale(1,.62,1),i},["#7fc4ee","#a8dbf7","#5aa9de"],34,.017,{roughness:.08,transparent:!0,opacity:.8}],petal:[()=>Ad(1.1,1.8,1.3),["#e86a86","#f29bb0","#c9435f","#fbd0da"],28,.028,{side:2}],confetti:[()=>new pn(2,.12,1),["#00d1fe","#fd8f1d","#e84778","#7fc154","#fcdbb4","#7b3fa0"],46,.017,{}],gem:[Rd,["#faa7cf","#fdcf51","#4dcec5","#df2f5f","#6191b9"],26,.024,{roughness:.35}],bubble:[()=>new Hs(1,28,20),["#cfeeff","#e6f8ff","#ffd9f0"],22,.03,{roughness:.03,metalness:0,transparent:!0,opacity:.45,envMapIntensity:2.4,depthWrite:!1}]},lr=new qe,cr=new cn,os=new N,hr=new N,D1=new ae,Me=(i,t)=>i+Math.random()*(t-i),F1=class{constructor(t){this.scene=t,this.live=[]}clear(){for(let t of this.live)t.dying=t.dying||.001}spawn(t,e,n,s){let[r,a,o,l,c]=yg[t],u=s||o,d=new Cn(r(),Vc(c),u);d.castShadow=t!=="bubble",d.receiveShadow=!0,d.frustumCulled=!1;let h=[],f=new Dt,g=["leaf","petal","confetti"].includes(t),M=t==="bubble";for(let m=0;m<u;m++){let p,S,A=Math.random();A<.42?(p=Me(-.97,-.03),S=Me(.55,.68)):A<.62?(p=Me(-1.34,-1.08),S=Me(-.6,.7)):A<.8?(p=Me(.05,.95),S=Me(.5,.68)):(p=Me(.05,.95),S=Me(-.66,-.5)),M&&(p=Me(-1.05,.1),S=Me(.1,.66));let y=l*Me(.7,1.3);f.set(a[Math.random()*a.length|0]),d.setColorAt(m,f),h.push({x:p,z:S,y:n&&!M?-1:M?-.2:Me(1.1,2.4),vy:0,delay:Me(.2,.9),s:y,g:e(p,S)+y*(t==="confetti"?.06:g?.1:t==="gem"?.2:.55),rx:Me(0,6),ry:Me(0,6),rz:Me(0,6),w:Me(-4.5,4.5),fx:g?Me(-.2,.2):0,land:0,flat:g,float:M,ph:Me(0,6),sp:Me(.07,.16)})}this.scene.add(d),this.live.push({m:d,it:h,t:0,dying:0})}update(t){for(let e of this.live){e.t+=t,e.dying&&(e.dying+=t*3.2);let n=e.dying?Math.max(0,1-e.dying):1;e.it.forEach((s,r)=>{let a=1;if(s.float){let o=(e.t*s.sp+s.ph)%1.15;s.y=o,a=Math.min(1,o*6,(1.15-o)*6)*Math.min(1,e.t),os.set(s.x+Math.sin(e.t*.9+s.ph)*.03,.05+s.y,s.z)}else e.t>s.delay&&s.land<1&&(s.vy-=(s.flat?1.6:6)*t,s.flat&&(s.vy=Math.max(s.vy,-.9)),s.y+=s.vy*t,s.rx+=s.w*t,s.rz+=s.w*.7*t,s.y<=s.g&&(s.y=s.g,s.vy<-.5&&!s.flat?(s.vy*=-.3,s.w*=.5):(s.land=1,s.rx=s.fx,s.rz=0))),os.set(s.x,s.y,s.z);cr.set(s.rx,s.ry,s.rz),lr.setFromEuler(cr),hr.setScalar(s.float||e.t>s.delay||s.land?s.s*n*a:0),D1.compose(os,lr,hr),e.m.setMatrixAt(r,D1)}),e.m.instanceMatrix.needsUpdate=!0}this.live=this.live.filter(e=>e.dying>=1?(this.scene.remove(e.m),e.m.geometry.dispose(),e.m.material.dispose(),e.m.dispose(),!1):!0)}};function Hc(){let i=[[0,0],[.066,0],[.07,.006],[.07,.05],[.074,.05],[.074,.1],[.074,.101],[.074,.73],[.074,.731],[.074,.78],[.07,.78],[.07,.84],[.06,.85],[.028,.975],[.02,.99],[0,1]].map(s=>new lt(s[0],s[1])),t=new Jr(i,28),e=t.attributes.position,n=new Float32Array(e.count*3);for(let s=0;s<e.count;s++){let r=e.getY(s),a=Math.hypot(e.getX(s),e.getZ(s)),o=1;a>.0725&&(o=.82,(r<.1005||r>.7305)&&(o=.2)),n.set([o,o,o],s*3)}return t.setAttribute("color",new Ie(n,3)),t.rotateX(Math.PI/2),t.translate(0,0,-.5),t.computeVertexNormals(),t}function Cd(i){let t=["#e5383b","#ffb703","#2ec4b6","#7b3fa0","#2f7fd8","#8ac926","#ff8fb8"],e=new Cn(Hc(),Vc({vertexColors:!0,roughness:.55}),t.length),n=new Dt;e.castShadow=e.receiveShadow=!0,[[1.3,.42,.5],[1.42,.5,.9],[1.3,-.45,-2.2],[-1.36,-.42,2.6],[-1.3,.6,-.4],[-1.45,.52,-.15],[.5,1.02,1.7]].forEach(([o,l,c],u)=>{cr.set(0,c,0),lr.setFromEuler(cr),os.set(o,.034,l),hr.setScalar(.46),e.setMatrixAt(u,D1.compose(os,lr,hr)),e.setColorAt(u,n.set(t[u]))}),i.add(e);let r=new Cn(Rd(),Vc({roughness:.5}),16);r.castShadow=r.receiveShadow=!0;let a=["#ffd166","#fff3e0","#7b3fa0","#ff8fb8"];for(let o=0;o<16;o++){let l=[[1.25,.72],[-1.28,-.1],[1.35,-.02],[-1.3,.92]][o%4];cr.set(0,Me(0,6),0),lr.setFromEuler(cr),hr.setScalar(Me(.018,.03)),os.set(l[0]+Me(-.16,.16),.006,l[1]+Me(-.14,.14)),r.setMatrixAt(o,D1.compose(os,lr,hr)),r.setColorAt(o,n.set(a[o%4]))}i.add(r)}var Mg=new Mn(1,1,150,190),Sg=new Mn(1,1),bg=new mi({visible:!1,side:2}),Eg=(()=>{let t=[],e=[],n=[],s=[];for(let a=0;a<5;a++){let o=-a/4-.02;for(let[c,u]of[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]])t.push(c,u,o),e.push(c+.5,u+.5),n.push(0,0,1);let l=a*4;s.push(l,l+1,l+2,l,l+2,l+3)}let r=new Ue;return r.setAttribute("position",new me(t,3)),r.setAttribute("uv",new me(e,2)),r.setAttribute("normal",new me(n,3)),r.setIndex(s),r})(),O1=(i,t={})=>{let e=new Ye(i);return Object.assign(e,{generateMipmaps:!0,anisotropy:8,...t}),e.needsUpdate=!0,e},Gc=.12,Wi=64;var B1=class{constructor(t){this.s=t,this.group=new ln,this.alive=!0,this.fresh=new Map,this.done=new Uint8Array(t.nn+1),this.colOf=Object.fromEntries(t.pal),this.byNum=new Map,t.num.forEach((s,r)=>{this.byNum.has(s)||this.byNum.set(s,[]),this.byNum.get(s).push(r+1)}),this.nums=t.pal.map(s=>s[0]).filter(s=>this.byNum.has(s)),this.areaN={},this.total=0,t.num.forEach((s,r)=>{this.areaN[s]=(this.areaN[s]||0)+t.area[r],this.total+=t.area[r]});let e=this.pal=new Uint8Array(Wi*Wi*4);for(let s=0;s<Wi*Wi;s++)e.set([255,255,255,s&&s<=t.nn?t.num[s-1]:0],s*4);this.tPal=new Di(e,Wi,Wi,mn,Ze),this.tPal.colorSpace=we,this.tPal.magFilter=this.tPal.minFilter=Te,this.tPal.needsUpdate=!0,this.gw=100,this.gh=Math.round(100*t.h/t.w),this.cov=new Uint8Array(this.gw*this.gh),this.cur=new Float32Array(this.gw*this.gh),this.tgt=new Float32Array(this.gw*this.gh),this.tCov=new Di(this.cov,this.gw,this.gh,$s,Ze),this.tCov.magFilter=this.tCov.minFilter=Ne,this.tCov.flipY=!1,this.tCov.needsUpdate=!0;let n=new Dt(t.tint);this.U={tPal:{value:this.tPal},tCov:{value:this.tCov},tId:{value:null},tA:{value:null},tN:{value:null},tS:{value:null},uRise:{value:0},uRv:{value:0},uSel:{value:0},uSelC:{value:new Dt},uT:{value:0},uTint:{value:n},uAmp:{value:0},uAsp:{value:t.w/t.h}},this.key="doo-friends:"+t.id,this.load()}async init(){let{id:t,w:e,h:n}=this.s,s=await Promise.all([`${t}_l.webp`,`${t}_id.webp`,`${t}_n.jpg`,`${t}_s.webp`].map(U1));this.ims=s;let r=this.U;r.tA.value=O1(s[0]),r.tId.value=O1(s[1],{generateMipmaps:!1,minFilter:Te,magFilter:Te}),r.tN.value=O1(s[2]),r.tS.value=O1(s[3],{colorSpace:we});let a=this.s.box;this.w=a[2]-a[0],this.h=this.w*n/e,r.uAmp.value=this.w*80/e,this.layers=[];for(let o=0;o<2;o++){let l=new He({side:2,roughness:.8,envMapIntensity:.9});l.alphaToCoverage=!0,l.defines={LAYER:o},l.onBeforeCompile=h=>{Object.assign(h.uniforms,r),h.vertexShader=`uniform sampler2D tN,tCov;uniform float uAmp,uRise,uRv;varying vec2 vU;varying vec3 vT,vB;
`+h.vertexShader.replace("#include <begin_vertex>",`vec3 transformed=vec3(position);vU=uv;float hh=texture2D(tN,uv).b*uAmp*uRise;
#if LAYER==0
float cv=texture2D(tCov,vec2(uv.x,1.-uv.y)).r;transformed.z+=hh*smoothstep(.05,.8,cv)*(1.-uRv)*1.1;
#else
transformed.z+=hh*(1.1+.5*uRv);
#endif
vT=normalize((modelViewMatrix*vec4(1.,0.,0.,0.)).xyz);vB=normalize((modelViewMatrix*vec4(0.,1.,0.,0.)).xyz);`),h.fragmentShader=`uniform sampler2D tA,tN,tId,tPal,tS,tCov;uniform vec3 uTint,uSelC;uniform float uRv,uSel,uT,uAsp,uRise;varying vec2 vU;varying vec3 vT,vB;float gP;float gI;
`+h.fragmentShader.replace("#include <map_fragment>",`vec4 ta=texture2D(tA,vU,-.5);vec2 q=texture2D(tId,vU).rg;int id=int(floor(q.r*255.+.5)+floor(q.g*255.+.5)*256.);vec4 A=texelFetch(tPal,ivec2(id%${Wi},id/${Wi}),0);
float num=A.a*255.;bool on=num>200.;vec3 paperC=vec3(.965,.95,.92);vec3 col=on?A.rgb:paperC;gP=on?1.:0.;
if(!on&&uSel>.5&&abs(num-uSel)<.5&&uRv<.01){float st=smoothstep(.35,.65,abs(fract((vU.x*uAsp+vU.y)*70.-uT*.55)-.5)*2.);col=mix(paperC,uSelC,.34+.3*st+.1*sin(uT*4.));}
float ink=mix(ta.r,1.,on?.45:.0);ink=1.-min(1.,(1.-ink)*1.25)*(on?.8:.72);float tx=on?0.:ta.b;float rr=length((vU-vec2(.5,.45))*vec2(uAsp,1.));float wv=smoothstep(0.,.12,uRv*1.35-rr);
#if LAYER==0
float al=texture2D(tA,vU,2.).g;col=mix(col,uTint,wv);ink=mix(ink,1.,wv);tx*=1.-wv;diffuseColor.rgb=col*mix(.05,1.,ink)*(1.-tx*.9);gP=max(gP*(1.-wv),0.);
#else
diffuseColor.a=clamp((ta.g-.5)/max(fwidth(ta.g),.02)+.5,0.,1.);if(diffuseColor.a<.05)discard;
vec3 so=texture2D(tS,vU).rgb;col=mix(col*mix(.05,1.,ink)*(1.-tx*.9),so,wv);diffuseColor.rgb=col;gP=max(gP,wv);
#endif
gI=0.;`).replace("#include <roughnessmap_fragment>","float roughnessFactor=mix(.88,.42,gP);").replace("#include <normal_fragment_maps>",`vec2 nx=(texture2D(tN,vU).rg*2.-1.)*uRise;
#if LAYER==0
nx*=smoothstep(.05,.8,texture2D(tCov,vec2(vU.x,1.-vU.y)).r)*(1.-uRv);
#endif
vec3 N0=normalize(cross(vT,vB));if(dot(N0,vViewPosition)<0.)N0=-N0;normal=normalize(vT*nx.x+vB*nx.y+N0*sqrt(max(.05,1.-dot(nx,nx))));`)},l.customProgramCacheKey=()=>"mys"+o;let c=new ne(Mg,l);c.receiveShadow=!0,c.frustumCulled=!1;let u=new ne(Eg,new He(o?{color:"#fff8ee",roughness:.95,side:2,alphaMap:r.tA.value,alphaTest:.5}:{color:"#fff8ee",roughness:.95,side:2}));u.castShadow=!0,u.frustumCulled=!1,u.scale.z=o?.022:.012;let d=new ln;d.add(c,u),d.scale.set(this.w,this.h,1),this.group.add(d),this.layers.push({g:d,face:c})}return this.hitMesh=new ne(Sg,bg),this.layers[0].g.add(this.hitMesh),this.grid(),this.solved&&(this.U.uRv.value=1),this.layers[1].g.visible=this.solved,this.recov(),this.cur.set(this.tgt),this.step(1),this}grid(){let{w:t,h:e}=this.s,n=document.createElement("canvas"),s=this.gw*4,r=this.gh*4;n.width=t,n.height=e;let a=n.getContext("2d",{willReadFrequently:!0});a.imageSmoothingEnabled=!1,a.drawImage(this.ims[1],0,0);let o=a.getImageData(0,0,t,e).data,l=this.ids=new Uint16Array(t*e);for(let u=0;u<t*e;u++)l[u]=o[u*4]+o[u*4+1]*256;let c=this.gid=new Uint16Array(this.gw*this.gh*4);for(let u=0;u<this.gh;u++)for(let d=0;d<this.gw;d++)for(let h=0;h<4;h++){let f=Math.min(t-1,(d+.25+.5*(h&1))/this.gw*t|0),g=Math.min(e-1,(u+.25+.5*(h>>1))/this.gh*e|0);c[(u*this.gw+d)*4+h]=l[g*t+f]}n.width=n.height=0}recov(){let t=this.gw*this.gh,e=new Float32Array(t),n=this.gw,s=this.gh,r=this.s.nn;for(let o=0;o<t;o++){let l=0;for(let c=0;c<4;c++){let u=this.gid[o*4+c];u&&u<=r&&this.done[u]&&l++}e[o]=Math.min(1,l/2.6)}let a=new Float32Array(t);for(let o=0;o<2;o++){for(let l=0;l<s;l++)for(let c=0;c<n;c++){let u=0,d=0;for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){let g=c+f,M=l+h;g>=0&&M>=0&&g<n&&M<s&&(u+=e[M*n+g],d++)}a[l*n+c]=u/d}e.set(a)}this.tgt.set(e),this.moving=!0}step(t){let e=this.U;if(e.uT.value+=t,this.fresh.size){for(let[n,s]of this.fresh){s.t+=t*4.2;let r=Math.min(1,s.t),a=n*4;for(let o=0;o<3;o++)this.pal[a+o]=255+(s.c[o]-255)*r;r===1&&this.fresh.delete(n)}this.tPal.needsUpdate=!0}if(this.moving){let n=0,s=1-Math.exp(-5*t);for(let r=0;r<this.cur.length;r++){let a=this.tgt[r]-this.cur[r];this.cur[r]+=a*s;let o=Math.abs(a);o>n&&(n=o),this.cov[r]=this.cur[r]*255}this.tCov.needsUpdate=!0,n<.004&&(this.moving=!1)}}place(t,e,n){this.U.uRise.value=Math.min(1,Math.max(0,t));let s=this.U.uRv.value,r=1/Math.tan(Math.max(.15,e));this.layers.forEach((a,o)=>{let l=o?Gc*s*Math.max(0,Math.min(1.1,t))+.003:.003;a.g.position.set(0,this.h/2-(o?l*r*.3*(1-n):0),l)}),this.layers[1].g.visible=s>.002}get solved(){return this.left().length===0}left(){return this.nums.filter(t=>this.byNum.get(t).some(e=>!this.done[e]))}doneArea(t){let e=0;for(let n of this.byNum.get(t))this.done[n]&&(e+=this.s.area[n-1]);return e}progress(){let t=0;for(let e=1;e<=this.s.nn;e++)this.done[e]&&(t+=this.s.area[e-1]);return t/this.total}paint(t,e){if(this.done[t])return!1;this.done[t]=1;let n=parseInt(this.colOf[this.s.num[t-1]].slice(1),16),s=[n>>16,n>>8&255,n&255];return this.pal[t*4+3]=255,e?this.pal.set(s,t*4):this.fresh.set(t,{t:0,c:s}),this.tPal.needsUpdate=!0,!0}brush(t,e,n){let{w:s,h:r,nn:a}=this.s,o=t.x*s,l=(1-t.y)*r,c=0,u=Math.max(1,e/14);for(let d=Math.max(0,l-e);d<Math.min(r,l+e);d+=u)for(let h=Math.max(0,o-e);h<Math.min(s,o+e);h+=u){if((h-o)**2+(d-l)**2>e*e)continue;let f=this.ids[(d|0)*s+(h|0)];f&&f<=a&&!this.done[f]&&this.s.num[f-1]===n&&this.paint(f)&&c++}if(c){if(this.doneArea(n)/this.areaN[n]>.9)for(let d of this.byNum.get(n))this.paint(d)&&c++;this.recov(),this.dirty=!0}return c}at(t){let{w:e,h:n,nn:s}=this.s,r=this.ids[Math.min(n-1,Math.max(0,(1-t.y)*n|0))*e+Math.min(e-1,Math.max(0,t.x*e|0))];return r&&r<=s?{id:r,num:this.s.num[r-1],done:!!this.done[r]}:null}load(){try{let t=localStorage.getItem(this.key);if(t){let e=atob(t);for(let n=1;n<=this.s.nn;n++)e.charCodeAt(n>>3)>>(n&7)&1&&this.paint(n,!0)}}catch{}}save(){if(!this.dirty)return;this.dirty=!1;let t=new Uint8Array((this.s.nn>>3)+1);for(let n=1;n<=this.s.nn;n++)this.done[n]&&(t[n>>3]|=1<<(n&7));let e="";for(let n of t)e+=String.fromCharCode(n);try{localStorage.setItem(this.key,btoa(e))}catch{}}wipe(){this.done.fill(0),this.fresh.clear();for(let t=1;t<=this.s.nn;t++)this.pal.set([255,255,255,this.s.num[t-1]],t*4);this.tPal.needsUpdate=!0,this.recov(),this.dirty=!0,this.save()}image(t){let{w:e,h:n,nn:s}=this.s,r=80,a=110,o=document.createElement("canvas");o.width=e+2*r,o.height=n+2*r+a;let l=o.getContext("2d");return l.fillStyle=this.s.tint,l.fillRect(0,0,o.width,o.height),l.globalCompositeOperation="multiply",l.drawImage(this.ims[3],r,r,e,n),l.globalCompositeOperation="source-over",l.fillStyle="#2d1045",l.font="600 64px Alexandria, sans-serif",l.direction="rtl",l.textAlign="right",l.fillText(t,o.width-r,n+r+110),l.direction="ltr",l.textAlign="left",l.font="600 44px Alexandria, sans-serif",l.fillText("DoO  @doo.moments",r,n+r+106),o}dispose(){this.alive=!1,this.tPal.dispose(),this.tCov.dispose();for(let t of["tA","tId","tN","tS"])this.U[t].value?.dispose();for(let t of this.layers)t.g.children.forEach(e=>e!==this.hitMesh&&e.material.dispose())}};var ie=i=>document.querySelector(i),Si=document.body;Si.classList.add("closed");ie("#home img").src=_a("a/logo.jpg");var ze=matchMedia("(prefers-reduced-motion:reduce)").matches,ds=tn.length,an=(i,t,e)=>Math.min(e,Math.max(t,i)),gn=(i,t,e)=>i+(t-i)*e,Kc=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,wg=i=>1-(1-i)**3,Tg=i=>1+1.9*(i-1)**3+.9*(i-1)**2,Aa=i=>{try{let t=localStorage.getItem("doo-friends:"+i.id);if(!t)return!1;let e=atob(t);for(let n=1;n<=i.nn;n++)if(!(e.charCodeAt(n>>3)>>(n&7)&1))return!1;return!0}catch{return!1}};function Ag(){let i=ie("#listBody");i.textContent="",tn.forEach((t,e)=>{if(t.type!=="art")return;let n=Aa(t),s=document.createElement("button");s.className="it";let r;n?(r=new Image,r.alt="",r.src=_a(`a/${t.id}_t.webp`)):(r=document.createElement("span"),r.className="qm",r.textContent="\u061F");let a=document.createElement("span");a.className="nm",a.textContent=n?t.ar:`\u0627\u0644\u0644\u063A\u0632 ${t.no}`;let o=document.createElement("small");o.textContent=n?"\u062A\u0645 \u0627\u0644\u0643\u0634\u0641":"\u0645\u0646 \u064A\u062E\u062A\u0628\u0626 \u0647\u0646\u0627\u061F",a.append(o),s.append(r,a),s.onclick=()=>{Qc(),Xe(e+1)},i.append(s)})}var Jd;function Rg(i){Jd=document.activeElement;let t=ie(i);t.inert=!1,t.classList.add("on"),t.querySelector(".x").focus({preventScroll:!0})}function Qc(){let i=ie("#list");i.classList.contains("on")&&(i.classList.remove("on"),i.inert=!0,Jd?.focus({preventScroll:!0}))}ie("#openList").onclick=()=>{Ag(),Rg("#list")};document.querySelectorAll("[data-close]").forEach(i=>i.onclick=Qc);var Nn;try{Nn=new C1({canvas:ie("#gl"),antialias:!0,powerPreference:"high-performance"})}catch(i){throw Si.classList.remove("closed"),Si.classList.add("fallback"),ie("#list").inert=!1,i}Nn.setPixelRatio(Math.min(devicePixelRatio,2));Nn.shadowMap.enabled=!0;Nn.shadowMap.type=ns;Nn.toneMapping=sa;Nn.toneMappingExposure=1;var _n=new ji;_n.background=new Dt("#e9893f");_n.fog=new Nr("#e9893f",9,20);var Cg=new er(Nn);_n.environment=Cg.fromScene(new N1,.04).texture;_n.environmentIntensity=.34;var Be=new Ve(28,1,.05,30),Ee=new ta("#fff3e2",46,0,.42,.5,1.6);Ee.position.set(-3.1,4.5,2.2);Ee.target.position.set(0,0,.05);Ee.castShadow=!0;Ee.shadow.mapSize.set(2048,2048);Ee.shadow.bias=-.0016;Ee.shadow.normalBias=.02;Ee.shadow.radius=5;Ee.shadow.camera.near=2;Ee.shadow.camera.far=10;Ee.map=Ig();_n.add(Ee,Ee.target);var $d=new na("#fff4ea",.45);$d.position.set(1.5,3,3);_n.add($d,new Qr("#fffaf4","#e0a27a",.5));function Ig(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d");t.fillStyle="#9d8f80",t.fillRect(0,0,512,512),t.filter="blur(16px)",t.fillStyle="#fff",t.save(),t.translate(256,256),t.rotate(-.12),t.fillRect(-212,-230,424,470),t.restore(),t.filter="blur(8px)",t.strokeStyle="#8f8272",t.lineCap="round";for(let[n,s,r,a]of[[500,40,2.5,270],[520,180,2.9,220],[10,520,-.9,190]])for(let o=0;o<17;o++){let l=o/17,c=n+Math.cos(r)*a*l,u=s+Math.sin(r)*a*l;for(let d of[1,-1]){let h=r+d*(1.15-l*.7),f=78*(1-l*.5);t.lineWidth=7*(1-l*.5),t.beginPath(),t.moveTo(c,u),t.quadraticCurveTo(c+Math.cos(h)*f*.6,u+Math.sin(h)*f*.6,c+Math.cos(h+d*.25)*f,u+Math.sin(h+d*.25)*f),t.stroke()}}let e=new gi(i);return e.colorSpace=we,e}{let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle="#f0964f",t.fillRect(0,0,1024,1024);for(let s=0;s<240;s++){let r=40+Math.random()*150,a=Math.random()*1024,o=Math.random()*1024,l=t.createRadialGradient(a,o,0,a,o,r),c=Math.random()>.5;l.addColorStop(0,c?"rgba(255,190,120,.10)":"rgba(200,90,30,.06)"),l.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(a-r,o-r,2*r,2*r)}for(let s=0;s<5200;s++)t.fillStyle=Math.random()>.5?"rgba(150,60,10,.13)":"rgba(255,225,180,.22)",t.beginPath(),t.ellipse(Math.random()*1024,Math.random()*1024,Math.random()*2.2,Math.random()*1.4,Math.random()*3,0,7),t.fill();let e=new gi(i);e.colorSpace=we,e.wrapS=e.wrapT=Ls,e.repeat.set(7,7),e.anisotropy=8;let n=new ne(new Mn(24,24),new He({map:e,roughness:.86}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,_n.add(n)}Cd(_n);var qn=1.414,bi=.085,Ln=.022,hn=30,fs=new ln;fs.position.y=Ln;_n.add(fs);var H1=i=>1-.62*Math.exp(-i*9),ls=new He({color:"#33104a",roughness:.5}),Yc=new Gs({color:"#fff",roughness:.72,clearcoat:.06,clearcoatRoughness:.5,envMapIntensity:.45}),jc=new pn(1.035,Ln,qn+.06);jc.translate(-.5175,0,0);var G1=new ne(jc,ls);G1.position.y=-Ln/2;G1.castShadow=G1.receiveShadow=!0;fs.add(G1);var W1=new ln;fs.add(W1);var X1=new ne(jc,[ls,ls,Yc,ls,ls,ls]);X1.castShadow=X1.receiveShadow=!0;W1.add(X1);var q1=new ne(new pn(Ln,bi+Ln*2,qn+.06),ls);q1.castShadow=!0;fs.add(q1);var Pg=(()=>{let i=document.createElement("canvas");i.width=8,i.height=128;let t=i.getContext("2d");for(let n=0;n<128;n++){let s=214+Math.random()*34;t.fillStyle=`rgb(${s},${s-9},${s-24})`,t.fillRect(0,n,8,1)}let e=new gi(i);return e.colorSpace=we,e})();function Kd(i){let t=new Ue,e=hn+1,n=[],s=[],r=[],a=(u,d,h,f)=>r.push(u,d,h,d,f,h);for(let u of[qn/2-.003,-qn/2+.003])for(let d=0;d<e;d++){let h=d/hn;n.push(i*h*.985,0,u,i*h*.985,1,u),s.push(h,0,h,1)}for(let u=0;u<2;u++)for(let d=0;d<hn;d++){let h=u*e*2+d*2;a(h,h+2,h+1,h+3)}let o=hn*2,l=e*2+hn*2;a(o,l,o+1,l+1),t.setAttribute("position",new me(n,3)),t.setAttribute("uv",new me(s,2)),t.setIndex(r);let c=new ne(t,new He({map:Pg,roughness:1,side:2}));return c.castShadow=!0,fs.add(c),c}var th=Kd(-1),eh=Kd(1);function fr(i,t){let e=i.geometry.attributes.position,n=hn+1;for(let s=0;s<2;s++)for(let r=0;r<n;r++)e.setY(s*n*2+r*2+1,Math.max(5e-4,t*H1(r/hn)-6e-4));e.needsUpdate=!0,i.geometry.computeVertexNormals(),i.visible=t>.003}function nh(){let i=new Ue,t=hn+1,e=new Float32Array(t*2*3),n=new Float32Array(t*2*3),s=new Float32Array(t*4),r=new Float32Array(t*4),a=[];for(let h=0;h<t;h++){let f=h/hn;if(s.set([1-f,1,1-f,0],h*4),r.set([f,1,f,0],h*4),h<hn){let g=h*2;a.push(g,g+1,g+2,g+1,g+3,g+2)}}let o=i;o.setIndex(a),o.setAttribute("position",new Ie(e,3)),o.setAttribute("normal",new Ie(n,3)),o.setAttribute("uv",new Ie(s,2));let l=new Ue;l.setIndex(a),l.setAttribute("position",o.attributes.position),l.setAttribute("normal",o.attributes.normal),l.setAttribute("uv",new Ie(r,2));let c=h=>new He({roughness:.92,side:h,shadowSide:2,envMapIntensity:.8}),u=new ne(o,c(De)),d=new ne(l,c(ti));for(let h of[u,d])h.castShadow=h.receiveShadow=!0,h.frustumCulled=!1,fs.add(h);return{A:u,B:d,g:o,t:0}}var Pn=bi,ai=0;function We(i,t,e=.0014){i.t=t;let n=i.g.attributes.position,s=i.g.attributes.normal,r=t,a=Math.sin(Math.PI*t),o=0,l=0,c=1/hn,u=r,d=gn(Pn,ai,u),h=0,f=0;for(let g=0;g<=hn;g++){let M=g/hn,m=Math.PI*(1-r)+a*(1.25*(M-.18)*(1-.35*M))+a*-.55*Math.exp(-M*4),p=an(m,0,Math.PI);g&&(h+=Math.cos(p)*c*.985,f+=Math.sin(p)*c*.985);let S=d*H1(M),A=f+gn(S,d*.4,a)+e;o=h,l=Math.max(A,.002),o+=(1-2*t)*.004,n.setXYZ(g*2,o,l,-qn/2-.001),n.setXYZ(g*2+1,o,l,qn/2+.001),s.setXYZ(g*2,-Math.sin(p),Math.cos(p),0),s.setXYZ(g*2+1,-Math.sin(p),Math.cos(p),0)}for(let g=0;g<=hn;g++){let M=Math.max(0,g-1),m=Math.min(hn,g+1),p=n.getX(m*2)-n.getX(M*2),S=n.getY(m*2)-n.getY(M*2),A=Math.hypot(p,S)||1;s.setXYZ(g*2,-S/A,p/A,0),s.setXYZ(g*2+1,-S/A,p/A,0)}n.needsUpdate=s.needsUpdate=!0}var Tn=nh(),nn=nh();Tn.B.visible=!1;nn.A.visible=!1;var Wn=[0,1,2,3,4].map(()=>{let i=nh();return i.A.visible=i.B.visible=!1,i}),Y1=wd(),Lg=new Map;function Ng(i,t,e){if(e<0||e>=ds)return Promise.resolve(Y1);if(i.has(e)){let s=i.get(e);return i.delete(e),i.set(e,s),s}let n=t(e);if(i.set(e,n),i.size>9){let s=[...i.keys()].find(r=>Math.abs(r-Yt)>4);if(s!==void 0){let r=i.get(s);i.delete(s),r.then(a=>a.dispose())}}return n}var pr=i=>Ng(Lg,Ed,i),us=()=>Promise.resolve(Y1);function en(i,t){if(i.material.map!==t){let e=!!i.material.map;i.material.map=t,e||(i.material.needsUpdate=!0)}}var Yt=0,Qd=0;function cs(i){Pn=bi*(1-an(i/(ds+1),0,1)),ai=bi-Pn,fr(th,Pn),fr(eh,ai)}function ih(i){Qd=i,W1.position.set(0,gn(bi+Ln/2,-Ln/2,i*i),0),W1.rotation.z=-Math.PI*i;let t=an(i*1.4,0,1);q1.position.set(gn(.006,0,t),gn(bi/2,-Ln/2,t),0),q1.rotation.z=-Math.PI/2*t}ih(0);cs(0);We(Tn,0);We(nn,1);nn.B.visible=!1;var vi=new Cn(new pn(1,1,1).translate(0,.5,0),new Gs({roughness:.4,clearcoat:.5,clearcoatRoughness:.3}),or.t.length);vi.castShadow=vi.receiveShadow=!0;vi.frustumCulled=!1;X1.add(vi);{let i=new Dt;or.t.forEach(([,,t],e)=>vi.setColorAt(e,i.set(t==="#2d1145"||parseInt(t.slice(1,3),16)<60?"#4a1f70":t)))}var Id=new N,Ug=new qe,Pd=new N,Dg=new ae;function Fg(i){if(vi.visible=i>.02,!vi.visible)return;let t=1.035,e=qn+.06;or.t.forEach(([n,s],r)=>{let a=ze?.5:.5+.5*Math.sin(ba*1.6-(n+s)*14+Math.sin(r*12.9)*.5);Id.set(-t+n*t,Ln/2-.002,-e/2+s*e),Pd.set(or.s*t*.96,Math.max(5e-4,(.012+.055*a)*i),or.s*1.414*t*.96*(e/(t*1.414))/1.414),vi.setMatrixAt(r,Dg.compose(Id,Ug,Pd))}),vi.instanceMatrix.needsUpdate=!0}var En=new ln,Ra=new ln;En.add(Ra);_n.add(En);En.visible=!1;var xi=new ne(new Mn(1,1),new mi({color:"#2b0b40",transparent:!0,opacity:0,depthWrite:!1,fog:!1,toneMapped:!1}));xi.renderOrder=4;xi.visible=!1;_n.add(xi);var Xi=new Map,$t=null;function jd(i){let t=tn[i];if(!Xi.has(i)&&(Xi.set(i,new B1(t).init()),Xi.size>2)){for(let e of Xi.keys())if(Math.abs(e-Yt+1)>1&&e!==i){let n=Xi.get(e);Xi.delete(e),n.then(s=>s!==$t?s.dispose():Xi.set(e,n));break}}return Xi.get(i)}var K1=new F1(_n),Je={rise:0,tilt:50,w:1,h:1,z:0,y:0,x:-.5},sh=(i,t)=>(i>-1&&i<0&&Math.abs(t)<qn/2?Ln+Pn*H1(-i):i>0&&i<1&&Math.abs(t)<qn/2?Ln+ai*H1(i):0)+.002,Ea=0;async function tf(i){let t=++Ea,e=tn[i];if(ef(e),!e||e.type!=="art")return;let n=await jd(i);if(t===Ea){if(Ra.clear(),Ra.add(n.group),$t=n,zg(e),Object.assign(Je,{w:n.w,h:n.h,tilt:46,z:e.box[3]*qn-qn/2,x:-1+(e.box[0]+e.box[2])/2,y:Ln+Pn+.003}),En.visible=!0,n.solved&&K1.spawn(e.drop,sh,ze),ze){Je.rise=1;return}Je.rise=0,await Ei(1250,s=>{Je.rise=Tg(s)},()=>t===Ea)}}async function rh(i){let t=++Ea;if(K1.clear(),ef(null),!En.visible)return;let e=Je.rise;await Ei(ze?1:i?190:280,n=>{Je.rise=e*(1-n*n)}),t===Ea&&(En.visible=!1)}var sn=new Cn(Hc(),new He({vertexColors:!0,roughness:.5}),24);sn.castShadow=sn.receiveShadow=!0;sn.frustumCulled=!1;sn.count=0;_n.add(sn);var ur=[],Ma=0,wa=0,ah=i=>i.pal.map(([t,e])=>[e,t]);function ef(i){if(!i||i.type!=="art"){wa=0;return}let t=ah(i),e=Math.ceil(t.length/2),n=new Dt;ur=t.map(([s],r)=>{let a=r/e|0,o=r%e,l=a?t.length-e:e;return{x:.5+(o-(l-1)/2)*Math.min(.086,.8/e),z:a?.23:-.2,a:Math.sin(r*7.3)*.07,h:0,hex:s,i:r}}),ur.forEach((s,r)=>sn.setColorAt(r,n.set(s.hex))),sn.count=ur.length,sn.instanceColor.needsUpdate=!0,Ma=0,wa=1}var Ld=new qe,Nd=new cn,Ud=new N,Dd=new N,Og=new ae;function Bg(i){if(Ma=gn(Ma,wa,1-Math.exp(-(wa?4.5:14)*i)),Ma<.01&&!wa){sn.visible=!1;return}sn.visible=!0,ur.forEach((t,e)=>{let n=an(Ma*1.6-e/ur.length*.6,0,1);t.h=gn(t.h,t.hex===oh?1:0,1-Math.exp(-9*i)),Nd.set(-.12*t.h,t.a*(2-n),0),Ld.setFromEuler(Nd),Ud.set(t.x,sh(t.x,t.z)+.03+.07*t.h+(1-n)*.25,t.z+(1-n)*.3),Dd.setScalar(.4*Math.min(1,n*1.4)),sn.setMatrixAt(e,Og.compose(Ud,Ld,Dd))}),sn.instanceMatrix.needsUpdate=!0,sn.computeBoundingSphere()}var oh=null,oi=0;function mr(i,t){oh=i,oi=t||0,$t&&($t.U.uSel.value=un?oi:0,i&&$t.U.uSelC.value.set(i)),document.querySelectorAll("#pal button").forEach(e=>{let n=+e.dataset.n===oi;e.setAttribute("aria-pressed",n),n&&e.scrollIntoView({inline:"center",block:"nearest",behavior:ze?"auto":"smooth"})})}function zg(i){let t=ie("#pal");t.textContent="",ah(i).filter(n=>$t.byNum.has(n[1])).forEach(([n,s])=>{let r=document.createElement("button");r.style.setProperty("--c",n),r.dataset.n=s,r.textContent=s;let a=parseInt(n.slice(1),16);(a>>16)*.3+(a>>8&255)*.59+(a&255)*.11<120&&r.classList.add("dk"),r.onclick=()=>mr(n,s),t.append(r)}),lh(),ch()}function lh(){let i=new Set($t.left());document.querySelectorAll("#pal button").forEach(t=>{let e=!i.has(+t.dataset.n);t.classList.toggle("ok",e),t.setAttribute("aria-label",`\u0644\u0648\u0646 \u0631\u0642\u0645 ${t.dataset.n}${e?" \u0645\u0643\u062A\u0645\u0644":""}`)}),Q1()}function ch(){let i=$t.left();if(!i.length){mr(null,0);return}let t=i.find(e=>e>oi)??i[0];mr($t.colOf[t],t)}var Fd;function Od(i){let t=ie("#toast");t.textContent=i,t.classList.add("on"),clearTimeout(Fd),Fd=setTimeout(()=>t.classList.remove("on"),1500)}function Q1(){let i=$t;i&&(Si.classList.toggle("solved",i.solved),ie("#prog").textContent=i.solved?"":`\u0627\u0643\u062A\u0634\u0641\u062A ${Math.floor(i.progress()*100)}\u066A \xB7 \u0644\u0648\u0651\u0646 \u0627\u0644\u0645\u0633\u0627\u062D\u0627\u062A \u0627\u0644\u0645\u0636\u064A\u0626\u0629`)}var Bd=0;function Z1(i,t){let e=$t;if(!e||e.solved||!oi)return;let n=i.uv,s=oi,r=i.r;if(e.brush(n,r,oi)){let o=performance.now();if(o-Bd>70&&(hh(420+360*e.progress()+Math.random()*60),Bd=o),e.byNum.get(s).some(l=>!e.done[l]))Q1();else{if(lh(),e.save(),e.solved){nf();return}sf(),ch()}return}if(t){let o=e.at(n);o?!o.done&&o.num!==oi&&Od(`\u0647\u0630\u0647 \u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u0631\u0642\u0645 ${o.num}`):Od("\u0647\u0630\u0647 \u0627\u0644\u0645\u0633\u0627\u062D\u0629 \u062A\u0628\u0642\u0649 \u0628\u064A\u0636\u0627\u0621")}}async function nf(){let i=$t;i.save(),mr(null,0),Si.classList.add("revealing"),wt.z=1,wt.tpx=wt.tpy=0,sf(!0),K1.spawn("confetti",sh,ze,110);let t=Ei(ze?1:2600,e=>{wt.trx=.12*Math.sin(e*Math.PI),wt.tRy=Math.sin(e*Math.PI*2)*.55*(1-e*.4)});await Ei(ze?1:2e3,e=>{i.U.uRv.value=e<.5?2*e*e:1-(-2*e+2)**2/2}),await t,wt.trx=wt.tRy=0,$t===i&&(ie("#who").textContent=i.s.ar,Si.classList.remove("revealing"),Q1(),dh(),ie("#live").textContent=`\u0638\u0647\u0631\u062A ${i.s.ar}`)}ie("#wipe").onclick=async()=>{let i=$t;i&&(await Ei(ze?1:600,t=>{i.U.uRv.value*=1-t}),i.U.uRv.value=0,i.wipe(),oi=0,lh(),ch(),dh())};ie("#book").href=Md;ie("#save").onclick=async()=>{if(!$t)return;let i=$t.image($t.s.ar),t=`DoO-${$t.s.id}.png`,e=await new Promise(r=>i.toBlob(r,"image/png")),n=new File([e],t,{type:"image/png"});if(matchMedia("(pointer:coarse)").matches&&navigator.canShare?.({files:[n]}))try{await navigator.share({files:[n]});return}catch(r){if(r.name==="AbortError")return}let s=document.createElement("a");s.href=URL.createObjectURL(e),s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(s.href),4e3)};function sf(i){wn&&(i?[523,659,784,1047,1319]:[659,880]).forEach((t,e)=>setTimeout(()=>hh(t),e*95))}var xa={len:12.45,pad:.25,vol:.5},Le,hs,Ta,wn=!0;try{wn=localStorage.getItem("doo-friends:sound")!=="0"}catch{}function rf(){return Le||(Le=new(window.AudioContext||window.webkitAudioContext),hs=Le.createGain(),hs.gain.value=0,hs.connect(Le.destination)),Le.state!=="running"&&!document.hidden&&Le.resume().catch(()=>{}),Le}async function kg(i){if(i.startsWith("data:")){let e=atob(i.slice(i.indexOf(",")+1)),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n.buffer}let t=await fetch(i);if(!t.ok)throw new Error(t.status);return t.arrayBuffer()}function af(){wn&&(rf(),Ta=Ta||(async()=>{let i=await Le.decodeAudioData(await kg(_a("a/music.m4a"))),t=Le.createBufferSource();return t.buffer=i,t.loop=!0,t.loopStart=xa.pad,t.loopEnd=xa.pad+xa.len,t.connect(hs),t.start(0,xa.pad),t})().catch(()=>{Ta=null}),of(xa.vol,1.2))}function of(i,t){let e=Le.currentTime;hs.gain.cancelScheduledValues(e),hs.gain.setTargetAtTime(i,e,t/3)}function lf(){let i=ie("#sound");i.setAttribute("aria-pressed",wn),i.setAttribute("aria-label",wn?"\u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A":"\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u062A")}ie("#sound").onclick=()=>{wn=!wn;try{localStorage.setItem("doo-friends:sound",wn?"1":"0")}catch{}lf(),wn?af():Le&&of(0,.25)};lf();for(let i of["pointerup","touchend","keydown"])addEventListener(i,t=>{!t.target.closest?.("#sound")&&wn&&(!Ta||Le.state!=="running")&&af()},{passive:!0,capture:!0});document.addEventListener("visibilitychange",()=>{Le&&(document.hidden?Le.suspend():wn&&Le.resume().catch(()=>{}))});function hh(i){if(wn)try{rf();let t=Le.currentTime,e=Le.createOscillator(),n=Le.createGain();e.type="sine",e.frequency.setValueAtTime(i,t),e.frequency.exponentialRampToValueAtTime(i*1.5,t+.09),n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.07,t+.012),n.gain.exponentialRampToValueAtTime(1e-4,t+.18),e.connect(n).connect(Le.destination),e.start(t),e.stop(t+.2)}catch{}}var z1=new Set;function Ei(i,t,e=()=>!0){return new Promise(n=>z1.add({ms:i,f:t,alive:e,t:0,ok:n}))}function Vg(i){for(let t of[...z1]){if(!t.alive()){z1.delete(t),t.ok();continue}t.t+=i*1e3;let e=an(t.t/t.ms,0,1);t.f(e),e===1&&(z1.delete(t),t.ok())}}var Mi=!1,Xn=null;async function j1(i){let[t,e]=await Promise.all([pr(i-1),us(i-1)]);en(Tn.A,t),en(nn.B,e),cs(i),We(Tn,0),We(nn,1),nn.B.visible=i>0}function tl(i){if(Si.classList.toggle("closed",i===0),ie("#prev").setAttribute("aria-label",i<=1?"\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0643\u062A\u0627\u0628":"\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629"),ie("#next").disabled=i>=ds,!i)return;let t=tn[i-1];ie("#add").textContent=t.type==="art"?Aa(t)?`\u0634\u0627\u0647\u062F ${t.ar}`:"\u062D\u0644\u0651 \u0627\u0644\u0644\u063A\u0632":t.type==="info"?"\u0627\u0628\u062F\u0623 \u0627\u0644\u0644\u0639\u0628":"\u0645\u0646 \u0627\u0644\u0628\u062F\u0627\u064A\u0629",document.querySelectorAll("#chips button").forEach((e,n)=>{n===i-1?(e.setAttribute("aria-current","true"),e.scrollIntoView({inline:"center",block:"nearest",behavior:ze?"auto":"smooth"})):e.removeAttribute("aria-current")}),ie("#live").textContent=t.type==="art"&&!Aa(t)?`\u0627\u0644\u0644\u063A\u0632 ${t.no}`:t.ar,history.replaceState(null,"","#"+t.id)}function el(i){for(let t of[i,i+1,i-1])t>=1&&t<=ds&&(pr(t-1),us(t-1),tn[t-1].type==="art"&&Math.abs(t-Yt)<=1&&jd(t-1))}async function Xe(i){if(i=an(i,0,ds),un&&await Ca(),Mi){Xn=i;return}if(i!==Yt){Mi=!0;try{Yt===0?(await Hg(1),i>1&&await zd(i)):i===0?(await rh(),await Gg()):await zd(i)}finally{Mi=!1}if(Xn!=null&&Xn!==Yt){let t=Xn;Xn=null,Xe(t);return}Xn=null,Yt>0&&tf(Yt-1),el(Yt)}}async function Hg(i){await j1(i),tl(i),Yt=i,nl(),cs(0),We(Tn,0),nn.B.visible=!1;let t=await us(i-1);await Ei(ze?1:1150,e=>{let n=Kc(e);ih(n),n>.93&&(nn.B.visible=!0,cs(i),We(Tn,0),We(nn,1))}),cs(i),We(Tn,0),We(nn,1),nn.B.visible=!0}async function Gg(){tl(0),Yt=0,nl(),history.replaceState(null,"",location.pathname+location.search);let i=ai;nn.B.visible=!1,await Ei(ze?1:900,t=>{let e=Kc(t);ih(1-e),ai=i*(1-e),Pn=bi-ai,fr(th,Pn),fr(eh,e>.1?0:ai),We(Tn,0)}),cs(0),We(Tn,0)}async function zd(i){let t=Yt,e=i>t,n=Math.min(Math.abs(i-t),5);rh(!0),el(i);let[s,r,a,o]=await Promise.all([pr(t-1),us(t-1),pr(i-1),us(i-1)]);Yt=i,tl(i);for(let h=0;h<n;h++){let f=Wn[h];f.A.visible=f.B.visible=!0,en(f.A,Y1),en(f.B,Y1),We(f,e?0:1,.002+(n-h)*.0012)}e?(en(Wn[0].A,s),en(Wn[n-1].B,o),en(Tn.A,a)):(en(Wn[0].B,r),en(Wn[n-1].A,a),en(nn.B,o));let l=Pn,c=bi*(1-i/(ds+1)),u=ze?1:n>1?780:820,d=ze?0:95;await Ei(u+d*(n-1),h=>{let f=h*(u+d*(n-1));Pn=gn(l,c,h),ai=bi-Pn,fr(th,Pn),fr(eh,ai),We(Tn,0),We(nn,1);for(let g=0;g<n;g++){let M=Kc(an((f-g*d)/u,0,1));We(Wn[g],e?M:1-M,.002+(M<.5?n-g:g+1)*.0012)}}),await j1(i);for(let h of Wn)h.A.visible=h.B.visible=!1}async function Wg(i){let t=Yt+(i?1:-1);if(t<1||t>ds||Mi)return null;Mi=!0;let e=Yt;rh(!0);let n={fwd:i,p:t,from:e,v:0,t:0,ready:!1,done:null};return n.go=Promise.all([pr(e-1),us(e-1),pr(t-1),us(t-1)]).then(([s,r,a,o])=>{let l=Wn[0];l.A.visible=l.B.visible=!0,i?(en(l.A,s),en(l.B,o),en(Tn.A,a)):(en(l.B,r),en(l.A,a),en(nn.B,o)),n.ready=!0,We(l,i?n.t:1-n.t,.0032)}),n}function cf(i,t){i.t=an(t,0,1),i.ready&&We(Wn[0],i.fwd?i.t:1-i.t,.0032)}async function Xg(i,t){await i.go;let e=i.t+t*.18>.38,n=i.t,s=e?1:0;if(await Ei(ze?1:Math.max(180,560*Math.abs(s-n)),r=>cf(i,gn(n,s,wg(r)))),e&&(Yt=i.p,tl(Yt)),await j1(Yt),Wn[0].A.visible=Wn[0].B.visible=!1,Mi=!1,Xn!=null&&Xn!==Yt){let r=Xn;Xn=null,Xe(r);return}Xn=null,tf(Yt-1),el(Yt)}var Ge={tx:-.5,ty:0,tz:0,d:5,el:50,az:0},Sa={...Ge},rn=1,Se=1,k1=0,Zc=0;function nl(i){let t=rn/Se,e=Math.tan(Be.fov*Math.PI/360),n=t<1.05,s=Se<520,r=Yt===0?n?150:120:s?64:n?150:118,a=s?8:66,o=Math.max(.35,(Se-r-a)/Se);if(Zc=(a+(Se-r))/2-Se/2,Yt===0){let l=Math.max(1.62/(2*e*t),1.42/(2*e*o));Object.assign(Sa,{tx:-.5,ty:.05,tz:0,d:l+.2,el:50,az:-16})}else if(n){let l=Math.max(1.06/(2*e*t),1.4/(2*e*o));Object.assign(Sa,{tx:-.5,ty:.12,tz:0,d:l+.3,el:60,az:0})}else{let l=Math.max(2.2/(2*e*t),1.42/(2*e*o));Object.assign(Sa,{tx:0,ty:.12,tz:0,d:l+.3,el:54,az:0})}i&&(Object.assign(Ge,Sa),k1=Zc)}var Gn={x:0,y:0,tx:0,ty:0,vx:0,vy:0};function hf(){rn=innerWidth,Se=innerHeight,Nn.setSize(rn,Se,!1),Be.aspect=rn/Se,Be.updateProjectionMatrix(),nl()}addEventListener("resize",hf);hf();nl(!0);var un=!1,wt={k:0,rx:0,ry:0,z:1,trx:0,tRy:0,px:0,py:0,tpx:0,tpy:0,sz:1,shake:0};function J1(i=!0){un||Mi||!En.visible||(un=!0,Si.classList.add("looking"),wt.trx=i?.06:0,wt.tRy=i?.42:0,wt.z=1,wt.tpx=wt.tpy=0,ie("#who").textContent=$t.s.ar,Q1(),mr(oh,oi),i&&!ze&&setTimeout(()=>{un&&!qt&&(wt.trx=0,wt.tRy=0)},900))}async function Ca(){un=!1,$t&&($t.U.uSel.value=0,$t.save()),Si.classList.remove("looking"),wt.trx=wt.tRy=0,wt.z=1,wt.tpx=wt.tpy=0}ie("#closeLook").onclick=Ca;var gr=ie("#gl"),dr=new ia,$1=new lt,yi=new Map,qt=null,Jc=0,uh=i=>{$1.set(i.clientX/rn*2-1,1-i.clientY/Se*2),dr.setFromCamera($1,Be)},uf=i=>{if(!$t)return null;uh(i);let t=$t.hitMesh,e=dr.intersectObject(t,!1)[0];if(!e)return null;$1.set((i.clientX+22)/rn*2-1,1-i.clientY/Se*2),dr.setFromCamera($1,Be);let n=dr.intersectObject(t,!1)[0];return{uv:e.uv.clone(),r:n?Math.max(10,Math.hypot(n.uv.x-e.uv.x,0)*$t.s.w):40}},df=i=>!En.visible||!$t?!1:(uh(i),dr.intersectObject($t.hitMesh,!1).length>0),$c=i=>{if(!sn.visible||un||!sn.count)return null;uh(i);let t=dr.intersectObject(sn)[0];return t?ur[t.instanceId]:null},V1=null;gr.addEventListener("pointerdown",i=>{if(yi.set(i.pointerId,i),gr.setPointerCapture(i.pointerId),yi.size===2){let[t,e]=[...yi.values()];Jc=Math.hypot(t.clientX-e.clientX,t.clientY-e.clientY),V1=[(t.clientX+e.clientX)/2,(t.clientY+e.clientY)/2],qt=null;return}if(qt={x:i.clientX,y:i.clientY,lx:i.clientX,ly:i.clientY,t:performance.now(),v:0,mode:null,pop:df(i)},un&&!$t.solved&&yi.size===1){let t=uf(i);t&&(qt.art=!0,qt.pend=t)}});gr.addEventListener("pointermove",i=>{if(i.pointerType==="mouse"&&!qt){Gn.tx=(i.clientX/rn-.5)*2,Gn.ty=(i.clientY/Se-.5)*2;let a=Yt&&($c(i)||df(i));gr.style.cursor=a?"pointer":""}if(yi.has(i.pointerId)&&yi.set(i.pointerId,i),un&&yi.size===2){let[a,o]=[...yi.values()],l=Math.hypot(a.clientX-o.clientX,a.clientY-o.clientY);wt.z=an(wt.z*l/Jc,.8,5),Jc=l;let c=(a.clientX+o.clientX)/2,u=(a.clientY+o.clientY)/2;kd(c-V1[0],u-V1[1]),V1=[c,u];return}if(!qt)return;let t=i.clientX-qt.x,e=i.clientY-qt.y,n=performance.now();qt.v=gn(qt.v,(i.clientX-qt.lx)/Math.max(8,n-qt.t),.5);let s=i.clientX-qt.lx,r=i.clientY-qt.ly;if(qt.lx=i.clientX,qt.ly=i.clientY,qt.t=n,un){if(qt.moved=qt.moved||Math.hypot(t,e)>8,!qt.moved)return;if(qt.art){qt.pend&&(Z1(qt.pend),qt.pend=null);let a=Math.max(1,Math.ceil(Math.hypot(s,r)/12));for(let o=1;o<=a;o++){let l=uf({clientX:i.clientX-s*(1-o/a),clientY:i.clientY-r*(1-o/a)});l&&$t&&!$t.solved&&Z1(l)}return}if(wt.z>1.2){kd(s,r);return}wt.tRy=an(wt.tRy+s*.006,-1.05,1.05),wt.trx=an(wt.trx+r*.005,-.6,.6);return}if(!qt.mode&&Math.hypot(t,e)>9&&(qt.mode=Yt&&Math.abs(t)>Math.abs(e)?"flip":"none",qt.sx=i.clientX,qt.mode==="flip")){let a=t>0;qt.fwd=a,qt.D=Wg(a),qt.D.then(o=>{qt&&(qt.d=o)})}if(qt.mode==="flip"&&qt.d){let a=Math.min(rn*.85,620);cf(qt.d,(qt.fwd?1:-1)*(i.clientX-qt.sx)/a)}});async function ff(i){if(yi.delete(i.pointerId),!qt)return;let t=qt;if(qt=null,un){!t.moved&&i.type==="pointerup"?t.art&&t.pend?Z1(t.pend,!0):!t.pop&&wt.z<1.2&&Ca():$t&&$t.save();return}if(t.mode==="flip"){let e=await t.D;e?Xg(e,(t.fwd?1:-1)*t.v*2.2):!Mi&&!t.fwd&&Yt===1&&Xe(0);return}if(!t.mode)if(Yt===0)Xe(1);else{if(i.type!=="pointerup")return;if($c(i)){let e=$c(i),n=tn[Yt-1];mr(e.hex,ah(n)[e.i][1]),hh(520),J1()}else if(t.pop)J1();else{let e=i.clientX/rn;e<.16?Xe(Yt+1):e>.84&&Xe(Yt-1||1)}}}gr.addEventListener("pointerup",ff);gr.addEventListener("pointercancel",ff);function kd(i,t){let e=Math.max(0,wt.z-.7)*.5;wt.tpx=an(wt.tpx+i/Se,-e*rn/Se,e*rn/Se),wt.tpy=an(wt.tpy-t/Se,-e,e)}var Vd=0;addEventListener("wheel",i=>{if(ie("#list").classList.contains("on"))return;if(un){wt.z=an(wt.z*(1-i.deltaY*.0018),.8,5),wt.z<=1.05&&(wt.tpx=wt.tpy=0);return}let t=performance.now();if(t-Vd<900||Math.abs(i.deltaY)+Math.abs(i.deltaX)<12)return;Vd=t;let e=Math.abs(i.deltaX)>Math.abs(i.deltaY)?-i.deltaX:i.deltaY;e<0&&Yt===0||Xe(Yt+(e>0?1:-1))},{passive:!0});addEventListener("keydown",i=>{i.key==="Escape"&&(un&&Ca(),Qc()),!ie("#list").classList.contains("on")&&(i.key==="ArrowLeft"&&Xe(Yt+1),i.key==="ArrowRight"&&Xe(Yt-1))});ie("#openBook").onclick=()=>Xe(1);ie("#home").onclick=()=>Xe(0);ie("#next").onclick=()=>Xe(Yt+1);ie("#prev").onclick=()=>Xe(Yt-1);ie("#add").onclick=()=>{let i=tn[Yt-1];i&&(i.type==="art"?J1():Xe(i.type==="info"?2:1))};function dh(){let i=ie("#chips");i.children.length||tn.forEach((t,e)=>{let n=document.createElement("button");n.onclick=()=>Xe(e+1),i.append(n)}),[...i.children].forEach((t,e)=>{let n=tn[e],s=n.type==="art"&&Aa(n);t.textContent=n.type==="art"?s?n.ar:n.no:n.ar,t.setAttribute("aria-label",n.type==="art"?s?n.ar:`\u0627\u0644\u0644\u063A\u0632 ${n.no}`:n.ar)}),Yt&&(ie("#add").textContent=tn[Yt-1].type==="art"&&Aa(tn[Yt-1])?`\u0634\u0627\u0647\u062F ${tn[Yt-1].ar}`:ie("#add").textContent)}dh();var Hd=new N,va=new N,Gd=new qe,Wd=new qe,qg=new cn,Xd=new N,qd=Ee.position.clone(),Yd=Ee.target.position.clone(),Yg={value:0},Zd=performance.now(),ba=0,Tx=Ee.intensity,ri=(i,t,e,n)=>gn(i,t,1-Math.exp(-e*n)),Wc=Math.min(1.25,devicePixelRatio),Xc=0,qc=0,ya=Math.min(devicePixelRatio,2);function Zg(i){if(i>.5||document.hidden||(Xc+=i,++qc<40))return;let t=Xc/qc;Xc=qc=0,t>.026&&ya>Wc?(ya=Math.max(Wc,ya-.25),Nn.setPixelRatio(ya),Nn.setSize(rn,Se,!1)):t>.03&&ya<=Wc&&Ee.shadow.mapSize.x>1024&&(Ee.shadow.mapSize.set(1024,1024),Ee.shadow.map?.dispose(),Ee.shadow.map=null)}function Jg(i){let t=(i-Zd)/1e3;Zg(t);let e=Math.min(.12,t);Zd=i,ba+=e,Vg(e),K1.update(e),Bg(e),k1=ri(k1,un?-70:Zc,ze?60:4,e),Be.setViewOffset(rn,Se,0,-k1,rn,Se);{let o=an(1-Qd*4,0,1);Fg(o)}for(let o in Ge)Ge[o]=ri(Ge[o],Sa[o],ze?60:3.4,e);let n=ze?0:1;Gn.x=ri(Gn.x,Gn.tx,5,e),Gn.y=ri(Gn.y,Gn.ty,5,e);let s=(Ge.az+Gn.x*5+n*Math.sin(ba*.35)*1.6)*Math.PI/180,r=(Ge.el-Gn.y*2.5)*Math.PI/180;Be.position.set(Ge.tx+Math.sin(s)*Math.cos(r)*Ge.d,Ge.ty+Math.sin(r)*Ge.d,Ge.tz+Math.cos(s)*Math.cos(r)*Ge.d),Be.lookAt(Ge.tx,Ge.ty,Ge.tz),Be.updateMatrixWorld(),$t&&$t.step(e),wt.k=ri(wt.k,un&&En.visible?1:0,6,e);let a=wt.k<.001?0:wt.k;if(En.visible&&$t){wt.rx=ri(wt.rx,wt.trx,9,e),wt.ry=ri(wt.ry,wt.tRy,7,e),wt.px=ri(wt.px,wt.tpx,16,e),wt.py=ri(wt.py,wt.tpy,16,e),wt.sz=ri(wt.sz,wt.z,14,e);let o=Je.tilt*Math.PI/180,l=-Math.PI/2+o*Je.rise;$t.place(Je.rise,o*Math.max(.1,Je.rise),a),Hd.set(Je.x,Je.y,Je.z),Gd.setFromEuler(qg.set(l,0,0));let c=(n*Math.sin(ba*.7)*.03+Gn.x*.1)*an(Je.rise,0,1);va.set(0,0,-1).applyQuaternion(Be.quaternion);let u=Ge.d*.6;va.multiplyScalar(u).add(Be.position);let d=Math.tan(Be.fov*Math.PI/360)*u*2,h=Math.max(.3,(Se-66-(Se<520?96:214))/Se),f=Math.min(d*h/Je.h,d*rn/Se*.9/Je.w),g=f*wt.sz;Wd.copy(Be.quaternion),En.position.lerpVectors(Hd,va,a),En.quaternion.slerpQuaternions(Gd,Wd,a),En.scale.setScalar(gn(1,g,a)),Ra.position.set((wt.px*d/g+wt.shake)*a,wt.py*d/g*a,0),Ra.rotation.set(wt.rx*a,gn(c,wt.ry+n*Math.sin(ba*.8)*.035*(wt.sz<1.2?1:0),a),0),$t.group.position.y=gn(0,-Je.h/2,a),$t.group.position.z=-Gc*.5*$t.U.uRv.value*a,xi.visible=a>.01;let M=Ge.d*.78,m=Math.tan(Be.fov*Math.PI/360)*M*2;xi.position.set(0,0,-M).applyQuaternion(Be.quaternion).add(Be.position),xi.quaternion.copy(Be.quaternion),xi.scale.set(m*rn/Se*1.4,m*1.6,1),xi.material.opacity=a*.9,Xd.set(-.42,.5,.76).applyQuaternion(Be.quaternion).normalize().multiplyScalar(6.4).add(va),Ee.position.lerpVectors(qd,Xd,a),Ee.target.position.lerpVectors(Yd,va,a)}else xi.visible=!1,Ee.position.copy(qd),Ee.target.position.copy(Yd);Yg.value=a,Nn.render(_n,Be)}var $g=async()=>{let[i]=await Promise.all([Td(),document.fonts.load("600 40px Alexandria","\u0630\u0643\u0631\u064A\u0627\u062A").catch(()=>{})]);Yc.map=i,Yc.needsUpdate=!0,await j1(1),nn.B.visible=!1,cs(0),We(Tn,0),el(1),Nn.setAnimationLoop(Jg);let t=tn.findIndex(e=>"#"+e.id===decodeURIComponent(location.hash));t>=0&&Xe(t+1)};$g();window.__doo={goTo:Xe,startLook:J1,endLook:Ca,get pop(){return $t},get audio(){return{ac:Le,mGain:hs,mLoad:Ta,sound:wn}},K:wt,reveal:nf,stroke:Z1,get cur(){return Yt},get busy(){return Mi}};})();
