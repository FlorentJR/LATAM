function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      
// NAV
let logo=document.getElementById('logo');
let nomPage=data.journal.nomJournal;

logo.insertAdjacentHTML('beforeend',`<a href="#">
           <img src="images/logo globe.png" alt="Logo FloXplore">
          </a>
           <h2>${nomPage}</h2>`);


// INTRODUCTION
let nomJournal=data.journal.nomJournal;
console.log(nomJournal);
let phraseAccroche = data.journal.phraseAccroche;
console.log(phraseAccroche);
let titreContainer=document.getElementById('titre');
titreContainer.insertAdjacentHTML('beforeend',`<h1>${nomJournal}</h1>
<p>${phraseAccroche}</p>`);

let themeContainer = document.getElementById('themeContainer');
let themes = data.journal.themes;
themes.forEach((theme) => {
  afficherTheme(theme);
});

// NAV

let themeContainerNav = document.getElementById('navThemes');
themes.forEach((theme) => {
  afficherThemeNav(theme, themeContainerNav);
});

// ARTICLE PRINCIPALE

let introImage=document.getElementById('introImage')
let imageArticlePrincipale=data.journal.articlePrincipal.image;

introImage.insertAdjacentHTML('beforeend',`<img src=${imageArticlePrincipale} alt="">`)


let mainArticleContainer=document.getElementById('mainArticleContainer')

let mainArticleName=data.journal.articlePrincipal.titre;
let mainArticleDescription=data.journal.articlePrincipal.description;
let mainArticleDate=data.journal.articlePrincipal.date;
let mainArticleTheme=data.journal.articlePrincipal.theme;
let mainArticleImage=data.journal.articlePrincipal.image;
console.log(mainArticleName, mainArticleDescription,mainArticleDate,mainArticleTheme,mainArticleImage);

mainArticleContainer.insertAdjacentHTML('beforeend',`<h2>${mainArticleName}</h2>
      <h3>${mainArticleTheme} - ${mainArticleDate}</h3>
      <p>${mainArticleDescription}</p>
      <a class="button primary" href="#">Lire l'article</a>
`);


// AUTRES ARTICLES

let autresArticlesContainer=document.getElementById('autresArticlesContainer')

let articles=data.journal.articles;
articles.forEach((article) => {
  afficherArticle(article, autresArticlesContainer);
});

// EQUIPE

let auteursContainer=document.getElementById('auteursContainer')

let auteurs=data.journal.auteurs;
auteurs.forEach((auteur) => {
  afficherAuteur(auteur, auteursContainer);
});

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici


// NAV
function afficherThemeNav(theme, container) {
  let themeTitle = theme.nom;
  let cardTheme = `
<li><a class="link" href="#">${themeTitle}</a></li>
`;
  container.insertAdjacentHTML('beforeend', cardTheme)
};


 
// THEME
 function afficherTheme(theme) {
  let themeTitle = theme.nom;
  let themeDescription = theme.description;
  let cardTheme = `
  <li>
  <div class="themeCard">
  <h2>${themeTitle}</h2>
  <p>${themeDescription}</p>
  </li>
  </div`;
  themeContainer.insertAdjacentHTML('beforeend', cardTheme)
};

// ARTICLES
function afficherArticle(article,container) {
let ArticleName=article.titre;
let ArticleDate=article.date;
let ArticleTheme=article.theme;
let ArticleImage=article.image;
  let cardArticle = `
  <div class="articleContainer">
      <img class="articleImage" src=${ArticleImage} alt="${ArticleName}">
      <div class="articleText">
        <h2>${ArticleName}</h2>
        <h3>${ArticleTheme} - ${ArticleDate}</h3>
        <a class="button primary" href="#">Lire l'article</a>
      </div>
    </div>`;
  container.insertAdjacentHTML('beforeend', cardArticle)
};

// EQUIPE

function afficherAuteur(auteur,container) {
  let auteurName=auteur.prenom
  let auteurImage=auteur.image
  let auteurPresentation=auteur.presentation
  let auteurType=auteur.typeExperience
  let cardAuteur =`
    <div class="auteurCard">
      <img class="avatarAuteur" src=${auteurImage} alt="${auteurName}">
      <h2>${auteurName}</h2>
      <h5>${auteurType}</h5>
      <p>${auteurPresentation}</p>
    </div>
    `
    container.insertAdjacentHTML('beforeend', cardAuteur)
  };

