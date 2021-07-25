<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
            <li>
                <a href="https://www.wantedlab.com/">
                    <img alt="lang" src="https://img.shields.io/badge/WantedLab-Data_Engineer-3B68F9">
                </a>
            </li>
        </ul>

        <ul>
            <li v-for="tag in tags" :key="tag">
                <a :href="tag.href">
                    <img :alt="tag.value" :src="`https://img.shields.io/badge/${tag.name}-${tag.value}-${tag.color}`">
                </a>
            </li>
        </ul>

        <ul>
            <li>
                <a href="https://github.com/jongwony?tab=repositories" target="_blank" rel="noopener">
                    <img src="https://github-readme-stats.vercel.app/api?username=jongwony&show_icons=true&count_private=true"
                         alt="jongwony" height="140"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/jongwony" target="_blank" rel="noopener">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jongwony&layout=compact&hide=html,css,asp,php&langs_count=5"
                         alt="top_langs" height="140"/>
                </a>
            </li>
        </ul>

        <h3>Speaker</h3>
        <ul>
            <li v-for="tag in speakers" :key="tag">
                <a :href="tag.href">
                    <img :alt="tag.value" :src="`https://img.shields.io/badge/${tag.name}-${tag.value}-${tag.color}`">
                </a>
            </li>
        </ul>

        <h3>Bio</h3>
        <ul>
            <li v-for="hobby in bio" :key="hobby">
                <a :href="'https://' + hobby + '.jongwony.com'" target="_blank" rel="noopener">
                    <img alt="home"
                         :src="'https://github-readme-stats.vercel.app/api/pin/?username=jongwony&repo=' + hobby">
                </a>
            </li>
        </ul>

        <h3>Contact</h3>
        <ul>
            <li><a href="mailto:lastone9182@gmail.com"><img class="logo" alt="Email" src="@/assets/email.webp"></a></li>
            <li><a href="https://open.kakao.com/o/sAAucdcd"><img class="logo" alt="Kakao" src="@/assets/kakao.webp"></a>
            </li>
            <li><a href="https://instagram.com/jongwony_"><img class="logo" alt="Instagram"
                                                               src="@/assets/instagram.webp"></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String,
        },
        data() {
            return {
                bio: ['home', 'fingerstyle'],
                speakers: [
                    {
                        href: 'https://www.youtube.com/watch?v=c03CTEvAreY',
                        name: 'Unity_Dev_Weeks',
                        value: 'AI_Brain_Room',
                        color: 'green',
                    },
                    {
                        href: 'https://www.wanted.co.kr/events/wantedcon18',
                        name: 'Wanted_Data_Conference',
                        value: '우리팀에게_딱_맞는_도구와_문화_만들기',
                        color: '3B68F9',
                    },
                    {
                        href: 'https://github.com/awskrug/cli-group',
                        name: 'AWS_KRUG_CLI_Group',
                        value: 'CLI_스크립트로_외부_API_붙여보기',
                    },
                    {
                        href: 'https://github.com/awskrug/database-group/blob/master/resources/20190924/aws_krug_database_20190924.pdf',
                        name: 'AWS_KRUG_Database_Group',
                        value: 'Aurora_MySQL을_위한_조그마한_팁'
                    },
                    {
                        href: 'https://github.com/awskrug/cli-group',
                        name: 'AWS_KRUG_CLI_Group',
                        value: '나만의_CLI_만들기',
                    },
                    {
                        href: 'https://www.youtube.com/watch?v=a8U54J_Os24',
                        name: 'GDG_Incheon_2017',
                        value: 'Python_/_Mysql을_활용한_대용량_데이터_수집',
                        color: '3572B0'
                    },
                ],
                tags: [
                    {
                        href: 'https://kreditjob.com',
                        name: '',
                        value: 'Kreditjob',
                        color: 'd63462',
                    },
                    {
                        href: 'https://www.slideshare.net/Jongwon_/presentations',
                        name: '',
                        value: 'SlideShare',
                        color: '0B81B2',
                    },
                ],
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .logo {
        width: 32px;
        height: 32px;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
