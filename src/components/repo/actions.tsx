import React, { useMemo } from 'react';

import { CardActions, Button, ButtonGroup } from '@material-ui/core';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import CallSplitIcon from '@material-ui/icons/CallSplit';

import { PointerEvents } from '../shared/pointer-events';

interface IActions {
    stars: number;
    forks: number;
}

export const fortmatNumber = (num: number): string => {
    const abs = Math.abs(num);
    const sign = Math.sign(num);
    return abs > 999 ? `${(sign * (abs / 1e3)).toFixed(1)}k` : (sign * abs).toString();
};

export const Actions: React.FC<IActions> = React.memo(({ stars, forks }) => {
    const stargazers_count = useMemo(() => fortmatNumber(stars), [stars]);
    const forks_count = useMemo(() => fortmatNumber(forks), [forks]);

    return (
        <PointerEvents disabled>
            <CardActions>
                <ButtonGroup size="small">
                    <Button startIcon={<CallSplitIcon />}>Forks</Button>
                    <Button>{forks_count}</Button>
                </ButtonGroup>
                <ButtonGroup size="small">
                    <Button startIcon={<StarBorderIcon />}>Stars</Button>
                    <Button>{stargazers_count}</Button>
                </ButtonGroup>
            </CardActions>
        </PointerEvents>
    );
});
