import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Benefits from './components/Benefits'
import Videos from './components/Videos'
import Testimonial from './components/Testimonial'
import Results from './components/Results'
import DoctorAdvice from './components/DoctorAdvice'
import KeyIngredients from './components/KeyIngredients'
import Faq from './components/Faq'
import Review from './components/Review'
import Footer from './components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
    <Header/>
    <Benefits/>
    <Videos/>
    <Testimonial/>
    <Results/>
    <DoctorAdvice/>
    <KeyIngredients/>
    <Faq/>
    <Review/>
    <Footer/>
    </>
  )
}

export default page