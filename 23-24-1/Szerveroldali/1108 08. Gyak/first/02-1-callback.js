const fs = require('fs')

function errThrw(err){
    if(err) throw err
}

fs.readdir('./02-inputs', (err, filenames) => {
    errThrw(err)

    fs.writeFile('./02-outputs/1-callback.txt', '', errThrw)
    filenames.forEach((filename, index) => {
        fs.readFile(`./02-inputs/${filename}`, 'utf-8', (err, content) => {
            fs.writeFile(
                './02-outputs/1-callback.txt',
                content,
                {flag: 'a'},
                errThrw
            )
            if(index == filenames.length - 1){
                console.log('Done')
            }
        })
    })
})