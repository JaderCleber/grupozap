import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import actionsHome from '../../store/actions/home'
import TemplateAppBar from '../../templates/TemplateAppBar'
import { Label } from '../../components'
import { Grid, Paper, FormControlLabel, InputLabel, FormControl, Input, InputAdornment, TextField, MenuItem, Typography, TablePagination, FormLabel, RadioGroup, Radio } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Pagination from '../../components/Pagination';
import Slide from '../../components/Slide';
import IImmobile from '../../model/IImmobile';

const ZAP_MIN_SALE = 600000;
const ZAP_MIN_RENT = 3500;
const VIVA_MAX_RENT = 4000;
const VIVA_MAX_SALE = 700000;
const VIVA_PERCENT_ACCEPT_RENT = 0.3;
const VIVA_PERCENT_BOUNDING = 0.5;

const MIN_LON = -46.693419;
const MIN_LAT = -23.568704;
const MAX_LON = -46.641146;
const MAX_LAT = -23.546686;

const styles = (theme: any) => ({
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
  }
});

interface PropsType {
  history: any,
  getDetails(item: IImmobile): void,
  classes: any,
  values: IImmobile[],
  getHome(): void
}

interface StateType {
  filter: {
    portal: string,
    businessType: {
      sale: boolean,
      rent: boolean
    }
    price: {
      min: number | undefined,
      max: number | undefined
    },
    bedrooms: string,
    page: number,
    order: string,
    [key: string]: any,
  }
}

class HomePage extends React.Component<PropsType, StateType> {
  state = {
    filter: {
      portal: 'zap',
      businessType: {
        sale: true,
        rent: true
      },
      price: {
        min: undefined,
        max: undefined
      },
      bedrooms: '',
      page: 0,
      order: 'date'
    },
  };

  componentDidMount() {
    const { values, getHome } = this.props;
    if (!values.length) {
      getHome();
    }
  }

  handleCheck = (filter: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    // @ts-ignore: Unreachable code error
    const value = Object.assign({}, this.state.filter[filter], { [name]: checked });
    this.setState({ filter: Object.assign({}, this.state.filter, { [filter]: value }) })
  }

  handleChangePortal = (e: React.ChangeEvent<any>) => {
    const { value } = e.target;
    // @ts-ignore: Unreachable code error
    this.setState({ filter: Object.assign({}, this.state.filter, { portal: value }) })
  }

  handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const price = Object.assign({}, this.state.filter.price, { [name]: value });
    // @ts-ignore: Unreachable code error
    this.setState({ filter: Object.assign({}, this.state.filter, { price }) })
  }

  handlePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => {
    // @ts-ignore: Unreachable code error
    this.setState({ filter: Object.assign({}, this.state.filter, { page }) })
    window.scrollTo(0, 0);
  }

  handleOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore: Unreachable code error
    this.setState({ filter: Object.assign({}, this.state.filter, { order: e.target.value }) })
  }

  getDetails = (item: IImmobile) => () => {
    const { history, getDetails } = this.props;
    getDetails(item);
    history.push({ pathname: `/details` })
  }

  inBounding({ lon, lat }: { lon: number, lat: number }): boolean {
    const boundingLon = lon > MIN_LON && lon < MAX_LON;
    const boundingLat = lat > MIN_LAT && lat < MAX_LAT;
    return boundingLon && boundingLat;
  }

  render() {
    const { classes, values } = this.props;
    const { filter } = this.state;

    const { page, price, portal, order, businessType } = filter;

    const { min, max } = price;
    const { sale, rent } = businessType;

    const valuesFiltered = values.filter(item => {
      const { businessType, price } = item.pricingInfos;
      const priceValue = Number(price);
      const condo = Number(item.pricingInfos.monthlyCondoFee);
      const { lon, lat } = item.address.geoLocation.location;

      // FILTER BY TYPE
      if (!sale && businessType === 'SALE') {
        return false;
      }
      if (!rent && businessType === 'RENTAL') {
        return false;
      }

      if (min) {
        if (priceValue < Number(min)) {
          return false;
        }
      }

      if (max) {
        if (Number(price) > Number(max)) {
          return false;
        }
      }

      // FILTER BY PORTAL
      if (portal === 'zap') {
        if (businessType === 'SALE') {
          if (priceValue < ZAP_MIN_SALE) {
            return false;
          } else if (item.usableAreas && (priceValue / item.usableAreas <= VIVA_MAX_SALE)) {
            return false;
          }
        } else if (priceValue < ZAP_MIN_RENT) {
          return false;
        }
      } else if (portal === 'viva') {
        if (businessType === 'SALE') {
          if (priceValue > VIVA_MAX_SALE) {
            return false;
          }
        } else {
          if (priceValue > VIVA_MAX_RENT) {
            return false;
          } else if (condo) {
            const percent = this.inBounding({ lon, lat }) ? VIVA_PERCENT_BOUNDING : VIVA_PERCENT_ACCEPT_RENT
            return condo >= priceValue * percent;
          }
        }
      }
      return true;
    }).sort((prev, next) => {
      if (order === 'price') {
        const pricePrev = Number(prev.pricingInfos.price);
        const priceNext = Number(next.pricingInfos.price);
        return pricePrev > priceNext ? 1 : -1;
      } else {
        const datePrev = new Date(prev.updatedAt);
        const dateNext = new Date(next.updatedAt);
        return datePrev < dateNext ? 1 : -1;
      }
    })

    const offSet = 20 * page;
    const valuesPage = valuesFiltered.slice(offSet, offSet + 20);
    return (
      <TemplateAppBar>
        <Grid container className={classes.root} spacing={16}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <FormControl className={classes.formControl}>
                <FormLabel >Portal</FormLabel>
                <RadioGroup
                  aria-label='Gender'
                  name='portal'
                  className={classes.group}
                  value={portal}
                  onChange={this.handleChangePortal}
                >
                  <FormControlLabel value='zap' control={<Radio />} label='ZAP' />
                  <FormControlLabel value='viva' control={<Radio />} label='VIVA' />
                </RadioGroup>
              </FormControl>

              {/* <Label>Portal</Label>
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
              </div> */}

              <Label>Tipo de Anúncio</Label>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={sale}
                      onChange={this.handleCheck('businessType')}
                      name="sale"
                    />
                  }
                  label="Venda"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rent}
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
                      value={min}
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
                      value={max}
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
            <Grid container justify='space-between' className={classes.control}>
              <Grid item xs={3}>
                <Label><strong>{valuesFiltered.length}</strong> Encontrados</Label>
              </Grid>
              <Grid item xs={3}>
                {valuesFiltered.length > 0 && (<TextField
                  select
                  label="Ordenar por"
                  className={classes.textField}
                  value={order}
                  onChange={this.handleOrder}
                >
                  <MenuItem value='price'>Preço</MenuItem>
                  <MenuItem value='date'>Data</MenuItem>
                </TextField>)}
              </Grid>
            </Grid>
            {valuesPage.map(item => {
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
                <Paper className={classes.paper} key={id}>
                  <Grid container spacing={16}>
                    <Grid item>
                      <Slide imgs={images} />
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
              )
            })}
            {valuesFiltered.length > 0 && (<TablePagination
              rowsPerPageOptions={[20]}
              colSpan={3}
              count={valuesFiltered.length}
              rowsPerPage={20}
              page={page}
              SelectProps={{
                native: true,
              }}
              // @ts-ignore: Unreachable code error
              onChangePage={this.handlePage}
              // @ts-ignore: Unreachable code error
              ActionsComponent={Pagination}
            />)}
          </Grid>
        </Grid>
      </TemplateAppBar>)
  }
}


const mapStateToProps = (state: any) => ({
  ...state.home
})


const mapDispatchToProps = (dispatch: any) => {

  return bindActionCreators({
    ...actionsHome
  }, dispatch);

};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(HomePage))
