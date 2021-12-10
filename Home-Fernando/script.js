/* Meme */
var counter = 0;

var fears = [{
        image: "kisspng-kunal-nayyar-the-big-bang-theory-raj-koothrappali-5af58127e49059.9551181415260388239362__1_.png",
        joke: "I know the feeling. It’s like accidentally walking into a gay bar and then having no one hit on you…it happened to a friend of mine.",
        fear: "Monophobia is the fear of being isolated, lonely, or alone. As a phobia, this fear isn’t necessarily a realistic one. Though you may know that you are safe physically, you may still be afraid of strangers or intruders, being unloved, having an emergency and no help, or experiencing other unexpected events without assistance.",
        solution: "Like many other situational phobias, monophobia can be managed through psychotherapy. There are a few ways that a therapist might help you work through your fear of being alone. " +
            "Exposure therapy. This form of therapy is based on incrementally increasing the amount of time that someone is exposed to the thing or situation that they are afraid of. Exposure therapy has been scientifically and clinically demonstrated to help people overcome certain kinds of anxieties and phobias."
    },
    {
        image: "img/kisspng-johnny-galecki-the-big-bang-theory-leonard-hofstad-download-cambridge-yearbook-of-european-legal-stud-5ba47f280c8df7.5340962115375071120514.png",
        joke: "I am a horny engineer; I never joke about math or sex.",
        fear: "Cringe: to feel disgust or embarrassment and often to show this feeling by a movement of your face or body.",
        solution: "Embracing the cringe—for example, by sharing stories with friends of your biggest relationship failures or gaffes, or your worst professional moments—is a gift to your fellow humans. It sends a message that despite all of the imperfections and mortifications of the human condition, we survive. We’re flawed, and still worthy of care, love, consideration and attention. This is a more humane, and humanist, way to think about personal failure than to try to spin it, suppress it, or otherwise protect the “brand” that is a life. After all, how do young people learn that it really isn’t the “end of the world” when you embarrass yourself or get ditched?"
    },
    {
        image: "imgbin_kaley-cuoco-the-big-bang-theory-drawing-png.png",
        joke: "Sheldon: Why are you crying?" +
            "Penny: Because I’m stupid." +
            "Sheldon: That’s no reason to cry. One cries because one is sad. For example, I cry because others are stupid, and that makes me sad.",
        fear: "When we question our knowledge and skills, and feel like we don’t deserve our achievements, it’s known as imposter syndrome.",
        solution: "Maybe you’ve started a new job and all of your coworkers seem so accomplished, unlike how you feel inside. You start to feel like a fraud and worry that your boss will realize they’ve made a huge mistake in hiring you. We feel like we don’t belong or deserve recognition for our work, even though we absolutely do. But the voice in our head keeps on insisting that we are stupid, so we start to believe it."
    },
    {
        image: "img/pngwing.com.png",
        joke: "Feelings? What am I? A hippy at a love-in?",
        fear: "Avoiding our feelings or hiding behind a string of emojis and clever memes isn’t the solution (although very satisfying). Understanding the emotions we feel, how to talk about them, and ways to navigate their complexities can help us crack this emotional code.",
        solution: "Writing down how you feel can be a great way to gain some clarity and reframe the negative thoughts you’ve been having about yourself."
    },
    {
        image: "img/kisspng-johnny-galecki-the-big-bang-theory-leonard-hofstad-download-cambridge-yearbook-of-european-legal-stud-5ba47f280c8df7.5340962115375071120514.png",
        joke: "Leonard: I did a bad thing." +
            "Sheldon: Does it affect me?" +
            "Leonard: No." +
            "Sheldon: Then suffer in silence.",
        fear: "It’s a fact that at some point in our lives we are going to be judged for something. We are all open to being negatively affected by something that someone else says or does. It can be hurtful, making us feel vulnerable and paranoid about being judged again in the future. "
    }
]

$(document).ready(function() {
    $('#fear-judged-try').hide();
});

var random = document.querySelector('#random');

function getFear(id, btnId) {

    $('#msg1').css('display', 'block');
    $('#msg2').css('display', 'block');
    $('#msg3').css('display', 'block');
    $('#msg4').css('display', 'block');
    $('#random2').attr("src", fears[id].image);
    $('#random').text(fears[id].joke);
    $('#random1').text(fears[id].fear);
    $('#random3').text(fears[id].solution);
    $('#fear-judged-try').show();
    $('button').not($('#' + btnId)).hide();
    console.log(btnId);
    $('#fear-judged-try').show();
}

function tryAgain(id) {

    $('button').not($(this)).show();
    $('#fear-judged-try').hide();
    $('#msg1').hide();
    $('#msg2').hide();
    $('#msg3').hide();
    $('#msg4').hide();

    //you also can use toggle Class for hidden
    //$('button').not($(this)).toggleClass('btn-success');


}