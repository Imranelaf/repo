import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

function Navbar() {
    useGSAP(()=>{
        gsap.from('nav', {opacity:0, duration:2})
        const tl = gsap.timeline();
        tl.from(".logo", { y: -60, ease: "bounce.out", duration: 1, delay:1 });
        tl.from(".nav li", { x: -40, opacity: 0, stagger: 0.2, duration: 1, delay:.2 });
      }, []);
  
    return (
    <nav className="nav flex flex-row justify-between items-center p-4 bg-gray-800 text-white pl-12 pr-12">
      {/* Logo Section */}
      <div className="logo text-lg font-bold">
        MyLogo
      </div>

      {/* Navigation Links */}
      <ul className="flex flex-row gap-6">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">Our Services</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
