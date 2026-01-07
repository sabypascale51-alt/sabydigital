# 🚀 FACEBOOK PIXEL - GUIDE DE DÉMARRAGE RAPIDE

## ✅ **STATUT : INTÉGRÉ ET OPÉRATIONNEL**

**Pixel ID** : `61581661684149`  
**Date** : 6 janvier 2026

---

## 🎯 **Qu'est-ce qui est déjà fait ?**

✅ **Pixel intégré** dans le site (index.html)  
✅ **9 événements trackés automatiquement** :
- PageView (chargement page)
- Contact (CTA Devis, Appel, WhatsApp)
- Lead (formulaire de contact)
- CompleteRegistration (quiz terminé)
- ViewContent (pages départements)
- QuizStarted (début du quiz)
- QuizProfileDetected (profil détecté)

✅ **Valeur trackée** : 890€ (Pack Visibilité IDF)  
✅ **Enhanced Match** : Données utilisateur enrichies

---

## 🧪 **ÉTAPE 1 : Tester le Pixel (5 minutes)**

### **Installer Facebook Pixel Helper**
1. Ouvrir Chrome
2. Installer l'extension : https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc
3. ✅ Icône ajoutée en haut à droite du navigateur

### **Tester sur le site**
1. Ouvrir https://sabydigital.netlify.app
2. Cliquer sur l'icône **Pixel Helper**
3. ✅ Vérifier : "**PageView**" détecté
4. Cliquer sur **"Devis Gratuit"** → ✅ "**Contact**" détecté
5. Cliquer sur **"06 60 87 54 77"** → ✅ "**Contact**" détecté
6. Faire le **Quiz** → ✅ "**QuizStarted**" + "**CompleteRegistration**" détectés

**Résultat attendu** : ✅ Tous les événements détectés 🎉

---

## 📊 **ÉTAPE 2 : Vérifier dans Events Manager (5 minutes)**

1. **Aller sur Events Manager** :
   - https://business.facebook.com/events_manager

2. **Sélectionner votre pixel** : `61581661684149`

3. **Onglet "Test Events"** :
   - Ouvrir votre site dans un autre onglet
   - Les événements apparaissent **en temps réel**
   - ✅ Vérifier : PageView, Contact, Lead, etc.

4. **Onglet "Overview"** (24h après déploiement) :
   - Voir le nombre d'événements par jour
   - Analyser les pages les plus visitées
   - Identifier les actions les plus fréquentes

---

## 🎯 **ÉTAPE 3 : Créer vos premières audiences (10 minutes)**

### **Audience 1 : Visiteurs Récents (Retargeting)**

1. Aller sur https://business.facebook.com/audiences
2. **Créer une audience** → **Audience personnalisée** → **Site web**
3. Sélectionner votre pixel : `61581661684149`
4. Événement : **PageView** → Derniers **30 jours**
5. Nommer : **"SabyDigital - Visiteurs 30j"**
6. ✅ Créer l'audience

**Utilisation** : Retargeting général (rappel offre, témoignages)

### **Audience 2 : Prospects Chauds (Haute Priorité)**

1. **Créer une audience** → **Audience personnalisée** → **Site web**
2. Sélectionner votre pixel : `61581661684149`
3. Événement : **Lead** OU **CompleteRegistration** → Derniers **30 jours**
4. Nommer : **"SabyDigital - Prospects Chauds 30j"**
5. ✅ Créer l'audience

**Utilisation** : Retargeting agressif (offre spéciale, urgence)

### **Audience 3 : Clickers Téléphone (Très Chaud)**

1. **Créer une audience** → **Audience personnalisée** → **Site web**
2. Sélectionner votre pixel : `61581661684149`
3. Événement : **Contact** → Contient "Phone" → Derniers **7 jours**
4. Nommer : **"SabyDigital - Clickers Phone 7j"**
5. ✅ Créer l'audience

**Utilisation** : Rappel téléphonique, offre flash

---

## 💰 **ÉTAPE 4 : Lancer votre première campagne (15 minutes)**

### **Campagne : Retargeting Visiteurs**

**Objectif** : Convertir les visiteurs en prospects

1. **Aller sur Ads Manager** : https://business.facebook.com/adsmanager

2. **Créer une campagne** :
   - Objectif : **Génération de prospects**
   - Nom : "SabyDigital - Retargeting Visiteurs"
   - Budget quotidien : **15-20€**

3. **Ensemble de publicités** :
   - Audience : **"SabyDigital - Visiteurs 30j"**
   - Localisation : **Île-de-France** (75, 77, 78, 91, 92, 93, 94, 95)
   - Âge : **30-55 ans**
   - Placements : **Automatiques** (Facebook + Instagram)

4. **Publicité** :
   - Format : **Image unique** ou **Carrousel**
   - Message : 
     ```
     🔵 Artisan IDF : Vous cherchez plus de clients ?
     
     ✅ Site web professionnel créé par IA
     ✅ Fiche Google My Business optimisée
     ✅ Visible sur la 1ère page Google locale
     
     🎁 OFFRE SPÉCIALE : -10% si vous commandez avant le [DATE]
     
     💰 Pack Visibilité : 801€ au lieu de 890€
     ⏱️ Livraison : 3-7 jours
     
     👉 Cliquez pour votre devis gratuit
     ```
   - CTA : **Demander un devis** ou **En savoir plus**
   - Lien : https://sabydigital.netlify.app#contact

