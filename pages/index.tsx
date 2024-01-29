import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {

  // Méthode fetch pour récupérer la date du côté back :
  const res = await fetch(`http://localhost:3000/api/date`)
  const data = await res.json()

  return { /*props: { dateStringSSR: new Date().toISOString() }*/
  props: { dateStringSSR: data.date }
  }
}

/*
export const getStaticProps = () => {
  return { props: { dateStringSSG: new Date().toISOString() } }
}
*/



interface HomeProps {
  dateStringSSR: string,
  // dateStringSSG: string
}

export default function Home(props : HomeProps) {

  const [date, setDate] = useState<Date | null>(null)

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <title>Titre principal</title>
      </Head>
      <main>
        <h1>Méthode de rendu côté client (chargement des données à interval de temps régulier et fréquent) :  {date && date.toISOString()}</h1>
        <h2>Méthode de rendu côté serveur (chargement des données lors du chargement de la page) : {props.dateStringSSR}</h2>
        {/*<h2>Méthode de rendu côté serveur et client (chargement des données lors du build) : ??? </h2> */}
      </main>
    </>
  )
}
