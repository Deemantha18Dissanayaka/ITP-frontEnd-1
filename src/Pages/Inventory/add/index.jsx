import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import Footer from "../../../components/Footer/Footer";
function AddInventory() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [selectDate, setSelectDate] = useState(null);

    const timeValue = new Date("2020-01-01 00:00:00 AM");

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="text-center py-5">
                <h1 className="font-bold text-5xl text-black">
                    Create Inventory
                </h1>
            </div>
            <div className="mx-96">
                <div className="bg-gray-100 shadow-md rounded p-5 mb-10">
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Item Name
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Item Name"
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Bought Date
                            </label>
                            <div class="relative flex">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
                                <svg
                                    class="w-5 h-5 text-gray-700 dark:text-gray-400 top-10"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <DatePicker
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                    selected={selectDate}
                                    onChange={(date) =>
                                        setSelectDate(date)
                                    }
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                />
                            </div>
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Quantity
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Quantity"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                class="block text-gray-700 text-sm font-bold mb-2"
                                for="username">
                                Price
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Pricey"
                            />
                        </div>
                        <button class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddInventory;
