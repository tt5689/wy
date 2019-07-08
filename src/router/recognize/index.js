export default{
    path:"/recognize",
    component:()=>import('views/recognize'),
    name:'recognize',
    children:[
        {
            path:"recbody",
            component:()=>import("components/recbody"),
            name:"recbody",
        },
        {
            path:"books",
            component:()=>import("components/books"),
            name:"books",
        },
        {
            path:"hgb",
            component:()=>import("components/hgb"),
            name:"hgb",
        },
        {
            path:"nbhw",
            component:()=>import("components/nbhw"),
            name:"nbhw",
        },
        {
            path:"sd",
            component:()=>import("components/sd"),
            name:"sd",
        },
    ]
    
}
