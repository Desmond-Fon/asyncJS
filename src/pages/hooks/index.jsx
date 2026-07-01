import { useRef } from "react";
import svg from "../../assets/react.svg"
import { useMemo, useState } from "react";


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
        <div>
            <h1>{doubled}</h1>
            <button onClick={() => setCount(count + 1)} className="bg-[#FFFFFF26]">
                Increase
            </button>
            <input className="bg-gray-200 p-2 rounded-md" onChange={(e) => setName(e.target.value)} />
        </div>
    );

}

export default Hooks