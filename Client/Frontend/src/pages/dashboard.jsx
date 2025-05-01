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
  AssignmentLate,
  PriceCheck,
  EmojiPeople,
  ReceiptLong,
  PriceChange,
  MoneyOff,
  ShowChart,
  CalendarMonth,
  Calculate,
  HourglassEmpty,
  AccountBalance,
  Warning,
  Savings,
  Timeline,
  Villa,
  Psychology,
  Stars
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

  // Color palette for cards - lighter backgrounds with better contrast
  const colorPalette = [
    {
      background: 'linear-gradient(135deg, #FFF0F2, #FFEBEE)',
      iconBg: 'rgba(255, 154, 162, 0.2)',
      hoverBg: 'linear-gradient(135deg, #FFE8EC, #FFE1E5)',
      border: '#FFCDD2',
      textColor: '#E53935'
    },
    {
      background: 'linear-gradient(135deg, #FFF3E0, #FFF8E1)',
      iconBg: 'rgba(255, 183, 178, 0.2)',
      hoverBg: 'linear-gradient(135deg, #FFECB3, #FFE0B2)',
      border: '#FFE0B2',
      textColor: '#F57C00'
    },
    {
      background: 'linear-gradient(135deg, #F1F8E9, #E8F5E9)',
      iconBg: 'rgba(220, 237, 200, 0.2)',
      hoverBg: 'linear-gradient(135deg, #DCEDC8, #C5E1A5)',
      border: '#DCEDC8',
      textColor: '#558B2F'
    },
    {
      background: 'linear-gradient(135deg, #E0F7FA, #E0F2F1)',
      iconBg: 'rgba(178, 235, 242, 0.2)',
      hoverBg: 'linear-gradient(135deg, #B2EBF2, #80DEEA)',
      border: '#B2EBF2',
      textColor: '#00897B'
    },
    {
      background: 'linear-gradient(135deg, #E8EAF6, #E3F2FD)',
      iconBg: 'rgba(197, 202, 233, 0.2)',
      hoverBg: 'linear-gradient(135deg, #C5CAE9, #90CAF9)',
      border: '#C5CAE9',
      textColor: '#303F9F'
    },
    {
      background: 'linear-gradient(135deg, #F3E5F5, #EDE7F6)',
      iconBg: 'rgba(225, 190, 231, 0.2)',
      hoverBg: 'linear-gradient(135deg, #E1BEE7, #CE93D8)',
      border: '#E1BEE7',
      textColor: '#7B1FA2'
    },
    {
      background: 'linear-gradient(135deg, #FFF9C4, #FFECB3)',
      iconBg: 'rgba(255, 249, 196, 0.2)',
      hoverBg: 'linear-gradient(135deg, #FFF59D, #FFF176)',
      border: '#FFF9C4',
      textColor: '#FBC02D'
    },
    {
      background: 'linear-gradient(135deg, #EFEBE9, #D7CCC8)',
      iconBg: 'rgba(215, 204, 200, 0.2)',
      hoverBg: 'linear-gradient(135deg, #D7CCC8, #BCAAA4)',
      border: '#D7CCC8',
      textColor: '#5D4037'
    }
  ];

  // Navigation items
  const navItems = [
    {
      title: "Cash Flow",
      description: "Cash Flow for each property",
      icon: <AccountBalance />,
      path: "/cashflow"
    },
    {
      title: "Negative Cashflow",
      description: "List properties with negative cash flow",
      icon: <MoneyOff />,
      path: "/negative-cashflow"
    },
    {
      title: "ROE",
      description: "Return on equity per property",
      icon: <Savings />,
      path: "/roe"
    },
    {
      title: "Market Growth",
      description: "Fastest growing neighborhoods",
      icon: <TrendingUp />,
      path: "/market/growth"
    },
    {
      title: "Undervalued",
      description: "List undervalued properties",
      icon: <PriceCheck />,
      path: "/market/undervalued"
    },
    {
      title: "Projection",
      description: "Projected property value in 5 years",
      icon: <Timeline />,
      path: "/market/projection"
    },
    {
      title: "Expiring Leases",
      description: "Active rentals with lease ending soon",
      icon: <AssignmentLate />,
      path: "/rentals/active-leases"
    },
    {
      title: "Above Market Rent",
      description: "Tenants paying above market rent",
      icon: <PriceChange />,
      path: "/rentals/above-market"
    },
    {
      title: "Top Investors",
      description: "Top 5 investors owning most properties",
      icon: <Stars />,
      path: "/investors/top"
    },
    {
      title: "Avg Expense",
      description: "Average expense per owner",
      icon: <ReceiptLong />,
      path: "/investors/average-expense"
    },
    {
      title: "Price Outliers",
      description: "Properties with abnormal high purchase price",
      icon: <Warning />,
      path: "/anomaly/outliers"
    },
    {
      title: "No Rent, High Expense",
      description: "Properties without rental but high expenses",
      icon: <MoneyOff />,
      path: "/anomaly/no-rental-high-expense"
    },
    {
      title: "Monthly Expense",
      description: "Total monthly expense trend",
      icon: <ShowChart />,
      path: "/trends/monthly-expense"
    },
    {
      title: "Top Months",
      description: "Top 3 most expensive months per property",
      icon: <CalendarMonth />,
      path: "/trends/top-months"
    },
    {
      title: "Calculate ROI",
      description: "Calculate ROI for given Property",
      icon: <Calculate />,
      path: "/calculate-roi"
    },
    {
      title: "Lease Days Left",
      description: "Calculate days to lease end",
      icon: <HourglassEmpty />,
      path: "/days-to-lease-end"
    },
    {
      title: "Monthly Flow",
      description: "Fetch monthly cash flow of all properties",
      icon: <AccountBalance />,
      path: "/cashflow/monthly"
    }
  ];

  // Get a color scheme for each navigation item
  const getColorIndex = (index) => index % colorPalette.length;

  return (
    <Box className="min-h-screen" sx={{
      background: 'radial-gradient(circle at top right, #F0F8FF, #FFFFFF)',
      backgroundSize: 'cover',
      py: 8
    }}>
      <Container maxWidth="lg" sx={{ maxWidth: '1280px' }}>
        {/* Header */}
        <Paper 
          elevation={3} 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: 3, 
            marginBottom: 4,
            borderRadius: 4,
            background: 'linear-gradient(to right, #3494E6, #EC6EAD)',
            boxShadow: '0 10px 20px rgba(236, 110, 173, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Background decoration */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            opacity: 0.1,
            background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '30px 30px',
            zIndex: 0
          }} />
          
          <Box 
            sx={{ 
              background: 'linear-gradient(135deg, #EC6EAD, #3494E6)', 
              width: 70, 
              height: 70, 
              borderRadius: 3, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              marginRight: 3,
              boxShadow: '0 4px 15px rgba(236, 110, 173, 0.3)',
              zIndex: 1,
              border: '4px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <Typography sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>XYZ</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, zIndex: 1 }}>
            <Typography variant="h4" component="h1" fontWeight="bold" sx={{ 
              color: 'white',
              letterSpacing: '1px',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)'
            }}>
              XYZ TRACKING
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Real Estate Analytics Dashboard
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '10px 20px',
            borderRadius: 5,
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            zIndex: 1
          }}>
            <Psychology sx={{ color: 'white', marginRight: 1, fontSize: 22 }} />
            <Typography variant="body2" sx={{ color: 'white' }}>
              Last updated: {formattedDate}
            </Typography>
          </Box>
        </Paper>

        {/* Welcome Section */}
                  <Paper 
          elevation={3} 
          sx={{ 
            padding: 4, 
            marginBottom: 4,
            borderRadius: 4,
            background: 'linear-gradient(45deg, #D6EBFF, #F0F8FF)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 10px 20px rgba(118, 218, 255, 0.2)',
            border: '1px solid #C0E0FF'
          }}
        >
          {/* Background decoration */}
          <Box sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.7
          }} />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{
              color: '#003366',
              textShadow: '1px 1px 1px rgba(255, 255, 255, 0.5)'
            }}>
              Welcome to your Dashboard
            </Typography>
            <Typography variant="h6" sx={{ color: '#004080', maxWidth: '80%', fontWeight: 500 }}>
              Access all your real estate analytics tools and reports from this central dashboard. 
              Select any of the options below to navigate to specific analytics pages.
            </Typography>
          </Box>
        </Paper>

        {/* Navigation Grid */}
        <Grid container spacing={3} sx={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 3,
          '& > .MuiGrid-item': {
            paddingTop: 0,
            paddingLeft: 0,
            display: 'flex'
          }
        }}>
          {navItems.map((item, index) => {
            const colorIndex = getColorIndex(index);
            const colorScheme = colorPalette[colorIndex];
            
            return (
              <Grid item key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Button 
                  variant="contained" 
                  onClick={() => navigate(item.path)}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: 4,
                    paddingTop: 5,
                    width: '100%',
                    height: '100%',
                    minHeight: 210,
                    borderRadius: 4,
                    textTransform: 'none',
                    background: colorScheme.background,
                    color: 'white',
                    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.07)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      background: colorScheme.hoverBg,
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
                      '& .icon-circle': {
                        transform: 'scale(1.1) translateY(-5px)',
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
                      }
                    }
                  }}
                >
                  {/* Decorative elements */}
                  <Box sx={{
                    position: 'absolute',
                    right: -30,
                    bottom: -30,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    zIndex: 0
                  }} />
                  
                  <Box sx={{
                    position: 'absolute',
                    left: -20,
                    top: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    zIndex: 0
                  }} />
                  
                  <Box 
                    className="icon-circle"
                    sx={{ 
                      background: 'rgba(255, 255, 255, 0.9)', 
                      width: 70, 
                      height: 70, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center',
                      marginBottom: 2.5,
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      zIndex: 1,
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                      '& svg': {
                        color: colorScheme.textColor,
                        fontSize: 30,
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    fontWeight="bold" 
                    align="center" 
                    sx={{ 
                      color: '#222222', 
                      zIndex: 1, 
                      mb: 1.5,
                      textShadow: '0 1px 1px rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    align="center" 
                    sx={{ 
                      zIndex: 1, 
                      maxWidth: '90%', 
                      color: '#333333',
                      fontWeight: 500,
                      lineHeight: 1.4
                    }}
                  >
                    {item.description}
                  </Typography>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}






