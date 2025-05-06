// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import Button from '@mui/material/Button';
// // import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import Typography from '@mui/material/Typography';
// // import Grid from '@mui/material/Grid';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Paper from '@mui/material/Paper';
// // import { 
// //   Home, 
// //   Analytics, 
// //   TrendingUp, 
// //   AttachMoney, 
// //   LocationOn, 
// //   Bookmark,
// //   AssignmentLate,
// //   PriceCheck,
// //   EmojiPeople,
// //   ReceiptLong,
// //   PriceChange,
// //   MoneyOff,
// //   ShowChart,
// //   CalendarMonth,
// //   Calculate,
// //   HourglassEmpty,
// //   AccountBalance,
// //   Warning,
// //   Savings,
// //   Timeline,
// //   Villa,
// //   Psychology,
// //   Stars
// // } from '@mui/icons-material';
// // import '../App.css'; 
// // import '../index.css';

// // export default function Dashboard() {
// //   const navigate = useNavigate();

// //   // Current date 
// //   const today = new Date();
// //   const formattedDate = today.toLocaleDateString('en-US', {
// //     month: 'long',
// //     day: 'numeric',
// //     year: 'numeric'
// //   });

// //   // Color palette for cards - lighter backgrounds with better contrast
// //   const colorPalette = [
// //     {
// //       background: 'linear-gradient(135deg, #FFF0F2, #FFEBEE)',
// //       iconBg: 'rgba(255, 154, 162, 0.2)',
// //       hoverBg: 'linear-gradient(135deg, #FFE8EC, #FFE1E5)',
// //       border: '#FFCDD2',
// //       textColor: '#E53935'
// //     },
// //     {
// //       background: 'linear-gradient(135deg, #FFF3E0, #FFF8E1)',
// //       iconBg: 'rgba(255, 183, 178, 0.2)',
// //       hoverBg: 'linear-gradient(135deg, #FFECB3, #FFE0B2)',
// //       border: '#FFE0B2',
// //       textColor: '#F57C00'
// //     },
// //     {
// //       background: 'linear-gradient(135deg, #F1F8E9, #E8F5E9)',
// //       iconBg: 'rgba(220, 237, 200, 0.2)',
// //       hoverBg: 'linear-gradient(135deg, #DCEDC8, #C5E1A5)',
// //       border: '#DCEDC8',
// //       textColor: '#558B2F'
// //     },
// //     {
// //       background: 'linear-gradient(135deg, #E0F7FA, #E0F2F1)',
// //       iconBg: 'rgba(178, 235, 242, 0.2)',
// //       hoverBg: 'linear-gradient(135deg, #B2EBF2, #80DEEA)',
// //       border: '#B2EBF2',
// //       textColor: '#00897B'
// //     },
// //     {
// //       background: 'linear-gradient(135deg, #E8EAF6, #E3F2FD)',
// //       iconBg: 'rgba(197, 202, 233, 0.2)',
// //       hoverBg: 'linear-gradient(135deg, #C5CAE9, #90CAF9)',
// //       border: '#C5CAE9',
// //       textColor: '#303F9F'
// //     },
// //     {
// //       background: 'linear-gradient(135deg, #F3E5F5, #EDE7F6)',
// //       iconBg: 'rgba(225, 190, 231, 0.2)',
// //       hoverBg: 'linear-gradient(135deg, #E1BEE7, #CE93D8)',
// //       border: '#E1BEE7',
// //       textColor: '#7B1FA2'
// //     },
// //     {
// //       background: 'linear-gradient(135deg, #FFF9C4, #FFECB3)',
// //       iconBg: 'rgba(255, 249, 196, 0.2)',
// //       hoverBg: 'linear-gradient(135deg, #FFF59D, #FFF176)',
// //       border: '#FFF9C4',
// //       textColor: '#FBC02D'
// //     },
// //     {
// //       background: 'linear-gradient(135deg, #EFEBE9, #D7CCC8)',
// //       iconBg: 'rgba(215, 204, 200, 0.2)',
// //       hoverBg: 'linear-gradient(135deg, #D7CCC8, #BCAAA4)',
// //       border: '#D7CCC8',
// //       textColor: '#5D4037'
// //     }
// //   ];

