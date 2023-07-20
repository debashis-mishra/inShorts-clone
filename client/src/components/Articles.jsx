import React, {useEffect} from 'react'
import { Box, styled } from '@mui/material';

import { getNews } from '../service/api';


const Articles = () => {

    useEffect(() => {
        dailyNews();
    }, []);

    const dailyNews = async () => {
        let response = await getNews();
    };

  return (
      <Box>
          Articles
      </Box>
  )
}

export default Articles;