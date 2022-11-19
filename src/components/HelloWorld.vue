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

        <h3>Bio</h3>
        <ul>
            <li v-for="hobby in bio" :key="hobby">
                <a :href="'https://' + hobby + '.jongwony.com'" target="_blank" rel="noopener">
                    <img alt="home"
                         :src="'https://github-readme-stats.vercel.app/api/pin/?username=jongwony&repo=' + hobby">
                </a>
            </li>
        </ul>

        <h3>Speaker</h3>
        <ul>
          <li v-for="tag in speaker" :key="tag">
            <a :href="tag.href">
              <img :alt="tag.value" :src="`https://img.shields.io/badge/${tag.name}-${tag.value}-${tag.color}`">
            </a>
            <p class="description" v-if="tag.description">{{tag.description}}</p>
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
                bio: null,
                speaker: null,
                tags: null,
            }
        },
        created() {
            fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/bio.json")
                .then(r => r.json())
                .then(json => {
                    this.bio=json;
                }
            );
            fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/speaker.json")
                .then(r => r.json())
                .then(json => {
                    this.speaker=json;
                }
            );
            fetch("https://raw.githubusercontent.com/jongwony/jongwony/main/src/data/tags.json")
                .then(r => r.json())
                .then(json => {
                    this.tags=json;
                }
            );
        }
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

    .description {
        font-size: 12px;
    }

    a {
        color: #42b983;
    }
</style>
