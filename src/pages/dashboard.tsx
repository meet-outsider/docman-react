import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "@/shared/Chart";
import Deposits from "@/shared/Deposits";
import Orders from "@/shared/Orders";

const backgroundColor = 'RGB(226, 242, 253)'
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
              backgroundColor
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
