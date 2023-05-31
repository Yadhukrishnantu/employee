import axios from 'axios'
import {React,useEffect,useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';



function Viewemployee() {
  const [employee , setEmployee]=useState({})

  const params=useParams()
 
  const fetchEmp=async ()=>{
    const result =await axios.get('http://localhost:8000/getAnEmp/'+params.id)
   setEmployee(result.data.employee);
  

  
    }

    useEffect(()=>{
      fetchEmp()
    },[])
  
  return (
   

    <div className=' container '>
       <Card className='w-25 mt-5  container' >
      <Card.Img variant="top" src="https://i.postimg.cc/zXkMhdhh/download-2.png" />
      <Card.Body>
        <Card.Title>{employee.uname}</Card.Title>
        
        
      </Card.Body>
      <ListGroup className='list-group-flush'>
      <ListGroup.Item>Employee Id  : {employee.id}</ListGroup.Item>
        <ListGroup.Item>Age  : {employee.age}</ListGroup.Item>
        <ListGroup.Item> Designation  : {employee.designation}</ListGroup.Item>
        <ListGroup.Item> Salary  : {employee.salary}</ListGroup.Item>

      </ListGroup>

      <Button className='mb-3' variant="primary">Back </Button>
    </Card>
    </div>
  )
}

export default Viewemployee