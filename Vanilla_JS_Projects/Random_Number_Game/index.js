let number = [Math.floor(Math.random()*100)]
let button = document.getElementById('btn');
let output = document.getElementById('outputtext')

button.addEventListener('click', (e) => {
    let input = document.getElementById('number').value;
    if (input == number) {
        output.innerText = `Your Guess is Correct!!, The number was ${number}`;
    } else if (input < number) {
        output.innerText = "Your guess is too low";
    }

    if (input > number) {
        output.innerText = "You guessed too high!"
    }
})