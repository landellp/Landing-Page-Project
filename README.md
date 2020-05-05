# Landing-Page-Project
Udacity Fend DOM and JavaScript exercise

The code in this repository is meant to satisfy the project # 2 rubric of the Front Ent Web Developer nanodegree.

Starter code taken from udacity [repository](https://github.com/udacity/fend/tree/refresh-2019/projects/landing-page)

## Purpose
The Landing Page Project allows the user to begin understanding the DOM and Javascript programming.  
The goal of the project is to dynamically create HTML elements based on content. The section active in the viewport will also be indicated as active in the navbar. Lastly a slowScroll function was created to slowly scroll to the selected section, rather than the default jump.

## Additional Functionality
An additional feature to not display the navbar until the user scrolls on the page was added.  This was challenging, as intially the function would continue to run with every scroll on the page.  I did learn there was an option to only run the function once:
```javascript
window.addEventListener('scroll', myFunction, {once: true});
```
This was a good learning project that I will surely put the learnings from this project to work in the future, both within the Nanodegree and elsewhere.

## View Project
To view the project you can utilize the [github preview](https://htmlpreview.github.io/?https://github.com/landellp/Landing-Page-Project/blob/master/root/index.html)

or 

Download the repository and open the index.html file on a browser
