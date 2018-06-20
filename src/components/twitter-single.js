import React from 'react'
import styled from 'react-emotion'

import selfieImg from '../assets/img/selfie.jpg'


const Tweet = styled('div')`
  min-height: 100px;
  width: 100%;
  padding: 5px;
  background: #ddd;
  display: flex;
  justify-content: space-between;
`

const UserImage = styled('img')`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`
const TextContainer = styled('div')`
  width: 100%;
`

const UserName = styled('span')`
  
`

const UserHandle = styled('span')`

`

const TweetDate = styled('span')`

`

class SingleTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentDidMount() {
  // }

  render() {
    return (
      <Tweet>
        <UserImage src={selfieImg} />
        <TextContainer>
          <p>
            <UserName className='preload-short-text'>
            </UserName>
            <UserHandle className='preload-short-text'>
            </UserHandle>
            <TweetDate className='preload-short-text'>
            </TweetDate>
          </p>
          <p className='preload-sentence-text'>
          </p>
        </TextContainer>
      </Tweet>
    )
  }
}
export default SingleTweet