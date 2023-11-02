document.addEventListener("DOMContentLoaded", function () {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=";

    function generatePassword() {
        const length = document.getElementById("length").value;
        const includeUpperCase = document.getElementById("upperCase").checked;
        const includeLowerCase = document.getElementById("lowerCase").checked;
        const includeNumbers = document.getElementById("numbers").checked;
        const includeSymbols = document.getElementById("symbols").checked;

        let characters = "";

        if (includeUpperCase) characters += upperCase;
        if (includeLowerCase) characters += lowerCase;
        if (includeNumbers) characters += numbers;
        if (includeSymbols) characters += symbols;

        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        document.getElementById("password").value = password;
    }

    document.getElementById("generate").addEventListener("click", generatePassword);
});
