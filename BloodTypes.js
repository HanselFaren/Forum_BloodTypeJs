const canGiveBlood = (donor,receiver) =>{
    if (donor === "A+"){
        if (receiver === "A+" || receiver === "AB+"){
            console.log("True");
        }
        else{
            console.log("False");
        }
    } else if (donor === "A-"){
        if (receiver === "A+" || receiver === "A-" || receiver === "AB+" || receiver === "AB-"){
            console.log("True");
        }
        else{
            console.log("False");
        }
    } else if (donor === "B+"){
        if (receiver ==="B+" || receiver === "AB+"){
            console.log("True");
        }
        else{
            console.log("False");
        }
    } else if (donor === "B-"){
        if (receiver === "B+" || receiver === "B-" || receiver === "AB+" || receiver === "AB-"){
            console.log("True");
        }
        else{
            console.log("false");
        }
    } else if (donor === "AB+"){
        if (receiver === "AB+"){
            console.log("True");
        }
        else{
            console.log("False");
        }
    } else if (donor === "AB-"){
        if (receiver === "AB+" || receiver === "AB-"){
            console.log("True");
        }
        else{
            console.log("False");
        }
    } else if (donor === "O+"){
        if (receiver === "A+" || receiver === "B+" || receiver === "AB+" || receiver === "O+"){
            console.log("True");
        }
        else{
            console.log("False");
        }
    } else if (donor === "O-"){
        console.log("True");
    } 
}
// example :
canGiveBlood("O+","A+");
canGiveBlood("A-","B-");
canGiveBlood("A-","AB+");