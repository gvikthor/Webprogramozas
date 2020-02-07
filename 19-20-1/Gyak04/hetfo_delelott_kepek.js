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

let akt = 0;
$('kepek').innerHTML = `
    <img id="nagykep" src="`+kepek[0].src+`"><br>
    <button id="kep_bal"> < </button><button id="kep_jobb"> > </button>
`;

$('nagykep').style.opacity = 1;
$('nagykep').style.transition = "opacity 0.5s";

let halvanyul;
$('kep_bal').addEventListener('click', () => {
    $('nagykep').style.opacity = 0;
    halvanyul = setInterval(() => {
        akt--;
        if(akt < 0){
            akt = kepek.length-1;
        }
        $('nagykep').src = kepek[akt].src;
        $('nagykep').style.opacity = 1;
        clearInterval(halvanyul);
    },550);
});

$('kep_jobb').addEventListener('click', () => {
    $('nagykep').style.opacity = 0;
    halvanyul = setInterval(() => {
        akt++;
        if(akt == kepek.length){
            akt = 0;
        }
        $('nagykep').src = kepek[akt].src;
        $('nagykep').style.opacity = 1;
        clearInterval(halvanyul);
    },550);
});