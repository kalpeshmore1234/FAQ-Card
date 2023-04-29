const questions = document.getElementsByClassName("questions");
const answers = document.getElementsByClassName("answers")
const span = document.getElementsByTagName("span");


const question1= document.getElementById("question1");
const answer1 = document.getElementById("answer1");

const question2= document.getElementById("question2");
const answer2 = document.getElementById("answer2");

const question3= document.getElementById("question3");
const answer3 = document.getElementById("answer3");

const question4= document.getElementById("question4");
const answer4 = document.getElementById("answer4");

const question5= document.getElementById("question5");
const answer5 = document.getElementById("answer5");


const aimg1 = document.getElementById("aimg1");
const aimg2 = document.getElementById("aimg2");
const aimg3 = document.getElementById("aimg3");
const aimg4 = document.getElementById("aimg4");
const aimg5 = document.getElementById("aimg5");

const aimg = document.getElementsByClassName("aimg");

/* var state = 0;
var backup1 = {}
backup1.fontSize = question1.style.fontSize;
backup1.fontWeight = question1.style.fontWeight;


question1.addEventListener("click", ()=>{
   if (state == 0) {
      question1.style.fontsize = "1.14em";
      question1.style.fontWeight = "700";
      answer1.classList.remove("hidden");
      aimg1.style.transform = "rotate(180deg)";
      
     
       answer2.classList.add("hidden");
       question2.style.fontWeight = backup1.fontWeight;

   
      state = 1;
    } else {
       question1.style.fontWeight = backup1.fontWeight;
       aimg1.style.transform = "rotate(0deg)";
       answer1.classList.add("hidden");
      state = 0;
    }
  
}) */




