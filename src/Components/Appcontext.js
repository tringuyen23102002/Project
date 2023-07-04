import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Pro_1 from './imgs/Pro_1.png'
import Pro_2 from './imgs/Pro_2.png'
import Pro_3 from './imgs/Pro_3.png'
import Pro_4 from './imgs/Pro_4.png'
import Pro_5 from './imgs/Pro_5.png'
import Pro_6 from './imgs/Pro_6.png'
import Pro_7 from './imgs/Pro_7.png'
import Pro_8 from './imgs/Pro_8.png'
import pro1 from './imgs/pro1.png'
import pro2 from './imgs/pro2.png'
import pro3 from './imgs/pro3.png'
import pro4 from './imgs/pro4.png'
import pro5 from './imgs/pro5.png'
import pro6 from './imgs/pro6.png'
import pro7 from './imgs/pro7.png'
import pro8 from './imgs/pro8.png'
export const AppContext = createContext({})
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)
    const [products, setProducts] = useState([
            {   
                id: 1,
                title: "Figure 1",
                src: [Pro_1],
                src1: [pro1],
                content:
                "Character: Denji",
                price: 400,
                count: 1,
            },
            {   
                id: 2,
                title: "Figure 2",
                src: [Pro_2],
                src1: [pro2],  
                content:
                "Character 2 ",
                price: 400,
                count: 1,
            },
            {
                id: 3,
                title: "Figure 3",
                src: [Pro_3],
                src1: [pro3],  
                content:
                "Character 3 ",
                price: 400,
                count: 1,
            },
            {
                id: 4,
                title: "Figure 4",
                src: [Pro_4],
                src1: [pro4],  
                content:
                "Character 4",
                price: 300,
                count: 1,
            },
            {
                id: 5,
                title: "Figure 5",
                src: [Pro_5],
                src1: [pro5],  
                content:
                "Character 5",
                price: 300,
                count: 1,
            },
            {
                id: 6,
                title: "Figure 6",
                src: [Pro_6],
                src1: [pro6],   
                content:
                "Character 6",
                price: 150,
                count: 1,
            },
            {
                id: 7,
                title: "Figure 7",
                src: [Pro_7],  
                src1: [pro7],
                content:
                "Character 7",
                price: 250,
                count: 1,
            },
            {
                id: 8,
                title: "Figure 8",
                src: [Pro_8],
                src1: [pro8], 
                content:
                "Character 8",
                price: 300,
                count: 1,
            },
        ]
    )
    const updateProducts = (updatedProducts) => {
        setProducts(updatedProducts);
    };
        
    



    const [cart, setCart] = useState([])

    const addCart = (id) => {
        console.log(id)
        const kq = products.find((item) => item.id == id)
        const index = cart.findIndex((item) => item.id == id)
        if (index >= 0) {
            const newlist = cart;
            newlist[index]["qty"]++
            setCart(newlist)
            localStorage.setItem('cart_list', JSON.stringify(newlist))
        }
        else {
            setCart([...cart, { ...kq, qty: "1" }])
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: "1" }]))
        }
    }


    const delete1 = (id) => {
        const kq = cart.filter((item) => item.id !== id)
        setCart(kq)
        localStorage.setItem('cart_list', JSON.stringify(kq))
    }

    const changqty = (id, num) => {
        const kq = cart.map((item) => item.id == id && !(num == -1 && item["qty"] == 1) ? { ...item, qty: item["qty"] * 1 + num }
            // && !(item[]
            : item
        );
        setCart(kq)
        localStorage.setItem('cart_list', JSON.stringify(kq))
    };

    const quanlity = (cart.length)
    return (
        <AppContext.Provider value={{ show, count, setShow, setCount, products, setProducts, addCart, cart, setCart, quanlity, changqty, delete1, updateProducts }}>
            {children}
        </AppContext.Provider>
    )
}