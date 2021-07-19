import { GetServerSideProps } from "next"
import { ReactElement } from "react"
import NewLetter from "../components/NewLetter/NewLetter"
import PostList from "../components/PostList/PostList"
import Global from "../Global"
import { PostItem } from "../types/Post.types"

interface Props {
  data: PostItem[]
}

const HomePage = (props: Props): ReactElement => {
  const { data } = props;
  return <>
    {/* <section className="section masonry-layout pt-45">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card-columns">
              <PostCardLG />
              <PostCardLG />
              <PostCardLG />
              <PostCardLG />
              <PostCardLG />
            </div>
          </div>
        </div>
      </div>
    </section > */}
    <PostList list={data} />
    {/* <NewLetter /> */}
  </>
}


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(Global.API_URL + '/posts?_sort=created_at:DESC&_limit=20');
  const data: PostItem[] = await res.json()

  return {
    props: {
      data,
    },
  }
}


export default HomePage;
