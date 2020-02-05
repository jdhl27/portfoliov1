function moreAndLessEvent(num){

    // OBTAINING OBJECTS
    var event_description = document.getElementsByClassName("event-description-hidden");

    // ADDING CLASSES

    event_description[num].classList.toggle("event-description-show");

    var event_url = document.getElementsByClassName("event-url");
 
    // CONDITION SEE MORE AND SEE LESS
    if(event_url[num].innerText == "Ver Más"){
        event_url[num].innerText = "Ver Menos";
    }else{
        event_url[num].innerText = "Ver Más";
    }
    
    
}

function moreAndLessProject(){
    var project = document.getElementsByClassName("project-hidden")
    var project_url = document.getElementById("projects-mas");
    
    for(var i = 0; i < project.length; i++){
        project[i].classList.toggle("project-show");
    }

    // CONDITION SEE MORE AND SEE LESS
    if(project_url.innerText == "Ver Más"){
        project_url.innerText = "Ver Menos";
    }else{
        project_url.innerText = "Ver Más";
    }
    
}