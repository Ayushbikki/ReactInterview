import React, { useState } from 'react'
import categories from './categories'

function Category() {
  const [data, setData] = useState(categories)
  const filterResult = (cartType) => {
    let result = categories.filter((fvalues) => {
      return fvalues.category === cartType
    })
    setData(result)
  }

  return (
    <>
      <h1 className='text-center text-info'>Shopping Items</h1>
      <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2'>
          <div className='col-md-3'>
            <button className='btn btn-warning w-100 mb-4' onClick={() => { filterResult("men's clothing") }}> Men </button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => { filterResult("women") }}> Women </button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => { filterResult("jewelery") }}> jewelery </button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => { filterResult("electronics") }}> Electronics </button>
            <button className='btn btn-warning w-100 mb-4' onClick={() => setData(categories)}> All </button>
          </div>
          <div className='col-md-9'>
            <div className='row'>
              {data.map((values) => {
                const { id, title, price, description, image } = values

                return (
                  <>

                    <div className='col-md-4 mb-2'>
                      <div className="card">
                        <img src={image} className="card-img-top" alt="Card image cap" />

                        <div className="card-body">
                          <h5 className="card-title">{title.substring(0, 20)}</h5>
                          <p> Price: {price} </p>
                          <p className="card-text">{description.substring(0, 70)}</p>
                          <button className="btn btn-success">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}


            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Category