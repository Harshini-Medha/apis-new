import { useEffect, useState } from "react"
import Card from "./Card"
import Axios from 'axios'

const Landing = () => {



const [Arr,Setarr]=useState([])




const FetchAllAPi=async()=>{
  
  await Axios.get('https://api.publicapis.org/entries')
.then((res)=>{
  console.log(res.data.entries)
let NewEnt = res.data.entries 

let NewArr = []

for(let i=0;i<10;i++){

  NewArr.push(NewEnt[i])
}

console.log(NewArr)


Setarr(NewArr)


})


  .catch((err)=>console.log(err))


}

// this hook is activated whenever the component gets mounted
  useEffect(()=>{
FetchAllAPi()
  },[])

 return <section className="w-full h-screen justify-evenly items-center flex flex-col">
<span className="w-[60%] h-[50px]  justify-center items-start flex text-blue-500 font-bold text-[50px]">React!</span>
<div className="w-full h-screen overflow-y-scroll flex-col flex  items-center">
 
{
  Arr && Arr.map((ele,index)=>
<Card key={index} title={ele.API} COunt={index}  para={ele.Description}></Card>
  ) 
}


 </div>
  
 
  

 </section>

}

export default Landing