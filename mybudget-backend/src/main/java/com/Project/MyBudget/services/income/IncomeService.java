package com.Project.MyBudget.services.income;

import com.Project.MyBudget.dto.IncomeDTO;
import com.Project.MyBudget.entity.Income;

import java.util.List;

public interface IncomeService {

    Income postIncome(IncomeDTO incomeDTO);

    List<IncomeDTO> getAllIncomes();

    Income updateIncome(Long id, IncomeDTO incomeDTO);

    IncomeDTO getIncomeById(Long id);

    void deleteIncome(Long id);
}