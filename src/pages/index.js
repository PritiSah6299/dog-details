import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import axios from 'axios'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dogapi.dog/api/v2/breeds");
        const breedsData = response.data.data.map((breed) => ({ id: breed.id, name: breed.attributes.name }))
        setBreeds(breedsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(breeds);
  return (
    <>
      {/* <Link href="/details">Dog-name</Link> */}
      <div><ul>{breeds.map(breed => (<li key={breed.id}><Link href={`/details/${breed.id}`}>{breed.name}</Link></li>))}</ul></div>

    </>
  );
}
