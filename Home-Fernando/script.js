/* Meme */
var counter = 0;
var memes = [
    'Dude, you smashed my turtle saying "I\'M MARIO BROS!"',
    'Dude, you grabed seven oranges and yelled "I GOT THE DRAGON BALLS!"',
    'Dude, you threw my hamster across the room and said "PIKACHU I CHOOSE YOU!"',
    'Dude, you congratulated a potato for getting a part in Toy Story',
    'Dude, you were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!"',
    'Dude, you were cutting all my pinapples yelling "SPONGEBOB! I KNOW YOU\'RE THERE!"',
];

var fears = [{
        joke: "If anyone’s interested, I’ll be spending this Valentine’s in the same way I spend every Valentine’s. Buying disoriented chicken from the supermarket, taking home, standing over the sink and eating out of the packet with my bare hands like an animal.",
        fear: "explaining how he or her overcame it",
        image: "image"
    },
    {
        image: "img/kisspng-johnny-galecki-the-big-bang-theory-leonard-hofstad-download-cambridge-yearbook-of-european-legal-stud-5ba47f280c8df7.5340962115375071120514.png",
        joke: "I am a horny engineer; I never joke about math or sex.",
        fear: "Cringe: to feel disgust or embarrassment and often to show this feeling by a movement of your face or body."
    }
]

$(document).ready(function() {
    $('#fear-judged-try').hide();
});

var random = document.querySelector('#random');

function getFear(id, btnId) {

    $('#msg1').css('display', 'block');
    $('#msg2').css('display', 'block');
    $('#random2').attr("src", fears[id].image);
    $('#random').text(fears[id].joke);
    $('#random1').text(fears[id].fear);
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
    //you also can use toggle Class for hidden
    //$('button').not($(this)).toggleClass('btn-success');


}