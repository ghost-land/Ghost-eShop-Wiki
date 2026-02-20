---
sidebar_position: 3
---

# Problèmes récurrents
Un problème avec un service Ghost eShop NX ? Trouvez des solutions ici !

---

## Tinfoil

### ❌ Erreur : Tinfoil Network Error 6
ℹ️ **Raison :** Faute de frappe ou problème de connexion Wi-Fi.  
✅ **Solution :**  
- Corrigez la configuration.  
- Vérifiez la connexion Wi-Fi.

---

### ❌ Erreur : Tinfoil Network Error 7
ℹ️ **Raison :** Votre fournisseur d'accès Internet (FAI) bloque l'accès.  
✅ **Solution :** Changez les paramètres DNS de votre Switch :  
- DNS Primaire : `1.1.1.1`  
- DNS Secondaire : `1.0.0.1`

ℹ️ Si cela ne fonctionne toujours pas, il vous faudra alors utiliser un VPN pour votre modem.

---

### ❌ Erreur : Tinfoil Network Error 28
ℹ️ **Raison :** Connexion lente entre la boutique et votre réseau.  
✅ **Solution :** Réessayez plus tard.

---

### ❌ Erreur : Unknown Frame descriptor
ℹ️ **Raison :** Tinfoil est corrompu.  
✅ **Solution :**  
1. Supprimez le raccourci Tinfoil présent sur l'écran d'accueil.  
2. Supprimez le dossier `SD:/switch/tinfoil`.  
3. Nettoyez les fichiers orphelins via **DBI** -> **TOOLS** -> **Cleanup orphaned files**.  
4. Réinstallez Tinfoil.

---

### ❌ Erreur : Ghost eShop n'apparaît pas dans Tinfoil / Tinfoil affiche une erreur réseau (Network Error 28)

