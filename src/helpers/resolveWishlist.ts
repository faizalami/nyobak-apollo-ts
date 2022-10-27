import { wishlistVar } from "../graphql/variables/wishlistVar";

const resolveWishlist = (productID: string, defaultValue = false) => {
  return wishlistVar().includes(productID) || !!defaultValue
}

export default resolveWishlist