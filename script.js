function navigateUpAndDown(navItem) {
    
    document.onclick = function(){
        getAllNavItems[x].focus()
    }    
    for (var i=0; i<navItem.length; i++) {
        
        x = 0; 
        getAllNavItems[x].focus();

        navItem[i].onkeydown = function(e){
            switch(e.keyCode){
                //keycode down arrow
                case 40:
                    console.log("down "+ x);
                    console.log(navItem.length);
                    if (x < navItem.length-1)
                    {
                        x = x + 1
                        getAllNavItems[x].focus();
                    }
                    else if (x = navItem.length) {
                        x = 0; 
                        getAllNavItems[x].focus();
                    }
                    break;
                //keycode up arrow
                case 38:
                    console.log("up "+ x);
                    if (x >= 1) { 
                        x = x - 1
                        getAllNavItems[x].focus();
                    }
                    else if( x == 0){
                        x = (navItem.length-1)
                        getAllNavItems[x].focus();
                    }
                    break;
                case 39:
                    console.log("right")
                    break;
                case 37:
                    console.log("left")
                    break;
            }
        }
    };
}
var getAllNavItems = document.getElementById('main-nav').getElementsByClassName('main-nav-item');
navigateUpAndDown(getAllNavItems);

