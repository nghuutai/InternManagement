import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class HeaderComponent extends React.Component {

	handleDrawer = () => {
		this.props.handleDrawer()
	}

    render() {

    	var { open } = this.props

        return (
            <div>
                <AppBar
                    position="fixed"
                    className={ open === true ? 'appBar appBarShift' : 'appBar' }
                >
                    <Toolbar className="toolbar-cus" >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={ this.handleDrawer }
                            className='menuButton'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography varian5t="h6" noWrap>
                            Internship Managements
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default HeaderComponent;