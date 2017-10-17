import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CustomLoggedHeaderComponent } from './custom-logged-header/custom-logged-header';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { MessageBoxComponent } from './message-box/message-box';
import { UserInfoComponent } from './user-info/user-info';
import { UserMenuComponent } from './user-menu/user-menu';
import { ProgressBarComponent } from './progress-bar/progress-bar';

@NgModule({
	declarations: [
		CustomLoggedHeaderComponent,
		CapitalizePipe,
    MessageBoxComponent,
		UserInfoComponent,
		UserMenuComponent,
    ProgressBarComponent
	],
	imports: [IonicModule],
	exports: [
		CustomLoggedHeaderComponent,
		CapitalizePipe,
    MessageBoxComponent,
		UserInfoComponent,
		UserMenuComponent,
    ProgressBarComponent
	]
})
export class ComponentsModule {}
