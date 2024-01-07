export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.PcUANm3B.js","app":"_app/immutable/entry/app.HqPw4NeW.js","imports":["_app/immutable/entry/start.PcUANm3B.js","_app/immutable/chunks/scheduler.x38HN0Fw.js","_app/immutable/chunks/singletons.54wMtMAL.js","_app/immutable/entry/app.HqPw4NeW.js","_app/immutable/chunks/scheduler.x38HN0Fw.js","_app/immutable/chunks/index.e1rW_ejX.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/agradecimiento",
				pattern: /^\/agradecimiento\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/califica",
				pattern: /^\/califica\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
