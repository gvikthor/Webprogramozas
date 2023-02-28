// Tömbfüggvényes 6. feladatmegoldásában említettem.
// Fogalmam sincs, mi az angol szó a névelőre.

function nevelo0(word){
    return 'a(z)'
}

function nevelo1(word){
    // Nem írtam végig, nyilván AÁEÉIÍ stb mindre kell egy vagy
    if(word[0] == 'A' || word[0] == 'Á' /* || ... */){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo2(word){
    const first = word[0]
    if(first == 'A' || first == 'Á' /* || ... */){
        return 'az'
    }else{
        return 'a'
    }
}

function nevelo3(word){
    const first = word[0]
    if(first == 'A' || first == 'Á' /* || ... */){
        return 'az'
    }
    return 'a'    
}

// Eddig csak nagybetűkre működött
function nevelo4(word){
    const first = word[0]
    if(first == 'A' || first == 'a' || first == 'Á' /* || ... */){
        return 'az'
    }
    return 'a'    
}

function nevelo5(word){
    const first = word[0].toUpperCase()
    if(first == 'A' || first == 'Á' /* || ... */){
        return 'az'
    }
    return 'a'    
}

function nevelo6(word){
    const first = word[0].toUpperCase()
    const vowels = ['A','Á','E','É','I','Í','O','Ó','Ö','Ő','U','Ú','Ü','Ű']
    if(vowels.includes(first)){
        return 'az'
    }
    return 'a'    
}

function nevelo7(word){
    const first = word[0].toUpperCase()
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'
    if(vowels.includes(first)){
        return 'az'
    }
    return 'a'    
}

function nevelo8(word){
    const first = word[0].toUpperCase()
    const vowels = 'AÁEÉIÍOÓÖŐUÚÜŰ'
    return vowels.includes(first) ? 'az' : 'a'  

    // Ternary operátor
    // kérdés ? válaszHaIgaz : válaszHaHamis
}

// Ez már túl van tolva, a 8. függvénynél érdemes megállni
function nevelo9(word){
    return 'AÁEÉIÍOÓÖŐUÚÜŰ'.includes((word[0].toUpperCase())) ? 'az' : 'a'
}
