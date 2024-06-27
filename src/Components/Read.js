import React, { useState, useEffect } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../Constants.js/URL';

function Read() {
  const [apiData, setAPIData] = useState([]);
  const navigate = useNavigate();

  const updateUser = ({ firstName, lastName, checked, id }) => {
    localStorage.setItem('ID', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('checked', checked);
    navigate('/update');
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      callGetAPI();
    } catch (error) {
      console.error('Error deleting user:', error.response?.data || error.message);
    }
  };

  const callGetAPI = async () => {
    try {
      const resp = await axios.get(API_URL);
      setAPIData(resp.data);  // We only need the data, so we use resp.data
    } catch (error) {
      console.error('Error fetching data:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {apiData.map((data) => (
          <Table.Row key={data.id}>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>{data.checked ? 'Checked' : 'Not Checked'}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => deleteUser(data.id)}>Delete</Button>
            </Table.Cell>
            <Table.Cell>
              <Button onClick={() => updateUser(data)}>Update</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Read;





// import React, {useState, useEffect} from 'react'
// import{Table, Button} from  'semantic-ui-react'
// import { API_URL } from '../Constants.js/URL';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Read() {
//    const [apiData, setAPIData] =useState([]);
//    const navigate= useNavigate();

//    const updateUser=({firstName,lastName,checked, id})=>
//     {
//         localStorage.setItem('ID',id)
//        localStorage.setItem('firstName', firstName)
//        localStorage.setItem('lastName', lastName)
//        localStorage.setItem('checked', checked)
     
//         navigate('/update')
//     }


//    const deleteUser = async (id) =>{
//     try {
//         await axios.delete(`${API_URL}/${id}`);
//         callGetAPI();
//       } catch (error) {
//         console.error('Error deleting user:', error.response?.data || error.message);
//       }
//     };
//     callGetAPI();
//    }

//    const callGetAPI = async () => {
//     const resp = await axios.get(API_URL);
//     setAPIData(resp.data);    //console.log(resp) pota oru object return agum we want only data so we put resp.data 
//    }

//    useEffect(()=>{
//     callGetAPI();
//    }, []);


//   return (
//     <Table singleLine>
//         <Table.Header>
//             <Table.Row>
//                 <Table.HeaderCell>First Name</Table.HeaderCell>
//                 <Table.HeaderCell>Last Name</Table.HeaderCell>
//                 <Table.HeaderCell>checked</Table.HeaderCell>
//                 <Table.HeaderCell>Delete</Table.HeaderCell>

//             </Table.Row>
//         </Table.Header>
//         <Table.Body>
//             {
//                 apiData.map(data =>(
//                     <Table.Row key={data.id}>
//                     <Table.Cell>{data.firstName}</Table.Cell>
//                     <Table.Cell>{data.lastName}</Table.Cell>
//                     <Table.Cell>{data.checked ? 'checked' : 'Not checked'}</Table.Cell>
//                     <Table.Cell>
//                         <Button onClick={()=> deleteUser(data.id)}>Delete</Button>
//                     </Table.Cell>
//                     <Table.Cell>
//                         <Button onClick={()=> updateUser(data)}>Update</Button>
//                     </Table.Cell>
//                 </Table.Row>
//                 ))
//             }
            

            
//         </Table.Body>
//     </Table>
//   )


// export default Read