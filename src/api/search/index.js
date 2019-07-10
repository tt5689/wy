import http from "utils/http.js"
export const search = ()=>http("post","/xhr/search/init.json")