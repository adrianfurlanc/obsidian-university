---
Course: "[[Síntesis de sonido]]"
Source: UNIR
Status: 🟨
Links:
  - "[[My Inputs]]"
tags:
  - "#i/unir"
  - sintesis
Created: 2024-12-01 13:13
Tema: "5"
modified: 2025-01-15T15:17:19+01:00
Semester: 4
---
 ## Notes

### Definición

#### Definición

En la síntesis por modulación de amplitud, la amplitud de una forma de onda portadora está cambiada con respecto a otra forma de onda (denominada moduladora).

Con la modulación de amplitud se trata de utilizar un oscilador periódico como fuente de modulación.

Cuando la frecuencia de la forma de onda moduladora (generalmente una sinusoide) supera los 20 Hz, aparecen unos efectos tímbricos y se puede hablar realmente de síntesis. Para frecuencias modulantes inferiores a 20 Hz el efecto se parece a un trémolo más o menos rápido.

La modulación de amplitud se realiza multiplicando las dos señales entre ellas, un poco como en la modulación en anillo.

#### Comparación entre modulación de amplitud y modulación en anillo

La diferencia entre la modulación de amplitud y la modulación en anillo se sitúa en la polaridad de la forma de onda moduladora.

La forma de onda es bipolar (polos positivos y polos negativos)

La modulación en anillo no cambia nada en la señal portadora ni tampoco en la señal moduladora, así que tenemos una modulación de dos señales bipolares. Sin embargo, en la síntesis por modulación de amplitud se trata de coger la información de amplitud de la moduladora sin que interfiera su polaridad, trasponiendo la forma de onda moduladora en la parte positiva de las amplitudes, la forma de onda moduladora en vez de ser bipolar se vuelve unipolar.

![](Extras/Images/2024-11-0_13.20.18.png)

La imagen superior muestra dos formas de onda resultantes del proceso de la misma forma de onda portadora y de la misma forma de onda moduladora: la forma de onda a la izquierda es el resultado de un método por modulación en anillo, y a la derecha, la forma de onda resulta de un proceso por modulación de amplitud.

Al igual que la modulación en anillo, la modulación de amplitud genera frecuencias laterales para cada componente sinusoidal del espectro de la moduladora y de la portadora. Las frecuencias laterales son el resultado de la suma y de la resta de las frecuencias de las dos señales

La diferencia entre la modulación en anillo y la modulación de amplitud es que en la modulación de amplitud la frecuencia de la portada está preservada y las frecuencias laterales tienen una amplitud igual a la mitad de la amplitud de la portadora.

### Experiencias de interés

Supongamos que utilizamos un teclado que controla la frecuencia de la forma de onda portadora y que tenemos la moduladora de misma amplitud pero de frecuencia fija, digamos de 100 Hz.

- ▸  Cuando la portadora tiene una frecuencia igualmente de 100 Hz: las tres frecuencias resultantes son 100 Hz (frecuencia de la portadora), 0 Hz (resta de la frecuencia de la moduladora y de la frecuencia de la portadora, en este caso son iguales) y 200 Hz (suma de las dos frecuencias). Podríamos pensar que la frecuencia de 0 Hz no tiene ningún efecto; pero sin embargo, hay que tener en cuenta que tiene una amplitud igual a la mitad de la de la portadora. Al ser una frecuencia de 0 Hz, es decir con una fase que no evoluciona, genera un efecto DC offset (del inglés direct current) que modifica la forma de onda resultante.
    
- ▸  Cuando la portadora es de 200 Hz: las frecuencias resultantes son de 100 Hz,  
    200 Hz y 300 Hz. Se trata de una relación frecuencial armónica, aunque la frecuencia fundamental (100 Hz) no es la frecuencia de la portadora, sino la frecuencia resultante de la resta de las frecuencias portadora y moduladora (200 Hz - 100 Hz = 100Hz).
    
- ▸  Cuando la frecuencia de la portadora está en relación inarmónica con la de la moduladora: aparecen espectros inarmónicos, tipo campana o más complejos aun dependiendo de la riqueza de las formas de ondas moduladora y portadora. Si se tocan varias notas diferentes en el teclado mientras que la frecuencia de la moduladora sigue fija, la relación entre frecuencia moduladora y portadora va cambiando. Si esa relación cambia, entonces el timbre resultante también se modifica. Es decir, que cada nota tocada tendrá un timbre distinto.
    
    Ahora supongamos que la frecuencia de la moduladora no es fija.
    

▸ Cuando la moduladora sigue de manera proporcional la frecuencia de la portadora: ahora sí tenemos una relación fija entre frecuencia portadora y frecuencia moduladora. Se puede cambiar la frecuencia de la portadora con el teclado preservando el timbre sintetizado.

### Aplicaciones

Vamos a ver ahora dos ejemplos concretos de utilización.

#### Modulación con formas de onda de contenido armónico rico

Si se utilizan formas de onda complejas y no meramente sinusoides, el sonido resultante se enriquecerá de manera exponencial según el número de componentes frecuenciales en la portadora y la moduladora.

Por ejemplo, si cada una de las señales tiene una frecuencia fundamental más un armónico, la síntesis resultante tendrá ocho componentes frecuenciales, suma y resta de cada uno de los armónicos entre ellos:

- ▸  Componentes frecuenciales presentes en la señal portadora: 100 Hz, 150 Hz.
    
- ▸  Componentes frecuenciales presentes en la señal moduladora: 400 Hz, 500 Hz.
    
- ▸  Componentes frecuenciales presentes en el sonido sintetizado: 300 Hz (400-100), 500 Hz (400+100), 400 Hz (500-100), 600 Hz (500+100), 250 Hz (400-150), 550 Hz (400+150), 350 Hz (500-150), 650 Hz (500+150).
    
    Si la moduladora y la portadora tuvieran tres componentes, el espectro resultante estaría compuesto de dieciocho frecuencias; para cuatro componentes el resultado sería de treinta y dos frecuencias, etc

#### El índice de modulación

En la síntesis por modulación de amplitud, se puede modular la amplitud de la señal moduladora, es decir el índice de modulación. El índice de modulación permite amplificar o disminuir el efecto de la síntesis y la amplitud de las frecuencias laterales.










