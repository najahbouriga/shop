import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        display: 'grid',
        placeItems: 'center',
        padding: theme.spacing(3),
        whiteSpace: 'nowrap',
        [theme.breakpoints.only('xs')]: {
            width: '94vw',
        },
    },
}));
