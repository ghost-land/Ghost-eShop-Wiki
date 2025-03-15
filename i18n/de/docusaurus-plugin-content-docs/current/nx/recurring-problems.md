---
sidebar_position: 3
---

# Bekannte Probleme
Du hast Probleme mit einem Ghost eShop NX Service? Finde deine Antworten hier!

---

## Tinfoil

### ❌ Fehler: Tinfoil Network Error 6
ℹ️ **Grund:** Tippfehler in der Konfiguration oder WLAN VerbindungsproblemeTypo in configuration or Wi-Fi connection issue.  
✅ **Lösung:**  
- Überprüfe und korrigiere die Quellenkonfiguration.  
- Prüfe deine WLAN Verbindung.

---

### ❌ Fehler: Tinfoil Network Error 7
ℹ️ **Grund:** Dein Internetanbieter (ISP) hat unseren Service gesperrt.  
✅ **Lösung:** Ändere deine DNS Einstellung deiner Nintendo Switch Konsole:  
- Primäre DNS: `1.1.1.1`  
- Sekundäre DNS: `1.0.0.1`

ℹ️ Wenn es dennoch nicht funktioniert, wirst du evtl. einen VPN Zugang für deinen Router einrichten müssen.

---

### ❌ Fehler: Tinfoil Network Error 28
ℹ️ **Grund:** Langsame Verbindung zwischen unserem Shop und deinem Netzwerk.  
✅ **Lösung:** Versuche es später noch einmal.

---

### ❌ Fehler: Unknown Frame descriptor
ℹ️ **Grund:** Dein Tinfoil ist beschädigt.  
✅ **Lösung:**  
1. Lösche die Tinfoil Verknüpfung auf deinem Hauptbildschirm.  
2. Lösche folgenden Ordner `SD:/switch/tinfoil`.  
3. Räume ungenutzte Dateien mittels **DBI** -> **TOOLS** -> **Cleanup orphaned files** auf.  
4. Installiere Tinfoil erneut.

---

### ❌ Fehler: Ghost eShop taucht nicht in Tinfoil auf / Tinfoil zeigt Network Error 28

ℹ️ **Mögliche Ursachen:**  
1. WLAN ist nicht aktiviert oder konfiguriert.  
2. Falsche Tinfoil Quellen Einstellung.  
3. Der Shop is temporär Offline (Prüfe es hier [here](https://status.ghostland.at/) folgende Services müssen aktiv sein: **NX - Main Network**, **NX - PUBLIC Shop**, **NX - Splitted Content**, **NX - Tinfoil Index PUBLIC Shop**).  

✅ **Lösung:**  
- **Aktiviere WLAN:** Prüfe deine Netwerkverbindung.  
- **Korrigiere Quellen:** Überprüfe erneut die Tinfoil Einstellungen der Quellen.  
- **Prüfe den Shop Status:** Besuche die Status Seite und warte wenn ein Service Offline gegangen ist.

---

### ❌ Fehler: Sortierung nach Erscheinungsdatum in Tinfoil nicht möglich

ℹ️ **Grund:** Die Tinfoil Datenbank is beschädigt or nicht korrekt.  
✅ **Lösung:** Lösche alle Dateien mit der Endung `.json` im `DB` Ordner von Tinfil, starte Tinfoil neu damit eine frische Datenbank heruntergeladen wird.

---

### ❌ Fehler: "New Games" / "XCI" Menüpunkt erscheint nicht
ℹ️ **Grund:** Falsche Shop Konfiguration / WLAN ist Aus / DNS Konfiguationsprobleme  
✅ **Lösung:**  
- Vergleiche deine Shop Einstellung mit einer korrekten (Details verfügbar [here](https://nx.ghostland.at)).  
- Schalte dein WLAN ein.  
- Tausche dein Router aus, falls nötig.  
- Stelle DNS auf Automatic um.

---

### ❌ Fehler: Ich finde kein Spiel
ℹ️ **Grund:** Falscher Suchbegriff oder das Spiel hat asiatische Buchstaben im Titel.  
✅ **Lösung:**  
- Gehe zu "New games" oder "XCI", drücke den "+" Knopf und suche mittels eines einfach Schlüsselwortes, anstatt den kompletten Titel des Spiels einzugeben.  
- Wenn das Spiel einen Titel mit asiatischen Buchstaben hat, markiere "New Games" oder "XCI" und drücke den "-" (Minus) Knopf um mittels Bildern nach dem Spiel zu suchen.

---

### ❌ Fehler: Unsigned Code / Invalid Signature
ℹ️ **Grund:** Manche Kopien haben eigene Signaturen enthalten, was aber kein Problem für die Sicherheit des Shops oder für dich darstellt.  
✅ **Lösung:** Aktiviere die **Unsigned Signature** Option in den Tinfoil Einstellungen.  
(Du wirst diesen Konami Code benötigen, um diese Option einzuschalten)
> ![konami code](/img/nx/konami.jpg)

---

### ❌ Fehler: Der "Recommended" Menüpunkt wird nicht angezeigt

ℹ️ **Mögliche Ursachen:**  
1. **Die Tinfoil Webseite ist offline ([tinfoil.io](https://tinfoil.io))**  
2. **Dein Provider hat die Tinfoil Webseite gesperrt.**

✅ **Lösungen:**  
- **Lösung 1:** Warte bis die Seite wieder online geht.  
- **Lösung 2:** Sollte die Webseite gesperrt worden sein, bitte ändere deine DNS Einstellungen mit folgenden Werten:  
  - **Primäre DNS:** `1.1.1.1`  
  - **Sekundäre DNS:** `1.0.0.1`  
  Oder nutze einen VPN Zugang.

---

## Nintendo Switch Betriebssystem (HOS = Horizon OS)

### ❌ Fehler: Spielsymbol ist nicht zusehen und ein sich drehender Ring dreht sich.

ℹ️ **Grund:** Die Konsolen Firmware ist nicht kompatibel.  
✅ **Lösung:** Update deine Konsole auf die benötigte Firmware **Stelle sicher, dass die aktuellste Firmware kompatibel ist mit deiner CFW (Atmosphere)** bevor du weiter vorgehst, um Probleme zu vermeiden.

---

### ❌ Fehler: Kann Spiele vom Retro Shop nicht starten

ℹ️ **Möglioche Ursachen:**  
1. **Inkompatible Firmware:** Forwarders funktionieren evtl. nicht mit neueren Firmware Versionen. **Momentan sind sie getestet mit der Firmware 19.0.1 und CFW Atmosphere 1.8.0.**  
2. **RetroArch ist nicht installiert.**  
3. **RetroArch Core fehlt.**

✅ **Lösungen:**  
- **Lösung 1:**  
  - Wenn du einen emuNAND nutzt, downgrade um eine Version runter.  
  - Alternativ, importiere die ROM direkt auf die SD Karte um sie über RetroArch zu starten.  
- **Lösung 2:** Installiere RetroArch mittels Homebrew Shop. (Jedoch könnten da eine Cores drin sein, die evtl. gar nicht möchtest)  
- **Lösung 3:** Lade die gewünschten Core direkt über RetroArch herunter.

---

### ❌ Fehler: Dein Internet Provider (ISP) hat unseren Shop für dich gesperrt
ℹ️ **Grund:** Dein Internet Provider hat unseren Shop gesperrt.  
✅ **Lösung:** Ändere die DNS Einstellungen deiner Switch auf folgende Werte ab:  
- Primäre DNS: `1.1.1.1`  
- Sekundäre DNS: `1.0.0.1`
