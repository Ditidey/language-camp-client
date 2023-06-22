import React, { useContext } from 'react';
import { getClasses } from '../../components/api-calls/apiCalls';
import { Link, useParams } from 'react-router-dom';
import DivTitle from '../../components/shared/DivTitle';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const PopularInstrSeeButton = () => { 
  const {id} = useParams();
    const [classes] = getClasses();   
    const classesFilter = classes.filter(each => each.teacher_email == id)
      console.log(classesFilter)
    return (
        <div className='pt-28 pb-10'>
         <DivTitle title={`Total ${classesFilter.length} classes available`}></DivTitle>
              {
                  classes && Array.isArray(classes) && classes.length > 0 && 
                  <div className='grid md:grid-cols-3 gap-5 md:px-20 px-3'>
                    {
                      classesFilter.map(each => <div key={each._id} className="card w-96 glass">
                      <figure><img src={each.class_image} alt="class!" className='w-full h-[300px]'/></figure>
                      <div className="card-body">
                        <h2 className="card-title font-bold">{each.class_name}</h2>
                        <p><span className='me-20'>Seat: {each.seat}</span> <span>Fee: {each.fee}</span></p>
                         
                      </div>
                      <p className='mt-3 text-purple-500 ms-20 mb-1 flex'>Select me from classes
                       <Link to='/classes'><FaArrowAltCircleUp className='mt-1 ms-1'></FaArrowAltCircleUp></Link></p>
                    </div>)
                    }

                  </div>
              }
           
        </div>
    );
};

export default PopularInstrSeeButton;