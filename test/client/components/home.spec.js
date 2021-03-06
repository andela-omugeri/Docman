import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { shallowWithContext } from '../helpers/utils';
import { Home } from '../../../app/components/pages/LandingPage/Home.jsx';

const wrapper = shallowWithContext(<Home />);
describe('<Home />', () => {
  it('should have a RaisedButton and Component', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('RaisedButton')).to.have.length(1);
    expect(wrapper.find('Connect(Login)')).to.have.length(1);
  });
  it('checks on the props in the Component', () => {
    expect(wrapper.props().handleUsername).to.be.defined;
    expect(wrapper.props().handlePassword).to.be.defined;
    expect(wrapper.props().handleSubmit).to.be.defined;
  });
});
