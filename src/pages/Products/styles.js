import {withStyles} from "@material-ui/styles";

export const useStyles = withStyles((theme) => ({
    root: {
        flexGrow: 1,
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
