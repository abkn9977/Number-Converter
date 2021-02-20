window.onload = function () {
    const fromSection = document.querySelector("#from");
    const toSection = document.querySelector("#to");
    const convertBtn = document.querySelector("#convert");
    const result = document.querySelector("#result");
    const clearInput = document.querySelector("#clearInput");

    /**
     * instantiate convertion
     */
    let conversion = new Conversion();

    /**
     * Initially decimal number will be converted to 
     * binary number
     */
    let fromNumber = fromSection.value;
    let toNumber = toSection.value;

    /**
     * Select from number (which will be converted)
     */
    fromSection.addEventListener("change", function (e) {
        fromNumber = this.value;
        console.log(fromNumber + "\n" + toNumber);
    });

    /**
     * Select to number (which will be the resultant number)
     */
    toSection.addEventListener("change", function (e) {
        toNumber = this.value;
        console.log(fromNumber + "\n" + toNumber);
    })

    /**
     * Action on convert
     */
    convertBtn.addEventListener("click", function (e) {
        e.preventDefault();

        let numberToConvert = document.getElementById("fromNumber").value.trim();

        if (numberToConvert == "") {
            return;
        }

        //decimal to decimal conversion
        if (fromNumber == "dec" && toNumber == "dec") {
            if (conversion.checkDecimal(numberToConvert))
                showResult(numberToConvert);
            else
                showResult("The number you provided is not a valid decimal")
        }

        //binary to binary conversion
        if (fromNumber == "bin" && toNumber == "bin") {
            if (conversion.checkBinary(numberToConvert))
                showResult(numberToConvert);
            else
                showResult("The number you provided is not a valid binary");
        }

        //hexadecimal to hexadecimal conversion
        if (fromNumber == "hex" && toNumber == "hex") {
            if (conversion.checkHexadecimal(numberToConvert))
                showResult(numberToConvert);
            else
                showResult("The number you provided is not a valid hexadecimal")
        }

        //octal to octal convertion
        if (fromNumber == "oct" && toNumber == "oct") {
            if (conversion.checkOctal(numberToConvert))
                showResult(numberToConvert);
            else
                showResult("The number you provided is not a valid octal");
        }

        //decimal to binary conversion
        if (fromNumber == "dec" && toNumber == "bin")
            showResult(conversion.decimalToBinary(numberToConvert));

        //decimal to hexadecimal
        if (fromNumber == "dec" && toNumber == "hex")
            showResult(conversion.decimalToHexadecimal(numberToConvert));

        //decimal to octal
        if (fromNumber == "dec" && toNumber == "oct")
            showResult(conversion.decimalToOctal(numberToConvert));

        //Binary to decimal
        if (fromNumber == "bin" && toNumber == "dec")
            showResult(conversion.binaryToDecimal(numberToConvert));

        //Binary to Hexadecimal
        if (fromNumber == "bin" && toNumber == "hex")
            showResult(conversion.binaryToHexadecimal(numberToConvert));

        //Binary to octal
        if (fromNumber == "bin" && toNumber == "oct")
            showResult(conversion.binaryToOctal(numberToConvert));

        //Hexadecimal to decimal
        if (fromNumber == "hex" && toNumber == "dec")
            showResult(conversion.hexadecimalToDecimal(numberToConvert));

        //Hexadecimal to binary
        if (fromNumber == "hex" && toNumber == "bin")
            showResult(conversion.hexadecimalToBinary(numberToConvert));

        //Hexadecimal to octal
        if (fromNumber == "hex" && toNumber == "oct")
            showResult(conversion.hexadecimalToOctal(numberToConvert));

        //Octal to decimal
        if (fromNumber == "oct" && toNumber == "dec")
            showResult(conversion.octalToDecimal(numberToConvert));

        //Octal to binary
        if (fromNumber == "oct" && toNumber == "bin")
            showResult(conversion.octalToBinary(numberToConvert));

        //Octal to hexadecimal
        if (fromNumber == "oct" && toNumber == "hex")
            showResult(conversion.octalToHexadecimal(numberToConvert));
    });


    /** 
     * Clear input field
     */
    clearInput.addEventListener("click", function (e) {
        document.getElementById("fromNumber").value = "";
        showResult("");
    });

    /**
     * show result
     */
    function showResult(message) {
        result.innerHTML = message;
    }
}