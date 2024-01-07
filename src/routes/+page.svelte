<script>
	import { reveal } from 'svelte-reveal';

	import logo from '../routes/Documentos_de_PageRaiz/img/Logo.png';
	import './Documentos_de_PageRaiz/icomoon/style.css'; // iconos del pie de pagina

	import QuienesSomos_01 from '../routes/Documentos_de_PageRaiz/img/QuienesSomos_01.avif';

	import Arroz_Pollo from '../routes/Documentos_de_PageRaiz/img/Arroz_Pollo.avif';
	import Ceviche from '../routes/Documentos_de_PageRaiz/img/Ceviche.avif';
	import Pollo_Brasa from '../routes/Documentos_de_PageRaiz/img/Pollo_Brasa.avif';
	import Chancho_Palo from '../routes/Documentos_de_PageRaiz/img/Chancho_Palo.avif';

	import WhatsApp_Animado from '../routes/Documentos_de_PageRaiz/img/WhatsApp-Animado.gif';

	let Disp = '';

	let MostrarOcultar = () => {
		if (Disp === 'show') {
			Disp = 'No_show';
		} else {
			Disp = 'show';
		}
	};
</script>

<!--TODO ********************** TEMPLATE ***************************************-->
<html lang="es">
	<body>
		<!-- TODO ********************** Header (Logo y Menu) ***************************************-->
		<header class="Header">
			<div class="Logo_Menu">
				<!-- TODO: Link de pagina de la empresa -->
				<a href="http://www.ayc-marketing.com/">
					<!-- TODO: Logo de la empresa-->
					<img src={logo} alt="" />
				</a>

				<button class="button-mini" on:click={MostrarOcultar}>Menu</button>

				<nav class="navigation">
					<ul class={Disp}>
						<li><a href="#QuienesSomos">Nuestra Historia</a></li>
						<li><a href="#Servicios">Servicios</a></li>
						<!--<li> <a href="#Servicios">Clientes</a> </li>-->
						<li><a href="#Ubiquenos">Ubiquenos</a></li>
						<li><a href="#Contactenos">Contactenos</a></li>
					</ul>
				</nav>
			</div>
		</header>

		<!--TODO ********************** Introduccion ***************************************-->

		<div id="Introduccion" class="Introduccion Segmento_Flex">
			<div class="Contenedor">
				<div class="Ancho_Limitado">
					<div class="Titulo">Restaurante</div>

					<div class="Descripcion">
						Disfruta de la mejor comida en un ambiente acogedor y familiar
					</div>
				</div>
			</div>
		</div>

		<!--TODO ********************** QuienesSomos ***************************************-->

		<div id="QuienesSomos" class="QuienesSomos Segmento_Flex">
			<div class="Contenedor">
				<div class="Ancho_Limitado">
					<div class="Titulo">¿Quienes Somos?</div>

					<div class="Bloque_Flex">
						<div class="Texto">
							Contamos con los mejores profesionales culinarios del país. Cada uno de nuestros chef
							tiene años de experiencia en la preparación de platos peruanos auténticos y creativos
							que deleitan a nuestros clientes. Desde el ceviche más fresco hasta el lomo saltado
							más sabroso, nuestros cocineros ponen todo su amor y pasión en cada plato que
							preparan.
						</div>

						<div class="Imagen" use:reveal={{ transition: 'fade', duration: 2000, reset: true }}>
							<img src={QuienesSomos_01} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--TODO ********************** Servicios ***************************************-->

		<div id="Servicios" class="Servicios Segmento_Flex">
			<div class="Contenedor">
				<div class="Ancho_Limitado">
					<div class="Titulo">Nuestros principales Servicios</div>

					<!-- ********************************************** -->
					<div class="Bloque_Flex">
						<div class="Imagen" use:reveal={{ transition: 'fly', y: 200, duration: 800 }}>
							<img src={Arroz_Pollo} alt="" />
						</div>

						<div class="Texto">Arroz con Pollo</div>
					</div>

					<!-- ********************************************** -->
					<div class="Bloque_Flex">
						<div class="Texto">Ceviches</div>

						<div class="Imagen" use:reveal={{ transition: 'fly', y: 200, duration: 800 }}>
							<img src={Ceviche} alt="" />
						</div>
					</div>

					<!-- ********************************************** -->
					<div class="Bloque_Flex">
						<div class="Imagen" use:reveal={{ transition: 'fly', y: 200, duration: 800 }}>
							<img src={Pollo_Brasa} alt="" />
						</div>

						<div class="Texto">Pollo a la Brasa</div>
					</div>

					<!-- ********************************************** -->
					<div class="Bloque_Flex">
						<div class="Texto">Chancho al Palo</div>

						<div class="Imagen" use:reveal={{ transition: 'fly', y: 200, duration: 800 }}>
							<img src={Chancho_Palo} alt="" />
						</div>

						<!-- ********************************************** -->
					</div>
				</div>
			</div>
		</div>

		<!--TODO ********************** Clientes ***************************************-->
		<!--<div id="Clientes" class="Clientes Segmento_Flex">
    
            <div class="Contenedor">
                <div class="Ancho_Limitado">
    
                    <div class="Titulo">
                        Algunos de nuestros Clientes
                    </div>
    
    
                    <div class="Bloque_Flex  XX1">
                        <div class="Bloque">
                            <img src="img/Clientes.png">
                        </div>
    
                    </div>
                </div>
            </div>
    
        </div>-->

		<!--TODO ********************** Ubiquenos ***************************************-->

		<div id="Ubiquenos" class="Ubiquenos Segmento_Flex">
			<div class="Contenedor">
				<div class="Ancho_Limitado">
					<div class="Titulo">Ubiquenos</div>

					<div class="Descripcion">
						<!--El siguiente es el codigo del Google Map-->
						<iframe
							title=""
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.1851201452105!2d-77.06471598892132!3d-12.030773141554892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ced9ff697f8d%3A0xa33d3a9befbee6ff!2sJr.%20Sao%20Paulo%201582%2C%20Lima%2015101!5e0!3m2!1ses!2spe!4v1682444952464!5m2!1ses!2spe"
							width="1200"
							height="450"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</div>

		<!--TODO ********************** Contactenos ***************************************-->

		<div id="Contactenos" class="Contactenos Segmento_Flex">
			<div class="Contenedor">
				<div class="Ancho_Limitado">
					<div class="Titulo">Contactenos por WhatsApp</div>

					<div class="Descripcion">
						<a
							href="https://api.whatsapp.com/send?phone=51916991779&text=Consultenos%20sin%20compromiso&source=&data=/"
							title="Whatsapp"
						>
							<img src={WhatsApp_Animado} alt="Escribenos" />
						</a>
					</div>

					<div class="Descripcion">
						Tambiem nos puede llamar a los telefonos: 980 524 679 - 571 3441
					</div>
				</div>
			</div>
		</div>

		<!----- footer ----------------------------------->
		<footer class="footer">
			<!--Pie de Pagina-->
			<div class="social">
				<a
					href="https://www.facebook.com/Analistas-y-Consultores-187078141697179/"
					target="_blank"
					class="icon-facebook"
					title="Facebook"
				>
				</a>
				<a href="https://twitter.com/AyC_Peru" target="_blank" class="icon-twitter" title="Twitter">
				</a>
				<a
					href="http://analistasyconsultores.blogspot.pe/"
					target="_blank"
					class="icon-google"
					title="Blogspot"
				>
				</a>
				<a
					href="https://api.whatsapp.com/send?phone=51916991779&text=Consultenos%20sin%20compromiso&source=&data=/"
					class="icon-whatsapp"
					title="Whatsapp"
				>
				</a>
			</div>
			<a href="mailto:contacto@ayc-marketing.com">E-mail: contacto@ayc-marketing.com</a>
			<p>Telf.: (511) 571 3441, 916 991 779, 955 099 996</p>
			<p>Av. Brasil 1745, Oficina 104 - Jesús María</p>
			<a href="http://www.ayc-marketing.com">www.ayc-marketing.com</a>
		</footer>
	</body>
