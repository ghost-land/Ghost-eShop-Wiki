---
sidebar_position: 6
---

# Development Server

How to access the Ghost eShop 3DS development server?

**📙 Read:**

*To get everything up and running, please follow this guide **step by step***.


**Reminders:**
* These are development servers, only use them if they have a specific interest for you or to serve as a beta tester. No specific support regarding potential problems will necessarily be provided since this is the development version and not the final production.
* And finally, the Ghost eShop team is in no way responsible for any damage you may cause to your console or anything else. Normally, if you follow this guide properly, you won't have any problems, but if you do, you can always contact the Ghost eShop team by joining [our networks](https://social.ghostland.at).
**If you don't know what you're doing, don't do it or let someone else do it.**

___
#### 🏁 1- Prerequisites:
To install the beta version of Ghost eShop 3DS, you will need the following:

* A modded console with luma🏴‍☠️. (See [here](https://3ds.hacks.guide/))
* And finally, a little patience...

___
#### 2- Setting up access to DEV server:

* **First step:**

    Download and decompress [this archive](/zip/citra/patch/ge_ctr_dev.zip).
    Once decompressed, go to the folder corresponding to your console's region:
    - EUR = Europe
    - JPN = Japan
    - KOR = Korea
    - TWN = Taiwan
    - USA = North America
* **Second step:**

    Copy-paste the `luma` folder directly to the root of your SD card (if it asks you to overwrite files: accept).
    
    You should therefore have the following files on your SD card:
    
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
* **Third step:**
    Once this has been done, put your (micro) SD card back into your console, then start your console and press the ``Select`` button on your console to access the Luma configuration menu.
* **Fourth step:**

    Once in the Luma configuration menu, make sure you have selected "Enable loading external FIRMs and modules" as shown in the image, then press the ``Start`` button to save the configuration and restart the console.
    <img src="/img/citra/screen/10.png" height="300" />
* **Fifth step:**

    Once the console is fully powered up, open the Nintendo eShop (the first access to the eShop is always longer due to the console registration on the server and in the databases).
* **Sixth step:**

    Once all this is done, you should be able to access the eShop.
    <img src="/img/citra/screen/14.png" height="300" />
* **Last step:**

    Enjoy ☺️​

:::tip Troubleshooting
If it doesn't work and you end up in the base eShop or if you get an error, check:
- Have the latest version of 3DS firmware and Luma
- Do not have a proxy in the console's internet settings
- Have internet on the console
:::

---

Now that you have access to the Ghost eShop 3DS beta, you shouldn't have to worry about Nintendo wiping out all the great games on the console of our childhood.

___

## 📋 Useful Information

:::warning Development Version
This is a beta demo version, still in development. Many features may be missing, buggy, or have unexpected behaviors.

We are not responsible for any damage your console may suffer as a result of improper handling. Please only use if necessary. If you want a stable version, please wait for the final version.
:::

### Practical Information

- **Prentendo**: May not be functional with this patch for now
- **Search test**: You can use the term ``test[n]`` in the search bar, such as ``test100`` to get 100 results (this is used to test the stability of the search function, if you click on one of the games it will display an error code)
- **NNID**: It is not mandatory to have an NNID to use the Shop, the NNID is only mandatory to download free games
- **Test eShop card**: For testing purposes, an eShop card that adds 2 credits to your balance is functional with unlimited use: ``MMMMMMMMMMMMMMMM`` (16 times the letter M)

### Server Technical Details

- **Tech stack**: The server was developed in JavaScript with Hono, it runs with Bun and PM2
- **Automatic coins**: 10 coins are automatically added to each registered console
- **Available games**: Currently, only 1 game is downloadable: **Mutant Mudds Super Challenge**
- **Sleep mode download**: Download in console sleep mode works perfectly

### Games Disappearing on First Connection

:::warning Important Notice
On the first connection to the development server, games installed on your console may disappear from the home menu.
:::

**This is normal behavior.** The games have not actually disappeared.

To make your games reappear, you can use [faketik](https://github.com/ihaveamac/faketik):

1. Download `faketik.3dsx` from [/citra/3dsx/faketik.3dsx](/citra/3dsx/faketik.3dsx)
2. Place the file in `sdmc:/3ds/faketik.3dsx` on your SD card
3. Launch faketik from the Homebrew Launcher
4. Follow the on-screen instructions to regenerate the tickets

Source code: [GitHub - ihaveamac/faketik](https://github.com/ihaveamac/faketik)

:::caution Ticket Replacement
**Important**: faketik will replace your legitimate eShop tickets with "fake" tickets. Your games will remain fully functional, but the tickets will no longer be legitimate.

To restore your original legitimate tickets, simply reconnect to the official Nintendo eShop server (by removing the development server patches).
:::

---

## 🔧 Technical Details (Additional Information)

:::info Information for Developers
This section contains technical details about the internal functioning of the server. This information is not necessary to use the development server.
:::

### Service Architecture

The Nintendo eShop works mainly with 5 services:

1. **IAS - Identity Authentication Service**
   - Route: `/ias/services/IdentityAuthenticationSOAP`
   - Handles authentication and registration of 3DS consoles

2. **ECS - E-Commerce Service**
   - Route: `/ecs/services/ECommerceSOAP`
   - Handles transactions, tickets (eTickets), account balance and account information

3. **CAS - Cataloging Service**
   - Route: `/cas/services/CatalogingSOAP`
   - Provides lists of titles and items available in the catalog

4. **CDN - Content Delivery Network**
   - Routes: 
     - `/ccs/download/<tid>/tmd.<version>`
     - `/ccs/download/<tid>/<app>`
   - Distributes content files (TMD and .app files)

5. **Asset CDN**
   - Route: `/assets/<path:filename>`
   - Serves static files (images, videos, etc.)

### Connection Flow

**First registration:**
```
1. Console → GetChallenge → Server
2. Console ← Challenge ← Server
3. Console → Register (with Challenge) → Server
4. Console ← AccountId + DeviceToken ← Server
```

**Information retrieval:**
```
1. Console → GetChallenge → Server
2. Console ← Challenge ← Server
3. Console → GetRegistrationInfo (with Challenge) → Server
4. Console ← AccountId + DeviceToken ← Server
```

**Unregister:**
```
1. Console → Unregister (with AccountId) → Server
2. Console ← Confirmation ← Server
3. Server: Deletion of all console data
```

### Database Structure

Information stored via IAS in the database:

- **`consoleid` (DeviceId)**: Used to uniquely identify a 3DS console and to create/link an account on the server. It allows, for example, access to your purchase history and owned titles.
- **`devicetoken` (token)**: Used for request authentication. It's a randomly generated (21-character) unique token per console, required for ECS/IAS calls.
- **`uniquekey` (key)**: Not currently used, but it will later be used to link a console to a Ghost eShop account in future updates. This key does not come from Nintendo; we generate it ourselves.
- **`country`, `region`, `language`**: Used to manage the catalog region, prices, and languages, as well as to personalize the results sent to you.
- **`balance`**: Usable balance, deducted during purchases and credited with promo codes.
- **`is_terminated`**: Account status (active/banned).

### Game Format

:::info CDN Format
eShop games are **not** in CIA, 3DSX, or 3DS formats. The eShop uses the **CDN format**.
:::

Each game on the CDN consists of:

- **One or more `.app` files**: Contain the game content, manual, the game itself, etc.
- **A `TMD` file (Title Metadata)**: Contains the title's metadata
- **A ticket**: Created by the server and required for installation

:::warning Current Status
Currently, ticket creation works perfectly. However, game installation and games may not work with the only available game, as we are working on our system that allows converting CIA games to the CDN format.
:::

:::tip Complete Documentation
Complete documentation on how the Nintendo eShop works will be published later.
:::

