

const Card = ({title, para, COunt}) => {


  const PrVal=(val)=>{
   alert(`you clicked the card ${val+1}`)
  }
  return (
    <div onClick={()=>PrVal(COunt)} className="w-[300px] my-4 py-10 flex rounded-md shadow-lg flex-col justify-evenly items-center shadow-blue-600  h-[350px]">
      <span className="font-bold text-blue-500 text-center">{COunt+1} {title}</span>
      <span className=" text-center text-[15px] text-blue-500 ">{para}</span>
    </div>
  )
}

export default Card