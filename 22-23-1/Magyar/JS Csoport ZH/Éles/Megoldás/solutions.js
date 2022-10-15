////// 1. feladat //////

    // Progtételesen (maximumkeresés)
        let winner = candidates[0]
        for(const current of candidates){
            if(current.likelyToVote.length > winner.likelyToVote.length){
                winner = current
            }
        }
        console.log(winner)

    // Tömbfüggvénnyel
        console.log(
            candidates.reduce(
                (winner, current) => current.likelyToVote.length > winner.likelyToVote.length ? current : winner
            )
        )



////// 2. feladat //////

    // Progtételesen (kiválogatás + pesszimista keresés)
        let selfvoters = []
        for(const current of candidates){
            let found = false
            for(const voter of current.likelyToVote){
                if(voter == current.candidateName){
                    found = true
                    break // while esetében nyilván nem kéne break, hiszen ott a !found a tételben
                }
            }
            if(found){
                selfvoters.push(current)
            }
        }
        console.log(selfvoters)

    // Tömbfüggvénnyel
        console.log(
            candidates.filter(current => current.likelyToVote.includes(current.candidateName))
        )



////// 3. feladat //////

    // Progtételesen (másolás)
        let newPoints = []
        for(const current of candidates){
            newPoints.push({
                candidateName: current.candidateName,
                points: (current.army * current.likelyToVote.length)/1000
            })
        }
        console.log(newPoints)

    // Tömbfüggvénnyel
        console.log(
            candidates.map(current => {return{ // itt ugye annyi a trükk, hogy a current => {...} azt hiszi, hogy egy függvény, nem pedig objektum, szóval a függvényben returnölni kell az objektumot
                candidateName: current.candidateName,
                points: (current.army * current.likelyToVote.length)/1000
            }})
        )


// Innentől az alternatív megoldásokat kikommentelem, mert itt bezavar, ha többször ugyanaz van.

////// 4. feladat //////
    const candidateList = document.querySelector('#candidates')

    // Ezt progtételnek már nem nagyon lehet hívni, ámbátor ez techikailag egy összegzés
        /*
        for(const current of newPoints){
            const newLI = document.createElement('li')
            newLI.innerText = current.candidateName + ' (' + current.points + ')'
            candidateList.appendChild(newLI)
        }
        */

    // Tömbfüggvénnyel (3. feladat map-et felhasználva)
        /*
        candidates.map(current => {return{
            candidateName: current.candidateName,
            points: (current.army * current.likelyToVote.length)/1000
        }}).forEach(current => {
            const newLI = document.createElement('li')
            newLI.innerText = `${current.candidateName} (${current.points})`
            candidateList.appendChild(newLI)
        })
        */

    // Nagyon compresselve
        candidates
            .map(current => `${current.candidateName} (${(current.army * current.likelyToVote.length)/1000})`)
            .forEach(current => candidateList.appendChild(document.createElement('li')).innerText = current)

////// 5. feladat //////

    // Sok event listenerel (Ha nagyon bele akarjuk látni, akkor ez egy )
        /*
        const listItems = candidateList.querySelectorAll('li')
        for(const current of listItems){
            current.addEventListener('click', event => {
                const oldSelected = candidateList.querySelector('.newEmperor')
                if(oldSelected != undefined){
                    oldSelected.classList.remove('newEmperor')
                }
                current.classList.add('newEmperor')
            })
        }
        */
    
    // Delegálással
        /*delegate(candidateList, 'li', 'click', (event, current) => {
            const oldSelected = candidateList.querySelector('.newEmperor')
            if(oldSelected){
                oldSelected.classList.remove('newEmperor')
            }
            current.classList.add('newEmperor')
        })*/

    // +JS nyelvi elemmel:  optional chaining operátor: ha nem null/undefined, akkor folytatja
        delegate(candidateList, 'li', 'click', (event, current) => {
            candidateList.querySelector('.newEmperor')?.classList.remove('newEmperor')
            current.classList.add('newEmperor')
        })
