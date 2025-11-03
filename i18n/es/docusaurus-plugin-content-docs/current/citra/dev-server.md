---
sidebar_position: 6
---

# Servidor de desarrollo

¿Cómo acceder al servidor de desarrollo Ghost eShop 3DS?

**📙 Leer:**

*Para que todo funcione correctamente, siga esta guía **paso a paso***.


**Recordatorios:**
* Se trata de servidores de desarrollo, úselos solo si tienen un interés específico para usted o para servir como beta tester. No se proporcionará necesariamente soporte específico con respecto a posibles problemas, ya que esta es la versión de desarrollo y no la producción final.
* Y finalmente, el equipo de Ghost eShop no es de ninguna manera responsable por los daños que pueda causar a su consola o a cualquier otra cosa. Normalmente, si sigue esta guía correctamente, no tendrá ningún problema, pero si lo hace, siempre puede contactar al equipo de Ghost eShop uniéndose a [nuestras redes](https://social.ghostland.at).
**Si no sabe lo que está haciendo, no lo haga o deje que alguien más lo haga.**

___
#### 🏁 1- Requisitos previos:
Para instalar la versión beta de Ghost eShop 3DS, necesitará lo siguiente:

* Una consola modificada con luma🏴‍☠️. (Ver [aquí](https://3ds.hacks.guide/))
* Y finalmente, un poco de paciencia...

___
#### 2- Configuración del acceso al servidor DEV:

* **Primer paso:**

    Descargue y descomprima [este archivo](/zip/citra/patch/ge_ctr_dev.zip).
    Una vez descomprimido, vaya a la carpeta correspondiente a la región de su consola:
    - EUR = Europa
    - JPN = Japón
    - KOR = Corea
    - TWN = Taiwán
    - USA = América del Norte
* **Segundo paso:**

    Copie y pegue la carpeta `luma` directamente en la raíz de su tarjeta SD (si le pide sobrescribir archivos: aceptar).
    
    Por lo tanto, debería tener los siguientes archivos en su tarjeta SD:
    
    ```
    luma/
    ├── sysmodules/
    │   ├── 0004013000002C02.ips
    │   └── 0004013000002F02.ips
    └── titles/
        ├── 000400300000D602/
        │   └── code.ips
        └── 0004001000022900/
            └── code.ips
    ```
* **Tercer paso:**
    Una vez hecho esto, vuelva a colocar su tarjeta SD (micro) en su consola, luego inicie su consola y presione el botón ``Select`` en su consola para acceder al menú de configuración de Luma.
* **Cuarto paso:**

    Una vez en el menú de configuración de Luma, asegúrese de haber seleccionado "Activar la carga de FIRMs y módulos externos" como se muestra en la imagen, luego presione el botón ``Start`` para guardar la configuración y reiniciar la consola.
    <img src="/img/citra/screen/10.png" height="300" />
* **Quinto paso:**

    Una vez que la consola esté completamente encendida, abra el Nintendo eShop (el primer acceso al eShop siempre es más largo debido al registro de la consola en el servidor y en las bases de datos).
* **Sexto paso:**

    Una vez hecho todo esto, debería poder acceder al eShop.
    <img src="/img/citra/screen/14.png" height="300" />
* **Último paso:**

    Disfrútelo ☺️​

:::tip Solución de problemas
Si no funciona y termina en el eShop base o si obtiene un error, verifique:
- Tener la última versión del firmware 3DS y Luma
- No tener un proxy en la configuración de internet de la consola
- Tener internet en la consola
:::

---

Ahora que tiene acceso a la beta de Ghost eShop 3DS, ya no debería preocuparse de que Nintendo borre todos los excelentes juegos de la consola de nuestra infancia.

___

## 📋 Información útil

:::warning Versión de desarrollo
Esta es una versión beta de demostración, aún en desarrollo. Muchas funciones pueden estar faltando, tener errores o tener comportamientos inesperados.

No somos responsables por los daños que su consola pueda sufrir como resultado de un manejo inadecuado. Por favor, úselo solo si es necesario. Si desea una versión estable, por favor espere la versión final.
:::

### Información práctica

- **Prentendo**: Puede no ser funcional con este parche por el momento
- **Prueba de búsqueda**: Puede usar el término ``test[n]`` en la barra de búsqueda, como por ejemplo ``test100`` para obtener 100 resultados (esto sirve para probar la estabilidad de la función de búsqueda, si hace clic en uno de los juegos mostrará un código de error)
- **NNID**: No es obligatorio tener un NNID para usar la Tienda, el NNID es obligatorio solo para descargar juegos gratuitos
- **Tarjeta eShop de prueba**: Para propósitos de prueba, una tarjeta eShop que agrega 2 créditos a su saldo es funcional con uso ilimitado: ``MMMMMMMMMMMMMMMM`` (16 veces la letra M)

### Detalles técnicos del servidor

- **Stack técnico**: El servidor fue desarrollado en JavaScript con Hono, funciona con Bun y PM2
- **Monedas automáticas**: 10 monedas se agregan automáticamente a cada consola registrada
- **Juegos disponibles**: Actualmente, solo 1 juego es descargable: **Mutant Mudds Super Challenge**
- **Descarga en modo suspensión**: La descarga en modo suspensión de la consola funciona perfectamente

---

## 🔧 Detalles técnicos (Información adicional)

:::info Información para desarrolladores
Esta sección contiene detalles técnicos sobre el funcionamiento interno del servidor. Esta información no es necesaria para usar el servidor de desarrollo.
:::

### Arquitectura de servicios

El Nintendo eShop funciona principalmente con 5 servicios:

1. **IAS - Identity Authentication Service**
   - Ruta: `/ias/services/IdentityAuthenticationSOAP`
   - Gestiona la autenticación y el registro de consolas 3DS

2. **ECS - E-Commerce Service**
   - Ruta: `/ecs/services/ECommerceSOAP`
   - Gestiona transacciones, tickets (eTickets), saldo de cuenta e información de cuenta

3. **CAS - Cataloging Service**
   - Ruta: `/cas/services/CatalogingSOAP`
   - Proporciona listas de títulos y elementos disponibles en el catálogo

4. **CDN - Content Delivery Network**
   - Rutas: 
     - `/ccs/download/<tid>/tmd.<version>`
     - `/ccs/download/<tid>/<app>`
   - Distribuye archivos de contenido (archivos TMD y .app)

5. **Asset CDN**
   - Ruta: `/assets/<path:filename>`
   - Sirve archivos estáticos (imágenes, videos, etc.)

### Flujo de conexión

**Primer registro:**
```
1. Consola → GetChallenge → Servidor
2. Consola ← Challenge ← Servidor
3. Consola → Register (con Challenge) → Servidor
4. Consola ← AccountId + DeviceToken ← Servidor
```

**Recuperación de información:**
```
1. Consola → GetChallenge → Servidor
2. Consola ← Challenge ← Servidor
3. Consola → GetRegistrationInfo (con Challenge) → Servidor
4. Consola ← AccountId + DeviceToken ← Servidor
```

**Cancelación de registro:**
```
1. Consola → Unregister (con AccountId) → Servidor
2. Consola ← Confirmación ← Servidor
3. Servidor: Eliminación de todos los datos de la consola
```

### Estructura de la base de datos

Información almacenada a través de IAS en la base de datos:

- **`consoleid` (DeviceId)**: Se utiliza para identificar de forma única una consola 3DS y para crear/vincular una cuenta en el servidor. Permite, por ejemplo, acceder al historial de compras y a los títulos adquiridos.
- **`devicetoken` (token)**: Se utiliza para la autenticación de solicitudes. Es un token único generado aleatoriamente (21 caracteres) por consola, necesario para las llamadas ECS/IAS.
- **`uniquekey` (key)**: Actualmente no se utiliza, pero más adelante se utilizará para vincular una consola a una cuenta de Ghost eShop en futuras actualizaciones. Esta clave no proviene de Nintendo; la generamos nosotros mismos.
- **`country`, `region`, `language`**: Se utilizan para gestionar la región del catálogo, los precios y los idiomas, así como para personalizar los resultados que se le envían.
- **`balance`**: Saldo utilizable, deducido durante las compras y acreditado con códigos promocionales.
- **`is_terminated`**: Estado de la cuenta (activa/prohibida).

### Formato de los juegos

:::info Formato CDN
Los juegos del eShop **no** están en formatos CIA, 3DSX o 3DS. El eShop utiliza el **formato CDN**.
:::

Cada juego está constituido en el CDN de:

- **Uno o varios archivos `.app`**: Contienen el contenido del juego, el manual, el juego en sí, etc.
- **Un archivo `TMD` (Title Metadata)**: Contiene los metadatos del título
- **Un ticket**: Creado por el servidor y necesario para la instalación

:::warning Estado actual
Actualmente, la creación de tickets funciona perfectamente. Sin embargo, la instalación de juegos y los juegos pueden no funcionar con el único juego disponible, ya que estamos trabajando en nuestro sistema que permite convertir juegos CIA al formato CDN.
:::

:::tip Documentación completa
Se publicará más adelante una documentación completa sobre el funcionamiento del Nintendo eShop.
:::

