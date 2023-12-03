import ContestItems from "../../Share/ContestItems/ContestItems";

const ContestCategory = ({items}) => {
    return (
        <div className="mt-20">

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 ">
            {
               
                items.map(item=><ContestItems item={item} ></ContestItems>)

            }
          
        </div>

        
        </div>
        
    );
};

export default ContestCategory;
