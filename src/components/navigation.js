import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
        <div className='container'>
            <div className='nav-columns'>
                <div className='nav-column'>
                    <div className='nav-label'>
                        Menu
                        </div>
                        <ul className='nav-links'>
                            <li>
                                <Link to="/case-studies"> Case Studies</Link>
                            </li>
                            <li>
                                <Link to="/approach">Approach</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/about"> About Us</Link>
                            </li>
                            </ul>
                        </div>
                        <div className='nav-column'>
                            <div className='nav-label'>Contact</div>
                            <div className='nav-infos'>
                            <ul className='nav-info'>
                                    <li className='nav-info-label'>Email</li>
                                    <li>
                                        <Link to="/contact"> Get in Touch</Link>
                                    </li>
                                    <li>
                                        <Link to="/audit"> Get free Audit</Link>
                                    </li>
                                </ul>

                                <ul className='nav-info'>
                                    <li className='nav-info-label'>Headquarters</li>
                                    <li>Route du Jura 59</li>
                                    <li>1700 Fribourg</li>
                                    <li>Switzerland</li>
                                </ul>
                                <ul className='nav-info'>
                                    <li className='nav-info-label'>Phone</li>
                                    <li>+41 (0) 75 510 28 70</li>
                                </ul>
                                <ul className='nav-info'>
                                    <li className='nav-info-label'>Legal</li>
                                    <li>Privacy and Cookies</li>
                                </ul>
                                    
                        </div>
                    </div>
                </div>
            </div>
    </nav>
  )
}