let age = 18;
let hasLicense = false;

if(age >= 16){
    console.log("You are old enough to drive");

    if(hasLicense){
        console.log("You have your license!");
    }
    else{
        console.log("You do not have your license yet!");
    }
}
else{
    console.log("You must be 16+ to have a license");
}