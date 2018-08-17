import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //for AJAX calls
import { FormsModule } from '@angular/forms'; //for two-way binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';

import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserRemoveComponent } from './user/user-remove/user-remove.component';
import { UserService } from '@user/user.service';


import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorService } from '@vendor/vendor.service';
import { VendorRemoveComponent } from './vendor/vendor-remove/vendor-remove.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductRemoveComponent } from './product/product-remove/product-remove.component';
import { ProductService } from '@product/product.service';

import { PrListComponent } from './pr/pr-list/pr-list.component';
import { PrEditComponent } from './pr/pr-edit/pr-edit.component';
import { PrDetailComponent } from './pr/pr-detail/pr-detail.component';
import { PrCreateComponent } from './pr/pr-create/pr-create.component';
import { PrLinesComponent } from './pr/pr-lines/pr-lines.component';

import { PrliListComponent } from './prli/prli-list/prli-list.component';
import { PrliCreateComponent } from './prli/prli-create/prli-create.component';
import { PrliEditComponent } from './prli/prli-edit/prli-edit.component';
import { PrliRemoveComponent } from './prli/prli-remove/prli-remove.component';

import { PrService } from '@pr/pr.service';
import { PrliService } from '@prli/prli.service';
import { PrReviewComponent } from './pr/pr-review/pr-review.component';
import { PrReviewDetailComponent } from './pr/pr-review-detail/pr-review-detail.component';
import { UserLoginComponent } from './user/user-login/user-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,

    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    UserRemoveComponent,
   
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorRemoveComponent,
   

    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductRemoveComponent,
    
    PrListComponent,
    PrEditComponent,
    PrDetailComponent,
    PrCreateComponent,
    PrLinesComponent,

    PrliListComponent,
    PrliCreateComponent,
    PrliEditComponent,
    PrliRemoveComponent,
    PrReviewComponent,
    PrReviewDetailComponent,
    UserLoginComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, VendorService, ProductService, PrService, PrliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
