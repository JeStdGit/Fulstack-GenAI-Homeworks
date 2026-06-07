# CSS Learning Tasks

## 1. Display Property (inline vs block vs inline-block)
**The Task:** Create a basic navigation menu.
* Create 4 anchor tags (`<a>`) with page names (e.g., Home, About, Services, Contact). By default, they will be inline.
* Add a background color, padding, and margin to them. Notice that the top/bottom margins don't affect them properly.
* Change their display property to `inline-block` and see how they align perfectly with the margins, while still staying on the same line.
* Create a `<div>` tag below the menu and see how it pushes itself to a new line (because it's a block level element).

## 2. Inheritance (Inherited vs Non-inherited)
**The Task:** Test the behavior of property inheritance.
* Create a container `<div>` and inside it, add a heading (`<h2>`), a paragraph (`<p>`), and a button (`<button>`).
* In your CSS file, set only these properties for the `<div>`: `color: blue` and `border: 2px solid red`.
* **Thinking/Testing Question:** Which elements received a blue text color? Which one got a red border?
* **Fix:** The button probably didn't inherit the font or color by default. Set the button in CSS to `color: inherit;` and `font-family: inherit;` and see how it "pulls" the styling from its parent.

## 3. The Box Model
**The Task:** Create a styled card.
* Create a `<div>` tag with a class named `.card`.
* Give the card a width and height of 200px and a light background color.
* Add a padding of 20px (to push the text away from the edges), a border with a thickness of 5px, and a margin of 30px to push it away from other elements.
* **Tip:** Open your browser's Developer Tools (press F12, go to the Elements tab, and find the Box Model diagram at the bottom). Make sure you understand how each value affects the total visual size.

## 4. Box Sizing (content-box vs border-box)
**The Task:** A visual comparison between the two sizing methods.
* Create two `<div>`s, one above the other. Give the first one the class `.box1` and the second one `.box2`.
* Give both of them the exact same settings: `width: 250px`, a background color, `padding: 30px`, and `border: 10px solid black`.
* **Now for the difference:** give `.box1` the setting `box-sizing: content-box` (which is the browser default), and give `.box2` the setting `box-sizing: border-box`.
* **Look at the screen:** Which one looks wider and why? (This is one of the most important discoveries you'll make in CSS!).

## 5. Units (px, em, rem, percentage, vw/vh)
**The Task:** Playing with units of measurement.
* Create a header area (`<header>`). Set its height to be 20vh (20% of the viewport height) and its width to 100vw. Watch how the size changes as you resize the browser window.
* Inside the body of the page, create an element whose width takes up 50%.
* For the `<html>` or `<body>` tag, set `font-size: 16px`.
* Create an `<h1>` heading and set its size to be 2rem (How many pixels is that actually?).
* Below it, create a `<div>` with a font size of 20px, and inside it, a `<span>` tag with a font size of 2em (How many pixels will the span be?).

## 6. Responsive Web Design
**The Task:** Variable layout based on screen size.
* Create a page structure that includes a main content area (`<main>`) and a sidebar (`<aside>`) inside a common container.
* Using percentages and Flexbox (or Float), set the content to take up 70% of the width, and the sidebar to take up 30% when they are side by side.
* Add a media query (`@media`) so that if the screen is narrower than 768px (like on mobile), both elements will get a width of 100% and stack one under the other.

## 7. Position (static, relative, absolute, fixed, sticky)
**The Task:** Adding advanced positioning behaviors to elements.
* **Sticky:** Add a top navigation menu to a page that has a lot of text (so it can be scrolled). Set the menu to `position: sticky; top: 0;`. Scroll down and see how it "sticks" to the top of the viewport.
* **Relative + Absolute:** Create a large box sized 300x300 pixels (this is the parent). Give it `position: relative`. Inside it, create a small box sized 50x50 and color it red (this is the child). Give the child `position: absolute` and use `bottom: 10px` and `right: 10px` to place it in the bottom-right corner of the parent.
* **Fixed:** Create a small button that says "Contact Us" or an up arrow. Give it `position: fixed; bottom: 20px; left: 20px;`. Scroll through the page and see that it always stays right in front of your eyes in the exact same place on the screen, regardless of scrolling.

---

**Please note:** Tasks 1 - 4 are mandatory!
Tasks 5, 6, and 7 are optional and will grant an additional 10 points for the upcoming HTML/CSS project, which will take place in about two weeks.

### Required Learning Timestamps:
* **2:06:46** - Display Property - inline vs block vs inline-block 
* **2:22:02** - Inheritance - Inherited vs Non-inherited
* **2:27:51** - Box Model - Content, Padding, Border, Margin 
* **2:40:50** - Box Sizing - content-box vs border-box 
* **2:51:35** - Units - px, em, rem, percentage, vw/vh 
* **3:21:06** - Units - Responsive Web Design 
* **3:54:35** - Position - static, relative, absolute, fixed, sticky
* **7:42:35** - Media Query

**Video Tutorial:** [https://www.youtube.com/watch?v=NeeSJ3ZJzEg](https://www.youtube.com/watch?v=NeeSJ3ZJzEg)
