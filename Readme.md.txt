Pour tester l'application, vous pouvez utiliser le lien de demo ci dessous  
- Créer un compte soit avec google, ou Facebook
-Créer chat.
- Sélection les utilisateur a ajouter dans votre chat.
- Commencer a envoyer et recevoir les messages.
Si vous voulez installer l'application sur votre machine, avec votre propre configuration:
1- cloner le répertoire GitHub ou décompresser le fichier zip
2- installer npm 
3- installer Node
4- installer react
5- Créer votre projet, sur Firebase console
6- Dans le projet installer firebase
$ npx i firebase
7- Copier vos information firebase dans le fichier src/firebase.js 
const config = {
    apiKey: "******************************",
    authDomain: "******************************",
    databaseURL: "******************************",
    projectId: "******************************",
    storageBucket: "******************************",
    messagingSenderId: "******************************"
};
8- Activer l'authentification google et Facebook
9- Approuver les règles de sécurité
10- Executer:
$npm install

$npm start
-------------------------------------------------------------------------------------------------------
Demo: https://talk-io-64fb6.web.app/
GitHub: https://github.com/aissame77/Talk.io.git
