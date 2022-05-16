import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 ,bgcolor:"black"}}>
      <CardMedia
        component="img"
        height="180"
        image={props.img}
              alt="green iguana"
              href={props.link}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"    sx={{
                  fontSize: "1rem",
                  fontFamily: 'monospace',
              fontWeight: 700,
            //   letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}>
                  {props.name}
              </Typography>
        <Typography variant="body2" color="text.secondary" sx={{  color: "darkorange",
  fontsize: "1rem",
  fontfamily: "monospace"}}>
        <i class="fa-solid fa-star"></i> {props.rating}
              </Typography>
           
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}