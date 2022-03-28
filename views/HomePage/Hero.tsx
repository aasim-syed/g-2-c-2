import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>the coolest ❤️‍🔥, G2C C2G  product you have ever seen🚀⚡</CustomOverTitle>
        <Heading>Make your life easier with G2C2⚡🚀</Heading>
        <Description>
        Two-way mobile communication (G2C and C2G) for dissemination of flood forecasts to end users and collection of real time data of inundation area through crowdsourcing
        </Description>
        <CustomButtonGroup>
          <Button onClick={() => setIsModalOpened(true)}>
            Newsletter🤖🔔 <span>&rarr;</span>
          </Button>
          <NextLink href="https://kp17mbji4lv.typeform.com/to/DzlpFhiK" passHref>            
            <Button transparent>
              FILL IN DETAILS⚡🚀 <span>&rarr;</span>
            </Button>
          </NextLink>
          <NextLink href="https://g2c2-chatbot.netlify.app" passHref>            
            <Button transparent>
             Chatbot🤖⚡ <span>&rarr;</span>
            </Button>
          </NextLink>
          <NextLink href="https://aasim-syed.github.io/Map-/" passHref>            
            <Button transparent>
             Predictor Maps🗺️  <span>&rarr;</span>
            </Button>
          </NextLink>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
