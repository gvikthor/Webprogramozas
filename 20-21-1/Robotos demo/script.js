// Viktor András Gerely, Péter Kovács, Benjámin Dorogi

const SIZE_SCALE = 2; //default 2
let   DRAIN_SCALE = 1;  //default 1
const QUALITY_SCALE = 1;  //default 1
let   WARNING_LEVEL = 30;  //default 30
let   ROBOT_SPEED = 1;  //default 1
let   ROBOT_CHARGE_SPEED = 5;  //default 5

const start = document.querySelector('#startBtn');
const svg = document.querySelector('svg');
const table = document.querySelector('#beaconTable');

document.querySelector('#drain-scale').addEventListener('input', ()=>{
    DRAIN_SCALE = parseInt(document.querySelector('#drain-scale').value);
});
document.querySelector('#robot-speed').addEventListener('input', ()=>{
    ROBOT_SPEED = parseInt(document.querySelector('#robot-speed').value);
});
document.querySelector('#robot-charge').addEventListener('input', ()=>{
    ROBOT_CHARGE_SPEED = parseInt(document.querySelector('#robot-charge').value);
});
document.querySelector('#warning-level').addEventListener('input', ()=>{
    WARNING_LEVEL = parseInt(document.querySelector('#warning-level').value);
});

class Robot{
    constructor(){
        this.svg = document.createElementNS('http://www.w3.org/2000/svg','image');
        this.svg.setAttributeNS(null, 'href', 'robot.png');
    }

    init(beacon){
        this.beacon = beacon;
        beacon.robotIsHere = true;
        beacon.robot = this;
        svg.appendChild(this.svg);
        this.goto(beacon.x, beacon.y);
    }

    goto(x,y){
        this.x = x;
        this.y = y;
        this.svg.setAttributeNS(null,'x', this.x);
        this.svg.setAttributeNS(null,'y', this.y);
    }

    moveToNextBeacon(){
        this.beacon.robotIsHere = false;
        this.beacon.robot = null;
        this.next = nextBeacon(this.beacon);
        this.next.calmDown();
        this.beacon = null;

        this.diffX = this.x - this.next.x;
        this.diffY = this.y - this.next.y;
        
        this.angle = Math.asin(
                        Math.abs(this.diffY) /
                        Math.sqrt(Math.pow(this.diffX,2) + Math.pow(this.diffY,2))
                    );
        console.log(this.angle);
        this.deltaX = Math.abs(Math.cos(this.angle));
        this.deltaY = Math.abs(Math.sin(this.angle));
        requestAnimationFrame(()=>{
            this.nextStep();
        });
    }

    nextStep(){
        if(Math.sqrt(Math.pow(this.x - this.next.x,2) + Math.pow(this.y - this.next.y,2)) <= ROBOT_SPEED*SIZE_SCALE){
            this.goto(this.next.x, this.next.y);
            console.log('ARRIVED');
            this.settleAtBeacon();
        }else{
            this.goto(
                this.x - Math.sign(this.diffX) * this.deltaX * ROBOT_SPEED,
                this.y - Math.sign(this.diffY) * this.deltaY * ROBOT_SPEED
            );
            requestAnimationFrame(()=>{
                this.nextStep();
            });
        }
    }

    settleAtBeacon(){
        this.beacon = this.next;
        this.beacon.robotIsHere = true;
        this.beacon.robot = this;
        this.beacon.sentSignal = false;
        this.beacon.robotOnTheWay = false;
        if(this.beacon.battery < WARNING_LEVEL){
            this.chargeBeacon();
        }else{
            this.startPacking();
        }
    }

    chargeBeacon(){
        this.beacon.startRecharge();
        this.recursiveCharge();
    }

    recursiveCharge(){
        if(this.beacon.charge(ROBOT_CHARGE_SPEED)){
            this.beacon.stopCharge();
            this.startPacking();
        }else{
            setTimeout(()=>{
                this.recursiveCharge();
            }, 500);
        }
    }

    startPacking(){
        if(!this.beacon.receivedSignal) return;

        this.beacon.receivedSignal = false;
        this.moveToNextBeacon();
    }
}

const robot = new Robot();
let beacons = [];
let setupPhase = true;


function norm(event){
    return {
        x: event.x - svg.getBoundingClientRect().x,
        y: event.y - svg.getBoundingClientRect().y
    };
}
function color(battery){
    return `hsl(${battery}, 100%, 50%)`;
}
function prevBeacon(beacon){
    return beacons[beacon.index == 0 ? beacons.length - 1 : beacon.index - 1];
}
function nextBeacon(beacon){
    return beacons[beacon.index == beacons.length - 1 ? 0 : beacon.index + 1];
}

