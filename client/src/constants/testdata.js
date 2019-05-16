// import React from 'react';
// import vaccines from '../constants/vaccines';
// import moment from 'moment';

// let filter = {
//     dob: '01/30/1959',
//     gender: 'female'
// };

// testUsers = testUsers.filter(item=> {
//     for (var key in filter) {
//         if (item[key] === undefined || item[key] != filter[key])
//             return false;
//     }
//     return true;
// });

// console.log(testUsers)


// const calcAge = (dob) => {
//     const age = moment().diff(testUsers.dob, 'years');
//     const validAge= (age >= 19);
//     return age
// }
// const PVR = () => {
//     // Process the record
//     // const dob = "12/31/1950"
//     const age = calcAge(dob);
//     // console.log('This is the props', props)
//     console.log('This is the age', age);
// }

const myUsers =
    [
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
            zoster: false
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
            zoster: true
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
            zoster: false
        }
    ];
// {
//     id: "5cdbe797fc13ae5f39000003",
//     email: "mfourman@test.com",
//     username: "mfourman",
//     dob: "04/11/1978",
//     gender: "female",
//     pregnancy: true,
//     travelling: true,
//     immunity: true,
//     hiv: true,
//     cd4below200: true,
//     dormitory: false,
//     healthCareWorker: true,
//     conditons: true,
//     otherFactors: true,
//     zoster: true
// },
// {
//     id: "5cdbe797fc13ae5f39000004",
//     email: "ipotteridge@test.com",
//     username: "ipotteridge",
//     dob: "06/29/1975",
//     gender: "female",
//     pregnancy: true,
//     travelling: false,
//     immunity: false,
//     hiv: true,
//     cd4below200: true,
//     dormitory: true,
//     healthCareWorker: false,
//     conditons: false,
//     otherFactors: true,
//     zoster: false
// },
// {
//     id: "5cdbe797fc13ae5f39000005",
//     email: "smarshland@test.com",
//     username: "smarshland",
//     dob: "11/02/1978",
//     gender: "male",
//     pregnancy: false,
//     travelling: true,
//     immunity: false,
//     hiv: true,
//     cd4below200: false,
//     dormitory: true,
//     healthCareWorker: false,
//     conditons: true,
//     otherFactors: false,
//     zoster: true
// },
// {
//     id: "5cdbe797fc13ae5f39000006",
//     email: "edimitriades",
//     username: "edimitriades",
//     dob: "02/15/1973",
//     gender: "female",
//     pregnancy: true,
//     travelling: true,
//     immunity: true,
//     hiv: false,
//     cd4below200: false,
//     dormitory: true,
//     healthCareWorker: false,
//     conditons: false,
//     otherFactors: true,
//     zoster: true
// }, {
//     id: "5cdbe797fc13ae5f39000007",
//     email: "grogers@test.com",
//     username: "grogers",
//     dob: "11/15/1967",
//     gender: "male",
//     pregnancy: false,
//     travelling: true,
//     immunity: false,
//     hiv: false,
//     cd4below200: false,
//     dormitory: true,
//     healthCareWorker: false,
//     conditons: false,
//     otherFactors: true,
//     zoster: true
// },
// {
//     id: "5cdbe797fc13ae5f39000008",
//     email: "cchartres@test.com",
//     username: "cchartres",
//     dob: "08/31/1997",
//     gender: "male",
//     pregnancy: false,
//     travelling: true,
//     immunity: false,
//     hiv: true,
//     cd4below200: true,
//     dormitory: true,
//     healthCareWorker: false,
//     conditons: false,
//     otherFactors: true,
//     zoster: false
// },
// {
//     id: "5cdbe797fc13ae5f39000009",
//     email: "elabbet@test.com",
//     username: "elabbet",
//     dob: "02/23/1961",
//     gender: "male",
//     pregnancy: false,
//     travelling: true,
//     immunity: true,
//     hiv: false,
//     cd4below200: true,
//     dormitory: true,
//     healthCareWorker: false,
//     conditons: true,
//     otherFactors: true,
//     zoster: false
// }];

export default myUsers;
