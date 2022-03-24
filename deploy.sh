npm run build
cd dist
git init
echo www.jongwony.com > CNAME
git add -A
git commit -m 'deploy'
git push -f https://github.com/jongwony/jongwony main:gh-pages
