---
sidebar_position: 6
---

# Entwicklungsserver

Wie greift man auf den Ghost eShop 3DS Entwicklungsserver zu?

**📙 Zu lesen:**

*Damit alles funktioniert, folgen Sie bitte dieser Anleitung **Schritt für Schritt***.


**Erinnerungen:**
* Es handelt sich hier um Entwicklungsserver, verwenden Sie diese nur, wenn sie für Sie von speziellem Interesse sind oder um als Beta-Tester zu dienen. Kein spezifischer Support bezüglich potenzieller Probleme wird zwangsläufig bereitgestellt, da es sich um die Entwicklungsversion und nicht um die finale Produktionsversion handelt.
* Und schließlich ist das Ghost eShop Team in keiner Weise verantwortlich für Schäden, die Sie möglicherweise an Ihrer Konsole oder an etwas anderem verursachen. Normalerweise werden Sie keine Probleme haben, wenn Sie dieser Anleitung ordnungsgemäß folgen, aber wenn doch, können Sie sich jederzeit an das Ghost eShop Team wenden, indem Sie [unseren Netzwerken](https://social.ghostland.at) beitreten.
**Wenn Sie nicht wissen, was Sie tun, tun Sie es nicht oder lassen Sie jemand anderen es tun.**

___
#### 🏁 1- Voraussetzungen:
Um die Beta-Version von Ghost eShop 3DS zu installieren, benötigen Sie Folgendes:

* Eine modifizierte Konsole mit luma🏴‍☠️. (Siehe [hier](https://3ds.hacks.guide/))
* Und schließlich ein wenig Geduld...

___
#### 2- Konfiguration des Zugangs zum DEV-Server:

* **Erster Schritt:**

    Laden Sie [dieses Archiv](/zip/citra/patch/ge_ctr_dev.zip) herunter und entpacken Sie es.
    Sobald es entpackt ist, gehen Sie in den Ordner, der der Region Ihrer Konsole entspricht:
    - EUR = Europa
    - JPN = Japan
    - KOR = Korea
    - TWN = Taiwan
    - USA = Nordamerika
* **Zweiter Schritt:**

    Kopieren Sie den Ordner `luma` direkt in das Stammverzeichnis Ihrer SD-Karte (falls Sie aufgefordert werden, Dateien zu überschreiben: akzeptieren).
    
    Sie sollten daher die folgenden Dateien auf Ihrer SD-Karte haben:
    
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
* **Dritter Schritt:**
    Sobald dies erledigt ist, setzen Sie Ihre (Micro) SD-Karte wieder in Ihre Konsole ein, starten Sie dann Ihre Konsole und drücken Sie die Taste ``Select`` auf Ihrer Konsole, um auf das Luma-Konfigurationsmenü zuzugreifen.
* **Vierter Schritt:**

    Sobald Sie sich im Luma-Konfigurationsmenü befinden, stellen Sie sicher, dass Sie "Externe FIRMs und Module laden aktivieren" ausgewählt haben, wie im Bild gezeigt, und drücken Sie dann die Taste ``Start``, um die Konfiguration zu speichern und die Konsole neu zu starten.
    <img src="/img/citra/screen/10.png" height="300" />
* **Fünfter Schritt:**

    Sobald die Konsole vollständig hochgefahren ist, öffnen Sie den Nintendo eShop (der erste Zugriff auf den eShop dauert aufgrund der Registrierung der Konsole auf dem Server und in den Datenbanken immer länger).
* **Sechster Schritt:**

    Sobald all dies erledigt ist, sollten Sie auf den eShop zugreifen können.
    <img src="/img/citra/screen/14.png" height="300" />
* **Letzter Schritt:**

    Viel Spaß ☺️​

:::tip Fehlerbehebung
Wenn es nicht funktioniert und Sie im Standard-eShop landen oder einen Fehler erhalten, überprüfen Sie:
- Haben Sie die neueste Version des 3DS-Firmwares und Luma
- Haben Sie keinen Proxy in den Interneteinstellungen der Konsole
- Haben Sie Internet auf der Konsole
:::

---

Jetzt, da Sie Zugriff auf die Ghost eShop 3DS Beta haben, müssen Sie sich keine Sorgen mehr machen, dass Nintendo alle großartigen Spiele auf der Konsole unserer Kindheit löscht.

___

## 📋 Nützliche Informationen

:::warning Entwicklungsversion
Dies ist eine Beta-Demo-Version, die sich noch in der Entwicklung befindet. Viele Funktionen können fehlen, fehlerhaft sein oder unerwartetes Verhalten aufweisen.

Wir sind nicht verantwortlich für Schäden, die Ihre Konsole aufgrund falscher Handhabung erleiden könnte. Bitte verwenden Sie nur, wenn nötig. Wenn Sie eine stabile Version wünschen, warten Sie bitte auf die finale Version.
:::

### Praktische Informationen

- **Prentendo**: Funktioniert möglicherweise derzeit nicht mit diesem Patch
- **Suche testen**: Sie können den Begriff ``test[n]`` in der Suchleiste verwenden, z. B. ``test100``, um 100 Ergebnisse zu erhalten (dies dient zum Testen der Stabilität der Suchfunktion, wenn Sie auf eines der Spiele klicken, wird ein Fehlercode angezeigt)
- **NNID**: Es ist nicht zwingend erforderlich, eine NNID zu haben, um den Shop zu nutzen, die NNID ist nur zum Herunterladen kostenloser Spiele erforderlich

### Technische Details des Servers

- **Tech-Stack**: Der Server wurde in JavaScript mit Hono entwickelt, er läuft mit Bun und PM2
- **Automatische Münzen**: 10 Münzen werden automatisch zu jeder registrierten Konsole hinzugefügt
- **Verfügbare Spiele**: Derzeit ist nur 1 Spiel herunterladbar ()

---

## 🔧 Technische Details (Zusätzliche Informationen)

:::info Informationen für Entwickler
Dieser Abschnitt enthält technische Details über die interne Funktionsweise des Servers. Diese Informationen sind nicht erforderlich, um den Entwicklungsserver zu verwenden.
:::

### Service-Architektur

Der Nintendo eShop arbeitet hauptsächlich mit 5 Diensten:

1. **IAS - Identity Authentication Service**
   - Route: `/ias/services/IdentityAuthenticationSOAP`
   - Verwaltet die Authentifizierung und Registrierung von 3DS-Konsolen

2. **ECS - E-Commerce Service**
   - Route: `/ecs/services/ECommerceSOAP`
   - Verwaltet Transaktionen, Tickets (eTickets), Kontostand und Kontoinformationen

3. **CAS - Cataloging Service**
   - Route: `/cas/services/CatalogingSOAP`
   - Stellt Listen der im Katalog verfügbaren Titel und Artikel bereit

4. **CDN - Content Delivery Network**
   - Routen: 
     - `/ccs/download/<tid>/tmd.<version>`
     - `/ccs/download/<tid>/<app>`
   - Verteilt Inhaltsdateien (TMD- und .app-Dateien)

5. **Asset CDN**
   - Route: `/assets/<path:filename>`
   - Stellt statische Dateien bereit (Bilder, Videos, etc.)

### Verbindungsfluss

**Erste Registrierung:**
```
1. Konsole → GetChallenge → Server
2. Konsole ← Challenge ← Server
3. Konsole → Register (mit Challenge) → Server
4. Konsole ← AccountId + DeviceToken ← Server
```

**Informationsabruf:**
```
1. Konsole → GetChallenge → Server
2. Konsole ← Challenge ← Server
3. Konsole → GetRegistrationInfo (mit Challenge) → Server
4. Konsole ← AccountId + DeviceToken ← Server
```

**Abmeldung:**
```
1. Konsole → Unregister (mit AccountId) → Server
2. Konsole ← Bestätigung ← Server
3. Server: Löschung aller Konsolendaten
```

### Datenbankstruktur

Über IAS in der Datenbank gespeicherte Informationen:

- `consoleid`: DeviceId
- `devicetoken`: Authentifizierungstoken
- `uniquekey`: Eindeutiger Schlüssel
- `country`, `region`, `language`: Standort
- `balance`: Kontostand
- `is_terminated`: Kontostatus

:::tip Vollständige Dokumentation
Eine vollständige Dokumentation zur Funktionsweise des Nintendo eShop wird später veröffentlicht.
:::

