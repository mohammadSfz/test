import { useState } from "react";

function Index({item}:{item:any}) {
    const [show, setShow] = useState(false);
    return (
        <>
         <div className="min-w-[400px] flex justify-between	min-h-[50px] font-bold items-center	cursor-pointer	">{item?.email}&nbsp;  <a onClick={()=>setShow(!show)}>{show?"Hide Details":"Show Details"}</a></div>
         {show && <li  className="flex justify-between gap-x-6 py-5 	">
        <div className="flex min-w-0 gap-x-4">
           
            <hr/>
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item?.avatar} alt="" />
            <div className="min-w-0 flex-auto">
                <p className="text-sm flex font-semibold leading-6 text-gray-900"> {item?.fire_name}&nbsp;{item?.last_name}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item?.email}</p>
            </div>
        </div>
                                 
    </li>}
        </>
       
    )
}


export default Index;