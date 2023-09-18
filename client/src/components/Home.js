import React, { useState, useEffect, useContext } from 'react'

import { NavLink } from 'react-router-dom';


const Home = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const getdata = async () => {

        const res = await fetch("http://localhost:5001/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:5001/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            // setDLTdata(deletedata);
            getdata();
        }

    }
    return (
        <>

            <div className="mt-5">
                <div className="container">
                    

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Exercise</th>
                                <th scope="col">Description</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Actions</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.username}</td>
                                                <td>{element.email}</td>
                                                {/* <td>{element.work}</td> */}
                                                <td>{element.mobile}</td>
                                                <td>{element.exercise}</td>
                                                <td>{element.description}</td>
                                                <td>{element.duration}</td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`/view/${element._id}`}> <button className="btn btn-success">VIEW</button></NavLink>
                                                    <NavLink to={`/edit/${element._id}`}>  <button className="btn btn-primary">EDIT</button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}>DELETE</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}

export default Home;