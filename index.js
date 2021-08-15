// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];
const event = ["birthday", "Christmas", "holiday"]

function writeCards(names, event) {
    let messages = [];
    
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages
}

writeCards(names,"birthday");

function countDown(positiveNumber) {
    while (positiveNumber >=0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
}

countDown(100);

