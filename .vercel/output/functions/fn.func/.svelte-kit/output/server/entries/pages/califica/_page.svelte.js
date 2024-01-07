import { c as create_ssr_component, e as escape, d as add_attribute, h as add_styles, v as validate_component, i as each } from "../../../chunks/ssr.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBAfx7iG-t1vLVBIDNeF8yNxWCHLOKc49k",
  authDomain: "restaurante0a1.firebaseapp.com",
  projectId: "restaurante0a1",
  storageBucket: "restaurante0a1.appspot.com",
  messagingSenderId: "829796485637",
  appId: "1:829796485637:web:a4d7825e55f4dc838a2a6c",
  measurementId: "G-3C2NQYS3JV"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
const LogoEmpresa = "/_app/immutable/assets/Logo.T1negyr0.png";
const Escala_Likert = "/_app/immutable/assets/Escala_Likert._wg0BwOB.png";
const css$9 = {
  code: ".Titulo_Segmento.svelte-q24z1s{text-align:center;background:var(--Pagina_Color_Fondo);padding:0.3em 0;margin:1.5em 0 1em 0;border-radius:0.8em;box-shadow:0px 3px 3px rgb(97, 115, 148), 0px -3px 3px rgb(97, 115, 148)}",
  map: null
};
const _01_Titulo_Segmento = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Texto } = $$props;
  if ($$props.Texto === void 0 && $$bindings.Texto && Texto !== void 0)
    $$bindings.Texto(Texto);
  $$result.css.add(css$9);
  return `<div class="Titulo_Segmento svelte-q24z1s">${escape(Texto)} </div>`;
});
const css$8 = {
  code: ".btn-enviar.svelte-1v4hn7w{background:#832336;color:#fff;margin:auto;padding:10px 40px;cursor:pointer;display:block;margin-top:30px;margin-left:auto;margin-right:auto;border-radius:1em;box-shadow:0px 3px 3px rgb(97, 115, 148), -0px -3px 3px rgb(97, 115, 148);&:hover {\r\n            background: rgba(255, 166, 0, 0.9);\r\n        };&:active {\r\n            transform: scale(1.05);\r\n        }}.pie-pagina.svelte-1v4hn7w{margin-top:1rem;;;font-size:0.8em;text-align:right }",
  map: null
};
const Input_Boton_Enviar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<input class="btn-enviar svelte-1v4hn7w" type="submit" value="Enviar Respuestas"> <p class="pie-pagina svelte-1v4hn7w" data-svelte-h="svelte-vro59b">© 2023 Analistas y Consultores - All Rights Reserved</p>`;
});
const css$7 = {
  code: ".Pregunta.svelte-1nl29yw{width:100%;margin:0.5rem 0 0.5rem 0;padding:0.2rem 0rem 0.2rem 2.2rem;text-align:left;text-indent:-2.2rem}",
  map: null
};
const X___Pregunta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Texto } = $$props;
  if ($$props.Texto === void 0 && $$bindings.Texto && Texto !== void 0)
    $$bindings.Texto(Texto);
  $$result.css.add(css$7);
  return `<div class="Pregunta svelte-1nl29yw"> <b>${escape(Texto.substring(0, Texto.indexOf(".-")))}</b>  <!-- HTML_TAG_START -->${Texto.substring(Texto.indexOf(".-"), Texto.length)}<!-- HTML_TAG_END --> </div>`;
});
const css$6 = {
  code: "article.svelte-bmfjqm.svelte-bmfjqm{display:flex;flex-flow:column wrap;justify-content:center;align-items:center}article.svelte-bmfjqm .Date input.svelte-bmfjqm{background-color:#0f3746;border-radius:0.4em;margin:0.25em 1em;padding:0.3em 0.9em;font-size:1.2em;color:#cecece}article.svelte-bmfjqm .Date input.svelte-bmfjqm:hover{background:#455057}",
  map: null
};
const Input_Date = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Pregunta_Texto } = $$props;
  let { Visible = true } = $$props;
  let { Columna } = $$props;
  let { Fecha_Minima = "01/01/1900" } = $$props;
  let { Fecha_Maxima = (/* @__PURE__ */ new Date()).toLocaleDateString("fr-CA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }) } = $$props;
  if ($$props.Pregunta_Texto === void 0 && $$bindings.Pregunta_Texto && Pregunta_Texto !== void 0)
    $$bindings.Pregunta_Texto(Pregunta_Texto);
  if ($$props.Visible === void 0 && $$bindings.Visible && Visible !== void 0)
    $$bindings.Visible(Visible);
  if ($$props.Columna === void 0 && $$bindings.Columna && Columna !== void 0)
    $$bindings.Columna(Columna);
  if ($$props.Fecha_Minima === void 0 && $$bindings.Fecha_Minima && Fecha_Minima !== void 0)
    $$bindings.Fecha_Minima(Fecha_Minima);
  if ($$props.Fecha_Maxima === void 0 && $$bindings.Fecha_Maxima && Fecha_Maxima !== void 0)
    $$bindings.Fecha_Maxima(Fecha_Maxima);
  $$result.css.add(css$6);
  return `<article${add_attribute("id", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} class="svelte-bmfjqm"${add_styles({ "display": Visible ? "flex" : "none" })}>${validate_component(X___Pregunta, "Pregunta").$$render($$result, { Texto: Pregunta_Texto }, {}, {})} <div class="Date"><input type="date"${add_attribute("name", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)}${add_attribute("min", Fecha_Minima, 0)}${add_attribute("max", Fecha_Maxima, 0)} pattern="${"\\d" + escape(4, true) + "-\\d" + escape(2, true) + "-\\d" + escape(2, true)}" required class="svelte-bmfjqm"${add_attribute("value", Columna, 0)}></div></article>    `;
});
const css$5 = {
  code: "article.svelte-c4bw7y .Pregunta_Malla.svelte-c4bw7y{display:flex;flex-flow:column wrap;justify-content:center;align-items:center}article.svelte-c4bw7y .Pregunta_Malla .Bloque.svelte-c4bw7y{margin:0.2em 0;display:flex;flex-flow:row nowrap;justify-content:center;align-items:center;width:100%;border:1px solid rgb(38, 77, 82);border-radius:0.3em}article.svelte-c4bw7y .Pregunta_Malla .Bloque .Pregunta_Item.svelte-c4bw7y{width:55%;padding:0em 0em 0em 0.5em}article.svelte-c4bw7y .Pregunta_Malla .Bloque .Input_Radio.svelte-c4bw7y{width:45%;display:flex;flex-flow:row wrap;justify-content:center;align-items:center}article.svelte-c4bw7y .Pregunta_Malla .Bloque .Input_Radio label.svelte-c4bw7y{background-color:#0f3746;border-radius:0.5em;text-align:center;margin:0.5em 0.1em;padding:0.2em 0;width:18%}article.svelte-c4bw7y .Pregunta_Malla .Bloque .Input_Radio label.svelte-c4bw7y:hover{background-color:#455057}article.svelte-c4bw7y .Pregunta_Malla .Bloque .Input_Radio label input.svelte-c4bw7y{accent-color:red}article.svelte-c4bw7y .Pregunta_Malla .Bloque .Input_Radio label input.svelte-c4bw7y:checked{box-shadow:0 0 0 2px red}",
  map: null
};
const Input_Malla = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )" } = $$props;
  let { Columna } = $$props;
  let { Visible = true } = $$props;
  let Opciones = [
    "5. Muy Satisfecho",
    "4. Satisfecho",
    "3. Ni Satisfecho / Ni Insatisfecho",
    "2. Insatisfecho",
    "1. Muy Insatisfecho"
  ];
  if ($$props.Pregunta_Texto === void 0 && $$bindings.Pregunta_Texto && Pregunta_Texto !== void 0)
    $$bindings.Pregunta_Texto(Pregunta_Texto);
  if ($$props.Columna === void 0 && $$bindings.Columna && Columna !== void 0)
    $$bindings.Columna(Columna);
  if ($$props.Visible === void 0 && $$bindings.Visible && Visible !== void 0)
    $$bindings.Visible(Visible);
  $$result.css.add(css$5);
  return `<article${add_attribute("id", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} class="svelte-c4bw7y"${add_styles({ "display": Visible ? "" : "none" })}><div class="Pregunta_Malla svelte-c4bw7y"><div class="Bloque svelte-c4bw7y"><div class="Pregunta_Item svelte-c4bw7y">${validate_component(X___Pregunta, "Pregunta").$$render($$result, { Texto: Pregunta_Texto }, {}, {})}</div> <div class="Input_Radio svelte-c4bw7y">${each(Opciones, (Opcion) => {
    return `<label class="svelte-c4bw7y"><input type="radio"${add_attribute("name", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)}${add_attribute("value", Opcion, 0)} class="svelte-c4bw7y"${Opcion === Columna ? add_attribute("checked", true, 1) : ""}> ${escape(Opcion.substring(0, Opcion.indexOf(". ")))} </label>`;
  })}</div></div></div></article>     `;
});
const css$4 = {
  code: "article.svelte-n4i31d.svelte-n4i31d{display:flex;flex-flow:column wrap;justify-content:center;align-items:center}article.svelte-n4i31d .Input_Number.svelte-n4i31d{width:25%;padding:0 0.3em;margin:0.2em 0 1em 0}article.svelte-n4i31d .Input_Number input.svelte-n4i31d{text-align:center;color:var(--Letra_Color);background-color:#0f3746;padding:0.5em;border:1px solid #3e5665;border-radius:0.2em;width:100%}article.svelte-n4i31d .Input_Number input.svelte-n4i31d:hover{background-color:#455057}",
  map: null
};
const Input_Number = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )" } = $$props;
  let { Columna } = $$props;
  let { Visible = true } = $$props;
  let { Valor_Minimo } = $$props;
  let { Valor_Maximo } = $$props;
  if ($$props.Pregunta_Texto === void 0 && $$bindings.Pregunta_Texto && Pregunta_Texto !== void 0)
    $$bindings.Pregunta_Texto(Pregunta_Texto);
  if ($$props.Columna === void 0 && $$bindings.Columna && Columna !== void 0)
    $$bindings.Columna(Columna);
  if ($$props.Visible === void 0 && $$bindings.Visible && Visible !== void 0)
    $$bindings.Visible(Visible);
  if ($$props.Valor_Minimo === void 0 && $$bindings.Valor_Minimo && Valor_Minimo !== void 0)
    $$bindings.Valor_Minimo(Valor_Minimo);
  if ($$props.Valor_Maximo === void 0 && $$bindings.Valor_Maximo && Valor_Maximo !== void 0)
    $$bindings.Valor_Maximo(Valor_Maximo);
  $$result.css.add(css$4);
  return `<article${add_attribute("id", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} class="svelte-n4i31d"${add_styles({ "display": Visible ? "flex" : "none" })}>${validate_component(X___Pregunta, "Pregunta").$$render($$result, { Texto: Pregunta_Texto }, {}, {})} <div class="Input_Number svelte-n4i31d"><input type="number"${add_attribute("name", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} style="text-transform:uppercase"${add_attribute("min", Valor_Minimo, 0)}${add_attribute("max", Valor_Maximo, 0)} step="1" class="svelte-n4i31d"${add_attribute("value", Columna, 0)}></div> </article>`;
});
const css$3 = {
  code: "article.svelte-11g1of.svelte-11g1of{display:flex;flex-flow:column wrap;justify-content:center;align-items:center}article.svelte-11g1of .Input_Radio.svelte-11g1of{display:flex;flex-flow:column wrap;justify-content:center;align-items:left}article.svelte-11g1of .Input_Radio label.svelte-11g1of{background-color:#0f3746;border-radius:0.4em;margin:0.25em 1em;padding:0.3em 0.9em}article.svelte-11g1of .Input_Radio label.svelte-11g1of:hover{background:#455057}article.svelte-11g1of .Input_Radio label input.svelte-11g1of{accent-color:red}article.svelte-11g1of .Input_Radio label input.svelte-11g1of:checked{box-shadow:0 0 0 2px red}",
  map: null
};
const Input_Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )" } = $$props;
  let { Columna } = $$props;
  let { Visible = true } = $$props;
  let { Orientacion = "vertical" } = $$props;
  let { Opciones = ["Error - no definido variable - Opciones -"] } = $$props;
  if ($$props.Pregunta_Texto === void 0 && $$bindings.Pregunta_Texto && Pregunta_Texto !== void 0)
    $$bindings.Pregunta_Texto(Pregunta_Texto);
  if ($$props.Columna === void 0 && $$bindings.Columna && Columna !== void 0)
    $$bindings.Columna(Columna);
  if ($$props.Visible === void 0 && $$bindings.Visible && Visible !== void 0)
    $$bindings.Visible(Visible);
  if ($$props.Orientacion === void 0 && $$bindings.Orientacion && Orientacion !== void 0)
    $$bindings.Orientacion(Orientacion);
  if ($$props.Opciones === void 0 && $$bindings.Opciones && Opciones !== void 0)
    $$bindings.Opciones(Opciones);
  $$result.css.add(css$3);
  return `<article${add_attribute("id", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} class="svelte-11g1of"${add_styles({ "display": Visible ? "flex" : "none" })}>${validate_component(X___Pregunta, "Pregunta").$$render($$result, { Texto: Pregunta_Texto }, {}, {})} <div class="Input_Radio svelte-11g1of"${add_styles({
    "flex-flow": Orientacion.toUpperCase() === "VERTICAL" ? "column wrap" : "row wrap"
  })}>${each(Opciones, (Opcion) => {
    return `<label class="svelte-11g1of"><input type="radio"${add_attribute("name", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)}${add_attribute("value", Opcion, 0)} class="svelte-11g1of"${Opcion === Columna ? add_attribute("checked", true, 1) : ""}> ${escape(Opcion)} </label>`;
  })}</div></article>     `;
});
const css$2 = {
  code: "article.svelte-3w6pcc.svelte-3w6pcc{display:flex;flex-flow:column wrap;justify-content:center;align-items:center}article.svelte-3w6pcc .Input_Text.svelte-3w6pcc{width:100%;padding:0 0.3em;margin:0.2em 0 1em 0}article.svelte-3w6pcc .Input_Text input.svelte-3w6pcc{background-color:#0f3746;padding:0.5em;border:1px solid #3e5665;border-radius:0.2em;width:100%;color:#cecece}article.svelte-3w6pcc .Input_Text input.svelte-3w6pcc:hover{background-color:#455057}",
  map: null
};
const Input_Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )" } = $$props;
  let { Columna } = $$props;
  let { Visible = true } = $$props;
  if ($$props.Pregunta_Texto === void 0 && $$bindings.Pregunta_Texto && Pregunta_Texto !== void 0)
    $$bindings.Pregunta_Texto(Pregunta_Texto);
  if ($$props.Columna === void 0 && $$bindings.Columna && Columna !== void 0)
    $$bindings.Columna(Columna);
  if ($$props.Visible === void 0 && $$bindings.Visible && Visible !== void 0)
    $$bindings.Visible(Visible);
  $$result.css.add(css$2);
  return `<article${add_attribute("id", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} class="svelte-3w6pcc"${add_styles({ "display": Visible ? "flex" : "none" })}>${validate_component(X___Pregunta, "Pregunta").$$render($$result, { Texto: Pregunta_Texto }, {}, {})} <div class="Input_Text svelte-3w6pcc"><input type="text"${add_attribute("name", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} style="text-transform:uppercase" class="svelte-3w6pcc"${add_attribute("value", Columna, 0)}></div></article>     `;
});
const css$1 = {
  code: "article.svelte-yy95u0.svelte-yy95u0{display:flex;flex-flow:column wrap;justify-content:center;align-items:center}article.svelte-yy95u0 .Input_Time input.svelte-yy95u0{background-color:#0f3746;border-radius:0.4em;margin:0.25em 1em;padding:0.3em 0.9em;font-size:1.2rem;color:#cecece}article.svelte-yy95u0 .Input_Time input.svelte-yy95u0:hover{background:#455057}",
  map: null
};
const Input_Time = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )" } = $$props;
  let { Visible = true } = $$props;
  let { Columna } = $$props;
  let { Hora_Minima = "00:00" } = $$props;
  let { Hora_Maxima = "22:00" } = $$props;
  if ($$props.Pregunta_Texto === void 0 && $$bindings.Pregunta_Texto && Pregunta_Texto !== void 0)
    $$bindings.Pregunta_Texto(Pregunta_Texto);
  if ($$props.Visible === void 0 && $$bindings.Visible && Visible !== void 0)
    $$bindings.Visible(Visible);
  if ($$props.Columna === void 0 && $$bindings.Columna && Columna !== void 0)
    $$bindings.Columna(Columna);
  if ($$props.Hora_Minima === void 0 && $$bindings.Hora_Minima && Hora_Minima !== void 0)
    $$bindings.Hora_Minima(Hora_Minima);
  if ($$props.Hora_Maxima === void 0 && $$bindings.Hora_Maxima && Hora_Maxima !== void 0)
    $$bindings.Hora_Maxima(Hora_Maxima);
  $$result.css.add(css$1);
  return `<article${add_attribute("id", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} class="svelte-yy95u0"${add_styles({ "display": Visible ? "flex" : "none" })}>${validate_component(X___Pregunta, "Pregunta").$$render($$result, { Texto: Pregunta_Texto }, {}, {})} <div class="Input_Time"><input type="time"${add_attribute("min", Hora_Minima, 0)}${add_attribute("max", Hora_Maxima, 0)}${add_attribute("name", Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-")), 0)} required class="svelte-yy95u0"${add_attribute("value", Columna, 0)}></div> </article>`;
});
const css = {
  code: '@charset "UTF-8";body.svelte-1otukrf.svelte-1otukrf{font-family:"Source Sans Pro", sans-serif;font-size:15px;background-color:rgb(5, 15, 21);color:#cecece}@media only screen and (max-width: 767px){body.svelte-1otukrf.svelte-1otukrf{font-size:14px}}body.svelte-1otukrf .Header.svelte-1otukrf{display:flex;flex-flow:row wrap;justify-content:center;align-items:center;justify-content:space-between;text-align:center;padding:1em 0}body.svelte-1otukrf .Header .Titulo.svelte-1otukrf{align-items:center;padding-left:0.2em}body.svelte-1otukrf .Header .Titulo .Titulo_Principal.svelte-1otukrf{font-size:1.4em}@media only screen and (max-width: 767px){body.svelte-1otukrf .Header .Titulo .Titulo_Principal.svelte-1otukrf{font-size:1.2em}}body.svelte-1otukrf .Header .Titulo .Titulo_Segundario.svelte-1otukrf{font-size:0.9em}body.svelte-1otukrf .Header .LogoTipo img.svelte-1otukrf{padding-top:0.5em;width:8.5em}@media only screen and (max-width: 767px){body.svelte-1otukrf .Header .LogoTipo img.svelte-1otukrf{width:4em}}body.svelte-1otukrf .Ancho_Limitado.svelte-1otukrf{background:rgb(8, 22, 27);max-width:750px;margin:0 auto;padding:0.2em 0.4em}body.svelte-1otukrf .Formulario .Escala.svelte-1otukrf{display:flex;justify-content:center;align-items:center}body.svelte-1otukrf .Formulario .Escala img.svelte-1otukrf{width:70%}@media only screen and (max-width: 767px){body.svelte-1otukrf .Formulario .Escala img.svelte-1otukrf{width:95%}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const Columnas = {
    FechaRegistro: /* @__PURE__ */ new Date(),
    P01: "",
    P02: "",
    P03: "",
    P04: "",
    P05: "",
    P06: "",
    P07: "",
    P08: "",
    P09: "",
    P10: "",
    P11: "",
    P12: "",
    P13: "",
    P14: "",
    P15: "",
    P16: "",
    P17: "",
    P18: "",
    P19: "",
    P20: "",
    P21: ""
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<body class="svelte-1otukrf"><header class="Header Ancho_Limitado svelte-1otukrf" data-svelte-h="svelte-173pn5j"><div class="Titulo svelte-1otukrf"><div class="Titulo_Principal svelte-1otukrf"><b>Estudio de Satisfacción del Cliente</b></div> <div class="Titulo_Segundario svelte-1otukrf">( AÑO: 2023 )</div></div>  <div class="LogoTipo"><img${add_attribute("src", LogoEmpresa, 0)} alt="" class="svelte-1otukrf"></div></header>      <form class="Formulario Ancho_Limitado svelte-1otukrf" method="post" action=""><div data-svelte-h="svelte-89olfe">La siguiente encuesta es completamente anónima y es realizada por la empresa <b>Analistas y Consultores</b>, tiene como finalidad mejorar los servicios y productos de <b>EL RESTAURANTE</b>.
			Agradecemos su gentil colaboración. <br> <br>

			Tomando en cuenta la escala de 1 a 500, donde:<br> <div class="Escala svelte-1otukrf"><img${add_attribute("src", Escala_Likert, 0)} alt="" class="svelte-1otukrf"></div></div>     ${validate_component(_01_Titulo_Segmento, "Titulo_Segmento").$$render($$result, { Texto: "LA COMIDA" }, {}, {})} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P01.- El sabor de la comida",
        Columna: Columnas.P01
      },
      {
        Columna: ($$value) => {
          Columnas.P01 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P02.- La presentación de la comida",
        Columna: Columnas.P02
      },
      {
        Columna: ($$value) => {
          Columnas.P02 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P03.- La variedad del menú que ofrece <b> EL RESTAURANTE </b>",
        Columna: Columnas.P03
      },
      {
        Columna: ($$value) => {
          Columnas.P03 = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${validate_component(_01_Titulo_Segmento, "Titulo_Segmento").$$render($$result, { Texto: "SERVICIO AL CLIENTE" }, {}, {})} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P04.- La atención del personal de <b> EL RESTAURANTE </b>",
        Columna: Columnas.P04
      },
      {
        Columna: ($$value) => {
          Columnas.P04 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P05.- El tiempo que esperó hasta recibir su pedido",
        Columna: Columnas.P05
      },
      {
        Columna: ($$value) => {
          Columnas.P05 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P06.- La facilidad del proceso de pago",
        Columna: Columnas.P06
      },
      {
        Columna: ($$value) => {
          Columnas.P06 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P07.- Los precios",
        Columna: Columnas.P07
      },
      {
        Columna: ($$value) => {
          Columnas.P07 = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${validate_component(_01_Titulo_Segmento, "Titulo_Segmento").$$render($$result, { Texto: "AMBIENTE DEL RESTAURANTE" }, {}, {})} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P08.- La limpieza de EL RESTAURANTE",
        Columna: Columnas.P08
      },
      {
        Columna: ($$value) => {
          Columnas.P08 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P09.- La decoración de EL RESTAURANTE",
        Columna: Columnas.P09
      },
      {
        Columna: ($$value) => {
          Columnas.P09 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Malla, "Input_Malla").$$render(
      $$result,
      {
        Pregunta_Texto: "P10.- La limpieza del baño de EL RESTAURANTE",
        Columna: Columnas.P10
      },
      {
        Columna: ($$value) => {
          Columnas.P10 = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${validate_component(_01_Titulo_Segmento, "Titulo_Segmento").$$render($$result, { Texto: "OPINIONES GENERALES" }, {}, {})} ${validate_component(Input_Radio, "Input_Radio").$$render(
      $$result,
      {
        Pregunta_Texto: "P11.- En general, ¿Qué tan satisfecho se encuentra con EL RESTAURANTE?",
        Opciones: [
          "5. Muy Satisfecho",
          "4. Satisfecho",
          "3. Ni Satisfecho / Ni Insatisfecho",
          "2. Insatisfecho",
          "1. Muy Insatisfecho"
        ],
        Columna: Columnas.P11
      },
      {
        Columna: ($$value) => {
          Columnas.P11 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Text, "Input_Text").$$render(
      $$result,
      {
        Pregunta_Texto: "P12.- ¿Qué le hace falta a EL RESTAURANTE para que usted se encuentre Muy Satisfecho?",
        Visible: Columnas.P11 == "5. Muy Satisfecho" ? false : true,
        Columna: Columnas.P12
      },
      {
        Columna: ($$value) => {
          Columnas.P12 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Text, "Input_Text").$$render(
      $$result,
      {
        Pregunta_Texto: "P13.- ¿Cuál es la principal fortaleza qué está haciendo bien EL RESTAURANTE?",
        Columna: Columnas.P13
      },
      {
        Columna: ($$value) => {
          Columnas.P13 = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${validate_component(Input_Text, "Input_Text").$$render(
      $$result,
      {
        Pregunta_Texto: "P14.- ¿Qué sugerencia le haría a EL RESTAURANTE para mejorar?",
        Columna: Columnas.P14
      },
      {
        Columna: ($$value) => {
          Columnas.P14 = $$value;
          $$settled = false;
        }
      },
      {}
    )}  ${validate_component(_01_Titulo_Segmento, "Titulo_Segmento").$$render($$result, { Texto: "DATOS DEL ENTREVISTADO" }, {}, {})} ${validate_component(Input_Radio, "Input_Radio").$$render(
      $$result,
      {
        Pregunta_Texto: "P15.- ¿Sexo?",
        Orientacion: "Horizontal",
        Opciones: ["Hombre", "Mujer"],
        Columna: Columnas.P15
      },
      {
        Columna: ($$value) => {
          Columnas.P15 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Number, "Input_Number").$$render(
      $$result,
      {
        Pregunta_Texto: "P16.- ¿Cuantos años tiene?",
        Valor_Minimo: "10",
        Valor_Maximo: "105",
        Columna: Columnas.P16
      },
      {
        Columna: ($$value) => {
          Columnas.P16 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Radio, "Input_Radio").$$render(
      $$result,
      {
        Pregunta_Texto: "P17.- ¿Como se enteró de la existencia de EL RESTAURANTE?",
        Orientacion: "Vertical",
        Opciones: [
          "Pase por el lugar y lo vi",
          "Lo vi en Internet",
          "Por una publicidad impresa",
          "Me recomendo un conocido",
          "De otra forma"
        ],
        Columna: Columnas.P17
      },
      {
        Columna: ($$value) => {
          Columnas.P17 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Number, "Input_Number").$$render(
      $$result,
      {
        Pregunta_Texto: "P18.- Aproximadamente ¿Cuantás veces visitó EL RESTAURANTE?",
        Valor_Minimo: "1",
        Valor_Maximo: "900",
        Columna: Columnas.P18
      },
      {
        Columna: ($$value) => {
          Columnas.P18 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Date, "Input_Date").$$render(
      $$result,
      {
        Pregunta_Texto: "P19.- ¿Qué fecha fue la última visita a EL RESTAURANTE?",
        Fecha_Minima: "2021-12-22",
        Columna: Columnas.P19
      },
      {
        Columna: ($$value) => {
          Columnas.P19 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Time, "Input_Time").$$render(
      $$result,
      {
        Pregunta_Texto: "P20.- ¿Y a qué hora aproximada fue la última visita a EL RESTAURANTE?",
        Hora_Minima: "06:00",
        Hora_Maxima: "23:00",
        Columna: Columnas.P20
      },
      {
        Columna: ($$value) => {
          Columnas.P20 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Number, "Input_Number").$$render(
      $$result,
      {
        Pregunta_Texto: "P21.- Aproximadamente ¿Cuantas cuadras te movilizaste para poder llegar a EL RESTAURANTE?",
        Valor_Minimo: "1",
        Valor_Maximo: "900",
        Columna: Columnas.P21
      },
      {
        Columna: ($$value) => {
          Columnas.P21 = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Input_Boton_Enviar, "Input_Boton_Enviar").$$render($$result, {}, {}, {})}   </form></body>       `;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
