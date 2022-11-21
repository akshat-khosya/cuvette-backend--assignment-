import { object, string, ref, number } from "yup";

// const userCreateSchema = {
//     reqType: "POST",
//     reqPath: "/api/user/create",
// }

const userCreateSchema = object({
    body: object({
        username:string().required("user name is Required"),
        password:string().required("Password is Required")
    }),
    headers: object({
        "content-type": string().required("Content Type is Required")
        .equals(["application/json"],"Content Type must be application/json"),
    })

})

// const userAuthSchema = {
//     reqType: "POST",
//     reqPath: "/api/user/login",
// }

const userAuthSchema = object({
    body: object({
        username:string().required("user name is Required"),
        password:string().required("Password is Required")
    }),
    headers: object({
        "content-type": string().required("Content Type is Required")
        .equals(["application/json"],"Content Type must be application/json"),
    })

})

// const userAddressSchema = {
//     reqType: "PATCH",
//     reqPath: "/api/user/address",
// }

const userAddressSchema = object({
    body: object({
        address:string().required("address is Required")
    }),
    headers: object({
        "content-type": string().required("Content Type is Required")
        .equals(["application/json"],"Content Type must be application/json"),
        "x-auth-token":string().required("auth token is required")
    })

})


export { userCreateSchema,userAuthSchema,userAddressSchema };