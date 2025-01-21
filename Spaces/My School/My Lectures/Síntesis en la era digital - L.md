---
Course: "[[Síntesis de sonido]]"
tags:
  - "#lecture"
  - sintesis
Created: 2025-01-10 11:20
Tema: "8"
modified: 2025-01-16T12:54:32+01:00
Status: 🟨
Semester: 4
---
Links:: [[My Lectures]]
___
## Notes

### La síntesis por tabla de onda


Hay síntesis que solo se pueden dar en entornos digitales.
#### Definición

Se puede seleccionar trozos de audio. (conseguiríamos así un tono)

Tamaño de memoria. de 1024 o 2048 índices. Mientras mayor memoria habra mas informaicon de esa forma de onda determinad

resolución de bit. de 24 a 32 bits. La calidad, resolución.

#### Aplicaciones

A mayor pulsos velocidad de lectura de la tabla mas la frecuencia será ma s aguda. Así la frecuencias fundamnetla es maás alta.

Puede leerse de forma variable.

Si introducimos una distorsión los índices no se leen de manera regular. La fundamental sigue siendo la misma. Hay un cambio tímbrico.

#### utilizacion de varias formas de onda

Se leen los índices de varias formas de onda y vamos saltando entre ellas. (1x1, 2x2, 3x3, 1x4, 2x5, 3x6, etc.)

Se puede leer de manera aleatoria o por barrido.
Se puede cambiar con la ASDR u otros módulos.  

### La síntesis por modelo físico

modelo matematico imita instrumentos reales.

Simulación de interacciones. 

Fuente primaria que genera en el sonido inicial en bruto.

El Acoplatimienoto es la relación entre la fuente primaria y los resonadores.  Determina como interactúan entre sí.

Resonadores. Colorear el sonido de l afuente primaria. Funcionan como filtros. 

Puedo utilizar la fuente primaria de un instrumento y el resonador de otro instrumento, con un acoplamiento adecuado para llegar a sonidos híbridos.

modelos continuos transferencia de sonido de forma constante. Se basan en un elemento que se mueve y otro que vibra. La fuente primaria y el resonador son fijas. (puedo cambiar la altura)

modulos impulsivas hay un estimulo y luego una transferencia

**El algoritmo Karplus-Strong**

al inicio se introuduce una energía como un golpe (pulsando una cuerda), esto pone al resonador en movimiento pero al no recibir más energía el sonido acaba decayendo con el tiempo. La forma en que el resonador pierde energía afecta al contenido armónico (al sonido) y como este funciona a lo largo del tiempo.

El algortimo hace uso de un retardo temporal para simular esa pérdida de energía. Nos permite simular en las cuerdas como se da esa perdida de esa energía.



























