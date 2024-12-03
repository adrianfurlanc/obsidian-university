---
Course: "[[Síntesis de sonido]]"
Source: UNIR
Status: 🟨
Links:
  - "[[My Inputs]]"
tags:
  - "#i/unir"
  - sintesis
Created: 2024-10-28 12:44
Tema: "1"
modified: 2024-10-28T14:33:55+01:00
Semester: 4
---
## Notes

### La estructura espectral y temporal del sonido

#### Composición espectral del sonido

La experiencia de la cuerda vibrante nos enseña que una cuerda vibrando a una frecuencia dada forma nudos a intervalos regulares.

Así, los nudos aparecen en puntos con una relación de número entero respecto a la longitud de la cuerda.

Cada modo de vibración corresponde a una frecuencia precisa. El modo 1 corresponde a la frecuencia fundamental, la más grave, y los modos siguientes corresponden a las frecuencias armónicas. El primer armónico tiene una frecuencia doble de la fundamental, el segundo armónico tiene una frecuencia triple de la fundamental, etc.

**Modos de vibración de una cuerda.**
![](Extras/Images/2024-9-1_12.46.52.png)

Hay varios tipos de espectros:

- El espectro armónico

El espectro armónico corresponde a un sonido cuyos elementos frecuenciales están en relación de múltiples enteros con la frecuencia fundamental

En el caso particular de la voz humana, los componentes espectrales, en vez de ser frecuencias puras, corresponden más bien a pequeñas bandas espectrales: los formantes.

Dos sonidos armónicos basados en la misma frecuencia fundamental se distinguen únicamente por la diferencia de intensidad entre los armónicos. Por ejemplo, un sonido de clarinete muestra que los picos de intensidad en el espectro se sitúan en los armónicos impares, por el contrario, un sonido de violín muestra picos de intensidad en los armónicos pares.

- El espectro inarmónico.

El espectro inarmónico corresponde a sonidos que no tienen una relación de múltiple entero entre sus componentes frecuenciales. Son sonidos que parecen más complejos al oído humano. Las campanas son un ejemplo muy conocido de sonido inarmónico. Los elementos frecuenciales que componen un espectro inarmónico se denominan los parciales.

- Los espectros ruidosos.

Hay varios tipos de espectros ruidosos. Son espectros muy densos, formados por la totalidad de las frecuencias audibles. Dos ejemplos de espectros ruidosos son el ruido blanco y el ruido rosa: el ruido blanco está compuesto de todas las frecuencias audibles, todas a la misma intensidad. En el ruido rosa, la intensidad disminuye con las frecuencias más agudas. Son espectros teóricos que no se encuentran en la naturaleza, aunque muchos ruidos naturales se acercan a ese tipo de espectro: el viento, el mar, etc..

#### Evolución temporal del sonido

- El envolvente.

Un envolvente básico se compone de tres secciones sucesivas: el ataque, el sostenimiento y la relajación.

- El ataque: es una fase muy corta, entre 10 ms y 1 segundo. En esta fase, el volumen crece desde el silencio hasta el volumen del sostenimiento. Pierre Schaeffer muestran que, a pesar de una duración casi imperceptible, es la fase más importante para la definición de un sonido armónico.
- El sostenimiento: fase casi estática sin variación importante del sonido. Es la fase con la duración más extendida.
- La relajación: esta fase corresponde al final del sonido, da información sobre el espacio en el cual está emitido

Tipos de envolventes:

- Envolvente percusivo: se caracteriza por una casi ausencia de fase de ataque y de sostenimiento (sonidos de percusión, de piano, etc.).

- Envolvente tipo «sonido al revés»: se caracteriza por una fase de ataque muy lenta y progresiva, casi no se encuentra de manera natural.

- Envolvente delta: sonidos con un ataque muy lento y progresivo sin fase de sostenimiento y con una fase de relajación muy larga. Sonido típico del ruido de un coche en una carretera que escuchamos venir y que una vez pasado a nuestro nivel se aleja

- Envolvente ADSR (attack-decay-sustain-release): tipo de envolvente muy utilizado en síntesis, especialmente para sonidos creados para instrumentos de teclas. El envolvente describe la evolución de amplitud del sonido desde el momento que se toca la nota hasta el nivel máximo (attack: tiempo de ataque). A partir del nivel máximo, el envolvente sigue su recorrido hasta el nivel de sustain (sostenimiento). El tiempo que necesita para ir desde el nivel máximo hasta el nivel de sostenimiento se llama decay. Finalmente, una vez relajada la tecla, el instrumento sigue sonando durante el tiempo de release (relajación).

**Envolvente ADSR**
![](Extras/Images/2024-9-1_12.54.34.png)

#### Nuevo vocabulario para analizar el sonido

Aparece un nuevo vocabulario, pero, sobre todo, aparecen nuevos conceptos para analizar el sonido. El concepto más importante es el de «objeto sonoro». El objeto sonoro toma la totalidad de la complejidad de un sonido que posee una unidad. La unidad está definida por las cualidades perceptivas del sonido y no por sus cualidades físicas. Se trata de un análisis de la percepción más que de las propiedades físicas medibles.

