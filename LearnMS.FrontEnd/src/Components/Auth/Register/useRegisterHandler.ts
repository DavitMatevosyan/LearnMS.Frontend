import { userType } from "../../../Models/Enums/userType";
import ApiClient from "../../../Utils/ApiClient/ApiClient";

type RegistrationModel = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: userType;
    dateOfBirth: Date;
    referralLink: string;
}

function handleRegistration(model: RegistrationModel) {
    const { post } =  ApiClient();

    const data = JSON.stringify(model);

    console.log(data);

    const result = post('/Authentication/Signup', data, { })
        .then(r => {console.log(r)})
        .catch(ex => console.log(ex));

        return result;
}

export { handleRegistration };
export type { RegistrationModel };
