---
Course: "[[Síntesis de sonido]]"
Source: UNIR
Status: 🟨
Links:
  - "[[My Inputs]]"
tags:
  - "#i/unir"
  - sintesis
Created: 2024-12-26 13:24
Tema: "3"
modified: 2024-12-26T14:24:43+01:00
Semester: 4
---
## Notes

### El VCO

Abreviación del inglés voltage control oscillator, es un oscilador controlado por voltaje. Se trata de un generador de forma de onda periódica. Puede generar formas de onda sinusoidales, triangulares, cuadradas, pulso y diente de sierra (ascendente o descendente).

El principal parámetro de los generadores (parámetro común a todos) esla frecuencia de oscilación con la cual, podemos determinar la altura de una nota.

Los VCO son optimizados para generar frecuencias audibles, es decir, entre 20- 30 Hz y 10-15 kHz. Los VCO disponibles en los sintetizadores de software pueden proponer un rango más extendido.

En la gran mayoría de los casos, los VCO son el punto de partida de la síntesis, se encuentran en el principio de la cadena de los módulos.

#### Parámetros

El control de la frecuencia se puede hacer a través de un selector de rango de octava imitado los pies de los órganos (como, por ejemplo, 32’, 16’, 8’, 4’) o con dos potenciómetros: coarse y fine, según la precisión deseada. El detune permite desafinar el oscilador de varios semitonos o de manera microtonal (parámetro muy interesante cuando se utilizan varios VCO a la vez).

A veces, un VCO dispone de una entrada de modulación de frecuencia FM específica (cf. síntesis FM) para modulaciones muy rápidas en el rango de las frecuencias superiores a 100 Hz.

Los VCO que proponen una forma de onda tipo pulso tienen un parámetro adicional que permite manipular la anchura del pulso y, por consecuencia, cambiar de sonoridad. Este parámetro se puede manipular de forma automatizada. Esta técnica se denomina modulación de anchura de pulso (PWM: pulse width modulation).

Unos VCO pueden proponer una entrada de Hard Sync que permite un control de sincronización del oscilador a otro oscilador de modulación. Cada vez que el oscilador de modulación pasa por cero resetea la forma de onda del oscilador modulado, forzándolo a volver al principio de su ciclo, lo que permite generar nuevas formas de onda.

**Selector de forma de onda:** cuando el VCO ofrece varios tipos de ondas, puede estar dotado de un selector de forma de onda para escoger qué forma de onda se quiere a su salida. Otros VCO ofrecen salidas independientes para cada forma de onda. Eso permite utilizar varias formas de onda a la vez, y oscilando todas a la misma frecuencia

Algunos VCO son equipados de un suboscilador, un oscilador que suena una octava más bajo que la frecuencia del VCO. Un suboscilador permite dar más profundidad a un sonido. El suboscilador solo tiene un control de volumen.

### Tablas de onda

Los módulos digitales proporcionan una memoria en su circuito en la cual se puede grabar una serie de datos: una tabla cuyos datos son asequibles gracias a su índice. Un algoritmo lee el valor grabado en la tabla para cada índice, incrementa el índice hasta el final de la tabla y repite de manera cíclica la lectura de los datos en la tabla.

El número de índices de la tabla, es decir, el número de datos que contiene, así como la resolución de los datos (8 bit o 16 bit) son factores muy importantes para definir la calidad de la tabla de onda.

Dado que se puede introducir cualquier valor en la tabla, es posible inventar nuevas formas de onda calculadas con algoritmos matemáticos e incluso utilizar formas de onda de sonidos existentes, naturales o instrumentales previamente grabados y digitalizados.

Los osciladores de tablas de onda ofrecen muchas posibilidades sonoras por la variedad de formas de onda que proponen, en comparación con un VCO clásico.

Generalmente, las tablas son clasificadas en varios bancos según sus características sonoras. Es también posible automatizar el cambio de tablas para conseguir efectos sonoros más intensos.

### El generador de ruido

Inicialmente, el generador de ruido propone dos tipos de ruido: el ruido blanco y el ruido rosa. El ruido rosa se basa generalmente en un ruido blanco cuyas frecuencias aguadas han sido atenuadas.

