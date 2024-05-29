import React from 'react';

function StartAffliation({ toggleForm }) {
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className=" justify-content-center align-items-center">
        <div
          className="col-12  d-flex justify-content-center align-items-center"
          style={{
            height: "200px",
          }}
        >
          <div
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "50%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="images/icon/Group 741.svg"
              alt="Affiliate Icon"
              style={{ width: "100%", height: "100%", objectFit: "cover", padding: "10px" }}
            />
          </div>
        </div>
        <div className="col-12 ">
          <h1
            style={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "32px",
              lineHeight: "52.33px",
              textAlign: "center", // Center-align text
            }}
          >
            Affiliate Program
          </h1>
          <div
            style={{
              maxWidth: "805px",
              margin: "0 auto", // Center-align the container
              textAlign: "center", // Center-align text
            }}
          >
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur. Libero ac et at arcu
              natoque tellus consequat id. Quis mauris dignissim congue elit id
              mattis commodo tincidunt. Nunc dignissim lectus volutpat
              consectetur donec
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn"
              style={{
                border: "1px solid",
                width: "100%",
                maxWidth: "223px",
                height: "50px",
                color: "black",
                backgroundColor: "white",
              }}
              onClick={toggleForm}
            >
              START AFFILIATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartAffliation;