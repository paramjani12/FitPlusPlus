track = document.getElementById("addbutton");
track.addEventListener("click",getinformation);
function getinformation(){
    day = document.getElementById("day").value;
    localStorage.setItem("dayset",day);
    meal = document.getElementById("meal").value;
    localStorage.setItem("mealset",meal);
    description = document.getElementById("description").value;
    localStorage.setItem("descriptionset",description);
    calories = document.getElementById("calories").value;
    localStorage.setItem("caloriesset",calories)

    dayget = localStorage.getItem("dayset");
    mealget = localStorage.getItem("mealset");
    descriptionget = localStorage.getItem("descriptionset");
    caloriesget = localStorage.getItem("caloriesset");

    $("#exampleModal").modal("hide");
    $(".modal-body input").val("");
    let dayremove = document.getElementById("day");
    dayremove.selectedIndex = 0;
    let mealremove = document.getElementById("meal");
    mealremove.selectedIndex = 0;


    if(dayget=="Sunday" && mealget=="Breakfast"){
        fieldBox("bsun");
    }
    else if(dayget=="Monday" && mealget=="Breakfast"){
        fieldBox("bmon");
    }
    else if(dayget=="Tuesday" && mealget=="Breakfast"){
        fieldBox("btue");
    }
    else if(dayget=="Wednesday" && mealget=="Breakfast"){
        fieldBox("bwed");
    }
    else if(dayget=="Thrusday" && mealget=="Breakfast"){
        fieldBox("bthr");
    }
    else if(dayget=="Friday" && mealget=="Breakfast"){
        fieldBox("bfri");
    }
    else if(dayget=="Saturday" && mealget=="Breakfast"){
        fieldBox("bsat");
    }
    else if(dayget=="Sunday" && mealget=="Lunch"){
        fieldBox("lsun");
    }
    else if(dayget=="Monday" && mealget=="Lunch"){
        fieldBox("lmon");
    }
    else if(dayget=="Tuesday" && mealget=="Lunch"){
        fieldBox("ltue");
    }
    else if(dayget=="Wednesday" && mealget=="Lunch"){
        fieldBox("lwed");
    }
    else if(dayget=="Thrusday" && mealget=="Lunch"){
        fieldBox("lthr");
    }
    else if(dayget=="Friday" && mealget=="Lunch"){
        fieldBox("lfri");
    }
    else if(dayget=="Saturday" && mealget=="Lunch"){
        fieldBox("lsat");
    }
    else if(dayget=="Sunday" && mealget=="Snacks"){
        fieldBox("ssun");
    }
    else if(dayget=="Monday" && mealget=="Snacks"){
        fieldBox("smon");
    }
    else if(dayget=="Tuesday" && mealget=="Snacks"){
        fieldBox("stue");
    }
    else if(dayget=="Wednesday" && mealget=="Snacks"){
        fieldBox("swed");
    }
    else if(dayget=="Thrusday" && mealget=="Snacks"){
        fieldBox("sthr");
    }
    else if(dayget=="Friday" && mealget=="Snacks"){
        fieldBox("sfri");
    }
    else if(dayget=="Saturday" && mealget=="Snacks"){
        fieldBox("ssat");
    }
    else if(dayget=="Sunday" && mealget=="Dinner"){
        fieldBox("dsun");
    }
    else if(dayget=="Monday" && mealget=="Dinner"){
        fieldBox("dmon");
    }
    else if(dayget=="Tuesday" && mealget=="Dinner"){
        fieldBox("dtue");
    }
    else if(dayget=="Wednesday" && mealget=="Dinner"){
        fieldBox("dwed");
    }
    else if(dayget=="Thrusday" && mealget=="Dinner"){
        fieldBox("dthr");
    }
    else if(dayget=="Friday" && mealget=="Dinner"){
        fieldBox("dfri");
    }
    else if(dayget=="Saturday" && mealget=="Dinner"){
        fieldBox("dsat");
    }
    function fieldBox(idimp){
        x = document.createElement("div");
        br = document.createElement("br");
        if(mealget=="Lunch"||mealget=="Dinner")
        {
            if(caloriesget>=500&&caloriesget<=700)
            {
                x.style.backgroundColor = "#28a745";
            }
            else if(caloriesget<500)
            {
                x.style.backgroundColor = "#ffc107";
            }
            else if(caloriesget>700)
            {
                x.style.backgroundColor = "#dc3545";
            }
        }
        else if(mealget=="Breakfast")
        {
            if(caloriesget>=300&&caloriesget<=400)
            {
                x.style.backgroundColor = "#28a745";
            }
            else if(caloriesget<300)
            {
                x.style.backgroundColor = "#ffc107";
            }
            else if(caloriesget>400)
            {
                x.style.backgroundColor = "#dc3545";
            }
        }
        else if(mealget=="Snacks")
        {
            if(caloriesget<200)
            {
                x.style.backgroundColor = "#28a745";
            }
            else
            {
                x.style.backgroundColor = "#dc3545";
            }
        }
        x.style.border = "1px solid black";
        x.style.borderRadius = "5px";
        x.style.boxSizing = "border-box";
        x.style.padding = "2px";
        x.style.height = "65px";
        t = document.createTextNode(descriptionget);
        x.appendChild(t);
        x.appendChild(br);
        t1 = document.createTextNode("Calories: "+caloriesget);
        x.appendChild(t1);
        x.style.fontSize = "0.9rem";
        document.getElementById(idimp).appendChild(x);
    }
}