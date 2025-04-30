import React from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { 
  Home, 
  Analytics, 
  TrendingUp, 
  AttachMoney, 
  LocationOn, 
  Bookmark, 
  Description, 
  History, 
  Event, 
  ViewInAr, 
  Notifications, 
  Calculate, 
  People, 
  Build, 
  Settings, 
  MenuBook, 
  Help 
} from '@mui/icons-material';
import '../App.css'; 
import '../index.css';

export default function Dashboard() {
  const navigate = useNavigate();

  // Current date 
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  // Stats data
  const statsData = [
    { 
      label: "Total Properties", 
      value: "4", 
      icon: <Home sx={{ color: "#8952e0" }} />,
      color: "#f0e7fe"
    },
    { 
      label: "Average Delta", 
      value: "$46.1", 
      icon: <AttachMoney sx={{ color: "#8952e0" }} />,
      color: "#f0e7fe" 
    },
    { 
      label: "Highest Delta", 
      value: "$64.5", 
      icon: <TrendingUp sx={{ color: "#8952e0" }} />,
      color: "#f0e7fe" 
    }
  ];

  // Navigation items
  const navItems = [
    {
      title: "Cash Flow",
      description: "Cash Flow for each property",
      icon: <Home />,
      path: "/cashflow"
    },
    {
      title: "Negative Cashflow",
      description: "List properties with negative cash flow",
      icon: <Analytics />,
      path: "/negative-cashflow"
    },
    {
      title: "ROE",
      description: "Return on equity per property",
      icon: <TrendingUp />,
      path: "/roe"
    },
    {
      title: "Market Growth",
      description: "Fastest growing neighborhoods",
      icon: <AttachMoney />,
      path: "/market/growth"
    },
    {
      title: "Undervalued",
      description: "List undervalued properties",
      icon: <LocationOn />,
      path: "/market/undervalued"
    },
    {
      title: "Projection",
      description: "Projected property value in 5 years",
      icon: <Bookmark />,
      path: "/market/projection"
    },
    {
      title: "Expiring Leases",
      description: "Active rentals with lease ending soon",
      icon: <Description />,
      path: "/rentals/active-leases"
    },
    {
      title: "Above Market Rent",
      description: "Tenants paying above market rent",
      icon: <History />,
      path: "/rentals/above-marke"
    },
    {
      title: "Top Investors",
      description: "Top 5 investors owning most properties",
      icon: <Event />,
      path: "/investors/top"
    },
    {
      title: "Avg Expense",
      description: "Average expense per owner",
      icon: <ViewInAr />,
      path: "/investors/average-expense"
    },
    {
      title: "Price Outliers",
      description: "Properties with abnormal high purchase price",
      icon: <Notifications />,
      path: "/anomaly/outliers"
    },
    {
      title: "No Rent, High Expense",
      description: "Properties without rental but high expenses",
      icon: <Calculate />,
      path: "/anomaly/no-rental-high-expense"
    },
    {
      title: "Monthly Expense",
      description: "Total monthly expense trend",
      icon: <People />,
      path: "/trends/monthly-expense"
    },
    {
      title: "Top Months",
      description: "Top 3 most expensive months per property",
      icon: <Build />,
      path: "/trends/top-months"
    },
    {
      title: "Calc ROI",
      description: "Calculate ROI for given Property",
      icon: <Settings />,
      path: "/roi/calculate"
    },
    {
      title: "Lease Days Left",
      description: "Calculate days to lease end",
      icon: <MenuBook />,
      path: "/lease/days-to-end"
    },
    {
      title: "Monthly Flow",
      description: "Fetch monthly cash flow of all properties",
      icon: <Help />,
      path: "/cashflow/monthly"
    }
  ];

  return (
    <Box className="min-h-screen bg-gray-100 py-8">
      <Container maxWidth="lg">
        {/* Header */}
        <Paper 
          elevation={2} 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: 3, 
            marginBottom: 3,
            borderRadius: 2
          }}
        >
          <Box 
            sx={{ 
              bgcolor: '#8952e0', 
              width: 50, 
              height: 50, 
              borderRadius: 2, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              marginRight: 2
            }}
          >
            <Grid sx={{ color: 'white', fontSize: 24 }}>XYZ</Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h1" fontWeight="bold" sx={{ color: '#8952e0' }}>
              XYZ TRACKING
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Real Estate Analytics Dashboard
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Last updated: {formattedDate}
          </Typography>
        </Paper>

        {/* Welcome Section */}
        <Paper 
          elevation={2} 
          sx={{ 
            padding: 3, 
            marginBottom: 3,
            borderRadius: 2
          }}
        >
          <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
            Welcome to your Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Access all your real estate analytics tools and reports from this central dashboard. 
            Select any of the options below to navigate to specific analytics pages.
          </Typography>
        </Paper>

        {/* Stats Row */}
        <Grid container spacing={3} sx={{ marginBottom: 3 }}>
          {statsData.map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper 
                elevation={2} 
                sx={{ 
                  padding: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: stat.color, 
                    width: 48, 
                    height: 48, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginRight: 2
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                  <Typography variant="h5" component="div" fontWeight="bold">
                    {stat.value}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Navigation Grid */}
        <Grid container spacing={3}>
          {navItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Button 
                variant="contained" 
                onClick={() => navigate(item.path)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 3,
                  width: '100%',
                  height: '100%',
                  borderRadius: 2,
                  textTransform: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                  boxShadow: 2,
                  '&:hover': {
                    backgroundColor: '#f0e7fe',
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.2s',
                    boxShadow: 4
                  }
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: '#f0e7fe', 
                    width: 56, 
                    height: 56, 
                    borderRadius: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    marginBottom: 1,
                    color: '#8952e0'
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="subtitle1" fontWeight="bold" align="center">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {item.description}
                </Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}