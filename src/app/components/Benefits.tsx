import React from 'react';
import Image from 'next/image';

const Benefits = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center font-sans px-5 py-10">
      <h1 className="font-bold text-3xl md:text-5xl mb-10 text-center">Benefits of Our Product</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Image Container */}
        <div className="w-full max-w-lg">
          <Image 
            src="/assets/images/img9.jpg" 
            alt="bottle" 
            width={500} 
            height={500} 
            className="w-full h-auto"
          />
        </div>

        {/* Benefit List */}
        <div className="flex flex-col gap-7 w-full max-w-2xl">
          {[
            {
              img: "/assets/images/img22.jpg",
              title: "Suppresses Appetite",
              description: "Keeps hunger in check, helping you avoid overeating and unhealthy snacking."
            },
            {
              img: "/assets/images/img23.jpg",
              title: "Enhances Your Metabolism",
              description: "Enhances your body’s ability to burn calories, leading to effective fat loss."
            },
            {
              img: "/assets/images/img24.jpg",
              title: "Enhances Energy Levels",
              description: "Provides sustained energy throughout the day without jitters or crashes."
            },
            {
              img: "/assets/images/img25.jpg",
              title: "Supports Fat Burning",
              description: "Activates thermogenesis, enabling your body to burn stubborn fat faster."
            },
            {
              img: "/assets/images/img26.jpg",
              title: "Improves Sleep Quality",
              description: "Promotes deep and restful sleep to aid recovery and hormonal balance."
            },
            {
              img: "/assets/images/img27.jpg",
              title: "Reduces Late-Night Cravings",
              description: "Controls nighttime hunger, ensuring fewer calorie intakes before bed."
            }
          ].map((benefit, index) => (
            <div key={index} className="flex gap-5 items-start">
              <Image 
                src={benefit.img} 
                alt={benefit.title} 
                width={45} 
                height={45} 
                className="flex-shrink-0"
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-xl md:text-2xl">{benefit.title}</h2>
                <p className="text-sm md:text-lg">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
