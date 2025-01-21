---
Course: "[[Síntesis de sonido]]"
tags:
  - "#lecture"
  - sintesis
Created: 2024-11-12 13:40
Tema: "3"
modified: 2025-01-16T12:36:33+01:00
Status: 🟨
Semester: 5
---
zLinks:: [[My Lectures]]
___
## Notes

### El VCO

Señales de audio son generar sonidos.

Señales de control modulan el sonido

En el mundo analógico es por voltaje. En el mundo digital es por datos.

*Course* es un potenciómetro (permite cambiar la octava). El *fine* nos permite encontrar una precisión de tono dentro de ese rango (selector dentro de la octava)

El *hard sync* permite ajustar la frecuencia que se está generando y sincronizarlos con respecto a otros

### Tablas de onda

No existen tablas de onda en el mundo analógico.

Son tablas de datos digitales.

Funcionan con algoritmos que recorren los datos.

En las tablas de onda a partir de una serie de datos determinada y que se pueden modificar se pueden usar muchas formas de onda distintas

Primero está la cantidad de datos (índices). La resolución de los datos (La profundidad de 8 a 16 bits)

Cambiando los datos cambian las sonoridades

Tiene una memoria que graba los datos introducidos.

Las tablas se pueden clasificar en bancos.

Si una tabla tiene una serie de datos, un banco tiene una serie de tablas.

Se puede automatizar el proceso para que haya cambios entre tablas (ganamos efectos sonoros, trabajando el sonido en tiempo real)

### El generador de ruido

Al día de hoy se tiene control sobre el color de los generadores de ruido. 

La primera salida es el ruido blanco (no tiene parámetros que cambiar)

La salida colored tiene 2 parámetros que cambiar: Blue ó Red. El potenciómetro blue nos permite potenciar los sonidos agudos y Red potencia las frecuencias graves.

### El LFO

Hay 3 tipos de modulación. La modulación fija que no cambia el valor de ningún parámetro (se obtiene una sola sonoridad). Modular los parámetros manualmente. La tercera manera de modular es con la automatización

Un VCLFO es un LFO cambia a otro LFO

#### Sincronización

El divisor de reloj toma la señal de un reloj. Por ejemplo del tempo de una canción. Nos permite detectar un tempo. Divide ese tempo en pulso o partes más pequeñas. Las oscilaciones de los LFO vayan al ritmo de la música.

Al LFO se le aplica el disparo de reseteo y así el LFO siempre seguirá el tempo deseado.

### El generador de envolvente

Son generadores de una modulación (señal de control - modulan un sonido)

Un generador de envolvente tiene una duración definida y necesita recibir una orden para dispararse (cf. tema «Análisis del sonido»). Esta orden llamada gate o trigger. El tercer elemento es el control de parámetros.

### El VCA

Pueden usar señaes de audio o señales de control.

Los VCA lineares son proporcionales. 

Los VCA exponenciales. Procesa el audio de forma más concreta.

Pueden usarse varios VCA en cadena. 

En el ejemplo (p. 21)
- VCA1 Modulacion de amplitud. 
- VCA2 trabaja el volumen de la señal
- VCA3 se le aplica un generador de envolvente

### El VCF

iltro controlado por voltaje (Ecualización) 

pasa bajo de 1200 hz,. El umbral es el 0 hasta el 1200.

Ningún filtro es perfecto.

Curvo de atenuación. Se siguen manteniendo pero atenuadas

Los polos osn puntos e donde las ganancias se reducen 

Un filtro puede tener uno o mas polos

Un polo nos permite atenuar las frecuencias mpas alla de la cutoff. 

En funcion del numero polos podemos atenuar mas las frecuencias

Autooscilación es cuando la resonancia es tan alta que funciona como un VCO.

### Elementos adicionales

#### Mezclador

tiene varias entradas y una unica salida (mezcla todas las señales de audio). Funciona como sintesids aditiva. Varia el contenido armónico de ña señal.

#### Sample and hold. 

Permite muestrear una señal. (digitalizar una señal de audio)

![](Extras/Images/2024-10-4_16.0.47.png)

TIene 2 entradas y una salida. la 1era la señal a procesar (roja) la segunda opcional es un trigger recibir la señal de un reloj. que puede ser interno.  Juega con la periodicidad del muestreo. 

#### Waveshaper

Trabaja con señales de audio. modificar la forma de la onda. (parecido a una distorsioj).

Enriquece el sepctrop sonoro. 

#### Modulador en anillo

Hay una señal modulada y una modulante. Mulitpicla las dos señales entre ellas (generalmente sinusoidales)

dos ondas sinusoidales 1000 y otra de 40hz == 960hz , 1040hz (parciales del sonido,, timbres inarmónico) Como si fuese una campana.

cuando hay una relación armónica (500hz y 1000hz == 1500 hz la respuesta es más musical 

