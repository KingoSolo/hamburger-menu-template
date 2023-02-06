
const hamburgerMenuButton = document.getElementById("hamburger-menu-button");
const navigation = document.getElementById("navigation");

document.addEventListener("click", function() {
  navigation.classList.toggle("show");
});

document.addEventListener("click", function(event){
    if(!event.target.closest("#hamburger-menu-button, #navigation")){
        navigation.classList.remove("show")
    }

});
