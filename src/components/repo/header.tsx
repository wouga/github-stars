import React from 'react';

import { CardHeader, Avatar, Link } from '@material-ui/core';

import { IGithubItem } from './repo';

interface IHeader {
    item: IGithubItem;
}

export const Header: React.FC<IHeader> = React.memo(({ item }) => {
    return (
        <CardHeader
            avatar={<Avatar src={item.owner.avatar_url} />}
            title={
                <Link color={'textPrimary'} href={item.owner.html_url}>
                    {item.owner.login}
                </Link>
            }
            subheader={
                <Link color={'textSecondary'} href={item.html_url}>
                    {item.full_name}
                </Link>
            }
        />
    );
});
