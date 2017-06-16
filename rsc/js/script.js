"use strict";

function open_search(elmnt, trigger) {
    if (elmnt.css("display") == "none") {
        elmnt.css("display", "block");
        trigger.removeClass("fa-search").addClass("fa-close");
    }
    else {
        elmnt.css("display", "none");
        trigger.removeClass("fa-close").addClass("fa-search");
    }
}

function ajax() {

    var pathFile = document.location.pathname;
    var fileName = pathFile.match(/[^\/]+$/);
    var pathOnly = pathFile.replace(fileName, '');
    var pathModule = pathOnly;

//    console.log("fileName: " + fileName);
//    console.log("pathOnly: " + pathOnly);
//    console.log("pathFile: " + pathFile);
//    console.log("pathModule: " + pathModule);

    if (pathOnly == "/") {
        fileName = "index.html"; //console.log("\nfileName == null\n\nfileName: " + fileName);
        pathOnly = "/"; //console.log("pathOnly: " + pathOnly);
        pathFile = pathOnly + fileName; //console.log("pathFile: " + pathFile);
        pathModule = "/modules/home/"; //console.log("pathModule: " + pathModule);
        var pathIndex = null;
    }

    $('nav').load('/navigation.html', function() {
        if (pathOnly.includes("home")) {
            pathOnly = "/";
        }
//        console.log("pathOnly + index.html: " + pathOnly + "index.html");
        $("a[href='" + pathOnly + "index.html" + "']").addClass("active");
    });

    $('aside').load(pathModule + "menu.html", function() {
        $("a[href='" + pathFile + "']").addClass("active");
    });

    $('footer').load('/footer.html', function() {
    });
}

$(function () {
    $(".dropdown").has('a.active').addClass('active');
});