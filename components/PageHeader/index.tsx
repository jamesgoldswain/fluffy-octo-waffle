/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from '@emotion/core'
import { styles } from './styles';

interface IPageHeader {
    title: string | undefined
    text: string
}

const PageHeader = ({ title, text }: IPageHeader) => {
    return (
        <div css={styles}>
          { title && <h1 dangerouslySetInnerHTML={ {__html: title } } /> }
          { text && <p>{text}</p> }
        </div>
      );
}

export default PageHeader;