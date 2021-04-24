import Card from '../Card/Card.component';
import Profile from '../Profile/Profile.component';

const Header = () => {
    return (
        <header>
                <Card particles={true}>
                    <Profile />
                </Card>
        </header>
    );
};

export default Header;
