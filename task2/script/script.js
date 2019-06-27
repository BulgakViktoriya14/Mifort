let App = {
    variables : {
    	buttonMenu : document.querySelector(".menu-button"),
    	menu : document.querySelector(".menu ul"),
        buttonScroll : document.getElementById("scroll"),
        header : document.querySelector(".header"),
    },
    start : function() {
        App.doFixedHeader();
    	App.variables.buttonMenu.addEventListener("click", App.clickButtonMenu);
        App.variables.buttonScroll.addEventListener("click", App.scrollPage);
        window.addEventListener("scroll", App.doFixedHeader);
    },
    clickButtonMenu : function(e) {
    	if(e.target.classList.contains("burger-menu")) {
    		App.openMenu(e);
    	} else {
    		App.closeMenu(e);
        }
    },
    openMenu : function(e) {
    	e.target.classList.remove("burger-menu");
    	e.target.classList.add("close-menu");
    	App.variables.menu.style.display = "inline-block";
    },
    closeMenu : function(e) {
        e.target.classList.remove("close-menu");
        e.target.classList.add("burger-menu");
        App.variables.menu.style.display = "none";
    },
    scrollPage : function() {
        window.scrollTo({
            top: 750,
            behavior: "smooth"
        });
    },
    doFixedHeader : function() {
        if(window.scrollY > 50) {
            App.variables.header.classList.add("fix-header");
            App.variables.buttonMenu.classList.add("no-button");
            App.variables.menu.classList.add("fix-menu");
        } else {
            App.variables.header.classList.remove("fix-header");
            App.variables.buttonMenu.classList.remove("no-button");
            App.variables.menu.classList.remove("fix-menu");
        }
        
    }
}

App.start();