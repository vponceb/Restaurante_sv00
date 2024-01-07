import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty } from "../../chunks/ssr.js";
import "svelte-reveal";
const logo = "/_app/immutable/assets/Logo.T1negyr0.png";
const QuienesSomos_01 = "/_app/immutable/assets/QuienesSomos_01.h95Xt9z3.avif";
const Arroz_Pollo = "/_app/immutable/assets/Arroz_Pollo.6U9toS9V.avif";
const Ceviche = "/_app/immutable/assets/Ceviche.wk6kLfVs.avif";
const Pollo_Brasa = "/_app/immutable/assets/Pollo_Brasa.ip7-fWrk.avif";
const Chancho_Palo = "/_app/immutable/assets/Chancho_Palo.4kQ708Oe.avif";
const WhatsApp_Animado = "/_app/immutable/assets/WhatsApp-Animado.aHgEjoBM.gif";
const css = {
  code: '@charset "UTF-8";body.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{font-family:"Source Sans Pro", sans-serif;color:#f7f2f2;font-size:18px}@media only screen and (max-width: 767px){body.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{font-size:13px}}.Header.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-color:rgba(100, 30, 22, 0.9);color:#f7f2f2;font-size:1.1em;padding:0 0;position:fixed;top:0;left:0;right:0;z-index:1;box-shadow:9px 9px 18px rgb(4, 11, 23);text-shadow:black 0.1em 0.1em 0.2em}@media only screen and (max-width: 767px){.Header.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{padding:0em 1em 0em 1em}}.Header.svelte-1ks8rar .Logo_Menu.svelte-1ks8rar.svelte-1ks8rar{max-width:1150px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.Header.svelte-1ks8rar .Logo_Menu img.svelte-1ks8rar.svelte-1ks8rar{width:4em}.Header.svelte-1ks8rar .Logo_Menu .button-mini.svelte-1ks8rar.svelte-1ks8rar{display:none;background-color:rgba(100, 30, 22, 0.9);color:#f7f2f2;text-decoration:none;font-size:1em}.Header.svelte-1ks8rar .Logo_Menu .button-mini.svelte-1ks8rar.svelte-1ks8rar:hover{background:rgb(51, 5, 5)}.Header.svelte-1ks8rar .Logo_Menu .navigation ul.svelte-1ks8rar.svelte-1ks8rar{margin:0;padding:0;list-style:none}.Header.svelte-1ks8rar .Logo_Menu .navigation ul li.svelte-1ks8rar.svelte-1ks8rar{display:inline-block}.Header.svelte-1ks8rar .Logo_Menu .navigation ul li a.svelte-1ks8rar.svelte-1ks8rar{color:#f7f2f2;text-decoration:none;display:block;padding:0.5em 1em;transition:all 0.3s linear;border-radius:5px}.Header.svelte-1ks8rar .Logo_Menu .navigation ul li a.svelte-1ks8rar.svelte-1ks8rar:hover{background:rgb(51, 5, 5)}.Segmento_Flex.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background-attachment:fixed;background-repeat:no-repeat;background-size:cover;background-position:center}.Segmento_Flex.svelte-1ks8rar .Contenedor.svelte-1ks8rar.svelte-1ks8rar{width:100%;margin:21em;padding:2em 0;background-color:rgba(100, 30, 22, 0.6);border-radius:5px;box-shadow:20px 20px 60px rgb(4, 11, 23), -20px -20px 60px rgb(4, 11, 23)}@media only screen and (max-width: 767px){.Segmento_Flex.svelte-1ks8rar .Contenedor.svelte-1ks8rar.svelte-1ks8rar{margin:16em}}.Segmento_Flex.svelte-1ks8rar .Contenedor .Ancho_Limitado.svelte-1ks8rar.svelte-1ks8rar{max-width:1150px;margin:auto}.Segmento_Flex.svelte-1ks8rar .Contenedor .Ancho_Limitado .Titulo.svelte-1ks8rar.svelte-1ks8rar{margin:0 auto;font-size:2.5em;text-align:center;font-weight:bold;text-shadow:black 0.1em 0.1em 0.2em;padding-top:1em;padding-bottom:0.5em}.Introduccion.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.avif")}@media only screen and (max-width: 767px){.Introduccion.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_02.avif")}}.Introduccion.svelte-1ks8rar .Descripcion.svelte-1ks8rar.svelte-1ks8rar{margin:0 auto;font-size:1.4em;text-align:center;font-weight:bold;padding-bottom:2em;padding-top:1em}.QuienesSomos.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.avif")}@media only screen and (max-width: 767px){.QuienesSomos.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_02.avif")}}.QuienesSomos.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar.svelte-1ks8rar{display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.QuienesSomos.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Texto.svelte-1ks8rar{width:50%;padding:1em 1.3em;font-size:1.25em;text-align:justify;line-height:1.8em}@media only screen and (max-width: 767px){.QuienesSomos.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Texto.svelte-1ks8rar{width:100%;order:1}}.QuienesSomos.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Imagen.svelte-1ks8rar{width:50%;padding:1em 1.3em}@media only screen and (max-width: 767px){.QuienesSomos.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Imagen.svelte-1ks8rar{width:100%}}.QuienesSomos.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Imagen img.svelte-1ks8rar{box-shadow:none;border-radius:4px;width:100%}.Servicios.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.avif")}@media only screen and (max-width: 767px){.Servicios.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_02.avif")}}.Servicios.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar.svelte-1ks8rar{display:flex;flex-flow:row wrap;justify-content:center;align-items:center}.Servicios.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Texto.svelte-1ks8rar{width:50%;font-size:1.75em;text-align:center}@media only screen and (max-width: 767px){.Servicios.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Texto.svelte-1ks8rar{width:100%;order:1}}.Servicios.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Imagen.svelte-1ks8rar{width:50%;padding:1em 1.3em}@media only screen and (max-width: 767px){.Servicios.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Imagen.svelte-1ks8rar{width:100%}}.Servicios.svelte-1ks8rar .Bloque_Flex.svelte-1ks8rar .Imagen img.svelte-1ks8rar{width:100%;box-shadow:9px 9px 15px rgb(38, 37, 37);border-radius:9px}.Ubiquenos.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.avif")}@media only screen and (max-width: 767px){.Ubiquenos.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_02.avif")}}.Ubiquenos.svelte-1ks8rar .Descripcion.svelte-1ks8rar.svelte-1ks8rar{margin:0 auto;font-size:1.4em;text-align:center;font-weight:bold;padding-bottom:2em;padding-top:1em}.Ubiquenos.svelte-1ks8rar .Descripcion iframe.svelte-1ks8rar.svelte-1ks8rar{width:95%}.Contactenos.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_Contactenos_01.avif")}@media only screen and (max-width: 767px){.Contactenos.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background-image:url("../routes/Documentos_de_PageRaiz/img/BG_Contactenos_02.avif")}}.Contactenos.svelte-1ks8rar .Descripcion.svelte-1ks8rar.svelte-1ks8rar{margin:0 auto;font-size:1.4em;text-align:center;font-weight:bold;padding-bottom:2em;padding-top:1em}.Contactenos.svelte-1ks8rar .Descripcion img.svelte-1ks8rar.svelte-1ks8rar{width:9em}footer.svelte-1ks8rar.svelte-1ks8rar.svelte-1ks8rar{background:#333;color:#fff;padding:10px;text-align:center}footer.svelte-1ks8rar div.svelte-1ks8rar [class^=icon-].svelte-1ks8rar{display:inline-block;color:#333;text-decoration:none;font-size:30px;padding:10px;background:#fff;border-radius:50%;width:50px;height:50px;margin-bottom:15px}footer.svelte-1ks8rar a.svelte-1ks8rar.svelte-1ks8rar{color:aqua;text-decoration:none;font-size:16px}@media only screen and (max-width: 767px){:root{font-size:13px}.Header.svelte-1ks8rar .Logo_Menu .button-mini.svelte-1ks8rar.svelte-1ks8rar{display:block;cursor:pointer;padding:0.5em 1em}.Header.svelte-1ks8rar .Logo_Menu .navigation.svelte-1ks8rar.svelte-1ks8rar{width:100%;margin-top:1em}.Header.svelte-1ks8rar .Logo_Menu .navigation ul.svelte-1ks8rar.svelte-1ks8rar{display:none}.Header.svelte-1ks8rar .Logo_Menu .navigation ul.show.svelte-1ks8rar.svelte-1ks8rar{display:block}.Header.svelte-1ks8rar .Logo_Menu .navigation ul li.svelte-1ks8rar.svelte-1ks8rar{display:block}.Header.svelte-1ks8rar .Logo_Menu .navigation ul li a.svelte-1ks8rar.svelte-1ks8rar{display:block;padding:0.5em 0;transition:all 0.3s linear;border-radius:5px}.Header.svelte-1ks8rar .Logo_Menu .navigation ul li a.svelte-1ks8rar.svelte-1ks8rar:hover{background:#4a4a4a}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let Disp = "";
  $$result.css.add(css);
  return ` <html lang="es"><body class="svelte-1ks8rar"> <header class="Header svelte-1ks8rar"><div class="Logo_Menu svelte-1ks8rar"> <a href="http://www.ayc-marketing.com/" class="svelte-1ks8rar" data-svelte-h="svelte-1sn62wq"> <img${add_attribute("src", logo, 0)} alt="" class="svelte-1ks8rar"></a> <button class="button-mini svelte-1ks8rar" data-svelte-h="svelte-1ejctie">Menu</button> <nav class="navigation svelte-1ks8rar"><ul class="${escape(null_to_empty(Disp), true) + " svelte-1ks8rar"}"><li class="svelte-1ks8rar" data-svelte-h="svelte-1ttk59e"><a href="#QuienesSomos" class="svelte-1ks8rar">Nuestra Historia</a></li> <li class="svelte-1ks8rar" data-svelte-h="svelte-19hw4t8"><a href="#Servicios" class="svelte-1ks8rar">Servicios</a></li>  <li class="svelte-1ks8rar" data-svelte-h="svelte-12soxuo"><a href="#Ubiquenos" class="svelte-1ks8rar">Ubiquenos</a></li> <li class="svelte-1ks8rar" data-svelte-h="svelte-1ln3c6k"><a href="#Contactenos" class="svelte-1ks8rar">Contactenos</a></li></ul></nav></div></header>  <div id="Introduccion" class="Introduccion Segmento_Flex svelte-1ks8rar" data-svelte-h="svelte-bo1k6v"><div class="Contenedor svelte-1ks8rar"><div class="Ancho_Limitado svelte-1ks8rar"><div class="Titulo svelte-1ks8rar">Restaurante</div> <div class="Descripcion svelte-1ks8rar">Disfruta de la mejor comida en un ambiente acogedor y familiar</div></div></div></div>  <div id="QuienesSomos" class="QuienesSomos Segmento_Flex svelte-1ks8rar"><div class="Contenedor svelte-1ks8rar"><div class="Ancho_Limitado svelte-1ks8rar"><div class="Titulo svelte-1ks8rar" data-svelte-h="svelte-16nvv7x">¿Quienes Somos?</div> <div class="Bloque_Flex svelte-1ks8rar"><div class="Texto svelte-1ks8rar" data-svelte-h="svelte-19q6jr8">Contamos con los mejores profesionales culinarios del país. Cada uno de nuestros chef
							tiene años de experiencia en la preparación de platos peruanos auténticos y creativos
							que deleitan a nuestros clientes. Desde el ceviche más fresco hasta el lomo saltado
							más sabroso, nuestros cocineros ponen todo su amor y pasión en cada plato que
							preparan.</div> <div class="Imagen svelte-1ks8rar" data-svelte-h="svelte-1dq47qg"><img${add_attribute("src", QuienesSomos_01, 0)} alt="" class="svelte-1ks8rar"></div></div></div></div></div>  <div id="Servicios" class="Servicios Segmento_Flex svelte-1ks8rar"><div class="Contenedor svelte-1ks8rar"><div class="Ancho_Limitado svelte-1ks8rar"><div class="Titulo svelte-1ks8rar" data-svelte-h="svelte-robvg4">Nuestros principales Servicios</div>  <div class="Bloque_Flex svelte-1ks8rar"><div class="Imagen svelte-1ks8rar" data-svelte-h="svelte-l2w50h"><img${add_attribute("src", Arroz_Pollo, 0)} alt="" class="svelte-1ks8rar"></div> <div class="Texto svelte-1ks8rar" data-svelte-h="svelte-118gd0j">Arroz con Pollo</div></div>  <div class="Bloque_Flex svelte-1ks8rar"><div class="Texto svelte-1ks8rar" data-svelte-h="svelte-xv9czz">Ceviches</div> <div class="Imagen svelte-1ks8rar" data-svelte-h="svelte-akjik7"><img${add_attribute("src", Ceviche, 0)} alt="" class="svelte-1ks8rar"></div></div>  <div class="Bloque_Flex svelte-1ks8rar"><div class="Imagen svelte-1ks8rar" data-svelte-h="svelte-11jbxju"><img${add_attribute("src", Pollo_Brasa, 0)} alt="" class="svelte-1ks8rar"></div> <div class="Texto svelte-1ks8rar" data-svelte-h="svelte-r31iy4">Pollo a la Brasa</div></div>  <div class="Bloque_Flex svelte-1ks8rar"><div class="Texto svelte-1ks8rar" data-svelte-h="svelte-qvkyb2">Chancho al Palo</div> <div class="Imagen svelte-1ks8rar" data-svelte-h="svelte-8m23xx"><img${add_attribute("src", Chancho_Palo, 0)} alt="" class="svelte-1ks8rar"></div> </div></div></div></div>    <div id="Ubiquenos" class="Ubiquenos Segmento_Flex svelte-1ks8rar" data-svelte-h="svelte-3j584o"><div class="Contenedor svelte-1ks8rar"><div class="Ancho_Limitado svelte-1ks8rar"><div class="Titulo svelte-1ks8rar">Ubiquenos</div> <div class="Descripcion svelte-1ks8rar"> <iframe title="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1851201452105!2d-77.06471598892132!3d-12.030773141554892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ced9ff697f8d%3A0xa33d3a9befbee6ff!2sJr.%20Sao%20Paulo%201582%2C%20Lima%2015101!5e0!3m2!1ses!2spe!4v1682444952464!5m2!1ses!2spe" width="1200" height="450" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="svelte-1ks8rar"></iframe></div></div></div></div>  <div id="Contactenos" class="Contactenos Segmento_Flex svelte-1ks8rar" data-svelte-h="svelte-1ihsr43"><div class="Contenedor svelte-1ks8rar"><div class="Ancho_Limitado svelte-1ks8rar"><div class="Titulo svelte-1ks8rar">Contactenos por WhatsApp</div> <div class="Descripcion svelte-1ks8rar"><a href="https://api.whatsapp.com/send?phone=51916991779&text=Consultenos%20sin%20compromiso&source=&data=/" title="Whatsapp"><img${add_attribute("src", WhatsApp_Animado, 0)} alt="Escribenos" class="svelte-1ks8rar"></a></div> <div class="Descripcion svelte-1ks8rar">Tambiem nos puede llamar a los telefonos: 980 524 679 - 571 3441</div></div></div></div>  <footer class="footer svelte-1ks8rar" data-svelte-h="svelte-12kvloq"> <div class="social"><a href="https://www.facebook.com/Analistas-y-Consultores-187078141697179/" target="_blank" class="icon-facebook svelte-1ks8rar" title="Facebook"></a> <a href="https://twitter.com/AyC_Peru" target="_blank" class="icon-twitter svelte-1ks8rar" title="Twitter"></a> <a href="http://analistasyconsultores.blogspot.pe/" target="_blank" class="icon-google svelte-1ks8rar" title="Blogspot"></a> <a href="https://api.whatsapp.com/send?phone=51916991779&text=Consultenos%20sin%20compromiso&source=&data=/" class="icon-whatsapp svelte-1ks8rar" title="Whatsapp"></a></div> <a href="mailto:contacto@ayc-marketing.com" class="svelte-1ks8rar">E-mail: contacto@ayc-marketing.com</a> <p>Telf.: (511) 571 3441, 916 991 779, 955 099 996</p> <p>Av. Brasil 1745, Oficina 104 - Jesús María</p> <a href="http://www.ayc-marketing.com" class="svelte-1ks8rar">www.ayc-marketing.com</a></footer></body></html>       `;
});
export {
  Page as default
};