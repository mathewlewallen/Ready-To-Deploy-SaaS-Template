Wasp uses Node 18 and when you build the project, it will default to it. This became a problem because typescript was not working with Node 18.

This guide assumes you have set your env variables and have a working project ready to be built. This will deploy the project to Railway.

I was able to upgrade to Node 22.13.1 doing the following (probably overkill on most of these steps):

1. Place the following in package.json:
   ```
   "engines": {
    "node": ">=22.13.1"
   }
   ```

2. Add "NODE_VERSION=22.13.1" to the environment variables.
3. Log into Railway and create a new project with a postgreSQL and two "Empty Service" containers.
4. Rename one Empty Service to "server" and the other to "client".
5. Go to Settings and generate your Domain (or add your own) and add these to your environment variables.
6. Go to the railway client and server variables and copy/paste the environment variables from the .env.client and .env.server files.
7. Return to your project and add the .dockerignore, .node-version, .nvmrc, and Dockerfile (in the NodeUpgrade folder) to the root of the project.
8. Follow [Railway Docs](https://docs.railway.com/guides/cli#installation) to install the Railway CLI.
9. Run `railway login` (login with your Railway account)
10. At the root of the project, run `wasp build` (build the project)
11. At the root of the project, run `cd .wasp/build`
12. Find all instances in .wasp/build where node is mentioned and change the version to 22.13.1
13. Find all package.json files and delete the node_modules and package-lock.json files.
14. Add .node-version and .nvmrc to any folder with a package.json file.
15. Replace the Dockerfile and .dockerignore with the ones in the NodeUpgrade folder.
16. Then run `npm install` in each folder with a package.json file.
17. Run `railway link` in .wasp/build and select the server service
18. (Make sure your env variables are set in Railway server service) and then run `railway up` in .wasp/build
19. Once runway shows the server has built and deployed, then run `cd web-app`
20. Run `npm install && REACT_APP_API_URL="your-server-url.com" npm run build`
21. Run `railway link` and select the client service
22. Run `cp -r build dist`
20. Add a Dockerfile and .dokerignore in web-app that says:
    - Dockerfile:
    ```
    FROM pierrezemb/gostatic
    CMD [ "-fallback", "index.html" ]
    COPY ./dist/ /srv/http/
    ```
    - .dockerignore:
    ```
    node_modules/
    ```
21. Run 'railway up'

Everything should be working now. 

