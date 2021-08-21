import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: "70%",
        margin: "auto",
    },

    txt: {
        textAlign: "justify",
    },
    btn: {
        margin: theme.spacing.unit,
    },
    made: {
        textTransform: "uppercase",
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: 'contain',
    },
}));
