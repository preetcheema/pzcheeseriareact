import React from 'react';
import CheeseItem from "../CheeseItem/CheeseItem";


const CheeseList = (props) => {
    const items = props.items.map((item) => {
        return (<div key={item.id}>
            <CheeseItem item={item}/>
        </div>);
    });
    return (<div>{items}</div>);
};
export default CheeseList;