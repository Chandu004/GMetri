document.getElementsByClassName("nav-toggle")[0].addEventListener ("click", toggleNav);

function toggleNav() {
                var nav = document.getElementsByClassName("nav-menu")[0];
                var className = nav.getAttribute("class");
                if(className == "nav-right nav-menu") {
                    nav.className = "nav-right nav-menu is-active";
                } else {
                    nav.className = "nav-right nav-menu";
                }
    };  
 
