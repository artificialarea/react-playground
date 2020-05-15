import React from 'react';

class Tabs extends React.Component {

  static defaultProps = {
    tabs: [],

  };

  render() {
    const buttons = this.props.tabs.map((tab, index) => (
      <button key={index}>
        {tab.name}
      </button>
    ))
    const currentTab = this.props.tabs[0]
    return (
      <div>
        {buttons}
        {/* Conditional Rendering: so smoke test doesn't fail, 
        only show content when the tabs array isn't empty */}
        {this.props.tabs.length && (
          <div className='content'>
            {currentTab.content}
          </div>
        )}
      </div>
    )
  }
}

export default Tabs;