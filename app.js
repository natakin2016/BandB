// //Fire Base Call stuff
    // var menuRef=firebase.database().ref("bandb-21b99");




    // var menus=[]
    // function Id(arr){
    //     		var id=1
    //             if(arr.length>0){
    //                 for(var i=0;i<arr.length;i++){
    //                     id=i+1  
    //                 }
    //             }
    //         console.log(id)
    //         return id

    //     }
    // //Menu Creation 
        function Menu(name,place,phoneNum,mon,tues,thurs,fri,sat,sun){

            this.menuName=name
            this.place=place
            this.phoneNum=phoneNum
            this.mon=mon
            this.tues=tues
            this.wed=wed
            this.thurs=thurs
            this.fri=fri
            this.sat=sat
            this.sun=sun
        }
    //     function addNewMenu(name,place,phoneNum){
    //         var menuId=Id(menus).toString()
    //         menus.push(new Menu(name,place,phoneNum,menuId))
    //         createMenu(menus)
    //     }
    //     $('#addNewMenu').click(function(){
    //         debugger
            
    //         var name=$('#menuName').val()
        
    //         var place=$('#place').val()
    //         var num=$('#phone').val()
    //         addNewMenu(name,place,num)
    //         console.log(`Menu ${name} was Added`)
    //     })
        
        
    // //Item Creation
    //     function Item(name,desc,price){
    //         this.itemName=name
    //         this.desc=desc
    //         this.price=price
    //     }
    //     function addItem(itemName,desc,price,menu){
    //         for(var i=0;i<menus.length;i++){
    //             var spot=menus[i]
    //             if(spot!==undefined && spot.menuName==menu)
    //                  firebase.database().ref(`${i}/items`).push(new Item(itemName,desc,price))
    //         }
            
    //     }
    // //Draw Functions
    // function draw(menu){
    //     $('#info').append(`this menu is ${menus[menu].menuName} <br>`)
    //     for(var i=0;i<menus[menu].items.length;i++){
    //         var spot=menus[menu].items[i]
    //        $('#info').append(`${spot.itemName} -- ${spot.desc} --$${spot.price}`)
    //     }
    // }
    // //Calls
    //     addNewMenu("test","42 Wallaby Way","867.5309")
    //     addNewMenu("test2","42 Wallaby Way","867.5309")
    //     addItem("basic bitch","Hotdog on a glutain and fat free bun with ketchup mustard and sass","More money than you spent on your car","test")
    //     addItem("basic bitch","Hotdog on a glutin and fat free bun with ketchup mustard and sass","More money than you spent on your car","test2")
    //     console.log(menus)
    //     draw(1)
        


    // addItem("basic bitch3","Hotdog on a glutin and fat free bun with ketchup mustard and sass","More money than you spent on your car","test2")





var db=firebase.database()
var menusRef=firebase.database().ref('menus')
var id=0

function childMenu(menuName,address,phone,mon,tues,wed,thurs,fri,sat,sun){
    firebase.database().ref('menus').child(`${menuName}`).set(new Menu(menuName,address,phone,mon,tues,wed,thurs,fri,sat,sun))}
function pushMenu(menu){
    firebase.database().ref('menus').push(menu)
}
//firebase.database().ref().set({ menus:[]})

var test1={name:"test1",phone:"test1",address:"test1",items:[]}
var test2={name:"test2",phone:"test1",address:"test1",items:[]}
var menuName=$('#name').val()
var address=$('#address').val()
var phone=$('#phone').val()
var mon=$('#monday').val()
var tues=$('#tuesday').val()
var wed=$('#wednesday').val()
var thurs=$('#thursday').val()
var fri=$('#friday').val()
var sat=$('#saturday').val()
var sun=$('#sunday').val()

$('#createMenu').click(function(){
   childMenu($('#name').val(),
   $('#address').val(),
   $('#phone').val(),
   $('#monday').val(),
   $('#tuesday').val(),
   $('#wednesday').val(),
   $('#thursday').val(),
   $('#friday').val(),
   $('#saturday').val(),
   $('#sunday').val()
   )
   console.log($('#name').val(),
   $('#address').val(),
   $('#phone').val(),
   $('#monday').val(),
   $('#tuesday').val(),
   $('#wednesday').val(),
   $('#thursday').val(),
   $('#friday').val(),
   $('#saturday').val(),
   $('#sunday').val())

})



menusRef.on('value', function(snap){
   var snapshot=snap.val()
   localStorage.setItem('menus', JSON.stringify(snapshot))
    console.log(snapshot)
})

var menus=localStorage.getItem('menus')

// console.log(menus)
// for(var key in menus){
//     if(key.hasOwnProperty(name)){
//         console.log('NAME FOUND')
//     }
// }
// function draw(obj){
//     $('#menus').append('Menus:'+[menus])
// }
// draw(menus)