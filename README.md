# My simple Hugo theme
Learn and start from [here](https://www.zeolearn.com/magazine/develop-a-theme-for-hugo)

New theme:

```sh
hugo new theme my-hugo-theme
```

## index.md and _index.md

* index.md: leaf
* _index.md: branch
    * autoindex
        * true: fixed format
        * false: use contents in _index.md
    * islist
        * true: disable toc, disable head anchor/index

三个需求：
1. leaf page
2. branch page with autoindex
3. branch page but is article

| content type | page type | content        | params    | template file         | example                                |
|--------------|-----------|----------------|-----------|-----------------------|----------------------------------------|
| list         | branch    | directory list | autoindex | /_default/list.html   | contents/blogs/_index.md               |
| article      | leaf      | markdown       |           | /_default/single.html | contents/blogs/blah.md                 |
| article      | branch    | markdown       |           | /_default/list.html   | contents/blogs/blah/{_index.md,sub.md} |
| list         | branch    | markdown       | islist    | /_default/list.html   | contents/_index.md                     |

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
### self write list
```md
---
title: Ben's Blog
islist: true
---

## [Blogs](blogs)
## [Study Notes](study_notes)
## [Tips](tips)
## [About](about)
```

### article list
```
---
title: "Blogs"
autoindex: true
---
```


## Resource files

These resources are recommended to be modified:

```
/static/avatar.jpg
/content/about/index.md
/content/donate/index.md
```

