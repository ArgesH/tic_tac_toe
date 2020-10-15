let last_input = 'x';
let ended = 1;
const tics = ['1','2','3','4','5','6','7','8','9'];
let remaining_tics = ['1','2','3','4','5','6','7','8','9'];

function swap(){
    if (last_input == 'x'){last_input = 'o';}
    else{last_input = 'x';}
}

function check(){
    var a = document.getElementById('1').innerText;
    var b = document.getElementById('2').innerText;
    var c = document.getElementById('3').innerText;
    var d = document.getElementById('4').innerText;
    var e = document.getElementById('5').innerText;
    var f = document.getElementById('6').innerText;
    var g = document.getElementById('7').innerText;
    var h = document.getElementById('8').innerText;
    var i = document.getElementById('9').innerText;
    debugger;
    if (a == b && a == c && a != ''){
        return 'Winner';
    }
    else if (d == e && d == f && d != ''){
        return 'Winner';
    }
    else if (g == h && g == i && g != ''){
        return 'Winner';
    }
    else if (a == d && a == g && a != ''){
        return 'Winner';
    }
    else if (b == e && b == h && b != ''){
        return 'Winner';
    }
    else if (c == f && c == i && c != ''){
        return 'Winner';
    }
    else if (a == e && a == i && a != ''){
        return 'Winner';
    }
    else if (c == e && c == g && c != ''){
        return 'Winner';
    }
    else if (a != '' && b != '' && c != '' && d != '' && e != '' && f != '' && g != '' && h != '' && i != ''){
        return 'Draw';
    }
    else {return '';}
}

function input(id){
    if (ended == 1){
        debugger;
        var b = document.getElementById(id);
        var c = b.innerText;
        if (c == ''){
            a = document.getElementById(id).innerText = last_input;
            var findex = remaining_tics.indexOf(x);
            remaining_tics.splice(findex, 1);

            var x = remaining_tics[Math.floor(Math.random() * remaining_tics.length)];
            asd = document.getElementById(x).innerText = 'o';

            var index = remaining_tics.indexOf(x);
            remaining_tics.splice(index, 1);
            
            var returning = check();
            if (returning == 'Winner'){
                alert("winner!");
                ended = 0;
                document.getElementById('btn1').style.backgroundColor = "red";
            }
            else if (returning == 'Draw'){
                alert("Draw!");
                ended = 0;
                document.getElementById('btn1').style.backgroundColor = "red";
            }
        }
    }
}

function reset(){
        for(var i=1; i<10; i++){
            document.getElementById(i).innerText = '';
        }
        ended = 1;
        document.getElementById('btn1').style.backgroundColor = "white";
        var x = tics[Math.floor(Math.random() * 9)];
        document.getElementById(x).innerText = 'o';
        remaining_tics = tics
}

function input_first(){
    var x = tics[Math.floor(Math.random() * 9)];
    document.getElementById(x).innerText = 'o';
    var index = remaining_tics.indexOf(x);
    arrremaining_ticsay.splice(index, 1);
}