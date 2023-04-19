import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import NewCard from "../Cards/NewCard";

export default function NewGrip() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}> 
        <Grid item xs={12} md={4}>
          <NewCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <NewCard />

        </Grid>
      </Grid>
    </Box>
  );
}
