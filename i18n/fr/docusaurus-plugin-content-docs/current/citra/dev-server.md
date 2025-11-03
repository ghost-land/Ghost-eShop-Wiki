---
sidebar_position: 6
---

# Serveur de développement

Comment accéder au serveur de développement Ghost eShop 3DS ?

**📙 À lire :**

*Pour que tout fonctionne correctement, veuillez suivre ce guide **étape par étape***.


**Rappels :**
* Il s'agit ici des serveurs de développement, ne les utiliser que si cela a un intérêt spécifique pour vous ou pour servir de bêta-testeur. Aucun support spécifique concernant d'éventuels problèmes ne sera obligatoirement fourni étant donné qu'il s'agit de la version de développement et non de la production finale.
* Et enfin, l'équipe Ghost eShop n'est en aucun cas responsable des dommages que vous pourriez causer à votre console ou à quoi que ce soit d'autre. Normalement, si vous suivez ce guide correctement, vous n'aurez aucun problème, mais si c'est le cas, vous pouvez toujours contacter l'équipe Ghost eShop en rejoignant [nos réseaux](https://social.ghostland.at).
**Si vous ne savez pas ce que vous faites, ne le faites pas ou laissez quelqu'un d'autre le faire.**

___
#### 🏁 1- Prérequis :
Pour installer la version bêta de Ghost eShop 3DS, vous aurez besoin de ce qui suit :

* Une console modifiée avec luma🏴‍☠️. (Voir [ici](https://3ds.hacks.guide/))
* Et enfin, un peu de patience...

___
#### 2- Configuration de l'accès aux serveur DEV :

* **Première étape :**

    Téléchargez et décompressez [cette archive](/zip/citra/patch/ge_ctr_dev.zip).
    Une fois décompressée, allez dans le dossier correspondant à la région de votre console :
    - EUR = Europe
    - JPN = Japon
    - KOR = Coréenne
    - TWN = Taiwan
    - USA = Amérique du Nord
* **Deuxième étape :**

    Copiez-collez le dossier `luma` directement à la racine de votre carte SD (s'il vous demande d'écraser des fichiers : accepter).
    
    Vous devriez donc avoir les fichiers suivants dans votre carte SD :
    
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
* **Troisième étape :**
    Une fois cela fait, remettez votre carte SD (micro) dans votre console, puis démarrez votre console et appuyez sur le bouton ``Select`` de votre console pour accéder au menu de configuration de Luma.
* **Quatrième étape :**

    Une fois dans le menu de configuration de Luma, assurez-vous d'avoir sélectionné "Activer le chargement des FIRMs et modules externes" comme indiqué dans l'image, puis appuyez sur le bouton ``Start`` pour enregistrer la configuration et redémarrer la console.
    <img src="/img/citra/screen/10.png" height="300" />
* **Cinquième étape :**

    Une fois la console complètement allumée, ouvrez le Nintendo eShop (le premier accès à l'eShop est toujours plus long en raison de l'enregistrement de la console sur le serveur et dans les bases de données).
* **Sixième étape :**

    Une fois tout cela fait, vous devriez pouvoir accéder à l'eShop.
    <img src="/img/citra/screen/14.png" height="300" />
* **Dernière étape :**

    Profitez-en ☺️​

:::tip Dépannage
Si cela ne fonctionne pas et que vous vous retrouvez dans l'eShop de base ou que vous avez une erreur, vérifiez :
- Avoir la dernière version du firmware 3DS et de Luma
- Ne pas avoir de proxy dans les paramètres internet de la console
- Avoir internet sur la console
:::

---

Maintenant que vous avez accès à la bêta Ghost eShop 3DS, vous ne devriez plus avoir à vous soucier de Nintendo qui efface tous les excellents jeux de la console de notre enfance.

___

## 📋 Informations utiles

:::warning Version de développement
Il s'agit d'une version bêta en démo, encore en développement. De nombreuses fonctionnalités peuvent être manquantes, bugguées ou avoir des comportements imprévus.

Nous ne sommes pas responsables des dommages que votre console pourrait subir à la suite d'une mauvaise manipulation. Merci de n'utiliser que si cela est nécessaire. Si vous souhaitez une version stable, merci d'attendre la version finale.
:::

### Informations pratiques

- **Prentendo** : Peut ne pas être fonctionnel avec ce patch pour le moment
- **Test de recherche** : Vous pouvez utiliser dans la barre de recherche le terme ``test[n]``, comme par exemple ``test100`` pour avoir 100 résultats (cela sert à tester la stabilité de la fonction de recherche, si vous cliquez sur l'un des jeux cela affichera un code d'erreur)
- **NNID** : Il n'est pas obligatoire d'avoir un NNID pour utiliser le Shop, le NNID est obligatoire uniquement pour télécharger des jeux gratuits
- **Carte eShop de test** : Pour les tests, une carte eShop qui ajoute 2 crédits au solde est fonctionnelle sans limite d'utilisation : ``MMMMMMMMMMMMMMMM`` (16 fois la lettre M)

### Détails techniques du serveur

- **Stack technique** : Le serveur a été développé en JavaScript avec Hono, il tourne avec Bun et PM2
- **Pièces automatiques** : 10 pièces sont automatiquement ajoutées à chaque console enregistrée
- **Jeux disponibles** : Actuellement, seul 1 jeu est téléchargeable : **Mutant Mudds Super Challenge**
- **Téléchargement en mode veille** : Le téléchargement en mode veille de la console fonctionne parfaitement

### Disparition des jeux lors de la première connexion

:::warning Avertissement important
Lors de la première connexion au serveur de développement, les jeux installés sur votre console peuvent disparaître du menu d'accueil.
:::

**Ce comportement est normal.** Les jeux n'ont pas réellement disparu.

Pour faire réapparaître vos jeux, vous pouvez utiliser [faketik](https://github.com/ihaveamac/faketik) :

1. Téléchargez [faketik.3dsx](/3dsx/faketik.3dsx)
2. Placez le fichier dans `sdmc:/3ds/faketik.3dsx` sur votre carte SD
3. Lancez faketik depuis le Homebrew Launcher
4. Suivez les instructions à l'écran pour régénérer les tickets

Code source : [GitHub - ihaveamac/faketik](https://github.com/ihaveamac/faketik)

:::caution Remplacement des tickets
**Important** : faketik remplacera vos tickets légitimes de l'eShop par des tickets "factices". Vos jeux resteront entièrement fonctionnels, mais les tickets ne seront plus légitimes.

Pour récupérer vos tickets légitimes d'origine, il vous suffit de vous reconnecter au serveur eShop officiel de Nintendo (en supprimant les patches du serveur de développement).
:::

---

## 🔧 Détails techniques (informations supplémentaires)

:::info Informations pour développeurs
Cette section contient des détails techniques sur le fonctionnement interne du serveur. Ces informations ne sont pas nécessaires pour utiliser le serveur de développement.
:::

### Architecture des services

Le Nintendo eShop fonctionne principalement avec 5 services :

1. **IAS - Identity Authentication Service**
   - Route : `/ias/services/IdentityAuthenticationSOAP`
   - Gère l'authentification et l'enregistrement des consoles 3DS

2. **ECS - E-Commerce Service**
   - Route : `/ecs/services/ECommerceSOAP`
   - Gère les transactions, les tickets (eTickets), la balance du compte et les informations de compte

3. **CAS - Cataloging Service**
   - Route : `/cas/services/CatalogingSOAP`
   - Fournit les listes de titres et d'items disponibles dans le catalogue

4. **CDN - Content Delivery Network**
   - Routes : 
     - `/ccs/download/<tid>/tmd.<version>`
     - `/ccs/download/<tid>/<app>`
   - Distribue les fichiers de contenu (TMD et fichiers .app)

5. **Asset CDN**
   - Route : `/assets/<path:filename>`
   - Sert les fichiers statiques (images, vidéos, etc.)

### Flux de connexion

**Premier enregistrement :**
```
1. Console → GetChallenge → Serveur
2. Console ← Challenge ← Serveur
3. Console → Register (avec Challenge) → Serveur
4. Console ← AccountId + DeviceToken ← Serveur
```

**Récupération des informations :**
```
1. Console → GetChallenge → Serveur
2. Console ← Challenge ← Serveur
3. Console → GetRegistrationInfo (avec Challenge) → Serveur
4. Console ← AccountId + DeviceToken ← Serveur
```

**Désenregistrement :**
```
1. Console → Unregister (avec AccountId) → Serveur
2. Console ← Confirmation ← Serveur
3. Serveur : Suppression de toutes les données de la console
```

### Structure de la base de données

Les informations stockées via IAS dans la base de données :

- **`consoleid` (DeviceId)** : Utilisé pour identifier de manière unique une console 3DS et pour créer/lier un compte sur le serveur. Permet, par exemple, d'accéder à l'historique d'achats et aux titres acquis.
- **`devicetoken` (token)** : Utilisé pour l'authentification des requêtes. C'est un token unique généré aléatoirement (21 caractères) par console, nécessaire pour les appels ECS/IAS.
- **`uniquekey` (key)** : Actuellement non utilisé, mais il sera utilisé plus tard pour lier une console à un compte Ghost eShop dans de futures mises à jour. Cette clé ne provient pas de Nintendo ; nous la générons nous-mêmes.
- **`country`, `region`, `language`** : Utilisés pour gérer la région du catalogue, les prix et les langues, ainsi que pour personnaliser les résultats qui vous sont envoyés.
- **`balance`** : Solde utilisable, déduit lors des achats et crédité avec des codes promotionnels.
- **`is_terminated`** : État du compte (actif/interdit).

### Format des jeux

:::info Format CDN
Les jeux de l'eShop **ne sont pas** aux formats CIA, 3DSX ou 3DS. L'eShop utilise le **format CDN**.
:::

Chaque jeu est constitué côté CDN de :

- **Un ou plusieurs fichiers `.app`** : Contiennent le contenu du jeu, le manuel, le jeu lui-même, etc.
- **Un fichier `TMD` (Title Metadata)** : Contient les métadonnées du titre
- **Un ticket** : Créé par le serveur et nécessaire pour l'installation

:::warning État actuel
Actuellement, la création de tickets fonctionne parfaitement. Cependant, l'installation des jeux et les jeux peuvent ne pas fonctionner avec le seul jeu disponible, car nous travaillons sur notre système permettant de convertir des jeux CIA au format CDN.
:::

:::tip Documentation complète
Une documentation complète sur le fonctionnement du Nintendo eShop sera publiée plus tard.
:::