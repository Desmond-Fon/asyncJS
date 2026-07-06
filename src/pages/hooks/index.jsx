import { useRef } from "react";
import svg from "../../assets/react.svg"
import { useMemo, useState } from "react";
import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'
import ellipseT from '../../assets/ellipseT.svg'
import ellipseB from '../../assets/ellipseB.svg'


function Hooks() {
    // const inputRef = useRef(null);
    // // const [image, setImage] = useState(null);
    // const openRef = useRef(null);


    // function openFile() {
    //     console.log(openRef.current.files[0]);
    //     openRef.current.click()
    // }

    // // const [count, setCount] = useState(0);
    // // useEffect(() => {
    // //     setCount(count + 1);
    // // }, []);

    // function focusInput() {
    //     inputRef.current.focus();
    // }

    // return (
    //     <div className="m-5">
    //         <input ref={inputRef} className="bg-gray-200 p-2 rounded-md"  type="text" />
    //         <input ref={openRef} type="file" name="file" id="file" className="hidden" />
    //         <div onClick={openFile}><img src={svg} alt="" /></div>
    //         <div className="mt-40"><button onClick={focusInput}>Focus Input</button></div>
    //     </div>
    // )

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const doubled = useMemo(() => {
        console.log("Calculating...");
        return count * 2;
    }, [count]);

    return (
        <div className="relative w-full mx-auto">
            <h1>{doubled}</h1>
            <button onClick={() => setCount(count + 1)} className="bg-[#FFFFFF26]">
                Increase
            </button>
            <input className="bg-gray-200 p-2 z-10000  rounded-md" onChange={(e) => setName(e.target.value)} />



            <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-20 items-center mt-20 relative">
                <img src={img1} className="relative z-0 md:w-[21%] h-[400px] object-cover" alt="" />
                <img src={img2} className="relative z-0 md:w-[21%] h-[400px] object-cover" alt="" />
                <img src={img3} className="relative z-0 md:w-[21%] h-[400px] object-cover" alt="" />
                <img src={img4} className="relative z-0 md:w-[21%] h-[400px] object-cover w-full" alt="" />
                <img src={ellipseT} className="hidden md:block absolute z-0 top-[-40px] w-full" alt="" />
                <img src={ellipseB} className="hidden md:block absolute z-0 bottom-[-50px] w-full" alt="" />
            </div>
        </div>
    );

}

export default Hooks