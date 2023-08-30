
import Image from 'next/image'





const CategoryIcons = ({eventData , clickCategory, setClickCategory}) => {

  const handleClick = (name)=> {
    setClickCategory(name)
  }


  return (
    <div>

        <div className='mt-[3rem] md:mt-[5rem] w-full pb-8 md:pb-12'>
                <div className='flex items-center justify-around'>
                    {eventData.map((item)=> (
                        <div key={item.id} onClick={()=> handleClick(item.name)}>
                            {
                            <Image className={`w-[2rem] md:w-[5rem] h-[3rem] md:h-[5rem] border-b-8 pb-2 cursor-pointer ${clickCategory === item.name ? 'border-[#1d1d1d]': ''}`} src={item.image} alt={item.name} />
                            }
                        </div>
                    ))}

                </div>
            </div>
    </div>
  )
}

export default CategoryIcons