// //   // Navigation items
// //   const navItems = [
// //     {
// //       title: "Cash Flow",
// //       description: "Cash Flow for each property",
// //       icon: <AccountBalance />,
// //       path: "/cashflow"
// //     },
// //     {
// //       title: "Negative Cashflow",
// //       description: "List properties with negative cash flow",
// //       icon: <MoneyOff />,
// //       path: "/negative-cashflow"
// //     },
// //     {
// //       title: "ROE",
// //       description: "Return on equity per property",
// //       icon: <Savings />,
// //       path: "/roe"
// //     },
// //     {
// //       title: "Market Growth",
// //       description: "Fastest growing neighborhoods",
// //       icon: <TrendingUp />,
// //       path: "/market/growth"
// //     },
// //     {
// //       title: "Undervalued",
// //       description: "List undervalued properties",
// //       icon: <PriceCheck />,
// //       path: "/market/undervalued"
// //     },
// //     {
// //       title: "Projection",
// //       description: "Projected property value in 5 years",
// //       icon: <Timeline />,
// //       path: "/market/projection"
// //     },
// //     {
// //       title: "Expiring Leases",
// //       description: "Active rentals with lease ending soon",
// //       icon: <AssignmentLate />,
// //       path: "/rentals/active-leases"
// //     },
// //     {
// //       title: "Above Market Rent",
// //       description: "Tenants paying above market rent",
// //       icon: <PriceChange />,
// //       path: "/rentals/above-market"
// //     },
// //     {
// //       title: "Top Investors",
// //       description: "Top 5 investors owning most properties",
// //       icon: <Stars />,
// //       path: "/investors/top"
// //     },
// //     {
// //       title: "Avg Expense",
// //       description: "Average expense per owner",
// //       icon: <ReceiptLong />,
// //       path: "/investors/average-expense"
// //     },
// //     {
// //       title: "Price Outliers",
// //       description: "Properties with abnormal high purchase price",
// //       icon: <Warning />,
// //       path: "/anomaly/outliers"
// //     },
// //     {
// //       title: "No Rent, High Expense",
// //       description: "Properties without rental but high expenses",
// //       icon: <MoneyOff />,
// //       path: "/anomaly/no-rental-high-expense"
// //     },
// //     {
// //       title: "Monthly Expense",
// //       description: "Total monthly expense trend",
// //       icon: <ShowChart />,
// //       path: "/trends/monthly-expense"
// //     },
// //     {
// //       title: "Top Months",
// //       description: "Top 3 most expensive months per property",
// //       icon: <CalendarMonth />,
// //       path: "/trends/top-months"
// //     },
// //     {
// //       title: "Calculate ROI",
// //       description: "Calculate ROI for given Property",
// //       icon: <Calculate />,
// //       path: "/calculate-roi"
// //     },
// //     {
// //       title: "Lease Days Left",
// //       description: "Calculate days to lease end",
// //       icon: <HourglassEmpty />,
// //       path: "/days-to-lease-end"
// //     },
// //     {
// //       title: "Monthly Flow",
// //       description: "Fetch monthly cash flow of all properties",
// //       icon: <AccountBalance />,
// //       path: "/cashflow/monthly"
// //     }
// //   ];

// //   // Get a color scheme for each navigation item
// //   const getColorIndex = (index) => index % colorPalette.length;

// //   return (
// //     <Box className="min-h-screen" sx={{
// //       background: 'radial-gradient(circle at top right, #F0F8FF, #FFFFFF)',
// //       backgroundSize: 'cover',
// //       py: 8
// //     }}>
// //       <Container maxWidth="lg" sx={{ maxWidth: '1280px' }}>
// //         {/* Header */}
// //         <Paper 
// //           elevation={3} 
// //           sx={{ 
// //             display: 'flex', 
// //             alignItems: 'center', 
// //             padding: 3, 
// //             marginBottom: 4,
// //             borderRadius: 4,
// //             background: 'linear-gradient(to right, #3494E6, #EC6EAD)',
// //             boxShadow: '0 10px 20px rgba(236, 110, 173, 0.2)',
// //             position: 'relative',
// //             overflow: 'hidden'
// //           }}
// //         >
// //           {/* Background decoration */}
// //           <Box sx={{
// //             position: 'absolute',
// //             top: 0,
// //             right: 0,
// //             width: '100%',
// //             height: '100%',
// //             opacity: 0.1,
// //             background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
// //             backgroundSize: '30px 30px',
// //             zIndex: 0
// //           }} />
          
// //           <Box 
// //             sx={{ 
// //               background: 'linear-gradient(135deg, #EC6EAD, #3494E6)', 
// //               width: 70, 
// //               height: 70, 
// //               borderRadius: 3, 
// //               display: 'flex', 
// //               justifyContent: 'center', 
// //               alignItems: 'center',
// //               marginRight: 3,
// //               boxShadow: '0 4px 15px rgba(236, 110, 173, 0.3)',
// //               zIndex: 1,
// //               border: '4px solid rgba(255, 255, 255, 0.3)'
// //             }}
// //           >
// //             <Typography sx={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>PTrack</Typography>
// //           </Box>
// //           <Box sx={{ flexGrow: 1, zIndex: 1 }}>
// //             <Typography variant="h4" component="h1" fontWeight="bold" sx={{ 
// //               color: 'white',
// //               letterSpacing: '1px',
// //               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)'
// //             }}>
// //               PropTrack
// //             </Typography>
// //             <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
// //                 Real Estate Investment and Rental Profitability Tracker
// //             </Typography>
// //           </Box>
// //           <Box sx={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             background: 'rgba(255, 255, 255, 0.2)',
// //             padding: '10px 20px',
// //             borderRadius: 5,
// //             backdropFilter: 'blur(5px)',
// //             border: '1px solid rgba(255, 255, 255, 0.3)',
// //             zIndex: 1
// //           }}>
// //             <Psychology sx={{ color: 'white', marginRight: 1, fontSize: 22 }} />
// //             <Typography variant="body2" sx={{ color: 'white' }}>
// //               Last updated: {formattedDate}
// //             </Typography>
// //           </Box>
// //         </Paper>

// //         {/* Welcome Section */}
// //                   <Paper 
// //           elevation={3} 
// //           sx={{ 
// //             padding: 4, 
// //             marginBottom: 4,
// //             borderRadius: 4,
// //             background: 'linear-gradient(45deg, #D6EBFF, #F0F8FF)',
// //             position: 'relative',
// //             overflow: 'hidden',
// //             boxShadow: '0 10px 20px rgba(118, 218, 255, 0.2)',
// //             border: '1px solid #C0E0FF'
// //           }}
// //         >
// //           {/* Background decoration */}
// //           <Box sx={{
// //             position: 'absolute',
// //             left: 0,
// //             top: 0,
// //             width: '100%',
// //             height: '100%',
// //             background: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
// //             opacity: 0.7
// //           }} />
          
