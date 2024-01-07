<script>
  export let Texto;
</script>

<div class="Titulo_Segmento">
  {Texto}
</div>

<style lang="scss">
  .Titulo_Segmento {
    text-align: center;
    background: var(--Pagina_Color_Fondo); /* TODO Color de fondo */
    padding: 0.3em 0;
    margin: 1.5em 0 1em 0;
    border-radius: 0.8em;
    box-shadow:
      0px 3px 3px rgb(97, 115, 148),
      0px -3px 3px rgb(97, 115, 148); /* Sombra recuadro */
  }
</style>
