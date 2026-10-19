import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import type { IconType } from "react-icons"

export interface Contact  {
    icon: IconType;
    type: string;
    data: string;
}

export const contacts: Contact[] = [
    {
        icon: HiOutlineMail,
        type: "Email",
        data: "resyahasan0@gmail.com"
    },
    {
        icon: FiPhone,
        type: "Telephone",
        data: "+628999070327"
    }
]