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
    CLEAR_ERRORS
} from '../constants/constants'





export const agentReducer = (state = {agents: [] }, action) =>{

    switch(action.type){
        case ALL_AGENTS_REQUEST:
            return{
                loading: true,
                agents: []
            }

        case  ALL_AGENTS_SUCCESS:
            return{
                loading: false,
                agents: action.payload.agents,
            }


        case  ALL_AGENTS_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state
        
    }

}


// single AGENT
export const singleAgentReducer = (state = { agent: {} }, action) => {

    switch (action.type) {
      case SINGLE_AGENT_REQUEST:
        return {
          loading: true,
          ...state,
        };

      case SINGLE_AGENT_SUCCESS:
        return {
          ...state,
          loading: false,
          agent: action.payload,
        };

      case SINGLE_AGENT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
        
      default:
        return state;
    }
};



export const getProperties = (state = {properties: []}, action)=>{

    switch(action.type){
        
        case ALL_PROPERTIES_REQUEST:
            return{
                loading: true,
                properties: []
            }

        case ALL_PROPERTIES_SUCCESS:
            return{
                loading: false,
                properties: action.payload.properties
            }
        
        case ALL_PROPERTIES_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            
        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state
    }

}


export const getProperty = (state = {property: {}}, action)=>{

    switch(action.type){
        
        case SINGLE_PROPERTY_REQUEST:
            return{
                loading: true,
                ...state,
            }

        case SINGLE_PROPERTY_SUCCESS:
            return{
                ...state,
                loading: false,
                property: action.payload
            }
        
        case SINGLE_PROPERTY_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            
        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state
    }

}



export const getProjects = (state = {projects: []}, action)=>{

    switch(action.type){
        
        case ALL_PROJECTS_REQUEST:
            return{
                loading: true,
                projects: []
            }

        case ALL_PROJECTS_SUCCESS:
            return{
                loading: false,
                projects: action.payload.projects
            }
        
        case ALL_PROJECTS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            
        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state
    }

}


export const getProject = (state = {project: {}}, action)=>{

    switch(action.type){
        
        case SINGLE_PROJECT_REQUEST:
            return{
                loading: true,
                ...state,
            }

        case SINGLE_PROJECT_SUCCESS:
            return{
                ...state,
                loading: false,
                project: action.payload
            }
        
        case SINGLE_PROJECT_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            
        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state
    }

}


export const getBlogs = (state = {blogs: []}, action)=>{

    switch(action.type){
        
        case ALL_BLOGS_REQUEST:
            return{
                loading: true,
                blogs: []
            }

        case ALL_BLOGS_SUCCESS:
            return{
                loading: false,
                blogs: action.payload.blogs
            }
        
        case ALL_BLOGS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            
        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state
    }

}


export const getBlog = (state = {blog: {}}, action)=>{

    switch(action.type){
        
        case SINGLE_BLOG_REQUEST:
            return{
                loading: true,
                ...state,
            }

        case SINGLE_BLOG_SUCCESS:
            return{
                ...state,
                loading: false,
                blog: action.payload
            }
        
        case SINGLE_BLOG_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            
        case  CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }

        default:
            return state
    }

}