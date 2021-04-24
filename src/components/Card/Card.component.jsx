import {
    CardContent,
    CardTopLine,
    CardWrapper,
    HeaderParticles,
} from './Card.styles';

// * will render props.children
const Card = (props) => {
    const particlesOptions = {
        particles: {
            number: {
                value: 160,
                density: {
                    enable: false,
                },
            },
            color: {
                value: '#bf1327',
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    speed: 2,
                    size_min: 0.3,
                },
            },
            move: {
                random: true,
                speed: 1,
                direction: 'bottom',
                out_mode: 'out',
            },
            line_linked: {
                enable: false,
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'bubble',
                },
            },
            modes: {
                bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0,
                },
            },
        },
    };
    return (
        <CardWrapper>
            <CardTopLine />
            <CardContent>
                {props.particles && (
                    <HeaderParticles params={particlesOptions} />
                )}
                {props.children}
            </CardContent>
        </CardWrapper>
    );
};

export default Card;
