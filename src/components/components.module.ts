import { NgModule } from '@angular/core';
import { SettingComponent } from './setting/setting';
import { LoginComponent } from './login/login';
import { RegisterUserComponent } from './register-user/register-user';
@NgModule({
	declarations: [SettingComponent,
    LoginComponent,
    RegisterUserComponent],
	imports: [],
	exports: [
    SettingComponent,
    LoginComponent,
    RegisterUserComponent
  ]
})
export class ComponentsModule {}
