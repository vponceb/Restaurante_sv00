<script>
    import Pregunta from "../componentes/x___Pregunta.svelte";

  export let Pregunta_Texto = "ERROR .- ( No se definio - Pregunta_Texto - )";
  export let Columna;
  export let Visible = true;
  let Opciones = [
    "5. Muy Satisfecho",
    "4. Satisfecho",
    "3. Ni Satisfecho / Ni Insatisfecho",
    "2. Insatisfecho",
    "1. Muy Insatisfecho",
  ];
</script>

<article
  style:display={Visible ? "" : "none"}
  id={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
>

  <div class="Pregunta_Malla">
    <div class="Bloque">
      <div class="Pregunta_Item">
        <Pregunta Texto={Pregunta_Texto} />
      </div>

      <div class="Input_Radio">
        {#each Opciones as Opcion}
          <label>
            <input
              type="radio"
              name={Pregunta_Texto.substring(0, Pregunta_Texto.indexOf(".-"))}
              value={Opcion}
              bind:group={Columna}
            />
            { Opcion.substring(0, Opcion.indexOf(". ")) }
          </label>
        {/each}
      </div>
    </div>
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
  .Pregunta_Malla {
    display: flex;
    /* Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)*/
    flex-flow: column wrap;
    /* space-between(hasia los extremos), center(centro)  */
    justify-content: center;
    /* Contenido Justificado horizontalmente/verticalmente */
    align-items: center;

    .Bloque {
      margin: 0.2em 0;
      display: flex;
      flex-flow: row nowrap; /* Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)*/
      justify-content: center; /* space-between(hasia los extremos), center(centro)  */
      align-items: center; /* Contenido Justificado horizontalmente/verticalmente */
      width: 100%;
      border: 1px solid rgb(38, 77, 82);
      border-radius: 0.3em;

      .Pregunta_Item {
        width: 55%;
        padding: 0em 0em 0em 0.5em;
      }

      .Input_Radio {
        width: 45%;
        display: flex;
        flex-flow: row wrap; /* Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)*/
        justify-content: center; /* space-between(hasia los extremos), center(centro)  */
        align-items: center; /* Contenido Justificado horizontalmente/verticalmente */

        label {
          background-color: $Input_Fondo_Color;
          border-radius: 0.5em;
          text-align: center;
          margin: 0.5em 0.1em;
          padding: 0.2em 0;
          width: 18%;

          &:hover {
            background-color: $Input_Hover_Color;
          }

          input {
            accent-color: red;
            &:checked {
              box-shadow: 0 0 0 2px red;
            }
          }
        }
      }
    }
  }
}
</style>
