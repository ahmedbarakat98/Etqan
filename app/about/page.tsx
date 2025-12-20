import TextType from '@/components/TextType'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return <>
  <div className="w-full h-screen">
        <Image
          width={100}
          height={100}
          className="absolute inset-0 w-full h-full object-cover"
          src="/industries.jpeg"
          alt="Industries"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center text-white">
          <h1 className="text-3xl text-center rubik px-50 md:text-3xl lg:text-4xl font-bold">
            <TextType
              text={
                "How can Geographic Information Science enhance business insights, reduce costs, and improve decision quality?"
              }
              typingSpeed={80}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="_"
            />
          </h1>
        </div>
      </div>
  </>
  }
