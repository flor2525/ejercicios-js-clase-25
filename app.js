// 1: SALUDO

// const nombre = prompt ('Ingresa tu nombre');
// const apellido = prompt ('Ingresa tu apellido');
// const mensaje = (`Hola ${nombre} ${apellido}, bienvenida a ADA`);
// alert(mensaje);


// 2: HELADERÍA

// const primerSabor = prompt ('Elige tu primer gusto de helado');
// const segundoSabor = prompt ('Elige el segundo gusto que desees');
// const tercerSabor = prompt ('Por último, decinos el último gusto que vas a preferir');
// const saboresDeHelado = (`Àcá tenes tu helado de ${primerSabor}, ${segundoSabor} y ${tercerSabor}`);
// alert(saboresDeHelado);

// 3: DATOS PERSONALES

// const nombre = prompt ('Ingrese su nombre');
// const apellido = prompt ('Ingrese su apellido');
// const edad = prompt ('Ingrese su edad');
// const nacionalidad = prompt ('Ingrese su nacionalidad');
// const documento = prompt ('Ingrese su número de documento');
// const nuevoUsuario = (`Nuevo usuario agregado al sistema: ${nombre} ${apellido} ${edad} ${nacionalidad} ${documento}`);
// alert (nuevoUsuario);

// 4: LISTA DE REPRODUCCIÓN

// const nombrePlayList = prompt ('Ingresá el nombre de tu playlist');
// const primeraCancion = prompt ('Decinos el nombre de tu primera canción');
// const segundaCancion = prompt ('Decinos el nombre de tu segunda canción');
// const terceraCancion = prompt ('Decinos el nombre de tu tercera canción');
// const nuevaPlaylist = (`Se ha creado la playlist ${nombrePlayList} con las canciones ${primeraCancion}, ${segundaCancion} y ${terceraCancion}`);
// alert(nuevaPlaylist);

// 5: DIRECCIÓN COMPLETA

// const calle = prompt ('Ingresá tu calle');
// const numeroDeCalle = prompt ('Ingresá el número de la calle');
// const departamento = prompt ('Ingresá tu departamento');
// const codigoPostal = prompt ('Ingresá tu código postal');
// const ciudad = prompt ('Ingresá tu ciudad');
// const pais = prompt ('Ingresá tu país');
// const direccionCompleta = (`La dirección ingresada es: ${calle} ${numeroDeCalle} ${departamento} ${codigoPostal} ${ciudad} ${pais}`);
// alert (direccionCompleta);

// 6: AÑOS PERRO

// const edad = prompt ('Ingresa tu edad');
// const edadPerro = edad * 7;
// alert (`Tu edad en años perro es ${edadPerro}`);

// 7: MINUTOS A SEGUNDOS

// const minutos = prompt ('Ingresa la cantidad de minutos');
// const conversionSegundos = minutos * 60;
// alert(`Los minutos que ingresaste corresponden a ${conversionSegundos} segundos.`);

// 8: DÍAS A SEGUNDOS
// const dias = prompt ('Ingresa la cantidad de días');
// const conversionSegundos = dias * 86400;
// alert(`La cantidad de días que ingresaste corresponden a ${conversionSegundos} segundos.`);

// 9: KILÓMETROS A MILLAS
//  const kilometros = prompt ('Ingresa la cantidad de kilómetros');
//  const conversionMillas = kilometros / 1.609;
//  alert(`La cantidad de kilómetros que ingresaste corresponden a ${conversionMillas.toFixed(2)} millas.`);

// 10: ÁREA DE UN TRIÁNGULO

//  const valorBase = prompt ('Ingresa el tamaño de la base de tu triángulo');
//  const valorAncho = prompt ('Ingresa el ancho de tu triángulo');
//  const areaTriangulo = valorBase * valorAncho / 2;
//  alert (`El área de tu triángulo es ${areaTriangulo}`);

