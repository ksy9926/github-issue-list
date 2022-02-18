import COLOR_PALETTE from 'style/colors'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <h3 style={{ color: COLOR_PALETTE.WHITE }}>Github Issues</h3>
        <h3 style={{ color: COLOR_PALETTE.WHITE }}>패스트레인</h3>
      </HeaderInnerWrap>
    </HeaderWrap>
  )
}

export default Header

const HeaderWrap = styled.header`
  width: 100%;
  background: #000;
`

const HeaderInnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1130px;
  height: 60px;
  margin: 0 auto;
`
