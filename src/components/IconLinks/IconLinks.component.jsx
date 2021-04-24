import {
    IconContainer,
    IconLink,
    IconLinksContainer,
} from './IconLinks.styles';

const IconLinks = () => {
    return (
        <IconLinksContainer>
            <IconLink href='http://github.com/Gal94'>
                <IconContainer>
                    <i
                        className='fab fa-github fa-lg'
                        style={{ color: 'white' }}
                    ></i>
                </IconContainer>
            </IconLink>
            <IconLink href='http://linkedin.com/in/galy183/'>
                <IconContainer>
                    <i
                        className='fab fa-linkedin-in fa-lg'
                        style={{ color: 'white' }}
                    ></i>
                </IconContainer>
            </IconLink>
            <IconLink href='https://www.facebook.com/galmhrx/'>
                <IconContainer>
                    <i
                        className='fab fa-facebook-f fa-lg'
                        style={{ color: 'white' }}
                    ></i>
                </IconContainer>
            </IconLink>
            <IconLink href='https://www.instagram.com/gal.yacobi/'>
                <IconContainer>
                    <i
                        className='fab fa-instagram fa-lg'
                        style={{ color: 'white' }}
                    ></i>
                </IconContainer>
            </IconLink>
        </IconLinksContainer>
    );
};

export default IconLinks;
