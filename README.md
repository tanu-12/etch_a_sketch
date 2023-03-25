# etch_a_sketch
1. Create a webpage with a 16x16 grid of square divs.
    - Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
    - It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
    - There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
        - float/clear
        - inline-block
        - flexbox
        - CSS Grid
    - Be careful with borders and margins, as they can adjust the size of the squares!
    - “OMG, why isn’t my grid being created???”
        - Did you link your CSS stylesheet?
        - Open your browser’s developer tools.
        - Check if there are any errors in the JavaScript console.
        - Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
        - Go willy-nilly and add `console.log` statements in your JavaScript to see if it’s actually being loaded.
2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    - Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
    - There are multiple ways to change the color of the divs, including:
        - adding a new class to the div.
        - changing the div’s background color using JavaScript.
3. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated *in the same total space as before* (e.g. 960px wide) so that you’ve got a new sketch pad. **Tip**: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
    - Research `button` tags in HTML and how you can make a JavaScript function run when one is clicked.
    - Also check out `prompt`s.
    - You should be able to enter `64` and have a brand new 64x64 grid pop up without changing the total amount of pixels used.

### Pseudo code

for html i would simply have a container 

<html>

<div class=”container”>

</div>

a button that gives you selection for grid 

so the input received would help in determining a loop 

loop

for (i=1;i≤n;i++)

{gridItem=document.createElemenr(”div”);

container.innerHtml=griditem;

}

Problem: how to create an array of grid item using purely dom

google it :was able to do it

css effect of hover that remains the same after the cursor exit too

google it :

# Goal of the project

This document outlines the steps for creating an Etch a Sketch project using JavaScript, including creating a 16x16 grid of square divs, adding a hover effect to change the color of the divs, and adding a button to generate a new grid with a user-specified number of squares per side. 

## So far….

I was able to make a functional sample of project . Now i need to make it a presentable so that i can include it in my resume . Lets summarize what problems i faced and what solution i came up with 

---

- To go for a grid look I choose to learn grid from wesbros tutorial , I learnt it and first created 16 x 16 grid
- For the hover effect I learnt somewhat jquery but it was fruitless as jquery is redundant now . I went on discord and learnt that DOM manipulation is what I should aim for
- for hover effect  I tried adding eventlistner to container but it was a wrong approach because it was adding the effect to the whole grid not the specific grid item
- so I learnt it is better to create a array of the grid item and add listener to each array item that are the grid item
- I added a dropdown instead of a prompt which is fine . The value of selected dropdown is then used in creating new array
- To keep all grid whatever you select in drop down in a specific space i used fixed height and width for main container and keeping the padding very small
- for random color generation i used rgb value generating using random function

This document outlines the steps taken in creating an Etch a Sketch project. The author learned grid layout from a tutorial, and created a 16x16 grid. They initially tried using jQuery for hover effects, but learned that DOM manipulation was a better approach. They created an array of grid items and added event listeners to each item. They also added a dropdown menu for selecting grid size, and used fixed height and width for the main container to keep all grids in a specific space. Finally, they used a random function to generate RGB values for random color generation.

---

## Lets talk about functions

- function that is attached to button for creating grid everytime there is a change
- Function that reset the grid that means it remove the griditems from grid array
- Function that generates random color

The order of calling is going to be like this 

Change() calls reset() then carry on with creation of new grid 

it is only after the creation of  grid we need event listener we need  to add a function that let us add a pixel trail this event listener calls the function random color