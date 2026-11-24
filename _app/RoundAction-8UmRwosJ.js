const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/web-CLtJvGdn.js","_app/dist-BtfAZAro.js","_app/definitions--d8bC4tg.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./dist-BtfAZAro.js";import{n,t as r}from"./definitions--d8bC4tg.js";var i=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),d=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=s(t),c=0,u=i.length,d;c<u;c++)d=i[c],!l.call(e,d)&&d!==n&&a(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(r=o(t,d))||r.enumerable});return e},f=(e,t,n)=>(n=e==null?{}:i(c(e)),d(t||!e||!e.__esModule||!l.call(e,`default`)?a(n,`default`,{value:e,enumerable:!0}):n,e)),p=u((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),ee=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=ee&&e[ee]||e[`@@iterator`],typeof e==`function`?e:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,re={};function h(e,t,n){this.props=e,this.context=t,this.refs=re,this.updater=n||te}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function ie(){}ie.prototype=h.prototype;function g(e,t,n){this.props=e,this.context=t,this.refs=re,this.updater=n||te}var ae=g.prototype=new ie;ae.constructor=g,ne(ae,h.prototype),ae.isPureReactComponent=!0;var oe=Array.isArray;function se(){}var _={H:null,A:null,T:null,S:null},v=Object.prototype.hasOwnProperty;function ce(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function le(e,t){return ce(e.type,t,e.props)}function ue(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function de(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var fe=/\/+/g;function y(e,t){return typeof e==`object`&&e&&e.key!=null?de(``+e.key):t.toString(36)}function pe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(se,se):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function b(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,b(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+y(e,0):a,oe(o)?(i=``,c!=null&&(i=c.replace(fe,`$&/`)+`/`),b(o,r,i,``,function(e){return e})):o!=null&&(ue(o)&&(o=le(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(fe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(oe(e))for(var u=0;u<e.length;u++)a=e[u],s=l+y(a,u),c+=b(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+y(a,u++),c+=b(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return b(pe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function x(e,t,n){if(e==null)return e;var r=[],i=0;return b(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function me(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var he=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ge(e){var t=_.T,n={};n.types=t===null?null:t.types,_.T=n;try{var r=e(),i=_.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(se,he)}catch(e){he(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),_.T=t}}function _e(e){var t=_.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ge(_e.bind(null,e))}var ve={map:x,forEach:function(e,t,n){x(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return x(e,function(){t++}),t},toArray:function(e){return x(e,function(e){return e})||[]},only:function(e){if(!ue(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ve,e.Component=h,e.Fragment=r,e.Profiler=a,e.PureComponent=g,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return _.H.useMemoCache(e)}},e.addTransitionType=_e,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=ne({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!v.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ce(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)v.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ce(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ue,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:me}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ge,e.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},e.use=function(e){return _.H.use(e)},e.useActionState=function(e,t,n){return _.H.useActionState(e,t,n)},e.useCallback=function(e,t){return _.H.useCallback(e,t)},e.useContext=function(e){return _.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return _.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return _.H.useEffect(e,t)},e.useEffectEvent=function(e){return _.H.useEffectEvent(e)},e.useId=function(){return _.H.useId()},e.useImperativeHandle=function(e,t,n){return _.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return _.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return _.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return _.H.useMemo(e,t)},e.useOptimistic=function(e,t){return _.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return _.H.useReducer(e,t,n)},e.useRef=function(e){return _.H.useRef(e)},e.useState=function(e){return _.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return _.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return _.H.useTransition()},e.version=`19.3.1`})),ee=u(((e,t)=>{t.exports=p()})),m=f(ee(),1),te=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},ne=(e=>e?te(e):te),re=e=>e;function h(e,t=re){let n=m.useSyncExternalStore(e.subscribe,m.useCallback(()=>t(e.getState()),[e,t]),()=>t(e.getInitialState()));return m.useDebugValue(n),n}var ie=e=>{let t=ne(e),n=e=>h(t,e);return Object.assign(n,t),n},g=(e=>e?ie(e):ie),ae={easy:2,medium:3,hard:5};function oe(e,t){return e===`win`?ae[t]:1}var se={easy:150,medium:250,hard:350},_={easy:8,medium:9,hard:9},v=[`prologue`,`ch01`,`ch02`,`ch03`,`ch04`,`ch05`,`ch06`,`ch07`],ce=[`living`,`dining`,`bedroom`],le={floor:.22,baseboard:.045,beam:.07,rafterOfWall:.3,wallTile:.34,window:.3,windowCenterOfWall:.4},ue={zone:0,x:.14,width:.28,y:.75},de=[.59,.5,.56],fe={rafter:468/397,post:74/472},y={wall:[{id:`plaster`,name:{ru:`Светлая штукатурка`,en:`Light plaster`},image:`hw.wall.plaster`},{id:`leaves`,name:{ru:`Обои в листик`,en:`Leaf wallpaper`},image:`hw.wall.leaves`},{id:`stars`,name:{ru:`Обои со звёздами`,en:`Starry wallpaper`},image:`hw.wall.stars`},{id:`stripes`,name:{ru:`Обои в полоску`,en:`Striped wallpaper`},image:`hw.wall.stripes`}],floor:[{id:`honey`,name:{ru:`Медовые доски`,en:`Honey boards`},image:`hw.floor.honey`},{id:`dark`,name:{ru:`Тёмный пол`,en:`Dark floor`},image:`hw.floor.dark`},{id:`checker`,name:{ru:`Плитка в клетку`,en:`Checkered tiles`},image:`hw.floor.checker`}]},pe=[`wall`,`floor`];function b(e,t){return y[e].find(e=>e.id===t)??y[e][0]}function x(e){return y[e][0].id}var me={version:1,currency:`fireflies`,defaults:{wall:`wall_plaster`,floor:`floor_honey`},styles:[{key:`rustic`,name:`Деревенский`},{key:`royal`,name:`Королевский`},{key:`scrap`,name:`Енотий`}],zones:[{key:`living`,name:`Гостиная`},{key:`bedroom`,name:`Спальня`}],intro:[`cutlet [calm]: Вот список. Не пугайся. Он только кажется длинным.`,`spider [puzzled]: Он и есть длинный.`,`cutlet [happy]: Значит, не кажется. Начнём с кровати.`],batch_done:[`cutlet [happy]: С этим всё. Я вычеркнула. Вычёркивать – лучшая часть списка.`,`cutlet [calm]: Хорошо. Теперь следующий лист. Да, есть следующий.`],outro:[`narrator: Котлетка вычеркнула последнюю строчку и долго смотрела на список.`,`cutlet [calm]: Всё.`,`spider [tender]: Всё?`,`cutlet [happy]: Пока всё. Я подумаю, чего ещё не хватает.`,`narrator: В комнате было тепло. На столе стоял торт. Внизу кто-то ставил чайник.`],batches:[{id:1,title:`Чтобы было где сесть и лечь`,items:[{key:`bed`,name:`Кровать`,kind:`furniture`,zone:`bedroom`,asset:`bed`,variants:!0,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Сначала кровать. На полу спят только те, у кого нет списка.`},{key:`table`,name:`Обеденный стол`,kind:`furniture`,zone:`living`,asset:`table`,variants:!0,price:30,seller:`raccoon`,quest:null,requires:null,comment:`Стол. Без стола чай превращается в перекус.`},{key:`chair`,name:`Стул`,kind:`furniture`,zone:`living`,asset:`chair`,variants:!0,price:20,seller:`raccoon`,quest:null,requires:null,comment:`Стул. Один. Второй купим, когда этот себя оправдает.`},{key:`lamp_living`,name:`Лампа в гостиную`,kind:`furniture`,zone:`living`,asset:`lamp`,variants:!0,price:25,seller:`raccoon`,quest:null,requires:null,comment:`Лампа. Светлячкам тоже нужен дом.`},{key:`stove`,name:`Печка`,kind:`furniture`,zone:`living`,asset:`stove`,variants:!0,price:45,seller:`raccoon`,quest:null,requires:null,comment:`Печка. Тепло важнее красоты. Но я не говорила, что красота не важна.`},{key:`teapot`,name:`Чайник`,kind:`decor`,zone:`living`,asset:`teapot`,variants:!1,seller:`opossum_mom`,quest:{character:`opossum_mom`,game:`Настойки`,count:3},requires:`table`,comment:`Чайник от Мамы-Опоссум. Она просила только не давать его Еноту.`,skip_price:20,price:null}]},{id:2,title:`Чтобы было похоже на дом`,items:[{key:`rug_living`,name:`Ковёр в гостиную`,kind:`furniture`,zone:`living`,asset:`rug`,variants:!0,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Ковёр. Чтобы ходить тихо и падать мягко.`},{key:`armchair`,name:`Кресло`,kind:`furniture`,zone:`living`,asset:`armchair`,variants:!0,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Кресло для Паучка. Он будет в нём думать. Это надолго.`},{key:`teacups`,name:`Чашки`,kind:`decor`,zone:`living`,asset:`teacups`,variants:!1,price:15,seller:`raccoon`,quest:null,requires:`table`,comment:`Две чашки. Третью пусть Енот приносит свою.`},{key:`bedside`,name:`Тумбочка`,kind:`furniture`,zone:`bedroom`,asset:`bedside`,variants:!0,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Тумбочка. Надо же куда-то класть шляпу на ночь.`},{key:`candle`,name:`Свеча`,kind:`decor`,zone:`bedroom`,asset:`candle`,variants:!1,seller:`rat`,quest:{character:`rat`,game:`Кварто`,count:3},requires:`bedside`,comment:`Свеча от Крысы. Огарок она просит вернуть: для опыта.`,skip_price:25,price:null},{key:`wall_leaves`,name:`Обои в листик`,kind:`finish`,zone:null,asset:`wall_leaves`,variants:!1,price:70,seller:`raccoon`,quest:null,requires:null,comment:`Обои в листик. Спокойные. В этом доме должно быть хоть что-то спокойное.`}]},{id:3,title:`Порядок`,items:[{key:`wardrobe`,name:`Шкаф`,kind:`furniture`,zone:`bedroom`,asset:`wardrobe`,variants:!0,price:90,seller:`raccoon`,quest:null,requires:null,comment:`Шкаф. Проверь, нет ли в нём кого-нибудь. В этом доме бывает.`},{key:`cupboard`,name:`Буфет`,kind:`furniture`,zone:`living`,asset:`cupboard`,variants:!0,price:85,seller:`raccoon`,quest:null,requires:null,comment:`Буфет. Посуда должна стоять за стеклом и вызывать уважение.`},{key:`coat_rack`,name:`Вешалка`,kind:`furniture`,zone:`bedroom`,asset:`coat_rack`,variants:!0,price:55,seller:`raccoon`,quest:null,requires:null,comment:`Вешалка. Вещи на стуле – это не порядок, это начало конца.`},{key:`broom`,name:`Метла`,kind:`decor`,zone:`living`,asset:`broom`,variants:!1,price:20,seller:`raccoon`,quest:null,requires:null,comment:`Метла. Обычная. Летать на ней не надо.`},{key:`jam_jar`,name:`Варенье`,kind:`decor`,zone:`living`,asset:`jam_jar`,variants:!1,seller:`mouse`,quest:{character:`mouse`,game:`Три в ряд`,count:3},requires:`cupboard`,comment:`Варенье от Мышей. Черничное. Хвостом не трогать.`,skip_price:35,price:null},{key:`slippers`,name:`Тапочки`,kind:`decor`,zone:`bedroom`,asset:`slippers`,variants:!1,seller:`chernika`,quest:{character:`chernika`,game:`Солнце и луна`,count:3},requires:`bed`,comment:`Тапочки от Чернинки. Тёплые. Она понимает в этом толк.`,skip_price:35,price:null}]},{id:4,title:`Уют`,items:[{key:`sofa`,name:`Диван`,kind:`furniture`,zone:`living`,asset:`sofa`,variants:!0,price:135,seller:`raccoon`,quest:null,requires:null,comment:`Диван. Для гостей. Гости будут: я уже вижу, как Енот заглядывает.`},{key:`tea_table`,name:`Чайный столик`,kind:`furniture`,zone:`living`,asset:`tea_table`,variants:!0,price:80,seller:`raccoon`,quest:null,requires:null,comment:`Чайный столик. Чай не должен зависеть от того, свободен ли большой стол.`},{key:`rug_bedroom`,name:`Коврик у кровати`,kind:`furniture`,zone:`bedroom`,asset:`rug`,variants:!0,price:75,seller:`raccoon`,quest:null,requires:null,comment:`Коврик у кровати. Первый шаг утром должен быть приятным.`},{key:`lamp_bedroom`,name:`Лампа в спальню`,kind:`furniture`,zone:`bedroom`,asset:`lamp`,variants:!0,price:65,seller:`raccoon`,quest:null,requires:null,comment:`Вторая лампа. Читать в темноте вредно даже паукам.`},{key:`blanket_basket`,name:`Корзина с пледами`,kind:`decor`,zone:`bedroom`,asset:`blanket_basket`,variants:!1,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Корзина с пледами. Пледов много не бывает.`},{key:`flower_vase`,name:`Цветы`,kind:`decor`,zone:`living`,asset:`flower_vase`,variants:!1,seller:`cat`,quest:{character:`cat`,game:`Калах`,count:3},requires:`table`,comment:`Цветы от Котов. Не знаю, где они их взяли. Не спрашивай.`,skip_price:45,price:null},{key:`floor_dark`,name:`Тёмный пол`,kind:`finish`,zone:null,asset:`floor_dark`,variants:!1,price:120,seller:`raccoon`,quest:null,requires:null,comment:`Тёмный пол. На нём не видно крошек. Я сейчас не про себя.`}]},{id:5,title:`Для ума`,items:[{key:`bookshelf`,name:`Книжный шкаф`,kind:`furniture`,zone:`living`,asset:`bookshelf`,variants:!0,price:165,seller:`raccoon`,quest:null,requires:null,comment:`Книжный шкаф. Пустой он выглядит как упрёк.`},{key:`books`,name:`Книги`,kind:`decor`,zone:`living`,asset:`books`,variants:!1,price:50,seller:`raccoon`,quest:null,requires:`bookshelf`,comment:`Книги. Три. Начнём с малого.`},{key:`clock`,name:`Часы`,kind:`furniture`,zone:`living`,asset:`clock`,variants:!0,price:125,seller:`raccoon`,quest:null,requires:null,comment:`Часы. Чтобы знать, насколько мы опаздываем.`},{key:`globe`,name:`Глобус`,kind:`decor`,zone:`living`,asset:`globe`,variants:!1,seller:`bat`,quest:{character:`bat`,game:`Реверси`,count:3},requires:`bookshelf`,comment:`Глобус от Летучей мыши. Она отметила места, где не была. Он весь в отметках.`,skip_price:65,price:null},{key:`alarm_clock`,name:`Будильник`,kind:`decor`,zone:`bedroom`,asset:`alarm_clock`,variants:!1,seller:`roach_mid`,quest:{character:`roach_mid`,game:`Нарды`,count:5},requires:`bedside`,comment:`Будильник от Тараканчиков. Говорят, звонит честно.`,skip_price:55,price:null},{key:`chair2`,name:`Второй стул`,kind:`furniture`,zone:`living`,asset:`chair`,variants:!0,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Второй стул. Первый себя оправдал.`}]},{id:6,title:`Красота`,items:[{key:`dresser`,name:`Столик с зеркалом`,kind:`furniture`,zone:`bedroom`,asset:`dresser`,variants:!0,price:215,seller:`raccoon`,quest:null,requires:null,comment:`Столик с зеркалом. Корону надо надевать ровно.`},{key:`picture`,name:`Картина`,kind:`furniture`,zone:`living`,asset:`picture`,variants:!0,price:125,seller:`raccoon`,quest:null,requires:null,comment:`Картина. На стене должно быть что-то кроме стены.`},{key:`shelf`,name:`Полка`,kind:`furniture`,zone:`living`,asset:`shelf`,variants:!0,price:110,seller:`raccoon`,quest:null,requires:null,comment:`Полка. Для мелочей, которым пока не придумали места.`},{key:`fern`,name:`Папоротник`,kind:`decor`,zone:`living`,asset:`fern`,variants:!1,price:65,seller:`raccoon`,quest:null,requires:null,comment:`Папоротник. Поливать по четвергам. Я запишу.`},{key:`music_box`,name:`Музыкальная шкатулка`,kind:`decor`,zone:`bedroom`,asset:`music_box`,variants:!1,seller:`cat`,quest:{character:`cat`,game:`Судоку`,count:3},requires:`dresser`,comment:`Шкатулка от Котов. Играет одну мелодию. Зато свою.`,skip_price:80,price:null},{key:`wall_stripes`,name:`Обои в полоску`,kind:`finish`,zone:null,asset:`wall_stripes`,variants:!1,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Обои в полоску. Строго и нарядно. Как я.`}]},{id:7,title:`Запасы`,items:[{key:`chest`,name:`Сундук`,kind:`furniture`,zone:`bedroom`,asset:`chest`,variants:!0,price:215,seller:`raccoon`,quest:null,requires:null,comment:`Сундук. У всего, что некуда деть, должно быть место. Вот оно.`},{key:`apples`,name:`Яблоки`,kind:`decor`,zone:`living`,asset:`apples`,variants:!1,seller:`mouse`,quest:{character:`mouse`,game:`Три в ряд`,count:5},requires:`cupboard`,comment:`Яблоки от Мышей. Они пересчитаны, имей в виду.`,skip_price:70,price:null},{key:`watering_can`,name:`Лейка`,kind:`decor`,zone:`living`,asset:`watering_can`,variants:!1,seller:`mosquito`,quest:{character:`mosquito`,game:`Морской бой`,count:3},requires:null,comment:`Лейка от Комаров. Воду они набрали из ванны. Лиловую.`,skip_price:80,price:null},{key:`bedside2`,name:`Вторая тумбочка`,kind:`furniture`,zone:`bedroom`,asset:`bedside`,variants:!0,price:120,seller:`raccoon`,quest:null,requires:null,comment:`Вторая тумбочка. Симметрия успокаивает.`},{key:`table_lamp`,name:`Лампа с абажуром`,kind:`decor`,zone:`bedroom`,asset:`table_lamp`,variants:!1,price:100,seller:`raccoon`,quest:null,requires:`bedside2`,comment:`Лампа с абажуром. Свет должен быть мягким, а абажур – в цветочек.`},{key:`floor_checker`,name:`Плитка в клетку`,kind:`finish`,zone:null,asset:`floor_checker`,variants:!1,price:195,seller:`raccoon`,quest:null,requires:null,comment:`Плитка в клетку. Можно играть в шашки, не вставая.`}]},{id:8,title:`Для души`,items:[{key:`picture_bedroom`,name:`Картина в спальню`,kind:`furniture`,zone:`bedroom`,asset:`picture`,variants:!0,price:190,seller:`raccoon`,quest:null,requires:null,comment:`Ещё одна картина. Теперь это называется коллекция.`},{key:`shelf_bedroom`,name:`Полка в спальню`,kind:`furniture`,zone:`bedroom`,asset:`shelf`,variants:!0,price:170,seller:`raccoon`,quest:null,requires:null,comment:`Полка в спальню. Мелочей стало больше, чем я рассчитывала.`},{key:`yarn`,name:`Клубок`,kind:`decor`,zone:`bedroom`,asset:`yarn`,variants:!1,seller:`moth`,quest:{character:`moth`,game:`Лоскуты`,count:3},requires:null,comment:`Клубок от Моли. Она сказала: довяжете сами. Очень на неё похоже.`,skip_price:95,price:null},{key:`toy_horse`,name:`Деревянная лошадка`,kind:`decor`,zone:`bedroom`,asset:`toy_horse`,variants:!1,seller:`chernika`,quest:{character:`chernika`,game:`Солнце и луна`,count:5},requires:null,comment:`Лошадка от Чернинки. Говорит, это её портрет в молодости.`,skip_price:105,price:null},{key:`birdcage`,name:`Клетка`,kind:`decor`,zone:`living`,asset:`birdcage`,variants:!1,price:150,seller:`raccoon`,quest:null,requires:null,comment:`Клетка. Пустая и с открытой дверцей. Так и задумано.`},{key:`telescope`,name:`Телескоп`,kind:`decor`,zone:`living`,asset:`telescope`,variants:!1,seller:`raccoon`,quest:{character:`raccoon`,game:`Распутай созвездие`,count:5},requires:null,comment:`Телескоп от Енота. Этот он, по его словам, не брал, а нашёл.`,skip_price:170,price:null}]},{id:9,title:`Последние штрихи`,items:[{key:`wall_stars`,name:`Обои со звёздами`,kind:`finish`,zone:null,asset:`wall_stars`,variants:!1,price:340,seller:`raccoon`,quest:null,requires:null,comment:`Обои со звёздами. Чтобы потолок чердака не задавался.`},{key:`hat_stand`,name:`Подставка для шляпы`,kind:`decor`,zone:`bedroom`,asset:`hat_stand`,variants:!1,price:275,seller:`raccoon`,quest:null,requires:null,comment:`Подставка для шляпы. Паучок сказал, что она ему кого-то напоминает.`},{key:`cake`,name:`Торт`,kind:`decor`,zone:`living`,asset:`cake`,variants:!1,seller:`opossum_mom`,quest:{character:`opossum_mom`,game:`Настойки`,count:5},requires:`table`,comment:`Торт от Мамы-Опоссум. На всех. Наконец-то на всех.`,skip_price:135,price:null},{key:`crown_cushion`,name:`Подушка для короны`,kind:`decor`,zone:`bedroom`,asset:`crown_cushion`,variants:!1,price:455,seller:`raccoon`,quest:null,requires:`dresser`,comment:`Подушка для короны. Корона тоже должна отдыхать.`},{key:`photo_frame`,name:`Рамка для портрета`,kind:`decor`,zone:`bedroom`,asset:`photo_frame`,variants:!1,price:570,seller:`raccoon`,quest:null,requires:`dresser`,comment:`Рамка для портрета. Теперь у нас есть дом. Надо сфотографироваться.`}]}]},he={version:1,about:`Лавка Енота: необязательные диковинки (открывается после финала). Формат предметов – как в housewarming.json. kind = decor – свой предмет в комнате (zone: living / dining / bedroom / all – во всех зонах, у окна); kind = variant – другой вид уже существующего предмета (variant_of: ключи из списка), открывает ещё одну карточку в выборе вида. Задание: what = wins (победы) или games (партии); где – game (русское название игры), room (комната) или ничего (где угодно); difficulty – необязательно (easy / medium / hard). Задание открывает покупку.`,items:[{key:`bell`,name:`Колокольчик`,kind:`decor`,zone:`living`,asset:`bell`,price:100,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`birdhouse`,name:`Скворечник`,kind:`decor`,zone:`dining`,asset:`birdhouse`,price:100,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`samovar`,name:`Самовар`,kind:`decor`,zone:`dining`,asset:`samovar`,price:100,seller:`raccoon`,quest:{character:`cutlet`,what:`games`,count:15},requires:`table`,comment:``},{key:`hand_mirror`,name:`Зеркальце`,kind:`decor`,zone:`bedroom`,asset:`hand_mirror`,price:100,seller:`raccoon`,quest:null,requires:`dresser`,comment:``},{key:`gramophone`,name:`Патефон`,kind:`decor`,zone:`living`,asset:`gramophone`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`aquarium`,name:`Аквариум`,kind:`decor`,zone:`living`,asset:`aquarium`,price:130,seller:`raccoon`,quest:{character:`mosquito`,what:`wins`,count:7,room:`bathroom`},requires:null,comment:``},{key:`window_round_stained`,name:`Витраж`,kind:`decor`,zone:`dining`,asset:`window_round_stained`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`pickle_barrel`,name:`Бочка с соленьями`,kind:`decor`,zone:`dining`,asset:`pickle_barrel`,price:160,seller:`raccoon`,quest:{character:`mouse`,what:`wins`,count:10,room:`cellar`},requires:null,comment:``},{key:`loom`,name:`Ткацкий станок`,kind:`decor`,zone:`living`,asset:`loom`,price:160,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`barrel_organ`,name:`Шарманка`,kind:`decor`,zone:`living`,asset:`barrel_organ`,price:160,seller:`raccoon`,quest:{character:`raccoon`,what:`wins`,count:10,room:`attic`},requires:null,comment:``},{key:`hammock`,name:`Гамак`,kind:`decor`,zone:`dining`,asset:`hammock`,price:160,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`piano`,name:`Пианино`,kind:`decor`,zone:`living`,asset:`piano`,price:200,seller:`raccoon`,quest:{character:`cat`,what:`wins`,count:30},requires:null,comment:``},{key:`alchemy_table`,name:`Алхимический стол`,kind:`decor`,zone:`dining`,asset:`alchemy_table`,price:200,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`library_ladder`,name:`Библиотечная лестница`,kind:`decor`,zone:`living`,asset:`library_ladder`,price:200,seller:`raccoon`,quest:null,requires:`bookshelf`,comment:``},{key:`bottle_rack`,name:`Стеллаж для бутылок`,kind:`decor`,zone:`dining`,asset:`bottle_rack`,price:200,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`throne`,name:`Трон для принцессы Котлетки`,kind:`decor`,zone:`bedroom`,asset:`throne`,price:250,seller:`raccoon`,quest:{character:`cutlet`,what:`wins`,count:60},requires:null,comment:``},{key:`web_hammock`,name:`Паутинный гамак`,kind:`decor`,zone:`bedroom`,asset:`web_hammock`,price:250,seller:`raccoon`,quest:{character:`spider`,what:`games`,count:100},requires:null,comment:``},{key:`candle_lantern`,name:`Фонарь со свечой`,kind:`variant`,variant_of:[`candle`],asset:`candle_lantern`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`teacups_daisy`,name:`Кружка с ромашками`,kind:`variant`,variant_of:[`teacups`],asset:`teacups_daisy`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`fern_geranium`,name:`Горшок с геранью`,kind:`variant`,variant_of:[`fern`],asset:`fern_geranium`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`crown_cushion_dumka`,name:`Подушка-думка`,kind:`variant`,variant_of:[`crown_cushion`],asset:`crown_cushion_dumka`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`crown_cushion_folk`,name:`Вышитая подушка с короной`,kind:`variant`,variant_of:[`crown_cushion`],asset:`crown_cushion_folk`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`broom_new`,name:`Новая метла`,kind:`variant`,variant_of:[`broom`],asset:`broom_new`,price:60,seller:`raccoon`,quest:{character:`moth`,what:`games`,count:5},requires:null,comment:``},{key:`teapot_brown`,name:`Чайник в грелке`,kind:`variant`,variant_of:[`teapot`],asset:`teapot_brown`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`clock_cuckoo`,name:`Часы с кукушкой`,kind:`variant`,variant_of:[`clock`],asset:`clock_cuckoo`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`picture_cat`,name:`Картина с котом`,kind:`variant`,variant_of:[`picture`,`picture_bedroom`],asset:`picture_cat`,price:60,seller:`raccoon`,quest:{character:`cat`,what:`wins`,count:5,room:`living`},requires:null,comment:``},{key:`blanket_basket_wicker`,name:`Плетёная корзинка`,kind:`variant`,variant_of:[`blanket_basket`],asset:`blanket_basket_wicker`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`blanket_basket_quilt`,name:`Стопка одеял`,kind:`variant`,variant_of:[`blanket_basket`],asset:`blanket_basket_quilt`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`rug_doormat`,name:`Коврик у двери`,kind:`variant`,variant_of:[`rug_living`,`rug_bedroom`],asset:`rug_doormat`,price:60,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`rug_striped`,name:`Пёстрый половик`,kind:`variant`,variant_of:[`rug_living`,`rug_bedroom`],asset:`rug_striped`,price:100,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`rug_runner`,name:`Полосатая дорожка`,kind:`variant`,variant_of:[`rug_living`,`rug_bedroom`],asset:`rug_runner`,price:100,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`rug_oval`,name:`Вязаный коврик`,kind:`variant`,variant_of:[`rug_living`,`rug_bedroom`],asset:`rug_oval`,price:100,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`lampshade`,name:`Абажур`,kind:`variant`,variant_of:[`lamp_living`,`lamp_bedroom`],asset:`lampshade`,price:100,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`wall_shelf`,name:`Полочка`,kind:`variant`,variant_of:[`shelf`,`shelf_bedroom`],asset:`wall_shelf`,price:100,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`jam_jar_trio`,name:`Банки с вареньем`,kind:`variant`,variant_of:[`jam_jar`],asset:`jam_jar_trio`,price:100,seller:`raccoon`,quest:{character:`opossum_mom`,what:`wins`,count:5,room:`kitchen`},requires:null,comment:``},{key:`chair_stool`,name:`Табуретка`,kind:`variant`,variant_of:[`chair`,`chair2`],asset:`chair_stool`,price:100,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`armchair_rocking`,name:`Кресло-качалка`,kind:`variant`,variant_of:[`armchair`],asset:`armchair_rocking`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`bookshelf_carved`,name:`Книжный шкаф`,kind:`variant`,variant_of:[`bookshelf`],asset:`bookshelf_carved`,price:130,seller:`raccoon`,quest:{character:`bat`,what:`wins`,count:7,room:`library`},requires:null,comment:``},{key:`bookshelf_glass`,name:`Шкаф со стёклами`,kind:`variant`,variant_of:[`bookshelf`],asset:`bookshelf_glass`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`quilt_stars`,name:`Лоскутное одеяло`,kind:`variant`,variant_of:[`blanket_basket`],asset:`quilt_stars`,price:130,seller:`raccoon`,quest:{character:`chernika`,what:`wins`,count:7,room:`bedroom`},requires:null,comment:``},{key:`chest_alt`,name:`Сундук`,kind:`variant`,variant_of:[`chest`],asset:`chest_alt`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`globe_antique`,name:`Глобус`,kind:`variant`,variant_of:[`globe`],asset:`globe_antique`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`tablecloth`,name:`Скатерть с вышивкой`,kind:`variant`,variant_of:[`table`],asset:`tablecloth`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`lamp_chandelier`,name:`Люстра со свечами`,kind:`variant`,variant_of:[`lamp_living`,`lamp_bedroom`],asset:`lamp_chandelier`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`clock_wall`,name:`Ходики`,kind:`variant`,variant_of:[`clock`],asset:`clock_wall`,price:130,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`sofa_small`,name:`Диванчик`,kind:`variant`,variant_of:[`sofa`],asset:`sofa_small`,price:160,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`sofa_striped`,name:`Полосатый диван`,kind:`variant`,variant_of:[`sofa`],asset:`sofa_striped`,price:160,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`wardrobe_carved`,name:`Платяной шкаф`,kind:`variant`,variant_of:[`wardrobe`],asset:`wardrobe_carved`,price:160,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`wardrobe_mirror`,name:`Шкаф с зеркалом`,kind:`variant`,variant_of:[`wardrobe`],asset:`wardrobe_mirror`,price:160,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`telescope_spyglass`,name:`Подзорная труба`,kind:`variant`,variant_of:[`telescope`],asset:`telescope_spyglass`,price:160,seller:`raccoon`,quest:{character:`rat`,what:`wins`,count:10,room:`laboratory`},requires:null,comment:``},{key:`cupboard_painted`,name:`Белый буфет`,kind:`variant`,variant_of:[`cupboard`],asset:`cupboard_painted`,price:160,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`cupboard_folk`,name:`Расписной буфет`,kind:`variant`,variant_of:[`cupboard`],asset:`cupboard_folk`,price:160,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`stove_fireplace`,name:`Камин`,kind:`variant`,variant_of:[`stove`],asset:`stove_fireplace`,price:200,seller:`raccoon`,quest:null,requires:null,comment:``},{key:`stove_russian`,name:`Русская печь`,kind:`variant`,variant_of:[`stove`],asset:`stove_russian`,price:200,seller:`raccoon`,quest:{character:`opossum_mom`,what:`wins`,count:15,room:`kitchen`},requires:null,comment:``},{key:`bed_canopy`,name:`Кровать с балдахином`,kind:`variant`,variant_of:[`bed`],asset:`bed_canopy`,price:200,seller:`raccoon`,quest:null,requires:null,comment:``}]},ge=[`easy`,`medium`,`hard`];function _e(e,t,n,r=t){return e.gender===`f`?n:e.gender===`pl`?r:t}function ve(e,t){let n=t?.[e.id];return e.choices.some(e=>e.value===n)?n:e.choices[0]?.value??``}function ye(e){return e}var be={images:JSON.parse(`{"start.background":"img/start/background.jpg","ui.rules":"img/ui/rules.webp","ui.giveUp":"img/ui/give-up.webp","ui.settings":"img/ui/settings.webp","ui.turn":"img/ui/turn.svg","ui.back":"img/ui/back.webp","ui.play":"img/ui/play.svg","ui.ok":"img/ui/ok.svg","ui.next":"img/ui/next.webp","ui.skip":"img/ui/skip.webp","ui.soundOn":"img/ui/sound-on.webp","ui.soundOff":"img/ui/sound-off.webp","ui.journal":"img/ui/journal.webp","ui.replay":"img/ui/replay.webp","ui.door":"img/ui/door.webp","ui.pencil":"img/ui/pencil.svg","ui.eraser":"img/ui/eraser.svg","ui.undo":"img/ui/back.webp","ui.wood":"img/ui/wood.jpg","house.attic":"img/house/attic.png","house.atticTower":"img/house/attic-tower.png","hw.wall.plaster":"img/housewarming/wall-plaster.jpg","hw.wall.leaves":"img/housewarming/wall-leaves.jpg","hw.wall.stars":"img/housewarming/wall-stars.jpg","hw.stairs":"img/housewarming/stairs-top.webp","hw.wall.stripes":"img/housewarming/wall-stripes.jpg","hw.floor.honey":"img/housewarming/floor-honey.jpg","hw.floor.dark":"img/housewarming/floor-dark.jpg","hw.floor.checker":"img/housewarming/floor-checker.jpg","hw.window":"img/housewarming/window-round.png","hw.post":"img/housewarming/post.png","hw.beam":"img/housewarming/beam.png","hw.baseboard":"img/housewarming/baseboard.png","hw.rafter":"img/housewarming/rafter-left.png","hw.f.armchair.rustic":"img/housewarming/furniture/armchair-rustic.webp","hw.f.armchair.royal":"img/housewarming/furniture/armchair-royal.webp","hw.f.armchair.scrap":"img/housewarming/furniture/armchair-scrap.webp","hw.f.bed.rustic":"img/housewarming/furniture/bed-rustic.webp","hw.f.bed.royal":"img/housewarming/furniture/bed-royal.webp","hw.f.bed.scrap":"img/housewarming/furniture/bed-scrap.webp","hw.f.bedside.rustic":"img/housewarming/furniture/bedside-rustic.webp","hw.f.bedside.royal":"img/housewarming/furniture/bedside-royal.webp","hw.f.bedside.scrap":"img/housewarming/furniture/bedside-scrap.webp","hw.f.bookshelf.rustic":"img/housewarming/furniture/bookshelf-rustic.webp","hw.f.bookshelf.royal":"img/housewarming/furniture/bookshelf-royal.webp","hw.f.bookshelf.scrap":"img/housewarming/furniture/bookshelf-scrap.webp","hw.f.chair.rustic":"img/housewarming/furniture/chair-rustic.webp","hw.f.chair.royal":"img/housewarming/furniture/chair-royal.webp","hw.f.chair.scrap":"img/housewarming/furniture/chair-scrap.webp","hw.f.tea_table.rustic":"img/housewarming/furniture/tea-table-rustic.webp","hw.f.tea_table.royal":"img/housewarming/furniture/tea-table-royal.webp","hw.f.tea_table.scrap":"img/housewarming/furniture/tea-table-scrap.webp","hw.f.chest.rustic":"img/housewarming/furniture/chest-rustic.webp","hw.f.chest.royal":"img/housewarming/furniture/chest-royal.webp","hw.f.chest.scrap":"img/housewarming/furniture/chest-scrap.webp","hw.f.clock.rustic":"img/housewarming/furniture/clock-rustic.webp","hw.f.clock.royal":"img/housewarming/furniture/clock-royal.webp","hw.f.clock.scrap":"img/housewarming/furniture/clock-scrap.webp","hw.f.coat_rack.rustic":"img/housewarming/furniture/coat-rack-rustic.webp","hw.f.coat_rack.royal":"img/housewarming/furniture/coat-rack-royal.webp","hw.f.coat_rack.scrap":"img/housewarming/furniture/coat-rack-scrap.webp","hw.f.cupboard.rustic":"img/housewarming/furniture/cupboard-rustic.webp","hw.f.cupboard.royal":"img/housewarming/furniture/cupboard-royal.webp","hw.f.cupboard.scrap":"img/housewarming/furniture/cupboard-scrap.webp","hw.f.dresser.rustic":"img/housewarming/furniture/dresser-rustic.webp","hw.f.dresser.royal":"img/housewarming/furniture/dresser-royal.webp","hw.f.dresser.scrap":"img/housewarming/furniture/dresser-scrap.webp","hw.f.lamp.rustic":"img/housewarming/furniture/lamp-rustic.webp","hw.f.lamp.royal":"img/housewarming/furniture/lamp-royal.webp","hw.f.lamp.scrap":"img/housewarming/furniture/lamp-scrap.webp","hw.f.picture.rustic":"img/housewarming/furniture/picture-rustic.webp","hw.f.picture.royal":"img/housewarming/furniture/picture-royal.webp","hw.f.picture.scrap":"img/housewarming/furniture/picture-scrap.webp","hw.f.rug.rustic":"img/housewarming/furniture/rug-rustic.webp","hw.f.rug.royal":"img/housewarming/furniture/rug-royal.webp","hw.f.rug.scrap":"img/housewarming/furniture/rug-scrap.webp","hw.f.shelf.rustic":"img/housewarming/furniture/shelf-rustic.webp","hw.f.shelf.royal":"img/housewarming/furniture/shelf-royal.webp","hw.f.shelf.scrap":"img/housewarming/furniture/shelf-scrap.webp","hw.f.sofa.rustic":"img/housewarming/furniture/sofa-rustic.webp","hw.f.sofa.royal":"img/housewarming/furniture/sofa-royal.webp","hw.f.sofa.scrap":"img/housewarming/furniture/sofa-scrap.webp","hw.f.stove.rustic":"img/housewarming/furniture/stove-rustic.webp","hw.f.stove.royal":"img/housewarming/furniture/stove-royal.webp","hw.f.stove.scrap":"img/housewarming/furniture/stove-scrap.webp","hw.f.table.rustic":"img/housewarming/furniture/table-rustic.webp","hw.f.table.royal":"img/housewarming/furniture/table-royal.webp","hw.f.table.scrap":"img/housewarming/furniture/table-scrap.webp","hw.f.wardrobe.rustic":"img/housewarming/furniture/wardrobe-rustic.webp","hw.f.wardrobe.royal":"img/housewarming/furniture/wardrobe-royal.webp","hw.f.wardrobe.scrap":"img/housewarming/furniture/wardrobe-scrap.webp","hw.s.alarm_clock":"img/housewarming/small/alarm-clock.webp","hw.s.apples":"img/housewarming/small/apples.webp","hw.s.birdcage":"img/housewarming/small/birdcage.webp","hw.s.blanket_basket":"img/housewarming/small/blanket-basket.webp","hw.s.books":"img/housewarming/small/books.webp","hw.s.broom":"img/housewarming/small/broom.webp","hw.s.cake":"img/housewarming/small/cake.webp","hw.s.candle":"img/housewarming/small/candle.webp","hw.s.crown_cushion":"img/housewarming/small/crown-cushion.webp","hw.s.fern":"img/housewarming/small/fern.webp","hw.s.flower_vase":"img/housewarming/small/flower-vase.webp","hw.s.globe":"img/housewarming/small/globe.webp","hw.s.hat_stand":"img/housewarming/small/hat-stand.webp","hw.s.jam_jar":"img/housewarming/small/jam-jar.webp","hw.s.music_box":"img/housewarming/small/music-box.webp","hw.s.photo_frame":"img/housewarming/small/photo-frame.webp","hw.s.slippers":"img/housewarming/small/slippers.webp","hw.s.table_lamp":"img/housewarming/small/table-lamp.webp","hw.s.teacups":"img/housewarming/small/teacups.webp","hw.s.teapot":"img/housewarming/small/teapot.webp","hw.s.telescope":"img/housewarming/small/telescope.webp","hw.s.toy_horse":"img/housewarming/small/toy-horse.webp","hw.s.watering_can":"img/housewarming/small/watering-can.webp","hw.s.yarn":"img/housewarming/small/yarn.webp","house.laboratory":"img/house/laboratory.jpg","house.bedroom":"img/house/bedroom.jpg","house.living":"img/house/living.jpg","house.library":"img/house/library.jpg","house.bathroom":"img/house/bathroom.jpg","house.kitchen":"img/house/kitchen.jpg","house.cellar":"img/house/cellar.jpg","house.wallLeft":"img/house/wall-left.png","house.wallRight":"img/house/wall-right.png","ui.fireflyJar":"img/ui/firefly-jar.png","ui.fireflyJarEmpty":"img/ui/firefly-jar-empty.png","ui.fireflyOne":"img/ui/firefly-one.png","ui.fireflyThree":"img/ui/firefly-three.png","ui.lock":"img/ui/lock-closed.webp","room.laboratory":"img/rooms/laboratory.jpg","room.bedroom":"img/rooms/bedroom.jpg","room.living":"img/rooms/living.jpg","room.cellar":"img/rooms/cellar.jpg","room.attic":"img/rooms/attic.jpg","room.library":"img/rooms/library.jpg","room.bathroom":"img/rooms/bathroom.jpg","room.kitchen":"img/rooms/kitchen.jpg","char.spider":"img/characters/spider/calm.png","char.spider.calm":"img/characters/spider/calm.png","char.spider.surprised":"img/characters/spider/surprised.png","char.spider.puzzled":"img/characters/spider/puzzled.png","char.spider.happy":"img/characters/spider/happy.png","char.spider.sad":"img/characters/spider/sad.png","char.spider.determined":"img/characters/spider/determined.png","char.spider.tender":"img/characters/spider/tender.png","char.kotletka":"img/characters/kotletka/calm.png","char.kotletka.calm":"img/characters/kotletka/calm.png","char.kotletka.happy":"img/characters/kotletka/happy.png","char.kotletka.surprised":"img/characters/kotletka/surprised.png","char.kotletka.sad":"img/characters/kotletka/sad.png","char.raccoon":"img/characters/raccoon/sly.png","char.raccoon.sly":"img/characters/raccoon/sly.png","char.raccoon.happy":"img/characters/raccoon/happy.png","char.raccoon.surprised":"img/characters/raccoon/surprised.png","char.raccoon.upset":"img/characters/raccoon/upset.png","char.witch":"img/characters/witch.svg","char.mice":"img/characters/mice/calm.png","char.mice.calm":"img/characters/mice/calm.png","char.mice.happy":"img/characters/mice/happy.png","char.mice.sad":"img/characters/mice/sad.png","char.mice.surprised":"img/characters/mice/surprised.png","char.toad":"img/characters/toad.svg","char.owl":"img/characters/owl.svg","char.frog":"img/characters/frog.svg","char.bat":"img/characters/bat/calm.png","char.bat.angry":"img/characters/bat/angry.png","char.bat.calm":"img/characters/bat/calm.png","char.bat.grumpy":"img/characters/bat/grumpy.png","char.bat.happy":"img/characters/bat/happy.png","char.bat.sad":"img/characters/bat/sad.png","char.bat.sly":"img/characters/bat/sly.png","char.bat.surprised":"img/characters/bat/surprised.png","char.bat.thinking":"img/characters/bat/thinking.png","char.bookworm":"img/characters/bookworm.svg","char.ghost":"img/characters/ghost.svg","char.mosquitoes":"img/characters/mosquitoes/calm.png","char.mosquitoes.angry":"img/characters/mosquitoes/angry.png","char.mosquitoes.calm":"img/characters/mosquitoes/calm.png","char.mosquitoes.grumpy":"img/characters/mosquitoes/grumpy.png","char.mosquitoes.happy":"img/characters/mosquitoes/happy.png","char.mosquitoes.sad":"img/characters/mosquitoes/sad.png","char.mosquitoes.sly":"img/characters/mosquitoes/sly.png","char.mosquitoes.surprised":"img/characters/mosquitoes/surprised.png","char.mosquitoes.thinking":"img/characters/mosquitoes/thinking.png","char.chernika":"img/characters/chernika/tender.png","char.rat":"img/characters/rat/calm.png","char.rat.calm":"img/characters/rat/calm.png","char.rat.happy":"img/characters/rat/happy.png","char.rat.sad":"img/characters/rat/sad.png","char.rat.surprised":"img/characters/rat/surprised.png","char.opossumMom":"img/characters/opossumMom/calm.png","char.opossumMom.calm":"img/characters/opossumMom/calm.png","char.opossumMom.happy":"img/characters/opossumMom/happy.png","char.opossumMom.sad":"img/characters/opossumMom/sad.png","char.opossumMom.surprised":"img/characters/opossumMom/surprised.png","char.moth":"img/characters/moth/calm.png","char.moth.calm":"img/characters/moth/calm.png","char.moth.happy":"img/characters/moth/happy.png","char.moth.sad":"img/characters/moth/sad.png","char.moth.surprised":"img/characters/moth/surprised.png","char.roachYoung":"img/characters/roachYoung/calm.png","char.roachYoung.calm":"img/characters/roachYoung/calm.png","char.roachYoung.happy":"img/characters/roachYoung/happy.png","char.roachYoung.sly":"img/characters/roachYoung/sly.png","char.roachYoung.grumpy":"img/characters/roachYoung/grumpy.png","char.roachYoung.thinking":"img/characters/roachYoung/thinking.png","char.roachYoung.surprised":"img/characters/roachYoung/surprised.png","char.roachYoung.sad":"img/characters/roachYoung/sad.png","char.roachYoung.angry":"img/characters/roachYoung/angry.png","char.roachOld":"img/characters/roachOld/calm.png","char.roachOld.calm":"img/characters/roachOld/calm.png","char.roachOld.happy":"img/characters/roachOld/happy.png","char.roachOld.sly":"img/characters/roachOld/sly.png","char.roachOld.grumpy":"img/characters/roachOld/grumpy.png","char.roachOld.thinking":"img/characters/roachOld/thinking.png","char.roachOld.surprised":"img/characters/roachOld/surprised.png","char.roachOld.sad":"img/characters/roachOld/sad.png","char.roachOld.angry":"img/characters/roachOld/angry.png","char.roachMedium":"img/characters/roachMedium/calm.png","char.roachMedium.calm":"img/characters/roachMedium/calm.png","char.roachMedium.happy":"img/characters/roachMedium/happy.png","char.roachMedium.sly":"img/characters/roachMedium/sly.png","char.roachMedium.grumpy":"img/characters/roachMedium/grumpy.png","char.roachMedium.doubtful":"img/characters/roachMedium/doubtful.png","char.roachMedium.surprised":"img/characters/roachMedium/surprised.png","char.roachMedium.sad":"img/characters/roachMedium/sad.png","char.roachMedium.angry":"img/characters/roachMedium/angry.png","story.prologue.1":"img/story/prologue-1.svg","story.prologue.tea":"img/story/prologue-tea.jpg","story.prologue.dark":"img/story/prologue-dark.jpg","story.prologue.tail":"img/story/prologue-tail.jpg","story.prologue.cup":"img/story/prologue-cup.jpg","story.prologue.2":"img/story/prologue-2.svg","story.prologue.3":"img/story/prologue-3.svg","story.ch07.1":"img/story/ch07-1.svg","story.ch07.attic":"img/story/ch07-attic.jpg","story.ch07.ending":"img/story/ch07-ending.jpg","journal.trace_tail":"img/journal/trace-tail.png","journal.sign_ribbon":"img/journal/sign-ribbon.png","journal.trace_pie":"img/journal/trace-pie.png","journal.sign_flour":"img/journal/sign-flour.png","journal.trace_jam":"img/journal/trace-jam.png","journal.sign_crumbs":"img/journal/sign-crumbs.png","journal.trace_bath":"img/journal/trace-bath.png","journal.sign_mirror":"img/journal/sign-mirror.png","journal.trace_pillow":"img/journal/trace-pillow.png","journal.sign_brooch":"img/journal/sign-brooch.png","journal.trace_candles":"img/journal/trace-candles.png","journal.sign_note":"img/journal/sign-note.png","journal.trace_book":"img/journal/trace-book.png","journal.sign_bookmark":"img/journal/sign-bookmark.png","match3.strawberry":"img/match3/strawberry.png","match3.blueberry":"img/match3/blueberry.png","match3.cheese":"img/match3/cheese.png","match3.pickles":"img/match3/pickles.png","match3.jam":"img/match3/jam.png","match3.hazelnut":"img/match3/hazelnut.png","match3.lantern":"img/match3/lantern.png","hw.v.armchair_rocking":"img/housewarming/shop/armchair-rocking.webp","hw.v.bed_canopy":"img/housewarming/shop/bed-canopy.webp","hw.v.stove_fireplace":"img/housewarming/shop/stove-fireplace.webp","hw.v.stove_russian":"img/housewarming/shop/stove-russian.webp","hw.v.chair_stool":"img/housewarming/shop/chair-stool.webp","hw.v.lamp_chandelier":"img/housewarming/shop/lamp-chandelier.webp","hw.v.clock_cuckoo":"img/housewarming/shop/clock-cuckoo.webp","hw.v.clock_wall":"img/housewarming/shop/clock-wall.webp","hw.v.picture_cat":"img/housewarming/shop/picture-cat.webp","hw.v.teacups_daisy":"img/housewarming/shop/teacups-daisy.webp","hw.v.fern_geranium":"img/housewarming/shop/fern-geranium.webp","hw.v.blanket_basket_wicker":"img/housewarming/shop/blanket-basket-wicker.webp","hw.s.gramophone":"img/housewarming/shop/gramophone.webp","hw.s.aquarium":"img/housewarming/shop/aquarium.webp","hw.s.piano":"img/housewarming/shop/piano.webp","hw.s.barrel_organ":"img/housewarming/shop/barrel-organ.webp","hw.s.hand_mirror":"img/housewarming/shop/hand-mirror.webp","hw.s.throne":"img/housewarming/shop/throne.webp","hw.s.web_hammock":"img/housewarming/shop/web-hammock.webp","hw.s.library_ladder":"img/housewarming/shop/library-ladder.webp","hw.s.alchemy_table":"img/housewarming/shop/alchemy-table.webp","hw.v.lampshade":"img/housewarming/shop/lampshade.svg","hw.v.wall_shelf":"img/housewarming/shop/wall-shelf.svg","hw.v.chest_alt":"img/housewarming/shop/chest-alt.svg","hw.v.tablecloth":"img/housewarming/shop/tablecloth.svg","hw.s.samovar":"img/housewarming/shop/samovar.webp","hw.s.pickle_barrel":"img/housewarming/shop/pickle-barrel.webp","hw.s.bottle_rack":"img/housewarming/shop/bottle-rack.webp","hw.s.bell":"img/housewarming/shop/bell.webp","hw.s.birdhouse":"img/housewarming/shop/birdhouse.svg","hw.s.loom":"img/housewarming/shop/loom.svg","hw.s.hammock":"img/housewarming/shop/hammock.svg","char.catElder.angry":"img/characters/catElder/angry.png","char.catElder.calm":"img/characters/catElder/calm.png","char.catElder.grumpy":"img/characters/catElder/grumpy.png","char.catElder.happy":"img/characters/catElder/happy.png","char.catElder.sad":"img/characters/catElder/sad.png","char.catElder.sly":"img/characters/catElder/sly.png","char.catElder.surprised":"img/characters/catElder/surprised.png","char.catElder.thinking":"img/characters/catElder/thinking.png","char.catElder":"img/characters/catElder/calm.png","char.catYoung.angry":"img/characters/catYoung/angry.png","char.catYoung.calm":"img/characters/catYoung/calm.png","char.catYoung.grumpy":"img/characters/catYoung/grumpy.png","char.catYoung.happy":"img/characters/catYoung/happy.png","char.catYoung.sad":"img/characters/catYoung/sad.png","char.catYoung.sly":"img/characters/catYoung/sly.png","char.catYoung.surprised":"img/characters/catYoung/surprised.png","char.catYoung.thinking":"img/characters/catYoung/thinking.png","char.catYoung":"img/characters/catYoung/calm.png","table.felt":"img/games/felt-green.jpg","char.cat":"img/characters/cat/calm.png","char.cat.calm":"img/characters/cat/calm.png","char.cat.happy":"img/characters/cat/happy.png","char.cat.surprised":"img/characters/cat/surprised.png","char.cat.sad":"img/characters/cat/sad.png","hw.s.window_round_stained":"img/housewarming/shop/window-round-stained.webp","hw.v.candle_lantern":"img/housewarming/shop/candle-lantern.webp","hw.v.crown_cushion_dumka":"img/housewarming/shop/crown-cushion-dumka.webp","hw.v.crown_cushion_folk":"img/housewarming/shop/crown-cushion-folk.webp","hw.v.broom_new":"img/housewarming/shop/broom-new.webp","hw.v.teapot_brown":"img/housewarming/shop/teapot-brown.webp","hw.v.blanket_basket_quilt":"img/housewarming/shop/blanket-basket-quilt.webp","hw.v.rug_doormat":"img/housewarming/shop/rug-doormat.webp","hw.v.rug_striped":"img/housewarming/shop/rug-striped.webp","hw.v.rug_runner":"img/housewarming/shop/rug-runner.webp","hw.v.rug_oval":"img/housewarming/shop/rug-oval.webp","hw.v.jam_jar_trio":"img/housewarming/shop/jam-jar-trio.webp","hw.v.bookshelf_carved":"img/housewarming/shop/bookshelf-carved.webp","hw.v.bookshelf_glass":"img/housewarming/shop/bookshelf-glass.webp","hw.v.quilt_stars":"img/housewarming/shop/quilt-stars.webp","hw.v.globe_antique":"img/housewarming/shop/globe-antique.webp","hw.v.sofa_small":"img/housewarming/shop/sofa-small.webp","hw.v.sofa_striped":"img/housewarming/shop/sofa-striped.webp","hw.v.wardrobe_carved":"img/housewarming/shop/wardrobe-carved.webp","hw.v.wardrobe_mirror":"img/housewarming/shop/wardrobe-mirror.webp","hw.v.telescope_spyglass":"img/housewarming/shop/telescope-spyglass.webp","hw.v.cupboard_painted":"img/housewarming/shop/cupboard-painted.webp","hw.v.cupboard_folk":"img/housewarming/shop/cupboard-folk.webp","piece.die_1":"img/pieces/die-1.webp","piece.die_2":"img/pieces/die-2.webp","piece.die_3":"img/pieces/die-3.webp","piece.die_4":"img/pieces/die-4.webp","piece.die_5":"img/pieces/die-5.webp","piece.die_6":"img/pieces/die-6.webp","piece.duck":"img/pieces/duck.webp","piece.mark_cross":"img/pieces/mark-cross.webp","piece.mark_drop":"img/pieces/mark-drop.webp","piece.marker_hit":"img/pieces/marker-hit.webp","piece.marker_miss":"img/pieces/marker-miss.webp","piece.moon":"img/pieces/moon.webp","piece.orb_blue":"img/pieces/orb-blue.webp","piece.orb_green":"img/pieces/orb-green.webp","piece.orb_indigo":"img/pieces/orb-indigo.webp","piece.orb_orange":"img/pieces/orb-orange.webp","piece.orb_pearl":"img/pieces/orb-pearl.webp","piece.orb_red":"img/pieces/orb-red.webp","piece.orb_yellow":"img/pieces/orb-yellow.webp","piece.piece_dark_plain":"img/pieces/piece-dark-plain.webp","piece.piece_light_plain":"img/pieces/piece-light-plain.webp","piece.quarto_dark_round_large_hole":"img/pieces/quarto-dark-round-large-hole.webp","piece.quarto_dark_round_large_solid":"img/pieces/quarto-dark-round-large-solid.webp","piece.quarto_dark_round_small_hole":"img/pieces/quarto-dark-round-small-hole.webp","piece.quarto_dark_round_small_solid":"img/pieces/quarto-dark-round-small-solid.webp","piece.quarto_dark_square_large_hole":"img/pieces/quarto-dark-square-large-hole.webp","piece.quarto_dark_square_large_solid":"img/pieces/quarto-dark-square-large-solid.webp","piece.quarto_dark_square_small_hole":"img/pieces/quarto-dark-square-small-hole.webp","piece.quarto_dark_square_small_solid":"img/pieces/quarto-dark-square-small-solid.webp","piece.quarto_light_round_large_hole":"img/pieces/quarto-light-round-large-hole.webp","piece.quarto_light_round_large_solid":"img/pieces/quarto-light-round-large-solid.webp","piece.quarto_light_round_small_hole":"img/pieces/quarto-light-round-small-hole.webp","piece.quarto_light_round_small_solid":"img/pieces/quarto-light-round-small-solid.webp","piece.quarto_light_square_large_hole":"img/pieces/quarto-light-square-large-hole.webp","piece.quarto_light_square_large_solid":"img/pieces/quarto-light-square-large-solid.webp","piece.quarto_light_square_small_hole":"img/pieces/quarto-light-square-small-hole.webp","piece.quarto_light_square_small_solid":"img/pieces/quarto-light-square-small-solid.webp","piece.queen":"img/pieces/queen.webp","piece.queen_conflict":"img/pieces/queen-conflict.webp","piece.reversi_dark":"img/pieces/reversi-dark.webp","piece.reversi_dark_face":"img/pieces/reversi-dark-face.webp","piece.reversi_light":"img/pieces/reversi-light.webp","piece.reversi_light_face":"img/pieces/reversi-light-face.webp","piece.ship_1":"img/pieces/ship-1.webp","piece.ship_2":"img/pieces/ship-2.webp","piece.ship_3":"img/pieces/ship-3.webp","piece.ship_4":"img/pieces/ship-4.webp","piece.soap":"img/pieces/soap.webp","piece.sparkle":"img/pieces/sparkle.webp","piece.star_glow":"img/pieces/star-glow.webp","piece.star_selected":"img/pieces/star-selected.webp","piece.star_silver":"img/pieces/star-silver.webp","piece.star_small":"img/pieces/star-small.webp","piece.stone_amber":"img/pieces/stone-amber.webp","piece.stone_blue":"img/pieces/stone-blue.webp","piece.stone_brown":"img/pieces/stone-brown.webp","piece.stone_cream":"img/pieces/stone-cream.webp","piece.stone_grey":"img/pieces/stone-grey.webp","piece.stone_terracotta":"img/pieces/stone-terracotta.webp","piece.sunmoon_moon":"img/pieces/sunmoon-moon.webp","piece.sunmoon_sun":"img/pieces/sunmoon-sun.webp","ui.btnPrimary":"img/ui/btn-primary.webp","ui.btnSecondary":"img/ui/btn-secondary.webp","ui.btnLight":"img/ui/btn-light.webp","ui.btnRound":"img/ui/btn-round.webp","ui.shopSign":"img/ui/shop-sign.webp","ui.lockOpen":"img/ui/lock-open.webp","ui.key":"img/ui/key.webp","table.orbBoard":"img/games/orb-board-parchment.jpg","piece.patch_clouds":"img/pieces/patch-clouds.webp","piece.patch_corduroy":"img/pieces/patch-corduroy.webp","piece.patch_dots":"img/pieces/patch-dots.webp","piece.patch_flowers":"img/pieces/patch-flowers.webp","piece.patch_gingham":"img/pieces/patch-gingham.webp","piece.patch_linen":"img/pieces/patch-linen.webp","piece.patch_stripes":"img/pieces/patch-stripes.webp","piece.patch_tweed":"img/pieces/patch-tweed.webp","piece.stone_jade":"img/pieces/stone-jade.webp","piece.stone_moss":"img/pieces/stone-moss.webp","piece.stone_olive":"img/pieces/stone-olive.webp","piece.stone_teal":"img/pieces/stone-teal.webp","table.woodBoard":"img/games/wood-board-light.jpg","table.woodFrame":"img/games/wood-board-frame.jpg","piece.checker_black":"img/pieces/checker-black.webp","piece.checker_white":"img/pieces/checker-white.webp","ui.lantern":"img/ui/lantern.webp","ui.lanternEmpty":"img/ui/lantern-empty.webp","ui.hint":"img/ui/hint.webp","ui.check":"img/ui/check.webp","table.woodBoardHoney":"img/games/wood-board-honey.jpg","ui.restart":"img/ui/replay.webp","char.mosquitoBosun.angry":"img/characters/mosquitoBosun/angry.png","char.mosquitoBosun.calm":"img/characters/mosquitoBosun/calm.png","char.mosquitoBosun.grumpy":"img/characters/mosquitoBosun/grumpy.png","char.mosquitoBosun.happy":"img/characters/mosquitoBosun/happy.png","char.mosquitoBosun.sad":"img/characters/mosquitoBosun/sad.png","char.mosquitoBosun.sly":"img/characters/mosquitoBosun/sly.png","char.mosquitoBosun.surprised":"img/characters/mosquitoBosun/surprised.png","char.mosquitoBosun.thinking":"img/characters/mosquitoBosun/thinking.png","char.mosquitoBosun":"img/characters/mosquitoBosun/calm.png","char.mosquitoCaptain.angry":"img/characters/mosquitoCaptain/angry.png","char.mosquitoCaptain.calm":"img/characters/mosquitoCaptain/calm.png","char.mosquitoCaptain.grumpy":"img/characters/mosquitoCaptain/grumpy.png","char.mosquitoCaptain.happy":"img/characters/mosquitoCaptain/happy.png","char.mosquitoCaptain.sad":"img/characters/mosquitoCaptain/sad.png","char.mosquitoCaptain.sly":"img/characters/mosquitoCaptain/sly.png","char.mosquitoCaptain.surprised":"img/characters/mosquitoCaptain/surprised.png","char.mosquitoCaptain.thinking":"img/characters/mosquitoCaptain/thinking.png","char.mosquitoCaptain":"img/characters/mosquitoCaptain/calm.png","char.mouseGranny.angry":"img/characters/mouseGranny/angry.png","char.mouseGranny.calm":"img/characters/mouseGranny/calm.png","char.mouseGranny.grumpy":"img/characters/mouseGranny/grumpy.png","char.mouseGranny.happy":"img/characters/mouseGranny/happy.png","char.mouseGranny.sad":"img/characters/mouseGranny/sad.png","char.mouseGranny.sly":"img/characters/mouseGranny/sly.png","char.mouseGranny.surprised":"img/characters/mouseGranny/surprised.png","char.mouseGranny.thinking":"img/characters/mouseGranny/thinking.png","char.mouseGranny":"img/characters/mouseGranny/calm.png","char.mouseKeeper.angry":"img/characters/mouseKeeper/angry.png","char.mouseKeeper.calm":"img/characters/mouseKeeper/calm.png","char.mouseKeeper.grumpy":"img/characters/mouseKeeper/grumpy.png","char.mouseKeeper.happy":"img/characters/mouseKeeper/happy.png","char.mouseKeeper.sad":"img/characters/mouseKeeper/sad.png","char.mouseKeeper.sly":"img/characters/mouseKeeper/sly.png","char.mouseKeeper.surprised":"img/characters/mouseKeeper/surprised.png","char.mouseKeeper.thinking":"img/characters/mouseKeeper/thinking.png","char.mouseKeeper":"img/characters/mouseKeeper/calm.png","char.mosquitoCabin":"img/characters/mosquitoes/calm.png","char.mosquitoCabin.angry":"img/characters/mosquitoes/angry.png","char.mosquitoCabin.calm":"img/characters/mosquitoes/calm.png","char.mosquitoCabin.grumpy":"img/characters/mosquitoes/grumpy.png","char.mosquitoCabin.happy":"img/characters/mosquitoes/happy.png","char.mosquitoCabin.sad":"img/characters/mosquitoes/sad.png","char.mosquitoCabin.sly":"img/characters/mosquitoes/sly.png","char.mosquitoCabin.surprised":"img/characters/mosquitoes/surprised.png","char.mosquitoCabin.thinking":"img/characters/mosquitoes/thinking.png","char.mouse":"img/characters/mice/calm.png","char.mouse.calm":"img/characters/mice/calm.png","char.mouse.happy":"img/characters/mice/happy.png","char.mouse.sad":"img/characters/mice/sad.png","char.mouse.surprised":"img/characters/mice/surprised.png","table.woodKalah":"img/games/wood-kalah.jpg","char.chernika.proud":"img/characters/chernika/proud.png","char.chernika.sleepy":"img/characters/chernika/sleepy.png","char.chernika.tender":"img/characters/chernika/tender.png","char.chernika.thinking":"img/characters/chernika/thinking.png","piece.bake_01":"img/pieces/bake-01.webp","piece.bake_02":"img/pieces/bake-02.webp","piece.bake_03":"img/pieces/bake-03.webp","piece.bake_04":"img/pieces/bake-04.webp","piece.bake_05":"img/pieces/bake-05.webp","piece.bake_06":"img/pieces/bake-06.webp","piece.bake_07":"img/pieces/bake-07.webp","piece.bake_08":"img/pieces/bake-08.webp","piece.bake_09":"img/pieces/bake-09.webp","piece.bake_10":"img/pieces/bake-10.webp","piece.bake_11":"img/pieces/bake-11.webp","piece.bake_12":"img/pieces/bake-12.webp","piece.seal_bat":"img/pieces/seal-bat.webp","piece.seal_hat":"img/pieces/seal-hat.webp","piece.dice_cup":"img/pieces/dice-cup.webp","piece.score_sheet":"img/pieces/score-sheet.webp"}`),sounds:{"music.home":`audio/music-main.mp3`,"music.room":`audio/music-main.mp3`,"music.story":`audio/music-main.mp3`,"sfx.tap":`audio/sfx-tap.mp3`,"sfx.move":`audio/sfx-move.mp3`,"sfx.win":`audio/sfx-win.mp3`,"sfx.loss":`audio/sfx-loss.mp3`,"sfx.coin":`audio/sfx-coin.mp3`,"sfx.firefly":`audio/sfx-firefly.mp3`,"sfx.door":`audio/sfx-door.mp3`,"sfx.door2":`audio/sfx-door-2.mp3`,"sfx.pencil":`audio/sfx-pencil.mp3`,"sfx.page":`audio/sfx-page.mp3`,"sfx.pour":`audio/sfx-pour.mp3`,"sfx.wood":`audio/sfx-wood.mp3`,"sfx.creak":`audio/sfx-creak.mp3`,"sfx.pebble1":`audio/sfx-pebble-1.mp3`,"sfx.pebble2":`audio/sfx-pebble-2.mp3`}},S=be.images,xe=be.sounds,Se=`/pautinka/assets/`;function C(e){return e in S}function Ce(e){return e in xe}function we(e){return Se+S[e]}function Te(e){return Se+xe[e]}function Ee(e){return Object.keys(S).filter(t=>t.startsWith(e))}function De(e){return C(e)&&!S[e].endsWith(`.svg`)}function Oe(e){return!C(e)||e.startsWith(`char.`)&&S[e]?.endsWith(`.svg`)===!0}function ke(e,t){return C(e)?we(e):we(t)}var Ae=[`front`,`back`],w={attic:{title:{ru:`Чердак`,en:`Attic`},sides:Ae,gameIds:[`constellation`,`starpath`],plannedGame:`finale`,residents:[`raccoon`,`ghost`],residentAt:{x:30,y:62},cutletAt:{x:72,y:62}},cellar:{title:{ru:`Погреб`,en:`Cellar`},sides:Ae,gameIds:[`lines`,`match3`],plannedGame:`lines`,residents:[`mice`],residentAt:{x:50,y:62},guideAt:{x:82,y:40}},laboratory:{title:{ru:`Лаборатория`,en:`Laboratory`},sides:[`front`],gameIds:[`quarto`,`dicepoker`],plannedGame:`quarto`,residents:[`rat`],residentAt:{x:40,y:74},roachAt:{x:87,y:62},guideAt:{x:85,y:36}},bedroom:{title:{ru:`Спальня`,en:`Bedroom`},sides:[`front`],gameIds:[`sunmoon`],plannedGame:`sunmoon`,residents:[`chernika`,`owl`],residentAt:{x:42,y:80},roachAt:{x:86,y:56},guideAt:{x:84,y:30}},living:{title:{ru:`Гостиная`,en:`Living room`},sides:[`front`],gameIds:[`kalah`,`reversi`],plannedGame:`kalah`,residents:[`cat`],residentAt:{x:36,y:64},roachAt:{x:85,y:62},guideAt:{x:83,y:36}},library:{title:{ru:`Библиотека`,en:`Library`},sides:[`back`],gameIds:[`sudoku`,`gomoku`],plannedGame:`sudoku`,residents:[`bat`,`bookworm`],residentAt:{x:56,y:78},roachAt:{x:22,y:62},guideAt:{x:24,y:36}},bathroom:{title:{ru:`Ванная`,en:`Bathroom`},sides:[`back`],gameIds:[`battleship`,`queens`],plannedGame:`battleship`,residents:[`mosquitoes`],residentAt:{x:58,y:78},roachAt:{x:22,y:62},guideAt:{x:24,y:36}},kitchen:{title:{ru:`Кухня`,en:`Kitchen`},sides:[`back`],gameIds:[`water-sort`,`bakery`],plannedGame:`water-sort`,residents:[`opossumMom`],residentAt:{x:64,y:72},roachAt:{x:20,y:60},guideAt:{x:22,y:34}}},je=[`backgammon`,`domino`],Me={roomId:`bedroom`,zone:{x1:36,x2:49,y1:32,y2:71},gameId:`patches`},Ne=Object.keys(w),Pe=[];function Fe(e){return w[e]}function Ie(e,t){return Fe(e).sides.includes(t)}var Le={front:[`attic`,`laboratory`,`bedroom`,`living`,`cellar`],back:[`attic`,`library`,`bathroom`,`kitchen`,`cellar`]},Re={attic:[1080,560],laboratory:[1080,602],bedroom:[1080,594],living:[1080,596],library:[1080,568],bathroom:[1080,588],kitchen:[1080,573],cellar:[1080,828]},ze={attic:{x:50,y:50},laboratory:{x:55,y:30},bedroom:{x:50,y:25},living:{x:49,y:23},library:{x:61,y:28},bathroom:{x:62,y:26},kitchen:{x:63,y:27},cellar:{x:50,y:33}},Be={image:`house.atticTower`,size:[1080,657],lamp:{x:50,y:56},residentAt:{x:30,y:65},cutletAt:{x:84,y:66}};function Ve(e,t=!1){return t&&e===`attic`?Be.size:Re[e]}function He(e,t,n=!1){let[r,i]=Ve(e,n),a=t*r,o=n&&e===`attic`?Be.lamp:ze[e];return{x:o.x,y:(o.y/100*i-(i-a)/2)/a*100}}function Ue(e,t=!1){let n=e=>Ve(e,t)[1]/Ve(e,t)[0];return Math.min(n(Le.front[e]),n(Le.back[e]))}var We=[`rustic`,`royal`,`scrap`],Ge=1.08,Ke=.23,qe=-2,T=(e,t,n=.06)=>({kind:`room`,zone:e,layer:`back`,x:t,y:n}),E=(e,t,n=.55)=>({kind:`room`,zone:e,layer:`front`,x:t,y:n}),D=(e,t,n)=>({kind:`room`,zone:e,layer:`wall`,x:t,y:n}),Je=(e,t)=>({kind:`room`,zone:e,layer:`ceiling`,x:t,y:0}),Ye=(e,t,n=.67)=>({kind:`room`,zone:e,layer:`rug`,x:t,y:n}),O=(e,t,n)=>({kind:`room`,zone:e,layer:`floorSmall`,x:t,y:n}),k=(e,t,n,r)=>r?{kind:`surface`,on:e,x:t,y:n,dy:r}:{kind:`surface`,on:e,x:t,y:n},A=0,j=1,M=2,Xe={living:[A,j],dining:[j],bedroom:[M],all:[-1]},N={bookshelf:T(A,.157),sofa:E(A,.45),armchair:E(A,.87),tea_table:E(A,.735,.72),clock:D(A,.3,.28),picture:D(A,.87,.3),shelf:D(A,.87,.52),lamp_living:Je(A,.39),rug_living:Ye(A,.5),cupboard:T(j,.15),stove:T(j,.86),chair:E(j,.37,.45),table:E(j,.5,.62),chair2:E(j,.63,.45),wardrobe:T(M,.3),bedside:T(M,.15,.25),bedside2:T(M,.76,.42),dresser:T(M,.81),bed:E(M,.56),chest:E(M,.855,.65),coat_rack:D(M,.165,.4),picture_bedroom:D(M,.86,.3),shelf_bedroom:D(M,.2,.2),lamp_bedroom:Je(M,.39),rug_bedroom:Ye(M,.52),fern:O(A,.05,.2),broom:O(j,.03,.3),birdcage:O(j,.9,.5),telescope:O(j,.27,.15),watering_can:O(j,.08,.85),hat_stand:O(M,.045,.2),yarn:O(M,.13,.85),toy_horse:O(M,.25,.7),slippers:O(M,.4,.9),blanket_basket:O(M,.965,.15),teapot:k(`table`,24,22),teacups:k(`table`,44,27),cake:k(`table`,62,18),flower_vase:k(`table`,79,24),jam_jar:k(`cupboard`,35,3),apples:k(`cupboard`,68,3),globe:k(`bookshelf`,28,2,{scrap:8}),books:k(`bookshelf`,72,2,{scrap:8}),alarm_clock:k(`bedside`,30,3,{scrap:4}),candle:k(`bedside`,70,3,{scrap:6}),table_lamp:k(`bedside2`,50,3,{scrap:4}),photo_frame:k(`dresser`,14,50,{royal:2}),music_box:k(`dresser`,50,50,{royal:2}),crown_cushion:k(`dresser`,87,50,{royal:2}),bell:D(A,.1,.3),library_ladder:T(A,.31,.08),aquarium:T(A,.44),gramophone:T(A,.6,.02),piano:T(A,.8),barrel_organ:O(A,.655,.45),birdhouse:D(j,.15,.3),window_round_stained:D(j,.5,.4),bottle_rack:T(j,.4),alchemy_table:T(j,.655),pickle_barrel:O(j,.76,.08),loom:E(j,.1,.9),hammock:Je(j,.75),samovar:k(`table`,36,16),hand_mirror:k(`dresser`,32,50,{royal:2}),throne:E(M,.1,.7),web_hammock:D(M,.66,.15)},P=(e,t)=>({ru:e,en:t}),Ze={bed:{size:.41,en:`Bed`,need:P(`Сначала нужна кровать`,`Needs the bed first`)},table:{size:.2,en:`Dining table`,need:P(`Сначала нужен обеденный стол`,`Needs the dining table first`)},tea_table:{size:.16,en:`Tea table`},chair:{size:.25,en:`Chair`,flip:!0},chair2:{size:.25,en:`Second chair`},lamp_living:{size:.26,en:`Living room lamp`},stove:{size:.34,en:`Stove`},rug_living:{size:.47,en:`Living room rug`},armchair:{size:.28,en:`Armchair`},bedside:{size:.2,en:`Bedside table`,need:P(`Сначала нужна тумбочка`,`Needs the bedside table first`)},bedside2:{size:.2,en:`Second bedside table`,need:P(`Сначала нужна вторая тумбочка`,`Needs the second bedside table first`)},wardrobe:{size:.55,en:`Wardrobe`},cupboard:{size:.48,en:`Cupboard`,need:P(`Сначала нужен буфет`,`Needs the cupboard first`)},coat_rack:{size:.2,en:`Coat rack`,byWidth:!0},sofa:{size:.26,en:`Sofa`},rug_bedroom:{size:.47,en:`Bedside rug`},lamp_bedroom:{size:.26,en:`Bedroom lamp`},bookshelf:{size:.52,en:`Bookcase`,need:P(`Сначала нужен книжный шкаф`,`Needs the bookcase first`)},clock:{size:.22,en:`Wall clock`},dresser:{size:.41,en:`Dressing table`,need:P(`Сначала нужен столик с зеркалом`,`Needs the dressing table first`)},picture:{size:.2,en:`Picture`},shelf:{size:.13,en:`Shelf`},chest:{size:.18,en:`Chest`,need:P(`Сначала нужен сундук`,`Needs the chest first`)},picture_bedroom:{size:.2,en:`Bedroom picture`},shelf_bedroom:{size:.13,en:`Bedroom shelf`},teapot:{size:.08,en:`Teapot`},teacups:{size:.06,en:`Teacups`},cake:{size:.08,en:`Cake`},flower_vase:{size:.09,en:`Flowers`},jam_jar:{size:.07,en:`Jam`},apples:{size:.07,en:`Apples`},globe:{size:.1,en:`Globe`},books:{size:.07,en:`Books`},alarm_clock:{size:.07,en:`Alarm clock`},candle:{size:.08,en:`Candle`,glow:{x:50,y:6}},table_lamp:{size:.1,en:`Shaded lamp`,glow:{x:50,y:22}},photo_frame:{size:.08,en:`Portrait frame`},music_box:{size:.07,en:`Music box`},crown_cushion:{size:.07,en:`Crown cushion`},broom:{size:.12,en:`Broom`},fern:{size:.12,en:`Fern`},telescope:{size:.12,en:`Telescope`},birdcage:{size:.11,en:`Birdcage`},watering_can:{size:.09,en:`Watering can`},hat_stand:{size:.12,en:`Hat stand`},yarn:{size:.07,en:`Ball of yarn`},toy_horse:{size:.1,en:`Wooden horse`},slippers:{size:.06,en:`Slippers`},blanket_basket:{size:.1,en:`Blanket basket`},wall_leaves:{size:0,en:`Leaf wallpaper`},floor_dark:{size:0,en:`Dark floor`},wall_stripes:{size:0,en:`Striped wallpaper`},floor_checker:{size:0,en:`Checkered tiles`},wall_stars:{size:0,en:`Starry wallpaper`},bell:{size:.1,en:`Door bell`},birdhouse:{size:.14,en:`Birdhouse`},samovar:{size:.12,en:`Samovar`},hand_mirror:{size:.08,en:`Hand mirror`},gramophone:{size:.3,en:`Gramophone`},aquarium:{size:.28,en:`Aquarium`},pickle_barrel:{size:.2,en:`Pickle barrel`},loom:{size:.3,en:`Loom`},barrel_organ:{size:.24,en:`Barrel organ`},hammock:{size:.25,en:`Hammock`},piano:{size:.36,en:`Piano`},alchemy_table:{size:.3,en:`Alchemy table`},library_ladder:{size:.46,en:`Library ladder`},bottle_rack:{size:.45,en:`Bottle rack`},window_round_stained:{size:.385,en:`Stained glass window`},throne:{size:.3,en:`Throne for Princess Kotletka`},web_hammock:{size:.28,en:`Web hammock`},candle_lantern:{size:.1,en:`Candle lantern`},teacups_daisy:{size:.07,en:`Daisy mug`},fern_geranium:{size:.12,en:`Geranium pot`},crown_cushion_dumka:{size:0,en:`Little cushion`},crown_cushion_folk:{size:0,en:`Embroidered crown cushion`},broom_new:{size:.13,en:`New broom`},teapot_brown:{size:0,en:`Teapot in a cosy`},clock_cuckoo:{size:.26,en:`Cuckoo clock`},picture_cat:{size:.2,en:`Cat painting`},blanket_basket_wicker:{size:.1,en:`Wicker basket`},blanket_basket_quilt:{size:0,en:`Stack of quilts`},rug_doormat:{size:0,en:`Doormat`},rug_striped:{size:0,en:`Rag rug`},rug_runner:{size:0,en:`Striped runner`},rug_oval:{size:0,en:`Knitted rug`},lampshade:{size:0,en:`Lampshade`},wall_shelf:{size:0,en:`Wall shelf`},jam_jar_trio:{size:0,en:`Jam jars`},chair_stool:{size:.15,en:`Stool`},armchair_rocking:{size:.3,en:`Rocking chair`},bookshelf_carved:{size:0,en:`Carved bookcase`},bookshelf_glass:{size:0,en:`Glass-door bookcase`},quilt_stars:{size:0,en:`Patchwork quilt`},chest_alt:{size:0,en:`Chest`},globe_antique:{size:0,en:`Globe`},tablecloth:{size:0,en:`Embroidered tablecloth`},lamp_chandelier:{size:.22,en:`Candle chandelier`},clock_wall:{size:.22,en:`Pendulum clock`},sofa_small:{size:0,en:`Small sofa`},sofa_striped:{size:0,en:`Striped sofa`},wardrobe_carved:{size:0,en:`Wardrobe`},wardrobe_mirror:{size:0,en:`Mirrored wardrobe`},telescope_spyglass:{size:.09,en:`Spyglass`},cupboard_painted:{size:0,en:`White cupboard`},cupboard_folk:{size:0,en:`Painted cupboard`},stove_fireplace:{size:.36,en:`Fireplace`},stove_russian:{size:.4,en:`Russian stove`},bed_canopy:{size:.5,en:`Canopy bed`}},Qe={rustic:P(`Деревенский`,`Rustic`),royal:P(`Королевский`,`Royal`),scrap:P(`Енотий`,`Raccoon-made`)},$e={narrator:null,cutlet:`kotletka`,spider:`spider`,raccoon:`raccoon`,opossum_mom:`opossumMom`,rat:`rat`,mouse:`mice`,chernika:`chernika`,cat:`cat`,bat:`bat`,roach_mid:`roachMedium`,mosquito:`mosquitoes`,moth:`moth`},et={Настойки:`water-sort`,Кварто:`quarto`,"Три в ряд":`match3`,"Солнце и луна":`sunmoon`,Калах:`kalah`,Реверси:`reversi`,Нарды:`backgammon`,"Морской бой":`battleship`,Лоскуты:`patches`,Судоку:`sudoku`,"Распутай созвездие":`constellation`},tt=e=>typeof e==`object`&&!!e&&!Array.isArray(e),nt=e=>({ru:e,en:e});function rt(e,t,n){let r=/^([a-z_]+)(?:\s*\[([a-z]+)\])?:\s*(.+)$/.exec(e);if(!r)return n.push(`${t}: строка не в формате «кто [лицо]: текст» – ${e}`),null;let[,i=``,a,o=``]=r;if(!(i in $e))return n.push(`${t}: неизвестный персонаж ${i}`),null;let s=$e[i],c={kind:`line`,text:nt(o)};return s&&(c.speaker=s),s&&a&&(c.emotion=a),c}var it=`room.attic`;function at(e,t,n){let r=Array.isArray(e)?e:[];return r.length===0&&n.push(`${t}: нет строк`),{background:it,steps:r.flatMap((e,r)=>{let i=typeof e==`string`?rt(e,`${t}[${r}]`,n):null;return i?[i]:[]})}}function ot(e,t,n){let r=$e[String(e.character)];r||n.push(`${t}: неизвестный персонаж задания ${String(e.character)}`);let i=e.what??`wins`;i!==`wins`&&i!==`games`&&n.push(`${t}: what = ${String(i)} (нужно wins или games)`);let a=e.game===void 0?null:et[String(e.game)]??null;e.game!==void 0&&!a&&n.push(`${t}: неизвестная игра ${String(e.game)}`);let o=e.room===void 0?null:Ne.includes(e.room)?e.room:null;e.room!==void 0&&!o&&n.push(`${t}: неизвестная комната ${String(e.room)}`);let s=e.difficulty===void 0?null:ge.includes(e.difficulty)?e.difficulty:null;return e.difficulty!==void 0&&!s&&n.push(`${t}: неизвестная сложность ${String(e.difficulty)}`),a&&o&&n.push(`${t}: в задании и игра, и комната – нужно что-то одно`),(typeof e.count!=`number`||!Number.isInteger(e.count)||e.count<1)&&n.push(`${t}: в задании нет числа`),!r||i!==`wins`&&i!==`games`?null:{giver:r,what:i,gameId:a,room:o,difficulty:s,count:Number(e.count)}}var st=/^(wall|floor)_([a-z]+)$/;function ct(e,t,n,r,i){let a=String(e.key),o=Ze[a];o||i.push(`${r}: нет размера и английского названия (EXTRA)`);let s=$e[String(e.seller)];s||i.push(`${r}: неизвестный продавец ${String(e.seller)}`);let c=tt(e.quest)?ot(e.quest,r,i):null;t===`list`&&c&&(c.what!==`wins`||!c.gameId)&&i.push(`${r}: в списке задание – победы в игре`);let l=typeof e.price==`number`?e.price:null,u=typeof e.skip_price==`number`?e.skip_price:null;t===`shop`&&l===null&&i.push(`${r}: в лавке нужна цена`),l===null&&!(c&&u!==null)&&i.push(`${r}: нет цены (или задания с skip_price)`);let d={id:a,name:{ru:String(e.name),en:o?.en??String(e.name)},source:t,batch:n,seller:s??`raccoon`,price:l,skipPrice:u,quest:c,requires:typeof e.requires==`string`?e.requires:null,line:nt(String(e.comment??``))},f=String(e.asset);if(e.kind===`finish`&&t===`list`){let e=st.exec(f),t=e?.[1],n=e?.[2]??``;return t&&y[t].some(e=>e.id===n)||i.push(`${r}: нет картинки обоев/пола ${f}`),{...d,kind:`finish`,decor:t??`wall`,variant:n}}if(e.kind===`variant`&&t===`shop`){let t=Array.isArray(e.variant_of)?e.variant_of.filter(e=>typeof e==`string`):[];return t.length===0&&i.push(`${r}: у другого вида нет variant_of`),f!==a&&i.push(`${r}: картинка ${f} ≠ ключ`),{...d,kind:`variant`,variantOf:t,size:o?.size?o.size:null}}let p=N[a];if(!p)i.push(`${r}: нет места в комнате (HW_SLOTS)`);else{let t=p.kind===`room`?p.zone:N[p.on]?.kind===`room`?N[p.on].zone:qe;Xe[String(e.zone)]?.includes(t)||i.push(`${r}: место не в зоне ${String(e.zone)}`),p.kind===`surface`&&p.on!==d.requires&&i.push(`${r}: стоит на ${p.on}, а requires = ${String(d.requires)}`)}return e.kind===`furniture`&&t===`list`?(e.variants!==!0&&i.push(`${r}: у мебели должны быть варианты`),{...d,kind:`furniture`,art:f,size:o?.size??.2,slot:a,...o?.need?{need:o.need}:{},...o?.flip?{flip:!0}:{},...o?.byWidth?{byWidth:!0}:{}}):e.kind===`decor`?(f!==a&&i.push(`${r}: картинка ${f} ≠ ключ`),{...d,kind:`small`,size:o?.size??.08,slot:a,...o?.glow?{glow:o.glow}:{}}):(i.push(`${r}: неизвестный kind ${String(e.kind)}`),null)}function lt(){let e=[],t=[],n=[],r=me;for(let i of Array.isArray(r.batches)?r.batches:[]){if(!tt(i)||typeof i.id!=`number`||!Array.isArray(i.items)){e.push(`порция без id или items`);continue}let r=[];for(let n of i.items){if(!tt(n)||typeof n.key!=`string`){e.push(`порция ${i.id}: предмет без key`);continue}let a=ct(n,`list`,i.id,`${n.key} (порция ${i.id})`,e);a&&t.push(a),r.push(n.key)}n.push({id:i.id,title:nt(String(i.title)),items:r})}let i=he;for(let n of Array.isArray(i.items)?i.items:[]){if(!tt(n)||typeof n.key!=`string`){e.push(`лавка: предмет без key`);continue}let r=ct(n,`shop`,null,`${n.key} (лавка)`,e);r&&t.push(r)}let a=t.map(e=>e.id);for(let t of new Set(a))a.indexOf(t)!==a.lastIndexOf(t)&&e.push(`${t}: ключ повторяется`);for(let n of t){if(n.requires){let r=t.find(e=>e.id===n.requires);!r||r.kind!==`furniture`?e.push(`${n.id}: requires ${n.requires} – нет такой мебели`):n.batch!==null&&r.batch!==null&&r.batch>n.batch&&e.push(`${n.id}: requires ${n.requires} из более поздней порции`)}if(n.kind===`variant`)for(let r of n.variantOf){let i=t.find(e=>e.id===r);(!i||i.source!==`list`||i.kind!==`furniture`&&i.kind!==`small`)&&e.push(`${n.id}: variant_of ${r} – нет такого предмета в списке`)}}for(let n of Object.keys(N))t.some(e=>e.id===n)||e.push(`место ${n}: такого предмета нет`);return{items:t,batches:n,scenes:{intro:at(r.intro,`intro`,e),batchDone:at(r.batch_done,`batch_done`,e),outro:at(r.outro,`outro`,e)},errors:e}}var F=lt();F.errors;var I=F.batches,ut=F.scenes,dt=F.items;F.items.filter(e=>e.source===`list`);var ft=F.items.filter(e=>e.source===`shop`),pt=F.items.filter(e=>e.kind===`furniture`),mt=F.items.filter(e=>e.kind===`small`),ht=F.items.filter(e=>e.kind===`finish`),gt=F.items.filter(e=>e.kind===`variant`);function L(e){return dt.find(t=>t.id===e)}function _t(e){return pt.find(t=>t.id===e)}function vt(e){return`${e.kind===`variant`?`hw.v`:`hw.s`}.${e.id}`}function yt(e){return e.source===`list`||De(vt(e))}function bt(e){return gt.filter(t=>t.variantOf.includes(e))}function xt(e){return`hw.v.${e.id}`}function St(e,t){return ht.find(n=>n.decor===e&&n.variant===t)}function Ct(e){let t=mt.find(t=>t.id===e),n=t?N[t.slot]:void 0;return n?.kind===`surface`?_t(n.on)??null:null}function wt(e){let t=L(e);if(t?.kind===`variant`)return wt(t.variantOf[0]??``);let n=N[e];return n?n.kind===`room`?n.zone:wt(n.on):qe}var Tt=`{
  "title": { "ru": "Глава 1. Кухня", "en": "Chapter 1. The Kitchen" },
  "price": 10,
  "room": "kitchen",
  "guide": "roachYoung",
  "parts": [
    {
      "scene": "guide",
      "background": "room.living",
      "music": "music.story",
      "steps": [
        {
          "speaker": "roachYoung",
          "emotion": "happy",
          "side": "left",
          "text": { "ru": "Наверх или вниз? Я провожу. Я знаю дорогу: мне про неё рассказывали.", "en": "Up or down? I'll show you the way. I know it: I've been told all about it." }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": { "ru": "На кухню.", "en": "To the kitchen." }
        },
        {
          "speaker": "roachYoung",
          "emotion": "thinking",
          "text": { "ru": "Это рядом. Но в темноте всё далеко. Десять светлячков.", "en": "It's close. But in the dark everything is far. Ten fireflies." }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": { "ru": "А сам ты там бывал?", "en": "Have you ever been there yourself?" }
        },
        {
          "speaker": "roachYoung",
          "emotion": "sly",
          "side": "left",
          "text": { "ru": "Очень подробно рассказывали. Почти как будто я сам там был.", "en": "Told in great detail. Almost as if I'd been there myself." }
        }
      ]
    },
    {
      "scene": "arrival",
      "background": "room.kitchen",
      "music": "music.story",
      "steps": [
        {
          "icon": "journal.trace_pie",
          "text": {
            "ru": "На кухне зажглась лампа. Пахло пирогом. Пирога не было.",
            "en": "A lamp lit up in the kitchen. It smelled of pie. There was no pie."
          }
        },
        {
          "speaker": "opossumMom",
          "emotion": "sad",
          "side": "left",
          "text": { "ru": "Он был на шестерых. Осталась корочка.", "en": "It was enough for six. Only a crust is left." }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": { "ru": "Кто его съел?", "en": "Who ate it?" }
        },
        {
          "speaker": "opossumMom",
          "emotion": "calm",
          "text": {
            "ru": "Полосатый. Очень извинялся. С набитым ртом это трудно, но он старался.",
            "en": "The striped one. He apologised a lot. That's hard with your mouth full, but he tried."
          }
        },
        {
          "speaker": "opossumMom",
          "emotion": "sad",
          "text": { "ru": "И скатерть унёс. Лучшую. С вишнями.", "en": "And he took the tablecloth. The best one. With cherries." }
        }
      ]
    },
    {
      "scene": "task",
      "background": "room.kitchen",
      "steps": [
        {
          "speaker": "opossumMom",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Я всё расскажу. Только у меня банки перепутались, а я считаю. Помоги разобрать.",
            "en": "I'll tell you everything. Only my jars got mixed up, and I'm counting. Help me sort them."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": { "ru": "Помогу.", "en": "I'll help." }
        }
      ]
    },
    { "task": "water-sort", "games": 2, "thanks": 8 },
    {
      "scene": "clue",
      "background": "room.kitchen",
      "steps": [
        {
          "speaker": "opossumMom",
          "emotion": "happy",
          "side": "left",
          "text": { "ru": "Вот теперь порядок. Сорок две. Или сорок три. Неважно.", "en": "Now it's in order. Forty-two. Or forty-three. It doesn't matter." }
        },
        {
          "speaker": "opossumMom",
          "emotion": "calm",
          "text": {
            "ru": "Он ушёл в погреб. Со скатертью под мышкой. Спросил, есть ли там огурцы.",
            "en": "He went down to the cellar. With the tablecloth under his arm. He asked if there were cucumbers down there."
          }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": { "ru": "Зачем ему скатерть?", "en": "What does he need a tablecloth for?" }
        },
        {
          "speaker": "opossumMom",
          "emotion": "calm",
          "text": {
            "ru": "Скатерть нужна, когда ждёшь гостей. Больше она ни для чего не нужна.",
            "en": "You need a tablecloth when you're expecting guests. It's not needed for anything else."
          }
        },
        {
          "icon": "journal.sign_flour",
          "text": {
            "ru": "На столе была рассыпана мука. В муке кто-то нарисовал пальцем стрелку. Стрелка показывала вниз.",
            "en": "Flour was spilled on the table. Someone had drawn an arrow in it with a finger. The arrow pointed down."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "text": { "ru": "У неё всегда был хороший почерк.", "en": "She always had good handwriting." }
        }
      ]
    }
  ],
  "journal": [
    {
      "title": { "ru": "Корочка от пирога", "en": "A pie crust" },
      "text": { "ru": "Пирог был на шестерых. Скатерть с вишнями тоже пропала.", "en": "The pie was enough for six. The cherry tablecloth is gone too." },
      "icon": "journal.trace_pie"
    },
    {
      "title": { "ru": "Стрелка в муке", "en": "An arrow in the flour" },
      "text": { "ru": "Показывает вниз. Почерк её.", "en": "It points down. Her handwriting." },
      "icon": "journal.sign_flour"
    }
  ]
}
`,Et=`{
  "title": {
    "ru": "Глава 2. Погреб",
    "en": "Chapter 2. The Cellar"
  },
  "draft": true,
  "price": 15,
  "room": "cellar",
  "guide": "roachYoung",
  "parts": [
    {
      "scene": "guide",
      "background": "room.kitchen",
      "music": "music.story",
      "steps": [
        {
          "speaker": "roachYoung",
          "emotion": "happy",
          "side": "left",
          "text": {
            "ru": "Снова я. Теперь вниз, в погреб. Вниз я хожу даже лучше, чем наверх.",
            "en": "Me again. Down to the cellar this time. I go down even better than up."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Ведите.",
            "en": "Lead the way."
          }
        },
        {
          "speaker": "roachYoung",
          "emotion": "thinking",
          "text": {
            "ru": "Пятнадцать светлячков. Ступенек там больше, чем кажется.",
            "en": "Fifteen fireflies. There are more steps down there than it seems."
          }
        }
      ]
    },
    {
      "scene": "arrival",
      "background": "room.cellar",
      "music": "music.story",
      "steps": [
        {
          "icon": "journal.trace_jam",
          "text": {
            "ru": "В погребе зажглась лампа. На полу лежала опрокинутая банка черничного варенья.",
            "en": "A lamp lit up in the cellar. An overturned jar of blueberry jam lay on the floor."
          }
        },
        {
          "speaker": "mouseGranny",
          "emotion": "sad",
          "side": "left",
          "text": {
            "ru": "Это была хорошая банка. Мы её берегли.",
            "en": "It was a good jar. We were saving it."
          }
        },
        {
          "text": {
            "ru": "Лиловые следы лап вели к лестнице.",
            "en": "Purple paw prints led to the stairs."
          }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": {
            "ru": "Что-нибудь ещё пропало?",
            "en": "Is anything else missing?"
          }
        },
        {
          "speaker": "mouseKeeper",
          "emotion": "calm",
          "text": {
            "ru": "Банка огурцов. Мы не против гостей. Мы против гостей в варенье.",
            "en": "A jar of cucumbers. We don’t mind guests. We mind guests covered in jam."
          }
        }
      ]
    },
    {
      "scene": "task",
      "background": "room.cellar",
      "steps": [
        {
          "speaker": "mouseGranny",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Ягоды раскатились. Собери их, а мы пока вспомним.",
            "en": "The berries rolled away. Gather them, and meanwhile we’ll remember."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Соберу.",
            "en": "I will."
          }
        }
      ]
    },
    {
      "task": "match3",
      "games": 2,
      "thanks": 10
    },
    {
      "scene": "clue",
      "background": "room.cellar",
      "steps": [
        {
          "speaker": "mouseKeeper",
          "emotion": "happy",
          "side": "left",
          "text": {
            "ru": "Все ягоды на месте. Почти все.",
            "en": "All the berries are back. Almost all."
          }
        },
        {
          "speaker": "mouseGranny",
          "emotion": "calm",
          "text": {
            "ru": "Он упал прямо в варенье. Очень расстроился из-за хвоста.",
            "en": "He fell right into the jam. He was very upset about his tail."
          }
        },
        {
          "speaker": "mouseGranny",
          "emotion": "calm",
          "text": {
            "ru": "И спросил, где в доме можно помыться.",
            "en": "And he asked where in the house he could wash."
          }
        },
        {
          "icon": "journal.sign_crumbs",
          "text": {
            "ru": "У лестницы были выложены крошки панировки. Стрелкой.",
            "en": "By the stairs, breadcrumbs had been laid out. In the shape of an arrow."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Панировка. Только она так умеет.",
            "en": "Breadcrumbs. Only she can do that."
          }
        },
        {
          "text": {
            "ru": "Стрелка показывала на лестницу. Паучок поправил шляпу и пошёл искать, где в доме моются.",
            "en": "The arrow pointed to the stairs. The Spider straightened his hat and went to find where one washes in this house."
          }
        }
      ]
    }
  ],
  "journal": [
    {
      "title": {
        "ru": "Лиловые следы",
        "en": "Purple footprints"
      },
      "text": {
        "ru": "Он упал в черничное варенье и унёс банку огурцов.",
        "en": "He fell into the blueberry jam and took a jar of cucumbers."
      },
      "icon": "journal.trace_jam"
    },
    {
      "title": {
        "ru": "Крошки стрелкой",
        "en": "An arrow of crumbs"
      },
      "text": {
        "ru": "Панировка. Только она так умеет. Ведут к лестнице.",
        "en": "Breadcrumbs. Only she can do that. They lead to the stairs."
      },
      "icon": "journal.sign_crumbs"
    }
  ]
}
`,Dt=`{
  "title": {
    "ru": "Глава 3. Ванная",
    "en": "Chapter 3. The Bathroom"
  },
  "draft": true,
  "price": 20,
  "room": "bathroom",
  "guide": "roachMedium",
  "parts": [
    {
      "scene": "guide",
      "background": "room.cellar",
      "music": "music.story",
      "steps": [
        {
          "speaker": "roachMedium",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "В ванную? Провожу. Светлячки вперёд.",
            "en": "To the bathroom? I’ll take you. Fireflies first."
          }
        },
        {
          "speaker": "roachMedium",
          "emotion": "doubtful",
          "text": {
            "ru": "Не то чтобы я не доверял. Просто так спокойнее.",
            "en": "Not that I don’t trust you. It’s just calmer that way."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Сколько?",
            "en": "How much?"
          }
        },
        {
          "speaker": "roachMedium",
          "emotion": "calm",
          "text": {
            "ru": "Двадцать. Лестница наверх длинная. Я всё посчитал.",
            "en": "Twenty. The stairs up are long. I’ve counted everything."
          }
        }
      ]
    },
    {
      "scene": "arrival",
      "background": "room.bathroom",
      "music": "music.story",
      "steps": [
        {
          "icon": "journal.trace_bath",
          "text": {
            "ru": "В ванной зажглась лампа. Вода в ванне была лиловая.",
            "en": "A lamp lit up in the bathroom. The water in the bath was purple."
          }
        },
        {
          "speaker": "mosquitoCaptain",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Вода была прозрачная.",
            "en": "The water was clear."
          }
        },
        {
          "speaker": "mosquitoBosun",
          "emotion": "sly",
          "text": {
            "ru": "А стала лиловая.",
            "en": "And it turned purple."
          }
        },
        {
          "speaker": "mosquitoes",
          "emotion": "surprised",
          "text": {
            "ru": "Мы ничего не трогали.",
            "en": "We didn’t touch anything."
          }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": {
            "ru": "А кто трогал?",
            "en": "Then who did?"
          }
        },
        {
          "text": {
            "ru": "На мыле остался отпечаток лапы.",
            "en": "There was a paw print on the soap."
          }
        }
      ]
    },
    {
      "scene": "task",
      "background": "room.bathroom",
      "steps": [
        {
          "speaker": "mosquitoCaptain",
          "emotion": "happy",
          "side": "left",
          "text": {
            "ru": "Сыграй с нами в морской бой.",
            "en": "Play Battleship with us."
          }
        },
        {
          "speaker": "mosquitoBosun",
          "emotion": "sly",
          "text": {
            "ru": "А потом расскажем.",
            "en": "And then we’ll tell you."
          }
        }
      ]
    },
    {
      "task": "battleship",
      "games": 2,
      "thanks": 12
    },
    {
      "scene": "clue",
      "background": "room.bathroom",
      "steps": [
        {
          "speaker": "mosquitoCaptain",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Он отмывался.",
            "en": "He was washing."
          }
        },
        {
          "speaker": "mosquitoBosun",
          "emotion": "happy",
          "text": {
            "ru": "И пел.",
            "en": "And singing."
          }
        },
        {
          "speaker": "mosquitoCaptain",
          "emotion": "calm",
          "text": {
            "ru": "С ним была дама в короне.",
            "en": "There was a lady in a crown with him."
          }
        },
        {
          "speaker": "mosquitoCaptain",
          "emotion": "sly",
          "text": {
            "ru": "Она сидела на табурете. И говорила, что так хвост не моют.",
            "en": "She sat on a stool. And said that’s not how you wash a tail."
          }
        },
        {
          "speaker": "spider",
          "emotion": "surprised",
          "side": "right",
          "text": {
            "ru": "Это она.",
            "en": "That’s her."
          }
        },
        {
          "icon": "journal.sign_mirror",
          "text": {
            "ru": "На запотевшем зеркале пальцем были нарисованы корона и стрелка вбок.",
            "en": "On the misted mirror, a crown and an arrow pointing sideways had been drawn with a finger."
          }
        },
        {
          "text": {
            "ru": "Паучок поправил шляпу. Стрелка звала дальше.",
            "en": "The Spider straightened his hat. The arrow called him onward."
          }
        }
      ]
    }
  ],
  "journal": [
    {
      "title": {
        "ru": "Лиловая вода",
        "en": "Purple water"
      },
      "text": {
        "ru": "Он мылся и пел. На мыле отпечаток лапы.",
        "en": "He washed and sang. A paw print on the soap."
      },
      "icon": "journal.trace_bath"
    },
    {
      "title": {
        "ru": "Корона на зеркале",
        "en": "A crown on the mirror"
      },
      "text": {
        "ru": "Нарисована пальцем. Стрелка вбок.",
        "en": "Drawn with a finger. An arrow pointing sideways."
      },
      "icon": "journal.sign_mirror"
    }
  ]
}
`,Ot=`{
  "title": {
    "ru": "Глава 4. Спальня",
    "en": "Chapter 4. The Bedroom"
  },
  "draft": true,
  "price": 25,
  "room": "bedroom",
  "guide": "roachMedium",
  "parts": [
    {
      "scene": "guide",
      "background": "room.bathroom",
      "music": "music.story",
      "steps": [
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": {
            "ru": "Что там, дальше по лестнице?",
            "en": "What's further along the stairs?"
          }
        },
        {
          "speaker": "roachMedium",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Спальня. Там спят, так что ступай тихо.",
            "en": "The bedroom. People sleep there, so tread quietly."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Хорошо.",
            "en": "All right."
          }
        },
        {
          "speaker": "roachMedium",
          "emotion": "doubtful",
          "text": {
            "ru": "Двадцать пять светлячков. Вперёд, как договаривались.",
            "en": "Twenty-five fireflies. In advance, as agreed."
          }
        }
      ]
    },
    {
      "scene": "arrival",
      "background": "room.bedroom",
      "music": "music.story",
      "steps": [
        {
          "text": {
            "ru": "В спальне зажглась лампа. Чернинка не спала.",
            "en": "A lamp lit up in the bedroom. Cherninka was not asleep."
          }
        },
        {
          "speaker": "chernika",
          "emotion": "sleepy",
          "side": "left",
          "text": {
            "ru": "Не спится.",
            "en": "I can’t sleep."
          }
        },
        {
          "icon": "journal.trace_pillow",
          "text": {
            "ru": "С кровати пропала самая мягкая подушка.",
            "en": "The softest pillow was gone from the bed."
          }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": {
            "ru": "Кто её взял?",
            "en": "Who took it?"
          }
        },
        {
          "speaker": "chernika",
          "emotion": "thinking",
          "text": {
            "ru": "Он сказал: для гостьи. Гостье ведь нужнее.",
            "en": "He said it was for a guest. A guest needs it more."
          }
        }
      ]
    },
    {
      "scene": "task",
      "background": "room.bedroom",
      "steps": [
        {
          "speaker": "chernika",
          "emotion": "tender",
          "side": "left",
          "text": {
            "ru": "Не спится. Сыграй со мной.",
            "en": "I can’t sleep. Play with me."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Сыграю.",
            "en": "I will."
          }
        }
      ]
    },
    {
      "task": "sunmoon",
      "games": 1,
      "thanks": 15
    },
    {
      "scene": "clue",
      "background": "room.bedroom",
      "steps": [
        {
          "speaker": "chernika",
          "emotion": "tender",
          "side": "left",
          "text": {
            "ru": "Спасибо.",
            "en": "Thank you."
          }
        },
        {
          "speaker": "chernika",
          "emotion": "thinking",
          "text": {
            "ru": "Он попросил подушку для гостьи. И обещал вернуть.",
            "en": "He asked for the pillow for a guest. And promised to bring it back."
          }
        },
        {
          "speaker": "chernika",
          "emotion": "proud",
          "text": {
            "ru": "А гостья сказала спасибо. И поправила мне колпак.",
            "en": "And the guest said thank you. And straightened my nightcap."
          }
        },
        {
          "icon": "journal.sign_brooch",
          "text": {
            "ru": "На подоконнике лежала брошка принцессы Котлетки.",
            "en": "Princess Kotletka’s brooch lay on the windowsill."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Она оставила её нарочно.",
            "en": "She left it on purpose."
          }
        },
        {
          "text": {
            "ru": "Булавка брошки показывала вверх – туда, где лаборатория.",
            "en": "The brooch pin pointed upwards – to where the laboratory was."
          }
        },
        {
          "text": {
            "ru": "Паучок поправил шляпу и вышел на лестницу.",
            "en": "The Spider straightened his hat and went out onto the stairs."
          }
        }
      ]
    }
  ],
  "journal": [
    {
      "title": {
        "ru": "Пустое место на кровати",
        "en": "An empty spot on the bed"
      },
      "text": {
        "ru": "Взял подушку для гостьи. Обещал вернуть.",
        "en": "He took the pillow for a guest. He promised to bring it back."
      },
      "icon": "journal.trace_pillow"
    },
    {
      "title": {
        "ru": "Брошка",
        "en": "The brooch"
      },
      "text": {
        "ru": "Лежала на подоконнике. Она оставила её нарочно.",
        "en": "It lay on the windowsill. She left it on purpose."
      },
      "icon": "journal.sign_brooch"
    }
  ]
}
`,kt=`{
  "title": {
    "ru": "Глава 5. Лаборатория",
    "en": "Chapter 5. The Laboratory"
  },
  "draft": true,
  "price": 30,
  "room": "laboratory",
  "guide": "roachOld",
  "parts": [
    {
      "scene": "guide",
      "background": "room.bedroom",
      "music": "music.story",
      "steps": [
        {
          "speaker": "roachOld",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Наверх все спешат. А лестница, между прочим, та же самая.",
            "en": "Everyone hurries upstairs. Yet the stairs, mind you, are the same."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "В лабораторию.",
            "en": "To the laboratory."
          }
        },
        {
          "speaker": "roachOld",
          "emotion": "thinking",
          "text": {
            "ru": "Тридцать светлячков. Колени у меня старые, а ступени ещё старше.",
            "en": "Thirty fireflies. My knees are old, and the steps are older still."
          }
        }
      ]
    },
    {
      "scene": "arrival",
      "background": "room.laboratory",
      "music": "music.story",
      "steps": [
        {
          "text": {
            "ru": "В лаборатории зажглась лампа.",
            "en": "A lamp lit up in the laboratory."
          }
        },
        {
          "speaker": "rat",
          "emotion": "sad",
          "side": "left",
          "text": {
            "ru": "Пропали свечи. Все.",
            "en": "The candles are gone. All of them."
          }
        },
        {
          "icon": "journal.trace_candles",
          "text": {
            "ru": "На доске мелом чужой рукой было написано: «Как накрывают стол?»",
            "en": "On the board, in someone else’s hand, was written in chalk: “How do you lay a table?”"
          }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": {
            "ru": "Это он писал?",
            "en": "Did he write that?"
          }
        },
        {
          "speaker": "rat",
          "emotion": "calm",
          "text": {
            "ru": "Я спросила, для какого опыта. Он сказал: для красоты. Странный опыт.",
            "en": "I asked what experiment it was for. He said: for beauty. A strange experiment."
          }
        }
      ]
    },
    {
      "scene": "task",
      "background": "room.laboratory",
      "steps": [
        {
          "speaker": "rat",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Сыграй со мной в кварто. А я пока всё запишу.",
            "en": "Play Quarto with me. Meanwhile I’ll write everything down."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Сыграю.",
            "en": "I will."
          }
        }
      ]
    },
    {
      "task": "quarto",
      "games": 3,
      "thanks": 18
    },
    {
      "scene": "clue",
      "background": "room.laboratory",
      "steps": [
        {
          "speaker": "rat",
          "emotion": "happy",
          "side": "left",
          "text": {
            "ru": "Хорошие партии. Я всё записала.",
            "en": "Good games. I wrote it all down."
          }
        },
        {
          "speaker": "rat",
          "emotion": "calm",
          "text": {
            "ru": "Он спросил, как красиво накрыть стол. И записывал ответы на лапе.",
            "en": "He asked how to lay a table nicely. And wrote the answers on his paw."
          }
        },
        {
          "speaker": "rat",
          "emotion": "surprised",
          "text": {
            "ru": "Дама в короне ему подсказывала.",
            "en": "The lady in the crown was prompting him."
          }
        },
        {
          "icon": "journal.sign_note",
          "text": {
            "ru": "Паучок нашёл записку.",
            "en": "The Spider found a note."
          }
        },
        {
          "text": {
            "ru": "«Он не злой. Но манеры ужасные. Поднимайся не спеша. К.»",
            "en": "“He isn’t wicked. But his manners are dreadful. Come up slowly. K.”"
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Не спеша. Хорошо.",
            "en": "Slowly. All right."
          }
        }
      ]
    }
  ],
  "journal": [
    {
      "title": {
        "ru": "Надпись мелом",
        "en": "Chalk writing"
      },
      "text": {
        "ru": "«Как накрывают стол?» Свечи он взял тоже.",
        "en": "“How do you lay a table?” He took the candles too."
      },
      "icon": "journal.trace_candles"
    },
    {
      "title": {
        "ru": "Записка",
        "en": "A note"
      },
      "text": {
        "ru": "«Он не злой. Но манеры ужасные. Поднимайся не спеша. К.»",
        "en": "“He isn’t wicked. But his manners are dreadful. Come up slowly. K.”"
      },
      "icon": "journal.sign_note"
    }
  ]
}
`,At=`{
  "title": {
    "ru": "Глава 6. Библиотека",
    "en": "Chapter 6. The Library"
  },
  "draft": true,
  "price": 35,
  "room": "library",
  "guide": "roachOld",
  "parts": [
    {
      "scene": "guide",
      "background": "room.laboratory",
      "music": "music.story",
      "steps": [
        {
          "speaker": "roachOld",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Библиотека. Там тихо. Тишину тоже надо уметь найти.",
            "en": "The library. It’s quiet there. Quiet, too, is something you have to know how to find."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Ведите.",
            "en": "Lead the way."
          }
        },
        {
          "speaker": "roachOld",
          "emotion": "thinking",
          "text": {
            "ru": "Тридцать пять светлячков. Не спеши, лестница никуда не денется.",
            "en": "Thirty-five fireflies. Don’t hurry, the stairs aren’t going anywhere."
          }
        }
      ]
    },
    {
      "scene": "arrival",
      "background": "room.library",
      "music": "music.story",
      "steps": [
        {
          "text": {
            "ru": "В библиотеке зажглась лампа.",
            "en": "A lamp lit up in the library."
          }
        },
        {
          "speaker": "bat",
          "emotion": "sad",
          "side": "left",
          "text": {
            "ru": "На полке пустое место.",
            "en": "There’s an empty space on the shelf."
          }
        },
        {
          "icon": "journal.trace_book",
          "text": {
            "ru": "В формуляре было записано: «Как принимать гостей». Взял Енот.",
            "en": "The library card read: “How to Receive Guests”. Taken by the Raccoon."
          }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": {
            "ru": "Он вернёт?",
            "en": "Will he bring it back?"
          }
        },
        {
          "speaker": "bat",
          "emotion": "calm",
          "text": {
            "ru": "Книгу он обещал вернуть. Все обещают.",
            "en": "He promised to bring the book back. Everyone promises."
          }
        }
      ]
    },
    {
      "scene": "task",
      "background": "room.library",
      "steps": [
        {
          "speaker": "bat",
          "emotion": "sad",
          "side": "left",
          "text": {
            "ru": "Сыграй со мной, а то я хандрю.",
            "en": "Play with me, or I’ll mope."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Сыграю.",
            "en": "I will."
          }
        }
      ]
    },
    {
      "task": "sudoku",
      "games": 3,
      "thanks": 20
    },
    {
      "scene": "clue",
      "background": "room.library",
      "steps": [
        {
          "speaker": "bat",
          "emotion": "happy",
          "side": "left",
          "text": {
            "ru": "Хандра прошла. Почти.",
            "en": "The moping has passed. Almost."
          }
        },
        {
          "speaker": "bat",
          "emotion": "calm",
          "text": {
            "ru": "Он впервые в жизни взял книгу по правилам. С формуляром.",
            "en": "For the first time in his life he borrowed a book properly. With a library card."
          }
        },
        {
          "speaker": "bat",
          "emotion": "happy",
          "text": {
            "ru": "И очень этим гордился.",
            "en": "And he was very proud of it."
          }
        },
        {
          "speaker": "bat",
          "emotion": "thinking",
          "text": {
            "ru": "Чердак заперт. Замок открывается, если распутать созвездие.",
            "en": "The attic is locked. The lock opens if you untangle the constellation."
          }
        },
        {
          "icon": "journal.sign_bookmark",
          "text": {
            "ru": "В соседней книге лежала закладка. На главе «Как просить прощения».",
            "en": "In the next book there was a bookmark. At the chapter “How to Say Sorry”."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Заложена для него.",
            "en": "Marked for him."
          }
        },
        {
          "text": {
            "ru": "Паучок поправил шляпу. Выше был только чердак.",
            "en": "The Spider straightened his hat. Above was only the attic."
          }
        }
      ]
    }
  ],
  "journal": [
    {
      "title": {
        "ru": "Формуляр",
        "en": "The library card"
      },
      "text": {
        "ru": "«Как принимать гостей». Взял Енот. По правилам.",
        "en": "“How to Receive Guests”. Taken by the Raccoon. Properly."
      },
      "icon": "journal.trace_book"
    },
    {
      "title": {
        "ru": "Закладка",
        "en": "The bookmark"
      },
      "text": {
        "ru": "Глава «Как просить прощения». Заложена для него.",
        "en": "The chapter “How to Say Sorry”. Marked for him."
      },
      "icon": "journal.sign_bookmark"
    }
  ]
}
`,jt=`{
  "title": {
    "ru": "Глава 7. Чердак",
    "en": "Chapter 7. The Attic"
  },
  "price": 45,
  "room": "attic",
  "guide": "roachOld",
  "parts": [
    {
      "scene": "guide",
      "background": "room.library",
      "music": "music.story",
      "steps": [
        {
          "speaker": "roachOld",
          "emotion": "calm",
          "side": "left",
          "text": {
            "ru": "Вот и чердак. Выше только крыша, а на крыше делать нечего.",
            "en": "Here’s the attic. Above it there’s only the roof, and there’s nothing to do on the roof."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "А вы?",
            "en": "And you?"
          }
        },
        {
          "speaker": "roachOld",
          "emotion": "thinking",
          "text": {
            "ru": "Я до порога. Дальше лестница не моя.",
            "en": "I’ll see you to the door. Past it, the stairs aren’t mine."
          }
        },
        {
          "speaker": "roachOld",
          "emotion": "calm",
          "text": {
            "ru": "Сорок пять светлячков. За такую лестницу это недорого.",
            "en": "Forty-five fireflies. For stairs like these, that’s not expensive."
          }
        }
      ]
    },
    {
      "task": "constellation",
      "games": 1
    },
    {
      "scene": "arrival",
      "background": "room.attic",
      "music": "music.story",
      "steps": [
        {
          "illustration": "story.ch07.attic",
          "text": {
            "ru": "На чердаке горели свечи. Стол был накрыт скатертью с вишнями.",
            "en": "Candles were burning in the attic. The table was laid with the cherry tablecloth."
          }
        },
        {
          "text": {
            "ru": "На стуле лежала подушка. На подушке сидела принцесса Котлетка и выигрывала.",
            "en": "A pillow lay on a chair. On the pillow sat Princess Kotletka, winning."
          }
        },
        {
          "speaker": "kotletka",
          "emotion": "happy",
          "side": "left",
          "text": {
            "ru": "Ты долго. Я успела обыграть его четыре раза.",
            "en": "You took your time. I’ve beaten him four times already."
          }
        },
        {
          "speaker": "raccoon",
          "emotion": "upset",
          "text": {
            "ru": "Пять. Но пятый не считается, я чихнул.",
            "en": "Five. But the fifth doesn’t count, I sneezed."
          }
        },
        {
          "speaker": "spider",
          "emotion": "surprised",
          "side": "right",
          "text": {
            "ru": "Ты цела?",
            "en": "Are you all right?"
          }
        },
        {
          "speaker": "kotletka",
          "emotion": "calm",
          "text": {
            "ru": "Разумеется. Садись. Только сначала пусть он объяснит.",
            "en": "Of course. Sit down. But first let him explain."
          }
        }
      ]
    },
    {
      "scene": "confession",
      "background": "room.attic",
      "steps": [
        {
          "speaker": "raccoon",
          "emotion": "upset",
          "side": "left",
          "text": {
            "ru": "Я хотел пригласить на ужин. По-настоящему. Со скатертью.",
            "en": "I wanted to invite her to dinner. Properly. With a tablecloth."
          }
        },
        {
          "speaker": "raccoon",
          "emotion": "upset",
          "text": {
            "ru": "Но я не знал, как приглашают. Я знаю только, как уносят.",
            "en": "But I didn’t know how you invite someone. I only know how you carry them off."
          }
        },
        {
          "speaker": "kotletka",
          "emotion": "calm",
          "text": {
            "ru": "Я ему говорила, что это разные вещи.",
            "en": "I told him those are different things."
          }
        },
        {
          "speaker": "raccoon",
          "emotion": "surprised",
          "text": {
            "ru": "Я взял книгу. Там сказано: гостю нужна подушка, свечи и угощение.",
            "en": "I took the book. It says a guest needs a pillow, candles and a treat."
          }
        },
        {
          "speaker": "raccoon",
          "emotion": "upset",
          "text": {
            "ru": "Про «спросить» там на другой странице. Я до неё не дошёл.",
            "en": "The part about “asking” is on another page. I didn’t get that far."
          }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": {
            "ru": "А пирог?",
            "en": "And the pie?"
          }
        },
        {
          "speaker": "raccoon",
          "emotion": "sly",
          "text": {
            "ru": "Пирог я съел. Это не для ужина. Это я просто енот.",
            "en": "I ate the pie. That wasn’t for dinner. That’s just me being a raccoon."
          }
        }
      ]
    },
    {
      "scene": "game",
      "background": "room.attic",
      "steps": [
        {
          "speaker": "kotletka",
          "emotion": "happy",
          "side": "left",
          "text": {
            "ru": "Сыграй с ним. Он проигрывает очень вежливо, я научила.",
            "en": "Play with him. He loses very politely, I taught him."
          }
        },
        {
          "speaker": "raccoon",
          "emotion": "happy",
          "text": {
            "ru": "Если выиграю, все остаются на ужин. Если проиграю, тоже. Я так придумал.",
            "en": "If I win, everyone stays for dinner. If I lose, the same. That’s my plan."
          }
        }
      ]
    },
    {
      "task": "starpath",
      "games": 1
    },
    {
      "scene": "ending",
      "background": "room.attic",
      "steps": [
        {
          "text": {
            "ru": "Потом Енот обошёл весь дом. Он нёс скатерть, подушку, свечи и книгу.",
            "en": "Afterwards the Raccoon went all around the house. He carried the tablecloth, the pillow, the candles and the book."
          }
        },
        {
          "text": {
            "ru": "Он сказал «простите» восемь раз. На девятый у него получилось хорошо.",
            "en": "He said “sorry” eight times. The ninth time he got it right."
          }
        },
        {
          "speaker": "opossumMom",
          "emotion": "happy",
          "side": "left",
          "text": {
            "ru": "Пирог я испеку новый. На семерых.",
            "en": "I’ll bake a new pie. Enough for seven."
          }
        },
        {
          "text": {
            "ru": "Светлячки вернулись в лампы. Все сразу, как будто ждали за дверью.",
            "en": "The fireflies returned to the lamps. All at once, as if they had been waiting behind the door."
          }
        },
        {
          "speaker": "kotletka",
          "emotion": "calm",
          "text": {
            "ru": "Теперь о деле. Здесь надо всё обустроить как следует. У меня есть список.",
            "en": "Now, to business. Everything here must be set up properly. I have a list."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": {
            "ru": "Длинный?",
            "en": "A long one?"
          }
        },
        {
          "speaker": "kotletka",
          "emotion": "happy",
          "text": {
            "ru": "Очень.",
            "en": "Very."
          }
        },
        {
          "speaker": "raccoon",
          "emotion": "sly",
          "text": {
            "ru": "У меня как раз кое-что есть. Почти всё моё.",
            "en": "I happen to have a few things. Almost all of them mine."
          }
        },
        {
          "illustration": "story.ch07.ending",
          "text": {
            "ru": "На чердаке было тепло. Внизу кто-то ставил чайник.",
            "en": "It was warm in the attic. Downstairs someone was putting the kettle on."
          }
        }
      ]
    }
  ]
}
`,Mt=`{
  "title": { "ru": "Пролог. Пропажа", "en": "Prologue. The Kidnapping" },
  "price": 0,
  "room": "living",
  "parts": [
    {
      "scene": "tea",
      "background": "room.living",
      "music": "music.story",
      "steps": [
        {
          "illustration": "story.prologue.tea",
          "text": {
            "ru": "В доме колдуньи пили чай. Колдуньи не было дома, но чаю это не мешало.",
            "en": "Tea was being drunk in the witch's house. The witch was not at home, but that did not bother the tea."
          }
        },
        {
          "speaker": "kotletka",
          "emotion": "calm",
          "side": "left",
          "text": { "ru": "Ещё чашку. И не сутулься, пожалуйста.", "en": "Another cup. And don't slouch, please." }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": { "ru": "Я не сутулюсь. Это шляпа.", "en": "I'm not slouching. It's the hat." }
        },
        {
          "illustration": "story.prologue.dark",
          "text": {
            "ru": "Тут свет погас сразу во всём доме. Так бывает, когда светлячки чего-нибудь пугаются.",
            "en": "Then the light went out all over the house at once. That happens when the fireflies get frightened of something."
          }
        },
        {
          "illustration": "story.prologue.tail",
          "text": {
            "ru": "Что-то прошуршало. Звякнула ложка. Потом стало тихо.",
            "en": "Something rustled. A spoon clinked. Then it was quiet."
          }
        },
        {
          "speaker": "spider",
          "emotion": "surprised",
          "text": { "ru": "Котлетка?", "en": "Kotletka?" }
        },
        {
          "illustration": "story.prologue.cup",
          "text": {
            "ru": "Чашка принцессы Котлетки была ещё тёплая. Самой принцессы Котлетки не было.",
            "en": "Princess Kotletka's cup was still warm. The princess herself was gone."
          }
        }
      ]
    },
    {
      "scene": "arrival",
      "background": "room.living",
      "steps": [
        {
          "speaker": "cat",
          "emotion": "calm",
          "side": "left",
          "text": { "ru": "Всё погасло и убежало. А я как раз устроился.", "en": "Everything went dark and ran off. And I had only just settled in." }
        },
        {
          "speaker": "spider",
          "emotion": "puzzled",
          "side": "right",
          "text": { "ru": "Вы не видели, кто здесь был?", "en": "Did you see who was here?" }
        },
        {
          "speaker": "catYoung",
          "emotion": "surprised",
          "icon": "journal.trace_tail",
          "text": { "ru": "Мы видели хвост. Полосатый. Он очень спешил.", "en": "We saw a tail. A striped one. It was in a great hurry." }
        },
        {
          "speaker": "catElder",
          "emotion": "calm",
          "text": { "ru": "И ни с кем не поздоровался. Это невежливо.", "en": "And it didn't say hello to anyone. That is impolite." }
        }
      ]
    },
    {
      "scene": "task",
      "background": "room.living",
      "steps": [
        {
          "speaker": "catYoung",
          "emotion": "happy",
          "side": "left",
          "text": { "ru": "В темноте всё равно делать нечего. Сыграй с нами в калах.", "en": "There's nothing to do in the dark anyway. Play Kalah with us." }
        },
        {
          "speaker": "cat",
          "emotion": "calm",
          "text": { "ru": "Светлячки слетаются на игру. Проиграешь – прилетит один. Выиграешь – больше. Так уж они устроены.", "en": "Fireflies flock to a game. Lose – one flies in. Win – more. That's just how they are." }
        }
      ]
    },
    { "task": "kalah", "games": 1 },
    {
      "scene": "clue",
      "background": "room.living",
      "steps": [
        {
          "speaker": "catYoung",
          "emotion": "calm",
          "side": "left",
          "text": { "ru": "Хвост убежал туда. К кухне.", "en": "The tail ran that way. Towards the kitchen." }
        },
        {
          "icon": "journal.sign_ribbon",
          "text": {
            "ru": "На дверной ручке была завязана ленточка. Аккуратно, на два узла.",
            "en": "A ribbon was tied to the door handle. Neatly, in a double knot."
          }
        },
        {
          "speaker": "spider",
          "emotion": "calm",
          "side": "right",
          "text": { "ru": "Это её ленточка. Она завязала её сама.", "en": "That's her ribbon. She tied it herself." }
        },
        {
          "speaker": "cat",
          "emotion": "calm",
          "text": { "ru": "Два узла. Кто спешит, завязывает один.", "en": "Two knots. Someone in a hurry ties just one." }
        },
        {
          "text": {
            "ru": "Паучок поправил шляпу и вышел на лестницу.",
            "en": "The Spider straightened his hat and went out onto the stairs."
          }
        }
      ]
    }
  ],
  "journal": [
    {
      "title": { "ru": "Полосатый хвост", "en": "A striped tail" },
      "text": { "ru": "Коты видели хвост. Он спешил к кухне и не поздоровался.", "en": "The Cats saw a tail. It hurried to the kitchen and didn't say hello." },
      "icon": "journal.trace_tail"
    },
    {
      "title": { "ru": "Ленточка", "en": "The ribbon" },
      "text": { "ru": "Завязана на ручке двери, на два узла. Она не торопилась.", "en": "Tied to the door handle in a double knot. She wasn't in a hurry." },
      "icon": "journal.sign_ribbon"
    }
  ]
}
`,R={spider:{name:{ru:`Паучок`,en:`Spider`},gender:`m`},kotletka:{name:{ru:`Принцесса Котлетка`,en:`Princess Kotletka`},gender:`f`},raccoon:{name:{ru:`Воришка Енот`,en:`Raccoon the Thief`},gender:`m`},witch:{name:{ru:`Колдунья`,en:`The Witch`},gender:`f`},cat:{name:{ru:`Серый`,en:`Grey`},gender:`m`},catElder:{name:{ru:`Плюша`,en:`Plusha`},gender:`f`},catYoung:{name:{ru:`Мелочь`,en:`Smidge`},gender:`m`},toad:{name:{ru:`Жаба Погребная`,en:`Cellar Toad`},gender:`f`},owl:{name:{ru:`Сова Соня`,en:`Sleepy Owl`},gender:`f`},frog:{name:{ru:`Лягушонок`,en:`Little Frog`},gender:`m`},bat:{name:{ru:`Летучая мышь`,en:`The Bat`},gender:`f`},bookworm:{name:{ru:`Книжный червь`,en:`The Bookworm`},gender:`m`},ghost:{name:{ru:`Чердачный дух`,en:`Attic Ghost`},gender:`m`},mice:{name:{ru:`Мыши`,en:`The Mice`},gender:`pl`},mosquitoes:{name:{ru:`Комары`,en:`The Mosquitoes`},gender:`pl`},mosquitoCabin:{name:{ru:`Юнга`,en:`The Cabin Boy`},gender:`m`},mosquitoBosun:{name:{ru:`Боцман`,en:`The Bosun`},gender:`m`},mosquitoCaptain:{name:{ru:`Капитан`,en:`The Captain`},gender:`m`},mouse:{name:{ru:`Мышь`,en:`The Mouse`},gender:`f`},mouseKeeper:{name:{ru:`Кладовщик`,en:`The Storekeeper`},gender:`m`},mouseGranny:{name:{ru:`Бабушка-мышь`,en:`Granny Mouse`},gender:`f`},chernika:{name:{ru:`Чернинка`,en:`Cherninka`},gender:`f`},rat:{name:{ru:`Лабораторная Крыса`,en:`The Lab Rat`},gender:`f`},opossumMom:{name:{ru:`Мама-Опоссум`,en:`Mama Possum`},gender:`f`},moth:{name:{ru:`Моль`,en:`The Moth`},gender:`f`},roachYoung:{name:{ru:`Молодой тараканчик`,en:`Young Roach`},gender:`m`},roachMedium:{name:{ru:`Усатый тараканчик`,en:`Whiskered Roach`},gender:`m`},roachOld:{name:{ru:`Седой тараканчик`,en:`Grey Roach`},gender:`m`}},Nt={easy:`roachYoung`,medium:`roachMedium`,hard:`roachOld`},Pt={easy:`catYoung`,medium:`catElder`,hard:`cat`},Ft={easy:`mosquitoCabin`,medium:`mosquitoBosun`,hard:`mosquitoCaptain`},It={easy:`mouse`,medium:`mouseKeeper`,hard:`mouseGranny`},Lt={mosquitoes:`mosquitoCaptain`,mice:`mouseGranny`},Rt={easy:`thinking`,medium:`happy`,hard:`sly`},zt=`raccoon`,z={calm:`calm`,glad:`happy`,upset:`grumpy`,surprised:`surprised`,thinking:`thinking`,won:`sly`,lost:`sad`},B={calm:`calm`,glad:`happy`,upset:`sad`,surprised:`surprised`,thinking:`calm`,won:`happy`,lost:`sad`},Bt={spider:{calm:`calm`,glad:`happy`,upset:`puzzled`,surprised:`surprised`,thinking:`determined`,won:`happy`,lost:`sad`},cat:B,catElder:z,catYoung:z,kotletka:B,raccoon:{calm:`sly`,glad:`happy`,upset:`upset`,surprised:`surprised`,thinking:`sly`,won:`happy`,lost:`upset`},roachYoung:z,roachMedium:{...z,thinking:`doubtful`},roachOld:z,bat:z,mosquitoes:z,mosquitoCabin:z,mosquitoBosun:z,mosquitoCaptain:z,mouseKeeper:z,mouseGranny:z,rat:B,moth:B,mice:B,mouse:B,opossumMom:B,chernika:{calm:`tender`,glad:`proud`,upset:`sleepy`,surprised:`thinking`,thinking:`thinking`,won:`proud`,lost:`sleepy`}},Vt=[`ru`,`en`],Ht=[`title`,`draft`,`price`,`room`,`guide`,`parts`,`journal`],Ut=[`scene`,`background`,`music`,`steps`],Wt=[`task`,`games`,`thanks`],Gt=[`text`,`speaker`,`name`,`emotion`,`side`,`background`,`icon`,`sound`,`music`,`illustration`],Kt=[`speaker`,`name`,`emotion`,`side`,`background`,`icon`],V=e=>typeof e==`object`&&!!e&&!Array.isArray(e),H=e=>typeof e==`string`?`"${e}"`:JSON.stringify(e),qt=(e,t)=>typeof e==`number`&&Number.isInteger(e)&&e>=t;function Jt(e){let t=`char.${e}.`;return Ee(t).map(e=>e.slice(t.length))}function Yt(e,t,n=`${t}.json`){let r;try{r=JSON.parse(e)}catch(t){return{ok:!1,errors:[`${n}: ${en(e,t)}`]}}return Xt(r,t,n)}function Xt(e,t,n=`${t}.json`){let r=[],i=(e,t)=>r.push(`${n}${e?`, ${e}`:``}: ${t}`);if(!V(e))return i(``,`файл должен быть объектом в фигурных скобках { … }`),{ok:!1,errors:r};U(e,Ht,``,i);let a=W(e.title,`title`,i),o=t===`prologue`;e.draft!==void 0&&typeof e.draft!=`boolean`&&i(`draft`,`черновик – true или false`);let s=e.price;qt(s,0)?o&&s!==0&&i(`price`,`пролог бесплатный: цена должна быть 0`):i(`price`,`цена – целое число светлячков, 0 или больше (сейчас ${H(s)})`);let c=null;typeof e.room==`string`&&e.room in w?c=e.room:i(`room`,`неизвестная комната ${H(e.room)} (бывают: ${Object.keys(w).join(`, `)})`);let l=null;e.guide===void 0?o||i(`guide`,`кто провожает – например "roachYoung" (у пролога не нужен)`):o?i(`guide`,`у пролога проводника нет`):typeof e.guide==`string`&&e.guide in R?l=e.guide:i(`guide`,`неизвестный персонаж ${H(e.guide)} (бывают: ${Object.keys(R).join(`, `)})`);let u=[];if(!Array.isArray(e.parts)||e.parts.length<2)i(`parts`,`нужен список частей в квадратных скобках: сцена проводника, сцены и поручения`);else{let t=c?w[c].gameIds:[];e.parts.forEach((e,n)=>{let r=Zt(e,`часть ${n+1}`,t,i);r&&u.push(r)});let n=e.parts[0];V(n)&&n.task!==void 0&&i(`часть 1`,`первая часть – сцена проводника (у пролога – вступление), а не поручение`)}let d=[];return e.journal!==void 0&&(Array.isArray(e.journal)?e.journal.forEach((e,t)=>{let n=`journal, запись ${t+1}`;if(!V(e))return i(n,`{ "title": { "ru": "…", "en": "…" }, "text": { … }, "icon": "journal.…" }`);U(e,[`title`,`text`,`icon`],n,i);let r=W(e.title,`${n}, title`,i),a=W(e.text,`${n}, text`,i),o=G(e.icon,`${n}, icon`,i,!0);r&&a&&o&&d.push({title:r,text:a,icon:o})}):i(`journal`,`список записей: [ { "title": …, "text": …, "icon": "journal.…" }, … ]`)),r.length>0||!a||!c||typeof s!=`number`?{ok:!1,errors:r}:{ok:!0,chapter:{id:t,title:a,draft:e.draft===!0,price:s,room:c,guide:l,parts:u,journal:d}}}function U(e,t,n,r){for(let i of Object.keys(e))t.includes(i)||r(n,`неизвестное поле "${i}" (бывают: ${t.join(`, `)})`)}function Zt(e,t,n,r){if(!V(e))return r(t,`часть – объект в фигурных скобках: сцена { "scene": … } или поручение { "task": … }`),null;if(e.task!==void 0){U(e,Wt,t,r);let{task:i,games:a,thanks:o}=e,s=!0;return typeof i==`string`&&n.includes(i)||(s=!1,r(`${t}, task`,`игра жильца этой комнаты (${n.join(`, `)||`–`}), а не ${H(i)}`)),qt(a,1)||(s=!1,r(`${t}, games`,`сколько партий сыграть – целое число от 1 (сейчас ${H(a)})`)),o!==void 0&&!qt(o,1)&&(s=!1,r(`${t}, thanks`,`цена «Отблагодарить светлячками» – целое число от 1 (сейчас ${H(o)}); нет поля – только партии`)),s?{kind:`task`,game:i,games:a,thanks:o??null}:null}U(e,Ut,t,r),(typeof e.scene!=`string`||e.scene.trim()===``)&&r(`${t}, scene`,`имя сцены из библии – например "arrival"`);let i=G(e.background,`${t}, background`,r,!0),a=$t(e.music,`${t}, music`,`music`,r),o=[];if(!Array.isArray(e.steps)||e.steps.length===0?r(`${t}, steps`,`нужен список шагов в квадратных скобках, хотя бы один шаг`):e.steps.forEach((e,n)=>{let i=Qt(e,`${t}, шаг ${n+1}`,r);i&&o.push(i)}),!i||typeof e.scene!=`string`)return null;let s={kind:`scene`,scene:e.scene,background:i,steps:o};return a&&(s.music=a),s}function Qt(e,t,n){if(!V(e))return n(t,`шаг должен быть объектом в фигурных скобках { … }`),null;U(e,Gt,t,n);let r=W(e.text,`${t}, text`,n),i=$t(e.sound,`${t}, sound`,`sfx`,n),a=$t(e.music,`${t}, music`,`music`,n);if(e.illustration!==void 0){for(let r of Kt)e[r]!==void 0&&n(t,`у иллюстрации не бывает поля "${r}" – она без портретов`);let o=G(e.illustration,`${t}, illustration`,n,!0);if(!o||!r)return null;let s={kind:`illustration`,illustration:o,text:r};return i&&(s.sound=i),a&&(s.music=a),s}let o={kind:`line`,text:r??{ru:``,en:``}};if(e.speaker!==void 0&&(typeof e.speaker==`string`&&e.speaker in R?o.speaker=e.speaker:n(t,`неизвестный персонаж ${H(e.speaker)} (бывают: ${Object.keys(R).join(`, `)})`)),e.name!==void 0){e.speaker===void 0&&n(t,`подпись (name) указана, а говорящего (speaker) нет`);let r=W(e.name,`${t}, name`,n);r&&(o.name=r)}if(e.emotion!==void 0){if(typeof e.emotion!=`string`)n(t,`эмоция – слово в кавычках, например "happy"`);else if(e.speaker===void 0)n(t,`эмоция указана, а говорящего (speaker) нет`);else if(o.speaker){let r=Jt(o.speaker);r.length>0&&!r.includes(e.emotion)?n(t,`у персонажа "${o.speaker}" нет эмоции "${e.emotion}" (есть: ${r.join(`, `)})`):o.emotion=e.emotion}}e.side!==void 0&&(e.side===`left`||e.side===`right`?o.side=e.side:n(t,`сторона – "left" (слева) или "right" (справа), а не ${H(e.side)}`));let s=G(e.background,`${t}, background`,n,!1);s&&(o.background=s);let c=G(e.icon,`${t}, icon`,n,!1);return c&&(o.icon=c),i&&(o.sound=i),a&&(o.music=a),r?o:null}function W(e,t,n){if(!V(e))return n(t,`текст на двух языках: { "ru": "…", "en": "…" } (сейчас ${H(e)})`),null;let r=!0;for(let i of Vt)(typeof e[i]!=`string`||e[i].trim()===``)&&(n(t,`нет текста на языке "${i}"`),r=!1);return r?e:null}function G(e,t,n,r){return e===void 0&&!r?null:typeof e==`string`&&C(e)?e:(n(t,`картинки ${H(e)} нет в манифесте (src/shared/assets/manifest.json)`),null)}function $t(e,t,n,r){return e===void 0?null:typeof e==`string`&&e.startsWith(`${n}.`)&&Ce(e)?e:(r(t,`${n===`sfx`?`звука`:`музыки`} ${H(e)} нет в манифесте (ключ должен начинаться с "${n}.")`),null)}function en(e,t){let n=t instanceof Error?t.message:String(t),r=null,i=null,a=/line (\d+) column (\d+)/.exec(n),o=/position (\d+)/.exec(n);if(a)r=Number(a[1]),i=Number(a[2]);else if(o){let t=e.slice(0,Number(o[1])).split(`
`);r=t.length,i=(t[t.length-1]?.length??0)+1}let s=`проверьте запятые, кавычки и скобки рядом`;if(o!==null&&Number(o[1])>=e.trimEnd().length||/end of JSON|Unexpected end/i.test(n)?s=`файл обрывается: не хватает закрывающей скобки } или ]`:/double-quoted property name/i.test(n)?s=`лишняя запятая перед } или ], либо имя поля без кавычек`:/after (property value|array element)/i.test(n)?s=`пропущена запятая между полями или шагами`:/control character/i.test(n)?s=`внутри текста перенос строки – пишите текст в одну строку`:/Unexpected token/i.test(n)&&(s=`лишний или неверный символ (кавычки должны быть прямыми ")`),r===null)return`ошибка в записи JSON – ${s}`;let c=e.split(`
`);if(s.startsWith(`пропущена запятая`)&&/^\s*$/.test(c[r-1]?.slice(0,(i??1)-1)??``)){let e=r-1;for(;e>1&&(c[e-1]??``).trim()===``;)e--;if(e>=1)return`ошибка в записи JSON, конец строки ${e}: пропущена запятая\n    ${c[e-1]?.trim()??``}`}let l=c[r-1]?.trim()??``;return`ошибка в записи JSON, строка ${r}, столбец ${i}: ${s}\n    ${l}`}var tn=Object.assign({"../content/chapters/ch01.json":Tt,"../content/chapters/ch02.json":Et,"../content/chapters/ch03.json":Dt,"../content/chapters/ch04.json":Ot,"../content/chapters/ch05.json":kt,"../content/chapters/ch06.json":At,"../content/chapters/ch07.json":jt,"../content/chapters/prologue.json":Mt});function nn(){let e={},t=[],n=v;for(let[r,i]of Object.entries(tn)){let a=r.split(`/`).pop()??r,o=a.replace(/\.json$/,``);if(!n.includes(o)){t.push(`${a}: такой главы нет в списке CHAPTER_ORDER (config/economy.ts): ${v.join(`, `)}`);continue}let s=Yt(i,o,a);s.ok?e[o]=s.chapter:t.push(...s.errors)}for(let e of v)`../content/chapters/${e}.json`in tn||t.push(`${e}.json: файла главы нет в src/content/chapters`);let r=new Map;for(let n of v){let i=e[n]?.room;if(!i)continue;let a=r.get(i);a?t.push(`${n}.json, room: комнату "${i}" уже открывает ${a}.json`):r.set(i,n)}return{chapters:e,errors:t}}var rn=nn(),an=rn.chapters,on=rn.errors;on.length>0&&console.error(`[story] Ошибки в главах:\n${on.join(`
`)}`);function K(e){return an[e]}function sn(e){return v.find(t=>!e.includes(t))??null}function cn(e){return v.indexOf(e)}function ln(e){return e.flatMap(e=>{let t=an[e]?.room;return t?[t]:[]})}function un(e){return v.find(t=>an[t]?.room===e)??null}function dn(e){let t=v.indexOf(e);return t>0?v[t-1]??null:null}function fn(){return{wall:x(`wall`),floor:x(`floor`),owned:[],furniture:{},smalls:[],scenes:[],quests:{},variants:{}}}function pn(){return{language:`ru`,music:!0,sfx:!0,vibration:!0,notifications:{enabled:!0,hour:8,minute:0},gameOptions:{}}}function q(e){return{version:11,createdAt:e.toISOString(),settings:pn(),fireflies:0,chapters:[],items:[],counters:{games:0,wins:0,winsHard:0,winsByRoom:{}},stats:{},activeGame:null,secrets:[],litRooms:[],story:{},decor:fn()}}function mn(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function hn(e,t,n){return{...e,activeGame:{...t,state:null,startedAt:n.toISOString()}}}function gn(e,t){return e.activeGame?{...e,activeGame:{...e.activeGame,state:t}}:e}function _n(e){return{...e,activeGame:null}}function vn(e,t,n){let r=e.activeGame;if(!r)return{save:e,fireflies:0};let i=oe(t,r.difficulty),a=t===`win`,o=mn(n),s=e.stats[o]??{games:0,wins:0,fireflies:0},c=Nn(e)?{games:e.counters.games+1,wins:e.counters.wins+ +!!a,winsHard:e.counters.winsHard+(a&&r.difficulty===`hard`?1:0),winsByRoom:{...e.counters.winsByRoom,[r.roomId]:(e.counters.winsByRoom[r.roomId]??0)+ +!!a}}:e.counters,l=Tn(e,r.roomId,r.gameId);return{fireflies:i,save:{...nr(e,r,a),story:l,fireflies:e.fireflies+i,counters:c,stats:{...e.stats,[o]:{games:s.games+1,wins:s.wins+ +!!a,fireflies:s.fireflies+i}},activeGame:null}}}function J(e,t){return e.story[t]??{part:1,games:0}}function yn(e,t){let n=K(t);return!n||!e.chapters.includes(t)?!1:J(e,t).part>=n.parts.length}function bn(e,t){let n=K(t);if(!n||!e.chapters.includes(t))return null;let r=J(e,t).part,i=n.parts[r];return i?{index:r,part:i}:null}function xn(e,t){let n=bn(e,t);return n?.part.kind===`task`?n.part:null}function Sn(e,t){let n=K(t),r=bn(e,t);if(!n||!r)return[];let i=[];for(let e=r.index;n.parts[e]?.kind===`scene`;e++)i.push(e);return i}function Cn(e,t,n){return{...e,story:{...e.story,[t]:n}}}function wn(e,t){let n=Sn(e,t).at(-1);return n===void 0?e:Cn(e,t,{part:n+1,games:0})}function Tn(e,t,n){let r=un(t);if(!r)return e.story;let i=xn(e,r);if(!i||i.game!==n)return e.story;let a=J(e,r),o=a.games+1;return{...e.story,[r]:o>=i.games?{part:a.part+1,games:0}:{part:a.part,games:o}}}function En(e,t){let n=xn(e,t);if(!n||n.thanks===null)return{ok:!1,error:`locked`};if(e.fireflies<n.thanks)return{ok:!1,error:`notEnough`,missing:n.thanks-e.fireflies};let r=J(e,t);return{ok:!0,save:Cn({...e,fireflies:e.fireflies-n.thanks},t,{part:r.part+1,games:0})}}function Dn(e){let t=sn(e.chapters);if(!t||!K(t))return null;let n=dn(t);return n&&yn(e,n)?t:null}function On(e){let t=Dn(e),n=t?dn(t):null;return n?K(n)?.room??null:null}function kn(e,t){if(e.chapters.includes(t))return{ok:!1,error:`owned`};let n=K(t);return n?t!==`prologue`&&Dn(e)!==t?{ok:!1,error:`locked`}:e.fireflies<n.price?{ok:!1,error:`notEnough`,missing:n.price-e.fireflies}:{ok:!0,save:Cn({...e,fireflies:e.fireflies-n.price,chapters:[...e.chapters,t],litRooms:[...new Set([...e.litRooms,...Mn(e)])]},t,{part:1,games:0})}:{ok:!1,error:`unknown`}}function An(e){let t=v[v.length-1];return t!==void 0&&yn(e,t)}function jn(e){return v.filter(t=>yn(e,t))}function Mn(e){return new Set([...Pe,...ln(e.chapters)])}function Nn(e){return An(e)}var Pn=`tower`;function Fn(e){return e.secrets.includes(Pn)}function In(e){return An(e)&&!Fn(e)}function Ln(e,t,n,r){let i={...e.settings.gameOptions,[t]:{...e.settings.gameOptions[t],[n]:r}};return{...e,settings:{...e.settings,gameOptions:i}}}var Rn=(e,t)=>e.secrets.includes(`rules:${t}`),zn=(e,t)=>Bn(e,`rules:${t}`);function Bn(e,t){return e.secrets.includes(t)?e:{...e,secrets:[...e.secrets,t]}}function Vn(e){return[...Mn(e)].find(t=>!e.litRooms.includes(t))??null}function Hn(e,t){return e.litRooms.includes(t)?e:{...e,litRooms:[...e.litRooms,t]}}function Un(e){return e.chapters.length>0||e.fireflies>0||e.counters.games>0||e.activeGame!==null}function Wn(e,t){return{...q(t),settings:e.settings,chapters:[`prologue`],story:{prologue:{part:1,games:0}}}}function Y(e,t){let n=L(t);return n?n.source===`shop`?e.items.includes(t):n.kind===`finish`?e.decor.owned.includes(`${n.decor}:${n.variant}`):n.kind===`furniture`?t in e.decor.furniture:e.decor.smalls.includes(t):!1}function Gn(e){if(!e.decor.scenes.includes(`intro`))return-1;let t=I.findIndex(t=>t.items.some(t=>!Y(e,t)));return t<0?I.length:t}function Kn(e,t){let n=L(t);if(!n)return!1;if(n.source===`shop`)return Nn(e)&&yt(n);let r=Gn(e);return r>=0&&I.findIndex(e=>e.id===n.batch)<=r}function qn(e){let t=e.decor.scenes;if(!t.includes(`intro`))return`intro`;let n=Gn(e);for(let e=0;e<Math.min(n,I.length-1);e++){let n=`batch:${I[e].id}`;if(!t.includes(n))return n}return n>=I.length&&!t.includes(`outro`)?`outro`:null}function Jn(e,t){return e.decor.scenes.includes(t)?e:{...e,decor:{...e.decor,scenes:[...e.decor.scenes,t]}}}function Yn(e){return e.secrets.includes(`moth`)}function Xn(e,t){let n=L(t)?.quest;return!!n&&(n.giver!==`moth`||Yn(e))}function Zn(e,t){return e.decor.quests[t]??0}function Qn(e,t){let n=L(t)?.quest;return!!n&&Xn(e,t)&&Zn(e,t)>=n.count}function $n(e,t){return Xn(e,t)&&Kn(e,t)&&!Y(e,t)}function er(e){return dt.filter(t=>t.quest&&$n(e,t.id))}function tr(e,t,n){return e.what===`wins`&&!n||e.gameId!==null&&e.gameId!==t.gameId||e.room!==null&&e.room!==t.roomId?!1:e.difficulty===null||e.difficulty===t.difficulty}function nr(e,t,n){let r=e.decor.quests;for(let i of dt){let a=i.quest;if(!a||!tr(a,t,n)||!$n(e,i.id))continue;let o=r[i.id]??0;o<a.count&&(r={...r,[i.id]:o+1})}return r===e.decor.quests?e:{...e,decor:{...e.decor,quests:r}}}function rr(e,t){let n=L(t);return n?n.source===`shop`||n.price!==null?n.price??0:Qn(e,t)?0:n.skipPrice??0:0}function ir(e,t){return L(t)?.source===`shop`&&Xn(e,t)&&!Qn(e,t)}function ar(e,t){let n=L(t);if(!n)return null;if(n.kind===`variant`){if(n.variantOf.some(t=>Y(e,t)))return null;let t=L(n.variantOf[0]??``);return t&&(t.kind===`furniture`||t.kind===`small`)?t:null}let r=n.requires?_t(n.requires):void 0;return r&&!(r.id in e.decor.furniture)?r:null}function or(e,t){if(!Kn(e,t)||ar(e,t)||ir(e,t))return{ok:!1,error:`locked`};let n=rr(e,t);return e.fireflies<n?{ok:!1,error:`notEnough`,missing:n-e.fireflies}:{ok:!0,save:{...e,fireflies:e.fireflies-n}}}function sr(e,t){return St(e,t)?.price??0}function cr(e,t,n){return n===x(t)||e.decor.owned.includes(`${t}:${n}`)}function lr(e,t,n){let r=St(t,n);return cr(e,t,n)||!!r&&Kn(e,r.id)}function ur(e,t,n){if(!y[t].some(e=>e.id===n))return{ok:!1,error:`unknown`};if(cr(e,t,n))return{ok:!0,save:{...e,decor:{...e.decor,[t]:n}}};let r=St(t,n);if(!r)return{ok:!1,error:`unknown`};let i=or(e,r.id);return i.ok?{ok:!0,save:{...i.save,decor:{...i.save.decor,[t]:n,owned:[...i.save.decor.owned,`${t}:${n}`]}}}:i}function dr(e,t){if(!(t in e))return e;let n={...e};return delete n[t],n}function fr(e,t,n){if(!_t(t)||!We.includes(n))return{ok:!1,error:`unknown`};let r={...e.decor.furniture,[t]:n},i=dr(e.decor.variants,t);if(t in e.decor.furniture)return{ok:!0,save:{...e,decor:{...e.decor,furniture:r,variants:i}}};let a=or(e,t);return a.ok?{ok:!0,save:{...a.save,decor:{...a.save.decor,furniture:r,variants:i}}}:a}function pr(e,t){let n=L(t);if(n?.kind!==`small`||n.source!==`list`||e.decor.smalls.includes(t))return{ok:!1,error:`unknown`};let r=or(e,t);return r.ok?{ok:!0,save:{...r.save,decor:{...r.save.decor,smalls:[...r.save.decor.smalls,t]}}}:r}function mr(e,t){return bt(t).filter(t=>e.items.includes(t.id)&&yt(t))}function hr(e,t,n){let r=L(t);return!r||r.kind!==`furniture`&&r.kind!==`small`||!Y(e,t)?{ok:!1,error:`unknown`}:n===null?{ok:!0,save:{...e,decor:{...e.decor,variants:dr(e.decor.variants,t)}}}:mr(e,t).some(e=>e.id===n)?{ok:!0,save:{...e,decor:{...e.decor,variants:{...e.decor.variants,[t]:n}}}}:{ok:!1,error:`locked`}}function gr(e,t){let n=L(t);if(!n||n.source!==`shop`)return{ok:!1,error:`unknown`};if(e.items.includes(t))return{ok:!1,error:`owned`};let r=or(e,t);if(!r.ok)return r;let i={...r.save,items:[...r.save.items,t]},a=n.kind===`variant`?n.variantOf.find(t=>Y(e,t)):void 0;return{ok:!0,save:a?{...i,decor:{...i.decor,variants:{...i.decor.variants,[a]:t}}}:i}}var _r=e=>e,vr=g()((e,t)=>{let n=n=>e({save:n(t().save)});return{ready:!1,save:q(new Date),hydrate:t=>e({save:_r(t),ready:!0}),startGame:e=>n(t=>hn(t,e,new Date)),updateGameState:e=>n(t=>gn(t,e)),abandonGame:()=>n(_n),finishGame:n=>{let r=vn(t().save,n,new Date);return e({save:r.save}),r.fireflies},buyChapter:n=>{let r=kn(t().save,n);return r.ok&&e({save:r.save}),r},finishScenes:e=>n(t=>wn(t,e)),thankResident:n=>{let r=En(t().save,n);return r.ok&&e({save:r.save}),r},buyShopItem:n=>{let r=gr(t().save,n);return r.ok&&e({save:r.save}),r},applyDecor:(n,r)=>{let i=ur(t().save,n,r);return i.ok&&e({save:i.save}),i},placeFurniture:(n,r)=>{let i=fr(t().save,n,r);return i.ok&&e({save:i.save}),i},buySmall:n=>{let r=pr(t().save,n);return r.ok&&e({save:r.save}),r},setHwVariant:(n,r)=>{let i=hr(t().save,n,r);return i.ok&&e({save:i.save}),i},markHwScene:e=>n(t=>Jn(t,e)),updateSettings:e=>n(t=>({...t,settings:{...t.settings,...e}})),discoverSecret:e=>n(t=>Bn(t,e)),markRulesSeen:e=>n(t=>zn(t,e)),setGameOption:(e,t,r)=>n(n=>Ln(n,e,t,r)),lightRoom:e=>n(t=>Hn(t,e)),newGame:()=>n(e=>_r(Wn(e,new Date))),debugAddFireflies:()=>n(e=>({...e,fireflies:e.fireflies+50})),debugReset:()=>e({save:q(new Date)})}});function X(e){"@babel/helpers - typeof";return X=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},X(e)}function yr(e,t){if(X(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(X(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function br(e){var t=yr(e,`string`);return X(t)==`symbol`?t:t+``}function Z(e,t,n){return(t=br(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=new class{constructor(){Z(this,`ctx`,null),Z(this,`unlocked`,!1),Z(this,`suspended`,!1),Z(this,`musicEnabled`,!0),Z(this,`sfxEnabled`,!0),Z(this,`music`,null),Z(this,`wantedMusic`,null),Z(this,`playingMusic`,null),Z(this,`buffers`,new Map)}unlock(){if(!this.unlocked){this.unlocked=!0;try{let e=window.AudioContext??window.webkitAudioContext;e&&(this.ctx=new e)}catch(e){console.warn(`[audio] no AudioContext`,e)}this.applyMusic()}}setMusicEnabled(e){this.musicEnabled=e,this.applyMusic()}setSfxEnabled(e){this.sfxEnabled=e}playMusic(e){this.wantedMusic=e,this.applyMusic()}playSfx(e){if(!this.sfxEnabled||!this.ctx||this.suspended)return;let t=this.buffers.get(e);if(t instanceof AudioBuffer)return this.playBuffer(t);if(t===`missing`)return this.beep(e);t||this.buffers.set(e,this.loadSfx(e).then(()=>this.playSfx(e)))}suspend(){this.suspended=!0,this.music?.pause(),this.ctx?.suspend().catch(()=>void 0)}resume(){this.suspended=!1,this.ctx?.resume().catch(()=>void 0),this.applyMusic()}applyMusic(){let e=this.musicEnabled&&this.unlocked&&!this.suspended?this.wantedMusic:null;if(e===null)this.music?.pause(),this.musicEnabled||(this.playingMusic=null);else{if(this.playingMusic===null||Te(this.playingMusic)!==Te(e)||!this.music){this.music?.pause();let t=new Audio(Te(e));t.loop=!0,t.volume=.5,t.addEventListener(`error`,()=>console.info(`[audio] нет файла музыки ${e} – тишина`)),this.music=t,this.playingMusic=e}this.music.play().catch(()=>void 0)}}async loadSfx(e){try{let t=await fetch(Te(e));if(!t.ok)throw Error(String(t.status));let n=await t.arrayBuffer();if(!this.ctx)throw Error(`no ctx`);this.buffers.set(e,await this.ctx.decodeAudioData(n))}catch{this.buffers.set(e,`missing`)}}playBuffer(e){if(!this.ctx)return;let t=this.ctx.createBufferSource();t.buffer=e,t.connect(this.ctx.destination),t.start()}beep(e){if(!this.ctx)return;let t={"sfx.win":880,"sfx.loss":220,"sfx.coin":1320,"sfx.firefly":1568,"sfx.door":330,"sfx.pencil":880,"sfx.move":520,"sfx.page":660,"sfx.wood":520,"sfx.creak":300,"sfx.pour":392,"sfx.pebble1":760,"sfx.pebble2":700},n=this.ctx.currentTime,r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`sine`,r.frequency.value=t[e]??440,i.gain.setValueAtTime(1e-4,n),i.gain.exponentialRampToValueAtTime(.15,n+.01),i.gain.exponentialRampToValueAtTime(1e-4,n+.15),r.connect(i).connect(this.ctx.destination),r.start(n),r.stop(n+.16)}};function xr(e){let t=Math.abs(e)%10,n=Math.abs(e)%100;return t===1&&n!==11?0:t>=2&&t<=4&&(n<12||n>14)?1:2}var Sr={nom:[`светлячок`,`светлячка`,`светлячков`],acc:[`светлячка`,`светлячка`,`светлячков`]};function Cr(e,t,n=`nom`){return e===`en`?`${t} ${t===1?`firefly`:`fireflies`}`:`${t} ${Sr[n][xr(t)]}`}var wr={ru:{"app.loading":`Загрузка…`,"common.back":`Назад`,"common.ok":`Хорошо`,"common.cancel":`Отмена`,"common.yes":`Да`,"common.no":`Нет`,"start.title":`Паутинка`,"start.subtitle":`маленькое приключение`,"start.continue":`Продолжить игру`,"start.new":`Новая игра`,"start.newWarning":`Ваш прогресс будет сброшен, а светлячки улетят. Вы уверены?`,"start.newConfirmYes":`Да, начать заново`,"house.turn":`Обойти дом`,"house.front":`Фасад`,"house.back":`Задний двор`,"house.here":`Здесь Паучок: недоигранная партия`,"house.locked":`Эта комната пока закрыта. Её откроет следующая глава истории.`,"house.nextChapter":`Глава {n}`,"house.prologue":`Пролог`,"house.shop":`Лавка`,"house.settings":`Настройки`,"start.soundOff":`Выключить звук`,"start.soundOn":`Включить звук`,"house.chapters":`Главы`,"house.journal":`Журнал`,"chapter.buyTitle":`Новая глава`,"chapter.notEnough":`Нужно ещё {count}. Сыграйте пару партий в комнатах!`,"chapter.soon":`Следующая глава скоро появится.`,"chapter.guideWaits":`Проводник ждёт в комнате «{room}».`,"chapter.helpFirst":`Сначала помогите жильцу в комнате «{room}».`,"journal.empty":`Пока пусто. Следы и знаки появятся, когда жильцы расскажут, что видели.`,"furnish.title":`Новоселье`,"furnish.list":`Список принцессы Котлетки`,"furnish.wall":`Обои`,"furnish.floor":`Пол`,"furnish.current":`Сейчас`,"furnish.bought":`Куплено`,"furnish.buy":`Купить`,"furnish.put":`Поставить`,"furnish.missing":`Нужно ещё`,"furnish.free":`Даром`,"furnish.take":`Забрать`,"furnish.sheet":`Лист {n} из {total}`,"furnish.done":`Весь список куплен. Котлетка думает, чего ещё не хватает.`,"furnish.stairs":`Лестница на чердак`,"furnish.zones":`Части комнаты`,"furnish.zone.living":`Гостиная`,"furnish.zone.dining":`Кухня-столовая`,"furnish.zone.bedroom":`Спальня`,"game.rules":`Правила`,"game.hint":`Подсказка`,"game.giveUp":`Сдаться`,"game.giveUpText":`Сдаться? Партия закончится, но за старание вы получите {count}.`,"game.giveUpYes":`Да, сдаться`,"game.rulesGotIt":`Понятно`,"game.keepPlaying":`Играть дальше`,"room.residents":`Здесь живут`,"room.soon":`Скоро здесь будет игра`,"room.roaches":`Тараканчики`,"room.play":`Играть`,"room.continue":`Продолжить партию`,"room.shopSign":`Лавка Енота`,"room.difficulty":`Сложность`,"room.opponent":`Соперник`,"room.quests":`Просьба жителя`,"room.task":`Поручение – {who}: сыграть в «{game}».`,"room.taskProgress":`Сыграно {done} из {count}`,"room.thanks":`Отблагодарить`,"room.thanksConfirm":`Отблагодарить светлячками вместо партий: {price}?`,"room.thanksYes":`Да, отблагодарить`,"room.towerLook":`Посмотреть`,"room.chooseGame":`Выбор игры`,"room.newLevelConfirm":`Начать новую партию – «{level}»? Незаконченная партия не сохранится.`,"difficulty.easy":`Легко`,"difficulty.medium":`Средне`,"difficulty.hard":`Трудно`,"opponent.solo":`Один`,"opponent.ai":`Компьютер`,"result.win":`Победа!`,"result.loss":`В этот раз не вышло`,"result.draw":`Ничья`,"result.earned":`Вы поймали {count}!`,"result.again":`Ещё раз`,"result.toRoom":`В комнату`,"story.next":`Дальше`,"story.finish":`Закончить`,"story.roomUnlocked":`Открыта новая комната: {room}`,"story.payText":`{who} проводит в комнату «{room}».`,"story.pay":`Идём`,"story.later":`Позже`,"story.journalAdded":`В журнал записаны {items}.`,"story.and":` и `,"story.skip":`Пропустить`,"story.errors":`Ошибки в файлах глав (src/content/chapters) – эти главы не откроются:`,"shop.locked":`Лавка откроется, когда Паучок спасёт принцессу Котлетку.`,"shop.buy":`Купить`,"shop.owned":`Уже есть`,"shop.progress":`Куплено {owned} из {total}`,"shop.title":`Лавка Енота`,"shop.room":`Для комнаты`,"shop.variants":`Другой вид`,"shop.variantOf":`Другой вид: {names}`,"shop.needs":`Сначала нужно: {name}`,"shop.put":`Сменить вид можно в комнате принцессы Котлетки.`,"quest.times.0":`раз`,"quest.times.1":`раза`,"quest.times.2":`раз`,"quest.games.0":`партию`,"quest.games.1":`партии`,"quest.games.2":`партий`,"quest.win.game":`победить {n} в игре «{game}»`,"quest.win.room":`победить {n} в комнате «{room}»`,"quest.win.any":`победить {n} в любых играх`,"quest.play.game":`сыграть {n} в игру «{game}»`,"quest.play.room":`сыграть {n} в комнате «{room}»`,"quest.play.any":`сыграть {n} в любые игры`,"quest.level":`{what}, уровень «{level}»`,"quest.dream.spider":`Мечта Паучка`,"quest.dream.kotletka":`Мечта принцессы Котлетки`,"quest.line":`{who}: {what} ({progress}/{count})`,"settings.title":`Настройки`,"settings.soundSection":`Звук и отклик`,"settings.morningSection":`Доброе утро`,"settings.wishes":`Пожелания`,"settings.wishesNote":`приходят каждое утро`,"settings.enabled":`включено`,"settings.disabled":`выключено`,"settings.aboutSection":`Об игре`,"settings.version":`Версия {version} · сборка {build}`,"settings.language":`Язык`,"settings.music":`Музыка`,"settings.sfx":`Звуки`,"settings.vibration":`Вибрация`,"settings.notifications":`Уведомления`,"settings.notificationTime":`Время`,"settings.on":`Вкл`,"settings.off":`Выкл`,"settings.notificationsDenied":`Телефон запретил уведомления. Разрешите их в настройках Android.`,"stats.title":`Статистика`,"stats.date":`День`,"stats.games":`Партий`,"stats.wins":`Побед`,"stats.fireflies":`Светлячков`,"stats.total":`Всего поймано светлячков: {n}`,"stats.empty":`Пока нет сыгранных партий.`,"stats.debug":`Для разработчика`,"stats.sky":`Небо над домом`,"sky.auto":`Авто`,"sky.dawn":`Рассвет`,"sky.day":`День`,"sky.dusk":`Закат`,"sky.night":`Ночь`,"stats.addFireflies":`+{count}`,"stats.reset":`Стереть сохранение`,"stats.resetConfirm":`Точно стереть весь прогресс? Это нельзя отменить.`},en:{"app.loading":`Loading…`,"common.back":`Back`,"common.ok":`OK`,"common.cancel":`Cancel`,"common.yes":`Yes`,"common.no":`No`,"start.title":`Webbyx`,"start.subtitle":`a little adventure`,"start.continue":`Continue`,"start.new":`New game`,"start.newWarning":`Your progress will be reset and your fireflies will fly away. Are you sure?`,"start.newConfirmYes":`Yes, start over`,"house.turn":`Walk around the house`,"house.front":`Front`,"house.back":`Backyard`,"house.here":`The Spider is here: unfinished game`,"house.locked":`This room is still locked. The next story chapter will open it.`,"house.nextChapter":`Chapter {n}`,"house.prologue":`Prologue`,"house.shop":`Shop`,"house.settings":`Settings`,"start.soundOff":`Turn sound off`,"start.soundOn":`Turn sound on`,"house.chapters":`Chapters`,"house.journal":`Journal`,"chapter.buyTitle":`New chapter`,"chapter.notEnough":`You need {count} more. Play a few games in the rooms!`,"chapter.soon":`The next chapter is coming soon.`,"chapter.guideWaits":`The guide is waiting in the {room}.`,"chapter.helpFirst":`First help the resident of the {room}.`,"journal.empty":`Nothing yet. Traces and signs appear once the residents tell what they saw.`,"furnish.title":`Housewarming`,"furnish.list":`Princess Kotletka’s list`,"furnish.wall":`Wallpaper`,"furnish.floor":`Floor`,"furnish.current":`Now`,"furnish.bought":`Bought`,"furnish.buy":`Buy`,"furnish.put":`Put in`,"furnish.missing":`Need`,"furnish.free":`Free`,"furnish.take":`Take it`,"furnish.sheet":`Sheet {n} of {total}`,"furnish.done":`Everything on the list is bought. Kotletka is thinking what else is missing.`,"furnish.stairs":`Stairs to the attic`,"furnish.zones":`Parts of the room`,"furnish.zone.living":`Living room`,"furnish.zone.dining":`Kitchen and dining`,"furnish.zone.bedroom":`Bedroom`,"game.rules":`Rules`,"game.hint":`Hint`,"game.giveUp":`Give up`,"game.giveUpText":`Give up? The game will end, but you get {count} for trying.`,"game.giveUpYes":`Yes, give up`,"game.rulesGotIt":`Got it`,"game.keepPlaying":`Keep playing`,"room.residents":`Who lives here`,"room.soon":`A game is coming here soon`,"room.roaches":`Roaches`,"room.play":`Play`,"room.continue":`Continue game`,"room.shopSign":`Raccoon’s Shop`,"room.difficulty":`Difficulty`,"room.opponent":`Opponent`,"room.quests":`A resident’s request`,"room.task":`Task from {who}: play “{game}”.`,"room.taskProgress":`Played {done} of {count}`,"room.thanks":`Thank them`,"room.thanksConfirm":`Thank them with fireflies instead of playing: {price}?`,"room.thanksYes":`Yes, thank them`,"room.towerLook":`Let’s see`,"room.chooseGame":`Choose a game`,"room.newLevelConfirm":`Start a new game – “{level}”? The unfinished game will be lost.`,"difficulty.easy":`Easy`,"difficulty.medium":`Medium`,"difficulty.hard":`Hard`,"opponent.solo":`Solo`,"opponent.ai":`Computer`,"result.win":`Victory!`,"result.loss":`Not this time`,"result.draw":`Draw`,"result.earned":`You caught {count}!`,"result.again":`Play again`,"result.toRoom":`Back to room`,"story.next":`Next`,"story.finish":`Finish`,"story.roomUnlocked":`New room unlocked: {room}`,"story.payText":`{who} will take you to the {room}.`,"story.pay":`Let’s go`,"story.later":`Later`,"story.journalAdded":`Added to the journal: {items}.`,"story.and":` and `,"story.skip":`Skip`,"story.errors":`Errors in chapter files (src/content/chapters) – these chapters will not open:`,"shop.locked":`The shop opens once Spider rescues Princess Kotletka.`,"shop.buy":`Buy`,"shop.owned":`Owned`,"shop.progress":`Bought {owned} of {total}`,"shop.title":`Raccoon’s shop`,"shop.room":`For the room`,"shop.variants":`Another look`,"shop.variantOf":`Another look for: {names}`,"shop.needs":`First you need: {name}`,"shop.put":`You can change the look in Princess Kotletka’s room.`,"quest.times.0":`time`,"quest.times.1":`times`,"quest.times.2":`times`,"quest.games.0":`game`,"quest.games.1":`games`,"quest.games.2":`games`,"quest.win.game":`win {n} at “{game}”`,"quest.win.room":`win {n} in the {room}`,"quest.win.any":`win {n} in any games`,"quest.play.game":`play {n} of “{game}”`,"quest.play.room":`play {n} in the {room}`,"quest.play.any":`play {n} of any games`,"quest.level":`{what}, level “{level}”`,"quest.dream.spider":`Spider’s dream`,"quest.dream.kotletka":`Princess Kotletka’s dream`,"quest.line":`{who}: {what} ({progress}/{count})`,"settings.title":`Settings`,"settings.soundSection":`Sound and touch`,"settings.morningSection":`Good morning`,"settings.wishes":`Wishes`,"settings.wishesNote":`arrive every morning`,"settings.enabled":`on`,"settings.disabled":`off`,"settings.aboutSection":`About`,"settings.version":`Version {version} · build {build}`,"settings.language":`Language`,"settings.music":`Music`,"settings.sfx":`Sounds`,"settings.vibration":`Vibration`,"settings.notifications":`Notifications`,"settings.notificationTime":`Time`,"settings.on":`On`,"settings.off":`Off`,"settings.notificationsDenied":`Notifications are blocked. Allow them in Android settings.`,"stats.title":`Statistics`,"stats.date":`Day`,"stats.games":`Games`,"stats.wins":`Wins`,"stats.fireflies":`Fireflies`,"stats.total":`Fireflies caught in total: {n}`,"stats.empty":`No games played yet.`,"stats.debug":`Developer`,"stats.sky":`Sky over the house`,"sky.auto":`Auto`,"sky.dawn":`Dawn`,"sky.day":`Day`,"sky.dusk":`Dusk`,"sky.night":`Night`,"stats.addFireflies":`+{count}`,"stats.reset":`Erase save`,"stats.resetConfirm":`Really erase all progress? This cannot be undone.`}};function Tr(e,t){return t?e.replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):e):e}function Er(e,t,n){return Tr(wr[e][t],n)}function Dr(e,t,n){return Tr(t[e],n)}function Or(){let e=vr(e=>e.save.settings.language);return{t:(0,m.useCallback)((t,n)=>Er(e,t,n),[e]),l:(0,m.useCallback)((t,n)=>Dr(e,t,n),[e]),ff:(0,m.useCallback)((t,n)=>Cr(e,t,n),[e]),lang:e}}var kr=u((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Ar=u(((e,t)=>{t.exports=kr()}));function jr(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},r=(e,t)=>{if(!Number.isInteger(e)||!Number.isInteger(t)||t<e)throw Error(`rng.int: bad range [${e}, ${t}]`);return e+Math.floor(n()*(t-e+1))};return{next:n,int:r,pick(e){if(e.length===0)throw Error(`rng.pick: empty array`);return e[r(0,e.length-1)]},shuffle(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=r(0,e),i=t[e];t[e]=t[n],t[n]=i}return t},chance(e){return n()<e},getState:()=>t}}function Mr(){return Math.floor(Math.random()*4294967296)>>>0}var Nr=`modulepreload`,Pr=function(e){return`/pautinka/`+e},Fr={},Ir=function(e){return e.pathname.endsWith(`.css`)},Lr=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Rr=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Pr(t,n);let r=s(t),i=Ir(r);return Lr(Fr,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Nr,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},zr=e(`Haptics`,{web:()=>Rr(()=>import(`./web-CLtJvGdn.js`).then(e=>new e.HapticsWeb),__vite__mapDeps([0,1,2]))}),Br=t.isNativePlatform();async function Vr(e,t){try{return await t()}catch(t){console.warn(`[${e}]`,t);return}}var Hr=!0,$={setEnabled(e){Hr=e},vibrate(e){Hr&&Vr(`haptics`,()=>{switch(e){case`tap`:return zr.impact({style:r.Light});case`success`:return zr.notification({type:n.Success});case`error`:return zr.notification({type:n.Warning})}})}},Ur=0,Wr={tap(){Q.playSfx(`sfx.tap`),$.vibrate(`tap`)},move(){Q.playSfx(`sfx.move`),$.vibrate(`tap`)},piece(){Q.playSfx(`sfx.wood`),$.vibrate(`tap`)},pebble(){Ur=1-Ur,Q.playSfx(Ur?`sfx.pebble1`:`sfx.pebble2`)},pour(){Q.playSfx(`sfx.pour`),$.vibrate(`tap`)},invalid(){$.vibrate(`error`)},win(){Q.playSfx(`sfx.win`),$.vibrate(`success`)},loss(){Q.playSfx(`sfx.loss`)},door(){Q.playSfx(Math.random()<.5?`sfx.door`:`sfx.door2`)},creak(){Q.playSfx(`sfx.creak`)},write(){Q.playSfx(`sfx.pencil`),$.vibrate(`tap`)},firefly(){Q.playSfx(`sfx.firefly`),$.vibrate(`success`)},coin(){Q.playSfx(`sfx.coin`)}},Gr=Ar();function Kr({label:e,onClick:t}){return(0,Gr.jsx)(`button`,{type:`button`,className:`round-next`,"aria-label":e,onClick:()=>{Wr.tap(),t()},children:(0,Gr.jsx)(`img`,{src:we(`ui.next`),alt:``})})}export{Pt as $,se as $t,Zn as A,Me as At,Vn as B,_e as Bt,Fn as C,vt as Ct,Xn as D,Le as Dt,rr as E,Be as Et,mr as F,Ie as Ft,fn as G,fe as Gt,In as H,ve as Ht,cr as I,C as It,un as J,de as Jt,pn as K,le as Kt,Y as L,we as Lt,Nn as M,Fe as Mt,An as N,Ue as Nt,Qn as O,w as Ot,er as P,He as Pt,Vt as Q,v as Qt,qn as R,ke as Rt,Un as S,wt as St,ar as T,xt as Tt,Mn as U,y as Ut,Rn as V,ye as Vt,q as W,pe as Wt,sn as X,b as Xt,K as Y,ce as Yt,ln as Z,_ as Zt,lr as _,Qe as _t,Vr as a,It as at,Dn as b,L as bt,Mr as c,I as ct,xr as d,Ke as dt,g as en,R as et,Q as f,ut as ft,xn as g,We as gt,J as h,mt as ht,Br as i,Lt as it,yn as j,je as jt,ir as k,Ne as kt,Ar as l,Ge as lt,Pn as m,N as mt,Wr as n,u as nn,Rt as nt,Rr as o,Ft as ot,vr as p,ft as pt,cn as q,ue as qt,$ as r,f as rn,Bt as rt,jr as s,zt as st,Kr as t,ee as tn,Nt as tt,Or as u,pt as ut,sr as v,St as vt,Gn as w,Ct as wt,On as x,yt as xt,jn as y,_t as yt,Sn as z,Oe as zt};