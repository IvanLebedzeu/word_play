$(document).ready(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var sentenceArray = sentence.split(' ');
    $("#output").text(sentenceArray);
    
     var largeString = sentenceArray.map(function(string){
      if (string.length >= 3){
        return string;
      }
      //largeString.reverse();
    })
    $("#output2").text(largeString.reverse().join(' '));
  })
})