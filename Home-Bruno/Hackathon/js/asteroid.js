var currentJoke;

var life = 3;

var jokes = [
    {
        joke: 'Why did Mickey Mouse go to outer space?',
        answer1: 'To find Pluto',
        answer2: 'To find Jupiter',
        answer3: 'To find Uranus',
        answer4: 'To find Mars',
        correct: 'To find Pluto'
    },
    {
        joke: 'Why did the astronaut break up with her boyfriend?',
        answer1: 'Because she doesn´t love him anymore',
        answer2: 'Because she needed some time',
        answer3: 'Because she needed some space',
        answer4: 'Because she lost her interest',
        correct: 'Because she needed some space'
    },
    {
        joke: 'What is an astronaut’s favorite chocolate?',
        answer1: 'A lion bar',
        answer2: 'A mars bar',
        answer3: 'A chocapic bar',
        answer4: 'A energy bar',
        correct: 'A mars bar'
    },
    {
        joke: 'What does an astronaut call his ex from space?',
        answer1: 'NASA',
        answer2: 'CNES',
        answer3: 'ISRO',
        answer4: 'SpaceX',
        correct: 'SpaceX'
    },
    {
        joke: 'What do planets like to read?',
        answer1: 'Comet books',
        answer2: 'Comic books',
        answer3: 'Romance books',
        answer4: 'Fantasy books',
        correct: 'Comet books'
    },
    {
        joke: 'What dance do all astronauts know?',
        answer1: 'Jeté',
        answer2: 'Robot',
        answer3: 'Tap dance',
        answer4: 'The moonwalk',
        correct: 'The moonwalk'
    },
    {
        joke: 'What is Saturn’s favorite movie?',
        answer1: 'Harry Potter',
        answer2: 'Twilight',
        answer3: 'Lord of the Rings',
        answer4: 'Divergent',
        correct: 'Lord of the Rings'
    },
    {
        joke: 'What do you get if you send an anime fan to one of Saturn’s moons?',
        answer1: 'Your Name',
        answer2: 'The Silent Voice',
        answer3: 'The Owl´s Castle',
        answer4: 'Otaku on Titan',
        correct: 'Otaku on Titan'
    },
    {
        joke: 'What do you give an alien?',
        answer1: 'A Cellphone',
        answer2: 'Some space',
        answer3: 'Shoes',
        answer4: 'Water',
        correct: 'Some space'
    },
    {
        joke: 'Why did the sun go to school?',
        answer1: 'To get brighter',
        answer2: 'To get smarter',
        answer3: 'To get depression',
        answer4: 'To get a stable job',
        correct: 'To get brighter'
    }];

function moveComet() {
    var imgObj = null;
    imgObj = document.getElementById('asteroid');
    var incrementar = 500;

    var sd = setInterval(function () {
        startMove();
        incrementar = incrementar + 3;
    }, 1);
    function startMove() {
        imgObj.style.top = incrementar + 'px';

        if (incrementar >= 1000) {
            clearInterval(sd);

            if (life == 0) {
                document.getElementById("form").style.visibility = "hidden";
                document.getElementById("btn-again").style.visibility = "visible";
                document.getElementById("btn-home").style.visibility = "visible";
                document.getElementById("lose").style.visibility = "visible";
                document.getElementById("answer1").style.visibility = "hidden";
                document.getElementById("answer2").style.visibility = "hidden";
                document.getElementById("choice-btn1").style.visibility = "hidden";
                document.getElementById("lifes").style.visibility = "hidden";
            } else {
                document.getElementById("astronaut").style.transform = "translate(" + 0 + "px," + 0 + "px)";
                if (jokes.length == 0) {
                    document.getElementById("form").style.visibility = "hidden";
                    document.getElementById("btn-again").style.visibility = "visible";
                    document.getElementById("btn-home").style.visibility = "visible";
                    document.getElementById("won").style.visibility = "visible";
                    document.getElementById("answer1").style.visibility = "hidden";
                    document.getElementById("answer2").style.visibility = "hidden";
                    document.getElementById("choice-btn1").style.visibility = "hidden";
                    document.getElementById("lifes").style.visibility = "hidden";
                } else {
                    init();
                }
            }
        }
    }
}

