import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    search: {
        width: '350px',
        background: 'white',
        margin: theme.spacing(0, 1.75),
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    }
}));
