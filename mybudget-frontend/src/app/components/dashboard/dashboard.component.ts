import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StatsService } from '../../services/stats/stats.service';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  stats: any;
  expenses: any;
  incomes: any;

  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };

  @ViewChild('incomeLineChartRef') private incomeLineChartRef!: ElementRef;
  @ViewChild('expenseLineChartRef') private expenseLineChartRef!: ElementRef;

  constructor(private statsService: StatsService) { }

  ngOnInit(): void {
    this.getStats();
    this.getChartData();
  }

  ngAfterViewInit(): void {
    this.createCharts();
  }

  createCharts() {
    if (this.incomes && this.expenses) {
      this.createIncomeLineChart();
      this.createExpenseLineChart();
    }
  }

  createIncomeLineChart() {
    const incomeCtx = this.incomeLineChartRef.nativeElement.getContext('2d');
    if (incomeCtx) {
      new Chart(incomeCtx, {
        type: 'line',
        data: {
          labels: this.incomes.map((income: { date: any; }) => income.date),
          datasets: [{
            label: 'Income',
            data: this.incomes.map((income: { amount: any; }) => income.amount),
            borderWidth: 2,
            backgroundColor: 'rgba(80, 200, 120, 0.2)',
            borderColor: 'rgb(0, 100, 0)',
            fill: true,
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Amount',
              },
              ticks: {
                callback: (value) => `$${value}`,
              },
            }
          }
        }
      });
    } else {
      console.error('Failed to get 2D context for the income chart.');
    }
  }

  createExpenseLineChart() {
    const expenseCtx = this.expenseLineChartRef.nativeElement.getContext('2d');
    if (expenseCtx) {
      new Chart(expenseCtx, {
        type: 'line',
        data: {
          labels: this.expenses.map((expense: { date: any; }) => expense.date),
          datasets: [{
            label: 'Expense',
            data: this.expenses.map((expense: { amount: any; }) => expense.amount),
            borderWidth: 2,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            fill: true,
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: false,
              },
              title: {
                display: true,
                text: 'Date',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Amount',
              },
              ticks: {
                callback: (value) => `$${value}`,
              },
            }
          }
        }
      });
    } else {
      console.error('Failed to get 2D context for the expense chart.');
    }
  }

  getStats(): void {
    this.statsService.getStats().subscribe({
      next: (res) => {
        console.log(res);
        this.stats = res;
      },
      error: (err) => {
        console.error('Error fetching stats:', err);
      }
    });
  }

  getChartData() {
    this.statsService.getChart().subscribe(res => {
      if (res.expenseList != null && res.incomeList != null) {
        this.incomes = res.incomeList;
        this.expenses = res.expenseList;
        console.log(res);

        this.createCharts();
      }
    });
  }
}



