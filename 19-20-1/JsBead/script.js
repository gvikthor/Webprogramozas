let nav_buttons = document.querySelectorAll('.btn');

let popup = {
    self: document.querySelector('#popup'),
    title: document.querySelector('#popup_title'),
    desc: document.querySelector('#popup_desc'),
    btns: document.querySelector('#popup_btns')
};

let overlay = document.querySelector('#overlay');

function show_overlay(show = false){
    if(show){
        overlay.classList.add('overlay_shown');
        overlay.classList.remove('overlay_hidden');
    }else{
        overlay.classList.add('overlay_hidden');
        overlay.classList.remove('overlay_shown');
    }
}

function show_popup(show = false, title = 'Title', desc = 'Description', buttons = [{id: 'Button id', text: 'Button text' }]){
    if(show){
        popup.title.innerHTML = title;
        popup.desc.innerHTML = desc;

        for(button of buttons){
            popup.btns.innerHTML += `<span id=${button.id}>${button.text}</span>`;
        }

        popup.self.classList.add('popup_shown');
        popup.self.classList.remove('popup_hidden');

    }else{
        popup.self.classList.add('popup_hidden');
        popup.self.classList.remove('popup_shown');
        popup.btns.innerHTML = '';
    }
}


////////////////JÁTÉKLOGIKA
let game_vars = {
    table_ref: document.querySelector('#game_area'),
    table: [],
    td_list: [],
    mouse_down: false,
    color: -1,
    color_done: [false],
    cell_start: -1,
    cell_prev: -1,
    cell_tail: [-1],
    diff: -1,

    list2index: (list_index)=>{
        return {
            v: Math.floor(list_index/game_vars.table.length),
            h: list_index % game_vars.table.length
        }
    },
    index2list: (vertical_index, horizontal_index)=>{
        return (vertical_index*game_vars.table.length)+horizontal_index;
    },
    reset: ()=>{
        game_vars.table_ref = document.querySelector('#game_area');
        game_vars.table_ref.innerHTML = '';
        game_vars.table = [];
        game_vars.td_list = [];
        game_vars.mouse_down = false;
        game_vars.color = -1;
        game_vars.color_done = [false];
        game_vars.cell_start = -1;
        game_vars.cell_prev = -1;
        game_vars.cell_tail = [-1];
        game_vars.diff = -1;
    }
}

function init(size = 0){ //0: könnyű, 1: közepes, 2: nehéz
    game_vars.reset();
    switch(size){
        case 0:
            game_vars.table = [
                [1,2,3,0,0],
                [0,0,0,4,0],
                [0,4,2,0,0],
                [0,0,0,0,0],
                [0,0,1,3,0],
            ];
            game_vars.color_done.length = 5; //egyel hosszabb, hogy könnyű legyen indexelni
            break;
        case 1:
            game_vars.table = [
                [2,0,0,9,0,0,0,5,0],
                [1,0,0,8,0,11,0,0,5],
                [0,2,0,0,6,0,7,0,0],
                [0,0,0,0,0,11,0,10,0],
                [0,0,0,7,0,0,0,0,0],
                [0,0,0,4,0,0,0,0,0],
                [0,0,0,0,0,0,0,3,6],
                [0,9,0,4,8,0,0,0,0],
                [0,1,0,0,0,0,0,10,3],
            ];
            game_vars.color_done.length = 12;
            break;
        case 2:
            game_vars.table = [
                [1,0,0,0,3,0,5,0,2],
                [0,0,0,0,0,0,8,5,0],
                [7,4,0,6,0,0,0,0,0],
                [0,0,0,0,0,0,1,0,0],
                [0,0,0,0,0,0,0,0,2],
                [0,0,4,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,7,0,0,0,0,3,0,0],
                [0,0,0,6,0,0,0,0,8],
            ];
            game_vars.color_done.length = 9;
            break;
        default:
            console.log('Default');
    }
    
    let game_table = '<table id="mouseleave_this">';
    for(row of game_vars.table){
        game_table += '<tr>';
        for(cell of row){
            game_table += `<td class="c${cell}">${cell}</td>`;
        }
        game_table += '</tr>'
    }
    game_table += '</table>';
    game_vars.table_ref.innerHTML = game_table;
    game_vars.color_done.fill(false);
    game_vars.color_done[0] = true;
    game_vars.diff = size;
    bind_events();
}