En el Tratado de los Objetos Sonoros, Pierre Schaeffer habla de morfología del sonido y presenta siete criterios:

- Tres criterios de materia:
	- La masa: define cómo el objeto ocupa el campo de las alturas.
	- El timbre armónico: define el espectro del sonido.
	- El grano: define si el sonido tiene pequeñas irregularidades.

- Dos criterios de forma:
	- La dinámica: define el perfil de intensidad.
	- El aspecto: define el vibrato

- Dos criterios de variación:
	- El perfil melódico: evolución del sonido en el campo de las alturas.
	- Perfil de masa: evolución interna de la masa del sonido.

Con la teoría de Pierre Schaeffer, un sonido se puede analizar según su masa armónica (sonido tónico con una altura determinada, sonido complejo tipo espectro ruidoso, etc.) y según su duración (sonido de impulsión, sonido continuo, sonido iterativo). Cada criterio puede presentarse de dos formas: fijo o variable.

El compositor Denis Smalley inventó una nueva teoría sonora: la espectromorfología. El análisis espectromorfológico se concentra en el análisis del espectro, principalmente, y en su evolución temporal. Denis Smalley define tres criterios principales: la evolución temporal del espectro, la evolución temporal de la textura (y de la intensidad) y la evolución del sonido en el espacio. Smalley introduce la noción de espacio, la cual estaba ausente en la teoría de Schaeffer.

### Representaciones gráficas

#### Los instrumentos

- El osciloscopio.

El osciloscopio es un instrumento que permite visualizar la forma de onda de una señal y dibuja un gráfico en función del tiempo. La forma de onda es la evolución de la amplitud durante un ciclo y es un componente esencial que define las propiedades de un sonido.

El osciloscopio es muy interesante para evaluar la evolución de un sonido estático, con una forma de onda sencilla, pero no informa mucho sobre el contenido armónico, y es poco intuitivo para imaginar las cualidades musicales del sonido.

**Forma de onda**
![](Extras/Images/2024-9-1_13.5.3.png)

- El espectrógrafo (o espectrograma).

Instrumento que registra el espectro de un sonido en un momento dado: las frecuencias presentes con las amplitudes. Es muy preciso para evaluar el contenido frecuencial de un espectro y, por lo tanto, para analizar el contenido musical. Sin embargo, representa un momento instantáneo y no puede enseñar la evolución temporal del sonido.

**Forma de onda y espectrograma del canto de un pájaro**
![](Extras/Images/2024-9-1_13.6.2.png)

-  El sonograma

El sonograma combina las ventajas del osciloscopio (evolución temporal) con la precisión y la representación intuitiva del espectrógrafo.

Las zonas más oscuras representan las frecuencias con mayor amplitud.

#### Las formas de ondas básicas para la síntesis

- La forma de onda sinusoide

Corresponde a la realización de una función seno en el tiempo. La forma de onda sinusoide es considerada como la forma de onda más pura porque no genera componentes armónicos o inarmónicos. El espectro de un sonido sinusoide está compuesto únicamente de la frecuencia fundamental.

- La forma de onda cuadrada.

La forma de onda cuadrada es la sucesión de dos estados: positivo y negativo (o alto y bajo). El espectro está compuesto únicamente de los armónicos enteros impares. Las ondas cuadradas se utilizan mucho para la síntesis de instrumentos de viento y bajos electrónicos. Al tener un espectro armónico muy rico son muy adecuadas para la síntesis sustractiva.

- La forma de onda pulso

La forma de onda pulso es muy parecida a la cuadrada. La diferencia es que la anchura de un estado puede variar, así no se queda tan simétrica como la forma de onda cuadrada. Los generadores de forma de onda pulso poseen un parámetro que permite elegir la anchura y variar el contenido frecuencial del espectro.

- Diente de sierra.

La forma de onda de diente de sierra tiene un espectro completo de armónicos enteros pares e impares. La forma de onda de diente de sierra se emplea mucho para la síntesis de instrumentos de cuerda.

- Forma de onda triangular.

La forma de onda triangular muestra una relación entre tiempo y amplitud muy lineal. Por esa razón, tiene un espectro bastante pobre. Los armónicos presentes en su espectro corresponden a los armónicos enteros impares, como en la forma de onda cuadrada, pero hay un número menor. El timbre de un sonido de forma de onda triangular se acerca al timbre de una forma de onda sinusoidal.

- La onda de tipo ruido.

La forma de onda de un ruido no es periódica. No es una forma de onda que se repite en el tiempo, es una forma de onda aleatoria. Por esa razón, contiene todas las frecuencias audibles

Existen varios modelos de producción de ruido, se distinguen por la distribución de la amplitud entre las frecuencias. El ruido blanco posee todas las frecuencias audibles, todas de misma amplitud; el ruido rosa posee todas las frecuencias, pero las amplitudes son inversamente proporcionales a la frecuencia, resulta un espectro con un contenido agudo menos presente y más natural para el oído humano.







