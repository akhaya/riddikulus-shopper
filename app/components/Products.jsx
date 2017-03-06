import React, {Component} from 'react'
import {Link} from 'react-router'
import _ from 'lodash'

// changed to smart container to add form handling functions
class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: [],
      breeds: [],
      magicalAbilities: [],
      lifespan: 1000,
      price: 20000,
      filters: []
    }
    this.handleSizeInput = this.handleSizeInput.bind(this)
    this.handleBreedInput = this.handleBreedInput.bind(this)
    this.handleMagicalAbilitiesInput = this.handleMagicalAbilitiesInput.bind(this)
    // this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleSizeInput (event) {
    // event.preventDefault()
    if (event.target.checked) {
      this.setState({size: this.state.size.concat([event.target.value])})
    } else {
      let i = this.state.size.indexOf(event.target.value)
      let x = this.state.size.splice(i,1)
      this.setState({size: this.state.size})
    }
  }

  handleBreedInput(event){
    if(event.target.checked){
      this.setState({breeds: this.state.breeds.concat([event.target.value])})
    }
    else{
      let i = this.state.breeds.indexOf(event.target.value)
      let x = this.state.breeds.splice(i,1)
      this.setState({breeds: this.state.breeds})
    }
  }

  handleMagicalAbilitiesInput(event){
    if(event.target.checked){
      this.setState({magicalAbilities: this.state.magicalAbilities.concat([event.target.value])})
    }
    else{
      let i = this.state.magicalAbilities.indexOf(event.target.value)
      let x = this.state.magicalAbilities.splice(i, 1)
      this.setState({magicalAbilities: this.state.magicalAbilities})
    }
  }


  render() {

    const products = this.props.products;

    // filtering creatures based on filter inputs
    let filteredProducts = products
      .filter(product => {
        return this.state.breeds.length > 0 ? this.state.breeds.indexOf(product.breed.name) > -1 : product
      })
      .filter(product => {
        return this.state.size.length > 0 ? this.state.size.indexOf(product.size) > -1 : product
      })
      .filter(creature => {
        let x = _.intersection(creature.magicalAbilities, this.state.magicalAbilities) // should return array of similar elements between current creature's magicalAbilites and array of selected magicalAbilities from filter

        // so if x has length > 0 then there are creatures selected with selected magical Abilities
        return this.state.magicalAbilities.length === 0 ? creature : x.length > 0 ? creature : null ;
      })


    if (!products) {
      return null
    }
    const magicalAbilities = _.uniq(products.reduce((accumulator, current) => {
      return accumulator.concat(current.magicalAbilities)
    }, []));


    let breeds = _.uniq(products.map(product => {
      return product.breed
    }).map(breed => {
      return breed.name
    }))

    const sizes = ['XS', 'S', 'M', 'L', 'XL']

    return (

      <div className="container-fluid">
        <div className="row">

          <div className="col-xs-2">

            <h3> Breeds </h3>
                {breeds.map((breed, id) => {
                      return (
                      <div key={id}>
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" value={breed} onClick={this.handleBreedInput}/>{breed}
                        </label>
                      </div>)
                  })}

            <h3> Filters </h3>
            <h4> Magical Abilities </h4>
                {magicalAbilities.map((magicalAbility, id) => {
                      return (
                      <div key={id}>
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox" onClick={this.handleMagicalAbilitiesInput} value={magicalAbility} />{magicalAbility}
                        </label>
                      </div>)
                  })}
            <h3> Size </h3>
                {sizes.map((size, id) => {
                      return (
                        <label className="form-check-label sizeLabels" key={id}>
                          <input className="form-check-input sizeInput" type="checkbox" value={size} onClick={this.handleSizeInput} />{size}
                        </label>)
                  })}>
          </div>

          <div className="col-xs-10">
            <h3>Creatures</h3>
            <div className="row">

              {filteredProducts.length > 0 ?

                filteredProducts
                .map(product => {
                  return (<div className="col-xs-3" key={product.id}>

                    <a className="thumbnail">
                      <img src={product.pictureURL} />
                      <div className="caption">
                        <h5> {product.name} </h5>
                        <h5>
                          <span>{product.price} Galleons</span>
                        </h5>
                        <small>INSERT REVIEW</small>
                      </div>
                    </a>
                  </div>)
                  }) :
                <div>
                  <h3> No products match that search criteria </h3>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
