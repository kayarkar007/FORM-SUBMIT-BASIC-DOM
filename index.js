let form= document.querySelector("#form");
let arr=[];
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    let arrObj={
        userName:document.querySelector("#name").value,
        userAge:document.querySelector("#age").value,
        userGender:document.querySelector("#gender").value,
        userEmail:document.querySelector("#email").value,
        userMobile:document.querySelector("#name").value

    };
    arr.push(arrObj);
    console.log(arr)
});
