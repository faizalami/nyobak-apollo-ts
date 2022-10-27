
import type { TypePolicies } from "@apollo/client"
import resolveWishlist from "../../helpers/resolveWishlist"

const ProductPolicy: TypePolicies = {
  Product: {
    fields: {
      is_wishlisted: {
        read: (existing, options) => {
          const product_id = options.readField('product_id')
          const default_wishlist = options.readField('wishlist')
          return resolveWishlist(String(product_id), !!default_wishlist)
        }
      }
    }
  }
}

export default ProductPolicy