var menuOne=[{name:"hotdoge",decription:"Tumblr Hot Dog",price:6.50,id:0,menu:"menuOne"}]

function menuAdd(menu,name,desc,price,menuName){
    
    for(i=0;i<menu.length;i++){
        var spot=menu[i]
    // // IF key in menu = name notify user object exists
    //     if(spot.id==i+1){
    //     //    console.log("Oopsie. DuplicateS")
    //     }else{
    // // ELSE push Item object to list of menu
            menu.push({name:name,decription:desc,price:price,id:i,menu:menuName,})
        // }
    }
}

function menuModify(menu,item){
    //console.log(item)
    // Open Item Modification form

    update(menu)
}

function menuDelete(menu,item){

    update(menu)
}

function update(menu){
    // Update Menu List
    for(i=0;i<menu.length;i++){
        var spot=menu[i]
        $('#list').append(`${spot.name} -- ${spot.decription} for $${spot.price} <br>`)
    }
}

menuAdd(menuOne,"Hot jack","Tis a hotdog with pepper jack cheesen",50,"menuOne")
// menuAdd(menuOne,"hotdog","Sausage with bun",5,"menuOne")
console.log(menuOne)
update(menuOne)