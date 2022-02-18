import styled from 'styled-components'
import COLOR_PALETTE from 'style/colors'

export const IssueWrap = styled.main`
  max-width: 1130px;
  margin: 32px auto;
`

export const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${COLOR_PALETTE.GRAY300};
  padding: 10px;
  borderradius: 5px 5px 0 0;
  background: ${COLOR_PALETTE.GRAY100};
`

export const Total = styled.div`
  font-weight: 700;
`

export const TotalNumber = styled.span`
  color: ${COLOR_PALETTE.BLUE900};
`

export const Sort = styled.div`
  font-weight: 700;
`

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const IssueListWrap = styled.ol``

export const Issue = styled.li`
  padding: 10px;
  border: 1px solid ${COLOR_PALETTE.GRAY300};
  border-top: none;
  &:hover {
    background: ${COLOR_PALETTE.GRAY100};
  }
`

export const IssueTitle = styled.h3``

export const IssueInfos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`

export const IssueNumber = styled.div`
  background: brown;
  padding: 2px 10px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 0.8rem;
`

export const IssueCreatedAt = styled.div`
  background: orange;
  padding: 2px 10px;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  margin-left: 10px;
`

export const IssueComments = styled.div`
  background: red;
  padding: 2px 20px;
  border-radius: 10px;
  color: white;
  font-weight: 500;
  font-size: 0.8rem;
  margin-left: 10px;
`
