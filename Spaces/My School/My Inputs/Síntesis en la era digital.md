---
Course: "[[Síntesis de sonido]]"
Source: UNIR
Status: 🟨
Links:
  - "[[My Inputs]]"
tags:
  - "#i/unir"
  - sintesis
Created: 2025-01-15 18:37
Tema: "8"
modified: 2025-01-16T13:45:07+01:00
Semester: 4
---
## Notes

### La síntesis por tabla de onda

#### Definición

La síntesis por tabla de onda consiste en reproducir en bucle una forma de onda almacenada en un circuito integrado de memoria. Los valores digitales que constituyen la forma de onda se recuperan gracias a un contador que incrementa un índice, a cada índice de la memoria corresponde un dato binario.

El tamaño de la memoria puede ser diferente de un sintetizador a otro. Suele tener un tamaño de 1.024 índices, los de mejor calidad tienen 2.048 índices. Cuanto más grande es la memoria más detalles se pueden almacenar.

Por otro lado, la resolución en bit es muy importante. Si en los años 80 la resolución solía ser de 8 bits, hoy en día encontramos resoluciones de 16 bits, 24 bits e, incluso, 32 bits para los sintetizadores informáticos.

La señal de control que permite incrementar el índice apuntado influye sobre la velocidad de lectura de la tabla y, por consecuencia, sobre la frecuencia fundamental del sonido generado.

#### Aplicaciones

La incrementación de los índices puede hacerse según unos algoritmos complejos introduciendo distorsiones en la señal para enriquecer el sonido.

**Utilización de varias tablas de onda.**

Una de las grandes riquezas de este tipo de síntesis es la de poder cambiar la tabla de onda durante la generación del sonido para introducir una variación tímbrica.

Un sintetizador puede almacenar varias tablas de onda ordenadas en grupos (teniendo en cuenta que las tablas de onda de un mismo grupo tienen las mismas características tímbricas).

El cambio de tabla de onda puede efectuarse de manera cíclica repetitiva o aleatoria. Si el cambio de tabla de onda se hace dentro del mismo grupo se obtienen variaciones tímbricas suaves; por el contrario, si el cambio se hace con tablas pertenecientes a diferentes grupos, los cambios serán más bruscos.

Para imitar la evolución natural de un sonido acústico el cambio de tabla puede ser controlado por un envolvente tipo ADSR, a cada fase del envolvente le corresponde una tabla diferente.










