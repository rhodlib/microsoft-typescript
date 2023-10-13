function displayAlert(message: string | number) {
    alert('The message is ' + message);
}

function sum(input: number[]): number {
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}