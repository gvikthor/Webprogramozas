let questions = [
    {
        done: -1,
        qst: 'Milyen gyümölcs a kedvenced?',
        asw: [
            {
                img: 'https://www.tuja.hu/webaruhaz/media/catalog/product/cache/1/image/600x600/17f82f742ffe127f42dca9de82fb58b1/p/a/packham-korte_1.jpg',
                txt: 'Körte',
                pts: [-5,2,0]
            },
            {
                img: 'https://novenypatika.cdn.shoprenter.hu/custom/novenypatika/image/cache/w900h500wt1/product/Aroma/szilva.jpg?lastmod=1536170526.1562609943',
                txt: 'Szilva',
                pts: [10,3,5]
            },
            {
                img: 'https://www.femcafe.hu/sites/default/files/images/home-brewed-make-your-own-peach-schnapps-liqueur3.jpg',
                txt: 'Barack',
                pts: [-10,0,7]
            }]
    },
    {
        done: -1,
        qst: 'Mi a kedvenc zöldséged?',
        asw: [
            {
                img: '',
                txt: 'Brokkoli',
                pts: [-10,15,-10]
            },
            {
                img: '',
                txt: 'Káposzta',
                pts: [3,10,3]
            }
        ]
    }
];

let results = [
    {
        title: 'Kék',
        desc: 'Neked a kék a kedvenc színed.',
        img: 'https://4cdn.hu/kraken/image/upload/s--SixS5sLb--/c_limit,w_1160/7JYSOXIEpr9tIiFes.jpeg',
        pt: 0
    },
    {
        title: 'Zöld',
        desc: 'Neked a zöld a kedvenc színed.',
        img: '',
        pt: 0
    },
    {
        title: 'Piros',
        desc: 'Neked a piros a kedvenc színed.',
        img: '',
        pt: 0
    }
];

let questionsQuery = document.querySelector('#questions');

let questionBlockIndex = 0;
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

    let answerBlockIndex = 0;
    for(answer of question.asw){
        let newAnswer = document.createElement('div');
        newAnswer.classList.add('answer');
        newAnswerBlock.appendChild(newAnswer);
        newAnswer.dataset.index = answerBlockIndex;
        newAnswer.dataset.qindex = questionBlockIndex;

        let newImg = document.createElement('img');
        newImg.src = answer.img;
        newAnswer.appendChild(newImg);

        newAnswer.innerHTML += answer.txt;

        answerBlockIndex++;
    }

    questionBlockIndex++;
}

let quizFinished = false;
let answers = document.querySelectorAll('.answer');
for(let i = 0; i < answers.length; i++){
    answers[i].addEventListener('click', ()=>{
        if(quizFinished) return;

        let qindex = answers[i].dataset.qindex;
        let aindex = answers[i].dataset.index;

        if(questions[qindex].done != -1){
            let previndex = questions[qindex].done;
            for(let j = 0; j < results.length; j++){
                results[j].pt -= questions[qindex].asw[previndex].pts[j];
            }
            answers[i].parentNode.querySelector('.selected').classList.remove('selected');
        }

        questions[qindex].done = aindex;
        answers[i].classList.add('selected');
        for(let j = 0; j < results.length; j++){
            results[j].pt += questions[qindex].asw[aindex].pts[j];
        }

        /*//.scrollIntoView()
        
        if(qindex+1 < questions.length){
            //questionsQuery[qindex+1].scrollIntoView();
        }else{
            resultQuery.scrollIntoView();
        }*/

        let searchindex = 0;
        while(searchindex < questions.length && questions[searchindex].done != -1){
            searchindex++;
        }
        if(searchindex == questions.length){
            let maxindex = 0;
            for(let m = 1; m < results.length; m++){
                if(results[m].pt > results[maxindex].pt){
                    maxindex = m;
                }
            }

            let resultQuery = document.querySelector('#result');
            resultQuery.style.display = 'block';
            resultQuery.querySelector('#result-img').src = results[maxindex].img;
            resultQuery.querySelector('#result-title').innerHTML = results[maxindex].title;
            resultQuery.querySelector('#result-desc').innerHTML = results[maxindex].desc;

            quizFinished = true;
        }
    });
}