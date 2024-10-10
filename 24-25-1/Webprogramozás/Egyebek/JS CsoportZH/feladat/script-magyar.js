function ujElem(tipus, szulo, tartalommalFeltolt) {
    const elem = document.createElement(tipus)
    tartalommalFeltolt(elem)
    szulo.appendChild(elem)
}

function delegal(szulo, gyerek, mikor, mitortenik){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(gyerek)

        if(eventHandler.contains(closestChild)){
            mitortenik(event, closestChild)
        }
    }

    szulo.addEventListener(mikor, eventHandlerFunction)
}

const vasutvonalak = [
    {
        kiinduloVaros: "New York",
        erkezoVaros: "Washington D.C.",
        hossz: 225,
        menetido: 6,
        jegyar: 8
    },
    {
        kiinduloVaros: "San Francisco",
        erkezoVaros: "Los Angeles",
        hossz: 380,
        menetido: 10,
        jegyar: 12
    },
    {
        kiinduloVaros: "Chicago",
        erkezoVaros: "St. Louis",
        hossz: 300,
        menetido: 9,
        jegyar: 10
    },
    {
        kiinduloVaros: "Seattle",
        erkezoVaros: "Portland",
        hossz: 175,
        menetido: 5,
        jegyar: 6
    },
    {
        kiinduloVaros: "Boston",
        erkezoVaros: "New York",
        hossz: 215,
        menetido: 7,
        jegyar: 9
    },
    {
        kiinduloVaros: "Philadelphia",
        erkezoVaros: "Baltimore",
        hossz: 95,
        menetido: 3,
        jegyar: 4
    },
    {
        kiinduloVaros: "Miami",
        erkezoVaros: "Orlando",
        hossz: 235,
        menetido: 8,
        jegyar: 9
    },
    {
        kiinduloVaros: "Dallas",
        erkezoVaros: "Houston",
        hossz: 240,
        menetido: 8,
        jegyar: 9
    },
    {
        kiinduloVaros: "Denver",
        erkezoVaros: "Salt Lake City",
        hossz: 525,
        menetido: 15,
        jegyar: 15
    },
    {
        kiinduloVaros: "Atlanta",
        erkezoVaros: "Charlotte",
        hossz: 245,
        menetido: 8,
        jegyar: 9
    }
]
