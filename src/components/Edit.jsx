import React,{ useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Topbar from './Topbar';
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Edit() {

  let {id} = useParams()
  let navigate = useNavigate()

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [street, setStreet] = useState("")
  const [doorNo, setSuite] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("")
  const [companyname, setCompanyName] = useState("")
  const [catchPhrase, setCatchPharse] = useState("")
  const [bs, setBS] = useState("")
  
  const handleEdit = async() => {
    try {
      let data = {name,username,email,street,doorNo,city,zipcode,lat,lng,
        phone,website,companyname,catchPhrase,bs,status:false};
      let res = await axios.put(`${API_URL}/${id}`,data)
      if(res.status === 200){                   
        navigate('/')
        toast.success("data edited succesfully")
      }
    }catch (error) {
      toast.danger("data editing failed")
    }
  }

  const getUserdataById = async() => {
    try {
      let res = await axios.get(`${API_URL}/${id}`)
      if(res.status===200){
        setName(res.data.name)
        setUsername(res.data.username)
        setEmail(res.data.email)
        setStreet(res.data.street)
        setSuite(res.data.suite)
        setCity(res.data.city)
        setZipcode(res.data.zipcode)
        setLat(res.data.lat)
        setLng(res.data.lng)
        setPhone(res.data.phone)
        setWebsite(res.data.website)
        setCompanyName(res.data.compName)
        setCatchPharse(res.data.catchPhrase)
        setBS(res.data.bs)
        
      }      
    }catch (error) {
      toast.error("Internal error")
    }
  }

  useEffect(()=>{
    getUserdataById();
  },[])

  return <>
      <div className='container-fluid'>
          <Topbar/>
          <div className="fromWrapper">
          <Form>
                    <Form.Group className="mb-3 ">
                      <Form.Label className="fw-bold">Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                          </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label className="fw-bold">Email</Form.Label>
                          <Form.Control type='email' placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Suite.' onChange={(e)=>{setSuite(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Street' onChange={(e)=>{setStreet(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter City' onChange={(e)=>{setCity(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Zipcode' onChange={(e)=>{setZipcode(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label className="fw-bold">Geo</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Lat.' onChange={(e)=>{setLat(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Lng' onChange={(e)=>{setLng(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" onChange={(e)=>{setPhone(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className="fw-bold">Website</Form.Label>
                            <Form.Control type="text" placeholder="Enter Website"  onChange={(e)=>{setWebsite(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Label className="fw-bold">Company</Form.Label>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Company Name.' onChange={(e)=>{setCompanyName(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter Catch Pharse' onChange={(e)=>{setCatchPharse(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Control type="text" placeholder='Enter BS' onChange={(e)=>{setBS(e.target.value)}}/>
                        </Form.Group>
                    </Row>
                  <Button variant="primary" onClick={()=>handleEdit()}>Submit</Button>
              </Form>    
          </div>            
      </div>
  </>
    
}

export default Edit