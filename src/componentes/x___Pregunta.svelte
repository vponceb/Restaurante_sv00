<script>
  export let Texto;
</script>

<div class="Pregunta">
<!-- Pone negrita el numero de pregunta -->
  <b> 
    {Texto.substring(0, Texto.indexOf(".-"))} 
  </b>
<!-- Texto de la pregunta -->  
  {@html Texto.substring(Texto.indexOf(".-"), Texto.length)}
</div>

<style >
  .Pregunta {
    width: 100%;
    margin: 0.5rem 0 0.5rem 0;
    padding: 0.2rem 0rem 0.2rem 2.2rem;
    text-align: left;
    text-indent: -2.2rem;
  }
</style>
