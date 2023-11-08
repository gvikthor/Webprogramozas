const fs = require('fs')

function errThrw(err){
    if(err) throw err
}

fs.promises.readdir('./02-inputs')
.then(filenames => {
    fs.writeFile('./02-outputs/2-promise.txt', '', errThrw)
    const promises = filenames.map(filename => fs.promises.readFile(`./02-inputs/${filename}`, 'utf-8'))
    return Promise.all(promises)
})
.then(contents => {
    contents.forEach((content, index) => {
        fs.writeFile(
            './02-outputs/2-promise.txt',
            content,
            {flag: 'a'},
            errThrw
        )
        if(index == contents.length - 1){
            console.log('Done')
        }
    })
})