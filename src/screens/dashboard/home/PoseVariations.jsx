import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import VariationCard from './VariationCard';

function PoseVariations() {
    const location  = useLocation()
    const {warriorPose} =location.state;
    const [variations,setVariations]=useState([])

    function fetchVariations(){
        axios.get("http://localhost:8090/warrior-poses/variations/"+warriorPose.id).then((res)=>{
            setVariations(res.data)
        }).catch((err)=>{
            alert("Something went wrong")
        })
    }
    useEffect(() => {
    fetchVariations()
    }, [])
    
  return (
   
       <div className="home-big-container">
        <VariationCard  pose={warriorPose}/>
        {variations.map((el)=> <VariationCard pose={el}/>)}
     
        </div>
  )
}

export default PoseVariations