import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailsPage() {
  const [breedData, setBreedData] = useState();
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dogapi.dog/api/v2/breeds/${id}`
        );

        setBreedData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(breedData);

  if (breedData)
    return (
      <div>
        <h3> DetailsPage :- </h3>
        <br />
        <br />
        <span>
          <h5>
            Description:- {breedData.attributes.description}
            <br />
            <br />
            Max life :- {breedData.attributes.life.max}
            <br />
            <br />
            Min life:- {breedData.attributes.life.max}
            <br />
            <br />
            Male weight:-
            <br />
            Max:- {breedData.attributes.male_weight.max}
            <br />
            Min:- {breedData.attributes.male_weight.min}
            <br />
            <br />
            Female weight:-
            <br />
            Max:- {breedData.attributes.female_weight.max}
            <br />
            Min:- {breedData.attributes.female_weight.min}
          </h5>
        </span>
      </div>
    );

    return <p>Loading...</p>
}