// 11: PERÍMETRO DE UN TRIÁNGULO

//  const valorBase = parseInt(prompt ('Ingresa el tamaño de la base de tu triángulo'));
//  const valorLado = parseInt(prompt ('Ingresa el tamaño de los lados de tu triángulo'));
//  const perimetroTriangulo = valorBase + (valorLado * 2);
//  alert (`El perímetro de tu triángulo es ${perimetroTriangulo}`);

// 12: PORCENTAJE

// const numero = prompt ('Ingresa tu número');
// const porcentaje = prompt ('Ingresa el % que quieras saber');
// const resultadoPorcentaje = (porcentaje * numero) / 100;
// alert(`El resultado es ${resultadoPorcentaje}`);

// 13: TIEMPO DE VIAJE

// const auto = 50;
// const bicicleta = 15;
// const pie = 5;
// const distancia = prompt ('Indica la distancia de tu recorrido');
// const tiempoAuto = distancia / auto;
// const tiempoBicicleta = distancia / bicicleta;
// const tiempoPie = distancia / pie;
// alert (`Para llegar a destinto vas a demorar: ${tiempoAuto.toFixed(1)} horas en auto, ${tiempoBicicleta.toFixed(1)} horas en bicicleta y ${tiempoPie.toFixed(1)} horas si vas a pie`);

// 14: DURACIÓN VUELO

// const primerDestino = prompt ('Ingresa la primera escala de tu vuelvo');
// const duracionPrimerDestino = parseInt(prompt ('Ingresa la duración en horas de esta primer escala'));
// const segundoDestino = prompt ('Ingresa la segunda escala de tu vuelvo');
// const duracionSegundoDestino = parseInt(prompt ('Ingresa la duración en horas de esta segunda escala'));
// const tercerDestino = prompt ('Ingresa la tercer escala de tu vuelvo');
// const duracionTercerDestino = parseInt(prompt ('Ingresa la duración en horas de esta tercera escala'));
// const duracionTotalViaje = duracionPrimerDestino + duracionSegundoDestino + duracionTercerDestino;
// alert (`Las escalas de tu viaje y sus duraciones son: ${primerDestino} ${duracionPrimerDestino} horas, ${segundoDestino} ${duracionSegundoDestino} horas y ${tercerDestino} ${duracionTercerDestino} horas. Finalmente, la duración total de tu viaje es de ${duracionTotalViaje} horas.`);

// 15: INCREMENTO

// let cantidad = parseInt (prompt ('Ingrese la cantidad deseada'));
// const incremento = parseInt (prompt ('Ingrese el incremento'));
// const incrementoCantidad = cantidad + incremento;
// alert(`Incremento 1: ${incrementoCantidad}`);

// cantidad = incrementoCantidad;
// const incrementoCantidadDos = cantidad + incremento;
// alert(`Incremento 2: ${incrementoCantidadDos}`);

// cantidad = incrementoCantidadDos
// const incrementoCantidadTres = cantidad + incremento;
// alert(`Incremento 3: ${incrementoCantidadTres}`);

// cantidad = incrementoCantidadTres
// const incrementoCantidadCuatro = cantidad + incremento;
// alert(`Incremento 4: ${incrementoCantidadCuatro}`);

// cantidad = incrementoCantidadCuatro
// const incrementoCantidadCinco = cantidad + incremento;
// alert(`Incremento 5: ${incrementoCantidadCinco}`);

// cantidad = incrementoCantidadCinco
// const incrementoCantidadSeis = cantidad + incremento;
// alert(`Incremento 6: ${incrementoCantidadSeis}`);

// 16: CELSIUS A FAHRENHEIT

// const temperatura = parseInt (prompt ('Ingresa la temperatura en grados centígrados'));
// const conversionTemperatura = (temperatura * 9) /5 + 32;
// alert(`La temperatura que ingresaste equivale a ${conversionTemperatura} grados Fahrenheit.`);

// 17: MÚLTIPLOS

