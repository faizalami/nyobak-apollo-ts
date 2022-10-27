import React, {useEffect} from 'react'
import { useLazyQuery } from "@apollo/client"
import { Get_All_AdsDocument } from "../graphql/types/graphql"

const Ads = () => {
  const [getAds, { data, loading }] = useLazyQuery(Get_All_AdsDocument, {
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    if (!data?.ads?.data.length) {
      getAds();
    }
  }, [getAds, data?.ads?.data.length])

  if (loading) {
    return (<div>Loading...</div>)
  }

  return (
    <div>
      <h3>Ads</h3>
      <ul>
        {data?.ads?.data.map((item, index) => (
          <li key={item.id || index}>
            {item.attributes?.name} <br />
            product ID: {item.attributes?.product_id} <br />
            {item.attributes?.is_wishlisted && 'Ad Saved in wishlist'} <br />
            <button type='button'>{item.attributes?.is_wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}</button> <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ads;