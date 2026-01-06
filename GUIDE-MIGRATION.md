# 🚀 Guide de Migration - Remplacer Votre Site Actuel

## 📦 Fichiers du Nouveau Site

Votre nouveau site contient :
```
sabydigital-nouveau/
├── index.html (54 Ko)
├── css/
│   ├── style.css (34 Ko)
│   └── modern-design.css (12 Ko)
├── js/
│   └── main.js (17 Ko)
├── images/
│   ├── logo-sabydigital.png (377 Ko)
│   ├── hero-modern-ai.jpg (1.1 Mo)
│   └── about-illustration.jpg (924 Ko)
└── README.md
```

**Taille totale : ~2.5 Mo**

---

## 🔧 Méthode 1 : Remplacement via FTP (Recommandé)

### Étape 1 : Télécharger FileZilla (Gratuit)

1. Allez sur https://filezilla-project.org
2. Téléchargez la version Client
3. Installez FileZilla sur votre ordinateur

### Étape 2 : Connectez-vous à Votre Hébergeur

**Vous avez besoin de :**
- Hôte FTP : ftp.votre-site.fr (dans email hébergeur)
- Identifiant : votre nom d'utilisateur
- Mot de passe : votre mot de passe FTP
- Port : 21 (par défaut)

**Dans FileZilla :**
1. Fichier > Gestionnaire de sites
2. Nouveau site
3. Entrez vos identifiants FTP
4. Cliquez "Connexion"

### Étape 3 : Sauvegarder l'Ancien Site

**IMPORTANT : Faites une sauvegarde !**

1. Dans FileZilla, côté droit = serveur distant
2. Trouvez le dossier `www` ou `public_html` ou `htdocs`
3. Sélectionnez tous les fichiers (Ctrl+A)
4. Clic droit > Télécharger
5. Sauvegardez dans un dossier "sauvegarde-ancien-site"

### Étape 4 : Télécharger les Fichiers du Nouveau Site

**Option A : Télécharger depuis cette plateforme**

1. Cliquez sur l'onglet "Files" dans l'interface
2. Téléchargez tous les fichiers :
   - index.html
   - Dossier css/ (avec les 2 fichiers CSS)
   - Dossier js/ (avec main.js)
   - Dossier images/ (avec les 3 images)

**Option B : Je crée une archive ZIP**

Je peux créer un fichier ZIP complet que vous téléchargez en 1 clic.

### Étape 5 : Supprimer l'Ancien Site

1. Dans FileZilla, côté droit (serveur)
2. Allez dans `www` ou `public_html`
3. Sélectionnez tous les anciens fichiers
4. Clic droit > Supprimer
5. Confirmez la suppression

### Étape 6 : Uploader le Nouveau Site

1. Côté gauche FileZilla = vos fichiers locaux
2. Naviguez vers le dossier du nouveau site
3. Sélectionnez tous les fichiers et dossiers
4. Glissez-déposez vers le côté droit (serveur)
5. Attendez la fin du transfert (1-2 minutes)

### Étape 7 : Vérifier Votre Site

1. Ouvrez votre navigateur
2. Allez sur www.sabydigital.fr
3. Appuyez sur Ctrl+F5 (vide le cache)
4. Vérifiez que le nouveau design s'affiche

**Si vous voyez encore l'ancien site :**
- Videz le cache du navigateur (Ctrl+Maj+Suppr)
- Attendez 5-10 minutes (propagation DNS)

---

## 🖥️ Méthode 2 : Via le Panneau d'Administration de l'Hébergeur

### Si vous êtes chez OVH :

1. Connexion sur https://www.ovh.com/manager/
2. Hébergements > Votre nom de domaine
3. FTP - SSH > Gestionnaire de fichiers
4. Cliquez "Explorer"
5. Supprimez les anciens fichiers
6. Cliquez "Importer des fichiers"
7. Sélectionnez vos nouveaux fichiers
8. Attendez la fin de l'upload

### Si vous êtes chez O2Switch :

1. Connexion sur votre cPanel
2. Gestionnaire de fichiers
3. Allez dans `public_html`
4. Sélectionnez tout > Supprimer
5. Cliquez "Téléverser"
6. Sélectionnez vos fichiers
7. Validez

### Si vous êtes chez Ionos/1&1 :

1. Connexion sur https://www.ionos.fr
2. Espace client > Hébergement
3. Accès FTP ou Gestionnaire de fichiers
4. Suivez la même procédure

---

## 📱 Méthode 3 : Hébergement Gratuit Moderne (Alternative)

Si vous voulez un hébergement moderne, rapide et gratuit :

### Option A : Netlify (Recommandé)

**Avantages :**
- ✅ Gratuit à vie
- ✅ HTTPS automatique
- ✅ Ultra-rapide (CDN mondial)
- ✅ Déploiement en 2 minutes
- ✅ Pas de pub

**Étapes :**

1. Allez sur https://www.netlify.com
2. Créez un compte gratuit
3. Cliquez "Add new site" > "Deploy manually"
4. Glissez-déposez votre dossier complet
5. Netlify vous donne une URL : `votre-site.netlify.app`
6. Ajoutez votre domaine personnalisé :
   - Site settings > Domain management
   - Add custom domain > sabydigital.fr
   - Suivez les instructions DNS