// //           <Box sx={{ position: 'relative', zIndex: 1 }}>
// //             <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom sx={{
// //               color: '#003366',
// //               textShadow: '1px 1px 1px rgba(255, 255, 255, 0.5)'
// //             }}>
// //               Welcome to your Dashboard
// //             </Typography>
// //             <Typography variant="h6" sx={{ color: '#004080', maxWidth: '80%', fontWeight: 500 }}>
// //               Access all your real estate analytics tools and reports from this central dashboard. 
// //               Select any of the options below to navigate to specific analytics pages.
// //             </Typography>
// //           </Box>
// //         </Paper>

// //         {/* Navigation Grid */}
// //         <Grid container spacing={3} sx={{ 
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
// //           gap: 3,
// //           '& > .MuiGrid-item': {
// //             paddingTop: 0,
// //             paddingLeft: 0,
// //             display: 'flex'
// //           }
// //         }}>
// //           {navItems.map((item, index) => {
// //             const colorIndex = getColorIndex(index);
// //             const colorScheme = colorPalette[colorIndex];
            
// //             return (
// //               <Grid item key={index} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
// //                 <Button 
// //                   variant="contained" 
// //                   onClick={() => navigate(item.path)}
// //                   sx={{
// //                     display: 'flex',
// //                     flexDirection: 'column',
// //                     alignItems: 'center',
// //                     justifyContent: 'flex-start',
// //                     padding: 4,
// //                     paddingTop: 5,
// //                     width: '100%',
// //                     height: '100%',
// //                     minHeight: 210,
// //                     borderRadius: 4,
// //                     textTransform: 'none',
// //                     background: colorScheme.background,
// //                     color: 'white',
// //                     boxShadow: '0 10px 15px rgba(0, 0, 0, 0.07)',
// //                     position: 'relative',
// //                     overflow: 'hidden',
// //                     transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// //                     '&:hover': {
// //                       background: colorScheme.hoverBg,
// //                       transform: 'translateY(-8px) scale(1.02)',
// //                       boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
// //                       '& .icon-circle': {
// //                         transform: 'scale(1.1) translateY(-5px)',
// //                         boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
// //                       }
// //                     }
// //                   }}
// //                 >
// //                   {/* Decorative elements */}
// //                   <Box sx={{
// //                     position: 'absolute',
// //                     right: -30,
// //                     bottom: -30,
// //                     width: 120,
// //                     height: 120,
// //                     borderRadius: '50%',
// //                     background: 'rgba(255, 255, 255, 0.1)',
// //                     zIndex: 0
// //                   }} />
                  
// //                   <Box sx={{
// //                     position: 'absolute',
// //                     left: -20,
// //                     top: -20,
// //                     width: 80,
// //                     height: 80,
// //                     borderRadius: '50%',
// //                     background: 'rgba(255, 255, 255, 0.1)',
// //                     zIndex: 0
// //                   }} />
                  
// //                   <Box 
// //                     className="icon-circle"
// //                     sx={{ 
// //                       background: 'rgba(255, 255, 255, 0.9)', 
// //                       width: 70, 
// //                       height: 70, 
// //                       borderRadius: '50%', 
// //                       display: 'flex', 
// //                       justifyContent: 'center', 
// //                       alignItems: 'center',
// //                       marginBottom: 2.5,
// //                       transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// //                       zIndex: 1,
// //                       boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
// //                       '& svg': {
// //                         color: colorScheme.textColor,
// //                         fontSize: 30,
// //                         transition: 'all 0.3s ease'
// //                       }
// //                     }}
// //                   >
// //                     {item.icon}
// //                   </Box>
// //                   <Typography 
// //                     variant="h6" 
// //                     fontWeight="bold" 
// //                     align="center" 
// //                     sx={{ 
// //                       color: '#222222', 
// //                       zIndex: 1, 
// //                       mb: 1.5,
// //                       textShadow: '0 1px 1px rgba(255, 255, 255, 0.5)'
// //                     }}
// //                   >
// //                     {item.title}
// //                   </Typography>
// //                   <Typography 
// //                     variant="body2" 
// //                     align="center" 
// //                     sx={{ 
// //                       zIndex: 1, 
// //                       maxWidth: '90%', 
// //                       color: '#333333',
// //                       fontWeight: 500,
// //                       lineHeight: 1.4
// //                     }}
// //                   >
// //                     {item.description}
// //                   </Typography>
// //                 </Button>
// //               </Grid>
// //             );
// //           })}
// //         </Grid>
// //       </Container>
// //     </Box>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import '../App.css'; 
// import '../index.css';

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const [hoverCard, setHoverCard] = useState(null);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   // Update time every minute
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000);
//     return () => clearInterval(timer);
//   }, []);

//   // Current date formatting
//   const formattedDate = currentTime.toLocaleDateString('en-US', {
//     month: 'long',
//     day: 'numeric',
//     year: 'numeric'
//   });

//   const formattedTime = currentTime.toLocaleTimeString('en-US', {
//     hour: '2-digit',
//     minute: '2-digit'
//   });

