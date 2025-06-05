# Real-Estate-Investment-and-Rental-Profitability-Tracker

A full-stack DBMS-centric application designed to empower real estate investors with **data-driven insights**, **automated financial analysis**, and a robust **SQL + PL/SQL–based backend**. 
Built to demonstrate expertise in **advanced database design**, **normalization**, **SQL joins/subqueries**, and **PL/SQL programming**.

---

## 🔍 Two-fold Objective

1. **📚 DBMS-Centric Engineering**
   - Build a **fully normalized** relational schema (up to **3NF**) with an optimized **ER model**.
   - Use **only raw SQL and PL/SQL** and no ORM.
   - Implement advanced SQL joins, subqueries, grouping, and aggregations.
   - Use PL/SQL procedures, functions, triggers, and cursors for real-world financial logic.

2. **💰 Real Estate Finance Domain Exploration**
   - Model real-world entities: Investors, Properties, Rentals, Transactions, Expenses, and Market Trends.
   - Automate ROI, Cash Flow, and Market Comparisons using dynamic queries.
   - Provide actionable insights to investors through dashboards.

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|--------------------------------------|
| Backend      | Django REST Framework (no ORM)       |
| Frontend     | React.js                             |
| Database     | Oracle SQL (PL/SQL)                  |

---

## 📊 Key Features and DBMS Highlights

| Feature | Description | SQL/PLSQL Concepts Used |
|--------|-------------|--------------------------|
| **📈 Cash Flow Calculation** | Calculates monthly/annual cash flow by subtracting expenses from rent. | `LEFT JOIN`, `GROUP BY`, `NVL` |
| **📉 Negative Cash Flow Detection** | Identifies properties that are incurring losses annually. | Nested queries, conditions |
| **📊 ROI Computation (PL/SQL)** | Computes ROI using a **stored procedure** based on purchase price vs returns. | `PROCEDURE`, Aggregations |
| **📆 Days to Lease End (PL/SQL)** | Uses a **function** to calculate days left for rental lease expiration. | `FUNCTION`, `SYSDATE` |
| **📈 Outlier Transactions** | Filters unusually high transactions using `HAVING` and comparison logic. | Subqueries, statistical thresholds |
| **📍 Market Trends Matching** | Joins property location to market trend data for analytics. | `MULTI-COLUMN JOIN` |
| **🏢 Properties with Highest ROI** | Top 5 properties ranked by financial performance. | `ORDER BY`, subqueries |
| **💸 Monthly Expense Aggregation** | Total monthly expenses per property. | Aggregation + Filtering |
| **📊 PL/SQL Cursor for Cashflow** | Dynamic cursor used earlier to loop through property-wise financials. | `CURSOR`, `LOOP`, `IF` |
| **🛎️ Trigger for Transaction Log** | (Optional) Automatically logs transaction updates. | `AFTER INSERT OR UPDATE` |

---

## 🧠 ER Diagram

![ER Diagram](./screenshots/er_diagram.png)

Entities:
- **Users** (investors)
- **Properties** (real estate assets)
- **Rentals** (tenants & lease details)
- **Expenses** (tax, maintenance, etc.)
- **Transactions** (buy/sell history)
- **Market Trends** (growth data by area)

Fully normalized till **3NF**, with primary and foreign keys designed to maintain referential integrity and eliminate anomalies.

---

## Project Walkthrough 



