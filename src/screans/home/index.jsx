import * as React from 'react';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

import FloatingActionButton from '../../components/floatingActionButton';
import Header from '../../components/header';

export default function Home() {
  return (
    <>
      <Header />
      <FloatingActionButton />
    </>
  );
}