import React, { FC, useContext, useEffect, useState } from 'react';
// import { captureError } from '../utils';
import { UserContext } from '../services/providers';

export const HomePage: FC = () => {
  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);

  // todo: reimplement
  // useEffect(() => {
  //   api //get and set the two path lists
  //     .getAllPaths()
  //     .then((retrieved) => {
  //       setPaths(retrieved);
  //
  //       const tempPaths: Path[] = retrieved.filter((path) => {
  //         return path.owner.username === user?.username;
  //       });
  //       setYourPaths(tempPaths);
  //
  //       setLoading(false);
  //     })
  //     .catch(captureError);
  // }, [user]);

  useEffect(() => {
    // todo: api call
    setLoading(false);
  }, [user]);

  return (
    <>
      <h1 className={'margin-top-bottom'}>Welcome to application</h1>
      <br />
      {!loading && <h2>Not loading and logged in</h2>}
    </>
  );
};
