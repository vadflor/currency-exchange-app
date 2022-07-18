import React from 'react'
import Calc from '../Calc/Calc';
import './rate.css'

class Rate extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      'date': '',
      'currencyRate':{}
    }
    this.currency = ['USD', 'RUB','CAD','PHP'];
    
    this.getRate();
  }



  getRate = () => {
    const myHeaders = new Headers();  
    myHeaders.append("apikey", "LeGLKkHV9KwNOLu0eCfhs0xhvUDHbvHD"); //other acc
    
    
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('data: ',data)
        this.setState({date:data.date});
        let result = {};
        for(let i = 0; i< this.currency.length; i++){
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        
        this.setState({currencyRate : result}); 
      })
      .catch(error => console.log('error: ', error));
    
  }

  render() {
    
    return (
      <div className="rate">
      <h3> Exchange rate for {this.state.date}</h3>
      <div className="flex-container">
      {
        Object.keys(this.state.currencyRate).map((keyName, i)=>
          (
            <div className="block flex-item" key={i}>
              <div className="currency-name">{keyName}</div>
              <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}</div>
              <p>* Можно купить за 1 EUR</p>
            </div>
          )
        )
      }
      </div>
      <Calc  rate={this.state.currencyRate}/>
      </div>
    )
  }
}

export default Rate