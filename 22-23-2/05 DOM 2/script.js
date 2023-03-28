function generateElement(parent, type, fillWithData){
    return parent.appendChild(
        fillWithData(
                document.createElement(type)
            )
        )
}

function generateTextElement(parent, type, text){
    return generateElement(parent, type, elem => {
        elem.innerText = text
        return elem
    })
}

generateTextElement(document.body, 'h2', 'Valami')

const names = [
    'John','Jane','Jack','Jill','Joe'
]

const list = generateElement(document.body, 'ul', ul => ul)
names.forEach(name => generateTextElement(list, 'li', name))