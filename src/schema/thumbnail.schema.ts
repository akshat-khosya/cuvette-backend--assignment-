import { object, string, ref, number } from "yup";
// const thumbnailGenratorSchema = {
//     reqType: "POST",
//     reqPath: "/api/user/genrate",
// }

const thumbnailGenratorSchema = object({
    body: object({
        url:string().required("image url is Required")
    }),
    headers: object({
        "content-type": string().required("Content Type is Required")
        .equals(["application/json"],"Content Type must be application/json"),
        "x-auth-token":string().required("auth token is required")
    })

})

export {thumbnailGenratorSchema}