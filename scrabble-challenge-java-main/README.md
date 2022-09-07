# Scrabble Challenge - this time in Java!

Passed all the 14 tests in the below given java scrabble task

# Task

Given a word, compute the scrabble score for that word.

##### Letter Values

You'll need these:

| Letter                        | Value  |
| ----                          |  ----  |
| A, E, I, O, U, L, N, R, S, T  |     1  |
| D, G                          |     2  |
| B, C, M, P                    |     3  |
| F, H, V, W, Y                 |     4  |
| K                             |     5  |
| J, X                          |     8  |
| Q, Z                          |     10 |

Example
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

```
3 + 2x1 + 2x3 + 2 + 1
= 3 + 2 + 6 + 3
= 14
```

## Acceptance Criteria

```java

class ScrabbleRunner {

   public static void main(String[] args) {
      Scrabble scrabble = new Scrabble("");
      scrabble.score();   // => 0

      Scrabble scrabble = new Scrabble(null);
      scrabble.score();   // => 0

      Scrabble scrabble = new Scrabble("a");
      scrabble.score(); // => 1

      Scrabble scrabble = new Scrabble("f");
      scrabble.score(); // => 4

      Scrabble scrabble = new Scrabble("street");
      scrabble.score(); // =>, 6

      Scrabble scrabble = new Scrabble("quirky");
      scrabble.score(); // => 22

      Scrabble scrabble = new Scrabble("OXYPHENBUTAZONE");
      scrabble.score(); // => 41
   }
}
```

## Extended Acceptance Criteria
> Each `Scrabble` method should be no more than 5 lines and contain no more than 5 operations.

> You can play a double or a triple letter.

> You can play a double or a triple word.