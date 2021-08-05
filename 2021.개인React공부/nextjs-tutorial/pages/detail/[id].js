import Axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";

const Post = ({ item, name }) => {

  const router = useRouter();

  if(router.isFallback); // isFallback static으로 처리되지 않은 page
  {
    return (
      <div style={{padding: "100px 0"}}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name}
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '740'}},
      { params: { id: '730'}},
      { params: { id: '729'}},
    ],
    fallback: true, // true = 해당 page 첫번째 접속 시 SSR 두번째 접속 시 저장된 static page, false = 없는 page는 404
    // dev 모드에서는 params로 주어진 page 이외는 static으로 저장 x 
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data, // Post의 item으로 넘겨줌
      name: process.env.name
    },
  };
}

/*
Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)
1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)
차이점은 언제 html 파일을 생성하는가
[정적 생성]
- 프로젝트가 빌드하는 시점에 html파일들이 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- getStaticProps / getStaticPaths
[서버사이드 렌더링]은 매 요청마다 html 을 생성
- 항상 최신 상태 유지
- getServerSideProps
 */

/*
다이나믹 라우트의 경우
어떤 id가 들어올지 모르기 때문에 모든 제품들을 위해서 static page를 만들 수는 없다
갯수가 한정적이고 id 리스트를 알 수 있다면 가능 => getStaticPath
 */