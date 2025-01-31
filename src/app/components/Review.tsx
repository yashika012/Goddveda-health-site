"use client";
import React from "react";

// Mock data for reviews (you can replace it with actual data)
const reviews = [
  // English reviews
  {
    id: 1,
    rating: 4,
    review: "Great product! I loved it.",
    language: "en",
    image: "",
    video: "",
    date: "2023-12-01",
  },
  {
    id: 2,
    rating: 5,
    review: "Awesome experience! Highly recommend it.",
    language: "en",
    image: "",
    video: "",
    date: "2023-12-02",
  },
  {
    id: 3,
    rating: 3,
    review: "It's okay, but not exactly what I expected.",
    language: "en",
    image: "",
    video: "",
    date: "2023-12-03",
  },

  // Spanish reviews
  {
    id: 4,
    rating: 5,
    review: "¡Excelente producto! Lo recomiendo mucho.",
    language: "es",
    image: "",
    video: "",
    date: "2023-12-05",
  },
  {
    id: 5,
    rating: 4,
    review: "Muy buen producto, pero podría mejorar.",
    language: "es",
    image: "",
    video: "",
    date: "2023-12-07",
  },
  {
    id: 6,
    rating: 5,
    review: "¡Producto increíble! Mejor de lo que imaginaba.",
    language: "es",
    image: "",
    video: "/assets/videos/review-video1.mp4",
    date: "2023-12-08",
  },

  // French reviews
  {
    id: 7,
    rating: 5,
    review: "Produit incroyable! Je l'aime.",
    language: "fr",
    image: "",
    video: "",
    date: "2023-12-10",
  },

  // Hindi reviews
  {
    id: 10,
    rating: 4,
    review: "उत्पाद अच्छा है, लेकिन थोड़ा महंगा है।",
    language: "hi",
    image: "",
    video: "",
    date: "2023-12-13",
  },
  {
    id: 11,
    rating: 5,
    review: "बहुत अच्छा उत्पाद! मुझे बहुत पसंद आया।",
    language: "hi",
    image: "",
    video: "/assets/videos/review-video3.mp4",
    date: "2023-12-14",
  },
  {
    id: 12,
    rating: 3,
    review: "ठीक है, लेकिन इसमें कुछ सुधार की आवश्यकता है।",
    language: "hi",
    image: "",
    video: "",
    date: "2023-12-15",
  },

  // Marathi reviews
  {
    id: 13,
    rating: 5,
    review: "उत्पादन उत्कृष्ट आहे, मी निश्चितपणे याची शिफारस करतो.",
    language: "mr",
    image: "",
    video: "",
    date: "2023-12-16",
  },
];

const CustomerReviewPage = () => {
  const [sortOption, setSortOption] = React.useState("recent"); // Sort by most recent by default
  const [languageFilter, setLanguageFilter] = React.useState("all"); // Show all languages by default

  // Set a fixed average rating of 4.5
  const averageRating = 4.5;

  // Sort reviews based on the selected option
  const sortedReviews = [...reviews].sort((a, b) => {
    switch (sortOption) {
      case "highest":
        return b.rating - a.rating; // Sort by highest rating
      case "lowest":
        return a.rating - b.rating; // Sort by lowest rating
      case "recent":
        return new Date(b.date).getTime() - new Date(a.date).getTime(); // Sort by most recent
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime(); // Sort by oldest
      default:
        return 0;
    }
  });

  // Filter reviews based on language
  const filteredReviews = sortedReviews.filter((review) => {
    if (languageFilter === "all") return true;
    return review.language === languageFilter;
  });

  // Function to render stars
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // Helper function to format date consistently
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // Format as DD/MM/YYYY
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-5xl font-bold text-center mb-8 bg-gray-200">
        Customer <span className="italic">Reviews</span>
      </h2>

      {/* Average Rating Section */}
      <div className="text-center mb-6">
        <div className="text-2xl font-semibold">Overall Rating</div>
        <div className="flex justify-center mb-4">
          {renderStars(Math.round(averageRating))}{" "}
          {/* Show rounded average rating */}
        </div>
        <div className="text-xl font-bold">
          Average Rating: {averageRating} / 5
        </div>
      </div>

      {/* Sorting and Language Filters */}
      <div className="flex justify-center space-x-6 mb-6">
        <select
          className="p-2 border rounded-lg"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="recent">Most Recent</option>
          <option value="highest">Highest Rating</option>
          <option value="lowest">Lowest Rating</option>
          <option value="oldest">Oldest</option>
        </select>

        <select
          className="p-2 border rounded-lg"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
        >
          <option value="all">All Languages</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
        </select>
      </div>

      {/* Displaying the Reviews */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            {/* Display Review Rating */}
            <div className="flex items-center mb-2">
              {renderStars(review.rating)} {/* Show review rating */}
            </div>
            <div className="text-lg italic">
              Review in{" "}
              {review.language === "en"
                ? "English"
                : review.language === "es"
                ? "Spanish"
                : review.language === "fr"
                ? "French"
                : review.language === "hi"
                ? "Hindi"
                : "Marathi"}
            </div>

            {/* Review Text */}
            <p className="text-xl">{review.review}</p>

            {/* Contact Icon (Phone) */}
            <div className="flex items-center mt-4">
              <span className="text-2xl mr-2">📞</span>
              <a
                href="https://goodveda.com/pages/contact"
                className="text-blue-500 text-lg"
              >
                Contact Us
              </a>
            </div>

            {/* Review Date */}
            <div className="text-sm text-gray-500 mt-2">
              Posted on: {formatDate(review.date)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewPage;
