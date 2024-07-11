"use client"

import React, { useState } from 'react';

export default function Home() {
 
 const [count, setCount] = useState(0)


  return (
    <>
        <div>
            <div>
                <nav>
                    <div>
                        <h1 className="text-red-700"><a href="/">Bird Eater</a></h1>
                    </div>
                </nav>
            </div>
            <ul>
                <li>
                    <a href="#">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </div>
        <main>
            <div>
                <a href="#">Login</a>
            </div>
            <header>
                <h2>stuff</h2>
            </header>
            <div>
                <h4>Hello World</h4>
                <div>
                    <img src="#" alt="" />
                    <div>
                        <span>Bird Chilli</span>
                    </div>
                </div>
            </div>
        </main>
      </>

  )
}