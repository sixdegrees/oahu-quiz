// Custom application code here

function OahuInitCallback() {
  Oahu.app.registration_fields = [
    { name : "name", type : "text", label : "Nom", required: true,  error : "Veuillez saisir votre nom" },
    { name : "email", type : "text", label : "Email", required: true, error : "Veuillez saisir votre email" },
    { name : "ville", type : "text", label : "Ville", required: true, error : "Veuillez saisir votre ville" },
  ];  
}