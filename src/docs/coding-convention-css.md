---
name: Coding Convention CSS
slug: coding-convention-css
---

# Coding Convention - CSS

*A mostly reasonable approach to CSS and SASS*

> **Note**: this guide assumes .....

Other Style Guides

  - [Git](#)
  - [JS](#)

## Table of Contents

1. [Terminology](#terminology)
    - [Rule Declaration](#rule-declaration)
    - [Selectors](#selectors)
    - [Properties](#properties)
1. [CSS](#css)
    - [Formatting](#formatting)
    - [Comments](#comments)
    - [OOCSS and BEM](#oocss-and-bem)
    - [ID Selectors](#id-selectors)
    - [JavaScript hooks](#javascript-hooks)
    - [Border](#border)
1. [Sass](#sass)
    - [Syntax](#syntax)
    - [Ordering](#ordering-of-property-declarations)
    - [Variables](#variables)
    - [Mixins](#mixins)
    - [Extend directive](#extend-directive)
    - [Nested selectors](#nested-selectors)
1. [Translation](#translation)
1. [License](#license)

## Terminology

### Rule declaration

A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

```css
.c-element {
  background-color: lime;
}
```

### Selectors

In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

```css
.c-element {
  /* ... */
}

[aria-hidden] {
  /* ... */
}

[class^='icon-'] {

}
```

### Properties

Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

```css
/* some selector */ {
  background: salmon;
  color: tomato;
}
```

**[⬆ back to top](#table-of-contents)**

## CSS

### Formatting

* Use soft tabs (2 spaces) for indentation.
* Use _kebab-case_ instead of camelCasing in class names.
  - Underscores and PascalCasing are okay if you are using BEM (see [BEM](#oocss-and-bem) below).

_Good_
```css
.c-block__element {
  ...
}
```

_Bad_
```css
.blockElement {
  ...
}

.block_element {
  ...
}

.c-block__elementCustom {
  ...
}
```

* Do not use ID selectors.
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put a space before the opening brace `{` in rule declarations.
* In properties, put a space after, but not before, the `:` character.
* Put closing braces `}` of rule declarations on a new line.
* Put blank lines between rule declarations.

_Good_
```css
.c-block,
.c-element,
.c-card {
  border-radius: 50%;
  border: 2px solid olive;
}
```

_Bad_
```css
.c-block, .c-element, .c-card {
  border-radius:50%; border:2px solid olive; }
#element { color: salmon; }
```

### Comments

* Prefer line comments (`//` in Sass-land) to block comments.
* Prefer comments on their own line. Avoid end-of-line comments.
* Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks

### OOCSS and BEM

We encourage some combination of OOCSS and BEM for these reasons:

  * It helps create clear, strict relationships between CSS and HTML
  * It helps us create reusable, composable components
  * It allows for less nesting and lower specificity
  * It helps in building scalable stylesheets

**OOCSS**, or “Object Oriented CSS”, is an approach for writing CSS that encourages you to think about your stylesheets as a collection of “objects”: reusable, repeatable snippets that can be used independently throughout a website.

  * Nicole Sullivan's [OOCSS wiki](https://github.com/stubbornella/oocss/wiki)
  * Smashing Magazine's [Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

**BEM**, or “Block-Element-Modifier”, is a _naming convention_ for classes in HTML and CSS. It was originally developed by Yandex with large codebases and scalability in mind, and can serve as a solid set of guidelines for implementing OOCSS.

  * CSS Trick's [BEM 101](https://css-tricks.com/bem-101/)
  * Harry Roberts' [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

!!!!! ITCSS al posto di PascalCase OOCSS !!!!!!

```css
/* card.scss */

.c-card { }
.c-card--vertical { }
.c-card__title { }
.c-card__title--dark { }
```

  * `.c-card` is the “block” and represents the higher-level component
  * `.c-card__title` is an “element” and represents a descendant of `.c-card` that helps compose the block as a whole.
  * `.c-card--vertical` is a “modifier” and represents a different state or variation on the `.c-card` block.
  * `.c-card__title--dark` is a “modifier” of the title element

### ID selectors

While it is possible to select elements by ID in CSS, it should generally be considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

### JavaScript hooks

Avoid binding to the same class in both your CSS and JavaScript. Conflating the two often leads to, at a minimum, time wasted during refactoring when a developer must cross-reference each class they are changing, and at its worst, developers being afraid to make changes for fear of breaking functionality.

We recommend creating JavaScript-specific classes to bind to, prefixed with `.j-`:

```html
<div class="c-card c-card--vertical j-card">
  ....
</div>
```

### Border

Use `0` instead of `none` to specify that a style has no border.

_Good_
```css
.c-card {
  border: 0;
}
```

_Bad_
```css
.c-card {
  border: none;
}
```

**[⬆ back to top](#table-of-contents)**

## Sass

### Syntax

* Use the `.scss` syntax, never the original `.sass` syntax
* Order your regular CSS and `@include` declarations logically (see below)

### Ordering of property declarations

1. `@include` declarations

    Grouping `@include`s at the start makes it easier to read the entire selector.

    ```scss
    .c-card__list {
      @include list-reset;
      background: chocolate;
      font-weight: bold;
      // ...
    }
    ```

2. Property declarations

    List all standard property declarations, anything that isn't an `@include` or a nested selector.

    ```scss
    .c-card {
      background: chocolate;
      font-weight: bold;
      // ...
    }
    ```

3. Nested selectors

    Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

    ```scss
    .c-card {
      background: green;
      font-weight: bold;
      @include transition(background 0.5s ease);

      .icon-user {
        margin-right: 10px;
      }
    }
    ```

### Variables

Use dash-cased variable names (e.g. `$my-variable`) instead of camelCased or snake_cased variable names. It is acceptable to prefix variable names that are intended to be used only within the same file with an underscore (e.g. `$_my-variable`).

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

### Extend directive

`@extend` should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using `@extend`, and you can DRY up your stylesheets nicely with mixins.

### Nested selectors

**Do not nest selectors more than three levels deep!**

```scss
.c-block {
  .c-card {
    .c-button {
      // STOP!
    }
  }
}
```

When selectors become this long, you're likely writing CSS that is:

* Strongly coupled to the HTML (fragile) *—OR—*
* Overly specific (powerful) *—OR—*
* Not reusable

Again: **never nest ID selectors!**

If you must use an ID selector in the first place (and you should really try not to), they should never be nested. If you find yourself doing this, you need to revisit your markup, or figure out why such strong specificity is needed. If you are writing well formed HTML and CSS, you should **never** need to do this.

**[⬆ back to top](#table-of-contents)**

## Translation

  This style guide is also available in other languages:

  ![vn](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/Italy.png) **Italian**: [linee-guida-css](#)

**[⬆ back to top](#table-of-contents)**

# Resources
- [airbnb](https://github.com/airbnb/css)
- [dropbox](https://github.com/dropbox/css-style-guide)
- [cssguidelines](https://cssguidelin.es/)
- [sky-uk](https://github.com/sky-uk/css)
- [idiomatic](https://github.com/necolas/idiomatic-css)

## License

.....

**[⬆ back to top](#table-of-contents)**
