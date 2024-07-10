import React,{useState,useContext} from 'react';
import { CartContext } from "@/utils/ContextReducer";
import Image from 'next/image'; // Ensure this import is correct
import Link from 'next/link';
function Cards(props) {
  const data = props.foodData; 
  const {state,dispatch} = useContext(CartContext);
  const priceOptions = Object.keys(data.price);
  const [size, setSize] = useState(priceOptions[0]); 
  const [qty, setQty] = useState(1);
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleAddtoCart = async() => {
    const updateItem=await(state.find((item)=>item.tempId===data["_id"]+size));
    if(!updateItem){
      dispatch({
        type:"ADD",
        id:data["_id"],
        tempId:data["_id"]+size,
        name:data.name,
        price:finalPrice,
        qty:qty,
        priceOption:size,
        img:data.img
      });
    }
    if(updateItem){
      dispatch({
        type:"UPDATE",
        tempId:data.id+size,
        qty:qty,
        price:finalPrice
      });
    }
  };
  let finalPrice = qty*parseInt(data.price[size]);
  return (
    <div className="box">
      <div className="lg:w-80 md:w-65 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
        <Link href="/Item/[item]" as={`/Item/${data["_id"]}`}>
        <div className="relative w-full h-80">
          <Image
            src={data.img}
            layout="fill"
            objectFit="cover"
            alt="biryani" />
        </div>
        <div className="p-4">
          <div className="font-bold short_descriptiont mb-2 dark:text-green-100 text-xl uppercase">{data.name}</div>
          <p className="short_description text-gray-700 dark:text-gray-400 text-base">
            {data.description}
          </p>
        </div>
        <div className="flex px-4 justify-between">
          <select className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
          onChange={handleQty}>
            {Array.from(Array(10), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className=" h-100  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            onChange={handleSize}>
            {priceOptions.map((options) => {
              return (
                <option className="uppercase" key={options} value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>
        </Link>
        <div className="flex p-4 font-bold justify-between">
          <button className="border dark:text-gray-100 text-gray-900 dark:border-gray-400 border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100 "
          onClick={handleAddtoCart}>
            Add to Cart
          </button>
          <p className="p-2 text-xl dark:text-gray-100 text-gray-900">₹{finalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
