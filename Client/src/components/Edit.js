import axios from 'axios';
import {React , useEffect , useState }from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams ,useNavigate } from 'react-router-dom';



function Edit() {
  const [id, setId] = useState('')
  const [uname, setUname] = useState('')
  const [age, setAge] = useState('')
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState('')

  // object for hook
  const params = useParams()
  // console.log(params.id);


  const fetchEmp=async ()=>{
  const result =await axios.get('http://localhost:8000/getAnEmp/'+params.id)
 console.log(result.data.employee);


setId(result.data.employee.id)
setUname(result.data.employee.uname)
setAge(result.data.employee.age)
setDesig(result.data.employee.designation)
setSalary(result.data.employee.salary)

// console.log(id);
// console.log(uname);
// console.log(desig);

  }
const location =useNavigate()


  const handleUpdate=(e)=>{
    e.preventDefault()

    const body={
      id,
      uname,
      age,
      designation:desig,
      salary
    }

   const result = axios.post('http://localhost:8000/editEmp',body)
  //  console.log(result);
  // alert(result.data.message)
  location('/')
  }

  useEffect(()=>{
    fetchEmp()
  },[])

  return (
    <div>
    
    <h2 className='text-center mt-3'><i class="fa-solid fa-file-pen"></i> Edit employee Details</h2>

    <Form style={{ background: 'grey', borderRadius: '8px' }} className='w-50 mt-5 mb-5 container border'>
        <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control   type="Name"  value={uname} 
          onChange={(e)=>setUname(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control  type="age"  value={age}
          onChange={(e)=>setAge(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Designation</Form.Label>
          <Form.Control  type="text"  value={desig}
          onChange={(e)=>setDesig(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Salary</Form.Label>
          <Form.Control  type="Salary"  value={salary} 
          onChange={(e)=>setSalary(e.target.value)}/>
        </Form.Group>
        <Button onClick={(e)=>handleUpdate(e)} className='mb-2 ' variant="info" type="button">
          Update
        </Button>
        
      </Form>

    </div>
  )
}

export default Edit