5. **Événement d'optimisation** :
   - Pixel : `61581661684149`
   - Événement : **Lead**
   - ✅ Publier la campagne

**Résultats attendus (7 jours)** :
- 200-400 impressions
- 10-20 clics (CTR 5%)
- 2-4 leads (conversion 20%)
- CPL : 12-15€

---

## 📈 **ÉTAPE 5 : Optimiser et Scaler (Semaine 2-4)**

### **Semaine 2 : Analyser les Résultats**

✅ **Vérifier dans Ads Manager** :
- Coût par lead (CPL) → Objectif : < 15€
- Taux de conversion → Objectif : > 15%
- ROAS (Return on Ad Spend) → Objectif : > 400%

✅ **Actions selon résultats** :
- **CPL trop élevé (> 20€)** : Réduire l'audience (cibler mieux)
- **CPL faible (< 10€)** : Augmenter le budget (+50%)
- **Pas de conversions** : Tester nouveaux créatifs (images, messages)

### **Semaine 3 : Créer Audience Lookalike**

1. Aller sur https://business.facebook.com/audiences
2. **Créer une audience** → **Audience sosie**
3. Source : **"SabyDigital - Prospects Chauds 30j"**
4. Localisation : **France**
5. Taille : **1%** (plus précis)
6. Nommer : **"SabyDigital - Lookalike 1% FR"**
7. ✅ Créer l'audience

**Utilisation** : Prospection froide (trouver de nouveaux artisans)

### **Semaine 4 : Lancer Campagne Lookalike**

1. **Créer une campagne** (même process qu'Étape 4)
2. Audience : **"SabyDigital - Lookalike 1% FR"**
3. Budget : **20-30€/jour**
4. Message : Adaptation pour audience froide (mettre en avant les bénéfices)

**Résultats attendus (30 jours)** :
- 20-40 leads
- 4-8 nouveaux clients
- CA : 3 560€ - 7 120€
- ROI : 500-900%

---

## 🎯 **Objectifs par Phase**

### **Phase 1 : Collecte de données (Jours 1-7)**
- ✅ Laisser le pixel collecter minimum 50 événements
- ✅ Identifier les audiences performantes
- ✅ Tester 2-3 créatifs différents
- **Budget** : 15-20€/jour
- **Objectif** : Comprendre ce qui fonctionne

### **Phase 2 : Retargeting (Jours 8-21)**
- ✅ Lancer campagne retargeting (visiteurs + prospects)
- ✅ Offre spéciale -10%
- ✅ Urgence (deadline)
- **Budget** : 20-30€/jour
- **Objectif** : Convertir les visiteurs en clients

### **Phase 3 : Scaling (Jours 22-30+)**
- ✅ Créer audiences Lookalike
- ✅ Augmenter le budget sur les campagnes performantes
- ✅ Diversifier les créatifs
- **Budget** : 30-50€/jour
- **Objectif** : Scaler les résultats

---

## 💡 **Conseils d'Expert**

### **❌ Erreurs à Éviter**

1. **Augmenter le budget trop vite** → Augmenter progressivement (+20% tous les 3 jours)
2. **Changer les campagnes trop souvent** → Laisser minimum 3-5 jours pour optimiser
3. **Cibler trop large** → Rester sur Île-de-France au début
4. **Ignorer le retargeting** → C'est là où le ROI est le meilleur

### **✅ Best Practices**

1. **Tester plusieurs créatifs** : 3-5 images/vidéos différentes
2. **Exclure les clients** : Ne pas dépenser sur ceux qui ont déjà acheté
3. **Utiliser les témoignages** : Créatifs avec avis clients +40% conversion
4. **Créer de l'urgence** : "Places limitées", "Offre jusqu'au [DATE]"
5. **Suivre le ROI** : Mesurer le CA généré vs budget pub

---

## 📞 **Besoin d'Aide ?**

### **Ressources**

- **Documentation complète** : `FACEBOOK-PIXEL-INTEGRATION.md`
- **Events Manager** : https://business.facebook.com/events_manager
- **Ads Manager** : https://business.facebook.com/adsmanager
- **Support Facebook** : https://www.facebook.com/business/help

### **Problèmes Courants**

**Pixel non détecté** → Vider le cache du navigateur  
**Événements non trackés** → Vérifier la console (F12)  
**CPL trop élevé** → Réduire l'audience ou améliorer le créatif  
**Pas de conversions** → Vérifier le formulaire et l'offre

---

## 🎉 **Prochaine Étape**

➡️ **DÉPLOYER LE SITE** (5 minutes)  
➡️ **TESTER AVEC PIXEL HELPER** (5 minutes)  
➡️ **CRÉER 3 AUDIENCES** (10 minutes)  
➡️ **LANCER PREMIÈRE CAMPAGNE** (15 minutes)  

**Objectif 7 jours** : 2-4 nouveaux leads  
**Objectif 30 jours** : 4-8 nouveaux clients  
**Objectif 90 jours** : ROI 500-900% 🚀

---

**Date** : 6 janvier 2026  
**Statut** : ✅ **PRÊT À LANCER**  
**Support** : Documentation complète disponible

© 2026 SabyDigital — Facebook Pixel pour artisans IDF
