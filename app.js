var menus=[,]
function Id(arr){
    		var id
        for(var i=0;i<arr.length;i++){
        	id=i+1  
        }
        console.log(id)
        return id

    }
//Menu Creation 
    function Menu(name,place,phoneNum){

        this.menuName=name
        this.place=place
        this.phoneNum=phoneNum
        this.items=[]
        this.identification
        // menus.push(this)
    }
    function addNewMenu(name,place,phoneNum){
        var menuId=Id(menus).toString()
        menus.push(new Menu(name,place,phoneNum,menuId))
    }
    $('#addNewMenu').click(function(){
        debugger
        
        var name=$('#menuName').val()
    
        var place=$('#place').val()
        var num=$('#phone').val()
        addNewMenu(name,place,num)
        console.log(`Menu ${name} was Added`)
    })
    
    
//Item Creation
    function Item(name,desc,price){
        this.itemName=name
        this.desc=desc
        this.price=price
    }
    function addItem(itemName,desc,price,menu){
        for(var i=0;i<menus.length;i++){
            var spot=menus[i]
            if(spot!==undefined && spot.menuName==menu)
            spot["items"].push(new Item(itemName,desc,price))
        }
    }
//Draw Functions
function draw(menu){
    $('#info').append(`this menu is ${menus[menu].menuName} <br>`)
    for(var i=0;i<menus[menu].items.length;i++){
        var spot=menus[menu].items[i]
       $('#info').append(`${spot.itemName} -- ${spot.desc} --$${spot.price}`)
    }
}
//Calls
    addNewMenu("test","42 Wallaby Way","867.5309")
    addNewMenu("test2","42 Wallaby Way","867.5309")
    addItem("basic bitch","Hotdog on a glutain and fat free bun with ketchup mustard and sass","More money than you spent on your car","test")
    addItem("basic bitch","Hotdog on a glutin and fat free bun with ketchup mustard and sass","More money than you spent on your car","test2")
    console.log(menus)
    draw(1)