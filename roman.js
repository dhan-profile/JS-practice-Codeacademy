function convertToRoman(num) {
    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MM", "MMM"]];
        
        if (num < 1 || num > 3999) {
            return "Number out of range (1 to 3999)";
        }
    
        const thousands = Math.floor(num / 1000);
        const hundreds = Math.floor((num % 1000) / 100);
        const tens = Math.floor((num % 100) / 10);
        const ones = num % 10;
    
        return romanNumerals[3][thousands] +
               romanNumerals[2][hundreds] +
               romanNumerals[1][tens] +
               romanNumerals[0][ones];
    return num;
   }
   
console.log(convertToRoman(36));
console.log(convertToRoman(354)); 
console.log(convertToRoman(1984));