import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { SortableList } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <SortableList
        listName='lista-uno'
        items={[{ name: 'uno' }, { name: 'dos' }, { name: 'tres' }]}
        nameField={'name'}
        setItemsList={() => {
          console.log('setItemsList')
        }}
        handleEdit={() => {
          console.log('handleEdit')
        }}
      />,
    )
  })
})
