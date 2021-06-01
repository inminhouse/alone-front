import React, {Component} from 'react';
//ui
import { Sidebar, Menu, Icon, } from 'semantic-ui-react';

export default class extends Component {

	state = {
		left: 0,
		right: 0,
	}
	
	itemStyle = {
		opacity: 0.5, height: '100%', paddingTop: "45%"
	};

	//function
  makeStyle = op => 
    op ?     
    {
      backgroundColor: 'rgba(0, 0, 0, ' + op + ')'
    } : 
    {
      backgroundColor: 'rgba(0, 0, 0, ' + op + ')',
      boxShadow: 'none', 
			border: 'none',
    };
  
  sidebarProps = (dir, op) => ({
    direction: dir,
    animation: "overlay",
    as: Menu,
    visible: true,
    borderless: true,
    vertical: dir !== 'bottom',
    icon: dir !== 'bottom' ? "labeled" : false,
    inverted: dir !== 'bottom' ? (op ? true : false) : true,
    style: dir !== 'bottom' ? this.makeStyle(op) : {opacity: 0.7},
  });


  render() {

		const { left, right, } = this.state;

    const { 
			list,
			activeIdx,
			children,
			//function
			prev,
			next,
			select,
		} = this.props;
    
    return (
			<Sidebar.Pushable>
				<Sidebar //Left
					{...this.sidebarProps('left', left)}
				>
					<Menu.Item 
						as="a"
						style={this.itemStyle} 
						onMouseOver={e => left !== 0.2 && this.setState({left: 0.2})}
						onMouseLeave={e => this.setState({left: 0})}
						onClick={prev}
					>
						<div style={{height: '40%'}} />
						<Icon name='angle left'/>
					</Menu.Item >
				</Sidebar>

				<Sidebar //Right
					{...this.sidebarProps('right', right)}
				>
					<Menu.Item 
						as="a"
						style={this.itemStyle} 
						onMouseOver={e => right !== 0.2 && this.setState({right: 0.2})}
						onMouseLeave={e => this.setState({right: 0})}
						onClick={next}
					>
						<div style={{height: '40%'}} />
						<Icon name='angle right'/>
					</Menu.Item >
				</Sidebar>

				<Sidebar //Bottom
					{...{...this.sidebarProps('bottom', 0), size: "mini"}}
				>
					{list.map((x, idx) => (
						<Menu.Item
							key={idx}
							as="a" 
							style={{opacity: 0.5, left: "45%", padding: '0px'}}
							onClick={e => select(e, idx)}
						>
							<Icon 
								name = {idx === activeIdx ? 'circle' : 'circle outline'}
								style = {{margin: '5px'}}
							/>
						</Menu.Item>
					))}
				</Sidebar>
				<Sidebar.Pusher>
					<div style={{width: '100%'}}>
						{children}
					</div>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
    )
  }

}