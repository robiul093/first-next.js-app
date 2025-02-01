'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {

    const navigate = useRouter();
    const handelNavigeteLogin = () =>{
        navigate.push('/login')
    }
    
  return (
    <div className='bg-sky-700 py-3 flex justify-between px-6 text-white'>
      <div>
        <Link href='/'>My app</Link>
      </div>
      <div className='space-x-3'>
        <Link href='/products'>All Products</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <button onClick={handelNavigeteLogin}>Login</button>
        <Link href='/register'>Registation</Link>
      </div>
    </div>
  )
}
