<template>
    <div class="hello">
        <div class="px-4 py-5 my-5 text-center">
            <h1 class="display-4 fw-bold">{{ msg }}</h1>
            <p class="lead mb-4">안녕하세요. 제 커리어를 소개합니다 🙌</p>

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
                        <img :alt="tag.value"
                            :src="`https://img.shields.io/badge/${tag.name}-${tag.value}-${tag.color}`">
                    </a>
                </li>
            </ul>
        </div>


        <div class="b-example-divider"></div>

        <div class="px-4 py-5 my-5 text-center">
            <h3 class="display-6 fw-bold">Bio</h3>
            <p class="lead mb-4">🧑‍💻 사이드 프로젝트를 해 본 것들이에요</p>
            <ul>
                <li v-for="hobby in bio" :key="hobby">
                    <a :href="'https://' + hobby + '.jongwony.com'" target="_blank" rel="noopener">
                        <img alt="home"
                            :src="'https://github-readme-stats.vercel.app/api/pin/?username=jongwony&repo=' + hobby">
                    </a>
                </li>
            </ul>
        </div>

        <div class="b-example-divider"></div>

        <div class="px-4 py-5 my-5 text-center">
            <h3 class="display-6 fw-bold">Speaker</h3>
            <p class="lead mb-4">🗣️ 스피커로 활동한 이력입니다. 발표 자료를 아카이빙 해봤어요. 클릭에 광고가 있을 수 있습니다 😉</p>
        </div>

        <div v-for="(tag, index) in speaker" :key="tag" class="px-4 my-5">
            <div class="col-lg-6 mx-auto speaker">
                <h3 class="display-8 fw-bold">{{ tag.value }}</h3>
                <p class="subtitle">
                    <img class="favicon" :src="favicon(tag.event)" alt="event favicon" style="margin-right: 4px; margin-bottom: 2px;">
                    <a class="subtitle" v-if="tag.event" :href="tag.event">{{ tag.name }}</a>
                    <span style="opacity:0.3"> | </span> {{ tag.date }}
                    <br>
                </p>
                <p class="lead mb-4 description" v-if="tag.description">{{ tag.description }}</p>
                <a v-if="tag.href" :href="tag.href" class="btn btn-lg btn-primary px-4 attachment" role="button">
                    <img style="margin-right:4px;" src="@/assets/downloads.svg" alt="download_svg">
                    발표자료 보러가기
                </a>
                <hr v-if="index !== Object.keys(speaker).length - 1" class="my-5">
            </div>
        </div>

        <div class="b-example-divider"></div>

        <div class="px-4 py-5 my-5 text-center">
            <h3 class="display-6 fw-bold">GitHub</h3>
            <p class="lead mb-4">소스 코드 구경하러 놀러오세요 :)</p>
            <ul>
                <li>
                    <a href="https://github.com/jongwony?tab=repositories" target="_blank" rel="noopener">
                        <img src="https://github-readme-stats.vercel.app/api?username=jongwony&show_icons=true&count_private=true"
                            alt="jongwony" height="140" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/jongwony" target="_blank" rel="noopener">
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jongwony&layout=compact&hide=html,css,asp,php&langs_count=5"
                            alt="top_langs" height="140" />
                    </a>
                </li>
            </ul>
        </div>

        <div class="b-example-divider"></div>

        <div class="px-4 py-5 my-5 text-center">
            <h3 class="display-6 fw-bold">Contact</h3>
            <p class="lead mb-4">☕️ 커피 챗 한 번 해요 😄</p>
            <ul>
                <li><a href="mailto:lastone9182@gmail.com"><img class="logo" alt="Email" src="@/assets/email.webp"></a>
                </li>
                <li><a href="https://open.kakao.com/o/sAAucdcd"><img class="logo" alt="Kakao"
                            src="@/assets/kakao.webp"></a>
                </li>
                <li><a href="https://instagram.com/jongwony_"><img class="logo" alt="Instagram"
                            src="@/assets/instagram.webp"></a></li>
            </ul>
        </div>
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
            bio: null,
            speaker: null,
            tags: null,
        }
    },
    created() {
        fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/bio.json")
            .then(r => r.json())
            .then(json => {
                this.bio = json;
            }
            );
        fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/speaker.json")
            .then(r => r.json())
            .then(json => {
                this.speaker = json;
            }
            );
        fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/tags.json")
            .then(r => r.json())
            .then(json => {
                this.tags = json;
            }
            );
    },
    methods: {
        get_hostname: function (url) {
            return new URL(url).hostname
        },
        favicon: function (url) {
            return `https://icons.duckduckgo.com/ip2/${this.get_hostname(url)}.ico`
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.favicon {
    width: 16px;
    height: 16px;
}

.subtitle {
    font-size: 14px;
    color: #737680;
}

.description {
    font-size: 16px;
}

.speaker {
    text-align: left;
}

.attachment {
    /* button */
    box-sizing: border-box;

    background: #E3EEFF;
    border: 1px solid rgba(105, 165, 255, 0.3);
    border-radius: 8px;
    padding-top: 0.9em;
    padding-bottom: 0.9em;

    font-weight: 600;
    font-size: 15px;

    color: #2178FC;
}

.logo {
    width: 32px;
    height: 32px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}
</style>
