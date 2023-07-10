import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import AllCandidates from '../components/candidates/allCandidates'
export default function Home() {
  return (
   <div className=''>
    <NavBar></NavBar>
    <AllCandidates></AllCandidates>
    
   </div>
  )
}
