import {withStyles} from "@material-ui/styles";

export const useStyles = withStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing(1),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
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
