<script>
	/* Conectar con Validaciones.JS */
	import { Validar } from '$lib/validaciones.js';
	const { Validar_Columnas } = Validar();

	/* Imagenes importadas */
	import LogoEmpresa from '../califica/img/Logo.png';
	import Escala_Likert from './img/Escala_Likert.png';

	/* Componentes importados. NOTA: @ referencia a la carpera 'src' */
	import Titulo_Segmento from '../../componentes/01_Titulo_Segmento.svelte';
	import Input_Boton_Enviar from '../../componentes/Input_Boton_Enviar.svelte';
	import Input_Checkbox from '../../componentes/Input_Checkbox.svelte';
	import Input_Date from '../../componentes/Input_Date.svelte';
	import Input_Lista_Ordenable from '../../componentes/Input_Lista_Ordenable.svelte';
	import Input_Malla from '../../componentes/Input_Malla.svelte';
	import Input_Number from '../../componentes/Input_Number.svelte';
	import Input_Radio from '../../componentes/Input_Radio.svelte';
	import Input_Text from '../../componentes/Input_Text.svelte';
	import Input_Time from '../../componentes/Input_Time.svelte';

	const Columnas = {
		FechaRegistro: new Date(),
		P01: '',
		P02: '',
		P03: '',
		P04: '',
		P05: '',
		P06: '',
		P07: '',
		P08: '',
		P09: '',
		P10: '',
		P11: '',
		P12: '',
		P13: '',
		P14: '',
		P15: '',
		P16: '',
		P17: '',
		P18: '',
		P19: '',
		P20: '',
		P21: ''
	};
</script>

<body>
	<header class="Header Ancho_Limitado">
		<div class="Titulo">
			<div class="Titulo_Principal">
				<b>Estudio de Satisfacción del Cliente</b>
			</div>

			<div class="Titulo_Segundario">( AÑO: 2023 )</div>
		</div>

		<!-- TODO: El logotipo es importado en la seccion de script con la variable 'LogoEmpresa' -->
		<div class="LogoTipo">
			<img src={LogoEmpresa} alt="" />
		</div>
	</header>

	<!-- TODO: *************************************************************************************************************************************************  -->
	<!-- TODO: *************************************************************************************************************************************************  -->
	<!-- TODO: *************************************************************************************************************************************************  -->
	<!-- TODO: *************************************************************************************************************************************************  -->

	<!-- Al presionar el boton enviar, se llama al composable "Validaciones", dentro de validaciones si todo es correcto llama a la cuncion GrabarRegistro(Columnas) -->

	<form
		class="Formulario Ancho_Limitado"
		method="post"
		action=""
		on:submit|preventDefault={Validar_Columnas(Columnas)}
	>
		<div>
			La siguiente encuesta es completamente anónima y es realizada por la empresa <b>
				Analistas y Consultores</b
			>, tiene como finalidad mejorar los servicios y productos de <b>EL RESTAURANTE</b>.
			Agradecemos su gentil colaboración. <br />
			<br />

			Tomando en cuenta la escala de 1 a 500, donde:<br />

			<div class="Escala">
				<img src={Escala_Likert} alt="" />
			</div>
		</div>

		<!-- TODO: / ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓ -->
		<!-- TODO: / ↓  ↓   INICIO DE COMPONENTES  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓ -->
		<!-- TODO: / ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓ -->

		<!-- TODO *************************************************************************************************************** -->
		<Titulo_Segmento Texto="LA COMIDA" />

		<Input_Malla Pregunta_Texto="P01.- El sabor de la comida" bind:Columna={Columnas.P01} />

		<Input_Malla Pregunta_Texto="P02.- La presentación de la comida" bind:Columna={Columnas.P02} />

		<Input_Malla
			Pregunta_Texto="P03.- La variedad del menú que ofrece <b> EL RESTAURANTE </b>"
			bind:Columna={Columnas.P03}
		/>

		<!-- TODO *************************************************************************************************************** -->
		<Titulo_Segmento Texto="SERVICIO AL CLIENTE" />

		<Input_Malla
			Pregunta_Texto="P04.- La atención del personal de <b> EL RESTAURANTE </b>"
			bind:Columna={Columnas.P04}
		/>
		<Input_Malla
			Pregunta_Texto="P05.- El tiempo que esperó hasta recibir su pedido"
			bind:Columna={Columnas.P05}
		/>
		<Input_Malla
			Pregunta_Texto="P06.- La facilidad del proceso de pago"
			bind:Columna={Columnas.P06}
		/>

		<Input_Malla Pregunta_Texto="P07.- Los precios" bind:Columna={Columnas.P07} />

		<!-- TODO *************************************************************************************************************** -->
		<Titulo_Segmento Texto="AMBIENTE DEL RESTAURANTE" />

		<Input_Malla Pregunta_Texto="P08.- La limpieza de EL RESTAURANTE" bind:Columna={Columnas.P08} />
		<Input_Malla
			Pregunta_Texto="P09.- La decoración de EL RESTAURANTE"
			bind:Columna={Columnas.P09}
		/>
		<Input_Malla
			Pregunta_Texto="P10.- La limpieza del baño de EL RESTAURANTE"
			bind:Columna={Columnas.P10}
		/>

		<!-- TODO *************************************************************************************************************** -->

		<Titulo_Segmento Texto="OPINIONES GENERALES" />

		<Input_Radio
			Pregunta_Texto="P11.- En general, ¿Qué tan satisfecho se encuentra con EL RESTAURANTE?"
			bind:Columna={Columnas.P11}
			Opciones={[
				'5. Muy Satisfecho',
				'4. Satisfecho',
				'3. Ni Satisfecho / Ni Insatisfecho',
				'2. Insatisfecho',
				'1. Muy Insatisfecho'
			]}
		/>

		<Input_Text
			Pregunta_Texto="P12.- ¿Qué le hace falta a EL RESTAURANTE para que usted se encuentre Muy Satisfecho?"
			bind:Columna={Columnas.P12}
			Visible={Columnas.P11 == '5. Muy Satisfecho' ? false : true}
		/>

		<Input_Text
			Pregunta_Texto="P13.- ¿Cuál es la principal fortaleza qué está haciendo bien EL RESTAURANTE?"
			bind:Columna={Columnas.P13}
		/>

		<!-- {{ Columnas.P13 }} -->

		<Input_Text
			Pregunta_Texto="P14.- ¿Qué sugerencia le haría a EL RESTAURANTE para mejorar?"
			bind:Columna={Columnas.P14}
		/>

		<!-- TODO *************************************************************************************************************** -->

		<Titulo_Segmento Texto="DATOS DEL ENTREVISTADO" />

		<Input_Radio
			Pregunta_Texto="P15.- ¿Sexo?"
			bind:Columna={Columnas.P15}
			Orientacion="Horizontal"
			Opciones={['Hombre', 'Mujer']}
		/>

		<Input_Number
			Pregunta_Texto="P16.- ¿Cuantos años tiene?"
			bind:Columna={Columnas.P16}
			Valor_Minimo="10"
			Valor_Maximo="105"
		/>

		<Input_Radio
			Pregunta_Texto="P17.- ¿Como se enteró de la existencia de EL RESTAURANTE?"
			bind:Columna={Columnas.P17}
			Orientacion="Vertical"
			Opciones={[
				'Pase por el lugar y lo vi',
				'Lo vi en Internet',
				'Por una publicidad impresa',
				'Me recomendo un conocido',
				'De otra forma'
			]}
		/>

		<Input_Number
			Pregunta_Texto="P18.- Aproximadamente ¿Cuantás veces visitó EL RESTAURANTE?"
			bind:Columna={Columnas.P18}
			Valor_Minimo="1"
			Valor_Maximo="900"
		/>

		<Input_Date
			Pregunta_Texto="P19.- ¿Qué fecha fue la última visita a EL RESTAURANTE?"
			bind:Columna={Columnas.P19}
			Fecha_Minima="2021-12-22"
		/>

		<Input_Time
			Pregunta_Texto="P20.- ¿Y a qué hora aproximada fue la última visita a EL RESTAURANTE?"
			bind:Columna={Columnas.P20}
			Hora_Minima="06:00"
			Hora_Maxima="23:00"
		/>

		<Input_Number
			Pregunta_Texto="P21.- Aproximadamente ¿Cuantas cuadras te movilizaste para poder llegar a EL RESTAURANTE?"
			bind:Columna={Columnas.P21}
			Valor_Minimo="1"
			Valor_Maximo="900"
		/>

		<Input_Boton_Enviar />

		<!-- TODO: / ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑ -->
		<!-- TODO: / ↓  ↓   FIN DE COMPONENTES  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓ -->
		<!-- TODO: / ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑  ↑ -->
	</form>
