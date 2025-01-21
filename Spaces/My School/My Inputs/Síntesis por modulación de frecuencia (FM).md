---
Course: "[[Síntesis de sonido]]"
Source: UNIR
Status: 🟨
Links:
  - "[[My Inputs]]"
tags:
  - "#i/unir"
  - sintesis
Created: 2024-12-05 17:20
Tema: "6"
modified: 2025-01-15T18:37:19+01:00
Semester: 4
---
## Notes

### Definición y experiencias de interés

- La síntesis por modulación de frecuencia (FM) es el resultado de una señal moduladora (o modulante) que cambia la frecuencia de oscilación de otro generador de señal portadora (o portante).
    
- ▸  La síntesis FM se descubrió mientras el compositor John Chowning estudiaba varios tipos de vibrato, la síntesis FM es una ampliación del concepto de vibrato.
    
- ▸  La síntesis por modulación de frecuencia genera bandas de frecuencias laterales cuyas amplitudes no son distribuidas de manera lineal, sino que sigue un patrón matemático complejo.
    
- ▸  Las bandas laterales aparecen simétricamente a la frecuencia de la portante y a distancia igual a la frecuencia de la modulante.
    
- ▸  El índice de modulación, permite controlar la fuerza del efecto resultante de la síntesis y el número de bandas laterales.

### Aplicaciones

#### Parámetros de control

La síntesis por modulación de frecuencia es muy eficaz porque gracias a pocos osciladores permite sintetizar sonidos con espectros complejos. También lo interesante en este tipo de síntesis es que necesita pocos parámetros de control. A la hora de realizar en concreto una síntesis FM, hay dos parámetros importantes: el coeficiente de armonicidad y el índice de modulación.

**El coeficiente de armonicidad.**

El coeficiente de armonicidad corresponde al cociente de la frecuencia modulante por la frecuencia portante. Este coeficiente determina qué frecuencias aparecerán en el sonido resultante.

El coeficiente de armonicidad es un valor que da una estimación del tipo de timbre resultante de la síntesis.

- Si el coeficiente de armonicidad es un número entero, el espectro resultante será de tipo armónico.
    
- Si el coeficiente de armonicidad es un número cercano a un número entero (3,01, 4,04, etc.), el espectro resultante será tipo armónico, pero con pequeños movimientos o ligera inarmonicidad que parecerá natural.
    
- Si el coeficiente de armonicidad es un número con decimales cerca de valores con medio (4,51, 6,49, etc.), el espectro resultante será muy inarmónico.

#### El índice de modulación.

El índice de modulación es el cociente de la amplitud del oscilador modulante por la amplitud del oscilador portante. Este parámetro afecta a la amplitud relativa entre las bandas frecuenciales laterales. Cuanto más alto sea el valor del índice de modulación más brillante será el sonido resultante. 

Por supuesto, estos dos parámetros pueden ser modulados en el tiempo con un envolvente o un LFO para generar sonidos más realistas.

#### La retroalimentación (feedback)

La técnica de retroalimentación permite añadir complejidad en la señal de manera muy sencilla. Para introducir un bucle de retroalimentación en un bloque, hace falta reinyectar la señal de salida del bloque en una entrada de las entradas del bloque.

![](Extras/Images/2025-0-3_17.39.37.png)

En el esquema superior, la salida de un VCO se reutiliza para modular la entrada de frecuencia del mismo VCO. El VCO portante y el VCO modulante son el mismo oscilador.

Si la frecuencia original del VCO es de 100 Hz y la forma de onda una sinusoide, la retroalimentación permitirá aplicar una modulación de la misma frecuencia, 100 Hz, y el espectro resultante contendrá una serie de componentes a distancia regular de 100 Hz parecido a una forma de onda en diente de sierra. Un operador VCA permite controlar la amplitud de retroalimentación, en este caso correspondería al índice de modulación jugando con la brillantez del sonido.
### Un caso particular: la modulación de fase

La síntesis por modulación de fase funciona de la misma manera que la modulación de frecuencia, excepto que la forma de onda modulante en vez de modular la frecuencia de la portante modula la fase del oscilador de la portante.

Es un método que requiere una cierta complejidad del circuito electrónico, y por esta razón es un método de síntesis que se encuentra más en el dominio digital que en el analógico.

### Sintetizadores de FM

Existen muchos sintetizadores capaces de generar síntesis FM. Vamos a hablar del más emblemático, el DX7 del fabricante Yamaha. Ahora, el fabricante Native Instrument ha sacado el software FM8 para emular un DX7 con todas las ventajas de la informática.

Fabricado entre 1983 y 1989, el DX7 es un sintetizador digital basado en la síntesis FM derivada de la investigación de John Chowning

Sin embargo, no se debe pensar que una síntesis FM con muchísimos moduladores generará un sonido más interesante que un sonido realizado con menos operadores. Efectivamente, el exceso de modulación y retroalimentación puede llevar muy rápidamente a una señal muy ruidosa sin cualidades musicales. El arte de la síntesis es encontrar la manera más eficaz de generar un sonido con cualidades tímbricas interesantes.








