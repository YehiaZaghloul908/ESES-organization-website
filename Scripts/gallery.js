let galleryGrid = document.getElementById("gallery-grid");
for(i = 1; i <= 52; i++){ //this needs to be dynamic
    galleryGrid.innerHTML += '<img src="../Images/9th-international-conference-compressed/' + i + '.JPG" alt="9th-conference-photo">';
}