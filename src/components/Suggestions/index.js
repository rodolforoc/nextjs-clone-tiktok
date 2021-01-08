import { Container } from "./styles";

function Suggestions() {
  return (
    <Container>
      <IconsContainer>
        <Icon src=""></Icon>
        <Icon src=""></Icon>
        <Icon src=""></Icon>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader><span>Contas sugeridas</span></BoxHeader>
        <ItemContainer>
          {people.map((person, idenx) => (
            <Item>
              <User user={person}></User>
              <Button fontSize={14} outline>Seguir</Button>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader><span>Descobrir</span></BoxHeader>
        <ItemContainer>
          {itens.map((item, idenx) => (
            <Item>
              <RecommendedCard key={index} recommended></RecommendedCard>
              <ArrowIcon></ArrowIcon>
            </Item>
          ))}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src="/images/facebookIcon.svg"></DownloadImage>
      <DownloadImage src="/images/pinterestIcon.svg"></DownloadImage>
      <DownloadImage src="/images/twitterIcon.svg"></DownloadImage>
      <DownloadImage src=""></DownloadImage>
    </Container>
  );
}