import { StyledHeader, Nav, Logo, Image } from './Styled/Header.styled';
import { Container } from './Styled/Container.styled'
import { Button } from './Styled/Button.styled'
import { Flex } from './Styled/Flex.styled'

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src='./images/NavBar/logo.svg' alt=''/>
                <Button>Try It For Free</Button>
            </Nav>

            <Flex>
                <div>
                    <h1 className='mb-8'>Build the community your fans wall love</h1>

                    <p className='mb-8'>
                        Huddle re-imagines the way we build communities. You have a voice,
                        but so does your audience. Create connections with your users as you engage in genuine discussion.
                    </p>

                    <Button bg='#ff0099' color='#fff'>Get started for free</Button>
                </div>

                <Image src='./images/NavBar/illustration-mockups.svg' alt='' />
            </Flex>
        </Container>
    </StyledHeader>
  )
}
