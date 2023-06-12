import React from 'react';

const Faq = () => {
    return (
        <div className='md:mt-20 mt-60 md:flex '>

            <div className='mx-10 md:mt-0 mt-96 p-4 w-1/2'>
                  <p className='text-4xl font-serif font-bold px-6 pb-6 md:mt-0 mt-80'>FAQ</p>
                <div className="collapse collapse-arrow bg-base-200 my-2 mt-4">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-serif bg-purple-800 text-blue-100">
                    Q1: Why is it important to learn foreign languages?
                    </div>
                    <div className="collapse-content ">
                        <p className='p-4'>Learning foreign languages is important for several reasons. It enhances cultural understanding. Language is deeply intertwined with culture, and by learning a foreign language, you gain insight into the customs, traditions, and perspectives of another society. This understanding fosters empathy and helps break down cultural barriers.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-serif bg-purple-800 text-blue-100">
                    Q2: How does learning a foreign language benefit personal growth?
                    </div>
                    <div className="collapse-content">
                        <p className='p-4'> Learning a foreign language contributes to personal growth by expanding cultural understanding, improving cognitive abilities, boosting self-confidence, enhancing communication skills, and fostering adaptability. This exposure fosters a greater sense of empathy, cultural sensitivity, and appreciation for diversity.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 my-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-serif bg-purple-800 text-blue-100">
                    Q3: What is an effective strategy for learning a foreign language?
                    </div>
                    <div className="collapse-content ">
                        <p className='p-4'>One effective strategy for learning a foreign language is to prioritize immersion and active practice. Immersion involves exposing yourself to the language as much as possible, both through listening and reading materials in the target language. This can include watching movies or TV shows, listening to music or podcasts, and reading books or articles. Immersion helps you familiarize yourself with the language's natural flow, vocabulary, and cultural context.</p>
                    </div>
                </div>
            </div>
            <div className=' mx-2 px-5  '>
                <p className='text-4xl font-serif font-bold p-6'>Our Learners</p>
                <img className='mt-3 h-[350px] w-full hover:scale-120' src="https://media.istockphoto.com/id/865708776/photo/google-pins-on-a-world-map-with-flights-connexions.jpg?s=612x612&w=0&k=20&c=7Y7Ya5ZnqJ9vgloFccS7I8jBpTp7he3gcGpHqgfpFqo=" alt="" />
            </div>
        </div>
    );
};

export default Faq;