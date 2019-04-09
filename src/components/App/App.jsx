import React, { Component } from 'react'
import cat_1 from './../../assets/cat_1.jpg';
import cat_2 from './../../assets/cat_2.jpg';

class App extends Component {
  render () {
    return (
      <div className="mm-reader">
        <h3 className="mm-title">米：正文从这里开始...O(∩_∩)O~~</h3>
        <section>
          <dl>
            <dt className="img img_1">
              <img src={cat_1} alt=""/>
            </dt>
            <dd>美短加白猫脾气温顺 ，性格活泼，而且对外界的事物充满的好奇和探索的欲望。美国短毛猫不会对家人乱发脾气。它们性情温和，总是充满耐性，显得非常的和蔼可亲</dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_2">
              <img src={cat_2} alt=""/></dt>
            <dd>加菲猫又名异国短毛猫！（日本喜欢把加菲猫当招财猫） 是波斯猫和美短的繁殖出来的衍生产物！ 既有波斯的特点（大饼脸、眼鼻一线！）又有美短的特点（体型胖、腮肉多！）</dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_3"><img src={cat_1} alt=""/></dt>
            <dd>美短加白猫脾气温顺 ，性格活泼，而且对外界的事物充满的好奇和探索的欲望。美国短毛猫不会对家人乱发脾气。它们性情温和，总是充满耐性，显得非常的和蔼可亲</dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_4"><img src={cat_2} alt=""/></dt>
            <dd>加菲猫又名异国短毛猫！（日本喜欢把加菲猫当招财猫） 是波斯猫和美短的繁殖出来的衍生产物！ 既有波斯的特点（大饼脸、眼鼻一线！）又有美短的特点（体型胖、腮肉多！）</dd>
          </dl>
        </section>
      </div>
    );
  }
}

export default App;

