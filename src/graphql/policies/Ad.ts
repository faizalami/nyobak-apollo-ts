
import type { TypePolicies } from "@apollo/client"
import resolveWishlist from "../../helpers/resolveWishlist"

const AdPolicy: TypePolicies = {
  Ad: {
    fields: {
      is_wishlisted: {
        read: (existing, options) => {
          const product_id = options.readField('product_id')
          return resolveWishlist(String(product_id))
        }
      }
    }
  }
}

export default AdPolicy