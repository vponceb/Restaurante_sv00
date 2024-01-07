<script>
  import Pregunta from "../componentes/x___Pregunta.svelte";

  export let Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )";
  export let Visible = true;
  export let Columna;
  export let Hora_Minima = "00:00";
  export let Hora_Maxima = "22:00";
</script>

<article
  style:display={Visible ? "flex" : "none"}
  id={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
>
  <Pregunta Texto={Pregunta_Texto} />

  <div class="Input_Time">
    <input
      type="time"
      bind:value={Columna}
      min={Hora_Minima}
      max={Hora_Maxima}
      name={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
      required
    />
  </div>
</article>

<style lang="scss">
  $Input_Fondo_Color: #0f3746;
  $Input_Borde_Color: #3e5665;
  $Input_Hover_Color: #455057;

  article {
    display: flex;
    /* Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)*/
    flex-flow: column wrap;
    /* space-between(hasia los extremos), center(centro)  */
    justify-content: center;
    /* Contenido Justificado horizontalmente/verticalmente */
    align-items: center;

    .Input_Time {
      input {
        background-color: $Input_Fondo_Color;
        border-radius: 0.4em;
        margin: 0.25em 1em;
        padding: 0.3em 0.9em;
        font-size: 1.2rem;
        color: #cecece;

        &:hover {
          background: $Input_Hover_Color;
        }
      }
    }
  }
</style>
