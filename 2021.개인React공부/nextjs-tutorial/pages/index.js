import axios from 'axios';
import Head from 'next/head'
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/component/ItemList';
import styles from '../styles/Home.module.css'

export default function Home({list}) {

  return (  
            <div>
              <Head>
                <title> Home | 고석준 </title>
                <meta name="description" content="고석준"></meta>
              </Head>
              <Header as="h3" style={{paddingTop: 40}}>베스트 상품</Header>
              <Divider />
              <ItemList list={list.slice(0,9)}></ItemList>
              <Header as="h3" style={{paddingTop: 40}}>신상품</Header>
              <Divider />
              <ItemList list={list.slice(9)}></ItemList>
            </div>
            
          );
}

export async function getStaticProps() {

  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}