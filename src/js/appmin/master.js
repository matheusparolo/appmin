(function(){

    "use strict";

    let appShell = {

        change_menu_state : () => {

            let navbar = document.querySelector("#navbar__left");
            if(navbar.classList.contains("showed"))
            {

                navbar.classList.remove("showed");
                document.querySelector("header .header__left").classList.add("showed");

            }else{

                navbar.classList.add("showed");
                document.querySelector("header .header__left").classList.remove("showed");

            }

        },
        change_dropdown_state : () => {

            let dropdown = document.querySelector("#header__dropdown");
            (dropdown.classList.contains("showed")) ? dropdown.classList.remove("showed") : dropdown.classList.add("showed");

        },
        change_category_state : function(event){

            let category = (event.target.tagName === "P") ? event.target.parentNode : event.target.parentNode.parentNode;
            let img = category.querySelector("img");

            if(category.classList.contains("expanded"))
            {

                category.classList.remove("expanded");
                img.setAttribute("alt", "Expandir Categoria")

            }else{

                category.classList.add("expanded");
                img.setAttribute("alt", "Retrair Categoria")

            }

        },
        init : () => {

            // Binds
            document.querySelectorAll(".left__action").forEach((element) => {

                element.onclick = appShell.change_menu_state;

            });
            document.querySelectorAll(".item__collapse > p").forEach((element) => {

                element.onclick = appShell.change_category_state;
                element.onkeyup = function(event){
                    if(event.code === "Space" || event.code === "Enter"){
                        appShell.change_category_state(event);
                    }
                }

            });
            document.querySelector("#navbar__left-close").onclick = appShell.change_menu_state;
            document.querySelector("#header__user").onclick = appShell.change_dropdown_state;

        }

    };

    appShell.init();

})();