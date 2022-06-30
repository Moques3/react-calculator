import { createContext, useState } from "react";

export const CalcContext = createContext([]);

export function CalcProvider({ children }) {
    const [value, setValue] = useState('0');

    function changeValue(newValue) {
        if (value.includes('/') || value.includes('+') || value.includes('-') || value.includes('*')) {
            setValue(value + ' ' + newValue);
        }
        else{
            if (value != '0' && value.length >= 1) {
                setValue(value + ' ' + newValue);
            }
            else {
                setValue(newValue +``);
            }
        }
    }

    function clean() {
        setValue('0');
    }

    function sum (a,b){
        return parseInt(a) + parseInt(b);
    }

    function sub (a,b){
        return parseInt(a) - parseInt(b);
    }

    function calc() {
        let parts = value.split(' ');
        parts = parts.join('').split('');

        let auxResult = '';
       
        parts.map((part, index) => {
        // console.log(`Posição: ${index}\nConteúdo: ${part}`);~
       
        if (part == '+') {
            auxResult = sum(parts[index+1], parts[index-1]);
        }
        if (part == '-'){

        }
        
       });

       console.log(auxResult);


        // console.log(parts);

        // setValue((sub(parts[0], parts[1])) + '');
    }

    function operation(operator) {
        if (operator == 'AC'){
            clean();
        }
        else if (operator == `=`) {
            calc();
        }
        else {
            setValue(value+ ' ' + operator);
        }
    }

    return (
        <CalcContext.Provider value={{ value, changeValue, operation }}>
            {children}
        </CalcContext.Provider>
    );
}