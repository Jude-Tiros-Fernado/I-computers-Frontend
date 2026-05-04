import { useState } from "react";

export default function Test(){
    const[count,setCount]=useState(0);
    const[isVisible,setVisible]=useState(true);
    
    return(
        <div className="w-full h-full bg-amber-200 flex justify-center items-center">
            <button onClick={
                ()=>{
                    setVisible(!isVisible);
                }
            } className="w-[50px] h-[50px] bg-red-600 text-amber-50">{ isVisible ? "X":"O" }
                </button>
            {isVisible && <div className="w-[600px] h-[600px] bg-white flex flex-col justify-center items-center">
                <h1 className=" text-5xl m-1.5">{count}</h1>
                <div className="w-full h-[70px]  flex justify-center items-center gap-2">
                    <button onClick={
                        ()=>{
                            setCount(count-1)
                            console.log(count);
                        }
                    } className="w-[100px] h-[45px] bg-red-600 text-white">Decrement</button>
                    <button onClick={
                        ()=>{
                            setCount(count+1)
                            console.log(count);
                        }
                    } 
                    className="w-[100px] h-[45px] bg-green-600 text-white">Increment</button>

                </div>
            </div>}

        </div>
    );
}