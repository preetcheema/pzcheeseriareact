import React from 'react';
import Calculator from "../Calculator/Calculator";
import Header from "../Header.jsx/Header";
import axios from "axios";
import CheeseList from "../CheeseList/CheeseList";

const apiBaseUrl = "https://localhost:5001/api/cheeses";

class HomePage extends React.Component {

    state = {
        cheeseCollection: [],
        calculatorData: []

    };

    constructor(props) {
        super(props);

        this.getBody = this.getBody.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        console.log('inside component did mount');
        this.fetchData();
    }

    async fetchData() {
        const response = await axios.get(apiBaseUrl);

        this.setState({cheeseCollection: response.data})
        const calculatorData = response.data.map((item) => {
            return {
                id: item.id,
                name: item.name,
                displayPrice: item.price.formattedValue,
                rawPrice: item.price.rawValue
            }
        });
        this.setState({calculatorData: calculatorData})
    }

    getBody() {
        this.fetchData();
        return (<div>After getting data</div>)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Header/>
                </div>
                <div className="col-md-8 col-sm-12">
                    <CheeseList items={this.state.cheeseCollection}/>
                </div>
                <div className="col-md-4 col-sm-12">
                    <Calculator items={this.state.calculatorData}/>
                </div>

            </div>
        );
    }
};

export default HomePage;