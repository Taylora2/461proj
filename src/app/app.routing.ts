import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

//added 
import { CategoryListComponent } from './categoryList/category-list.component';
import { ItemListComponent } from './itemList/item-list.component';
import { ItemDetailComponent } from './itemDetail/item-detail.component';

const routes: Routes = [
    
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    
    //added
    { path: 'categories', component: CategoryListComponent },
    { path: 'itemlist', component: ItemListComponent },
    { path: 'itemdetail', component: ItemDetailComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);