const fs = require('fs')

function errThrw(err) {
    if (err) throw err
}

async function main() {
    try {
        const filenames = await fs.promises.readdir('./02-inputs')
        await fs.promises.writeFile('./02-outputs/3-async.txt', '', errThrw)
        for (const filename of filenames) {
            const content = await fs.promises.readFile(`./02-inputs/${filename}`, 'utf-8')
            await fs.promises.writeFile('./02-outputs/3-async.txt', content, { flag: 'a' }, errThrw)
        }
        console.log('Done')
    } catch (err) {
        errThrw(err)
    }
}

main()