function bind_events(){
    game_vars.td_list = game_vars.table_ref.querySelectorAll('td');
    for(let i = 0; i < game_vars.td_list.length; i++){
        game_vars.td_list[i].addEventListener('mousedown',()=>{
            if(event.buttons == 1){
                let crnt = game_vars.list2index(i);
                if(!game_vars.color_done[game_vars.table[crnt.v][crnt.h]]){ //ne lehessen ugyanabból a pontból két vonalat húzni
                    let clr = game_vars.table[crnt.v][crnt.h];
                    if(clr != 0){
                        game_vars.mouse_down = true;
                        game_vars.color = game_vars.table[crnt.v][crnt.h];
                        game_vars.cell_start = i;
                        game_vars.cell_prev = i;
                        game_vars.cell_tail = [i];
                    }
                }
            }else{
                clear_color(game_vars.td_list[i].classList[0]);
            }
        });
        game_vars.td_list[i].addEventListener('mouseenter',()=>{
            if(game_vars.mouse_down){
                let crnt = game_vars.list2index(i);
                if(game_vars.table[crnt.v][crnt.h] == 0 && game_vars.td_list[i].classList[0] == 'c0'){
                    let prev = game_vars.list2index(game_vars.cell_prev);
                    if((prev.v == crnt.v && Math.abs(prev.h-crnt.h) == 1) || (prev.h == crnt.h && Math.abs(prev.v-crnt.v) == 1)){ //ne lehessen átlósan húzni
                        game_vars.td_list[i].classList.add('c'+game_vars.color);
                        game_vars.td_list[i].classList.remove('c0');
                        game_vars.cell_prev = i;
                        game_vars.cell_tail.push(i);
                    }
                }else if(game_vars.cell_tail.slice(-2)[0] == i){                          
                        let crnt = game_vars.list2index(game_vars.cell_prev);
                        if(game_vars.table[crnt.v][crnt.h] == 0){
                            game_vars.td_list[game_vars.cell_prev].classList.remove('c'+game_vars.color);
                            game_vars.td_list[game_vars.cell_prev].classList.add('c0');
                            game_vars.cell_tail.pop();
                        }
                        game_vars.cell_prev = i;
                }
            }
        });
        game_vars.td_list[i].addEventListener('mouseup',()=>{
            if(game_vars.mouse_down){
                game_vars.mouse_down = false;
                let crnt = game_vars.list2index(i);
                let prev = game_vars.list2index(game_vars.cell_prev);
                let start = game_vars.list2index(game_vars.cell_start);
                if(game_vars.table[crnt.v][crnt.h] != game_vars.table[start.v][start.h] ||
                   i == game_vars.cell_start ||
                   !((prev.v == crnt.v && Math.abs(prev.h-crnt.h) == 1) || (prev.h == crnt.h && Math.abs(prev.v-crnt.v) == 1)) //ezzel kerüljök el, hogy a random nem továbbhúzott vonal (mert pl belevittük egy másik számba) befejezhető legyen azzal, hogy a célszámon engedjük fel, pedig nincs is mellette a vonalunk
                ){
                    clear_color('c'+game_vars.color);
                }else{
                    game_vars.color_done[game_vars.color] = true;
                }
                game_vars.color = -1;
                game_vars.cell_start = -1;
                game_vars.cell_tail = [-1];
            }
            if(test_win()){
                show_overlay(true);
                show_popup(true,"Nyertél","Sikeresen összekötötted a pontokat, gratulálunk!",
                [
                    {id: "won_ok", text: "Yeet"}
                ]
                );
                document.querySelector('#won_ok').addEventListener('click',()=>{
                    game_vars.reset();
                    game_vars.table_ref.innerHTML = `
                    <pre>
                        Név
                        Neptun-kód
                        Tárgy & beadandó neve
                        Beküldés ideje
                        Ezt a megoldást Név, Neptun ID küldte be és készítette a Tárgy neve kurzus Feladat neve feladatához.
                        Kijelentem, hogy ez a megoldás a saját munkám.
                        Nem másoltam vagy használtam harmadik féltől származó megoldásokat.
                        Nem továbbítottam megoldást hallgatótársaimnak, és nem is tettem közzé.
                        Az Eötvös Loránd Tudományegyetem Hallgatói Követelményrendszere (ELTE szervezeti és működési szabályzata, II. Kötet, 74/C. §) kimondja, 
                        hogy mindaddig, amíg egy hallgató egy másik hallgató munkáját - vagy legalábbis annak jelentős részét - saját munkájaként mutatja be, 
                        az fegyelmi vétségnek számít. A fegyelmi vétség legsúlyosabb következménye a hallgató elbocsátása az egyetemről.
                    </pre>
                    `;
                    show_popup(false);
                    show_overlay(false);

                });
            }
        });
    }
    game_vars.table_ref.addEventListener('contextmenu',()=>{
        event.preventDefault();
    });
    document.querySelector('#mouseleave_this').addEventListener('mouseleave', ()=>{
        if(game_vars.mouse_down){
            game_vars.mouse_down = false;
            clear_color('c'+game_vars.color);
            game_vars.color = -1;
            game_vars.cell_start = -1;
            game_vars.cell_tail = [-1];
        }
    });
}

