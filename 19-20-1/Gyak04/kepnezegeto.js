function $(id){
    return document.getElementById(id);
}

let kepek = [];
function betolt() {
    for (kep of arguments) {
        kepek.push(new Image());
        kepek[kepek.length-1].src = kep;
    }
}
betolt(
    "https://thumbs.dreamstime.com/z/sad-woman-shows-message-to-surprised-friend-women-negative-sitting-grass-park-97400077.jpg",
    "https://cdn.vox-cdn.com/thumbor/QQFnIJ-oRsMuO0eyH_bRG81PeJQ=/0x0:715x470/1200x800/filters:focal(301x178:415x292)/cdn.vox-cdn.com/uploads/chorus_image/image/56360253/sub_buzz_13357_1503609440_1.0.jpeg",
    "https://st3.depositphotos.com/1809585/13705/i/1600/depositphotos_137051774-stock-photo-woman-ignoring-a-marriage-proposal.jpg"
);

let akt_index = 0;
let halvanyul;
function kep_leptet(felfele){
    if(felfele){
        akt_index++;
        if(akt_index == kepek.length){
            akt_index = 0;
        }
    }else{
        akt_index--;
        if(akt_index == -1){
            akt_index = kepek.length-1;
        }
    }

    clearInterval(halvanyul);
    $('fokusz').style.opacity = 0;
    halvanyul = setInterval(() => {
        $('fokusz').src = kepek[akt_index].src;
        $('fokusz').style.opacity = 1;
    },550);
}

$('kepek').innerHTML = `
    <img id="fokusz" src="`+kepek[0].src+`"><br>
    <button id="lefele"> < </button>
    <button id="felfele"> > </button>
`;
$('fokusz').style.opacity = 1;
$('fokusz').style.transition = "opacity 0.5s";

$('lefele').addEventListener('click',() => {
    kep_leptet(true);
});
$('felfele').addEventListener('click',() => {
    kep_leptet(true);
});
