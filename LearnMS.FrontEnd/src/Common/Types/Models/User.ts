import { Gender } from "../../Enums/Gender";
import { UserType } from "../../Enums/UserType";

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    gender: Gender;

    userType: UserType;

    // possible additions such as classes, permissions, courses, teachers, schedule.
};
