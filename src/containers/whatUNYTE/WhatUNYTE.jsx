import React from 'react'
import { Feature } from '../../components';
import './whatUNYTE.css';
import html from '../../assets/html5-plain.svg'
import css from '../../assets/css3-plain.svg'
import react from '../../assets/react-original.svg'
import javascript from '../../assets/javascript-plain.svg'
import myspace from '../../assets/Myspace_logo.png'
import nodejs from '../../assets/nodejs-plain.svg'
import express from '../../assets/express.png'
import firebase from '../../assets/firebase-plain.svg'






const WhatUNYTE = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
            <div className='gpt3__whatgpt3-feature'>
            <Feature title="What I am learning" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
            </div>
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>Technologies</h1>
                <p>Explore The Library</p>

            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature img={css} title="CSS" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
               <Feature img= {react} title="REACT" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
               < Feature img={javascript} title="JAVASCRIPT" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
               < Feature img= {express} title="EXPRESS" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
               < Feature img= {firebase} title="FIREBASE" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
               <Feature img={html} title="HTML" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />

            </div>
        </div>
    )
}

export default WhatUNYTE