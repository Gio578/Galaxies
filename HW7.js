var img_src = ["GalaxyCluster.jpg", "M104.jpg", "NGC1300.jpg", "InteractingGalaxies.jpg", "M51.jpg", "NGC6217.jpg"];

var img_caption = ["Galaxy Cluster", "M 104", "NGC 1300", "Interacting Galaxies", "M51", "NGC 6217"];

function changeImg() {
    var rnd_idx = Math.floor(Math.random() * img_src.length);
    var imgPath = img_src[rnd_idx];
    var captionText = img_caption[rnd_idx];

    document.getElementById("randomImg").src = imgPath;
    document.getElementById("randomImg").alt = captionText;
    document.getElementById("imgCaption").textContent = captionText;
}