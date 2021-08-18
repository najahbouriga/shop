import {withStyles} from "@material-ui/core";

export default withStyles((theme) => ({
    container: {
        flexGrow: 1,
        backgroundColor: 'red',
        padding: theme.spacing(1, 2),
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '92vh',
        width: '100%',
        gap: '0.6em',
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(1, 12),
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: theme.spacing(0.8, 4),
    },
    sortWrapper: {
        marginTop: theme.spacing(1),
    },
}));
