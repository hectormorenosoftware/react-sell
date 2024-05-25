import React from "react";
import { withRouter } from "react-router-dom";
import ipadImage from "../images/ipad.webp";
import iphoneImage from "../images/iphone.webp";
import macbookairImage from "../images/macbookair.webp";
import macbookpro13inchImage from "../images/macbookpro13inch.webp";
import macbookpro16inchImage from "../images/macbookpro16inch.png";
import imac27 from "../images/imac27.webp";

import Card from "./Card";

class IndexPage extends React.PureComponent {
  render() {
    return (
      <div className="Cards">
        <h2>Apple Store</h2>
        <div className="Card-Flex-Box">
          <div className="CardGroup">
            <Card
              title="iPad 11th Generation 16GB"
              text="Click to buy"
              image={ipadImage}
              price="$99"
            />
            <Card
              title="iPhone 12 64GB"
              text="Click to buy"
              image={iphoneImage}
              price="$99"
            />
            <Card
              title="Macbook Air Retina 256GB 16GB RAM "
              text="Click to buy"
              image={macbookairImage}
              price="$220"
            />
            <Card
              title="Macbook Pro 13 inch 1TB 16GB RAM"
              text="Click to buy"
              image={macbookpro13inchImage}
              price="$250"
            />
            <Card
              title="Macbook Pro 16 inch 1TB 16GB RAM"
              text="Click to buy"
              image={macbookpro16inchImage}
              price="$270"
            />
            <Card
              title="iMac 27 inch 1TB 16GB RAM"
              text="Click to buy"
              image={imac27}
              price="$300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(IndexPage);
