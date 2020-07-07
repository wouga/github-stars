import React from 'react';

import { Grid, Container, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import { useRepos } from '../hooks/useRepos';
import { Repo } from './repo';

const useStyles = makeStyles(({ spacing }) => ({
    container: {
        paddingTop: spacing(4),
        paddingBottom: spacing(4),
    },
    subheader: {
        marginBottom: spacing(2),
    },
}));

export const Repos = () => {
    const classes = useStyles();
    const { data, isLoading, error, hasItems, infoLang } = useRepos();

    return (
        <>
            {isLoading && <LinearProgress color="secondary" />}
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h4" gutterBottom>
                    Github Repositories
                </Typography>
                {infoLang && (
                    <Typography gutterBottom variant="subtitle2" className={classes.subheader}>
                        Category: {infoLang.text}
                    </Typography>
                )}
                {error && <Alert severity="error">{error}</Alert>}

                {!isLoading && !hasItems && !error && <Alert severity="warning">no items to display</Alert>}

                <Grid container spacing={4}>
                    {!isLoading && data?.items?.map((item) => <Repo item={item} key={item.id} />)}
                </Grid>
            </Container>
        </>
    );
};
