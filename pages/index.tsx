import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>🚀⚡G2C2G ⚡🚀</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection imageUrl="/demo-illustration-1.svg" title="THE PROBLEM DESCRIPTION!." overTitle="---------------------------------------">
            <p>
            Web-based system for dissemination of flood forecasts was operationalized by CWC in 2014 with information being made available on near real time basis (Ref: https://ffs.tamcnhp.com/). In addition to this, CWC has partnered with Google to disseminate the flood warning through its Public Alert platform. An additional channel to reach out to the end beneficiaries is through deployment of real time messaging service of flood forecasts soon after their generation with opt-in option for end users as well as provision for blanket area specific messaging in affected areas. End beneficiaries can in turn help in crowd sourcing of information related to inundation with geo tagged as well as time stamped images and information related to water levels. Such crowd sourced data can help in ground truthing of inundation for known events of floods which will enable in future endeavours of generation of flood inundation forecasts and flood plain zonation.
.{' '}
              <Link href="/help-center">ffs.tamcnhp.com</Link> 
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Our solution🤔" overTitle="" reversed>
            <p>
              We have come up with various additional solutions as well{' '}<br/>
              <strong>But our main focus will be on the core of problem statement </strong>.             </p>
            <ul>
              <li>BASED ON THE DATA GATHERED THROUGH CROWD SOURCING WE WILL CLASSIFY AREAS ACCORDING ALERT LEVELS AND SEND APPROPRIATE MESSAGES AND HELP.</li>
              <li>WITH THE IoT PLACED AT ALL WATER RESOURCES AND FLOOD PRONE AREAS,WHICH WILL BE PROGRAMMED TO SEND DISTRESSING SIGNALS WHEN THERE IS A SUDDEN RISE IN WATER LEVELS.
</li>
              <li>WITH THE IoT PLACED AT ALL WATER RESOURCES AND FLOOD PRONE AREAS,WHICH WILL BE PROGRAMMED TO SEND DISTRESSING SIGNALS WHEN THERE IS A SUDDEN RISE IN WATER LEVELS.
</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