class Beacon{
    constructor(index, x, y, quality, svg, row){
        this.x = x;
        this.y = y;
        this.index = index;
        this.battery = 100;
        this.quality = quality;
        this.svg = svg;
        this.row = row;
        this.sentSignal = false;
        this.receivedSignal = false;
        this.robotOnTheWay = false;
        this.robotIsHere = false;
        this.isCharging = false;
    }

    updateView(){
        this.svg.style.fill = color(this.battery);
        this.row.style.backgroundColor = color(this.battery);
        let tds = this.row.querySelectorAll('td');
        tds[1].innerText = this.battery.toFixed(2) + '%';

        tds[3].innerText = this.sentSignal     ? '❗'  : ''; //Signal Sent
        tds[4].innerText = this.receivedSignal ? '✔️' : ''; //Signal Received
        tds[5].innerText = this.robotOnTheWay  ? '🤖' : ''; //Robot is on the Way
        tds[6].innerText = this.robotIsHere    ? '🤖' : ''; //Robot is Here
        tds[7].innerText = this.isCharging     ? '⚡' : ''; //Robot is Charging the beacon
    }

    start(){
        this.interval = setInterval(()=>{this.stepBeacon()}, 500);
    }

    stop(){
        clearInterval(this.interval);
    }

    stepBeacon(){
        let newBattery = this.battery - Math.random()*(1/this.quality)*DRAIN_SCALE;
        if(newBattery > 0){
            this.battery = newBattery;
            this.updateView();
            if(newBattery < WARNING_LEVEL) this.cryForHelp();
        }else{
            this.battery = 0;
            this.svg.style.fill = '#a3a3a3';
            this.row.style.backgroundColor = '#a3a3a3';
            this.row.querySelectorAll('td')[1].innerText = 'DRAINED';
            this.stop();
        }
    }

    cryForHelp(){
        if(this.sentSignal || this.robotOnTheWay) return;

        if(this.robotIsHere){
            robot.chargeBeacon();
        }else{
            console.log(this.index, 'CRIES FOR HELP');
            prevBeacon(this).warn();
            this.sentSignal = true;
        }
    }

    warn(){
        console.log(this.index, 'WAS WARNED');
        this.receivedSignal = true;
        if(!this.sentSignal && !this.robotOnTheWay && !this.isCharging){
            if(this.robotIsHere){
                robot.startPacking();
            }else{
                prevBeacon(this).warn();
            }
        } 
    }

    calmDown(){
        this.robotOnTheWay = true;
    }

    startRecharge(){
        this.stop();
        this.sentSignal = false;
        this.isCharging = true;
    }

    charge(amount){
        this.battery = this.battery + parseFloat(amount);
        if(this.battery > 100) this.battery = 100;
        this.updateView();
        return this.battery == 100;
    }

    stopCharge(){
        this.isCharging = false;
        this.start();
    }
}


svg.addEventListener('click', (e)=>{
    if(!setupPhase) return;

    let koord = norm(e);

    let rect = document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttributeNS(null, 'width', 20*SIZE_SCALE);
    rect.setAttributeNS(null, 'height', 20*SIZE_SCALE);
    rect.setAttributeNS(null,'x', koord.x - 10*SIZE_SCALE);
    rect.setAttributeNS(null,'y', koord.y - 10*SIZE_SCALE);
    rect.setAttributeNS(null,'rx',5);
    rect.style.fill = color(100);
    svg.appendChild(rect);
    
    let text = document.createElementNS('http://www.w3.org/2000/svg','text');
    text.setAttributeNS(null,'x', koord.x);
    text.setAttributeNS(null,'y', koord.y);
    text.setAttributeNS(null,'text-anchor','middle');
    text.setAttributeNS(null,'dominant-baseline','middle');
    text.innerHTML = beacons.length;
    text.style.fill = 'black';
    svg.appendChild(text);

    let quality = QUALITY_SCALE*Math.floor(Math.random() * 10) + 1;
    let newRow, newData;
    newRow = document.createElement('tr');
        newRow.id = `beacon-${beacons.length}`;
        newRow.style.backgroundColor = color(100);
        newRow.style.height = '30px';
        newData = document.createElement('td');
            newData.innerText = beacons.length;
            newRow.appendChild(newData);
        newData = document.createElement('td');
            newData.innerText = '100%';
            newRow.appendChild(newData);
        newData = document.createElement('td');
            newData.innerText = quality;
            newRow.appendChild(newData);
        for(let i = 0; i < 5; i++){
            newRow.appendChild(document.createElement('td'));
        }
        table.appendChild(newRow);

    beacons.push(new Beacon(
        beacons.length,
        koord.x - 10*SIZE_SCALE,
        koord.y - 10*SIZE_SCALE,
        quality,
        rect,
        newRow
    ));
});

start.addEventListener('click', ()=>{
    if(!setupPhase) return;
    setupPhase = false;

    robot.init(beacons[0]);

    for(const beacon of beacons){
        beacon.start();
    }
});