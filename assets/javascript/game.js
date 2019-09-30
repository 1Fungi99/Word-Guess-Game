$(document).ready(function () {
    console.log("To whom this may concern. There is a couple bugs in this that I couldn't figure out. After every Generate New Word button press, the var life subtraction would stack. Also I could figure out how to disable buttons. Also all this junk above this message, font works fine and everything.")

    //adding in all the data
    var a7x = {
        name: "Avenged Sevenfold",
        members: ["M Shadows", "Synyster Gates", "Brooks Wackerman", "Johnny Christ", "Zachy Vengence"],
        hints: ["Lead Vocals.", "Lead Guitar.", "Drummer.", "Bass player.", "Rhythm Guitar."]
    }
    var iPrevail = {
        name: "I Prevail",
        members: ["Brian Burkheiser", "Eric Vanlerberghe", "Steve Menoian", "Dylan Bowman", "Gabe Helguera"],
        hints: ["Clean Vocals.", "Screamed Vocals.", "Lead Guitar.", "Rhythm Guitar.", "Drummer."],
    }
    var pantera = {
        name: "Pantera",
        members: ["Phil Anselmo", "Dimebag Darrell", "Rex Brown", "Vinnie Paul"],
        hints: ["Lead Vocals.", "Lead Guitar, Rhythm Guitar, and Backing Vocals.", "Bass Player and Backing Vocals.", "Drummer."]
    }
    var korn = {
        name: "Korn",
        members: ["Jonathan Davis", "James 'Munky' Shaffer", "Reginald 'Fieldy' Arvizu", "Brian 'Head' Welch", "Ray Luzier"],
        hints: ["Lead Vocals and Bag Pipes", "Guitars", "Bass Player", "Guitars and Vocals", "Drums and All Percussion"]
    }
    var gojira = {
        name: "Gojira",
        members: ["Joe Duplantier", "Mario Duplantier", "Christian Andreu", "Jean-Michel Labadie"],
        hints: ["Lead Vocals and Rhythm Guitar", "Drums and Background Vocals", "Lead Guitar", "Bass Player"]
    }

    var wordSet = false;


    // var member = [{
    //     name: "M Shadows",
    //     hint: "Lead Vocals"
    // },
    // {
    //     name: "M Shadows",
    //     hint: "Lead Vocals"
    // }]
    var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (var i = 0; i < alphabetArray.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color button");
        letterBtn.attr("id", "myBtn");
        letterBtn.attr("data-letter", alphabetArray[i].toUpperCase());
        letterBtn.text(alphabetArray[i].toUpperCase());
        letterBtn.appendTo(".buttons");
    }

    var life = 10;
    $(".life").text("You have " + life + " lives left.")

    //actual coding
    var rand, postRand, memberName, memberArray, blankArray = [""];
    wordSet = true;
    rand = Math.floor((Math.random() * 5) + 1);

    if (rand == 1) {
        $(".name").text(a7x.name);
        postRand = Math.floor((Math.random() * a7x.members.length) + 1);
        $(".word").text(a7x.members[postRand]);
        memberName = a7x.members[postRand];
        $(".hint-text").text(a7x.hints[postRand]);
        $(".img").attr("src", "https://www.moshville.co.uk/wordpress/wp-content/uploads/2017/08/Avenged-Sevenfold-A7X-band-header.jpg")
        // $(".img").attr("src","images\Avenged-Sevenfold-A7X-band-header.jpg");
    }
    if (rand == 2) {
        $(".name").text(iPrevail.name);
        postRand = Math.floor((Math.random() * iPrevail.members.length) + 1);
        $(".word").text(iPrevail.members[postRand]);
        memberName = iPrevail.members[postRand];
        $(".hint-text").text(iPrevail.hints[postRand]);
        $(".img").attr("src", "https://music.mxdwn.com/wp-content/uploads/2017/10/I-Prevail-Press-Image-1-770x470.png");
        // $(".img").attr("src","images\I-Prevail-Press-Image-1-770x470.png");
    }
    if (rand == 3) {
        $(".name").text(pantera.name);
        postRand = Math.floor((Math.random() * pantera.members.length) + 1);
        $(".word").text(pantera.members[postRand]);
        memberName = pantera.members[postRand];
        $(".hint-text").text(pantera.hints[postRand]);
        $(".img").attr("src", "https://consequenceofsound.net/wp-content/uploads/2018/11/philip-anselmo-and-the-illegals.png?w=807");
        // $(".img").attr("src","images/Pantera.jpg");
    }
    if (rand == 4) {
        $(".name").text(korn.name);
        postRand = Math.floor((Math.random() * korn.members.length) + 1);
        $(".word").text(korn.members[postRand]);
        memberName = korn.members[postRand];
        $(".hint-text").text(korn.hints[postRand]);
        $(".img").attr("src", "https://ichef.bbci.co.uk/images/ic/960x540/p056fyty.jpg");
        // $(".img").attr("src","images\p056fyty.jpg");
    }
    if (rand == 5) {
        $(".name").text(gojira.name);
        postRand = Math.floor((Math.random() * gojira.members.length) + 1);
        $(".word").text(gojira.members[postRand]);
        memberName = gojira.members[postRand];
        $(".hint-text").text(gojira.hints[postRand]);
        $(".img").attr("src", "https://media.lasvegasmagazine.com/media/img/photos/2019/07/24/Gojira_TravisShinnPhotography_t1000.jpg?c76bf34eada957f64a0b14990027a576ff9bf379");
        // $(".img").attr("src","images\p053nfnl.jpg");
    }





    $(".genButton").on("click", function () {
        $(".winLose").empty();
        $(".example").empty();
        var rand, postRand, memberName, memberArray, blankArray = [""];
        wordSet = true; life = 10;
        $(".life").text("You have " + life + " lives left.")
        rand = Math.floor((Math.random() * 5) + 1);

        if (rand == 1) {
            $(".name").text(a7x.name);
            postRand = Math.floor((Math.random() * a7x.members.length) + 1);
            $(".word").text(a7x.members[postRand]);
            memberName = a7x.members[postRand];
            $(".hint-text").text(a7x.hints[postRand]);
            $(".img").attr("src", "https://www.moshville.co.uk/wordpress/wp-content/uploads/2017/08/Avenged-Sevenfold-A7X-band-header.jpg")
            // $(".img").attr("src","images\Avenged-Sevenfold-A7X-band-header.jpg");
        }
        if (rand == 2) {
            $(".name").text(iPrevail.name);
            postRand = Math.floor((Math.random() * iPrevail.members.length) + 1);
            $(".word").text(iPrevail.members[postRand]);
            memberName = iPrevail.members[postRand];
            $(".hint-text").text(iPrevail.hints[postRand]);
            $(".img").attr("src", "https://music.mxdwn.com/wp-content/uploads/2017/10/I-Prevail-Press-Image-1-770x470.png");
            // $(".img").attr("src","images\I-Prevail-Press-Image-1-770x470.png");
        }
        if (rand == 3) {
            $(".name").text(pantera.name);
            postRand = Math.floor((Math.random() * pantera.members.length) + 1);
            $(".word").text(pantera.members[postRand]);
            memberName = pantera.members[postRand];
            $(".hint-text").text(pantera.hints[postRand]);
            $(".img").attr("src", "https://consequenceofsound.net/wp-content/uploads/2018/11/philip-anselmo-and-the-illegals.png?w=807");
            // $(".img").attr("src","images/Pantera.jpg");
        }
        if (rand == 4) {
            $(".name").text(korn.name);
            postRand = Math.floor((Math.random() * korn.members.length) + 1);
            $(".word").text(korn.members[postRand]);
            memberName = korn.members[postRand];
            $(".hint-text").text(korn.hints[postRand]);
            $(".img").attr("src", "https://ichef.bbci.co.uk/images/ic/960x540/p056fyty.jpg");
            // $(".img").attr("src","images\p056fyty.jpg");
        }
        if (rand == 5) {
            $(".name").text(gojira.name);
            postRand = Math.floor((Math.random() * gojira.members.length) + 1);
            $(".word").text(gojira.members[postRand]);
            memberName = gojira.members[postRand];
            $(".hint-text").text(gojira.hints[postRand]);
            $(".img").attr("src", "https://media.lasvegasmagazine.com/media/img/photos/2019/07/24/Gojira_TravisShinnPhotography_t1000.jpg?c76bf34eada957f64a0b14990027a576ff9bf379");
            // $(".img").attr("src","images\p053nfnl.jpg");
        }

        if (wordSet == true) {
            console.log(memberName);
            memberArray = Array.from(memberName.toUpperCase());
            blankArray = Array.from(memberName)
            for (var i = 0; i < memberArray.length; i++) {
                blankArray[i] = "_";

                if (memberArray[i] == " " || memberArray[i] == "-" || memberArray[i] == "'") {
                    blankArray[i] = memberArray[i];
                }
            }
            blankArray = blankArray.join('');
            $(".word").text(blankArray);
        }

        $(".letter-button").on("click", function () {
            console.log($(this).attr("data-letter")); //grabbing data-letter
            var memberArrayUpper = memberArray;
            var guess = false;
            for (var i = 0; i < memberArrayUpper.length; i++) {
                if ($(this).attr("data-letter") == memberArrayUpper[i]) {
                    guess = true;
                    console.log(guess);
                    blankArray = Array.from(blankArray);
                    blankArray[i] = memberArray[i];
                    blankArray = blankArray.join('');
                    $(".word").text(blankArray);
                }
            }
            if (guess == false) {
                life = life - 1;
                console.log(life);
                $(".life").text("You have " + life + " lives left.")
            }
            if (life == 0) {
                $(".winLose").text("YOU HAVE SUCCUMBED TO THE METAL!");
    
            }
            if (memberName.toUpperCase() == blankArray) {
                $(".winLose").text("You Win!")
    
            }
        });

    });


});
