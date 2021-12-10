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

//random.innerHTML = memes[Math.floor(Math.random() * memes.length)];

/* Time */

var deviceTime = document.querySelector('.status-bar .time');
var messageTime = document.querySelectorAll('.message .time');

deviceTime.innerHTML = moment().format('h:mm');

setInterval(function() {
    deviceTime.innerHTML = moment().format('h:mm');
}, 1000);

for (var i = 0; i < messageTime.length; i++) {
    messageTime[i].innerHTML = moment().format('h:mm A');
}

/* Message */

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

form.addEventListener('submit', newMessage);

function newMessage(e) {
    var input = e.target.input;

    if (input.value) {
        var message = buildMessage(input.value);
        conversation.appendChild(message);
        animateMessage(message);
    }

    input.value = '';
    conversation.scrollTop = conversation.scrollHeight;

    e.preventDefault();
}

function buildMessage(text) {
    var element = document.createElement('div');

    element.classList.add('message', 'sent');

    element.innerHTML = text +
        '<span class="metadata">' +
        '<span class="time">' + moment().format('h:mm A') + '</span>' +
        '<span class="tick tick-animation">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
        '</span>' +
        '</span>';

    return element;
}

function animateMessage(message) {
    setTimeout(function() {
        var tick = message.querySelector('.tick');
        tick.classList.remove('tick-animation');
    }, 500);
}





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