import Head from 'next/head';

export default function Title(props) {

  const { titleName } = props;

  return (
    <Head>
      <title>{ titleName }</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}