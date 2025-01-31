'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCirclePlus } from 'react-icons/fa6';

interface IngredientCardProps {
  title: string;
  description: string;
  imageUrl: string;
  nutritionalFacts: string;
  chemistryName: string;
  origin: string;
}

const ingredientsData: IngredientCardProps[] = [
  {
    title: "Black Pepper Fruit Extract",
    description: "Enhances nutrient absorption and digestion, supporting weight management and metabolic function.",
    imageUrl: "/assets/images/img16.jpg",
    nutritionalFacts: "Vitamin C, Calcium, Iron, Magnesium",
    chemistryName: "Piperine",
    origin: "India",
  },
  {
    title: "Cayenne Pepper Fruit Extract",
    description: "Aids digestion and metabolism, promoting weight management by increasing calorie burning.",
    imageUrl: "/assets/images/img15.jpg",
    nutritionalFacts: "Vitamin A, Vitamin C, Potassium",
    chemistryName: "Capsaicin",
    origin: "Mexico",
  },
  {
    title: "Ginger Root Extract",
    description: "Elevates energy levels and focus, facilitating fat burning and alertness.",
    imageUrl: "/assets/images/img12.jpg",
    nutritionalFacts: "Vitamin B6, Magnesium, Potassium",
    chemistryName: "Gingerol",
    origin: "South Asia",
  },
  {
    title: "Green Tea Leaf Extract",
    description: "Boosts metabolism and offers a rich source of antioxidants, supporting fat oxidation.",
    imageUrl: "/assets/images/img14.jpg",
    nutritionalFacts: "Vitamin C, Manganese, Potassium",
    chemistryName: "Catechins",
    origin: "China",
  },
  {
    title: "Acetyl-L-Carnitine HCL",
    description: "Enhances mental clarity and concentration, aiding in fatty acid transportation for energy.",
    imageUrl: "/assets/images/img13.jpg",
    nutritionalFacts: "No significant nutritional content",
    chemistryName: "Acetyl-L-Carnitine",
    origin: "Synthetic",
  },
  {
    title: "Guggul",
    description: "Supports healthy cholesterol levels and stimulates thyroid function to boost metabolism.",
    imageUrl: "/assets/images/img11.jpg",
    nutritionalFacts: "Vitamin C, Calcium, Phytosterols",
    chemistryName: "Guggulsterone",
    origin: "India",
  },
  {
    title: "Garcinia Cambogia",
    description: "Aids in weight management by inhibiting fat storage and suppressing appetite.",
    imageUrl: "/assets/images/img12.jpg",
    nutritionalFacts: "Hydroxycitric Acid (HCA), Vitamin C",
    chemistryName: "Hydroxycitric Acid",
    origin: "Southeast Asia",
  },
  {
    title: "Capsimax",
    description: "Supports metabolism and thermogenesis, promoting weight management by increasing calorie burning and fat oxidation",
    imageUrl: "/assets/images/img12.jpg",
    nutritionalFacts: "Capsaicin, Vitamin C",
    chemistryName: "Capsaicin",
    origin: "Capsicum peppers",
  },
];

const KeyIngredients: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedIngredientDetails, setSelectedIngredientDetails] = useState<IngredientCardProps | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleAddIngredient = (ingredient: IngredientCardProps) => {
    if (!selectedIngredients.includes(ingredient.title)) {
      setSelectedIngredients([...selectedIngredients, ingredient.title]);
      console.log(`${ingredient.title} added to your selection.`);
    } else {
      console.log(`${ingredient.title} is already added.`);
    }
  };

  const handleCardClick = (ingredient: IngredientCardProps) => {
    setSelectedIngredientDetails(ingredient);
  };

  const toggleExpandedView = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center font-sans bg-blue-200 gap-10'>
      <h1 className='font-bold text-5xl'>Key Ingredients</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 rounded-md'>
        {ingredientsData.slice(0, isExpanded ? ingredientsData.length : 6).map((ingredient, index) => (
          <div
            key={index}
            className='bg-white p-4 rounded-xl shadow-lg flex flex-col justify-between w-full h-full cursor-pointer'
            onClick={() => handleCardClick(ingredient)}
          >
            <div className='flex justify-between items-center'>
              <h2 className='font-bold text-2xl'>{ingredient.title}</h2>
              <Image src={ingredient.imageUrl} alt={ingredient.title} width={80} height={80} className='rounded-md' />
            </div>
            <p className='mt-4 text-lg w-[300px] text-gray-700'>{ingredient.description}</p>
            <button
              onClick={() => handleAddIngredient(ingredient)}
              className='text-4xl mt-4 text-blue-400 flex justify-end'
              aria-label={`Add ${ingredient.title}`}
            >
              <FaCirclePlus />
            </button>
          </div>
        ))}
      </div>

      {/* Show More / Show Less button */}
      <button
        onClick={toggleExpandedView}
        className='border border-gray-400 text-gray-600 text-xl px-4 py-2 m-5 rounded-full '
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>

      {/* Popup with full ingredient details */}
      {selectedIngredientDetails && (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg w-1/3'>
            <h2 className='font-bold text-2xl'>{selectedIngredientDetails.title}</h2>
            <Image src={selectedIngredientDetails.imageUrl} alt={selectedIngredientDetails.title} width={100} height={100} className='rounded-md' />
            <p className='mt-4 text-lg'><span className='font-bold'>Benefits:</span> {selectedIngredientDetails.description}</p>
            <div className='mt-4 text-lg'>
              <p><strong>Nutritional Facts:</strong> {selectedIngredientDetails.nutritionalFacts}</p>
              <p><strong>Chemistry Name:</strong> {selectedIngredientDetails.chemistryName}</p>
              <p><strong>Origin:</strong> {selectedIngredientDetails.origin}</p>
            </div>
            <button
              onClick={() => setSelectedIngredientDetails(null)}
              className='bg-red-500 text-white px-4 py-2 rounded-lg mt-4'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default KeyIngredients;
