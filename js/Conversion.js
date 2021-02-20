/**
 *  Conversion class have almost all methods for number conversion
 *  @author Aftab Ansari
 *  @since Jan 19, 2020
 */
class Conversion {


    /**
     * This function check if the provided number is binary of not
     * @param {String} num 
     */
    checkBinary(num) {
        let bin = /\b[0-1]+\b/;
        if (bin.test(num)) {
            bin.lastIndex = 0;
            return true;
        }

        return false;
    }

    /**
     * This function check if the provided number is hexadecimal or not
     * @param {String} String 
     */
    checkHexadecimal(num) {
        let hex = /\b[0-9A-Fa-f]+\b/;
        if (hex.test(num)) {
            hex.lastIndex = 0;
            return true;
        }

        return false;
    }

    /**
     * This function check if the provided number is octal or not
     * @param {String} num 
     */
    checkOctal(num) {
        let oct = /\b[0-7]+\b/;
        if (oct.test(num)) {
            oct.lastIndex = 0;
            return true;
        }

        return false;
    }

    /**
     * This function check if the provided number is decimal or not
     * @param {String} num 
     */
    checkDecimal(num) {
        let dec = /\b[0-9]+\b/;
        if (dec.test(num)) {
            dec.lastIndex = 0;
            return true;
        }
        return false;
    }

    /**
     * 1. This function converts the decimal number into it's binary form
     * @param {Number} decimal number
     */
    decimalToBinary(decimal) {
        if (this.checkDecimal(decimal)) {
            let binary = Array();
            let i = 0;
            decimal = parseInt(decimal);
            while (decimal != 0) {
                binary[i++] = decimal % 2;
                decimal = Math.floor(decimal / 2);
            }
            return binary.reverse().join("");
        } else {
            return "The number you provided is not a valid decimal";
        }
    }

    /**
     * 2.  This function converts decimal number to hexadecimal number
     * @param {Number} decimal number
     */
    decimalToHexadecimal(decimal) {

        if (this.checkDecimal(decimal)) {
            let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
            let hexaDecimal = Array();
            let i = 0;
            decimal = parseInt(decimal);
            while (decimal != 0) {
                let hex = decimal % 16;
                hexaDecimal[i++] = hexCodes[hex];
                decimal = Math.floor(decimal / 16);
            }
            return hexaDecimal.reverse().join("");
        } else {
            return "The number you provided is not a valid decimal";
        }
    }

    /**
     * 3. This function converts decimal number to octal number
     * @param {Number} decimal number
     */
    decimalToOctal(decimal) {
        if (this.checkDecimal(decimal)) {
            let octal = Array();
            let i = 0;
            decimal = parseInt(decimal);
            while (decimal != 0) {
                octal[i++] = decimal % 8;
                decimal = Math.floor(decimal / 8);
            }

            return octal.reverse().join("");
        } else {
            return "The number you provided is not a valid decimal";
        }
    }
    /**
     * 4. This function converts the binary number to decimal number
     * @param {*} binary number
     */

    binaryToDecimal(binary) {

        if (this.checkBinary(binary)) {
            let decimal = 0;
            let multiplier = 1;
            while (binary != 0) {
                let bin = binary % 10;
                decimal += bin * multiplier;
                multiplier *= 2;
                binary = Math.floor(binary / 10);
            }
            return decimal;
        } else {
            return "The number you provided is not a valid binary";
        }
    }


    /**
     * 5. This function converts the binary number to hexadecimal
     * @param {Number} binary number
     */
    binaryToHexadecimal(binary) {
        if (this.checkBinary(binary)) {
            let decimal = this.binaryToDecimal(binary);
            return this.decimalToHexadecimal(decimal);
        } else {
            return "The number you provided is not a valid binary";
        }
    }

    /**
     * 6. This function converts the binary number to octal
     * @param {Number} binary number
     */
    binaryToOctal(binary) {
        if (this.checkBinary(binary)) {
            let decimal = this.binaryToDecimal(binary);
            return this.decimalToOctal(decimal);
        } else {
            return "The number you provided is not a valid binary";
        }
    }

    /**
     * 7. This function converts the octal to decimal
     * @param {Number} octal number
     */
    octalToDecimal(octal) {
        if (this.checkOctal(octal)) {
            let decimal = 0;
            let mul = 1;
            while (octal > 0) {
                let rem = octal % 10;
                decimal += rem * mul;
                mul *= 8;
                octal = Math.floor(octal / 10);
            }

            return decimal;
        } else {
            return "The number you provided is not a valid octal";
        }
    }

    /**
     * 8. This function converts the octal to binary
     * @param {Number} octal number
     */
    octalToBinary(octal) {
        if (this.checkOctal(octal)) {
            let decimal = this.octalToDecimal(octal);
            return this.decimalToBinary(decimal);
        } else {
            return "The number you provided is not a valid octal";
        }
    }

    /**
     * 9. This function converts the octal to hexadecimal
     * @param {Number} octal number
     */
    octalToHexadecimal(octal) {
        if (this.checkOctal(octal)) {
            let decimal = this.octalToDecimal(octal);
            return this.decimalToHexadecimal(decimal);
        } else {
            return "The number you provided is not a valid octal";
        }
    }

    /**
     * 10. This function converts the hexadecimal to decimal
     * @param {String} hexadecimal number
     */
    hexadecimalToDecimal(hexadecimal) {
        if (this.checkHexadecimal(hexadecimal)) {
            let digits = "0123456789ABCDEF";
            hexadecimal = hexadecimal.toString().toUpperCase();
            let decimal = 0;
            let mul = 1;

            for(let i = hexadecimal.length - 1; i >= 0; i --){
                let c = hexadecimal.charAt(i);
                let d = digits.indexOf(c);
                decimal += mul * d;
                mul *= 16;
            }

            return decimal;
        } else {
            return "The number you provided is not a valid hexadecimal";
        }
    }

    /**
     * 11. This function converts the hexadecimal to binary
     * @param {String} hexadecimal number
     */
    hexadecimalToBinary(hexadecimal) {
        if (this.checkHexadecimal(hexadecimal)) {
            let decimal = this.hexadecimalToDecimal(hexadecimal);
            return this.decimalToBinary(decimal);
        } else {
            return "The number you provided is not a valid hexadecimal";
        }
    }

    /**
     * 12. This function converts the hexadecimal to octal
     * @param {String} hexadecimal number
     */
    hexadecimalToOctal(hexadecimal) {
        if (this.checkHexadecimal(hexadecimal)) {
            let decimal = this.hexadecimalToDecimal(hexadecimal);
            return this.decimalToOctal(decimal);
        } else {
            return "The number you provided is not a valid hexadecimal";
        }
    }
}