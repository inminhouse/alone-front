import React, { Component } from "react";

import { Transition, Image } from "semantic-ui-react";

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      topSrc: props.src,
      bottomSrc: props.src
    };
  }

	componentDidUpdate(prevProps) {

		const oldSrc = prevProps.src;
		const newSrc = this.props.src;
		if(newSrc !== oldSrc) {

      const { bottomSrc, topSrc, visible } = this.state;
      
      const aSrc = bottomSrc === topSrc ? newSrc : bottomSrc === oldSrc ? oldSrc : newSrc;
      const bSrc = topSrc === oldSrc ? oldSrc : newSrc;
			this.setState(
				{ bottomSrc: aSrc, topSrc: bSrc },
        () => this.setState({visible: !visible})
			)
		}
	}

  render() {
		
    const { animation, duration } = this.props;
    const { visible, topSrc, bottomSrc } = this.state;
    
    return (
      <React.Fragment>
        <Transition 
          visible={visible} 
          animation={animation}
          duration={duration}
        >
          <Image
            as="div"
            src={topSrc}
            style={{position: "absolute"}}
          />
        </Transition>
        <Transition 
          mountOnShow={false}
          visible={!visible} 
          animation={animation}
          duration={duration}
        >
          <Image
            as="div"
            src={bottomSrc}
          />
        </Transition>
      </React.Fragment>
    );
  }
}
