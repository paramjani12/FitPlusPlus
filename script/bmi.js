calc = document.getElementById("bmibutton");
yourbmi = document.getElementById("yourBMI");
calcyourbmi = document.getElementById("calcYourBMI");
calc.addEventListener("click",getinfo);
function getinfo(){
    weight = document.getElementById("weight").value;
    localStorage.setItem("weightset",weight);
    height = document.getElementById("height").value;
    localStorage.setItem("heightset",height);


    weightget = localStorage.getItem("weightset");
    heightget = localStorage.getItem("heightset");
    heightget = heightget/100;
    $("#bmiModal").modal("hide");
    $(".modal-body input").val("");
    bmi = (weightget/(heightget*heightget)).toFixed(2);
    
    calcyourbmi.innerHTML = 'Calculate Again';

    if(bmi<16){
        yourbmi.innerHTML = `Your BMI is ${bmi}. You Fall under Severe Thinness category. You should Gain 📈 ${((22-bmi)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
    }
    else if(bmi< 17 && bmi >= 16){
        yourbmi.innerHTML = `Your BMI is ${bmi}. You Fall under Moderate Thinness category. You should Gain 📈 ${((22-bmi)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
    }
    else if(bmi< 18.5 && bmi >= 17){
        yourbmi.innerHTML = `Your BMI is ${bmi}. You Fall under Mild Thinness category. You should Gain 📈 ${((22-bmi)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
    }
    else if(bmi< 25 && bmi >= 18.5){
        yourbmi.innerHTML = `Your BMI is ${bmi}. You Fall under Normal category. You have healthy BMI maintain it.👍` ;
    }
    else if(bmi< 30 && bmi >= 25){
        yourbmi.innerHTML = `Your BMI is ${bmi}. You Fall under Overweight category. You should lose 📉 ${((bmi-22)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
    }
    else if(bmi< 35 && bmi >= 30){
        yourbmi.innerHTML = `Your BMI is ${bmi}. You Fall under Obese Class I category. You should lose 📉 ${((bmi-22)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
    }
    else if(bmi< 40 && bmi >= 35){
        yourbmi.innerHTML = `Your BMI is ${bmi}. You Fall under Obese Class II category. You should lose 📉 ${((bmi-22)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
    }
    else if(bmi >= 40){
        yourbmi.innerHTML = `Your BMI is ${bmi}. You Fall under Obese Class III category. You should lose 📉 ${((bmi-22)*heightget*heightget).toFixed(2)} Kilogram to maintain good Health.` ;
    }
}




