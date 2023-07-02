import React, { useEffect } from 'react';
import ImageBox from '../image-box';
import { singleProperties } from '../../../redux-toolkit/actions/action';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';



const propertiesPage = ()=> {

  const router = useRouter();
  const { slug } = router.query;
  

  const dispatch = useDispatch();
  const { property } = useSelector((state) => state.property);
    
  useEffect(() => {
    if (slug) {
      console.log('Dispatching Single property action');
      dispatch(singleProperties(slug));
    }
  }, [dispatch, slug]);


  console.log('property', property);


  return <ImageBox property={property} />;

 
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