</body>

<!--TODO *********************************************************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO ********************   INICIO DEL STYLE   ***************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO *********************************************************************************-->

<!-- Forzar estilos Globales :global(* h1 .class) (   https://joyofcode.xyz/global-styles-in-sveltekit -->
<!-- Los estilos globales se estan definiendo en src/app.html (letra, espacios, etc.) -->

<style lang="scss">
	$Pagina_Color_Fondo: rgb(5, 15, 21);
	$Formulario_Color_Fondo: rgb(8, 22, 27);
	$Letra_Color: #cecece;

	@mixin movil() {
		@media only screen and (max-width: 767px) {
			@content;
		}
	}

	body {
		font-family: 'Source Sans Pro', sans-serif; /* TODO Tipo de letra*/
		font-size: 15px; /* Tamaño de deltra por defecto */

		@include movil() {
			font-size: 14px; /* Tamaño de deltra por defecto */
		}
		background-color: $Pagina_Color_Fondo; /* TODO Color de fondo */
		color: $Letra_Color; /* TODO color texto para todo el documento*/

		.Header {
			display: flex;
			flex-flow: row wrap; /* Contenido en filas(row)/columas(colum) - wraw(bajan si no entra)*/
			justify-content: center; /* space-between(hasia los extremos), center(centro)  */
			align-items: center; /* Contenido Justificado horizontalmente/verticalmente */
			justify-content: space-between; /* space-between(hasia los extremos), center(centro)  */
			text-align: center; /* Alinea contenido horizantalmente */
			padding: 1em 0;

			.Titulo {
				align-items: center; /* Contenido Justificado horizontalmente */
				padding-left: 0.2em; /* arriba/abajo es de "2rem" y derecha/izquierda es "0" */

				.Titulo_Principal {
					font-size: 1.4em;
					/* font-weight: normal;*/
					@include movil() {
						font-size: 1.2em;
					}
				}

				.Titulo_Segundario {
					font-size: 0.9em;
				}
			}

			.LogoTipo img {
				padding-top: 0.5em;
				width: 8.5em;

				@include movil() {
					width: 4em;
				}
			}
		}

		.Ancho_Limitado {
			background: $Formulario_Color_Fondo;
			max-width: 750px; /* Maximo ancho */
			margin: 0 auto; /* Centra este contenedor */
			padding: 0.2em 0.4em;
		}

		.Formulario {
			.Escala {
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					width: 70%;

					@include movil() {
						width: 95%;
					}
				}
			}
		}
	}
</style>
