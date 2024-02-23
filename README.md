# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

- Desktop 

![Screen Shot 2567-02-23 at 11 09 34](https://github.com/Wannika123/fem-ecommerce-page/assets/142564014/da192354-90c1-40ad-aa6b-2764e9b873db)

- Desktop dialog

![Screen Shot 2567-02-23 at 11 12 04](https://github.com/Wannika123/fem-ecommerce-page/assets/142564014/89c08680-e596-4e71-86ca-e78c20f91ea3)

- Mobile version

![Screen Shot 2567-02-23 at 11 11 07](https://github.com/Wannika123/fem-ecommerce-page/assets/142564014/5d51ac76-d3da-4137-b979-da1e61c89050)

### Links

- Solution URL: [GitHub repo](https://github.com/Wannika123/fem-ecommerce-page)
- Live Site URL: [GitHub page](https://wannika123.github.io/fem-ecommerce-page/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- JavaScript

### What I learned

**Note: I wrote this mainly just for myself, to make what I learn less overwhelming. It might be incoherent and not organized. Feel free to read though.**

- By default, absolute-positioned element won't be on top of <img>. But it can be adjusted to be on top with no problem.

```
* {
  padding: 0;
  margin: 0;
}
```
- The above code must not include dialog, as that will delete dialog's awesome default style.
- The order of SCSS file you imported is important. For example, if the above code is the last imported, it will override everything.
- Any element can't be on top of dialog's backdrop, no matter how high you set the 'z-index'.

### Useful resources

- [Example resource 1](https://www.w3schools.com/howto/howto_js_slideshow.asp) - How to make the image slider.
- [Example resource 2](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-basic-oop-by-building-a-shopping-cart/step-1) - This freeCodeCamp project help me in so many way.

## Author

- Frontend Mentor - [@Wannika123](https://www.frontendmentor.io/profile/Wannika123)