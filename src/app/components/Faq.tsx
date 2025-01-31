import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, SetStateAction, useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('product'); // Track the active category
  const [activeIndex, setActiveIndex] = useState(null); // Track the active question index within a category

  const toggleAccordion = (index: Key | SetStateAction<null> | undefined) => {
    // Toggle between showing and hiding the answer
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = {
    product: [
      {
        question: 'What is Goodveda AM/PM Slimming Complex?',
        answer:
          'Goodveda AM/PM Slimming Complex is a dual-action weight management supplement designed to support fat burning, metabolism, and energy during the day, while promoting restful sleep and reducing late-night cravings at night.',
      },
      {
        question: 'How does the AM/PM Slimming Complex work?',
        answer:
          'The AM capsule boosts metabolism, suppresses appetite, and enhances energy levels using ingredients like Green Tea and Cayenne Pepper. The PM capsule supports fat burning, improves sleep quality, and reduces late-night cravings with ingredients like Capsimax and Garcinia.',
      },
      {
        question: 'Who should use Goodveda AM/PM Slimming Complex?',
        answer:
          'It is ideal for individuals looking to manage weight effectively, improve energy levels, and maintain healthy sleep patterns. However, if you are pregnant, nursing, or under medication, consult a doctor before use.',
      },
      {
        question: 'How do I take Goodveda AM/PM Slimming Complex?',


        answer: 'Take one AM capsule in the morning with water to kickstart your day, and one PM capsule at night to support overnight fat burning and better sleep. Follow the dosage consistently for best results.'
      },
    ],
    shipping: [
      {
        question: 'What are the shipping charges for Goodveda products?',
        answer:
          'We offer free shipping on all orders across India. For international orders, shipping charges will be calculated based on your location and displayed at checkout.',
      },
      {
        question: 'How long does it take to receive my order?',
        answer:
          'Orders within India typically take 5-7 business days to be delivered. For remote areas, delivery may take up to 10 business days. International deliveries may take 10-15 business days, depending on the destination.',
      },
      {
        question: 'How can I track my order?',
        answer:
          'Once your order is dispatched, you will receive a tracking link via Whatsapp. You can use this link to track the status of your delivery in real-time..',
      },
      {
        question: 'What happens if I am not available to receive my order?',
        answer: 'If you are unavailable at the time of delivery, the courier will attempt to deliver again. You can also reschedule the delivery by reaching out to our customer support team for assistance..',
      },
    ],
    other: [
      {
        question: 'Are Goodveda products safe to use for long periods?',
        answer:
          'Yes, all Goodveda products are made from 100% natural and Ayurvedic ingredients, making them safe for long-term use. However, we recommend following the suggested dosage and consulting a healthcare provider for specific concerns.',
      },
      {
        question: 'Do Goodveda products have any side effects?',
        answer:
          'Our products are formulated using natural ingredients, and there are no known side effects. However, if you have any specific allergies or pre-existing conditions, we suggest consulting a healthcare professional before use.',
      },
      {
        question: 'Can I return or exchange a product if I am not satisfied?',


        answer: 'Yes, we offer a 30-day return and exchange policy, but only for applicable reasons. For more information, please visit our refund and cancellation section...',
      },
      {
        question:'Do you offer any personalized health consultations?',


answer:'Yes, all of our products come with 1 month of free health consultations. You can renew the consultation if needed...',
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
    <h2 className="text-5xl font-bold text-center mb-8 mt-5 bg-gray-100">
  Frequently Asked <span className="italic">Questions</span>
</h2>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-8 py-2 text-xl font-semibold rounded-2xl focus:outline-none ${activeCategory === 'product' ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-900'
            }`}
          onClick={() => setActiveCategory('product')}
        >
          Product
        </button>
        <button
          className={`px-8 py-2 text-xl font-semibold rounded-2xl focus:outline-none ${activeCategory === 'shipping' ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-900'
            }`}
          onClick={() => setActiveCategory('shipping')}
        >
          Shipping
        </button>
        <button
          className={`px-8 py-2 text-xl font-semibold rounded-2xl focus:outline-none ${activeCategory === 'other' ? 'bg-gray-900 text-white' : 'bg-gray-3 text-gray-900'
            }`}
          onClick={() => setActiveCategory('other')}
        >
          Other
        </button>

      </div>

      {/* FAQ Questions Based on Active Category */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {faqData[activeCategory].map((item: { question: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; answer: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
          <div key={index} className="border-b border-gray-800">
            <button
              className="w-full text-left py-4 px-6 text-xl font-medium focus:outline-none rounded-lg flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
              >
                ↓
              </span>
            </button>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden px-6 ${activeIndex === index ? 'h-auto' : 'h-0'
                }`}
            >
              <p className="py-2">{item.answer}</p>
            </div>
          </div>
        ))}
       
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-4">
  <button className="w-40 py-3 px-6 bg-black text-white rounded-3xl hover:bg-gray-800 transition-all font-bold">
    Shop Now
  </button>
  <p className="text-gray-600 mt-2 text-xl">
  Got a Question? <a href="https://goodveda.com/pages/contact" className="text-blue-500 hover:underline">Ask now</a>
</p>

</div>
</div>

  );
};

export default FAQ;
