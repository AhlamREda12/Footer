import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center bg-black p-6 rounded-md mb-10 text-white">
          <h2 className="text-2xl font-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-2 rounded-l-md w-64 focus:outline-none text-gray-800"
            />
            <button className="bg-white text-black px-6 rounded-r-md">Subscribe to Newsletter</button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm mb-10">
          <div>
            <h3 className="font-bold text-lg mb-3">SHOP.CO</h3>
            <p>We have clothes that suits your style and which  proud to wear. From women to men.</p>
            <div className="flex mt-4 space-x-4">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">COMPANY</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">HELP</h3>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">FAQ</h3>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">RESOURCES</h3>
            <ul>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-5">
          <p className="text-sm">&copy; Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex space-x-4">
            <img src="/visa.png" alt="Visa" className="h-6"/>
            <img src="/paypal.png" alt="Paypal" className="h-6"/>
            <img src="/mastercard.png" alt="Mastercard" className="h-6"/>
            <img src="/applepay.png" alt="Apple Pay" className="h-6"/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
