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

function Edit() {

  const [id,setId]=useState(0)
  const [uname,setUname]=useState('')
  const [age,setAge]=useState(0)
  const [desig,setDesig]=useState('')
  const [salary,setSalary]=useState(0)
  const [email,setEmail]=useState('')
  const [department,setDept]=useState('')
  const [position,setPosition]=useState('')
  const [image,setImage]=useState('')

useEffect(()=>{
  setId(JSON.parse(localStorage.getItem("id")))
  setUname(localStorage.getItem("uname"))
  setAge(JSON.parse(localStorage.getItem("age")))
  setDesig(localStorage.getItem("desig"))
  setSalary(JSON.parse(localStorage.getItem("salary")))
  setEmail(localStorage.getItem("email"))
  setDept(localStorage.getItem("department"))
  setPosition(localStorage.getItem("position"))
  setImage(localStorage.getItem("image"))
},[])

  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src='https://i.postimg.cc/vTsTmqsg/5665314-57829.jpg' alt="Sample photo" style={{ height: '44rem', objectFit: 'cover' }} className="rounded-start" fluid />
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-white d-flex flex-column justify-content-center'>
                  <h3 className="mb-5 text-uppercase fw-bold">Update Details</h3>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Name' value={uname} size='lg' id='form1' type='text' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Age' value={age} size='lg' id='form2' type='text' />
                    </MDBCol>

                  </MDBRow>

                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Designation' value={desig} size='lg' id='form3' type='text' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Salary' value={salary} size='lg' id='form4' type='text' />
                    </MDBCol>

                  </MDBRow>
                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Department' value={department} size='lg' id='form5' type='text' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Position' value={position} size='lg' id='form6' type='text' />
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Email' value={email} size='lg' id='form7' type='text' />
                  <MDBInput wrapperClass='mb-4' label='Image' value={image} size='lg' id='form8' type='text' />

                  <div className="d-flex justify-content-end pt-3">
                    <Button className='ms-2' color='warning' size='lg'>Update</Button>
                  </div>

                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Edit;