function clear_color(color){
    for(td of game_vars.td_list){
        if(td.innerHTML == '0'){
            td.classList.remove(color);
            td.classList.add('c0');
        }
    }
    game_vars.color_done[color.slice(1)] = false;
}

function test_win(){
    let won = true;
    for(let i = 0; i < game_vars.color_done.length && won; i++){
        won = game_vars.color_done[i];
    }
    return won;
}

////////////////MENTÉS
function cookie_set(variable_name, variable_value, storage_days) {
    let d = new Date();
    d.setTime(d.getTime() + (storage_days*24*60*60*1000));
    let exp = "expires="+ d.toUTCString();
    document.cookie = (variable_name + "=" + variable_value + ";" + exp + ";path=/");
}

function cookie_get(variable_name) {
    let retval = {};
    retval.found = false;
    retval.value = '';

    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    
    let i = 0;
    while(i < cookies.length && !retval.found){
        let cookieBontva = cookies[i].split('=');
        retval.found = (cookieBontva[0].trim() == variable_name);
        if(retval.found){ 
            retval.value = cookieBontva[1];
        }
        i++;
    }
    return retval;
}

function exists(difficulty){
    return cookie_get(difficulty).found;
}

function save(difficulty){
    let save_text = `${game_vars.table} ${game_vars.color_done}|`;
    for(let i = 0; i < game_vars.td_list.length-1; i++){
        save_text += game_vars.td_list[i].classList[0] + '-';
    }
    save_text += game_vars.td_list[game_vars.td_list.length-1].classList[0];
    cookie_set(difficulty,save_text,2);
}

function load(difficulty){
    init(difficulty);
    let save_data = cookie_get(difficulty).value.split('|');

    let s_game_vars = save_data[0].split(' ');
    let s_table = s_game_vars[0].split(',');
    let length = Math.sqrt(s_table.length);
    let z = 0;
    game_vars.table = [];
    for(let i = 0; i < length; i++){
        let tmp = [];
        for(let j = 0; j < length; j++){
            tmp.push(s_table[z]);
            z++;
        }
        game_vars.table.push(tmp);
    }

    let color_done_string = s_game_vars[1].split(','); //ebben stringek vannak, nem boolok!
    for(let i = 0; i < color_done_string.length; i++){
        game_vars.color_done[i] = (color_done_string[i] == 'true');
    }
    let s_classes = save_data[1].split('-');
    for(let i = 0; i < game_vars.td_list.length; i++){
        game_vars.td_list[i].classList.remove(game_vars.td_list[i].classList[0]);
        game_vars.td_list[i].classList.add(s_classes[i]);
    }
}


