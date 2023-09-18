import React, { useEffect, useState } from 'react'


import { NavLink, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Info = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);
    console.log("id data")
    const id = localStorage.getItem('userID')
    console.log(id)
    // const { id } = useParams("");
    console.log(id);

    const navigate = useNavigate();

    const getdata = async () => {

        const res = await fetch(`http://localhost:5001/getuser/${id}`, {
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
            // history.push("/");
            navigate('/');
        }

    }

    return (
        <div className="container mt-3">

            {/* <div className="add_btn mt-2 mb-2">
                <NavLink to="/" className="btn btn-primary">Back to main page</NavLink>
            </div> */}
            <div className="row">
                <div className="left_view col-lg-6 col-md-6 col-12">
                    {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
                    <h3 className="mt-3">Username: <span >{getuserdata.username}</span></h3>
                    {/* <h3 className="mt-3">Age: <span >{getuserdata.age}</span></h3> */}
                    <h3 className="mt-3">Email: <span>{getuserdata.email}</span></h3>
                </div>

            </div>
            <div class="card text-bg-primary mb-3" >
                <div class="card-header"><h2>Exercise: <span >{getuserdata.exercise}</span></h2></div>
                <div class="text-bg-light">
                    {/* <h3 class="card-title ">WORKOUT TO BE PERFORMED TODAY</h3> */}
                    <h4 class="card-text"><span>{getuserdata.description}</span></h4>
                </div>
                <div class="card-body text-bg-warning">

                    <h3 className="mt-3">Duration: <span>{getuserdata.duration}</span></h3>
                </div>
            </div>


        </div>
    )
}

export default Info;
