import React from 'react';
import vaccines from '../constants/vaccines';

const PVRec = (props) => {

    for (let i = 0; i < vaccines.length; i++) {
        if(vaccines[i].hiv === true){
            giveVaccine();
        }
        
        if(vaccines[i].date >= 50){

        } else if(vaccines[i].date <= 50){

        }
        
    }

        return (
            <div>Your Personal Vaccination Record</div>
        )
    }
export default PVRec;