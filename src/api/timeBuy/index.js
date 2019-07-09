import http from "utils/http.js"
export const getTime = ()=>http("post","/xhr/flashSale/getScreen.json")
export const getFloors = ()=>http("post","/xhr/flashSale/getFloors.json")