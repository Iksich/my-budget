package com.Project.MyBudget.services.expense;

import com.Project.MyBudget.dto.ExpenseDTO;
import com.Project.MyBudget.entity.Expense;

import java.util.List;

public interface ExpenseService {

    Expense postExpense(ExpenseDTO expenseDTO);

    List<Expense> getAllExpenses();

    Expense getExpenseById(Long id);

    Expense updateExpense(Long id, ExpenseDTO expenseDTO);

    void deleteExpenseById(Long id);
}