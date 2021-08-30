# Eleventy styleguide

Custom pattern library tool using 11ty static site generator.

| \                | \                                                                                                                                                                        |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Deploy status    | [![Netlify Status](https://api.netlify.com/api/v1/badges/4df8851d-b810-4572-806c-39109f68caed/deploy-status)](https://app.netlify.com/sites/eleventy-styleguide/deploys) |
| Deploy preview   | https://eleventy-styleguide.netlify.app/                                                                                                                                 |
| Project typology | Tool                                                                                                                                                                     |

![project preview 1](docs/project-preview-1.png)
![project preview 2](docs/project-preview-2.png)

## 🔥 Tech stack

| Purpose               | Technology   |
|:----------------------|:-------------|
| Templating            | Nunjucks     |
| Styling               | SCSS + BEMIT |
| Documentation         | Markdown     |
| Static Site Generator | 11ty         |

## 🌊 Run development mode

```shell
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run dev
```

Debug 11ty build

```shell
npm run debug
```

## 🧳 Build setup

```shell
# build for production
npm run build
```

### 🌿 Branches

| Branch name     | Use                       |
|:----------------|:--------------------------|
| `main`          | production                |
| `hotfix/5-temp` | NOT WORKING, check issues |

Note that component showing HTML raw source code does not work properly:

```html
<iframe
  srcdoc="../../../iframes/{{ slug }}.html"
```
