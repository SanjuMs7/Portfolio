
import Navbar from './navbar/navbar'
import Dashboard from './dashboard/dashboard.jsx'
import Title from './title/title.jsx'
import Project from './projects/project.jsx'
import Copyright from './copyright/copyright.jsx'
import About from './about/about.jsx'
import Skills from './skills/skills.jsx'
import Contact from './contact/contact.jsx'
function App() {
  return (
    <>
      <div className='container'>
          <Navbar/>
          <Dashboard/>
          <Title heading="Get to Know More" subheading="About Me"></Title>
          <About/>
          <Title heading="My Design & Dev" subheading="Skills"/>
          <Skills/>
          <Title heading="Browse My Recent" subheading="Projects"/>
          <div className='projects-container'>
              
              <Project/>
          </div>
          <Title heading="Get in Touch" subheading="Connect Me"></Title>
          <Contact/>
      </div>
        <Copyright/>
    </>
  )
}

export default App