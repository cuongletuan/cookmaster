(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6:(t,e,s)=>{"use strict";s.d(e,{default:()=>q});var i=s(5155),a=s(2020),r=s(9853),n=s(7165),u=s(5910),o=class extends u.Q{constructor(t={}){super(),this.config=t,this.#t=new Map}#t;build(t,e,s){let i=e.queryKey,n=e.queryHash??(0,a.F$)(i,e),u=this.get(n);return u||(u=new r.X({client:t,queryKey:i,queryHash:n,options:t.defaultQueryOptions(e),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(u)),u}add(t){this.#t.has(t.queryHash)||(this.#t.set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=this.#t.get(t.queryHash);e&&(t.destroy(),e===t&&this.#t.delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){n.j.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return this.#t.get(t)}getAll(){return[...this.#t.values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,a.MK)(e,t))}findAll(t={}){let e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,a.MK)(t,e)):e}notify(t){n.j.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){n.j.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){n.j.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},h=s(7948),l=s(6784),c=class extends h.k{#e;#s;#i;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.mutationCache,this.#e=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#e.includes(t)||(this.#e.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#e=this.#e.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#e.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#i?.continue()??this.execute(this.state.variables)}async execute(t){this.#i=(0,l.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#a({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let e="pending"===this.state.status,s=!this.#i.canStart();try{if(!e){this.#a({type:"pending",variables:t,isPaused:s}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#a({type:"pending",context:e,variables:t,isPaused:s})}let i=await this.#i.start();return await this.#s.config.onSuccess?.(i,t,this.state.context,this),await this.options.onSuccess?.(i,t,this.state.context),await this.#s.config.onSettled?.(i,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(i,null,t,this.state.context),this.#a({type:"success",data:i}),i}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#a({type:"error",error:e})}}finally{this.#s.runNext(this)}}#a(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.j.batch(()=>{this.#e.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}},d=class extends u.Q{constructor(t={}){super(),this.config=t,this.#r=new Set,this.#n=new Map,this.#u=0}#r;#n;#u;build(t,e,s){let i=new c({mutationCache:this,mutationId:++this.#u,options:t.defaultMutationOptions(e),state:s});return this.add(i),i}add(t){this.#r.add(t);let e=f(t);if("string"==typeof e){let s=this.#n.get(e);s?s.push(t):this.#n.set(e,[t])}this.notify({type:"added",mutation:t})}remove(t){if(this.#r.delete(t)){let e=f(t);if("string"==typeof e){let s=this.#n.get(e);if(s){if(s.length>1){let e=s.indexOf(t);-1!==e&&s.splice(e,1)}else s[0]===t&&this.#n.delete(e)}}}this.notify({type:"removed",mutation:t})}canRun(t){let e=f(t);if("string"!=typeof e)return!0;{let s=this.#n.get(e),i=s?.find(t=>"pending"===t.state.status);return!i||i===t}}runNext(t){let e=f(t);if("string"!=typeof e)return Promise.resolve();{let s=this.#n.get(e)?.find(e=>e!==t&&e.state.isPaused);return s?.continue()??Promise.resolve()}}clear(){n.j.batch(()=>{this.#r.forEach(t=>{this.notify({type:"removed",mutation:t})}),this.#r.clear(),this.#n.clear()})}getAll(){return Array.from(this.#r)}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,a.nJ)(e,t))}findAll(t={}){return this.getAll().filter(e=>(0,a.nJ)(t,e))}notify(t){n.j.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return n.j.batch(()=>Promise.all(t.map(t=>t.continue().catch(a.lQ))))}};function f(t){return t.options.scope?.id}var p=s(920),y=s(1239);function m(t){return{onFetch:(e,s)=>{let i=e.options,r=e.fetchOptions?.meta?.fetchMore?.direction,n=e.state.data?.pages||[],u=e.state.data?.pageParams||[],o={pages:[],pageParams:[]},h=0,l=async()=>{let s=!1,l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?s=!0:e.signal.addEventListener("abort",()=>{s=!0}),e.signal)})},c=(0,a.ZM)(e.options,e.fetchOptions),d=async(t,i,r)=>{if(s)return Promise.reject();if(null==i&&t.pages.length)return Promise.resolve(t);let n={client:e.client,queryKey:e.queryKey,pageParam:i,direction:r?"backward":"forward",meta:e.options.meta};l(n);let u=await c(n),{maxPages:o}=e.options,h=r?a.ZZ:a.y9;return{pages:h(t.pages,u,o),pageParams:h(t.pageParams,i,o)}};if(r&&n.length){let t="backward"===r,e={pages:n,pageParams:u},s=(t?function(t,{pages:e,pageParams:s}){return e.length>0?t.getPreviousPageParam?.(e[0],e,s[0],s):void 0}:g)(i,e);o=await d(e,s,t)}else{let e=t??n.length;do{let t=0===h?u[0]??i.initialPageParam:g(i,o);if(h>0&&null==t)break;o=await d(o,t),h++}while(h<e)}return o};e.options.persister?e.fetchFn=()=>e.options.persister?.(l,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s):e.fetchFn=l}}}function g(t,{pages:e,pageParams:s}){let i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}var b=class{#o;#s;#h;#l;#c;#d;#f;#p;constructor(t={}){this.#o=t.queryCache||new o,this.#s=t.mutationCache||new d,this.#h=t.defaultOptions||{},this.#l=new Map,this.#c=new Map,this.#d=0}mount(){this.#d++,1===this.#d&&(this.#f=p.m.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#o.onFocus())}),this.#p=y.t.subscribe(async t=>{t&&(await this.resumePausedMutations(),this.#o.onOnline())}))}unmount(){this.#d--,0===this.#d&&(this.#f?.(),this.#f=void 0,this.#p?.(),this.#p=void 0)}isFetching(t){return this.#o.findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return this.#s.findAll({...t,status:"pending"}).length}getQueryData(t){let e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state.data}ensureQueryData(t){let e=this.defaultQueryOptions(t),s=this.#o.build(this,e),i=s.state.data;return void 0===i?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime((0,a.d2)(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return this.#o.findAll(t).map(({queryKey:t,state:e})=>[t,e.data])}setQueryData(t,e,s){let i=this.defaultQueryOptions({queryKey:t}),r=this.#o.get(i.queryHash),n=r?.state.data,u=(0,a.Zw)(e,n);if(void 0!==u)return this.#o.build(this,i).setData(u,{...s,manual:!0})}setQueriesData(t,e,s){return n.j.batch(()=>this.#o.findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,s)]))}getQueryState(t){let e=this.defaultQueryOptions({queryKey:t});return this.#o.get(e.queryHash)?.state}removeQueries(t){let e=this.#o;n.j.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let s=this.#o;return n.j.batch(()=>(s.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){let s={revert:!0,...e};return Promise.all(n.j.batch(()=>this.#o.findAll(t).map(t=>t.cancel(s)))).then(a.lQ).catch(a.lQ)}invalidateQueries(t,e={}){return n.j.batch(()=>(this.#o.findAll(t).forEach(t=>{t.invalidate()}),t?.refetchType==="none")?Promise.resolve():this.refetchQueries({...t,type:t?.refetchType??t?.type??"active"},e))}refetchQueries(t,e={}){let s={...e,cancelRefetch:e.cancelRefetch??!0};return Promise.all(n.j.batch(()=>this.#o.findAll(t).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,s);return s.throwOnError||(e=e.catch(a.lQ)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(a.lQ)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let s=this.#o.build(this,e);return s.isStaleByTime((0,a.d2)(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(a.lQ).catch(a.lQ)}fetchInfiniteQuery(t){return t.behavior=m(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(a.lQ).catch(a.lQ)}ensureInfiniteQueryData(t){return t.behavior=m(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return y.t.isOnline()?this.#s.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#o}getMutationCache(){return this.#s}getDefaultOptions(){return this.#h}setDefaultOptions(t){this.#h=t}setQueryDefaults(t,e){this.#l.set((0,a.EN)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...this.#l.values()],s={};return e.forEach(e=>{(0,a.Cp)(t,e.queryKey)&&Object.assign(s,e.defaultOptions)}),s}setMutationDefaults(t,e){this.#c.set((0,a.EN)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...this.#c.values()],s={};return e.forEach(e=>{(0,a.Cp)(t,e.mutationKey)&&Object.assign(s,e.defaultOptions)}),s}defaultQueryOptions(t){if(t._defaulted)return t;let e={...this.#h.queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,a.F$)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===a.hT&&(e.enabled=!1),e}defaultMutationOptions(t){return t?._defaulted?t:{...this.#h.mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){this.#o.clear(),this.#s.clear()}},v=s(6715),C=s(2115);function q(t){let{children:e}=t,s=(0,C.useMemo)(()=>new b,[]);return(0,i.jsx)(C.Suspense,{children:(0,i.jsx)(v.Ht,{client:s,children:e})})}},347:()=>{},4684:(t,e,s)=>{Promise.resolve().then(s.t.bind(s,9577,23)),Promise.resolve().then(s.t.bind(s,347,23)),Promise.resolve().then(s.bind(s,6))},9577:t=>{t.exports={style:{fontFamily:"'Poppins', 'Poppins Fallback'",fontStyle:"normal"},className:"__className_bb31b9",variable:"__variable_bb31b9"}}},t=>{var e=e=>t(t.s=e);t.O(0,[473,967,441,684,358],()=>e(4684)),_N_E=t.O()}]);