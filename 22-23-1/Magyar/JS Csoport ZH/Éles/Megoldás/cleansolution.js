// Ebben a fileban csak a kész, rövid megoldás van benne, ahogy én oldanám meg a feladatot.
// Itt a console logokat is kicsit máshogy csináltam, meg van, amit összevontam.
// Altrnatívák a solution.js fileban.

const candidateList = document.querySelector('#candidates')

console.log(
    candidates
        .reduce((winner, current) => current.likelyToVote.length > winner.likelyToVote.length ? current : winner)
        .candidateName
)

candidates
    .filter(current => current.likelyToVote.includes(current.candidateName))
    .forEach(current => console.log(`${current.candidateName}`))

candidates
    .map(current => `${current.candidateName} (${(current.army * current.likelyToVote.length)/1000})`)
    .forEach(current => {
        console.log(current) // 3.
        candidateList.appendChild(document.createElement('li')).innerText = current // 4.
    })

delegate(candidateList, 'li', 'click', (event, current) => {
    candidateList.querySelector('.newEmperor')?.classList.remove('newEmperor')
    current.classList.add('newEmperor')
})
