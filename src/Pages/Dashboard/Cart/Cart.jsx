import React from 'react';
import useCart from '../../../hooks/useCart';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart,refetch]=useCart()

    const contestPrice = cart.reduce((total,item)=>total + item.contest_price, 0)
    return (
        <div className='pt-1'>
                  <div className=" p-10 bg-blue-200 space-y-4 mb-4">
            <h2 className="text-4xl font-bold ">Total Contest: {cart.length}</h2>
            <h2 className="text-2xl font-bold mb-4 ">Total Price: ${contestPrice}</h2>
           <div>
           {
                cart.length ? <Link to={"/payment"}>
                <button className="btn px-10 btn-outline bg-purple-500 border-0 border-b-4
                border-orange-500 text-white">Payment</button>
               </Link>
               :

               <button disabled className="btn px-10 btn-outline bg-purple-500 border-0 border-b-4
               border-orange-500 text-white">Payment</button>
            }
           </div>
            
            </div>


        </div>
    );
};

export default Cart;