
// const Details = ({item}) => {
//     const {_id,contest_name,contest_type,contest_category,image,attempted_count,
//         short_description,contest_winner_name,inspirational_message,contest_prize,
//         winner_image,deadline_counter} = item || {}


//     return (
//         <div>
//             <div className="card card-compact w-96 text-center text-black bg-purple-200 shadow-xl mx-auto">
//             <figure><img src={image} alt="Shoes" /></figure>
//             <p className="absolute right-24 text-center top-3  bg-orange-500 text-white px-3">Attempted Count: {attempted_count}</p>
        
//             <div className="card-body">
//                 <h2 className="text-2xl font-bold text-center">{contest_name}</h2>
//                 <h2 className="text-lg font-bold text-center">{contest_type} Contest</h2>

//                 {
//                 short_description.length > 200 
//                 ? <p>{short_description.slice(0,200)} Read More....</p>
//                 :
//                 <p>{short_description}</p>

//                 }
            
//                 <div className="card-actions flex justify-between items-center mx-auto">

//                 <Link to={`/contestDetails/${_id}`}>
//                 <button className="btn px-10 btn-outline bg-purple-500 border-0 border-b-4
//                 border-orange-500 text-white ">Registration</button>
//                 </Link>

//                 </div>
//             </div>
//             </div> 
            
//         </div>
//     );
// };

// export default Details;