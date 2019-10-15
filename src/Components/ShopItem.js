import React from 'react';

export default class ShopItem extends React.Component {
    render() {
        return (
            <div>
                <h1>ShopItem</h1>
                <p>The shop item's id is {this.props.match.params.productId}</p>
            </div>
        )
    }
}