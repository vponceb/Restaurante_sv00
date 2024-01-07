<script>
  import Pregunta from "../componentes/x___Pregunta.svelte";

  import { SortableItem } from "svelte-sortable-items";

  export let Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )";
  export let Columna;
  export let Visible = true;
  export let Orientacion = "vertical";
  export let Opciones = ["Error - no definido variable - Opciones -"];

  // Le asigna dinamicamente el valor de Opciones a Columna
  $:{Columna = Opciones}
  
  let NumeroElementoMovido;
  
</script>

<svelte:head>  
  <!-- MAKE IT WORK ON MOBILE DEVICES -->
  <script src="https://unpkg.com/svelte-drag-drop-touch"></script>
  <!---->
</svelte:head>

<article
  style:display={Visible ? "flex" : "none"}
  id={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
>
  <Pregunta Texto={Pregunta_Texto} />

  <div
    class="Input_List"
    style:flex-flow={Orientacion.toUpperCase() === "VERTICAL"
      ? "column wrap"
      : "row wrap"}
  >
    {#each Opciones as Opcion, Indice}
      
      <lavel class="ListaOpciones">
        <div>
          <SortableItem
            propItemNumber={Indice}
            bind:propData={Opciones}
            bind:propHoveredItemNumber={NumeroElementoMovido}
          >
            <div class:classHovere={NumeroElementoMovido === Indice}>
              <i class="fa-solid fa-arrow-down-arrow-up fa-bounce"
                >⇅ &nbsp &nbsp
              </i>{Opcion}              
            </div>
          </SortableItem>
        </div>
      </lavel>
    {/each}
  </div>
</article>

<!--TODO *********************************************************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO ********************   INICIO DEL STYLE   ***************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO *********************************************************************************-->

<style lang="scss">
  $Input_Fondo_Color: #0f3746;
  $Input_Hover_Color: #455057;

  article {
    // NOTA: en este caso el flex es reemplazado por el que se declara en el mismo elemento
    display: flex;
    // Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)
    flex-flow: column wrap;
    /* space-between(hasia los extremos), center(centro)  */
    justify-content: center;
    /* Contenido Justificado horizontalmente/verticalmente */
    align-items: center;

    .Input_List {
      display: flex;
      // Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)
      // NOTA: en este caso el flex-flow  es reemplazado por el que se declara en el mismo elemento
      flex-flow: column wrap;
      /* space-between(hasia los extremos), center(centro)  */
      justify-content: center;
      /* Contenido Justificado horizontalmente/verticalmente */
      align-items: left;

      .ListaOpciones {
        background-color: $Input_Fondo_Color;
        border-radius: 0.4em;
        margin: 0.25em 1em;
        padding: 0.3em 0.9em;

        &:hover {
          background: $Input_Hover_Color;
        }

        // input {
        //   accent-color: red;

        //   &:checked {
        //     box-shadow: 0 0 0 2px red;
        //   }
        // }
      }
    }
  }
</style>