function moveRocket() {
    var imgRocket = null;

    imgRocket = document.getElementById('rocketShip');
    imgRocket.style.visibility = "visible";

    var incrementar = 2;

    var sd = setInterval(function () {
        startMove();
        incrementar = incrementar + 2;
    }, 1);

    function startMove() {
        imgRocket.style.top = incrementar + 'px';

        document.getElementById("astronaut").style.transform = "translate(" + 0 + "px," + 0 + "px)";

        if (incrementar >= 200) {
            clearInterval(sd);

            document.getElementById("astronaut").style.visibility = "hidden";
        }
    }

}

function answer1() {
    if (document.getElementById('answer1').innerHTML == jokes[currentJoke].correct) {
        jokes.splice(currentJoke, 1);

        currentJoke = undefined;

        document.getElementById("astronaut").style.transform = "translate(" + -100 + "px," + 0 + "px)";

        if (jokes.length == 0) {
            moveComet();
            moveRocket();
        } else {
            moveComet();
        }

    } else {
        jokes.splice(currentJoke, 1);

        currentJoke = undefined;

        console.log('life' + life);

        document.getElementById("life" + life).style.display = 'none';

        life--;

        moveComet();
    }
}

function answer2() {
    if (document.getElementById('answer2').innerHTML == jokes[currentJoke].correct) {
        jokes.splice(currentJoke, 1);

        currentJoke = undefined;

        document.getElementById("astronaut").style.transform = "translate(" + -100 + "px," + 0 + "px)";

        if (jokes.length == 0) {
            moveComet();
            moveRocket();
        } else {
            moveComet();
        }

    } else {
        jokes.splice(currentJoke, 1);

        currentJoke = undefined;

        console.log('life' + life);

        document.getElementById("life" + life).style.display = 'none';

        life--;

        moveComet();
    }
}

function answer3() {
    if (document.getElementById('answer3').innerHTML == jokes[currentJoke].correct) {
        jokes.splice(currentJoke, 1);

        currentJoke = undefined;

        document.getElementById("astronaut").style.transform = "translate(" + -100 + "px," + 0 + "px)";

        if (jokes.length == 0) {
            moveComet();
            moveRocket();
        } else {
            moveComet();
        }
    } else {
        jokes.splice(currentJoke, 1);

        currentJoke = undefined;

        console.log('life' + life);

        document.getElementById("life" + life).style.display = 'none';

        life--;

        moveComet();
    }
}

function answer4() {
    if (document.getElementById('answer4').innerHTML == jokes[currentJoke].correct) {
        jokes.splice(currentJoke, 1);

        currentJoke = undefined;

        document.getElementById("astronaut").style.transform = "translate(" + -100 + "px," + 0 + "px)";

        if (jokes.length == 0) {
            moveComet();
            moveRocket();
        } else {
            moveComet();
        }
    } else {
        jokes.splice(currentJoke, 1);

        currentJoke = undefined;

        console.log('life' + life);

        document.getElementById("life" + life).style.display = 'none';

        life--;

        moveComet();
    }
}

function setJoke() {

    currentJoke = Math.floor(Math.random() * jokes.length);

    var textarea = document.getElementById('joke-textbox');
    textarea.innerHTML = jokes[currentJoke].joke;
    var button1 = document.getElementById('answer1');
    button1.innerHTML = jokes[currentJoke].answer1;
    var button2 = document.getElementById('answer2');
    button2.innerHTML = jokes[currentJoke].answer2;
    var button3 = document.getElementById('answer3');
    button3.innerHTML = jokes[currentJoke].answer3;
    var button4 = document.getElementById('answer4');
    button4.innerHTML = jokes[currentJoke].answer4;
}

function init() {
    var imgObj = null;
    imgObj = document.getElementById('asteroid');
    imgObj.style.position = 'relative';
    imgObj.style.top = '0px';
    var incrementar = 2;

    var sd = setInterval(function () {
        startMove();
        incrementar = incrementar + 2;
    }, 1);
    function startMove() {
        imgObj.style.top = incrementar + 'px';

        if (incrementar >= 500) {
            clearInterval(sd);

            setJoke();
        }
    }

}

window.onload = init;