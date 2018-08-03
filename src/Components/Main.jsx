import React from 'react';
//@ToDo: definire PropTypes
import PropTypes from 'prop-types';


class Main extends React.Component{ 
  constructor(props){
    super(props);
    this.handleLike=this.handleLike.bind(this);
    
  }
  state = {
    //le proprietà statiche nell'array potrebbero non servire
    products:[
      {
      id: "1000a",
      name: 'Prodotto test',
      img: 'https://placeimg.com/300/250/nature',
      like: false,
      dislike: false
      },
      {
      id: "1000b",
      name: 'Prodotto test 2',
      img: 'https://placeimg.com/300/250/nature',
      like: false,
      dislike: false
      }
    ]
  }

  handleLike (prodIndex){
    /**
     * @ToDO: 
     * 1) Usare splice 
     * 2) {!dislike && newProduct.like=true}
     */

    //Setup Immutable Object, non modifico lo stato originale
    const newProduct = this.state.products[prodIndex];
    newProduct.like=true;
    
    console.log(newProduct)
    //Shallow merge
    this.setState({
      ...this.state.products,
      newProduct
    })
  }


  

  render(){

    //@ToDo: Refactor = <Block/> -> <Block products={products}/> -> {map}
    return(
      <React.Fragment>
        <div className="Main-block">
          <div className="Main-block__items">
          {this.state.products.map (product => {
              return (
                <div key={product.id} className="Product-block">
                  <div className="Product-block__title">
                    <h2>{product.name}</h2>
                  </div>
                  <div className="Product-block__image">
                    <h2><img src={product.img} alt={product.name} /></h2>
                  </div>
                  <div className="Product-block__likes">
                    {product.like && `like`}
                    <button className="Like" onClick={()=>(this.handleLike(this.state.products.indexOf(product)))}> Like </button>
                    {product.dislike && `dislike`}
                    <button className="DisLike"> Dislike </button>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </React.Fragment>
    )
  }



}

export default Main;