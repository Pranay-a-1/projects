import java.util.Map;

public class Scrabble extends Scores {

    private final String aString;
    private int char1;
    private int char2;
    private boolean bool1;
    private boolean bool2;

    private final Map<String, Integer> scores1 = createMap();

    public Scrabble(String aString) {
        this.aString = aString;
    }

    public Scrabble(String aString, Character[] char1, Character[] char2 , boolean bool1, boolean bool2) {
        this.aString = aString;
        this.char1 = this.score(char1);
        this.char2 = this.score(char2);
        this.bool1 = bool1;
        this.bool2 = bool2;
    }


    protected int score() {
        if (this.aString == null || this.aString.equals("") ) { return 0; }
        int scoreCounter = 0;
        scoreCounter += this.score(this.aString);
        if (this.bool1) {scoreCounter *= 2;}
        if (this.bool2) {scoreCounter *= 3;}
        scoreCounter += this.char1;
        scoreCounter += (this.char2 * 2);
        return scoreCounter;
    }

    protected int score(Character[] aCharArray) {
        if (aCharArray == null) { return 0;}
        int counter = 0;
        for (Character character : aCharArray) {
            counter += this.score(String.valueOf(character));
        } return counter;
    }

    protected  int score (String givenString) {
        int scoreCounter = 0;
        for (int i = 0; i < givenString.length(); i++) {
            scoreCounter += scores1.get((String.valueOf(givenString.charAt(i))).toUpperCase());
        } return scoreCounter;
    }

}
