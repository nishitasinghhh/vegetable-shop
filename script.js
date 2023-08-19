let Diet=document.getElementById("name-calorie");
let Vegetables=[
    {
        id:"ttttt",
        name:"Tomato",
        calorie:19,
       img:"img/tomato.png"
    },
    {
        id:"ccccc",
        name:"Cabbage",
        calorie:420,
        img:"img/cabbage.png"
    },
    {
        id:"cacaca",
        name:"Carrot",
        calorie:33,
        img:"img/carrot.png"
    },
    {
        id:"ooooo",
        name:"Onion",
        calorie:32,
        img:"img/onion.png"
    }
    ,{
        id:"ppppp",
        name:"Potato",
        calorie:83,
        img:"img/potato.png"
    },
    {
        id:"pepepe",
        name:"Pepper",
        calorie:26,
        img:"img/pepper.png"
    },
    {
        id:"bebebe",
        name:"beetroot",
        calorie:96,
        img:"img/beetroot.png"
    },
];
let box=[];
let printVegetables = () =>{
    return (Diet.innerHTML=Vegetables.map((vegetable)=>{
        let {id,name,calorie,img}=vegetable;
        let search=box.find((veggie)=>veggie.id===id)||[];
        return `
        <div class="veggie">
        <img src="${img}" alt="" width="30px" height="30px">
        <div class="name">${name}</div>
        <div class="calorie">${calorie}cl</div>
        <div class="buttons">
            <button  class="btn" class="minus">
                <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
            </button>
            <div class="count" id=${id}>
             ${search.count===undefined?0:search.count}
            </div>
            <button class="btn" class="plus">
                <i  onclick="increment(${id})" class="bi bi-plus-circle"></i>
            </button>
        </div>
    </div>
           `
    }).join(""))
};
printVegetables();
let increment=(id)=>{
     let selectedVeggie=id;
     let search=box.find((veggie)=>veggie.id===selectedVeggie.id);
     if(search===undefined)
      {
        box.push({
            id:selectedVeggie.id ,
            count:1
        })
      }
      else{
        search.count+=1;
      }
      update(selectedVeggie.id)
     
}
let decrement=(id)=>{
    let selectedVeggie=id;
    let search=box.find((veggie)=>veggie.id===selectedVeggie.id);
    if(search===undefined)
    {
        return;
    }
    else if(search.count===0)
    {
        return ;
    }
    else{
        search.count-=1
    }
    update(selectedVeggie.id)
}
let update=(id)=>{
    let search=box.find((veggie)=>veggie.id===id);
    document.getElementById(id).innerHTML=search.count;
    calculation()
}
let calculation=()=>{
    let boxAmount=document.getElementById("countKeeper");
    boxAmount.innerHTML=box.map((veggie)=>veggie.count).reduce((x,y)=>x+y,0);
}


