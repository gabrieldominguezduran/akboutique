import { writable } from 'svelte/store';

// Initial state
const initialCartState = {
	isCartOpen: false,
	cartItems: {}
};

// Create a writable store
const isCartOpen = writable(initialCartState.isCartOpen);
const cartItems = writable(initialCartState.cartItems);

// Functions to manipulate the cart state
const addCartItem = (item) => {
	cartItems.update((items) => {
		const updatedItems = { ...items, [item.id]: item };
		return updatedItems;
	});
};

const removeCartItem = (itemId) => {
	cartItems.update((items) => {
		const { [itemId]: _, ...rest } = items;
		return rest;
	});
};

export { isCartOpen, cartItems, addCartItem, removeCartItem };
