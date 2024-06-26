import React from 'react'
import '../Style/Home.css'
import { useRef } from 'react';

export default function Trend() {
    const trend_scroll = useRef(null);

    const Sleft = () => {
        if(trend_scroll.current)
        trend_scroll.current.scrollLeft -= 365; 
    }

    const Sright = () => {
    if(trend_scroll.current)
    trend_scroll.current.scrollLeft += 365; 
    }
        
  return (
    <div>
        <div class = "title"> 
        <h2>Trending Today</h2>
    </div>
    <div class = "MainScroll">
        <div class = "trend-btn">
            <button id="trend-b" onClick={Sleft}><img src="/img/back.png" alt="Loading" /></button>
            <button id="trend-n" onClick={Sright}><img src="/img/next.png" alt="loading" /></button>
        </div>
        <div class = "cover" ref={trend_scroll}>
            <div class = "images">
                <div class="img"><img class="i" src="/img/trend1.jpg" alt="..." /></div>
                <div class="img"><img class="i" src="/img/trend2.jpg" alt="..." /></div>
                <div class="img"><img class="i" src="/img/trend3.jpg" alt="..." /></div>
                <div class="img"><img class="i" src="/img/trend4.jpg" alt="..." /></div>
                <div class="img"><img class="i" src="/img/trend5.jpg" alt="..." /></div>
                <div class="img"><img class="i" src="/img/trend6.jpg" alt="..." /></div>
                <div class="img"><img class="i" src="/img/trend7.jpg" alt="..." /></div>
                <div class="img"><img class="i" src="/img/trend8.jpg" alt="..." /></div>
            </div>
        </div>
    </div>
    </div>
  )
}
