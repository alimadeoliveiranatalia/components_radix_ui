import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../pages/Home.module.css'
import { PopoverRadix } from '../components/PopoverRadix'
import { ModalRadix } from '@/components/ModalRadix'
import { ContentModal } from '@/components/ContentModal'


export default function Home() {
  return (
    <div>
      <PopoverRadix />
      <ModalRadix />
    </div>
  )
}
