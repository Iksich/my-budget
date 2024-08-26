package com.Project.MyBudget.services.stats;

import com.Project.MyBudget.dto.GraphDTO;
import com.Project.MyBudget.dto.StatsDTO;
import com.Project.MyBudget.entity.Expense;
import com.Project.MyBudget.entity.Income;
import com.Project.MyBudget.repository.ExpenseRepository;
import com.Project.MyBudget.repository.IncomeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.OptionalDouble;

@Service
@RequiredArgsConstructor
public class StatsServiceImpl implements StatsService {

    private final IncomeRepository incomeRepository;
    private final ExpenseRepository expenseRepository;

    public GraphDTO getCharData() {
        LocalDate endDate = LocalDate.now();
        LocalDate startDate = endDate.minusDays(27);

        GraphDTO graphDTO = new GraphDTO();
        graphDTO.setExpenseList(expenseRepository.findByDateBetween(startDate, endDate));

        return graphDTO;
    }

    public StatsDTO getStats() {
        try {
            Double totalIncome = incomeRepository.sumAllAmounts();
            Double totalExpense = expenseRepository.sumAllAmounts();

            Optional<Income> optionalIncome = incomeRepository.findFirstByOrderByDateDesc();
            Optional<Expense> optionalExpense = expenseRepository.findFirstByOrderByDateDesc();

            StatsDTO statsDTO = new StatsDTO();
            statsDTO.setExpense(totalExpense);
            statsDTO.setIncome(totalIncome);

            optionalIncome.ifPresent(statsDTO::setLatestIncome);
            optionalExpense.ifPresent(statsDTO::setLatestExpense);

            statsDTO.setBalance(totalIncome - totalExpense);

            List<Income> incomeList = incomeRepository.findAll();
            List<Expense> expenseList = expenseRepository.findAll();

            OptionalDouble minIncome = incomeList.stream().mapToDouble(Income::getAmount).min();
            OptionalDouble maxIncome = incomeList.stream().mapToDouble(Income::getAmount).max();

            OptionalDouble minExpense = expenseList.stream().mapToDouble(Expense::getAmount).min();
            OptionalDouble maxExpense = expenseList.stream().mapToDouble(Expense::getAmount).max();

            statsDTO.setMaxExpense(maxExpense.isPresent() ? maxExpense.getAsDouble() : null);
            statsDTO.setMinExpense(minExpense.isPresent() ? minExpense.getAsDouble() : null);

            statsDTO.setMaxIncome(maxIncome.isPresent() ? maxIncome.getAsDouble() : null);
            statsDTO.setMinIncome(minIncome.isPresent() ? minIncome.getAsDouble() : null);

            return statsDTO;
        } catch (Exception e) {

            e.printStackTrace();
            throw new RuntimeException("Error fetching statistics");
        }
    }
}
