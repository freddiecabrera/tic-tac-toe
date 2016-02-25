var combo = [];
var clicks = [];
var player;

document.addEventListener('DOMContentLoaded', function(){
  var eachSquare = document.getElementsByTagName('td');
  var firstPlayer = true;
  var secondPlayer = false;

  var winner = false;
  var winningCombo = [[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9],[1,2,3],[4,5,6],[7,8,9]];
  // var combo = [];
  var lengthChecker = function(array){
    console.log('called');
    if(array.length === 3){
      winnerChecker(array);
      console.log('3');
    }
  }
  var winnerChecker = function(array){
    return winningCombo.map(function(arrays){
      console.log(arrays);
      //  return arrays.map(function(item){
      //    console.log(item);
      //  });
    });
  };
  var eventListenerAdder = function(node){
    for(var i = 0; i < node.length; i++){
      node[i].addEventListener('click', function(event){

        if(this.textContent !== 'X' && this.textContent !== 'O'){
          // if(clicks[clicks.length - 1] === this.)
          // console.log('clicks:',clicks[clicks.length - 1]);
          if(this.id )
          lengthChecker(combo);
          if(firstPlayer === true){
            this.textContent = 'X';
            player = 'X';
            clicks.push('X');
            firstPlayer = false;
          } else {
            this.textContent = 'O';
            player = 'O';
            clicks.push('O');
            firstPlayer = true;
          }
        } else {console.log('already pressed');}
      });
    }
  };
  eventListenerAdder(eachSquare);
  });
