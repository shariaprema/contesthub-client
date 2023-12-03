
const TitleSection = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center pt-20'>
            <h2 className='text-orange-500 text font-bold mb-3'>--- {subHeading} ---</h2>
            <p className='text-3xl border-y-2 border-purple-500 py-3 text-purple-600 uppercase'>{heading}</p>
            
        </div>
    );
};

export default TitleSection;

