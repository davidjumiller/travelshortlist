import React from 'react'
import './index.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App() {
  return (
    <div className="bg-slate-50 w-full flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="bg-amber-300 drop-shadow-md">
      <div className="container flex flex-row justify-between items-center mx-auto text-white">
        <input className="flex text-lg font-extrabold uppercase" type="text" id="city-search" placeholder="Enter a city..."/>
        <div className="">
          <ul className="flex flex-row uppercase">
            <li><a href="#" className="block mx-4">Sign in</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

function Content() {
  return (
    <div className="container mx-auto flex-auto px-5">
      <div className="my-10">
        <h1 className="text-3xl">Hotels 🏨</h1>
        <hr className="w-1/3" />
        <div className="my-5" id="hotelsList">
          <Carousel responsive={responsive} infinite={true} renderButtonGroupOutside={true}>
          <div><ExampleCard /></div>
          <div><ExampleCard /></div>
          <div><ExampleCard /></div>
          <div><ExampleCard /></div>
          </Carousel>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-3xl">Attractions 🏞️</h1>
        <hr className="w-1/3" />
        <div className="my-5" id="attractionsList">
          <Carousel responsive={responsive} infinite={true}>
            <div><ExampleCard /></div>
            <div><ExampleCard /></div>
            <div><ExampleCard /></div>
            <div><ExampleCard /></div>
          </Carousel>
        </div>
      </div>
      <div className="my-8">
        <h1 className="text-3xl">Restaurants 🍲</h1>
        <hr className="w-1/3" />
        <div className="my-5" id="restaurantsList">
          <Carousel responsive={responsive} infinite={true}>
            <div><ExampleCard /></div>
            <div><ExampleCard /></div>
            <div><ExampleCard /></div>
            <div><ExampleCard /></div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

function ExampleCard() {
  return (
    <div>
      <a href="#" className="block mx-3 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Example card for places</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here we can put a place with a few images, rating, number of ratings, link to google maps listing</p>
      </a>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-500">
      <div className="container mx-auto text-white text-center">
        <div className="py-10">
          <p>Copyright © 2022 Travelshortlist.org All rights reserved.</p>
          <ul className="inline text-amber-200 hover:text-white hover:ease-in duration-200">
            <li className="py-2"><a href="https://github.com/davidjumiller/travelshortlist">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default App
