# 🤖 GÉNÉRATEUR DE PROMPT AUTOMATIQUE

**Instructions** : Une fois que vous m'avez envoyé vos réponses au questionnaire, je génère automatiquement le prompt parfait en suivant ce modèle :

---

## 📝 **TEMPLATE DE GÉNÉRATION (Pour l'IA)**

```markdown
# CRÉATION SITE WEB PROFESSIONNEL - [RÉPONSE Q1]

## 1. CONTEXTE & POSITIONNEMENT

**Entreprise** : [Q1]  
**Contact** : [Q2]  
**Activité** : [Q3]  
**Cible** : [Q4]  
**Zone** : [Q5]  
**Coordonnées** :
- Email : [Q6 email]
- Téléphone : [Q6 téléphone]
- Adresse : [Q6 adresse]

**Positionnement unique** : [Q7]  
**Slogan** : [Q8]  
**Proposition de valeur** : [Q9]  

**Ton** : [Q36] (ex: "je" si solo, "nous" si équipe)

---

## 2. TYPE DE SITE & OBJECTIF

**Type** : [Q10]  
**Objectif principal** : [Q11]

---

## 3. STRUCTURE COMPLÈTE DU SITE

**Pages à créer** :
[Liste basée sur Q12]

**Sections page principale (index.html)** :

### Section 1 : Hero
- Titre H1 : [Q19]
- Sous-titre : [Q20]
- CTAs : [Q22 CTA1] + [Q22 CTA2]
- Image hero : [Q27 - Unsplash avec mots-clés ou fournie]
- [Ajouter stats/badges si pertinent selon Q10]

### Section 2 : Services/Offres
Titre : "Mes Services" ou "Nos Offres"

**[Q13 - Nombre d'offres]** offres en cartes :

1. **[Q13 Service 1 nom]** - [Q13 Service 1 prix]
   - Description : [Q13 Service 1 description]
   - CTA : [Q22 CTA1]

2. **[Q13 Service 2 nom]** - [Q13 Service 2 prix]
   - Description : [Q13 Service 2 description]
   - CTA : [Q22 CTA1]

[Répéter pour chaque service listé en Q13]

### Section 3 : Portfolio/Réalisations [SI COCHÉ EN Q12]
- Nombre de projets : [Q12 Portfolio combien]
- Structure : Grille avec images + descriptions courtes
- Images : [Q27]

### Section 4 : Témoignages [SI COCHÉ EN Q12]
- Nombre : [Q12 Témoignages combien]
- Format : Cartes avec citation + nom + note ⭐

### Section 5 : À Propos [SI COCHÉ EN Q12]
- Texte : [Q21]
- Image : [Q27]
- [Équipe si Q12 Équipe coché]

### Section 6 : FAQ [SI COCHÉ EN Q12]
- Nombre de questions : [Q12 FAQ combien]
- Format : Accordéon avec icône chevron

### Section 7 : Contact [SI COCHÉ EN Q12]
**Formulaire** avec champs :
[Liste basée sur Q23 Formulaire]

**Coordonnées affichées** :
- Email : [Q6 email]
- Téléphone : [Q6 téléphone]
- Adresse : [Q6 adresse]

[Google Maps si Q23 coché avec adresse]

---

## 4. PAGES SECONDAIRES

[Créer sections pour chaque page cochée en Q12]

**Pages légales** :
- [mentions-legales.html si Q33 RGPD coché]
- [politique-confidentialite.html si Q33 RGPD coché]
- [cgv.html si Q34 CGV coché]

**Quiz interactif** [SI Q23 QUIZ COCHÉ] :
- Nombre de questions : [Q23 Quiz combien]
- [Définir questions basées sur Q3 activité et Q11 objectif]

---

## 5. DESIGN & IDENTITÉ VISUELLE

### Logo
[SI Q14 = Oui avec URL] :
- URL : [Q14 URL]
- Utilisation : Header (50px) + Footer (60px) + Favicon
- Texte à côté : [Q1 nom]

[SI Q14 = Non] :
- Créer logo texte "[Q1]" avec style [Q16]

### Couleurs
```css
Couleur principale : [Q15 couleur principale]
Couleur secondaire : [Q15 couleur secondaire]
Couleur fond : [Q15 couleur fond]
Noir/Gris foncé : Pour titres et texte
Blanc : Pour fonds clairs
```

### Style visuel
[Q16 - Liste des styles cochés]

Inspiration : [Q17 URLs]

### Typographie
[SI Q18 = Choix IA] :
- Titres : Inter ou Poppins, font-weight 700
- Corps : Inter, font-weight 400

[SI Q18 = Police spécifique] :
- Polices : [Q18 police]

---

## 6. FONCTIONNALITÉS & WIDGETS

[Générer liste basée sur Q23]

**Widgets intégrés** :

[SI WhatsApp coché] :
- Widget WhatsApp (sticky bottom-right)
- Numéro : [Q23 WhatsApp numéro]
- Message pré-rempli : "Bonjour, je souhaite [Q11 objectif]. Pouvez-vous m'aider ?"
- Couleur : [Q15 couleur principale]

[SI Google Maps coché] :
- Google Maps intégré
- Adresse : [Q23 Google Maps adresse]

[SI Calendrier coché] :
- Calendrier de réservation
- Type : [Q23 Calendrier]

[TOUJOURS] :
- CTA Flottant (apparaît après 800px scroll)
  * Texte : [Q22 CTA1]
  * Couleur : [Q15 couleur principale]
  * Lien : #contact

- Scroll to Top (apparaît après 500px scroll)
  * Position : Bottom-right
  * Couleur : [Q15 couleur principale]

- Menu Hamburger Mobile
  * Animation smooth
  * Overlay fond semi-transparent

**Réseaux sociaux** [SI Q23 RÉSEAUX SOCIAUX COCHÉ] :
- Plateformes : [Q23 lesquels]
- Position : Footer
- Style : Icônes rondes avec [Q15 couleur principale]

---

## 7. E-COMMERCE [SI Q10 = C]

**Catalogue** :
- Nombre de produits initiaux : [Q23 E-commerce combien]
- Structure : Grille produits avec filtres
- Fiche produit : Image + Description + Prix + Ajout panier

**Panier & Checkout** :
- Panier récapitulatif
- Formulaire livraison
- Paiement : [Q23 E-commerce paiement]

**Gestion** :
- [Stock si Q23 coché]
- [Codes promo si Q23 coché]

---

## 8. BLOG [SI Q12 OU Q23 BLOG COCHÉ]

**Structure blog** :
- Page liste articles avec filtres/catégories
- Pages articles individuelles
- Nombre d'articles initiaux : [Q23 Blog combien]
- Format : Titre + Image + Texte + Auteur + Date

---

## 9. SEO & PERFORMANCES

### Balises meta
```html
<title>[Q24]</title>
<meta name="description" content="[Q25]">
<meta name="keywords" content="[Q26]">
<meta name="author" content="[Q2]">
```

### Structure SEO
- H1 unique : [Q19]
- Hiérarchie H2/H3 correcte
- Alt-text sur toutes images : [Générer selon contexte Q3]
- Sitemap.xml généré
- Robots.txt

### Performances
- Images lazy loading
- CSS/JS minifiés
- Code HTML sémantique
- [Q29 Mobile-first/Desktop-first]

---

## 10. RESPONSIVE

### Breakpoints
[SI Q30 = Standard] :
```css
Mobile : < 768px
Tablette : 768-1024px
Desktop : > 1024px
```

[SI Q30 = Autre] :
[Q30 breakpoints personnalisés]

### Adaptations
- Menu hamburger mobile
- Grilles adaptatives (3→2→1 colonnes)
- Boutons touch-friendly (44px min)
- Images responsive
- Textes tailles adaptées

Priorité : [Q29]

---

## 11. BIBLIOTHÈQUES & TECHNOLOGIES

### CSS
[SI Q31 = Tailwind] :
- Framework : Tailwind CSS via CDN

[SI Q31 = Bootstrap] :
- Framework : Bootstrap 5 via CDN

[SI Q31 = CSS pur] :
- CSS pur avec Flexbox et Grid
- Variables CSS pour couleurs et espacements

### JavaScript
- Vanilla JS (pas de jQuery)
- Fonctions : Menu toggle, Scroll smooth, Accordéon, [Autres selon Q23]

### CDN à utiliser
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=[Q18 ou Inter]:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

[SI Q31 Font Awesome coché] :
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">

[SI Q31 AOS coché] :
<!-- AOS Animations -->
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
```