for (let i=0; i<questions.length; i++){
   var state = 0;
   var backup1 = {}
   backup1.fontSize = question1.style.fontSize;
   backup1.fontWeight = question1.style.fontWeight;
   questions[i].addEventListener("click", ()=>{
       if(questions[i] === question1){
         if (state == 0) {
            question1.style.fontsize = "1.14em";
            question1.style.fontWeight = "700";
            answer1.classList.remove("hidden");
            aimg1.style.transform = "rotate(180deg)";
            

           
      
            state = 1;
          } else{
         

             for (let j=0; j<answers.length; j++ ){
               if (answers[j] === answer2){
                  answer2.classList.add("hidden");
                  question2.style.fontWeight = backup1.fontWeight;
                  aimg2.style.transform = "rotate(0deg)"; 
               
               }
               else if(answers[j] === answer3){
                  answer3.classList.add("hidden");
                  question3.style.fontWeight = backup1.fontWeight;
                  aimg3.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer4){
                  answer4.classList.add("hidden");
                  question4.style.fontWeight = backup1.fontWeight;
                  aimg4.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer5){
                  answer5.classList.add("hidden");
                  question5.style.fontWeight = backup1.fontWeight;
                  aimg5.style.transform = "rotate(0deg)";
                  
               }
            }

            question1.style.fontWeight = backup1.fontWeight;
            aimg1.style.transform = "rotate(0deg)";
            answer1.classList.add("hidden");
            state = 0;
          }
         
       }

       else if(questions[i] === question2){
         if (state == 0) {
            question2.style.fontsize = "1.14em";
            question2.style.fontWeight = "700";
            answer2.classList.remove("hidden");
            aimg2.style.transform = "rotate(180deg)";

            
          state = 1;
          }else{
            

             for (let j=0; j<answers.length; j++ ){
               if (answers[j] === answer1){
                  answer1.classList.add("hidden");
                  question1.style.fontWeight = backup1.fontWeight;
                  aimg1.style.transform = "rotate(0deg)"; 
                  
               }
               else if(answers[j] === answer3){
                  answer3.classList.add("hidden");
                  question3.style.fontWeight = backup1.fontWeight;
                  aimg3.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer4){
                  answer4.classList.add("hidden");
                  question4.style.fontWeight = backup1.fontWeight;
                  aimg4.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer5){
                  answer5.classList.add("hidden");
                  question5.style.fontWeight = backup1.fontWeight;
                  aimg5.style.transform = "rotate(0deg)";
                  
               }
            }

            question2.style.fontWeight = backup1.fontWeight;
            aimg2.style.transform = "rotate(0deg)";
            answer2.classList.add("hidden");
            state = 0;
          }
       
       }

      else if(questions[i] === question3){
         if (state == 0) {
            question3.style.fontsize = "1.14em";
            question3.style.fontWeight = "700";
            answer3.classList.remove("hidden");
            aimg3.style.transform = "rotate(180deg)";

            
          state = 1;
          }else{
            

             for (let j=0; j<answers.length; j++ ){
               if (answers[j] === answer1){
                  answer1.classList.add("hidden");
                  question1.style.fontWeight = backup1.fontWeight;
                  aimg1.style.transform = "rotate(0deg)"; 
                  
               }
               else if(answers[j] === answer2){
                  answer2.classList.add("hidden");
                  question2.style.fontWeight = backup1.fontWeight;
                  aimg2.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer4){
                  answer4.classList.add("hidden");
                  question4.style.fontWeight = backup1.fontWeight;
                  aimg4.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer5){
                  answer5.classList.add("hidden");
                  question5.style.fontWeight = backup1.fontWeight;
                  aimg5.style.transform = "rotate(0deg)";
                  
               }
            }

            question3.style.fontWeight = backup1.fontWeight;
            aimg3.style.transform = "rotate(0deg)";
            answer3.classList.add("hidden");
            state = 0;
          }
       
      }

      else if(questions[i] === question4){
         if (state == 0) {
            question4.style.fontsize = "1.14em";
            question4.style.fontWeight = "700";
            answer4.classList.remove("hidden");
            aimg4.style.transform = "rotate(180deg)";

            
          state = 1;
          }else{
            

             for (let j=0; j<answers.length; j++ ){
               if (answers[j] === answer1){
                  answer1.classList.add("hidden");
                  question1.style.fontWeight = backup1.fontWeight;
                  aimg1.style.transform = "rotate(0deg)"; 
                  
               }
               else if(answers[j] === answer3){
                  answer3.classList.add("hidden");
                  question3.style.fontWeight = backup1.fontWeight;
                  aimg3.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer2){
                  answer2.classList.add("hidden");
                  question2.style.fontWeight = backup1.fontWeight;
                  aimg2.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer5){
                  answer5.classList.add("hidden");
                  question5.style.fontWeight = backup1.fontWeight;
                  aimg5.style.transform = "rotate(0deg)";
                  
               }
            }

            question4.style.fontWeight = backup1.fontWeight;
            aimg4.style.transform = "rotate(0deg)";
            answer4.classList.add("hidden");
            state = 0;
          }
       
      }

      else if(questions[i] === question5){
         if (state == 0) {
            question5.style.fontsize = "1.14em";
            question5.style.fontWeight = "700";
            answer5.classList.remove("hidden");
            aimg5.style.transform = "rotate(180deg)";

            
          state = 1;
          }else{
            

             for (let j=0; j<answers.length; j++ ){
               if (answers[j] === answer1){
                  answer1.classList.add("hidden");
                  question1.style.fontWeight = backup1.fontWeight;
                  aimg1.style.transform = "rotate(0deg)"; 
                  
               }
               else if(answers[j] === answer3){
                  answer3.classList.add("hidden");
                  question3.style.fontWeight = backup1.fontWeight;
                  aimg3.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer4){
                  answer4.classList.add("hidden");
                  question4.style.fontWeight = backup1.fontWeight;
                  aimg4.style.transform = "rotate(0deg)";
                  
               }
               else if(answers[j] === answer2){
                  answer2.classList.add("hidden");
                  question2.style.fontWeight = backup1.fontWeight;
                  aimg2.style.transform = "rotate(0deg)";
                  
               }
            }

            question5.style.fontWeight = backup1.fontWeight;
            aimg5.style.transform = "rotate(0deg)";
            answer5.classList.add("hidden");
            state = 0;
          }
       
      }

       
   })
}

 