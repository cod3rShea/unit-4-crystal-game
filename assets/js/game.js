$( document ).ready(function() {
    
    // random Number Generator
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    // declare the variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var totalTimesPlayed = 0;

    // give each crystal a random number
    var startingNumber = getRandomInteger(18,120);
    var firstCrystal = getRandomInteger(1,12);
    var secondCrystal = getRandomInteger(1,12);
    var thirdCrystal = getRandomInteger(1,12);
    var fourthCrystal = getRandomInteger(1,12);
    
    // Make a reset Function
    function resetGame() {
        startingNumber = getRandomInteger(18,120);
        firstCrystal = getRandomInteger(1,12);
        secondCrystal = getRandomInteger(1,12);
        thirdCrystal = getRandomInteger(1,12);
        fourthCrystal = getRandomInteger(1,12);
        totalScore = 0;
        
        totalTimesPlayed = wins + losses;
        
        $('.score-container').html(totalScore);
        $('.currentNumber').html(startingNumber);
        $('.total-times-played').html(totalTimesPlayed);
    }

    //
    var vid = document.getElementById("player_audio"); 

    vid.play();

    // win function to add the win score and reset the game
    function win() {
        wins++;
        $('.number-of-wins').html(wins);
        resetGame();
    }

    // lose function to add the lose score and reset the game
    function lose() {
        losses++;
        $('.number-of-losses').html(losses);
        resetGame();
    }
    
    
    // adds the first starting number to the currentNumber container
    $('.currentNumber').html(startingNumber);
    $('.number-of-wins').html(wins);
    $('.number-of-losses').html(losses);

    
    $('.first-crystal').on('click', function() {
        //  adds the assigned crystal number to the total score
        totalScore += firstCrystal;
        
        // updates the the total score number
        $('.score-container').html(totalScore);
        
        // if the total score is equal to the starting number call the win function
        if (totalScore == startingNumber) {
            win();
        // if the total score is greater than the starting number call the lose function 
        } else if (totalScore > startingNumber) {
            lose();
        }
     });
     
     $('.second-crystal').on('click', function() {
        
        totalScore += secondCrystal;
        $('.score-container').html(totalScore);
        
        if (totalScore == startingNumber) {
            win();
        // if the total score is greater than the starting number call the lose function 
        } else if (totalScore > startingNumber) {
            lose();
        }
     });

     $('.third-crystal').on('click', function() {
        totalScore += thirdCrystal;
        $('.score-container').html(totalScore);
        
        if (totalScore == startingNumber) {
            win();
        // if the total score is greater than the starting number call the lose function 
        } else if (totalScore > startingNumber) {
            lose();
        }

     });

     $('.fourth-crystal').on('click', function() {
        totalScore += fourthCrystal;
         $('.score-container').html(totalScore);

        if (totalScore == startingNumber) {
            win();
        // if the total score is greater than the starting number call the lose function 
        } else if (totalScore > startingNumber) {
            lose();
        }
     });
});



