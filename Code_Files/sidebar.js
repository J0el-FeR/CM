// Listen for popup events to transfer popup content to the sidebar
map.on('popupopen', function(e) {
    e.popup._isOpen = false;
    document.getElementById('sidebar').style.left = '0px'; // Open sidebar
    document.getElementById('sidebar-content').style.display = 'block'; 
    
    

});

popupContentArray.forEach(function(popupContent, index) {
    var incSide = index + 1;
    
    var popupId = document.getElementById('popupContent' + incSide);
    popupId.addEventListener('click', function() {
        document.getElementById("titleSideBar").innerHTML = popupContent.name;
        document.getElementById("imageSideBar").src = popupContent.image;
        document.getElementById("textSideBar").innerHTML = popupContent.description;
        
        if (popupContent.sound !== '') {
            var audioElement = new Audio(popupContent.sound);
            audioElement.play();
        }
    });

    

    console.log(incSide);
});



// Close sidebar when map is clicked
map.on('click', function() {
    document.getElementById('sidebar').style.left = '-40%'; // Close sidebar
    document.getElementById('sidebar-content').style.display = 'none'; 
});


