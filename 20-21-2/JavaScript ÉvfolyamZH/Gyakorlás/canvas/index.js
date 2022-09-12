function delegal(szulo, gyerek, mikor, mit){
    function esemenyKezelo(esemeny){
        let esemenyCelja    = esemeny.target;
        let esemenyKezeloje = this;
        let legkozelebbiKeresettElem = esemenyCelja.closest(gyerek);

        if(esemenyKezeloje.contains(legkozelebbiKeresettElem)){
            mit(esemeny, legkozelebbiKeresettElem);
        }
    }


    szulo.addEventListener(mikor, esemenyKezelo);
}

const canvas = document.querySelector('canvas')
const ceruza = canvas.getContext('2d')
const inputok = document.querySelector('#inputok')

const szinek = [
    {
        color: 'red',
        height: 100
    },
    {
        color: 'orange',
        height: 100
    },
    {
        color: 'yellow',
        height: 100
    },
    {
        color: 'greenyellow',
        height: 100
    },
    {
        color: 'lightblue',
        height: 100
    },
    {
        color: 'violet',
        height: 100
    }
]

function kirajzol(){
    ceruza.clearRect(0,0,600,600)
    let szum = 0
    for(const szin of szinek){
        szum += szin.height
    }

    let y = 0
    for(const szin of szinek){
        let aranyositottMagassag = (szin.height/szum)*600
        ceruza.fillStyle = szin.color
        ceruza.fillRect(0, y, 600, y+aranyositottMagassag)
        ceruza.stroke()
        y += aranyositottMagassag
    }
}

function ujrarajzol(esemeny, input){
    szinek[input.dataset.index].height = parseInt(input.value)
    kirajzol()
}

delegal(inputok, '.szinrange', 'input', ujrarajzol)

kirajzol()