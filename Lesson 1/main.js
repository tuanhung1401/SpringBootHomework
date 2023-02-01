const calculateFactorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial(5));

const reverseString = (string) => {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

console.log(reverseString('hello'));

const translate = (country) => {
    switch (country) {
        case 'VN':
            text = "Xin chào";
            break;
        case 'EN':
            text = "Hello";
            break;
        case 'ES':
            text = "Hola";
            break;
        case 'FR':
            text = 'Bonjour';
            break;
        case 'DE':
            text = 'Guten tag';
    }
    return text;
}

console.log(translate('ES'));

const subString = (longString) => {
    let newString = longString.substring(0,10) + '...';
    return newString;
}

console.log(subString('xinchaocacbandenvoiTechmaster'));