//   // Color palette for cards - maintaining same colors
//   const colorPalette = [
//     {
//       background: 'linear-gradient(135deg, #FFF0F2, #FFEBEE)',
//       iconBg: 'rgba(255, 154, 162, 0.2)',
//       border: '#FFCDD2',
//       textColor: '#E53935'
//     },
//     {
//       background: 'linear-gradient(135deg, #FFF3E0, #FFF8E1)',
//       iconBg: 'rgba(255, 183, 178, 0.2)',
//       border: '#FFE0B2',
//       textColor: '#F57C00'
//     },
//     {
//       background: 'linear-gradient(135deg, #F1F8E9, #E8F5E9)',
//       iconBg: 'rgba(220, 237, 200, 0.2)',
//       border: '#DCEDC8',
//       textColor: '#558B2F'
//     },
//     {
//       background: 'linear-gradient(135deg, #E0F7FA, #E0F2F1)',
//       iconBg: 'rgba(178, 235, 242, 0.2)',
//       border: '#B2EBF2',
//       textColor: '#00897B'
//     },
//     {
//       background: 'linear-gradient(135deg, #E8EAF6, #E3F2FD)',
//       iconBg: 'rgba(197, 202, 233, 0.2)',
//       border: '#C5CAE9',
//       textColor: '#303F9F'
//     },
//     {
//       background: 'linear-gradient(135deg, #F3E5F5, #EDE7F6)',
//       iconBg: 'rgba(225, 190, 231, 0.2)',
//       border: '#E1BEE7',
//       textColor: '#7B1FA2'
//     },
//     {
//       background: 'linear-gradient(135deg, #FFF9C4, #FFECB3)',
//       iconBg: 'rgba(255, 249, 196, 0.2)',
//       border: '#FFF9C4',
//       textColor: '#FBC02D'
//     },
//     {
//       background: 'linear-gradient(135deg, #EFEBE9, #D7CCC8)',
//       iconBg: 'rgba(215, 204, 200, 0.2)',
//       border: '#D7CCC8',
//       textColor: '#5D4037'
//     }
//   ];

//   // Navigation items with their icons as SVG for more customization
//   const navItems = [
//     {
//       title: "Cash Flow",
//       description: "Cash Flow for each property",
//       iconPath: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm3 3l-4 4-2-2-1.414 1.414L10 14.828l5.414-5.414L15 7z",
//       path: "/cashflow",
//       category: "finance"
//     },
//     {
//       title: "Negative Cashflow",
//       description: "List properties with negative cash flow",
//       iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-4H8v-2h8v2zm-8-3h8v-2H8v2zm2-3h4V6h-4v4z",
//       path: "/negative-cashflow",
//       category: "finance"
//     },
//     {
//       title: "ROE",
//       description: "Return on equity per property",
//       iconPath: "M4 18h16V6H4v12zm9-10h5v2h-5V8zm0 3h5v2h-5v-2zm0 3h5v2h-5v-2zM6 8h6v6H6V8z",
//       path: "/roe",
//       category: "finance"
//     },
//     {
//       title: "Market Growth",
//       description: "Fastest growing neighborhoods",
//       iconPath: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
//       path: "/market/growth",
//       category: "market"
//     },
//     {
//       title: "Undervalued",
//       description: "List undervalued properties",
//       iconPath: "M21 3H3v18h18V3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
//       path: "/market/undervalued",
//       category: "market"
//     },
//     {
//       title: "Projection",
//       description: "Projected property value in 5 years",
//       iconPath: "M13.5 13.48l4-5.33 1.5 2v-6h-6l2 1.5-4 5.33-1.5-2v6h6z",
//       path: "/market/projection",
//       category: "market"
//     },
//     {
//       title: "Expiring Leases",
//       description: "Active rentals with lease ending soon",
//       iconPath: "M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z",
//       path: "/rentals/active-leases",
//       category: "rental"
//     },
//     {
//       title: "Above Market Rent",
//       description: "Tenants paying above market rent",
//       iconPath: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
//       path: "/rentals/above-market",
//       category: "rental"
//     },
//     {
//       title: "Top Investors",
//       description: "Top 5 investors owning most properties",
//       iconPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
//       path: "/investors/top",
//       category: "investor"
//     },
//     {
//       title: "Avg Expense",
//       description: "Average expense per owner",
//       iconPath: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
//       path: "/investors/average-expense",
//       category: "investor"
//     },
//     {
//       title: "Price Outliers",
//       description: "Properties with abnormal high purchase price",
//       iconPath: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
//       path: "/anomaly/outliers",
//       category: "anomaly"
//     },
//     {
//       title: "No Rent, High Expense",
//       description: "Properties without rental but high expenses",
//       iconPath: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
//       path: "/anomaly/no-rental-high-expense",
//       category: "anomaly"
//     },
//     {
//       title: "Monthly Expense",
//       description: "Total monthly expense trend",
//       iconPath: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
//       path: "/trends/monthly-expense",
//       category: "trends"
//     },
//     {
//       title: "Top Months",
//       description: "Top 3 most expensive months per property",
//       iconPath: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z",
//       path: "/trends/top-months",
//       category: "trends"
//     },
//     {
//       title: "Calculate ROI",
//       description: "Calculate ROI for given Property",
//       iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 9l1.06 1.06-1.06 1.06-2.12-2.12 1.06-1.06zm-4.12 0l1.06 1.06-2.12 2.12-1.06-1.06L7.91 9l1-1.06zm9.08 9.94H5.99v-1.99h12v1.99z",
//       path: "/calculate-roi",
//       category: "calculator"
//     },
//     {
//       title: "Lease Days Left",
//       description: "Calculate days to lease end",
//       iconPath: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
//       path: "/days-to-lease-end",
//       category: "calculator"
//     },
//     {
//       title: "Monthly Flow",
//       description: "Fetch monthly cash flow of all properties",
//       iconPath: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8z",
//       path: "/cashflow/monthly",
//       category: "finance"
//     }
//   ];

