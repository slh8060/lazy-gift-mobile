import React from 'react';
import {TabBar} from 'antd-mobile';
import style from './Main.less';
import Recommand from '../Recommand/Recommand';
import My from '../My/My';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'recommandTab',
    };
  }

  renderContent(pageText) {
    return (
      <div>
        {pageText}
      </div>
    );
  }

  render() {
    return (
      <div className={style.ftCon} style={this.state.selectedTab === 'myTab' ? { backgroundColor: '#f5f5f5' } : { backgroundColor: '#fff' }}>
        <TabBar
          unselectedTintColor="#090909"
          tintColor="#090909"
        >
          <TabBar.Item
            title="推荐"
            key="recommand"
            icon={<div className={style.tabIcon} style={{ background: 'url("/assets/recommand.png") center center /  21px 21px no-repeat' }} />}
            selectedIcon={<div className={style.tabIcon} style={{ background: 'url("/assets/selected-recommand.png") center center /  21px 21px no-repeat' }} />}
            selected={this.state.selectedTab === 'recommandTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'recommandTab',
              });
            }}
          >
            { this.renderContent(<Recommand />) }
          </TabBar.Item>

          <TabBar.Item
            title="我的"
            key="my"
            icon={<div className={style.tabIcon} style={{ background: 'url("/assets/my.png") center center /21px 21px no-repeat' }} />}
            selectedIcon={<div className={style.tabIcon} style={{ background: 'url("/assets/selected-my.png") center center /  21px 21px no-repeat' }} />}
            selected={this.state.selectedTab === 'myTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'myTab',
              });
            }}
          >
            { this.renderContent(<My />) }
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Footer;

