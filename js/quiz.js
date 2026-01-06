/**
 * Quiz Digital - SabyDigital
 * Quiz interactif pour évaluer les besoins digitaux
 */

// ====================================
// QUESTIONS DU QUIZ
// ====================================

const quizQuestions = [
    {
        id: 1,
        icon: 'fas fa-building',
        question: "Quel est le type de votre entreprise ?",
        description: "Cela nous aide à mieux comprendre vos besoins",
        answers: [
            { text: "Commerce Local", subtitle: "Restaurant, boutique, salon...", value: "commerce", icon: "fas fa-store" },
            { text: "Artisan / Indépendant", subtitle: "Plombier, électricien, freelance...", value: "artisan", icon: "fas fa-hammer" },
            { text: "Profession Libérale", subtitle: "Avocat, médecin, coach...", value: "liberal", icon: "fas fa-user-tie" },
            { text: "E-commerce", subtitle: "Vente en ligne de produits", value: "ecommerce", icon: "fas fa-shopping-cart" }
        ]
    },
    {
        id: 2,
        icon: 'fas fa-laptop',
        question: "Avez-vous déjà un site web ?",
        description: "État actuel de votre présence en ligne",
        answers: [
            { text: "Aucun site", subtitle: "Je pars de zéro", value: "none", points: 10, icon: "fas fa-times-circle" },
            { text: "Site obsolète", subtitle: "Plus de 3 ans, non responsive", value: "old", points: 8, icon: "fas fa-exclamation-triangle" },
            { text: "Site correct", subtitle: "Fonctionnel mais basique", value: "ok", points: 5, icon: "fas fa-check-circle" },
            { text: "Site moderne", subtitle: "Récent et professionnel", value: "modern", points: 2, icon: "fas fa-star" }
        ]
    },
    {
        id: 3,
        icon: 'fas fa-bullseye',
        question: "Quel est votre objectif principal ?",
        description: "Ce que vous voulez accomplir en priorité",
        answers: [
            { text: "Être visible en ligne", subtitle: "Apparaître sur Google rapidement", value: "visibility", solution: "site-ia-seo", icon: "fas fa-search" },
            { text: "Générer des leads", subtitle: "Obtenir des contacts qualifiés", value: "leads", solution: "site-ia-pack", icon: "fas fa-users" },
            { text: "Vendre en ligne", subtitle: "E-commerce créé par IA", value: "sell", solution: "ecommerce-ia", icon: "fas fa-shopping-bag" },
            { text: "Lancer rapidement", subtitle: "Site pro en moins de 7 jours", value: "speed", solution: "site-ia-express", icon: "fas fa-rocket" }
        ]
    },
    {
        id: 4,
        icon: 'fas fa-share-alt',
        question: "Quelle est votre activité sur les réseaux sociaux ?",
        description: "Instagram, Facebook, LinkedIn...",
        answers: [
            { text: "Aucune présence", subtitle: "Pas de compte actif", value: "none", points: 10, icon: "fas fa-ban" },
            { text: "Présence minimale", subtitle: "Compte créé mais inactif", value: "minimal", points: 8, icon: "fas fa-battery-quarter" },
            { text: "Activité irrégulière", subtitle: "Je poste de temps en temps", value: "irregular", points: 5, icon: "fas fa-battery-half" },
            { text: "Très actif", subtitle: "Plusieurs posts par semaine", value: "active", points: 2, icon: "fas fa-fire" }
        ]
    },
    {
        id: 5,
        icon: 'fas fa-euro-sign',
        question: "Quel est votre budget mensuel marketing digital ?",
        description: "Investissement que vous pouvez allouer",
        answers: [
            { text: "Moins de 300€/mois", subtitle: "Budget serré", value: "low", icon: "fas fa-wallet" },
            { text: "300€ - 800€/mois", subtitle: "Budget modéré", value: "medium", icon: "fas fa-money-bill-wave" },
            { text: "800€ - 2000€/mois", subtitle: "Budget confortable", value: "good", icon: "fas fa-dollar-sign" },
            { text: "Plus de 2000€/mois", subtitle: "Budget large", value: "high", icon: "fas fa-gem" }
        ]
    },
    {
        id: 6,
        icon: 'fas fa-clock',
        question: "Dans combien de temps voulez-vous démarrer ?",
        description: "Urgence de votre projet",
        answers: [
            { text: "Dès que possible", subtitle: "C'est urgent !", value: "asap", points: 10, icon: "fas fa-bolt" },
            { text: "Dans les 2-4 semaines", subtitle: "Assez rapidement", value: "soon", points: 7, icon: "fas fa-calendar-check" },
            { text: "Dans 1-2 mois", subtitle: "Pas pressé", value: "later", points: 4, icon: "fas fa-calendar" },
            { text: "Je me renseigne", subtitle: "Phase de réflexion", value: "research", points: 2, icon: "fas fa-question-circle" }
        ]
    },
    {
        id: 7,
        icon: 'fas fa-clock',
        question: "Quelle est votre priorité ?",
        description: "Ce qui compte le plus pour vous",
        answers: [
            { text: "Rapidité", subtitle: "Je veux un site en moins de 7 jours", value: "speed", points: 10, icon: "fas fa-bolt" },
            { text: "Prix", subtitle: "Budget serré, besoin d'une solution abordable", value: "price", points: 5, icon: "fas fa-euro-sign" },
            { text: "SEO", subtitle: "Être visible sur Google dès le départ", value: "seo", points: 8, icon: "fas fa-search" },
            { text: "Évolutivité", subtitle: "Pouvoir faire évoluer facilement mon site", value: "evolution", points: 7, icon: "fas fa-chart-line" }
        ]
    },
    {
        id: 8,
        icon: 'fas fa-robot',
        question: "Que pensez-vous de l'Intelligence Artificielle ?",
        description: "Votre vision de l'IA dans le web",
        answers: [
            { text: "Je suis enthousiaste !", subtitle: "Curieux d'essayer l'IA pour mon site", value: "enthusiast", points: 10, icon: "fas fa-smile-beam" },
            { text: "Intéressé mais prudent", subtitle: "Je veux comprendre comment ça marche", value: "curious", points: 7, icon: "fas fa-lightbulb" },
            { text: "Sceptique", subtitle: "Je préfère les méthodes traditionnelles", value: "skeptical", points: 3, icon: "fas fa-meh" },
            { text: "Je ne connais pas", subtitle: "C'est nouveau pour moi", value: "unknown", points: 5, icon: "fas fa-question-circle" }
        ]
    }
];