//   // Get a color scheme for each navigation item
//   const getColorIndex = (index) => index % colorPalette.length;

//   // Group items by category
//   const groupedItems = navItems.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   // Category display names and icons
//   const categoryInfo = {
//     finance: {
//       name: "Financial Analysis",
//       icon: "M4 10h3v7H4zM10.5 10h3v7h-3zM17 10h3v7h-3zM2 19h20v3H2zM2 5h20v3H2z"
//     },
//     market: {
//       name: "Market Analysis",
//       icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"
//     },
//     rental: {
//       name: "Rental Management",
//       icon: "M4 6h16v2H4zM4 9h16v2H4zM4 12h16v2H4zM4 15h16v2H4z"
//     },
//     investor: {
//       name: "Investor Insights",
//       icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"
//     },
//     anomaly: {
//       name: "Anomaly Detection",
//       icon: "M1 21h22L12 2 1 21z"
//     },
//     trends: {
//       name: "Market Trends",
//       icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"
//     },
//     calculator: {
//       name: "Calculators",
//       icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.44 3.53c.29-.29.77-.29 1.06 0l.88.88.88-.88c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.88.88.88.88c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-.88-.88-.88.88c-.29.29-.77.29-1.06 0-.29-.29-.29-.77 0-1.06l.88-.88-.88-.88c-.29-.29-.29-.77 0-1.06zM7 7.72h3.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM7 11h3.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75S6.59 11 7 11zm0 3.28h3.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z"
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Curvy top decoration */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden h-24 z-0">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
//           <path fill="#3494E6" fillOpacity="0.2" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         </svg>
//       </div>

//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-blue-600 to-purple-500 z-10 flex flex-col items-center py-8 shadow-xl"> 
//         {/* Logo */}
//         <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg mb-8">
//           <span className="text-blue-600 font-bold text-xl">P</span>
//         </div>

//         {/* Weather Display */}
//         <div className="flex flex-col items-center mb-6">
//           {/* Weather Icon */}
//           <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mb-2">
//             <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
//               <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z" />
//             </svg>
//           </div>

//           {/* Temperature */}
//           <div className="text-white text-lg font-bold">35°</div>
//           <div className="text-white text-xs">Sunny</div>
//           <div className="text-white text-xs opacity-70">India</div>
//         </div>

//         {/* Divider */}
//         <div className="w-10 h-px bg-white opacity-30 my-4"></div>

//         {/* Temperature Range */}
//         <div className="flex flex-col items-center mb-6">
//           <div className="flex items-center justify-between w-full px-2 mb-1">
//             <div className="text-white text-xs">H:</div>
//             <div className="text-white text-xs">34°</div>
//           </div>
//           <div className="flex items-center justify-between w-full px-2">
//             <div className="text-white text-xs">L:</div>
//             <div className="text-white text-xs">24°</div>
//           </div>
//         </div>

//         {/* Weather Forecast Mini */}
//         <div className="mt-auto flex flex-col items-center space-y-3 mb-4">
//           <div className="flex flex-col items-center">
//             <div className="text-white text-xs opacity-70">Thu</div>
//             <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
//               <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
//             </svg>
//             <div className="text-white text-xs">36°</div>
//           </div>

//           <div className="flex flex-col items-center">
//             <div className="text-white text-xs opacity-70">Fri</div>
//             <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
//               <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1z" />
//             </svg>
//             <div className="text-white text-xs">36°</div>
//           </div>
//         </div>
//       </div>



//       {/* Main Content */}
//       <div className="pl-28 pr-8 py-6">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8 mt-4">
//           <div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
//               PropTrack
//             </h1>
//             <p className="text-gray-600">Real Estate Investment and Rental Profitability Tracker</p>
//           </div>
          
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2 bg-white p-3 rounded-full shadow-md">
//               <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
//                 <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
//               </svg>
//               <div>
//                 <div className="text-sm font-bold text-gray-800">{formattedTime}</div>
//                 <div className="text-xs text-gray-500">{formattedDate}</div>
//               </div>
//             </div>
            
//             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
//               PT
//             </div>
//           </div>
//         </div>

//         {/* Floating welcome message */}
//         <div className="relative bg-white rounded-2xl shadow-xl p-6 mb-10 overflow-hidden z-0">
//           {/* Decorative elements */}
//           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
//           <div className="absolute top-10 right-20 w-16 h-16 bg-purple-50 rounded-full opacity-50"></div>
//           <div className="absolute top-16 left-40 w-24 h-24 bg-yellow-50 rounded-full opacity-50"></div>
          
//           <div className="relative z-10">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to your Dashboard</h2>
//             <p className="text-gray-600 max-w-3xl">
//               Access all your real estate analytics tools and reports from this central dashboard.
//               Select any of the options below to navigate to specific analytics pages.
//             </p>
//           </div>
//         </div>

