import React from 'react';
import Navbar from 'components/Layout/Navbar';
import StarList from 'components/Star/StarList';

const Star = () => {
  return (
    <Navbar title="我的收藏" back="true">
      <StarList/>
    </Navbar>
  );
};


export default Star;
