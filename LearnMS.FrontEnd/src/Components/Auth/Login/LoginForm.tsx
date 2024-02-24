import { useMemo, useState } from "react";
import { emailRegex } from "../../../Utils/Constants/Regex";

const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("invite pressed", email, password);  
    }

    const isValidToLogin = useMemo<boolean>(() => {
        if(!email && !password)
            return false;
        if(!emailRegex.test(email))
            return false;

        if(password.length < 8)
            return false;
        
        return true;
    }, 
        [email, password])

    return (
        <form className="container p-3" onSubmit={(e) => handleLogin(e)}>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label text-end">Email</label>
                <div className="col-sm-9">
                    <input className="form-control" type="text" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label text-end">Password</label>
                <div className="col-sm-9">
                    <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <button className="btn btn-primary" type="submit" disabled={!isValidToLogin}>Login</button>         
        </form>
    )
}

export default LoginForm;
