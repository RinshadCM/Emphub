import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import employee from './Employee';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Home() {

    let history = useNavigate()

    const handleDelete = (id) => {
        // Array od ids
        let index = employee.map(item => item.id).indexOf(id)
        employee.splice(index, 1)
        history('/')
    }
    const handleEdit=(id,uname,age,desig,salary,email,department,position,image)=>{
        localStorage.setItem("id",JSON.stringify(id))
        localStorage.setItem("uname",uname)
        localStorage.setItem("age",JSON.stringify(age))
        localStorage.setItem("desig",desig)
        localStorage.setItem("salary",JSON.stringify(salary))
        localStorage.setItem("email",email)
        localStorage.setItem("department",department)
        localStorage.setItem("position",position)
        localStorage.setItem("image",image)
    }

    return (
        <>
            <h1 className='text-center p-2' style={{ color: 'orange' }}>Employee Management System</h1>
            <div className='text-center p-2 fs-5'>
                <p style={{ textAlign: 'center', fontSize: '17px' }} className='text-center'>Welcome to our Employee Management Platform! Our user-friendly interface allows you to manage employee information, attendance, benefits, compensation, and communication easily. With real-time updates, customizable reporting, and seamless integration with other tools, you can stay on top of your workforce and make informed decisions. Experience a modern HR solution with us today!</p>
                <Link to='/add'>
                    <Button
                        variant="outline-info"
                        style={{
                            border: '1px solid #17a2b8',
                            color: '#17a2b8',
                            fontWeight: 'bold',
                            transition: '0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: '#17a2b8',
                                color: 'white',
                                cursor: 'pointer'
                            }
                        }}
                    >
                        <i className="fa fa-plus" aria-hidden="true" /> Add New Employee
                    </Button>
                </Link>
            </div>

            <div>
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Position</th>
                            <th scope='col'>Salary</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {
                            employee && employee.length > 0 ?
                                employee.map(item => (
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>{item.name}</p>
                                                    <p className='text-muted mb-0'>{item.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>{item.desig}</p>
                                            <p className='text-muted mb-0'>{item.department}</p>
                                        </td>
                                        <td>{item.age}
                                        </td>
                                        <td>{item.position}</td>
                                        <td>{item.salary}
                                        </td>
                                        <td>
                                            <Link to='/edit'>
                                                <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary,item.email,item.department,item.position,item.image)} className='ms-2 me-3' variant='info' rounded size='sm'>
                                                    <i class="fa-solid fa-user-pen"></i>
                                                </Button>
                                            </Link>
                                            <Button onClick={() => handleDelete(item.id)} variant='danger' rounded size='sm'>
                                                <i class="fa-solid fa-trash"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))

                                : 'no table data'
                        }

                    </MDBTableBody>
                </MDBTable>
            </div>
        </>
    );
}