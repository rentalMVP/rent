import Link from 'next/link'
import { useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'

export default function Header() {

  return (
    <section className="p-4 bg-black" >
        <div style={{ maxWidth:"1440px"}} className="m-auto">
            <Link href='/' > 
              <div className='flex flex-row items-center justify-start cursor-pointer'>
                <img src='../image/logo.svg' style={{ width:"40px"}}/> 
                <p style={{ marginLeft:"20px", fontSize:"24px", color:"white", fontWeight:"700"}}>SwiftDrop</p>
              </div>        
            </Link>
        </div>
    </section>
  )
}
