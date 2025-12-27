import React, { createContext } from 'react';

const DContext = createContext();

function DataProvider(props) {

    const sra = {
        name: "Abi",
        age: 29
    };

    const friendInfromation = [
           {
               name : "abi",
               age  : 20 , 
               college : "nanthe college" ,
               course : "cse"
           },
           {
                name : "saravan" , 
                age : 20 ,
                collge : "kongu collge",
                course : "eee"
           },
           {
                name : "aravindan",
                age : 20 ,
                collge : "erode sengunthar",
                course : "mech"
           }
    ]

    const numbers = [1,2,3,4,5,6,7,8,10]

    const myinfo = {
        name : "pavikumar",
        age :  20  ,
        sallary : 3000 
    }
    
    const data = {sra , friendInfromation , numbers , myinfo}
    return (
        <DContext.Provider value={data}>
            {props.children}
        </DContext.Provider>
    );
}

export default DataProvider;
export {DContext}



