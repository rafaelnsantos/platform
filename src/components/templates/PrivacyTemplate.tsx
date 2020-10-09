import { Text } from '@atoms';
import { Container } from '@material-ui/core';
import { Privacy } from 'content/privacy';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: circle;
  padding: 20px;
`;

const StyledItem = styled.li``;

interface PrivacyTemplateProps {
  privacy: Privacy;
}

export function PrivacyTemplate({ privacy }: PrivacyTemplateProps) {
  return (
    <Container maxWidth="md">
      <Text size={2} variant="h1" align="center" height={3}>
        Política de Privacidade
      </Text>
      {privacy.content.map((contentData) => (
        <div key={contentData.title}>
          <Text size={1.8} variant="h2" height={2.8}>
            {contentData.title}
          </Text>
          {contentData.sessions.map((session, i) => (
            <div key={i}>
              <Text size={1.5} variant="h3" height={2.5}>
                {session.subtitle}
              </Text>
              {session.texts?.map((text, i) => (
                <Text size={1} key={i} align="justify" height={1.8}>
                  {text}
                  <br></br>
                </Text>
              ))}
              {session.lists?.map((list, i) => (
                <StyledList key={i}>
                  <StyledItem>
                    <Text
                      weight={list.itemDescription ? 'bolder' : 'normal'}
                      size={1}
                      height={2}
                      align="justify"
                    >
                      {list.listItem}
                    </Text>
                  </StyledItem>
                  <Text align="justify">{list.itemDescription}</Text>
                </StyledList>
              ))}
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
}
