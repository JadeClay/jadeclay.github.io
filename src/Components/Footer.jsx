import { FavoriteOutlined } from '@mui/icons-material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Container, Typography, Stack } from '@mui/material'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <Container sx={{ padding: 2 }}>
        <Stack direction="row" alignItems="center" gap={0.5} justifyContent="center">
          <CopyrightIcon fontSize='small' />
          <Typography variant="subtitle1">2022. Done with </Typography>
          <FavoriteOutlined fontSize='small' htmlColor='#93000a' />
          <Typography variant="subtitle1">by Oscar Piña, using Material UI and React.js</Typography>
        </Stack>
      </Container>
    )
  }
}
