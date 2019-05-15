import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';

const actionsStyles = theme => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '80%',
  },
});

class Slide extends React.Component {
  state = {
    index: 0,
    src: ''
  }

  componentDidMount() {
    const { imgs } = this.props;
    if (imgs.length) {
      this.setState({ src: imgs[0] });
    }
  }

  handleNext = () => {
    const { imgs } = this.props;
    const { index } = this.state;
    const newIndex = index === imgs.length - 1 ? 0 : index + 1;
    this.setState({ index: newIndex, src: imgs[newIndex] });
  };

  render() {
    const { classes } = this.props;
    const { src } = this.state;

    return (
      <ButtonBase className={classes.image}>
        <img className={classes.img} src={src} onClick={this.handleNext} />
      </ButtonBase>
    );
  }
}

export default withStyles(actionsStyles, { withTheme: true })(
  Slide,
);