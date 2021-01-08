import Layout from '../components/layout';
import Feed from '../components/Feed';

function Index({ posts=[] }) {
    return <Layout>
        <Feed posts={posts}></Feed>
        {/* <Suggestions></Suggestions> */}
    </Layout>;
}

export default Index;