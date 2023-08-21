import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardItem({ card }) {
  console.log(card);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={card.image}
        title={card.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { card.name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species: { card.species }<br />
          Status: { card.status }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}