import axios from 'axios';
import { React, useState , useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate , Link } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState('')
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState('')

  useEffect(()=>{
   setId(uuid().slice(0,3))
  },[])


  const addEmployee=async(e)=>{
    e.preventDefault()

    setId(uuid().slice(0,3));
    const body ={
      id,
      uname,
      age,
      designation:desig,
      salary
    }
    // console.log(body);
  const result = await axios.post('http://localhost:8000/addEmployee',body)
  alert(result.data.message)
  // redirection to home page
  location('/')
  
  }
  // create a object for the hook
let location = useNavigate()


  return (
    <div >
      <h2 className='text-center ms-2 mt-3 ' style={{ fontStyle: 'revert' }}><i class="fa-solid fa-person-circle-plus"></i> Add Employee</h2>

      <p style={{ fontStyle: "oblique", fontWeight: "bold" }}>
        Employees are the backbone of any company therefore their management plays a major role indeciding the success of an organization [1].
        Employees Management Software makes it easy forthe employer to keep track of all records. This software allows the administrator to editemployees, add new employees, transfer/promote/terminate employees. Each employee in thedatabase is associated with a position can be added and edited when need arises. Employees can be transferred between positions easily without having to retype back their information in thedatabase. You can check to see if there are duplicate positions/employees in the database. Mostof all,
        the employer can assign tasks to employees and assess their progress in order to keep trackof employee performance
      </p>
      <Form style={{ background: 'grey', borderRadius: '8px' }} className='w-50 mt-5 mb-5 container border'>
        <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control onChange={(e) => setUname(e.target.value)} type="Name" placeholder="Enter Employee Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control   onChange={(e) => setAge(e.target.value)} type="age" placeholder="Enter Employee Age" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Designation</Form.Label>
          <Form.Control onChange={(e) => setDesig(e.target.value)} type="Designation" placeholder="Enter Employee Designation" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salary</Form.Label>
          <Form.Control onChange={(e) => setSalary(e.target.value)} type="Salary" placeholder="Enter Employee Salary" />
        </Form.Group>
        <Button onClick={(e)=>addEmployee(e)} className='mb-2 ' variant="info" type="button">
          Add
        </Button>
        <Link to={'/'}>
          <Button   className='mb-2 ms-3 ' variant="danger" type="button">
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Add