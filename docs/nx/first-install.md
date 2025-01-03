---
sidebar_position: 1
---

# Initial Setup  
Guide to install Ghost eShop on Switch  

---  

## ⚠️ Prerequisites  

**Important:** Ghost eShop PUBLIC requires at least version **18.0 of Tinfoil**. Older versions cannot access the shop and will display a message prompting you to update Tinfoil.

---  

This guide explains how to install and configure **Tinfoil** to access Ghost eShop on your Nintendo Switch.  

---

## 📥 Step 1: Download and Install Tinfoil  

1. Go to the official website: [_https://tinfoil.io/Download#download_](https://tinfoil.io/Download#download) and download the desired file.  
2. Choose one of the following options:  
   - **Self Installer**: Includes *.nsp* and *.nro* files.  
   - It is recommended to use the **.nro** file to minimize the risk of being banned by **Nintendo**.  
3. If Tinfoil does not work after installation:  
   - Completely turn off your Switch (not in sleep mode).  
   - Remove the SD card and connect it to your computer.  
   - Extract the Tinfoil file and copy the **/switch** folder directly to the root of your SD card (**SD:/**).  
   - If prompted to merge folders, accept.  
4. Disconnect the SD card from your computer, reinsert it into your Switch, and start the console normally.  
5. To use the **.nro** file:  
   - Launch any game while holding the **R** button before starting.  
   - This will enter **RAM mode**, where Tinfoil can be launched.  

---

## ⚙️ Step 2: Configure Tinfoil  

1. Launch the **Tinfoil.nro** file from the **Homebrew Menu**.  
2. Go to the **File Browser** option.  
3. Press the **-** (Minus) button to add a new source.  
4. Configure the source with the following details:  

   ```
   Protocol: https [Make sure to select "https" and not "http"]  
   Host: nx.ghostland.at  
   Path: /  
   Username: [leave blank]  
   Password: [leave blank]  
   Title: Ghost eShop PUBLIC  
   ```

5. Once configured, save and restart Tinfoil.  
6. Games will appear in the "New Games" tab, DLCs in the "New Updates" tab, etc.  

---

## 📊 Technical Details  

### ⚡ Functionality:  
- Files are divided (split) into multiple chunks of random sizes ranging from **100 MiB to 450 MiB**.  
- Each chunk is distributed across different servers to improve distribution and redundancy.  
- Tinfoil retrieves all the necessary chunks and assembles them to recreate the complete file.  

### 🔒 Security:  
Access to Ghost eShop is secured through multiple layers of protection:  
1. **Host signature key:** A unique key is used to secure connections to the shop.  
2. **User-side verifications (uauth):** These verifications ensure that the user is authorized to access the content.  
3. **Device validation:** A verification is performed to ensure it is indeed a Nintendo Switch attempting to connect to the shop.  

#### Download Security:  
- **Chunk verification:**  
  - Each chunk is protected by specific **hauth** and **uauth** checks, with keys unique to each chunk.  
- **Final chunk:**  
  - When requesting access to the final chunk of a file, additional information is collected, such as:  
    - **UID (User Fingerprint)**  
    - **User Language**  

> ℹ️ **Note:** Additional security measures exist but are not detailed here to preserve the integrity and security of the shop.  

### 📈 Statistics:  
Download data is temporarily stored to generate statistics:  
- Complete data is kept for **24 hours**.  
- After this period, the data is **anonymized** and retained solely for statistical purposes.  
- These statistics are publicly accessible here: [http://stats.ghostland.at/](http://stats.ghostland.at/).  

#### Update Process:  
- The statistics website is updated every **24 hours** via a **PM2** process.  
- Statistics are stored as JSON files, identified by the **TID** of the content.  

#### Example of anonymized statistics:  

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

This system ensures transparency of data while respecting user privacy.

---

## 🎉 Summary  

After following these steps, Ghost eShop is ready to be used via Tinfoil. If you encounter any issues or want to learn more, refer to other sections of the wiki.  

Enjoy using Ghost eShop! 🎮  
