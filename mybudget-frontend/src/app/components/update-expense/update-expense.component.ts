import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ExpenseService } from '../../services/expense/expense.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.scss']
})
export class UpdateExpenseComponent implements OnInit {

  expenseForm!: FormGroup;
  listOfCategory: any[] = [
    "Education",
    "Groceries",
    "Health",
    "Subscriptions",
    "Takeaways",
    "Clothing",
    "Traveling",
    "Other"
  ];

  expenses: any;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.expenseForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required],
    });

    this.getExpenseById();
  }

  getExpenseById(): void {
    this.expenseService.getExpenseById(this.id).subscribe(
      (res) => {
        this.expenseForm.patchValue(res);
      },
      (error) => {
        this.message.error("Something went wrong.", { nzDuration: 5000 });
      }
    );
  }

  submitForm(){
    this.expenseService.updateExpense(this.id, this.expenseForm.value).subscribe(res=>{
      this.message.success("Expense updated successfully", {  nzDuration: 5000});
      this.router.navigateByUrl("/expense")
    }, error=>{
      this.message.error("Error while updating expense", {  nzDuration: 5000});
    })
  }

}


