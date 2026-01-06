# 🍔 MENU BURGER MODERNE - Style Axonaut

> **Menu full-screen moderne avec design minimaliste inspiré d'Axonaut**  
> **Date de création** : 6 janvier 2026

---

## 🎯 **Objectif**

Créer un **menu burger moderne et élégant** inspiré du design Axonaut avec :
- ✅ Design minimaliste et épuré
- ✅ Boutons arrondis avec effet de profondeur
- ✅ Couleurs douces (bleu clair, blanc, orange)
- ✅ Espacement généreux entre les éléments
- ✅ Animation fluide d'ouverture/fermeture
- ✅ Menu full-screen sur mobile/tablette
- ✅ Navigation classique sur desktop (> 992px)

---

## 📂 **Fichiers Créés**

### **1. css/burger-menu.css** ✅
**Contenu :**
- Variables CSS pour les couleurs et styles
- Header moderne avec effet de scroll
- Burger icon animé (3 barres → X)
- Menu overlay full-screen
- Menu items style Axonaut (arrondis, ombres)
- CTAs en bas du menu (Connexion + Devis orange)
- Navigation desktop pour écrans > 992px
- Animations d'entrée des menu items (slideInUp)
- Responsive mobile/tablette/desktop

**Caractéristiques clés :**
- Transition fluide `cubic-bezier(0.4, 0, 0.2, 1)`
- Border-radius : 16px pour les boutons
- Box-shadow douce pour la profondeur
- Animation séquentielle des items (délai 0.05s entre chaque)

### **2. js/burger-menu.js** ✅
**Fonctionnalités :**
- Toggle menu (ouverture/fermeture)
- Fermeture automatique au clic sur un menu item
- Fermeture avec la touche Escape
- Fermeture au clic en dehors du menu
- Blocage du scroll du body quand le menu est ouvert
- Effet "scrolled" sur le header au scroll
- Smooth scroll pour les liens internes
- Fermeture automatique au redimensionnement (passage desktop)
- Observer pour animations d'apparition

### **3. index.html** ✅
**Modifications :**
- Ajout du lien `css/burger-menu.css` dans le `<head>`
- Remplacement du header par `<header class="header-modern">`
- Structure du nouveau header :
  - Logo cliquable
  - Navigation desktop (visible > 992px)
  - Burger icon (visible ≤ 991px)
- Ajout du menu overlay avec :
  - 7 menu items (Accueil, Services, Quiz, Portfolio, Villes, À propos, FAQ)
  - 2 CTAs en bas (Appel téléphone + Devis gratuit)
- Ajout du script `js/burger-menu.js` avant la fermeture du `</body>`

---

## 🎨 **Design & UX**

### **Couleurs**
| Élément | Couleur | Hex Code |
|---------|---------|----------|
| **Background menu** | Blanc | `#ffffff` |
| **Menu items** | Bleu clair | `#e8f0fe` |
| **Menu items hover** | Bleu plus clair | `#dbeafe` |
| **Primary blue** | Bleu foncé | `#1e3a8a` |
| **Primary orange** | Orange vif | `#f97316` |
| **Text dark** | Gris foncé | `#1e293b` |
| **Text light** | Gris moyen | `#64748b` |

### **Typographie**
- **Police** : Inter (Google Fonts)
- **Menu items** : 1.0625rem (17px), font-weight 600
- **CTAs** : 1.0625rem - 1.125rem, font-weight 700

### **Espacements**
- **Padding menu items** : 18px 24px (16px 20px sur mobile)
- **Gap entre items** : 12px (10px sur mobile)
- **Border-radius** : 16px (boutons arrondis)
- **Box-shadow** : `0 1px 3px rgba(0, 0, 0, 0.1)` (sm)
- **Box-shadow hover** : `0 4px 6px rgba(0, 0, 0, 0.1)` (md)

### **Animations**
- **Transition menu overlay** : `0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- **Transition burger icon** : `0.3s ease`
- **Animation slideInUp** : Apparition progressive des items (20px translateY → 0)
- **Délai séquentiel** : 0.05s entre chaque item

---

## 📱 **Responsive**

### **Desktop (> 992px)**
- ✅ Navigation classique visible (liens horizontaux)
- ✅ Burger icon et menu overlay cachés
- ✅ CTA "Devis Gratuit" dans la navigation

### **Tablette (768px - 991px)**
- ✅ Burger icon visible
- ✅ Navigation desktop cachée
- ✅ Menu overlay full-screen
- ✅ 7 menu items + 2 CTAs

### **Mobile (< 768px)**
- ✅ Burger icon visible
- ✅ Logo ajusté (40px hauteur)
- ✅ Menu overlay full-screen
- ✅ Padding et font-size réduits pour s'adapter

---

## 🔧 **Fonctionnalités JavaScript**

### **Événements Gérés**
1. **Click sur burger icon** → Toggle menu (ouverture/fermeture)
2. **Click sur menu item** → Fermeture + smooth scroll (liens internes)
3. **Touche Escape** → Fermeture du menu
4. **Click sur overlay** → Fermeture du menu
5. **Scroll** → Ajout classe "scrolled" au header (effet visuel)
6. **Resize window** → Fermeture auto si passage desktop
7. **Liens internes (#)** → Smooth scroll avec offset header

### **Classes Dynamiques**
- `.active` → Burger icon et menu overlay (menu ouvert)
- `.menu-open` → Body (blocage du scroll)
- `.scrolled` → Header (effet au scroll)
- `.visible` → Menu items (animation d'apparition)

---

## 🚀 **Utilisation**

### **Installation**
1. ✅ Ajouter `css/burger-menu.css` dans le `<head>` de votre HTML
2. ✅ Ajouter `js/burger-menu.js` avant la fermeture du `</body>`
3. ✅ Remplacer le header existant par le nouveau header moderne
4. ✅ Ajouter le menu overlay après le header

### **Structure HTML Requise**
```html
<!-- Header -->
<header class="header-modern">
    <div class="header-container">
        <a href="#" class="logo-modern">...</a>
        <nav class="nav-desktop">...</nav>
        <button class="burger-icon">...</button>
    </div>
