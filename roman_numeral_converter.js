function convertToRoman(num) {
    const romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const numArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanString = "";

    do {
        for (let i = 0; i < numArray.length; i++) {
            if (num >= numArray[i]) {
                let count = Math.trunc(num / numArray[i]);
                for (let x = 0; x < count; x++) {
                    romanString += romanArray[i];
                }
                num = num - (numArray[i] * count);
                console.log(num);
            }
        }
    } while (num != 0);
    return romanString;
}

console.log(convertToRoman(12));