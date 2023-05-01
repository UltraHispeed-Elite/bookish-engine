// Initialize variables
var value1 = 0;
var value2 = 0;
var value3 = 0;
var value4 = 0;
var value5 = 0;
var value6 = 0;

// Define function to generate random numbers and display them
function test() {
    let a;
    let b;
    let c;
    let d;

    // Generate six sets of random numbers
    for(let i = 0; i < 6; i++) {
        do {
            a = Math.floor(Math.random() * 6) + 1;
        } while(a===1);

        do {
            b = Math.floor(Math.random() * 6) + 1;
        } while(b===1);

        do {
            c = Math.floor(Math.random() * 6) + 1;
        } while(c===1);

        do {
            d = Math.floor(Math.random() * 6) + 1;
        } while(d===1);

        let arr = [a, b, c, d];

        arr.sort(function(x,y){ return x-y });

        let sum = arr[1] + arr[2] + arr[3];

        console.log(a,b,c,d);
        console.log(sum);

        // Store the sum in the corresponding variable
        switch(i) {
            case 0:
                value1 = sum;
                break;
            case 1:
                value2 = sum;
                break;
            case 2:
                value3 = sum;
                break;
            case 3:
                value4 = sum;
                break;
            case 4:
                value5 = sum;
                break;
            case 5:
                value6 = sum;
                break;
        }
    }

    // Display the values on the webpage
    const value1Collection = document.getElementsByClassName("value1")[0].innerText = value1+STRbonus;
    const value2Collection = document.getElementsByClassName("value2")[0].innerText = value2+STRbonus;
    const value3Collection = document.getElementsByClassName("value3")[0].innerText = value3+STRbonus;
    const value4Collection = document.getElementsByClassName("value4")[0].innerText = value4+STRbonus;
    const value5Collection = document.getElementsByClassName("value5")[0].innerText = value5+STRbonus;
    const value6Collection = document.getElementsByClassName("value6")[0].innerText = value6+STRbonus;

    const value1Collection1 = document.getElementsByClassName("value1")[1].innerText = value1+DEXbonus;
    const value2Collection1 = document.getElementsByClassName("value2")[1].innerText = value2+DEXbonus;
    const value3Collection1 = document.getElementsByClassName("value3")[1].innerText = value3+DEXbonus;
    const value4Collection1 = document.getElementsByClassName("value4")[1].innerText = value4+DEXbonus;
    const value5Collection1 = document.getElementsByClassName("value5")[1].innerText = value5+DEXbonus;
    const value6Collection1 = document.getElementsByClassName("value6")[1].innerText = value6+DEXbonus;

    const value1Collection2 = document.getElementsByClassName("value1")[2].innerText = value1+CONbonus;
    const value2Collection2 = document.getElementsByClassName("value2")[2].innerText = value2+CONbonus;
    const value3Collection2 = document.getElementsByClassName("value3")[2].innerText = value3+CONbonus;
    const value4Collection2 = document.getElementsByClassName("value4")[2].innerText = value4+CONbonus;
    const value5Collection2 = document.getElementsByClassName("value5")[2].innerText = value5+CONbonus;
    const value6Collection2 = document.getElementsByClassName("value6")[2].innerText = value6+CONbonus;

    const value1Collection3 = document.getElementsByClassName("value1")[3].innerText = value1+INTbonus;
    const value2Collection3 = document.getElementsByClassName("value2")[3].innerText = value2+INTbonus;
    const value3Collection3 = document.getElementsByClassName("value3")[3].innerText = value3+INTbonus;
    const value4Collection3 = document.getElementsByClassName("value4")[3].innerText = value4+INTbonus;
    const value5Collection3 = document.getElementsByClassName("value5")[3].innerText = value5+INTbonus;
    const value6Collection3 = document.getElementsByClassName("value6")[3].innerText = value6+INTbonus;

    const value1Collection4 = document.getElementsByClassName("value1")[4].innerText = value1+WISbonus;
    const value2Collection4 = document.getElementsByClassName("value2")[4].innerText = value2+WISbonus;
    const value3Collection4 = document.getElementsByClassName("value3")[4].innerText = value3+WISbonus;
    const value4Collection4 = document.getElementsByClassName("value4")[4].innerText = value4+WISbonus;
    const value5Collection4 = document.getElementsByClassName("value5")[4].innerText = value5+WISbonus;
    const value6Collection4 = document.getElementsByClassName("value6")[4].innerText = value6+WISbonus;

    const value1Collection5 = document.getElementsByClassName("value1")[5].innerText = value1+CHAbonus;
    const value2Collection5 = document.getElementsByClassName("value2")[5].innerText = value2+CHAbonus;
    const value3Collection5 = document.getElementsByClassName("value3")[5].innerText = value3+CHAbonus;
    const value4Collection5 = document.getElementsByClassName("value4")[5].innerText = value4+CHAbonus;
    const value5Collection5 = document.getElementsByClassName("value5")[5].innerText = value5+CHAbonus;
    const value6Collection5 = document.getElementsByClassName("value6")[5].innerText = value6+CHAbonus;
}