La mayoría de los generadores de ruido proponen un control sobre el «color» del ruido, permitiendo una mezcla variable entre las frecuencias graves (ruido rojo) y frecuencias agudas (ruido azul).

Tipos de señalesgeneradas:

- ▸  Ruido blanco (salida 1, «white»), no tiene parámetro de control.
    
- ▸  Ruido coloreado (salida 2, «colored»), controlado por los potenciómetros de volumen de las frecuencias agudas (potenciómetro 1, «blue») y de frecuencias graves (potenciómetro 2, «red»).
    
- ▸  Señal aleatoria (salida 3, «random output») controlada por el potenciómetro 3 «rate» para elegir la frecuencia de generación de voltajes aleatorios, y por el potenciómetro «level» para controlar la amplitud del voltaje.

### El LFO

Abreviación del inglés low frecuency oscillator. Es un oscilador especializado en las frecuencias bajas, generalmente debajo de 30-40 Hz y hasta 0,1 Hz,

Es un oscilador dedicado a las modulaciones de otros parámetros como, por ejemplo, la frecuencia de un VCO, la frecuencia de corte de un filtro o la amplitud de un amplificador.

Al igual que el VCO, el LFO genera formas de onda básicas tales como la triangular, sinusoidal, cuadrada y diente de sierra. Un VCO no es suficientemente estable en las frecuencias bajas, de ahí la necesidad de otro tipo de circuito como el del LFO para asegurar una estabilidad en frecuencias extremadamente bajas.

El único control que aparece en un LFO es la frecuencia. La frecuencia se controla gracias a un potenciómetro manual.

El principal interés de un LFO es que permite aplicar una modulación en los parámetros de otros módulos de la cadena de la síntesis. Aunque se pueda cambiar la frecuencia de modulación manualmente gracias al potenciómetro, es más interesante poder automatizarla.


#### Efectos

Según la forma de onda del LFO elegida para la modulación de un parámetro, podemos conseguir varios efectos:

- ▸  Forma de onda sinusoidal: aplicada a la frecuencia de un VCO puede imitar la oscilación de un vibrato instrumental. El vibrato irá más rápido con la frecuencia del LFO.
    
- ▸  Diente de sierra ascendente: aplicada a la frecuencia de un VCO generará un tono que sube como un glissando hasta una caída repentina para volver a subir otra vez de manera repetitiva.
    
- ▸  Forma de onda cuadrada: aplicada a la frecuencia de un VCO generará una sucesión de dos notas correspondiente al estado bajo y alto de la forma de onda. Las notas cambian al ritmo impuesto por la frecuencia del LFO. La distancia entre las notas puede variar según la amplitud de modulación, generando trinos más o menos amplios.

- ▸ Forma de onda triangular: aplicada a la anchura de pulso generará un efecto chorus gracias a la PWM.

#### Sincronización

Es posible sincronizar la frecuencia del LFO y su fase con el tempo de una canción a partir de la señal de un reloj. En efecto, a veces el LFO puede generar efectos rítmicos y en ciertos casos es conveniente sincronizarlo para generar un efecto musical.

Si el LFO está sincronizado a un divisor de reloj, podrá efectuar efectos en el tiempo. Por ejemplo, si se necesita efectuar un trino a una velocidad cuatro veces más rápida que el tempo principal

El reseteo de fase puede ser muy interesante porque permite que el LFO siempre empiece su efecto al principio de su ciclo y no de manera aleatoria, lo que asegura empezar su efecto siempre de la misma manera. En el caso de un diente de sierra aplicado a la frecuencia de un VCO, sin utilizar la función de reseteo, cada vez que se utiliza el LFO este se encuentra en un estado diferente de su fase y, por consecuencia, no tendríamos la seguridad de empezar el glissando al principio de la rampa.

### El generador de envolvente

Se encuentra a menudo bajo la abreviación EG, del inglés envelope generator, generador de envolvente. Se trata, como el LFO, de un generador de modulación, excepto que un EG no genera una modulación periódica sino puntual. La modulación se puede aplicar a cualquier parámetro de la síntesis (frecuencia del VCO, amplitud del VCA, frecuencia de corte de un VCF, etc.)

