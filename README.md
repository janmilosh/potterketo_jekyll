# Potterketo Website

Built with [Jekyll](http://jekyllrb.com/) using Ruby 3.1.2.

Serve for local development: `"bundle exec jekyll serve --livereload"` 

To deploy:
1. Push commits to GitHub on branch `git push origin <branchname>`
2. Create a Pull Request, and if changes are satisfactory, click "Merge pull request".
3. The site is hosted on Digital Ocean. A build and deploy will be automatically triggered by the PR merge.
4. Update local main branch `git checkout main` `git pull origin main`
5. Delete old branch `git branch -d <branchname>`
