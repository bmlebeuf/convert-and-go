import React, { Component } from 'react';

class ConvertApp extends React.Component {
  render() {
    return(
      <div className="content">
          <div className="row row-select-currency">
            <div className="col-md-6 col-md-offset-3">
              <h3>Select Currency</h3>
              <p>
                {
                  //Select currency
                }
                <select>
                  <option value="A">Option A</option>
                  <option value="B">Option B</option>
                </select>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {
                  //Update to currently selected currency
              }
              <p>
                Exchange Rate $ 1 USD = $ 0.7041 NZD
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <h3 className="currency-flag AUD">Australian Dollars</h3>
              {
                  //Currency A input
              }
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input type="number" defaultValue={0} className="form-control" aria-describedby="basic-addon2" step="1" pattern="\d\.\d{2}"  />
                <span className="input-group-addon" id="basic-addon2">AUD</span>
              </div>
            </div>
            <div className="col-sm-6 currency-to-input">
              <h3 className="currency-flag USD">United States Dollars</h3>
              {
                  //Currency B input
              }
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input type="number" defaultValue={0} className="form-control" aria-describedby="basic-addon3" step="1" pattern="\d\.\d{2}"  />
                <span className="input-group-addon" id="basic-addon3">USD</span>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ConvertApp;
