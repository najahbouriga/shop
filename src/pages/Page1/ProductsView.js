import React        from "react";
import {Typography} from "@material-ui/core";
import {Link}       from "react-router-dom";
import {ROOT}       from "../../navigation/CONSTANTS";

const ProductsView = ({title = "", price = "", description = []}) => {
    return (
        <div>
            <Link to={ROOT}>Home</Link>
            <Typography variant="h2">Products Page</Typography>
        </div>
    );
};

export default ProductsView;
