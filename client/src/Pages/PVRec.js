import React from 'react';
// import myVaccines from '../constants/vaccines';
import moment from 'moment';
import { ListGroup, ListGroupItem } from 'reactstrap';

// const myVaccines = [
//     {
//         name: 'Influenza inactivate (IIV) ', 
//         needed: true, 
//         age: 125, 
//         pregnancy: true, 
//         cd4below200: true, 
//         dose: '1 dose annually',
//     },
//     {
//         name: 'Influenza recombinant (RIV) ', 
//         needed: true, 
//         age: 125, 
//         pregnancy: true, 
//         cd4below200: true, 
//         dose: '1 dose annually',
//     },
//     {
//         name: 'Tetanus, diptheria, pertussis (TDAP) ', 
//         needed: true, 
//         age: 125, 
//         pregnancy: true, 
//         cd4below200: true, 
//         dose: '1 dose Tdap, the Td booster every 10yrs',
//     },
//     {
//         name: 'Measles, mumps, rubella (MMR) ', 
//         needed: true, 
//         age: 65, 
//         pregnancy: true, 
//         cd4below200: true, 
//         dose: '1 or 2 doses depending on indication (if born in 1957 or later)',
//     }
// ];

const myUsers = [
    {
        id: "5cdbe797fc13ae5f39000000",
        email: "mhassel@test.com",
        username: "mhassel",
        dob: "01/30/1959",
        gender: "female",
        pregnancy: true,
        travelling: false,
        immunity: true,
        hiv: true,
        cd4below200: false,
        dormitory: false,
        healthCareWorker: true,
        conditons: true,
        otherFactors: false,
        zoster: false,
    },
    {
        id: "5cdbe797fc13ae5f39000001",
        email: "cortensia@test.com",
        username: "cortensia",
        dob: "12/07/1992",
        gender: "male",
        pregnancy: false,
        travelling: true,
        immunity: false,
        hiv: true,
        cd4below200: true,
        dormitory: true,
        healthCareWorker: true,
        conditons: false,
        otherFactors: true,
        zoster: true,
    },
    {
        id: "5cdbe797fc13ae5f39000002",
        email: "srenehan@test.com",
        username: "srenehan",
        dob: "03/11/1992",
        gender: "female",
        pregnancy: false,
        travelling: false,
        immunity: false,
        hiv: true,
        cd4below200: false,
        dormitory: false,
        healthCareWorker: true,
        conditons: true,
        otherFactors: false,
        zoster: false,
    }
];

for (let i = 0; i < myUsers.length; i++) {
    // let dob=(myUsers[i].dob);
    let calcAge = (dob) => {
        let userAge = moment().diff(myUsers[i].dob, 'years');
        console.log(`${myUsers[i].username} Because you are ${userAge} years old,`)
        console.log(`it is recommended that you consult your physician about the <vaccine.name> vaccine. <br>`)
    }
    calcAge();
    // if (calcAge < 19) {
    //     return (
    //         alert(`This person is ${UserAge} and must be 19 years or older to use VacTRACK.`)
    //         )
    // }
}

const PVRec = (myUsers) => {
    // Process the record
    // const age = calcAge(myUsers.dob);
    // let result = myUsers.filter(obj => {
    //     return obj.dob === 6
    //   })
    //   console.log(result)
    // testUser.find(dob => x.id === '45').foo;
    // console.log(`This person is ${age} years old.`);
    // const neededVaccines = vaccines.filter(vaccines => vaccines.age < age);
    // const vaccinesName = neededVaccines.map(vaccines => vaccines.name, vaccines.dose)
    // const vaccinesDose = neededVaccines.map(vaccinesDose => vaccines.name)
    return (
        <div>Your Personal Vaccination Recommendation
            <ListGroup>
                <ListGroupItem>{"Because you are planning or are pregnant, it is recommended that you consult your physician about the vaccines:"} </ListGroupItem>
                <ListGroupItem>IIV  </ListGroupItem>
                <ListGroupItem>TDAP </ListGroupItem>
            </ListGroup> 

        
    Vaccines are recommended for adults based on age, health conditions, job, and other factors.
    VacTRACK is NOT HIPPA compliant and only 'mock data' should be used.  No personal information
    will be retained by CDC.

    PLEASE NOTE: This list may include vaccines you may have had.
    Discuss the list with a doctor or your health care professional.
    * This vaccine assessment tool applies to adults 19 years or older.
    </div>
    )
}
PVRec();

export default PVRec;