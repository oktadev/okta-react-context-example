import React, { Fragment } from 'react';
import { startCase } from 'lodash';

import Auth from './Auth';
import './Profile.css';

const ProfilePage = ({ user }) => {
  if (!user) return 'Loading...';

  return (
    <dl>
      {Object.keys(user).sort().map(key => (
        <Fragment key={key}>
          <dt>{startCase(key)}</dt>
          <dd>{key === 'updated_at' ? new Date(user[key] * 1000).toString() : user[key]}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

export default () => <Auth>{ProfilePage}</Auth>;
