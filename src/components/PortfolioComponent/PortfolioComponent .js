import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import data from "./data.json";
import "./PortfolioComponent.css";

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
            paddingBottom: "50px",
            height: "auto",
            width: "100%",
            background: "#f3f3ff",
          }}
        >
          <h2 class="text-center prevent-select ">Our Impressive Portfolio</h2>

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
                margin: "20px 0px",
                minWidth: "10px",
                maxWidth: "400px",
                height: "405px",
                boxShadow:
                  " 0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
                background: "white",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="gridInner"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "12",

                  width: "99%",

                  marginRight: "15px",
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
                    className="h4Text prevent-select "
                    style={{
                      margin: "10px",
                      padding: " 0px",
                      height: "85px",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
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
                    width: "95%",

                    height: "20%",
                    marginBottom: "0px",
                  }}
                >
                  <p className="sitePortfolio prevent-select "> {item.site}</p>

                  <div
                    className="visitButton btn prevent-select "
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
