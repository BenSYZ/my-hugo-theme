# My simple Hugo theme
Learn and start from [here](https://www.zeolearn.com/magazine/develop-a-theme-for-hugo)

New theme:

```sh
hugo new theme my-hugo-theme
```

## index.md and _index.md

* index.md: leaf
* _index.md: branch
    * article
        * true: use contents in _index.md
        * false: fixed format
    * article_list
        * true:
            + set article to be true
            + disable toc, disable head anchor/index

四个需求：

| content type | page type | content        | params       | template file         | example                                |
|--------------|-----------|----------------|--------------|-----------------------|----------------------------------------|
| list         | branch    | directory list |              | /_default/list.html   | contents/blogs/_index.md               |
| article      | leaf      | markdown       |              | /_default/single.html | contents/blogs/blah.md                 |
| article      | branch    | markdown       | article      | /_default/list.html   | contents/blogs/blah/{_index.md,sub.md} |
| article_list | branch    | markdown       | article_list | /_default/list.html   | contents/_index.md                     |

## parameters:
```toml
# hugo.toml
[params]
  [params.filing]
  ICP="xxx"     # ICP 备案号
  GA="xxx"      # 公安备案号
  GA_code="xxx" # 纯数字的公安备案号(用于网页跳转)
```

## markdown params
### article list
```md
---
title: Ben's Blog
article_list: true
---

## [Blogs](blogs)
## [Study Notes](study_notes)
## [Tips](tips)
## [About](about)
```

### article list


## Resource files

These resources are recommended to be modified:

```
/static/avatar.jpg
/content/about/index.md
/content/donate/index.md
```

