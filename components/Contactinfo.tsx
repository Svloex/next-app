import Headeing from "./Heading"
import { contactType } from "../types"
import { FC } from "react"

type contactInfoProps = {
    contact:contactType
}

const ContactInfo:FC<contactInfoProps> = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}
    console.log(contact);

    if(!contact) {
        return <Headeing tag='h3' text='Empty contact'/>
    }

    return (
        <>
            <Headeing tag='h3' text={name}/>
            <div>
                <strong>Email: </strong>
                {email}
            </div>
            <div>
                <strong>Address: </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    )
}

export default ContactInfo