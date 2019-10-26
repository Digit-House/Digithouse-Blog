import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SocialProfile from "../../../components/SocialProfile/SocialProfile"
import {
  IntroWrapper,
  IntroTitle,
  Desciption,
  BgText,
  IntroContentWrapper,
} from "./style"
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/digithouse.mm/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "#",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/Digit-House",
    tooltip: "Github",
  },
]

const Intro: React.FunctionComponent<IntroProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  const { about } = Data.site.siteMetadata

  return (
    <IntroWrapper>
      <BgText>ABOUT</BgText>
      <IntroContentWrapper>
        <IntroTitle>Our Experience to Story</IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroContentWrapper>
    </IntroWrapper>
  )
}

export default Intro
