import React, {useState} from 'react';
import {Button} from '../ButtonElements';
import {
    HeroBg,
    HeroContainer,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight,
} from './HeroElements';
import Video from '../../assets/videos/video.mp4';

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => setHover(prev => !prev);

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        primary="true"
                        dark="true"
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Get started { hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;