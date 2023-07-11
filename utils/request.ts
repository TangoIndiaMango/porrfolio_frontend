import axios, {AxiosError} from "axios"
import { aboutType, blogType, experienceType, homeDataType, projectType, socialLinkType } from "./types"

const baseUrl = "https://backend-api-n9aa.onrender.com/portfolio-path/"

export const getHomeData = async (): Promise<homeDataType | null> => {
    const resp = await axios.get( baseUrl + "user-detail-url/").catch(
        (error: AxiosError) => {
            console.log(error)
        }
    )

    if(resp){
        
        
        return resp.data[0] as homeDataType
    }
    return null
}

export const getSocialLinks = async (): Promise<socialLinkType[] | []> => {
    const resp = await axios.get(baseUrl + "usersociallink-url/").catch(
        (error: AxiosError) => {

        }
    )

    if(resp){
        return resp.data
    }

    return []
}

export const getAboutParagraphs = async (): Promise<aboutType[] | []> => {
    const resp = await axios.get(baseUrl + "aboutcontent-url/").catch(
        (error: AxiosError) => {
 
        }
    )

    if(resp){
        // console.log(resp.data)
        return resp.data
    }

    return []
}

export const getExperiences = async (): Promise<experienceType[] | []> => {
    const resp = await axios.get(baseUrl + "experience-url/").catch(
        (error: AxiosError) => {
          console.log(error)
        }
    )

    if(resp){
        // console.log(resp.data)
        return resp.data
    }

    return []
}

export const getProjects = async (): Promise<projectType[] | []> => {
    const resp = await axios.get(baseUrl + "project-url/").catch(
        (error: AxiosError) => {
       
        }
    )

    if(resp){
        return resp.data
    }

    return []
}

export const getBlogs = async (): Promise<blogType[] | []> => {
    const resp = await axios.get(baseUrl + "blog-url/").catch(
        (error: AxiosError) => {

        }
    )

    if(resp){
        return resp.data
    }

    return []
}