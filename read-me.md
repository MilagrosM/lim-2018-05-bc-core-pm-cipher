# Criptonia

Criptonia es una aplicación de cifrado y descifrado de mensajes que emplea un tipo de cifrado por sustitución conocido como Código Cesar. Ha sido creada para un grupo de amigos que celebrará una fiesta sorpresa para una de sus amigas, ellos desean comunicarse de manera secreta de tal forma que la cumpleañera no logre sospechar nada.  

¿Quienes son los principales usuarios del producto?

Los usuarios son un grupo de amigos que están por celebrar una fiesta sorpresa para una amiga.

¿Cuáles son los objetivos de estos usuarios en relación con el producto?

Tener un producto que les permita codificar y decodificar  sus mensajes de manera fácil y rápida.

¿Cómo crees que el producto que estás creando les está resolviendo sus problemas?

La aplicación web desarrollada es una herramienta accesible que ofrece una interfaz de uso intuitivo que les permite cifrar un mensaje a enviar y descifrar un mensaje recibido a través de una clave, con lo cual ellos podrían mantener sus comunicaciones de manera secreta.
## Flujograma Criptonia
--------------------------
La idea de Criptonia partió con el siguiente diagrama de flujo: 

![flujograma_criptonia](https://user-images.githubusercontent.com/39382009/40922237-55533d14-67d7-11e8-929f-6bd7353009b2.png)

A partir de ello se construyó la primera versión de interfaz.

![version1-1](https://user-images.githubusercontent.com/39382009/40922604-43688040-67d8-11e8-8bc4-de773f88f14e.png)

Donde:
-	Se realizó una breve descripción de lo qué es el cifrado Cesar.
-	Se empleó dos inputs tipo texto, uno para el ingreso del mensaje a cifrar y otro para el mensaje a descifrar, así como dos inputs tipo number, uno para el ingreso del offset de cifrado y otro para el offset de descifrado.
-	Los resultados se imprimieron directamente en el documento.
-	La funcionalidad del producto se encontraba incompleta debido a que aún no había desarrollado el algoritmo que permita ingresar texto con espacios, además que el algoritmo de descifrado presentaba errores con respecto a las ultimas letras del abecedarios, las cuales no era bien decodificadas.
Por medio de la retroalimentación se recibió las siguientes observaciones:
-	Tener dos ingresos de offset resulta un poco confuso por lo cual sería adecuado utilizar un solo input tanto para cifrar como para descifrar.
-	La descripción de lo qué es Cifrado Cesar, no tiene mucha relevancia por lo cual debería ser ubicado en otra sección.
Segunda versión de interfaz
![version2-1](https://user-images.githubusercontent.com/39382009/40922748-954129d0-67d8-11e8-9255-63375f02905c.png)
Donde:
-	Se cambió la descripción de Cifrado Cesar por una breve explicación de la finalidad de le aplicación.
-	Se utilizaron tres cajas, la primera para recibir el texto/mensaje del usuario y las otras dos mostraran el resultado del cifrado y descifrado. Y se empleó un solo input para el offset.
-	Se completó el algoritmo y ya no se presentaron errores en la decodificación
-	Se mejoró la interfaz entorno a CSS.

Instrucciones de acceso
Se puede descargar la aplicación a través de GH y verlo online en GH pages.
