import React, { useState } from 'react';
import UserData from "types/user-data-type";
import BirthdateState from "types/birthdate-type";
import { Link } from "react-router-dom";
import RoutesTypes from "constants/routes-types";

type SignUpTwoProps = {
    setCurrentPageId: React.Dispatch<React.SetStateAction<number>>
    setUserData: React.Dispatch<React.SetStateAction<UserData>>
}

const SignUpTwo: React.FC<SignUpTwoProps> = ({ setCurrentPageId, setUserData }) => {
    let arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const generateArrayOfYears = () => {
        let result = [];
        for(let i = new Date().getFullYear(); i > 1919; i--){
            result.push(i);
        }

        return result;
    }

    const generateArrayOfDays = () => {
        let result = [];

        let amountOfDays = 0;
        switch(arrayOfMonths.indexOf(birthdate.month)){
            case 0:
            case 2: 
            case 4: 
            case 6: 
            case 7: 
            case 9: 
            case 11: {
                amountOfDays = 31;
                break;
            }
            case 1: {
                amountOfDays = birthdate.year % 4 ? 28 : 29;
                break;
            }
            default: {
                amountOfDays = 30;
                break;
            }
        }

        for(let i = 1; i <= amountOfDays; i++){
            result.push(i);
        }

        return result;
    }

    const [birthdate, setBirthdate] = useState<BirthdateState>({
        day: new Date().getDate() ,
        month: arrayOfMonths[new Date().getMonth()],
        year: new Date().getFullYear() - 1,
    })

    const isInvalid = new Date().getFullYear() - birthdate.year > 5 ? false: true;

    return (
        <div className="w-4/5 sm:w-3/5 lg:w-1/3">
            <div className="flex flex-col items-center w-full border bg-white px-2">
                <div className="flex justify-center w-full">
                    <img
                        src="/images/cake.jpg"
                        className="w-5/12 mt-6"
                    />
                </div>
                <p className="text-black font-medium">Add Your Birthday</p>
                <p className="mt-4 mb-3">This won't be a part of your public profile.</p>
                <form
                    method="POST"
                    className="flex flex-col items-center w-full mb-4"
                >
                    <div className="w-3/4 flex justify-center gap-2 mb-1">
                        <select
                            className="border rounded text-sm p-1"
                            value={birthdate.month}
                            onChange={(event) => setBirthdate(prevData => ({ ...prevData, month: event.target.value }))}
                        >
                            {arrayOfMonths.map((month, index) => <option key={index}>{month}</option>)}
                        </select>
                        <select
                            className="border rounded text-sm p-1"
                            value={birthdate.day}
                            onChange={(event) => setBirthdate(prevData => ({ ...prevData, day: Number(event.target.value) }))}
                        >
                            {generateArrayOfDays().map((day, index) => <option key={index}>{day}</option>)}
                        </select>
                        <select
                            className="border rounded text-sm p-1"
                            value={birthdate.year}
                            onChange={(event) => setBirthdate(prevData => ({ ...prevData, year: Number(event.target.value) }))}
                        >
                            {generateArrayOfYears().map((year, index) => <option key={index}>{year}</option>)}
                        </select>
                    </div>
                    <p className="w-4/5 text-center text-gray-400 text-sm mb-4">You need to enter the date you were born</p>
                    <p className="w-4/5 text-center text-gray-400 text-sm mb-4">Use your own birthday, even if this account is for a business, a pet, or something else</p>
                    <button
                        disabled={isInvalid}
                        type="button"
                        className={`
                            bg-blue-500 w-3/5 text-white rounded h-8 font-bold 
                            ${isInvalid && "opacity-50"}
                        `}
                        onClick={() => {
                            setUserData(prevData => ({ ...prevData, birthdate }))
                            setCurrentPageId(prevVal => prevVal + 1)
                        }}
                    >
                        Next
                    </button>
                </form>
                <button 
                    className="w-1/5 mb-6 font-bold text-blue-400"
                    onClick={() => setCurrentPageId(prevVal => prevVal - 1)}
                >
                    Go Back
                </button>
            </div>
            <div className="flex w-full border bg-white mt-4 py-2 justify-center">
                <p className="text-sm">
                    Have an account?{' '}
                    <Link to={RoutesTypes.LOGIN} className="font-bold text-blue-400">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default SignUpTwo;