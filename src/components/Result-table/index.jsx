import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";

export default function Result() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResult = async () => {
            const res = await axios.get("/api/result/all");
            setResults(res.data);
            console.log(res.data);
        };
        fetchResult();
    }, []);

    return (
        <div className="p-26">
            <div class=" items-center justify-center min-h-screen bg-white">
                <div class="col-span-12">
                    <div class="overflow-auto lg:overflow-visible"></div>
                    <div class="p-5 bg-gray-100 rounded-lg ">
                        <div class="overflow-auto rounded-lg shadow">
                            <div className="pb-4">
                                <div className="flex p-3">
                                    <div className="pr-96">
                                        <span className="font-bold">
                                            Teacher Name :{" "}
                                        </span>
                                        <span className="text-gray-800">
                                            {localStorage.getItem(
                                                "teacherName",
                                            )}
                                        </span>
                                    </div>
                                    <div className="pr-96">
                                        <span className="font-bold">
                                            Subject :{" "}
                                        </span>
                                        <span className="text-gray-800">
                                            {localStorage.getItem(
                                                "subject",
                                            )}
                                        </span>
                                    </div>
                                    <div className="">
                                        <span className="font-bold">
                                            Exam Name :{" "}
                                        </span>
                                        <span className="text-gray-800">
                                            {results.examName}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex">
                                    <a href="#">
                                        <button
                                            class="
                                            bg-green-600
                                            hover:bg-green-800
                                            text-white
                                            py-1
                                            px-3
                                            flex
                                            sm
                                            rounded-full mb-3
                                            ">
                                            ADD
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <table class="w-full pt-4">
                                <thead class="bg-green-200 border-b-2 border-gray-200">
                                    <tr>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Action
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Student ID
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Student Name
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Marks
                                        </th>
                                        <th class="p-3 text-sm font-semibold tracking-wide text-left">
                                            Rank
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((r) => (
                                        <tr class="bg-green-100 lg:text-black">
                                            <td class="p-3">
                                                <a
                                                    href="#"
                                                    class="text-gray-500 hover:text-gray-100 mr-2 px-2">
                                                    <i class="material-icons-outlined text-base">
                                                        <EyeOutlined />
                                                    </i>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="text-yellow-400 hover:text-gray-100 mx-2 px-2">
                                                    <i class="material-icons-outlined text-base">
                                                        <EditOutlined />
                                                    </i>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="text-red-400 hover:text-gray-100 ml-2 px-2">
                                                    <i class="material-icons-round text-base">
                                                        <DeleteOutlined />
                                                    </i>
                                                </a>
                                            </td>
                                            <td class="p-3 font-medium capitalize">
                                                {r.studentId}
                                            </td>
                                            <td class="p-3">
                                                {r.studentName}
                                            </td>
                                            <td class="p-3 uppercase pl-8">
                                                {r.marks}
                                            </td>
                                            <td class="p-3 uppercase">
                                                2
                                            </td>
                                        </tr>
                                    ))}
                                    ;
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
