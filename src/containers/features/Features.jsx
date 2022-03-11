import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData =[
    {

        title: "Improving end distrusts instantly ",
        text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
     {   title: "Become the tended active",
        text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
},
{
        title: "Message or am nothing ",
        text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
},
 {       title: "Really boy law county ",
        text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    }



]
const Features = () => {
    return (
        <div className='gpt3__features section__padding' id="features">
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>


            <div className='gpt3__features-container'>
            
            {featuresData.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index} />
            ))}

            </div>
        </div>
    )
}

export default Features
 