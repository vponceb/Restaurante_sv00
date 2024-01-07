<script>
  import Pregunta from "../componentes/x___Pregunta.svelte";

  export let Pregunta_Texto;
  export let Visible = true;
  export let Columna;
  export let Fecha_Minima = "01/01/1900";
  export let Fecha_Maxima = new Date().toLocaleDateString("fr-CA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
</script>

<article
  style:display={Visible ? "flex" : "none"}
  id={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
>

<Pregunta Texto={Pregunta_Texto} />

  <div class="Date">
    <input
      type="date"
      name={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
      bind:value={Columna}
      min={Fecha_Minima}
      max={Fecha_Maxima}
      pattern="\d{4}-\d{2}-\d{2}"
      required
    />
  </div>
</article>

<!--TODO *********************************************************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO ********************   INICIO DEL STYLE   ***************************************-->
<!--TODO ********************                      ***************************************-->

<style lang="scss">
  $Input_Fondo_Color: #0f3746;
  $Input_Hover_Color: #455057;

  article {
    // NOTA: en este caso el flex es reemplazado por el que se declara en el mismo elemento
    display: flex;
    /* Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)*/
    flex-flow: column wrap;
    /* space-between(hasia los extremos), center(centro)  */
    justify-content: center;
    /* Contenido Justificado horizontalmente/verticalmente */
    align-items: center;

    .Date {
      input {
        background-color: $Input_Fondo_Color;
        border-radius: 0.4em;
        margin: 0.25em 1em;
        padding: 0.3em 0.9em;
        font-size: 1.2em;
        color: #cecece;

        &:hover {
          background: $Input_Hover_Color;
        }
      }
    }
  }
</style>
