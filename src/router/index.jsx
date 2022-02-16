import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Routes } from './routes'

export const Router = () => {
  return (
    <StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </RecoilRoot>
    </StrictMode>
  )
}
