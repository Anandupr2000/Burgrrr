import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import burgerPrepareImg from "../images/burgerPrepare.jpg"

function CustomizeBurger() {
    const [totalPrice, setTotalPrice] = useState(0);
    const [ingredientsDetails, setIngredientsDetails] = useState(
        [
            {
                name: 'White wheat bun',
                price: 10,
                quantity: 2
            },
            {
                name: 'Patty',
                price: 80,
                quantity: 1
            },
            {
                name: 'Onions',
                price: 20,
                quantity: 1
            },
            {
                name: 'Tomatoes',
                price: 20,
                quantity: 1
            },
            {
                name: 'Lettu',
                price: 20,
                quantity: 1
            },
            {
                name: 'Cheese Slice',
                price: "10",
                quantity: 1
            },
        ]);
    useEffect(() => {
        let total = 0
        ingredientsDetails.forEach(element => {
            total += element.price * element.quantity
        })
        setTotalPrice(total)
    }, [ingredientsDetails]);
    const incQuantity = index => {
        var arr = [...ingredientsDetails]
        if (arr[index].name === 'White wheat bun')
            arr[index].quantity += 2
        else
            arr[index].quantity += 1
        setIngredientsDetails([...arr])
    }
    const descQuantity = index => {
        var arr = [...ingredientsDetails]
        if (arr[index].quantity > 1)
            if (arr[index].name === 'White wheat bun') {
                if (arr[index].quantity > 3)
                    arr[index].quantity -= 2
            }
            else
                arr[index].quantity -= 1

        // for removing cheese completely
        if (arr[index].name === 'Cheese Slice') {
            if (arr[index].quantity > 0)
                arr[index].quantity -= 1
        }
        setIngredientsDetails([...arr])
    }
    return (
        <div>
            <span className='ingredientTableHeading'>Choose what goes into your burger ?</span>
            <div className='burgerPrepare'>
                <table id='tableMenu' className='ingredientTable'>
                    <thead>
                        <tr>
                            <th>Ingredients</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ingredientsDetails.map((value, index) => (
                                <tr key={"row" + index}>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>
                                        <span onClick={(e) => { incQuantity(index) }} className='btn text-light fw-bolder'>+</span>
                                        <span className='text-light'>{value.quantity}</span>
                                        <span onClick={(e) => { descQuantity(index) }} className='btn text-light fw-bolder'>-</span>
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td>Total Price </td>
                            <td>{totalPrice}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                {/* <div> */}
                    <Image src={burgerPrepareImg} alt="" />
                    {/* <div className="dummyImage"></div>
                </div> */}
            </div>
        </div>
    )
}

export default CustomizeBurger