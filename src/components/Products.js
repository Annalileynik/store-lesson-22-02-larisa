import React from 'react';
import {v4 as uuidv4} from 'uuid';
import ShoesW from '../imagesProducts/images/ShoesW.png'
import DressC from '../imagesProducts/images/DressC.png'
import DressG from '../imagesProducts/images/DressG.png'
import DressT from '../imagesProducts/images/DressT.png'
import DressW from '../imagesProducts/images/DressW.png'
import PantsB from '../imagesProducts/images/PantsB.png'
import PantsB2 from '../imagesProducts/images/PantsB2.png'
import PantsK from '../imagesProducts/images/PantsK.png'
import PantsM from '../imagesProducts/images/PantsM.png'
import PantsT from '../imagesProducts/images/PantsT.png'
import PantsW from '../imagesProducts/images/PantsW.png'
import ShoesB from '../imagesProducts/images/ShoesB.png'
import ShoesK from '../imagesProducts/images/ShoesK.png'
import ShoesM from '../imagesProducts/images/ShoesM.png'
import SkirtB from '../imagesProducts/images/SkirtB.png'
import SkirtB2 from '../imagesProducts/images/SkirtB2.png'
import SkirtG from '../imagesProducts/images/SkirtG.png'
import SkirtW from '../imagesProducts/images/SkirtW.png'
import SuitB from '../imagesProducts/images/SuitB.png'
import SuitC from '../imagesProducts/images/SuitC.png'
import SuitK from '../imagesProducts/images/SuitK.png'
import SuitM from '../imagesProducts/images/SuitM.png'
import SuitT from '../imagesProducts/images/SuitT.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from "./Form";


const Products = () => {
    const products = [
        {
            id: uuidv4(),
            img: ShoesW,
            title: "shoes",
            category: 'women',
            price: 200
        }, {
            id: uuidv4(),
            img: ShoesM,
            title: "shoes",
            category: 'men',
            price: 100
        }, {
            id: uuidv4(),
            img: ShoesK,
            title: "shoes",
            category: 'kids',
            price: 60
        }, {
            id: uuidv4(),
            img: ShoesB,
            title: "shoes",
            category: 'baby',
            price: 70
        }, {
            id: uuidv4(),
            img: DressW,
            title: "dress",
            category: 'women',
            price: 200
        }, {
            id: uuidv4(),
            img: DressG,
            title: "dress",
            category: 'girl',
            price: 70
        }, {
            id: uuidv4(),
            img: DressT,
            title: "dress",
            category: 'teen',
            price: 150
        }, {
            id: uuidv4(),
            img: DressC,
            title: "dress",
            category: 'women',
            price: 300
        }, {
            id: uuidv4(),
            img: SkirtW,
            title: "suit",
            category: 'women',
            price: 500
        }, {
            id: uuidv4(),
            img: SuitM,
            title: "suit",
            category: 'men',
            price: 700
        }, {
            id: uuidv4(),
            img: SuitT,
            title: "suit",
            category: 'teen',
            price: 100
        }, {
            id: uuidv4(),
            img: SuitK,
            title: "suit",
            category: 'kids',
            price: 320
        }, {
            id: uuidv4(),
            img: SuitB,
            title: "suit",
            category: 'baby',
            price: 150
        }, {
            id: uuidv4(),
            img: SuitC,
            title: "suit",
            category: 'women',
            price: 800
        }, {
            id: uuidv4(),
            img: SkirtB,
            title: "skirt",
            category: 'baby',
            price: 90
        }, {
            id: uuidv4(),
            img: SkirtW,
            title: "skirt",
            category: 'women',
            price: 80
        }, {
            id: uuidv4(),
            img: SkirtG,
            title: "skirt",
            category: 'girl',
            price: 70
        }, {
            id: uuidv4(),
            img: SkirtB2,
            title: "skirt",
            category: 'baby',
            price: 60
        }, {
            id: uuidv4(),
            img: PantsW,
            title: "pants",
            category: 'women',
            price: 300
        }, {
            id: uuidv4(),
            img: PantsM,
            title: "pants",
            category: 'men',
            price: 150
        }, {
            id: uuidv4(),
            img: PantsK,
            title: "pants",
            category: 'kids',
            price: 90
        }, {
            id: uuidv4(),
            img: PantsB,
            title: "pants",
            category: 'baby',
            price: 60
        }, {
            id: uuidv4(),
            img: PantsT,
            title: "pants",
            category: 'teen',
            price: 80
        }, {
            id: uuidv4(),
            img: PantsB2,
            title: "pants",
            category: 'baby',
            price: 50
        }
    ]

    return (
        <>
        <div className="container-fluid">
            <div className="row align-items">
                {products.map(el=>
<div className='col-sm-4 col-md-2'>
        <div key={el.id} className="card h-100  text-white bg-success mb-sm-3" style={{border:"3px solid black", margin:"-5px "}}>
                <div className="card-body" >
              <img src={el.img}  alt="IMG" className="card-img-top img-fluid" style={{border:"2px solid black"}} width={100}/>
                  <h3 className="card-title"> {el.title}</h3>
                  <p className="card-text">$ {el.price}</p>
                  <p className="card-text">For {el.category}</p>
              </div>
          </div>
</div>
        )}
</div>

        </div>
            <Form
            products={products}
           />
        </>
   )
}
export default Products;
