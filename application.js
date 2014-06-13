var score = 0;
var ballCount = 20;

var sendBalls = function(ballArr){
  for (var i = 0; i < ballArr.length; i++) {
    sendBall(ballArr[i]);
  }
};

var sendBall = function(ball){
  setTimeout(function(){
    ball.addClass("moving");
  },1);
};

var createBalls = function(){
  var ballArr = [];
  var top = 0;
  for (var i = 0; i < ballCount; i++) {
    var $ball = createBall();
    $ball.css("margin-top", top + "px");
    top += 25;
    $ball.delay = Math.floor(Math.random() * 5);
    $ball.speed = Math.floor(Math.random() * 10) + 3;
    $ball.css("-webkit-transition", "all " + $ball.speed + "s linear " + $ball.delay + "s");
    delayDestroy($ball);
    $(".container").append($ball);
    ballArr.push($ball);
  };
  return ballArr;
};

var delayDestroy = function(ball){
  var time = (ball.delay + ball.speed) * 1000;
  setTimeout(function(){
    ball.remove();
  }, time);
}

var createBall = function(){
  var $ball = $("<div>");
  $ball.addClass("ball");
  return $ball;
};

var scoreFn = function(){
  score++;
  $(".score").text(score);
};

var ballClick = function(){
  $(".ball").on("click", function(){
    scoreFn();
    $(this).remove();
  });
};

$(function(){
  $("#go").on("click", function(){
    sendBalls(createBalls());
      ballClick();
    $(this).remove(); 
  });
});
