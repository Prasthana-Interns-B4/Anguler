import { FormGroup } from '@angular/forms';

export function PasswordChecker (
    controlName: string,
    compareControlName: string
){
    return (formGroup:FormGroup) => {
    const password = formGroup.controls[controlName];
    const confirmPassword = formGroup.controls[compareControlName];

    if(password.value === confirmPassword.value){        
        confirmPassword.setErrors(null);        
    }else{        
        confirmPassword.setErrors({mustmatch:true});        
    }
    };
}


