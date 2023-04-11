const container = document.querySelector(".container"); // storing our main container in container
const range = document.getElementById("grid-select"); // creating a html collection for user input
const buttons = document.getElementsByClassName("color"); // creating a html collection for user input for color
var r, g, b;
//initial layout 
for (let i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.className = "gridItem";
    div.textContent = " ";
    container.appendChild(div);
}

let divs = document.getElementsByClassName("gridItem");//cretaing a html collection for grid item that was created dynamically
function resetPlayground() { /*function for everytime a user changes his choice of layout*/
    container.innerHTML = "";
    while (divs.length > 0)
        divs[0].remove();

}
range.addEventListener("change", () => {          // function for creating a new grid and appending to container//
    resetPlayground();
    var rangeValue = range.value;
    for (let i = 1; i <= (rangeValue) * (rangeValue); i++) {
        let div = document.createElement("div");
        div.className = "gridItem";
        div.textContent = " ";
        container.appendChild(div);
    }
    container.setAttribute('style', `grid-template-columns:repeat(${rangeValue},1fr);grid-template-rows:repeat(${rangeValue},1fr)`);
});
// function for action to be taken when each button is clicked //

for (let m = 0; m < buttons.length; m++) {
    if (buttons[m].value == `black`) {
        buttons[m].addEventListener("click", function (event) {
            for (let k = 0; k < divs.length; k++) {
                divs[k].addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = `black`;
                });

            }
        });
    }
    else if (buttons[m].value == `erase`) {
        buttons[m].addEventListener("click", function (event) {
            for (let k = 0; k < divs.length; k++) {
                divs[k].addEventListener("mouseover", function (event) {
                    event.target.style.backgroundColor = `white`;
                });

            }
        });
    }
    else if (buttons[m].value == `rainbow`) {
        buttons[m].addEventListener("click", function (event) {
            for (let k = 0; k < divs.length; k++) {
                divs[k].addEventListener("mouseover", function (event) {
                    r = g = b = 0;
                    r = Math.floor(Math.random() * 256);
                    g = Math.floor(Math.random() * 256);
                    b = Math.floor(Math.random() * 256);
                    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                });

            }
        });



    }
    else if (buttons[m].value == `darken`) {
        buttons[m].addEventListener("click", function (event) {
            for (let k = 0; k < divs.length; k++) {
                divs[k].addEventListener("mouseover", function (event) {
                    r = g = b = 0;
                    r = Math.floor(Math.random() * 256);
                    g = Math.floor(Math.random() * 256);
                    b = Math.floor(Math.random() * 256);
                    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                    divs[k].addEventListener("click", function (event) {
                        let rtenpercent = r / 10;
                        let gtenpercent = r / 10;
                        let btenpercent = r / 10;
                        event.target.style.backgroundColor = `rgb(${r -= rtenpercent},${g -= gtenpercent},${b -= btenpercent})`;


                    });

                });
            }
        });



    }






}
