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
    console.log(menus)

function drawChalkboard(name){
        var i=1
        for(var x in menus){
            if(x==name){
                console.log(`${x}=='${name}'`)
               for(var y in menus[x].item ){
                   if(menus[x].item[y].id%2){
                       //console.log(i)
                       console.log(menus[x].item[`${y}`].itemName)
                        $('#col1').append(`
                        <strong><h3> ${menus[x].item[`${y}`].itemName}</h3>
                        <h4>${menus[x].item[`${y}`].price}</h4>
                        <h4>${menus[x].item[`${y}`].desc}</h4>
                        </strong><br>`)
                        i=i+1 
                        console.log(i)
                   }
                   else if(menus[x].item[y].id%3){
                       //console.log(i)
                        console.log(menus[x].item[`${y}`].itemName)
                        $('#col2').append(`
                        <strong><h3> ${menus[x].item[`${y}`].itemName}</h3>
                        <h4>${menus[x].item[`${y}`].price}</h4>
                        <h4>${menus[x].item[`${y}`].desc}</h4>
                        </strong><br>`)
                        //console.log(i)
                        i=i+1

                   }
               }
            }
        }
    }

$('#chalkboard').load(drawChalkboard('Classic'))