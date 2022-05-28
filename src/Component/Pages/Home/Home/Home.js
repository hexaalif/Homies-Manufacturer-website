import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import CEO from '../CEO/CEO';
import Info from '../Info/Info';
import Summary from '../Summary/Summary';

const Home = () => {
    const products = [
        {
            _id:1, name: 'Satin Finish 25cm Ceramic Vase', img: `https://cutt.ly/5JwBFUp`, details: "With a satin finish, this tall stylish ceramic vase with a modern shape will prove to be a spectacular addition to any home. It’s calm, pastel tone will boost the soft spring seasonal feelings as well as subtle blending into your home.", price: "$15", Stock: '10000', Minimum_Order: '1000'
        },
        {
            _id:2, name: 'Ceramic Face Vase', img: `https://cutt.ly/RJwMqeO`, details: "This stunning vase with a decorative face will add an element of artistic design flair to any room, with its modern colourway, complementing an array home of decors beautifully.", price: "$18", Stock: '50000', Minimum_Order: '1500'
        },
        {
            _id:3, name: 'Gingko Shell Vase Cream', img: `https://cutt.ly/sJwMQhd`, details: "Add a statement vase to your home with this beautiful Gingko Shell Vase. Beautifully crafted with a detailed shell texture and elegant pink colourway.", price: "$35", Stock: '20000', Minimum_Order: '2000'
        },
        {
            _id:4, name: 'Silver Skeleton Clock', img: `https://cutt.ly/dJw8gyA`, details: "This silver circular framed clock is a classic design with roman numeral figures. This clock requires 1 X AA battery.", price: "$27", Stock: '10000', Minimum_Order: '1000'
        },
        {
            _id:5, name: 'Reluxe Wall Clock', img: `https://cutt.ly/IJw8HL0`, details: "The natural wooden frame coupled with the silver accents and hands are sure to make this clock a stunning centerpiece for any home.", price: "$17", Stock: '40000', Minimum_Order: '2000'
        },
        {
            _id:6, name: 'Delphi Wall Clock', img: `https://cutt.ly/7Jw4t6Q`, details: "The Delphi range is the perfect way to add a hint of glamour to your home, inspired and elegantly crafted with a mix of wood and mirrored back.", price: "$44", Stock: '25000', Minimum_Order: '1500'
        },
        {
            _id:7, name: 'Priya White Easy Fit Pendant', img: `https://cutt.ly/mJw4Uf6`, details: "Featuring a modern artichoke style with 3D detailing in a fresh white tone, this ceiling light pendant is crafted from durable materials.", price: "$20", Stock: '15000', Minimum_Order: '500'
        },
        {
            _id:8, name: 'Lilia Acrylic Clear Easy Fit Pendant', img: `https://cutt.ly/lJw7fsL`, details: "Make a bold statement in your room with this acrylic ceiling pendant, crafted with an abstract clear prism design and a contemporary chrome finish.", price: "$78", Stock: '30000', Minimum_Order: '1000'
        },
        {
            _id:9, name: 'Bremen Black Easy Fit Pendant', img: `https://cutt.ly/UJw7IlH`, details: "Featuring a contemporary geometric frame this ceiling pendant has one light bulb fitting and is complete with a black painted finish.", price: "$17", Stock: '20000', Minimum_Order: '1000'
        }
    ]
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <div>
            <h1 className='text-5xl text-center my-28'>Products</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5'>
                {
                    products.slice(0,6).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="text-center">
            <Link to="/products"><button className='btn btn-primary my-10'>See all</button></Link>
            </div>
            </div>
            <Summary></Summary>
            <CEO></CEO>
        </div>
    );
};

export default Home;