
import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Song,
  Tag,
  Content,
  VideoContainer,
  Video,
  ActionsContainer,
  PlayerIcon,
  Actions,
  Action,
  ButtonContainer,
} from './styles';
import Button from '../Button';

function PostCard({post}) {
  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar></Avatar>
          <Info>
            <Author>
              {post?.author.username}
              <span>{post?.author?.name}</span>
            </Author>
            <Description>
              <span>{post?.description}</span>
              {post?.tags.map((tag, index) => (
                <Tag key={index}>{tag.title}</Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outlined>Seguir</Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Song></Song>
        <VideoContainer>
          <Video
            src={post?.videoUrl}
            webkit-playsinline='true'
            playsinline=''
            loop='true'
            preload='metadata'
          ></Video>
          <ActionsContainer>
            <PlayerIcon src='/images/playIcon.svg'></PlayerIcon>
          </ActionsContainer>
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img src='/images/heartIcon.svg'></img>
          <a>{post?.likes}</a>
        </Action>
        <Action>
          <img src='/images/bubbleIcon.svg'></img>
          <a>{post?.comments}</a>
        </Action>
        <Action>
          <img src='/images/arrowIcon.svg'></img>
          <a>{post?.replies}</a>
        </Action>
      </Actions>
    </Container>
  );
}

export default PostCard;