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
            <dt className="img img_1"><img src={cat_1} alt=""/><i className="iconfont icon_claw"/></dt>
            <dd className="note"><i className="iconfont icon_note"></i><span>美短</span></dd>
            <dd className="price"><i className="iconfont icon_price"></i><span>纯种：5000--7000元 普通：2000--3000</span></dd>
            <dd className="feature"><i className="iconfont icon_feature"></i>表情包  粘人  活泼好动 适合陪伴小孩子成长</dd>
            <dd className="dec">美短加白猫脾气温顺 ，性格活泼，而且对外界的事物充满的好奇和探索的欲望。美国短毛猫不会对家人乱发脾气。它们性情温和，总是充满耐性，显得非常的和蔼可亲</dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_2"><img src={cat_2} alt=""/><i className="iconfont icon_claw"/></dt>
            <dd className="note c-orange"><i className="iconfont icon_note"></i><span>加菲猫</span></dd>
            <dd className="price"><i className="iconfont icon_price"></i><span>4000--5000元</span></dd>
            <dd className="feature"><i className="iconfont icon_feature"></i>球形身材 食量惊人 好吃懒做 表情夸张 温顺 黏人</dd>
            <dd className="dec">加菲猫又名异国短毛猫！（日本喜欢把加菲猫当招财猫） 是波斯猫和美短的繁殖出来的衍生产物！ 既有波斯的特点（大饼脸、眼鼻一线！）又有美短的特点（体型胖、腮肉多！）</dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_3"><img src={cat_3} alt=""/><i className="iconfont icon_claw"/></dt>
            <dd className="note c-gn"><i className="iconfont icon_note"></i><span>中华田园猫</span></dd>
            <dd className="price"><i className="iconfont icon_price"></i><span>几百不等</span></dd>
            <dd className="feature"><i className="iconfont icon_feature"></i>黑猫 白猫 黑白猫 狸花猫 三花猫 橘猫</dd>
            <dd className="dec">我国本土猫颜色多、品种多、机灵、代表猫橘猫和狸花猫、毛色分明、容易接近人、但不是太粘人、有可能养大了也会说走就走</dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_4"><img src={cat_4} alt=""/><i className="iconfont icon_claw"/></dt>
            <dd className="note"><i className="iconfont icon_note"></i><span>孟加拉豹猫</span></dd>
            <dd className="price"><i className="iconfont icon_price"></i><span>10000左右</span></dd>
            <dd className="feature"><i className="iconfont icon_feature"></i>淘气 好动 粘人 贪吃 爱叫 话唠 爱撒娇 爱咬手</dd>
            <dd className="dec">特别贪吃！在他的心中 好像我们能吃的都是特别好 吃的东西，一脸望眼欲穿的感觉，等你不在厨房的时候会去偷吃东西 </dd>
          </dl>
        </section>
        <section>
          <dl>
            <dt className="img img_4"><img src={cat_5} alt=""/><i className="iconfont icon_claw"/></dt>
            <dd className="note c-orange"><i className="iconfont icon_note"></i><span>英国短毛猫</span></dd>
            <dd className="price"><i className="iconfont icon_price"></i><span>纯种：5000--10000元 普通：3000--5000元</span></dd>
            <dd className="feature"><i className="iconfont icon_feature"></i> 四肢发达 圆胖 慵懒可爱 温柔 温顺</dd>
            <dd className="dec">江湖简称英短，萌爪团队内部简称蓝胖子。截至今日在萌爪的平台上已有1831只英短的主人前来咨询，仅次于中国狸花猫，位列第二。不难看出英短是一种长相非常讨巧的品种，憨憨的身形和平静的性格也让它成为长期出境的明星。这点倒是与出身英国相符。</dd>
          </dl>
        </section>
        <h3 className="mm-title">期待爱江送的小猫猫~~💖</h3>
      </div>
    );
  }
}

export default App;

