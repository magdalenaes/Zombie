const wall = document.querySelector(".wall");

setInterval(function() {
    let pos = 0;
    const div = document.createElement("div");
    div.setAttribute("class", "zombie");

    {
        const min = 10;
        const max = 230;
        pos = Math.floor(Math.random()*(max-min+1)+min);
        div.style.bottom = `${pos}px`
    }

    {
        const min = 7;
        const max = 10;
        const speed = Math.floor(Math.random() * (max - min + 1) + min);
        div.style.animationDuration = `0.7s, ${speed}s`
    }

    {
        div.style.zIndex = 230 - pos;           
    }

    div.addEventListener("animationend", function() {
        this.remove();
    });

    div.addEventListener("click", function() {
        this.remove();
    });

    wall.appendChild(div);

}, 1200);
