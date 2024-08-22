import SocialIcons from './SocialIcons'
import { Container } from './Styled/Container.styled'
import { Flex } from './Styled/Flex.styled'
import { StyledFooter } from './Styled/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
        <Container>
            <img className='md:mb-8 mb-12 pl-[30%] md:pl-0' src="./images/Footer/logo_white.svg" alt="" />

            <Flex>

                <ul>
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </li>

                    <li>+1-543-123-456</li>
                    <li>example@huddle.com</li>
                </ul>

                <ul>
                    <li>About Us</li>
                    <li>What we do</li>
                    <li>FAQ</li>
                </ul>

                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>

                <SocialIcons />
            </Flex>

            <p>&copy: 2024 Huddle. All rights reserved</p>
        </Container>
    </StyledFooter>
  )
}
