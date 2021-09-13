import { GetServerSideProps } from "next"
import { ReactElement } from "react"
import CategoryList from "../components/CategoryList/CategoryList"
import PostList from "../components/PostList/PostList"
import SidePanel from "../components/SidePanel/SidePanel"
import Global from "../Global"
import { PostItem } from "../types/Post.types"
import { ScrapePost } from "../types/ScrapeType"

interface Props {
  data: PostItem[];
  videos: ScrapePost[];
  music: ScrapePost[];
  posts: ScrapePost[];
}

const HomePage = (props: Props): ReactElement => {
  const {
    data,
    videos,
    music,
    posts
  } = props;
  return <>
    <section className='blog-grid'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8'>
            <CategoryList
              list={data}
              heading='Category'
              headingValue='New'
            />
            {/* <CategoryList
              list={videos}
              scraped
              heading='Category'
              headingValue='Videos'
            />
            <CategoryList
              list={music}
              scraped
              heading='Category'
              headingValue='Music'
            />
            <CategoryList
              list={posts}
              scraped
              heading='Category'
              headingValue='Article'
            /> */}
          </div>
          <SidePanel />
        </div>
      </div>
    </section>
    {/* <PostList list={data} /> */}
  </>
}


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(Global.API_URL + '/posts?_sort=created_at:DESC&_limit=20');
  const data: PostItem[] = await res.json();

  // const netRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/scrape/category/videos`);
  // const videos: ScrapePost[] = await netRes.json();

  // const musicRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/scrape/category/music`);
  // const music: ScrapePost[] = await musicRes.json();

  // const postsRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/scrape/category/posts`);
  // const posts: ScrapePost[] = await postsRes.json();

  return {
    props: {
      data,
      // videos,
      // music,
      // posts
    },
  }
}


export default HomePage;
