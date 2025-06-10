/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// import { useState } from 'react';

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const cart = useSelector(getCart);
  const {
    username,
    status: adressStatus,
    position,
    adress,
  } = useSelector((state) => state.user);

  const isLoadingAdress = adressStatus === "loading";
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const dispatch = useDispatch();

  return (
    <div className="px-4 py-3">
      <h2 className="mt-8 mb-8 text-center text-xl font-semibold">
        Ready to order? Let's go!
      </h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col items-center gap-2 sm:flex-row">
          <label>First Name</label>
          <input
            defaultValue={username}
            type="text"
            name="customer"
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col items-center gap-2 sm:flex-row">
          <label>Phone number</label>

          <input type="tel" name="phone" required className="input grow" />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div className="relative mb-5 flex flex-col items-center gap-2 sm:flex-row">
          <label>Address</label>
          <input
            type="text"
            disabled={isLoadingAdress}
            name="address"
            defaultValue={adress}
            required
            className="input grow"
          />
          <span className="absolute right-[5px] z-2">
            <Button
              type="small"
              disabled={isLoadingAdress}
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress());
              }}
            >
              Get Position
            </Button>
          </span>
        </div>
        <div className="mb-8 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing order ..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Please give your right phone number";
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
