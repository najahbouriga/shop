import React                      from 'react';
import {useDispatch, useSelector} from 'react-redux';
import allActions                 from "../../../redux/actions";
import Autocomplete               from '@material-ui/lab/Autocomplete';
import TextField                  from "@material-ui/core/TextField";
import {useStyles}                from "./style";

const selectProducts = (state) => state.products.products;
const selectQuery = (state) => state.products.query;

const Search = () => {

    const products = useSelector(selectProducts);
    const query = useSelector(selectQuery);
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChangeSelect = (e, value) => {
        value
            ? dispatch(allActions.productsActions.setSearchValue(value))
            : dispatch(allActions.productsActions.setSearchValue(''));
    };

    const options = products
        .map((product) => product.title)
        .sort((a, b) => a.localeCompare(b));
    return (
        <div className={classes.search}>
            <Autocomplete
                freeSolo
                id="search autocomplete"
                selectOnFocus
                size="small"
                autoComplete
                clearOnEscape
                clearOnBlur
                fullWidth
                options={options}
                onChange={handleChangeSelect}
                renderInput={(params) => (
                    <TextField
                        placeholder="Search ...."
                        {...params}
                        variant="outlined"
                        InputProps={{...params.InputProps}}
                        value={query}
                    />
                )}
            />
        </div>
    );
}

export default Search;
