/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import Head from 'next/head';
import { styles } from './styles';
import PageHeader from '../../components/PageHeader';
import * as React from 'react'
const PageTemplate = ({
  main,
  ...props
}: any) => {
  return (
    <>
      <Head>
        <title>Dominoji 🙂</title>
      </Head>

      <div css={styles(props.theme)}>
          <PageHeader title='Welcome to Dominoji!' text='Where all your emoji domino dreams can come true ...' />
          <main>{main}</main>
      </div>
    </>
  );
};

export default withTheme(PageTemplate);

