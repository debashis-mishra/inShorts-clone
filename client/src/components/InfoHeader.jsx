import React from 'react'
import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)({
    background: '#f44336',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '48px',
});

const Image = styled('img')({
    height: '34px',
    marginLeft: 'auto',
    ":last-child": {
        margin: '0 50px 0 20px'
    }
});

const Text = styled(Typography)({
    fontSize: '14px',
    fontWeight: '300',
    marginLeft: '50px'
});


const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
        <Container>
            <Text>
                For the best experience use inshorts app on your smartphone
            </Text>
            <Box style={{ display: 'flex' }}>
                <Image src={appleStore} alt="apple store" />
                <Image src={googleStore} alt="google store" />
            </Box>
        </Container>
    )
}

export default InfoHeader;