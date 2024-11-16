// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const CreateContact = () => {
//     const [first, setFirst] = useState('')
//     const [last, setLast] = useState('')
//     const [email, setEmail] = useState('')
//     const [phone, setPhone] = useState('')
//     const [company, setCompany] = useState('')
//     const [job, setJob] = useState('')
//     const navigate = useNavigate();

//     function handleSubmit(event){
//         event.preventDefault();
//         axios.post('http://localhost:8080/create',{first,last,email,phone,company,job})
//         .then(res =>{
//             console.log(res);
//             navigate('/');
//         })
//         .catch(err => console.log(err));
//     }
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//         <div className='w-50 bg-white rounded p-3'>
//             <form onSubmit={handleSubmit}>
//                 <h2>Add Contact</h2>
//                 <div className='mb-2'>
//                     <label htmlFor=''>First Name</label>
//                     <input type='text' placeholder='Enter Your First Name' className='form-control'  onChange={e => setFirst(e.target.value)}/>
//                 </div>
//                 <div className='mb-2'>
//                     <label htmlFor=''>Last Name</label>
//                     <input type='text' placeholder='Enter Your Last Name' className='form-control' onChange={e=> setLast(e.target.value)}/>
//                 </div>
//                 <div className='mb-2'>
//                     <label htmlFor=''>Emaile</label>
//                     <input type='email' placeholder='Enter Your Email' className='form-control' onChange={e=>setEmail(e.target.value)}/>
//                 </div>
//                 <div className='mb-2'>
//                     <label htmlFor=''>Phone Number</label>
//                     <input type='number' placeholder='Enter Your Phone Number' className='form-control' onChange={e=>setPhone(e.target.value)}/>
//                 </div>
//                 <div className='mb-2'>
//                     <label htmlFor=''>Company</label>
//                     <input type='text' placeholder='Enter Your Company' className='form-control' onChange={(e=>setCompany(e.target.value))}/>
//                 </div>
//                 <div className='mb-2'>
//                     <label htmlFor=''>Job Title</label>
//                     <input type='text' placeholder='Enter Your Job Title' className='form-control' onChange={(e=>setJob(e.target.value))}/>
//                 </div>
//                 <button className='btn btn-success justify-content-center align-items-center'>Submit</button>
//             </form>
//         </div>
      
//     </div>
//   )
// }

// export default CreateContact








import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Toastify styles

const CreateContact = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [job, setJob] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8080/create', { first, last, email, phone, company, job })
            .then((res) => {
                console.log(res);
                toast.success('Contact submitted successfully!'); // Show success toast
                setTimeout(() => navigate('/'), 1000); // Navigate after 3 seconds
            })
            .catch((err) => {
                console.error(err);
                toast.error('Failed to submit contact. Please try again.'); // Show error toast
            });
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Contact</h2>
                    <div className="mb-2">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter Your First Name"
                            className="form-control"
                            onChange={(e) => setFirst(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter Your Last Name"
                            className="form-control"
                            onChange={(e) => setLast(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Phone Number</label>
                        <input
                            type="number" maxLength={12}
                            placeholder="Enter Your Phone Number"
                            className="form-control"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Company</label>
                        <input
                            type="text"
                            placeholder="Enter Your Company"
                            className="form-control"
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label>Job Title</label>
                        <input
                            type="text"
                            placeholder="Enter Your Job Title"
                            className="form-control"
                            onChange={(e) => setJob(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success justify-content-center align-items-center" type="submit">
                        Submit
                    </button>
                </form>
            </div>
            <ToastContainer /> {/* Toastify container */}
        </div>
    );
};

export default CreateContact;
