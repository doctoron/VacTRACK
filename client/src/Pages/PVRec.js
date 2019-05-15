import React from 'react';
import vaccines from '../constants/vaccines';
import moment from 'moment';

const testUsers = [{
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
    zoster: false
}];

const calcAge = (dob) => {
    console.log(testUsers[0].dob)
    const age = moment().diff(testUsers[0].dob, 'years');
    if(age < 19) { 
        return(
        alert(`This person is ${age} and must be 19 years or older to use VacTRACK.`)
        )
    }
    return age;  
}

const PVRec = (testUsers) => {
    // Process the record
    const age = calcAge(testUsers.dob);
    console.log(`This person is ${age} years old.`);
    // const vaccinesList = neededVaccines.filter(vaccines => vaccines.age > 50);
    const neededVaccines = vaccines.filter(vaccines => vaccines.age > 50);
    const vaccinesList = neededVaccines.map(vaccines => vaccines.name);
    return (
        <div>Your Personal Vaccination Record
            <ul>
                <li>{vaccinesList}</li>
            </ul>
        </div>
    )
}
export default PVRec;