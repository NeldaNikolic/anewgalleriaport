export default function validateInfo(values) {
   let errors = {};
 
   if (!values.username.trim()) {
     errors.username = "Username required";
   }
   if (!values.email) {
     errors.email = "email required";
   } else if (!values.email) {
     errors.email = "Email address is invaild";
   }
   if (!values.password) {
     errors.password = "password is required";
   } else if (values.password.lenghth < 6) {
     errors.password = "password needs to be 6 or more characters";
   }
   if (!values.password2) {
     errors.password2 = "password is required";
   } else if (values.password2 !== values.password) {
     errors.password2 = "password needs to match";
   }
 
   return errors;
 }
 