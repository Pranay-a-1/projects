
import java.util.HashMap;
import java.util.Map;

public abstract class Scores {

    public Scores() {
    }

    private final String[] letters1 = {"A", "E", "I", "O", "U", "L", "N", "R", "S", "T"};
    private final String[] letters2 = {"D", "G"};
    private final String[] letters3 = {"B", "C", "M", "P"};
    private final String[] letters4 = {"F", "H", "V", "W", "Y"};
    private final String[] letters5 = {"K"};
    private final String[] letters8 = {"J", "X"};
    private final String[] letters10 = {"Q", "Z"};
    private Map<String, Integer> scores = new HashMap<>();

    protected Map createMap() {
        for (String letter : letters1)  { scores.put(letter , 1); }
        for (String letter : letters2)  { scores.put(letter , 2); }
        for (String letter : letters3)  { scores.put(letter , 3); }
        for (String letter : letters4)  { scores.put(letter , 4); }
        for (String letter : letters5)  { scores.put(letter , 5); }
        for (String letter : letters8)  { scores.put(letter , 8); }
        for (String letter : letters10) { scores.put(letter , 10); }
        return scores;
    }


}
