import { NgModule } from '@angular/core';
import { SettingComponent } from './setting/setting';
import { LoginComponent } from './login/login';
@NgModule({
	declarations: [SettingComponent,
    LoginComponent],
	imports: [],
	exports: [SettingComponent,
    LoginComponent]
})
export class ComponentsModule {}
