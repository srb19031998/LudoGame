var user1_random = document.getElementById('random1');
var user1_total = document.getElementById('total1');
var winner = document.getElementById('winner');
var user1_total_val = [];


function gussing_user1() {
    var random = Math.floor(Math.random() * 6 + 1);
    user1_total_val.push(random);
    console.log(user1_total_val);
    var final = user1_total_val.reduce(function (a, b) { return a + b; });
    user1_total.innerHTML = "my number:".concat(final);
    user1_random.innerHTML = "my number:".concat(random);
    if (final >= 50) {
        winner.innerHTML = "USER-1";
    }
}

function gussing_user2(){
  var random = Math.floor(Math.random() * 6 + 1);
  user2_total_val.push(random);
  console.log(user2_total_val);
  var final = user2_total_val.reduce(function (a, b) { return a + b; });
  user2_total.innerHTML = "my number:".concat(final);
  user2_random.innerHTML = "my number:".concat(random);
  if (final >= 50) {
    winner.innerHTML = "USER-2";
}
}
var user2_random = document.getElementById('random2');
var user2_total = document.getElementById('total2');
var user2_total_val = [];
