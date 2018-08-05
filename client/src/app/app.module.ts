import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/common/login/login.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { DashboardComponent } from './components/mobile/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		MenuComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
