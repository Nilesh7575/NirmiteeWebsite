import { useState } from "react";
import "./PortfolioComponent.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import data from "./data.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PortfolioComponent = () => {
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            margin: "0px 0px",
            height: "auto",
            width: "100%",
            background: "#f3f3ff",
          }}
        >
          <h2 class="text-center">Our Impressive Portfolio</h2>

          {data.data.map((item, index) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              lg={4}
              key={index}
              spacing={4}
              style={{
                textAlign: "center",
                height: "max-content",
                margin: "20px 0px",
                minWidth: "10px",
                maxWidth: "400px",
                height: "400px",
                boxShadow:
                  " 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
                background: "white",
                borderRadius: "16px",
              }}
             
              className="gridInner" 
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  zIndex: "12",
                }}
              >
                <img className="portfolioImage" src={item.image} />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "98%",
                  }}
                >
                  {" "}
                  <h4
                    className="h4Text"
                    style={{
                      margin: "0px",
                      padding: " 0px",
                      height: "fit-content",
                      textAlign: "left",
                    }}
                  >
                    {item.text}
                  </h4>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "97%",

                    height: "fit-content",
                    marginBottom: "10px",
                  }}
                >
                  <p className="sitePortfolio"> {item.site}</p>

                  <div
                    className="visitButton btn"
                    size="small"
                    color="primary"
                    onClick={() => window.open(item.link)}
                  >
                    Visit
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PortfolioComponent;
