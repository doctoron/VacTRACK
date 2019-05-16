const user = ['MMR', 'TDAP']
const allVaccines = [{
    name: 'IIV',
    needed: true,
    age: 125,
    pregnancy: true,
    cd4below200: true,
    dose: '1 dose annually',
},
{
    name: 'RIV',
    needed: true,
    age: 125,
    pregnancy: true,
    cd4below200: true,
    dose: '1 dose annually',
},
{
    name: 'TDAP',
    needed: true,
    age: 125,
    pregnancy: true,
    cd4below200: true,
    dose: '1 dose Tdap, the Td booster every 10yrs',
},
{
    name: 'MMR',
    needed: true,
    age: 65,
    pregnancy: false,
    cd4below200: true,
    dose: '1 or 2 doses depending on indication (if born in 1957 or later)',
}
]
// const index = allVaccines.findIndex(function(name, index) {
//     console.log(user.indexOf('TDAP'));
//     // console.log(name);
//     return allVaccines.pregnancy === true;
// })
// console.log(index)

const findVaccines = function(user, name) {
    const index = user.findIndex = (function(allVaccines, index) {
        return allVaccines.name.toLowerCase() === name.toLowerCase()
    })
    return user[index]
}

let printVacs = findVaccines(user, 'TDAP')
console.log(printVacs);
