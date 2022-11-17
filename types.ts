export type addressType = {
    street:string,
    suite:string,
    city:string,
    zipcode:string
}

export type contactType = {
    map(arg0: ({ id, name }: { id: any; name: any }) => JSX.Element): import("react").ReactNode
    id:string,
    name:string,
    email:string,
    address:addressType

}

export type postType = {
    title:string,
    body:string
}
export type postsType = {
    map: any;
    id:string,
    name:string
}

export type socialsType = {
    [x: string]: any;
    id: number,
    icon:string,
    name:string,
    path:string
}

export type headeingArgType = {
    tag:string|null,
    text:string
}