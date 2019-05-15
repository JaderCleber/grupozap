import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actionsHome from '../../store/actions/home'
import TemplateAppBar from '../../templates/TemplateAppBar'
import { Grid, Paper, Typography, BottomNavigation, BottomNavigationAction, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Slide from '../../components/Slide';
import HomeIcon from '@material-ui/icons/Home';

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
  textField: {
    width: '100%',
  },
  pointer: {
    cursor: 'pointer'
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

class DetailPage extends React.Component {

  handleChange = () => {
    this.props.history.push({ pathname: `/` });
  }

  render() {
    const { classes, item } = this.props;

    if (!item) {
      this.props.history.push({ pathname: `/` });
      return '';
    }

    const { id,
      images,
      bedrooms,
      pricingInfos,
      address,
      usableAreas,
      bathrooms,
      parkingSpaces,
      updatedAt } = item;
    const price = Number(pricingInfos.price).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    const iptu = Number(pricingInfos.yearlyIptu || '').toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return (
      <TemplateAppBar>
        <Grid container className={classes.root} spacing={16} justify='flex-start'>
          <Grid item xs={1}>
            <Fab onClick={this.handleChange} color="primary" aria-label="Add" className={classes.fab}>
              <HomeIcon />
            </Fab>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} key={id}>
              <Grid container spacing={16}>
                <Grid item>
                  <Slide imgs={images} />
                </Grid>
                <Grid item xs={12} sm container>
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
                      <Typography color="textSecondary">
                        Atualizado em: <strong>{new Date(updatedAt).toLocaleString('pt-BR')}</strong>
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
          </Grid>
        </Grid>
      </TemplateAppBar>)
  }
}


const mapStateToProps = (state) => ({
  ...state.home
})


const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    ...actionsHome
  }, dispatch);

};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(DetailPage))
