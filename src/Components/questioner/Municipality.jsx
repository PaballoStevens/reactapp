import React from "react";
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


function Municipality() {

const metroplitan = [
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9A7Sx9CLSQRsVLluA5NalBvmi4-CHumz57ukQcMCubDKpujTN2-hyD2zD-QBKc6C1Xxs&usqp=CAU',
      name: 'City of Ekurhuleni Metroplitan' },
    { imageSrc: 'https://phm01-cvps02.hostserv.co.za/~studentroomco/wp-content/uploads/cache/2020/05/coj-joburg-logo-1/2910287373.png',
       name: 'City of Johannesburg Metroplitan' },
    { imageSrc: 'https://yt3.ggpht.com/ytc/AKedOLS3aXxsExXAfWbhOMHNL6C1mskesFa10Nntf-GwJw=s900-c-k-c0x00ffffff-no-rj',
       name: 'City of Tshwane Metroplitan' },
    
  ];

    return(
      <Grid container wrap="nowrap justify">
      {metroplitan.map((item) => (
        <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.name}
              src={item.imageSrc}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}

          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="body2">
                {item.name}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
      <br />
      <Link href ="/Bank"className="justify-content-start"><ArrowBackIcon/> Back </Link>
      <Link href ="/Retails"className="justify-end">Next <ArrowForwardIcon/></Link>
    </Grid>
    );
}

export default Municipality;