/*
 * TriviarModel provides basic methods to iterate
 * over a collection of questions
 */
var TriviaModel = {
  current:0,
   /* Collection of available questions */
   collection : questions, 
  
   /* Start the iteration over the collection of questions.
      It sets the first element as the current question */    
   init : function() {
	   console.log(questions);
	   $("#question").text(questions[TriviaModel.current].question);
   },
  
   /* Set the next element as the current question. 
      Returns true if it moved successfully to the next,
              false if there were no more elements */
   next : function(){
	   console.log("bottone premuto");
	   if(TriviaModel.current==questions.length) {  window.alert("No more question.");
									 return false;
									}
	//	   return false;
	  var risposta = document.getElementById("answer").value;
	  TriviaModel.isAnswerCorrect(risposta);
	   return true;
	   
   },
  
   /* Returns the current question 
    *         null if the collection was not initiated
    */
   getCurrentQuestion: function () { 
	   console.log(TriviaModel.current);
	   console.log(questions.length);
       if(TriviaModel.current<questions.length) {
		   TriviaModel.current++;
           $("#question").text(questions[TriviaModel.current].question); }
	   console.log(TriviaModel.current);
	   console.log(questions[TriviaModel.current].question);
   },
  
   /* Checks if the answer provided is correct. The comparison
      is case-insensitive (Answer = ANSWER = aNswEr)
      Returns true if the answer is correct
              false if not
    */
   isAnswerCorrect : function (answer){
	   
	   console.log(answer);
	   if(answer == questions[TriviaModel.current].answer) {
		   window.alert("Correct");
		    TriviaModel.getCurrentQuestion();
	   }	else window.alert("Incorrect");
	   $("#answer").refresh;
	  
	   
   }  
           
};
TriviaModel.init();