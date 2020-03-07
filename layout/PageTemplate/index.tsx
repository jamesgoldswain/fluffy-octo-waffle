/** @jsx jsx */
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { styles } from './styles';
import PageHeader from '../../components/PageHeader';

const PageTemplate = ({
  main,
  ...props
}: any) => {
  return (
    <>
      <Head>
        <title>Dominos</title>
      </Head>

      <div css={styles(props.theme)}>
          <PageHeader title='hi' text='oooh' />
          <main>{main}</main>
      </div>
    </>
  );
};

export default withTheme(PageTemplate);

PageTemplate.propTypes = {
  main: PropTypes.node.isRequired,
};