### Analytics
[SI Q32 = Google Analytics] :
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=[Q32 ID ou G-XXXXXXXXXX]"></script>
```

---

## 12. IMAGES & MÉDIAS

[SI Q27 = Unsplash] :
**Mots-clés Unsplash** :
- Hero : [Q27 mots-clés]
- Services : [Générer selon Q13]
- Portfolio : [Générer selon Q12]
- À propos : [Générer selon Q21]

[SI Q27 = Propres images] :
- Images fournies par le client (à intégrer)

[SI Q28 = Oui vidéo] :
**Vidéo intégrée** :
- URL : [Q28 URL]
- Position : [Hero ou section spécifique]

---

## 13. CONFORMITÉ & LÉGAL

[SI Q33 = RGPD Oui] :
**Pages légales** :
- mentions-legales.html avec :
  * Raison sociale : [Q1]
  * Responsable : [Q2]
  * SIRET : [À compléter]
  * Email : [Q6 email]
  * Hébergeur : [À compléter]
  
- politique-confidentialite.html conforme RGPD avec :
  * Collecte données (formulaire, navigation)
  * Utilisation données
  * Conservation données
  * Droits utilisateurs
  * Ton : [Q36]

[SI Q34 = CGV Oui] :
- cgv.html avec conditions générales de vente

[SI Q35 = Cookies Oui] :
- Bandeau cookies RGPD en bas de page
- Lien vers politique confidentialité

---

## 14. STRUCTURE FICHIERS

```
[Q1-nom-minuscules]/
├── index.html
[SI Q12 pages cochées] :
├── [nom-page].html
├── quiz.html [si Q23]
├── mentions-legales.html [si Q33]
├── politique-confidentialite.html [si Q33]
├── cgv.html [si Q34]
├── css/
│   ├── style.css
│   ├── [autres selon besoins]
├── js/
│   ├── main.js
│   ├── [quiz.js si Q23 quiz]
└── images/
    ├── logo.[extension] [si Q14]
    ├── [images Unsplash ou fournies]
