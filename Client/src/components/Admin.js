
import {React ,useEffect,useState}from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Admin.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';




function Admin() {
  
    const [employee,setemployee]=useState([])


    const getEmployee=async ()=>{
      const response=await axios.get('http://localhost:8000/getAllEmployee')
      setemployee(response.data.employees)
    } 


 const handleDelete=async (id)=>  {
const result =await axios.delete('http://localhost:8000/deleteEmployee/'+id)
 alert(result.data.message)

//  to refresh table content
 getEmployee()
 } 

useEffect(()=>{
  getEmployee()
},[])

return (
    <div>

        

<Navbar bg="light">
        <Container >
          <Navbar.Brand  href="#home">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_J707k9EfYRKGhTh25zNEvz6HJ9SiOURNRA&usqp=CAU"
              width="180"
              height="100"
              className="ms-3"
              alt="React Bootstrap logo"

            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='text-end mt-5 me-4'>
           <Link to ={'/add'}>
              <Button variant='info'><i class="fa-solid fa-person-circle-plus"></i>
               Add Employee
               </Button>
           </Link>
        </div>
    
      <h1 className='mt-5 text-info p-2'>
      <i class="fa-solid fa-user-tie"></i> &nbsp;
        Employee Management System
        </h1>
    
      <p style={{fontStyle:"oblique",fontWeight:"bold"}}>
      Employees are the backbone of any company therefore their management plays a major role indeciding the success of an organization [1].
       Employees Management Software makes it easy forthe employer to keep track of all records. This software allows the administrator to editemployees, add new employees, transfer/promote/terminate employees. Each employee in thedatabase is associated with a position can be added and edited when need arises. Employees can be transferred between positions easily without having to retype back their information in thedatabase. You can check to see if there are duplicate positions/employees in the database. Mostof all, 
      the employer can assign tasks to employees and assess their progress in order to keep trackof employee performance
      </p>

      <div style={{overflowX:"auto"}} >
        <Table className='w-75 container border' striped bordered hover variant="dark" >
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employee?.map(emp=>(

              <tr>
            <td>{emp.id}</td>
            <td>{emp.uname}</td>
            <td>{emp.age}</td>
            <td>{emp.designation}</td>
            <td>{emp.salary}</td>
            <td>
<Link to={'edit/'+emp.id}><Button className='me-2' variant="info"><i class="fa-solid fa-file-pen"></i>Edit</Button>{' '}</Link>
            <Link to={'view/'+emp.id}><Button className='me-2' variant="success"> <i class="fa-solid fa-eye"></i>View</Button>{' '}</Link>
            <Button onClick={()=>handleDelete(emp.id)}  className='me-2' variant="outline-danger"> <i class="fa-solid fa-trash"></i>Delete</Button>{' '}
            </td>

            </tr>
            ))
          }
          
          
          
        </tbody>
      </Table>
      </div>
    </div>
    
  )
}

export default Admin