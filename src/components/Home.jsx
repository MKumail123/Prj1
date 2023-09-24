import React from 'react'
import home2 from '../assets/vg.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
    <>    
    
    <div className='home' id='home'>
        <main>
            <h1>KumailStars</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className='home2'>
    <img src={home2} alt="Graphics" />
     <div className='div'>
        <p className='ptag'>
            We are your and only one solution to the tech problems you face everyday.We are leading tech companies whose aims is to increase the problem solving ability in children.
        </p>
     </div>
    </div>
    <div className='home3' id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            non natus, iure ab officia rem ipsa cum
            sed cumque </p>
      </div>
    </div>
    <div className='home4' id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s"
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s"
          }}>
            <AiFillAmazonCircle/>
            <p>Amazone</p>
          </div>
          <div style={{
            animationDelay:"0.7s"
          }}>
            <AiFillYoutube/>
            <p>YouTube</p>
          </div>
          <div style={{
            animationDelay:"0.9s"
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    
    </>

  )
}

export default Home