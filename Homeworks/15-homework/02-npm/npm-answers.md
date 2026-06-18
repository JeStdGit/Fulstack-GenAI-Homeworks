# NPM Q/A

## Part 1 — Semantic Versioning
1. A package is at version `2.4.7`. A bug was fixed and released. What is the new version?<br>
*- Answer:* `2.4.8`

2. A package is at version `2.4.7`. A new feature was added (nothing broke). What is the new version?<br>
*- Answer:* `2.5.0`

3. A package is at version `2.4.7`. The API changed completely and old code will break. What is the new version?<br>
*- Answer:* `3.0.0`



## Part 2 — `^` and `~`
4. You have `"express": "^4.18.0"`. Will npm install `4.20.1`? Will it install `5.0.0`?<br>
*- Answer:* `yes`

5. You have `"lodash": "~1.3.0"`. Will npm install `1.3.9`? Will it install `1.4.0`?<br>
*- Answer:* `no`

6. Which symbol is safer if you want to avoid any surprise changes — `^` or `~`? Why?<br>
*- Answer:* `both are safe, but the carrot will prevent conflicts with old versions if new feature will be used...`



## Part 3 — dependencies vs devDependencies
7. You're adding `axios` to make HTTP requests inside your app. Which section does it go in?<br>
*- Answer:* `dependecies`

8. You're adding `jest` for unit tests that only run on your machine. Which section?<br>
*- Answer:* `devDependecies`

9. How do you install a package as a dev dependency? Write the exact command.<br>
*- Answer:* `npm i <package_name> -D`

10. On a production server, a teammate runs `npm install --omit=dev`. Will `nodemon` be installed? Will `uuid`?<br>
*- Answer:* `if they located in the dependency section it'll be installed if it in the devDependency section it'll not be installed`



## Part 4 — `package-lock.json`
14. Why should `node_modules` never be committed to git? (think: size, and what `npm install` does)<br>
*- Answer:* `it increase the project size for no reason, because it could be installed by using 'npm install' after cloning to another developer`

15. A teammate clones your repo. There is no `node_modules` folder. What command do they run to get the project working?<br>
*- Answer:* `npm install`

16. Name one other thing you would typically add to a `.gitignore` file.<br>
*- Answer:* `node_modules`



## Part 6 — `npx`
17. What is the difference between `npm install -g nodemon` and `npx nodemon`?<br>
*- Answer:* `'npm install -g nodemon' installs nodemon globally/localy allowing using 'nodemon <file.js>' for all files/projects while 'npx nodemon' not install the nodemon but access it every time using 'npx' leading command`

18. Why is `npx` useful for one-time tools like project generators?<br>
*- Answer:* `it allows using tools that aren't used frequently, and also ensures your always use the latest version of this tool`