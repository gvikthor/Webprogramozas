function $(id){
    return document.getElementById(id);
}

let kepek = [];
let aktfokusz = 0;
function betolt() {
    for (kep of arguments) {
        kepek.push(new Image());
        kepek[kepek.length-1].src = kep;
    }
}
betolt(
    "https://thumbs.dreamstime.com/z/sad-woman-shows-message-to-surprised-friend-women-negative-sitting-grass-park-97400077.jpg",
    "https://cdn.vox-cdn.com/thumbor/QQFnIJ-oRsMuO0eyH_bRG81PeJQ=/0x0:715x470/1200x800/filters:focal(301x178:415x292)/cdn.vox-cdn.com/uploads/chorus_image/image/56360253/sub_buzz_13357_1503609440_1.0.jpeg",
    "https://st3.depositphotos.com/1809585/13705/i/1600/depositphotos_137051774-stock-photo-woman-ignoring-a-marriage-proposal.jpg",
    "https://www.insideedition.com/sites/default/files/styles/content_full/public/images/2018-06/istock-829471540.jpg?itok=6P3BxAyN",
    "https://static.euronews.com/articles/stories/03/72/62/86/602x338_cmsv2_ab43e99c-fa7a-54d6-86a5-cd0cb14bae3d-3726286.jpg",
    "https://i.imgur.com/tymmyDy.png"
);

function fokuszba(idx){
    $('fokep').innerHTML = '<img src='+kepek[idx].src+'>'
}

function init(){
    fokuszba(aktfokusz);
    $('balragomb').addEventListener('click', () => {
        aktfokusz--;
        if(aktfokusz < 0){
            aktfokusz = kepek.length-1;
        }
        fokuszba(aktfokusz);
    });
    $('jobbragomb').addEventListener('click', () => {
        aktfokusz++;
        if(aktfokusz == kepek.length){
            aktfokusz = 0;
        }
        fokuszba(aktfokusz);
    });
}


init();