import os
import cx_Oracle
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

conn_params = {
    "user": settings.DATABASES['default']['USER'],
    "password": settings.DATABASES['default']['PASSWORD'],
    "dsn": settings.DATABASES['default']['NAME'], 
}

QUERY_PATH = os.path.join(settings.BASE_DIR, 'core', 'queries')

def read_query(file_name):
    with open(os.path.join(QUERY_PATH, file_name), 'r') as file:
        return file.read()

# ========== SQL QUERY API VIEWS ==========

class SimpleQueryView(APIView):
    query_file = ''
    
    def get(self, request):
        try:
            conn = cx_Oracle.connect(**conn_params)
            cur = conn.cursor()
            cur.execute(read_query(self.query_file))
            columns = [col[0].lower() for col in cur.description]
            results = [dict(zip(columns, row)) for row in cur.fetchall()]
            cur.close()
            conn.close()
            return Response(results)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CashFlowView(SimpleQueryView): query_file = 'cashflow.sql'
class NegativeCashFlowView(SimpleQueryView): query_file = 'negative_cashflow.sql'
class ROEView(SimpleQueryView): query_file = 'roe.sql'
class MarketGrowthView(SimpleQueryView): query_file = 'growth.sql'
class UndervaluedPropertiesView(SimpleQueryView): query_file = 'undervalued.sql'
class ProjectionView(SimpleQueryView): query_file = 'projection.sql'
class ActiveLeasesView(SimpleQueryView): query_file = 'active_leases.sql'
class AboveMarketRentView(SimpleQueryView): query_file = 'above_market.sql'
class TopInvestorsView(SimpleQueryView): query_file = 'top_investors.sql'
class AverageExpenseView(SimpleQueryView): query_file = 'average_expense.sql'
class OutliersView(SimpleQueryView): query_file = 'outliers.sql'
class NoRentalHighExpenseView(SimpleQueryView): query_file = 'no_rental_high_expense.sql'
class MonthlyExpenseView(SimpleQueryView): query_file = 'monthly_expense.sql'
class TopMonthsView(SimpleQueryView): query_file = 'top_months.sql'
class CashflowMonthlyCursorView(SimpleQueryView): query_file = 'cashflow_monthly_cursor.sql'

# ========== PL/SQL (Procedure, Function, Cursor) Views ==========

class CalculateROIView(APIView):
    def post(self, request):
        property_id = request.data.get('property_id')
        if not property_id:
            return Response({'error': 'property_id required'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            conn = cx_Oracle.connect(**conn_params)
            cur = conn.cursor()
            roi = cur.var(cx_Oracle.NUMBER)
            cur.callproc("calculate_property_roi", [property_id, roi])
            cur.close()
            conn.close()
            return Response({"property_id": property_id, "roi": float(roi.getvalue())})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class DaysToLeaseEndView(APIView):
    def post(self, request):
        rental_id = request.data.get('rental_id')
        if not rental_id:
            return Response({'error': 'rental_id required'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            conn = cx_Oracle.connect(**conn_params)
            cur = conn.cursor()
            cur.execute("SELECT days_to_lease_end(:r_id) FROM dual", r_id=rental_id)
            result = cur.fetchone()
            cur.close()
            conn.close()
            days_remaining = int(result[0]) if result else None
            return Response({"rental_id": rental_id, "days_remaining": days_remaining})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)