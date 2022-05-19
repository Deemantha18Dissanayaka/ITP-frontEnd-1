import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../../components/Footer/Footer";
import axios from axios;
/*new*/
function AddHall() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [hallNumber, setHallNumber] = useState("");
    const [floorNumber, setFloorNumber] = useState("");
    const [capacity, setCapacity] = useState("");
    const [AC, setAC] = useState("");
    
    
    const onSubmit = async (e) =>{
        e.preventDefault();
        const data = {
            hallnumber: hallNumber,
            floornumber: floorNumber,
            capacity: capacity,
            AC: AC,

        };

        try {
            await axios
                 .post("/api/hall/add",{
                     headers: {
                        authToken: localStorage.getItem("authToken"),
                     },
                     data,
                 })
                 .then((res) => {
                     console.log(res);
                 })
                 .catch((err) => { 
                     console.log(err);
                 });

        }catch (error) {
            console.log(error);
        }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="text-center py-5">
                <h1 className="font-bold text-5xl text-black">
                    Create Your Hall
                </h1>
            </div>
            <div className="mx-96">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Hall Number
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="String"
                                placeholder="Hall Number"
                                onChange={(e) =>
                                    setHallNumber(e.target.value)
                                }
                            />
                        </div>
                       
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Floor Number
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="Number"
                                placeholder="Floor Number"
                                onChange={(e) =>
                                    setFloorNumber(e.target.value)
                                }
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                capacity
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="Number"
                                placeholder="capacity"
                                onChange={(e) =>
                                    setCapacity(e.target.value)
                                }
                            />
                        </div>
                        <div>
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="NIC">
                            A/C
                        </label>
                    </div>
                    <div className="mb-6">
                        <div class="flex">
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="A/C"
                                    value="A/C"
                                />
                                <label
                                    class="form-check-label inline-block text-gray-800"
                                    for="inlineRadio10">
                                    A/C
                                </label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input form-check-input appearance-none rounded-full ml-5 h-4 w-4 border border-gray-300 bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="Non A/C"
                                    value="Non A/C"
                                />
                                <label
                                    class="form-check-label inline-block text-gray-800"
                                    for="inlineRadio20">
                                    Non A/C
                                </label>
                            </div>
                        </div>
                    </div>


                        
                        <button class="bg-green-600 mx-24 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
}

export default AddHall;