// const primerNumero = parseInt (prompt ('Ingresa tu primer número'));
// const segundoNumero = parseInt (prompt ('Ingresa tu segundo número'));

// 18: CANTIDAD DE CARACTERES

// const textoIngresado = prompt('Ingresa tu texto');
// alert(`Tu texto tiene ${textoIngresado.length} caracteres.`);

// 19: CANTIDAD DE HUESPEDES

// const habitacionesParaDos = parseInt (prompt ('Ingresá la cantidad de habitaciones que tiene tu hotel para dos personas'));
// const habitacionesParaTres = parseInt (prompt ('Ingresá la cantidad de habitaciones que tiene tu hotel para tres personas'));
// const habitacionesParaCuatro = parseInt (prompt ('Ingresá la cantidad de habitaciones que tiene tu hotel para cuatro personas'));
// const cantidadDeHuespedes = (habitacionesParaDos * 2) + (habitacionesParaTres * 3) + (habitacionesParaCuatro * 4);
// alert(`Tu hotel puede recibir hasta ${cantidadDeHuespedes} huéspedes.`);

// 20: CALCULADOR DE GASTOS

// let dineroDisponible = parseInt(prompt('Ingresá el monto total del dinero que tenés disponible'));
// let serviciosAPagar = 3;
// let dineroRestante = undefined; 

// const primerServicio = prompt('Ingresá el nombre del primer servicio que querés pagar');
// const montoPrimerServicio = parseInt(prompt('Ingresá el costo del servicio'));

// serviciosAPagar = 2;
// dineroRestante = dineroDisponible - montoPrimerServicio;
// const segundoServicio = prompt(`Ingresá el nombre del segundo servicio que querés pagar
// Servicios por pagar: ${serviciosAPagar}.
// Dinero disponible: $${dineroRestante}`);
// const montoSegundoServicio = parseInt(prompt('Ingresá el costo del servicio'));

// serviciosAPagar = 1;
// dineroDisponible = dineroRestante
// dineroRestante = dineroDisponible - montoSegundoServicio;
// const tercerServicio = prompt(`Ingresá el nombre del tercer servicio que querés pagar
// Servicios por pagar: ${serviciosAPagar}.
// Dinero disponible: $${dineroRestante}`);
// const montoTercerServicio = parseInt(prompt('Ingresá el costo del servicio'));

// dineroDisponible = dineroRestante
// dineroRestante = dineroDisponible - montoTercerServicio;
// alert(`Debés pagar los siguientes servicios:
// ${primerServicio}: $${montoPrimerServicio}
// ${segundoServicio}: $${montoSegundoServicio}
// ${tercerServicio}: $${montoTercerServicio}
// Dinero restante: $${dineroRestante}`);

// 21: ORDEN DE COMPRAS

// const precioPapas = 100;
// const precioHamburguesa = 200;
// const precioCerveza = 150;

// const cantidadPapas = parseInt(prompt ('Ingresá la cantidad de papas que deseas ordenar'));
// const cantidadHamburguesa = parseInt(prompt ('Ingresá la cantidad de hamburguesas que deseas ordenar'));
// const cantidadCerveza = parseInt(prompt ('Ingresá la cantidad de cervezas que deseas ordenar'));

// const totalDeCompra = (precioPapas * cantidadPapas) + (precioHamburguesa * cantidadHamburguesa) + (precioCerveza * cantidadCerveza);
// const cantidadDeCuotas = parseInt(prompt (`El total de tu compra es $${totalDeCompra}
// ¿En cuántas cuotas querés abonar?`));
// const detalleDeCuotas = totalDeCompra / cantidadDeCuotas;

// alert(`Resumen de tu compra:
// Total a pagar: $${totalDeCompra}
// Cantidad de cuotas: ${cantidadDeCuotas}
// Costo de cuota: $${detalleDeCuotas}
// ¡Gracias por tu compra!
// `)