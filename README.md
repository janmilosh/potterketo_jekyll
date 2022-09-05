# Potterketo Website

Built with [Jekyll](http://jekyllrb.com/).

Build for production: `"bundle exec jekyll build --baseurl=''"`<br>
Build for gh-pages: `"bundle exec jekyll build  --baseurl='potterketo_jekyll'"`<br>
Serve for local development: `"bundle exec jekyll serve --livereload"` 

To deploy:
1. Push commits to GitHub on branch `git push origin <branchname>`
2. Create PR and merge commits
3. Update local main branch `git checkout main` `git pull origin main`
4. Delete old branch `git branch -d <branchname>`
5. Deploy to remote server `./deploy`
