import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { AiOutlineUserAdd } from "react-icons/ai";
import AdminList from "../../../components/AdminList/AdminList";
import "./index.css";

const AdminLists = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <div className="TopicHolder">
                <h1 className="text-black font-bold px-6 pt-6 text-3xl">
                    Admin List
                </h1>
                <p className="text-black text-xs px-6">
                    List of all the Admins including their name, NIC, phone number
                    and email
                </p>
            </div>

            <div className="TableHolder w-screen">
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full m-4 transition ease-in-out delay-75 hover:scale-95 transform-gpu">
                    {/* transition ease-out delay-150 */}
                    <AiOutlineUserAdd className="AddUserIcon" />
                   <a href="admin/add"> <span>Add Admin</span></a>
                </button>

                <AdminList />
            </div>
        </>
    );
};

export default AdminLists;
