---
name: Notes
slug: notes
---

# Notes

[11ty documentation](https://www.11ty.io)

## Debug
[Debug documentation info](https://github.com/11ty/11ty.io/blob/master/docs/debugging.md)

```
DEBUG=Eleventy* eleventy > log.txt
```

## Pagination
Per accedere al contenuto delle pagination

```html
{% raw %}
{%- for item in pagination.items %}
  {{ item.templateContent }}
  <br>
  <br>
  {{ item.data.modifier }}
  <br>
  {{ item.data.componentFile }}
{% endfor -%}
{% endraw %}
```

## Including template tags in markdown as sample
Wrap the code with `{% raw %} {% raw %} {% endraw %} {% endraw %}`.

## Including template with syntax highlight (using PrismJS)
Wrap the code with 'highlight' and set type (es. css, html, js)

```html
{% raw %}
{% highlight "css" %}
...
{% endhighlight %}
{% endraw %}
```

[PrismJS themes](https://github.com/PrismJS/prism-themes)

## Nunjucks

You can tell the engine to strip all leading or trailing whitespace by adding a minus sign (-) to the start or end block or a variable.
[Nunjucks whitespace control](https://mozilla.github.io/nunjucks/templating.html#whitespace-control)

```html
{% raw %}
{% for i in [1,2,3,4,5] -%}
  {{ i }}
{%- endfor %}
{% endraw %}
```
