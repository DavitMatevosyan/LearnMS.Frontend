import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SignUp = () => {
    const [count, setCount] = useState('asd');

    useEffect(() => {
        console.log(count);
    }, [])

    const {id} = useParams();
    return (
        <>
            <div>Signup Page YEYEEYEYEYE {id}</div>
        </>

    )
}

export default SignUp;