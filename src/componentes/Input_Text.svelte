<script>
  import Pregunta from "../componentes/x___Pregunta.svelte";

  export let Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )";
  export let Columna;
  export let Visible = true;
</script>

<article
  style:display={Visible ? "flex" : "none"}
  id={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
>
  <Pregunta Texto={Pregunta_Texto} />

  <div class="Input_Text">
    <input
      type="text"
      name={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
      bind:value={Columna}      
      style="text-transform:uppercase"
    />
  </div>
</article>

<!--TODO *********************************************************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO ********************   INICIO DEL STYLE   ***************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO *********************************************************************************-->

<style lang="scss">
  $Input_Fondo_Color: #0f3746;
  $Input_Borde_Color: #3e5665;
  $Input_Hover_Color: #455057;
  $Letra_Color: #cecece;

  article {
    // NOTA: en este caso el flex es reemplazado por el que se declara en el mismo elemento
    display: flex;        
    /* Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)*/
    flex-flow: column wrap;
    /* space-between(hasia los extremos), center(centro)  */
    justify-content: center;
    /* Contenido Justificado horizontalmente/verticalmente */
    align-items: center;

    .Input_Text {
      width: 100%;
      padding: 0 0.3em;
      margin: 0.2em 0 1em 0;

      input {
        background-color: $Input_Fondo_Color;
        padding: 0.5em;
        border: 1px solid $Input_Borde_Color;
        border-radius: 0.2em;
        width: 100%;
        color: $Letra_Color; /* TODO color texto para todo el documento*/

        &:hover {
          background-color: $Input_Hover_Color;
        }
      }
    }
  }
</style>
