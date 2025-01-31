'use client'
import React from 'react'
import Header  from '../app/components/Header'
import Uncompromising  from '../app/components/Uncompromising'
import Results  from '../app/components/Results'
import Faq from '../app/components/Faq'
import Review from '../app/components/Review'
import Consultation from  '../app/components/Consultation '


const page = () => {
  return (
    <>
     <Header/>
     <Uncompromising/>
     <Results/>
     <Faq/>
     <Consultation/>
     <Review/>
     
    </>
  )
}

export default page