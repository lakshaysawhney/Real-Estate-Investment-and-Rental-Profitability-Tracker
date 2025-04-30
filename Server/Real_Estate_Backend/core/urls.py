from django.urls import path
from . import views

urlpatterns = [
    # --- SQL Query Endpoints ---
    path('cashflow/', views.CashFlowView.as_view(), name='cashflow'),
    path('negative-cashflow/', views.NegativeCashFlowView.as_view(), name='negative-cashflow'),
    path('roe/', views.ROEView.as_view(), name='roe'),
    path('growth/', views.MarketGrowthView.as_view(), name='market-growth'),
    path('undervalued-properties/', views.UndervaluedPropertiesView.as_view(), name='undervalued-properties'),
    path('projected-value/', views.ProjectionView.as_view(), name='projection'),
    path('active-leases/', views.ActiveLeasesView.as_view(), name='active-leases'),
    path('above-market-rent/', views.AboveMarketRentView.as_view(), name='above-market-rent'),
    path('top-investors/', views.TopInvestorsView.as_view(), name='top-investors'),
    path('average-expense/', views.AverageExpenseView.as_view(), name='average-expense'),
    path('outlier-transactions/', views.OutliersView.as_view(), name='outliers'),
    path('no-rental-high-expense/', views.NoRentalHighExpenseView.as_view(), name='no-rental-high-expense'),
    path('monthly-expense/', views.MonthlyExpenseView.as_view(), name='monthly-expense'),
    path('top-months/', views.TopMonthsView.as_view(), name='top-months'),
    path('cashflow-monthly/', views.CashflowMonthlyCursorView.as_view(), name='cashflow-monthly'),

    # --- PL/SQL Endpoints ---
    path('calculate-roi/', views.CalculateROIView.as_view(), name='calculate-roi'),
    path('days-to-lease-end/', views.DaysToLeaseEndView.as_view(), name='days-to-lease-end'),
]