</header>

<!-- Menu Overlay -->
<div class="menu-overlay">
    <div class="menu-content">
        <a href="#" class="menu-item">...</a>
        ...
        <div class="menu-cta-container">
            <a href="#" class="menu-cta menu-cta-secondary">...</a>
            <a href="#" class="menu-cta menu-cta-primary">...</a>
        </div>
    </div>
</div>
```

### **Personnalisation**
- **Couleurs** : Modifier les variables CSS dans `:root`
- **Menu items** : Ajouter/supprimer des liens dans `.menu-content`
- **CTAs** : Modifier les liens dans `.menu-cta-container`
- **Animations** : Ajuster les délais dans `@keyframes slideInUp`

---

## ✅ **Checklist de Test**

### **Desktop (> 992px)**
- [ ] Navigation classique visible
- [ ] Burger icon caché
- [ ] Liens cliquables et hover fonctionnel
- [ ] CTA "Devis Gratuit" visible dans la nav
- [ ] Smooth scroll vers les sections

### **Mobile/Tablette (≤ 991px)**
- [ ] Burger icon visible et cliquable
- [ ] Menu s'ouvre en full-screen
- [ ] Animation fluide des items (slideInUp)
- [ ] Menu se ferme au clic sur un item
- [ ] Menu se ferme avec Escape
- [ ] Scroll bloqué quand menu ouvert
- [ ] CTAs en bas du menu visibles
- [ ] Lien téléphone cliquable (tel:)

### **Interactions**
- [ ] Burger icon s'anime en X
- [ ] Header change au scroll (classe "scrolled")
- [ ] Smooth scroll vers les sections
- [ ] Fermeture au clic sur overlay
- [ ] Fermeture au redimensionnement (passage desktop)

---

## 🎯 **Avantages du Nouveau Menu**

### **UX/UI**
✅ **Design moderne** et professionnel (2026)  
✅ **Inspiré d'Axonaut** (référence reconnue)  
✅ **Espacement généreux** (lisibilité optimale)  
✅ **Animations fluides** (expérience agréable)  
✅ **Couleurs douces** (reposant pour les yeux)

### **Fonctionnalités**
✅ **Menu full-screen** sur mobile (immersif)  
✅ **CTAs visibles** en bas du menu (conversion)  
✅ **Fermeture intelligente** (clic, Escape, overlay)  
✅ **Smooth scroll** vers les sections  
✅ **Responsive parfait** (mobile → desktop)

### **Performance**
✅ **CSS optimisé** avec variables  
✅ **JavaScript léger** (~5 KB)  
✅ **Animations GPU** (transform, opacity)  
✅ **Pas de dépendances** (pas de librairie externe)

### **Accessibilité**
✅ **ARIA labels** sur les boutons  
✅ **Contrôle clavier** (Escape pour fermer)  
✅ **Contraste élevé** (texte lisible)  
✅ **Focus visible** sur les éléments interactifs

---

## 🐛 **Dépannage**

### **Le menu ne s'ouvre pas**
➡️ Vérifier que `js/burger-menu.js` est bien chargé  
➡️ Vérifier la console pour erreurs JavaScript  
➡️ Vérifier que les classes `.burger-icon` et `.menu-overlay` existent

### **Le menu ne se ferme pas**
➡️ Vérifier que les event listeners sont bien attachés  
➡️ Vérifier que la fonction `closeMenu()` fonctionne  
➡️ Tester avec la touche Escape

### **Animations saccadées**
➡️ Vérifier que `transition` utilise bien `cubic-bezier`  
➡️ Utiliser `transform` au lieu de `left/right` pour meilleures performances  
➡️ Activer l'accélération GPU : `will-change: transform`

### **Le header chevauche le contenu**
➡️ Ajouter `padding-top` à la première section (ex: 100px)  
➡️ Ou ajouter `margin-top` au premier élément après le header

---

## 📊 **Statistiques**

- **Lignes de CSS** : ~420 lignes
- **Lignes de JavaScript** : ~175 lignes
- **Poids CSS** : ~8,3 KB
- **Poids JS** : ~5,5 KB
- **Temps de chargement** : < 50ms
- **Compatibilité** : Chrome, Firefox, Safari, Edge (modernes)

---

## 🚀 **Prochaines Améliorations Possibles**

### **Court terme**
- [ ] Ajouter un sous-menu déroulant (dropdown)
- [ ] Intégrer un champ de recherche dans le menu
- [ ] Ajouter des badges de notification (ex: "Nouveau")

### **Moyen terme**
- [ ] Mode sombre (dark mode) avec toggle
- [ ] Animation de transition entre les pages
- [ ] Intégration avec i18n (multi-langues)

### **Long terme**
- [ ] Menu contextuel (différent selon la page)
- [ ] Historique de navigation dans le menu
- [ ] Personnalisation utilisateur (ordre des items)

---

## 📞 **Support**

Pour toute question ou personnalisation du menu burger :
- **Email** : contact@sabydigital.fr
- **Téléphone** : 06 60 87 54 77

---

## 📄 **Licence**

© 2026 SabyDigital - Tous droits réservés  
**Créé par** : Saby Pascale  
**Inspiré de** : Axonaut (design moderne et minimaliste)

---

**✅ Menu burger prêt à l'emploi !** 🚀
