import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import data from "./data.json";
import "./TeamComponent.css";

const TeamComponent = () => {
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
            padding: "100px 0px 50px 0px",
            height: "auto",
            width: "100%",
            background: "#f3f3ff",
          }}
        >
          <h2 class="text-center prevent-select ">Our Creative Team</h2>

          {data.data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              key={index}
              spacing={4}
              style={{
                position: "relative",
                margin: "20px 0px",

                maxWidth: "380px",
                height: "405px",
                zIndex: "0",
                boxShadow:
                  " 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
                background: "white",
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <div class="top-bar"></div>
              <div class="a-box" style={{ marginRight: "17px" }}>
                <div class="img-container">
                  <div class="img-inner">
                    <div class="inner-skew">
                      <img style={{ marginLeft: "0px" }} src={item.image} />
                    </div>
                  </div>
                </div>

                <div class="text-container">
                  <h3>{item.Name}</h3>
                  <h4>{item.Designation}</h4>
                </div>
              </div>
              {/* <div class="top-bar"></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "12",

                  width: "99%",
                 
                }}
              >
                <img id="portfolioImage" src={item.image} />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "98%",
                  }}
                >
                  {" "}
                  <h4
                    className="sitePortfolio prevent-select "
                    style={{
                      margin: "10px",
                      padding: " 0px",
                      height: "fit-content",
                      width: "100%",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.Name}
                  </h4>
                  <h4
                    className="sitePortfolio prevent-select "
                    style={{
                      margin: "10px",
                      padding: " 0px",
                      height: "85px",
                      width: "100%",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight : "600"
                    }}
                  >
                    {item.Designation}
                  </h4>
                </div>
              </div> */}
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default TeamComponent;
