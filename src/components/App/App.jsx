import React, { Component } from 'react'
import Card from './../Card';
import { cards } from './../../utils';

const renderCards = () => {
  return cards.map((option, i) => {
    return (
      <Card detail={option} key={i}/>
    )
  })
};

class App extends Component {
  render () {
    return (
      <div className="mm-reader">
        <h3 className="mm-title">小米酱：</h3>
        <p>😝嘻嘻嘻 😝</p>
        <p>前方高能！楼下一大批猫猫来袭。。。</p><br/>
        {renderCards()}
        <h3 className="mm-title">期待爱江送的小猫猫~~💖</h3>
      </div>
    );
  }
}

export default App;

