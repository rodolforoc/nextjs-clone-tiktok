import Layout from '../components/layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';

function Index({ posts=[] }) {
    return <Layout>
        <Feed posts={posts}></Feed>
        <Suggestions></Suggestions>
    </Layout>;
}

export async function getServerSideProps(context) {
    //
    const data = [
        {
        id: 1,
        author: {
            id: 1,
            avatar:
            'https://sf16-passport-va.ibytedtos.com/img/user-avatar-musically/b518bd2f6be5f15d2a9be8268ddbadbb~120x256.image',
            name: 'Rodolfo Caetano',
            username: 'rodolforoc',
        },
        description: '',
        tags: [{ title: '#youtube' }, { title: '//#endregionclone' }],
        songName: 'WAP (feat. Megan Thee Stallion) - Cardi B',
        videoUrl:
            'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c002/66c1697a51f84156b93729b541fe2b39/?a=1988&br=2026&bt=1013&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610095884&l=202101080251160101890530162123D9C2&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=anNpOm1rN3UzdTMzOjczM0ApODdkZjw7OTs5NzNkNjdkNmc0ZjNlMHI2X3NfLS1eMTZzczEzX2JfL2AxMWAyY2JgMC86Yw%3D%3D&signature=d9bab962b7ff9fd3ef1e8e6d67c37062&tk=tt_webid_v2&vl=&vr=',
        likes: 450,
        comments: 10,
        replies: 50,
        },
        {
        id: 2,
        author: {
            id: 1,
            avatar:
            'https://sf16-passport-va.ibytedtos.com/img/user-avatar-musically/b518bd2f6be5f15d2a9be8268ddbadbb~120x256.image',
            name: 'Rodolfo Caetano',
            username: 'rodolforoc',
        },
        description: 'Vídeo teste para clone de interface',
        tags: [{ title: '#youtube' }, { title: '#clone' }],
        songName: 'Tampa Curhat Beat - TampaCurhat',
        videoUrl:
            'https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-ve-0068c003/56dfc128b4be4c508d5d6b706ee8b0f7/?a=1988&br=1616&bt=808&cd=0%7C0%7C0&cr=0&cs=0&dr=0&ds=3&er=&expire=1610095887&l=202101080251160101890530162123D9C2&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=ajVuN2U8aHR4djMzNDczM0ApMzVmaTk5ODxoNzs7OTc8Z2c0LWphXmRoYi1fLS1fMTZzczMuNS8yYzUvMDMvMjQwXy46Yw%3D%3D&signature=7cf3fb8dfaafcc8394a28ae662fc0923&tk=tt_webid_v2&vl=&vr=',
        likes: 950,
        comments: 32,
        replies: 70,
        },
    ];
      
    return {
        props: {
            posts: data,
        },
    };
}

export default Index;