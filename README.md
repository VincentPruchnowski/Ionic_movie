# Ionic_movie

Projet de groupe Ionic_application Olivier / Vincent / Victor / Lucas
Thème général (Application de liste de films)

Création d'un toggle menu avec les quatre pages.
Movies-list (4 pages): 
  - Homepage
  - List films
  - Favoris
  - Contact
  
  Description des pages :
    Homepage: Titre + soustitre + photo + phrase de description + lien(site critique de cinéma)
    List films : 12 films -> 3 icônes: un icône de fenêtre avec les différents paramètres + chevron-> détail du film + icône share
      -> Détail des films: title + author + genre + date + resume
    Favoris : mise en favoris des films sélectionnés (avec photo + titre du film si on en ajoute)
    Contact : Formulaire de contact-> Nom + description + mobile (numéro) + ion-button(submit) -> fenêtre (alert->renvoi le nom) + nombre de caractères utilisé
    
   Détails techniques :
    -> Le responsive fonctionne et s'adapte à tous les types d'écrans.
    
   Objectifs :
    -> Délivrer une application fonctionnelle sur téléphone portable et emulable dans Android studio.
    -> Utiliser le framework Angular avec Ionic et comprendre les mécanismes d'utilisation, notamment la création des pages ainsi que 
    le lien entre les fichiers HTML et ts le tout relié à mon App component.
    -> Ajouter un "Dark thème" ainsi que la personnalisation de certains menu notamment les boutons (voir utilisation du scss).
    -> Utilisation des ion-cards pour générer la structure globale du site.
    -> Utiliser le plugin Capacitor afin d'utiliser une fonction native du téléphone -> Ici le @capacitor/Browser + @capacitor/share
    
    
    Tentatives :
    -> Création d'un Toast afin de générer une notification à l'utilisateur non résolue.
    