**Configuration DNS :**
Chez votre registrar (OVH, Gandi, etc.) :
```
Type A : @ → 75.2.60.5
Type CNAME : www → votre-site.netlify.app
```

### Option B : Vercel

Même principe que Netlify, tout aussi bon.

### Option C : GitHub Pages

Gratuit mais nécessite un compte GitHub.

---

## ⚙️ Méthode 4 : Via l'Onglet "Publish" de Cette Plateforme

**La plus simple !**

1. Cliquez sur l'onglet **"Publish"** en haut
2. La plateforme déploie automatiquement votre site
3. Vous recevez une URL publique
4. Vous pouvez ensuite :
   - Utiliser cette URL directement
   - Ou pointer votre domaine dessus

---

## 🔄 Méthode 5 : Redirection DNS vers Nouveau Site

Si vous voulez garder l'ancien site en backup :

1. Déployez le nouveau site sur Netlify/Vercel
2. Dans votre registrar de domaine (OVH, etc.)
3. Modifiez les DNS pour pointer vers le nouveau site
4. L'ancien reste accessible via l'ancienne URL

---

## 🛡️ Checklist Avant de Remplacer

**AVANT de supprimer l'ancien site :**

- [ ] Sauvegarde complète téléchargée
- [ ] Nouveau site testé localement
- [ ] Tous les fichiers prêts (HTML, CSS, JS, images)
- [ ] Logo uploadé et fonctionnel
- [ ] Formulaire de contact configuré
- [ ] Numéros de téléphone corrects
- [ ] Email correct (contact@sabydigital.fr)
- [ ] Liens réseaux sociaux mis à jour

**APRÈS le remplacement :**

- [ ] Site accessible sur www.sabydigital.fr
- [ ] Tous les liens fonctionnent
- [ ] Images s'affichent correctement
- [ ] Formulaire de contact opérationnel
- [ ] Version mobile OK
- [ ] Certificat SSL actif (https://)
- [ ] Google Analytics réinstallé (si vous en aviez)

---

## 🚨 En Cas de Problème

### Problème 1 : Site ne s'affiche pas

**Solutions :**
1. Videz le cache : Ctrl+F5
2. Vérifiez que index.html est bien à la racine
3. Attendez 10-30 minutes (propagation)
4. Vérifiez les permissions fichiers (755 pour dossiers, 644 pour fichiers)

### Problème 2 : Images ne s'affichent pas

**Solutions :**
1. Vérifiez que le dossier `images/` est bien uploadé
2. Vérifiez les majuscules/minuscules dans les noms
3. Vérifiez les permissions (644)

### Problème 3 : CSS ne fonctionne pas

**Solutions :**
1. Vérifiez que le dossier `css/` est bien présent
2. Ouvrez la console navigateur (F12) > onglet Network
3. Regardez si les fichiers CSS se chargent
4. Vérifiez les chemins dans index.html

### Problème 4 : JavaScript ne fonctionne pas

**Solutions :**
1. Vérifiez que `js/main.js` est uploadé
2. Ouvrez la console (F12) > onglet Console
3. Regardez les erreurs JavaScript

---

## 💡 Mes Recommandations

**Pour un débutant :**
1. ✅ Utilisez l'onglet **"Publish"** de cette plateforme (le plus simple)
2. ✅ Ou utilisez **Netlify** (gratuit, rapide, professionnel)

**Pour quelqu'un à l'aise :**
1. ✅ FTP avec FileZilla (contrôle total)
2. ✅ Gardez votre hébergeur actuel

**Important :**
- Toujours faire une **sauvegarde** avant
- Tester le nouveau site avant de supprimer l'ancien
- Ne pas paniquer si ça ne marche pas immédiatement

---

## 📞 Support

**Si vous bloquez :**

1. **Vérifiez d'abord** : 
   - Cache navigateur vidé (Ctrl+F5)
   - Tous les fichiers uploadés
   - Permissions correctes

2. **Contactez votre hébergeur** :
   - Ils ont un support technique
   - Ils peuvent vous guider

3. **Communauté** :
   - Forums OVH, O2Switch
   - Stack Overflow (en anglais)

---

## ✅ Résumé : Quelle Méthode Choisir ?

| Méthode | Difficulté | Temps | Recommandé pour |
|---------|-----------|-------|-----------------|
| **Onglet Publish** | ⭐ Facile | 2 min | Débutants |
| **Netlify** | ⭐⭐ Facile | 10 min | Tous |
| **FTP FileZilla** | ⭐⭐⭐ Moyen | 20 min | À l'aise avec tech |
| **Panneau hébergeur** | ⭐⭐ Facile | 15 min | Selon hébergeur |

---

## 🎯 Action Immédiate

**Étape 1 :** Dites-moi quelle méthode vous préférez

**Étape 2 :** Je vous guide pas à pas

**Étape 3 :** Votre nouveau site est en ligne !

---

Quelle méthode voulez-vous utiliser ? 😊