import axios from 'axios';
import React,{ useEffect, useState }  from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../Constants.js/URL';

function Update() {
   const [firstName, setFirstName] = useState('')
   const[lastName, setLastName] = useState('')
   const[id, setId] = useState('');
   const [checked, setChecked] = useState(false);
   const navigate = useNavigate();


   const updateUser=async()=>{
    await axios.put(`${API_URL}/${id}`,{
        id,
        firstName,
        lastName,
        checked
    });
    navigate('/read');
   }

//    useEffect(()=> {
//   setId(localStorage.getItem('id'))
//    setFirstName(localStorage.getItem('firstName'))
//    setLastName(localStorage.getItem('lastName'))
//    setChecked(localStorage.getItem('checked'))
//    }, [])



useEffect(()=> {
const storedId = localStorage.getItem('ID');
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedChecked = localStorage.getItem('checked') === 'true';

    if (storedId) {
      setId(storedId);
    } else {
      console.error('ID not found in local storage');
    }

    if (storedFirstName) {
      setFirstName(storedFirstName);
    } else {
      console.error('First Name not found in local storage');
    }

    if (storedLastName) {
      setLastName(storedLastName);
    } else {
      console.error('Last Name not found in local storage');
    }

    setChecked(storedChecked);
  }, []);





  return (
    <Form className='form'>
        <Form.Field>
        <label>FirstName</label>
        <input value={firstName} 
        onChange={event => setFirstName(event.target.value)}
        placeholder='Enter first name'/>
        </Form.Field><br></br>

        <Form.Field>
        <label>LastName</label>
        <input value={lastName}
        onChange={event => setLastName(event.target.value)}
        placeholder='Enter Last name'/>
        </Form.Field><br></br>

        <Form.Field>
        
        <Checkbox checked={checked} 
        onChange={() => setChecked(!checked)}
        label="Agree the Terms & conditions"/>
        </Form.Field><br />

        <Button onClick={updateUser}>Update</Button>


    </Form>
  )
}

export default Update