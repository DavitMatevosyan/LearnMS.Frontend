import ApiClient from "../../../Utils/ApiClient/ApiClient";

type LoginModel = {
    UserIdentifier: string;
    password: string;
}

function handleLogin(model: LoginModel) {
    const { post } =  ApiClient();

    const data = JSON.stringify(model);

    console.log(data);

    const result = post('/Authentication/Login', data, { })
        .then(r => {console.log(r)})
        .catch(ex => console.log(ex));

        return result;
}

export { handleLogin };
export type { LoginModel };
