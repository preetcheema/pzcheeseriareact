import React from 'react';

const CheeseItem = (props) => {
    var item=props.item;
    return(
        <div  className="card" style={{'marginBottom':'10px'}}>
            <div className="card-header text-center bg-secondary font-weight-bold">{item.name}</div>
            <img className="card-img-top" src={item.image.url} alt={item.image.name}/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"></li>
                <li className="list-group-item">Colour: {item.colour}</li>
                <li className="list-group-item">Price: {item.price.formattedValue}</li>
            </ul>
        </div>
    );
};

export default CheeseItem;