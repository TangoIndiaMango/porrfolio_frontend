
import { socialLinkType } from '@/utils/types'
import BackgroundSpline from '../components/backgroundSpline'
import Header from '../components/header'
import { getHomeData, getSocialLinks } from '../utils/request'
import Image from "next/image"



export default function Home() {
  return (
    <div className='container home-bg'>
      <BackgroundSpline />
      <div className="content demacation">
        <Header active='/'/>
        <BodyContent />
      </div>
      
    </div>
  )
}

const BodyContent = async () => {
  const homeData = await getHomeData()
  const socialLinks = await getSocialLinks()

  // console.log(homeData)

  return (
    <div className="bodyContent">
      {homeData && (
        <>
          <div className="infoArea">
            <h4>{homeData.welcome_title}</h4>
            <h1>{homeData.welcome_note}</h1>
            <p>{homeData.welcome_description}</p>
            <a href={homeData.cv_link} download target="_blank" rel="noreferrer" className="d_button">
              Download C.V
            </a>
          </div>
          <div className="visualArea">
            <div className="cover">
              <Image width="200" height="150" className="homeImage" alt="image" src={homeData.user_image}/>
            </div>
            <div className="social-container">
              <div className="info mobile">Connect with me</div>
              <div className="social-links">
                {socialLinks.map((item, index) => (
                  <SocialLink item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
  
}

const SocialLink = ({item}:{item: socialLinkType}) => {

  return (
  <a href={item.link} target="_blank" className="link-item" rel="noreferrer">
      <Image width="24" height="24" alt={item.name} src={item.icon} />
  </a>
  )
}

// export const getServerSideProps = async () => {
//   const homeData = await getHomeData()
//   const socialLinks = await getSocialLinks()

//   console.log(homeData)

//   return {
//       homeData,
//       socialLinks
//     }
  
// }