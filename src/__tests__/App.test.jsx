import React from 'react'
import {shallow} from '../enzyme'
import { mount } from 'enzyme'
import sinon from 'sinon'
import App from '../App.jsx'

describe('My first collection of test', () => {
  it('renders the header title', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.header').text()).toEqual('Boiling plate')
  })
})
