import { Fragment, useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../../components/Footer/Footer";
import axios from "axios";

function AddStudent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [birthDay, setbirthDay] = useState(null);
    const [NIC, setNIC] = useState("");
    const [gender, setGender] = useState(null);
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [school, setSchool] = useState("");
    const [grade, setGrade] = useState("");
    const [medium, setMedium] = useState("");
    const [parentName, setParentName] = useState("");
    const [parentTelephone, setParentTelephone] = useState("");
    const [parentEmail, setParentEmail] = useState("");
    const [parentAddress, setParentAddress] = useState("");
    const [parentOccupation, setParentOccupation] = useState("");
    const [subject, setSubject] = useState("");
    const [teacher, setTeacher] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    console.log(gender);
    console.log(birthDay);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            birthday: birthDay,
            NIC: NIC,
            phoneNumber: telephone,
            email: email,
            school: school,
            grade: grade,
            medium: medium,
            parentName: parentName,
            parentPhoneNumber: parentTelephone,
            parentEmail: parentEmail,
            studentGender: gender,
            parentAddress: parentAddress,
            parentOccupation: parentOccupation,
            subject: subject,
            teacher: teacher,
            username: username,
            password: password,
        };

        try {
            await axios.post("api/student/register", {headers: {authToken: localStorage.getItem("authToken"),}, data,}).then((res) => {console.log(res);}).catch((err) => {console.log(err);})
        } catch (error) {
            console.log(error);
        }
    }
    

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />

            <div className="mx-96">
                {/* <div className="bg-gray-100 shadow-md rounded p-5 mb-10 mt-5"> */}
                <div className="text-center py-5 bg-green-600 mt-8">
                    <h1 className="font-bold text-3xl text-white">
                        Student Registration
                    </h1>
                </div>
                <form className="bg-white rounded px-8 pt-6 pb-8 mb-8 shadow-md" onSubmit={onSubmit}>
                    <div class="flex w-full items-center justify-center bg-grey-lighter">
                        <label class="w-48 mb-6 flex flex-col items-center px-2 py-3 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer bg-green-600 hover:bg-green-800 text-white hover:text-white">
                            <svg
                                class="w-8 h-8"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                            </svg>
                            <span class="mt-2 text-base leading-normal">
                                Select Your Photo
                            </span>
                            <input type="file" class="hidden" />
                        </label>
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="FirstName">
                            First Name
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="firstname"
                            type="text"
                            placeholder="First Name"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="LastName">
                            Last Name
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="lastname"
                            type="text"
                            placeholder="Last Name"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>

                    <div class="mb-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="birthday">
                            Birthday
                        </label>
                        <div class="relative flex">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none z-10">
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
                            </div>
                            <DatePicker
                                className="shadow appearance-none border rounded pl-10 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                onChange={(date) => setbirthDay(date)}
                            />
                        </div>
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="NIC">
                            NIC
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-600 focus:shadow-outline"
                            id="nic"
                            type="text"
                            placeholder="NIC"
                            onChange={(e) => setNIC(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="NIC">
                            Gender
                        </label>
                    </div>
                    <div className="mb-6">
                        <div class="flex">
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="male"
                                    value="male"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label
                                    class="form-check-label inline-block text-gray-800"
                                    for="inlineRadio10">
                                    Male
                                </label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input form-check-input appearance-none rounded-full ml-5 h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="female"
                                    value="female"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <label
                                    class="form-check-label inline-block text-gray-800"
                                    for="inlineRadio20">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="phonenumber">
                            Phone Number
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="phonenumber"
                            type="text"
                            placeholder="Phone Number"
                            onChange={(e) => setTelephone(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="email">
                            Email
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="school">
                            School
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="school"
                            type="text"
                            placeholder="School"
                            onChange={(e) => setSchool(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="grade">
                            Grade
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="grade"
                            type="text"
                            placeholder="Grade"
                            onChange={(e) => setGrade(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="medium">
                            Medium
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="medium"
                            type="text"
                            placeholder="Medium"
                            onChange={(e) => setMedium(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentname">
                            Parent Name
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="parentname"
                            type="text"
                            placeholder="Parent Name"
                            onChange={(e) => setParentName(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentPhoneNumber">
                            Parent Phone Number
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="parentPhoneNumber"
                            type="text"
                            placeholder="Parent Phone Number"
                            onChange={(e) => setParentTelephone(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentemail">
                            Parent Email
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="parentemail"
                            type="text"
                            placeholder="Parent Email"
                            onChange={(e) => setParentEmail(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentaddress">
                            Parent Address
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="parentaddress"
                            type="text"
                            placeholder="Parent Address"
                            onChange={(e) => setParentAddress(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentoccupation">
                            Parent Occupation
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="parentoccupation"
                            type="text"
                            placeholder="Parent Occupation"
                            onChange={(e) => setParentOccupation(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentoccupation">
                            Subject
                        </label>
                        <div class="mb-6 xl:w-full">
                            <select
                                class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                                
                                onChange={(e) => setSubject(e.target.value)}
                                >
                                <option selected>
                                    Select Your Subject
                                </option>
                                <option value="Maths">Maths</option>
                                <option value="Science">Science</option>
                                <option value="Sinhala">Sinhala</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="parentoccupation">
                            Teacher
                        </label>
                        <div class="mb-6 xl:w-full">
                            <select
                                class="form-select appearance-none
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example"
                                
                                onChange={(e) => setTeacher(e.target.value)}>
                                <option selected>
                                    Select Your Teacher
                                </option>
                                <option value="1">U.D.P. Madawa</option>
                                <option value="2">
                                    M.N. Siriwardhana
                                </option>
                                <option value="3">S. Jeewanthi</option>
                            </select>
                        </div>
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username">
                            Username
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="passowrd">
                            Password
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="passowrd"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="confirmpassowrd">
                            Confirm Password
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-green-300 focus:shadow-outline"
                            id="confirmpassowrd"
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div class="flex w-full items-center justify-center bg-grey-lighter">
                        <button class="bg-green-600 mx-48 mt-4 hover:bg-green-700 text-white font-bold py-2 px-24 rounded">
                            Submit
                        </button>
                    </div>
                </form>
                {/* </div> */}
            </div>
            <Footer />
        </>
    );
}

export default AddStudent;
