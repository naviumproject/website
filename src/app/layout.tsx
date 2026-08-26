import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@fontsource-variable/unbounded';
import '@fontsource-variable/inter';
import { motion } from "framer-motion"
import './globals.css'
import { WebThemeProvider } from './themeprovider';
import '@fortawesome/fontawesome-svg-core/styles.css'
import ThemeSwitcher from './themechanger';
import Footer from "./footer"; 
import NagBar from './nagbar';
import NagbarButton from './NagbarButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://pissandshittium.org'),
  title: 'navium',
  description: 'Browser that does probably care about u.',
  openGraph:{
    images:[
      {
        url:'/navium_iconandtitle.png',
        width:128,
        height:128,
        alt:'Navium Logo'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='font-text transition-colors bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text'>
        
      <WebThemeProvider>
      <ThemeSwitcher></ThemeSwitcher>
      <NagBar message={<><b>hallo</b> did you know i have a secret? i didnt too! <NagbarButton href="/broken">Tell me absolutely nothing, i dont care brah</NagbarButton></>}></NagBar>
        {children}
      
      <Footer></Footer>
      </WebThemeProvider>
        </body>
        
    </html>      

  )
}
