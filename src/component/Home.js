import React from 'react'
import data from './Data';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import { incNumber} from '../actions/index';

export default function Home({ count, setCount, cart, setCart }) {
  
    const dispatch = useDispatch();
    const addToCart = () => {
        setCount(count + 1);
        setCart({
            "id": "",
            "name": "",
            "description": "",
            "final_price": "",
            "original_price": "",
            "img_url": ""
        });
    }


    return (
        <div>
            <div className="container">
                <h1 className="text-center">Most Popular</h1>
                <div className="myline"></div>

                <div className="row row-cols-1 row-cols-md-3 g-4 px-2 ">
                    {
                        data.map((e) => {
                            return (
                                <div className="col">
                                    <div className="card h-100" key = {e.id}>
                                        <img src={e.img_url} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <div className="text">
                                                <h5 className="card-title">{e.name}</h5>
                                                <p className="text-right">  <strike className="text-right">{e.original_price}</strike>
                                                    <strong >${e.final_price}</strong> </p>
                                            </div>
                                            <p className="card-text">{e.description}</p>

                                        </div>

                                        <button onClick={addToCart} className="mx-2 btn btn-outline-primary btn-block">Add to cart</button>
                                        <button onClick={() =>dispatch(incNumber(e.id))} className="mx-2 btn btn-outline-primary btn-block">View cart</button>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
