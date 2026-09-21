# Cognizant Learning Lab

Sitio estático: HTML, CSS y JavaScript, sin instalación de dependencias.
Abre index.html para consultar el diseño. Para publicar en GitHub Pages, coloca
index.html, styles.css, script.js y assets en la carpeta que publiques.

## Formulario de contacto

El formulario envía por POST a FormSubmit, un servicio externo de recepción de
formularios. No abre la aplicación de correo del visitante ni requiere claves
secretas en JavaScript. El destinatario es tatianaguerrero021002@gmail.com.

Campos enviados: nombre, teléfono, correo electrónico, programa y mensaje.
El asunto es “Cognizant · Nueva consulta de programas” y el correo se presenta
en una tabla. El campo email permite responder directamente al visitante.

### Activación necesaria una sola vez

1. Abre el sitio publicado o servido por HTTP/HTTPS (no desde file://).
2. Completa y envía una consulta de prueba; completa la verificación antispam.
3. Abre el mensaje de activación de FormSubmit en el correo de Tatiana
   (revisa también spam) y confirma el destino.
4. Vuelve a enviar una consulta de prueba y comprueba que lleguen los cinco
   campos y que “Responder” utilice el correo del remitente.

La integración está implementada, pero la recepción en el buzón no está
verificada. La confirmación del propietario no puede sustituirse con código.
El formulario navega a FormSubmit para procesar el envío y mostrar el resultado.
Se conserva su protección antispam predeterminada. Si falla el servicio o la
conexión, se puede volver a la página y usar WhatsApp o el enlace de correo.

Referencia: https://formsubmit.co/ y https://formsubmit.co/documentation

## Edición

- Contenido, contactos y destinatario del formulario: index.html.
- Colores y ajustes de presentación: styles.css. Los últimos bloques contienen
  los ajustes de accesibilidad y de móvil/tablet.
- Menú, animaciones y selección del programa desde las tarjetas: script.js.
- Logo en uso: assets/cognizant-logo.png (transparente, 447 × 559 px).
  Su marco 3:1 oculta los márgenes vacíos mediante object-fit y object-position,
  sin alterar el archivo ni sus proporciones. En el pie, una capa CSS muestra
  únicamente el subtítulo en blanco sobre el fondo oscuro, sin recuadro.

La cuenta de Instagram sigue siendo un ejemplo pendiente de confirmar.
