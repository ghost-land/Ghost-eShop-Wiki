---
sidebar_position: 1
---

# **Ersteinrichtung**  
Einrichten des Shops  

---  

## ⚠️ **Voraussetzungen**  

> **WICHTIG!:** Ghost eShop **PUBLIC|FREE** benötigt mindestens Version **18.0 von Tinfoil**. Ältere Versionen können nicht auf unseren Shop verbinden und wird eine Nachricht anzeigen, dass du Tinfoil aktualisieren sollst. Und deine Konsole muss bereits gehacked sein!

---  

Dieser Guide erklärt dir wie du **Tinfoil** installierst und einstellst, um Zugang zum Ghost eShop auf deiner Nintendo Switch Konsole zu erhalten.  

---

## 📥 **Schritt 1**: *Herunterladen und installieren der Tinfoil Software*  

1. Gehe zu der offiziellen Webseite von **[Tinfoil](https://tinfoil.io/Download#download)** und lade die gewünschte Version herunter.  
2. Wähle einer der folgenden Optionen:  
   - **Self Installer**: Beinhaltet die *.nsp* und *.nro* Datei.  
   - Es ist empfohlen die **.nro** Datei zu nutzen, um zu vermeiden, dass du von **Nintendo** gesperrt wirst.  
3. Sollte Tinfoil nach der Installation nicht funktionieren:  
   - Schalte deine Nintendo Switch Konsole vollständig aus (**nicht in den Standby Modus!**).  
   - Entferne die SD Karte und stecke sie in den SD Kartenleser deines Computers.  
   - Entpacke das Tinfoil-Archiv und kopiere die Dateien in das folgende Verzeichnis hinein **/switch**, welches im Hauptverzeichnis deiner SD Karte zu finden ist (**SD:/**).  
   - Wenn du gefragt wirst, ob du überschreiben möchtest, wähle **Ja**.  
4. Entferne deine SD Karte wieder aus dem Kartenleser **(nach Möglichkeit mittels** "*Sicher entfernen*" **unter Windows**), stecke sie wieder in deine Nintendo Switch Konsole und starte deine Konsole ganz normal in die **Custom Firmware Atmosphere**.  
5. Um die **.nro** Datei zu nutzen:  
   - Starte irgendein Spiel auf deinem Hauptbildschirm und halte dabei den **R** Knopf gedrückt.  
   - Damit kommst du in den sogenannten **RAM | Title Override** Modus (**welcher mehr Arbeitsspeicher zur Verfügung stellt**), damit Tinfoil weitesgehend ohne Probleme gestartet werden kann.  

---

## ⚙️ **Schritt 2**: *Tinfoil konfigurieren*  

1. Starte die **Tinfoil.nro** Datei vom Album aus (**Homebrew Menu**).  
2. Wähle den **File Browser** aus.  
3. Drücke den **-** (**Minus**) Knopf, um eine neue Quelle hinzuzufügen.  
4. Konfiguriere die neue Quelle mit folgenden Details:  

   - **Protocol**: *https* [**Stelle sicher "https" zu wählen, anstatt "http"**]  
   - **Host**: *nx.ghostland.at*  
   - **Path**: */*  
   - **Username**: [**Leer lassen**]  
   - **Password**: [**Leer lassen**]  
   - **Title**: *Ghost eShop Free* (**Kannst du benennen wie du willst**)  

5. Wenn du fertig bist, beende und starte Tinfoil erneut.  
6. Auf der linken Seite wirst du nun einen Menüpunkt namens "**New Games**" und einen namens "**XCI**" sehen, DLCs in im Menüpunkt "**New DLCs**" , etc.  

---

## 📊 **Technische Details**  

### ⚡ **Funktionalität**:  
- Dateien sind geteilt in mehrere Blöcke mit zufälligen Größen von **100 MB bis 450 MB**.  
- Jeder Block wird auf verschiedene Server verteilt, um die Verteilung und Redundanz zu verbessern.  
- Tinfoil holt sich die nötigen Blöcke aus verscheidenen Bereichen des Servers und fügt diese zu einem vollständigen Block zusammen.  

### 🔒 Sicherheit:  
Zugriff auf den Ghost eShop ist geschützt durch mehrere Schichten der Sicherheit:  
1. **Host signature key:** Ein einzigartiger Schlüssel wird benutzt für eine gesicherte Verbindung zum Shop.  
2. **User-side verifications (uauth):** Diese Verifikation stellt sicher, dass der Nutzer auch authorisiert ist auf diese Inhalte zuzugreifen.  
3. **Device validation:** Eine Verifikation die sicherstellt, dass tatsächlich eine Nintendo Switch Konsole einen Zugriff auf unseren Shop durchführt und kein anderes Endgerät.  

#### Download Sicherheit:  
- **Block Verifikation:**  
  - Jeder Block ist geschützt durch bestimmte **hauth** und **uauth** Prüfungen, mit einzigartigen Schlüsseln zu jedem Block.  
- **Letzer Block:**  
  - Beim Anfordern des Zugriffs auf den letzten Block einer Datei werden zusätzliche Informationen gesammelt, wie beispielsweise :  
    - **UID (Nutzer Fingerabdruck)**  
    - **User Language (Nutzer Sprache)** 

> ℹ️ **Notiz:** Es gibt zusätzliche Sicherheitsmaßnahmen, die hier jedoch nicht näher erläutert werden, um die Integrität und Sicherheit des Shops zu wahren.  

### 📈 Statistiken:  
Download Daten sind temporär gelagert um Statistiken zu generieren:  
- Sämtliche Daten werden für **24 Stunden** erhalten.  
- Nach Ablauf dieser Zeit, werden die Daten **anonymisiert** und ausschließlich zu statistischen Zwecken gespeichert.  
- Diese Statistiken sind öffentlich einsehbar unter: **[Stats](http://stats.ghostland.at/)**.  

#### Update Prozess:  
- Die Statistik Webseite wird alle **24 Stunden** aktualisiert, mittels **PM2** Prozess.  
- Statistiken werden als **JSON** Datei gespeichert und identifiziert mittels **TID** (Title ID) des Inhaltes.  

#### Beispiel einer anonymisierten Statistik:  

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

Dieses System sichert die Transparents der Daten unter Berücksichtigung der Privatssphäre der Nutzer.

---

## 🎉 Zusammenfassung  

Nach Befolgen dieser Schritte, Ghost eShop ist bereit zur Verwendung mittels der Tinfoil Softwre auf deiner Nintendo Switch Konsole. Wenn du auf Probleme stößt oder mehr lernen möchtest, greife auf andere Sektionen unseres Wikis zurück.  

Viel Spaß mit Ghost eShop! 🎮  