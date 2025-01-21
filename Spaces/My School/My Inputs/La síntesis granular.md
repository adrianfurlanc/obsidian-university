---
Course: "[[Síntesis de sonido]]"
Source: UNIR
Status: 🟨
Links:
  - "[[My Inputs]]"
tags:
  - "#i/unir"
  - sintesis
Created: 2025-01-15 18:38
Tema: "9"
modified: 2025-01-16T13:58:09+01:00
Semester: 4
---
## Notes

### Definición y contexto histórico

#### Definición

El sonido, al igual que la luz, puede ser considerado como una onda o como un conjunto de partículas. La síntesis granular fabrica sonidos a partir de miles de partículas o granos. Cada grano debe tener una duración suficientemente corta para pasar por debajo del umbral de discriminación del oído humano en cuanto a la duración, la amplitud y el tono. Esta duración crítica suele ser de entre 1 ms hasta 100 ms. El resultado es un sonido global, llamado nube de granos.

#### El grano

Cada grano esta modelado por un envolvente de amplitud.

Tipos de envolvente: a) Hanning, b) Triangular, c) Impulsión, d) Percusiva
![](Extras/Images/2025-0-4_12.58.14.png)

Cuando la pendiente del envolvente es muy abrupta afecta mucho al timbre del sonido resultante. Unos granos muy cortos, inferiores a 20 ms, crean texturas con crepitación y chispa. La duración de los granos puede ser constante, aleatoria o variar según la frecuencia fundamental del sonido.

Si se trata de un sonido muestreado, la forma de onda del grano se elige generalmente indicando qué porción de la muestra va a reproducir el grano.

Lo interesante en la síntesis granular es que cada grano puede tener parámetros diferentes de otro grano, esos parámetros son: la duración, la forma de onda, el envolvente, la frecuencia y la panorámica.

#### Contexto histórico

Es a mediados del siglo XX, en paralelo a las investigaciones sobre la física cuántica, el físico Dennis Gabor afirmó que cualquier sonido puede ser descrito con una representación granular.

El compositor Iannis Xenakis, en 1959, fue el primer compositor en utilizar el método de la síntesis granular en su obra Analogique A-B. La técnica consistía sencillamente en recortar un gran número de trocitos de cinta magnética. En 1974, Curtis Roads fue el primero en desarrollar el método con los medios informáticos.
### Métodos para la síntesis granular

La realización de un generador de grano es bastante sencilla, basta con un oscilador y un envolvente. Sin embargo, la creación de centenas de granos por segundo y los miles de parámetros que hay que gestionar impiden un control individual manual, y obliga a una organización a un nivel superior global que generará los granos individualmente.

Existen cuatro métodos de síntesis granular, según el compositor e investigador Curtis Roads (1996):

#### Síntesis granular síncrona de altura

Es un método dedicado a generar sonido con formantes en su espectro. Comporta varias etapas: detección de altura, análisis del espectro y resíntesis.

La detección de altura coge cada ciclo del sonido como si fuera un grano único. El algoritmo deduce de ese grano una respuesta impulsional del espectro que servirá para la resíntesis.

La parte resíntesis genera un tren de impulsión a la frecuencia detectada en la primera etapa. El tren de impulsión pasa a través de un banco de filtros reproduciendo las características espectrales analizadas en la segunda etapa según la respuesta impulsional de los granos analizados.

#### Síntesis granular casi síncrona

Puede generar varios flujos de granos con un espacio temporal variable entre ellos.

El método se llama «casi síncrono» porque los granos se suceden de manera más o menos regular. Cuando el flujo de granos es regular, aparece una forma de onda periódica, y si el envolvente no varía, el resultado se aparenta a una síntesis por modulación de amplitud: en este caso la portadora es la forma de onda del grano y la moduladora es la repetición periódica del envolvente de amplitud.

Al igual que la síntesis por modulación de amplitud aparecen unas bandas laterales a la frecuencia de la portadora, las bandas laterales se sitúan a una distancia correspondiente al inverso del período del envolvente. A diferencia de la síntesis AM, las bandas laterales no son frecuencias puras, sino franjas frecuenciales de tipo formántico. Si se combinan varios flujos de granos, se puede imitar sonidos parecidos a la voz o a instrumentos acústicos.

#### Síntesis granular asíncrona

Este tipo de síntesis genera granos según una distribución estadística dentro de unos parámetros temporal y frecuencial. El sonido resultante se llama nube de sonido.

El compositor especifica la duración de la nube, la duración de los granos, la densidad de granos por segundo, la anchura de banda frecuencial, el envolvente de amplitud de la nube, la forma de onda del grano, la dispersión espacial.

Cada parámetro puede evolucionar en el tiempo según un envolvente para conseguir un gran número de efectos.

#### Síntesis granular con sonidos muestreados

La granulación de sonidos existentes introduce una microtextura y reordena los microfragmentos del sonido. Se trata de leer pequeños fragmentos de un sonido muestreado y aplicar a este fragmento un envolvente de amplitud.

El compositor tiene la posibilidad de elegir tantos parámetros como en la AGS, pero tiene además la posibilidad de cambiar la forma de onda según la posición de lectura de los granos en el fichero.

Gracias a un algoritmo de selección aleatorio para cada grano, se pueden recombinar los elementos de un sonido, creando texturas totalmente nuevas por la superposición temporal de fragmentos de sonidos alejados unos de otros en el sonido original.







