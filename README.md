# My simple Hugo theme
Learn and start from [here](https://www.zeolearn.com/magazine/develop-a-theme-for-hugo)

New theme:
```sh
hugo new theme my-hugo-theme
```

## My own notes

/content/post: Its `.Title` is  Posts

Theme priority:
* /layouts/
* /theme/ben-theme/layouts/post/single.html
* /theme/ben-theme/layouts/_default/single.html

## parameters:
```yaml
params:
  record_number: 备案号
  # root list item
  selected_item_list: "blogs:Blogs;tips:Tips;study_notes:Study Notes;about:About"
```

## Resource files

```
/static/avatar.jpg
/content/about/index.md
/content/donate/index.md
```

