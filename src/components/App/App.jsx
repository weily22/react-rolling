import React, { Component } from 'react'
import cat_1 from './../../assets/cat_1.jpg';
import cat_2 from './../../assets/cat_2.jpg';
import cat_3 from './../../assets/cat_3.jpg';
import cat_4 from './../../assets/cat_4.jpg';
import cat_5 from './../../assets/cat_5.jpg';

class App extends Component {
  render () {
    return (
      <div className="mm-reader">
        <h3 className="mm-title">小米酱：</h3>
        <p>😝嘻嘻嘻 😝</p>
        <p>前方高能！楼下一大批猫猫来袭。。。</p><br/>
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
            <dt className="img img_3"><img src={cat_3} alt=""/></dt>
            <dd>中华田园猫,我国本土猫颜色多、品种多、机灵、代表猫橘猫和狸花猫、毛色分明、容易接近人、但不是太粘人、有可能养大了也会说走就走</dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_4"><img src={cat_4} alt=""/></dt>
            <dd>孟加拉豹猫,特别贪吃！在他的心中 好像我们能吃的都是特别好 吃的东西，一脸望眼欲穿的感觉，等你不在厨房的时候会去偷吃东西 </dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_4"><img src={cat_5} alt=""/></dt>
            <dd>英国短毛猫，江湖简称英短，萌爪团队内部简称蓝胖子。截至今日在萌爪的平台上已有1831只英短的主人前来咨询，仅次于中国狸花猫，位列第二。不难看出英短是一种长相非常讨巧的品种，憨憨的身形和平静的性格也让它成为长期出境的明星。这点倒是与出身英国相符。</dd>
          </dl>
        </section>
        <h3 className="mm-title">期待爱江送的小猫猫~~💖</h3>
      </div>
    );
  }
}

export default App;

