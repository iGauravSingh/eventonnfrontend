
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";




const SelectCity = ({ city, click, setClick, handleCityClick, cityData }) => {
  return (
        <div className="w-full flex flex-col items-center relative">
                <h3 className="text-xl font-serif">City</h3>
                <div className="flex justify-between items-center w-[15rem] h-[2rem] border-2 font-serif mt-4 px-2 cursor-pointer" onClick={()=> setClick(prev=> !prev)}>
                    <p>{city}</p>
                    <div>
                        {click ? <BsFillCaretUpFill /> : <BsFillCaretDownFill /> }
                    </div>
                </div>
                    {click ?    
                        <ul className="w-[15rem] bg-slate-200 px-2 py-2 absolute top-[5rem]">
                            {cityData.map((item,index)=> <li className="pt-2 font-serif cursor-pointer" key={index} onClick={()=>handleCityClick(item)}>{item}</li>)}
                        </ul>
                    : ''}
            </div>
  )
}

export default SelectCity