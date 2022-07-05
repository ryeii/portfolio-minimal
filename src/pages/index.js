import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Ryan's Portfolio" />
      {/* <Page useSplashScreenAnimation> */}
      <Page>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Blog', 'Medium']} />
        <AboutSection sectionId="about" heading="About Ryan" />
        <InterestsSection sectionId="details" heading="Skills & Technologies" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