Un generador de envolvente tiene una duración definida y necesita recibir una orden para dispararse. Esta orden llamada gate o trigger puede ser originada por un teclado o por cualquier señal que pueda generar un impulso o un cambio de estado tipo on/off, lo que corresponde en síntesis analógica a un cambio voltaje alto/voltaje bajo. En el caso de un teclado conectado a un EG, al presionar una tecla se generaría un voltaje alto y al soltar la tecla el voltaje volvería a su estado bajo.

El módulo A-140 del fabricante Doepfer es un ejemplo típico de un generador de envolvente ADSR. Además de los cuatro potenciómetros controlando cada fase del envolvente(attaque, decay, sustain, release) está dotado de un selector para cambiar el rango temporal del envolvente: «H» (high) para envolvente de duración de hasta un minuto, «L» (low) para duraciones menores de cien microsegundos, y «M» ( m é d i u m ) para duraciones estándar. La entrada «Gate» permite disparar el envolvente y la entrada «Retrig» (abreviación de retrigger, volver a disparar) permite disparar otra vez el envolvente desde el principio (ataque), aunque no haya acabado su ciclo. La salida «Output» corresponde al voltaje generado por el envolvente (entre 0V y 8V) y la salida «Inverse Output» corresponde a una versión negativa del envolvente (entre 0V y -8V).

Si el número de envolventes es reducido, se utilizará el mismo EG para modular varios parámetros, por ejemplo, el mismo EG controlará la amplitud del VCA y la frecuencia de corte del filtro, dando lugar a modulaciones paralelas que pueden ser aburridas.

El generador de envolvente puede ser utilizado para esculpir la amplitud de modulación de un LFO. Si volvemos al ejemplo precedente, un LFO de forma de onda cuadrada que controla la frecuencia de un VCO generando un trino, al aplicar un EG al LFO la amplitud de modulación se verá cambiada según el tipo de envolvente escogido. Por ejemplo, si elegimos un envolvente tipo percusivo (cf. tema «Análisis del sonido») la modulación empezará en su máximo y continuará restringiéndose hasta cero, creando un efecto de batería entre dos notas alejadas que se irán acercando, produciéndose un efecto de trino, y bisbigliando, y hasta el final sin modulación, es decir, una nota fija.

#### Un caso particular: el seguidor de envolvente

Estudiaremos los módulos dedicados a la modificación de la señal:

- ▸  Modificación de amplitud.
    
- ▸  Modificación del contenido espectral.
    
- ▸  Modificaciones adicionales.

### El VCA

La función del VCA es básicamente de amplificar o atenuar la señal entrante, señal audio o señal de modulación. Dispone de una entrada para la señal a procesar y otra entrada para controlar el nivel de amplificación, y una salida para la señal amplificada.

Se pueden encontrar dos tipos de VCA, los VCA lineares para procesar señales de tipo control y los VCA exponenciales para procesar señales de tipo audio.

Los VCA con una respuesta lineal amplifican la señal de entrada en relación directa con el voltaje de control. Los VCA de respuesta exponencial (o logarítmica) tienen una respuesta que tiene menos efectos en los voltajes bajos y más efecto en los voltajes altos. Son más sensibles, lo que permite una manipulación más sutil en los voltajes bajos. Una respuesta exponencial se asemeja a la respuesta fisiológica del oído. Por eso los VCA exponenciales son más adecuados para manipular señales de audio, tal como la amplitud o también el control del tono de un VCO.

### El VCF

Abreviación del inglés voltaje control filter, filtro controlado por voltaje. Existe una multitud de filtros con características muy diferentes.

El filtro modifica la amplitud y la fase de las frecuencias contenidas en la señal según una curva de atenuación o pendiente. Se controla con dos parámetros principales: la frecuencia de corte y la resonancia (también llamada «Q»).

Existen tres tipos de filtros básicos:

- ▸  El paso bajo, deja pasar las frecuencias inferiores a la frecuencia de corte.
    
- ▸  El paso alto, deja pasar las frecuencias superiores a la frecuencia de corte.
    
- ▸  El paso banda, deja pasar las frecuencias incluidas en una franja alrededor de la frecuencia de corte (en ese caso se dice frecuencia central).

#### Curva de atenuación (o pendiente)

Un filtro ideal debería cortar todas las frecuencias por debajo (o por encima) de la frecuencia de corte.

