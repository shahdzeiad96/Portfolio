import code from '../assets/code.png'
import palette from '../assets/color-palette.png'
import rocket from '../assets/rocket.png'
import love from '../assets/heart.png'
import './About.css'
function About() {
  return (
    <div className='about-section'>
      <h1 className='about-header'>About ME</h1>
      <p className='aboutme'>
        I'm a passionate Fullstack developer with a love for creating digital
        experiences that are both beautiful and functional.
      </p>
      <div className='myjourney-section'>
        <section className='my-journey'>
          <h3>My Journey</h3>
          <p>
            I started my journey in tech with a strong curiosity for how
            websites work. I first learned HTML & CSS and even taught kids the
            basics of web development. Over time, I moved into JavaScript,
            Python, and database management, which opened the door to building
            complete applications.
            </p>
            <p>
             I gained experience not only in coding but
            also in managing projects, running an online business, and
            understanding user needs. This mix of technical and real-world
            experience shaped me into a full stack developer who can handle both
            the front-end and back-end, while keeping the user experience at the
            center. 
            </p>
            <p>
            Today, I continue to grow my skills by building responsive,
            scalable web applications and turning ideas into real solutions.
          </p>
        </section>
        <section className='cards'>
            <div className="card">
                <img src={code} alt="code" className='icon'/>
                <p className='card-header'>Clean Code</p>
                <p className='card-desc'>Writing maintainable, scalable, and efficient code that follows best practices.</p>
            </div>            
            <div className="card">
                <img src={rocket} alt="Performance" className='icon'/>
                <p className='card-header'>Performance</p>
                <p className='card-desc'>Building fast, optimized applications that provide excellent user experience.</p>
            </div>            
            <div className="card">
                <img src={palette} alt="code" className='icon' />
                <p className='card-header'>Design Focus</p>
                <p className='card-desc'>Creating intuitive and beautiful user interfaces with attention to detail.</p>
            </div>            
            <div className="card">
                <img src={love} alt="code" className='icon'/>
                <p className='card-header'>Passion</p>
                <p className='card-desc'>Genuinely excited about technology and continuously learning new skills.</p>
            </div>
        </section>
      </div>
    </div>
  );
}

export default About;
