function delegate(parent, child, when, what) {
    function eventHandlerFunction(event) {
        let eventTarget = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if (eventHandler.contains(closestChild)) {
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}
/*
candidateName: a jelölt neve, akire szavazni lehet
likelyToVote: azon választófejedelmek neve, akik valószínűleg az adott jelöltre fognak szavazni (tehát 3 név az 3 szavazat)
army: a jelölt hadseregének mérete (a 3. feladatig nem releváns)
*/
const candidates = [{
        candidateName: 'Paul Atreides',
        likelyToVote: ['Simba Mufasafi Herceg', 'Paul Atreides', 'Völgyzugolyi Elrond'],
        army: 22000
    },
    {
        candidateName: 'Babar',
        likelyToVote: ['T\'Challa', 'Buborék Hercegnő', 'Zelda Hercegnő', 'Julien Király', 'Shrek'],
        army: 80000
    },
    {
        candidateName: 'Padmé Amidala',
        likelyToVote: ['Elsa Királynő', 'Renly Baratheon', 'Kuzko'],
        army: 34000
    },
    {
        candidateName: 'Sheev Palpatine',
        likelyToVote: ['Zordon Herceg', 'Sheev Palpatine', 'Firelord Ozai', 'Bowser', 'A Birodalmi Szenátus', 'Narniai Jadis Királynő'],
        army: 45000
    },
    {
        candidateName: 'Daenerys Targaryen',
        likelyToVote: ['Havas Jon'],
        army: 120000
    },
    {
        candidateName: 'Julien Király',
        likelyToVote: ['Renly Baratheon', 'Retexis'],
        army: 12000
    }
]