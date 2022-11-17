import { FC, JSXElementConstructor, ReactNode } from "react"

type HeadeingProps = {
    tag?:any,
    text:string
    
}

const Headeing:FC<HeadeingProps> = ({ tag, text }) => {
    const Tag = tag||'h1'
    return <Tag>
                {text}
            </Tag>
}
export default Headeing

