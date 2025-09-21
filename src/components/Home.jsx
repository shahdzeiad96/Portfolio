import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png'
import mail from '../assets/email.png'
import behance from '../assets/social.png'
import arrow from '../assets/arrow-down.png'
// import herophoto from '../assets/ChatGPT Image Sep 18, 2025, 07_38_09 PM.png'
import './Home.css'

function Home() {
  return (
    <section className='hero-section' id='Home'>
      {/* <img src={herophoto} alt="hero-pp" className='hero-pp' /> */}
      <h5>Hello, I am</h5>
      <h1 className='hero-name'>Shahd Fakhouri</h1>
      <h3 className='hero-header'><span>FullStack Developer</span> & UI/UX Designer</h3>
      <p className='hero'>I build beautiful, responsive, and scalable web applications using modern full-stack technologies. Passionate about clean code, seamless user experiences, and turning ideas into powerful solutions from front-end to back-end.</p>
      <div className="cta-btns">
        <button className='viewMyWork'><a href="#Projects">View My Work</a></button>
        <button className='getInTouch'><a href="#Contact">Get in touch</a></button>
      </div>
      <div className="social-networks">
        <a href="https://github.com/shahdzeiad96/shahdzeiad96"><img src={github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/shahd-fakhouri-474b14119/"><img src={linkedin} alt="linked in" /></a>
        <a href="mailto:shahd.zeiad@gmail.com"><img src={mail} alt="email" /></a>
        <a href="https://www.behance.net/shahdzeiad"><img src={behance} alt="behance" /></a>
      </div>
          <a href="#About" class="scroll-arrow" aria-label="Scroll down">
      <span class="arrow"><img src={arrow} alt="go down" className='go-down' /> </span>
    </a>
    </section>

  );
}

export default Home;
