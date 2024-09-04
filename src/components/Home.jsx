
import React,{useEffect,useState} from 'react'
import Topbar from './Topbar';
import DisplayCard from './common/DisplayCard';
import { toast } from 'react-toastify';
import { API_URL } from '../App';
import axios from 'axios';
function Home() {
  let [datas,setDatas] = useState([])
  const getDatas=async()=>{
    try {
      let res = await axios.get(API_URL)
      if(res.status===200)
      {

        setDatas(res.data.filter(e=>e.status))
      }
    } catch (error) {
        toast.error()
    }
  }

  useEffect(()=>{
    getDatas()
  },[])
  return <div className='container-fluid'>
    <Topbar/>
    <div className='previewWrapper'>
    {
      datas.map((e)=>{
        return <DisplayCard name={e.name} username={e.username} email={e.email} website={e.website} key={e.id}/>
      })
    }
    </div>
  </div>
}

export default Home
