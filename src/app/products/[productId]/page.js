import React from 'react'

export default async function DynamicProductPage({params, searchParams}) {
    const id = await params.productId;
    const searchItem = await searchParams || 'no query'
    console.log(searchItem)
  return (
    <div>
      <h2>This is DynamicProduct page </h2>
      <p>id: {id} </p>
    </div>
  )
};
