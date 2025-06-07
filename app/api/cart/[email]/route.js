import Cart from "@/models/cart-model";
import connectDB from "@/utils/DB";

export async function PATCH(request, { params }) {
  const { email } = params;
  await connectDB();

  const { data } = await request.json();
  console.log(data, email, "data");
  const cartDoc = await Cart.findOne({ email });

  let updatedCart;

  if (cartDoc) {
    const existingIds = new Set(cartDoc.cart.map((item) => item._id));
    // console.log(existingIds, "existingIds");
    const newItems = data.filter((item) => !existingIds.has(item._id));
    // console.log(newItems, "newItems");

    if (newItems.length > 0) {
      updatedCart = await Cart.findOneAndUpdate(
        { email },
        { $push: { cart: { $each: newItems } } },
        { new: true }
      );
    } else {
      updatedCart = cartDoc;
    }
  } else {
    updatedCart = await Cart.findOneAndUpdate(
      { email },
      { $setOnInsert: { email, cart: data } },
      { upsert: true, new: true }
    );
  }

  return Response.json(updatedCart.cart);
}

export async function GET(request, { params }) {
  const { email } = params;
  const cartDoc = await Cart.findOne({ email }).populate("cart");
  return Response.json(cartDoc.cart);
}
