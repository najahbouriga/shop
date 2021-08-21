import CheckIcon                  from '@material-ui/icons/Check';
import ErrorIcon                  from '@material-ui/icons/Error';
import Alert                      from '@material-ui/lab/Alert';
import {useEffect}                from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useStyles                  from './styles';
import allActions                 from '../../redux/actions';


const selectAlert = (state) => state.cart.alert;

const IconAlert = () => {
    const dispatch = useDispatch();
    const {type, msg} = useSelector(selectAlert);
    const classes = useStyles();

    useEffect(() => {
        const timeout = setTimeout(
            () => dispatch(allActions.cartActions.clearAlert()),
            3000
        );
        return () => clearTimeout(timeout);
    }, [dispatch]);

    const iconPick =
        type === 'success' ? (
            <CheckIcon fontSize="inherit"/>
        ) : (
            <ErrorIcon fontSize="inherit"/>
        );

    return (
        <div className={classes.root}>
            <Alert icon={iconPick} severity={type} variant="filled">
                {msg}!
            </Alert>
        </div>
    );
};

export default IconAlert;
