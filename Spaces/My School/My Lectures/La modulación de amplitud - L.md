---
Course: "[[Síntesis de sonido]]"
tags:
  - "#lecture"
  - sintesis
Created: 2024-12-01 13:13
Tema: "5"
modified: 2025-01-16T12:17:54+01:00
Status: 🟨
Semester: 5
---
 Links:: [[My Lectures]]
___
## Notes

### Definicion

Para grabar en Puredata:

Crear un objeto y 3 mensajes

obj-wriresf

messages
- start
- stop
- open prueba.wav

![](Extras/Images/2024-11-0_14.18.57.png)

![](Extras/Images/2024-11-0_14.20.5.png)

- crear fichero con open prueba.wav
- start para comenzar la grabación
- stop para terminar la grabación

### Síntesis AM

### Modulación de amplitud

no estamos sumando ni restando frecuencias como en la síntesis aditiva y sustractiva. Lo que se está modulando es la amplitud.

*Message signal* = moduladores (es la que cambia la portadora)

*Carrier signal* =  portadora (informacion frecuencia y amplitud) vco principal

Se modula con un oscilaodr

Las frecuencias menores de 20 hz generan un tremolo

Las ondas moduladores mayores a 20 hz sobre una obra portadora genera elementos tímbricos

En la modulacion de anillo se multipilican dos ondas entre ellas.

La diferencia entre modulación de amplitud y modulación en anillo es la polaridad de la forma de la onda moduladora.

La onda bipolar tiene una parte positiva y una parte negativa.

La onda unipolar solo tiene numeros positivos

![](Extras/Images/2024-11-0_14.47.20.png)

En la modulación de anillo tiene dos señales bipolares mientras que en la sintesis AM se usa la informacion de amplitud de la onda moduladora (los valores negativos se transforman en positivos). De esta manera se genera una onda unipolar.

Se trabaja con una señal unipolar porque la conversión de bipolar a unipolar facilita que lo unico que se está impactando es la intensidad y no la polaridad del sonido a la hora de modular la onda portadora.

La imagen de la izquierda es la modulación en anillo y la de la derecha es la sintesis AM

![](Extras/Images/2024-11-0_14.54.15.png)


Las frecuencias laterales son aquellas frecuencias generadas al sumar y restar las frecuencias de la portadora y la moduladora. Si tengo una portadora de 300hz y una moduladora de 100 hz, la suma es 400hz y la resta es 200hz. La onda resultante va a tener la frecuencia de la onda portadora (300hz) más las frecuencias resultantes de la suma y la resta (400 y 200). Al aplicar una modulacion de 100hz sobre una portradora 300hz el resultado será una onda con 3 frecuencias (300, 400 y 200) éstas son las frecuencias laterales.

Si la frecuencia es 0 se llama dc offset y se tiene en cuenta su amplitud y no su frecuencia

En caso de que haya una modulacion inarmónica se generarian espectros inarmónicos

Si la moduladora no es fija lo que pasaria se que el sonido iria evolucionando en funcion de la modulacion. Si va subiendo la onda moduladora de 100 a 200 (100-110-120, etc.) éstas acabarian afectando las frecuencias laterales de la portadora. Si esta es 200 (310 y 90 - 320 - 80) es decir iria modulando con el tiempo

Si la portadora no es fija y la moduladora sí, pasaría lo mismo.

Si quiero cambiar la altura y no el resultado tímbrico en si mismo. Lo que podemos hacer es que la frecuencia moduladora mantenga una relación proporcional en todo momento con la portadora. Si tienen ambas una relación proporcional puedo cambiar la altura y mantener el timbre

Si tengo una onda con dos frecuencias en si misma (100 y 150hz) y lo modulamos con otra onda (400 y 500hz). Las frecuencias laterales que se van a generar aquí son muchísimas. Por ejemplo, las ondas resultantes serían = 300 (400-100), 500 (400+100), 600 Hz (500+100), 250 Hz (400-150), 550 Hz (400+150), 350 Hz (500-150), 650 Hz (500+150).

#### El índice de modulación

Si modulamos el índice de modulación acabamos amplificando o disminuyendo los efectos de la síntesis y por tanto sobre las frecuencias laterales






