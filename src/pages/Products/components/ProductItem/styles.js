import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',

    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
    cardContent: {
        flexGrow: 1,
    },
    cardAction: {
        padding: 0,
    },
    btn: {
        padding: 0,
        width: '100%'
    }
}));
