'use client'
import React from 'react'
import Uncompromising  from '../app/components/Uncompromising'
import Consultation from  '../app/components/Consultation '
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
import Weight from './components/Weight'

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
    <Weight/>
    <Faq/>
    <Review/>
    <Footer/>

    </>
  )
}

export default page