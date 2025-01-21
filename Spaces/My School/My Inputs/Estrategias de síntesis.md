---
Course: "[[Síntesis de sonido]]"
Source: UNIR
Status: 🟨
Links:
  - "[[My Inputs]]"
tags:
  - "#i/unir"
  - sintesis
Created: 2025-01-15 17:44
Tema: "7"
modified: 2025-01-15T18:37:30+01:00
Semester: 4
---
## Notes

### La síntesis modular

La síntesis modular se define por la utilización de módulos, elementos sonoros con una función precisa, de generación o transformación de señal audio o de señal de control.

A partir de los años 60-70 aparecieron unos módulos dedicados específicamente a la síntesis de sonido.

Los sistemas modulares comenzaron a realizarse entonces en un ámbito restringido a una marca. En los años 90 apareció uno de los estándares más utilizados hoy en día: el formato Eurorack, que permitía integrar en un sistema unos módulos de marcas diferentes. El sintetista ahora puede mezclar en su sistema cualquier módulo de cualquier marca respondiendo a las características Eurorack.

Existen tres tipos de sintetizadores: los sintetizadores cerrados, los sintetizadores semimodulares y los sintetizadores modulares.

Un **sintetizador cerrado** es un sintetizador cuyos componentes son diseñados de manera fija, es decir, que todos los componentes son precableados y no se puede cambiar nada en la estructura del modelo de síntesis.

Ofrece la ventaja de trabajar muy rápidamente, dado que el músico se centrará únicamente en variar la amplitud de los parámetros predefinidos, sin tener que construir su sistema módulo por módulo.

Un **sintetizador semimodular** ofrece la ventaja de los dos mundos, la versatilidad de un sistema modular y la rapidez de programación de un sistema cerrado. Un sintetizador semicerrado incorpora varios módulos precableados en una misma caja, lo que permite conseguir un sonido del instrumento sin tener que cablear todo un sistema. El precableo se limita generalmente a un bloque básico de síntesis sustractiva: VCO, VCF y VCA son conectados de manera fija para ofrecer un sonido básico. Sin embargo, el sintetizador dispone generalmente de una batería de procesadores y LFO no precableados permitiendo una gran libertad de programación.

El concepto de síntesis modular no es exclusivo de lo analógico. Programas informáticos como Max/MSP, Pure Data o Reaktor se basan en el concepto de síntesis modular.

### Los estándares en los sistemas analógicos

Gracias a unas medidas estandarizadas, unos conectores idénticos y una alimentación eléctrica en común, se pueden conjuntar varios módulos en un mismo dispositivo con facilidad.

Existen dos estándares (o dos formatos) principales: el formato MU de 5 pulgadas, y el formato Eurorack de 3 pulgadas.

#### El formato 5” MU

Es un formato utilizado por pocos fabricantes, pero dentro de ellos uno de los más conocidos y prestigiosos: Moog.

Los módulos de formato MU tienen una altura de 5 U (unidades de rack).  Los módulos se conectan gracias a conectores tipo Jack 6,25 mm.

#### El formato 3” Eurorack

Los módulos de formato Eurorack tienen una altura de 3 U. Los módulos se conectan gracias a conectores tipo Jack de 3,5 mm y el voltaje que emiten suele tener una amplitud de 10 voltios

Es el formato más joven y más utilizado. Debido al tamaño reducido de sus partes mecánicas este formato es más barato.

### La señal digital

- Una señal analógica se convierte en señal digital gracias al muestreo. El teorema del muestreo de Nyquist define la frecuencia máxima muestreable.
    
- La amplitud analógica se convierte en datos binarios durante el proceso de muestreo. La importancia de la resolución en bit.
    
- El concepto de ruido de digitalización y de relación señal/ruido.
    
- El funcionamiento de un conversor analógico-digital que convierte una señal analógica continua en una señal digital discontinua.

### Síntesis por software

Sin embargo, podemos distinguir dos tipos de programas de síntesis sonora:

- Los programas emuladores de síntesis analógica (o sintetizadores digitales conocidos).
    
- Los programas específicos a un proceso informático.

El principio de un software emulador es de imitar el comportamiento de un sintetizador analógico.

Las características del sonido analógico, su calidez y ligera inestabilidad, le dan más vida y carácter que una emulación electrónica. Sin embargo, la informatización aporta la posibilidad de utilizar presets para memorizar los sonidos sintetizados y permite hacer sintetizadores polifónicos.

Los programas específicos a un proceso digital son más raros, están relacionados con tipos de síntesis imposibles en el dominio analógico. Son los sintetizadores utilizando un motor de audio basado en la FFT (cf. tema «Las síntesis aditiva y sustractiva») o en la síntesis granular (cf. tema «La síntesis granular»).

Hoy en día existen software híbridos comerciales uniendo las técnicas analógicas y las específicas del mundo informático. Dentro de los más conocidos y potentes podemos destacar el Omnisphere del editor Spectrasonics y el Falcon del editor UVI.



