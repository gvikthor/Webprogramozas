let questions = [
    {
        done: -1,
        qst: 'Mi a kedvenc színed?',
        asw: [
            {
                text: 'Kék',
                img: 'https://www.natalimeteraru.hu/fotky1185/fotos/_vyr_393SZAT7.jpg',
                pts: [5,0,2,10,-10]
            },
            {
                text: 'Piros',
                img: 'https://www.natalimeteraru.hu/fotky1185/fotos/_vyr_1510SZAT12.jpg',
                pts: [2,3,3,-10,10]
            },
            {
                text: 'Zöld',
                img: 'https://www.hobbykreativ.hu/wp-content/uploads/2018/06/zold-2.jpg',
                pts: [3,10,1,2,-2]
            }
        ]
    },
    {
        done: -1,
        qst: 'Mi a kedvenc állatod?',
        asw: [
            {
                text: 'Kutya',
                img: '',
                pts: [0,0,0,0,0]
            },
            {
                text: 'Macska',
                img: '',
                pts: [0,0,0,0,0]
            },
            {
                text: 'Hörcsög',
                img: '',
                pts: [0,0,0,0,0]
            },
            {
                text: 'Pingvin',
                img: '',
                pts: [0,0,0,0,0]
            }
        ]
    },
    {
        done: -1,
        qst: 'Mi a kedvenc sütid?',
        asw: [
            {
                text: 'Dobostorta',
                img: '',
                pts: [0,0,0,0,0]
            },
            {
                text: 'Isler',
                img: '',
                pts: [0,0,0,0,0]
            }
        ]
    }
];

let results = [
    {
        pts: 0,
        title: 'Franciaország',
        img: '',
        text: 'Franciaországba utazz, mert bátor, nyitott valami valami.'
    },
    {
        pts: 0,
        title: 'Olaszország',
        img: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        pts: 0,
        title: 'Egyesült Királyság',
        img: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        pts: 0,
        title: 'USA',
        img: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        pts: 0,
        title: 'Kína',
        img: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

let questionsQuery = document.querySelector('#questions');
let dataQ = 0;
for(question of questions){
    let newQuestionBlock = document.createElement('div');
    newQuestionBlock.classList.add('question-block');
    questionsQuery.appendChild(newQuestionBlock);

    let newQuestion = document.createElement('div');
    newQuestion.classList.add('question');
    newQuestionBlock.appendChild(newQuestion);
    newQuestion.innerHTML = question.qst;

    let newAnswerBlock = document.createElement('div');
    newAnswerBlock.classList.add('answer-block');
    newQuestionBlock.appendChild(newAnswerBlock);

    let dataA = 0;
    for(answer of question.asw){
        let newAnswer = document.createElement('div');
        newAnswer.classList.add('answer');
        newAnswerBlock.appendChild(newAnswer);
        newAnswer.dataset.q = dataQ;
        newAnswer.dataset.a = dataA;

        let newImage = document.createElement('img');
        newImage.src = answer.img;
        newAnswer.appendChild(newImage);

        //newAnswer.innerHTML += answer.text;
        newAnswer.append(answer.text);

        dataA++;
    }

    dataQ++;
}

let answersQuery = document.querySelectorAll('.answer');
let finished = false;
for(let i = 0; i < answersQuery.length; i++){
    answersQuery[i].addEventListener('click', ()=>{
        if(finished) return;

        let qIndex = parseInt(answersQuery[i].dataset.q);
        let aIndex = parseInt(answersQuery[i].dataset.a);
        //console.log(`Megnyomták a ${qIndex}. kérdésben a ${aIndex}. választ.`);

        let prevIndex = questions[qIndex].done;
        if(prevIndex == -1){
            for(let j = 0; j < results.length; j++){
                results[j].pts += questions[qIndex].asw[aIndex].pts[j];
            }
            answersQuery[i].classList.add('selected');
        }else{
            for(let j = 0; j < results.length; j++){
                results[j].pts -= questions[qIndex].asw[prevIndex].pts[j];
                results[j].pts += questions[qIndex].asw[aIndex].pts[j];
            }
            questionsQuery.querySelectorAll('.question-block')[qIndex].querySelector('.selected').classList.remove('selected');
            answersQuery[i].classList.add('selected');
        }
        questions[qIndex].done = aIndex;


        let searchIndex = 0;
        while(searchIndex < questions.length && questions[searchIndex].done != -1){
            searchIndex++;
        }
        if(searchIndex == questions.length){
            let maxIndex = 0;
            for(let m = 1; m < results.length; m++){
                if(results[m].pts > results[maxIndex].pts){
                    maxIndex = m;
                }
            }

            let resultQuery = document.querySelector('#result');
            resultQuery.querySelector('#result-title').innerHTML = `${sutiKiszed('felhasznalonev')}, a te redeményed: ${results[maxIndex].title}`;
            resultQuery.querySelector('#result-text').innerHTML = results[maxIndex].text;
            resultQuery.querySelector('#result-img').src = results[maxIndex].img;
            resultQuery.style.display = 'block';

            finished = true;
            resultQuery.scrollIntoView();
        }else{
            if(qIndex+1 < questions.length){
                questionsQuery.querySelectorAll('.question-block')[qIndex+1].scrollIntoView();
            }
        }

    });
}

//////////////////////////////////////////////////////////


function sutiBeallit(valtozonev, ertek, lejaratNapban){
    let d = new Date();
    d.setTime(d.getTime() + lejaratNapban*24*60*60*1000);
    document.cookie = `${valtozonev}=${ertek};expires=${d.toUTCString()};path=/`;
}

function sutiKiszed(valtozonev){
    let sutik = document.cookie.split(';');
    for(suti of sutik){
        let sutiBontva = suti.split('=');
        if(sutiBontva[0].trim() == valtozonev){
            return sutiBontva[1];
        }
    }
}

document.querySelector('#sutiMent').addEventListener('click', ()=>{
    sutiBeallit('felhasznalonev',document.querySelector('#sutiName').value,5);
});