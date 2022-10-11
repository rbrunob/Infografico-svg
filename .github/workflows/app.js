document.addEventListener("DOMContentLoaded", () => {

    circleContent = document.querySelector('.circle-content');
    circle = document.querySelector('.circle');

    //texts 
    titleSections = document.querySelector('.title-sections');
    content = document.querySelector('.content');
    tspan = document.querySelectorAll('tspan');

    function addClass() {

        document.querySelectorAll('polygon')[0].classList.add('active');
        circle.classList.add('active');
        circleContent.classList.add('active');

        //texts
        titleSections.classList.add('active');
        content.classList.add('active');

    }

    function removeClass() {

        circleContent.classList.remove('active');
        document.querySelectorAll('polygon')[0].classList.remove('active');
        circle.classList.remove('active');

        //texts
        titleSections.classList.remove('active');
        content.classList.remove('active');

    }

    polygons = document.querySelectorAll('svg')[0].firstElementChild.children;

    for (i = 0; i < polygons.length; i++) {

        polygons[i].addEventListener('click', addClass)
        circleContent.addEventListener('click', removeClass)

        // texts actions
        content.addEventListener('click', removeClass)
    }

    for (var i = 0; i < tspan.length; i++) {
        tspan[i].addEventListener('click', addClass)

        if (tspan[i].attributes[0].value == '0') {

            tspan[i].removeEventListener('click', addClass)

        }
    }

})