package com.Project.MyBudget.dto;


import com.Project.MyBudget.entity.Expense;
import com.Project.MyBudget.entity.Income;
import lombok.Data;

import java.util.List;


@Data
public class GraphDTO {

    private List<Expense> expenseList;

    private List<Income> incomeList;
}