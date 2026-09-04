let slideIndex = 0;
const slides = ["MEDIA/movie0.jpg", "MEDIA/movie1.jpg", "MEDIA/movie2.jpg", "MEDIA/movie3.jpg", "MEDIA/movie4.jpg"];
const slideinfo = ["After a banker is sentenced to life in Shawshank Prison, he forms an unlikely friendship with a seasoned inmate and clings to hope amid cruelty and corruption.",
     "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
     "When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
     "12 Angry Men is a 1957 American legal drama film directed by Sidney Lumet in his feature directorial debut, adapted by Reginald Rose from his 1954 teleplay.",
     "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."];
showSlides();

function showSlides() {
    document.getElementById("slides_image").src = slides[slideIndex];
    document.getElementById("slides_text").innerHTML = slideinfo[slideIndex];
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0};
    setTimeout(showSlides, 2000);
}



if (localStorage.getItem("color_preference") != null) {
    document.getElementById("slides_bg").style.backgroundColor = 
                            localStorage.getItem("color_preference");
}

if (localStorage.getItem("size_preference") != null) {
    document.getElementById("slides_text").style.fontSize = 
                            localStorage.getItem("size_preference");
}       

//Change background color       
function changeColor() {
    //Get the selected color
    let selectedBGColor = document.getElementById("colorOption").value;
    //Change the background color accordingly
    document.getElementById("slides_bg").style.backgroundColor = selectedBGColor;  
    //Store this selected color locally & permanently on client side            
    localStorage.setItem("color_preference", selectedBGColor);                             
}   
//Change text size
function customizeText() {
    let selectedTextSize = document.getElementById("sizeOption").value;
    document.getElementById("slides_text").style.fontSize = selectedTextSize;
    localStorage.setItem("size_preference", selectedTextSize);  
}  