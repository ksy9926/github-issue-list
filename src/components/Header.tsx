import COLOR_PALETTE from 'style/colors'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInnerWrap>
        <Title>Github Issues</Title>
        <Company>패스트레인</Company>
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

const Title = styled.h3`
  color: ${COLOR_PALETTE.WHITE};
`

const Company = styled.h3`
  color: ${COLOR_PALETTE.WHITE};
`