ℹ️ **Causes possibles :**  
1. Le Wi-Fi n'est pas activé ou configuré.  
2. Les sources dans Tinfoil sont incorrectes.  
3. La boutique est temporairement hors ligne (vérifiez [ici](https://status.ghostland.at/) si les services suivants sont actifs : **NX - Main Network**, **NX - PUBLIC Shop**, **NX - Splitted Content**, **NX - Tinfoil Index PUBLIC Shop**).  

✅ **Solutions :**  
- **Activer le Wi-Fi** : Vérifiez votre connexion réseau.  
- **Corriger les sources** : Revoyez les paramètres de Tinfoil.  
- **Vérifier l’état de la boutique** : Consultez la page de statut et attendez si un service est indisponible.  

---

### ❌ Erreur : Impossible de trier par date de sortie dans Tinfoil

ℹ️ **Cause :** La base de données de Tinfoil est corrompue ou incorrecte.  
✅ **Solution :** Supprimez tous les fichiers terminant par `.json` dans le dossier `DB` de Tinfoil, puis redémarrez Tinfoil pour qu'il retélécharge une base de données propre.

---

### ❌ Erreur : Nouveaux jeux / onglet XCI ne s'affiche pas
ℹ️ **Raison :** Mauvaise configuration de la boutique / Wi-Fi désactivé / Problème de configuration DNS.  
✅ **Solution :**  
- Comparez vos paramètres de boutique avec ceux requis. (info disponible [ici](https://nx.ghostland.at))
- Activez le Wi-Fi.  
- Changez de modem si nécessaire.  
- Configurez le DNS en mode automatique.

---

### ❌ Erreur : Impossible de trouver un jeu
ℹ️ **Raison :** Recherche incorrecte ou titre asiatique.  
✅ **Solution :**  
- Allez dans "Nouveaux jeux" ou "XCI", puis appuyez sur le bouton "+" et tapez un seul mot au lieu du titre complet.  
- Si le jeu a un titre asiatique, recherchez-le via l'onglet "Nouveaux jeux/XCI", puis appuyez sur le bouton "-" pour rechercher l'icône.

---

### ❌ Erreur : Code non signé / Signature non valide
ℹ️ **Raison :** Certains dumps contiennent des balises personnalisées, mais la boutique est sécurisée.  
✅ **Solution :** Activez l'option **Unsigned Signature** dans les paramètres de Tinfoil.  

> ![konami code](/img/nx/konami.jpg)

---

### ❌ Erreur : L'onglet des jeux recommandés n'apparaît pas

ℹ️ **Causes possibles :**  
1. **Le site Tinfoil ([tinfoil.io](https://tinfoil.io)) est inaccessible.**  
2. **Votre FAI bloque l'accès au site.**

✅ **Solutions :**  
- **Solution 1 :** Patientez jusqu'à ce que le site soit à nouveau accessible.  
- **Solution 2 :** Si le site est bloqué, changez vos DNS sur la console avec :  
  - **DNS Primaire** : `1.1.1.1`  
  - **DNS Secondaire** : `1.0.0.1`  
  Ou utilisez un VPN.

---

## Console

### ❌ Erreur : L'icône du jeu est vide avec un cercle qui tourne

ℹ️ **Cause :** Le firmware de la console n'est pas compatible.  
✅ **Solution :** Mettez à jour votre console avec le firmware requis. **Assurez-vous de vérifier la compatibilité du dernier firmware avec votre CFW (comme Atmosphère)** avant toute mise à jour pour éviter les problèmes.

---

### ❌ Erreur : Impossible de démarrer un jeu provenant du Shop Retro

ℹ️ **Causes possibles :**  
1. **Firmware incompatible** : Les raccourcis peuvent ne pas fonctionner avec certaines versions récentes. **Actuellement, ils ont été testés et fonctionnent jusqu'au firmware 19.0.X et Atmosphère 1.8.0.**  
2. **Retroarch non installé.**  
3. **Core Retroarch manquant.**

✅ **Solutions :**  
- **Solution 1 :**  
  - Si vous utilisez emuMMC, rétrogradez d'une version.  
  - Sinon, importez directement la ROM sur la carte SD pour l'utiliser avec Retroarch.  
- **Solution 2 :** Installez Retroarch via le Homebrew Store.  
- **Solution 3 :** Téléchargez le Core requis directement depuis Retroarch.

---

### ❌ Erreur : Le FAI bloque l'accès à la boutique
ℹ️ **Raison :** Blocage par le fournisseur d'accès Internet.  
✅ **Solution :** Changez les paramètres DNS de votre Switch :  
- DNS Primaire : `1.1.1.1`  
- DNS Secondaire : `1.0.0.1`

---

### ❌ Erreur : Tinfoil Network Error 35 (SSL Handshake)
ℹ️ **Raison :** L'horloge système n'est pas synchronisée.  
✅ **Solution :** Installez le Homebrew "**DBI**" et utilisez "**Tools**" pour resynchroniser NTP.

---

### ❌ Erreur : Données corrompues
ℹ️ **Raison :** Votre carte SD a des secteurs endommagés ou Tinfoil est corrompu.  
✅ **Solution :** Supprimez complètement Tinfoil et réinstallez-le (**Application sur l'écran d'accueil et dossier dans SD:/switch/**) | Vérifiez la carte SD dans Hekate avec "**Console Info**" -> "**microSD**" -> en bas à droite.

---

### ❌ Erreur : Impossible de trier par date de sortie dans Tinfoil
ℹ️ **Raison :** Mauvaise base de données de Tinfoil.  
✅ **Solution :** Supprimez le dossier DB entier de Tinfoil et redémarrez Tinfoil.  
ℹ️ **Note :** Nous avons notre propre base de données appelée "**NX Custom DB**" (**Seulement lors de l'ajout du Free Shop**)  

> ***Info*** : Ajoutez les détails suivants à une nouvelle Source

- **Protocol :** *https*
- **Host :** *nx-meta.nlib.cc*
- **Path :** */*
- **Title :** *NX Custom DB*

---

### ❌ Erreur : Tinfoil ne démarre plus sur le firmware v21+
ℹ️ **Raison :** À partir du firmware v21, certaines applications homebrew comme Tinfoil peuvent ne plus démarrer en raison de changements dans le système qui nécessitent de mettre à jour le fichier package3.  

> ⚠️ **Avertissement important** : Cette solution n'est **pas recommandée** et n'est listée ici que pour les utilisateurs qui ont absolument besoin d'accéder à Tinfoil sur le firmware v21+. Manipuler l'ABI dans package3 n'est **pas conseillé** et peut causer des instabilités ou d'autres problèmes.  
> **La meilleure approche est de rester sur le firmware v20** et d'attendre soit que Tinfoil soit mis à jour et recompilé, soit que d'autres solutions homebrew deviennent disponibles prochainement.

✅ **Solution** (À utiliser à vos risques et périls) :  
**Important** : Vous devez d'abord mettre à jour Atmosphere, puis remplacer le package3. Remplacer le package3 sans mettre à jour Atmosphere d'abord ne servira à rien.  
1. **Mettre à jour Atmosphere** : Assurez-vous d'avoir **Atmosphere 1.10.0 ou supérieur** installé pour la compatibilité avec le firmware v21+. Mettez à jour votre Custom Firmware (CFW) vers la dernière version qui supporte votre firmware.  
2. **Remplacer le package3** : Après avoir mis à jour Atmosphere, remplacez le fichier package3.  
   - Téléchargez le fichier package3 : **[package3](pathname:///bin/package3)**  
   - Placez le fichier `package3` dans le dossier **`sdmc:/atmosphere/`** (remplacez celui existant s'il est présent).  
3. Redémarrez votre Switch.  
- Vérifiez toujours la compatibilité du CFW avant de mettre à jour le firmware de votre Switch.  
- Si vous rencontrez des problèmes persistants, assurez-vous d'avoir le bon fichier package3 pour votre version de firmware.
