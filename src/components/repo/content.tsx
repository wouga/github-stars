import React from 'react';

import { Typography, CardContent, Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    cardContent: {
        flexGrow: 1,
    },
}));

interface IContent {
    url: string;
    name: string;
    desc: string;
}

export const Content: React.FC<IContent> = React.memo(({ url, name, desc }) => {
    const classes = useStyles();
    return (
        <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                <Link color={'textPrimary'} href={url}>
                    {name}
                </Link>
            </Typography>
            <Typography>{desc}</Typography>
        </CardContent>
    );
});
