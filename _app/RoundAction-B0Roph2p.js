const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_app/web-CLtJvGdn.js","_app/dist-BtfAZAro.js","_app/definitions--d8bC4tg.js"])))=>i.map(i=>d[i]);
import{r as e,t}from"./dist-BtfAZAro.js";import{n,t as r}from"./definitions--d8bC4tg.js";var i=Object.create,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,c=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),d=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=s(t),c=0,u=i.length,d;c<u;c++)d=i[c],!l.call(e,d)&&d!==n&&a(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(r=o(t,d))||r.enumerable});return e},f=(e,t,n)=>(n=e==null?{}:i(c(e)),d(t||!e||!e.__esModule||!l.call(e,`default`)?a(n,`default`,{value:e,enumerable:!0}):n,e)),p=u((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),ee=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=ee&&e[ee]||e[`@@iterator`],typeof e==`function`?e:null)}var te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,re={};function h(e,t,n){this.props=e,this.context=t,this.refs=re,this.updater=n||te}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function ie(){}ie.prototype=h.prototype;function ae(e,t,n){this.props=e,this.context=t,this.refs=re,this.updater=n||te}var oe=ae.prototype=new ie;oe.constructor=ae,ne(oe,h.prototype),oe.isPureReactComponent=!0;var se=Array.isArray;function ce(){}var g={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function le(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ue(e,t){return le(e.type,t,e.props)}function de(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function fe(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var pe=/\/+/g;function me(e,t){return typeof e==`object`&&e&&e.key!=null?fe(``+e.key):t.toString(36)}function he(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ce,ce):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function v(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,v(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+me(e,0):a,se(o)?(i=``,c!=null&&(i=c.replace(pe,`$&/`)+`/`),v(o,r,i,``,function(e){return e})):o!=null&&(de(o)&&(o=ue(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(pe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(se(e))for(var u=0;u<e.length;u++)a=e[u],s=l+me(a,u),c+=v(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+me(a,u++),c+=v(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return v(he(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ge(e,t,n){if(e==null)return e;var r=[],i=0;return v(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function _e(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ve=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ye(e){var t=g.T,n={};n.types=t===null?null:t.types,g.T=n;try{var r=e(),i=g.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ce,ve)}catch(e){ve(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),g.T=t}}function be(e){var t=g.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ye(be.bind(null,e))}var xe={map:ge,forEach:function(e,t,n){ge(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ge(e,function(){t++}),t},toArray:function(e){return ge(e,function(e){return e})||[]},only:function(e){if(!de(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=xe,e.Component=h,e.Fragment=r,e.Profiler=a,e.PureComponent=ae,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return g.H.useMemoCache(e)}},e.addTransitionType=be,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=ne({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!_.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return le(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)_.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return le(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=de,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:_e}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ye,e.unstable_useCacheRefresh=function(){return g.H.useCacheRefresh()},e.use=function(e){return g.H.use(e)},e.useActionState=function(e,t,n){return g.H.useActionState(e,t,n)},e.useCallback=function(e,t){return g.H.useCallback(e,t)},e.useContext=function(e){return g.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return g.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return g.H.useEffect(e,t)},e.useEffectEvent=function(e){return g.H.useEffectEvent(e)},e.useId=function(){return g.H.useId()},e.useImperativeHandle=function(e,t,n){return g.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return g.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return g.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return g.H.useMemo(e,t)},e.useOptimistic=function(e,t){return g.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return g.H.useReducer(e,t,n)},e.useRef=function(e){return g.H.useRef(e)},e.useState=function(e){return g.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return g.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return g.H.useTransition()},e.version=`19.3.1`})),ee=u(((e,t)=>{t.exports=p()})),m=f(ee(),1),te=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e))},o=t=e(r,i,a);return a},ne=(e=>e?te(e):te),re=e=>e;function h(e,t=re){let n=m.useSyncExternalStore(e.subscribe,m.useCallback(()=>t(e.getState()),[e,t]),()=>t(e.getInitialState()));return m.useDebugValue(n),n}var ie=e=>{let t=ne(e),n=e=>h(t,e);return Object.assign(n,t),n},ae=(e=>e?ie(e):ie),oe={easy:2,medium:3,hard:5};function se(e,t){return e===`win`?oe[t]:1}var ce={easy:150,medium:250,hard:350},g={easy:7,medium:8,hard:9},_=[`prologue`,`ch01`,`ch02`,`ch03`,`ch04`,`ch05`,`ch06`,`ch07`],le=1e5,ue=.5,de=[`living`,`dining`,`bedroom`],fe={floor:.22,baseboard:.045,beam:.07,rafterOfWall:.3,wallTile:.34,window:.3,windowCenterOfWall:.4},pe={zone:0,x:.14,width:.28,y:.75},me=[.59,.5,.56],he={rafter:468/397,post:74/472},v={wall:[{id:`plaster`,name:{ru:`Светлая штукатурка`,en:`Light plaster`},image:`hw.wall.plaster`},{id:`leaves`,name:{ru:`Обои в листик`,en:`Leaf wallpaper`},image:`hw.wall.leaves`},{id:`stars`,name:{ru:`Обои со звёздами`,en:`Starry wallpaper`},image:`hw.wall.stars`},{id:`stripes`,name:{ru:`Обои в полоску`,en:`Striped wallpaper`},image:`hw.wall.stripes`},{id:`roses`,name:{ru:`Обои с розами`,en:`Rose wallpaper`},image:`hw.wall.roses`},{id:`daisies`,name:{ru:`Обои с ромашками`,en:`Daisy wallpaper`},image:`hw.wall.daisies`},{id:`ivy`,name:{ru:`Обои с плющом`,en:`Ivy wallpaper`},image:`hw.wall.ivy`},{id:`swallows`,name:{ru:`Обои с ласточками`,en:`Swallow wallpaper`},image:`hw.wall.swallows`}],floor:[{id:`honey`,name:{ru:`Медовые доски`,en:`Honey boards`},image:`hw.floor.honey`},{id:`dark`,name:{ru:`Тёмный пол`,en:`Dark floor`},image:`hw.floor.dark`},{id:`checker`,name:{ru:`Плитка в клетку`,en:`Checkered tiles`},image:`hw.floor.checker`}]},ge=[`wall`,`floor`];function _e(e,t){return v[e].find(e=>e.id===t)??v[e][0]}function ve(e){return v[e][0].id}var ye={version:1,currency:`fireflies`,defaults:{wall:`wall_plaster`,floor:`floor_honey`},styles:[{key:`rustic`,name:`Прованс`},{key:`royal`,name:`Роял`},{key:`daisy`,name:`Дейзи`},{key:`scrap`,name:`Енотий`}],zones:[{key:`living`,name:`Гостиная`},{key:`bedroom`,name:`Спальня`}],intro:[`cutlet [calm]: Вот список. Не пугайся. Он только кажется длинным.`,`spider [puzzled]: Он и есть длинный.`,`cutlet [happy]: Значит, не кажется. Начнём с кровати.`],batch_done:[`cutlet [happy]: С этим всё. Я вычеркнула. Вычёркивать – лучшая часть списка.`,`cutlet [calm]: Хорошо. Теперь следующий лист. Да, есть следующий.`],outro:[`narrator: Котлетка вычеркнула последнюю строчку и долго смотрела на список.`,`cutlet [calm]: Всё.`,`spider [tender]: Всё?`,`cutlet [happy]: Пока всё. Я подумаю, чего ещё не хватает.`,`narrator: В комнате было тепло. На столе стоял торт. Внизу кто-то ставил чайник.`],batches:[{id:1,title:`Чтобы было где сесть и лечь`,items:[{key:`bed`,name:`Кровать`,kind:`furniture`,zone:`bedroom`,asset:`bed`,variants:!0,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Сначала кровать. На полу спят только те, у кого нет списка.`},{key:`table`,name:`Обеденный стол`,kind:`furniture`,zone:`living`,asset:`table`,variants:!0,price:30,seller:`raccoon`,quest:null,requires:null,comment:`Стол. Без стола чай превращается в перекус.`},{key:`chair`,name:`Стул`,kind:`furniture`,zone:`living`,asset:`chair`,variants:!0,price:20,seller:`raccoon`,quest:null,requires:null,comment:`Стул. Один. Второй купим, когда этот себя оправдает.`},{key:`lamp_living`,name:`Лампа в гостиную`,kind:`furniture`,zone:`living`,asset:`lamp`,variants:!0,price:25,seller:`raccoon`,quest:null,requires:null,comment:`Лампа. Светлячкам тоже нужен дом.`},{key:`stove`,name:`Печка`,kind:`furniture`,zone:`living`,asset:`stove`,variants:!0,price:45,seller:`raccoon`,quest:null,requires:null,comment:`Печка. Тепло важнее красоты. Но я не говорила, что красота не важна.`},{key:`teapot`,name:`Чайник`,kind:`decor`,zone:`living`,asset:`teapot`,variants:!1,seller:`opossum_mom`,quest:{character:`opossum_mom`,game:`Настойки`,count:3},requires:`table`,comment:`Чайник от Мамы-Опоссум. Она просила только не давать его Еноту.`,skip_price:20,price:null}]},{id:2,title:`Чтобы было похоже на дом`,items:[{key:`rug_living`,name:`Ковёр в гостиную`,kind:`furniture`,zone:`living`,asset:`rug`,variants:!0,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Ковёр. Чтобы ходить тихо и падать мягко.`},{key:`armchair`,name:`Кресло`,kind:`furniture`,zone:`living`,asset:`armchair`,variants:!0,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Кресло для Паучка. Он будет в нём думать. Это надолго.`},{key:`teacups`,name:`Чашки`,kind:`decor`,zone:`living`,asset:`teacups`,variants:!1,price:15,seller:`raccoon`,quest:null,requires:`table`,comment:`Две чашки. Третью пусть Енот приносит свою.`},{key:`bedside`,name:`Тумбочка`,kind:`furniture`,zone:`bedroom`,asset:`bedside`,variants:!0,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Тумбочка. Надо же куда-то класть шляпу на ночь.`},{key:`candle`,name:`Свеча`,kind:`decor`,zone:`bedroom`,asset:`candle`,variants:!1,seller:`rat`,quest:{character:`rat`,game:`Кварто`,count:3},requires:`bedside`,comment:`Свеча от Крысы. Огарок она просит вернуть: для опыта.`,skip_price:25,price:null},{key:`wall_leaves`,name:`Обои в листик`,kind:`finish`,zone:null,asset:`wall_leaves`,variants:!1,price:70,seller:`raccoon`,quest:null,requires:null,comment:`Обои в листик. Спокойные. В этом доме должно быть хоть что-то спокойное.`}]},{id:3,title:`Порядок`,items:[{key:`wardrobe`,name:`Шкаф`,kind:`furniture`,zone:`bedroom`,asset:`wardrobe`,variants:!0,price:90,seller:`raccoon`,quest:null,requires:null,comment:`Шкаф. Проверь, нет ли в нём кого-нибудь. В этом доме бывает.`},{key:`cupboard`,name:`Буфет`,kind:`furniture`,zone:`living`,asset:`cupboard`,variants:!0,price:85,seller:`raccoon`,quest:null,requires:null,comment:`Буфет. Посуда должна стоять за стеклом и вызывать уважение.`},{key:`broom`,name:`Метла`,kind:`decor`,zone:`living`,asset:`broom`,variants:!1,price:20,seller:`raccoon`,quest:null,requires:null,comment:`Метла. Обычная. Летать на ней не надо.`},{key:`jam_jar`,name:`Варенье`,kind:`decor`,zone:`living`,asset:`jam_jar`,variants:!1,seller:`mouse`,quest:{character:`mouse`,game:`Три в ряд`,count:3},requires:`cupboard`,comment:`Варенье от Мышей. Черничное. Хвостом не трогать.`,skip_price:35,price:null},{key:`slippers`,name:`Тапочки`,kind:`decor`,zone:`bedroom`,asset:`slippers`,variants:!1,seller:`chernika`,quest:{character:`chernika`,game:`Солнце и луна`,count:3},requires:`bed`,comment:`Тапочки от Чернинки. Тёплые. Она понимает в этом толк.`,skip_price:35,price:null}]},{id:4,title:`Уют`,items:[{key:`sofa`,name:`Диван`,kind:`furniture`,zone:`living`,asset:`sofa`,variants:!0,price:135,seller:`raccoon`,quest:null,requires:null,comment:`Диван. Для гостей. Гости будут: я уже вижу, как Енот заглядывает.`},{key:`tea_table`,name:`Чайный столик`,kind:`furniture`,zone:`living`,asset:`tea_table`,variants:!0,price:80,seller:`raccoon`,quest:null,requires:null,comment:`Чайный столик. Чай не должен зависеть от того, свободен ли большой стол.`},{key:`rug_bedroom`,name:`Коврик у кровати`,kind:`furniture`,zone:`bedroom`,asset:`rug`,variants:!0,price:75,seller:`raccoon`,quest:null,requires:null,comment:`Коврик у кровати. Первый шаг утром должен быть приятным.`},{key:`lamp_bedroom`,name:`Лампа в спальню`,kind:`furniture`,zone:`bedroom`,asset:`lamp`,variants:!0,price:65,seller:`raccoon`,quest:null,requires:null,comment:`Вторая лампа. Читать в темноте вредно даже паукам.`},{key:`blanket_basket`,name:`Корзина с пледами`,kind:`decor`,zone:`bedroom`,asset:`blanket_basket`,variants:!1,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Корзина с пледами. Пледов много не бывает.`},{key:`flower_vase`,name:`Цветы`,kind:`decor`,zone:`living`,asset:`flower_vase`,variants:!1,seller:`cat`,quest:{character:`cat`,game:`Калах`,count:3},requires:`table`,comment:`Цветы от Котов. Не знаю, где они их взяли. Не спрашивай.`,skip_price:45,price:null},{key:`floor_dark`,name:`Тёмный пол`,kind:`finish`,zone:null,asset:`floor_dark`,variants:!1,price:120,seller:`raccoon`,quest:null,requires:null,comment:`Тёмный пол. На нём не видно крошек. Я сейчас не про себя.`}]},{id:5,title:`Для ума`,items:[{key:`bookshelf`,name:`Книжный шкаф`,kind:`furniture`,zone:`living`,asset:`bookshelf`,variants:!0,price:165,seller:`raccoon`,quest:null,requires:null,comment:`Книжный шкаф. Пустой он выглядит как упрёк.`},{key:`books`,name:`Книги`,kind:`decor`,zone:`living`,asset:`books`,variants:!1,price:50,seller:`raccoon`,quest:null,requires:`bookshelf`,comment:`Книги. Три. Начнём с малого.`},{key:`clock`,name:`Часы`,kind:`furniture`,zone:`living`,asset:`clock`,variants:!0,price:125,seller:`raccoon`,quest:null,requires:null,comment:`Часы. Чтобы знать, насколько мы опаздываем.`},{key:`globe`,name:`Глобус`,kind:`decor`,zone:`living`,asset:`globe`,variants:!1,seller:`bat`,quest:{character:`bat`,game:`Реверси`,count:3},requires:`bookshelf`,comment:`Глобус от Летучей мыши. Она отметила места, где не была. Он весь в отметках.`,skip_price:65,price:null},{key:`alarm_clock`,name:`Будильник`,kind:`decor`,zone:`bedroom`,asset:`alarm_clock`,variants:!1,seller:`roach_mid`,quest:{character:`roach_mid`,game:`Нарды`,count:5},requires:`bedside`,comment:`Будильник от Тараканчиков. Говорят, звонит честно.`,skip_price:55,price:null},{key:`chair2`,name:`Второй стул`,kind:`furniture`,zone:`living`,asset:`chair`,variants:!0,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Второй стул. Первый себя оправдал.`}]},{id:6,title:`Красота`,items:[{key:`dresser`,name:`Столик с зеркалом`,kind:`furniture`,zone:`bedroom`,asset:`dresser`,variants:!0,price:215,seller:`raccoon`,quest:null,requires:null,comment:`Столик с зеркалом. Корону надо надевать ровно.`},{key:`shelf`,name:`Полка`,kind:`furniture`,zone:`living`,asset:`shelf`,variants:!0,price:110,seller:`raccoon`,quest:null,requires:null,comment:`Полка. Для мелочей, которым пока не придумали места.`},{key:`fern`,name:`Папоротник`,kind:`decor`,zone:`living`,asset:`fern`,variants:!1,price:65,seller:`raccoon`,quest:null,requires:null,comment:`Папоротник. Поливать по четвергам. Я запишу.`},{key:`music_box`,name:`Музыкальная шкатулка`,kind:`decor`,zone:`bedroom`,asset:`music_box`,variants:!1,seller:`cat`,quest:{character:`cat`,game:`Судоку`,count:3},requires:`dresser`,comment:`Шкатулка от Котов. Играет одну мелодию. Зато свою.`,skip_price:80,price:null},{key:`wall_stripes`,name:`Обои в полоску`,kind:`finish`,zone:null,asset:`wall_stripes`,variants:!1,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Обои в полоску. Строго и нарядно. Как я.`}]},{id:7,title:`Запасы`,items:[{key:`chest`,name:`Сундук`,kind:`furniture`,zone:`bedroom`,asset:`chest`,variants:!0,price:215,seller:`raccoon`,quest:null,requires:null,comment:`Сундук. У всего, что некуда деть, должно быть место. Вот оно.`},{key:`apples`,name:`Яблоки`,kind:`decor`,zone:`living`,asset:`apples`,variants:!1,seller:`mouse`,quest:{character:`mouse`,game:`Три в ряд`,count:5},requires:`cupboard`,comment:`Яблоки от Мышей. Они пересчитаны, имей в виду.`,skip_price:70,price:null},{key:`watering_can`,name:`Лейка`,kind:`decor`,zone:`living`,asset:`watering_can`,variants:!1,seller:`mosquito`,quest:{character:`mosquito`,game:`Морской бой`,count:3},requires:null,comment:`Лейка от Комаров. Воду они набрали из ванны. Лиловую.`,skip_price:80,price:null},{key:`bedside2`,name:`Вторая тумбочка`,kind:`furniture`,zone:`bedroom`,asset:`bedside`,variants:!0,price:120,seller:`raccoon`,quest:null,requires:null,comment:`Вторая тумбочка. Симметрия успокаивает.`},{key:`night_lamp`,name:`Ночник`,kind:`furniture`,zone:`bedroom`,asset:`night_lamp`,variants:!0,price:100,seller:`raccoon`,quest:null,requires:`bedside2`,comment:`Лампа с абажуром. Свет должен быть мягким, а абажур – в цветочек.`},{key:`floor_checker`,name:`Плитка в клетку`,kind:`finish`,zone:null,asset:`floor_checker`,variants:!1,price:195,seller:`raccoon`,quest:null,requires:null,comment:`Плитка в клетку. Можно играть в шашки, не вставая.`}]},{id:8,title:`Для души`,items:[{key:`picture_cat_window`,name:`Картина в спальню`,kind:`decor`,zone:`bedroom`,asset:`picture_cat_window`,variants:!1,price:190,seller:`raccoon`,quest:null,requires:null,comment:`Ещё одна картина. Теперь это называется коллекция.`},{key:`shelf_bedroom`,name:`Полка в спальню`,kind:`furniture`,zone:`bedroom`,asset:`shelf`,variants:!0,price:170,seller:`raccoon`,quest:null,requires:null,comment:`Полка в спальню. Мелочей стало больше, чем я рассчитывала.`},{key:`yarn`,name:`Клубок`,kind:`decor`,zone:`bedroom`,asset:`yarn`,variants:!1,seller:`moth`,quest:{character:`moth`,game:`Лоскуты`,count:3},requires:null,comment:`Клубок от Моли. Она сказала: довяжете сами. Очень на неё похоже.`,skip_price:95,price:null},{key:`toy_horse`,name:`Деревянная лошадка`,kind:`decor`,zone:`bedroom`,asset:`toy_horse`,variants:!1,seller:`chernika`,quest:{character:`chernika`,game:`Солнце и луна`,count:5},requires:null,comment:`Лошадка от Чернинки. Говорит, это её портрет в молодости.`,skip_price:105,price:null},{key:`telescope`,name:`Телескоп`,kind:`decor`,zone:`living`,asset:`telescope`,variants:!1,seller:`raccoon`,quest:{character:`raccoon`,game:`Распутай созвездие`,count:5},requires:null,comment:`Телескоп от Енота. Этот он, по его словам, не брал, а нашёл.`,skip_price:170,price:null}]},{id:9,title:`Последние штрихи`,items:[{key:`wall_stars`,name:`Обои со звёздами`,kind:`finish`,zone:null,asset:`wall_stars`,variants:!1,price:340,seller:`raccoon`,quest:null,requires:null,comment:`Обои со звёздами. Чтобы потолок чердака не задавался.`},{key:`cake`,name:`Торт`,kind:`decor`,zone:`living`,asset:`cake`,variants:!1,seller:`opossum_mom`,quest:{character:`opossum_mom`,game:`Настойки`,count:5},requires:`table`,comment:`Торт от Мамы-Опоссум. На всех. Наконец-то на всех.`,skip_price:135,price:null},{key:`crown_cushion`,name:`Подушка для короны`,kind:`decor`,zone:`bedroom`,asset:`crown_cushion`,variants:!1,price:455,seller:`raccoon`,quest:null,requires:`dresser`,comment:`Подушка для короны. Корона тоже должна отдыхать.`},{key:`photo_frame`,name:`Рамка для портрета`,kind:`decor`,zone:`bedroom`,asset:`photo_frame`,variants:!1,price:570,seller:`raccoon`,quest:null,requires:`dresser`,comment:`Рамка для портрета. Теперь у нас есть дом. Надо сфотографироваться.`}]}]},be={version:1,about:`Лавка Енота: необязательные диковинки (открывается после финала). Формат предметов – как в housewarming.json. kind = decor – свой предмет в комнате (место – в src/content/room_layout.json); kind = furniture + variants – предмет со стилями; kind = finish – обои (zone: living / dining / bedroom / all – во всех зонах, у окна); kind = variant – другой вид уже существующего предмета (variant_of: ключи из списка), открывает ещё одну карточку в выборе вида. Задание: what = wins (победы) или games (партии); где – game (русское название игры), room (комната) или ничего (где угодно); difficulty – необязательно (easy / medium / hard). Задание открывает покупку. cutlet – реплика принцессы Котлетки, когда купленный предмет впервые появился в комнате. event = winter – предмет полки «К празднику»: продаётся, только пока идёт зимнее событие, за цену × WINTER_PRICE_FACTOR (config/economy.ts); купленное остаётся навсегда.`,items:[{key:`samovar`,name:`Самовар`,kind:`decor`,zone:`dining`,asset:`samovar`,price:100,seller:`raccoon`,quest:{character:`cutlet`,what:`games`,count:15},requires:`table`,comment:`Самовар. Пыхтит, как я после пирога.`,cutlet:`Самовар. Теперь чай будет по-настоящему, а не как-нибудь.`},{key:`hand_mirror`,name:`Зеркальце`,kind:`decor`,zone:`bedroom`,asset:`hand_mirror`,price:100,seller:`raccoon`,quest:null,requires:`dresser`,comment:`Зеркальце. Посмотрел – а там енот. Подозрительный.`,cutlet:`Зеркальце. Корона сидит ровно. Я так и знала.`},{key:`gramophone`,name:`Патефон`,kind:`decor`,zone:`living`,asset:`gramophone`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Патефон. Пластинка одна, зато любимая.`,cutlet:`Патефон. Танцевать не обещаю. Слушать буду.`},{key:`window_round_stained`,name:`Витраж`,kind:`decor`,zone:`dining`,asset:`window_round_stained`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Витраж. Солнце сквозь него – как варенье на просвет.`,cutlet:`Витраж. Свет стал цветной. Пусть так и остаётся.`},{key:`pickle_barrel`,name:`Бочка с соленьями`,kind:`decor`,zone:`dining`,asset:`pickle_barrel`,price:160,seller:`raccoon`,quest:{character:`mouse`,what:`wins`,count:10,room:`cellar`},requires:null,comment:`Бочка огурцов. Пересчитал. Почти все на месте.`,cutlet:`Бочка с соленьями. Енот уже облизывается. Огурцы пересчитаем.`},{key:`barrel_organ`,name:`Шарманка`,kind:`decor`,zone:`living`,asset:`barrel_organ`,price:160,seller:`raccoon`,quest:{character:`raccoon`,what:`wins`,count:10,room:`attic`},requires:null,comment:`Шарманка. Крутишь ручку – и сразу праздник.`,cutlet:`Шарманка. Громко. Но весело. Пусть играет до ужина.`},{key:`library_ladder`,name:`Библиотечная лестница`,kind:`decor`,zone:`living`,asset:`library_ladder`,price:200,seller:`raccoon`,quest:null,requires:`bookshelf`,comment:`Лесенка. До верхней полки, где обычно прячут вкусное.`,cutlet:`Лесенка. Теперь до верхней полки дотянется даже Енот.`},{key:`picture_cat`,name:`Картина с котом`,kind:`decor`,asset:`picture_cat`,price:40,seller:`raccoon`,quest:{character:`cat`,what:`wins`,count:5,room:`living`},requires:null,comment:`Картина с котом. Кот на ней строже, чем в жизни.`,zone:`bedroom`,cutlet:`Картина с котом. Строгий. Мне нравится.`},{key:`fireplace`,name:`Камин`,kind:`furniture`,zone:`living`,asset:`fireplace`,price:180,seller:`raccoon`,quest:null,requires:null,comment:`Камин. Дрова в цену не входят, но я подумаю.`,variants:!0,cutlet:`Камин. Вот теперь настоящий дом. Тепло и прилично.`},{key:`rocking_chair`,name:`Качалка у камина`,kind:`furniture`,zone:`living`,asset:`rocking_chair`,price:90,seller:`raccoon`,quest:null,requires:null,comment:`Качается само. Почти.`,variants:!0,cutlet:`Качалка у огня. Сиди и грейся. Это приказ.`},{key:`wine_cabinet`,name:`Шкафчик для бутылок`,kind:`furniture`,zone:`dining`,asset:`wine_cabinet`,price:90,seller:`raccoon`,quest:null,requires:null,comment:`Бутылки пустые. Я проверял.`,variants:!0,cutlet:`Шкафчик для бутылок. Пустой. Енот клянётся, что так и было.`},{key:`washstand`,name:`Умывальник`,kind:`furniture`,zone:`dining`,asset:`washstand`,price:80,seller:`raccoon`,quest:null,requires:null,comment:`Вода холодная. Зато честная.`,variants:!0,cutlet:`Умывальник. Лапы мыть перед ужином. Всем.`},{key:`wall_roses`,name:`Обои с розами`,kind:`finish`,zone:`all`,asset:`wall_roses`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Обои с розами. Не пахнут, зато и не вянут.`,cutlet:`Розы на стенах. Красиво и без шипов.`},{key:`wall_daisies`,name:`Обои с ромашками`,kind:`finish`,zone:`all`,asset:`wall_daisies`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Обои с ромашками. Любит, не любит – тут все любят.`,cutlet:`Ромашки на стенах. Весело. Я одобряю.`},{key:`wall_ivy`,name:`Обои с плющом`,kind:`finish`,zone:`all`,asset:`wall_ivy`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Обои с плющом. Растёт только вширь, поливать не надо.`,cutlet:`Плющ на стенах. Растёт аккуратно. Как и положено.`},{key:`wall_swallows`,name:`Обои с ласточками`,kind:`finish`,zone:`all`,asset:`wall_swallows`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Обои с ласточками. Летят на юг, но со стены не улетят.`,cutlet:`Ласточки на стенах. Пусть остаются, им тут хорошо.`},{key:`rug_round_daisy`,name:`Круглый коврик с ромашкой`,kind:`decor`,zone:`living`,asset:`rug_round_daisy`,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Коврик с ромашкой. Наступать можно, рвать нельзя.`,cutlet:`Коврик с ромашкой. Вытирать лапы – до него, а не на нём.`},{key:`rug_round_patch`,name:`Лоскутный коврик`,kind:`decor`,zone:`all`,asset:`rug_round_patch`,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Лоскутный коврик. Сшит из всего, что плохо лежало.`,cutlet:`Лоскутный коврик. Пёстро. Но уютно, не спорю.`},{key:`rug_rect_daisy`,name:`Коврик с ромашками`,kind:`decor`,zone:`all`,asset:`rug_rect_daisy`,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Коврик с ромашками. Ромашки не мнутся. Проверено лапами.`,cutlet:`Коврик с ромашками. Мягко. Ступай осторожно.`},{key:`rug_rect_patch`,name:`Лоскутная дорожка`,kind:`decor`,zone:`all`,asset:`rug_rect_patch`,price:50,seller:`raccoon`,quest:null,requires:null,comment:`Лоскутная дорожка. Каждый лоскут – из другой истории.`,cutlet:`Лоскутная дорожка. Енот говорит, каждый лоскут с историей. Пусть молчит.`},{key:`shelf_kitchen_sage`,name:`Кухонная полочка`,kind:`decor`,zone:`dining`,asset:`shelf_kitchen_sage`,price:45,seller:`raccoon`,quest:null,requires:null,comment:`Кухонная полочка. Для баночек, которые я не открывал.`,cutlet:`Кухонная полочка. Баночки по местам. Наконец-то.`},{key:`shelf_kitchen_ornate`,name:`Резная полочка`,kind:`decor`,zone:`dining`,asset:`shelf_kitchen_ornate`,price:45,seller:`raccoon`,quest:null,requires:null,comment:`Резная полочка. Резал не я, но любовался я.`,cutlet:`Резная полочка. Тонкая работа. Не вешай на неё ничего тяжёлого.`},{key:`picture_lighthouse`,name:`Картина с маяком`,kind:`decor`,zone:`living`,asset:`picture_lighthouse`,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Маяк. Светит тем, кто заблудился по дороге к ужину.`,cutlet:`Маяк. Чтобы гости находили дорогу к нам на чай.`},{key:`picture_boat`,name:`Картина с лодочкой`,kind:`decor`,zone:`living`,asset:`picture_boat`,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Лодочка. Плывёт и никуда не торопится. Как я после обеда.`,cutlet:`Лодочка. Пусть плывёт. Мы останемся дома.`},{key:`picture_tower`,name:`Картина с башней`,kind:`decor`,zone:`living`,asset:`picture_tower`,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Башня. Похоже на наш дом, если прищуриться.`,cutlet:`Башня. Похожа на мою. Моя лучше.`},{key:`picture_apples`,name:`Картина с яблоками`,kind:`decor`,zone:`dining`,asset:`picture_apples`,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Яблоки. Смотрю – и сразу хочется пирога.`,cutlet:`Яблоки на картине. Настоящие – в буфете.`},{key:`picture_daisies`,name:`Картина с ромашками`,kind:`decor`,zone:`bedroom`,asset:`picture_daisies`,price:40,seller:`raccoon`,quest:null,requires:null,comment:`Ромашки. Букет, который не надо ставить в воду.`,cutlet:`Ромашки. Поливать не надо. Удобно.`},{key:`hat_peg`,name:`Крючки для шляп`,kind:`furniture`,zone:`bedroom`,asset:`hat_peg`,price:30,seller:`raccoon`,quest:null,requires:null,comment:`Крючки для шляп. Шляпы в цену не входят. Шляпы – моя слабость.`,variants:!0,cutlet:`Крючки для шляп. Твоя шляпа теперь не будет лежать где попало.`},{key:`wardrobe_sage`,name:`Шкаф цвета шалфея`,kind:`decor`,zone:`bedroom`,asset:`wardrobe_sage`,price:90,seller:`raccoon`,quest:null,requires:null,comment:`Шкаф цвета шалфея. Внутри пусто, и я тут ни при чём.`,cutlet:`Шкаф цвета шалфея. Спокойный цвет. Как раз для порядка.`},{key:`pouf`,name:`Пуфик`,kind:`furniture`,zone:`bedroom`,asset:`pouf`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Пуфик. Сядешь – и вставать уже не хочется.`,variants:!0,cutlet:`Пуфик. Для меня. Ну и для гостей.`},{key:`candle_lantern`,name:`Фонарь со свечой`,kind:`decor`,asset:`candle_lantern`,price:60,seller:`raccoon`,quest:null,requires:`tea_table`,comment:`Фонарь для свечи. Свеча внутри – и ничего не подпалишь.`,zone:`living`,cutlet:`Фонарь со свечой. Светло и безопасно. Хорошо придумано.`},{key:`teacups_daisy`,name:`Кружка с ромашками`,kind:`variant`,variant_of:[`teacups`],asset:`teacups_daisy`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Кружка с ромашкой. Чай в ней вкуснее. Проверено мной лично.`,cutlet:`Кружка с ромашкой. Моя. Не перепутай.`},{key:`fern_geranium`,name:`Горшок с геранью`,kind:`variant`,variant_of:[`fern`],asset:`fern_geranium`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Герань. Цветёт без спросу – совсем как я.`,cutlet:`Герань. Пахнет летом. Пусть стоит.`},{key:`crown_cushion_dumka`,name:`Подушка-думка`,kind:`variant`,variant_of:[`crown_cushion`],asset:`crown_cushion_dumka`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Маленькая подушечка. Для короны, когда корона устала.`,cutlet:`Подушечка-думка. Корона довольна.`},{key:`crown_cushion_folk`,name:`Вышитая подушка с короной`,kind:`variant`,variant_of:[`crown_cushion`],asset:`crown_cushion_folk`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Вышитая подушечка. Вышивали долго, я сидел рядом и подсказывал.`,cutlet:`Вышитая подушка. Корона на ней как на троне.`},{key:`broom_new`,name:`Новая метла`,kind:`variant`,variant_of:[`broom`],asset:`broom_new`,price:60,seller:`raccoon`,quest:{character:`moth`,what:`games`,count:5},requires:null,comment:`Новая метла. Старая знала слишком много.`,cutlet:`Новая метла. Метёт чисто. Старую – в чулан, с почётом.`},{key:`teapot_brown`,name:`Чайник в грелке`,kind:`variant`,variant_of:[`teapot`],asset:`teapot_brown`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Чайник в грелке. Чтобы чай не остыл, пока ищешь печенье.`,cutlet:`Чайник в грелке. Чай не остынет. Я проверю.`},{key:`clock_cuckoo`,name:`Часы с кукушкой`,kind:`variant`,variant_of:[`clock`],asset:`clock_cuckoo`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Часы с кукушкой. Кукует по делу, не то что некоторые.`,cutlet:`Часы с кукушкой. Кукушка точная. Это хорошо.`},{key:`blanket_basket_wicker`,name:`Плетёная корзинка`,kind:`variant`,variant_of:[`blanket_basket`],asset:`blanket_basket_wicker`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Плетёная корзинка. В детстве я в такую помещался целиком.`,cutlet:`Плетёная корзинка. Пледы сложены. Красота.`},{key:`blanket_basket_quilt`,name:`Стопка одеял`,kind:`variant`,variant_of:[`blanket_basket`],asset:`blanket_basket_quilt`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Стопка одеял. Чем выше стопка, тем слаще сон.`,cutlet:`Стопка одеял. Зимой пригодится. И осенью тоже.`},{key:`rug_doormat`,name:`Коврик у двери`,kind:`variant`,variant_of:[`rug_living`,`rug_bedroom`],asset:`rug_doormat`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Коврик у двери. Вытирайте лапы. Я вытираю. Иногда.`,cutlet:`Коврик у двери. Лапы вытирать. Всем. Еноту дважды.`},{key:`pouf_patch`,name:`Лоскутный пуфик`,kind:`variant`,variant_of:[`pouf`],asset:`pouf_patch`,price:60,seller:`raccoon`,quest:null,requires:null,comment:`Лоскутный пуфик. Из всего, что осталось. А осталось много.`,cutlet:`Лоскутный пуфик. Пёстрый. Сидеть на нём буду я.`},{key:`rug_striped`,name:`Пёстрый половик`,kind:`decor`,asset:`rug_striped`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Полосатый половик. Полоски – чтобы не заблудиться.`,zone:`all`,cutlet:`Пёстрый половик. Весёлый. Пусть лежит.`},{key:`rug_striped_scrap`,name:`Енотий половик`,kind:`variant`,asset:`rug_striped_scrap`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Половик по-енотьи. Полоски из того, что нашлось.`,variant_of:[`rug_living`,`rug_bedroom`],cutlet:`Енотий половик. Сшит криво, но от души.`},{key:`rug_runner`,name:`Полосатая дорожка`,kind:`variant`,variant_of:[`rug_living`,`rug_bedroom`],asset:`rug_runner`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Дорожка. Ведёт прямо на кухню. Я проверил направление.`,cutlet:`Полосатая дорожка. Ровная. Я люблю, когда ровно.`},{key:`rug_oval`,name:`Вязаный коврик`,kind:`decor`,asset:`rug_oval`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Вязаный коврик. Мягкий, как лапы после бани.`,zone:`all`,cutlet:`Вязаный коврик. Тёплый. Можно ходить босиком.`},{key:`lamp_sage`,name:`Лампа цвета шалфея`,kind:`decor`,zone:`all`,asset:`lamp_sage`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Лампа цвета шалфея. Светит спокойно, как будто никуда не торопится.`,cutlet:`Лампа цвета шалфея. Свет мягкий. Глазам приятно.`},{key:`lamp_patch`,name:`Лоскутный фонарь`,kind:`decor`,zone:`all`,asset:`lamp_patch`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Лоскутный фонарь. Свет – в клеточку. Сам не ожидал.`,cutlet:`Лоскутный фонарь. Свет в клеточку. Забавно.`},{key:`lampshade`,name:`Абажур`,kind:`decor`,asset:`lampshade`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Абажур. Свет из-под него добрее.`,zone:`all`,cutlet:`Абажур. Свет стал добрее. Так и надо.`},{key:`wall_shelf`,name:`Полочка`,kind:`variant`,variant_of:[`shelf`,`shelf_bedroom`],asset:`wall_shelf`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Настенная полочка. Для всего, что жалко прятать.`,cutlet:`Полочка. Ставь на неё самое красивое.`},{key:`jam_jar_trio`,name:`Банки с вареньем`,kind:`variant`,variant_of:[`jam_jar`],asset:`jam_jar_trio`,price:100,seller:`raccoon`,quest:{character:`opossum_mom`,what:`wins`,count:5,room:`kitchen`},requires:null,comment:`Три банки варенья. Было четыре. Не спрашивайте.`,cutlet:`Три банки варенья. Одну я уже наметила.`},{key:`chair_stool`,name:`Табуретка`,kind:`variant`,variant_of:[`chair`,`chair2`],asset:`chair_stool`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Табуретка. Для гостя, который ненадолго. Таких не бывает.`,cutlet:`Табуретка. Для гостей, которые ненадолго. Енот так не умеет.`},{key:`chair_patch`,name:`Лоскутный стул`,kind:`variant`,variant_of:[`chair`,`chair2`],asset:`chair_patch`,price:100,seller:`raccoon`,quest:null,requires:null,comment:`Лоскутный стул. Сидеть мягко, смотреть весело.`,cutlet:`Лоскутный стул. Мягкий. Можно сидеть долго.`},{key:`bookshelf_carved`,name:`Книжный шкаф`,kind:`variant`,variant_of:[`bookshelf`],asset:`bookshelf_carved`,price:130,seller:`raccoon`,quest:{character:`bat`,what:`wins`,count:7,room:`library`},requires:null,comment:`Резной шкаф. Книги в нём умнеют.`,cutlet:`Резной книжный шкаф. Книгам в нём почётно.`},{key:`bookshelf_glass`,name:`Шкаф со стёклами`,kind:`variant`,variant_of:[`bookshelf`],asset:`bookshelf_glass`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Шкаф со стеклом. Книги видно, пыль – нет.`,cutlet:`Шкаф со стёклами. Книги видно, пыль – нет. Разумно.`},{key:`quilt_stars`,name:`Лоскутное одеяло`,kind:`decor`,asset:`quilt_stars`,price:60,seller:`raccoon`,quest:{character:`chernika`,what:`wins`,count:7,room:`bedroom`},requires:`sofa`,comment:`Одеяло со звёздами. Под ним снятся только хорошие сны.`,zone:`living`,cutlet:`Одеяло со звёздами. На диване теперь уютно.`},{key:`chest_alt`,name:`Сундук`,kind:`variant`,variant_of:[`chest`],asset:`chest_alt`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Другой сундук. Тот же сундук, только в другой шубе.`,cutlet:`Другой сундук. Вместительный. Наведём в нём порядок.`},{key:`globe_antique`,name:`Глобус`,kind:`variant`,variant_of:[`globe`],asset:`globe_antique`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Старинный глобус. Полмира на нём ещё не открыли. Зато наш дом есть.`,cutlet:`Старинный глобус. Наш дом на нём не нарисован. Зря.`},{key:`tablecloth`,name:`Скатерть с вышивкой`,kind:`variant`,variant_of:[`table`],asset:`tablecloth`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Скатерть с вышивкой. Я же говорил: ужин – со скатертью.`,cutlet:`Скатерть с вышивкой. Теперь ужин – как полагается.`},{key:`lamp_chandelier`,name:`Люстра со свечами`,kind:`decor`,asset:`lamp_chandelier`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Люстра со свечами. Зажигать буду не я. Я обещал.`,zone:`all`,cutlet:`Люстра со свечами. Нарядно. Зажигать буду я.`},{key:`clock_wall`,name:`Ходики`,kind:`variant`,variant_of:[`clock`],asset:`clock_wall`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Часы с маятником. Тик-так, и никакой спешки.`,cutlet:`Ходики. Тикают тихо. Не мешают думать.`},{key:`armchair_patch`,name:`Лоскутное кресло`,kind:`variant`,variant_of:[`armchair`],asset:`armchair_patch`,price:130,seller:`raccoon`,quest:null,requires:null,comment:`Лоскутное кресло. Каждый лоскут – отдельная история. Не спрашивай какая.`,cutlet:`Лоскутное кресло. Пёстрое, зато удобное.`},{key:`sofa_small`,name:`Диванчик`,kind:`variant`,variant_of:[`sofa`],asset:`sofa_small`,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Диванчик. На двоих, если один из них енот.`,cutlet:`Диванчик. Маленький, но мне хватает.`},{key:`sofa_striped`,name:`Полосатый диван`,kind:`variant`,variant_of:[`sofa`],asset:`sofa_striped`,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Полосатый диван. Полоски вдоль – чтобы лежать удобнее.`,cutlet:`Полосатый диван. Нарядный. Не прыгать.`},{key:`wardrobe_carved`,name:`Платяной шкаф`,kind:`variant`,variant_of:[`wardrobe`],asset:`wardrobe_carved`,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Резной шкаф. Снаружи красивый, внутри просторный. Как я.`,cutlet:`Платяной шкаф. Вещи – по полкам. Без разговоров.`},{key:`wardrobe_mirror`,name:`Шкаф с зеркалом`,kind:`variant`,variant_of:[`wardrobe`],asset:`wardrobe_mirror`,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Шкаф с зеркалом. Можно примерить шляпу. И себя.`,cutlet:`Шкаф с зеркалом. Можно проверить, как сидит корона.`},{key:`telescope_spyglass`,name:`Подзорная труба`,kind:`variant`,variant_of:[`telescope`],asset:`telescope_spyglass`,price:160,seller:`raccoon`,quest:{character:`rat`,what:`wins`,count:10,room:`laboratory`},requires:null,comment:`Подзорная труба. Видно далеко. Почти до пирожков на соседней крыше.`,cutlet:`Подзорная труба. Смотри на звёзды. Не на соседские пироги.`},{key:`cupboard_painted`,name:`Белый буфет`,kind:`variant`,variant_of:[`cupboard`],asset:`cupboard_painted`,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Белый буфет. Чашки в нём сами просятся на стол.`,cutlet:`Белый буфет. Чисто и светло. Посуде нравится.`},{key:`cupboard_folk`,name:`Расписной буфет`,kind:`variant`,variant_of:[`cupboard`],asset:`cupboard_folk`,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Расписной буфет. Цветы на нём не вянут уже сто лет.`,cutlet:`Расписной буфет. Нарядный. Чашки будут довольны.`},{key:`sofa_patch`,name:`Лоскутный диван`,kind:`variant`,variant_of:[`sofa`],asset:`sofa_patch`,price:160,seller:`raccoon`,quest:null,requires:null,comment:`Лоскутный диван. Шили всем лесом. Я руководил.`,cutlet:`Лоскутный диван. Шили всем лесом. Видно.`},{key:`wreath_bells`,name:`Венок с колокольчиками`,kind:`decor`,zone:`living`,asset:`wreath_bells`,price:40,seller:`raccoon`,quest:null,requires:null,event:`winter`,comment:``,cutlet:``},{key:`wreath_bow`,name:`Венок с бантом`,kind:`decor`,zone:`living`,asset:`wreath_bow`,price:40,seller:`raccoon`,quest:null,requires:null,event:`winter`,comment:``,cutlet:``},{key:`wreath_orange`,name:`Венок с апельсинами`,kind:`decor`,zone:`living`,asset:`wreath_orange`,price:40,seller:`raccoon`,quest:null,requires:null,event:`winter`,comment:``,cutlet:``},{key:`wreath_snow`,name:`Снежный венок`,kind:`decor`,zone:`living`,asset:`wreath_snow`,price:40,seller:`raccoon`,quest:null,requires:null,event:`winter`,comment:``,cutlet:``},{key:`food_turkey`,name:`Запечённая индейка`,kind:`decor`,zone:`dining`,asset:`food_turkey`,price:60,seller:`raccoon`,quest:null,requires:`table`,event:`winter`,comment:``,cutlet:``},{key:`food_ham`,name:`Окорок`,kind:`decor`,zone:`dining`,asset:`food_ham`,price:60,seller:`raccoon`,quest:null,requires:`table`,event:`winter`,comment:``,cutlet:``},{key:`food_fruitcake`,name:`Кекс с изюмом`,kind:`decor`,zone:`dining`,asset:`food_fruitcake`,price:60,seller:`raccoon`,quest:null,requires:`table`,event:`winter`,comment:``,cutlet:``},{key:`food_log`,name:`Рулет-полено`,kind:`decor`,zone:`dining`,asset:`food_log`,price:60,seller:`raccoon`,quest:null,requires:`table`,event:`winter`,comment:``,cutlet:``},{key:`food_punch`,name:`Чаша пунша`,kind:`decor`,zone:`dining`,asset:`food_punch`,price:60,seller:`raccoon`,quest:null,requires:`table`,event:`winter`,comment:``,cutlet:``},{key:`food_crescents`,name:`Рогалики`,kind:`decor`,zone:`dining`,asset:`food_crescents`,price:60,seller:`raccoon`,quest:null,requires:`table`,event:`winter`,comment:``,cutlet:``},{key:`food_apples`,name:`Печёные яблоки`,kind:`decor`,zone:`dining`,asset:`food_apples`,price:60,seller:`raccoon`,quest:null,requires:`cupboard`,event:`winter`,comment:``,cutlet:``},{key:`food_tangerines`,name:`Мандарины`,kind:`decor`,zone:`dining`,asset:`food_tangerines`,price:60,seller:`raccoon`,quest:null,requires:`cupboard`,event:`winter`,comment:``,cutlet:``},{key:`food_gingerbread_house`,name:`Пряничный домик`,kind:`decor`,zone:`dining`,asset:`food_gingerbread_house`,price:60,seller:`raccoon`,quest:null,requires:`cupboard`,event:`winter`,comment:``,cutlet:``},{key:`food_gingerbread_men`,name:`Пряничные человечки`,kind:`decor`,zone:`living`,asset:`food_gingerbread_men`,price:60,seller:`raccoon`,quest:null,requires:`fireplace`,event:`winter`,comment:``,cutlet:``},{key:`food_star_cookies`,name:`Печенье-звёздочки`,kind:`decor`,zone:`living`,asset:`food_star_cookies`,price:60,seller:`raccoon`,quest:null,requires:`fireplace`,event:`winter`,comment:``,cutlet:``},{key:`food_mugs`,name:`Кружки какао`,kind:`decor`,zone:`living`,asset:`food_mugs`,price:60,seller:`raccoon`,quest:null,requires:`fireplace`,event:`winter`,comment:``,cutlet:``}]},xe={note:`Расстановка комнаты новоселья — единственный источник мест. Редактор (npm run dev, ✎ на комнате) выгружает этот файл целиком. Место: kind room (zone, row: back/front/wall/ceiling/rug/floorSmall, x — доля ширины зоны, y — глубина на полосе пола или центр на стене) или surface (on — предмет мебели, x, y — точка низа в % картинки мебели, dy — поправка высоты для стиля). size — доля высоты стены (sizeIs: высота или ширина); itemSize — свой размер у кандидата; maxWidth — предел ширины в долях ширины зоны (maxWidthByStyle — для отдельного стиля), картинку шире уменьшаем пропорционально; z — поднять над соседями в своём ряду. items — кандидаты; shared — показывается один (выбор нажатием в комнате). untilOwned — место только пока не куплен этот предмет.`,places:[{key:`bookshelf`,kind:`room`,zone:0,zoneName:`living`,row:`back`,x:.141,y:.11,size:.5,sizeIs:`высота, доля высоты стены`,items:[`bookshelf`],maxWidth:.26},{key:`books`,kind:`surface`,on:`bookshelf`,x:72,y:2.3,size:.07,sizeIs:`высота, доля высоты стены`,items:[`books`],untilOwned:`fireplace`,zone:0,zoneName:`living`,hideOn:[`scrap`],dy:{royal:.8,daisy:-.5,scrap:8.5}},{key:`globe`,kind:`surface`,on:`bookshelf`,x:28,y:2.3,size:.1,sizeIs:`высота, доля высоты стены`,items:[`globe`],untilOwned:`fireplace`,zone:0,zoneName:`living`,hideOn:[`scrap`],dy:{royal:.8,daisy:-.5,scrap:8.5}},{key:`library_ladder`,kind:`surface`,on:`bookshelf`,x:66.8,y:99.2,size:.22,sizeIs:`высота, доля высоты стены`,items:[`library_ladder`],z:10,zone:0,zoneName:`living`},{key:`fireplace`,kind:`room`,zone:0,zoneName:`living`,row:`back`,x:.453,y:.08,size:.3,sizeIs:`высота, доля высоты стены`,items:[`fireplace`]},{key:`mantel_left`,kind:`surface`,on:`fireplace`,x:22.8,y:3,size:.07,sizeIs:`высота, доля высоты стены`,items:[`books`],zone:0,zoneName:`living`,dy:{royal:1.6,scrap:1.5}},{key:`mantel_center`,kind:`surface`,on:`fireplace`,x:50,y:3,size:.08,sizeIs:`высота, доля высоты стены`,items:[`food_gingerbread_men`,`food_star_cookies`,`food_mugs`],zone:0,zoneName:`living`,dy:{royal:1.6,scrap:1.5},shared:!0},{key:`mantel_right`,kind:`surface`,on:`fireplace`,x:75,y:3,size:.1,sizeIs:`высота, доля высоты стены`,items:[`globe`],zone:0,zoneName:`living`,dy:{royal:1.6,scrap:1.5}},{key:`sofa`,kind:`room`,zone:0,zoneName:`living`,row:`front`,x:.806,y:.027,size:.25,sizeIs:`высота, доля высоты стены`,items:[`sofa`]},{key:`armchair`,kind:`room`,zone:0,zoneName:`living`,row:`front`,x:.674,y:.61,size:.2,sizeIs:`высота, доля высоты стены`,items:[`armchair`]},{key:`tea_table`,kind:`room`,zone:0,zoneName:`living`,row:`front`,x:.618,y:.79,size:.15,sizeIs:`высота, доля высоты стены`,items:[`tea_table`]},{key:`tree`,kind:`room`,zone:0,zoneName:`living`,row:`front`,x:.618,y:.79,size:.45,sizeIs:`высота, доля высоты стены`,note:`Ёлка зимнего события (после финала сюжета): на время события вместо чайного столика; картинка — winter.hw.tree.<стадия>`,items:[]},{key:`fireside`,kind:`room`,zone:0,zoneName:`living`,row:`front`,x:.415,y:.529,size:.24,sizeIs:`высота, доля высоты стены`,items:[`rocking_chair`],flip:!0},{key:`music_corner`,kind:`room`,zone:0,zoneName:`living`,row:`front`,x:.896,y:.691,size:.27,sizeIs:`высота, доля высоты стены`,items:[`gramophone`,`barrel_organ`],shared:!0,maxWidth:.26,itemSize:{barrel_organ:.2}},{key:`living_corner`,kind:`room`,zone:0,zoneName:`living`,row:`floorSmall`,x:.5,y:.9,size:.15,sizeIs:`высота, доля высоты стены`,items:[`fern`,`telescope`],shared:!0,itemSize:{telescope:.19,telescope_spyglass:.1},itemPos:{telescope_spyglass:{x:.5,y:.72}}},{key:`clock`,kind:`room`,zone:0,zoneName:`living`,row:`wall`,x:.853,y:.581,size:.21,sizeIs:`высота, доля высоты стены`,items:[`clock`]},{key:`picture`,kind:`room`,zone:0,zoneName:`living`,row:`wall`,x:.85,y:.233,size:.15,sizeIs:`высота, доля высоты стены`,items:[`picture_lighthouse`,`picture_boat`,`picture_tower`,`wreath_bells`,`wreath_bow`,`wreath_orange`,`wreath_snow`],shared:!0},{key:`shelf`,kind:`room`,zone:0,zoneName:`living`,row:`wall`,x:.265,y:.436,size:.12,sizeIs:`высота, доля высоты стены`,items:[`shelf`]},{key:`lamp_living`,kind:`room`,zone:0,zoneName:`living`,row:`ceiling`,x:.308,y:0,size:.26,sizeIs:`высота, доля высоты стены`,items:[`lamp_living`,`lampshade`,`lamp_sage`,`lamp_patch`,`lamp_chandelier`],shared:!0},{key:`rug_living`,kind:`room`,zone:0,zoneName:`living`,row:`rug`,x:.573,y:.67,size:.58,sizeIs:`ширина, доля высоты стены`,items:[`rug_living`,`rug_round_daisy`,`rug_round_patch`,`rug_rect_daisy`,`rug_rect_patch`,`rug_oval`,`rug_striped`],byWidth:!0,shared:!0},{key:`sofa_throw`,kind:`surface`,on:`sofa`,x:64,y:62,size:.07,items:[`quilt_stars`],dy:{royal:2,scrap:4},zone:0,zoneName:`living`},{key:`tea_table_top`,kind:`surface`,on:`tea_table`,x:50,y:17,size:.1,items:[`candle_lantern`],zone:0,zoneName:`living`},{key:`cupboard`,kind:`room`,zone:1,zoneName:`dining`,row:`back`,x:.188,y:.1,size:.48,sizeIs:`высота, доля высоты стены`,items:[`cupboard`],maxWidth:.26},{key:`jam_jar`,kind:`surface`,on:`cupboard`,x:18.8,y:14,size:.07,sizeIs:`высота, доля высоты стены`,items:[`jam_jar`],zone:1,zoneName:`dining`,dy:{royal:-5.8,daisy:-.5,scrap:1.9},variantOnlyOn:{jam_jar_trio:[`royal`]},itemPos:{jam_jar_trio:{x:50,y:8.2}},z:-100,at:{cupboard_painted:{x:19.8,y:3.1}}},{key:`apples`,kind:`surface`,on:`cupboard`,x:84.4,y:12.8,size:.068,sizeIs:`высота, доля высоты стены`,items:[`apples`,`food_apples`,`food_tangerines`,`food_gingerbread_house`],zone:1,zoneName:`dining`,dy:{royal:-5.8,daisy:-.5,scrap:1.9},z:-100,at:{cupboard_painted:{x:79.3,y:1.9}},shared:!0},{key:`work_corner`,kind:`room`,zone:1,zoneName:`dining`,row:`back`,x:.415,y:.07,size:.42,sizeIs:`высота, доля высоты стены`,items:[`wine_cabinet`],maxWidth:.2,shared:!0},{key:`stove`,kind:`room`,zone:1,zoneName:`dining`,row:`back`,x:.825,y:.12,size:.34,sizeIs:`высота, доля высоты стены`,items:[`stove`],maxWidth:.26},{key:`washstand`,kind:`room`,zone:1,zoneName:`dining`,row:`back`,x:.622,y:0,size:.3,sizeIs:`высота, доля высоты стены`,items:[`washstand`]},{key:`shelf_kitchen`,kind:`room`,zone:1,zoneName:`dining`,row:`wall`,x:.826,y:.595,size:.12,sizeIs:`высота, доля высоты стены`,items:[`shelf_kitchen_sage`,`shelf_kitchen_ornate`],shared:!0},{key:`picture_kitchen`,kind:`room`,zone:1,zoneName:`dining`,row:`wall`,x:.828,y:.376,size:.17,sizeIs:`высота, доля высоты стены`,items:[`picture_apples`,`wreath_bells`,`wreath_bow`,`wreath_orange`,`wreath_snow`],shared:!0},{key:`lamp_kitchen`,kind:`room`,zone:1,zoneName:`dining`,row:`ceiling`,x:.181,y:0,size:.22,sizeIs:`высота, доля высоты стены`,items:[`lamp_living`,`lamp_bedroom`,`lampshade`,`lamp_sage`,`lamp_patch`,`lamp_chandelier`],shared:!0},{key:`pickle_barrel`,kind:`room`,zone:1,zoneName:`dining`,row:`floorSmall`,x:.9,y:.862,size:.17,sizeIs:`высота, доля высоты стены`,items:[`pickle_barrel`]},{key:`chair`,kind:`room`,zone:1,zoneName:`dining`,row:`front`,x:.403,y:.671,size:.24,sizeIs:`высота, доля высоты стены`,items:[`chair`],flip:!0},{key:`table`,kind:`room`,zone:1,zoneName:`dining`,row:`front`,x:.527,y:.911,size:.2,sizeIs:`высота, доля высоты стены`,items:[`table`]},{key:`chair2`,kind:`room`,zone:1,zoneName:`dining`,row:`front`,x:.649,y:.661,size:.24,sizeIs:`высота, доля высоты стены`,items:[`chair2`]},{key:`broom`,kind:`room`,zone:1,zoneName:`dining`,row:`floorSmall`,x:.059,y:.039,size:.15,sizeIs:`высота, доля высоты стены`,items:[`broom`],itemPos:{broom_new:{x:.059,y:.19}}},{key:`watering_can`,kind:`room`,zone:1,zoneName:`dining`,row:`floorSmall`,x:.08,y:.88,size:.09,sizeIs:`высота, доля высоты стены`,items:[`watering_can`]},{key:`teapot`,kind:`surface`,on:`table`,x:24,y:14,size:.08,sizeIs:`высота, доля высоты стены`,items:[`teapot`],zone:1,zoneName:`dining`,dy:{royal:9.2,daisy:2.2,scrap:3.6}},{key:`teacups`,kind:`surface`,on:`table`,x:44,y:19,size:.06,sizeIs:`высота, доля высоты стены`,items:[`teacups`],zone:1,zoneName:`dining`,dy:{royal:9.2,daisy:2.2,scrap:3.6}},{key:`cake`,kind:`surface`,on:`table`,x:62,y:10,size:.08,sizeIs:`высота, доля высоты стены`,items:[`cake`,`food_turkey`,`food_ham`,`food_fruitcake`,`food_log`,`food_punch`,`food_crescents`],zone:1,zoneName:`dining`,dy:{royal:9.2,daisy:2.2,scrap:3.6},shared:!0},{key:`flower_vase`,kind:`surface`,on:`table`,x:71,y:18.6,size:.11,sizeIs:`высота, доля высоты стены`,items:[`flower_vase`],zone:1,zoneName:`dining`,dy:{royal:9.2,daisy:2.2,scrap:3.6}},{key:`samovar`,kind:`surface`,on:`table`,x:36,y:8,size:.12,sizeIs:`высота, доля высоты стены`,items:[`samovar`],zone:1,zoneName:`dining`,dy:{royal:9.2,daisy:2.2,scrap:3.6},at:{scrap:{x:39.6,y:4.9}}},{key:`wardrobe`,kind:`room`,zone:2,zoneName:`bedroom`,row:`back`,x:.172,y:.141,size:.56,sizeIs:`высота, доля высоты стены`,items:[`wardrobe`,`wardrobe_sage`],maxWidth:.22,shared:!0},{key:`bed`,kind:`room`,zone:2,zoneName:`bedroom`,row:`back`,x:.525,y:.632,size:.36,sizeIs:`высота, доля высоты стены`,items:[`bed`]},{key:`dresser`,kind:`room`,zone:2,zoneName:`bedroom`,row:`back`,x:.893,y:.14,size:.37,sizeIs:`высота, доля высоты стены`,items:[`dresser`],maxWidth:.26,stretchByStyle:{daisy:.91}},{key:`bedside`,kind:`room`,zone:2,zoneName:`bedroom`,row:`back`,x:-.203,y:.159,size:.18,sizeIs:`высота, доля высоты стены`,items:[`bedside`],maxWidth:.24,anchor:`bed`},{key:`bedside2`,kind:`room`,zone:2,zoneName:`bedroom`,row:`back`,x:.202,y:.149,size:.18,sizeIs:`высота, доля высоты стены`,items:[`bedside2`],maxWidth:.24,anchor:`bed`},{key:`dresser_seat`,kind:`room`,zone:2,zoneName:`bedroom`,row:`front`,x:.92,y:.499,size:.13,sizeIs:`высота, доля высоты стены`,items:[`pouf`]},{key:`bed_foot`,kind:`room`,zone:2,zoneName:`bedroom`,row:`front`,x:.526,y:.669,size:.11,sizeIs:`высота, доля высоты стены`,items:[`chest`,`blanket_basket`],shared:!0,z:10},{key:`slippers`,kind:`room`,zone:2,zoneName:`bedroom`,row:`floorSmall`,x:-.18,y:.581,size:.06,sizeIs:`высота, доля высоты стены`,items:[`slippers`],z:-520,anchor:`bed`},{key:`toy_horse`,kind:`room`,zone:2,zoneName:`bedroom`,row:`floorSmall`,x:.253,y:.247,size:.1,sizeIs:`высота, доля высоты стены`,items:[`toy_horse`]},{key:`yarn`,kind:`room`,zone:2,zoneName:`bedroom`,row:`floorSmall`,x:.593,y:.116,size:.05,sizeIs:`высота, доля высоты стены`,items:[`yarn`]},{key:`picture_bedroom`,kind:`room`,zone:2,zoneName:`bedroom`,row:`wall`,x:0,y:-.215,size:.17,sizeIs:`высота, доля высоты стены`,items:[`picture_cat_window`,`picture_daisies`,`picture_cat`,`wreath_bells`,`wreath_bow`,`wreath_orange`,`wreath_snow`],shared:!0,anchor:`wardrobe`},{key:`hat_peg`,kind:`room`,zone:2,zoneName:`bedroom`,row:`wall`,x:.413,y:.751,size:.057,sizeIs:`ширина, доля высоты стены`,items:[`hat_peg`]},{key:`shelf_bedroom`,kind:`room`,zone:2,zoneName:`bedroom`,row:`wall`,x:.889,y:.553,size:.12,sizeIs:`высота, доля высоты стены`,items:[`shelf_bedroom`]},{key:`lamp_bedroom`,kind:`room`,zone:2,zoneName:`bedroom`,row:`ceiling`,x:.266,y:0,size:.18,sizeIs:`высота, доля высоты стены`,items:[`lamp_bedroom`,`lampshade`,`lamp_sage`,`lamp_patch`,`lamp_chandelier`],shared:!0,itemPos:{lamp_chandelier:{x:.242,y:0},lamp_sage:{x:.245,y:0}}},{key:`rug_bedroom`,kind:`room`,zone:2,zoneName:`bedroom`,row:`rug`,x:.514,y:.609,size:.56,sizeIs:`ширина, доля высоты стены`,items:[`rug_bedroom`,`rug_round_daisy`,`rug_round_patch`,`rug_rect_daisy`,`rug_rect_patch`,`rug_oval`,`rug_striped`],byWidth:!0,z:-300,shared:!0},{key:`alarm_clock`,kind:`surface`,on:`bedside`,x:30,y:4.4,size:.07,sizeIs:`высота, доля высоты стены`,items:[`alarm_clock`],dy:{royal:-1.9,daisy:-1.3,scrap:3.5},zone:2,zoneName:`bedroom`},{key:`candle`,kind:`surface`,on:`bedside`,x:70,y:4.4,size:.08,sizeIs:`высота, доля высоты стены`,items:[`candle`],dy:{royal:-1.9,daisy:-1.3,scrap:3.5},zone:2,zoneName:`bedroom`},{key:`night_lamp`,kind:`surface`,on:`bedside2`,x:50,y:4.4,size:.1,sizeIs:`высота, доля высоты стены`,items:[`night_lamp`],zone:2,zoneName:`bedroom`,dy:{royal:-1.9,daisy:-1.3,scrap:3.5}},{key:`photo_frame`,kind:`surface`,on:`dresser`,x:20.8,y:51.7,size:.06,sizeIs:`высота, доля высоты стены`,items:[`photo_frame`],dy:{daisy:-1.9},zone:2,zoneName:`bedroom`,at:{royal:{x:23.1,y:54.1},scrap:{x:23.1,y:51.6}}},{key:`music_box`,kind:`surface`,on:`dresser`,x:51.2,y:53.9,size:.05,sizeIs:`высота, доля высоты стены`,items:[`music_box`],dy:{daisy:-1.9},zone:2,zoneName:`bedroom`,at:{royal:{x:50,y:53.4},scrap:{x:50,y:50.9}}},{key:`crown_cushion`,kind:`surface`,on:`dresser`,x:78.9,y:56.1,size:.07,sizeIs:`высота, доля высоты стены`,items:[`crown_cushion`],dy:{daisy:-1.9},zone:2,zoneName:`bedroom`,at:{royal:{x:84.7,y:57.1},scrap:{x:84.7,y:54.6}}},{key:`hand_mirror`,kind:`surface`,on:`dresser`,x:34.3,y:50.1,size:.07,sizeIs:`высота, доля высоты стены`,items:[`hand_mirror`],dy:{daisy:-1.9},zone:2,zoneName:`bedroom`,at:{royal:{x:32,y:51.9},scrap:{x:32,y:49.4}}}]},Se=[`easy`,`medium`,`hard`];function Ce(e,t,n,r=t){return e.gender===`f`?n:e.gender===`pl`?r:t}function we(e,t){let n=t?.[e.id];return e.choices.some(e=>e.value===n)?n:e.choices[0]?.value??``}function Te(e){return e}var Ee={images:JSON.parse(`{"start.background":"img/start/background.jpg","ui.rules":"img/ui/rules.webp","ui.giveUp":"img/ui/give-up.webp","ui.settings":"img/ui/settings.webp","ui.turn":"img/ui/turn.svg","ui.back":"img/ui/back.webp","ui.play":"img/ui/play.svg","ui.ok":"img/ui/ok.svg","ui.next":"img/ui/next.webp","ui.skipChapter":"img/ui/skip-chapter.webp","ui.soundOn":"img/ui/sound-on.webp","ui.soundOff":"img/ui/sound-off.webp","ui.noteOn":"img/ui/note-gold.svg","ui.noteOff":"img/ui/note-gold-off.svg","ui.journal":"img/ui/journal.webp","ui.replay":"img/ui/replay.webp","ui.door":"img/ui/door.webp","ui.pencil":"img/ui/pencil.svg","ui.eraser":"img/ui/eraser.svg","ui.undo":"img/ui/back.webp","ui.wood":"img/ui/wood.jpg","house.attic":"img/house/attic.png","house.atticTower":"img/house/attic-tower.png","hw.wall.plaster":"img/housewarming/wall-plaster.jpg","hw.wall.leaves":"img/housewarming/wall-leaves.jpg","hw.wall.stars":"img/housewarming/wall-stars.jpg","hw.stairs":"img/housewarming/stairs-top.webp","hw.wall.stripes":"img/housewarming/wall-stripes.jpg","hw.floor.honey":"img/housewarming/floor-honey.jpg","hw.floor.dark":"img/housewarming/floor-dark.jpg","hw.floor.checker":"img/housewarming/floor-checker.jpg","hw.window":"img/housewarming/window-round.png","hw.post":"img/housewarming/post.png","hw.beam":"img/housewarming/beam.png","hw.baseboard":"img/housewarming/baseboard.png","hw.rafter":"img/housewarming/rafter-left.png","hw.f.armchair.rustic":"img/housewarming/furniture/armchair-rustic.webp","hw.f.armchair.royal":"img/housewarming/furniture/armchair-royal.webp","hw.f.armchair.scrap":"img/housewarming/furniture/armchair-scrap.webp","hw.f.bed.rustic":"img/housewarming/furniture/bed-rustic.webp","hw.f.bed.royal":"img/housewarming/furniture/bed-royal.webp","hw.f.bed.scrap":"img/housewarming/furniture/bed-scrap.webp","hw.f.bedside.rustic":"img/housewarming/furniture/bedside-rustic.webp","hw.f.bedside.royal":"img/housewarming/furniture/bedside-royal.webp","hw.f.bedside.scrap":"img/housewarming/furniture/bedside-scrap.webp","hw.f.bookshelf.rustic":"img/housewarming/furniture/bookshelf-rustic.webp","hw.f.bookshelf.royal":"img/housewarming/furniture/bookshelf-royal.webp","hw.f.bookshelf.scrap":"img/housewarming/furniture/bookshelf-scrap.webp","hw.f.chair.rustic":"img/housewarming/furniture/chair-rustic.webp","hw.f.chair.royal":"img/housewarming/furniture/chair-royal.webp","hw.f.chair.scrap":"img/housewarming/furniture/chair-scrap.webp","hw.f.tea_table.rustic":"img/housewarming/furniture/tea-table-rustic.webp","hw.f.tea_table.royal":"img/housewarming/furniture/tea-table-royal.webp","hw.f.tea_table.scrap":"img/housewarming/furniture/tea-table-scrap.webp","hw.f.chest.rustic":"img/housewarming/furniture/chest-rustic.webp","hw.f.chest.royal":"img/housewarming/furniture/chest-royal.webp","hw.f.chest.scrap":"img/housewarming/furniture/chest-scrap.webp","hw.f.clock.rustic":"img/housewarming/furniture/clock-rustic.webp","hw.f.clock.royal":"img/housewarming/furniture/clock-royal.webp","hw.f.clock.scrap":"img/housewarming/furniture/clock-scrap.webp","hw.f.cupboard.rustic":"img/housewarming/furniture/cupboard-rustic.webp","hw.f.cupboard.royal":"img/housewarming/furniture/cupboard-royal.webp","hw.f.cupboard.scrap":"img/housewarming/furniture/cupboard-scrap.webp","hw.f.dresser.rustic":"img/housewarming/furniture/dresser-rustic.webp","hw.f.dresser.royal":"img/housewarming/furniture/dresser-royal.webp","hw.f.dresser.scrap":"img/housewarming/furniture/dresser-scrap.webp","hw.f.lamp.rustic":"img/housewarming/furniture/lamp-rustic.webp","hw.f.lamp.royal":"img/housewarming/furniture/lamp-royal.webp","hw.f.lamp.scrap":"img/housewarming/furniture/lamp-scrap.webp","hw.f.rug.rustic":"img/housewarming/furniture/rug-rustic.webp","hw.f.rug.royal":"img/housewarming/furniture/rug-royal.webp","hw.f.rug.scrap":"img/housewarming/furniture/rug-scrap.webp","hw.f.shelf.rustic":"img/housewarming/furniture/shelf-rustic.webp","hw.f.shelf.royal":"img/housewarming/furniture/shelf-royal.webp","hw.f.shelf.scrap":"img/housewarming/furniture/shelf-scrap.webp","hw.f.sofa.rustic":"img/housewarming/furniture/sofa-rustic.webp","hw.f.sofa.royal":"img/housewarming/furniture/sofa-royal.webp","hw.f.sofa.scrap":"img/housewarming/furniture/sofa-scrap.webp","hw.f.stove.rustic":"img/housewarming/furniture/stove-rustic.webp","hw.f.stove.royal":"img/housewarming/furniture/stove-royal.webp","hw.f.stove.scrap":"img/housewarming/furniture/stove-scrap.webp","hw.f.table.rustic":"img/housewarming/furniture/table-rustic.webp","hw.f.table.royal":"img/housewarming/furniture/table-royal.webp","hw.f.table.scrap":"img/housewarming/furniture/table-scrap.webp","hw.f.wardrobe.rustic":"img/housewarming/furniture/wardrobe-rustic.webp","hw.f.wardrobe.royal":"img/housewarming/furniture/wardrobe-royal.webp","hw.f.wardrobe.scrap":"img/housewarming/furniture/wardrobe-scrap.webp","hw.s.alarm_clock":"img/housewarming/small/alarm-clock.webp","hw.s.apples":"img/housewarming/small/apples.webp","hw.s.blanket_basket":"img/housewarming/small/blanket-basket.webp","hw.s.books":"img/housewarming/small/books.webp","hw.s.broom":"img/housewarming/small/broom.webp","hw.s.cake":"img/housewarming/small/cake.webp","hw.s.candle":"img/housewarming/small/candle.webp","hw.s.crown_cushion":"img/housewarming/small/crown-cushion.webp","hw.s.fern":"img/housewarming/small/fern.webp","hw.s.flower_vase":"img/housewarming/small/flower-vase.webp","hw.s.globe":"img/housewarming/small/globe.webp","hw.s.jam_jar":"img/housewarming/small/jam-jar.webp","hw.s.music_box":"img/housewarming/small/music-box.webp","hw.s.photo_frame":"img/housewarming/small/photo-frame.webp","hw.s.slippers":"img/housewarming/small/slippers.webp","hw.s.teacups":"img/housewarming/small/teacups.webp","hw.s.teapot":"img/housewarming/small/teapot.webp","hw.s.telescope":"img/housewarming/small/telescope.webp","hw.s.toy_horse":"img/housewarming/small/toy-horse.webp","hw.s.watering_can":"img/housewarming/small/watering-can.webp","hw.s.yarn":"img/housewarming/small/yarn.webp","house.laboratory":"img/house/laboratory.jpg","house.bedroom":"img/house/bedroom.jpg","house.living":"img/house/living.jpg","house.library":"img/house/library.jpg","house.bathroom":"img/house/bathroom.jpg","house.kitchen":"img/house/kitchen.jpg","house.cellar":"img/house/cellar.jpg","house.wallLeft":"img/house/wall-left.png","house.wallRight":"img/house/wall-right.png","ui.fireflyJar":"img/ui/firefly-jar.png","ui.fireflyJarEmpty":"img/ui/firefly-jar-empty.png","ui.fireflyOne":"img/ui/firefly-one.png","ui.fireflyThree":"img/ui/firefly-three.png","ui.lock":"img/ui/lock-closed.webp","room.laboratory":"img/rooms/laboratory.jpg","room.bedroom":"img/rooms/bedroom.jpg","room.living":"img/rooms/living.jpg","room.cellar":"img/rooms/cellar.jpg","room.attic":"img/rooms/attic.jpg","room.library":"img/rooms/library.jpg","room.bathroom":"img/rooms/bathroom.jpg","room.kitchen":"img/rooms/kitchen.jpg","char.spider":"img/characters/spider/calm.png","char.spider.calm":"img/characters/spider/calm.png","char.spider.surprised":"img/characters/spider/surprised.png","char.spider.puzzled":"img/characters/spider/puzzled.png","char.spider.happy":"img/characters/spider/happy.png","char.spider.sad":"img/characters/spider/sad.png","char.spider.determined":"img/characters/spider/determined.png","char.spider.tender":"img/characters/spider/tender.png","char.kotletka":"img/characters/kotletka/calm.png","char.kotletka.calm":"img/characters/kotletka/calm.png","char.kotletka.happy":"img/characters/kotletka/happy.png","char.kotletka.surprised":"img/characters/kotletka/surprised.png","char.kotletka.sad":"img/characters/kotletka/sad.png","char.kotletka.round":"img/characters/kotletka/round.png","char.raccoon":"img/characters/raccoon/sly.png","char.raccoon.sly":"img/characters/raccoon/sly.png","char.raccoon.happy":"img/characters/raccoon/happy.png","char.raccoon.surprised":"img/characters/raccoon/surprised.png","char.raccoon.upset":"img/characters/raccoon/upset.png","char.witch":"img/characters/witch.svg","char.mice":"img/characters/mice/calm.png","char.mice.calm":"img/characters/mice/calm.png","char.mice.happy":"img/characters/mice/happy.png","char.mice.sad":"img/characters/mice/sad.png","char.mice.surprised":"img/characters/mice/surprised.png","char.toad":"img/characters/toad.svg","char.owl":"img/characters/owl.svg","char.frog":"img/characters/frog.svg","char.bat":"img/characters/bat/calm.png","char.bat.angry":"img/characters/bat/angry.png","char.bat.calm":"img/characters/bat/calm.png","char.bat.grumpy":"img/characters/bat/grumpy.png","char.bat.happy":"img/characters/bat/happy.png","char.bat.sad":"img/characters/bat/sad.png","char.bat.sly":"img/characters/bat/sly.png","char.bat.surprised":"img/characters/bat/surprised.png","char.bat.thinking":"img/characters/bat/thinking.png","char.bookworm":"img/characters/bookworm.svg","char.ghost":"img/characters/ghost.svg","char.mosquitoes":"img/characters/mosquitoes/calm.png","char.mosquitoes.angry":"img/characters/mosquitoes/angry.png","char.mosquitoes.calm":"img/characters/mosquitoes/calm.png","char.mosquitoes.grumpy":"img/characters/mosquitoes/grumpy.png","char.mosquitoes.happy":"img/characters/mosquitoes/happy.png","char.mosquitoes.sad":"img/characters/mosquitoes/sad.png","char.mosquitoes.sly":"img/characters/mosquitoes/sly.png","char.mosquitoes.surprised":"img/characters/mosquitoes/surprised.png","char.mosquitoes.thinking":"img/characters/mosquitoes/thinking.png","char.mosquitoCabinTall":"img/characters/mosquitoCabinTall/calm.png","char.mosquitoCabinTall.angry":"img/characters/mosquitoCabinTall/angry.png","char.mosquitoCabinTall.calm":"img/characters/mosquitoCabinTall/calm.png","char.mosquitoCabinTall.grumpy":"img/characters/mosquitoCabinTall/grumpy.png","char.mosquitoCabinTall.happy":"img/characters/mosquitoCabinTall/happy.png","char.mosquitoCabinTall.sad":"img/characters/mosquitoCabinTall/sad.png","char.mosquitoCabinTall.sly":"img/characters/mosquitoCabinTall/sly.png","char.mosquitoCabinTall.surprised":"img/characters/mosquitoCabinTall/surprised.png","char.mosquitoCabinTall.thinking":"img/characters/mosquitoCabinTall/thinking.png","char.chernika":"img/characters/chernika/tender.png","char.rat":"img/characters/rat/calm.png","char.rat.calm":"img/characters/rat/calm.png","char.rat.happy":"img/characters/rat/happy.png","char.rat.sad":"img/characters/rat/sad.png","char.rat.surprised":"img/characters/rat/surprised.png","char.opossumMom":"img/characters/opossumMom/calm.png","char.opossumMom.calm":"img/characters/opossumMom/calm.png","char.opossumMom.happy":"img/characters/opossumMom/happy.png","char.opossumMom.sad":"img/characters/opossumMom/sad.png","char.opossumMom.surprised":"img/characters/opossumMom/surprised.png","char.moth":"img/characters/moth/calm.png","char.moth.calm":"img/characters/moth/calm.png","char.moth.happy":"img/characters/moth/happy.png","char.moth.sad":"img/characters/moth/sad.png","char.moth.surprised":"img/characters/moth/surprised.png","char.roachYoung":"img/characters/roachYoung/calm.png","char.roachYoung.calm":"img/characters/roachYoung/calm.png","char.roachYoung.happy":"img/characters/roachYoung/happy.png","char.roachYoung.sly":"img/characters/roachYoung/sly.png","char.roachYoung.grumpy":"img/characters/roachYoung/grumpy.png","char.roachYoung.thinking":"img/characters/roachYoung/thinking.png","char.roachYoung.surprised":"img/characters/roachYoung/surprised.png","char.roachYoung.sad":"img/characters/roachYoung/sad.png","char.roachYoung.angry":"img/characters/roachYoung/angry.png","char.roachOld":"img/characters/roachOld/calm.png","char.roachOld.calm":"img/characters/roachOld/calm.png","char.roachOld.happy":"img/characters/roachOld/happy.png","char.roachOld.sly":"img/characters/roachOld/sly.png","char.roachOld.grumpy":"img/characters/roachOld/grumpy.png","char.roachOld.thinking":"img/characters/roachOld/thinking.png","char.roachOld.surprised":"img/characters/roachOld/surprised.png","char.roachOld.sad":"img/characters/roachOld/sad.png","char.roachOld.angry":"img/characters/roachOld/angry.png","char.roachMedium":"img/characters/roachMedium/calm.png","char.roachMedium.calm":"img/characters/roachMedium/calm.png","char.roachMedium.happy":"img/characters/roachMedium/happy.png","char.roachMedium.sly":"img/characters/roachMedium/sly.png","char.roachMedium.grumpy":"img/characters/roachMedium/grumpy.png","char.roachMedium.doubtful":"img/characters/roachMedium/doubtful.png","char.roachMedium.surprised":"img/characters/roachMedium/surprised.png","char.roachMedium.sad":"img/characters/roachMedium/sad.png","char.roachMedium.angry":"img/characters/roachMedium/angry.png","story.prologue.1":"img/story/prologue-1.svg","story.prologue.tea":"img/story/prologue-tea.jpg","story.prologue.dark":"img/story/prologue-dark.jpg","story.prologue.tail":"img/story/prologue-tail.jpg","story.prologue.cup":"img/story/prologue-cup.jpg","story.prologue.2":"img/story/prologue-2.svg","story.prologue.3":"img/story/prologue-3.svg","story.ch07.1":"img/story/ch07-1.svg","story.ch07.attic":"img/story/ch07-attic.jpg","story.ch07.ending":"img/story/ch07-ending.jpg","journal.trace_tail":"img/journal/trace-tail.png","journal.sign_ribbon":"img/journal/sign-ribbon.png","journal.trace_pie":"img/journal/trace-pie.png","journal.sign_flour":"img/journal/sign-flour.png","journal.trace_jam":"img/journal/trace-jam.png","journal.sign_crumbs":"img/journal/sign-crumbs.png","journal.trace_bath":"img/journal/trace-bath.png","journal.sign_mirror":"img/journal/sign-mirror.png","journal.trace_pillow":"img/journal/trace-pillow.png","journal.sign_brooch":"img/journal/sign-brooch.png","journal.trace_candles":"img/journal/trace-candles.png","journal.sign_note":"img/journal/sign-note.png","journal.trace_book":"img/journal/trace-book.png","journal.sign_bookmark":"img/journal/sign-bookmark.png","match3.strawberry":"img/match3/strawberry.png","match3.blueberry":"img/match3/blueberry.png","match3.cheese":"img/match3/cheese.png","match3.pickles":"img/match3/pickles.png","match3.jam":"img/match3/jam.png","match3.hazelnut":"img/match3/hazelnut.png","match3.lantern":"img/match3/lantern.png","potion.rose":"img/potion/label_rose.png","potion.mushroom":"img/potion/label_mushroom.png","potion.gem":"img/potion/label_gem.png","potion.pumpkin":"img/potion/label_pumpkin.png","potion.sunflower":"img/potion/label_sunflower.png","potion.frog":"img/potion/label_frog.png","potion.clover":"img/potion/label_clover.png","potion.snowflake":"img/potion/label_snowflake.png","potion.bat":"img/potion/label_bat.png","potion.heart":"img/potion/label_heart.png","potion.moon":"img/potion/label_moon.png","potion.spider":"img/potion/label_spider.png","hw.v.chair_stool":"img/housewarming/shop/chair-stool.webp","hw.v.clock_cuckoo":"img/housewarming/shop/clock-cuckoo.webp","hw.v.clock_wall":"img/housewarming/shop/clock-wall.webp","hw.v.teacups_daisy":"img/housewarming/shop/teacups-daisy.webp","hw.v.fern_geranium":"img/housewarming/shop/fern-geranium.webp","hw.v.blanket_basket_wicker":"img/housewarming/shop/blanket-basket-wicker.webp","hw.s.gramophone":"img/housewarming/shop/gramophone.webp","hw.s.barrel_organ":"img/housewarming/shop/barrel-organ.webp","hw.s.hand_mirror":"img/housewarming/shop/hand-mirror.webp","hw.s.library_ladder":"img/housewarming/shop/library-ladder.webp","hw.v.wall_shelf":"img/housewarming/shop/wall-shelf.svg","hw.v.chest_alt":"img/housewarming/shop/chest-alt.svg","hw.v.tablecloth":"img/housewarming/shop/tablecloth.svg","hw.s.samovar":"img/housewarming/shop/samovar.webp","hw.s.pickle_barrel":"img/housewarming/shop/pickle-barrel.webp","char.catElder.angry":"img/characters/catElder/angry.png","char.catElder.calm":"img/characters/catElder/calm.png","char.catElder.grumpy":"img/characters/catElder/grumpy.png","char.catElder.happy":"img/characters/catElder/happy.png","char.catElder.sad":"img/characters/catElder/sad.png","char.catElder.sly":"img/characters/catElder/sly.png","char.catElder.surprised":"img/characters/catElder/surprised.png","char.catElder.thinking":"img/characters/catElder/thinking.png","char.catElder":"img/characters/catElder/calm.png","char.catYoung.angry":"img/characters/catYoung/angry.png","char.catYoung.calm":"img/characters/catYoung/calm.png","char.catYoung.grumpy":"img/characters/catYoung/grumpy.png","char.catYoung.happy":"img/characters/catYoung/happy.png","char.catYoung.sad":"img/characters/catYoung/sad.png","char.catYoung.sly":"img/characters/catYoung/sly.png","char.catYoung.surprised":"img/characters/catYoung/surprised.png","char.catYoung.thinking":"img/characters/catYoung/thinking.png","char.catYoung":"img/characters/catYoung/calm.png","table.felt":"img/games/felt-green.jpg","char.cat":"img/characters/cat/calm.png","char.cat.calm":"img/characters/cat/calm.png","char.cat.happy":"img/characters/cat/happy.png","char.cat.surprised":"img/characters/cat/surprised.png","char.cat.sad":"img/characters/cat/sad.png","hw.s.window_round_stained":"img/housewarming/shop/window-round-stained.webp","hw.v.crown_cushion_dumka":"img/housewarming/shop/crown-cushion-dumka.webp","hw.v.crown_cushion_folk":"img/housewarming/shop/crown-cushion-folk.webp","hw.v.broom_new":"img/housewarming/shop/broom-new.webp","hw.v.teapot_brown":"img/housewarming/shop/teapot-brown.webp","hw.v.blanket_basket_quilt":"img/housewarming/shop/blanket-basket-quilt.webp","hw.v.rug_doormat":"img/housewarming/shop/rug-doormat.webp","hw.v.rug_runner":"img/housewarming/shop/rug-runner.webp","hw.v.jam_jar_trio":"img/housewarming/shop/jam-jar-trio.webp","hw.v.bookshelf_carved":"img/housewarming/shop/bookshelf-carved.webp","hw.v.bookshelf_glass":"img/housewarming/shop/bookshelf-glass.webp","hw.v.globe_antique":"img/housewarming/shop/globe-antique.webp","hw.v.sofa_small":"img/housewarming/shop/sofa-small.webp","hw.v.sofa_striped":"img/housewarming/shop/sofa-striped.webp","hw.v.wardrobe_carved":"img/housewarming/shop/wardrobe-carved.webp","hw.v.wardrobe_mirror":"img/housewarming/shop/wardrobe-mirror.webp","hw.v.telescope_spyglass":"img/housewarming/shop/telescope-spyglass.webp","hw.v.cupboard_painted":"img/housewarming/shop/cupboard-painted.webp","hw.v.cupboard_folk":"img/housewarming/shop/cupboard-folk.webp","piece.die_1":"img/pieces/die-1.webp","piece.die_2":"img/pieces/die-2.webp","piece.die_3":"img/pieces/die-3.webp","piece.die_4":"img/pieces/die-4.webp","piece.die_5":"img/pieces/die-5.webp","piece.die_6":"img/pieces/die-6.webp","piece.duck":"img/pieces/duck.webp","piece.mark_cross":"img/pieces/mark-cross.webp","piece.mark_drop":"img/pieces/mark-drop.webp","piece.marker_hit":"img/pieces/marker-hit.webp","piece.marker_miss":"img/pieces/marker-miss.webp","piece.moon":"img/pieces/moon.webp","piece.orb_blue":"img/pieces/orb-blue.webp","piece.orb_green":"img/pieces/orb-green.webp","piece.orb_indigo":"img/pieces/orb-indigo.webp","piece.orb_orange":"img/pieces/orb-orange.webp","piece.orb_pearl":"img/pieces/orb-pearl.webp","piece.orb_red":"img/pieces/orb-red.webp","piece.orb_yellow":"img/pieces/orb-yellow.webp","piece.piece_dark_plain":"img/pieces/piece-dark-plain.webp","piece.piece_light_plain":"img/pieces/piece-light-plain.webp","piece.quarto_dark_round_large_hole":"img/pieces/quarto-dark-round-large-hole.webp","piece.quarto_dark_round_large_solid":"img/pieces/quarto-dark-round-large-solid.webp","piece.quarto_dark_round_small_hole":"img/pieces/quarto-dark-round-small-hole.webp","piece.quarto_dark_round_small_solid":"img/pieces/quarto-dark-round-small-solid.webp","piece.quarto_dark_square_large_hole":"img/pieces/quarto-dark-square-large-hole.webp","piece.quarto_dark_square_large_solid":"img/pieces/quarto-dark-square-large-solid.webp","piece.quarto_dark_square_small_hole":"img/pieces/quarto-dark-square-small-hole.webp","piece.quarto_dark_square_small_solid":"img/pieces/quarto-dark-square-small-solid.webp","piece.quarto_light_round_large_hole":"img/pieces/quarto-light-round-large-hole.webp","piece.quarto_light_round_large_solid":"img/pieces/quarto-light-round-large-solid.webp","piece.quarto_light_round_small_hole":"img/pieces/quarto-light-round-small-hole.webp","piece.quarto_light_round_small_solid":"img/pieces/quarto-light-round-small-solid.webp","piece.quarto_light_square_large_hole":"img/pieces/quarto-light-square-large-hole.webp","piece.quarto_light_square_large_solid":"img/pieces/quarto-light-square-large-solid.webp","piece.quarto_light_square_small_hole":"img/pieces/quarto-light-square-small-hole.webp","piece.quarto_light_square_small_solid":"img/pieces/quarto-light-square-small-solid.webp","piece.queen":"img/pieces/queen.webp","piece.queen_conflict":"img/pieces/queen-conflict.webp","piece.reversi_dark":"img/pieces/reversi-dark.webp","piece.reversi_dark_face":"img/pieces/reversi-dark-face.webp","piece.reversi_light":"img/pieces/reversi-light.webp","piece.reversi_light_face":"img/pieces/reversi-light-face.webp","piece.ship_1":"img/pieces/ship-1.webp","piece.ship_2":"img/pieces/ship-2.webp","piece.ship_3":"img/pieces/ship-3.webp","piece.ship_4":"img/pieces/ship-4.webp","piece.soap":"img/pieces/soap.webp","piece.sparkle":"img/pieces/sparkle.webp","piece.star_glow":"img/pieces/star-glow.webp","piece.star_selected":"img/pieces/star-selected.webp","piece.star_silver":"img/pieces/star-silver.webp","piece.star_small":"img/pieces/star-small.webp","piece.stone_amber":"img/pieces/stone-amber.webp","piece.stone_blue":"img/pieces/stone-blue.webp","piece.stone_brown":"img/pieces/stone-brown.webp","piece.stone_cream":"img/pieces/stone-cream.webp","piece.stone_grey":"img/pieces/stone-grey.webp","piece.stone_terracotta":"img/pieces/stone-terracotta.webp","piece.sunmoon_moon":"img/pieces/sunmoon-moon.webp","piece.sunmoon_sun":"img/pieces/sunmoon-sun.webp","ui.btnPrimary":"img/ui/btn-primary.webp","ui.btnSecondary":"img/ui/btn-secondary.webp","ui.btnLight":"img/ui/btn-light.webp","ui.btnRound":"img/ui/btn-round.webp","ui.shopSign":"img/ui/shop-sign.webp","ui.lockOpen":"img/ui/lock-open.webp","ui.key":"img/ui/key.webp","table.orbBoard":"img/games/orb-board-parchment.jpg","piece.patch_clouds":"img/pieces/patch-clouds.webp","piece.patch_corduroy":"img/pieces/patch-corduroy.webp","piece.patch_dots":"img/pieces/patch-dots.webp","piece.patch_flowers":"img/pieces/patch-flowers.webp","piece.patch_gingham":"img/pieces/patch-gingham.webp","piece.patch_linen":"img/pieces/patch-linen.webp","piece.patch_stripes":"img/pieces/patch-stripes.webp","piece.patch_tweed":"img/pieces/patch-tweed.webp","piece.patch_cherries":"img/pieces/patch-cherries.webp","piece.patch_forgetmenot":"img/pieces/patch-forgetmenot.webp","piece.patch_gingham_green":"img/pieces/patch-gingham-green.webp","piece.patch_leaves":"img/pieces/patch-leaves.webp","piece.patch_quatrefoil":"img/pieces/patch-quatrefoil.webp","piece.patch_stars":"img/pieces/patch-stars.webp","piece.patch_stripes_red":"img/pieces/patch-stripes-red.webp","piece.patch_tartan":"img/pieces/patch-tartan.webp","piece.stone_jade":"img/pieces/stone-jade.webp","piece.stone_moss":"img/pieces/stone-moss.webp","piece.stone_olive":"img/pieces/stone-olive.webp","piece.stone_teal":"img/pieces/stone-teal.webp","table.woodBoard":"img/games/wood-board-light.jpg","table.woodFrame":"img/games/wood-board-frame.jpg","piece.checker_black":"img/pieces/checker-black.webp","piece.checker_white":"img/pieces/checker-white.webp","ui.lantern":"img/ui/lantern.webp","ui.lanternEmpty":"img/ui/lantern-empty.webp","ui.hint":"img/ui/hint.webp","ui.check":"img/ui/check.webp","table.woodBoardHoney":"img/games/wood-board-honey.jpg","ui.restart":"img/ui/replay.webp","char.mosquitoBosun.angry":"img/characters/mosquitoBosun/angry.png","char.mosquitoBosun.calm":"img/characters/mosquitoBosun/calm.png","char.mosquitoBosun.grumpy":"img/characters/mosquitoBosun/grumpy.png","char.mosquitoBosun.happy":"img/characters/mosquitoBosun/happy.png","char.mosquitoBosun.sad":"img/characters/mosquitoBosun/sad.png","char.mosquitoBosun.sly":"img/characters/mosquitoBosun/sly.png","char.mosquitoBosun.surprised":"img/characters/mosquitoBosun/surprised.png","char.mosquitoBosun.thinking":"img/characters/mosquitoBosun/thinking.png","char.mosquitoBosun":"img/characters/mosquitoBosun/calm.png","char.mosquitoCaptain.angry":"img/characters/mosquitoCaptain/angry.png","char.mosquitoCaptain.calm":"img/characters/mosquitoCaptain/calm.png","char.mosquitoCaptain.grumpy":"img/characters/mosquitoCaptain/grumpy.png","char.mosquitoCaptain.happy":"img/characters/mosquitoCaptain/happy.png","char.mosquitoCaptain.sad":"img/characters/mosquitoCaptain/sad.png","char.mosquitoCaptain.sly":"img/characters/mosquitoCaptain/sly.png","char.mosquitoCaptain.surprised":"img/characters/mosquitoCaptain/surprised.png","char.mosquitoCaptain.thinking":"img/characters/mosquitoCaptain/thinking.png","char.mosquitoCaptain":"img/characters/mosquitoCaptain/calm.png","char.mouseGranny.angry":"img/characters/mouseGranny/angry.png","char.mouseGranny.calm":"img/characters/mouseGranny/calm.png","char.mouseGranny.grumpy":"img/characters/mouseGranny/grumpy.png","char.mouseGranny.happy":"img/characters/mouseGranny/happy.png","char.mouseGranny.sad":"img/characters/mouseGranny/sad.png","char.mouseGranny.sly":"img/characters/mouseGranny/sly.png","char.mouseGranny.surprised":"img/characters/mouseGranny/surprised.png","char.mouseGranny.thinking":"img/characters/mouseGranny/thinking.png","char.mouseGranny":"img/characters/mouseGranny/calm.png","char.mouseKeeper.angry":"img/characters/mouseKeeper/angry.png","char.mouseKeeper.calm":"img/characters/mouseKeeper/calm.png","char.mouseKeeper.grumpy":"img/characters/mouseKeeper/grumpy.png","char.mouseKeeper.happy":"img/characters/mouseKeeper/happy.png","char.mouseKeeper.sad":"img/characters/mouseKeeper/sad.png","char.mouseKeeper.sly":"img/characters/mouseKeeper/sly.png","char.mouseKeeper.surprised":"img/characters/mouseKeeper/surprised.png","char.mouseKeeper.thinking":"img/characters/mouseKeeper/thinking.png","char.mouseKeeper":"img/characters/mouseKeeper/calm.png","char.mosquitoCabin":"img/characters/mosquitoCabin/calm.png","char.mosquitoCabin.angry":"img/characters/mosquitoCabin/angry.png","char.mosquitoCabin.calm":"img/characters/mosquitoCabin/calm.png","char.mosquitoCabin.grumpy":"img/characters/mosquitoCabin/grumpy.png","char.mosquitoCabin.happy":"img/characters/mosquitoCabin/happy.png","char.mosquitoCabin.sad":"img/characters/mosquitoCabin/sad.png","char.mosquitoCabin.sly":"img/characters/mosquitoCabin/sly.png","char.mosquitoCabin.surprised":"img/characters/mosquitoCabin/surprised.png","char.mosquitoCabin.thinking":"img/characters/mosquitoCabin/thinking.png","char.mouse":"img/characters/mice/calm.png","char.mouse.calm":"img/characters/mice/calm.png","char.mouse.happy":"img/characters/mice/happy.png","char.mouse.sad":"img/characters/mice/sad.png","char.mouse.surprised":"img/characters/mice/surprised.png","table.woodKalah":"img/games/wood-kalah.jpg","char.chernika.proud":"img/characters/chernika/proud.png","char.chernika.sleepy":"img/characters/chernika/sleepy.png","char.chernika.tender":"img/characters/chernika/tender.png","char.chernika.thinking":"img/characters/chernika/thinking.png","piece.bake_01":"img/pieces/bake-01.webp","piece.bake_02":"img/pieces/bake-02.webp","piece.bake_03":"img/pieces/bake-03.webp","piece.bake_04":"img/pieces/bake-04.webp","piece.bake_05":"img/pieces/bake-05.webp","piece.bake_06":"img/pieces/bake-06.webp","piece.bake_07":"img/pieces/bake-07.webp","piece.bake_08":"img/pieces/bake-08.webp","piece.bake_09":"img/pieces/bake-09.webp","piece.bake_10":"img/pieces/bake-10.webp","piece.bake_11":"img/pieces/bake-11.webp","piece.bake_12":"img/pieces/bake-12.webp","piece.seal_bat":"img/pieces/seal-bat.webp","piece.seal_hat":"img/pieces/seal-hat.webp","piece.dice_cup":"img/pieces/dice-cup.webp","piece.score_sheet":"img/pieces/score-sheet.webp","hw.f.armchair.daisy":"img/housewarming/furniture/armchair-daisy.webp","hw.f.bed.daisy":"img/housewarming/furniture/bed-daisy.webp","hw.f.bedside.daisy":"img/housewarming/furniture/bedside-daisy.webp","hw.f.bookshelf.daisy":"img/housewarming/furniture/bookshelf-daisy.webp","hw.f.chair.daisy":"img/housewarming/furniture/chair-daisy.webp","hw.f.chest.daisy":"img/housewarming/furniture/chest-daisy.webp","hw.f.clock.daisy":"img/housewarming/furniture/clock-daisy.webp","hw.f.cupboard.daisy":"img/housewarming/furniture/cupboard-daisy.webp","hw.f.dresser.daisy":"img/housewarming/furniture/dresser-daisy.webp","hw.f.hat_peg.daisy":"img/housewarming/furniture/hat-peg-daisy.webp","hw.f.hat_peg.rustic":"img/housewarming/furniture/hat-peg-rustic.webp","hw.f.hat_peg.scrap":"img/housewarming/furniture/hat-peg-scrap.webp","hw.f.lamp.daisy":"img/housewarming/furniture/lamp-daisy.webp","hw.f.night_lamp.daisy":"img/housewarming/furniture/night-lamp-daisy.webp","hw.f.night_lamp.rustic":"img/housewarming/furniture/night-lamp-rustic.webp","hw.f.night_lamp.scrap":"img/housewarming/furniture/night-lamp-scrap.webp","hw.f.pouf.daisy":"img/housewarming/furniture/pouf-daisy.webp","hw.f.pouf.rustic":"img/housewarming/furniture/pouf-rustic.webp","hw.f.pouf.scrap":"img/housewarming/furniture/pouf-scrap.webp","hw.f.pouf.royal":"img/housewarming/furniture/pouf-royal.webp","hw.f.rug.daisy":"img/housewarming/furniture/rug-daisy.webp","hw.f.shelf.daisy":"img/housewarming/furniture/shelf-daisy.webp","hw.f.sofa.daisy":"img/housewarming/furniture/sofa-daisy.webp","hw.f.stove.daisy":"img/housewarming/furniture/stove-daisy.webp","hw.f.table.daisy":"img/housewarming/furniture/table-daisy.webp","hw.f.tea_table.daisy":"img/housewarming/furniture/tea-table-daisy.webp","hw.f.wardrobe.daisy":"img/housewarming/furniture/wardrobe-daisy.webp","hw.s.picture_apples":"img/housewarming/shop/picture-apples.webp","hw.s.picture_boat":"img/housewarming/shop/picture-boat.webp","hw.s.picture_cat_window":"img/housewarming/shop/picture-cat-window.webp","hw.s.picture_daisies":"img/housewarming/shop/picture-daisies.webp","hw.s.picture_lighthouse":"img/housewarming/shop/picture-lighthouse.webp","hw.s.picture_tower":"img/housewarming/shop/picture-tower.webp","hw.f.rocking_chair.rustic":"img/housewarming/furniture/rocking-chair-rustic.webp","hw.f.rocking_chair.scrap":"img/housewarming/furniture/rocking-chair-scrap.webp","hw.s.rug_round_daisy":"img/housewarming/shop/rug-round-daisy.webp","hw.v.rug_striped_scrap":"img/housewarming/shop/rug-striped-scrap.webp","hw.s.shelf_kitchen_ornate":"img/housewarming/shop/shelf-kitchen-ornate.webp","hw.s.shelf_kitchen_sage":"img/housewarming/shop/shelf-kitchen-sage.webp","hw.s.wardrobe_sage":"img/housewarming/shop/wardrobe-sage.webp","hw.s.picture_cat":"img/housewarming/shop/picture-cat.webp","hw.wall.daisies":"img/housewarming/wall-daisies.jpg","hw.wall.ivy":"img/housewarming/wall-ivy.jpg","hw.wall.roses":"img/housewarming/wall-roses.jpg","hw.wall.swallows":"img/housewarming/wall-swallows.jpg","hw.f.fireplace.rustic":"img/housewarming/furniture/fireplace-rustic.webp","hw.f.fireplace.royal":"img/housewarming/furniture/fireplace-royal.webp","hw.f.fireplace.daisy":"img/housewarming/furniture/fireplace-daisy.webp","hw.f.fireplace.scrap":"img/housewarming/furniture/fireplace-scrap.webp","hw.f.rocking_chair.royal":"img/housewarming/furniture/rocking-chair-royal.webp","hw.f.rocking_chair.daisy":"img/housewarming/furniture/rocking-chair-daisy.webp","hw.f.washstand.rustic":"img/housewarming/furniture/washstand-rustic.webp","hw.f.washstand.royal":"img/housewarming/furniture/washstand-royal.webp","hw.f.washstand.daisy":"img/housewarming/furniture/washstand-daisy.webp","hw.f.washstand.scrap":"img/housewarming/furniture/washstand-scrap.webp","hw.f.wine_cabinet.rustic":"img/housewarming/furniture/wine-cabinet-rustic.webp","hw.f.wine_cabinet.royal":"img/housewarming/furniture/wine-cabinet-royal.webp","hw.f.wine_cabinet.daisy":"img/housewarming/furniture/wine-cabinet-daisy.webp","hw.f.wine_cabinet.scrap":"img/housewarming/furniture/wine-cabinet-scrap.webp","hw.v.armchair_patch":"img/housewarming/shop/armchair-patch.webp","hw.v.sofa_patch":"img/housewarming/shop/sofa-patch.webp","hw.v.chair_patch":"img/housewarming/shop/chair-patch.webp","hw.v.pouf_patch":"img/housewarming/shop/pouf-patch.webp","hw.s.rug_oval":"img/housewarming/shop/rug-oval.webp","hw.s.rug_striped":"img/housewarming/shop/rug-striped.webp","hw.s.lampshade":"img/housewarming/shop/lampshade.webp","hw.s.lamp_chandelier":"img/housewarming/shop/lamp-chandelier.webp","hw.s.quilt_stars":"img/housewarming/shop/quilt-stars.webp","hw.s.candle_lantern":"img/housewarming/shop/candle-lantern.webp","hw.s.lamp_patch":"img/housewarming/shop/lamp-patch.webp","hw.s.lamp_sage":"img/housewarming/shop/lamp-sage.webp","hw.s.rug_rect_daisy":"img/housewarming/shop/rug-rect-daisy.webp","hw.s.rug_rect_patch":"img/housewarming/shop/rug-rect-patch.webp","hw.s.rug_round_patch":"img/housewarming/shop/rug-round-patch.webp","winter.char.spider":"img/winter/characters/spider/calm.webp","winter.char.spider.calm":"img/winter/characters/spider/calm.webp","winter.char.spider.surprised":"img/winter/characters/spider/surprised.webp","winter.char.spider.puzzled":"img/winter/characters/spider/puzzled.webp","winter.char.spider.happy":"img/winter/characters/spider/happy.webp","winter.char.spider.sad":"img/winter/characters/spider/sad.webp","winter.char.spider.determined":"img/winter/characters/spider/determined.webp","winter.char.spider.tender":"img/winter/characters/spider/tender.webp","winter.char.kotletka":"img/winter/characters/kotletka/calm.webp","winter.char.kotletka.calm":"img/winter/characters/kotletka/calm.webp","winter.char.kotletka.happy":"img/winter/characters/kotletka/happy.webp","winter.char.kotletka.surprised":"img/winter/characters/kotletka/surprised.webp","winter.char.kotletka.sad":"img/winter/characters/kotletka/sad.webp","winter.char.kotletka.round":"img/winter/characters/kotletka/round.webp","winter.char.raccoon":"img/winter/characters/raccoon/sly.webp","winter.char.raccoon.sly":"img/winter/characters/raccoon/sly.webp","winter.char.raccoon.happy":"img/winter/characters/raccoon/happy.webp","winter.char.raccoon.surprised":"img/winter/characters/raccoon/surprised.webp","winter.char.raccoon.upset":"img/winter/characters/raccoon/upset.webp","winter.char.mice":"img/winter/characters/mice/calm.webp","winter.char.mice.calm":"img/winter/characters/mice/calm.webp","winter.char.mice.happy":"img/winter/characters/mice/happy.webp","winter.char.mice.sad":"img/winter/characters/mice/sad.webp","winter.char.mice.surprised":"img/winter/characters/mice/surprised.webp","winter.char.bat":"img/winter/characters/bat/calm.webp","winter.char.bat.angry":"img/winter/characters/bat/angry.webp","winter.char.bat.calm":"img/winter/characters/bat/calm.webp","winter.char.bat.grumpy":"img/winter/characters/bat/grumpy.webp","winter.char.bat.happy":"img/winter/characters/bat/happy.webp","winter.char.bat.sad":"img/winter/characters/bat/sad.webp","winter.char.bat.sly":"img/winter/characters/bat/sly.webp","winter.char.bat.surprised":"img/winter/characters/bat/surprised.webp","winter.char.bat.thinking":"img/winter/characters/bat/thinking.webp","winter.char.mosquitoes":"img/winter/characters/mosquitoes/calm.webp","winter.char.mosquitoes.calm":"img/winter/characters/mosquitoes/calm.webp","winter.char.mosquitoes.happy":"img/winter/characters/mosquitoes/happy.webp","winter.char.mosquitoes.sad":"img/winter/characters/mosquitoes/sad.webp","winter.char.mosquitoes.surprised":"img/winter/characters/mosquitoes/surprised.webp","winter.char.mosquitoCabinTall":"img/winter/characters/mosquitoCabinTall/calm.webp","winter.char.mosquitoCabinTall.calm":"img/winter/characters/mosquitoCabinTall/calm.webp","winter.char.mosquitoCabinTall.happy":"img/winter/characters/mosquitoCabinTall/happy.webp","winter.char.mosquitoCabinTall.sad":"img/winter/characters/mosquitoCabinTall/sad.webp","winter.char.mosquitoCabinTall.surprised":"img/winter/characters/mosquitoCabinTall/surprised.webp","winter.char.chernika":"img/winter/characters/chernika/tender.webp","winter.char.rat":"img/winter/characters/rat/calm.webp","winter.char.rat.calm":"img/winter/characters/rat/calm.webp","winter.char.rat.happy":"img/winter/characters/rat/happy.webp","winter.char.rat.sad":"img/winter/characters/rat/sad.webp","winter.char.rat.surprised":"img/winter/characters/rat/surprised.webp","winter.char.opossumMom":"img/winter/characters/opossumMom/calm.webp","winter.char.opossumMom.calm":"img/winter/characters/opossumMom/calm.webp","winter.char.opossumMom.happy":"img/winter/characters/opossumMom/happy.webp","winter.char.opossumMom.sad":"img/winter/characters/opossumMom/sad.webp","winter.char.opossumMom.surprised":"img/winter/characters/opossumMom/surprised.webp","winter.char.moth":"img/winter/characters/moth/calm.webp","winter.char.moth.calm":"img/winter/characters/moth/calm.webp","winter.char.moth.happy":"img/winter/characters/moth/happy.webp","winter.char.moth.sad":"img/winter/characters/moth/sad.webp","winter.char.moth.surprised":"img/winter/characters/moth/surprised.webp","winter.char.roachYoung":"img/winter/characters/roachYoung/calm.webp","winter.char.roachYoung.calm":"img/winter/characters/roachYoung/calm.webp","winter.char.roachYoung.happy":"img/winter/characters/roachYoung/happy.webp","winter.char.roachYoung.sly":"img/winter/characters/roachYoung/sly.webp","winter.char.roachYoung.grumpy":"img/winter/characters/roachYoung/grumpy.webp","winter.char.roachYoung.thinking":"img/winter/characters/roachYoung/thinking.webp","winter.char.roachYoung.surprised":"img/winter/characters/roachYoung/surprised.webp","winter.char.roachYoung.sad":"img/winter/characters/roachYoung/sad.webp","winter.char.roachYoung.angry":"img/winter/characters/roachYoung/angry.webp","winter.char.roachOld":"img/winter/characters/roachOld/calm.webp","winter.char.roachOld.calm":"img/winter/characters/roachOld/calm.webp","winter.char.roachOld.happy":"img/winter/characters/roachOld/happy.webp","winter.char.roachOld.sly":"img/winter/characters/roachOld/sly.webp","winter.char.roachOld.grumpy":"img/winter/characters/roachOld/grumpy.webp","winter.char.roachOld.thinking":"img/winter/characters/roachOld/thinking.webp","winter.char.roachOld.surprised":"img/winter/characters/roachOld/surprised.webp","winter.char.roachOld.sad":"img/winter/characters/roachOld/sad.webp","winter.char.roachOld.angry":"img/winter/characters/roachOld/angry.webp","winter.char.roachMedium":"img/winter/characters/roachMedium/calm.webp","winter.char.roachMedium.calm":"img/winter/characters/roachMedium/calm.webp","winter.char.roachMedium.happy":"img/winter/characters/roachMedium/happy.webp","winter.char.roachMedium.sly":"img/winter/characters/roachMedium/sly.webp","winter.char.roachMedium.grumpy":"img/winter/characters/roachMedium/grumpy.webp","winter.char.roachMedium.doubtful":"img/winter/characters/roachMedium/doubtful.webp","winter.char.roachMedium.surprised":"img/winter/characters/roachMedium/surprised.webp","winter.char.roachMedium.sad":"img/winter/characters/roachMedium/sad.webp","winter.char.roachMedium.angry":"img/winter/characters/roachMedium/angry.webp","winter.char.catElder.calm":"img/winter/characters/catElder/calm.webp","winter.char.catElder.happy":"img/winter/characters/catElder/happy.webp","winter.char.catElder.sad":"img/winter/characters/catElder/sad.webp","winter.char.catElder.surprised":"img/winter/characters/catElder/surprised.webp","winter.char.catElder":"img/winter/characters/catElder/calm.webp","winter.char.catYoung.calm":"img/winter/characters/catYoung/calm.webp","winter.char.catYoung.happy":"img/winter/characters/catYoung/happy.webp","winter.char.catYoung.sad":"img/winter/characters/catYoung/sad.webp","winter.char.catYoung.surprised":"img/winter/characters/catYoung/surprised.webp","winter.char.catYoung":"img/winter/characters/catYoung/calm.webp","winter.char.cat":"img/winter/characters/cat/calm.webp","winter.char.cat.calm":"img/winter/characters/cat/calm.webp","winter.char.cat.happy":"img/winter/characters/cat/happy.webp","winter.char.cat.surprised":"img/winter/characters/cat/surprised.webp","winter.char.cat.sad":"img/winter/characters/cat/sad.webp","winter.char.mosquitoBosun.calm":"img/winter/characters/mosquitoBosun/calm.webp","winter.char.mosquitoBosun.happy":"img/winter/characters/mosquitoBosun/happy.webp","winter.char.mosquitoBosun.sad":"img/winter/characters/mosquitoBosun/sad.webp","winter.char.mosquitoBosun.surprised":"img/winter/characters/mosquitoBosun/surprised.webp","winter.char.mosquitoBosun":"img/winter/characters/mosquitoBosun/calm.webp","winter.char.mosquitoCaptain.calm":"img/winter/characters/mosquitoCaptain/calm.webp","winter.char.mosquitoCaptain.happy":"img/winter/characters/mosquitoCaptain/happy.webp","winter.char.mosquitoCaptain.sad":"img/winter/characters/mosquitoCaptain/sad.webp","winter.char.mosquitoCaptain.surprised":"img/winter/characters/mosquitoCaptain/surprised.webp","winter.char.mosquitoCaptain":"img/winter/characters/mosquitoCaptain/calm.webp","winter.char.mouseGranny.calm":"img/winter/characters/mouseGranny/calm.webp","winter.char.mouseGranny.happy":"img/winter/characters/mouseGranny/happy.webp","winter.char.mouseGranny.sad":"img/winter/characters/mouseGranny/sad.webp","winter.char.mouseGranny.surprised":"img/winter/characters/mouseGranny/surprised.webp","winter.char.mouseGranny":"img/winter/characters/mouseGranny/calm.webp","winter.char.mouseKeeper.calm":"img/winter/characters/mouseKeeper/calm.webp","winter.char.mouseKeeper.happy":"img/winter/characters/mouseKeeper/happy.webp","winter.char.mouseKeeper.sad":"img/winter/characters/mouseKeeper/sad.webp","winter.char.mouseKeeper.surprised":"img/winter/characters/mouseKeeper/surprised.webp","winter.char.mouseKeeper":"img/winter/characters/mouseKeeper/calm.webp","winter.char.mosquitoCabin":"img/winter/characters/mosquitoCabin/calm.webp","winter.char.mosquitoCabin.calm":"img/winter/characters/mosquitoCabin/calm.webp","winter.char.mosquitoCabin.happy":"img/winter/characters/mosquitoCabin/happy.webp","winter.char.mosquitoCabin.sad":"img/winter/characters/mosquitoCabin/sad.webp","winter.char.mosquitoCabin.surprised":"img/winter/characters/mosquitoCabin/surprised.webp","winter.char.mouse":"img/winter/characters/mice/calm.webp","winter.char.mouse.calm":"img/winter/characters/mice/calm.webp","winter.char.mouse.happy":"img/winter/characters/mice/happy.webp","winter.char.mouse.sad":"img/winter/characters/mice/sad.webp","winter.char.mouse.surprised":"img/winter/characters/mice/surprised.webp","winter.char.chernika.proud":"img/winter/characters/chernika/proud.webp","winter.char.chernika.sleepy":"img/winter/characters/chernika/sleepy.webp","winter.char.chernika.tender":"img/winter/characters/chernika/tender.webp","winter.char.chernika.thinking":"img/winter/characters/chernika/thinking.webp","winter.house.living":"img/winter/house/living.jpg","winter.house.kitchen":"img/winter/house/kitchen.jpg","winter.house.bedroom":"img/winter/house/bedroom.jpg","winter.house.bathroom":"img/winter/house/bathroom.jpg","winter.house.laboratory":"img/winter/house/laboratory.jpg","winter.house.library":"img/winter/house/library.jpg","winter.house.cellar":"img/winter/house/cellar.jpg","winter.house.atticTower":"img/winter/house/attic-tower.webp","winter.start.background":"img/winter/start.jpg","winter.ui.questMark":"img/winter/ui/quest-mark.svg","hw.f.armchair.winter":"img/housewarming/furniture/armchair-winter.webp","hw.f.bed.winter":"img/housewarming/furniture/bed-winter.webp","hw.f.bedside.winter":"img/housewarming/furniture/bedside-winter.webp","hw.f.bookshelf.winter":"img/housewarming/furniture/bookshelf-winter.webp","hw.f.chair.winter":"img/housewarming/furniture/chair-winter.webp","hw.f.chest.winter":"img/housewarming/furniture/chest-winter.webp","hw.f.clock.winter":"img/housewarming/furniture/clock-winter.webp","hw.f.cupboard.winter":"img/housewarming/furniture/cupboard-winter.webp","hw.f.dresser.winter":"img/housewarming/furniture/dresser-winter.webp","hw.f.fireplace.winter":"img/housewarming/furniture/fireplace-winter.webp","hw.f.hat_peg.winter":"img/housewarming/furniture/hat-peg-winter.webp","hw.f.lamp.winter":"img/housewarming/furniture/lamp-winter.webp","hw.f.night_lamp.winter":"img/housewarming/furniture/night-lamp-winter.webp","hw.f.pouf.winter":"img/housewarming/furniture/pouf-winter.webp","hw.f.rocking_chair.winter":"img/housewarming/furniture/rocking-chair-winter.webp","hw.f.rug.winter":"img/housewarming/furniture/rug-winter.webp","hw.f.shelf.winter":"img/housewarming/furniture/shelf-winter.webp","hw.f.sofa.winter":"img/housewarming/furniture/sofa-winter.webp","hw.f.stove.winter":"img/housewarming/furniture/stove-winter.webp","hw.f.table.winter":"img/housewarming/furniture/table-winter.webp","hw.f.tea_table.winter":"img/housewarming/furniture/tea-table-winter.webp","hw.f.wardrobe.winter":"img/housewarming/furniture/wardrobe-winter.webp","hw.f.washstand.winter":"img/housewarming/furniture/washstand-winter.webp","hw.f.wine_cabinet.winter":"img/housewarming/furniture/wine-cabinet-winter.webp","hw.s.food_apples":"img/housewarming/small/food-apples.webp","hw.s.food_crescents":"img/housewarming/small/food-crescents.webp","hw.s.food_fruitcake":"img/housewarming/small/food-fruitcake.webp","hw.s.food_gingerbread_house":"img/housewarming/small/food-gingerbread-house.webp","hw.s.food_gingerbread_men":"img/housewarming/small/food-gingerbread-men.webp","hw.s.food_ham":"img/housewarming/small/food-ham.webp","hw.s.food_log":"img/housewarming/small/food-log.webp","hw.s.food_mugs":"img/housewarming/small/food-mugs.webp","hw.s.food_punch":"img/housewarming/small/food-punch.webp","hw.s.food_star_cookies":"img/housewarming/small/food-star-cookies.webp","hw.s.food_tangerines":"img/housewarming/small/food-tangerines.webp","hw.s.food_turkey":"img/housewarming/small/food-turkey.webp","winter.hw.tree.bare":"img/winter/hw/tree-bare.webp","winter.hw.tree.decorated":"img/winter/hw/tree-decorated.webp","winter.hw.tree.gifts":"img/winter/hw/tree-gifts.webp","hw.s.wreath_bells":"img/housewarming/small/wreath-bells.webp","hw.s.wreath_bow":"img/housewarming/small/wreath-bow.webp","hw.s.wreath_orange":"img/housewarming/small/wreath-orange.webp","hw.s.wreath_snow":"img/housewarming/small/wreath-snow.webp"}`),sounds:{"music.home":`audio/music-main.mp3`,"music.room":`audio/music-main.mp3`,"music.story":`audio/music-main.mp3`,"sfx.tap":`audio/sfx-tap.mp3`,"sfx.hint":`audio/sfx-hint.mp3`,"sfx.move":`audio/sfx-move.mp3`,"sfx.error":`audio/sfx-error.mp3`,"sfx.win":`audio/sfx-win.mp3`,"sfx.loss":`audio/sfx-loss.mp3`,"sfx.firefly":`audio/sfx-firefly.mp3`,"sfx.firefly2":`audio/sfx-firefly-2.mp3`,"sfx.door2":`audio/sfx-door-2.mp3`,"sfx.creak":`audio/sfx-creak.mp3`,"sfx.pencil":`audio/sfx-pencil.mp3`,"sfx.quill":`audio/sfx-quill.mp3`,"sfx.page":`audio/sfx-page.mp3`,"sfx.wood":`audio/sfx-wood.mp3`,"sfx.pebble1":`audio/sfx-pebble-1.mp3`,"sfx.pebble2":`audio/sfx-pebble-2.mp3`,"sfx.dice":`audio/sfx-dice.mp3`,"sfx.pour":`audio/sfx-pour.mp3`,"sfx.splash":`audio/sfx-splash.mp3`,"sfx.drop":`audio/sfx-drop.mp3`,"sfx.drop2":`audio/sfx-drop-2.mp3`,"sfx.firework":`audio/sfx-firework.mp3`,"sfx.firework_soft":`audio/sfx-firework-soft.mp3`,"room.kitchen":`audio/room-kitchen.mp3`,"room.lab":`audio/room-lab.mp3`,"room.library":`audio/room-library.mp3`,"room.bedroom":`audio/room-bedroom.mp3`,"room.princess":`audio/room-princess.mp3`,"cat.purr":`audio/cat-purr.mp3`,"cat.meow1":`audio/cat-meow-1.mp3`,"cat.meow2":`audio/cat-meow-2.mp3`,"cat.meow3":`audio/cat-meow-3.mp3`,"voice.hmm_m1":`audio/voice-hmm-m1.mp3`,"voice.hmm_m2":`audio/voice-hmm-m2.mp3`,"voice.hmm_f1":`audio/voice-hmm-f1.mp3`,"voice.hmm_f2":`audio/voice-hmm-f2.mp3`,"voice.hmm_f3":`audio/voice-hmm-f3.mp3`}},y=Ee.images,De=Ee.sounds,Oe=`/pautinka/assets/`;function b(e){return e in y}function ke(e){return e in De}var Ae=null;function je(e){Ae=e}function Me(e){let t=Ae?.(e);return Oe+y[t&&t in y?t:e]}function Ne(e){return Oe+De[e]}function Pe(e){return Object.keys(y).filter(t=>t.startsWith(e))}function Fe(e){return b(e)&&!y[e].endsWith(`.svg`)}function Ie(e){return!b(e)||e.startsWith(`char.`)&&y[e]?.endsWith(`.svg`)===!0}function Le(e,t){return b(e)?Me(e):Me(t)}var Re=[`front`,`back`],x={attic:{title:{ru:`Чердак`,en:`Attic`},sides:Re,gameIds:[`constellation`,`starpath`],plannedGame:`finale`,residents:[`raccoon`,`ghost`],residentAt:{x:30,y:62},cutletAt:{x:72,y:62}},cellar:{title:{ru:`Погреб`,en:`Cellar`},sides:Re,gameIds:[`lines`,`match3`],plannedGame:`lines`,residents:[`mice`],residentAt:{x:50,y:62},guideAt:{x:82,y:40},roomSound:[{sound:`sfx.drop`},{sound:`sfx.drop2`,at:400}]},laboratory:{title:{ru:`Лаборатория`,en:`Laboratory`},sides:[`front`],gameIds:[`quarto`,`dicepoker`],plannedGame:`quarto`,residents:[`rat`],residentAt:{x:40,y:68},roachAt:{x:87,y:62},guideAt:{x:85,y:36},roomSound:[{sound:`sfx.pebble1`},{sound:`room.lab`}]},bedroom:{title:{ru:`Спальня`,en:`Bedroom`},sides:[`front`],gameIds:[`sunmoon`],plannedGame:`sunmoon`,residents:[`chernika`,`owl`],residentAt:{x:42,y:80},roachAt:{x:86,y:56},guideAt:{x:84,y:30},roomSound:[{sound:`room.bedroom`}]},living:{title:{ru:`Гостиная`,en:`Living room`},sides:[`front`],gameIds:[`kalah`,`reversi`],plannedGame:`kalah`,residents:[`cat`],residentAt:{x:36,y:64},roachAt:{x:85,y:62},guideAt:{x:83,y:36},roomSound:[{sound:[`cat.meow1`,`cat.meow3`]}]},library:{title:{ru:`Библиотека`,en:`Library`},sides:[`back`],gameIds:[`sudoku`,`gomoku`],plannedGame:`sudoku`,residents:[`bat`,`bookworm`],residentAt:{x:56,y:78},roachAt:{x:22,y:62},guideAt:{x:24,y:36},roomSound:[{sound:`room.library`},{sound:`sfx.page`}]},bathroom:{title:{ru:`Ванная`,en:`Bathroom`},sides:[`back`],gameIds:[`battleship`,`queens`],plannedGame:`battleship`,residents:[`mosquitoes`],residentAt:{x:58,y:78},roachAt:{x:22,y:62},guideAt:{x:24,y:36},roomSound:[{sound:`sfx.splash`},{sound:`sfx.drop`}]},kitchen:{title:{ru:`Кухня`,en:`Kitchen`},sides:[`back`],gameIds:[`water-sort`,`bakery`],plannedGame:`water-sort`,residents:[`opossumMom`],residentAt:{x:64,y:72},roachAt:{x:20,y:60},guideAt:{x:22,y:34},roomSound:[{sound:`room.kitchen`}]}},ze=[`backgammon`,`domino`],Be={roomId:`bedroom`,zone:{x1:36,x2:49,y1:32,y2:71},gameId:`patches`},Ve=Object.keys(x),He=[];function Ue(e){return x[e]}function We(e,t){return Ue(e).sides.includes(t)}var Ge={front:[`attic`,`laboratory`,`bedroom`,`living`,`cellar`],back:[`attic`,`library`,`bathroom`,`kitchen`,`cellar`]},Ke={attic:[1080,560],laboratory:[1080,602],bedroom:[1080,594],living:[1080,596],library:[1080,568],bathroom:[1080,588],kitchen:[1080,573],cellar:[1080,828]},qe={attic:{x:50,y:50},laboratory:{x:55,y:30},bedroom:{x:50,y:25},living:{x:49,y:23},library:{x:61,y:28},bathroom:{x:62,y:26},kitchen:{x:63,y:27},cellar:{x:50,y:33}},Je={image:`house.atticTower`,size:[1080,657],lamp:{x:50,y:56},residentAt:{x:30,y:65},cutletAt:{x:84,y:66}};function Ye(e,t=!1){return t&&e===`attic`?Je.size:Ke[e]}function Xe(e,t,n=!1){let[r,i]=Ye(e,n),a=t*r,o=n&&e===`attic`?Je.lamp:qe[e];return{x:o.x,y:(o.y/100*i-(i-a)/2)/a*100}}function Ze(e,t=!1){let n=e=>Ye(e,t)[1]/Ye(e,t)[0];return Math.min(n(Ge.front[e]),n(Ge.back[e]))}var Qe=[`rustic`,`royal`,`daisy`,`scrap`],S=`winter`,$e=1.08,et=.23,tt=[`wall`,`ceiling`,`back`,`rug`,`front`,`floorSmall`],nt=e=>`window:${e}`,C=e=>e.startsWith(`window:`),rt=[`window_round_stained`],it=[1,0,2].map(nt),at=0,ot=1,st=2,ct={living:[at,ot],dining:[ot],bedroom:[st],all:[at,ot,st]},lt=-2,w=e=>typeof e==`object`&&!!e&&!Array.isArray(e),T=e=>typeof e==`number`&&Number.isFinite(e)?e:null,ut=e=>w(e)?Object.fromEntries(Object.entries(e).filter(e=>T(e[1])!==null)):{},dt=e=>Object.fromEntries(Object.entries(ut(e)).filter(([e])=>Qe.includes(e))),ft=tt,pt=e=>Array.isArray(e)?e.filter(e=>Qe.includes(e)):[],mt=e=>w(e)?Object.fromEntries(Object.entries(e).flatMap(([e,t])=>{let n=w(t)?T(t.x):null,r=w(t)?T(t.y):null;return n!==null&&r!==null?[[e,{x:n,y:r}]]:[]})):{};function ht(e){let t=[],n=[],r=w(e)&&Array.isArray(e.places)?e.places:[];r.length===0&&t.push(`расстановка: нет мест`);for(let e of r){if(!w(e)||typeof e.key!=`string`){t.push(`расстановка: место без key`);continue}let r=`место ${e.key}`,i=T(e.x),a=T(e.y),o=T(e.size);(i===null||a===null||o===null)&&t.push(`${r}: нет x, y или size`);let s=Array.isArray(e.items)?e.items.filter(e=>typeof e==`string`):[],c={key:e.key,items:s,shared:e.shared===!0,size:o??.1,itemSize:ut(e.itemSize),itemPos:mt(e.itemPos),z:T(e.z)??0,untilOwned:typeof e.untilOwned==`string`?e.untilOwned:null};if(e.kind===`surface`)typeof e.on!=`string`&&t.push(`${r}: нет on`),n.push({...c,kind:`surface`,on:String(e.on),x:i??50,y:a??0,dy:dt(e.dy),at:mt(e.at),hideOn:pt(e.hideOn),variantOnlyOn:w(e.variantOnlyOn)?Object.fromEntries(Object.entries(e.variantOnlyOn).map(([e,t])=>[e,pt(t)])):{}});else if(e.kind===`room`){let o=T(e.zone);(o===null||!Number.isInteger(o)||o<0||o>=de.length)&&t.push(`${r}: зона ${String(e.zone)}`),ft.includes(String(e.row))||t.push(`${r}: ряд ${String(e.row)}`);let s=ft.includes(String(e.row))?e.row:`back`;n.push({...c,kind:`room`,zone:o??0,layer:s,x:i??.5,y:a??0,byWidth:s!==`rug`&&typeof e.sizeIs==`string`&&e.sizeIs.startsWith(`ширина`),flip:e.flip===!0,maxWidth:T(e.maxWidth),maxWidthByStyle:dt(e.maxWidthByStyle),stretchByStyle:Object.fromEntries(Object.entries(dt(e.stretchByStyle)).filter(([,e])=>e>0)),anchor:typeof e.anchor==`string`?e.anchor:null})}else t.push(`${r}: kind ${String(e.kind)}`)}let i=n.map(e=>e.key);for(let e of new Set(i))i.indexOf(e)!==i.lastIndexOf(e)&&t.push(`место ${e}: ключ повторяется`);for(let e of n){if(e.kind!==`room`||e.anchor===null)continue;let r=n.find(t=>t.key===e.anchor);r&&r.kind===`room`&&r.zone===e.zone&&r.anchor===null&&r.key!==e.key||t.push(`место ${e.key}: привязка к ${e.anchor} – нужно место в той же зоне, само без привязки`)}return{places:n,errors:t}}var gt=xe,_t=ht(xe),E=_t.places,D=(e,t)=>({ru:e,en:t}),vt={bed:{en:`Bed`,need:D(`Сначала нужна кровать`,`Needs the bed first`)},table:{en:`Dining table`,need:D(`Сначала нужен обеденный стол`,`Needs the dining table first`)},tea_table:{en:`Tea table`,need:D(`Сначала нужен чайный столик`,`Needs the tea table first`)},chair:{en:`Chair`},chair2:{en:`Second chair`},lamp_living:{en:`Living room lamp`},stove:{en:`Stove`},rug_living:{en:`Living room rug`},armchair:{en:`Armchair`},bedside:{en:`Bedside table`,need:D(`Сначала нужна тумбочка`,`Needs the bedside table first`)},bedside2:{en:`Second bedside table`,need:D(`Сначала нужна вторая тумбочка`,`Needs the second bedside table first`)},wardrobe:{en:`Wardrobe`},cupboard:{en:`Cupboard`,need:D(`Сначала нужен буфет`,`Needs the cupboard first`)},sofa:{en:`Sofa`,need:D(`Сначала нужен диван`,`Needs the sofa first`)},rug_bedroom:{en:`Bedside rug`},lamp_bedroom:{en:`Bedroom lamp`},bookshelf:{en:`Bookcase`,need:D(`Сначала нужен книжный шкаф`,`Needs the bookcase first`)},clock:{en:`Wall clock`},dresser:{en:`Dressing table`,need:D(`Сначала нужен столик с зеркалом`,`Needs the dressing table first`)},shelf:{en:`Shelf`},chest:{en:`Chest`},picture_cat_window:{en:`Bedroom picture`},shelf_bedroom:{en:`Bedroom shelf`},night_lamp:{en:`Night lamp`,glow:{x:50,y:25}},teapot:{en:`Teapot`},teacups:{en:`Teacups`},cake:{en:`Cake`},flower_vase:{en:`Flowers`},jam_jar:{en:`Jam`},apples:{en:`Apples`},globe:{en:`Globe`},books:{en:`Books`},alarm_clock:{en:`Alarm clock`},candle:{en:`Candle`,glow:{x:50,y:6}},photo_frame:{en:`Portrait frame`},music_box:{en:`Music box`},crown_cushion:{en:`Crown cushion`},broom:{en:`Broom`},fern:{en:`Fern`},telescope:{en:`Telescope`},watering_can:{en:`Watering can`},yarn:{en:`Ball of yarn`},toy_horse:{en:`Wooden horse`},slippers:{en:`Slippers`},blanket_basket:{en:`Blanket basket`},wall_leaves:{en:`Leaf wallpaper`},floor_dark:{en:`Dark floor`},wall_stripes:{en:`Striped wallpaper`},floor_checker:{en:`Checkered tiles`},wall_stars:{en:`Starry wallpaper`},samovar:{en:`Samovar`},hand_mirror:{en:`Hand mirror`},gramophone:{en:`Gramophone`},pickle_barrel:{en:`Pickle barrel`},barrel_organ:{en:`Barrel organ`},library_ladder:{en:`Library ladder`},window_round_stained:{en:`Stained glass window`},picture_cat:{en:`Cat painting`},fireplace:{en:`Fireplace`,need:D(`Сначала нужен камин`,`Needs the fireplace first`)},rocking_chair:{en:`Fireside rocking chair`},wine_cabinet:{en:`Bottle cabinet`},washstand:{en:`Washstand`},wall_roses:{en:`Rose wallpaper`},wall_daisies:{en:`Daisy wallpaper`},wall_ivy:{en:`Ivy wallpaper`},wall_swallows:{en:`Swallow wallpaper`},rug_round_daisy:{en:`Round daisy rug`},rug_round_patch:{en:`Patchwork rug`},rug_rect_daisy:{en:`Daisy rug`},rug_rect_patch:{en:`Patchwork runner`},lamp_sage:{en:`Sage lamp`},lamp_patch:{en:`Patchwork lantern`},shelf_kitchen_sage:{en:`Kitchen shelf`},shelf_kitchen_ornate:{en:`Carved shelf`},picture_lighthouse:{en:`Lighthouse painting`},picture_boat:{en:`Boat painting`},picture_tower:{en:`Tower painting`},picture_apples:{en:`Apple painting`},picture_daisies:{en:`Daisy painting`},hat_peg:{en:`Hat pegs`},wardrobe_sage:{en:`Sage wardrobe`},pouf:{en:`Pouf`},wreath_bells:{en:`Wreath with bells`},wreath_bow:{en:`Wreath with a bow`},wreath_orange:{en:`Orange wreath`},wreath_snow:{en:`Snowy wreath`},food_turkey:{en:`Roast turkey`},food_ham:{en:`Baked ham`},food_fruitcake:{en:`Fruitcake`},food_log:{en:`Yule log`},food_punch:{en:`Punch bowl`},food_crescents:{en:`Crescent cookies`},food_apples:{en:`Baked apples`},food_tangerines:{en:`Tangerines`},food_gingerbread_house:{en:`Gingerbread house`},food_gingerbread_men:{en:`Gingerbread men`},food_star_cookies:{en:`Star cookies`},food_mugs:{en:`Cocoa mugs`},candle_lantern:{en:`Candle lantern`},teacups_daisy:{size:.045,en:`Daisy mug`},fern_geranium:{size:.12,en:`Geranium pot`},crown_cushion_dumka:{en:`Little cushion`},crown_cushion_folk:{en:`Embroidered crown cushion`},broom_new:{size:.15,en:`New broom`},teapot_brown:{en:`Teapot in a cosy`},clock_cuckoo:{size:.26,en:`Cuckoo clock`},blanket_basket_wicker:{size:.1,en:`Wicker basket`},blanket_basket_quilt:{en:`Stack of quilts`},rug_doormat:{en:`Doormat`},rug_striped:{en:`Rag rug`},rug_striped_scrap:{en:`Raccoon rag rug`},rug_runner:{en:`Striped runner`},rug_oval:{en:`Knitted rug`},lampshade:{en:`Lampshade`},wall_shelf:{en:`Wall shelf`},jam_jar_trio:{en:`Jam jars`},chair_stool:{size:.15,en:`Stool`},armchair_patch:{en:`Patchwork armchair`},sofa_patch:{en:`Patchwork sofa`},chair_patch:{en:`Patchwork chair`},pouf_patch:{en:`Patchwork pouf`},bookshelf_carved:{en:`Carved bookcase`},bookshelf_glass:{en:`Glass-door bookcase`},quilt_stars:{en:`Patchwork quilt`},chest_alt:{en:`Chest`},globe_antique:{en:`Globe`},tablecloth:{en:`Embroidered tablecloth`},lamp_chandelier:{en:`Candle chandelier`},clock_wall:{size:.22,en:`Pendulum clock`},sofa_small:{en:`Small sofa`},sofa_striped:{en:`Striped sofa`},wardrobe_carved:{en:`Wardrobe`},wardrobe_mirror:{en:`Mirrored wardrobe`},telescope_spyglass:{size:.09,en:`Spyglass`},cupboard_painted:{en:`White cupboard`},cupboard_folk:{en:`Painted cupboard`}},yt={rustic:D(`Прованс`,`Provence`),royal:D(`Роял`,`Royal`),daisy:D(`Дейзи`,`Daisy`),scrap:D(`Енотий`,`Raccoon`),winter:D(`Праздничный`,`Festive`)},O={narrator:null,cutlet:`kotletka`,spider:`spider`,raccoon:`raccoon`,opossum_mom:`opossumMom`,rat:`rat`,mouse:`mice`,chernika:`chernika`,cat:`cat`,bat:`bat`,roach_mid:`roachMedium`,mosquito:`mosquitoes`,moth:`moth`},bt={Настойки:`water-sort`,Кварто:`quarto`,"Три в ряд":`match3`,"Солнце и луна":`sunmoon`,Калах:`kalah`,Реверси:`reversi`,Нарды:`backgammon`,"Морской бой":`battleship`,Лоскуты:`patches`,Судоку:`sudoku`,"Распутай созвездие":`constellation`},xt=e=>({ru:e,en:e});function St(e,t,n){let r=/^([a-z_]+)(?:\s*\[([a-z]+)\])?:\s*(.+)$/.exec(e);if(!r)return n.push(`${t}: строка не в формате «кто [лицо]: текст» – ${e}`),null;let[,i=``,a,o=``]=r;if(!(i in O))return n.push(`${t}: неизвестный персонаж ${i}`),null;let s=O[i],c={kind:`line`,text:xt(o)};return s&&(c.speaker=s),s&&a&&(c.emotion=a),c}var Ct=`room.attic`;function wt(e,t,n){let r=Array.isArray(e)?e:[];return r.length===0&&n.push(`${t}: нет строк`),{background:Ct,steps:r.flatMap((e,r)=>{let i=typeof e==`string`?St(e,`${t}[${r}]`,n):null;return i?[i]:[]})}}function Tt(e,t,n){let r=O[String(e.character)];r||n.push(`${t}: неизвестный персонаж задания ${String(e.character)}`);let i=e.what??`wins`;i!==`wins`&&i!==`games`&&n.push(`${t}: what = ${String(i)} (нужно wins или games)`);let a=e.game===void 0?null:bt[String(e.game)]??null;e.game!==void 0&&!a&&n.push(`${t}: неизвестная игра ${String(e.game)}`);let o=e.room===void 0?null:Ve.includes(e.room)?e.room:null;e.room!==void 0&&!o&&n.push(`${t}: неизвестная комната ${String(e.room)}`);let s=e.difficulty===void 0?null:Se.includes(e.difficulty)?e.difficulty:null;return e.difficulty!==void 0&&!s&&n.push(`${t}: неизвестная сложность ${String(e.difficulty)}`),a&&o&&n.push(`${t}: в задании и игра, и комната – нужно что-то одно`),(typeof e.count!=`number`||!Number.isInteger(e.count)||e.count<1)&&n.push(`${t}: в задании нет числа`),!r||i!==`wins`&&i!==`games`?null:{giver:r,what:i,gameId:a,room:o,difficulty:s,count:Number(e.count)}}var Et=/^(wall|floor)_([a-z]+)$/;function Dt(e,t){if(rt.includes(t))return it;let n=e.filter(e=>e.items.includes(t)),r=n.find(e=>e.items[0]===t);return(r?[r,...n.filter(e=>e!==r)]:n).map(e=>e.key)}function Ot(e){let t=Qe.filter(t=>Fe(`hw.f.${e}.${t}`));return t.length?t:[`rustic`]}function kt(e,t,n,r,i){let a=String(e.key),o=vt[a];o||i.push(`${r}: нет английского названия (EXTRA)`);let s=O[String(e.seller)];s||i.push(`${r}: неизвестный продавец ${String(e.seller)}`);let c=w(e.quest)?Tt(e.quest,r,i):null;t===`list`&&c&&(c.what!==`wins`||!c.gameId)&&i.push(`${r}: в списке задание – победы в игре`);let l=typeof e.price==`number`?e.price:null,u=typeof e.skip_price==`number`?e.skip_price:null;t===`shop`&&l===null&&i.push(`${r}: в лавке нужна цена`),l===null&&!(c&&u!==null)&&i.push(`${r}: нет цены (или задания с skip_price)`);let d={id:a,name:{ru:String(e.name),en:o?.en??String(e.name)},source:t,batch:n,seller:s??`raccoon`,price:l,skipPrice:u,quest:c,requires:typeof e.requires==`string`?e.requires:null,event:typeof e.event==`string`?e.event:null,line:xt(String(e.comment??``)),appear:xt(String(e.cutlet??``))},f=String(e.asset);if(e.kind===`finish`){let e=Et.exec(f),t=e?.[1],n=e?.[2]??``;return t&&v[t].some(e=>e.id===n)||i.push(`${r}: нет картинки обоев/пола ${f}`),{...d,kind:`finish`,decor:t??`wall`,variant:n}}if(e.kind===`variant`&&t===`shop`){let t=Array.isArray(e.variant_of)?e.variant_of.filter(e=>typeof e==`string`):[];return t.length===0&&i.push(`${r}: у другого вида нет variant_of`),f!==a&&i.push(`${r}: картинка ${f} ≠ ключ`),{...d,kind:`variant`,variantOf:t,size:o?.size?o.size:null}}let p=Dt(_t.places,a);if(p.length===0)i.push(`${r}: нет места в расстановке (room_layout.json)`);else if(!rt.includes(a)){let t=At(p[0]);ct[String(e.zone)]?.includes(t)||i.push(`${r}: место не в зоне ${String(e.zone)}`);let n=E.find(e=>e.key===p[0]);n?.kind===`surface`&&n.on!==d.requires&&i.push(`${r}: стоит на ${n.on}, а requires = ${String(d.requires)}`)}return e.kind===`furniture`?(e.variants!==!0&&i.push(`${r}: у мебели должны быть стили (variants: true)`),{...d,kind:`furniture`,art:f,styles:Ot(f),festive:Fe(`hw.f.${f}.${S}`),places:p,...o?.need?{need:o.need}:{},...o?.glow?{glow:o.glow}:{}}):e.kind===`decor`?(f!==a&&i.push(`${r}: картинка ${f} ≠ ключ`),{...d,kind:`small`,places:p,...o?.glow?{glow:o.glow}:{}}):(i.push(`${r}: неизвестный kind ${String(e.kind)}`),null)}function At(e,t=[]){if(C(e))return Number(e.slice(7));let n=E.find(t=>t.key===e);if(!n)return lt;if(n.kind===`room`)return n.zone;let r=E.find(e=>e.items.includes(n.on));return r&&!t.includes(r.key)?At(r.key,[...t,e]):lt}function jt(){let e=[..._t.errors],t=[],n=[],r=ye;for(let i of Array.isArray(r.batches)?r.batches:[]){if(!w(i)||typeof i.id!=`number`||!Array.isArray(i.items)){e.push(`порция без id или items`);continue}let r=[];for(let n of i.items){if(!w(n)||typeof n.key!=`string`){e.push(`порция ${i.id}: предмет без key`);continue}let a=kt(n,`list`,i.id,`${n.key} (порция ${i.id})`,e);a&&t.push(a),r.push(n.key)}n.push({id:i.id,title:xt(String(i.title)),items:r})}let i=be;for(let n of Array.isArray(i.items)?i.items:[]){if(!w(n)||typeof n.key!=`string`){e.push(`лавка: предмет без key`);continue}let r=kt(n,`shop`,null,`${n.key} (лавка)`,e);r&&t.push(r)}let a=t.map(e=>e.id);for(let t of new Set(a))a.indexOf(t)!==a.lastIndexOf(t)&&e.push(`${t}: ключ повторяется`);let o=e=>t.find(t=>t.id===e);for(let n of t){if(n.requires){let t=o(n.requires);!t||t.kind!==`furniture`||t.source!==`list`&&n.source!==`shop`?e.push(`${n.id}: requires ${n.requires} – нет такой мебели в списке`):n.batch!==null&&t.batch!==null&&t.batch>n.batch&&e.push(`${n.id}: requires ${n.requires} из более поздней порции`)}if(n.kind===`variant`)for(let t of n.variantOf){let r=o(t);(!r||r.source!==`list`&&r.kind!==`furniture`||r.kind!==`furniture`&&r.kind!==`small`)&&e.push(`${n.id}: variant_of ${t} – нет такого предмета`)}}for(let t of E){for(let n of t.items){let r=o(n);(!r||r.kind!==`furniture`&&r.kind!==`small`)&&e.push(`место ${t.key}: нет предмета ${n}`)}let n=t.kind===`surface`?o(t.on):void 0;t.kind===`surface`&&n?.kind!==`furniture`&&n?.kind!==`small`&&e.push(`место ${t.key}: on ${t.on} – нет такого предмета`),t.untilOwned&&!o(t.untilOwned)&&e.push(`место ${t.key}: untilOwned ${t.untilOwned} – нет такого предмета`),!t.shared&&t.items.length>1&&e.push(`место ${t.key}: несколько кандидатов, а shared нет`)}return{items:t,batches:n,scenes:{intro:wt(r.intro,`intro`,e),batchDone:wt(r.batch_done,`batch_done`,e),outro:wt(r.outro,`outro`,e)},errors:e}}var k=jt();k.errors;var A=k.batches,Mt=k.scenes,Nt=k.items;k.items.filter(e=>e.source===`list`);var Pt=k.items.filter(e=>e.source===`shop`),Ft=k.items.filter(e=>e.kind===`furniture`),It=k.items.filter(e=>e.kind===`small`),Lt=k.items.filter(e=>e.kind===`finish`),Rt=k.items.filter(e=>e.kind===`variant`);function j(e){return Nt.find(t=>t.id===e)}function zt(e){return Ft.find(t=>t.id===e)}function Bt(e){return E.find(t=>t.key===e)}function Vt(e){let t=j(e);return t?.kind===`furniture`||t?.kind===`small`?t.places:[]}function Ht(e){return Vt(e)[0]??null}function Ut(e,t=E){return C(e)?rt:t.find(t=>t.key===e)?.items??[]}function Wt(e){return C(e)&&it.includes(e)||Bt(e)!==void 0}function M(e,t){return t===`winter`&&e.festive?S:e.styles.find(e=>e===t)??(e.styles.includes(`rustic`)?`rustic`:e.styles[0])}function Gt(e,t){switch(e.kind){case`furniture`:return`hw.f.${e.art}.${M(e,t)}`;case`small`:return`hw.s.${e.id}`;case`variant`:return`hw.v.${e.id}`;case`finish`:return _e(e.decor,e.variant).image}}var Kt=e=>Gt(e);function qt(e){return e.source===`list`||Fe(Gt(e))}function Jt(e){return Rt.filter(t=>t.variantOf.includes(e))}function Yt(e,t,n){return(e.itemPos[t]??(n?e.at[n.look]:void 0))||{x:e.x,y:e.y+(n?.style?e.dy[n.style]??0:0)}}function Xt(e,t,n){if(e.kind!==`surface`)return!0;let r=e.variantOnlyOn[t];return!r||n!==null&&r.includes(n)}function Zt(e){return`hw.v.${e.id}`}function Qt(e,t){return Lt.find(n=>n.decor===e&&n.variant===t)}function $t(e){let t=j(e);if(t?.kind===`variant`)return $t(t.variantOf[0]??``);let n=Ht(e);return n?At(n):lt}var en={winter:JSON.parse(`{"start":"11-27","end":"01-15","about":"Зимнее событие. Тексты – docs/WINTER_TEXTS.md (перенесены сюда). Строка сцены: «кто [лицо]: текст»; кто – как в WINTER_TEXTS.md (cutlet, cat_young, cat_calico, roach_mid, mosquito = Юнга…) или id персонажа. Пометка «[если сюжет пройден]» в конце строки – строка только после финала сюжета. Шаг: room – комната метки; place = furnish – сцена при входе в комнату Котлетки (новоселье); intro – сцена при входе, outro – после выполнения условия; task – поручение в облачке (taskBy – кто говорит); festive – что украшается после шага; tree – ёлка новоселья; prize – награда (WINTER_QUEST_PRIZE). lines: жилец → before / after / final (до своего шага, после него, после финала); storyOnly – только после финала сюжета. Строка сцены может быть объектом { \\"line\\": \\"…\\", \\"fx\\": [\\"red\\"] } – залпы фейерверка на этой реплике (red, green, gold, purple; purple – вдвое крупнее, из красного и синего кругов). Сцена с залпами затемнена.","quest":[{"id":"s0","title":{"ru":"Список дел","en":"The to-do list"},"room":"attic","place":"furnish","requires":"storyDone","intro":"winter_s0","goal":{"kind":"scene"},"festive":{"chars":["kotletka","raccoon"]}},{"id":"s1","title":{"ru":"Ёлка у котов","en":"The cats' tree"},"room":"living","intro":"winter_s1_intro","outro":"winter_s1_done","goal":{"kind":"playEach","rivals":["catYoung","catElder","cat"]},"festive":{"chars":["cat","catElder","catYoung"]},"tree":"bare","task":"Сыграй с каждым из нас по партии. Нам нужно куда-то девать лапы."},{"id":"s2","title":{"ru":"Ставки на лестнице","en":"Bets on the stairs"},"room":"living","intro":"winter_s2_intro","outro":"winter_s2_done","goal":{"kind":"play","host":"roach"},"festive":{"chars":["roachYoung","roachMedium","roachOld"]},"task":"Одну партию. Ходить мы уже не можем, а ходы делать ещё можем."},{"id":"s3","title":{"ru":"Гирлянды в погребе","en":"Garlands in the cellar"},"room":"cellar","intro":"winter_s3_intro","outro":"winter_s3_done","goal":{"kind":"play","games":["match3"],"win":true},"festive":{"rooms":["cellar"],"chars":["mice","mouse","mouseKeeper","mouseGranny"]},"task":"Помоги распутать. Три в ряд – и узел сам отпускает."},{"id":"s4","title":{"ru":"Гирлянда в ванной","en":"A garland for the bathroom"},"room":"bathroom","intro":"winter_s4_intro","outro":"winter_s4_done","goal":{"kind":"play","games":["battleship"]},"festive":{"rooms":["bathroom"],"chars":["mosquitoes","mosquitoCabin","mosquitoBosun","mosquitoCaptain"]},"tree":"decorated","task":"Пока вешаешь, сыграй с нами. Лёжа мы стреляем не хуже."},{"id":"s5","title":{"ru":"Бессонница","en":"Sleepless"},"room":"bedroom","intro":"winter_s5","discover":"moth","goal":{"kind":"scene"}},{"id":"s6","title":{"ru":"Фейерверки","en":"Fireworks"},"room":"laboratory","intro":"winter_s6_intro","outro":"winter_s6_done","goal":{"kind":"play","games":["quarto"],"win":true},"task":"Сыграй со мной, пока остывает. А потом сходи за книгой."},{"id":"s7","title":{"ru":"Фиолетовый рецепт","en":"The violet recipe"},"room":"library","intro":"winter_s7_intro","outro":"winter_s7_done","goal":{"kind":"play","games":["gomoku"],"win":true},"festive":{"rooms":["library","laboratory"],"chars":["bat","rat"]},"task":"Одна победа – одна книга. Таков порядок."},{"id":"s8","title":{"ru":"Пряники","en":"Gingerbread"},"room":"kitchen","intro":"winter_s8_intro","outro":"winter_s8_done","goal":{"kind":"achieve","games":["bakery"],"achievement":"cake"},"festive":{"rooms":["kitchen"],"chars":["opossumMom"]},"task":"Помоги допечь. До торта, если получится. Торт она в одиночку не унесёт."},{"id":"s9","title":{"ru":"Клубок нашёлся","en":"The yarn is found"},"room":"living","intro":"winter_s9","goal":{"kind":"scene"}},{"id":"s10","title":{"ru":"Шарфы для всех","en":"Scarves for everyone"},"room":"bedroom","intro":"winter_s10_intro","outro":"winter_s10_done","goal":{"kind":"play","games":["patches"],"win":true},"festive":{"rooms":["bedroom"],"chars":["chernika","moth"]},"task":"Помоги мне с лоскутами. Шарфов нужно много, а вечер один.","taskBy":"moth"},{"id":"s11","title":{"ru":"Праздник","en":"The celebration"},"room":"living","intro":"winter_s11","goal":{"kind":"scene"},"prize":true,"tree":"gifts"}],"scenes":{"winter_s0":["cutlet [calm]: Паучок, у нас праздник через неделю. А дом выглядит так, будто праздник был в прошлом году.","spider [puzzled]: Он и был в прошлом году.","cutlet [happy]: Вот именно. Я составила список. Он короткий, если читать быстро.","spider [calm]: А если медленно?","cutlet [calm]: Тогда начни с Гостиной. Там поставили ёлку. Прямо у котов.","spider [surprised]: У котов.","cutlet [sad]: Я тоже так сказала. Сходи посмотри, как они держатся."],"winter_s1_intro":["cat [calm]: Я на неё не смотрю. Она на меня тоже. У нас договор.","cat_young [surprised]: Там шарик качается. Сам. Я его не трогал.","cat_young [calm]: Пока.","cat_calico [calm]: За ёлку я спокойна. Я неспокойна за этих двоих.","spider [determined]: Может, сыграем? Пока играешь, на шарик не смотришь.","cat [happy]: Разумно. Садись. Только спиной к ёлке сяду я."],"winter_s1_done":["cat_calico [happy]: Три партии, и ни одной иголки на полу. Это рекорд дома.","cat_young [sad]: Я проиграл, потому что думал про шарик.","cat [calm]: Все думали про шарик. Просто некоторые думали с достоинством.","spider [tender]: Вы молодцы. Я загляну ещё."],"winter_s2_intro":["roach_young [sad]: Мы носили письма. Вверх. Потом вниз. Потом оказалось, что не те.","roach_mid [calm]: Потом водили всех смотреть ёлку. По одному. Чтобы коты не нервничали.","roach_old [sly]: А теперь сидим. И принимаем ставки.","spider [puzzled]: Ставки?","roach_old [calm]: Кто из котов сдастся первым. Молодой идёт три к одному. На Серого почти не ставят: скучно.","roach_mid [doubtful]: Банк держат на чердаке. Там надёжнее.","spider [calm]: Понятно. Сыграем? Сидя вы тоже умеете."],"winter_s2_done":["roach_young [happy]: Сидя играть лучше, чем ходить. Запишите это куда-нибудь.","roach_old [calm]: Записал. Рядом со ставками."],"winter_s3_intro":["mouse [surprised]: Это гирлянды. Прошлогодние. Мы их убирали аккуратно.","mouse_keeper [calm]: Я записал в книгу: «убраны аккуратно». Книга не врёт. Врут гирлянды.","mouse_granny [calm]: Они за год успели подружиться. Теперь их не разнять.","spider [determined]: Узлы я понимаю. Покажите, где начало.","mouse_granny [happy]: Если бы мы знали, где начало, мы бы тебя не звали, милый."],"winter_s3_done":["mouse_keeper [happy]: Четыре гирлянды. В книге было три. Одна завелась сама.","mouse [happy]: Лишнюю повесим у себя!"],"winter_s4_intro":["mosquito_captain [sad]: Докладываю. Флот развесил гирлянды на трёх этажах.","mosquito_bosun [sad]: На четырёх, капитан. Вы один этаж проспали на люстре.","mosquito [sad]: Мы флот. Не авиация. Нам такое не положено.","mosquito_captain [calm]: Своя ванная осталась без украшений. Экипаж лежит.","spider [tender]: Лежите. Я повешу. Мне по стене не трудно.","mosquito_bosun [surprised]: Он ходит по стене. Капитан, запишите его в экипаж."],"winter_s4_done":["mosquito_captain [happy]: Гирлянда на борту. Объявляю ванную украшенной.","mosquito [happy]: А можно теперь не летать до весны?","mosquito_captain [calm]: Можно до ужина."],"winter_s5":["chernika [sleepy]: Ты пришёл пожелать мне спокойной ночи. Это смешно.","spider [puzzled]: Почему смешно?","chernika [thinking]: Потому что внизу опять бабахнуло. Слышал? Вот. И так с утра.","chernika [sleepy]: Я лежу и считаю. Досчитала до сорока взрывов. Овцы так не умеют.","moth [sad]: А у меня пропал клубок. Красный. Я вязала шарф и отвернулась на минуту.","spider [determined]: Клубок поищу. А бабахает, кажется, в Лаборатории.","chernika [thinking]: Скажи там, что я всё слышу. И что мне от этого не спится, а хочется пряников."],"winter_s6_intro":["rat [surprised]: Не входи! А, уже вошёл. Тогда не дыши. Шучу. Дыши, но в сторону.","spider [calm]: Это вы бабахаете?","rat [happy]: Это фейерверки. К празднику. Красный есть. Зелёный есть. Золотой получился случайно.","rat [sad]: Фиолетового нет. Сорок раз пробовала. Выходит серый, и громко.","spider [puzzled]: Сорок. Чернинка считала так же.","rat [calm]: Про порох всё было в книге. Книга в Библиотеке. А мне отсюда нельзя: оно без меня тоже бабахнет."],"winter_s6_done":["rat [calm]: Спасибо. Пока ты ходишь, я ничего не буду поджигать.","rat [thinking]: Почти ничего."],"winter_s7_intro":["bat [calm]: Фиолетовый. Да, есть такая книга. Она стоит на верхней полке, где ей и положено.","spider [calm]: Я могу достать.","bat [thinking]: Достать может каждый, у кого есть лапы. Я выдаю книги тем, кто их вернёт.","bat [sly]: Сыграем. Кто умеет думать на три хода вперёд, тот и книгу вернёт вовремя."],"winter_s7_done":["bat [happy]: Вот она. Страница заложена пером, перо моё, верни и его.","spider [surprised]: Тут написано: «Фиолетового пороха не бывает».","bat [calm]: Читай дальше. Нетерпение – причина половины взрывов.","spider [calm]: «Возьми красный и возьми синий. Не смешивай. Насыпь рядом и подожги разом».","bat [sly]: Вот именно. Она сорок раз мешала их в одной ступке. Отсюда серый.","spider [happy]: Они должны встретиться уже в небе.","bat [tender]: Как и многие. Иди. И скажи Крысе, что тишина тоже украшение."],"winter_s8_intro":["opossum_mom [happy]: Слышишь? Не бабахает. Я уже думала, это у меня в ушах.","opossum_mom [sad]: Теперь другая беда. Пряников может не хватить.","spider [puzzled]: Их кто-то ест?","opossum_mom [calm]: Чернинка. Приходит ночью. Говорит, что не спится. Смотрит.","opossum_mom [sad]: Я не умею отказывать тем, кто так смотрит. Я вообще не умею отказывать.","spider [determined]: Взрывов больше не будет. Она уснёт. А пряники допечём."],"winter_s8_done":["opossum_mom [happy]: Торт. И пряников ещё на противень. Теперь хватит всем.","opossum_mom [tender]: Отнеси один наверх. Пусть ей будет что вспомнить, когда проснётся."],"winter_s9":["spider [surprised]: Серый. У тебя на лапе красная нитка.","cat [calm]: Это не нитка. Это средство.","cat_young [sad]: Мы его катаем. По очереди. Пока катаешь клубок, шарик не нужен.","cat_calico [sad]: Мы понимаем, чей он. Мы собирались вернуть. После праздника. Или после ёлки.","spider [calm]: Моли без него не довязать шарфы.","cat [sad]: А нам без него не достоять.","spider [determined]: Тогда меняемся. Этот я отнесу Моли. А вам смотаю другой.","cat_young [surprised]: Из чего?","spider [tender]: Из своего. Он не красный, зато не кончается.","cat_calico [tender]: Клубок из паутины. Нам такого ещё никто не дарил.","cat [happy]: Он липнет к лапам. Превосходно. Его невозможно потерять."],"winter_s10_intro":["chernika [sleepy]: Тихо. Ты слышишь, как тихо? Я уже забыла, как это.","spider [tender]: Тебе пряник. От Мамы-Опоссум.","chernika [tender]: Положи рядом. Я съем его во сне. Я умею.","spider [happy]: А это вам. Нашёлся.","moth [surprised]: Мой клубок! Где он был?","spider [calm]: У котов. Он помогал им держаться. Я оставил им другой.","moth [tender]: Бедные. Знала бы, сама бы отдала. Ну, не красный."],"winter_s10_done":["moth [happy]: Готово. Всем по шарфу. Тебе тоже, не спорь.","chernika [proud]: Я спала. Целых полчаса. Запиши это в свой журнал."],"winter_s11":["mouse_granny [happy]: Все здесь? Тогда гасите лампу. Так лучше видно.",{"line":"rat [calm]: Красный. Смотрите в окно.","fx":["red"]},"mosquito [happy]: Ух!",{"line":"rat [calm]: Зелёный. Золотой. Золотой опять случайно.","fx":["green","gold"]},{"line":"rat [happy]: А теперь тот самый. Красный и синий, рядом. Тихо, я обещала.","fx":["purple"]},"chernika [tender]: Фиолетовый. Ради этого стоило не спать.","cutlet [happy]: Как красиво. Я вычёркиваю последний пункт. [если сюжет пройден]","cat [calm]: Прошу отметить: ёлка стоит.","cat_young [happy]: Стоит! Мы её ни разу!","roach_old [sly]: Значит, пора открывать книгу ставок.","roach_old [calm]: На Молодого ставили шестеро. На Трёхцветную двое. На Серого один, и это был Серый.","roach_mid [surprised]: И одна ставка на то, что продержатся все. Без подписи. Вместо подписи паутинка.","cat [surprised]: Паутинка.","spider [tender]: Я подумал, что вы справитесь.","cat_calico [tender]: Он в нас верил. Заранее. Когда мы сами не очень.","raccoon [happy]: Банк твой, Паучок. Одна паутинка обыграла весь дом. [если сюжет пройден]","roach_old [happy]: Остальным ставки вернули подарками. Они под ёлкой.","opossum_mom [happy]: А теперь к столу. Хватит всем. Я считала тарелки."]},"journal":{"s0":"Котлетка дала список. Первым пунктом идут коты. Вторым, подозреваю, тоже.","s1":"Коты держатся. Ёлка тоже. Не знаю, за кого я волнуюсь больше.","s2":"Тараканчики устали так, что принимают ставки шёпотом. Гирлянду на перилах, кажется, повесил кто-то другой.","s3":"Распутал гирлянды. Конец у них оказался там же, где начало. Так бывает чаще, чем думают.","s4":"Комары говорят, что они флот. Гирлянда на ванне с этим согласна.","s5":"Чернинка не спит. Моль ищет клубок. Внизу что-то взрывается. Начну с того, что громче.","s6":"Крысе нужен фиолетовый. Рецепт в Библиотеке. Сорок взрывов были серыми.","s7":"Фиолетовый не смешивают. Красный и синий кладут рядом и поджигают вместе. Отнёс книгу Крысе. Стало тихо.","s8":"Мама-Опоссум не умеет отказывать. Поэтому в доме всегда пахнет пряниками и никогда нет пряников. Несу один наверх. По дороге загляну к котам.","s9":"Клубок Моли был у котов: он помогал им не смотреть на шарики. Смотал им свой, из паутины. Красный несу наверх.","s10":"Чернинка спала полчаса. Моль довязала шарфы. У котов теперь клубок, который липнет к лапам, и они счастливы.","s11":"Выиграла ставка, которую я не собирался никому показывать. Фиолетовый был тихий. Коты смотрят на меня так, будто я повесил им медаль."},"lines":{"cat":{"before":["Я сижу спиной к ёлке. Так мы обе спокойнее.","Шарики блестят нарочно. Я это понимаю и не поддаюсь."],"after":["Игра помогает. Пока думаешь над ходом, хвост лежит смирно.","У нас есть средство. Красное. Подробности потом."],"final":["На себя я поставил сам. Кто-то же должен был.","Клубок из паутины липнет к лапам. Его нельзя потерять. Я пробовал."]},"cat_young":{"before":["Он качается. Шарик. Я просто сообщаю.","Если сесть на лапы, они ничего не сделают. Я проверил."],"after":["Я не трогал. Я даже не дышал в ту сторону."],"final":["Паучок в меня верил. Я теперь хожу мимо ёлки боком, из уважения."]},"cat_calico":{"before":["Я слежу за ёлкой. И за теми, кто за ней следит.","У нас в Гостиной теперь лес. Маленький, но с характером."],"after":["Пока все целы. Я имею в виду шарики."],"final":["Ёлка стоит. Я слежу за ней уже по привычке."]},"roach_young":{"before":["Три к одному на Молодого. Я сам поставил. Он мне нравится, но я реалист.","Письма разнесли. Почти все туда."],"after":["Ноги гудят. Усы тоже, хотя ими я не ходил."],"final":["Я проиграл ставку и получил подарок. Хорошая система."]},"roach_mid":{"before":["На Трёхцветную ставят те, кто её не знает.","Мы водили гостей к ёлке по одному. Очередь была до погреба."],"after":["Ставки принимаем до ужина. После ужина принимаем соболезнования."],"final":["Паутинка вместо подписи. Красиво. Надо завести себе что-нибудь вместо подписи."]},"roach_old":{"before":["За сорок лет ни одна ёлка в этом доме не достояла до конца. Но ставки берём.","Банк на чердаке. Там сквозняк, зато никто не считает чужое."],"after":["Сидя я принимаю решения лучше. Стоя я принимаю только ставки."],"final":["Сорок лет и одна ёлка. Запишу отдельной строкой."]},"mouse":{"before":["Гирлянды сплелись. Мы их не ругаем, им было темно и скучно."],"after":["Лишнюю гирлянду мы оставили себе. Она сама пришла."],"final":["Сверху видно фейерверк, а снизу слышно. Нам досталось слышно."]},"mouse_keeper":{"before":["В книге записано: три гирлянды. Я пересчитал узел. Узел один."],"after":["Исправил в книге: четыре. Причину указал: “завелась”."],"final":["Праздник учтён. Остатков нет, кроме пряников, и тех уже нет."]},"mouse_granny":{"before":["Каждый год убираем аккуратно. Каждый год достаём клубок."],"after":["Узлы любят, когда с ними не спорят."],"final":["Хороший год. Все дома, и свет не гаснет."]},"mosquito":{"before":["Я нёс гирлянду через весь пролёт. Она тяжелее меня. Я взвешивался."],"after":["Капитан сказал, можно не летать до ужина. Я не летаю изо всех сил."],"final":["Фиолетовый был как море, только сверху."]},"mosquito_bosun":{"before":["Мы флот. На флоте гирлянды называют “такелаж”. Легче не стало."],"after":["Паучок ходит по стене. Я бы тоже ходил, но у меня устав."],"final":["Экипаж цел. Гирлянды на местах. Свисток охрип."]},"mosquito_captain":{"before":["Флот выполнил задачу. Флот лежит."],"after":["Гирлянда на борту ванны. Теперь это флагман."],"final":["Объявляю благодарность всем, кто умеет ходить по стенам."]},"rat":{"before":["Опять серый. И громко. Не понимаю, чего ему не хватает.","Золотой я не планировала. Он получился, пока я чихала."],"after":["Рядом, а не вместе. Сорок раз мешала в одной ступке."],"final":["Он был тихий. Я проверяла на себе: даже не моргнула."]},"bat":{"before":["Перед праздником все вспоминают, что умеют читать. Приятно.","Звезду на верхнюю полку я повесила сама. Плащ мешал, но я упрямая."],"after":["Книгу вернули вовремя. Перо тоже. Мир держится на таких вещах."],"final":["Я прочла всем сказку. Комары уснули на второй странице. Считаю это успехом."]},"opossum_mom":{"before":["Пеку с утра. Противень уходит наверх быстрее, чем остывает.","Она смотрит такими глазами. Я даю пряник. Потом ещё один, чтобы первому не было одиноко."],"after":["Торт стоит. Его охраняю я. Строго. Почти."],"final":["Хватило всем. Я сама не верю, но посчитала тарелки."]},"chernika":{"before":["Сорок один. Это не овцы. Это Лаборатория.","Пряник помогает не уснуть с достоинством."],"after":["Тихо. Я лежу и слушаю, как ничего не взрывается."],"final":["Досмотрела фейерверк и уснула до весны. Шучу. До завтрака."]},"moth":{"before":["Красный клубок. Был тут. Клубки сами не уходят, у них нет на это причин."],"after":["Клубок вернулся. Немного взъерошенный, но целый."],"final":["Всем по шарфу. Дом теперь можно узнать издалека: он в красном."]},"cutlet":{"before":["Список короткий. Я просто писала мелко."],"after":["Я вычёркиваю, а он не кончается. Наверное, хороший список."],"final":["Под ёлкой столько коробок, что ёлку почти не видно. Мне нравится."],"storyOnly":true},"raccoon":{"before":["Банк у меня. Считаю каждый вечер. Сходится, даже обидно."],"after":["На Серого поставил сам Серый. Уважаю, но коэффициент не дам."],"final":["Проиграть паутинке не стыдно. Я проверил, действительно не стыдно."],"storyOnly":true}}}`)};function tn(e){let t=e>>>0,n=()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},r=(e,t)=>{if(!Number.isInteger(e)||!Number.isInteger(t)||t<e)throw Error(`rng.int: bad range [${e}, ${t}]`);return e+Math.floor(n()*(t-e+1))};return{next:n,int:r,pick(e){if(e.length===0)throw Error(`rng.pick: empty array`);return e[r(0,e.length-1)]},shuffle(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=r(0,e),i=t[e];t[e]=t[n],t[n]=i}return t},chance(e){return n()<e},getState:()=>t}}function nn(){return Math.floor(Math.random()*4294967296)>>>0}var rn=[`red`,`green`,`gold`,`purple`],an=1500,on=.2,sn=.12,N={red:`#ff5a4e`,green:`#63e27c`,gold:`#ffd34d`,blue:`#5b8cff`,purple:`#b56cff`};function cn(e,t,n,r){let i=e.int(40,60),a=e.next()*Math.PI*2;return Array.from({length:i},(o,s)=>{let c=a+s/i*Math.PI*2+(e.next()-.5)*.08,l=t*(.85+e.next()*.3);return{dx:Math.cos(c)*l,dy:Math.sin(c)*l,from:n,to:r}})}function ln(e,t,n,r={}){let i=tn(t);return e.map((e,t)=>{let a=r.at?.x??.22+i.next()*.56,o=r.at?.y??.28+i.next()*.2,s=e===`purple`?[...cn(i,on*2,N.red,N.purple),...cn(i,on*2,N.blue,N.purple)]:cn(i,on,N[e],N[e]);return{x:a,y:o,start:n+t*450,color:e,sparks:s}})}function un(e,t,n){let r=(e,t)=>parseInt(e.slice(1+t*2,3+t*2),16),i=Math.min(1,Math.max(0,n));return`#${[0,1,2].map(n=>Math.round(r(e,n)+(r(t,n)-r(e,n))*i).toString(16).padStart(2,`0`)).join(``)}`}function dn(e,t,n,r){let i=t-e.start,a=e.x*n,o=e.y*r;if(i<0)return{rocket:null,sparks:[],done:!1};if(i<650){let t=i/650,n=1-(1-t)*(1-t);return{rocket:{x:a,y:r+(o-r)*n,color:e.sparks[0]?.from??N[e.color]},sparks:[],done:!1}}let s=(i-650)/an;if(s>=1)return{rocket:null,sparks:[],done:!0};let c=1-(1-s)*(1-s)*(1-s),l=sn*s*s*r;return{rocket:null,sparks:e.sparks.map(e=>({x:a+e.dx*c*r,y:o+e.dy*c*r+l,alpha:1-s,color:e.from===e.to?e.from:un(e.from,e.to,Math.min(1,s*1.6))})),done:!1}}var fn=e=>e.start+650+an,P={spider:{name:{ru:`Паучок`,en:`Spider`},gender:`m`},kotletka:{name:{ru:`Принцесса Котлетка`,en:`Princess Kotletka`},gender:`f`},raccoon:{name:{ru:`Воришка Енот`,en:`Raccoon the Thief`},gender:`m`},witch:{name:{ru:`Колдунья`,en:`The Witch`},gender:`f`},cat:{name:{ru:`Серый`,en:`Grey`},gender:`m`},catElder:{name:{ru:`Плюша`,en:`Plusha`},gender:`f`},catYoung:{name:{ru:`Мелочь`,en:`Smidge`},gender:`f`},toad:{name:{ru:`Жаба Погребная`,en:`Cellar Toad`},gender:`f`},owl:{name:{ru:`Сова Соня`,en:`Sleepy Owl`},gender:`f`},frog:{name:{ru:`Лягушонок`,en:`Little Frog`},gender:`m`},bat:{name:{ru:`Летучая мышь`,en:`The Bat`},gender:`f`},bookworm:{name:{ru:`Книжный червь`,en:`The Bookworm`},gender:`m`},ghost:{name:{ru:`Чердачный дух`,en:`Attic Ghost`},gender:`m`},mice:{name:{ru:`Мыши`,en:`The Mice`},gender:`pl`,voicePitch:5},mosquitoes:{name:{ru:`Комары`,en:`The Mosquitoes`},gender:`pl`,voicePitch:7},mosquitoCabin:{name:{ru:`Юнга`,en:`The Cabin Boy`},gender:`m`,voicePitch:7},mosquitoBosun:{name:{ru:`Боцман`,en:`The Bosun`},gender:`m`,voicePitch:7,elderVoice:!0},mosquitoCaptain:{name:{ru:`Капитан`,en:`The Captain`},gender:`m`,voicePitch:7,elderVoice:!0},mouse:{name:{ru:`Мышь`,en:`The Mouse`},gender:`f`,voicePitch:5},mouseKeeper:{name:{ru:`Кладовщик`,en:`The Storekeeper`},gender:`m`,voicePitch:5},mouseGranny:{name:{ru:`Бабушка-мышь`,en:`Granny Mouse`},gender:`f`,voicePitch:5},chernika:{name:{ru:`Чернинка`,en:`Cherninka`},gender:`f`},rat:{name:{ru:`Лабораторная Крыса`,en:`The Lab Rat`},gender:`f`,voicePitch:4},opossumMom:{name:{ru:`Мама-Опоссум`,en:`Mama Possum`},gender:`f`},moth:{name:{ru:`Моль`,en:`The Moth`},gender:`f`},roachYoung:{name:{ru:`Молодой тараканчик`,en:`Young Roach`},gender:`m`,voicePitch:3},roachMedium:{name:{ru:`Усатый тараканчик`,en:`Whiskered Roach`},gender:`m`,voicePitch:3,elderVoice:!0},roachOld:{name:{ru:`Седой тараканчик`,en:`Grey Roach`},gender:`m`,voicePitch:3,elderVoice:!0}},pn=[`cat`,`catYoung`,`catElder`];function mn(e){return P[e].voicePitch??0}function hn(e){let t=P[e];return t.elderVoice?`elder`:t.gender===`f`?`f`:`m`}var F={easy:`roachYoung`,medium:`roachMedium`,hard:`roachOld`},gn={easy:`catYoung`,medium:`catElder`,hard:`cat`},_n={easy:`mosquitoCabin`,medium:`mosquitoBosun`,hard:`mosquitoCaptain`},vn={easy:`mouse`,medium:`mouseKeeper`,hard:`mouseGranny`},yn={mosquitoes:`mosquitoCaptain`,mice:`mouseGranny`},bn={mosquitoes:`mosquitoCabin`},xn={mosquitoCabin:`mosquitoCabinTall`},Sn=`raccoon`,I={calm:`calm`,glad:`happy`,upset:`grumpy`,surprised:`surprised`,thinking:`thinking`,won:`sly`,lost:`sad`},L={calm:`calm`,glad:`happy`,upset:`sad`,surprised:`surprised`,thinking:`calm`,won:`happy`,lost:`sad`},Cn={spider:{calm:`calm`,glad:`happy`,upset:`puzzled`,surprised:`surprised`,thinking:`determined`,won:`happy`,lost:`sad`},cat:L,catElder:I,catYoung:I,kotletka:L,raccoon:{calm:`sly`,glad:`happy`,upset:`upset`,surprised:`surprised`,thinking:`sly`,won:`happy`,lost:`upset`},roachYoung:I,roachMedium:{...I,thinking:`doubtful`},roachOld:I,bat:I,mosquitoes:I,mosquitoCabin:I,mosquitoBosun:I,mosquitoCaptain:I,mouseKeeper:I,mouseGranny:I,rat:L,moth:L,mice:L,mouse:L,opossumMom:L,chernika:{calm:`tender`,glad:`proud`,upset:`sleepy`,surprised:`thinking`,thinking:`thinking`,won:`proud`,lost:`sleepy`}},wn=[`bare`,`decorated`,`gifts`],Tn=/^(\d{2})-(\d{2})$/;function En(e){if(typeof e!=`string`)return null;let t=Tn.exec(e);if(!t)return null;let n=Number(t[1]),r=Number(t[2]),i=[31,29,31,30,31,30,31,31,30,31,30,31][n-1];return i!==void 0&&r>=1&&r<=i?{month:n,day:r}:null}var R=e=>typeof e==`object`&&e&&!Array.isArray(e)?e:{},Dn=e=>({ru:e,en:e}),On=e=>Ve.includes(e),z=e=>typeof e==`string`&&e in P,B=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`):[];function kn(e,t,n){if(typeof e==`string`)return Dn(e);let r=R(e);return typeof r.ru==`string`?{ru:r.ru,en:typeof r.en==`string`?r.en:r.ru}:(n.push(`${t}: нет текста`),Dn(``))}var An=/^([A-Za-z_]+)(?:\s*\[([a-z]+)\])?:\s*(.+)$/,jn=/\s*\[если сюжет пройден\]\s*$/,Mn={cutlet:`kotletka`,cat_young:`catYoung`,cat_calico:`catElder`,roach_young:`roachYoung`,roach_mid:`roachMedium`,roach_old:`roachOld`,mouse:`mouse`,mouse_keeper:`mouseKeeper`,mouse_granny:`mouseGranny`,mosquito:`mosquitoCabin`,mosquito_bosun:`mosquitoBosun`,mosquito_captain:`mosquitoCaptain`,opossum_mom:`opossumMom`};function Nn(e){return e in Mn?Mn[e]:e in O?O[e]:z(e)?e:void 0}function Pn(e,t,n){let r=R(e),i=typeof e==`string`?e:r.line,a=B(r.fx);for(let e of a)rn.includes(e)||n.push(`${t}: fx – red, green, gold или purple`);let o=typeof i==`string`?An.exec(i):null;if(!o)return n.push(`${t}: строка не в формате «кто [лицо]: текст»`),null;let[,s=``,c,l=``]=o,u=Nn(s);if(u===void 0)return n.push(`${t}: неизвестный персонаж ${s}`),null;let d=jn.test(l),f={kind:`line`,text:Dn(l.replace(jn,``))};return u&&(f.speaker=u),u&&c&&(f.emotion=c),{step:f,storyOnly:d,fx:a.filter(e=>rn.includes(e))}}function Fn(e,t,n,r){let i=Array.isArray(e)?e:[];return i.length===0&&r.push(`${n}: нет строк`),{background:t,lines:i.flatMap((e,t)=>{let i=Pn(e,`${n}[${t}]`,r);return i?[i]:[]})}}var In=(e,t,n)=>e.scenes[t]?.lines.filter(e=>n||!e.storyOnly)??null;function Ln(e,t,n){let r=e.scenes[t],i=In(e,t,n);return r&&i?{background:r.background,steps:i.map(e=>e.step)}:null}function Rn(e,t,n){return(In(e,t,n)??[]).map(e=>[...e.fx])}function zn(e,t,n){let r=R(e);switch(r.kind){case`scene`:return{kind:`scene`};case`play`:{let e=r.host===void 0?null:r.host;return e!==null&&e!==`resident`&&e!==`roach`&&e!==`moth`&&n.push(`${t}: host – resident, roach или moth`),{kind:`play`,games:r.games===void 0?null:B(r.games),host:e,win:r.win===!0}}case`playEach`:{let e=B(r.rivals);for(let r of e)z(r)||n.push(`${t}: неизвестный персонаж ${r}`);return e.length===0&&n.push(`${t}: нет соперников`),{kind:`playEach`,rivals:e.filter(z)}}case`achieve`:return typeof r.achievement!=`string`&&n.push(`${t}: нет достижения`),{kind:`achieve`,games:B(r.games),achievement:String(r.achievement)};default:return n.push(`${t}: kind – scene, play, playEach или achieve`),{kind:`scene`}}}function Bn(e,t,n,r){let i=R(e),a=`${n}, шаг ${t}`,o=typeof i.id==`string`?i.id:`s${t}`;On(i.room)||r.push(`${a}: неизвестная комната ${String(i.room)}`),i.place!==void 0&&i.place!==`furnish`&&r.push(`${a}: place – только furnish`),i.requires!==void 0&&i.requires!==`storyDone`&&r.push(`${a}: requires – только storyDone`),typeof i.intro!=`string`&&r.push(`${a}: нет сцены intro`),i.taskBy!==void 0&&!z(i.taskBy)&&r.push(`${a}: taskBy – неизвестный персонаж ${String(i.taskBy)}`);let s=R(i.festive),c=B(s.rooms),l=B(s.chars);for(let e of c)On(e)||r.push(`${a}: неизвестная комната ${e}`);for(let e of l)z(e)||r.push(`${a}: неизвестный персонаж ${e}`);let u=i.tree===void 0?null:wn.includes(i.tree)?i.tree:null;return i.tree!==void 0&&!u&&r.push(`${a}: tree – bare, decorated или gifts`),{id:o,index:t,title:kn(i.title,`${a}, title`,r),room:On(i.room)?i.room:`living`,place:i.place===`furnish`?`furnish`:`room`,requires:i.requires===`storyDone`?`storyDone`:null,intro:typeof i.intro==`string`?i.intro:o,outro:typeof i.outro==`string`?i.outro:null,task:i.task===void 0?null:kn(i.task,`${a}, task`,r),taskBy:z(i.taskBy)?i.taskBy:null,goal:zn(i.goal,`${a}, goal`,r),festive:{rooms:c.filter(On),chars:l.filter(z)},tree:u,prize:i.prize===!0,discover:typeof i.discover==`string`?i.discover:null}}function Vn(e){let t=`room.${e}`;return b(t)?t:`room.attic`}function Hn(e){let t=[],n=[];if(typeof e!=`object`||!e)return{events:n,errors:[`events.json: ожидается объект`]};for(let[r,i]of Object.entries(e)){let e=R(i),a=En(e.start),o=En(e.end);a||t.push(`${r}: start — «ММ-ДД»`),o||t.push(`${r}: end — «ММ-ДД»`);let s=(Array.isArray(e.quest)?e.quest:[]).map((e,n)=>Bn(e,n,r,t)),c=s.map(e=>e.id);new Set(c).size!==c.length&&t.push(`${r}: повторяются id шагов`);let l=R(e.scenes),u={};for(let e of s)for(let n of[e.intro,e.outro])n&&(n in l?u[n]=Fn(l[n],Vn(e.room),`${r}, сцена ${n}`,t):t.push(`${r}: нет сцены ${n}`));for(let e of Object.keys(l))e in u||t.push(`${r}: сцена ${e} не нужна ни одному шагу`);let d=R(e.journal),f={};for(let e of s)e.id in d&&(f[e.id]=kn(d[e.id],`${r}, журнал ${e.id}`,t));let p={};for(let[n,i]of Object.entries(R(e.lines))){let e=Nn(n);if(!e){t.push(`${r}: реплики – неизвестный житель ${n}`);continue}let a=R(i),o=e=>(Array.isArray(a[e])?a[e]:[]).map((i,a)=>kn(i,`${r}, реплики ${n}.${e}[${a}]`,t));p[e]={before:o(`before`),after:o(`after`),final:o(`final`),storyOnly:a.storyOnly===!0}}a&&o&&n.push({key:r,start:a,end:o,quest:s,scenes:u,journal:f,lines:p})}return{events:n,errors:t}}var Un=Hn(en);Un.errors;var Wn=Un.events;function Gn(e){return Wn.find(t=>t.key===e)}var V=e=>e.month*100+e.day,Kn=e=>V(e.start)>V(e.end);function qn(e,t){let n=V({month:t.getMonth()+1,day:t.getDate()}),r=t.getFullYear();return Kn(e)?n>=V(e.start)?r:n<=V(e.end)?r-1:null:n>=V(e.start)&&n<=V(e.end)?r:null}var Jn=(e,t)=>`${e.key}-${t}`;function Yn(e,t){if(!t.startsWith(`${e.key}-`))return null;let n=Number(t.slice(e.key.length+1));return Number.isInteger(n)?n:null}function Xn(e,t){return`${Kn(e)?t+1:t}-${String(e.end.month).padStart(2,`0`)}-${String(e.end.day).padStart(2,`0`)}`}var Zn=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`;function Qn(e,t,n){let r=qn(e,t);if(r!==null)return r;let i=Zn(t),a=null;for(let t of n){let n=Yn(e,t);n!==null&&i<=Xn(e,n)&&(a===null||n>a)&&(a=n)}return a}function $n(e){return Ue(e).roachAt!==void 0}function er(e,t){switch(t){case`resident`:return x[e].gameIds;case`roach`:return $n(e)?ze:[];case`moth`:return e===Be.roomId?[Be.gameId]:[]}}function tr(e,t){for(let n of[`resident`,`roach`,`moth`])if(er(e,n).includes(t))return n;return null}function nr(e){let t=Ge.front.indexOf(e);return t>=0?t:Ge.back.indexOf(e)}function rr(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}var ir=[F.easy,F.medium,F.hard];function ar(e,t){let n=tn(rr(t)).shuffle(ir);return n[(Math.max(1,nr(e))-1)%n.length]}var or={cat:gn,mosquitoes:_n,mice:vn};function sr(e,t){let n=x[e].residents[0];return t===`resident`&&or[n]||F}function cr(e,t,n,r){if(t===`roach`)return r?F[r]:ar(e,n);if(t===`moth`)return`moth`;if(r){let n=sr(e,t);if(n!==F)return n[r]}return x[e].residents[0]}var lr=`attic`;function ur(e,t){return e===`spider`||e===`kotletka`?[lr]:e===`moth`?[Be.roomId]:ir.includes(e)?Object.keys(x).filter(n=>$n(n)&&ar(n,t)===e):Object.keys(x).filter(t=>x[t].residents.includes(e))}var dr={chars:new Set,rooms:new Set,tower:!1,start:!1},fr=Object.fromEntries(Object.entries(xn).map(([e,t])=>[t,e])),pr=/^char\.([A-Za-z]+)(?:\.([a-z]+))?$/;function mr(e,t,n){let r=pr.exec(e);if(r){let i=r[1];if(!t.chars.has(i)&&!t.chars.has(fr[i]??``))return null;let a=`winter.${e}`;if(n(a))return a;if(r[2]===`round`)return null;let o=`winter.char.${i}`;return n(o)?o:null}if(e===`house.atticTower`)return t.tower&&n(`winter.house.atticTower`)?`winter.house.atticTower`:null;if(e.startsWith(`house.`)){let r=e.slice(6);return t.rooms.has(r)&&n(`winter.${e}`)?`winter.${e}`:null}return e===`start.background`&&t.start&&n(`winter.start.background`)?`winter.start.background`:null}function hr(e){return[[...e.chars].sort().join(`,`),[...e.rooms].sort().join(`,`),e.tower?`T`:``,e.start?`S`:``].join(`|`)}var gr=`{
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
          "text": { "ru": "Мне очень подробно рассказывали. Почти как будто я сам там был.", "en": "I was told in great detail. Almost as if I'd been there myself." }
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
    {
      "task": "water-sort",
      "games": 2,
      "thanks": 8,
      "line": {
        "ru": "Я всё расскажу, только помоги разобрать банки.",
        "en": "I'll tell you everything, just help me sort the jars."
      }
    },
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
`,_r=`{
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
`,vr=`{
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
      "thanks": 12,
      "line": {
        "ru": "Сыграй с нами, а потом расскажем.",
        "en": "Play with us, and then we’ll tell you."
      }
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
          "speaker": "mosquitoBosun",
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
`,yr=`{
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
            "ru": "На подоконнике лежала брошка Принцессы Котлетки.",
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
`,br=`{
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
`,xr=`{
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
`,Sr=`{
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
            "ru": "На стуле лежала подушка. На подушке сидела Принцесса Котлетка и выигрывала.",
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
            "ru": "Он сказал «простите» восемь раз. На девятый у него получилось неплохо.",
            "en": "He said “sorry” eight times. The ninth time it came out not bad at all."
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
`,Cr=`{
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
            "ru": "Чашка Принцессы Котлетки была ещё тёплая. Самой Принцессы Котлетки не было.",
            "en": "Princess Kotletka's cup was still warm. The Princess herself was gone."
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
          "speaker": "catElder",
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
          "speaker": "catElder",
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
`,wr=[`ru`,`en`],Tr=[`title`,`draft`,`price`,`room`,`guide`,`parts`,`journal`],Er=[`scene`,`background`,`music`,`steps`],Dr=[`task`,`games`,`thanks`,`line`],Or=[`text`,`speaker`,`name`,`emotion`,`side`,`background`,`icon`,`sound`,`music`,`illustration`],kr=[`speaker`,`name`,`emotion`,`side`,`background`,`icon`],H=e=>typeof e==`object`&&!!e&&!Array.isArray(e),U=e=>typeof e==`string`?`"${e}"`:JSON.stringify(e),Ar=(e,t)=>typeof e==`number`&&Number.isInteger(e)&&e>=t;function jr(e){let t=`char.${e}.`;return Pe(t).map(e=>e.slice(t.length))}function Mr(e,t,n=`${t}.json`){let r;try{r=JSON.parse(e)}catch(t){return{ok:!1,errors:[`${n}: ${zr(e,t)}`]}}return Nr(r,t,n)}function Nr(e,t,n=`${t}.json`){let r=[],i=(e,t)=>r.push(`${n}${e?`, ${e}`:``}: ${t}`);if(!H(e))return i(``,`файл должен быть объектом в фигурных скобках { … }`),{ok:!1,errors:r};Pr(e,Tr,``,i);let a=W(e.title,`title`,i),o=t===`prologue`;e.draft!==void 0&&typeof e.draft!=`boolean`&&i(`draft`,`черновик – true или false`);let s=e.price;Ar(s,0)?o&&s!==0&&i(`price`,`пролог бесплатный: цена должна быть 0`):i(`price`,`цена – целое число светлячков, 0 или больше (сейчас ${U(s)})`);let c=null;typeof e.room==`string`&&e.room in x?c=e.room:i(`room`,`неизвестная комната ${U(e.room)} (бывают: ${Object.keys(x).join(`, `)})`);let l=null;e.guide===void 0?o||i(`guide`,`кто провожает – например "roachYoung" (у пролога не нужен)`):o?i(`guide`,`у пролога проводника нет`):typeof e.guide==`string`&&e.guide in P?l=e.guide:i(`guide`,`неизвестный персонаж ${U(e.guide)} (бывают: ${Object.keys(P).join(`, `)})`);let u=[];if(!Array.isArray(e.parts)||e.parts.length<2)i(`parts`,`нужен список частей в квадратных скобках: сцена проводника, сцены и поручения`);else{let t=c?x[c].gameIds:[];e.parts.forEach((e,n)=>{let r=Fr(e,`часть ${n+1}`,t,i);r&&u.push(r)});let n=e.parts[0];H(n)&&n.task!==void 0&&i(`часть 1`,`первая часть – сцена проводника (у пролога – вступление), а не поручение`)}let d=[];return e.journal!==void 0&&(Array.isArray(e.journal)?e.journal.forEach((e,t)=>{let n=`journal, запись ${t+1}`;if(!H(e))return i(n,`{ "title": { "ru": "…", "en": "…" }, "text": { … }, "icon": "journal.…" }`);Pr(e,[`title`,`text`,`icon`],n,i);let r=W(e.title,`${n}, title`,i),a=W(e.text,`${n}, text`,i),o=Lr(e.icon,`${n}, icon`,i,!0);r&&a&&o&&d.push({title:r,text:a,icon:o})}):i(`journal`,`список записей: [ { "title": …, "text": …, "icon": "journal.…" }, … ]`)),r.length>0||!a||!c||typeof s!=`number`?{ok:!1,errors:r}:{ok:!0,chapter:{id:t,title:a,draft:e.draft===!0,price:s,room:c,guide:l,parts:u,journal:d}}}function Pr(e,t,n,r){for(let i of Object.keys(e))t.includes(i)||r(n,`неизвестное поле "${i}" (бывают: ${t.join(`, `)})`)}function Fr(e,t,n,r){if(!H(e))return r(t,`часть – объект в фигурных скобках: сцена { "scene": … } или поручение { "task": … }`),null;if(e.task!==void 0){Pr(e,Dr,t,r);let{task:i,games:a,thanks:o}=e,s=e.line===void 0?void 0:W(e.line,`${t}, line`,r),c=!0;typeof i==`string`&&n.includes(i)||(c=!1,r(`${t}, task`,`игра жильца этой комнаты (${n.join(`, `)||`–`}), а не ${U(i)}`)),Ar(a,1)||(c=!1,r(`${t}, games`,`сколько партий сыграть – целое число от 1 (сейчас ${U(a)})`)),o!==void 0&&!Ar(o,1)&&(c=!1,r(`${t}, thanks`,`цена «Отблагодарить светлячками» – целое число от 1 (сейчас ${U(o)}); нет поля – только партии`)),s===null&&(c=!1);let l={kind:`task`,game:i,games:a,thanks:o??null};return c?s?{...l,line:s}:l:null}Pr(e,Er,t,r),(typeof e.scene!=`string`||e.scene.trim()===``)&&r(`${t}, scene`,`имя сцены из библии – например "arrival"`);let i=Lr(e.background,`${t}, background`,r,!0),a=Rr(e.music,`${t}, music`,`music`,r),o=[];if(!Array.isArray(e.steps)||e.steps.length===0?r(`${t}, steps`,`нужен список шагов в квадратных скобках, хотя бы один шаг`):e.steps.forEach((e,n)=>{let i=Ir(e,`${t}, шаг ${n+1}`,r);i&&o.push(i)}),!i||typeof e.scene!=`string`)return null;let s={kind:`scene`,scene:e.scene,background:i,steps:o};return a&&(s.music=a),s}function Ir(e,t,n){if(!H(e))return n(t,`шаг должен быть объектом в фигурных скобках { … }`),null;Pr(e,Or,t,n);let r=W(e.text,`${t}, text`,n),i=Rr(e.sound,`${t}, sound`,`sfx`,n),a=Rr(e.music,`${t}, music`,`music`,n);if(e.illustration!==void 0){for(let r of kr)e[r]!==void 0&&n(t,`у иллюстрации не бывает поля "${r}" – она без портретов`);let o=Lr(e.illustration,`${t}, illustration`,n,!0);if(!o||!r)return null;let s={kind:`illustration`,illustration:o,text:r};return i&&(s.sound=i),a&&(s.music=a),s}let o={kind:`line`,text:r??{ru:``,en:``}};if(e.speaker!==void 0&&(typeof e.speaker==`string`&&e.speaker in P?o.speaker=e.speaker:n(t,`неизвестный персонаж ${U(e.speaker)} (бывают: ${Object.keys(P).join(`, `)})`)),e.name!==void 0){e.speaker===void 0&&n(t,`подпись (name) указана, а говорящего (speaker) нет`);let r=W(e.name,`${t}, name`,n);r&&(o.name=r)}if(e.emotion!==void 0){if(typeof e.emotion!=`string`)n(t,`эмоция – слово в кавычках, например "happy"`);else if(e.speaker===void 0)n(t,`эмоция указана, а говорящего (speaker) нет`);else if(o.speaker){let r=jr(o.speaker);r.length>0&&!r.includes(e.emotion)?n(t,`у персонажа "${o.speaker}" нет эмоции "${e.emotion}" (есть: ${r.join(`, `)})`):o.emotion=e.emotion}}e.side!==void 0&&(e.side===`left`||e.side===`right`?o.side=e.side:n(t,`сторона – "left" (слева) или "right" (справа), а не ${U(e.side)}`));let s=Lr(e.background,`${t}, background`,n,!1);s&&(o.background=s);let c=Lr(e.icon,`${t}, icon`,n,!1);return c&&(o.icon=c),i&&(o.sound=i),a&&(o.music=a),r?o:null}function W(e,t,n){if(!H(e))return n(t,`текст на двух языках: { "ru": "…", "en": "…" } (сейчас ${U(e)})`),null;let r=!0;for(let i of wr)(typeof e[i]!=`string`||e[i].trim()===``)&&(n(t,`нет текста на языке "${i}"`),r=!1);return r?e:null}function Lr(e,t,n,r){return e===void 0&&!r?null:typeof e==`string`&&b(e)?e:(n(t,`картинки ${U(e)} нет в манифесте (src/shared/assets/manifest.json)`),null)}function Rr(e,t,n,r){return e===void 0?null:typeof e==`string`&&e.startsWith(`${n}.`)&&ke(e)?e:(r(t,`${n===`sfx`?`звука`:`музыки`} ${U(e)} нет в манифесте (ключ должен начинаться с "${n}.")`),null)}function zr(e,t){let n=t instanceof Error?t.message:String(t),r=null,i=null,a=/line (\d+) column (\d+)/.exec(n),o=/position (\d+)/.exec(n);if(a)r=Number(a[1]),i=Number(a[2]);else if(o){let t=e.slice(0,Number(o[1])).split(`
`);r=t.length,i=(t[t.length-1]?.length??0)+1}let s=`проверьте запятые, кавычки и скобки рядом`;if(o!==null&&Number(o[1])>=e.trimEnd().length||/end of JSON|Unexpected end/i.test(n)?s=`файл обрывается: не хватает закрывающей скобки } или ]`:/double-quoted property name/i.test(n)?s=`лишняя запятая перед } или ], либо имя поля без кавычек`:/after (property value|array element)/i.test(n)?s=`пропущена запятая между полями или шагами`:/control character/i.test(n)?s=`внутри текста перенос строки – пишите текст в одну строку`:/Unexpected token/i.test(n)&&(s=`лишний или неверный символ (кавычки должны быть прямыми ")`),r===null)return`ошибка в записи JSON – ${s}`;let c=e.split(`
`);if(s.startsWith(`пропущена запятая`)&&/^\s*$/.test(c[r-1]?.slice(0,(i??1)-1)??``)){let e=r-1;for(;e>1&&(c[e-1]??``).trim()===``;)e--;if(e>=1)return`ошибка в записи JSON, конец строки ${e}: пропущена запятая\n    ${c[e-1]?.trim()??``}`}let l=c[r-1]?.trim()??``;return`ошибка в записи JSON, строка ${r}, столбец ${i}: ${s}\n    ${l}`}var Br=Object.assign({"../content/chapters/ch01.json":gr,"../content/chapters/ch02.json":_r,"../content/chapters/ch03.json":vr,"../content/chapters/ch04.json":yr,"../content/chapters/ch05.json":br,"../content/chapters/ch06.json":xr,"../content/chapters/ch07.json":Sr,"../content/chapters/prologue.json":Cr});function Vr(){let e={},t=[],n=_;for(let[r,i]of Object.entries(Br)){let a=r.split(`/`).pop()??r,o=a.replace(/\.json$/,``);if(!n.includes(o)){t.push(`${a}: такой главы нет в списке CHAPTER_ORDER (config/economy.ts): ${_.join(`, `)}`);continue}let s=Mr(i,o,a);s.ok?e[o]=s.chapter:t.push(...s.errors)}for(let e of _)`../content/chapters/${e}.json`in Br||t.push(`${e}.json: файла главы нет в src/content/chapters`);let r=new Map;for(let n of _){let i=e[n]?.room;if(!i)continue;let a=r.get(i);a?t.push(`${n}.json, room: комнату "${i}" уже открывает ${a}.json`):r.set(i,n)}return{chapters:e,errors:t}}var Hr=Vr(),Ur=Hr.chapters,Wr=Hr.errors;Wr.length>0&&console.error(`[story] Ошибки в главах:\n${Wr.join(`
`)}`);function G(e){return Ur[e]}function Gr(e){return _.find(t=>!e.includes(t))??null}function Kr(e){return _.indexOf(e)}function qr(e){return e.flatMap(e=>{let t=Ur[e]?.room;return t?[t]:[]})}function Jr(e){return _.find(t=>Ur[t]?.room===e)??null}function Yr(e){let t=_.indexOf(e);return t>0?_[t-1]??null:null}function Xr(e,t,n){let r=e.parts[t];if(r?.kind!==`task`)return null;if(r.line)return{text:r.line};let i=e.parts[t-1];if(i?.kind!==`scene`)return null;for(let e=i.steps.length-1;e>=0;e--){let t=i.steps[e];if(t?.kind===`line`&&t.speaker&&n.includes(t.speaker))return{text:t.text,speaker:t.speaker}}return null}function Zr(){return{started:[],seasons:{},owned:[]}}function Qr(){return{wall:ve(`wall`),floor:ve(`floor`),owned:[],furniture:{},smalls:[],scenes:[],quests:{},variants:{},shown:{},fresh:[]}}function $r(){return{language:`ru`,music:!0,sfx:!0,vibration:!0,notifications:{enabled:!0,hour:8,minute:0},gameOptions:{},levels:{},lessMotion:!1}}function ei(e){return{version:21,createdAt:e.toISOString(),settings:$r(),fireflies:0,chapters:[],items:[],counters:{games:0,wins:0,winsHard:0,winsByRoom:{}},stats:{},activeGame:null,secrets:[],litRooms:[],story:{},decor:Qr(),events:Zr()}}function ti(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function ni(e,t,n){return{...e,activeGame:{...t,state:null,startedAt:n.toISOString()}}}function ri(e,t){return e.activeGame?{...e,activeGame:{...e.activeGame,state:t}}:e}function ii(e){return{...e,activeGame:null}}function ai(e,t,n,r=[]){let i=e.activeGame;if(!i)return{save:e,fireflies:0};let a=se(t,i.difficulty),o=t===`win`,s=ti(n),c=e.stats[s]??{games:0,wins:0,fireflies:0},l=xi(e)?{games:e.counters.games+1,wins:e.counters.wins+ +!!o,winsHard:e.counters.winsHard+(o&&i.difficulty===`hard`?1:0),winsByRoom:{...e.counters.winsByRoom,[i.roomId]:(e.counters.winsByRoom[i.roomId]??0)+ +!!o}}:e.counters,u=pi(e,i.roomId,i.gameId),d={...Gi(e,i,o),story:u,fireflies:e.fireflies+a,counters:l,stats:{...e.stats,[s]:{games:c.games+1,wins:c.wins+ +!!o,fireflies:c.fireflies+a}},activeGame:null},f=tr(i.roomId,i.gameId),p=cr(i.roomId,f??`resident`,e.createdAt,i.difficulty);return{fireflies:a,save:Aa(d,n,{gameId:i.gameId,roomId:i.roomId,rival:p,host:f,outcome:t,achievements:r})}}function oi(e,t){return e.story[t]??{part:1,games:0}}function si(e,t){let n=G(t);return!n||!e.chapters.includes(t)?!1:oi(e,t).part>=n.parts.length}function ci(e,t){let n=G(t);if(!n||!e.chapters.includes(t))return null;let r=oi(e,t).part,i=n.parts[r];return i?{index:r,part:i}:null}function li(e,t){let n=ci(e,t);return n?.part.kind===`task`?n.part:null}function ui(e,t){let n=G(t),r=ci(e,t);if(!n||!r)return[];let i=[];for(let e=r.index;n.parts[e]?.kind===`scene`;e++)i.push(e);return i}function di(e,t,n){return{...e,story:{...e.story,[t]:n}}}function fi(e,t){let n=ui(e,t).at(-1);return n===void 0?e:di(e,t,{part:n+1,games:0})}function pi(e,t,n){let r=Jr(t);if(!r)return e.story;let i=li(e,r);if(!i||i.game!==n)return e.story;let a=oi(e,r),o=a.games+1;return{...e.story,[r]:o>=i.games?{part:a.part+1,games:0}:{part:a.part,games:o}}}function mi(e,t){let n=li(e,t);if(!n||n.thanks===null)return{ok:!1,error:`locked`};if(e.fireflies<n.thanks)return{ok:!1,error:`notEnough`,missing:n.thanks-e.fireflies};let r=oi(e,t);return{ok:!0,save:di({...e,fireflies:e.fireflies-n.thanks},t,{part:r.part+1,games:0})}}function hi(e){let t=Gr(e.chapters);if(!t||!G(t))return null;let n=Yr(t);return n&&si(e,n)?t:null}function gi(e){let t=hi(e),n=t?Yr(t):null;return n?G(n)?.room??null:null}function _i(e,t){if(e.chapters.includes(t))return{ok:!1,error:`owned`};let n=G(t);return n?t!==`prologue`&&hi(e)!==t?{ok:!1,error:`locked`}:e.fireflies<n.price?{ok:!1,error:`notEnough`,missing:n.price-e.fireflies}:{ok:!0,save:di({...e,fireflies:e.fireflies-n.price,chapters:[...e.chapters,t],litRooms:[...new Set([...e.litRooms,...bi(e)])]},t,{part:1,games:0})}:{ok:!1,error:`unknown`}}function vi(e,t){if(bi(e).has(t))return null;let n=Jr(t);return n&&hi(e)===n?{kind:`guide`,chapter:n}:{kind:`notYet`}}function K(e){let t=_[_.length-1];return t!==void 0&&si(e,t)}function yi(e){return _.filter(t=>si(e,t))}function bi(e){return new Set([...He,...qr(e.chapters)])}function xi(e){return K(e)}var Si=`tower`;function Ci(e){return e.secrets.includes(Si)}function wi(e){return K(e)&&!Ci(e)}function Ti(e,t,n,r){let i={...e.settings.gameOptions,[t]:{...e.settings.gameOptions[t],[n]:r}};return{...e,settings:{...e.settings,gameOptions:i}}}function Ei(e,t,n){return e.settings.levels[t]===n?e:{...e,settings:{...e.settings,levels:{...e.settings.levels,[t]:n}}}}var Di=(e,t)=>e.secrets.includes(`rules:${t}`),Oi=(e,t)=>ki(e,`rules:${t}`);function ki(e,t){return e.secrets.includes(t)?e:{...e,secrets:[...e.secrets,t]}}function Ai(e){return[...bi(e)].find(t=>!e.litRooms.includes(t))??null}function ji(e,t){return e.litRooms.includes(t)?e:{...e,litRooms:[...e.litRooms,t]}}function Mi(e){return e.chapters.length>0||e.fireflies>0||e.counters.games>0||e.activeGame!==null}function Ni(e,t){return{...ei(t),settings:e.settings,chapters:[`prologue`],story:{prologue:{part:1,games:0}}}}function q(e,t){let n=j(t);return n?n.kind===`finish`?e.decor.owned.includes(`${n.decor}:${n.variant}`):n.source===`shop`?e.items.includes(t):n.kind===`furniture`?t in e.decor.furniture:e.decor.smalls.includes(t):!1}function Pi(e){if(!e.decor.scenes.includes(`intro`))return-1;let t=A.findIndex(t=>t.items.some(t=>!q(e,t)));return t<0?A.length:t}function Fi(e,t){let n=j(t);if(!n)return!1;if(n.source===`shop`)return xi(e)&&qt(n);let r=Pi(e);return r>=0&&A.findIndex(e=>e.id===n.batch)<=r}function Ii(e){let t=e.decor.scenes;if(!t.includes(`intro`))return`intro`;let n=Pi(e);for(let e=0;e<Math.min(n,A.length-1);e++){let n=`batch:${A[e].id}`;if(!t.includes(n))return n}return n>=A.length&&!t.includes(`outro`)?`outro`:null}function Li(e,t){return e.decor.scenes.includes(t)?e:{...e,decor:{...e.decor,scenes:[...e.decor.scenes,t]}}}function Ri(e){return e.secrets.includes(`moth`)}function zi(e,t){let n=j(t)?.quest;return!!n&&(n.giver!==`moth`||Ri(e))}function Bi(e,t){return e.decor.quests[t]??0}function Vi(e,t){let n=j(t)?.quest;return!!n&&zi(e,t)&&Bi(e,t)>=n.count}function Hi(e,t){return zi(e,t)&&Fi(e,t)&&!q(e,t)}function Ui(e){return Nt.filter(t=>t.quest&&Hi(e,t.id))}function Wi(e,t,n){return e.what===`wins`&&!n||e.gameId!==null&&e.gameId!==t.gameId||e.room!==null&&e.room!==t.roomId?!1:e.difficulty===null||e.difficulty===t.difficulty}function Gi(e,t,n){let r=e.decor.quests;for(let i of Nt){let a=i.quest;if(!a||!Wi(a,t,n)||!Hi(e,i.id))continue;let o=r[i.id]??0;o<a.count&&(r={...r,[i.id]:o+1})}return r===e.decor.quests?e:{...e,decor:{...e.decor,quests:r}}}function Ki(e,t){let n=j(t);return n?n.event?Math.round((n.price??0)*ue):n.source===`shop`||n.price!==null?n.price??0:Vi(e,t)?0:n.skipPrice??0:0}function qi(e,t){return j(t)?.source===`shop`&&zi(e,t)&&!Vi(e,t)}function Ji(e,t){let n=j(t);if(!n)return null;if(n.kind===`variant`){if(n.variantOf.some(t=>q(e,t)))return null;let t=j(n.variantOf[0]??``);return t&&(t.kind===`furniture`||t.kind===`small`)?t:null}let r=n.requires?zt(n.requires):void 0;return r&&!q(e,r.id)?r:null}function Yi(e,t){if(!Fi(e,t)||Ji(e,t)||qi(e,t))return{ok:!1,error:`locked`};let n=Ki(e,t);return e.fireflies<n?{ok:!1,error:`notEnough`,missing:n-e.fireflies}:{ok:!0,save:{...e,fireflies:e.fireflies-n}}}function Xi(e,t){return Qt(e,t)?.price??0}function Zi(e,t,n){return n===ve(t)||e.decor.owned.includes(`${t}:${n}`)}function Qi(e,t,n){let r=Qt(t,n);return Zi(e,t,n)||!!r&&Fi(e,r.id)}function $i(e,t,n){if(!v[t].some(e=>e.id===n))return{ok:!1,error:`unknown`};if(Zi(e,t,n))return{ok:!0,save:{...e,decor:{...e.decor,[t]:n}}};let r=Qt(t,n);if(!r)return{ok:!1,error:`unknown`};let i=Yi(e,r.id);return i.ok?{ok:!0,save:{...i.save,decor:{...i.save.decor,[t]:n,owned:[...i.save.decor.owned,`${t}:${n}`]}}}:i}function ea(e,t){if(!(t in e))return e;let n={...e};return delete n[t],n}function ta(e,t){let n=Ht(t);return n?{...e,decor:{...e.decor,shown:{...e.decor.shown,[n]:t}}}:e}function na(e,t,n){let r=zt(t);if(!r||!Fa(e,r).includes(n))return{ok:!1,error:`unknown`};let i={...e.decor.furniture,[t]:n},a=ea(e.decor.variants,t);if(q(e,t))return{ok:!0,save:{...e,decor:{...e.decor,furniture:i,variants:a}}};let o=Yi(e,t);if(!o.ok)return o;let s=r.source===`shop`?[...o.save.items,t]:o.save.items;return{ok:!0,save:ta({...o.save,items:s,decor:{...o.save.decor,furniture:i,variants:a}},t)}}function ra(e,t){let n=j(t);if(n?.kind!==`small`||n.source!==`list`||e.decor.smalls.includes(t))return{ok:!1,error:`unknown`};let r=Yi(e,t);return r.ok?{ok:!0,save:ta({...r.save,decor:{...r.save.decor,smalls:[...r.save.decor.smalls,t]}},t)}:r}function ia(e,t,n=Ut(t),r=null){if(r&&q(e,r))return null;let i=e.decor.shown[t];return i&&n.includes(i)&&q(e,i)?i:C(t)?null:n.find(t=>q(e,t))??null}function aa(e,t,n){if(!Wt(t))return{ok:!1,error:`unknown`};if(n===null){if(!C(t))return{ok:!1,error:`unknown`};let n={...e.decor.shown};return delete n[t],{ok:!0,save:{...e,decor:{...e.decor,shown:n}}}}return!Ut(t).includes(n)||!q(e,n)?{ok:!1,error:`locked`}:{ok:!0,save:{...e,decor:{...e.decor,shown:{...e.decor.shown,[t]:n}}}}}function oa(e,t,n,r){let i=aa(e,t,n);if(!i.ok)return i;let a=j(n);return r.startsWith(`v:`)?ca(i.save,n,r.slice(2)):a?.kind===`furniture`?na(i.save,n,M(a,r)):ca(i.save,n,null)}function sa(e,t){return Jt(t).filter(t=>e.items.includes(t.id)&&qt(t))}function ca(e,t,n){let r=j(t);return!r||r.kind!==`furniture`&&r.kind!==`small`||!q(e,t)?{ok:!1,error:`unknown`}:n===null?{ok:!0,save:{...e,decor:{...e.decor,variants:ea(e.decor.variants,t)}}}:sa(e,t).some(e=>e.id===n)?{ok:!0,save:{...e,decor:{...e.decor,variants:{...e.decor.variants,[t]:n}}}}:{ok:!1,error:`locked`}}function la(e,t,n){let r=j(t)?.event;if(r&&!(n&&Ma(e,n,r)))return{ok:!1,error:`locked`};let i=fa(e,t);return i.ok?{ok:!0,save:{...i.save,decor:{...i.save.decor,fresh:[...i.save.decor.fresh.filter(e=>e!==t),t]}}}:i}function ua(e,t){let n=e.decor.fresh.filter(e=>!t.includes(e));return n.length===e.decor.fresh.length?e:{...e,decor:{...e.decor,fresh:n}}}function da(e){return e.decor.fresh.filter(t=>{let n=j(t);return!n||!q(e,t)?!1:n.kind!==`variant`||Object.values(e.decor.variants).includes(t)})}function fa(e,t){let n=j(t);if(!n||n.source!==`shop`)return{ok:!1,error:`unknown`};if(q(e,t))return{ok:!1,error:`owned`};if(n.kind===`finish`)return $i(e,n.decor,n.variant);if(n.kind===`furniture`)return na(e,t,M(n,void 0));let r=Yi(e,t);if(!r.ok)return r;let i={...r.save,items:[...r.save.items,t]};if(n.kind===`small`)return{ok:!0,save:ta(i,t)};let a=n.variantOf.find(t=>q(e,t));return{ok:!0,save:a?{...i,decor:{...i.decor,variants:{...i.decor.variants,[a]:t}}}:i}}function pa(e){let t={...e.decor.quests},n={...e.decor.furniture},r=[...e.decor.smalls],i=e=>{let t=j(e);t&&t.source===`list`&&(t.kind===`furniture`&&!(e in n)&&(n[e]=M(t,void 0)),t.kind===`small`&&!r.includes(e)&&(t.requires&&i(t.requires),r.push(e)))};for(let e of Pt)e.quest&&(t[e.id]=Math.max(t[e.id]??0,e.quest.count)),e.kind===`variant`?e.variantOf.forEach(i):e.requires&&i(e.requires);return{...e,fireflies:Math.max(e.fireflies,le),decor:{...e.decor,quests:t,furniture:n,smalls:r}}}var ma=`winter`;function ha(e,t,n){let r=t;for(;r<e.quest.length&&e.quest[r]?.requires===`storyDone`&&!n;)r++;return r}function ga(e,t){return{step:ha(e,0,t),done:[],scenes:[],marks:[]}}var _a=(e,t,n)=>ha(e,t.step,n)>=e.quest.length;function va(e,t,n){let r=K(e),i=null,a=-1/0;for(let[r,o]of Object.entries(e.events.seasons)){let e=Yn(t,r);e!==null&&e<n&&e>a&&(i=o,a=e)}return i&&!_a(t,i,r)?{...i,done:[...i.done],scenes:[...i.scenes],marks:[...i.marks]}:ga(t,r)}function ya(e,t){let n=e.events;for(let r of Wn){let i=qn(r,t);if(i===null)continue;let a=Jn(r,i);n.started.includes(a)||(n={...n,started:[...n.started,a]}),r.quest.length>0&&!(a in n.seasons)&&(n={...n,seasons:{...n.seasons,[a]:va({...e,events:n},r,i)}})}return n===e.events?e:{...e,events:n}}function ba(e,t,n){let r=Gn(t);if(!r)return null;let i=Qn(r,n,e.events.started);return i===null?null:Jn(r,i)}function J(e,t,n=ma){let r=ba(e,n,t),i=Gn(n);if(!r||!i||i.quest.length===0)return null;let a=K(e),o=e.events.seasons[r]??va(e,i,Yn(i,r)??0),s=ha(i,o.step,a);return{ev:i,key:r,season:o,step:i.quest[s]??null,storyDone:a}}function xa(e,t){let n=J(e,t);return n!==null&&n.step===null}function Sa(e,t){return J(e,t)?.step?.room??null}var Ca=(e,t)=>t.kind===`furnish`?e.place===`furnish`:e.place===`room`&&e.room===t.room;function wa(e,t,n){let r=J(e,t);if(!r)return null;let i=e=>e===null||r.season.scenes.includes(e),a=[...r.season.done].sort((e,t)=>t-e).map(e=>r.ev.quest[e]).find(e=>e&&Ca(e,n)&&!i(e.outro));return a?.outro?a.outro:r.step&&Ca(r.step,n)&&!i(r.step.intro)?r.step.intro:null}function Ta(e,t,n){let r=J(e,t),i=r?.step;return!r||!i?.task||i.place!==`room`||i.room!==n||!r.season.scenes.includes(i.intro)?null:{text:i.task,by:i.taskBy}}function Ea(e,t,n){return{...e,events:{...e.events,seasons:{...e.events.seasons,[t.key]:n}}}}function Da(e,t){let n=t.step;if(!n)return e;let r=Ea(e,t,{...t.season,step:ha(t.ev,n.index+1,t.storyDone),done:t.season.done.includes(n.index)?t.season.done:[...t.season.done,n.index],marks:[]});return n.prize?{...r,fireflies:r.fireflies+60}:r}function Oa(e,t){let n=J(e,t);return n?Da(e,n):e}function ka(e,t,n){let r=J(e,t);if(!r?.step)return e;let i=r.season.scenes.includes(n)?r.season:{...r.season,scenes:[...r.season.scenes,n]},a=Ea(e,r,i);return n===r.step.intro?(r.step.discover&&!a.secrets.includes(r.step.discover)&&(a={...a,secrets:[...a.secrets,r.step.discover]}),r.step.goal.kind===`scene`?Da(a,{...r,season:i}):a):a}function Aa(e,t,n){let r=J(e,t),i=r?.step?.goal;if(!r?.step||!i||!r.season.scenes.includes(r.step.intro))return e;switch(i.kind){case`scene`:return e;case`play`:return(!i.games||i.games.includes(n.gameId))&&(!i.host||i.host===n.host)&&(!i.win||n.outcome===`win`)?Da(e,r):e;case`achieve`:return i.games.includes(n.gameId)&&n.achievements.includes(i.achievement)?Da(e,r):e;case`playEach`:{if(!i.rivals.includes(n.rival)||r.season.marks.includes(n.rival))return e;let t=[...r.season.marks,n.rival],a={...r.season,marks:t};return i.rivals.every(e=>t.includes(e))?Da(Ea(e,r,a),{...r,season:a}):Ea(e,r,a)}}}function ja(e,t){if(!ba(e,`winter`,t))return dr;let n=new Set([`spider`]),r=new Set([`living`]),i=J(e,t);for(let e of i?.season.done??[]){let t=i?.ev.quest[e];t?.festive.chars.forEach(e=>n.add(e)),t?.festive.rooms.forEach(e=>r.add(e))}return{chars:n,rooms:r,tower:K(e),start:!0}}function Ma(e,t,n=ma){return ba(e,n,t)!==null&&xi(e)}var Na=e=>`${S}:${e}`;function Pa(e,t){return e.events.owned.includes(Na(t))}function Fa(e,t){return t.festive&&Pa(e,t.id)?[...t.styles,S]:[...t.styles]}function Ia(e){let t=zt(e);return t?Math.round((t.price??t.skipPrice??0)*ue):0}function La(e){return Ft.filter(t=>t.festive&&q(e,t.id))}function Ra(e,t,n){let r=zt(t);if(!r||!r.festive)return{ok:!1,error:`unknown`};if(Pa(e,t))return{ok:!1,error:`owned`};if(!Ma(e,n)||!q(e,t))return{ok:!1,error:`locked`};let i=Ia(t);return e.fireflies<i?{ok:!1,error:`notEnough`,missing:i-e.fireflies}:{ok:!0,save:{...e,fireflies:e.fireflies-i,events:{...e.events,owned:[...e.events.owned,Na(t)]},decor:{...e.decor,furniture:{...e.decor.furniture,[t]:S},variants:ea(e.decor.variants,t)}}}}function za(e,t){let n=J(e,t);if(!n?.storyDone)return null;let r=-1;return n.ev.quest.forEach((e,t)=>{e.tree&&n.season.done.includes(t)&&(r=Math.max(r,wn.indexOf(e.tree)))}),wn[r]??null}var Ba={mice:`mouse`,mosquitoes:`mosquitoCabin`};function Va(e,t,n){let r=Ba[n]??n,i=J(e,t),a=i?.ev.lines[r];if(!i||!a||a.storyOnly&&!i.storyDone)return null;let o=i.ev.quest.findIndex(e=>e.prize);if(i.step===null||o>=0&&i.season.done.includes(o))return`final`;let s=i.ev.quest.findIndex(e=>e.festive.chars.includes(r));return s>=0&&i.season.done.includes(s)?`after`:`before`}function Ha(e,t,n,r){let i=Ba[n]??n,a=Va(e,t,i);if(!a||r>=.6666666666666666)return null;let o=Gn(`winter`)?.lines[i]?.[a]??[];return o[Math.min(o.length-1,Math.floor(r/.6666666666666666*o.length))]??null}function Ua(e,t=ma){let n=Gn(t);if(!n)return[];let r=new Set;for(let[t,i]of Object.entries(e.events.seasons))Yn(n,t)!==null&&i.done.forEach(e=>r.add(e));return n.quest.filter((e,t)=>r.has(t))}var Wa=/^(\d{4})-(\d{2})-(\d{2})$/;function Ga(){return null}var Ka=Ga(),Y={now(){let e=new Date,t=Ka?Wa.exec(Ka):null;return t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3]),e.getHours(),e.getMinutes(),e.getSeconds()):e},devToday(){return Ka},setDevToday(e){}},qa=e=>e,Ja=ae()((e,t)=>{let n=n=>e({save:n(t().save)});return{ready:!1,save:ei(Y.now()),today:ti(Y.now()),hydrate:t=>e({save:qa(t),ready:!0}),startGame:e=>n(t=>ni(t,e,Y.now())),updateGameState:e=>n(t=>ri(t,e)),abandonGame:()=>n(ii),finishGame:(n,r)=>{let i=ai(t().save,n,Y.now(),r);return e({save:i.save}),i.fireflies},buyChapter:n=>{let r=_i(t().save,n);return r.ok&&e({save:r.save}),r},finishScenes:e=>n(t=>fi(t,e)),thankResident:n=>{let r=mi(t().save,n);return r.ok&&e({save:r.save}),r},devUnlockShop:()=>n(e=>pa(e)),buyShopItem:n=>{let r=la(t().save,n,Y.now());return r.ok&&e({save:r.save}),r},applyDecor:(n,r)=>{let i=$i(t().save,n,r);return i.ok&&e({save:i.save}),i},placeFurniture:(n,r)=>{let i=na(t().save,n,r);return i.ok&&e({save:i.save}),i},buySmall:n=>{let r=ra(t().save,n);return r.ok&&e({save:r.save}),r},setHwVariant:(n,r)=>{let i=ca(t().save,n,r);return i.ok&&e({save:i.save}),i},setHwShown:(n,r)=>{let i=aa(t().save,n,r);return i.ok&&e({save:i.save}),i},chooseHwLook:(n,r,i)=>{let a=oa(t().save,n,r,i);return a.ok&&e({save:a.save}),a},markHwScene:e=>n(t=>Li(t,e)),markHwSeen:e=>n(t=>ua(t,e)),updateSettings:e=>n(t=>({...t,settings:{...t.settings,...e}})),discoverSecret:e=>n(t=>ki(t,e)),markRulesSeen:e=>n(t=>Oi(t,e)),setGameOption:(e,t,r)=>n(n=>Ti(n,e,t,r)),setGameLevel:(e,t)=>n(n=>Ei(n,e,t)),lightRoom:e=>n(t=>ji(t,e)),newGame:()=>n(e=>qa(Ni(e,Y.now()))),debugAddFireflies:()=>n(e=>({...e,fireflies:e.fireflies+50})),readQuestScene:e=>n(t=>ka(t,Y.now(),e)),devCompleteQuestStep:()=>n(e=>Oa(e,Y.now())),buyFestiveStyle:n=>{let r=Ra(t().save,n,Y.now());return r.ok&&e({save:r.save}),r},noteEvents:n=>e({save:ya(t().save,n),today:ti(n)}),debugReset:()=>e({save:ei(Y.now())})}});function Ya(e){"@babel/helpers - typeof";return Ya=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ya(e)}function Xa(e,t){if(Ya(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ya(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Za(e){var t=Xa(e,`string`);return Ya(t)==`symbol`?t:t+``}function X(e,t,n){return(t=Za(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qa={"sfx.error":{key:`sfx.wood`,pitch:-12}},$a=e=>Math.min(1,Math.max(0,e)),eo=class{constructor(){X(this,`ctx`,null),X(this,`unlocked`,!1),X(this,`suspended`,!1),X(this,`musicEnabled`,!0),X(this,`sfxEnabled`,!0),X(this,`hushed`,!1),X(this,`music`,null),X(this,`wantedMusic`,null),X(this,`playingMusic`,null),X(this,`buffers`,new Map),X(this,`pendingPreload`,new Set),X(this,`warned`,new Set)}unlock(){if(!this.unlocked){this.unlocked=!0;try{let e=window.AudioContext??window.webkitAudioContext;e&&(this.ctx=new e)}catch(e){console.warn(`[audio] no AudioContext`,e)}if(this.applyMusic(),this.pendingPreload.size>0){let e=[...this.pendingPreload];this.pendingPreload.clear(),this.preload(e)}}}setMusicEnabled(e){this.musicEnabled=e,this.applyMusic()}setSfxEnabled(e){this.sfxEnabled=e}playMusic(e){this.wantedMusic=e,this.applyMusic()}preload(e){return this.ctx?Promise.all(e.map(e=>this.ensure(e))).then(()=>void 0):(e.forEach(e=>this.pendingPreload.add(e)),Promise.resolve())}playSfx(e,t={}){if(!this.sfxEnabled||!this.ctx||this.suspended||this.hushed)return;let n=this.lookup(e);n!==`loading`&&(n===`unknown`?this.ensure(e).then(()=>{this.lookup(e)!==`unknown`&&this.playSfx(e,t)}):n&&this.start(n,t,this.ctx.currentTime))}playSequence(e){if(!this.sfxEnabled||!this.ctx||this.suspended||this.hushed||e.length===0)return;let t=e.map(e=>({...e,key:typeof e.sound==`string`?e.sound:to(e.sound)}));this.preload(t.map(e=>e.key)).then(()=>{if(!this.ctx||!this.sfxEnabled||this.suspended||this.hushed)return;let e=this.ctx.currentTime+.02,n=e;t.forEach((t,r)=>{let i=r===0?e:t.at===void 0?n+(t.wait??0)/1e3:e+t.at/1e3,a=this.lookup(t.key),o=a&&typeof a==`object`?this.start(a,t,i):0;e=i,n=i+o})})}hush(e){this.hushed=e}suspend(){this.suspended=!0,this.music?.pause(),this.ctx?.suspend().catch(()=>void 0)}resume(){this.suspended=!1,this.ctx?.resume().catch(()=>void 0),this.applyMusic()}applyMusic(){let e=this.musicEnabled&&this.unlocked&&!this.suspended?this.wantedMusic:null;if(e===null)this.music?.pause(),this.musicEnabled||(this.playingMusic=null);else{if(this.playingMusic===null||Ne(this.playingMusic)!==Ne(e)||!this.music){this.music?.pause();let t=new Audio(Ne(e));t.loop=!0,t.volume=.5,t.addEventListener(`error`,()=>console.info(`[audio] нет файла музыки ${e} – тишина`)),this.music=t,this.playingMusic=e}this.music.play().catch(()=>void 0)}}lookup(e){let t=this.buffers.get(e);if(t===void 0)return`unknown`;if(t instanceof AudioBuffer)return{buffer:t,volume:1,pitch:0};if(t!==`missing`)return`loading`;let n=Qa[e],r=n?this.buffers.get(n.key):void 0;return n&&r===void 0?`unknown`:n&&r instanceof AudioBuffer?{buffer:r,volume:n.volume??1,pitch:n.pitch??0}:n&&r!==`missing`?`loading`:null}async ensure(e){await this.load(e);let t=Qa[e];this.buffers.get(e)===`missing`&&t&&await this.load(t.key)}load(e){let t=this.buffers.get(e);if(t instanceof Promise)return t;if(t!==void 0)return Promise.resolve();let n=(async()=>{try{let t=await fetch(Ne(e));if(!t.ok)throw Error(String(t.status));let n=await t.arrayBuffer();if(!this.ctx)throw Error(`no ctx`);this.buffers.set(e,await this.ctx.decodeAudioData(n))}catch{this.buffers.set(e,`missing`)}})();return this.buffers.set(e,n),n}start(e,t,n){if(!this.ctx)return 0;let r=this.ctx.createBufferSource();r.buffer=e.buffer;let i=2**(((t.pitch??0)+e.pitch)/12);r.playbackRate.value=i;let a=$a((t.volume??1)*e.volume);if(a<1){let e=this.ctx.createGain();e.gain.value=a,r.connect(e).connect(this.ctx.destination)}else r.connect(this.ctx.destination);return r.start(n),e.buffer.duration/i}};function to(e){return e[Math.floor(Math.random()*e.length)]??e[0]}var Z=new eo;function no(e){let t=Math.abs(e)%10,n=Math.abs(e)%100;return t===1&&n!==11?0:t>=2&&t<=4&&(n<12||n>14)?1:2}var ro={nom:[`светлячок`,`светлячка`,`светлячков`],acc:[`светлячка`,`светлячка`,`светлячков`]};function io(e,t,n=`nom`){return e===`en`?`${t} ${t===1?`firefly`:`fireflies`}`:`${t} ${ro[n][no(t)]}`}var ao={ru:{"app.loading":`Загрузка…`,"common.back":`Назад`,"common.ok":`Хорошо`,"common.cancel":`Отмена`,"common.yes":`Да`,"common.no":`Нет`,"start.title":`Паутинка`,"start.subtitle":`маленькое приключение`,"start.continue":`Продолжить игру`,"start.new":`Новая игра`,"start.newWarning":`Ваш прогресс будет сброшен, а светлячки улетят. Вы уверены?`,"start.newConfirmYes":`Да, начать заново`,"house.turn":`Обойти дом`,"house.front":`Фасад`,"house.back":`Задний двор`,"house.here":`Здесь Паучок: недоигранная партия`,"house.guideTitle":`Комната «{room}»`,"house.guideHint":`Можно заплатить проводнику прямо здесь.`,"house.nextChapter":`Глава {n}`,"house.prologue":`Пролог`,"house.shop":`Лавка`,"house.settings":`Настройки`,"start.soundOff":`Выключить звук`,"start.soundOn":`Включить звук`,"house.chapters":`Главы`,"house.journal":`Журнал`,"chapter.buyTitle":`Новая глава`,"chapter.notEnough":`Нужно ещё {count}. Сыграйте пару партий в комнатах!`,"chapter.soon":`Следующая глава скоро появится.`,"chapter.guideWaits":`Проводник ждёт в комнате «{room}».`,"chapter.helpFirst":`Сначала помогите жильцу в комнате «{room}».`,"journal.empty":`Пока пусто. Следы и знаки появятся, когда жильцы расскажут, что видели.`,"furnish.title":`Новоселье`,"furnish.list":`Список Принцессы Котлетки`,"furnish.wall":`Обои`,"furnish.floor":`Пол`,"furnish.current":`Сейчас`,"furnish.bought":`Куплено`,"furnish.buy":`Купить`,"furnish.put":`Поставить`,"furnish.missing":`Нужно ещё`,"furnish.free":`Даром`,"furnish.take":`Забрать`,"furnish.sheet":`Лист {n} из {total}`,"furnish.done":`Весь список куплен. Котлетка думает, чего ещё не хватает.`,"furnish.window":`Окно`,"furnish.windowPlain":`Обычное окно`,"furnish.stairs":`Лестница на чердак`,"furnish.zones":`Части комнаты`,"furnish.zone.living":`Гостиная`,"furnish.zone.dining":`Кухня-столовая`,"furnish.zone.bedroom":`Спальня`,"game.rules":`Правила`,"game.hint":`Подсказка`,"game.giveUp":`Сдаться`,"game.giveUpText":`Сдаться? Партия закончится, но за старание вы получите {count}.`,"game.giveUpYes":`Да, сдаться`,"game.rulesGotIt":`Понятно`,"game.keepPlaying":`Играть дальше`,"room.residents":`Здесь живут`,"room.soon":`Скоро здесь будет игра`,"room.roaches":`Тараканчики`,"room.play":`Играть`,"room.continue":`Продолжить партию`,"room.shopSign":`Лавка Енота`,"room.difficulty":`Сложность`,"room.opponent":`Соперник`,"room.quests":`Просьба жителя`,"room.thanks":`Договориться`,"room.thanksConfirm":`Договориться: {price} вместо партий?`,"room.thanksYes":`Да, договориться`,"room.towerLook":`Посмотреть`,"room.chooseGame":`Выбор игры`,"room.newGame":`Новая игра`,"room.newGameConfirm":`Начатая партия пропадёт. Начать новую?`,"room.newGameYes":`Да, начать новую`,"difficulty.easy":`Легко`,"difficulty.medium":`Средне`,"difficulty.hard":`Трудно`,"opponent.solo":`Один`,"opponent.ai":`Компьютер`,"result.win":`Победа!`,"result.loss":`В этот раз не вышло`,"result.draw":`Ничья`,"result.earned":`Вы поймали {count}!`,"result.again":`Ещё раз`,"result.toRoom":`В комнату`,"story.next":`Дальше`,"story.finish":`Закончить`,"story.roomUnlocked":`Открыта новая комната: {room}`,"story.payText":`{who} проводит в комнату «{room}».`,"story.pay":`Идём`,"story.later":`Позже`,"story.journalAdded":`В журнал записаны {items}.`,"story.and":` и `,"story.skip":`Пропустить`,"story.errors":`Ошибки в файлах глав (src/content/chapters) – эти главы не откроются:`,"shop.locked":`Лавка откроется, когда Паучок спасёт Принцессу Котлетку.`,"shop.buy":`Купить`,"shop.owned":`Уже есть`,"shop.progress":`Куплено {owned} из {total}`,"shop.title":`Лавка Енота`,"shop.room":`Для комнаты`,"shop.variants":`Другой вид`,"shop.holiday":`К празднику`,"shop.holidayNote":`Только пока идёт праздник – и со скидкой. Купленное остаётся навсегда.`,"shop.variantOf":`Другой вид: {names}`,"shop.needs":`Сначала нужно: {name}`,"shop.put":`Сменить вид можно в комнате Принцессы Котлетки.`,"quest.times.0":`раз`,"quest.times.1":`раза`,"quest.times.2":`раз`,"quest.games.0":`партию`,"quest.games.1":`партии`,"quest.games.2":`партий`,"quest.win.game":`победить {n} в игре «{game}»`,"quest.win.room":`победить {n} в комнате «{room}»`,"quest.win.any":`победить {n} в любых играх`,"quest.play.game":`сыграть {n} в игру «{game}»`,"quest.play.room":`сыграть {n} в комнате «{room}»`,"quest.play.any":`сыграть {n} в любые игры`,"quest.level":`{what}, уровень «{level}»`,"quest.dream.spider":`Мечта Паучка`,"quest.dream.kotletka":`Мечта Принцессы Котлетки`,"quest.line":`{who}: {what} ({progress}/{count})`,"settings.title":`Настройки`,"settings.soundSection":`Звук и отклик`,"settings.morningSection":`Доброе утро`,"settings.wishes":`Пожелания`,"settings.wishesNote":`приходят каждое утро`,"settings.enabled":`включено`,"settings.disabled":`выключено`,"settings.aboutSection":`Об игре`,"settings.version":`Версия {version} · сборка {build}`,"settings.language":`Язык`,"settings.music":`Музыка`,"settings.sfx":`Звуки`,"settings.vibration":`Вибрация`,"settings.lessMotion":`Меньше анимации`,"settings.lessMotionNote":`без падающего снега и мигания`,"settings.devToday":`Сегодня (только разработка)`,"settings.devTodayReset":`Настоящая дата`,"settings.devQuest":`Квест: шаг {step}`,"settings.devQuestNone":`Квест: события сейчас нет или он пройден`,"settings.devQuestDo":`Выполнить шаг`,"event.title":`Подготовка к празднику`,"journal.tabStory":`Следы`,"journal.tabWinter":`Зима`,"event.prize":`Праздник готов! Награда: {count}`,"event.mark":`Здесь ждут Паучка`,"settings.notifications":`Уведомления`,"settings.notificationTime":`Время`,"settings.on":`Вкл`,"settings.off":`Выкл`,"settings.notificationsDenied":`Телефон запретил уведомления. Разрешите их в настройках Android.`,"stats.title":`Статистика`,"stats.date":`День`,"stats.games":`Партий`,"stats.wins":`Побед`,"stats.fireflies":`Светлячков`,"stats.total":`Всего поймано светлячков: {n}`,"stats.empty":`Пока нет сыгранных партий.`,"stats.debug":`Для разработчика`,"stats.sky":`Небо над домом`,"sky.auto":`Авто`,"sky.dawn":`Рассвет`,"sky.day":`День`,"sky.dusk":`Закат`,"sky.night":`Ночь`,"stats.addFireflies":`+{count}`,"stats.reset":`Стереть сохранение`,"stats.resetConfirm":`Точно стереть весь прогресс? Это нельзя отменить.`},en:{"app.loading":`Loading…`,"common.back":`Back`,"common.ok":`OK`,"common.cancel":`Cancel`,"common.yes":`Yes`,"common.no":`No`,"start.title":`Webbyx`,"start.subtitle":`a little adventure`,"start.continue":`Continue`,"start.new":`New game`,"start.newWarning":`Your progress will be reset and your fireflies will fly away. Are you sure?`,"start.newConfirmYes":`Yes, start over`,"house.turn":`Walk around the house`,"house.front":`Front`,"house.back":`Backyard`,"house.here":`The Spider is here: unfinished game`,"house.guideTitle":`The {room}`,"house.guideHint":`You can pay the guide right here.`,"house.nextChapter":`Chapter {n}`,"house.prologue":`Prologue`,"house.shop":`Shop`,"house.settings":`Settings`,"start.soundOff":`Turn sound off`,"start.soundOn":`Turn sound on`,"house.chapters":`Chapters`,"house.journal":`Journal`,"chapter.buyTitle":`New chapter`,"chapter.notEnough":`You need {count} more. Play a few games in the rooms!`,"chapter.soon":`The next chapter is coming soon.`,"chapter.guideWaits":`The guide is waiting in the {room}.`,"chapter.helpFirst":`First help the resident of the {room}.`,"journal.empty":`Nothing yet. Traces and signs appear once the residents tell what they saw.`,"furnish.title":`Housewarming`,"furnish.list":`Princess Kotletka’s list`,"furnish.wall":`Wallpaper`,"furnish.floor":`Floor`,"furnish.current":`Now`,"furnish.bought":`Bought`,"furnish.buy":`Buy`,"furnish.put":`Put in`,"furnish.missing":`Need`,"furnish.free":`Free`,"furnish.take":`Take it`,"furnish.sheet":`Sheet {n} of {total}`,"furnish.done":`Everything on the list is bought. Kotletka is thinking what else is missing.`,"furnish.window":`Window`,"furnish.windowPlain":`Plain window`,"furnish.stairs":`Stairs to the attic`,"furnish.zones":`Parts of the room`,"furnish.zone.living":`Living room`,"furnish.zone.dining":`Kitchen and dining`,"furnish.zone.bedroom":`Bedroom`,"game.rules":`Rules`,"game.hint":`Hint`,"game.giveUp":`Give up`,"game.giveUpText":`Give up? The game will end, but you get {count} for trying.`,"game.giveUpYes":`Yes, give up`,"game.rulesGotIt":`Got it`,"game.keepPlaying":`Keep playing`,"room.residents":`Who lives here`,"room.soon":`A game is coming here soon`,"room.roaches":`Roaches`,"room.play":`Play`,"room.continue":`Continue game`,"room.shopSign":`Raccoon’s Shop`,"room.difficulty":`Difficulty`,"room.opponent":`Opponent`,"room.quests":`A resident’s request`,"room.thanks":`Make a deal`,"room.thanksConfirm":`Make a deal: {price} instead of playing?`,"room.thanksYes":`Yes, make a deal`,"room.towerLook":`Let’s see`,"room.chooseGame":`Choose a game`,"room.newGame":`New game`,"room.newGameConfirm":`The unfinished game will be lost. Start a new one?`,"room.newGameYes":`Yes, start a new one`,"difficulty.easy":`Easy`,"difficulty.medium":`Medium`,"difficulty.hard":`Hard`,"opponent.solo":`Solo`,"opponent.ai":`Computer`,"result.win":`Victory!`,"result.loss":`Not this time`,"result.draw":`Draw`,"result.earned":`You caught {count}!`,"result.again":`Play again`,"result.toRoom":`Back to room`,"story.next":`Next`,"story.finish":`Finish`,"story.roomUnlocked":`New room unlocked: {room}`,"story.payText":`{who} will take you to the {room}.`,"story.pay":`Let’s go`,"story.later":`Later`,"story.journalAdded":`Added to the journal: {items}.`,"story.and":` and `,"story.skip":`Skip`,"story.errors":`Errors in chapter files (src/content/chapters) – these chapters will not open:`,"shop.locked":`The shop opens once Spider rescues Princess Kotletka.`,"shop.buy":`Buy`,"shop.owned":`Owned`,"shop.progress":`Bought {owned} of {total}`,"shop.title":`Raccoon’s shop`,"shop.room":`For the room`,"shop.variants":`Another look`,"shop.holiday":`For the holiday`,"shop.holidayNote":`Only while the holiday lasts – and at a discount. What you buy stays forever.`,"shop.variantOf":`Another look for: {names}`,"shop.needs":`First you need: {name}`,"shop.put":`You can change the look in Princess Kotletka’s room.`,"quest.times.0":`time`,"quest.times.1":`times`,"quest.times.2":`times`,"quest.games.0":`game`,"quest.games.1":`games`,"quest.games.2":`games`,"quest.win.game":`win {n} at “{game}”`,"quest.win.room":`win {n} in the {room}`,"quest.win.any":`win {n} in any games`,"quest.play.game":`play {n} of “{game}”`,"quest.play.room":`play {n} in the {room}`,"quest.play.any":`play {n} of any games`,"quest.level":`{what}, level “{level}”`,"quest.dream.spider":`Spider’s dream`,"quest.dream.kotletka":`Princess Kotletka’s dream`,"quest.line":`{who}: {what} ({progress}/{count})`,"settings.title":`Settings`,"settings.soundSection":`Sound and touch`,"settings.morningSection":`Good morning`,"settings.wishes":`Wishes`,"settings.wishesNote":`arrive every morning`,"settings.enabled":`on`,"settings.disabled":`off`,"settings.aboutSection":`About`,"settings.version":`Version {version} · build {build}`,"settings.language":`Language`,"settings.music":`Music`,"settings.sfx":`Sounds`,"settings.vibration":`Vibration`,"settings.lessMotion":`Less motion`,"settings.lessMotionNote":`no falling snow or blinking`,"settings.devToday":`Today (development only)`,"settings.devTodayReset":`Real date`,"settings.devQuest":`Quest: step {step}`,"settings.devQuestNone":`Quest: no event now, or it is finished`,"settings.devQuestDo":`Complete step`,"event.title":`Getting ready for the holiday`,"journal.tabStory":`Clues`,"journal.tabWinter":`Winter`,"event.prize":`The holiday is ready! Reward: {count}`,"event.mark":`Spider is expected here`,"settings.notifications":`Notifications`,"settings.notificationTime":`Time`,"settings.on":`On`,"settings.off":`Off`,"settings.notificationsDenied":`Notifications are blocked. Allow them in Android settings.`,"stats.title":`Statistics`,"stats.date":`Day`,"stats.games":`Games`,"stats.wins":`Wins`,"stats.fireflies":`Fireflies`,"stats.total":`Fireflies caught in total: {n}`,"stats.empty":`No games played yet.`,"stats.debug":`Developer`,"stats.sky":`Sky over the house`,"sky.auto":`Auto`,"sky.dawn":`Dawn`,"sky.day":`Day`,"sky.dusk":`Dusk`,"sky.night":`Night`,"stats.addFireflies":`+{count}`,"stats.reset":`Erase save`,"stats.resetConfirm":`Really erase all progress? This cannot be undone.`}};function oo(e,t){return t?e.replace(/\{(\w+)\}/g,(e,n)=>n in t?String(t[n]):e):e}function so(e,t,n){return oo(ao[e][t],n)}function co(e,t,n){return oo(t[e],n)}function lo(){let e=Ja(e=>e.save.settings.language);return{t:(0,m.useCallback)((t,n)=>so(e,t,n),[e]),l:(0,m.useCallback)((t,n)=>co(e,t,n),[e]),ff:(0,m.useCallback)((t,n)=>io(e,t,n),[e]),lang:e}}var uo=u((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),fo=u(((e,t)=>{t.exports=uo()})),po={m:[`voice.hmm_m1`,`voice.hmm_m2`],elder:[`voice.hmm_m2`],f:[`voice.hmm_f1`,`voice.hmm_f2`]},mo=5,Q=null,ho=-1/0,go=null;function _o(e){Q=e}function vo(e){return Q!==null&&Q.faces===e}function yo(){return Q?.cat===!0}function bo(e=performance.now()){if(!Q||e-ho<2e4)return;let t=po[Q.voice],n=t.length>0?t:po.m,r=Q.pitch+(t.length>0?0:mo),i=n.length>1?n.filter(e=>e!==go):n,a=i[Math.floor(Math.random()*i.length)];a&&(ho=e,go=a,Z.playSfx(a,{pitch:r}))}var xo=[...po.m,...po.f,`cat.purr`,`cat.meow2`],So=`modulepreload`,Co=function(e){return`/pautinka/`+e},wo={},To=function(e){return e.pathname.endsWith(`.css`)},Eo=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Do=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Co(t,n);let r=s(t),i=To(r);return Eo(wo,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:So,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Oo=e(`Haptics`,{web:()=>Do(()=>import(`./web-CLtJvGdn.js`).then(e=>new e.HapticsWeb),__vite__mapDeps([0,1,2]))}),ko=t.isNativePlatform();async function Ao(e,t){try{return await t()}catch(t){console.warn(`[${e}]`,t);return}}var jo=!0,$={setEnabled(e){jo=e},vibrate(e){jo&&Ao(`haptics`,()=>{switch(e){case`tap`:return Oo.impact({style:r.Light});case`success`:return Oo.notification({type:n.Success});case`error`:return Oo.notification({type:n.Warning})}})}},Mo=0;function No(){return Mo=1-Mo,Mo?`sfx.pebble1`:`sfx.pebble2`}var Po=-1/0;function Fo(){let e=performance.now();return e-Po<120?!1:(Po=e,!0)}var Io=150,Lo=.5,Ro=.4,zo={tap(){Z.playSfx(`sfx.tap`),$.vibrate(`tap`)},hint(){Z.playSfx(`sfx.hint`),$.vibrate(`tap`)},move(){Z.playSfx(`sfx.move`),$.vibrate(`tap`)},piece(){Z.playSfx(`sfx.wood`),$.vibrate(`tap`)},pebble(){Z.playSfx(No())},dice(){Z.playSfx(No()),$.vibrate(`tap`)},capture(){yo()?Z.playSfx(`cat.purr`,{volume:Ro}):Z.playSfx(`sfx.dice`)},pour(){Z.playSfx(`sfx.pour`),$.vibrate(`tap`)},cork(){Z.playSfx(No()),$.vibrate(`tap`)},seal(){Z.playSfx(`sfx.drop`),$.vibrate(`tap`)},burn(){Fo()&&Z.playSfx(No())},special(){Fo()&&Z.playSfx(`sfx.firework`,{volume:Lo})},miss(){Z.playSfx(`sfx.drop`)},hit(){Z.playSfx(`sfx.firework`,{volume:Lo}),$.vibrate(`tap`)},sunk(){Z.playSfx(`sfx.firework_soft`),$.vibrate(`success`)},invalid(){Z.playSfx(`sfx.error`),$.vibrate(`error`)},win(){Z.playSfx(yo()?`cat.purr`:`sfx.win`),$.vibrate(`success`)},loss(){Z.playSfx(yo()?`cat.meow2`:`sfx.loss`)},draw(){Z.playSequence([{sound:`sfx.tap`},{sound:`sfx.tap`,wait:Io}])},door(){Z.playSfx(`sfx.door2`)},creak(){Z.playSfx(`sfx.creak`)},write(){Z.playSfx(`sfx.pencil`),$.vibrate(`tap`)},quill(){Z.playSfx(`sfx.quill`)},page(){Z.playSfx(`sfx.page`)},firefly(){Z.playSfx(`sfx.firefly`),$.vibrate(`success`)},pay(){Z.playSfx(`sfx.firefly2`),$.vibrate(`success`)}},Bo=fo();function Vo({label:e,onClick:t,disabled:n}){return(0,Bo.jsx)(`button`,{type:`button`,className:`round-next`,disabled:n,"aria-label":e,onClick:()=>{zo.tap(),t()},children:(0,Bo.jsx)(`img`,{src:Me(`ui.next`),alt:``})})}export{wa as $,f as $n,Pt as $t,hi as A,b as An,Gn as At,qi as B,ge as Bn,N as Bt,yi as C,Ve as Cn,tr as Ct,ja as D,Ze as Dn,ur as Dt,Ma as E,Ue as En,er as Et,Ji as F,Se as Fn,yn as Ft,K as G,de as Gn,nn as Gt,Fa as H,fe as Hn,dn as Ht,Ki as I,Ce as In,Sn as It,sa as J,_ as Jn,$e as Jt,vi as K,_e as Kn,S as Kt,da as L,Te as Ln,bn as Lt,Mi as M,Le as Mn,P as Mt,Ci as N,Ie as Nn,Cn as Nt,Ia as O,Xe as On,Ln as Ot,Pi as P,je as Pn,xn as Pt,Ii as Q,u as Qn,Mt as Qt,zi as R,we as Rn,hn as Rt,Xi as S,x as Sn,sr as St,Ha as T,ze as Tn,cr as Tt,si as U,pe as Un,ln as Ut,Bi as V,he as Vn,fn as Vt,xi as W,me as Wn,tn as Wt,Pa as X,ae as Xn,E as Xt,Zi as Y,ce as Yn,gt as Yt,q as Z,ee as Zn,et as Zt,Si as _,Zt as _n,qr as _t,Ao as a,Qt as an,Di as at,li as b,Je as bn,mr as bt,vo as c,qt as cn,za as ct,fo as d,$t as dn,Qr as dt,It as en,ui as et,lo as f,ht as fn,$r as ft,Y as g,Xt as gn,Gr as gt,Ja as h,M as hn,G as ht,ko as i,Ut as in,Ai as it,gi as j,Me as jn,pn as jt,La as k,We as kn,Rn as kt,_o as l,Wt as ln,bi as lt,Z as m,Yt as mn,Jr as mt,zo as n,yt as nn,Sa as nt,Do as o,zt as on,ia as ot,no as p,Kt as pn,Kr as pt,Ui as q,g as qn,A as qt,$ as r,rt as rn,Ta as rt,xo as s,j as sn,wi as st,Vo as t,Qe as tn,xa as tt,bo as u,Gt as un,ei as ut,ma as v,Jt as vn,Xr as vt,Ua as w,Be as wn,$n as wt,Qi as x,Ge as xn,hr as xt,oi as y,nt as yn,wr as yt,Vi as z,v as zn,mn as zt};