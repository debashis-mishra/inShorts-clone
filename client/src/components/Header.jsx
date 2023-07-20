import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

const StyledHeader = styled(AppBar)({
    background: '#fff',
    height: '70px',
    position: 'static',
});

const MenuIcon = styled(Menu)({
    color: '#000',
});

const Image = styled('img')({
    height: '55px',
    margin: 'auto',
    paddingRight: '70px'
});

const Header = () => {

    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <div>
            <StyledHeader>
                <Toolbar>
                    <MenuIcon />
                    <Image src={url} alt="logo" />
                </Toolbar>
            </StyledHeader>
        </div>
    )
};

export default Header;