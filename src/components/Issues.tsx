import { useEffect, useState } from 'react'
import { fetchData } from 'apis/api'
import {
  Error,
  Loading,
  Total,
  TotalNumber,
  Issue,
  IssueTitle,
  IssueNumber,
  IssueComments,
  IssueCreatedAt,
  IssueInfos,
  IssueWrap,
  IssueHeader,
  IssueListWrap,
  Sort,
} from 'style/issueStyle'
import { IssueType } from 'types/type'
import { formatDate } from 'utils/formatDate'

const Issues = () => {
  const [issues, setIssues] = useState<IssueType[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetchData()
        const mappedData = res.data.map((item: any) => ({
          issueNum: item.number,
          title: item.title,
          createdAt: formatDate(item.created_at),
          comments: item.comments,
        }))
        const sortedData = mappedData.sort(
          (prev: IssueType, next: IssueType) => next.comments - prev.comments,
        )

        setIssues(sortedData)
      } catch (e) {
        alert('데이터를 받아오는데 실패했습니다.')
        setError(true)
      }
    })()
  }, [])

  if (error) {
    return <Error>데이터를 받아오는데 실패했습니다.</Error>
  }
  if (!issues.length) {
    return <Loading>데이터를 받아오는 중입니다.</Loading>
  }

  const issuesList = issues.map(item => (
    <Issue key={item.issueNum}>
      <IssueTitle>{item.title}</IssueTitle>
      <IssueInfos>
        <IssueNumber># {item.issueNum}</IssueNumber>
        <IssueCreatedAt>{item.createdAt}</IssueCreatedAt>
        <IssueComments>{item.comments}</IssueComments>
      </IssueInfos>
    </Issue>
  ))

  return (
    <IssueWrap>
      <IssueHeader>
        <Total>
          Total Issues: <TotalNumber>{issues.length}</TotalNumber>
        </Total>
        <Sort>정렬: 코멘트 순</Sort>
      </IssueHeader>
      <IssueListWrap>{issuesList}</IssueListWrap>
    </IssueWrap>
  )
}

export default Issues
