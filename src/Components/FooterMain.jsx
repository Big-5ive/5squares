import React from 'react';

const FooterMain = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h2 className="font-bold text-black mb-3">Get support</h2>
            <ul className='space-y-3'>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Live chat</a></li>
              <li><a href="#" className="hover:underline">Check order status</a></li>
              <li><a href="#" className="hover:underline">Refunds</a></li>
              <li><a href="#" className="hover:underline">Report abuse</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-black mb-3">Trade Assurance</h2>
            <ul className='space-y-3'>
              <li><a href="#" className="hover:underline">Safe and easy payments</a></li>
              <li><a href="#" className="hover:underline">Money-back policy</a></li>
              <li><a href="#" className="hover:underline">On-time shipping</a></li>
              <li><a href="#" className="hover:underline">After-sales protections</a></li>
              <li><a href="#" className="hover:underline">Product monitoring services</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-black mb-3">Source on big5ive.com</h2>
            <ul className='space-y-3'>
              <li><a href="#" className="hover:underline">Request for Quotation</a></li>
              <li><a href="#" className="hover:underline">Membership program</a></li>
              <li><a href="#" className="hover:underline">big5ive.com Logistics</a></li>
              <li><a href="#" className="hover:underline">Sales tax and VAT</a></li>
              <li><a href="#" className="hover:underline">big5ive.com Reads</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-black mb-3">Sell on big5ive.com</h2>
            <ul className='space-y-3'>
              <li><a href="#" className="hover:underline">Start selling</a></li>
              <li><a href="#" className="hover:underline">Seller Central</a></li>
              <li><a href="#" className="hover:underline">Become a Verified Supplier</a></li>
              <li><a href="#" className="hover:underline">Partnerships</a></li>
              <li><a href="#" className="hover:underline">Download the app for suppliers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-bold text-black mb-3">Get to know us</h2>
          <ul className="flex flex-col md:flex-row md:flex-wrap md:gap-6">
            <li><a href="#" className="hover:underline">About big5ive.com</a></li>
            <li><a href="#" className="hover:underline">Corporate responsibility</a></li>
            <li><a href="#" className="hover:underline">News center</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
