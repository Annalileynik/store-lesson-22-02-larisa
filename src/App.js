import './App.css';
import React, {useState} from "react";
import Products from "./components/Products";
import Header from "./components/Header";

import {v4 as uuidv4} from 'uuid';

import ShoesW from './imagesProducts/images/ShoesW.png'
import DressC from './imagesProducts/images/DressC.png'
import DressG from './imagesProducts/images/DressG.png'
import DressT from './imagesProducts/images/DressT.png'
import DressW from './imagesProducts/images/DressW.png'
import PantsB from './imagesProducts/images/PantsB.png'
import PantsB2 from './imagesProducts/images/PantsB2.png'
import PantsK from './imagesProducts/images/PantsK.png'
import PantsM from './imagesProducts/images/PantsM.png'
import PantsT from './imagesProducts/images/PantsT.png'
import PantsW from './imagesProducts/images/PantsW.png'
import ShoesB from './imagesProducts/images/ShoesB.png'
import ShoesK from './imagesProducts/images/ShoesK.png'
import ShoesM from './imagesProducts/images/ShoesM.png'
import SkirtB from './imagesProducts/images/SkirtB.png'
import SkirtB2 from './imagesProducts/images/SkirtB2.png'
import SkirtG from './imagesProducts/images/SkirtG.png'
import SkirtW from './imagesProducts/images/SkirtW.png'
import SuitB from './imagesProducts/images/SuitB.png'
import SuitC from './imagesProducts/images/SuitC.png'
import SuitK from './imagesProducts/images/SuitK.png'
import SuitM from './imagesProducts/images/SuitM.png'
import SuitT from './imagesProducts/images/SuitT.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Basket from "./components/Basket";
import {Form} from "react-bootstrap";


const initialProducts = [
    {
        id: uuidv4(),
        img: ShoesW,
        title: "shoes",
        category: 'women',
        price: 200,
        count: 1
    }, {
        id: uuidv4(),
        img: ShoesM,
        title: "shoes",
        category: 'men',
        price: 100,
        count: 1
    }, {
        id: uuidv4(),
        img: ShoesK,
        title: "shoes",
        category: 'kids',
        price: 60,
        count: 1
    }, {
        id: uuidv4(),
        img: ShoesB,
        title: "shoes",
        category: 'baby',
        price: 70,
        count: 1
    }, {
        id: uuidv4(),
        img: DressW,
        title: "dress",
        category: 'women',
        price: 200,
        count: 1
    }, {
        id: uuidv4(),
        img: DressG,
        title: "dress",
        category: 'girl',
        price: 70,
        count: 1
    }, {
        id: uuidv4(),
        img: DressT,
        title: "dress",
        category: 'teen',
        price: 150,
        count: 1
    }, {
        id: uuidv4(),
        img: DressC,
        title: "dress",
        category: 'women',
        price: 300,
        count: 1
    }, {
        id: uuidv4(),
        img: SkirtW,
        title: "suit",
        category: 'women',
        price: 500,
        count: 1
    }, {
        id: uuidv4(),
        img: SuitM,
        title: "suit",
        category: 'men',
        price: 700,
        count: 1
    }, {
        id: uuidv4(),
        img: SuitT,
        title: "suit",
        category: 'teen',
        price: 100,
        count: 1
    }, {
        id: uuidv4(),
        img: SuitK,
        title: "suit",
        category: 'kids',
        price: 320,
        count: 1
    }, {
        id: uuidv4(),
        img: SuitB,
        title: "suit",
        category: 'baby',
        price: 150,
        count: 1
    }, {
        id: uuidv4(),
        img: SuitC,
        title: "suit",
        category: 'women',
        price: 800,
        count: 1
    }, {
        id: uuidv4(),
        img: SkirtB,
        title: "skirt",
        category: 'baby',
        price: 90,
        count: 1
    }, {
        id: uuidv4(),
        img: SkirtW,
        title: "skirt",
        category: 'women',
        price: 80,
        count: 1
    }, {
        id: uuidv4(),
        img: SkirtG,
        title: "skirt",
        category: 'girl',
        price: 70,
        count: 1
    }, {
        id: uuidv4(),
        img: SkirtB2,
        title: "skirt",
        category: 'baby',
        price: 60,
        count: 1
    }, {
        id: uuidv4(),
        img: PantsW,
        title: "pants",
        category: 'women',
        price: 300,
        count: 1
    }, {
        id: uuidv4(),
        img: PantsM,
        title: "pants",
        category: 'men',
        price: 150,
        count: 1
    }, {
        id: uuidv4(),
        img: PantsK,
        title: "pants",
        category: 'kids',
        price: 90,
        count: 1
    }, {
        id: uuidv4(),
        img: PantsB,
        title: "pants",
        category: 'baby',
        price: 60,
        count: 1
    }, {
        id: uuidv4(),
        img: PantsT,
        title: "pants",
        category: 'teen',
        price: 80,
        count: 1
    }, {
        id: uuidv4(),
        img: PantsB2,
        title: "pants",
        category: 'baby',
        price: 50,
        count: 1
    }
]


function App() {

    const [products] = useState(initialProducts)
    const [searchInput, setSearchInput] = useState('')
    const [basket, setBasket] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const putToBasket = (choosenProduct) => {
        setBasket([...basket, choosenProduct])
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Header
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                toggle={toggle}
            />
            {isOpen ? <Basket basket={basket}
                              setBasket={setBasket}
            toggle={toggle}/> :<Products
                products={products.filter(el =>
                    el.title.toLowerCase().includes(searchInput.toLowerCase())
                )}
                putToBasket={putToBasket}
            />}

            <hr/>





        </div>
    );
}

export default App;
