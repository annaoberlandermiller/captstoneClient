import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@home/home.component';
import { AboutComponent } from '@about/about.component';

import { UserListComponent } from '@user/user-list/user-list.component';
import { UserDetailComponent } from '@user/user-detail/user-detail.component';
import { UserCreateComponent } from '@user/user-create/user-create.component';
import { UserRemoveComponent } from '@user/user-remove/user-remove.component';
import { UserEditComponent } from '@user/user-edit/user-edit.component';
import { UserLoginComponent } from '@user/user-login/user-login.component';

import { VendorListComponent } from '@vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from '@vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from '@vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from '@vendor/vendor-edit/vendor-edit.component';
import { VendorRemoveComponent } from '@vendor/vendor-remove/vendor-remove.component';

import { ProductListComponent } from '@product/product-list/product-list.component';
import { ProductDetailComponent } from '@product/product-detail/product-detail.component';
import { ProductCreateComponent } from '@product/product-create/product-create.component';
import { ProductEditComponent } from '@product/product-edit/product-edit.component';
import { ProductRemoveComponent } from '@product/product-remove/product-remove.component';

import { PrListComponent } from '@pr/pr-list/pr-list.component';
import { PrDetailComponent } from '@pr/pr-detail/pr-detail.component';
import { PrCreateComponent } from '@pr/pr-create/pr-create.component';
import { PrEditComponent } from '@pr/pr-edit/pr-edit.component';
import { PrLinesComponent } from '@pr/pr-lines/pr-lines.component';
import { PrReviewComponent } from '@pr/pr-review/pr-review.component';
import { PrReviewDetailComponent } from '@pr/pr-review-detail/pr-review-detail.component';

import { PrliListComponent } from '@prli/prli-list/prli-list.component';
import { PrliCreateComponent } from '@prli/prli-create/prli-create.component';
import { PrliEditComponent } from '@prli/prli-edit/prli-edit.component';
import { PrliRemoveComponent } from '@prli/prli-remove/prli-remove.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},

  { path: 'user/list', component: UserListComponent},
  { path: 'user/detail/:id', component: UserDetailComponent}, 
  { path: 'user/edit/:id', component: UserEditComponent},
  { path: 'user/create', component: UserCreateComponent},
  { path: 'user/remove/:id', component: UserRemoveComponent},
  { path: 'user/login', component: UserLoginComponent},

  { path: 'vendor/list', component: VendorListComponent},
  { path: 'vendor/detail/:id', component: VendorDetailComponent},  
  { path: 'vendor/edit/:id', component: VendorEditComponent},
  { path: 'vendor/create', component: VendorCreateComponent},
  { path: 'vendor/remove/:id', component: VendorRemoveComponent},

  { path: 'product/list', component: ProductListComponent},
  { path: 'product/detail/:id', component: ProductDetailComponent},  
  { path: 'product/edit/:id', component: ProductEditComponent},
  { path: 'product/create', component: ProductCreateComponent},
  { path: 'product/remove/:id', component: ProductRemoveComponent},

  { path: 'pr/list', component: PrListComponent},
  { path: 'pr/detail/:id', component: PrDetailComponent},  
  { path: 'pr/edit/:id', component: PrEditComponent},
  { path: 'pr/create', component: PrCreateComponent},
  { path: 'pr/lines/:id', component: PrLinesComponent},
  { path: 'pr/review', component: PrReviewComponent},
  { path: 'pr/review-detail/:id', component: PrReviewDetailComponent},

  { path: 'prli/list', component: PrliListComponent},
  { path: 'prli/edit/:id', component: PrliEditComponent},
  { path: 'prli/create/:id', component: PrliCreateComponent},
  { path: 'prli/remove/:id', component: PrliRemoveComponent},

  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
