// const pets = {
//     0: 'cat',
//     1: 'dog',
//     2: 'rabbit',
//     length: 3
// }

// for(let i = 0; i < pets.length; i++){
//     console.log(pets[i]);
// }

// let obj = {};
// obj.onclick = '123';
// obj.onclick = 'abc';
// console.log(obj);

const f1 = function(){
    console.log('click me 2');
}

const f2 = function(){
    console.log('click me 2');
}

console.log(f1 == f2);

// function eventHanlder(){
//     console.log('click me 2');
// }


const listeners = {
    'click': []
}

function eventHanlder(){console.log('click Me....')};
listeners.click.push(function(){console.log('click Me....')});
listeners.click.push(eventHanlder);
listeners.click.push(function(){console.log('click Me....')});

console.log(listeners.click);

const index =  listeners.click.findIndex(elem => elem == eventHanlder )

listeners.click.splice(index, 1);
