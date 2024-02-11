function calculateAge()
{
 const dob = document.getElementById("dob").value;
 const inputdob = new Date(dob);
 const currentdate = new Date();
 const result =  currentdate.getFullYear() - inputdob.getFullYear();
 
 document.getElementById("result").innerHTML = "your age is "+ result +" year ";
 

}