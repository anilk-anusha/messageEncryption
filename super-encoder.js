// Import the encryptors functions here.
const {
    caesarCipher,
    symbolCipher,
    reverseCipher,
} = require("./encryptors.js");


// to encode we can use the program with a defined amount in this example it is 6
const encodeMessage = (str) => {
    return reverseCipher(symbolCipher(caesarCipher(str, 6)));
};


// to decode we can run the same program in reverse 
const decodeMessage = (str) => {
    return caesarCipher(symbolCipher(reverseCipher(str)), -6);
};

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === "encode") {
        output = encodeMessage(str);
    }
    if (process.argv[2] === "decode") {
        output = decodeMessage(str);
    }

    process.stdout.write(output + "\n");
    process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