// ====================================
// PROFILS DE RÉSULTATS
// ====================================

const resultProfiles = {
    beginner: {
        title: "Débutant Digital - Parfait pour l'IA !",
        badge: "Idéal pour un Site IA Express",
        minScore: 0,
        maxScore: 40,
        description: "Vous démarrez votre aventure digitale ! C'est le moment idéal pour créer votre site professionnel avec l'IA. Rapide, abordable et SEO optimisé dès le départ.",
        recommendations: [
            { title: "Site Vitrine IA + SEO", icon: "fas fa-rocket", description: "Site 5-7 pages créé par IA en 3-7 jours", price: "890€", priority: true, link: "index.html#services" },
            { title: "Fiche Google My Business", icon: "fas fa-map-marker-alt", description: "Visibilité locale gratuite (je vous aide)", price: "Gratuit", priority: true },
            { title: "Maintenance 30 jours", icon: "fas fa-shield-alt", description: "Support gratuit inclus après livraison", price: "Inclus", priority: false }
        ]
    },
    intermediate: {
        title: "Actif Digital - Prêt pour l'IA Pro",
        badge: "Pack Croissance IA Recommandé",
        minScore: 41,
        maxScore: 70,
        description: "Vous avez une présence en ligne mais elle n'est pas optimisée. Un site créé par IA + SEO continu vous propulsera au niveau supérieur. Résultats rapides garantis.",
        recommendations: [
            { title: "Pack Croissance IA", icon: "fas fa-chart-line", description: "Site IA + 4 articles SEO/mois", price: "1 890€ + 390€/mois", priority: true, link: "index.html#services" },
            { title: "Site E-commerce IA", icon: "fas fa-shopping-cart", description: "Boutique en ligne créée par IA (jusqu'à 50 produits)", price: "1 490€", priority: true, link: "index.html#services" },
            { title: "SEO Continu IA", icon: "fas fa-search", description: "Génération de contenu SEO automatisée", price: "290€/mois", priority: true, link: "index.html#services" },
            { title: "Maintenance Premium", icon: "fas fa-tools", description: "Mises à jour illimitées", price: "149€/mois", priority: false }
        ]
    },
    advanced: {
        title: "Expert Digital - Exploitez l'IA au Maximum",
        badge: "Stratégie IA Avancée",
        minScore: 71,
        maxScore: 100,
        description: "Vous maîtrisez le digital ! Utilisez l'IA pour scaler rapidement : sites multiples, génération de contenu automatisée, stratégie SEO agressive. ROI maximisé.",
        recommendations: [
            { title: "Multi-Sites IA", icon: "fas fa-globe", description: "Plusieurs sites créés par IA pour différents marchés", price: "Sur devis", priority: true },
            { title: "Génération Contenu IA", icon: "fas fa-pen-fancy", description: "Articles de blog SEO automatisés (8-12/mois)", price: "390€/mois", priority: true, link: "index.html#services" },
            { title: "Stratégie SEO IA", icon: "fas fa-rocket", description: "Plan de domination SEO avec IA", price: "Sur devis", priority: true, link: "index.html#services" },
            { title: "Accompagnement Premium", icon: "fas fa-user-tie", description: "Conseil stratégique mensuel", price: "249€/mois", priority: false }
        ]
    }
};

// ====================================
// ÉTAT DU QUIZ
// ====================================

let currentQuestionIndex = 0;
let userAnswers = [];
let totalScore = 0;

// ====================================
// INITIALISATION
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('startQuizBtn');
    const retakeBtn = document.getElementById('retakeQuizBtn');
    const emailForm = document.getElementById('emailCaptureForm');
    
    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
    }
    
    if (retakeBtn) {
        retakeBtn.addEventListener('click', resetQuiz);
    }
    
    if (emailForm) {
        emailForm.addEventListener('submit', handleEmailSubmit);
    }
});

