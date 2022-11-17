import Headeing from "./Heading"
import { postType } from "../types"
import { FC } from "react"

type postInfoProps = {
    post:postType
}

const PostInfo:FC<postInfoProps> = ({post}) => {

    const {title, body} = post || {}
    // console.log(contact);

    if(!post) {
        return <Headeing tag='h3' text='Empty contact'/>
    }

    return (
        <>
            <Headeing tag='h3' text={title}/>
            <p>{body}</p>
        </>
    )
}

export default PostInfo