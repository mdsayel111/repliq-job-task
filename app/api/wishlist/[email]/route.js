import wishlist from "@/models/wishlist-model";
import connectDB from "@/utils/DB";

export async function PATCH(request, { params }) {
  const { email } = params;
  await connectDB();

  const { data } = await request.json();
  const wishlistDoc = await wishlist.findOne({ email });

  let updatedWishlist;

  if (wishlistDoc) {
    const existingIds = new Set(wishlistDoc.cart.map((item) => item._id));
    console.log(existingIds, "existingIds wishlist");
    const newItems = data.filter((item) => !existingIds.has(item._id));
    console.log(newItems, "newItems wishlist");

    if (newItems.length > 0) {
      updatedWishlist = await wishlist.findOneAndUpdate(
        { email },
        { $push: { cart: { $each: newItems } } },
        { new: true }
      );
    } else {
      updatedWishlist = wishlistDoc;
    }
  } else {
    updatedWishlist = await wishlist.findOneAndUpdate(
      { email },
      { $setOnInsert: { email, cart: data } },
      { upsert: true, new: true }
    );
  }

  return Response.json(updatedWishlist.cart);
}
