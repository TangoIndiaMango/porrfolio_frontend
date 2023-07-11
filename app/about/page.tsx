import BackgroundSpline from "@/components/backgroundSpline"
import Header from "@/components/header"
import { getAboutParagraphs } from "@/utils/request"


export default function About() {
  return (
    <div className='container home-bg about-bg'>
      <BackgroundSpline className='aboutSpline'/>
      <div className="content demacation">
        <Header active='/about' isDark/>
        <BodyContent />
      </div>
      
    </div>
  )
}

const BodyContent = async () => {
  const paragraphs = await getAboutParagraphs()

  return (
  <div className="bodyContent">
    <div className="title">
      About me
    </div>
    <div className="context">
      {paragraphs.map((item, index) => <div className="about-context" key={index} dangerouslySetInnerHTML={{__html:item.paragraph}}></div> )}
    </div>
  </div>
  )
}

