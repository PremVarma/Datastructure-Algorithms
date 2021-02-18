var beast=["Center",'Bear',"Apple"];

beast.indexOf("Apple");

beast.findIndex(item=>{
    return item==="Apple"
})

beast.find((item)=>{
    return item==="Apple"
})

beast.includes("Apple")