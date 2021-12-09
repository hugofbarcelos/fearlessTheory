package characters;

import java.util.HashMap;

public class Raj implements Jokes{
  /*  @Override
    public void joke() {

        String firstJoke = "[Stuart] Believes In Himself. Even Though The Whole World Has Made It Clear He Should Not.";
        String secondJoke = "A Shiny Sheldon";
        String thirdJoke = "Big Talk From A Man Who Was Once Treed By A Chicken.";
        String fourthJoke = "With Your American Accent, Everything You Say Sounds Stupid.";
        String fifthJoke = "I Think You Were Mean Before You Were Pregnant, But It's Fine.";
        String sixthJoke = "He's Tall, Pale And Awkward. That Sounds Like Your Type.";
        String seventhJoke = "Billionaire With Wings";
        String eightJoke = "The Heart Wants What The Heart Wants, Or In This Case, Doesn't";
        String nineJoke = "Maybe Your Baby's Just A Jerk";
        String tenJoke = "Say Cousin";
    } */

    private String fearOfBeingAlone = "Raj always seemed to be searching for a great love. He starts the series going out with Howard, attempting to hook up with girls, and eventually wants to settle down once his friends end up in long term committed relationships.\n" +
            "\n" +
            "However, at the end of The Big Bang Theory, Raj slowly transforms into a person who is comfortable with themselves and in being single. He understands his expectations of a relationship and knows that he cannot settle for less.";

    private String joke = "Believes In Himself. Even Though The Whole World Has Made It Clear He Should Not.";

    HashMap<String, String> fearAndJoke = new HashMap<>();



    @Override
    public HashMap<String, String> joke(String fear) {

        if(fear.equals("alone")){
            fearAndJoke.put(fearOfBeingAlone,joke);
        }
        return fearAndJoke;
    }
}
