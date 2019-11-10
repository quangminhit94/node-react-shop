import React, { Component } from 'react'

import { FaBeer } from 'react-icons/fa';

import FilterForm from '../FilterForm'
import './style.css'

export default class LeftMenu extends Component {
  render() {
    return (
      <div className="LeftMenu">
        <div className="icon">
          <FaBeer />
        </div>

        <FilterForm>
        </FilterForm>
      </div>
    )
  }
}
