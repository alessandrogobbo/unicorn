import React from 'react';
//@ToDo: definire PropTypes
//import PropTypes from 'parop-types';
import Item from './Item'
import ProductRepository from './ProductRepository'

class Main extends React.Component{ 
  constructor(props){
    super(props);
    this.handleLike = this.handleLike.bind(this);

    // This one can be a service? (Singleton?)
    this.productRepository = new ProductRepository();
    let products = this.productRepository.findAll();

    let items = products.map(product => {
        return Item.makeFromProduct(product);
    });    

    this.state = {
      items: items
    };
  }

  state = {}

  handleLike (itemIndex, liked){
    const newItem = this.state.items[itemIndex];
    liked ? newItem.like() : newItem.dislike();

    this.setState({
      ...this.state.items,
      newItem
    });

    console.log(this.state);
  }
  
  render(){

    //@ToDo: Refactor = <Block/> -> <Block products={products}/> -> {map}
    return(
      <React.Fragment>
        <div className="Main-block">
          <div className="Main-block__items">
          {this.state.items.map (item => {
              return (
                <div key={item.id} className="Item-block">
                  <div className="Item-block__title">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="Item-block__image">
                    <h2><img src={item.getImageUrl()} alt={item.name} /></h2>
                  </div>
                  <div className="Item-block__likes">
                    <p>{item.getStatus()}</p>
                    <button className="Like" onClick={()=>(this.handleLike(this.state.items.indexOf(item), true))}> Like </button>
                    <button className="DisLike" onClick={()=>(this.handleLike(this.state.items.indexOf(item), false))}> Dislike </button>
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