
//Firebase Creation
    var db = firebase.database()
    var menusRef = firebase.database().ref('menus')
    var id = 0
    var menus;
    function updateDataList() {
        menusRef.on('value', function (snap) {
            var snapshot = snap.val()
            localStorage.setItem('menus', JSON.stringify(snapshot))
        })

        menus = JSON.parse(localStorage.getItem('menus'))
        console.log(menus)
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
    function Item(name,desc,price){
        this.itemName=name
        this.desc=desc
        this.price=price
    }
    function createItem(name,desc,price,menu){
        firebase.database().ref(`menus/${menu}/item`).child(`${name}`).set(new Item(name,desc,price))
    }

//Draw Functions
    function drawAllMenuNames(menus){
         for (var key in menus) {
                $('#menus').append(`<li id='${key}'data-toggle="modal" data-target="#menu" onclick="drawMenuItems('${key}')">${key}</li>`)
            }
    }
    function drawNewMenuName(name){
        $('#menus').append(`<li id='${name}' data-toggle="modal" data-target="#menu" onclick="drawMenuItems('${name}')">${name}</li>`)
    }
    function drawMenuItems(name){
        
        
        var i=0
        for(var x in menus){
            if(x==name){
                console.log(`${x}=='${name}'`)
               for(var y in menus[x].item ){
                   i=i+1
                    //console.log(menus[x].item[`${y}`].itemName)
                    $('#menuBody').append(`${i}: ${menus[x].item[`${y}`].itemName}`)
               }
            }
        }
    }

drawAllMenuNames(menus)