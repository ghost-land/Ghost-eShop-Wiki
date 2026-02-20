---
sidebar_position: 3
---

# Common Issues  

Problems and how to solve it


### 🚫 **Error**: *Unknown Frame descriptor*
ℹ️ **Reason**: Corrupted Tinfoil  
✅ **Solution**: Delete the Forwarder on Mainscreen, delete the Folder **SD:/switch/tinfoil**, cleanup orphaned files through **DBI -> TOOLS** and reinstall Tinfoil

---

### 🚫 **Error**: *Game Icon is blank with moving Circle in it*
ℹ️ **Reason**: Wrong Firmware  
✅ **Solution**: Update to required Firmware

---

### 🚫 **Error**: *Retro Shop Game won't start*
ℹ️ **Reason 1**: Wrong Firmware, the Forwarders aren't compatible to latest Firmware.  
ℹ️ **Reason 2**: You haven't installed Retroarch  
ℹ️ **Reason 3**: Missing Retroarch Core  
✅ **Solution 1**: Downgrade to one version earlier only if you use emuMMC.
Or import the Rom in the SD directly to Retroarch.  
✅ **Solution 2**: Install Retroarch from Homebrew Store.  
✅ **Solution 3**: Please download the needed Core inside of Retroarch.

---

### 🚫 **Error**: *Tinfoil show Network Error 28*
ℹ️ **Reason 1**: WiFi isn't activated  
ℹ️ **Reason 2**: Wrong Source configuration  
ℹ️ **Reason 3**: Shop is down  
ℹ️ **Reason 4**: Slow connection from shop or your side  
✅ **Solution 1**: Activate WiFi  
✅ **Solution 2**: Check all needed Credentials twice  
✅ **Solution 3**: Wait until its up again  
✅ **Solution 4**: Try it again later

---

### 🚫 **Error**: *Tinfoil Network Error 7*
ℹ️ **Reason**: Your ISP blocks us
✅ **Solution**: Use VPN for your Modem

---

### 🚫 **Error**: *Can't sort by Release-Date in Tinfoil*
ℹ️ **Reason**: Bad Database from Tinfoil  
✅ **Solution**: Delete the entire DB Folder of Tinfoil and restart Tinfoil  
ℹ️ **Note**: We have our own Database called "**NX Custom DB**" (**Only when adding Free Shop**)  

> ***Info***: Add the following details to a new Source

- **Protocol**: *https*
- **Host**: *nx-meta.nlib.cc*
- **Path**: */*
- **Title**: *NX Custom DB*

---

### 🚫 **Error**: *I can't find a Game*
ℹ️ **Reason**: Possibly your poor Knowledge  
✅ **Solution**: Highlight "**New Games**" or "**XCI**" and hit the "**+**" Button, type in just a single Word instead of the full Title.

_**Example**_: **Mario** | *Zelda* | *Pokemon*

---

### 🚫 **Error**: *Can't find a Game by Name*
ℹ️ **Reason**: The Game has a Asian Title  
✅ **Solution**: Go into **New Games/XCI** and press "**-**" to search the Icon

---

### 🚫 **Error**: *Unsigned Code/Signature*
ℹ️ **Reason**: Some Dumps have custom Tags, but our Shop is safe  
✅ **Solution**: Go into Tinfoil setting and activate "**Unsigned Signature**"

> ![konami code](/img/nx/konami.jpg)

---

### 🚫 **Error**: **[Retro Roms]** "*Unable to start Software*"
ℹ️ **Reason**: You have wrong Firmware  
✅ **Solution**: Install needed Firmware

---

### 🚫 **Error**: *ISP is blocking the Shop*
ℹ️ **Reason**: Because  
✅ **Solution**: Change your DNS on your Switch to:  

- **Primary**: *1.1.1.1*  
- **Secondary**: *1.0.0.1*  

***Or use VPN***

---

### 🚫 **Error**: *Tinfoil Network Error 6*
ℹ️ **Reason 1**: Wrong Shop Config/WiFi off/WiFi Settings wrong/DNS wrong  
ℹ️ **Reason 2**: You chose the Dashboard Password for the Source  
✅ **Solution 1**: Compare your Shop Settings with ours/Turn WiFi on/Maybe new Modem?/Set DNS to Auto  
✅ **Solution 2**: Login to **[Pro Dashboard](https://pro.nlib.cc)** and create Tinfoil password.

---

### 🚫 Error: Network Error 35 (SSL Handshake)
ℹ️ **Reason**: System Clock is out of sync  
✅ **Solution**: Install the Homebrew "**DBI**" and use "**Tools**" to resync NTP

---

### 🚫 **Error**: *Corrupted Data*
ℹ️ **Reason**: Your SD have damaged Sectors or Tinfoil is corrupted  
✅ **Solution**: Completely delete Tinfoil and reinstall TInfoil (**App on Mainscreen and Folder in SD:/switch/**) | Check SD Card in Hekate with "**Console Info**" -> "**microSD**" -> at the bottom in the right Corner

---

### 🚫 **Error**: *Tinfoil won't start on Firmware v21+*
ℹ️ **Reason**: Starting from firmware v21, some homebrew applications like Tinfoil may not start due to changes in the system that require to update package3 file.  
✅ **Solution**:  
**Important**: You must first update Atmosphere, then replace package3. Replacing package3 without updating Atmosphere first will not work.  
1. **Update Atmosphere**: Ensure you have **Atmosphere 1.10.0 or higher** installed for firmware v21+ compatibility. Update your Custom Firmware (CFW) to the latest version that supports your firmware.  
2. **Replace package3**: After updating Atmosphere, replace the package3 file.  
   - Download the package3 file: **[package3](/bin/package3)**  
   - Place the `package3` file in the **`sdmc:/atmosphere/`** folder (replace the existing one if present).  
3. Restart your Switch.  
- Always check CFW compatibility before updating your Switch firmware.  
- If you encounter persistent issues, ensure you have the correct package3 file for your firmware version.