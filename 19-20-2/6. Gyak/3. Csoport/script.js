let questions = [
    {
        done: -1,
        qst: 'Mi a kedvenc színed?',
        asws: [
            {
                img: 'https://4cdn.hu/kraken/image/upload/s--SixS5sLb--/c_limit,w_1160/7JYSOXIEpr9tIiFes.jpeg',
                text: 'Kék',
                pt: [5,-2,0]
            },
            {
                img: 'https://static.wixstatic.com/media/e09eae_185dd581ce5a497991d6b0f761e7a8d1~mv2.png/v1/fill/w_2001,h_1076,al_c,q_95/Untitled-2.webp',
                text: 'Zöld',
                pt: [-10,2,10]
            },
            {
                img: 'https://images.squarespace-cdn.com/content/v1/54bfc46be4b0a0e8a51ebbf6/1505746609711-0DBAANDYVV8ZYDUJ1ER3/ke17ZwdGBToddI8pDm48kDgjdZ7qynC0R46hPECFVg17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUv-L9P2ABE5MHo3gunxdFmDWKHz2oEDK1ZKAuTbyHHaEcpqqiibjsYZd52d9hiFyA/tourback.jpg?format=2500w',
                text: 'Piros',
                pt: [-2,10,15]
            }
        ]
    },
    {
        done: -1,
        qst: 'Mi a kedvenc állatod?',
        asws: [
            {
                img: '',
                text: 'Delfin',
                pt: [1,2,-3]
            },
            {
                img: '',
                text: 'Macska',
                pt: [0,0,5]
            },
            {
                img: '',
                text: 'Kutya',
                pt: [-2,5,-7]
            },
            {
                img: '',
                text: 'Pingvin',
                pt: [10,-10,12]
            },
        ]
    }
];

let results = [
    {
        title: 'Chris Pratt',
        desc: 'A te lelki társad Starlord.',
        img: '',
        pt: 0
    },
    {
        
        title: 'Scarlett Johansson',
        desc: 'A te lelki társad a Fekete Özvegy.',
        img: '',
        pt: 0
    },
    {
        
        title: 'Arnold Schwarzenegger',
        desc: 'A te lelki társad a Terminátor.',
        img: '',
        pt: 0
    }
];

let questionsQuery = document.querySelector('#questions');
let questionIndex = 0;
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

    let answerIndex = 0;
    for(answer of question.asws){
        let newAnswer = document.createElement('div');
        newAnswer.classList.add('answer');
        newAnswerBlock.appendChild(newAnswer);
        newAnswer.dataset.aindex = answerIndex;
        newAnswer.dataset.qindex = questionIndex;

        let newImage = document.createElement('img');
        newImage.src = answer.img;
        newAnswer.appendChild(newImage);

        newAnswer.innerHTML += answer.text;

        answerIndex++;
    }

    questionIndex++;
}

let answers = document.querySelectorAll('.answer');
let quizDone = false;
for(let i = 0; i < answers.length; i++){
    answers[i].addEventListener('click', ()=>{
        if(quizDone) return;

        let qindex = answers[i].dataset.qindex;
        let aindex = answers[i].dataset.aindex;
        if(questions[qindex].done != -1){
            let prev = questionsQuery.querySelectorAll('.question-block')[qindex].querySelector('.selected');
            let prevIndex = prev.dataset.aindex;
            for(let j = 0; j < results.length; j++){
                results[j].pt -= questions[qindex].asws[prevIndex].pt[j];
            }
            prev.classList.remove('selected');
        }
        for(let j = 0; j < results.length; j++){
            results[j].pt += questions[qindex].asws[aindex].pt[j];
        }
        answers[i].classList.add('selected');
        questions[qindex].done = aindex;

        /*if(qindex+1 == questions.length){
            document.querySelector('#result').scrollIntoView();
        }else{
            (questionsQuery.querySelectorAll('.question-block')[qindex+1]).scrollIntoView();
        }*/

        let searchIndex = 0;
        while(searchIndex < questions.length && questions[searchIndex].done != -1){
            searchIndex++;
        }
        if(searchIndex == questions.length){
            let maxIndex = 0;
            for(let m = 1; m < results.length; m++){
                if(results[m].pt > results[maxIndex].pt){
                    maxIndex = m;
                }
            }
            console.log(results[maxIndex]);
            quizDone = true;

            let result = document.querySelector('#result');
            result.querySelector('#result-title').innerHTML = `${sutiKiszed('felhasznalonev')}, a te lelki társad: ${results[maxIndex].title}`;
            result.querySelector('#result-desc').innerHTML = results[maxIndex].desc;
            result.querySelector('#result-img').src = results[maxIndex].img;
            result.style.display = 'block';
        }
    });
}


/////SÜTIK/////

function sutiBeallit(valtozonev, ertek){
    let d = new Date();
    d.setTime(d.getTime() + 5*24*60*60*1000);
    let lejar = `expires=${d.toUTCString()}`;

    document.cookie = `${valtozonev}=${ertek};${lejar};path=/`;

}

function sutiKiszed(valtozonev){
    //return document.cookie.split('=')[1];
    let sutik = document.cookie.split(';');
    for(suti of sutik){
        if(suti.split('=')[0].trim() == valtozonev){
            return suti.split('=')[1];
        }
    }

    return '';
}

let input = document.querySelector('input');
let button = document.querySelector('button');
button.addEventListener('click', ()=>{
    sutiBeallit('felhasznalonev',input.value);
});