---
sidebar_position: 1
---

# Première Installation  
Guide pour installer Ghost eShop sur Switch  

---  

## ⚠️ Prérequis  

**Important :** Ghost eShop PUBLIC nécessite au minimum la version **18.0 de Tinfoil**. Les versions antérieures ne permettent pas d'accéder au shop et affichent un message demandant de mettre à jour Tinfoil.

---  

Ce guide vous explique comment installer et configurer **Tinfoil** pour accéder à Ghost eShop sur votre Nintendo Switch.  

---

## 📥 Étape 1 : Télécharger et installer Tinfoil  

1. Rendez-vous sur le site officiel : [_https://tinfoil.io/Download#download_](https://tinfoil.io/Download#download) et téléchargez le fichier souhaité.  
2. Choisissez l'une des options suivantes :  
   - **Self Installer** : Contient les fichiers *.nsp* et *.nro*.  
   - Il est recommandé d'utiliser le fichier **.nro** pour minimiser le risque de bannissement par **Nintendo**.  
3. Si Tinfoil ne fonctionne pas après l'installation :  
   - Éteignez complètement votre Switch (pas en veille).  
   - Retirez la carte SD et connectez-la à votre ordinateur.  
   - Décompressez le fichier Tinfoil et copiez le dossier **/switch** directement à la racine de votre carte SD (**SD:/**).  
   - Si une fenêtre vous demande de fusionner les dossiers, acceptez.  
4. Déconnectez la carte SD de l'ordinateur, réinsérez-la dans votre Switch, puis démarrez la console normalement.  
5. Pour utiliser le fichier **.nro** :  
   - Lancez n'importe quel jeu en maintenant le bouton **R** enfoncé avant de démarrer.  
   - Vous entrerez ainsi dans le mode **RAM**, où Tinfoil pourra être lancé.  

---

## ⚙️ Étape 2 : Configurer Tinfoil  

1. Lancez le fichier **Tinfoil.nro** depuis le **Homebrew Menu**.  
2. Accédez à l'option **File Browser**.  
3. Appuyez sur le bouton **-** (Moins) pour ajouter une nouvelle source.  
4. Configurez la source avec les informations suivantes :  

- **Protocol :** *https* [**Assurez-vous de sélectionner "https" et non "http"**]  
- **Host :** *nx.ghostland.at*  
- **Path :** */*  
- **Username :** [**laissez vide**]  
- **Password :** [**laissez vide**]  
- **Title :** *Ghost eShop NX Public*

5. Une fois configurée, sauvegardez et redémarrez Tinfoil.  
6. Les jeux apparaîtront dans l'onglet "New Games", les DLCs dans l'onglet "New DLCs", etc.  

---

## 📊 Détails techniques  

### ⚡ Fonctionnement :  
- Les fichiers sont divisés (splittés) en plusieurs morceaux de taille aléatoire allant de **100 MiB à 450 MiB**.  
- Chaque morceau, appelé **chunk**, est ensuite réparti sur différents serveurs pour améliorer la distribution et la redondance.  
- Tinfoil récupère ensuite tous les chunks nécessaires et les assemble pour reconstituer le fichier complet.  

### 🔒 Sécurité :  
L'accès à Ghost eShop est sécurisé grâce à plusieurs niveaux de protection :  
1. **Clé de signature host :** Une clé unique est utilisée pour sécuriser les connexions au shop.  
2. **Vérifications côté utilisateur (uauth) :** Ces vérifications s'assurent que l'utilisateur est autorisé à accéder au contenu.  
3. **Validation du périphérique :** Une vérification est effectuée pour s'assurer que c'est bien une Nintendo Switch qui tente de se connecter au shop.  

#### Sécurité des téléchargements :  
- **Vérification des chunks :**  
  - Chaque chunk est protégé par des vérifications spécifiques de **hauth** et **uauth**, ces clés étant uniques pour chaque chunk.  
- **Dernier chunk :**  
  - Lors de la requête pour accéder au dernier chunk d'un fichier, des informations supplémentaires sont collectées, telles que :  
    - **UID (empreinte utilisateur)**  
    - **Langue de l'utilisateur**  

> ℹ️ **Note :** D'autres mesures de sécurité supplémentaires existent mais ne sont pas détaillées ici afin de préserver l'intégrité et la sécurité du shop.  

### 📈 Statistiques :  
Les données collectées pour les téléchargements sont stockées temporairement afin de générer des statistiques :  
- Les données complètes sont conservées pendant **24 heures**.  
- Passé ce délai, les données sont **anonymisées** et conservées uniquement à des fins statistiques.  
- Ces statistiques sont accessibles publiquement ici : [http://stats.ghostland.at/](http://stats.ghostland.at/).  

#### Processus de mise à jour :  
- Le site de statistiques est mis à jour toutes les **24 heures** via un processus **PM2**.  
- Les statistiques sont stockées sous forme de fichiers JSON, identifiés par le **TID** du contenu.  

#### Exemple d'une statistique anonymisée :  

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

Ce système garantit une transparence des données tout en respectant la vie privée des utilisateurs.

---

## 🎉 Résumé  

Après avoir suivi ces étapes, Ghost eShop est prêt à être utilisé via Tinfoil. Si vous rencontrez des problèmes ou souhaitez en savoir plus, consultez les autres sections du wiki.  

Amusez-vous bien avec Ghost eShop ! 🎮  