```

---

## 15. CONTENU ADDITIONNEL

**Informations supplémentaires** : [Q40]

---

## 16. CONSIGNES IMPORTANTES

1. ✅ Ton **[Q36]** partout dans les textes
2. ✅ Style **[Q37]** dans la rédaction
3. ✅ Couleurs **[Q15]** respectées strictement
4. ✅ Logo **[Q14]** intégré header + footer + favicon
5. ✅ Responsive **[Q29]** prioritaire
6. ✅ SEO complet avec balises **[Q24, Q25, Q26]**
7. ✅ Fonctionnalités **[Q23]** toutes intégrées
8. ✅ RGPD **[Q33]** conforme si requis
9. ✅ Images **[Q27]** selon source choisie
10. ✅ Performances optimisées (lazy loading, minification)

---

## 17. LIVRABLES ATTENDUS

Créer en 1 fois :
- ✅ Toutes les pages HTML listées
- ✅ Tous les fichiers CSS nécessaires
- ✅ Tous les fichiers JS nécessaires
- ✅ Logo intégré (si fourni)
- ✅ README.md avec documentation

---

## 18. CHECKLIST VALIDATION

Avant de livrer, vérifier :
- □ Logo intégré partout [si Q14]
- □ Couleurs [Q15] respectées
- □ Ton [Q36] cohérent
- □ Structure [Q12] complète
- □ Services [Q13] tous listés
- □ Fonctionnalités [Q23] opérationnelles
- □ Formulaire contact fonctionne
- □ Widgets [Q23] visibles
- □ Menu mobile OK
- □ 100% responsive [Q29]
- □ SEO balises [Q24-Q26] complètes
- □ Pages légales [Q33] si RGPD

---

**Crée le site complet avec TOUTES ces spécifications en respectant chaque détail.**
```

---

## 🎯 **EXEMPLE D'UTILISATION**

### **Vous m'envoyez** :
```
Q1: MonEntreprise
Q2: Jean Dupont
Q3: Plomberie et dépannage urgent
Q4: Particuliers 30-60 ans, propriétaires, zone urbaine
...
[Toutes vos réponses]
```

### **Je génère automatiquement** :
```markdown
# CRÉATION SITE WEB - MONENTREPRISE

## 1. CONTEXTE
Entreprise : MonEntreprise
Contact : Jean Dupont
Activité : Plomberie et dépannage urgent
...

[Prompt complet de 300-500 lignes]
```

### **Vous copiez/collez ce prompt → 1 interaction = Site complet !** ✅

---

## 🚀 **PROCHAINE ÉTAPE**

**Envoyez-moi vos réponses au questionnaire** et je génère le prompt parfait immédiatement ! 😊

**Format recommandé** :
```
Q1: [Réponse]
Q2: [Réponse]
Q3: [Réponse]
...
Q40: [Réponse]
```

**Ou simplement** : Copiez le questionnaire, remplissez-le et renvoyez-le moi !

**Je suis prêt à générer votre prompt optimisé ! 🎯**
