
//Firebase Creation
 // Initialize Firebase
            var config = {
                apiKey: "AIzaSyCJQ5pekW_F421D1uTlK35M4Tdy0BGOocs",
                authDomain: "bandb-21b99.firebaseapp.com",
                databaseURL: "https://bandb-21b99.firebaseio.com",
                storageBucket: "bandb-21b99.appspot.com",
                messagingSenderId: "714417219935"
            };
            firebase.initializeApp(config);
    var db = firebase.database()
    var menusRef = firebase.database().ref('menus')
    var id = 0
    var snapshot;
    function updateDataList() {
        menusRef.on('value', function (snap) {
            var snapshot = snap.val()
            localStorage.setItem('snapshot', JSON.stringify(snapshot))
        })

        menus = JSON.parse(localStorage.getItem('snapshot'))
        console.log(snapshot)
    }
    updateDataList()

//Menu Creation
    function Menu(name, place, phoneNum, mon, tues, wed, thurs, fri, sat, sun) {

        this.menuName = name
        this.place = place
        this.phoneNum = phoneNum
        this.mon = mon
        this.tues = tues
        this.wed = wed
        this.thurs = thurs
        this.fri = fri
        this.sat = sat
        this.sun = sun
        this.item='No Items'
        
    }

    function createMenu(menuName, address, phone, mon, tues, wed, thurs, fri, sat, sun) {
        firebase.database().ref('menus').child(`${menuName}`).set(new Menu(menuName, address, phone, mon, tues, wed, thurs, fri, sat, sun))
    }
    $('#createMenu').click(function () {
        if (!$('#name').val() || !$('#address').val() || !$('#phone').val() || !$('#monday').val() ||
            !$('#tuesday').val() || !$('#wednesday').val() || !$('#thursday').val() || !$('#friday').val() || !$('#saturday').val() || !$('#sunday').val()) {
            alert('Oops you forgot a Field in the Form')
        } else {
            createMenu($('#name').val(), $('#address').val(), $('#phone').val(), $('#monday').val(),
                $('#tuesday').val(), $('#wednesday').val(), $('#thursday').val(), $('#friday').val(),
                $('#saturday').val(), $('#sunday').val()
            )
            updateDataList()
            drawNewMenuName($('#name').val())
        }
    })

//Item Creation
    function Item(name,desc,price,id){
        this.itemName=name
        this.desc=desc
        this.price=price
        this.id=id
    }
var id=1
    function createItem(name,desc,price,menu,id){
        firebase.database().ref(`menus/${menu}/item`).child(`${name}`).set(new Item(name,desc,price,id))
    }
    $('#createItem').click(function(){
       console.log(id)
       id=id+1
       console.log(id)
        createItem($('#itemName').val(),$('#desc').val(),$('#price').val(),$('#menuList').val(),id)
        console.log($('#itemName').val(),$('#desc').val(),$('#price').val(),$('#menuList').val(),id)
        
    })

//Draw Functions
    function drawAllMenuNames(menus){
         for (var key in menus) {
                $('#menus').append(`<li id='${key}'data-toggle="modal" data-target="#menu" onclick="drawMenuItems('${key}')">${key}</li>`)
                // $('#menuList').append(`<label class="radio-inline" for="${key}"><input type="radio" name="${key}" id="${key}" value=${key}>${key}</label>`)
            }
    }
    function drawNewMenuName(key){
        $('#menus').append(`<li id='${key}' data-toggle="modal" data-target="#menu" onclick="drawMenuItems('${key}')">${key}</li>`)
        // $('#menuList').append(`<label class="radio-inline" for="${key}"><input type="radio" name="${key}" id="${key}" value="${key}">${key}</label>`)
    }
    function drawMenuItems(name){
        var i=0
        for(var x in menus){
            if(x==name){
                console.log(`${x}=='${name}'`)
               for(var y in menus[x].item ){
                   i=i+1
                    //console.log(menus[x].item[`${y}`].itemName)
                    $('#menuBody').append(`${i}: ${menus[x].item[`${y}`].itemName}<br>`)
               }
            }
        }
    }

    function drawChalkboard(name){
        var i=1
        for(var x in menus){
            if(x==name){
                console.log(`${x}=='${name}'`)
               for(var y in menus[x].item ){
                   if(menus[x].item[y].id%2){
                       console.log(i)
                       //console.log(menus[x].item[`${y}`].itemName)
                        $('#col1').append(`
                        <strong><h3> ${menus[x].item[`${y}`].itemName}</h3>
                        <h4>${menus[x].item[`${y}`].price}</h4>
                        <h4>${menus[x].item[`${y}`].desc}</h4>
                        </strong><br>`)
                        i=i+1 
                        console.log(i)
                   }
                   else if(menus[x].item[y].id%3){
                       console.log(i)
                        //console.log(menus[x].item[`${y}`].itemName)
                        $('#col2').append(`
                        <strong><h3> ${menus[x].item[`${y}`].itemName}</h3>
                        <h4>${menus[x].item[`${y}`].price}</h4>
                        <h4>${menus[x].item[`${y}`].desc}</h4>
                        </strong><br>`)
                        console.log(i)
                        i=i+1

                   }
               }
            }
        }
    }

drawAllMenuNames(menus)
$('#chalkboard').load(drawChalkboard('Classic'))