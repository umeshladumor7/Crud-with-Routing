
import React, { useState } from "react";

export default function Table() {

     const [initialInfo] = useState({ fname: "", email: "", psw: "", add: "", mno: "" });
     const [array, setArray] = useState(JSON.parse(localStorage.getItem("Array")) || []);
     const [info, setInfo] = useState(initialInfo);
     const [editMode, setEditMode] = useState(false);
     const [editIndex, setEditIndex] = useState(null);

     const HandleDelete = (index) => {
          const newArray = [...array];
          newArray.splice(index, 1);
          setArray(newArray);
          localStorage.setItem("Array", JSON.stringify(newArray));
     }

     const HandleEdit = (index) => {
          setEditMode(true);
          setEditIndex(index);
          setInfo(array[index]);
     }
     return (
          <div>
               <table className="table table-bordered border-dark w-75 mt-5 ms-5">
                    <thead>
                         <th className="ps-5 border border-dark ">Name</th>
                         <th className="ps-5 border border-dark ">Email</th>
                         <th className="ps-5 border border-dark ">Password</th>
                         <th className="ps-5 border border-dark ">Address</th>
                         <th className="ps-5 border border-dark ">Mobile Number</th>
                         <th className="ps-5 border border-dark  ">Action</th>
                    </thead>
                    <tbody >
                         {array.map((item, index) => {
                              return (
                                   <tr key={index}>
                                        <td className=" fw-bold">{item.fname}</td>
                                        <td className=" fw-bold">{item.email}</td>
                                        <td className=" fw-bold pe-2">{item.psw}</td>
                                        <td className=" fw-bold">{item.add}</td>
                                        <td className=" fw-bold">{item.mno}</td>
                                        <td className=" fw-bold"><button onClick={() => HandleDelete(index)} className="btn btn-danger fw-bold">Delete</button>
                                             <button onClick={() => HandleEdit(index)} className="btn btn-info ms-1 fw-bold">Edit</button>
                                        </td>
                                   </tr>
                              )
                         })}
                    </tbody>
               </table>
          </div>
     )
}
