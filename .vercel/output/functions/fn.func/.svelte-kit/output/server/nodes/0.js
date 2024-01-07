

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.Rb2S0v1Q.js","_app/immutable/chunks/scheduler.x38HN0Fw.js","_app/immutable/chunks/index.e1rW_ejX.js"];
export const stylesheets = [];
export const fonts = [];
