import React from 'react'

const Cards = ({item}) => {
  return (
    <div className='mt-10  my-4'>
        <div className="card hover:bg-slate-700 w-80 hover:shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white  ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-slate-300 hover:text-black ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards