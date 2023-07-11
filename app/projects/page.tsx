
import ProjectCard from '@/components/Projectcard'
import BackgroundSpline from '@/components/backgroundSpline'
import Header from '@/components/header'
import { getProjects } from '@/utils/request'




const Project = async () => {

  const projects = await getProjects()

  return (
    <div className='container home-bg about-bg project-bg'>
      <BackgroundSpline />
      <div className="content demacation">
        <Header active='/projects' />
        <div className="bodyContent">
          <div className="title">
            My Projects
          </div>

          <div className="content-grid">
            {projects?.map((item, i) => <ProjectCard key={i} project={item} />)}
          </div>
        </div>
      </div>

    </div>
  )
}



export default Project;
// export const getServerSideProps = async () => {
//   const projects = await getProjects()

//   return {
//     props: {
//       projects,
//     }
//   }
// }