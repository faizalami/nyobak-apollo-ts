import React, {useEffect} from 'react'
import { useLazyQuery } from "@apollo/client"
import { Get_All_ProductsDocument } from "../graphql/types/graphql"
import useARW from '../hooks/useARW'

const Products = () => {
  const [getProducts, { data, loading }] = useLazyQuery(Get_All_ProductsDocument, {
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    if (!data?.products?.data.length) {
      getProducts();
    }
  }, [getProducts, data?.products?.data.length])

  const updateWishlist = useARW()

  if (loading) {
    return (<div>Loading...</div>)
  }

  return (
    <div>
      <h3>Products</h3>
      <ul>
        {data?.products?.data.map((item, index) => (
          <li key={item.id || index}>
            {item.attributes?.name} <br />
            {item.attributes?.is_wishlisted && 'Product Saved in wishlist'} <br />
            <button type='button' onClick={() => updateWishlist(item.attributes?.product_id || '', !item.attributes?.is_wishlisted)}>
              {item.attributes?.is_wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            </button> <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;