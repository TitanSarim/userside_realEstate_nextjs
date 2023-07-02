import {
    ALL_PROPERTIES_REQUEST,
    ALL_PROPERTIES_SUCCESS,
    ALL_PROPERTIES_FAIL,
    SINGLE_PROPERTY_REQUEST,
    SINGLE_PROPERTY_SUCCESS,
    SINGLE_PROPERTY_FAIL,
    ALL_AGENTS_REQUEST,
    ALL_AGENTS_SUCCESS,
    ALL_AGENTS_FAIL,
    SINGLE_AGENT_REQUEST,
    SINGLE_AGENT_SUCCESS,
    SINGLE_AGENT_FAIL,
    ALL_PROJECTS_REQUEST,
    ALL_PROJECTS_SUCCESS,
    ALL_PROJECTS_FAIL,
    SINGLE_PROJECT_REQUEST,
    SINGLE_PROJECT_SUCCESS,
    SINGLE_PROJECT_FAIL,
    ALL_BLOGS_REQUEST,
    ALL_BLOGS_SUCCESS,
    ALL_BLOGS_FAIL,
    SINGLE_BLOG_REQUEST,
    SINGLE_BLOG_SUCCESS,
    SINGLE_BLOG_FAIL,
} from '../constants/constants'

import axios from "axios";



export const allAgent = () => async(dispatch) =>{

    try {
      dispatch({ type: ALL_AGENTS_REQUEST });
    
  
        let link = `/api/v1/allAgents`;
  
          const {data} = await axios.get(link);
  
          dispatch({
              type: ALL_AGENTS_SUCCESS,
              payload: data
          })

  
    } catch (error) {
            dispatch({ type: ALL_AGENTS_FAIL, payload: error.response?.data?.message });
  
    }
  
}

export const SingleAgent = (id) => async(dispatch) =>{

    try {
      dispatch({ type: SINGLE_AGENT_REQUEST });
  
  
        let link = `/api/v1/agents/agent/${id}`;
        console.log('Fetching agent data from:', link);
  
  
          const {data} = await axios.get(link);
  
          dispatch({
              type: SINGLE_AGENT_SUCCESS,
              payload: data
          })
      
    } catch (error) {
            dispatch({ type: SINGLE_AGENT_FAIL, payload: error.response?.data?.message });
  
    }
  
}

// 
export const allProperties = () => async(dispatch) =>{

    try {
  
  
      dispatch({ type: ALL_PROPERTIES_REQUEST });
  
        let link = `/api/v1/properties`
  
        const {data} = await axios.get(link)
        
        console.log('data',data);

        dispatch({
          type: ALL_PROPERTIES_SUCCESS,
          payload: data
        })
      
  
  
    }catch(error){
      dispatch({ type: ALL_PROPERTIES_FAIL, payload: error.response?.data?.message });
    }
  
}


export const singleProperties = (slug) => async(dispatch) =>{

    try {
  
      dispatch({ type: SINGLE_PROPERTY_REQUEST });
    
  
      let link = `/api/v1/properties/${slug}`
  
      const {data} = await axios.get(link)
      console.log(data);
      dispatch({
        type: SINGLE_PROPERTY_SUCCESS,
        payload: data
      })
  
  
    }catch(error){
      dispatch({ type: SINGLE_PROPERTY_FAIL, payload: error.response?.data?.message });
    }
  
}
  



export const getProjects = () => async (dispatch) => {

    try {
  

      dispatch({type: ALL_PROJECTS_REQUEST})
  
      let link = `/api/v1/user/Allprojects`
      const {data} = await axios.get(link)
  
      dispatch({
        type: ALL_PROJECTS_SUCCESS,
        payload: data
      })
  
      
    } catch (error) {
      dispatch({ type: ALL_PROJECTS_FAIL, payload: error.response?.data?.message });
    }
  
}
  
  
  
  export const getProject = (slug) => async (dispatch) => {
  
    try {
  

      dispatch({type: SINGLE_PROJECT_REQUEST})
  
      let link = `/api/v1/user/project/${slug}`
      const {data} = await axios.get(link)
  
      dispatch({
        type: SINGLE_PROJECT_SUCCESS,
        payload: data
      })
  
      
    } catch (error) {
      dispatch({ type: SINGLE_PROJECT_FAIL, payload: error.response?.data?.message });
    }
  
}



export const getBlogs = () => async (dispatch) => {

    try {
  
      dispatch({type: ALL_BLOGS_REQUEST})
  
      let link = `/api/v1/user/Allblogs`
      const {data} = await axios.get(link)
  
      dispatch({
        type: ALL_BLOGS_SUCCESS,
        payload: data
      })
  
      
    } catch (error) {
      dispatch({ type: ALL_BLOGS_FAIL, payload: error.response?.data?.message });
    }
  
}
  
  
export const getBlog = (slug) => async (dispatch) => {
  
    try {

  
      dispatch({type: SINGLE_BLOG_REQUEST})
  
      let link = `/api/v1/userblogs/blog/${slug}`
      const {data} = await axios.get(link)
  
      dispatch({
        type: SINGLE_BLOG_SUCCESS,
        payload: data
      })
  
      
    } catch (error) {
      dispatch({ type: SINGLE_BLOG_FAIL, payload: error.response?.data?.message });
    }
  
}
