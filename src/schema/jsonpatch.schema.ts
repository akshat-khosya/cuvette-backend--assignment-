import { array } from "yup";
import { object, string, ref, number } from "yup";
// const jsonpatchSchema = {
//     reqType: "POST",
//     reqPath: "/api/json/patch",
// }

const jsonpatchSchema = object({
    body: object({
        doc:object().required("doc is required"),
        patch:array().required("patch is required")
    }),
    headers: object({
        "content-type": string().required("Content Type is Required")
        .equals(["application/json"],"Content Type must be application/json"),
        "x-auth-token":string().required("auth token is required")
    })

})

export {jsonpatchSchema}