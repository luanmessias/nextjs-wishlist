import React from 'react'
import { render, screen } from '@testing-library/react'
import { GetProductsContext } from '~/contexts/GetProductsContext'
import { WishListProvider } from '~/contexts/WishListContext'
import { productsList } from '~/mocks/productsList'
import ProductCard from '~/components/ProductCard'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    }
  }
}))

const renderComponent = () => {
  render(
    <WishListProvider>
      <GetProductsContext.Provider value={{ productsList }}>
        <ProductCard key={1} sku={8552515751438644} />
      </GetProductsContext.Provider>
    </WishListProvider>
  )
}

describe('Header tests', () => {
  test('should render the project logo', () => {
    renderComponent()
    const component = screen.getByTestId('ProductCard')
    expect(component).toBeInTheDocument()
  })

  test('should render the product name', () => {
    renderComponent()
    const component = screen.getByText('mocked product name')
    expect(component).toBeInTheDocument()
  })

  test('should render the product price', () => {
    renderComponent()
    const component = screen.getByText('R$')
    expect(component).toBeInTheDocument()
  })
})
