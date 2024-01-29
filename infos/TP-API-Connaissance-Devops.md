# Le blog du devops

## Présentation

```bash
npx create-next-app@latest --typescript
```

Options lors de l'installation :
- Default 
- Mais pas dans le dossier src
- Ni App router

## Pourquoi utiliser le pages router de NextJS ?

Par rapport au router vu lors du dernier TP sur Next (app router),
le système de création des pages d'API et des pages web est presque équivalent (légèrement plus simple).

Les pages d'API sont dans le dossier `pages/api` et les pages web dans `pages` directement.

Si on créee un fichier `pages/api/hello.ts` avec le contenu suivant :
alors la route `/api/hello` sera disponible.
Mais elle l'est aussi si on crée un dossier `pages/api/hello` avec un fichier `index.ts` dedans.

Si on créee un fichier `pages/hello.tsx` avec le contenu suivant :
alors la route `/hello` sera disponible.
Mais elle l'est aussi si on crée un dossier `pages/hello` avec un fichier `index.tsx` dedans.

Mais ce qui va changer, c'est surtout la gestion des routes :
- rendues côté serveur (SSR)
- rendues côté client (CSR / SPA)
- rendues côté serveur et client (SSG)

ATTENTION : Utiliser bien la documentation de NextJS avec le Pages Router (couleur violette) et non celle de l'App Router (couleur bleu)

## Tester les différentes méthodes de rendu

Modifier le fichier `pages/index.tsx`.

Essayer d'afficher l'heure actuelle grâce au trois méthodes de rendu :

SSR vs SSG :

getServerSideProps
getStaticProps

CSR :

Utiliser un useState et useEffect pour mettre à jour l'heure toutes les secondes.

## Créer une page d'API

Modifier la route d'api par défaut `pages/api/date/index.ts`

Créer une route `/api/date` qui retourne un json avec la date actuelle du serveur.

Utiliser cette route dans le composant `pages/index.tsx` pour afficher la date en SSR, CSR et SSG.

## Ajouter l'authentification

Pour cela nous allons utiliser le package `next-auth` qui permet de gérer l'authentification avec de nombreux fournisseurs (Google, Facebook, Github, etc...).

Notre objectif est d'utiliser l'authentification avec Github.

Installez le package `next-auth`.

Puis suivez la documentation pour mettre en place l'authentification avec Github :

https://next-auth.js.org/configuration/providers/oauth
https://next-auth.js.org/getting-started/rest-api
https://next-auth.js.org/getting-started/client

Questions :
Dans le navigateur, sur quelle route puis-je me connecter avec Github ?
Côté server, comment puis-je récupérer les informations de l'utilisateur connecté ?
Côté client, comment puis-je récupérer les informations de l'utilisateur connecté ?

## Créer une route d'api avec paramètre dans l'url

Créer une route `/api/hello/[name].ts` qui retourne un json en `message` : bonjour + le nom passé en paramètre dans l'url.

Vous avez cette fois ci accès à l'objet `req` de la requête.
On y accède via req.query....

Tester la requête avec RestClient.

Rajoutez la prise en compte d'un paramètre `trueName` dans le body de la requête. S'il est présent, il prend le dessus sur le paramètre dans l'url.s