////////////////NAV GOMBOK
nav_buttons[0].addEventListener('click',()=>{ //új játék
    show_overlay(true);
    show_popup(true,'Új játék','Biztosan új játékot akarsz kezdeni?',
                [
                    {id:'new_easy',text:'Könnyű'},
                    {id:'new_medium',text:'Közepes'},
                    {id:'new_hard',text:'Nehéz'},
                    {id:'new_cancel',text:'Mégse'},
                ]);
    document.querySelector('#new_easy').addEventListener('click',()=>{
        init(0);
        show_popup(false);
        show_overlay(false);
    });
    document.querySelector('#new_medium').addEventListener('click',()=>{
        init(1);
        show_popup(false);
        show_overlay(false);
    });
    document.querySelector('#new_hard').addEventListener('click',()=>{
        init(2);
        show_popup(false);
        show_overlay(false);
    });
    document.querySelector('#new_cancel').addEventListener('click',()=>{
        show_popup(false);
        show_overlay(false);
    });
});

nav_buttons[1].addEventListener('click', ()=>{  //betölt
    show_overlay(true);
    show_popup(true,'Betöltés','Biztosan új játékot akarsz betölteni? A jelenlegi állás elveszhet!',
                [
                    {id:'load_easy',text:'Könnyű'},
                    {id:'load_medium',text:'Közepes'},
                    {id:'load_hard',text:'Nehéz'},
                    {id:'load_cancel',text:'Mégse'},
                ]);
    document.querySelector('#load_easy').addEventListener('click',()=>{
        show_popup(false);
        show_overlay(false);
        if(exists(0)){
            load(0);
        }else{
            show_overlay(true);
            show_popup(true,'Betöltés','Még nincs ilyen mentésed!',
                [
                    {id:'load_sad',text:'Oké'}
                ]);
            document.querySelector('#load_sad').addEventListener('click',()=>{
                show_popup(false);
                show_overlay(false);
            });
        }
    });
    document.querySelector('#load_medium').addEventListener('click',()=>{
        show_popup(false);
        show_overlay(false);
        if(exists(1)){
            load(1);
        }else{
            show_overlay(true);
            show_popup(true,'Betöltés','Még nincs ilyen mentésed!',
                [
                    {id:'load_sad',text:'Oké'}
                ]);
            document.querySelector('#load_sad').addEventListener('click',()=>{
                show_popup(false);
                show_overlay(false);
            });
        }
    });
    document.querySelector('#load_hard').addEventListener('click',()=>{
        show_popup(false);
        show_overlay(false);
        if(exists(2)){
            load(2);
        }else{
            show_overlay(true);
            show_popup(true,'Betöltés','Még nincs ilyen mentésed!',
                [
                    {id:'load_sad',text:'Oké'}
                ]);
            document.querySelector('#load_sad').addEventListener('click',()=>{
                show_popup(false);
                show_overlay(false);
            });
        }
    });
    document.querySelector('#load_cancel').addEventListener('click',()=>{
        show_popup(false);
        show_overlay(false);
    });
});

nav_buttons[2].addEventListener('click', ()=>{  //ment
    if(game_vars.diff != -1){
        if(exists(game_vars.diff)){
            show_overlay(true);
            show_popup(true,'Mentés','Már létezik ilyen mentés. Felülírod?',
                        [
                            {id:'save_yes',text:'Igen'},
                            {id:'save_no',text:'Nem'}
                        ]);
            document.querySelector('#save_yes').addEventListener('click',()=>{
                save(game_vars.diff);
                show_popup(false);
                show_overlay(false);
            });
            document.querySelector('#save_no').addEventListener('click',()=>{
                show_popup(false);
                show_overlay(false);
            });
        }else{
            save(game_vars.diff);
        }
    }else{
        show_overlay(true);
        show_popup(true,'Mentés','Nem vagy játékban, ezért nincs mit menteni. Kezdj egy új játékot!',
                    [
                        {id:'save_sad',text:'Oké'}
                    ]);
        document.querySelector('#save_sad').addEventListener('click',()=>{
            show_popup(false);
            show_overlay(false);
        });
    }
});
