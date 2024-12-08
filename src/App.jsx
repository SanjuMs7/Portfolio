
import Navbar from './navbar/navbar'
import Dashboard from './dashboard/dashboard.jsx'
import Title from './title/title.jsx'
import Project from './projects/project.jsx'
import Copyright from './copyright/copyright.jsx'
import About from './about/about.jsx'
import Skills from './skills/skills.jsx'
import Contact from './contact/contact.jsx'
import EdusityProjectPreview from './assets/project-preview.png';
import DbmsProjectPreview from './assets/dbms-project.png'
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
              <Project projectName="Edusity" 
                        projectDescription="Edusity is a straightforward website crafted using React.js as Part of the learning process. It features clean design and user-friendly interfaces, showcasing essential information effectively while leveraging React's capabilities for a responsive and intuitive browsing experience."
                        projectPreview={EdusityProjectPreview}
                        gitRepoLink="https://github.com/SanjuMs7/Edusity"
                        livePreviewLink="https://sanjums7.github.io/Edusity/"
                        />
              <Project projectName="Mess Attendance" 
                        projectDescription="The Mess Attendance App is a DBMS project collaboratively developed using MERN Stack to simplify attendance management with a clean interface and essential functionality. My contribution focused on designing and implementing the frontend UI, ensuring a responsive and engaging user experience by leveraging React's capabilities."
                        projectPreview={DbmsProjectPreview}
                        gitRepoLink=""
                        livePreviewLink="https://mecmh.vercel.app/"/>
          </div>
          <Title heading="Get in Touch" subheading="Connect Me"></Title>
          <Contact/>
      </div>
        <Copyright/>
    </>
  )
}

export default App