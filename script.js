$(document).ready(()=>{
    const surveyContainer = $(".survey-container");
    const surveyQuestion = $(".survey-question");
    const surveyButtons = $(".survey-buttons");
    const hiddenContent = $(".hidden-content");
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
    let counter = 1;

    // default survey Question
    surveyQuestion.text(question[0]);

    function showMessages(){

    }

    // Function to change Ques and fill user answer array;
    function changeQuestion(ans){
        
            surveyQuestion.text(question[counter]);
            userAnswers.push(ans)
            console.log(userAnswers);

    }
    function surveyAnalysis(){
        console.log(userAnswers, answers);
        let flag="" ;
        for(let i=0; i<answers.length; i++){
            if(answers[i] != userAnswers[i]){
                flag = "1$ PER MINUTE"
                break;
            }
        }
        if(flag === ""){
            flag = "FREE CONSULTATION CALL";
        }
        surveyQuestion.addClass('hide');
        surveyButtons.addClass('hide');
        hiddenContent.removeClass('hide');
            
        const surveyLines = [
            "Reviewing your answers...",
            "Matching You with the Best Options...",
            "Confirm Eligibility..."
        ]
        let intervalId;
        let i=0;
        if(!intervalId){
            intervalId = setInterval(()=>{
                for( i;i<surveyLines.length;){
                    hiddenContent.text(surveyLines[i]);
                    console.log(i)
                    i++;
                    break;
                }
                if(i>=surveyLines.length){
                    clearInterval(intervalId);
                    setTimeout(()=>{
                        hiddenContent.addClass('hide');
                    },1000);
                }
            }, 1000);
        }
        
    }

    yesBtn.click(()=>{
        // To change ques
        //to fill user answer array
        let ans = yesBtn.data().val;
        if(counter <= quesCount){
            changeQuestion(ans);
            counter++;
            if(counter>quesCount)
                surveyAnalysis();
        }
    })
    noBtn.click(()=>{
        // To change ques
        //to fill user answer array
        let ans = noBtn.data().val;
        if(counter <= quesCount){
            changeQuestion(ans);
            counter++;
            if(counter>quesCount)
                surveyAnalysis();
        }
    })

});