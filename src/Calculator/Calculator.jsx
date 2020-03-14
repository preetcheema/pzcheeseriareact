import React from 'react';

const apiBaseUrl = "https://localhost:5001/api/cheeses";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        console.log('items are', props);
        this.state = {
            selectedItemPrice: props.items.length > 0 ? props.items[0].rawPrice : 0,
            selectedWeight: 0,
            totalPrice: 0

        };

        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.displayList = this.displayList.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);

    }


    handleOptionChange(e) {
        this.setState({selectedItemPrice: e.target.value});
        this.calculateTotalPrice()
    }

    handleWeightChange(e) {

        const weight = parseFloat(e.target.value) || 0;
        this.setState({selectedWeight: weight});
        this.calculateTotalPrice()

    }

    displayList() {
        const selectItems = this.props.items.map((item) => {
            return <option key={item.id} value={item.rawPrice}>{item.name}</option>
        });

        return (<select className="form-control" onChange={this.handleOptionChange}>
            <option key={0} value={0}>Select</option>
            {selectItems}</select>)


    }

    calculateTotalPrice() {
        return this.state.selectedWeight * this.state.selectedItemPrice;
    }


    render() {
        return (
            <div className="card">
                <div className="card-header font-weight-bold">
                    Price Calculator
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>
                            Select cheese to calculate total price:
                        </label>
                        {this.displayList()}

                    </div>
                    <div className="form-group">
                        <label>Enter weight in kilos</label>
                        <input type="number"  min="1" max="100" className="form-control" onChange={this.handleWeightChange}/>
                    </div>
                </div>

                <div className="card-footer">

                    Total Price: ${this.calculateTotalPrice()}

                </div>
            </div>
        );
    }
};

export default Calculator;