//         {/* Categories and cards */}
//         {Object.keys(groupedItems).map((category, catIndex) => (
//           <div key={category} className="mb-12">
//             <div className="flex items-center mb-5">
//               <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
//                 <svg 
//                   viewBox="0 0 24 24" 
//                   className="w-6 h-6 text-blue-600"
//                   fill="currentColor"
//                 >
//                   <path d={categoryInfo[category].icon} />
//                 </svg>
//               </div>
//               <h2 className="text-xl font-bold text-gray-800">{categoryInfo[category].name}</h2>
//               <div className="ml-3 px-2 py-1 bg-blue-100 rounded-full text-xs font-semibold text-blue-600">
//                 {groupedItems[category].length}
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
//               {groupedItems[category].map((item, index) => {
//                 const colorIndex = getColorIndex(catIndex + index);
//                 const colorScheme = colorPalette[colorIndex];
                
//                 return (
//                   <div 
//                     key={item.title}
//                     className="relative cursor-pointer overflow-hidden transition-all duration-500"
//                     onMouseEnter={() => setHoverCard(`${category}-${index}`)}
//                     onMouseLeave={() => setHoverCard(null)}
//                     onClick={() => navigate(item.path)}
//                   >
//                     <div 
//                       className="rounded-xl p-5 h-full transition-all duration-500 transform"
//                       style={{ 
//                         background: colorScheme.background,
//                         borderLeft: `4px solid ${colorScheme.textColor}`,
//                         transform: hoverCard === `${category}-${index}` ? 'translateY(-5px)' : 'none',
//                         boxShadow: hoverCard === `${category}-${index}` ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                       }}
//                     >
//                       <div className="flex items-start">
//                         <div 
//                           className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-all duration-500"
//                           style={{ 
//                             backgroundColor: hoverCard === `${category}-${index}` ? colorScheme.textColor : 'white',
//                             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                           }}
//                         >
//                           <svg 
//                             viewBox="0 0 24 24" 
//                             className="w-5 h-5 transition-all duration-500"
//                             style={{ 
//                               fill: hoverCard === `${category}-${index}` ? 'white' : colorScheme.textColor
//                             }}
//                           >
//                             <path d={item.iconPath} />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="font-bold text-gray-800">{item.title}</h3>
//                           <p className="text-sm text-gray-600 mt-1">{item.description}</p>
//                         </div>
//                       </div>
                      
//                       {/* Progress line animation on hover */}
//                       <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
//                         <div 
//                           className="h-full transition-all duration-700 ease-out"
//                           style={{ 
//                             width: hoverCard === `${category}-${index}` ? '100%' : '0%',
//                             backgroundColor: colorScheme.textColor
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}