</html>

<!--TODO *********************************************************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO ********************   INICIO DEL STYLE   ***************************************-->
<!--TODO ********************                      ***************************************-->
<!--TODO *********************************************************************************-->

<!-- Forzar estilos Globales :global(* h1 .class) (   https://joyofcode.xyz/global-styles-in-sveltekit -->
<!-- Los estilos globales se estan definiendo en src/app.html (letra, espacios, etc.) -->

<style lang="scss">
	$ColorTexto: #f7f2f2;
	$Color_Menu: rgb(100, 30, 22, 0.9);
	$Color_Transparencia: rgb(100, 30, 22, 0.6); /* Color del Estilo de Pagina */
	$ColorMenu_hover: rgb(51, 5, 5);
	$AnchoLimitado: 1150px;

	/************************************************************************************/
	/***************   maxil *************************************************************/
	/************************************************************************************/
	@mixin movil() {
		@media only screen and (max-width: 767px) {
			@content;
		}
	}

	/************************************************************************************/
	/***************   body *************************************************************/
	/************************************************************************************/
	body {
		font-family: 'Source Sans Pro', sans-serif; /*  Tipo de letra*/
		color: $ColorTexto; /*Color del Texto*/
		font-size: 18px; /* Tamaño de deltra por defecto */

		@include movil() {
			font-size: 13px; /* Tamaño de deltra por defecto */
		}
	}

	/************************************************************************************/
	/****** Header  (Logo y Menu) *******************************************************/
	/************************************************************************************/
	.Header {
		background-color: $Color_Menu;
		color: $ColorTexto; /*Color del Texto*/
		font-size: 1.1em; /* Tamaño de deltra por defecto */
		padding: 0 0; /* arriba/abajo es de "2rem" y derecha/izquierda es "0" */
		position: fixed; /* Posicion absoluta */
		top: 0; /* Posicion absoluta Arriba*/
		left: 0; /* Posicion absoluta Izquierda*/
		right: 0; /* Posicion absoluta Dereha*/
		z-index: 1; /* Posiciona encima de Todo */
		box-shadow: 9px 9px 18px rgb(4, 11, 23); /* Sombra recuadro */
		text-shadow: black 0.1em 0.1em 0.2em; /* Sombra Texto */

		@include movil() {
			padding: 0em 1em 0em 1em;
		}

		.Logo_Menu {
			max-width: $AnchoLimitado;
			margin: 0 auto; /* arriba/abajo es "0" y derecha/izquierda es "auto (centrado los contenedores internos hoeizontalmente)" */
			display: flex; /* covierte en Flexible el contenedor */
			justify-content: space-between; /* Distribuye los elementos internos  */
			align-items: center; /*Centra el contenido verticalmente*/
			flex-wrap: wrap; /* si no entra el contenido lo envia abajo */

			img {
				width: 4em;
			}

			.button-mini {
				display: none;
				background-color: $Color_Menu;
				color: $ColorTexto; /*Color del Texto*/
				text-decoration: none; /* Quita el subrrallado de los link */
				font-size: 1em;

				&:hover {
					background: $ColorMenu_hover;
				}
			}

			.navigation ul {
				margin: 0;
				padding: 0;
				list-style: none;

				li {
					display: inline-block;
				}

				li a {
					color: $ColorTexto; /*Color del Texto*/
					text-decoration: none;
					display: block;
					padding: 0.5em 1em;
					transition: all 0.3s linear;
					border-radius: 5px;
				}

				li a:hover {
					background: $ColorMenu_hover;
				}
			}
		}
	}

	/************************************************************************************/
	/*-----------------   PARA ANIMACIONES ---------------------------------*/
	/************************************************************************************/

	// @keyframes show {
	//   from {
	//     opacity: 0;
	//     scale: 25%;
	//   }
	//   to {
	//     opacity: 1;
	//     scale: 100%;
	//   }
	// }

	// .Bloque_Flex {
	//   view-timeline-name: --image;
	//   view-timeline-axis: block;

	//   animation-timeline: --image;
	//   animation-name: show;

	//   animation-range: entry 25% cover 50%;
	//   animation-fill-mode: both;
	// }

	/************************************************************************************/
	/*-----------------   CLASES COMUNES A CADA BLOQUE ---------------------------------*/
	/************************************************************************************/

	.Segmento_Flex {
		display: flex;
		flex-flow: column nowrap; /* Contenido en filas y no bajan si no entra*/
		justify-content: center; /* Contenido Justificado horizontalmente */
		align-items: center; /* Contenido Justificado Verticamnete */

		background-attachment: fixed; /* Establecemos una posicion fija para la imagen */
		background-repeat: no-repeat; /* Indicamos que no se repetira */
		background-size: cover; /* Encajamos la imagen al 100% del ancho */
		background-position: center; /* Centra la imagen aun cuando cambie de tamaño */

		.Contenedor {
			width: 100%; /* Ancho */
			margin: 21em; /* arriba*/
			@include movil() {
				margin: 16em; /* arriba*/
			}

			padding: 2em 0;
			background-color: $Color_Transparencia;
			border-radius: 5px;
			box-shadow:
				20px 20px 60px rgb(4, 11, 23),
				-20px -20px 60px rgb(4, 11, 23); /* Sombra recuadro */

			.Ancho_Limitado {
				max-width: $AnchoLimitado; /** Maximo Ancho **/
				margin: auto; /* lo Centra Horizontalmente */

				.Titulo {
					margin: 0 auto; /* arriba/abajo es "0" y derecha/izquierda es "auto (centra este contenedor)" */
					font-size: 2.5em;
					text-align: center;
					font-weight: bold;
					text-shadow: black 0.1em 0.1em 0.2em; /* Sombra Texto */
					padding-top: 1em;
					padding-bottom: 0.5em;
				}
			}
		}
	}

	/*-------------------------------------------------------------------*/
	/*----    .Introduccion     -----------------------------------------*/
	/*-------------------------------------------------------------------*/

	.Introduccion {
		background-image: url('../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.avif');

		@include movil() {
			background-image: url('../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_02.avif');
		}

		.Descripcion {
			margin: 0 auto; /* arriba/abajo es "0" y derecha/izquierda es "auto (centra este contenedor)" */
			font-size: 1.4em;
			text-align: center;
			font-weight: bold;
			padding-bottom: 2em;
			padding-top: 1em;
		}
	}
	/*-------------------------------------------------------------------*/
	/*-----    .QuienesSomos    -----------------------------------------*/
	/*-------------------------------------------------------------------*/
	.QuienesSomos {
		background-image: url('../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.avif');

		@include movil() {
			background-image: url('../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_02.avif');
		}

		.Bloque_Flex {
			display: flex;
			flex-flow: row wrap; /* Contenido en filas y bajan si no entra*/
			justify-content: center; /* Contenido Justificado Verticamnete  */
			align-items: center; /* Contenido Justificado horizontalmente */

			.Texto {
				width: 50%;
				@include movil() {
					width: 100%;
					order: 1; /* Mueve este bloque al principio */
				}

				padding: 1em 1.3em;
				font-size: 1.25em;
				text-align: justify;
				line-height: 1.8em;
			}

			.Imagen {
				width: 50%;
				@include movil() {
					width: 100%;
				}

				padding: 1em 1.3em;

				img {
					box-shadow: none; /* Sombra recuadro */
					border-radius: 4px;
					width: 100%;
				}
			}
		}
	}
	/*-------------------------------------------------------------------*/
	/*-----   .Servicios   ----------------------------------------------*/
	/*-------------------------------------------------------------------*/

	.Servicios {
		background-image: url('../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.avif');

		@include movil() {
			background-image: url('../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_02.avif');
		}

		.Bloque_Flex {
			display: flex;
			flex-flow: row wrap; /* Contenido en filas y bajan si no entra*/
			justify-content: center; /* Contenido Justificado Verticamnete  */
			align-items: center; /* Contenido Justificado horizontalmente */

			.Texto {
				width: 50%;
				@include movil() {
					width: 100%;
					order: 1; /* Mueve este bloque al principio */
				}

				font-size: 1.75em;
				text-align: center;
			}
			.Imagen {
				width: 50%;
				@include movil() {
					width: 100%;
				}
				padding: 1em 1.3em;

				img {
					width: 100%;
					box-shadow: 9px 9px 15px rgb(38, 37, 37); /* Sombra recuadro */
					border-radius: 9px;
				}
			}
		}
	}

	/*-------------------------------------------------------------------*/
	/*-----   .Clientes   -----------------------------------------------*/
	/*-------------------------------------------------------------------*/
	// .Clientes {
	//   background-image: url("../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.jpg");

	//   /*    @include movil() {
	//         background-image: url("../img/Fondo_02.jpg");
	//     }*/

	//   .Contenedor .Ancho_Limitado .Bloque_Flex {
	//     .Bloque {
	//       width: 90%;

	//       img {
	//         box-shadow: none; /* Sombra recuadro */
	//       }
	//     }
	//   }
	// }

	/*-------------------------------------------------------------------*/
	/*-----   .Ubiquenos   ----------------------------------------------*/
	/*-------------------------------------------------------------------*/
	.Ubiquenos {
		background-image: url('../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_01.avif');

		@include movil() {
			background-image: url('../routes/Documentos_de_PageRaiz/img/BG_QuienesSomos_02.avif');
		}

		.Descripcion {
			margin: 0 auto; /* arriba/abajo es "0" y derecha/izquierda es "auto (centra este contenedor)" */
			font-size: 1.4em;
			text-align: center;
			font-weight: bold;
			padding-bottom: 2em;
			padding-top: 1em;
			iframe {
				width: 95%;
			}
		}
	}

	/*-------------------------------------------------------------------*/
	/*-----   .Contactenos   --------------------------------------------*/
	/*-------------------------------------------------------------------*/
	.Contactenos {
		background-image: url('../routes/Documentos_de_PageRaiz/img/BG_Contactenos_01.avif');

		@include movil() {
			background-image: url('../routes/Documentos_de_PageRaiz/img/BG_Contactenos_02.avif');
		}

		.Descripcion {
			margin: 0 auto; /* arriba/abajo es "0" y derecha/izquierda es "auto (centra este contenedor)" */
			font-size: 1.4em;
			text-align: center;
			font-weight: bold;
			padding-bottom: 2em;
			padding-top: 1em;

			img {
				width: 9em;
			}
		}
	}
	/*----- footer --------------------------------------------*/

	footer {
		background: #333;
		color: #fff;
		padding: 10px;
		text-align: center;

		div [class^='icon-'] {
			/* Todas las clases que comiencen con icon- */
			display: inline-block;
			color: #333;
			text-decoration: none;
			font-size: 30px;
			padding: 10px;
			background: #fff;
			border-radius: 50%;
			width: 50px;
			height: 50px;
			margin-bottom: 15px;
		}

		a {
			color: aqua;
			text-decoration: none;
			font-size: 16px;
		}
	}
	/* ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ */
	/*                                      INICIO del Media Query                                 */
	/* ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ */
	/************************************************************************************/
	/************************************************************************************/
	/************************************************************************************/
	/************************************************************************************/
	/******  Header  (Logo y Menu) ******************************************************/

	@media only screen and (max-width: 767px) {
		:root {
			font-size: 13px;
		}
		/******  Header  ********************************************************************/

		.Header {
			.Logo_Menu {
				.button-mini {
					display: block;
					cursor: pointer;
					padding: 0.5em 1em;
				}

				.navigation {
					width: 100%;
					margin-top: 1em;

					ul {
						display: none;

						&.show {
							display: block;
						}

						li {
							display: block;

							a {
								display: block;
								padding: 0.5em 0;
								transition: all 0.3s linear;
								border-radius: 5px;
							}

							a:hover {
								background: #4a4a4a;
							}
						}
					}
				}
			}
		}
	}
</style>
