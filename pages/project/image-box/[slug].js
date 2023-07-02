import React, { useEffect } from 'react';
import ImageBox from '../image-box';
import { getProject } from '../../../redux-toolkit/actions/action';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';



const propertiesPage = ()=> {

  const router = useRouter();
  const { slug } = router.query;
  

  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.project);
  
  console.log("project", project);

  useEffect(() => {
    if (slug) {
      console.log('Dispatching Single project action');
      dispatch(getProject(slug));
    }
  }, [dispatch, slug]);


  console.log('project', project);


  return <ImageBox project={project} />;

 
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  return {
    props: {
      slug,
    },
  };
}

export default propertiesPage;
