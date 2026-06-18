# Homework — Event Object

## Topic

Working with the event object: `addEventListener`, the `e` parameter, reading event properties, and reacting to multiple event types.

## Mission — Fireworks Canvas

Build a visual fireworks experience in a single HTML file. The page has one large dark `<div>` that fills most of the screen. Two things happen on it:

### Event 1 — click → Explosion

When the user clicks anywhere on the canvas, create an explosion at that spot:

- Generate 20 small `<div>` elements (dots), all starting at `e.offsetX` and `e.offsetY`
- Each dot flies out in a random direction using CSS transform: `translate(x, y)`
- Apply a CSS transition so the dots animate outward smoothly (you can use `setTimeout` to trigger the transform after the element is in the DOM)
- After the animation ends, remove the dots from the DOM

### Event 2 — mousemove → Sparkle trail

As the mouse moves across the canvas, leave a trail of tiny glowing dots at the cursor position:

- Each dot is small (4–6px), round, white or gold
- Use opacity plus a CSS transition or `setTimeout` to make them fade and disappear after about 600ms
- Remove them from the DOM after they fade

### Event 3 — keydown → Clear

Listen for `keydown` on the document. When the user presses `Escape`, remove all dots and explosion elements instantly.

## What to submit

A single `index.html` file with all HTML, CSS, and JavaScript inside it.

## Hints

```javascript
// Explosion dots
canvas.addEventListener("click", function (e) {
  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("div");
    dot.classList.add("particle");
    dot.style.left = e.offsetX + "px";
    dot.style.top = e.offsetY + "px";
    canvas.appendChild(dot);

    const angle = Math.random() * 2 * Math.PI;
    const distance = 40 + Math.random() * 80;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    // Trigger the animation after the element is painted
    setTimeout(() => {
      dot.style.transform = `translate(${dx}px, ${dy}px)`;
      dot.style.opacity = "0";
    }, 10);

    setTimeout(() => dot.remove(), 700);
  }
});

// Sparkle trail
canvas.addEventListener("mousemove", function (e) {
  const spark = document.createElement("div");
  spark.classList.add("spark");
  spark.style.left = e.offsetX + "px";
  spark.style.top = e.offsetY + "px";
  canvas.appendChild(spark);

  setTimeout(() => {
    spark.style.opacity = "0";
  }, 50);

  setTimeout(() => spark.remove(), 650);
});

// Clear on Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    canvas.innerHTML = "";
  }
});
```

**CSS tip** — give your particles and sparks `position: absolute` and add a transition on `transform` and `opacity` so the animations work smoothly. The canvas itself needs `position: relative`.

## Bonus (optional)

- Make the explosion dot colors random (use `hsl(Math.random() * 360, 100%, 60%)`)
- Make the explosion size scale with how fast the mouse was moving when the user clicked (store the last mousemove speed using `e.movementX` and `e.movementY`)

# Homework — npm, package.json & project setup

## Part 1 — Semantic Versioning

Every npm package version looks like this: **MAJOR.MINOR.PATCH**
Example: `3.1.14`

- `3` → MAJOR — breaking change, old code may stop working
- `1` → MINOR — new feature, backwards compatible
- `14` → PATCH — bug fix only

### Questions

1. A package is at version `2.4.7`. A bug was fixed and released. What is the new version?
2. A package is at version `2.4.7`. A new feature was added (nothing broke). What is the new version?
3. A package is at version `2.4.7`. The API changed completely and old code will break. What is the new version?

## Part 2 — `^` and `~`

These symbols appear before a version in `package.json` and control how npm updates a package.

- `^3.1.14` — allow MINOR and PATCH updates → `3.2.0` ✅, `4.0.0` ❌
- `~3.1.14` — allow PATCH updates only → `3.1.20` ✅, `3.2.0` ❌

### Questions

4. You have `"express": "^4.18.0"`. Will npm install `4.20.1`? Will it install `5.0.0`?
5. You have `"lodash": "~1.3.0"`. Will npm install `1.3.9`? Will it install `1.4.0`?
6. Which symbol is safer if you want to avoid any surprise changes — `^` or `~`? Why?

## Part 3 — dependencies vs devDependencies

```json
{
  "dependencies": {
    "uuid": "^11.0.4"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}
```

- `dependencies` — packages your app needs to run in production (a server, a user's browser)
- `devDependencies` — packages only needed while you're writing code (auto-restart, testing, linting)

### Questions

7. You're adding `axios` to make HTTP requests inside your app. Which section does it go in?
8. You're adding `jest` for unit tests that only run on your machine. Which section?
9. How do you install a package as a dev dependency? Write the exact command.
10. On a production server, a teammate runs `npm install --omit=dev`. Will `nodemon` be installed? Will `uuid`?

## Part 4 — `package-lock.json`

`package.json` says *"I want uuid version 11 something"*. `package-lock.json` records the exact version that was actually installed, for every package and every sub-package.

### Questions

11. Why is `package-lock.json` important when working in a team?
12. Should `package-lock.json` be committed to git — yes or no? Why?
13. You delete `node_modules` and run `npm install`. Which file guarantees everyone gets the exact same versions?

## Part 5 — `.gitignore`

This file tells git which files and folders to never track. This project's `.gitignore` contains one line:

```gitignore
node_modules
```

### Questions

14. Why should `node_modules` never be committed to git? (think: size, and what `npm install` does)
15. A teammate clones your repo. There is no `node_modules` folder. What command do they run to get the project working?
16. Name one other thing you would typically add to a `.gitignore` file.

## Part 6 — `npx`

`npx` runs a CLI tool without installing it globally on your machine.

```bash
npx cowsay "hello"         # runs cowsay once, downloaded temporarily
npx create-react-app myapp  # scaffolds a new React project
```

### Questions

17. What is the difference between `npm install -g nodemon` and `npx nodemon`?
18. Why is `npx` useful for one-time tools like project generators?

## Mission

Create a new folder called `my-npm-project` anywhere on your computer and do the following:

1. Run `npm init -y` and open the generated `package.json`
2. Install `chalk` as a regular dependency and `nodemon` as a dev dependency
3. Confirm they appear in the correct sections in `package.json`
4. Change `chalk`'s version prefix from `^` to `~` manually
5. Create a `.gitignore` file that ignores `node_modules`
6. Add a `dev` script that runs `nodemon index.js`
7. Create `index.js` that uses `chalk` to print a colorful message
8. Run `npm run dev` — make a change to `index.js` and watch it auto-restart
9. Delete `node_modules`, run `npm install` again, and confirm the project still works
10. Run `npx cowsay "I understand npm"` — no install needed

**Submit:** your `my-npm-project` folder with `index.js`, `package.json`, `package-lock.json`, and `.gitignore` — no `node_modules` folder.
