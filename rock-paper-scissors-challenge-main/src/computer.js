class Computer {
    constructor() {
        this.randomComputerChosenMove;
    }

    computerChoice() {
        const choice = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        const randomComputerChoice = choice[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
        return this.randomComputerChosenMove = randomComputerChoice;
    }
}

export default Computer;