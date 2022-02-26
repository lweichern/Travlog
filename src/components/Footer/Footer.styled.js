import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFooter = styled.footer`
  background: #000;
  padding: 2rem;
  width: 100vw;
`;

export const BrandSection = styled(motion.div)`
  display: flex;
  width: 30%;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    text-align: center;
    width: 90%;
  }
`;

export const WebsiteName = styled(motion.h1)`
  margin: 0;
`;

export const WebsiteDescription = styled(motion.p)`
  font-size: 1rem;
`;

export const QuickLinksSection = styled(motion.div)`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  & li {
    list-style: none;
    transition: 0.2s;
    cursor: pointer;
    letter-spacing: 0.15rem;
    border-bottom: 2px solid transparent;
    width: fit-content;

    &:hover {
      border-bottom: 2px solid #fff;
    }
  }
`;

export const QuickLinksTitle = styled(motion.h3)`
  margin: 0;
`;

export const InfoSection = styled(motion.div)`
  @media (max-width: ${({ theme }) => theme.tablet}) {
    text-align: center;
  }
`;

export const SocialIcons = styled(motion.div)`
  width: 30%;
  display: flex;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialLinks = styled(motion.a)``;

export const ContactDetails = styled(motion.div)``;

export const Copyright = styled(motion.p)`
  text-align: center;
  font-size: 0.7rem;
`;
