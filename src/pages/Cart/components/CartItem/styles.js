import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
        itemWrapper: {
            padding: theme.spacing.unit * 2,
            borderBottom: '1px solid #efefef',
            borderTop: '1px solid #efefef'
        },
        item: {
            padding: theme.spacing.unit * 2,
        },
        noBorder: {
            border: 'none'
        },
        itemsHeader: {
            display: 'none',
            paddingBottom: theme.spacing.unit * 2,
            [theme.breakpoints.up('md')]: {
                display: 'flex'
            }
        },
        CartFooter: {
            paddingTop: theme.spacing.unit * 2,
            width: '100%',
        },
        CartFooterButton: {
            float: 'right'
        }, CartFooterTotal: {
            float: 'left'
        },

        headerGridItem: {
            width: theme.spacing.unit * 10,
            textAlign: 'center'
        },
        avatar: {
            width: "auto",
            height: theme.spacing.unit * 10,
            borderRadius: theme.spacing.unit / 2
        },
        textField: {
            margin: 0,
            width: theme.spacing.unit * 10
        },
        deleteButton: {
            marginTop: theme.spacing.unit * 1
        },
        grow: {
            flex: 1
        }
    })
)
