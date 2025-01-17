import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarComp from "../components/Navbar";
import { Link } from "react-router-dom";

function CountryDetails() {
  const params = useParams();
  const [countryDetails, setCountryDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [params.countryId]);

  const getData = async () => {
    let URL = "https://ih-countries-api.herokuapp.com/countries/";
    try {
      const response = await axios.get(`${URL}${params.countryId}`);
      setCountryDetails(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div>
      <NavbarComp />

      {/* <h2>Country Details</h2>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt="country-img" width={"200px"}/>
      <h4>{countryDetails.name.common}</h4>
      <p>Capital: <span>{countryDetails.capital[0]}</span></p>
      <p>Area: <span>{countryDetails.area}</span></p>
    <p>Border:</p>
    {countryDetails.borders.map((each, index)=>{
        return (
            <p><Link to={`/${each}`}>{each}</Link></p>
        )
    })} */}

      <div className={"container"}>
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
          alt={"country-img"}
          width={"200px"}
        />
        <h1>{countryDetails.name.common}</h1>

        <table className={"table"}>
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width:"30%"} }>Capital</td>
              <td>{countryDetails.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {countryDetails.borders.map((each, index) => {
                    return (
                      <li key={index}>
                        <Link to={`/${each}`}>{each}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
