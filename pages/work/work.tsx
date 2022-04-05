import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter,
  VMenuBar,
  VTimelineGrid
} from '../../utils'
import styles from './work.module.scss'

export default function VWork() {
  return(
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta name="description" content="Mykola Sotnichenko Portfolio Page" />
        <meta name="author" content="Mykola Sotnichenko"/>
        <meta name="keywords" content="Mykola, Sotnichenko, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/>
      </Head>
      <VMenuBar activeTab="Work"/>
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>
              My work history
            </h1>
            <h2>
              I've started my journey with programming back in 2017 on
              National University of Life and Envirommental Sciences of Ukraine with C++ (basics). Later, after
              I'd finished my studies, I decided to go in the different direction.
              I was learning web development on my own.
              In 2021 I'd managed to get an internship and worked as a trainee Front-End (React) developer
              (JS React, Rest API). Since then, I have been working as Front-End React TypeScript Software Developer.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}