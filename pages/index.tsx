import { ReactElement } from "react"
import PostCardLG from "../components/EachPost/PostCardLG"
import NewLetter from "../components/NewLetter/NewLetter"
import PostList from "../components/PostList/PostList"

const HomePage =  (): ReactElement => {
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
    <PostList />
    <NewLetter />
  </>
}

export default HomePage;