//         {/* Floating data counter */}
//         <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-xl p-4 flex space-x-8 z-20">
//           <div className="text-center">
//             <div className="text-xs text-gray-500 mb-1">Properties</div>
//             <div className="text-2xl font-bold text-blue-600">5</div>
//           </div>
//           <div className="text-center">
//             <div className="text-xs text-gray-500 mb-1">Investors</div>
//             <div className="text-2xl font-bold text-purple-600">5</div>
//           </div>
//           <div className="text-center">
//             <div className="text-xs text-gray-500 mb-1">Transactions</div>
//             <div className="text-2xl font-bold text-green-600">4</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'; 
import '../index.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const [hoverCard, setHoverCard] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Current date formatting
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  // Color palette for cards - maintaining same colors
  const colorPalette = [
    {
      background: 'linear-gradient(135deg, #FFF0F2, #FFEBEE)',
      iconBg: 'rgba(255, 154, 162, 0.2)',
      border: '#FFCDD2',
      textColor: '#E53935'
    },
    {
      background: 'linear-gradient(135deg, #FFF3E0, #FFF8E1)',
      iconBg: 'rgba(255, 183, 178, 0.2)',
      border: '#FFE0B2',
      textColor: '#F57C00'
    },
    {
      background: 'linear-gradient(135deg, #F1F8E9, #E8F5E9)',
      iconBg: 'rgba(220, 237, 200, 0.2)',
      border: '#DCEDC8',
      textColor: '#558B2F'
    },
    {
      background: 'linear-gradient(135deg, #E0F7FA, #E0F2F1)',
      iconBg: 'rgba(178, 235, 242, 0.2)',
      border: '#B2EBF2',
      textColor: '#00897B'
    },
    {
      background: 'linear-gradient(135deg, #E8EAF6, #E3F2FD)',
      iconBg: 'rgba(197, 202, 233, 0.2)',
      border: '#C5CAE9',
      textColor: '#303F9F'
    },
    {
      background: 'linear-gradient(135deg, #F3E5F5, #EDE7F6)',
      iconBg: 'rgba(225, 190, 231, 0.2)',
      border: '#E1BEE7',
      textColor: '#7B1FA2'
    },
    {
      background: 'linear-gradient(135deg, #FFF9C4, #FFECB3)',
      iconBg: 'rgba(255, 249, 196, 0.2)',
      border: '#FFF9C4',
      textColor: '#FBC02D'
    },
    {
      background: 'linear-gradient(135deg, #EFEBE9, #D7CCC8)',
      iconBg: 'rgba(215, 204, 200, 0.2)',
      border: '#D7CCC8',
      textColor: '#5D4037'
    }
  ];

  // Navigation items with their icons as SVG for more customization
  const navItems = [
    {
      title: "Cash Flow",
      description: "Cash Flow for each property",
      iconPath: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm3 3l-4 4-2-2-1.414 1.414L10 14.828l5.414-5.414L15 7z",
      path: "/cashflow",
      category: "finance"
    },
    {
      title: "Negative Cashflow",
      description: "List properties with negative cash flow",
      iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-4H8v-2h8v2zm-8-3h8v-2H8v2zm2-3h4V6h-4v4z",
      path: "/negative-cashflow",
      category: "finance"
    },
    {
      title: "ROE",
      description: "Return on equity per property",
      iconPath: "M4 18h16V6H4v12zm9-10h5v2h-5V8zm0 3h5v2h-5v-2zm0 3h5v2h-5v-2zM6 8h6v6H6V8z",
      path: "/roe",
      category: "finance"
    },
    {
      title: "Market Growth",
      description: "Fastest growing neighborhoods",
      iconPath: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
      path: "/market/growth",
      category: "market"
    },
    {
      title: "Undervalued",
      description: "List undervalued properties",
      iconPath: "M21 3H3v18h18V3zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
      path: "/market/undervalued",
      category: "market"
    },
    {
      title: "Projection",
      description: "Projected property value in 5 years",
      iconPath: "M13.5 13.48l4-5.33 1.5 2v-6h-6l2 1.5-4 5.33-1.5-2v6h6z",
      path: "/market/projection",
      category: "market"
    },
    {
      title: "Expiring Leases",
      description: "Active rentals with lease ending soon",
      iconPath: "M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z",
      path: "/rentals/active-leases",
      category: "rental"
    },
    {
      title: "Above Market Rent",
      description: "Tenants paying above market rent",
      iconPath: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
      path: "/rentals/above-market",
      category: "rental"
    },
    {
      title: "Top Investors",
      description: "Top 5 investors owning most properties",
      iconPath: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
      path: "/investors/top",
      category: "investor"
    },
    {
      title: "Avg Expense",
      description: "Average expense per owner",
      iconPath: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
      path: "/investors/average-expense",
      category: "investor"
    },
    {
      title: "Price Outliers",
      description: "Properties with abnormal high purchase price",
      iconPath: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z",
      path: "/anomaly/outliers",
      category: "anomaly"
    },
    {
      title: "No Rent, High Expense",
      description: "Properties without rental but high expenses",
      iconPath: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
      path: "/anomaly/no-rental-high-expense",
      category: "anomaly"
    },
    {
      title: "Monthly Expense",
      description: "Total monthly expense trend",
      iconPath: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
      path: "/trends/monthly-expense",
      category: "trends"
    },
    {
      title: "Top Months",
      description: "Top 3 most expensive months per property",
      iconPath: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z",
      path: "/trends/top-months",
      category: "trends"
    },
    {
      title: "Calculate ROI",
      description: "Calculate ROI for given Property",
      iconPath: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 9l1.06 1.06-1.06 1.06-2.12-2.12 1.06-1.06zm-4.12 0l1.06 1.06-2.12 2.12-1.06-1.06L7.91 9l1-1.06zm9.08 9.94H5.99v-1.99h12v1.99z",
      path: "/calculate-roi",
      category: "calculator"
    },
    {
      title: "Lease Days Left",
      description: "Calculate days to lease end",
      iconPath: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
      path: "/days-to-lease-end",
      category: "calculator"
    },
    {
      title: "Monthly Flow",
      description: "Fetch monthly cash flow of all properties",
      iconPath: "M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8z",
      path: "/cashflow/monthly",
      category: "finance"
    },
    {
      title: "Users",
      description: "View and manage all users",
      iconPath: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
      path: "/showUsers",
      category: "admin"
    },
    {
      title: "Properties",
      description: "Manage all properties in the system",
      iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
      path: "/showProperties",
      category: "admin"
    },
    {
      title: "Rentals",
      description: "Manage all rental agreements",
      iconPath: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",
      path: "/showRentals",
      category: "admin"
    },
    {
      title: "Expenses",
      description: "Track and manage property expenses",
      iconPath: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
      path: "/showExpenses",
      category: "admin"
    },
    {
      title: "Transactions",
      description: "View all financial transactions",
      iconPath: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
      path: "/showTransactions",
      category: "admin"
    },
    {
      title: "Market Trends",
      description: "View real estate market trends",
      iconPath: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
      path: "/showMarketTrends",
      category: "admin"
    }
  ];

  // Get a color scheme for each navigation item
  const getColorIndex = (index) => index % colorPalette.length;

  // Group items by category
  const groupedItems = navItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Category display names and icons
  const categoryInfo = {
    finance: {
      name: "Financial Analysis",
      icon: "M4 10h3v7H4zM10.5 10h3v7h-3zM17 10h3v7h-3zM2 19h20v3H2zM2 5h20v3H2z"
    },
    market: {
      name: "Market Analysis",
      icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"
    },
    rental: {
      name: "Rental Management",
      icon: "M4 6h16v2H4zM4 9h16v2H4zM4 12h16v2H4zM4 15h16v2H4z"
    },
    investor: {
      name: "Investor Insights",
      icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"
    },
    anomaly: {
      name: "Anomaly Detection",
      icon: "M1 21h22L12 2 1 21z"
    },
    trends: {
      name: "Market Trends",
      icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"
    },
    calculator: {
      name: "Calculators",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.44 3.53c.29-.29.77-.29 1.06 0l.88.88.88-.88c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.88.88.88.88c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-.88-.88-.88.88c-.29.29-.77.29-1.06 0-.29-.29-.29-.77 0-1.06l.88-.88-.88-.88c-.29-.29-.29-.77 0-1.06zM7 7.72h3.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM7 11h3.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75S6.59 11 7 11zm0 3.28h3.5c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z"
    },
    admin: {
      name: "Administration",
      icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Curvy top decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-24 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#3494E6" fillOpacity="0.2" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-blue-600 to-purple-500 z-10 flex flex-col items-center py-8 shadow-xl"> 
        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg mb-8">
          <span className="text-blue-600 font-bold text-xl">P</span>
        </div>

        {/* Weather Display */}
        <div className="flex flex-col items-center mb-6">
          {/* Weather Icon */}
          <div className="bg-white bg-opacity-20 w-12 h-12 rounded-full flex items-center justify-center mb-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z" />
            </svg>
          </div>

          {/* Temperature */}
          <div className="text-white text-lg font-bold">33°</div>
          <div className="text-white text-xs">Sunny</div>
          <div className="text-white text-xs opacity-70">India</div>
        </div>

        {/* Divider */}
        <div className="w-10 h-px bg-white opacity-30 my-4"></div>

        {/* Temperature Range */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center justify-between w-full px-2 mb-1">
            <div className="text-white text-xs">H:</div>
            <div className="text-white text-xs">42°</div>
          </div>
          <div className="flex items-center justify-between w-full px-2">
            <div className="text-white text-xs">L:</div>
            <div className="text-white text-xs">33°</div>
          </div>
        </div>

        {/* Weather Forecast Mini */}
        <div className="mt-auto flex flex-col items-center space-y-3 mb-4">
          <div className="flex flex-col items-center">
            <div className="text-white text-xs opacity-70">Thu</div>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            <div className="text-white text-xs">41°</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-white text-xs opacity-70">Fri</div>
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1z" />
            </svg>
            <div className="text-white text-xs">42°</div>
          </div>
        </div>
      </div>



      {/* Main Content */}
      <div className="pl-28 pr-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
              PropTrack
            </h1>
            <p className="text-gray-600">Real Estate Investment and Rental Profitability Tracker</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-white p-3 rounded-full shadow-md">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z" />
              </svg>
              <div>
                <div className="text-sm font-bold text-gray-800">{formattedTime}</div>
                <div className="text-xs text-gray-500">{formattedDate}</div>
              </div>
            </div>
            
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-md">
              PT
            </div>
          </div>
        </div>

        {/* Floating welcome message */}
        <div className="relative bg-white rounded-2xl shadow-xl p-6 mb-10 overflow-hidden z-0">
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
          <div className="absolute top-10 right-20 w-16 h-16 bg-purple-50 rounded-full opacity-50"></div>
          <div className="absolute top-16 left-40 w-24 h-24 bg-yellow-50 rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to your Dashboard</h2>
            <p className="text-gray-600 max-w-3xl">
              Access all your real estate analytics tools and reports from this central dashboard.
              Select any of the options below to navigate to specific analytics pages.
            </p>
          </div>
        </div>

        {/* Categories and cards */}
        {Object.keys(groupedItems).map((category, catIndex) => (
          <div key={category} className="mb-12">
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                >
                  <path d={categoryInfo[category].icon} />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">{categoryInfo[category].name}</h2>
              <div className="ml-3 px-2 py-1 bg-blue-100 rounded-full text-xs font-semibold text-blue-600">
                {groupedItems[category].length}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {groupedItems[category].map((item, index) => {
                const colorIndex = getColorIndex(catIndex + index);
                const colorScheme = colorPalette[colorIndex];
                
                return (
                  <div 
                    key={item.title}
                    className="relative cursor-pointer overflow-hidden transition-all duration-500"
                    onMouseEnter={() => setHoverCard(`${category}-${index}`)}
                    onMouseLeave={() => setHoverCard(null)}
                    onClick={() => navigate(item.path)}
                  >
                    <div 
                      className="rounded-xl p-5 h-full transition-all duration-500 transform"
                      style={{ 
                        background: colorScheme.background,
                        borderLeft: `4px solid ${colorScheme.textColor}`,
                        transform: hoverCard === `${category}-${index}` ? 'translateY(-5px)' : 'none',
                        boxShadow: hoverCard === `${category}-${index}` ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <div className="flex items-start">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-all duration-500"
                          style={{ 
                            backgroundColor: hoverCard === `${category}-${index}` ? colorScheme.textColor : 'white',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <svg 
                            viewBox="0 0 24 24" 
                            className="w-5 h-5 transition-all duration-500"
                            style={{ 
                              fill: hoverCard === `${category}-${index}` ? 'white' : colorScheme.textColor
                            }}
                          >
                            <path d={item.iconPath} />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{item.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        </div>
                      </div>
                      
                      {/* Progress line animation on hover */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
                        <div 
                          className="h-full transition-all duration-700 ease-out"
                          style={{ 
                            width: hoverCard === `${category}-${index}` ? '100%' : '0%',
                            backgroundColor: colorScheme.textColor
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Floating data counter */}
        <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-xl p-4 flex space-x-8 z-20">
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Properties</div>
            <div className="text-2xl font-bold text-blue-600">5</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Investors</div>
            <div className="text-2xl font-bold text-purple-600">5</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500 mb-1">Transactions</div>
            <div className="text-2xl font-bold text-green-600">4</div>
          </div>
        </div>
      </div>
    </div>
  );
}