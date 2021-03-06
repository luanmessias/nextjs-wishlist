import styled from 'styled-components'
import { deviceSizes, maxDevice } from '~/styles/device'
import { mainColor, defaultTransition } from '~/styles/placeholders'
import { darken } from 'polished'
import LogoSVG from '~/assets/svg/logo'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  background-color: ${mainColor};
  border-top: 8px solid ${darken(0.15, mainColor)};
  height: 150px;
  z-index: 999;

  @media ${maxDevice.laptop} {
    height: auto;
  }

  @media ${maxDevice.tabletS} {
    height: 55px;
    position: fixed;
    top: 0;
    left: 0;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  max-width: ${deviceSizes.laptop};

  @media ${maxDevice.laptop} {
    flex-direction: column;
    height: auto;
  }

  @media ${maxDevice.tabletS} {
    flex-direction: row;
  }

  .header {
    &__col {
      &--logo {
        margin-right: auto;
      }
      &--links {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        max-width: 700px;
        height: 100%;
        z-index: 999;

        @media ${maxDevice.laptop} {
          margin: 10px 0px;
        }

        @media ${maxDevice.tabletS} {
          flex-direction: column-reverse;
          visibility: hidden;
          padding: 10px;
          top: 50px;
          height: auto;
          position: fixed;
          top: 55px;
          right: -100%;
          width: 100%;
          margin: 0px;
          opacity: 0;
          background-color: ${mainColor};
          ${defaultTransition}

          &[data-active='true'] {
            visibility: visible;
            opacity: 1;
            right: 0;
            top: 55px;
          }
        }
      }
    }
    &__row {
    }
  }
`
export const Logo = styled(LogoSVG)`
  width: 150px;
  height: 50px;

  @media ${maxDevice.tabletS} {
    width: 100px;
  }
`
export const HeaderLinksList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${maxDevice.tabletS} {
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${maxDevice.laptop} {
    margin: 10px 0px;
  }
`
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  transition: all 0.3s;

  @media ${maxDevice.tabletS} {
    align-items: flex-start;
    padding: 10px 5px;
    width: 100%;
  }

  svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`
export const HeaderLink = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 16px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;

  @media ${maxDevice.tabletS} {
    align-items: flex-start;
    padding: 10px 5px;
    width: 100%;
  }

  svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`
export const MobMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 20px;
  cursor: pointer;
  position: relative;
  ${defaultTransition}

  div {
    position: absolute;
    left: 0;
    width: 100%;
    height: 10%;
    background-color: #fff;
    ${defaultTransition}

    &:nth-of-type(1) {
      top: 0px;
    }

    &:nth-of-type(2) {
      position: relative;
    }

    &:nth-of-type(3) {
      bottom: 0px;
    }
  }

  @media ${maxDevice.tabletS} {
    display: flex;
  }

  &[data-active='true'] {
    div {
      &:nth-of-type(1) {
        position: absolute;
        top: 50%;
        transform: rotate(45deg);
      }

      &:nth-of-type(2) {
        visibility: hidden;
        opacity: 0;
      }

      &:nth-of-type(3) {
        position: absolute;
        top: 50%;
        transform: rotate(-45deg);
      }
    }
  }
`
export const WishListLenght = styled.div`
  background-color: #c90808;
  display: none;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  position: absolute;
  left: -10px;
  top: -10px;
  border-radius: 50%;
  font-size: 11px;
  &[data-active='true'] {
    display: flex;
  }
`
