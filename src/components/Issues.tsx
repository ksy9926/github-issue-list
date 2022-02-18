import { useEffect, useState } from 'react'
import { fetchData } from 'apis/api'
import styled from 'styled-components'
import COLOR_PALETTE from 'style/colors'

const Issues = () => {
  const [issues, setIssues] = useState([
    {
      issueNum: null,
      title: '',
      createdAt: '',
      comments: 0,
    },
  ])

  useEffect(() => {
    ;(async () => {
      const res = await fetchData()

      setIssues(
        res.data.map((item: any) => ({
          issueNum: item.number,
          title: item.title,
          createdAt: item.created_at,
          comments: item.comments,
        }))
      )
    })()
  }, [])

  console.log('issues: ', issues)

  const issuesList = issues.map((item) => (
    <Issue key={item.issueNum}>
      <h3>{item.title}</h3>
      <div style={{ display: 'flex' }}>
        <div>{item.issueNum}</div>
        <div>{item.createdAt}</div>
        <div>{item.comments}</div>
      </div>
    </Issue>
  ))

  return (
    <IssueWrap>
      <div
        style={{
          display: 'flex',
          border: `1px solid ${COLOR_PALETTE.GRAY300}`,
          padding: '10px',
          borderRadius: '5px 5px 0 0',
          background: COLOR_PALETTE.GRAY100,
        }}
      >
        <div>이슈 번호</div>
        <div>제목</div>
        <div>작성일</div>
        <div>코멘트 수</div>
      </div>
      <ol>{issuesList}</ol>
    </IssueWrap>
  )
}

export default Issues

const IssueWrap = styled.main`
  max-width: 1130px;
  margin: 16px auto 0;
`

const Issue = styled.li`
  padding: 10px;
  border: 1px solid ${COLOR_PALETTE.GRAY300};
  border-top: none;
  &:hover {
    background: ${COLOR_PALETTE.GRAY100};
  }
`
