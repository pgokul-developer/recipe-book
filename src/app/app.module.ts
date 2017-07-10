import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from "app/recipe-book/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "app/recipe-book/recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "app/recipe-book/recipe-detail/recipe-detail.component";
import { ShoppingListEditComponent } from "app/shopping-list/shopping-list-edit/shopping-list-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
