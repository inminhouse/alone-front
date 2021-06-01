import React, {Component} from 'react';

import { Grid, Loader, Image, Container, Divider, Header, Segment, Item } from 'semantic-ui-react';

export default class extends Component {

  state = {
    height: 100
  }

  componentDidMount() {
    window.addEventListener('resize', this.setImgHeight);
  }

  setImgHeight = () => this.state.height !== this.imgRef.height && this.setState({height: this.imgRef.height})

  render() {

    const { src, children } = this.props;

    return (
      <React.Fragment>
        <div 
          style={{
            borderRadius: '.3125em',
            width: '50%',
            height: this.state.height + 'px',
            background: 'linear-gradient(-270deg, #000, rgba(0, 0, 0, 0))',
            position: 'absolute',
            zIndex: 1,
            // color: 'white'
          }}
        >
          <div
            style={{
              marginTop: '30%',
              marginLeft: '15%',
            }}
          >
            {children}
          </div>
        </div>

        <img 
          className="ui rounded image"
          src={src}
          onLoad={this.setImgHeight}
          ref={ref => this.imgRef = ref}
        />
      </React.Fragment>
    )
  }
}