Un circuito electrónico, o un algoritmo informático, no pueden generar un filtro perfecto, así que siempre hay unas frecuencias que persisten sonando más allá del umbral de la frecuencia de corte.

Las amplitudes de esas frecuencias van bajando linealmente según se alejan de la frecuencia de corte.

Un filtro se compone de una combinación de resistencias y condensadores que constituye una unidad llamada polo. Un diseño de un polo permite atenuar las frecuencias más allá de la frecuencia de corte de 6 dB por octava.

Si inyectamos un ruido blanco en un filtro low pass con una frecuencia de corte de 200 Hz, la atenuación será de 6 dB a 400 Hz, de 12 dB a 800 Hz, 18 dB a 1600 Hz, etc., las frecuencias intermediarias son atenuadas progresivamente.

#### La frecuencia de corte

Es la frecuencia definida en el punto correspondiente a una atenuación de 3 dB de la señal.

#### Resonancia (o factor Q)

La resonancia permite amplificar las frecuencias alrededor de la frecuencia de corte. Con un nivel alto de resonancia empieza a sonar la frecuencia de corte. En ciertos filtros la resonancia puede ser tan importante que llega a poner el filtro en autooscilación. Es decir que la respuesta frecuencial del filtro se modifica para dejar pasar únicamente la frecuencia de corte.

### Elementos adicionales

#### El mezclador

Mezcla varias señales de control o de audio. Se compone de varias entradas con un control de atenuación individual, la salida del módulo envía la suma de las entradas atenuadas.

La atenuación de cada entrada puede ser manual gracias a un potenciómetro o por control de voltaje (lo que permite automatizar las atenuaciones o aplicar una modulación).

Se utiliza mucho en síntesis aditiva para variar el contenido armónico de un sonido compuesto por varias fuentes de osciladores.

#### Sample & Hold

Es una función que permite muestrear una señal entrante (sample) y mantener el valor (hold) a un intervalo temporal definido, sale un voltaje de control listo para utilizar con cualquier parámetro.

Un módulo Sample & Hold suele tener dos entradas: una entrada para la señal a procesar y una entrada para el trigger que recibe la señal de reloj para muestrear la señal de la primera entrada. A veces no tiene entrada de trigger y disponen de un reloj interno cuya velocidad de muestreo se controla gracias a un potenciómetro.

#### Wave shaper

El wave shaper se utiliza principalmente con señales de audio, pero a veces se puede encontrar en el circuito de una modulación de control. Modifica la forma de onda de la señal de manera muy importante, semejante a cómo lo hace una distorsión (cf. tema «Los efectos: complementos imprescindibles»).

Se trata de pasar una señal audio en una función de transferencia para enriquecer el espectro. A veces la distorsión es tan importante que cambia totalmente el sonido original y se puede hablar realmente de síntesis waveshaping.

#### Modulador en anillo

El modulador en anillo permite multiplicar dos formas de ondas entre ellas, una señal modulada y una señal modulante. Se llama modulador en anillo porque el circuito electrónico tiene forma de anillo.

Se puede conseguir dos efectos distintos:

- ▸  El trémolo: una señal en el rango audio multiplicada por una sinusoide lento tipo LFO modulante. Según la evolución de la amplitud del LFO, la amplitud de la señal audio será amplificada y atenuada regularmente creando un efecto rítmico de trémolo.
    
- ▸  El efecto de bandas laterales: cuando se aumenta la velocidad del trémolo subiendo la frecuencia de oscilación de la señal modulante hasta las frecuencias que pertenezcan al rango audio (a partir de 20 Hz), surge un nuevo efecto como si aparecieran nuevos componentes inarmónicos en la señal modulada

- Por ejemplo, si modulo dos sinusoides entre ellas, una a 1.000 Hz y otra de 40 Hz, las frecuencias resultantes serán de 960 Hz y 1.040 Hz y se suelen llamar frecuencias laterales. Según la frecuencia modulante escogida se obtendrán efectos muy distintos. Cuando las frecuencias laterales no tienen un múltiplo entero en común se consiguen timbres inarmónicos (útiles para generar timbres parecidos a campanas), sin embargo, si las frecuencias laterales tienen una frecuencia en relación armónica se consiguen efectos más musicales.

	

