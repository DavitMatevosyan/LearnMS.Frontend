import { useMemo, useState } from "react";
import { emailRegex } from "../../../Utils/Constants/Regex";
import { NavigateFunction } from "react-router-dom";
import { LoginModel, handleLogin } from "./useLoginHandler";

type LoginFormProps = {
    navigate: NavigateFunction;
}

const LoginForm = (props: LoginFormProps) => {
    const { navigate } = props;
    const [isLoading, setIsLoading] = useState<boolean>();
    const [isError, setIsError] = useState<boolean>();

    const [model, setModel] = useState<LoginModel>(
        {
            UserIdentifier: '',
            password: ''
        });


    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("invite pressed", email, password);  

        setIsLoading(true);
        handleLogin(model)
            .then(() => {
                setIsLoading(false);
                navigate('/my')
            })
            .catch(() => setIsError(true));
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
        <form className="container p-3" onSubmit={(e) => login(e)}>
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
