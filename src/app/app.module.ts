import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreFirstGuard } from './store-first.guard';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		StoreModule,
		RouterModule.forRoot([
			{ path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
			{ path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
			{ path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
			{ path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [StoreFirstGuard] },
			{ path: "**", redirectTo: "/store" }
		])
	],
	providers: [StoreFirstGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
