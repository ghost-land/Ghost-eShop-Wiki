---
sidebar_position: 3
---

# Common Issues
Having trouble with a Ghost eShop NX service? Find answers here!

---

## Tinfoil

### ❌ Error: Tinfoil Network Error 6
ℹ️ **Reason:** Typo in configuration or Wi-Fi connection issue.  
✅ **Solution:**  
- Correct the configuration.  
- Check the Wi-Fi connection.

---

### ❌ Error: Tinfoil Network Error 7
ℹ️ **Reason:** Your Internet Service Provider (ISP) is blocking access.  
✅ **Solution:** Change the DNS settings on your Switch:  
- Primary DNS: `1.1.1.1`  
- Secondary DNS: `1.0.0.1`

ℹ️ If this still doesn't work, you may need to use a VPN for your modem.

---

### ❌ Error: Tinfoil Network Error 28
ℹ️ **Reason:** Slow connection between the shop and your network.  
✅ **Solution:** Try again later.

---

### ❌ Error: Unknown Frame descriptor
ℹ️ **Reason:** Tinfoil is corrupted.  
✅ **Solution:**  
1. Delete the Tinfoil shortcut from the home screen.  
2. Delete the folder `SD:/switch/tinfoil`.  
3. Clean up orphaned files via **DBI** -> **TOOLS** -> **Cleanup orphaned files**.  
4. Reinstall Tinfoil.

---

### ❌ Error: Ghost eShop doesn't appear in Tinfoil / Tinfoil shows Network Error 28

ℹ️ **Possible causes:**  
1. Wi-Fi is not activated or configured.  
2. Incorrect Tinfoil source configuration.  
3. The shop is temporarily offline (check [here](https://status.ghostland.at/) if the following services are active: **NX - Main Network**, **NX - PUBLIC Shop**, **NX - Splitted Content**, **NX - Tinfoil Index PUBLIC Shop**).  

✅ **Solutions:**  
- **Activate Wi-Fi:** Check your network connection.  
- **Fix sources:** Double-check the Tinfoil settings.  
- **Check shop status:** Visit the status page and wait if a service is down.  

---

### ❌ Error: Unable to sort by release date in Tinfoil

ℹ️ **Reason:** The Tinfoil database is corrupted or incorrect.  
✅ **Solution:** Delete all files ending with `.json` in the `DB` folder of Tinfoil, then restart Tinfoil to download a fresh database.

---

### ❌ Error: New games / XCI tab doesn't appear
ℹ️ **Reason:** Incorrect shop configuration / Wi-Fi is off / DNS configuration issue.  
✅ **Solution:**  
- Compare your shop settings with the correct ones (details available [here](https://nx.ghostland.at)).  
- Turn on Wi-Fi.  
- Change your modem if needed.  
- Set DNS to automatic.

---

### ❌ Error: Unable to find a game
ℹ️ **Reason:** Incorrect search or the game has an Asian title.  
✅ **Solution:**  
- Go to "New games" or "XCI", press the "+" button, and search using a single keyword instead of the full title.  
- If the game has an Asian title, search for it using the "-" button in the "New games/XCI" section.

---

### ❌ Error: Unsigned Code / Invalid Signature
ℹ️ **Reason:** Some dumps contain custom tags, but the shop is secure.  
✅ **Solution:** Enable the **Unsigned Signature** option in Tinfoil settings.  

> ![konami code](/img/nx/konami.jpg)

---

## Console

### ❌ Error: Game icon is blank with a spinning circle

ℹ️ **Reason:** The console firmware is not compatible.  
✅ **Solution:** Update your console to the required firmware. **Make sure the latest firmware is compatible with your CFW (e.g., Atmosphere)** before proceeding to avoid issues.

---

### ❌ Error: Unable to start a game from Retro Shop

ℹ️ **Possible causes:**  
1. **Incompatible firmware:** Shortcuts might not work with certain recent versions. **Currently, they have been tested and work up to firmware 19.0.X and Atmosphere 1.8.0.**  
2. **Retroarch is not installed.**  
3. **Retroarch Core is missing.**

✅ **Solutions:**  
- **Solution 1:**  
  - If you use emuMMC, downgrade by one version.  
  - Alternatively, import the ROM directly to the SD card for use with Retroarch.  
- **Solution 2:** Install Retroarch via the Homebrew Store.  
- **Solution 3:** Download the required Core directly in Retroarch.

---

### ❌ Error: ISP blocks access to the shop
ℹ️ **Reason:** Your Internet Service Provider is blocking the shop.  
✅ **Solution:** Change the DNS settings on your Switch:  
- Primary DNS: `1.1.1.1`  
- Secondary DNS: `1.0.0.1`
