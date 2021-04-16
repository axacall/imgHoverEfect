let look = document.querySelectorAll(".wrap .items");

let looks = [...look];
console.log(looks)
looks.forEach((lookx) => {
    lookx.addEventListener("mouseover", function (e) {
        if (e.target.parentElement.classList.contains("items")) {
            e.target.parentElement.style.marginRight = "50px";
            e.target.parentElement.style.marginLeft = "50px";
            e.target.parentElement.style.position = "relative";
            e.target.parentElement.style.transform = "translateX(10px)";
            e.target.parentElement.style.transform = "perspective(600px) rotate(0)";
            e.target.parentElement.style.transition = "500ms ease";
            e.target.parentElement.style.zIndex = "999";
        }
        if (window.outerWidth < 400) {
            if (e.target.parentElement.classList.contains("items")) {
                e.target.parentElement.style.marginRight = "50px";
                e.target.parentElement.style.marginLeft = "50px";
                e.target.parentElement.style.position = "relative";
                e.target.parentElement.style.transform = "translateX(10px)";
                e.target.parentElement.style.transform = "perspective(600px) rotate(0)";
                e.target.parentElement.style.transition = "500ms ease";
                e.target.parentElement.style.zIndex = "999";
            }
        }

    })
    lookx.addEventListener("mouseout", function (e) {
        setTimeout(() => {
            if (e.target.parentElement.classList.contains("items")) {
                e.target.parentElement.style.marginRight = "0px";
                e.target.parentElement.style.marginLeft = "-50px";
                e.target.parentElement.style.transfor = "translateX(-10px)";
                e.target.parentElement.style.transform = "perspective(600px) rotateY(60deg)";
                e.target.parentElement.style.transition = "500ms linear";
                e.target.parentElement.style.position = "relative";
                e.target.parentElement.style.zIndex = "0";
            }
        }, 400);

    })
    lookx.addEventListener("click", function (e) {
        if (e.target.parentElement.classList.contains("items") && window.innerWidth > 1024) {
            e.target.parentElement.style.transform = "scale(2)";
            e.target.parentElement.style.transition = "500ms ease";
            e.target.parentElement.style.zIndex = "9999";
            e.target.parentElement.style.display = "flex";
            e.target.parentElement.style.justifyContent = "center";
            e.target.parentElement.style.alignItems = "center";
        }
        if (e.target.parentElement.classList.contains("items") && window.innerWidth < 400) {
            if (e.target.parentElement.classList.contains("items")) {
                e.target.parentElement.style.transform = "scale(2)";
                e.target.parentElement.style.transition = "500ms ease";
                e.target.parentElement.style.zIndex = "9999";
                e.target.parentElement.style.marginLeft = "0px";
                e.target.parentElement.style.display = "flex";
                e.target.parentElement.style.justifyContent = "center";
                e.target.parentElement.style.alignItems = "center";
            }
        }
    })


})