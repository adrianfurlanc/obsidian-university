---
Course: "[[Síntesis de sonido]]"
Source: UNIR
Status: 🟨
Links:
  - "[[My Inputs]]"
tags:
  - "#i/unir"
  - sintesis
Created: 2024-12-26 23:00
Tema: "4"
modified: 2025-01-14T19:36:23+01:00
Semester: 4
---
## Notes

### Definiciones

#### Síntesis Aditiva

La síntesis aditiva se consigue añadiendo varios componentes simples, generalmente sinusoides, para generar un timbre nuevo. Se realiza mezclando sinusoides, cada una de ellas con un envolvente de amplitud propia.

En la síntesis aditiva, para conseguir un sonido con un espectro muy rico, hay que sumar tantos generadores como componentes armónicos hagan falta.

#### Síntesis Sustractiva

La síntesis sustractiva es el proceso inverso a la síntesis aditiva. A partir de un sonido con un espectro rico, se trata de quitarle componentes armónicos. 

Esta transformación se realiza gracias a la utilización de filtros, pasa-bajo generalmente, pero también pasa-alto y pasa-banda aplicados a forma de ondas tales como la cuadrada, la diente de sierra o la triangular.

### Experiencias de interés

#### En síntesis aditiva

El efecto de fusión tímbrica es tal vez el campo de acción preferido de la síntesis aditiva. La experiencia se puede realizar a partir de una frecuencia pura de sinusoide a la cual vamos a añadir otros componentes sinusoidales para escuchar el efecto resultante y explorar los límites del oído.

Tomemos como punto de partida una frecuencia de 100 Hz a la cual añadimos:

- ▸  Una frecuencia de 100 Hz con una fase invertida: el efecto resultante es un silencio.
    
- ▸  Una frecuencia de 101 Hz: el efecto resultante es una sensación de trémolo oscilando a la frecuencia de 1 Hz. (101 Hz-102 Hz).

- ▸  Una frecuencia de 200 Hz (octava superior a la fundamental):
	- Si el componente se genera de manera abrupta y en un momento distinto de la generación de la fundamental, se oirá como una nota nueva,
	- Si el componente se genera en el mismo momento que la fundamental, el oído interpreta esta información como si fuera un conjunto de dos frecuencias.
	- Si la aparición del segundo componente se hace de manera muy progresiva, la percepción global será una sensación de que el tono inicial va cambiando hacia un timbre un poco más brillante.
	- Entre dos y cinco frecuencias en relación inarmónica: el efecto resultante es una sensación de «acorde».
	- A partir de siete frecuencias en relación inarmónica: el efecto resultante es un timbre complejo.

#### En síntesis sustractiva

**Imitación de instrumentos acústicos:**

- En síntesis sustractiva no se puede manipular cada armónico independientemente, pero si aplicamos un envolvente ADSR a la frecuencia de corte de un filtro pasa-bajo, se puede imitar la aparición y evolución de los armónicos de unos instrumentos.

**Aparicición de frecuencia:**

- Aunque la síntesis sustractiva quite componentes al sonido, existe un caso en el cual aparece una nueva frecuencia. Al subir el nivel de resonancia del filtro, la frecuencia de corte se notará más y acabará por notarse de manera casi independiente del resto del sonido.

**Modulación de la frecuencia de corte:**

- La frecuencia de corte puede evolucionar según un envolvente, pero también puede modular de forma repetitiva creando varios efectos.

**La voz humana:**

- La voz humana es un ejemplo de filtro natural. El generador del sonido de la voz, la cuerda vocal, pasa a través del sistema bucal que va a modificar el sonido original gracias a la lengua, los labios y el paladar. Los cambios de forma de la boca amplifican y atenúan unas zonas específicas de la «A» y de la «O», esas zonas se llaman los formantes.

### Aplicaciones

**Síntesis Aditiva**

![](Extras/Images/2025-0-2_17.30.19.png)

El esquema superior muestra los bloques principales de una síntesis aditiva en un sistema modular.

**Síntesis Sustractiva**

![](Extras/Images/2025-0-2_17.31.24.png)

### Sintetizadores

Es importante señalar que los sintetizadores no solo se dedican a un tipo de síntesis, sino que siempre intentan ofrecer las mayores posibilidades sonoras gracias a la posibilidad de utilizar varios métodos de síntesis.














