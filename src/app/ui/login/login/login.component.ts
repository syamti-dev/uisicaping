import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security/security.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm : FormGroup;

    /*username : string;
    passwd : string;
*/
    constructor(private securityService : SecurityService, private router : Router,
            private formBuilder : FormBuilder, private toastr : ToastrService) {

        console.log('Andamos por el login');
        
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            passwd: ['', Validators.required]
        });
    }

    login(){
        if(this.loginForm.valid) {
            let f : any = this.loginForm.controls;

            this.securityService.doLogin(f.username.value, f.passwd.value).subscribe( (data) => {
                console.log("Recibiendo el token");
                console.log(data);

                // Login OK
                this.router.navigate(['/dashboard']);

            }, (error) => {
                console.log(error);
            });
        }else {
            this.toastr.error("Error usuario/contraseña inválidos", "Autenticación");
        }
    }

}
