// Contenu en français et en anglais
const translations = {
    fr: {
        title: "Bienvenue chez Aliance",
        description: "Aliance supervise des projets innovants et soutient des initiatives à impact positif.",
        footer: "Tous droits réservés."
    },
    en: {
        title: "Welcome to Aliance",
        description: "Aliance oversees innovative projects and supports impactful initiatives.",
        footer: "All rights reserved."
    }
};

// Initialisation de la langue actuelle
let currentLanguage = "fr";

// Sélectionner les éléments à traduire
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const footerElement = document.querySelector(".footer p");
const langToggleButton = document.getElementById("lang-toggle");

// Fonction pour traduire le contenu
function translateContent() {
    if (currentLanguage === "fr") {
        // Passer en anglais
        titleElement.textContent = translations.en.title;
        descriptionElement.textContent = translations.en.description;
        footerElement.textContent = translations.en.footer;
        langToggleButton.textContent = "FR"; // Changer le bouton en "FR"
        currentLanguage = "en";
    } else {
        // Revenir en français
        titleElement.textContent = translations.fr.title;
        descriptionElement.textContent = translations.fr.description;
        footerElement.textContent = translations.fr.footer;
        langToggleButton.textContent = "EN"; // Changer le bouton en "EN"
        currentLanguage = "fr";
    }
}

// Ajouter un événement au clic sur le bouton de langue
langToggleButton.addEventListener("click", translateContent);
