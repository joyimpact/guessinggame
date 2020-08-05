let user_guess = 0
scene.setBackgroundColor(randint(1, 15))
game.splash("Guessing Game!", "Press A to start.")
game.splash("I choose a number", "between 1 and 100.")
game.splash("Can you guess it?")
let count = 0
let com_number = randint(1, 100)
while (true) {
    user_guess = game.askForNumber("Your guess:", 3)
    count += 1
    if (user_guess == com_number) {
        game.splash("Correct!", "You got it in " + count + " times.")
        game.splash("Press A to play again.")
        game.reset()
    } else if (user_guess < com_number) {
        game.splash("It's too small")
    } else {
        game.splash("It's too large")
    }
}
