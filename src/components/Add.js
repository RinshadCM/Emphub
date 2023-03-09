import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {

  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDept] = useState('')
  const [position, setPosition] = useState('')
  const [image, setImage] = useState('')

  let history=useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    let uniqueid=ids.slice(0,8)

    employee.push(
      {
        id:uniqueid,
        name:uname,
        age:age,
        desig:desig,
        salary:salary,
        email:email,
        department:department,
        position:position,
        image:image
      }
    )
    history('/')
  }



  return (
    <>
      <MDBContainer fluid className='bg-dark'>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol>

            <MDBCard className='my-4'>

              <MDBRow className='g-0'>

                <MDBCol md='6' className="d-none d-md-block">
                  <MDBCardImage src='https://i.postimg.cc/5N7t4dKD/dfgdf.jpg' alt="Sample photo" style={{ height: '44rem', objectFit: 'cover' }} className="rounded-start" fluid />
                </MDBCol>

                <MDBCol md='6'>

                  <MDBCardBody className='text-white d-flex flex-column justify-content-center'>
                    <h3 className="mb-5 text-uppercase fw-bold">Add Details</h3>

                    <MDBRow>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Name' size='lg' id='form1' type='text' required
                          onChange={(e) => setUname(e.target.value)}
                        />
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Age' size='lg' id='form2' type='text' required
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </MDBCol>

                    </MDBRow>

                    <MDBRow>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Designation' size='lg' id='form3' type='text' required
                          onChange={(e) => setDesig(e.target.value)}
                        />
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Salary' size='lg' id='form4' type='text' required
                          onChange={(e) => setSalary(e.target.value)}
                        />
                      </MDBCol>

                    </MDBRow>
                    <MDBRow>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Department' size='lg' id='form5' type='text' required
                          onChange={(e) => setDept(e.target.value)}
                        />
                      </MDBCol>

                      <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='Position' size='lg' id='form6' type='text' required
                          onChange={(e) => setPosition(e.target.value)}
                        />
                      </MDBCol>

                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form7' type='text' required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <MDBInput wrapperClass='mb-4' label='Image link' size='lg' id='form8' type='text'
                      onChange={(e) => setImage(e.target.value)}
                    />

                    <div className="d-flex justify-content-end pt-3">
                      <Button onClick={(e) => handleAdd(e)} className='ms-2' color='warning' size='lg'>Add</Button>
                    </div>

                  </MDBCardBody>

                </MDBCol>
              </MDBRow>

            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </>
  )
}

export default Add