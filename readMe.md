plung ing javascript console util
dans setting :
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,

        on crée un const toto, puis on selection toto , ctrl+shift+l => il ecrit le console log de toto

1/ npm init
2/ nmp i express ou npm installe express
3/ on place en git ignore

4/ const express = require("express"):

dans le packages json:
pour le redemarrage automatique du serveur a chaque changement
-> "scripts": {
"start": "nodemon src/server.ts",
"build": "tsc",
"start:prod": "node dist/server.js"
},
