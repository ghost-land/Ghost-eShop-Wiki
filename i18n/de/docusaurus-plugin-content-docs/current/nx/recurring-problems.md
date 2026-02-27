---
sidebar_position: 3
---

# Bekannte Probleme
Schwierigkeiten und wie du sie löst

---

### 🚫 Fehler: Unknown Frame descriptor
ℹ️ **Grund**: Beschädigtes Tinfoil  
✅ **Lösung**: Lösche den Forwarder auf dem Hauptbildschirm, lösche den Ordner aus diesem Verzeichnis: **SD:/switch/tinfoil**, verwende "Cleanup Orphaned Files" mit **DBI -> TOOLS** und installiere Tinfoil neu.

---

### 🚫 Fehler: Game Icon ist leer und ein sich bewegender Kreis ist darin zu sehen
ℹ️ **Grund**: Falsche Firmware  
✅ **Lösung**: Update zu der benötigten Firmware

---

### 🚫 Fehler: Retro Shop Spiele starten nicht
ℹ️ **Grund 1**: Falsche Firmware, die Forwarder sind nicht kompatibel zu aktuellsten Firmware.  
ℹ️ **Grund 2**: Du hast RetroArch nicht installiert  
ℹ️ **Grund 3**: Fehlende RetroArch Cores  
✅ **Lösung 1**: Downgrade zu einer vorherigen Firmware, mache dies nur wenn du emuMMC/NAND benutzt.
Oder importiere die Rom manuell in deine RetroArch Bibliothek.  
✅ **Lösung 2**: Installieren RetroArch vom Homebrew Store aus.  
✅ **Lösung 3**: Bitte lade die nötigen Cores innerhalb von RetroArch herunter.

---

### 🚫 Fehler: Tinfoil Console zeigt "Network Error 28" an
ℹ️ **Grund 1**: Dein WLAN ist nicht eingeschaltet | Kein LAN Kabel angeschlossen  
ℹ️ **Grund 2**: Falsche Quellenkonfiguration  
ℹ️ **Grund 3**: Unser Shop ist offline  
ℹ️ **Grund 4**: Schlechte Verbindung deinerseits zum Shop oder unsererseits zu dir.  
✅ **Lösung 1**: Schalte dein WLAN ein oder verbinde deine Konsole mit dem LAN Netzwerk.  
✅ **Lösung 2**: Prüfe die Quellenkonfiguration noch mals ganz genau.  
✅ **Lösung 3**: Warte bis der Shop wieder online ist.  
✅ **Lösung 4**: Versuche es später noch einmal

---

### 🚫 Fehler: Tinfoil Console zeigt "Network Error 7" an
ℹ️ **Grund**: Dein Provider/Internetanbieter blockiert uns.  
✅ **Lösung**: Nutze eine VPN Verbindung für deinen Router.

---

### 🚫 Fehler: Ich kann nicht nach Release Datum sortieren | Mir werden keine Game Icons angzeigt
ℹ️ **Grund**: Schlchte Datenbank von Tinfoil selbst.  
✅ **Lösung**: Lösche den gesamten "**DB**" Ordner aus dem "***SD:/switch/tinfoil***" Verzeichnis und starte Tinfoil neu.  
ℹ️ **Notiz**: Wir haben unsere eigene Datenbank, genannt: "**NX Custom DB**" (**Du kannst sie mit den Angaben unten manuell einfügen**)  

_**Info**_:  

- *Protocol*: https  
- *Host*: nx-meta.nlib.cc  
- *Path*: /  
- *Title*: NX Custom DB

---

### 🚫 Fehler: Ich finde kein Spiel
ℹ️ **Grund**: Vermutlich dein geringes Wissen  
✅ **Lösung**: Markiere "**New Games**" oder "**XCI**" und drücke die "**+**" Taste, schreibe einfach ein einfaches Wort, anstatt des gesamten Spieltitels.  

_**Beispiel**_: *Mario* | *Zelda* | *Pokemon*

---

### 🚫 Fehler: Ich finde ein Spiel nicht mittels Titel
ℹ️ **Grund**: Das Spiel hat einen asiatischen Titel  
✅ **Lösung**: Gehe dazu auf **New Games/XCI** und drücke die "**-**" Taste um die Ansicht zu wechseln.

---

### 🚫 Fehler: "Unsigned Code/Signature"
ℹ **Grund**: Manche Dumps haben ungewöhnliche Tags, aber keine Sorge unser Shop ist sicher, wir prüfen vorher alle Inhalte.  
✅ **Lösung**: Gehe dazu in die Tinfoil Einstellungen, aktiviere "**Unsigned Signature**" und gebe folgenden Code ein:

