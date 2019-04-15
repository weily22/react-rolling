import React, { Component } from 'react'

class Card extends Component {
  render () {
    const { detail: { note='-', price='-', feature='-', dec, imgSrc } = {} } = this.props;
    return (
      <section>
        <dl>
          <dt className="img img_1"><img src={imgSrc} alt=""/><i className="iconfont icon_claw"/></dt>
          <dd className="note"><i className="iconfont icon_note"></i><span>{note}</span></dd>
          <dd className="price"><i className="iconfont icon_price"></i><span>{price}</span></dd>
          <dd className="feature"><i className="iconfont icon_feature"></i>{feature}</dd>
          <dd className="dec">{dec}</dd>
        </dl>
      </section>
    );
  }
}

export default Card;
