function addTwonumbers(a,b) {
    return a+b;
}

console.log(addTwonumbers(6,8))

function printMYname (c,d,e) {
    return c+d+e;
}

let name1 = printMYname('chibuike', ' martins', ' okonkwo')
console.log(name1)

function areaOfaSquare(l1,l2)  {
    return l1*l2;
}
// let ans = (5*5)
// console.log(ans)

// console.log(areaOfaSquare(5,5))

// let something = "Aptech Nigeria"

// console.log(something.length)

// let something2 = "APTECH NIGERIA BALOGUN STREET"
// console.log(something2[0].toLowerCase())

// let k = something2.charAt(0)
// let z = something2.slice(0,6)
// console.log(z)

// let something3 = 'APTECH NIGERIA'
// let x = something3.replace('DECAGON TRAINING INSTITUTE')
// console.log(something.replace())

// let original = "Hello"
// let reversed = original.split('world', 'Javascript'),reverse().j
// console.log(replaced)

// let address1 = "ONE TESLIM BALOGUN STREET"
// let noSpaces = address1.trim("ONE TESLIM BALOGUN STREET")
// console.log(noSpaces)


// console.log(address1.toLowerCase())

// const product2 = {
//     Macbook: 15000,
//     Macbookpro: 20000,
//     Acer: 14000,
//     Lenovo: 2000,
//     hp: 10000

// }

// console.log(product2)

const gadget = new  Map();
gadget.set('laptop', 2000);
gadget.set('del', 6000)

// function getKeyByValue(map,value) {
//     for (let [key, val] of map) {
//         if (key === value) {
//             return key;
//         }
//     }
//     return "you put in the wrong info";
// }

// const valueTofind = '6000'
// const key = getKeyByValue(gadget, valueTofind)
// console.log(key)


function getValueByKey(map, value){
    for(let [key, val] of map){
        if(key === value){
            return val;
        }
    }
    return " wrong information"
}
const valueToFind = "del"
const value = getValueByKey(gadget, valueToFind)
console.log(value)
