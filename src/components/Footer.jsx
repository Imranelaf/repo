import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Animate all elements with .animate class
    gsap.fromTo(
      '.animate',
      { 
        x: 100
      },
      {
        x: 0,
        duration: 1.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top bottom-=100',
          end: 'bottom bottom',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Separate animation for footer bottom
    gsap.fromTo(
      '.footer-bottom',
      {
        y: 30
      },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.footer-bottom',
          start: 'top bottom-=50',
          end: 'bottom bottom',
          scrub: 1,
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-around items-start space-x-10">
        {/* Contact Info Section */}
        <div className="animate contact-info flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>Email: <a href="mailto:contact@website.com" className="hover:underline transition-all duration-300">contact@website.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:underline transition-all duration-300">+123 456 7890</a></p>
          <p>Address: 123 Street, City, Country</p>
        </div>

        {/* Social Media Section */}
        <div className="animate social-media flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:translate-x-2 inline-block transition-all duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:translate-x-2 inline-block transition-all duration-300"
              >
                Twitter
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline hover:translate-x-2 inline-block transition-all duration-300"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center mt-8">
        <p className="text-sm">&copy; {currentYear} Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;