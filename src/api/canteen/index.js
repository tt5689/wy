import http from "utils/http.js"
export const getcanteen = ()=>http("post","/xhr/saleCenter/index.json")