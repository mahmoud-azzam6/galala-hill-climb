document.addEventListener("DOMContentLoaded",()=>{

const form=document.getElementById("quickInquiryForm");

const success=document.getElementById("formSuccess");

const interest=document.getElementById("interest");

const options=document.querySelectorAll(".interest-option");

options.forEach(option=>{

option.addEventListener("click",()=>{

options.forEach(btn=>btn.classList.remove("active"));

option.classList.add("active");

interest.value=option.dataset.value;

});

});

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

success.classList.add("show");

form.reset();

interest.value="General Inquiry";

options.forEach(btn=>btn.classList.remove("active"));

options[0].classList.add("active");

setTimeout(()=>{

success.classList.remove("show");

},4000);

});

}

});