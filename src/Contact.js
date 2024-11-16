import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



const Contact = () => {

    const [contact, setContact] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then((res) => {
                console.log(res.data); 
                setContact(res.data); 
            })
            .catch((err) => console.error(err));
    }, []);

    const handleDelete = async (id) =>{
        try {
            await axios.delete('http://localhost:8080/contact/'+id)
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    }
    



    return (
    
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            
            <div className='w-75 bg-white rounded p-1'>
            <div className='text-success'>
                <h1>Contact Management</h1>
            </div>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Phone Number
                            </th>
                            <th>
                                Company
                            </th>
                            <th>
                                Job Title
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {Array.isArray(contact) && contact.length > 0 ? (
                            contact.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.first}</td>
                                    <td>{data.last}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.company}</td>
                                    <td>{data.job}</td>
                                    <td>
                                        <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No data available</td>
                            </tr>
                        )}


                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Contact
