import React from 'react'
import '../Style/Home.css'
import { useRef } from 'react';

export default function () {
  const adScrollRef = useRef(null);

  const scrollLeft = () => {
    if (adScrollRef.current) {
      adScrollRef.current.scrollLeft -= 1530;
    }
  };

  const scrollRight = () => {
    if (adScrollRef.current) {
      adScrollRef.current.scrollLeft += 1530;
    }
  };
  return (
    <div>
    <div class = "adv-btn">
        <button id="adv-b" onClick={scrollLeft}><img src="/img/back.png" alt="Loading" /></button>
        <button id="adv-n" onClick={scrollRight}><img src="/img/next.png" alt="loading"/></button>
    </div>
    <div class="advertise" ref={adScrollRef}>
        <div id="adver1">
           <span><img src="img/ad1.jpg" alt="Loading" /></span>
        </div>
        <div id="adver2">
            <span><img src="img/ad2.jpg" alt="Loading" /></span>
        </div>
        <div id="adver3">
            <span><img src="img/ad3.jpg" alt="Loading" /></span>
        </div>
    </div> 
    </div>
  )
}
