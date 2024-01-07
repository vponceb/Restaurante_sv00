

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.rWbQnwRk.js","_app/immutable/chunks/scheduler.x38HN0Fw.js","_app/immutable/chunks/index.e1rW_ejX.js","_app/immutable/chunks/singletons.54wMtMAL.js"];
export const stylesheets = [];
export const fonts = [];
