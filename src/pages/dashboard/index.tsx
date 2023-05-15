import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "@/components/Chart";
import Deposits from "@/components/Deposits";
import Orders from "@/components/Orders";
import {useTheme} from "@mui/material/styles";

export const Dashboard: React.FC = () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              borderRadius: '10px',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              backgroundColor:useTheme().palette.secondary.main
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
              borderRadius: '10px',
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', borderRadius: '10px', }}>
            <Orders />
            <Orders />
            <Orders />
            <Orders />
            <Orders />
            <Orders />
            <Orders />
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
