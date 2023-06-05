"use strict";(self.webpackChunkmovie_time=self.webpackChunkmovie_time||[]).push([[453],{2453:(E,g,a)=>{a.r(g),a.d(g,{SignUpModule:()=>I});var f=a(4755),o=a(9401),l=a(5254),U=a(8372),y=a(4004),t=a(2223),h=a(7556),C=a(3144),v=a(1728),s=a(6012),m=a(9114),u=a(8097);let Z=(()=>{class n{constructor(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-username-pw"]],inputs:{parentFormGroup:"parentFormGroup"},decls:14,vars:1,consts:[[3,"formGroup"],["appearance","fill"],["matInput","","formControlName","username"],["matInput","","type","password","formControlName","password"]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),t._uU(3,"Username & Password"),t.qZA()(),t.TgZ(4,"mat-card-content")(5,"form",0)(6,"mat-form-field",1)(7,"mat-label"),t._uU(8,"Username"),t.qZA(),t._UZ(9,"input",2),t.qZA(),t.TgZ(10,"mat-form-field",1)(11,"mat-label"),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",3),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",r.parentFormGroup))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,s.a8,s.dn,s.dk,s.n5,m.KE,m.hX,u.Nt],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:2em auto;text-align:center}mat-form-field[_ngcontent-%COMP%]{display:block}button[_ngcontent-%COMP%]{width:90%;margin:10px}.fail-msg[_ngcontent-%COMP%]{color:red;margin:16px}"]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-key-page"]],inputs:{parentFormGroup:"parentFormGroup"},decls:10,vars:1,consts:[[1,"key-card"],[1,"key-form",3,"formGroup"],["appearance","fill"],["matInput","","formControlName","key"]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3,"Key"),t.qZA()(),t.TgZ(4,"mat-card-content")(5,"form",1)(6,"mat-form-field",2)(7,"mat-label"),t._uU(8,"Key"),t.qZA(),t._UZ(9,"input",3),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",r.parentFormGroup))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,s.a8,s.dn,s.dk,s.n5,m.KE,m.hX,u.Nt],styles:[".key-card[_ngcontent-%COMP%]{width:300px;margin:16px auto 0;background-color:#fff;padding:16px}.key-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),n})();var x=a(7665),S=a(1217);let G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-plan-page"]],inputs:{parentFormGroup:"parentFormGroup"},decls:16,vars:1,consts:[[1,"plan-card"],[1,"plan-form",3,"formGroup"],["appearance","fill"],["formControlName","plan"],["value","USER"],["value","SUPERUSER"],["value","ADMIN"]],template:function(e,r){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),t._uU(3,"Choose a plan"),t.qZA()(),t.TgZ(4,"mat-card-content")(5,"div",1)(6,"mat-form-field",2)(7,"mat-label"),t._uU(8,"Plan Type"),t.qZA(),t.TgZ(9,"mat-select",3)(10,"mat-option",4),t._uU(11,"USER"),t.qZA(),t.TgZ(12,"mat-option",5),t._uU(13,"SUPERUSER"),t.qZA(),t.TgZ(14,"mat-option",6),t._uU(15,"ADMIN"),t.qZA()()()()()()),2&e&&(t.xp6(5),t.Q6J("formGroup",r.parentFormGroup))},dependencies:[o.JJ,o.JL,o.sg,o.u,s.a8,s.dn,s.dk,s.n5,m.KE,m.hX,x.gD,S.ey],styles:[".plan-card[_ngcontent-%COMP%]{width:300px;margin:16px auto 0;background-color:#fff;padding:16px}.plan-form[_ngcontent-%COMP%]{width:300px;margin:0 auto;padding:16px}"]}),n})();function T(n,p){1&n&&(t.TgZ(0,"div",7),t._uU(1," Email already exists. Please choose a different one. "),t.qZA())}function P(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t._UZ(1,"app-username-pw",3),t.YNc(2,T,2,0,"div",4),t.TgZ(3,"div",5)(4,"button",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.nextStep())}),t._uU(5,"Next"),t.qZA()()()}if(2&n){const e=t.oxw();let r;t.xp6(1),t.Q6J("parentFormGroup",e.usernameFormGroup),t.xp6(1),t.Q6J("ngIf",null==(r=e.usernameFormGroup.get("username"))||null==r.errors?null:r.errors.emailExists),t.xp6(2),t.Q6J("disabled",!e.usernameFormGroup.valid)}}function b(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t._UZ(1,"app-key-page",3),t.TgZ(2,"div",5)(3,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.previous())}),t._uU(4,"Back"),t.qZA(),t.TgZ(5,"button",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.nextStep())}),t._uU(6,"Next"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("parentFormGroup",e.keyFormGroup),t.xp6(4),t.Q6J("disabled",!e.keyFormGroup.valid)}}function J(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t._UZ(1,"app-plan-page",3),t.TgZ(2,"div",5)(3,"button",8),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.previous())}),t._uU(4,"Back"),t.qZA(),t.TgZ(5,"button",9),t._uU(6,"Submit"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("parentFormGroup",e.planFormGroup),t.xp6(4),t.Q6J("disabled",!e.planFormGroup.valid)}}const k=[{path:"",component:(()=>{class n{constructor(e,r,i,c){this.fb=e,this.authService=r,this.http=i,this.router=c,this.step=1,this.usernameFormGroup=this.fb.group({username:["",[o.kI.required,o.kI.email],this.usernameAsyncValidator()],password:["",o.kI.required]}),this.keyFormGroup=this.fb.group({key:["",[o.kI.required,o.kI.minLength(15)]]}),this.planFormGroup=this.fb.group({plan:["",o.kI.required]})}usernameAsyncValidator(){return e=>this.authService.checkEmail(e.value).pipe((0,U.b)(1e3),(0,y.U)(i=>i?{emailExists:!0}:null))}nextStep(){console.log("proceed"),this.step++}previous(){console.log("proceed"),this.step--}onSubmit(){const e=this.usernameFormGroup.value;this.http.post("https://nest-movie-backend.onrender.com/auth-c/signup",{username:e.username,password:e.password,email:this.keyFormGroup.value.key,role:this.planFormGroup.value.plan,tmdb_key:"stringstringstr"}).subscribe({next:d=>{this.router.navigate(["/"]),console.log("Registration successful:",d)},error:d=>{this.router.navigate(["/"]),console.error("Registration failed:",d)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.qu),t.Y36(h.e),t.Y36(C.eN),t.Y36(l.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sign-up"]],decls:4,vars:3,consts:[[3,"ngSubmit"],["class","step-container",4,"ngIf"],[1,"step-container"],[3,"parentFormGroup"],["class","error-message",4,"ngIf"],[1,"button-container"],["mat-button","",3,"disabled","click"],[1,"error-message"],["mat-button","",3,"click"],["type","submit","color","primary","mat-raised-button","",3,"disabled"]],template:function(e,r){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.onSubmit()}),t.YNc(1,P,6,3,"div",1),t.YNc(2,b,7,2,"div",1),t.YNc(3,J,7,2,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",1===r.step),t.xp6(1),t.Q6J("ngIf",2===r.step),t.xp6(1),t.Q6J("ngIf",3===r.step))},dependencies:[f.O5,o._Y,o.JL,v.lW,Z,F,G],styles:[".step-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:16px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:16px}.error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:5px}"]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(k),l.Bz]}),n})();var M=a(9383),_=a(1292),N=a(430);let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.ez,A,o.UX,M.g0,v.ot,s.QW,m.lN,u.c,N.Ps,_.p9,x.LD]}),n})()}}]);