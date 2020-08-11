import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FolderIcon from '@material-ui/icons/Folder';
import SaveIcon from '@material-ui/icons/Save';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Collapse from '@material-ui/core/Collapse';
import { DOCIMAGES } from './comments';

const styles = theme => ({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    titleList: {
    margin: theme.spacing(4, 0, 2),
    },
    button: {
        margin: theme.spacing(1),
    },
    textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    },
    resize:{
        height:250,
        width:400,
        wordwrap:'break-word',
    },
    nested: {
        paddingLeft: theme.spacing(4),
      },
  });

  class PageOne extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedItem : null,
            comments : DOCIMAGES,
            readtext : null,
            edittext : null,
            listId : null,
            open : false
        }
        this.handleListClick = this.handleListClick.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSave =this.handleSave.bind(this);
    }
    handleListClick = index => {
        this.setState({
            selectedItem : this.state.comments[index].name,
            readtext : this.state.comments[index].description,
            edittext : this.state.comments[index].description,
            listId : index,
            open : !(this.state.open)
        })
        console.log(this.state.selectedItem);
        console.log(this.state.listId);
    }
    handleStateChange(event){
        this.setState({
            edittext : event.target.value
        })
    }   
    handleSave(){
        //need to store updated data into dummy json file.
        //and also make a post call to github to save image.
    }
    render(){
        const { classes} = this.props;

        // const childDisplay = this.state.comments.

        const display = this.state.comments.map((item,index) => {
            return(
                <div >
                    <ListItem key={item} onClick={() => this.handleListClick(index)} >
                        <ListItemAvatar>
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary = {item.name}
                        />
                    </ListItem>
                </div>
            );
        } )

        return(
            <div>
                <Container fixed>
                    <div>
                        <div className={classes.demo}>
                            <List dense={true}>
                                {display}
                            </List>
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" variant="outlined"
                                value="Domino_Analytics_Distribution"   
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" label="Docker Edited Image" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                        id="outlined-uncontrolled"
                                        label="Docker Base Image"
                                        name="message"
                                        value={this.state.readtext}
                                        className={classes.textField}
                                        margin="normal"
                                        wordwrap="hard"
                                        variant="outlined"
                                        InputProps={{
                                            classes: {
                                            input: classes.resize,
                                            },
                                        }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                                <TextField
                                        id="outlined-uncontrolled"
                                        label="Docker Edited Image"
                                        name="message"
                                        value={this.state.edittext}
                                        className={classes.textField}
                                        onChange={this.handleStateChange}
                                        margin="normal"
                                        wordwrap="hard"
                                        variant="outlined"
                                        InputProps={{
                                            classes: {
                                            input: classes.resize,
                                            },
                                        }}
                                />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        onClick = {this.handleSave}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Container>
            </div>
        );
    }
}
PageOne.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
export default withStyles(styles)(PageOne);