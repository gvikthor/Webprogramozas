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

let idx = 0;
$('kepek').innerHTML = `
    <img id="aktkep" src="`+ kepek[idx].src +`"><br>
    <button id="gbal"> < </button> <button id="gjobb"> > </button>
`;
$('aktkep').style.opacity = 1;
$('aktkep').style.transition = "opacity 0.5s";

$('gbal').addEventListener('click', () => {
    $('aktkep').style.opacity = 0;

    let kepidozito = setTimeout(() => {
        idx--;
        if(idx < 0){
            idx = kepek.length-1;
        }
        $('aktkep').src = kepek[idx].src;
        $('aktkep').style.opacity = 1;
    }, 550);
    
});
$('gjobb').addEventListener('click', () => {
    $('aktkep').style.opacity = 0;

    let kepidozito = setTimeout(() => {
        idx++;
        if(idx == kepek.length){
            idx = 0;
        }
        $('aktkep').src = kepek[idx].src;
        $('aktkep').style.opacity = 1;
    }, 550);
});