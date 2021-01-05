import {Avatar, Container, Info} from './styles';

export default function User({ user }) {
  return (
    <Container>
      <Avatar src={user.avatar}></Avatar>
      <Info>
        <a>{user.name}</a>
        <span>{user.userName}</span>
      </Info>
    </Container>
  );
}