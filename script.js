let string = "";
input = document.getElementById('input');
const button = document.querySelectorAll('button');
Array.from(button).forEach(element => {
    element.addEventListener('click', (e) => {
            if (e.target.innerHTML == "=") {
            let newstring=string
            .replace('sin','Math.sin')
            .replace('cos','Math.cos')
            .replace('tan','Math.tan')
            .replace('log','Math.log10')
            .replace('ln','Math.log2')
            .replace('√','Math.sqrt')
            .replace('pow','Math.pow')
            string = eval(newstring);
            input.value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "X") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
    
        else if (e.target.innerHTML == "⇔") {
            const buttons = document.getElementById('buttons');
            const buttons2 = document.getElementById('buttons2');
            buttons.classList.toggle('toggle');
            buttons2.classList.toggle('toggle2');
        }
        else if (e.target.innerHTML == 'X<sup>2</sup>') {
            string="";
            let n= input.value;
            string = n*n;
            input.value=string;
        }
        else if (e.target.innerHTML == 'X<sup>3</sup>') {
            string="";
            let n= input.value;
            string = n*n*n;
            input.value=string;
        }
        else if (e.target.innerHTML == '!') {
            let n = input.value;
            string = "";
            string = factorial(n);
            input.value = string;
        }
        
        else {
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
});
const factorial = (n) => {
    if (n == 1)
        return 1;

    return n * factorial(n - 1);
}