// ====================================
// FONCTIONS DU QUIZ
// ====================================

function startQuiz() {
    document.getElementById('quizIntro').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    currentQuestionIndex = 0;
    userAnswers = [];
    totalScore = 0;
    
    showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
    const question = quizQuestions[index];
    
    // Update progress
    const progress = ((index + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = index + 1;
    document.getElementById('totalQuestions').textContent = quizQuestions.length;
    
    // Update question content
    document.querySelector('.question-icon i').className = question.icon;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('questionDescription').textContent = question.description;
    
    // Generate answers
    const answersGrid = document.getElementById('answersGrid');
    answersGrid.innerHTML = '';
    
    question.answers.forEach((answer, answerIndex) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.innerHTML = `
            <div class="answer-icon">
                <i class="${answer.icon}"></i>
            </div>
            <div class="answer-text">
                <strong>${answer.text}</strong>
                <span>${answer.subtitle}</span>
            </div>
        `;
        
        answerDiv.addEventListener('click', () => selectAnswer(index, answerIndex, answer));
        answersGrid.appendChild(answerDiv);
    });
    
    // Show/hide prev button
    const prevBtn = document.getElementById('prevBtn');
    if (index > 0) {
        prevBtn.style.display = 'inline-flex';
        prevBtn.onclick = () => showQuestion(index - 1);
    } else {
        prevBtn.style.display = 'none';
    }
}

function selectAnswer(questionIndex, answerIndex, answer) {
    // Save answer
    userAnswers[questionIndex] = answer;
    
    // Add score if present
    if (answer.points) {
        totalScore += answer.points;
    }
    
    // Visual feedback
    const options = document.querySelectorAll('.answer-option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[answerIndex].classList.add('selected');
    
    // Auto-advance after 0.5s
    setTimeout(() => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    }, 500);
}

function showResults() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    // Calculate final score (0-100)
    const maxPossibleScore = quizQuestions.reduce((sum, q) => {
        const maxPoints = Math.max(...q.answers.filter(a => a.points).map(a => a.points || 0));
        return sum + maxPoints;
    }, 0);
    
    const finalScore = Math.round((totalScore / maxPossibleScore) * 100);
    
    // Determine profile
    let profile;
    for (const key in resultProfiles) {
        const p = resultProfiles[key];
        if (finalScore >= p.minScore && finalScore <= p.maxScore) {
            profile = p;
            break;
        }
    }
    
    // Display results
    document.getElementById('resultsTitle').textContent = profile.title;
    document.getElementById('resultsDescription').textContent = profile.description;
    
    // Animate score
    animateScore(finalScore);
    
    // Display recommendations
    displayRecommendations(profile.recommendations);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function animateScore(targetScore) {
    const scoreElement = document.getElementById('scoreNumber');
    const scoreCircle = document.getElementById('scoreCircle');
    
    const circumference = 2 * Math.PI * 90; // radius = 90
    const offset = circumference - (targetScore / 100) * circumference;
    
    let currentScore = 0;
    const duration = 1500;
    const increment = targetScore / (duration / 16);
    
    const timer = setInterval(() => {
        currentScore += increment;
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(timer);
        }
        
        scoreElement.textContent = Math.round(currentScore);
        scoreCircle.style.strokeDashoffset = circumference - (currentScore / 100) * circumference;
    }, 16);
}

function displayRecommendations(recommendations) {
    const grid = document.getElementById('recommendationsGrid');
    grid.innerHTML = '';
    
    recommendations.forEach(rec => {
        const card = document.createElement('div');
        card.className = 'recommendation-card' + (rec.priority ? ' priority' : '');
        
        const link = rec.link ? `onclick="window.location.href='${rec.link}'"` : '';
        const clickable = rec.link ? 'style="cursor: pointer;"' : '';
        
        card.innerHTML = `
            <i class="${rec.icon}"></i>
            <h4>${rec.title}</h4>
            <p>${rec.description}</p>
            <div class="price">${rec.price}</div>
            ${rec.priority ? '<span style="font-size: 0.875rem; color: #3b82f6; font-weight: 600;">⭐ Recommandé</span>' : ''}
        `;
        
        if (rec.link) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => window.location.href = rec.link);
        }
        
        grid.appendChild(card);
    });
}

function resetQuiz() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizIntro').style.display = 'grid';
    
    currentQuestionIndex = 0;
    userAnswers = [];
    totalScore = 0;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleEmailSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    
    // Hide form, show success message
    document.getElementById('emailCaptureForm').style.display = 'none';
    document.getElementById('formSuccessMessage').style.display = 'block';
    
    // Here you would normally send the data to your backend
    console.log('Quiz completed:', {
        name,
        email,
        score: totalScore,
        answers: userAnswers
    });
    
    // TODO: Send data to your backend or email service
    // Example: fetch('/api/quiz-results', { method: 'POST', body: JSON.stringify(data) });
}
