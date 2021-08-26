window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        infoHeader = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        };
    };

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        };
    };

    infoHeader.addEventListener('click', function (evt) {
        let target = evt.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                };
            };
        };
    });


    // ************************** Таймер ============================

    let deadline = '2021-11-30';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            if (t.hours < 10) {
                t.hours = '0' + t.hours;
            }
            if (t.minutes < 10) {
                t.vinutes = '0' + t.vinutes;
            }
            if (t.seconds < 10) {
                t.seconds = '0' + t.seconds;
            }

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }

    };

    setClock('timer', deadline);


    /*++++++++++++++++++++++++++++++++  Modal  +++++++++++++++++++++++++++++++++*/

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //let descriptionBtn = document.querySelectorAll('.description-btn');
    let info = document.querySelector('.info');
    info.addEventListener('click', function (evt) {
        let target = evt.target;
        if (target && target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }

    });



    /*******************  Form  ************************/

    let message = {
        londing: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так,,,'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        //request.send(formData);
        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.succes;
            } else {
                statusMessage.innerHTML = message.failure;
            }

        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });


    //******************************** Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() { 
        plusSlides(-1); 
    });

    next.addEventListener('click', function() { 
        plusSlides(1) 
    });

    dotsWrap.addEventListener('click', function(evt){
        for (let i = 0; i<dots.length + 1; i++) {
            if (evt.target.classList.contains('dot') && evt.target == dots[i-1]) {
                currentSlide(i);
            }
        }

    })        


//********************** */ Calc

let persons = document.querySelectorAll('.counter-block-input')[0],
restDays = document.querySelectorAll('.counter-block-input')[1],
place = document.getElementById('select'),
totalValue = document.getElementById('total'),
personsSum = 0,
daysSum = 0,
total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('change', function() {
personsSum = +this.value;
total = (daysSum + personsSum)*4000;

if (restDays.value == '' || persons.value == '') {
    //if(restDays.value == '') {
    totalValue.innerHTML = 0;
} else {
    totalValue.innerHTML = total;
}
});

restDays.addEventListener('change', function() {
daysSum = +this.value;
total = (daysSum + personsSum)*4000;

if (restDays.value == '' || persons.value == '') {
    //if(persons.value == '') {
    totalValue.innerHTML = 0;
} else {
    totalValue.innerHTML = total;
}
});

place.addEventListener('change', function() {
if (restDays.value == '' || persons.value == '') {
    totalValue.innerHTML = 0;
} else {
    let a = total;
    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
}
});


});