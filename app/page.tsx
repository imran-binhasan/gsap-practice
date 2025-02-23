/* eslint-disable @next/next/no-img-element */
'use client'
import { gsap } from "gsap";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    
    gsap.to(".logo", {
      duration: 2,
      delay: 2,
      x: 300,
      scale:0.2,
      repeat:2,
      repeatDelay:1,
      stagger:{
        each:0.2,
        from:'center',
        amount:0.1,
      },
      yoyo:true,
      backgroundColor: "#560563",
      borderRadius: "20%",
      border: '5px solid red',
      ease: 'sine',
      onComplete: () => {
        gsap.to(
          '.avator', {
            duration: 5,
            y: 300,
            border: '10 px solid green',
            backgroundColor: 'blue',
          }
        )
        }
      }
    );

    gsap.set(".avator", {
      duration: 2,
      x: 100
    })

  })
  return (
    <div>
      <img className="logo w-40 h-40" src="/pg.png" alt="" />
      <img className="logo w-40 h-40" src="/pg.png" alt="" />
      <img className="logo w-40 h-40" src="/pg.png" alt="" />
      <img className="logo w-40 h-40" src="/pg.png" alt="" />

      <img className="avator w-40 h-40" src="/pg.png" alt="" />


    </div>
  );
}
