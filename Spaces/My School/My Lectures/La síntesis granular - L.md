---
Course: "[[Síntesis de sonido]]"
tags:
  - "#lecture"
  - sintesis
Created: 2025-01-15 11:53
Tema: "9"
modified: 2025-01-16T13:31:22+01:00
Status: 🟨
Semester: 4
---
Links:: [[My Lectures]]
___
## Notes

> [!hint] 
>Las experiencias de interés aparecen en los temas 4, 5 y 6
> 
Presentación del examen (1:15:00)

10 preguntas tipo test. (0.5 puntos cada una).

entender bien los procedimientos.

luego dos preguntas de desarrollo. (2.5 cada una). 

(Experiencias de interés de la síntesis sustractiva, por ejemplo.)




## Síntesis Granular

### Definición y contexto histórico

#### Definición

Se puede trabajar con granos de sonido. Descomponer el fragmento en un conjunto de granos y fabricar sonidos a partir de estos granos.

Se considera granos a los que tienen poca duración de 1ms a 100ms

Distinguimos una nube de granos. 

Cada uno de estos granos se le pueden añadir una envolvente de amplitud. H

Hay 4 tipos de envolvente de amplitud:

![](Extras/Images/2025-0-3_12.16.49.png)

La envolvente modifica el timbre del sonido.

Puede haber una granos con una duración del grano aleatorio o que varía en función dse un parámetro (frecuencia fundamental del sonido)

Cada grano tiene distinos parametros que se pueden controlar: duración, forma de onda, frecuencia y panorámica.

### Métodos para la síntesis granular

#### Síntesis granular síncrona de altura

PSGS en inglés

consiste en generas sonidos conformantes en el espsector usando un proceso de 3 partes:

detección de altura, análisis del espectro y resíntesis.

Cada ciclo se convertirá en granos (100hz = 100granos). se genera un tren de impulsos. (cadena de granos) a la misma frecuencia que el sonido original. Se pasa luego por una serie de filtros que modulan asi las caracteristicas tímbricas del sonido. separa sonidos armonoicos e inaromoicos

#### Síntesis granular casi síncrona

QSGS en inglés

Generar grandes flujos de gramos con una separacion temporal variable. Cuando es regular se parece a la sintesis AM. (bandas laterales).

1 grano sonoro es como una señal portadora y un envolvente que modula la amplitud. 
Si es constante aparecen bandas laterales. 

A diferencia de la síntesis AM es que no son sonidos puros sino bandas formánticas.

Se pueden imitar sonidos de voz y de instrumentos.

#### Síntesis granular asíncrona

AGS en inglés

consiste en generar granos segun la disribución estadística siguiendo parámetros del tiempo y de frecuencia
#### Síntesis granular con sonidos muestreados

Se basa en un fragmento sonido pregrabado. (sonidos muestreados).

Se fragmenta esta muestra y se reorganizan los granos para crear nuevos sonidos.




