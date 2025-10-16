import React from 'react'

export const cartData = [
    {
        id: 0,
        productPrice: 1.00,
        quantity: 1,
        imagePath: '../assets/images/apple.png',
    }
]

export const GetCartData = () => {
    const cartData = JSON.parse(localStorage)
}