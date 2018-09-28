$(document).ready(function() {

    question1 = {
        number: "Question #1",
        quote: "Our fate lives within us, you only have to be brave enough to see it.",
        a: "Remy",
        b: "Woody",
        c: "Merida",
        d: "Poppa",
        right: "Merida",
        correct: "../TriviaGame/assets/images/merida_right.gif",
        incorrect: "../TriviaGame/assets/images/merida_wrong.gif"
    }
    question2 = {
        number: "Question #2",
        quote: "I don't want to survive ... I want to live.",
        a: "Carl",
        b: "Captain",
        c: "Mater",
        d: "Marlin",
        right: "Captain",
        correct: "../TriviaGame/assets/images/captain_right.gif",
        incorrect: "../TriviaGame/assets/images/captain_wrong.gif"
    }
    question3 = {
        number: "Question #3",
        quote: "Well, you can't never let anything happen to him. Then nothing would ever happen to him.",
        a: "Dory",
        b: "Edna Mode",
        c: "Momma Ida",
        d: "Ellie",
        right: "Dory",
        correct: "../TriviaGame/assets/images/dory_right.gif",
        incorrect: "../TriviaGame/assets/images/dory_wrong.gif"
    }
    question4 = {
        number: "Question #4",
        quote: "Sometimes you got to get through your fear to see the beauty on the other side.",
        a: "Crush",
        b: "Mike Wazowski",
        c: "Joy",
        d: "Poppa",
        right: "Poppa",
        correct: "../TriviaGame/assets/images/poppa_right.gif",
        incorrect: "../TriviaGame/assets/images/poppa_wrong.gif"
    }
    question5 = {
        number: "Question #5",
        quote: "That might sound boring, but I think the boring stuff is the stuff I remember the most.",
        a: "Nemo",
        b: "Woody",
        c: "Mr. Incredible",
        d: "Russell",
        right: "Russell",
        correct: "../TriviaGame/assets/images/russell_right.gif",
        incorrect: "../TriviaGame/assets/images/russell_wrong.gif"
    }
    question6 = {
        number: "Question #6",
        quote: "You and I are a team. There is nothing more important than our friendship.",
        a: "Mike Wazowski",
        b: "Woody",
        c: "Marlin",
        d: "Mr. Incredible",
        right: "Mike Wazowski",
        correct: "../TriviaGame/assets/images/mike_right.gif",
        incorrect: "../TriviaGame/assets/images/mike_wrong.gif"
    }
    question7 = {
        number: "Question #7",
        quote: "He's brave, like a cowboy should be. And kind, and smart. He'll be there for you, no matter what.",
        a: "Buzz Lightyear",
        b: "Mater",
        c: "Jangles the Clown",
        d: "Andy",
        right: "Andy",
        correct: "../TriviaGame/assets/images/andy_right.gif",
        incorrect: "../TriviaGame/assets/images/andy_wrong.gif"
    }
    question8 = {
        number: "Question #8",
        quote: "Crying helps me slow down and obsess over the weight of life's problems.",
        a: "Sadness",
        b: "Dory",
        c: "Violet Parr",
        d: "Boo",
        right: "Sadness",
        correct: "../TriviaGame/assets/images/sadness_right.gif",
        incorrect: "../TriviaGame/assets/images/sadness_wrong.gif"
    }
    question9 = {
        number: "Question #9",
        quote: "I am your wife! I'm the greatest good you are ever gonna get!",
        a: "Elastigirl",
        b: "Elinor",
        c: "Ellie",
        d: "Honey",
        right: "Honey",
        correct: "../TriviaGame/assets/images/honey_right.gif",
        incorrect: "../TriviaGame/assets/images/honey_wrong.gif"
    }
    question10 = {
        number: "Question #10",
        quote: "The only limit is your soul.",
        a: "Carl",
        b: "Chef Gusteau",
        c: "Poppa",
        d: "Bing Bong",
        right: "Chef Gusteau",
        correct: "../TriviaGame/assets/images/gusteau_right.gif",
        incorrect: "../TriviaGame/assets/images/gusteau_wrong.gif"
    }
    question11 = {
        number: "Question #11",
        quote: "If you ain't scared, you ain't alive.",
        a: "Fear",
        b: "Sully",
        c: "Butch",
        d: "Frozone",
        right: "Butch",
        correct: "../TriviaGame/assets/images/butch_right.gif",
        incorrect: "../TriviaGame/assets/images/butch_wrong.gif"
    }
    question12 = {
        number: "Question #12",
        quote: "All right! We did not die today, I call that an unqualified success.",
        a: "Buzz Lightyear",
        b: "Mr. Incredible",
        c: "Fear",
        d: "Lightning McQueen",
        right: "Fear",
        correct: "../TriviaGame/assets/images/fear_right.gif",
        incorrect: "../TriviaGame/assets/images/fear_wrong.gif"
    }
    question13 = {
        number: "Question #13",
        quote: "First rule of leadership: Everything is your fault.",
        a: "Hopper",
        b: "Mr. Incredible",
        c: "Mike Wazowski",
        d: "Russell",
        right: "Hopper",
        correct: "../TriviaGame/assets/images/hopper_right.gif",
        incorrect: "../TriviaGame/assets/images/hopper_wrong.gif"
    }
    question14 = {
        number: "Question #14",
        quote: "I never look back, darling. It distracts from the now.",
        a: "Destiny",
        b: "Disgust",
        c: "Edna Mode",
        d: "Roz",
        right: "Edna Mode",
        correct: "../TriviaGame/assets/images/edna_right.gif",
        incorrect: "../TriviaGame/assets/images/edna_wrong.gif"
    }
    question15 = {
        number: "Question #15",
        quote: "The only thing predictable about life is its unpredictability.",
        a: "Remy",
        b: "Carl",
        c: "Woody",
        d: "Joy",
        right: "Remy",
        correct: "../TriviaGame/assets/images/remy_right.gif",
        incorrect: "../TriviaGame/assets/images/remy_wrong.gif"
    }
    question16 = {
        number: "Question #16",
        quote: "Thanks for the adventure. Now go have a new one.",
        a: "Elastigirl",
        b: "Ellie",
        c: "Merida",
        d: "Hamm",
        right: "Ellie",
        correct: "../TriviaGame/assets/images/ellie_right.gif",
        incorrect: "../TriviaGame/assets/images/ellie_wrong.gif"
    }
    question17 = {
        number: "Question #17",
        quote: "Now, you might not feel like you can do much now, but that's just because, well, you're not a tree yet. You just have to give yourself some time. You're still a seed.",
        a: "Dug",
        b: "Andy",
        c: "Arlo",
        d: "Flik",
        right: "Flik",
        correct: "../TriviaGame/assets/images/flik_right.gif",
        incorrect: "../TriviaGame/assets/images/flik_wrong.gif"
    }
    question18 = {
        number: "Question #18",
        quote: "You just need to believe in yourself.",
        a: "Russell",
        b: "Rex",
        c: "Joy",
        d: "Elastigirl",
        right: "Rex",
        correct: "../TriviaGame/assets/images/rex_right.gif",
        incorrect: "../TriviaGame/assets/images/rex_wrong.gif"
    }
    question19 = {
        number: "Question #19",
        quote: "Your identity is your most valuable possession.",
        a: "Elastigirl",
        b: "Sadness",
        c: "Carl",
        d: "Lightning McQueen",
        right: "Elastigirl",
        correct: "../TriviaGame/assets/images/elastigirl_right.gif",
        incorrect: "../TriviaGame/assets/images/elastigirl_wrong.gif"
    }
    question20 = {
        number: "Question #20",
        quote: "Shh. Shh. Shh. Shh. Do you hear that? It’s the winds of change.",
        a: "Randall",
        b: "Russell",
        c: "Mater",
        d: "Woody",
        right: "Randall",
        correct: "../TriviaGame/assets/images/randall_right.gif",
        incorrect: "../TriviaGame/assets/images/randall_wrong.gif"
    }
    questionarray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13,
                    question14, question15, question16, question17, question18, question19, question20];
    currentquestion = "";
    currentindex = "";
    chosenanswer = "";
    currenttimer = "";
    besttime = "";
    currentscore = 0;
    highscore = "";
    rightanswers = "";
    wronganswers = "";
    questionspage = false;
    answerspage = true;
    
    $(".heading").html("<strong>Not Another Pixar Quiz</strong>");
    $(".textbox").html("<h3>A Quiz of Quotes</h3><br>");
    $(".textbox").html("<br><br>Name the character who said the quote to get a point! Take the quiz again and again to improve your score!");
    $(".questionsone").hide();
    $(".questionstwo").hide();
    $(".timerrow").hide()
    
    $(document).on("click", ".start-button", function() {
        rightanswers = 0;
        wronganswers = 0;
        currentscore = 0;
        highscore = 0;
        besttime = 0;
        questionspage = true;
        answerspage = false;
        currenttimer = 90;
        $(".questionsone").show();
        $(".questionstwo").show();
        $(".resultstext").hide();
        $(".giphy").hide();
        $(".startbtn").hide();
        // $(".timerrow").show();
        // $(".timerbox").append(currenttimer);
        // var timer = setInterval(countdown, 1000);
        // function countdown() {
        //     if (timer == -1) {
        //         clearTimeout(timer);
        //         // set up an end of game time holder and end of game function
        //         // doSomething();
        //     } else {
        //         $(".timerbox").html(currenttimer + " seconds...");
        //         currenttimer--;
        //         }
        // }
        
        currentindex = 0;
        currentquestion = questionarray[currentindex];
        console.log(currentquestion);
        $(".heading").html(currentquestion.number);
        $(".questionarea").html(currentquestion.quote);
        $(".optionA").html(currentquestion.a);
        $(".optionA").attr("value", currentquestion.a);
        $(".optionB").html(currentquestion.b);
        $(".optionB").attr("value", currentquestion.b);
        $(".optionC").html(currentquestion.c);
        $(".optionC").attr("value", currentquestion.c);
        $(".optionD").html(currentquestion.d);
        $(".optionD").attr("value", currentquestion.d);
    
            $(document).on("click", ".choice", function() {
            chosenanswer = $(this).attr("value");
            console.log(chosenanswer);
            if (chosenanswer == currentquestion.right) {
                $(".giphy").show();
                $(".questionstwo").hide();
                $(".placeholder").attr("src", currentquestion.correct);
                $(".heading").html("Correct!");
                rightanswers++;
            }
            else {
                $(".giphy").show();
                $(".questionstwo").hide();
                $(".placeholder").attr("src", currentquestion.incorrect);
                $(".heading").html("Incorrect.");
                wronganswers++;
            }
            currentindex++;
            setTimeout(function() {
            if (currentindex < questionarray.length) {
            currentquestion = questionarray[currentindex];
                $(".questionstwo").show();
                $(".giphy").hide();
                $(".heading").html(currentquestion.number);
                $(".questionarea").html(currentquestion.quote);
                $(".optionA").html(currentquestion.a);
                $(".optionA").attr("value", currentquestion.a);
                $(".optionB").html(currentquestion.b);
                $(".optionB").attr("value", currentquestion.b);
                $(".optionC").html(currentquestion.c);
                $(".optionC").attr("value", currentquestion.c);
                $(".optionD").html(currentquestion.d);
                $(".optionD").attr("value", currentquestion.d);
                console.log("hi");
            }
            else {
                console.log("all done");
                console.log(rightanswers);
                console.log(wronganswers);
                if (rightanswers > wronganswers) {
                    $(".giphy").show();
                    $(".placeholder").attr("src", "../TriviaGame/assets/images/goodscore.gif");
                }
                else if (wronganswers >= rightanswers) {
                    $(".giphy").show();
                    $(".placeholder").attr("src", "../TriviaGame/assets/images/badscore.gif");
                }
                $(".heading").text("Complete!");
                $(".questionsone").hide();
                $(".resultstext").show();
                $(".textbox").html("<h2>Correct Answers: </h2>" + rightanswers);
                $(".textbox").append("<br><br><h2>Incorrect Answers: </h2>" + wronganswers);
                $(".textbox").append("<br><br><br><h4>Congratulations on finishing the quiz! You survived another Pixar quiz.");
            }
            }, 4000);
    
        });
    
        })
    })

    // still need a restart button and timed questions; I got as far as I could in a few hours, wompwomp