import { useMutation } from "@apollo/client"
import { Update_ProductDocument } from "../graphql/types/graphql"
import { wishlistVar } from "../graphql/variables/wishlistVar";

const useARW = () => {
  const [updateWishlist] = useMutation(Update_ProductDocument);

  const _updateWishlist = async (productID: string, wishlist: boolean) => {
    if (productID) {
      const { data } = await updateWishlist({
        variables: {
          id: productID,
          data: {
            wishlist
          }
        }
      })

      const product_id = data?.updateProduct?.data?.attributes?.product_id
      if (product_id) {
        const existingWishlist = wishlistVar();
        if(wishlist) {
          wishlistVar([...existingWishlist, product_id])
        } else {
          wishlistVar(existingWishlist.filter(item => item !== product_id))
        }
      }
    }
  }

  return _updateWishlist;
}

export default useARW;