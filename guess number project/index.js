let number;
const generate_number =() =>{
    let n1=Math.ceil((Math.random())*6);
    if(n1===0)
    {
        n1=1;
    }
    number=n1;
    console.log(number);
};
// generate_number();

const generate_number_btn_click=()=>{

    document.querySelector("#section1").style.display='none';
    document.querySelector("#section2").style.display='none';
    document.querySelector("#section3").style.display='block';

    setTimeout(()=>{
        generate_number();
        document.querySelector("#section1").style.display='none';
        document.querySelector("#section2").style.display='block';
        document.querySelector("#section3").style.display='none';
    },3000);
};

//check number
const check_number=()=>{
    let values=document.querySelector("#field").value;
    if(values==number)
    {
        alert('Congrats,You won the game');
    }
    else{
        alert("OOPS!! Your Guess is wrong...");
    }
};