> ![konami code](/img/nx/konami.jpg)

---

### 🚫 Fehler: [Retro Roms] "Unable to start Software"
ℹ️ **Grund**: Du hast die falsche Firmware.  
✅ **Lösung**: installiere die benötigte Firmware.

---

### 🚫 Fehler: Dein Internetanbieter blockiert unseren Shop
ℹ️ **Grund**: Weil ist so  
✅ **Lösung**: Ändere deine DNS Einstellungen deiner Internetverbindung innerhalb der Switch Einstellungen zu:  

- _Primär_: **1.1.1.1**  
- _Sekundär_: **1.0.0.1**  
***Oder nutze eine VPN Verbindung.***

---

### 🚫 Fehler: Tinfoil Console zeigt "Network Error 6" an
ℹ️ **Grund 1**: Falsche Quellenkonfiguration/WLAN ist aus/WLAN Einstellungen falsch/DNS falsch  
ℹ️ **Grund 2**: Du hast das Pro Dashboard Passwort verwendet, anstatt das separate Tinfoil Passwort.  
✅ **Lösung 1**: Vergleiche deine Quellenkonfirguration mit den unserer vorgegebenen/Schalte dein WLAN ein/Vielleicht ein neuer Router?/Stelle DNS auf AUTO.  
✅ **Lösung 2**: Logge dich in dein [Pro Dashboard](https://pro.nlib.cc) ein und erstelle ein separates Tinfoil Passwort.

---

### 🚫 Fehler: Tinfoil Console zeigt "Network Error 35" an (SSL Handshake)
ℹ️ **Grund**: Deine System Zeit ist nicht synchron zu deiner Ortszeit.  
✅ **Lösung**: Installiere die Homebrew App "**DBI**" wähle "**Tools**" um die Zeit mit deiner Ortszeit zu synchronisieren.

---

### 🚫 Fehler: Fehlerhafte Daten
ℹ️ **Grund**: Deine Nintendo Switch beinhaltet beschädigte Dateien.
✅ **Lösung**: Bitte starte **DBI** und gehe auf **TOOLS -> Cleanup Orphaned Files**

---

### 🚫 Fehler: Tinfoil startet nicht auf Firmware v21+
ℹ️ **Grund**: Ab Firmware v21 können einige Homebrew-Anwendungen wie Tinfoil aufgrund von Systemänderungen, die eine Aktualisierung der package3 Datei erfordern, nicht mehr starten.  

> ⚠️ **Wichtige Warnung**: Diese Lösung ist **nicht empfohlen** und ist hier nur für Benutzer aufgelistet, die unbedingt auf Firmware v21+ auf Tinfoil zugreifen müssen. Die Manipulation des ABI in package3 ist **nicht ratsam** und kann Instabilität oder andere Probleme verursachen.  
> **Der beste Ansatz ist, auf Firmware v20 zu bleiben** und zu warten, bis Tinfoil aktualisiert und neu kompiliert wird, oder bis andere Homebrew-Lösungen bald verfügbar sind.

✅ **Lösung** (Auf eigenes Risiko verwenden):  
**Wichtig**: Du musst zuerst Atmosphere aktualisieren, dann package3 ersetzen. package3 zu ersetzen ohne Atmosphere zuerst zu aktualisieren wird nicht funktionieren.  
1. **Atmosphere aktualisieren**: Stelle sicher, dass du **Atmosphere 1.10.0 oder höher** für Firmware v21+ Kompatibilität installiert hast. Aktualisiere dein Custom Firmware (CFW) auf die neueste Version, die dein Firmware unterstützt.  
2. **package3 ersetzen**: Nach dem Aktualisieren von Atmosphere, ersetze die package3 Datei.
   - Lade die package3 Datei herunter: **[package3](pathname:///bin/package3)**
   - Platziere die `package3` Datei im Ordner **`sdmc:/atmosphere/`** (ersetze die vorhandene, falls vorhanden).

> ⚠️ **package3-Kompatibilität**: Die bereitgestellte package3-Datei funktioniert **nur mit Atmosphere 1.10.2** (neueste Version).  
> Lade sie hier herunter: [Atmosphere 1.10.2](https://github.com/Atmosphere-NX/Atmosphere/releases/tag/1.10.2)
3. Starte deine Switch neu.  
- Überprüfe immer die CFW-Kompatibilität, bevor du das Firmware deiner Switch aktualisierst.  
- Wenn du anhaltende Probleme hast, stelle sicher, dass du die richtige package3 Datei für deine Firmware-Version hast.