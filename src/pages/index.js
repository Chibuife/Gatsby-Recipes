import * as React from "react"
// import { Link } from "gatsby-link"
import Layout from "../components/Layout"
import '../styles/global.css'
import { StaticImage } from "gatsby-plugin-image"
// import FetchData from "../components/FetchData"
import AllRecipies from "../components/AllRecipies"
export default function Home() {
  return (
    <div >
      <Layout>
        <main> 
          <div className="relative">
            <StaticImage className="w-full h-96 mx-auto rounded"  src="../images/main.png" alt="eggs" placeholder="tracedSVG" layout="fullWidth" />
            <div className="flex justify-around w-full h-96 bg-black-500 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-white text-center">
                <h1>Simply Recipes</h1>
                <h4>No Fluff, Just Recipes</h4>
              </div>
            </div>
          </div>
        </main>
        <AllRecipies />
      </Layout>
    </div>
  )
}