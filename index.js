var playerHP = 100;
var opHP = 100;
var turn = 'player';
var counter = 0;

$.fn.shake = function() {
   this.each(function (i) {
        var currentLeft = parseInt($(this).css("left"));
        for (var x = 1; x <= 3; x++) {            
            $(this).animate({ left: (currentLeft - 5) }, 10).animate({ left: currentLeft }, 50).animate({ left: (currentLeft + 10) }, 10).animate({ left: currentLeft }, 50);
        }
    });
    return this;
}

function waterCannon() {
    var miss = Math.floor(Math.random() * 10 + 1);
    if (miss === 1) {
        document.getElementById('message').innerHTML = 'Blastoise missed!';
        setTimeout(fireBlast,700);
    } 
    else {
        $('#Charizard').shake();
        document.getElementById('message').innerHTML = 'Blastoise used Water Cannon!';
        var critical = Math.floor(Math.random() * 10 + 1);
        if (critical === 1 || critical === 2){
            opHP = opHP - Math.floor(Math.random() * 20 + 16);
        } else {opHP = opHP - 15}
        if (opHP < 0){
            opHP = 0;
        }
        document.getElementById('opHP').innerHTML = opHP;
        if (opHP === 0){
            document.getElementById('message').innerHTML = 'Charizard Fainted!';
        } else {
            setTimeout(fireBlast,700);
        }
    }

    function Hypnosis() {
        var miss = Math.floor(Math.random() * 10 +1);
        if (miss === 1) {
            document.getElementById('message').innerHTML = 'Blastoise missed!';
            setTimeout(fireBlast,700);
        } 
        else {
            $('#Charizard').shake();
            document.getElementById('message').innerHTML = 'Blastoise used Hypnosis!';
            document.getElementById('message').innerHTML = 'Charizard is asleep!';
            CharizardCondition = 'asleep';
            setTimeout(fireBlast,700);
         }
        return;
    }

    function fireBlast() {
    if (CharizardCondition = 'asleep') {
        document.getElementById('message').innerHTML = "Charizard is sleeping!"
        counter +=1;
        if (counter >= Math.floor(Math.rendom() * 3) + 1) {
            counter = 0;
            charizardCondition = 'awake';
        }
    }
    var miss = Math.floor(Math.random() * 10 + 1);
    if (miss === 1) {
        document.getElementById('message').innerHTML = 'Charizard missed!';
        setTimeout(fireBlast,700);
    } 
    else {
        $('#Blastoise').shake();
        document.getElementById('message').innerHTML = 'Charizard used Fire Blast!';
        var critical = Math.floor(Math.random() * 10 + 1);
        if (critical === 1 || critical === 2){
            playerHP = playerHP - Math.floor(Math.random() * 20 + 16);
        } else {playerHP = playerHP - 15}
        if (playerHP < 0){
            playerHP = 0;
        }
        document.getElementById('myHP').innerHTML = playerHP;
        if (playerHP === 0){
            document.getElementById('message').innerHTML = 'Blastoise Fainted!';
        } 
            
    }}}
