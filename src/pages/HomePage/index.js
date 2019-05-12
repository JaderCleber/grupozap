import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actionsHome from '../../store/actions/home'
import TemplateAppBar from '../../templates/TemplateAppBar'
import { Label } from '../../atoms'
import { Grid, Paper, FormControlLabel, InputLabel, FormControl, Input, InputAdornment, TextField, MenuItem, Card, CardContent, CardActionArea, CardMedia, Typography, Button, CardActions, ButtonBase } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },

  paper: {
    padding: theme.spacing.unit * 2,
    margin: '2%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  textField: {
    width: '100%',
  },
  pointer: {
    cursor: 'pointer'
  }
});

const values = [
  {
    "usableAreas": 70,
    "listingType": "USED",
    "createdAt": "2017-04-22T18:39:31.138Z",
    "listingStatus": "ACTIVE",
    "id": "7baf2775d4a2",
    "parkingSpaces": 1,
    "updatedAt": "2017-04-22T18:39:31.138Z",
    "owner": false,
    "images": [
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/f908948bf1d9e53d36c4734d296feb99.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/bd37e4c09ddd370529489fbbc461dbec.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/7b86204f34b751c432c878d607c9d618.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/3b1142cffc13c49a1e7ea766c20a1d52.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/f519a27d56696febfb77f6398f4484d8.jpg"],
    "address": {
      "city": "São Paulo",
      "neighborhood": "República",
      "geoLocation": {
        "precision": "NO_GEOCODE",
        "location": {
          "lon": 0,
          "lat": 0
        }
      }
    },
    "bathrooms": 2,
    "bedrooms": 3,
    "pricingInfos": {
      "yearlyIptu": "60",
      "price": "276000",
      "businessType": "RENT",
      "monthlyCondoFee": "0"
    }
  },
  {
    "usableAreas": 70,
    "listingType": "USED",
    "createdAt": "2017-04-22T18:39:31.138Z",
    "listingStatus": "ACTIVE",
    "id": "7baf2775d4a2",
    "parkingSpaces": 1,
    "updatedAt": "2017-04-22T18:39:31.138Z",
    "owner": false,
    "images": ["https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/f908948bf1d9e53d36c4734d296feb99.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/bd37e4c09ddd370529489fbbc461dbec.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/7b86204f34b751c432c878d607c9d618.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/3b1142cffc13c49a1e7ea766c20a1d52.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/f519a27d56696febfb77f6398f4484d8.jpg"],
    "address": {
      "city": "",
      "neighborhood": "",
      "geoLocation": {
        "precision": "NO_GEOCODE",
        "location": {
          "lon": 0,
          "lat": 0
        }
      }
    },
    "bathrooms": 1,
    "bedrooms": 2,
    "pricingInfos": {
      "yearlyIptu": "60",
      "price": "276000",
      "businessType": "SALE",
      "monthlyCondoFee": "0"
    }
  },
  {
    "usableAreas": 70,
    "listingType": "USED",
    "createdAt": "2017-04-22T18:39:31.138Z",
    "listingStatus": "ACTIVE",
    "id": "7baf2775d4a2",
    "parkingSpaces": 1,
    "updatedAt": "2017-04-22T18:39:31.138Z",
    "owner": false,
    "images": [
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/f908948bf1d9e53d36c4734d296feb99.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/bd37e4c09ddd370529489fbbc461dbec.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/7b86204f34b751c432c878d607c9d618.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/3b1142cffc13c49a1e7ea766c20a1d52.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/f519a27d56696febfb77f6398f4484d8.jpg"],
    "address": {
      "city": "São Paulo",
      "neighborhood": "República",
      "geoLocation": {
        "precision": "NO_GEOCODE",
        "location": {
          "lon": 0,
          "lat": 0
        }
      }
    },
    "bathrooms": 2,
    "bedrooms": 3,
    "pricingInfos": {
      "yearlyIptu": "60",
      "price": "276000",
      "businessType": "RENT",
      "monthlyCondoFee": "0"
    }
  },
  {
    "usableAreas": 70,
    "listingType": "USED",
    "createdAt": "2017-04-22T18:39:31.138Z",
    "listingStatus": "ACTIVE",
    "id": "7baf2775d4a2",
    "parkingSpaces": 1,
    "updatedAt": "2017-04-22T18:39:31.138Z",
    "owner": false,
    "images": ["https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/f908948bf1d9e53d36c4734d296feb99.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/bd37e4c09ddd370529489fbbc461dbec.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/7b86204f34b751c432c878d607c9d618.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/3b1142cffc13c49a1e7ea766c20a1d52.jpg",
      "https://resizedimgs.vivareal.com/crop/400x300/vr.images.sp/f519a27d56696febfb77f6398f4484d8.jpg"],
    "address": {
      "city": "",
      "neighborhood": "",
      "geoLocation": {
        "precision": "NO_GEOCODE",
        "location": {
          "lon": 0,
          "lat": 0
        }
      }
    },
    "bathrooms": 1,
    "bedrooms": 2,
    "pricingInfos": {
      "yearlyIptu": "60",
      "price": "276000",
      "businessType": "SALE",
      "monthlyCondoFee": "0"
    }
  }
];

class HomePage extends React.Component {

  state = {
    filter: {
      portal: {
        viva: true,
        zap: true
      },
      businessType: {
        sale: true,
        rent: true
      },
      price: {
        min: null,
        max: null
      },
      bedrooms: ''
    },
  };

  handleCheck = filter => (e) => {
    const { name, checked } = e.target;
    const value = Object.assign({}, this.state.filter[filter], { [name]: checked });
    this.setState({ filter: Object.assign({}, this.state.filter, { [filter]: value }) }, () => {
      // TODO get values
    })
  }

  handlePrice = (e) => {
    const { name, value } = e.target;
    const price = Object.assign({}, this.state.filter.price, { [name]: value });
    this.setState({ filter: Object.assign({}, this.state.filter, { price }) }, () => {
      // TODO get values
    })
  }

  getDetails = item => () => {
    this.props.history.push({ pathname: `/details` })
  }

  render() {
    const { classes } = this.props;
    const { filter } = this.state;
    return (
      <TemplateAppBar>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Label>Portal</Label>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filter.portal.viva}
                      onChange={this.handleCheck('portal')}
                      name="viva"
                    />
                  }
                  label="Viva"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filter.portal.zap}
                      onChange={this.handleCheck('portal')}
                      name="zap"
                    />
                  }
                  label="Zap"
                />
              </div>

              <Label>Tipo de Anúncio</Label>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filter.businessType.sale}
                      onChange={this.handleCheck('businessType')}
                      name="sale"
                    />
                  }
                  label="Venda"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={filter.businessType.rent}
                      onChange={this.handleCheck('businessType')}
                      name="rent"
                    />
                  }
                  label="Aluguel"
                />
              </div>

              <Label>Faixa de Preço</Label>
              <Grid container>
                <Grid item xs={6}>
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="price-min">Mínimo</InputLabel>
                    <Input
                      id="price-min"
                      value={filter.price.min}
                      onChange={this.handlePrice}
                      name='min'
                      startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={6}>
                  <FormControl className={classes.margin}>
                    <InputLabel htmlFor="price-max">Máximo</InputLabel>
                    <Input
                      id="price-max"
                      value={filter.price.max}
                      onChange={this.handlePrice}
                      name='max'
                      startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Grid container justify='space-between'>
              <Grid item xs={3}>
                <Label><strong>{values.length}</strong> Encontrados</Label>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  select
                  label="Order por"
                  className={classes.textField}
                  value={this.state.weightRange}
                  onChange={this.handleOrder}
                >
                  <MenuItem value='price'>Preço</MenuItem>
                  <MenuItem value='date'>Data</MenuItem>
                </TextField>
              </Grid>
            </Grid>
            {values.map(item => {
              const { id,
                images,
                bedrooms,
                pricingInfos,
                address,
                usableAreas,
                bathrooms,
                parkingSpaces } = item;
              const price = Number(pricingInfos.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              });
              const iptu = Number(pricingInfos.yearlyIptu || '').toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              });
              return (
                <Paper className={classes.paper} key={id}>
                  <Grid container spacing={16}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={images[0]} />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container className={classes.pointer} onClick={this.getDetails(item)}>
                      <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            Apartamento com {bedrooms} quartos para {pricingInfos.businessType === 'SALE' ? 'Vender' : 'Alugar'}
                          </Typography>
                          <Typography gutterBottom>{address.neighborhood} - {address.city}</Typography>
                          <Typography color="textSecondary">
                            <strong>{usableAreas}</strong> m² |
                          <strong> {bedrooms}</strong> quartos |
                          <strong> {bathrooms}</strong> banheiros |
                          <strong> {parkingSpaces}</strong> vagas
                        </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">{price}</Typography>
                        {!!iptu && (<Typography variant="subtitle1">IPTU {iptu}</Typography>)}
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              )
            })}
          </Grid>
        </Grid>
      </TemplateAppBar>)
  }
}


const mapStateToProps = (state) => ({

})


const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    ...actionsHome
  }, dispatch);

};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HomePage))
