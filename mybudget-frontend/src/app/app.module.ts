import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { ExpenseComponent } from './components/expense/expense.component';
import { UpdateExpenseComponent } from './components/update-expense/update-expense.component';
import { IncomeComponent } from './components/income/income.component';
import { UpdateIncomeComponent } from './components/update-income/update-income.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    UpdateExpenseComponent,
    IncomeComponent,
    UpdateIncomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,

  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
