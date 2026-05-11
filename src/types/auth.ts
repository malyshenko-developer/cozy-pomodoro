import { IUser } from "@/types/user"







export interface IAuthFormData extends Pick<IUser, "email" | "password"> {}