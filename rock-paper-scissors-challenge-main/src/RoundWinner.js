class RoundWinner {
    constructor() {
        this.PlayerScore = 0;
        this.ComputerScore = 0;
        this.winningMessage = undefined;
        this.winningPlayer = undefined;
    }


    checkWinner(PlayerMove, ComputerMove) {
        switch (PlayerMove + ComputerMove) {
            case 'ScissorsPaper':
            case 'PaperRock':
            case 'RockLizard':
            case 'LizardSpock':
            case 'SpockScissors':
            case 'ScissorsLizard':
            case 'LizardPaper':
            case 'PaperSpock':
            case 'SpockRock':
            case 'RockScissors':
                this.winningMessage = 'YOU WIN!';
                this.winningPlayer = 'Player1'
                this.PlayerScore++;
                break;
            case 'PaperScissors':
            case 'RockPaper':
            case 'LizardRock':
            case 'SpockLizard':
            case 'ScissorsSpock':
            case 'LizardScissors':
            case 'PaperLizard':
            case 'SpockPaper':
            case 'RockSpock':
            case 'ScissorsRock':
                this.winningMessage = 'YOU LOSE!';
                this.winningPlayer = 'Player2'
                this.ComputerScore++;
                break;
            case 'ScissorsScissors':
            case 'RockRock':
            case 'PaperPaper':
            case 'SpockSpock':
            case 'LizardLizard':
                this.winningMessage = 'ITS A DRAW!';
                this.winningPlayer = 'Draw'
                break;
        }
    }
}

export default RoundWinner;
