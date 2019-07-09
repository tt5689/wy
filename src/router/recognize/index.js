export default{
    path:"/recognize",
    component:()=>import('views/recognize'),
    name:'recognize',
    redirect:'/recognize/tj',
    children:[
        {
            path:"tj",
            component:()=>import("components/tj"),
            name:"tj",
            meta:{
                zyydisplaynoneboyyom:true,
            }
        },
        {
            path:"books",
            component:()=>import("components/books"),
            name:"books",
            meta:{
                zyydisplaynoneboyyom:true,
            }



        },
        {
            path:"hgb",
            component:()=>import("components/hgb"),
            name:"hgb",
            meta:{
                zyydisplaynoneboyyom:true,
            }
        },
        {
            path:"nbj",
            component:()=>import("components/nbj"),
            name:"nbj",
            meta:{
                zyydisplaynoneboyyom:true,
            }
        },
        {
            path:"sd",
            component:()=>import("components/sd"),
            name:"sd",
            meta:{
                zyydisplaynoneboyyom:true,
            }
            
        },
    ],
meta:{
    zyydisplaynoneboyyom:true,
}
}
