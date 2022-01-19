
let isDot = false;
let equal = false;


//let sCalc = document.getElementById('main-screen').innerHTML;


function insert (n) {
    /* if (n == '.' && isDot == true) {
        n = ' ';    //quando pela 2 ou mais vezes.
    } else if (n == '.' && isDot == false) {
        isDot = true;    //quando pela 1x
    }document.getElementById('main-screen').innerHTML += n;
    */
   
   let x = document.getElementById('main-screen').innerHTML;
   x[0];
   x[x.length-1];
   
   let operators = x[x.length-1] == '+' || x[x.length-1] == '-' || x[x.length-1] == '/' || x[x.length-1] == '*';


    if (equal == true) { //limpar a seguir ao sinal = para colocar outro digito
        clean();
       }

        switch (n) {
            case '.':
                if (isDot == true) {
                    n = ' ';
                } else {
                    isDot = true
                }
                break;

            case '+':
                if (operators == '+' ) {
                    clean();
                } 
                isDot = false;
                break;

            case '-':
                if (operators == '-' ) {
                    clean();      
                } else if (x.length == 0) {
                    n = '';
                }
                isDot = false;
                break;

            case '/':
                if (operators == '/') {
                    clean();      
                } else if (x[0] == '/' && x.length == 0 ) {
                        n = '';
                }
                isDot = false;
                break;

            case '*':
                if (operators == '*' ) {
                    clean();
                } else if (x[0] == '*' && x.length == 1 ) {
                        n = '';
                }
                isDot = false;
                break;      

            case '0':
                if (x[0] == '0' &&  x.length == 1) {
                    n = '';
                } else if (x[0] == '0' && x.length == 0 ) {
                    n = '';
                }
                break;                                     
        }
        document.getElementById('main-screen').innerHTML += n;
    }

    //variável para guardar dados

function calc () {

    let val = document.getElementById('main-screen').innerHTML;
    /* let val2 = parseFloat(eval(val));
    document.getElementById('main-screen').innerHTML = Math.round(val2 * 100)/100; */
    if (val.length>1) {
        document.getElementById('main-screen').innerHTML = Math.round((parseFloat(eval(val))*1000))/1000;
        
        equal = true;
    }
}

function clean () {
    document.getElementById('main-screen').innerHTML = ' ';
    isDot = false;
    equal = false;
}

function bck () {
   let result = document.getElementById('main-screen').innerHTML;
   document.getElementById('main-screen').innerHTML = result.substr(0, result.length -1);
   /* let result = document.getElementById('main-screen').innerHTML;
   document.getElementById('main-screen').innerHTML = result.split('');
    */
}

function sqr () {
   let val = document.getElementById('main-screen').innerHTML;
   document.getElementById('main-screen').innerHTML = Math.sqrt(val);
}
function expo () {
   let val = document.getElementById('main-screen').innerHTML;
   document.getElementById('main-screen').innerHTML = Math.pow(val, 2);
}


//calculadora não permitir mais do que 1 ponto.

//Não permitir mais do que 1 zero à esquerda.

//Depois de carregar no = ele tem de fazer o c primeiro.

//Resolver o NaN quando se carrega no igual.

//primeiro algarismo não pode ser um operador expto o -.

