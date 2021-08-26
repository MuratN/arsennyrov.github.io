 let screen = document.getElementById('screen'),
    btnB = document.querySelector('.btnB'),
    btnC = document.querySelector('.btnC'),
    btnT = document.querySelector('.btnT'),
    btnE = document.querySelector('.btnE'),
    btnP = document.querySelector('.btnP'),
    btnM = document.querySelector('.btnM'),
    btnU = document.querySelector('.btnU'),
    btnD = document.querySelector('.btnD'),
    btn = document.getElementsByClassName('btn');

let number = '',
    result = '',
    op = 'Z',
    number_1 = '',
    number_2 = ''; 
    rang = [];
    rang[0] = 7;
    rang[1] = 8;
    rang[2] = 9;
    rang[3] = 4;
    rang[4] = 5;
    rang[5] = 6;
    rang[6] = 1;
    rang[7] = 2;
    rang[8] = 3;
    rang[9] = 0;
    
    function btnf(index) {
        btn[index].addEventListener('click', function() {
            number = number+''+rang[index];         
            screen.textContent = number;
        }); 
    }

    for (i=0; i<10; i++ ) {
        btnf(i);
    }; 

    btnT.addEventListener('click', function() {
        number = number+".";         
        screen.textContent = number;
    }); 

/*************************************************************** */

    btnC.addEventListener('click', function() {
        number = "";          
        screen.textContent = number;
    }); 
 
    btnB.addEventListener('click', function() {
        number = number.substr(0,number.length-1);
        screen.textContent = number;
    }); 
 
/***************************************************************** */

    btnP.addEventListener('click', function(evt) {
        number_1 = number;
        number = number+" + ";
        screen.textContent = number;
        op = "P";
        number = "";
    }); 
 
    btnM.addEventListener('click', function() {
        number_1 = number;
        number = number+" - ";
        screen.textContent = number;
        op = "M";
        number = "";
    }); 

    btnU.addEventListener('click', function() {
        number_1 = number;
        number = number+" * ";
        screen.textContent = number;
        op = "U";
        number = "";
    }); 

    btnD.addEventListener('click', function() {
        number_1 = number;
        number = number+" / ";
        screen.textContent = number;
        op = "D";
        number = "";
    }); 

    btnE.addEventListener('click', function() {
        number_2 = number;
        number = number+" = ";
        number = "";

        switch(op) {
            case 'P':
                result = +number_1 + +number_2;
            break;
            case 'M':
                result = +number_1 - +number_2;
            break;
            case 'U':
                result = +number_1 * +number_2;
            break;
            case 'D':
                result = +number_1 / +number_2;
                result = result.toFixed(2);
            break;
        }

        screen.textContent = result;
    }); 


