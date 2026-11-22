// import React from 'react';
import "./App.css";
import PricingCard from './Component/Pricing Card';
import pricingPlans from './Data/Pricing Card';


const App = () => {

  return (
    <div className='container'>
   { pricingPlans.map(plan=>(
      <PricingCard key={plan.id} plan={plan} />
  ))}
   </div>
  )
}

export default App