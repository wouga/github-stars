import React from 'react';

import { makeStyles, CardMedia } from '@material-ui/core';

import { IGithubItem } from './repo';

interface IMedia {
    item: IGithubItem;
}

const useStyles = makeStyles(() => ({
    cardMedia: {
        paddingTop: '56.25%',
    },
}));

export const Media: React.FC<IMedia> = ({ item }) => {
    const classes = useStyles();

    return <CardMedia className={classes.cardMedia} image={item.owner.avatar_url} title={item.owner.login} />;
};
