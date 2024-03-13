const ACT_AS_IF_THIS_WERE_A_SERVER = {
    'abc123': {
        id: 'abc123',
        status: 'done',
        name: 'Barátok meghívása'
    },
    'qwe123': {
        id: 'qwe123',
        status: 'todo',
        name: 'Hely lefoglalása'
    },
    'jkl987': {
        id: 'jkl987',
        status: 'todo',
        name: 'Játékok összeszedése'
    },
    'cvb654': {
        id: 'cvb654',
        status: 'done',
        name: 'Időpont kiválasztása'
    },
}
function getData(){
    return ACT_AS_IF_THIS_WERE_A_SERVER
}
function getDataAsArray(){
    return Object.entries(getData()).map(entry => entry[1])
}
function setData(id, key, value){
    ACT_AS_IF_THIS_WERE_A_SERVER[id][key] = value
}