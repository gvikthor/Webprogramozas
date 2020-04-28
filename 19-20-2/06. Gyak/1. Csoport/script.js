let questions = [
    {
        done: -1,
        qst: 'Mi a kedvenc pizzád?',
        asw: [
            {
                text: 'Hawaii-i',
                img: 'https://falatozz.hu/kepek/receptek/000/010/400x/hawaii-pizza.png',
                points: [0,-5,10,2,0]
            },
            {
                text: 'Magyaros',
                img: 'https://www.nosalty.hu/files/imagecache/recept/recept_kepek/p1020863.jpg',
                points: [0,10,-10,-5,2]
            },
            {
                text: 'Szalámis',
                img: 'https://falatozz.hu/kepek/receptek/000/024/400x/szalamis-pizza.jpg',
                points: [1,-1,0,-2,2]
            },
            {
                text: 'SonGoKu',
                img: 'https://falatozz.hu/kepek/receptek/000/033/400x/songoku-pizza.jpg',
                points: [1,2,3,4,5]
            }
        ]
    },
    {
        done: -1,
        qst: 'Mi a kedvenc levesed?',
        asw: [
            {
                text: 'Gyümölcsleves',
                img: '',
                points: [1,-1,0,2,2]
            },
            {
                text: 'Gulyás',
                img: '',
                points: [2,2,1,2,0]
            },
            {
                text: 'Zacskósleves',
                img: '',
                points: [0,-5,10,2,0]
            }
        ]
    },
    {
        done: -1,
        qst: 'Mi a kedvenc desszerted?',
        asw: [
            {
                text: 'Dobostorta',
                img: '',
                points: [0,-5,10,2,0]
            },
            {
                text: 'Chips',
                img: '',
                points: [0,10,10,2,0]
            },
            {
                text: 'Kenyér',
                img: '',
                points: [0,-5,10,2,0]
            },
            {
                text: 'Fánk',
                img: '',
                points: [0,-5,10,2,0]
            },
            {
                text: 'Tejföl',
                img: '',
                points: [0,-5,10,2,0]
            }
        ]
    }
];

let results = [
    {
        point: 0,
        title: 'Franciaország',
        desc: 'Jaj de jó, ezt kaptad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: ''
    },
    {
        point: 0,
        title: 'Olaszország',
        desc: 'Jaj de jó, ezt kaptad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: ''
    },
    {
        point: 0,
        title: 'USA',
        desc: 'Jaj de jó, ezt kaptad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: ''
    },
    {
        point: 0,
        title: 'Japán',
        desc: 'Jaj de jó, ezt kaptad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: ''
    },
    {
        point: 0,
        title: 'Dél-Afrikai Köztársaság',
        desc: 'Jaj de jó, ezt kaptad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: ''
    },
];

let questionQuery = document.querySelector('#questions');
let questionIndex = 0;
for(question of questions){
    let newQuestionBlock = document.createElement('div');
    newQuestionBlock.classList.add('question-block');
    questionQuery.appendChild(newQuestionBlock);

    let newQuestion = document.createElement('div');
    newQuestion.classList.add('question');
    newQuestionBlock.appendChild(newQuestion);
    newQuestion.innerHTML = question.qst;

    let newAnswerBlock = document.createElement('div');
    newAnswerBlock.classList.add('answer-block');
    newQuestionBlock.appendChild(newAnswerBlock);

    let answerIndex = 0;
    for(answer of question.asw){
        let newAnswer = document.createElement('div');
        newAnswer.classList.add('answer');
        newAnswerBlock.appendChild(newAnswer);

        let newImage = document.createElement('img');
        newImage.src = answer.img;
        newAnswer.appendChild(newImage);
        newAnswer.dataset.qindex = questionIndex;
        newAnswer.dataset.aindex = answerIndex;

        newAnswer.innerHTML += answer.text;

        answerIndex++;
    }

    questionIndex++;
}

let answers = document.querySelectorAll('.answer');
let quizEnded = false;
for(let i = 0; i < answers.length; i++){
    answers[i].addEventListener('click', ()=>{
        if(quizEnded) return;

        let qindex = answers[i].dataset.qindex;
        let aindex = answers[i].dataset.aindex;

        if(questions[qindex].done != -1){
            let previndex = questions[qindex].done;
            for(let j = 0; j < results.length; j++){ 
                results[j].point -= questions[qindex].asw[previndex].points[j];
            }

            //questionQuery.querySelectorAll('.question-block')[qindex].querySelector('.selected').classList.remove('selected');
            answers[i].parentNode.querySelector('.selected').classList.remove('selected');
        }

        for(let j = 0; j < results.length; j++){ 
            results[j].point += questions[qindex].asw[aindex].points[j];
        }
        questions[qindex].done = aindex;
        answers[i].classList.add('selected');

        let questionBlocks = questionQuery.querySelectorAll('.question-block');
        if(parseInt(qindex)+1 < questionBlocks.length){
            questionBlocks[parseInt(qindex)+1].scrollIntoView();
        }
        let searchindex = 0;
        while(searchindex < questions.length && questions[searchindex].done != -1){
            searchindex++;
        }
        if(searchindex == questions.length){
            let maxindex = 0;
            for(let m = 1; m < results.length; m++){
                if(results[m].point > results[maxindex].point){
                    maxindex = m;
                }
            }


            console.log(maxindex);
            let resultQuery = document.querySelector('#result');
            resultQuery.querySelector('#result-title').innerHTML = results[maxindex].title;
            resultQuery.querySelector('#result-desc').innerHTML = results[maxindex].desc;
            resultQuery.querySelector('#result-img').src = results[maxindex].img;
            resultQuery.style.display = 'block';
            resultQuery.scrollIntoView();

            quizEnded = true;
        }
    });
}