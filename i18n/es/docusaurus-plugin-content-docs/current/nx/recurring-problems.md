---
sidebar_position: 3
---

# Problemas Comunes

Problemas y cómo solucionarlos

### 🚫 **Error**: *Unknown Frame descriptor*
ℹ️ **Razón**: Tinfoil corrupto  
✅ **Solución**: Elimina el Forwarder en la pantalla principal, elimina la carpeta **SD:/switch/tinfoil**, limpia archivos huérfanos a través de **DBI -> TOOLS** y reinstala Tinfoil

---

### 🚫 **Error**: *El ícono del juego está en blanco con un círculo giratorio*
ℹ️ **Razón**: Firmware incorrecto  
✅ **Solución**: Actualiza al firmware requerido

---

### 🚫 **Error**: *El juego de la Retro Shop no inicia*
ℹ️ **Razón 1**: Firmware incorrecto, los Forwarders no son compatibles con el firmware más reciente.  
ℹ️ **Razón 2**: No tienes Retroarch instalado  
ℹ️ **Razón 3**: Falta el Core de Retroarch  
✅ **Solución 1**: Retrocede una versión solo si usas emuMMC.
O importa la ROM directamente en la SD a Retroarch.  
✅ **Solución 2**: Instala Retroarch desde el Homebrew Store.  
✅ **Solución 3**: Por favor descarga el Core necesario dentro de Retroarch.

---

### 🚫 **Error**: *Tinfoil muestra Network Error 28*
ℹ️ **Razón 1**: WiFi no está activado  
ℹ️ **Razón 2**: Configuración de fuente incorrecta  
ℹ️ **Razón 3**: La tienda está caída  
ℹ️ **Razón 4**: Conexión lenta desde la tienda o tu lado  
✅ **Solución 1**: Activa WiFi  
✅ **Solución 2**: Verifica todas las credenciales necesarias dos veces  
✅ **Solución 3**: Espera hasta que esté arriba nuevamente  
✅ **Solución 4**: Inténtalo más tarde

---

### 🚫 **Error**: *Tinfoil Network Error 7*
ℹ️ **Razón**: Tu ISP nos bloquea
✅ **Solución**: Usa VPN para tu módem

---

### 🚫 **Error**: *No puedo ordenar por fecha de lanzamiento en Tinfoil*
ℹ️ **Razón**: Base de datos mala de Tinfoil  
✅ **Solución**: Elimina toda la carpeta DB de Tinfoil y reinicia Tinfoil  
ℹ️ **Nota**: Tenemos nuestra propia base de datos llamada "**NX Custom DB**" (**Solo al agregar Free Shop**)  

> ***Info***: Agrega los siguientes detalles a una nueva Fuente

- **Protocol**: *https*
- **Host**: *nx-meta.nlib.cc*
- **Path**: */*
- **Title**: *NX Custom DB*

---

### 🚫 **Error**: *No puedo encontrar un juego*
ℹ️ **Razón**: Posiblemente tu pobre conocimiento  
✅ **Solución**: Resalta "**New Games**" o "**XCI**" y presiona el botón "**+**", escribe solo una palabra en lugar del título completo.

_**Ejemplo**_: **Mario** | *Zelda* | *Pokemon*

---

### 🚫 **Error**: *No puedo encontrar un juego por nombre*
ℹ️ **Razón**: El juego tiene un título asiático  
✅ **Solución**: Ve a **New Games/XCI** y presiona "**-**" para buscar el ícono

---

### 🚫 **Error**: *Código no firmado/Firma*
ℹ️ **Razón**: Algunos dumps tienen etiquetas personalizadas, pero nuestra tienda es segura  
✅ **Solución**: Ve a la configuración de Tinfoil y activa "**Unsigned Signature**"

> ![konami code](/img/nx/konami.jpg)

---

### 🚫 **Error**: **[Retro Roms]** "*No se puede iniciar el software*"
ℹ️ **Razón**: Tienes firmware incorrecto  
✅ **Solución**: Instala el firmware necesario

---

### 🚫 **Error**: *ISP está bloqueando la tienda*
ℹ️ **Razón**: Porque  
✅ **Solución**: Cambia tu DNS en tu Switch a:  

- **Primario**: *1.1.1.1*  
- **Secundario**: *1.0.0.1*  

***O usa VPN***

---

### 🚫 **Error**: *Tinfoil Network Error 6*
ℹ️ **Razón 1**: Configuración de tienda incorrecta/WiFi apagado/Configuración de WiFi incorrecta/DNS incorrecto  
ℹ️ **Razón 2**: Elegiste la contraseña del Dashboard para la Fuente  
✅ **Solución 1**: Compara tu configuración de tienda con la nuestra/Enciende WiFi/¿Tal vez nuevo módem?/Configura DNS en Auto  
✅ **Solución 2**: Inicia sesión en **[Pro Dashboard](https://pro.nlib.cc)** y crea contraseña de Tinfoil.

---

### 🚫 Error: Network Error 35 (SSL Handshake)
ℹ️ **Razón**: El reloj del sistema está desincronizado  
✅ **Solución**: Instala el Homebrew "**DBI**" y usa "**Tools**" para resincronizar NTP

---

### 🚫 **Error**: *Datos corruptos*
ℹ️ **Razón**: Tu SD tiene sectores dañados o Tinfoil está corrupto  
✅ **Solución**: Elimina completamente Tinfoil y reinstala TInfoil (**App en pantalla principal y carpeta en SD:/switch/**) | Verifica la tarjeta SD en Hekate con "**Console Info**" -> "**microSD**" -> en la parte inferior en la esquina derecha

---

### 🚫 **Error**: *Tinfoil no inicia en Firmware v21+*
ℹ️ **Razón**: A partir del firmware v21, algunas aplicaciones homebrew como Tinfoil pueden no iniciar debido a cambios en el sistema que requieren actualizar el archivo package3.  

> ⚠️ **Advertencia importante**: Esta solución **no es recomendada** y solo está listada aquí para usuarios que absolutamente necesitan acceder a Tinfoil en firmware v21+. Manipular el ABI en package3 **no es aconsejable** y puede causar inestabilidad u otros problemas.  
> **El mejor enfoque es permanecer en firmware v20** y esperar a que Tinfoil sea actualizado y recompilado, o a que otras soluciones homebrew estén disponibles pronto.

✅ **Solución** (Úsalo bajo tu propio riesgo):  
**Importante**: Primero debes actualizar Atmosphere, luego reemplazar package3. Reemplazar package3 sin actualizar Atmosphere primero no funcionará.  
1. **Actualizar Atmosphere**: Asegúrate de tener **Atmosphere 1.10.0 o superior** instalado para compatibilidad con el firmware v21+. Actualiza tu Custom Firmware (CFW) a la última versión que soporte tu firmware.  
2. **Reemplazar package3**: Después de actualizar Atmosphere, reemplaza el archivo package3.  
   - Descarga el archivo package3: **[package3](pathname:///bin/package3)**  
   - Coloca el archivo `package3` en la carpeta **`sdmc:/atmosphere/`** (reemplaza el existente si está presente).  
3. Reinicia tu Switch.  
- Siempre verifica la compatibilidad del CFW antes de actualizar el firmware de tu Switch.  
- Si encuentras problemas persistentes, asegúrate de tener el archivo package3 correcto para tu versión de firmware. 