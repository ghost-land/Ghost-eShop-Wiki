---
sidebar_position: 1
---

# Instalación Inicial  
Guía para instalar Ghost eShop en Switch  

---  

## ⚠️ Prerrequisitos  

> **Importante:** Ghost eShop PUBLIC requiere al menos la versión **18.0 de Tinfoil**. Las versiones anteriores no pueden acceder a la tienda y mostrarán un mensaje pidiéndote actualizar Tinfoil.

---  

Esta guía explica cómo instalar y configurar **Tinfoil** para acceder a Ghost eShop en tu Nintendo Switch.  


## 📥 **Paso 1**: *Descargar e Instalar Tinfoil*  

1. Ve al sitio web oficial: **[https://tinfoil.io/Download#download](https://tinfoil.io/Download#download)** y descarga el archivo deseado.  
2. Elige una de las siguientes opciones:  
   - **Self Installer**: Incluye archivos **.nsp** y **.nro**.  
   - Se recomienda usar el archivo **.nro** para minimizar el riesgo de ser baneado por **Nintendo**.  
3. Si Tinfoil no funciona después de la instalación:  
   - Apaga completamente tu Switch (**no en modo suspensión**).  
   - Retira la tarjeta SD y conéctala a tu computadora.  
   - Extrae el archivo Tinfoil y copia la carpeta **/switch** directamente a la raíz de tu tarjeta SD (**SD:/**).  
   - Si te pide fusionar carpetas, acepta.  
4. Desconecta la tarjeta SD de tu computadora, vuelve a insertarla en tu Switch y enciende la consola normalmente.  
5. Para usar el archivo **.nro**:  
   - Lanza cualquier juego manteniendo presionado el botón **R** antes de iniciar.  
   - Esto entrará en **modo RAM**, donde Tinfoil puede ser lanzado.  


## ⚙️ **Paso 2**: *Configurar Tinfoil*  

1. Lanza el archivo **Tinfoil.nro** desde el **Homebrew Menu**.  
2. Ve a la opción **File Browser**.  
3. Presiona el botón **-** (**Menos**) para agregar una nueva fuente.  
4. Configura la fuente con los siguientes detalles:  

- **Protocol**: *https* [**Asegúrate de seleccionar "https" y no "http"**]  
- **Host**: *nx.ghostland.at*  
- **Path**: */*  
- **Username**: [**déjalo en blanco**]  
- **Password**: [**déjalo en blanco**]  
- **Title**: *Ghost eShop Free*  

5. Una vez configurado, guarda y reinicia Tinfoil.  
6. Los juegos aparecerán en la pestaña **"New Games"**, los DLCs en la pestaña **"New DLCs"**, etc.  


## 📊 *Detalles Técnicos*  

### ⚡ *Funcionalidad*:  
- Los archivos se dividen (**split**) en múltiples fragmentos de tamaños aleatorios que van desde **100 MiB a 450 MiB**.  
- Cada fragmento se distribuye en diferentes servidores para mejorar la distribución y redundancia.  
- Tinfoil recupera todos los fragmentos necesarios y los ensambla para recrear el archivo completo.  


### 🔒 *Seguridad*:  
El acceso a Ghost eShop está asegurado a través de múltiples capas de protección:  
1. **Clave de firma del host:** Se usa una clave única para asegurar las conexiones a la tienda.  
2. **Verificaciones del lado del usuario (uauth):** Estas verificaciones aseguran que el usuario esté autorizado para acceder al contenido.  
3. **Validación del dispositivo:** Se realiza una verificación para asegurar que sea realmente una Nintendo Switch intentando conectarse a la tienda.  


#### *Seguridad de Descarga*:  
- **Verificación de fragmentos:**  
  - Cada fragmento está protegido por verificaciones específicas de **hauth** y **uauth**, con claves únicas para cada fragmento.  
- **Fragmento final:**  
  - Al solicitar acceso al fragmento final de un archivo, se recopila información adicional, como:  
    - **UID (Huella del Usuario)**  
    - **Idioma del Usuario**  

> ℹ️ **Nota:** Existen medidas de seguridad adicionales pero no se detallan aquí para preservar la integridad y seguridad de la tienda.  


### 📈 Estadísticas:  
Los datos de descarga se almacenan temporalmente para generar estadísticas:  
- Los datos completos se mantienen durante **24 horas**.  
- Después de este período, los datos se **anonymizan** y se retienen únicamente con fines estadísticos.  
- Estas estadísticas son accesibles públicamente aquí: [http://stats.ghostland.at/](http://stats.ghostland.at/).  


#### Proceso de Actualización:  
- El sitio web de estadísticas se actualiza cada **24 horas** a través de un proceso **PM2**.  
- Las estadísticas se almacenan como archivos JSON, identificados por el **TID** del contenido.  


#### Ejemplo de estadísticas anonymizadas:  

```json
{
    "total_downloads": 10,
    "per_date": {
        "2024-10-01": 1,
        "2024-10-05": 2,
        "2024-10-10": 1,
        "2024-10-25": 1,
        "2024-11-01": 1,
        "2024-11-02": 1,
        "2024-11-04": 3
    },
    "tid_downloads": {
        "0100A3B020306000": 10
    }
}
```

Este sistema asegura transparencia de datos mientras respeta la privacidad del usuario.


## 🎉 *Resumen*  

Después de seguir estos pasos, Ghost eShop está listo para ser usado a través de Tinfoil. Si encuentras algún problema o quieres aprender más, consulta otras secciones del wiki.  

**¡Disfruta usando Ghost eShop!** 🎮 