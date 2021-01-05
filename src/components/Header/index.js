import { Container,
    Avatar,
    Content,
    Icon,
    Logo,
    LogoContainer,
    LogoIcon,
    OptionsContainer
} from './styles';

function Header() {
    return (
        <Container>
            <Content>
              <LogoContainer>
                <LogoIcon src="/images/logoIcon.svg">
                    
                </LogoIcon>    
                <Logo src="/images/logo.svg">

                </Logo>
              </LogoContainer>             
              <OptionsContainer>
                  <Icon src="/images/uploadIcon.svg"></Icon>
                  <Avatar>
                    <img src="https://sf16-passport-va.ibytedtos.com/img/user-avatar-musically/b518bd2f6be5f15d2a9be8268ddbadbb~120x256.image"></img>
                  </Avatar>
              </OptionsContainer>
            </Content>
        </Container>
    );
}

export default Header;