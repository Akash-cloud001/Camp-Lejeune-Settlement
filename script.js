$(document).ready(()=>{
    const surveyQuestion = $(".survey-question");
    const yesBtn = $(".yes-btn");
    const noBtn = $(".no-btn");

    const question = [
        "Did you or a loved one serve, live, or work at Camp Lejeune for at least 30 days between 1953 and 1987? *",
        "Did you or a family member who lived with you experience any serious health illnesses or injuries like cancer, organ failure, reproductive issues, death or other? *",
        "Is the affected party represented by an attorney for this matter? *"
    ]

    const answers=[true,false,false];
  
    let userAnswers = [];
    let quesCount = 3;
    let counter = 0;

    // default survey Question
    surveyQuestion.text(question[0]);

    // Function to change Ques and fill user answer array;
    function changeQuestion(ans){
        
            surveyQuestion.text(question[counter]);
            userAnswers.push(ans)
            console.log(userAnswers);

    }
    function surveyAnalysis(){
        console.log(userAnswers, answers);
        for(let i=0; i<answers.length; i++){
            if(answers[i] != userAnswers[i]){
                console.log("not matched");
                return;
            }
        }
        console.log("matched");
    }

    yesBtn.click(()=>{
        // To change ques
        //to fill user answer array
        let ans = yesBtn.data().val;
        if(counter < quesCount){
            changeQuestion(ans);
            counter++;
            if(counter>=quesCount)
                surveyAnalysis();
        }
    })
    noBtn.click(()=>{
        // To change ques
        //to fill user answer array
        let ans = noBtn.data().val;
        if(counter < quesCount){
            changeQuestion(ans);
            counter++;
            if(counter>=quesCount)
                surveyAnalysis();
        }
    })

});