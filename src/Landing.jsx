import { useEffect, useState } from "react"
import Card from "./Card"
import Axios from 'axios'

const Landing = () => {



const [Arr,Setarr]=useState([])



const FetchAllAPi=async()=>{
  await Axios.get("http://universities.hipolabs.com/search?country=United+States")
 .then((res)=>{
  console.log(res.data)

let MyArr = res.data
let arr=[]

for(let i=0; i<10;i++){
arr.push(MyArr[i])
}
console.log(arr)

Setarr(arr)
}).catch((Err)=>console.log(Err))
}
// this hook is activated whenever the component gets mounted
  useEffect(()=>{
FetchAllAPi()
  },[])

 return <section className="w-full h-screen justify-evenly items-center flex flex-col">
<span className="w-[60%] h-[50px]  justify-center items-start flex text-blue-500 font-bold text-[50px]">React!</span>
<div className="w-full h-screen overflow-y-scroll flex-col flex  items-center">

{Arr && Arr.map((ele,index)=>

<Card key={index} title={ele.alpha_two_code
}  para={ele.name} COunt={index}/>
)

}

 </div>
  
 
  

 </section>

}

export default Landing