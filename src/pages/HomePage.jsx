import { useState, useEffect } from "react";
import NavbarComp from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countryList, setCountrylist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      setCountrylist(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <NavbarComp />

      <div
        className={"container"}
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>
        <h1>WikiCountries: Your Guide to the World</h1>
        <div className={"list-group"}>
          {countryList
            .map((eachCountry, index) => {
              return (
                <p key={index}>
                  <Link
                    className={"list-group-item list-group-item-action"}
                    to={eachCountry.alpha3Code}
                  >
                    {eachCountry.name.common}{" "}
                    <img
                      src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                      alt="country-img"
                      width={"20px"}
                    />{" "}
                  </Link>
                </p>
              );
            })
            .sort((a, b) => {
              if (a.props.children > b.props.children) {
                return +1;
              } else {
                return -1;
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
